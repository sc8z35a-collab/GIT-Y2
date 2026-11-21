import * as THREE from 'three';

/**
 * KHDR 1.2 hyper — 2D Oklab gamut-boundary LUT ("Cmax(L, h)").
 *
 * For every Oklab lightness L and hue h it stores the largest chroma that is still inside the target
 * display gamut (sRGB / Rec.709 or Display-P3). K-Filmic v3 uses it to compress out-of-gamut colours at
 * constant perceptual hue and lightness (research: docs/10, E3 — a 128x256 R16F table has a mean relative
 * error of 0.03% and p99 0.65%, far better than baking the whole display transform into a 3D LUT).
 *
 * Layout: width = hue (256, wraps), height = lightness (128). Texel centres:
 *   h_i = -PI + (i + 0.5) * 2PI / 256,   L_j = (j + 0.5) / 128.
 */
export type KhdrGamut = 'srgb' | 'p3';

export const GAMUT_LUT_HUES = 256;
export const GAMUT_LUT_LIGHTNESS = 128;

// Linear sRGB (Rec.709 primaries) -> linear Display-P3
const M709_TO_P3 = [
  0.82246197, 0.17753803, 0.0,
  0.0331942, 0.9668058, 0.0,
  0.01708263, 0.07239744, 0.91051993,
];

function oklabToLinear709(L: number, a: number, b: number, out: Float64Array): void {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;
  out[0] = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  out[1] = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  out[2] = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
}

function insideGamut(L: number, C: number, ch: number, sh: number, gamut: KhdrGamut, tmp: Float64Array): boolean {
  oklabToLinear709(L, C * ch, C * sh, tmp);
  let r = tmp[0];
  let g = tmp[1];
  let b = tmp[2];
  if (gamut === 'p3') {
    const pr = M709_TO_P3[0] * r + M709_TO_P3[1] * g + M709_TO_P3[2] * b;
    const pg = M709_TO_P3[3] * r + M709_TO_P3[4] * g + M709_TO_P3[5] * b;
    const pb = M709_TO_P3[6] * r + M709_TO_P3[7] * g + M709_TO_P3[8] * b;
    r = pr;
    g = pg;
    b = pb;
  }
  const eps = 1e-5;
  return r >= -eps && g >= -eps && b >= -eps && r <= 1 + eps && g <= 1 + eps && b <= 1 + eps;
}

const lutCache = new Map<KhdrGamut, THREE.DataTexture>();

/** Builds (once per gamut, ~10-30 ms on a phone CPU) the R16F gamut-boundary texture. */
export function getGamutBoundaryLut(gamut: KhdrGamut): THREE.DataTexture {
  const cached = lutCache.get(gamut);
  if (cached) return cached;

  const W = GAMUT_LUT_HUES;
  const H = GAMUT_LUT_LIGHTNESS;
  const data = new Uint16Array(W * H);
  const tmp = new Float64Array(3);
  for (let j = 0; j < H; j++) {
    const L = (j + 0.5) / H;
    for (let i = 0; i < W; i++) {
      const h = -Math.PI + ((i + 0.5) * 2 * Math.PI) / W;
      const ch = Math.cos(h);
      const sh = Math.sin(h);
      let lo = 0;
      let hi = 0.5;
      for (let it = 0; it < 22; it++) {
        const mid = 0.5 * (lo + hi);
        if (insideGamut(L, mid, ch, sh, gamut, tmp)) lo = mid;
        else hi = mid;
      }
      // 2% safety margin keeps bilinear overshoot near the gamut cusp inside the gamut
      data[j * W + i] = THREE.DataUtils.toHalfFloat(lo * 0.98);
    }
  }

  const tex = new THREE.DataTexture(data, W, H, THREE.RedFormat, THREE.HalfFloatType);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.colorSpace = THREE.NoColorSpace;
  tex.needsUpdate = true;
  lutCache.set(gamut, tex);
  return tex;
}
