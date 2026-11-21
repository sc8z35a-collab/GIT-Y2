/**
 * KHDR 1.2 hyper — GLSL ES 3.00 sources (three.js ShaderMaterial, WebGL2).
 *
 * Mobile notes (POCO F7 / Adreno 825):
 *  - every pass is a single full-screen triangle (no diagonal double-shading)
 *  - pyramid passes run in mediump (FP16 ALU = 2x throughput on Adreno); inputs are clamped beforehand
 *  - histogram / bilateral grid are tiny gather passes (no scatter, atomics or float blending required)
 */
import { HIST_BANDS, HIST_BINS, HIST_LOG_MAX, HIST_LOG_MIN, HIST_MAX_ROWS_PER_BAND } from './adaptation';

export const FULLSCREEN_TRI_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const COMMON = /* glsl */ `
float khdrLuma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float khdrIGN(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
`;

/**
 * Depth-optical atlas: SF-GTAO-Lite (R), SF-SSCS (G), crepuscular rays (B), normalised linear depth (A).
 * Algorithm carried over from KHDR 1.1 (src/core/khdrPipeline.ts); in 1.2 hyper the results are applied
 * through K-SplitLight (AO -> ambient only, contact shadow -> direct sun only).
 */
export const DEPTHFX_FRAG = /* glsl */ `
uniform sampler2D uDepthTex;
uniform vec2 uTexelSize;
uniform vec4 uProjParams;
uniform vec2 uProjScale;
uniform vec3 uSunDirView;
uniform vec2 uSunScreenPos;
uniform float uSunFacing;
uniform float uCaveFactor;
uniform float uEnableProFx;
varying vec2 vUv;
${COMMON}
float linearizeDepth(float d01) {
  float n = uProjParams.z;
  float f = uProjParams.w;
  float ndc = d01 * 2.0 - 1.0;
  return (2.0 * n * f) / max(f + n - ndc * (f - n), 1e-4);
}
vec3 uvToViewPos(vec2 uv, float linZ) {
  vec2 ndc = uv * 2.0 - 1.0;
  return vec3(ndc.x * uProjParams.x * linZ, ndc.y * uProjParams.y * linZ, -linZ);
}
void main() {
  float d0 = texture2D(uDepthTex, vUv).r;
  float linZ = linearizeDepth(d0);
  float packedZ = clamp(linZ / 60.0, 0.0, 1.0);
  float ign = khdrIGN(gl_FragCoord.xy);
  float ao = 1.0;
  float contactSh = 1.0;
  float sunShaft = 0.0;
  if (uEnableProFx > 0.5 && d0 < 0.99985 && linZ < 72.0) {
    vec3 p0 = uvToViewPos(vUv, linZ);
    vec2 dx = vec2(uTexelSize.x * 2.0, 0.0);
    vec2 dy = vec2(0.0, uTexelSize.y * 2.0);
    float zL = linearizeDepth(texture2D(uDepthTex, vUv - dx).r);
    float zR = linearizeDepth(texture2D(uDepthTex, vUv + dx).r);
    float zD = linearizeDepth(texture2D(uDepthTex, vUv - dy).r);
    float zU = linearizeDepth(texture2D(uDepthTex, vUv + dy).r);
    vec3 pX = (abs(zR - linZ) < abs(zL - linZ)) ? (uvToViewPos(vUv + dx, zR) - p0) : (p0 - uvToViewPos(vUv - dx, zL));
    vec3 pY = (abs(zU - linZ) < abs(zD - linZ)) ? (uvToViewPos(vUv + dy, zU) - p0) : (p0 - uvToViewPos(vUv - dy, zD));
    vec3 vNorm = normalize(cross(pX, pY));
    float aoFade = 1.0 - smoothstep(46.0, 72.0, linZ);
    if (aoFade > 0.01) {
      float pxRad = clamp((0.92 * uProjScale.y) / max(linZ, 0.6) * (0.5 / max(uTexelSize.y, 1e-5)), 3.0, 24.0);
      float ang0 = ign * 3.14159265;
      float occ = 0.0;
      for (int axis = 0; axis < 2; axis++) {
        float a = ang0 + float(axis) * 1.5707963;
        vec2 dir = vec2(cos(a), sin(a)) * uTexelSize * pxRad;
        for (int side = -1; side <= 1; side += 2) {
          float maxH = 0.0;
          for (int stepIdx = 1; stepIdx <= 2; stepIdx++) {
            float frac = (float(stepIdx) - 0.35 + 0.35 * ign) * 0.5;
            vec2 sUv = vUv + dir * (float(side) * frac);
            if (sUv.x <= 0.001 || sUv.x >= 0.999 || sUv.y <= 0.001 || sUv.y >= 0.999) continue;
            float sZ = linearizeDepth(texture2D(uDepthTex, sUv).r);
            vec3 diff = uvToViewPos(sUv, sZ) - p0;
            float dist2 = dot(diff, diff);
            if (dist2 > 1e-5 && dist2 < 2.25) {
              float cosH = dot(diff, vNorm) * inversesqrt(dist2) - 0.18;
              float falloff = 1.0 - clamp(dist2 * (1.0 / 2.25), 0.0, 1.0);
              maxH = max(maxH, max(cosH, 0.0) * falloff);
            }
          }
          occ += maxH;
        }
      }
      ao = clamp(1.0 - (occ * 0.25) * 0.62 * aoFade, 0.40, 1.0);
    }
    float sscsFade = (1.0 - smoothstep(26.0, 45.0, linZ)) * (1.0 - uCaveFactor);
    float ndlView = dot(vNorm, uSunDirView);
    if (sscsFade > 0.01 && ndlView > 0.08) {
      float rayLen = mix(0.18, 0.72, clamp(linZ / 24.0, 0.0, 1.0));
      float stepLen = rayLen * (1.0 / 6.0);
      float thickness = 0.055 + 0.022 * linZ;
      float depthBias = 0.024 + 0.0045 * linZ;
      float hit = 0.0;
      for (int k = 1; k <= 6; k++) {
        float t = (float(k) - 0.5 + 0.5 * ign) * stepLen;
        vec3 rp = p0 + uSunDirView * t;
        float rayZ = -rp.z;
        if (rayZ <= 0.28) break;
        vec2 rUv = vec2(rp.x * uProjScale.x, rp.y * uProjScale.y) / rayZ * 0.5 + 0.5;
        if (rUv.x <= 0.002 || rUv.x >= 0.998 || rUv.y <= 0.002 || rUv.y >= 0.998) break;
        float sampleZ = linearizeDepth(texture2D(uDepthTex, rUv).r);
        float dz = rayZ - sampleZ;
        if (dz > depthBias && dz < thickness) {
          float edgeFade = 1.0 - smoothstep(thickness * 0.45, thickness, dz);
          hit = max(hit, edgeFade * (1.0 - float(k - 1) * 0.13));
        }
      }
      contactSh = 1.0 - hit * 0.55 * sscsFade * smoothstep(0.08, 0.30, ndlView);
    }
  }
  if (uSunFacing > 0.01 && uCaveFactor < 0.92) {
    vec2 toSun = uSunScreenPos - vUv;
    float distToSun = length(toSun);
    vec2 dirStep = toSun * (min(distToSun, 0.58) / max(distToSun, 1e-4)) * 0.1;
    float illum = 0.0;
    float decay = 1.0;
    vec2 sampleUv = vUv + dirStep * (0.25 + 0.75 * ign);
    for (int i = 0; i < 10; i++) {
      if (sampleUv.x >= 0.0 && sampleUv.x <= 1.0 && sampleUv.y >= 0.0 && sampleUv.y <= 1.0) {
        illum += step(0.99990, texture2D(uDepthTex, sampleUv).r) * decay;
      }
      decay *= 0.86;
      sampleUv += dirStep;
    }
    sunShaft = clamp(illum * 0.165 * exp(-distToSun * 2.15) * uSunFacing * (1.0 - uCaveFactor), 0.0, 1.0);
  }
  gl_FragColor = vec4(ao, contactSh, sunShaft, packedZ);
}
`;

/**
 * K-Bloom v3 / K-Glare level 0: COD:AW 13-tap downsample (Jimenez 2014) from the full-res HDR buffer to 1/2.
 * RGB = glare "excess" energy: only the part of each pixel that the display cannot show after local exposure
 *       (the eye already scatters everything the screen does show, so adding that would double-count).
 * A   = log2 luminance (feeds metering, the bilateral grid and the blurred-luminance layer).
 * Karis anti-firefly weights are applied per 4-tap GROUP (research E1: per-tap weights pulse 74-112%).
 */
export const DOWN_FIRST_FRAG = /* glsl */ `
uniform sampler2D uSrc;
uniform vec2 uSrcTexel;
uniform float uThreshold;
varying vec2 vUv;
${COMMON}
vec4 tapExcess(vec2 uv) {
  vec3 c = min(max(texture2D(uSrc, uv).rgb, vec3(0.0)), vec3(8000.0));
  float L = khdrLuma(c);
  float ex = max(L - uThreshold, 0.0);
  ex = ex * ex / (ex + 0.25 * uThreshold + 1e-4);
  return vec4(c * (ex / max(L, 1e-6)), log2(max(L, 1e-6)));
}
void main() {
  vec2 t = uSrcTexel;
  vec4 a = tapExcess(vUv + t * vec2(-2.0, -2.0));
  vec4 b = tapExcess(vUv + t * vec2( 0.0, -2.0));
  vec4 c = tapExcess(vUv + t * vec2( 2.0, -2.0));
  vec4 d = tapExcess(vUv + t * vec2(-1.0, -1.0));
  vec4 e = tapExcess(vUv + t * vec2( 1.0, -1.0));
  vec4 f = tapExcess(vUv + t * vec2(-2.0,  0.0));
  vec4 g = tapExcess(vUv);
  vec4 h = tapExcess(vUv + t * vec2( 2.0,  0.0));
  vec4 i = tapExcess(vUv + t * vec2(-1.0,  1.0));
  vec4 j = tapExcess(vUv + t * vec2( 1.0,  1.0));
  vec4 k = tapExcess(vUv + t * vec2(-2.0,  2.0));
  vec4 l = tapExcess(vUv + t * vec2( 0.0,  2.0));
  vec4 m = tapExcess(vUv + t * vec2( 2.0,  2.0));
  vec4 g0 = (d + e + i + j) * 0.25;
  vec4 g1 = (a + b + f + g) * 0.25;
  vec4 g2 = (b + c + g + h) * 0.25;
  vec4 g3 = (f + g + k + l) * 0.25;
  vec4 g4 = (g + h + l + m) * 0.25;
  float w0 = 0.5 / (1.0 + khdrLuma(g0.rgb));
  float w1 = 0.125 / (1.0 + khdrLuma(g1.rgb));
  float w2 = 0.125 / (1.0 + khdrLuma(g2.rgb));
  float w3 = 0.125 / (1.0 + khdrLuma(g3.rgb));
  float w4 = 0.125 / (1.0 + khdrLuma(g4.rgb));
  vec3 rgb = (g0.rgb * w0 + g1.rgb * w1 + g2.rgb * w2 + g3.rgb * w3 + g4.rgb * w4) / (w0 + w1 + w2 + w3 + w4);
  float logL = g0.a * 0.5 + (g1.a + g2.a + g3.a + g4.a) * 0.125;
  gl_FragColor = vec4(rgb, logL);
}
`;

/** Plain 13-tap downsample for levels 1/4 .. 1/64 (energy-conserving average, alpha averaged too). */
export const DOWN_FRAG = /* glsl */ `
precision mediump float;
uniform sampler2D uSrc;
uniform highp vec2 uSrcTexel;
varying highp vec2 vUv;
void main() {
  highp vec2 t = uSrcTexel;
  vec4 a = texture2D(uSrc, vUv + t * vec2(-2.0, -2.0));
  vec4 b = texture2D(uSrc, vUv + t * vec2( 0.0, -2.0));
  vec4 c = texture2D(uSrc, vUv + t * vec2( 2.0, -2.0));
  vec4 d = texture2D(uSrc, vUv + t * vec2(-1.0, -1.0));
  vec4 e = texture2D(uSrc, vUv + t * vec2( 1.0, -1.0));
  vec4 f = texture2D(uSrc, vUv + t * vec2(-2.0,  0.0));
  vec4 g = texture2D(uSrc, vUv);
  vec4 h = texture2D(uSrc, vUv + t * vec2( 2.0,  0.0));
  vec4 i = texture2D(uSrc, vUv + t * vec2(-1.0,  1.0));
  vec4 j = texture2D(uSrc, vUv + t * vec2( 1.0,  1.0));
  vec4 k = texture2D(uSrc, vUv + t * vec2(-2.0,  2.0));
  vec4 l = texture2D(uSrc, vUv + t * vec2( 0.0,  2.0));
  vec4 m = texture2D(uSrc, vUv + t * vec2( 2.0,  2.0));
  vec4 r = (d + e + i + j) * 0.125;
  r += (a + b + f + g) * 0.03125;
  r += (b + c + g + h) * 0.03125;
  r += (f + g + k + l) * 0.03125;
  r += (g + h + l + m) * 0.03125;
  gl_FragColor = r;
}
`;

/**
 * Glare upsample: 9-tap tent of the lower level (scaled by uLowWeight) + current level x uCurWeight.
 * The level weights come from a non-negative fit of the CIE 2002 disability-glare spread function
 * (Vos & van den Berg) to the pyramid's Gaussian levels (docs/research/khdr_1_2/r4_cie_glare_fit.py).
 */
export const UP_FRAG = /* glsl */ `
precision mediump float;
uniform sampler2D uLow;
uniform sampler2D uCur;
uniform highp vec2 uLowTexel;
uniform float uLowWeight;
uniform float uCurWeight;
varying highp vec2 vUv;
void main() {
  highp vec2 t = uLowTexel;
  vec3 s = texture2D(uLow, vUv).rgb * 4.0;
  s += (texture2D(uLow, vUv + vec2(-t.x, 0.0)).rgb + texture2D(uLow, vUv + vec2(t.x, 0.0)).rgb
      + texture2D(uLow, vUv + vec2(0.0, -t.y)).rgb + texture2D(uLow, vUv + vec2(0.0, t.y)).rgb) * 2.0;
  s += texture2D(uLow, vUv + vec2(-t.x, -t.y)).rgb + texture2D(uLow, vUv + vec2(t.x, -t.y)).rgb
     + texture2D(uLow, vUv + vec2(-t.x, t.y)).rgb + texture2D(uLow, vUv + vec2(t.x, t.y)).rgb;
  vec3 up = s * (1.0 / 16.0);
  gl_FragColor = vec4(up * uLowWeight + texture2D(uCur, vUv).rgb * uCurWeight, 1.0);
}
`;

/**
 * K-Meter: 64-bin log-luminance histogram + far-field glare veil, built by GATHER over the 1/16 pyramid level
 * (up to 256x128 texels, i.e. phone screens up to ~4K wide). Output (64 + 1) x ${HIST_BANDS} FP32: row = one
 * horizontal band of source rows (parallelism for Adreno), texels 0..63 = (weight, weighted sum log2 L, 0, 1),
 * texel 64 = (weighted sum of glare excess rgb, weighted sum log2 L). The CPU adds the bands up.
 */
export const HISTOGRAM_FRAG = /* glsl */ `
uniform sampler2D uSrc;
uniform vec2 uSrcSize;
varying vec2 vUv;
void main() {
  int bin = int(floor(gl_FragCoord.x));
  int band = int(floor(gl_FragCoord.y));
  int sx = int(uSrcSize.x);
  int sy = int(uSrcSize.y);
  int rowsPerBand = (sy + ${HIST_BANDS - 1}) / ${HIST_BANDS};
  int y0 = band * rowsPerBand;
  float binW = ${((HIST_LOG_MAX - HIST_LOG_MIN) / HIST_BINS).toFixed(6)};
  float count = 0.0;
  float sumL = 0.0;
  vec3 veil = vec3(0.0);
  for (int j = 0; j < ${HIST_MAX_ROWS_PER_BAND}; j++) {
    int y = y0 + j;
    if (j >= rowsPerBand || y >= sy) break;
    float v = (float(y) + 0.5) / uSrcSize.y;
    float wy = 1.0 - 0.55 * abs(v - 0.52) * 2.0;
    for (int x = 0; x < 256; x++) {
      if (x >= sx) break;
      float u = (float(x) + 0.5) / uSrcSize.x;
      float w = max(0.1, wy * (1.0 - 0.45 * abs(u - 0.5) * 2.0));
      vec4 s = texelFetch(uSrc, ivec2(x, y), 0);
      float l = s.a;
      if (bin < ${HIST_BINS}) {
        int b = int(clamp(floor((l - ${HIST_LOG_MIN.toFixed(1)}) / binW), 0.0, ${(HIST_BINS - 1).toFixed(1)}));
        if (b == bin) {
          count += w;
          sumL += w * l;
        }
      } else {
        veil += s.rgb * w;
        sumL += l * w;
      }
    }
  }
  if (bin < ${HIST_BINS}) {
    gl_FragColor = vec4(count, sumL, 0.0, 1.0);
  } else {
    gl_FragColor = vec4(veil, sumL);
  }
}
`;

/**
 * K-LHE v3 bilateral grid — build by gather (WebGL2 friendly, no scatter).
 * Atlas layout (slot-major so hardware bilinear works inside each slot tile):
 *   x = slot * Gw + cellX, y = cellY;  each texel stores (sum_l, sum_w) for bins 2*slot and 2*slot+1.
 * Cells are 8x8 px of the 1/8 log-luminance level (= 64x64 full-res px); spatial tent over +-1 cell,
 * 16 range bins of uGridZ.y EV starting at uGridZ.x.
 */
export const GRID_BUILD_FRAG = /* glsl */ `
uniform sampler2D uLogTex;
uniform vec2 uSrcSize;
uniform vec2 uGridSize;
uniform vec2 uGridZ; // (zMin, dz)
varying vec2 vUv;
void main() {
  int ax = int(floor(gl_FragCoord.x));
  int cy = int(floor(gl_FragCoord.y));
  int gw = int(uGridSize.x);
  int slot = ax / gw;
  int cx = ax - slot * gw;
  float dz = uGridZ.y;
  float zb0 = uGridZ.x + (float(2 * slot) + 0.5) * dz;
  float zb1 = zb0 + dz;
  float zLo = uGridZ.x + 0.5 * dz;
  float zHi = uGridZ.x + 15.5 * dz;
  vec2 center = (vec2(float(cx), float(cy)) + 0.5) * 8.0;
  ivec2 base = ivec2(floor(center)) - ivec2(8);
  int sx = int(uSrcSize.x);
  int sy = int(uSrcSize.y);
  vec4 acc = vec4(0.0);
  for (int j = 0; j < 16; j++) {
    int py = base.y + j;
    if (py < 0 || py >= sy) continue;
    for (int i = 0; i < 16; i++) {
      int px = base.x + i;
      if (px < 0 || px >= sx) continue;
      float l = texelFetch(uLogTex, ivec2(px, py), 0).a;
      vec2 d = (vec2(float(px), float(py)) + 0.5 - center) * 0.125;
      float ws = max(0.0, 1.0 - abs(d.x)) * max(0.0, 1.0 - abs(d.y));
      float lb = clamp(l, zLo, zHi);
      float w0 = ws * max(0.0, 1.0 - abs(lb - zb0) / dz);
      float w1 = ws * max(0.0, 1.0 - abs(lb - zb1) / dz);
      acc += vec4(l * w0, w0, l * w1, w1);
    }
  }
  gl_FragColor = acc * (1.0 / 64.0);
}
`;

/** 3x3x3 [1 2 1] blur of the bilateral grid (space x space x range). */
export const GRID_BLUR_FRAG = /* glsl */ `
uniform sampler2D uGrid;
uniform vec2 uGridSize;
varying vec2 vUv;
vec4 cellTexel(int slot, int cx, int cy, int gw, int gh) {
  slot = clamp(slot, 0, 7);
  cx = clamp(cx, 0, gw - 1);
  cy = clamp(cy, 0, gh - 1);
  return texelFetch(uGrid, ivec2(slot * gw + cx, cy), 0);
}
void main() {
  int ax = int(floor(gl_FragCoord.x));
  int cy = int(floor(gl_FragCoord.y));
  int gw = int(uGridSize.x);
  int gh = int(uGridSize.y);
  int slot = ax / gw;
  int cx = ax - slot * gw;
  vec2 acc0 = vec2(0.0);
  vec2 acc1 = vec2(0.0);
  for (int dy = -1; dy <= 1; dy++) {
    for (int dx = -1; dx <= 1; dx++) {
      float wxy = (dx == 0 ? 2.0 : 1.0) * (dy == 0 ? 2.0 : 1.0);
      vec4 prev = cellTexel(slot - 1, cx + dx, cy + dy, gw, gh);
      vec4 cur = cellTexel(slot, cx + dx, cy + dy, gw, gh);
      vec4 next = cellTexel(slot + 1, cx + dx, cy + dy, gw, gh);
      // bin 2*slot: neighbours (2*slot-1) = prev.zw, (2*slot) = cur.xy, (2*slot+1) = cur.zw
      vec2 pzw = slot > 0 ? prev.zw : cur.xy;
      vec2 nxy = slot < 7 ? next.xy : cur.zw;
      acc0 += wxy * (pzw + 2.0 * cur.xy + cur.zw);
      acc1 += wxy * (cur.xy + 2.0 * cur.zw + nxy);
    }
  }
  gl_FragColor = vec4(acc0, acc1) * (1.0 / 64.0);
}
`;

/**
 * Final composite (canvas): K-SplitLight -> K-LHE v3 local exposure -> K-Glare (excess energy) ->
 * crepuscular rays -> K-Mesopic -> K-Look -> K-Filmic v3 (GT curve x Oklab constant hue x gamut LUT) ->
 * sRGB / Display-P3 encode -> temporal IGN triangular dither.
 */
export const COMPOSITE_FRAG = /* glsl */ `
uniform sampler2D uSceneTex;
uniform sampler2D uDepthTex;
uniform sampler2D uDepthFxTex;
uniform sampler2D uGlareTex;
uniform sampler2D uBlurLogTex;
uniform sampler2D uGridTex;
uniform sampler2D uGamutLut;
uniform vec2 uDepthFxTexel;
uniform vec4 uProjParams;
uniform float uProDepthFx;
uniform float uDepthFxActive;
uniform vec2 uGridSize;       // integer grid dims (Gw, Gh)
uniform vec2 uGridCells;      // continuous cell scale = (1/8-level size) / 8
uniform vec2 uGridZ;          // (zMin, dz)
uniform vec4 uLocal;          // (mid, hiC, shC, strength)
uniform float uDetail;
uniform vec3 uVeil;
uniform float uGlareGain;
uniform vec3 uShaftColor;
uniform float uRod;
uniform float uContrast;
uniform float uSaturation;
uniform float uGamutP3;
uniform float uFrameMod;
uniform float uDebugView;
varying vec2 vUv;
${COMMON}

float linearizeDepth(float d01) {
  float n = uProjParams.z;
  float f = uProjParams.w;
  float ndc = d01 * 2.0 - 1.0;
  return (2.0 * n * f) / max(f + n - ndc * (f - n), 1e-4);
}

float cbrtSigned(float x) { return sign(x) * pow(abs(x), 1.0 / 3.0); }

vec3 linearToOklab(vec3 c) {
  float l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
  float m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
  float s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;
  l = cbrtSigned(l); m = cbrtSigned(m); s = cbrtSigned(s);
  return vec3(0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
              1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
              0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s);
}

vec3 oklabToLinear(vec3 lab) {
  float l_ = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m_ = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s_ = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
  float l = l_ * l_ * l_; float m = m_ * m_ * m_; float s = s_ * s_ * s_;
  return vec3( 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
              -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
              -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s);
}

// GT Tone Mapping V2 curve shape (Polyphony Digital, SIGGRAPH 2025, MIT) in paper-white units, peak = 1 (SDR)
float gtCurve(float x) {
  const float P = 1.0;
  const float MID = 0.215;   // 53.8 nits / 250 nits paper white
  const float LIN = 0.444;
  const float TOE = 1.28;
  const float K = 0.74133333; // (LIN - 1) / (alpha - 1), alpha = 0.25
  const float KA = 1.18533333;     // P * LIN + P * K
  const float KB = -1.34934050;    // -P * K * exp(LIN / K)
  const float KC = -1.34892086;    // -1 / (K * P)
  x = max(x, 0.0);
  float t = clamp(x / MID, 0.0, 1.0);
  float wl = t * t * (3.0 - 2.0 * t);
  float toeV = MID * pow(x / MID, TOE);
  float linPart = (1.0 - wl) * toeV + wl * x;
  float shoulder = KA + KB * exp(x * KC);
  return min(x < LIN * P ? linPart : shoulder, P);
}

vec3 kFilmicV3(vec3 x) {
  x = max(x, vec3(0.0));
  float Y = khdrLuma(x);
  if (Y <= 1e-8) return vec3(0.0);
  float Yo = gtCurve(Y);
  vec3 col = x * (Yo / Y);                       // exact Oklab hue preservation
  vec3 lab = linearToOklab(col);
  float C = length(lab.yz);
  float h = C > 1e-7 ? atan(lab.z, lab.y) : 0.0;
  float over = log2(Y / 0.444);
  float tf = clamp(over / 3.0, 0.0, 1.0);
  C *= 1.0 - tf * tf * (3.0 - 2.0 * tf);         // film-like path to white (constant hue)
  C *= uSaturation;
  float cmax = texture2D(uGamutLut, vec2((h + 3.14159265) / 6.28318531, clamp(lab.x, 0.0, 1.0))).r;
  float r = C / max(cmax, 1e-5);
  const float KNEE = 0.75;
  float comp = r <= KNEE ? r : KNEE + (1.0 - KNEE) * tanh((r - KNEE) / (1.0 - KNEE));
  C = comp * cmax;
  vec3 outLin = oklabToLinear(vec3(lab.x, C * cos(h), C * sin(h)));
  if (uGamutP3 > 0.5) {
    outLin = mat3(0.82246197, 0.0331942, 0.01708263,
                  0.17753803, 0.9668058, 0.07239744,
                  0.0, 0.0, 0.91051993) * outLin;
  }
  return clamp(outLin, 0.0, 1.0);
}

vec3 linearToSRGB(vec3 c) {
  vec3 lo = c * 12.92;
  vec3 hi = 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055;
  return mix(lo, hi, step(vec3(0.0031308), c));
}

// K-LHE v3: slice the blurred bilateral grid (trilinear: hardware bilinear in space, manual lerp in range)
float sliceGrid(vec2 uv, float l) {
  float dz = uGridZ.y;
  float gz = clamp((l - uGridZ.x) / dz - 0.5, 0.0, 15.0);
  float b0 = floor(gz);
  float t = gz - b0;
  float b1 = min(b0 + 1.0, 15.0);
  vec2 gxy = clamp(uv * uGridCells, vec2(0.5), uGridSize - vec2(0.5));
  float s0 = floor(b0 * 0.5);
  float s1 = floor(b1 * 0.5);
  vec2 inv = 1.0 / vec2(uGridSize.x * 8.0, uGridSize.y);
  vec4 g0 = texture2D(uGridTex, vec2(s0 * uGridSize.x + gxy.x, gxy.y) * inv);
  vec4 g1 = texture2D(uGridTex, vec2(s1 * uGridSize.x + gxy.x, gxy.y) * inv);
  vec2 v0 = (b0 - 2.0 * s0) < 0.5 ? g0.xy : g0.zw;
  vec2 v1 = (b1 - 2.0 * s1) < 0.5 ? g1.xy : g1.zw;
  vec2 v = mix(v0, v1, t);
  return v.y > 1e-4 ? v.x / v.y : l;
}

void main() {
  vec4 scene = texture2D(uSceneTex, vUv);
  vec3 hdr = max(scene.rgb, vec3(0.0));
  float fDirect = clamp(scene.a, 0.0, 1.0);
  float d0 = texture2D(uDepthTex, vUv).r;
  bool isSky = d0 >= 0.99990;
  float refZ = clamp(linearizeDepth(d0) / 60.0, 0.0, 1.0);

  // --- 1. depth-optical atlas, joint-bilateral upsampled ---
  float gtao = 1.0;
  float sscs = 1.0;
  float shaft = 0.0;
  if (uDepthFxActive > 0.5) {
    if (uProDepthFx > 0.5) {
      vec2 hh = uDepthFxTexel * 1.25;
      vec4 sc = texture2D(uDepthFxTex, vUv);
      vec4 s0 = texture2D(uDepthFxTex, vUv + vec2(-hh.x, -hh.y));
      vec4 s1 = texture2D(uDepthFxTex, vUv + vec2( hh.x, -hh.y));
      vec4 s2 = texture2D(uDepthFxTex, vUv + vec2(-hh.x,  hh.y));
      vec4 s3 = texture2D(uDepthFxTex, vUv + vec2( hh.x,  hh.y));
      float wc = 1.5 / (0.006 + abs(sc.a - refZ) * 24.0);
      float w0 = 1.0 / (0.006 + abs(s0.a - refZ) * 24.0);
      float w1 = 1.0 / (0.006 + abs(s1.a - refZ) * 24.0);
      float w2 = 1.0 / (0.006 + abs(s2.a - refZ) * 24.0);
      float w3 = 1.0 / (0.006 + abs(s3.a - refZ) * 24.0);
      vec3 fused = (sc.rgb * wc + s0.rgb * w0 + s1.rgb * w1 + s2.rgb * w2 + s3.rgb * w3) / (wc + w0 + w1 + w2 + w3);
      gtao = isSky ? 1.0 : fused.r;
      sscs = isSky ? 1.0 : fused.g;
      shaft = sc.b;
    } else {
      shaft = texture2D(uDepthFxTex, vUv).b;
    }
  }

  // --- 2. K-SplitLight: AO darkens only ambient light, contact shadows only direct sunlight ---
  hdr *= (1.0 - (1.0 - fDirect) * (1.0 - gtao)) * (1.0 - fDirect * (1.0 - sscs));

  // --- 3. K-LHE v3 local exposure (bilateral grid base / detail decomposition, range-fitted) ---
  float L = khdrLuma(hdr);
  float l = log2(max(L, 1e-6));
  float base = sliceGrid(vUv, l);
  float blurred = texture2D(uBlurLogTex, vUv).a;
  base = mix(base, blurred, 0.15);
  float mid = uLocal.x;
  float c = mix(uLocal.z, uLocal.y, smoothstep(mid - 0.75, mid + 0.75, base));
  float target = (base - mid) * c + mid + (l - base) * uDetail;
  float gainLog = clamp((target - l) * uLocal.w, -7.0, 7.0);
  vec3 col = hdr * exp2(gainLog);

  // --- 4. K-Glare: CIE-2002-shaped scattering of the energy the display cannot show + far veil ---
  col += (texture2D(uGlareTex, vUv).rgb + uVeil) * uGlareGain;

  // --- 5. crepuscular rays (physical sun colour) ---
  col += uShaftColor * shaft;

  // --- 6. K-Mesopic: rod vision driven by the ADAPTATION luminance (Larson 1997 scotopic luminance) ---
  if (uRod > 0.001) {
    vec3 xyz = mat3(0.4123908, 0.2126390, 0.0193308,
                    0.3575843, 0.7151687, 0.1191948,
                    0.1804808, 0.0721923, 0.9505322) * col;
    float ys = xyz.y * (1.33 * (1.0 + (xyz.y + xyz.z) / max(xyz.x, 1e-6)) - 1.68) * (1.0 / 2.57);
    vec3 rodCol = vec3(0.78, 0.92, 1.22) * max(ys, 0.0);
    col = mix(col, rodCol, uRod * 0.85);
  }

  // --- 7. K-Look: gentle log-space contrast around middle grey ---
  float Lc = khdrLuma(col);
  if (Lc > 1e-6) {
    float lc = log2(Lc);
    col *= exp2(clamp((lc - mid) * (uContrast - 1.0), -4.0, 4.0));
  }

  // --- 8. K-Filmic v3 + encode ---
  vec3 mapped = kFilmicV3(col);
  if (uDebugView > 0.5) {
    // false-colour EV zones of the exposed scene (debug)
    float ev = log2(max(khdrLuma(col), 1e-6) / 0.18);
    mapped = clamp(vec3(smoothstep(0.0, 3.0, ev), 1.0 - abs(ev) / 3.0, smoothstep(0.0, -3.0, ev)), 0.0, 1.0);
  }
  vec3 enc = linearToSRGB(mapped);
  float n1 = khdrIGN(gl_FragCoord.xy + 5.588238 * uFrameMod);
  float n2 = khdrIGN(gl_FragCoord.xy + vec2(47.0, 17.0) + 5.588238 * mod(uFrameMod + 32.0, 64.0));
  gl_FragColor = vec4(clamp(enc + (n1 + n2 - 1.0) * (1.0 / 255.0), 0.0, 1.0), 1.0);
}
`;
