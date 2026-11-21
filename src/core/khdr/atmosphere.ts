import * as THREE from 'three';

/**
 * KHDR 1.2 hyper — K-Atmos: physically based sky & atmosphere (Hillaire 2020, EGSR, LUT method).
 *
 * The sun of Kuroiso Island is static, so the three LUTs are rendered ONCE at start-up (and the small
 * sky-view LUT again only when the player climbs/descends > 120 m), costing ~0 per frame on POCO F7:
 *   - Transmittance LUT   256x64  RGBA16F
 *   - Multi-scattering    32x32   RGBA16F  (Hillaire's infinite-order isotropic approximation)
 *   - Sky-view LUT        192x108 RGBA16F  (non-linear latitude mapping, relative to the sun azimuth)
 * A 4x1 FP32 "summary" pass integrates the LUTs into the numbers the CPU needs for physically consistent
 * scene lighting (K-Radiance): sun illuminance/colour at the camera, sky irradiance on a horizontal plane,
 * average horizon radiance (fog / aerial perspective colour) and zenith radiance.
 *
 * All LUT values are per unit top-of-atmosphere solar illuminance; multiply by SOLAR_ILLUMINANCE_TOA to get
 * lux (irradiance) or cd/m^2 (radiance). Lengths are in km. World is y-up.
 */
export const SOLAR_ILLUMINANCE_TOA = 128000; // lx (photopic, extraterrestrial)
export const SUN_ANGULAR_RADIUS = 0.004675; // rad (0.2679 deg)
export const SUN_SOLID_ANGLE = Math.PI * SUN_ANGULAR_RADIUS * SUN_ANGULAR_RADIUS; // ~6.87e-5 sr

export interface AtmosphereLighting {
  /** Sun illuminance at normal incidence at the camera altitude (lux, linear sRGB). */
  sunIlluminance: THREE.Vector3;
  /** Sky irradiance on an upward-facing horizontal plane (lux). */
  skyIrradiance: THREE.Vector3;
  /** Average sky radiance 0.5..6 deg above the horizon (cd/m^2). */
  horizonRadiance: THREE.Vector3;
  /** Sky radiance straight up (cd/m^2). */
  zenithRadiance: THREE.Vector3;
  /** Camera altitude (m) the values were computed for. */
  altitude: number;
}

const ATMOS_GLSL = /* glsl */ `
#define PI 3.14159265359
const float Rb = 6360.0;
const float Rt = 6460.0;
const vec3 RAYLEIGH_SCATTERING = vec3(5.802, 13.558, 33.1) * 1e-3;
// Coastal summer aerosol (AOD ~0.04 at 550 nm; Hillaire's default 0.005 is unusually clear air and made the
// island's shadows too dark and blue in testing). Single-scattering albedo 0.9.
const float MIE_SCATTERING = 0.032;
const float MIE_EXTINCTION = 0.0356;
const vec3 OZONE_ABSORPTION = vec3(0.650, 1.881, 0.085) * 1e-3;
const float MIE_G = 0.8;
const vec3 GROUND_ALBEDO = vec3(0.12);

float fromUnitToSubUvs(float u, float res) { return (u + 0.5 / res) * (res / (res + 1.0)); }
float fromSubUvsToUnit(float u, float res) { return (u - 0.5 / res) * (res / (res - 1.0)); }

float raySphereNearest(vec3 r0, vec3 rd, float sR) {
  float b = 2.0 * dot(rd, r0);
  float c = dot(r0, r0) - sR * sR;
  float delta = b * b - 4.0 * c;
  if (delta < 0.0) return -1.0;
  float sq = sqrt(delta);
  float s0 = (-b - sq) * 0.5;
  float s1 = (-b + sq) * 0.5;
  if (s0 < 0.0 && s1 < 0.0) return -1.0;
  if (s0 < 0.0) return max(0.0, s1);
  if (s1 < 0.0) return max(0.0, s0);
  return max(0.0, min(s0, s1));
}

void sampleMedium(float h, out vec3 scattering, out vec3 extinction, out vec3 scatRay, out float scatMie) {
  float dR = exp(-h / 8.0);
  float dM = exp(-h / 1.2);
  float dO = max(0.0, h < 25.0 ? h / 15.0 - 2.0 / 3.0 : -h / 15.0 + 8.0 / 3.0);
  scatRay = RAYLEIGH_SCATTERING * dR;
  scatMie = MIE_SCATTERING * dM;
  scattering = scatRay + vec3(scatMie);
  extinction = scatRay + vec3(MIE_EXTINCTION * dM) + OZONE_ABSORPTION * dO;
}

void lutTransmittanceParamsToUv(float viewHeight, float viewZenithCos, out vec2 uv) {
  float H = sqrt(max(0.0, Rt * Rt - Rb * Rb));
  float rho = sqrt(max(0.0, viewHeight * viewHeight - Rb * Rb));
  float disc = viewHeight * viewHeight * (viewZenithCos * viewZenithCos - 1.0) + Rt * Rt;
  float d = max(0.0, -viewHeight * viewZenithCos + sqrt(max(disc, 0.0)));
  float dMin = Rt - viewHeight;
  float dMax = rho + H;
  uv = vec2((d - dMin) / max(dMax - dMin, 1e-6), rho / H);
}

vec3 getTransmittance(sampler2D lut, float viewHeight, float viewZenithCos) {
  vec2 uv;
  lutTransmittanceParamsToUv(viewHeight, viewZenithCos, uv);
  return texture2D(lut, uv).rgb;
}

void skyViewLutParamsToUv(bool intersectGround, float viewZenithCos, float lightViewCos, float viewHeight, out vec2 uv) {
  float vHorizon = sqrt(max(viewHeight * viewHeight - Rb * Rb, 0.0));
  float cosBeta = vHorizon / viewHeight;
  float beta = acos(clamp(cosBeta, -1.0, 1.0));
  float zenithHorizonAngle = PI - beta;
  if (!intersectGround) {
    float coord = acos(clamp(viewZenithCos, -1.0, 1.0)) / zenithHorizonAngle;
    coord = 1.0 - coord;
    coord = sqrt(max(coord, 0.0));
    coord = 1.0 - coord;
    uv.y = coord * 0.5;
  } else {
    float coord = (acos(clamp(viewZenithCos, -1.0, 1.0)) - zenithHorizonAngle) / max(beta, 1e-5);
    coord = sqrt(max(coord, 0.0));
    uv.y = coord * 0.5 + 0.5;
  }
  uv.x = sqrt(clamp(-lightViewCos * 0.5 + 0.5, 0.0, 1.0));
  uv = vec2(fromUnitToSubUvs(uv.x, 192.0), fromUnitToSubUvs(uv.y, 108.0));
}

vec3 sampleSkyView(sampler2D skyView, vec3 dir, vec3 sunDir, float viewHeight) {
  vec2 dh = dir.xz;
  vec2 sh = sunDir.xz;
  float lightViewCos = (dot(dh, dh) > 1e-8 && dot(sh, sh) > 1e-8) ? dot(normalize(dh), normalize(sh)) : 1.0;
  bool ground = raySphereNearest(vec3(0.0, viewHeight, 0.0), dir, Rb) >= 0.0;
  vec2 uv;
  skyViewLutParamsToUv(ground, dir.y, lightViewCos, viewHeight, uv);
  return texture2D(skyView, uv).rgb;
}
`;

const FULLSCREEN_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const TRANSMITTANCE_FRAG = /* glsl */ `
${ATMOS_GLSL}
varying vec2 vUv;
void main() {
  float H = sqrt(Rt * Rt - Rb * Rb);
  float rho = H * vUv.y;
  float viewHeight = sqrt(rho * rho + Rb * Rb);
  float dMin = Rt - viewHeight;
  float dMax = rho + H;
  float d = dMin + vUv.x * (dMax - dMin);
  float viewZenithCos = d == 0.0 ? 1.0 : (H * H - rho * rho - d * d) / (2.0 * viewHeight * d);
  viewZenithCos = clamp(viewZenithCos, -1.0, 1.0);
  vec3 P = vec3(0.0, viewHeight, 0.0);
  vec3 dir = vec3(sqrt(max(0.0, 1.0 - viewZenithCos * viewZenithCos)), viewZenithCos, 0.0);
  float tTop = raySphereNearest(P, dir, Rt);
  const int N = 40;
  float dt = max(tTop, 0.0) / float(N);
  vec3 od = vec3(0.0);
  for (int i = 0; i < N; i++) {
    vec3 p = P + (float(i) + 0.5) * dt * dir;
    vec3 sc; vec3 ex; vec3 sr; float sm;
    sampleMedium(length(p) - Rb, sc, ex, sr, sm);
    od += ex * dt;
  }
  gl_FragColor = vec4(exp(-od), 1.0);
}
`;

// Shared single-scattering integrator (Hillaire's IntegrateScatteredLuminance, fixed step count).
const INTEGRATE_GLSL = /* glsl */ `
uniform sampler2D uTransmittance;
#ifdef WITH_MULTISCAT
uniform sampler2D uMultiScat;
vec3 getMultiScattering(float viewHeight, float sunZenithCos) {
  vec2 uv = clamp(vec2(sunZenithCos * 0.5 + 0.5, (viewHeight - Rb) / (Rt - Rb)), 0.0, 1.0);
  uv = vec2(fromUnitToSubUvs(uv.x, 32.0), fromUnitToSubUvs(uv.y, 32.0));
  return texture2D(uMultiScat, uv).rgb;
}
#endif

void integrateScattered(vec3 P, vec3 dir, vec3 sunDir, bool isotropic, bool withGround, out vec3 L, out vec3 fms) {
  L = vec3(0.0);
  fms = vec3(0.0);
  float tBottom = raySphereNearest(P, dir, Rb);
  float tTop = raySphereNearest(P, dir, Rt);
  float tMax = 0.0;
  bool hitGround = false;
  if (tBottom < 0.0) {
    if (tTop < 0.0) return;
    tMax = tTop;
  } else {
    hitGround = tTop < 0.0 || tBottom < tTop;
    tMax = tTop > 0.0 ? min(tTop, tBottom) : tBottom;
  }
  float cosTheta = dot(sunDir, dir);
  float rayPhase = 3.0 / (16.0 * PI) * (1.0 + cosTheta * cosTheta);
  float denom = 1.0 + MIE_G * MIE_G - 2.0 * MIE_G * cosTheta;
  float miePhase = (1.0 - MIE_G * MIE_G) / (4.0 * PI * denom * sqrt(denom));
  const float ISO = 1.0 / (4.0 * PI);
  float dt = tMax / float(SAMPLE_COUNT);
  vec3 throughput = vec3(1.0);
  for (int s = 0; s < SAMPLE_COUNT; s++) {
    float t = (float(s) + 0.3) * dt;
    vec3 p = P + t * dir;
    float pHeight = length(p);
    vec3 up = p / pHeight;
    vec3 scattering; vec3 extinction; vec3 scatRay; float scatMie;
    sampleMedium(pHeight - Rb, scattering, extinction, scatRay, scatMie);
    vec3 sampleT = exp(-extinction * dt);
    float sunZenithCos = dot(sunDir, up);
    vec3 tSun = getTransmittance(uTransmittance, pHeight, sunZenithCos);
    float tEarth = raySphereNearest(p + up * 0.01, sunDir, Rb);
    float earthShadow = tEarth >= 0.0 ? 0.0 : 1.0;
    vec3 phaseTimesScattering = isotropic ? scattering * ISO : scatRay * rayPhase + vec3(scatMie * miePhase);
    vec3 S = earthShadow * tSun * phaseTimesScattering;
#ifdef WITH_MULTISCAT
    S += getMultiScattering(pHeight, sunZenithCos) * scattering;
#endif
    vec3 safeEx = max(extinction, vec3(1e-7));
    fms += throughput * (scattering - scattering * sampleT) / safeEx;
    L += throughput * (S - S * sampleT) / safeEx;
    throughput *= sampleT;
  }
  if (withGround && hitGround) {
    vec3 p = P + tBottom * dir;
    float pHeight = length(p);
    vec3 up = p / pHeight;
    float sunZenithCos = dot(sunDir, up);
    vec3 tSun = getTransmittance(uTransmittance, pHeight, sunZenithCos);
    L += tSun * throughput * clamp(sunZenithCos, 0.0, 1.0) * GROUND_ALBEDO / PI;
  }
}
`;

const MULTISCAT_FRAG = /* glsl */ `
${ATMOS_GLSL}
#define SAMPLE_COUNT 20
${INTEGRATE_GLSL}
varying vec2 vUv;
void main() {
  vec2 uv = vec2(fromSubUvsToUnit(vUv.x, 32.0), fromSubUvsToUnit(vUv.y, 32.0));
  float cosSunZenith = uv.x * 2.0 - 1.0;
  vec3 sunDir = vec3(sqrt(clamp(1.0 - cosSunZenith * cosSunZenith, 0.0, 1.0)), cosSunZenith, 0.0);
  float viewHeight = Rb + clamp(uv.y + 0.01, 0.0, 1.0) * (Rt - Rb - 0.01);
  vec3 P = vec3(0.0, viewHeight, 0.0);
  vec3 lumSum = vec3(0.0);
  vec3 fmsSum = vec3(0.0);
  for (int i = 0; i < 8; i++) {
    for (int j = 0; j < 8; j++) {
      float theta = 2.0 * PI * (float(i) + 0.5) / 8.0;
      float phi = acos(1.0 - 2.0 * (float(j) + 0.5) / 8.0);
      vec3 dir = vec3(cos(theta) * sin(phi), cos(phi), sin(theta) * sin(phi));
      vec3 L; vec3 fms;
      integrateScattered(P, dir, sunDir, true, true, L, fms);
      lumSum += L;
      fmsSum += fms;
    }
  }
  // average over the sphere: (sum * 4PI / 64) * isotropicPhase(1/4PI) = sum / 64
  vec3 inScattered = lumSum / 64.0;
  vec3 r = fmsSum / 64.0;
  vec3 psi = inScattered / max(vec3(1.0) - r, vec3(1e-4));
  gl_FragColor = vec4(psi, 1.0);
}
`;

const SKYVIEW_FRAG = /* glsl */ `
${ATMOS_GLSL}
#define WITH_MULTISCAT
#define SAMPLE_COUNT 32
${INTEGRATE_GLSL}
uniform float uViewHeight;
uniform float uSunZenithCos;
varying vec2 vUv;
void main() {
  float viewHeight = uViewHeight;
  vec2 uv = vec2(fromSubUvsToUnit(vUv.x, 192.0), fromSubUvsToUnit(vUv.y, 108.0));
  float vHorizon = sqrt(max(viewHeight * viewHeight - Rb * Rb, 0.0));
  float cosBeta = vHorizon / viewHeight;
  float beta = acos(clamp(cosBeta, -1.0, 1.0));
  float zenithHorizonAngle = PI - beta;
  float viewZenithCos;
  if (uv.y < 0.5) {
    float coord = 2.0 * uv.y;
    coord = 1.0 - coord;
    coord *= coord;
    coord = 1.0 - coord;
    viewZenithCos = cos(zenithHorizonAngle * coord);
  } else {
    float coord = uv.y * 2.0 - 1.0;
    coord *= coord;
    viewZenithCos = cos(zenithHorizonAngle + beta * coord);
  }
  float coordX = uv.x * uv.x;
  float lightViewCos = -(coordX * 2.0 - 1.0);
  vec3 sunDir = vec3(sqrt(clamp(1.0 - uSunZenithCos * uSunZenithCos, 0.0, 1.0)), uSunZenithCos, 0.0);
  float vzs = sqrt(clamp(1.0 - viewZenithCos * viewZenithCos, 0.0, 1.0));
  vec3 dir = vec3(vzs * lightViewCos, viewZenithCos, vzs * sqrt(clamp(1.0 - lightViewCos * lightViewCos, 0.0, 1.0)));
  vec3 L; vec3 fms;
  integrateScattered(vec3(0.0, viewHeight, 0.0), dir, sunDir, false, false, L, fms);
  gl_FragColor = vec4(L, 1.0);
}
`;

const SUMMARY_FRAG = /* glsl */ `
${ATMOS_GLSL}
uniform sampler2D uSkyView;
uniform sampler2D uTransmittance;
uniform float uViewHeight;
uniform vec3 uSunDir;
varying vec2 vUv;
void main() {
  int which = int(floor(vUv.x * 4.0));
  vec3 result = vec3(0.0);
  if (which == 0) {
    // sky irradiance on a horizontal plane: integral L cos(z) dOmega over the upper hemisphere
    const int NZ = 24;
    const int NA = 48;
    float dz = (0.5 * PI) / float(NZ);
    float da = (2.0 * PI) / float(NA);
    for (int iz = 0; iz < NZ; iz++) {
      float z = (float(iz) + 0.5) * dz;
      for (int ia = 0; ia < NA; ia++) {
        float a = (float(ia) + 0.5) * da;
        vec3 dir = vec3(sin(z) * cos(a), cos(z), sin(z) * sin(a));
        result += sampleSkyView(uSkyView, dir, uSunDir, uViewHeight) * cos(z) * sin(z) * dz * da;
      }
    }
  } else if (which == 1) {
    const int NA = 64;
    for (int ia = 0; ia < NA; ia++) {
      float a = (float(ia) + 0.5) * (2.0 * PI / float(NA));
      for (int ie = 0; ie < 4; ie++) {
        float e = radians(0.5 + 1.5 * float(ie));
        vec3 dir = vec3(cos(e) * cos(a), sin(e), cos(e) * sin(a));
        result += sampleSkyView(uSkyView, dir, uSunDir, uViewHeight);
      }
    }
    result /= float(NA * 4);
  } else if (which == 2) {
    result = sampleSkyView(uSkyView, vec3(0.0, 1.0, 0.0), uSunDir, uViewHeight);
  } else {
    result = getTransmittance(uTransmittance, uViewHeight, uSunDir.y);
  }
  gl_FragColor = vec4(result, 1.0);
}
`;

/** Physical sky dome shader (replaces the hand-painted gradient in KHDR 1.2 hyper). */
const SKY_DOME_VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const SKY_DOME_FRAG = /* glsl */ `
${ATMOS_GLSL}
uniform sampler2D uSkyView;
uniform sampler2D uTransmittance;
uniform vec3 uSunDir;
uniform float uViewHeight;
uniform float uSkyScale;       // SOLAR_ILLUMINANCE_TOA x pre-exposure
uniform float uSunDiscScale;   // SOLAR_ILLUMINANCE_TOA / sun solid angle x pre-exposure
uniform vec3 uSunIrr;          // sun illuminance at camera x pre-exposure (for cloud lighting)
uniform vec3 uSkyIrr;          // sky irradiance x pre-exposure
uniform float uCaveDim;        // 1 outdoors -> 0 deep inside the coal mine
varying vec3 vDir;

float khdrHash2(vec2 p) {
  p = fract(p * vec2(0.1031, 0.1030));
  p += dot(p, p.yx + 33.33);
  return fract((p.x + p.y) * p.x);
}
float khdrNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(khdrHash2(i), khdrHash2(i + vec2(1.0, 0.0)), u.x),
             mix(khdrHash2(i + vec2(0.0, 1.0)), khdrHash2(i + vec2(1.0, 1.0)), u.x), u.y);
}
float khdrFbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * khdrNoise(p);
    p = p * 2.04 + vec2(13.7, 7.1);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec3 d = normalize(vDir);
  // Below the horizon the dome is only seen past the far edge of the 42 km ocean: show the horizon sky
  // radiance there (== the fog / aerial-perspective colour of distant water) instead of the dark planet.
  vec3 ds = d;
  if (ds.y < 0.002) {
    ds.y = 0.002;
    ds = normalize(ds);
  }
  vec3 L = sampleSkyView(uSkyView, ds, uSunDir, uViewHeight) * uSkyScale;

  // Fair-weather mountain clouds, now physically lit: sunlit cloud tops are brighter than the blue sky
  if (d.y > 0.05) {
    vec2 cloudUV = d.xz / (d.y + 0.22) * 1.45;
    float c = khdrFbm(cloudUV + vec2(1.8, -0.9));
    float cloudMask = smoothstep(0.54, 0.80, c) * smoothstep(0.05, 0.22, d.y) * 0.42;
    float fwd = pow(max(dot(d, uSunDir), 0.0), 6.0);
    vec3 cloudL = (uSunIrr * (0.55 + 0.9 * fwd) * 0.85 + uSkyIrr * 0.8) / PI;
    L = mix(L, cloudL, cloudMask);
  }

  // Sun disc with limb darkening; radiance = E_toa * T / solid angle (clamped to stay inside FP16)
  float cosSun = dot(d, uSunDir);
  float cosRadius = cos(${SUN_ANGULAR_RADIUS.toFixed(6)});
  if (cosSun > cosRadius && d.y > -0.02) {
    float ang = acos(clamp(cosSun, -1.0, 1.0)) / ${SUN_ANGULAR_RADIUS.toFixed(6)};
    float mu = sqrt(max(0.0, 1.0 - ang * ang));
    float limb = 1.0 - 0.6 * (1.0 - mu);
    vec3 tSun = getTransmittance(uTransmittance, uViewHeight, d.y);
    L += min(tSun * uSunDiscScale * limb, vec3(30000.0));
  }

  // Below the horizon the dome blends into the ocean-side haze
  L *= uCaveDim;
  gl_FragColor = vec4(min(L, vec3(60000.0)), 1.0);
}
`;

function makeLutTarget(w: number, h: number, type: THREE.TextureDataType): THREE.WebGLRenderTarget {
  return new THREE.WebGLRenderTarget(w, h, {
    type,
    format: THREE.RGBAFormat,
    minFilter: type === THREE.FloatType ? THREE.NearestFilter : THREE.LinearFilter,
    magFilter: type === THREE.FloatType ? THREE.NearestFilter : THREE.LinearFilter,
    wrapS: THREE.ClampToEdgeWrapping,
    wrapT: THREE.ClampToEdgeWrapping,
    depthBuffer: false,
    stencilBuffer: false,
    generateMipmaps: false,
  });
}

function fullscreenTriangle(): THREE.BufferGeometry {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 2, 0, 0, 2], 2));
  return g;
}

export class KAtmosphere {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly sunDir: THREE.Vector3;
  private readonly transmittance: THREE.WebGLRenderTarget;
  private readonly multiScat: THREE.WebGLRenderTarget;
  private readonly skyView: THREE.WebGLRenderTarget;
  private readonly summary: THREE.WebGLRenderTarget;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private readonly quad: THREE.Mesh;
  private readonly skyViewMat: THREE.ShaderMaterial;
  private readonly summaryMat: THREE.ShaderMaterial;
  private readonly lighting: AtmosphereLighting;
  private lutAltitude = 0;
  private readPending = false;
  public readonly skyMaterial: THREE.ShaderMaterial;

  constructor(renderer: THREE.WebGLRenderer, sunDirection: THREE.Vector3, initialAltitude = 2) {
    this.renderer = renderer;
    this.sunDir = sunDirection.clone().normalize();
    this.transmittance = makeLutTarget(256, 64, THREE.HalfFloatType);
    this.multiScat = makeLutTarget(32, 32, THREE.HalfFloatType);
    this.skyView = makeLutTarget(192, 108, THREE.HalfFloatType);
    this.summary = makeLutTarget(4, 1, THREE.FloatType);
    this.quad = new THREE.Mesh(fullscreenTriangle());
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);

    const transmittanceMat = new THREE.ShaderMaterial({
      vertexShader: FULLSCREEN_VERT,
      fragmentShader: TRANSMITTANCE_FRAG,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    });
    const multiScatMat = new THREE.ShaderMaterial({
      vertexShader: FULLSCREEN_VERT,
      fragmentShader: MULTISCAT_FRAG,
      uniforms: { uTransmittance: { value: this.transmittance.texture } },
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    });
    this.skyViewMat = new THREE.ShaderMaterial({
      vertexShader: FULLSCREEN_VERT,
      fragmentShader: SKYVIEW_FRAG,
      uniforms: {
        uTransmittance: { value: this.transmittance.texture },
        uMultiScat: { value: this.multiScat.texture },
        uViewHeight: { value: 6360.002 },
        uSunZenithCos: { value: this.sunDir.y },
      },
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    });
    this.summaryMat = new THREE.ShaderMaterial({
      vertexShader: FULLSCREEN_VERT,
      fragmentShader: SUMMARY_FRAG,
      uniforms: {
        uSkyView: { value: this.skyView.texture },
        uTransmittance: { value: this.transmittance.texture },
        uViewHeight: { value: 6360.002 },
        uSunDir: { value: this.sunDir.clone() },
      },
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    });

    this.skyMaterial = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      toneMapped: false,
      vertexShader: SKY_DOME_VERT,
      fragmentShader: SKY_DOME_FRAG,
      uniforms: {
        uSkyView: { value: this.skyView.texture },
        uTransmittance: { value: this.transmittance.texture },
        uSunDir: { value: this.sunDir.clone() },
        uViewHeight: { value: 6360.002 },
        uSkyScale: { value: SOLAR_ILLUMINANCE_TOA },
        uSunDiscScale: { value: SOLAR_ILLUMINANCE_TOA / SUN_SOLID_ANGLE },
        uSunIrr: { value: new THREE.Vector3() },
        uSkyIrr: { value: new THREE.Vector3() },
        uCaveDim: { value: 1.0 },
      },
    });

    this.lighting = {
      sunIlluminance: new THREE.Vector3(103000, 97000, 85000),
      skyIrradiance: new THREE.Vector3(14000, 16000, 20000),
      horizonRadiance: new THREE.Vector3(6000, 6800, 8000),
      zenithRadiance: new THREE.Vector3(2600, 3600, 5600),
      altitude: initialAltitude,
    };

    // One-time LUT generation (~1-3 ms of GPU work at load on a phone)
    const prevTarget = renderer.getRenderTarget();
    const prevAutoClear = renderer.autoClear;
    renderer.autoClear = true;
    this.renderPass(transmittanceMat, this.transmittance);
    this.renderPass(multiScatMat, this.multiScat);
    renderer.setRenderTarget(prevTarget);
    renderer.autoClear = prevAutoClear;
    transmittanceMat.dispose();
    multiScatMat.dispose();

    this.recomputeSkyView(initialAltitude, true);
  }

  private renderPass(mat: THREE.ShaderMaterial, target: THREE.WebGLRenderTarget): void {
    this.quad.material = mat;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this.scene, this.camera);
  }

  private viewHeightKm(altitudeM: number): number {
    return 6360.0 + Math.max(0.002, altitudeM / 1000.0);
  }

  private recomputeSkyView(altitudeM: number, synchronous: boolean): void {
    const vh = this.viewHeightKm(altitudeM);
    this.skyViewMat.uniforms.uViewHeight.value = vh;
    this.summaryMat.uniforms.uViewHeight.value = vh;
    this.skyMaterial.uniforms.uViewHeight.value = vh;
    const prevTarget = this.renderer.getRenderTarget();
    const prevAutoClear = this.renderer.autoClear;
    this.renderer.autoClear = true;
    this.renderPass(this.skyViewMat, this.skyView);
    this.renderPass(this.summaryMat, this.summary);
    this.renderer.setRenderTarget(prevTarget);
    this.renderer.autoClear = prevAutoClear;
    this.lutAltitude = altitudeM;

    const buf = new Float32Array(16);
    if (synchronous) {
      try {
        this.renderer.readRenderTargetPixels(this.summary, 0, 0, 4, 1, buf);
        this.applySummary(buf, altitudeM);
      } catch (e) {
        console.warn('[KHDR K-Atmos] summary readback failed, using defaults', e);
      }
      return;
    }
    if (this.readPending) return;
    this.readPending = true;
    this.renderer
      .readRenderTargetPixelsAsync(this.summary, 0, 0, 4, 1, buf)
      .then(() => this.applySummary(buf, altitudeM))
      .catch((e) => console.warn('[KHDR K-Atmos] async summary readback failed', e))
      .finally(() => {
        this.readPending = false;
      });
  }

  private applySummary(buf: Float32Array, altitudeM: number): void {
    const E = SOLAR_ILLUMINANCE_TOA;
    const ok = Array.from(buf).every((v) => Number.isFinite(v));
    if (!ok || buf[0] <= 0 || buf[12] <= 0) {
      console.warn('[KHDR K-Atmos] summary contained invalid values, keeping defaults', buf);
      return;
    }
    this.lighting.skyIrradiance.set(buf[0] * E, buf[1] * E, buf[2] * E);
    this.lighting.horizonRadiance.set(buf[4] * E, buf[5] * E, buf[6] * E);
    this.lighting.zenithRadiance.set(buf[8] * E, buf[9] * E, buf[10] * E);
    this.lighting.sunIlluminance.set(buf[12] * E, buf[13] * E, buf[14] * E);
    this.lighting.altitude = altitudeM;
  }

  /** Re-renders the (cheap) sky-view LUT when the camera altitude changed noticeably. */
  public update(cameraAltitudeM: number): void {
    if (Math.abs(cameraAltitudeM - this.lutAltitude) > 120) {
      this.recomputeSkyView(cameraAltitudeM, false);
    }
  }

  public getLighting(): AtmosphereLighting {
    return this.lighting;
  }

  public dispose(): void {
    this.transmittance.dispose();
    this.multiScat.dispose();
    this.skyView.dispose();
    this.summary.dispose();
    this.skyViewMat.dispose();
    this.summaryMat.dispose();
    this.skyMaterial.dispose();
    this.quad.geometry.dispose();
  }
}
