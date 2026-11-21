/**
 * KHDR 1.2 hyper — K-Adapt v2: dual (short-term / long-term) eye adaptation on the CPU.
 *
 * Inspired by Gran Turismo 7's physiological auto-exposure (SIGGRAPH 2025): adaptation is split into a fast,
 * narrow "pupil / neural gain" stage and a slow, wide "receptor sensitivity" stage that bounds it, so
 * a sunny beach stays slightly dazzling and the 1890 coal mine stays dark until the eyes slowly adjust —
 * instead of every frame being "perfectly exposed".
 *
 * The GPU only builds a 64-bin log-luminance histogram (gather pass, no scatter/atomics needed in WebGL2);
 * it is read back asynchronously (PBO + fence, 1-3 frames latency, zero stalls). Because the CPU owns the
 * exposure, it is applied as *pre-exposure* to every light, the sky and emissives (K-Radiance), keeping the
 * RGBA16F buffer centred around middle grey in every environment (no FP16 underflow in the mine).
 */
export const HIST_BINS = 64;
export const HIST_LOG_MIN = -18.0; // log2 of pre-exposed luminance
export const HIST_LOG_MAX = 14.0;
/**
 * The histogram target is (HIST_BINS + 1) x HIST_BANDS: each row gathers one horizontal band of the source,
 * the CPU sums the partial histograms. 65 serial gathers would occupy a single Adreno wave for the whole
 * pass (latency bound, ~3 ms at native POCO F7 resolution); 16 bands give 1,040 parallel fragments with
 * 16x shorter loops.
 */
export const HIST_BANDS = 16;
/** Longest band the shader supports: the 1/16 pyramid level is at most 128 rows (phone screens up to ~4K). */
export const HIST_MAX_ROWS_PER_BAND = 8;

export interface HistogramStats {
  valid: boolean;
  /** trimmed (40..95%) mean of log2 pre-exposed luminance */
  meanLog: number;
  p02: number;
  p50: number;
  p98: number;
  /** average glare "excess" energy (exposed units) for the far-field veil */
  veil: [number, number, number];
}

export interface AdaptationState {
  longLog: number; // log2 cd/m^2
  shortLog: number; // log2 cd/m^2
  exposure: number; // display units per cd/m^2 (== pre-exposure)
  key: number; // middle-grey target in display-relative units
  rod: number; // 0 photopic .. 1 scotopic
  meteredLog: number; // last measured scene luminance (log2 cd/m^2)
}

/**
 * Photographic reflected-light calibration (K = 12.5, saturation-based ISO): the metered average maps to
 * ~12.5% of display white, like a real camera — 0.18 made forests look over-exposed in testing.
 */
const BASE_KEY = 0.125;
const LONG_MIN = Math.log2(0.03);
/**
 * Physiological light-adaptation limit (GT7): long-term <= 900 cd/m^2 and short-term <= +2 EV above it, so
 * adaptation tops out around 3,600 cd/m^2. Sunny beaches / the 865 m summit therefore stay a little dazzling
 * (as photographers add +1 EV for snow and sand) instead of being metered down to grey.
 */
const LONG_MAX = Math.log2(900);
const SHORT_RANGE = 2.0;

/**
 * @param buf readback of the (HIST_BINS + 1) x bands target: per row, texels 0..63 = (weight, weighted sum of
 *   log2 L, 0, 1) and texel 64 = (weighted sum of the glare excess rgb, weighted sum of log2 L) — unnormalised,
 *   so partial bands simply add up. Every texel lands in exactly one (clamped) bin, so the summed bin weights
 *   are also the normaliser of the veil.
 */
export function decodeHistogram(buf: Float32Array, bands = 1): HistogramStats {
  const counts = new Float64Array(HIST_BINS);
  const sums = new Float64Array(HIST_BINS);
  const veilSum = [0, 0, 0];
  const invalid = (): HistogramStats => ({ valid: false, meanLog: 0, p02: 0, p50: 0, p98: 0, veil: [0, 0, 0] });
  const stride = (HIST_BINS + 1) * 4;
  let total = 0;
  for (let r = 0; r < bands; r++) {
    const o = r * stride;
    for (let i = 0; i < HIST_BINS; i++) {
      const c = buf[o + i * 4];
      const s = buf[o + i * 4 + 1];
      if (!Number.isFinite(c) || !Number.isFinite(s) || c < 0) return invalid();
      counts[i] += c;
      sums[i] += s;
      total += c;
    }
    const v = o + HIST_BINS * 4;
    for (let k = 0; k < 3; k++) {
      const e = buf[v + k];
      if (!Number.isFinite(e)) return invalid();
      veilSum[k] += Math.max(0, e);
    }
  }
  if (total <= 1e-6) return invalid();
  const veil: [number, number, number] = [veilSum[0] / total, veilSum[1] / total, veilSum[2] / total];
  const binW = (HIST_LOG_MAX - HIST_LOG_MIN) / HIST_BINS;
  const percentile = (q: number): number => {
    const target = q * total;
    let acc = 0;
    for (let i = 0; i < HIST_BINS; i++) {
      const next = acc + counts[i];
      if (next >= target && counts[i] > 0) {
        const f = (target - acc) / counts[i];
        return HIST_LOG_MIN + (i + f) * binW;
      }
      acc = next;
    }
    return HIST_LOG_MAX;
  };
  // trimmed mean between the 40% and 95% quantiles, using the exact in-bin means
  const lo = 0.4 * total;
  const hi = 0.95 * total;
  let acc = 0;
  let wSum = 0;
  let lSum = 0;
  for (let i = 0; i < HIST_BINS; i++) {
    const c = counts[i];
    if (c <= 0) continue;
    const a = acc;
    const b = acc + c;
    const overlap = Math.max(0, Math.min(b, hi) - Math.max(a, lo));
    if (overlap > 0) {
      const mean = sums[i] / c;
      wSum += overlap;
      lSum += overlap * mean;
    }
    acc = b;
  }
  const meanLog = wSum > 0 ? lSum / wSum : percentile(0.5);
  return { valid: true, meanLog, p02: percentile(0.02), p50: percentile(0.5), p98: percentile(0.98), veil };
}

export class DualAdaptation {
  public readonly state: AdaptationState;
  private snapPending = true;

  constructor(initialLog = Math.log2(2500)) {
    this.state = {
      longLog: initialLog,
      shortLog: initialLog,
      exposure: BASE_KEY / Math.pow(2, initialLog),
      key: BASE_KEY,
      rod: 0,
      meteredLog: initialLog,
    };
    this.updateDerived();
  }

  /** Teleport / mode switch: jump straight to the context estimate, then snap again on the next measurement. */
  public snap(contextLog: number): void {
    this.state.longLog = clamp(contextLog, LONG_MIN, LONG_MAX);
    this.state.shortLog = contextLog;
    this.snapPending = true;
    this.updateDerived();
  }

  /**
   * @param meteredLog measured scene luminance, log2 cd/m^2 (or null if no new histogram this frame)
   * @param dt seconds
   */
  public step(meteredLog: number | null, dt: number): void {
    const s = this.state;
    const h = Math.min(Math.max(dt, 0), 0.25);
    if (meteredLog !== null && Number.isFinite(meteredLog)) {
      s.meteredLog = meteredLog;
      if (this.snapPending) {
        s.longLog = clamp(meteredLog, LONG_MIN, LONG_MAX);
        s.shortLog = meteredLog;
        this.snapPending = false;
      }
    }
    const target = s.meteredLog;
    // long-term receptor adaptation (slow, wide) — brighter: 6 s, darker: 18 s (game-compressed)
    const tauLong = target > s.longLog ? 6.0 : 18.0;
    s.longLog += (clamp(target, LONG_MIN, LONG_MAX) - s.longLog) * (1 - Math.exp(-h / tauLong));
    // short-term pupil / neural gain (fast, narrow) bounded by the long-term state
    const tauShort = target > s.shortLog ? 0.35 : 1.2;
    s.shortLog += (target - s.shortLog) * (1 - Math.exp(-h / tauShort));
    s.shortLog = clamp(s.shortLog, s.longLog - SHORT_RANGE, s.longLog + SHORT_RANGE);
    this.updateDerived();
  }

  private updateDerived(): void {
    const s = this.state;
    const adaptedNits = Math.pow(2, s.shortLog);
    // night stays darker than day: gentle key reduction in mesopic/scotopic adaptation
    s.key = BASE_KEY * clamp(Math.pow(adaptedNits / 40.0, 0.1), 0.5, 1.0);
    s.exposure = s.key / adaptedNits;
    // rod share: 0 at >= 3 cd/m^2 (photopic) .. 1 at <= 0.01 cd/m^2 (scotopic)
    const lg = Math.log10(Math.max(adaptedNits, 1e-6));
    s.rod = clamp((Math.log10(3.0) - lg) / (Math.log10(3.0) - Math.log10(0.01)), 0, 1);
  }

  public get ev100(): number {
    // EV100 equivalent of the adapted luminance (K = 12.5 reflected-light meter constant)
    return Math.log2((Math.pow(2, this.state.shortLog) * 100) / 12.5);
  }
}

function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}
