import * as THREE from 'three';
import './styles.css';
import { GraphicsSettings, KhdrMode, ResolutionPreset, ShadowFlameMode } from './core/types';
import { TextureCatalog } from './core/textureCatalog';
import { WorldCollision } from './core/collision';
import { installShadowFlameShaders, ShadowFlameSystem, detectMobileTier } from './core/shadowFlame';
import { KHDRPipeline } from './core/khdrPipeline';
import { KHDRHyperPipeline } from './core/khdr/hyperPipeline';
import { KAtmosphere, SOLAR_ILLUMINANCE_TOA, SUN_SOLID_ANGLE } from './core/khdr/atmosphere';
import { installKhdrSplitLight } from './core/khdr/splitLight';
import type { KhdrGamut } from './core/khdr/gamutLut';
import {
  SPAWN_POINT,
  LOOKOUT_POINT,
  KOBAN_POINT,
  PARK_POINT,
  MINE_PORTAL_POINT,
  SECRET_BASE_POINT,
  SUMMIT_POINT,
  HIDDEN_PORT_POINT,
  EAST_CLIFF_POINT,
  WEST_BLUFF_POINT,
  NORTH_CALDERA_POINT,
} from './world/terrainMath';
import { TerrainStreamer } from './world/terrainStreamer';
import { FoliageStreamer } from './world/foliageStreamer';
import { buildOceanSystem } from './world/ocean';
import { buildVillageInfrastructure } from './world/villageInfrastructure';
import { buildAllHouses } from './world/houses';
import { FirstPersonController } from './player/firstPersonController';
import { GameHUD } from './ui/hud';

// Install proprietary Shadow Flame (Flash & Pro) GLSL kernels and the KHDR 1.2 K-SplitLight output patch
// globally before any materials compile!
installShadowFlameShaders();
installKhdrSplitLight();

// KHDR 1.2 hyper K-Radiance: physical light levels (lux / candela / cd/m^2), multiplied every frame by the
// CPU pre-exposure from K-Adapt v2. Legacy (KHDR OFF / 1.1) keeps the original artist values.
const HYPER_GROUND_ALBEDO = 0.11;
const HYPER_MINE_AMBIENT_LUX = 0.35; // faint cave fill
const HYPER_MINE_FOG_NITS = 0.012;
const HYPER_HEADLAMP_CD = 150; // miner's cap lamp
const HYPER_LAMP_CD_PER_LEGACY = 15; // legacy bulkhead intensity 4.2 -> ~63 cd (60 W bulb)
const HYPER_DECAY_COMP = Math.pow(3.0, 1.35 - 2.0); // match physical 1/d^2 irradiance at 3 m for decay 1.35
const LEGACY_AMBIENT_ILLUM = 2.3; // legacy hemi + 0.6 x horizontal sun, used to scale the ocean colours
const HYPER_SKY_CHROMA_ADAPT = 0.35;

// Atmospheric sky & aerial-perspective fog calibrated to 3km x 6km Japanese volcanic mountain photography
const FOG_COLOR = 0xb8d0e4;
const FOG_DENSITY = 0.000145;
const SUN_DIRECTION = new THREE.Vector3(0.54, 0.68, 0.49).normalize();

const RESOLUTION_CAPS: Record<ResolutionPreset, { maxW: number; maxH: number }> = {
  HD: { maxW: 1280, maxH: 720 },
  FHD: { maxW: 1920, maxH: 1080 },
  '1.5K': { maxW: 2560, maxH: 1440 },
};

/**
 * Builds an atmospheric Japanese mountain sky dome with azure zenith, crisp horizon haze
 * matching ocean & terrain FogExp2 seamlessly, subtle solar scatter, and soft mountain clouds.
 */
function createSkyDome(sunDir: THREE.Vector3): THREE.Mesh {
  const geo = new THREE.SphereGeometry(19500, 32, 20);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      uSunDir: { value: sunDir.clone().normalize() },
      uZenith: { value: new THREE.Color(0x437ec2) },
      uMidSky: { value: new THREE.Color(0x7fb4e2) },
      uHorizon: { value: new THREE.Color(FOG_COLOR) },
    },
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uSunDir;
      uniform vec3 uZenith;
      uniform vec3 uMidSky;
      uniform vec3 uHorizon;
      varying vec3 vDir;

      float hash2(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash2(i), hash2(i + vec2(1.0, 0.0)), u.x),
          mix(hash2(i + vec2(0.0, 1.0)), hash2(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p = p * 2.04 + vec2(13.7, 7.1);
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec3 d = normalize(vDir);
        float elev = clamp(d.y, 0.0, 1.0);

        // Smooth atmospheric gradient from horizon haze -> clear mid sky -> deep azure zenith
        vec3 sky = mix(uHorizon, uMidSky, smoothstep(0.0, 0.28, elev));
        sky = mix(sky, uZenith, smoothstep(0.24, 0.85, elev));

        // Soft wispy fair-weather mountain clouds high above the 865m peaks
        if (d.y > 0.05) {
          vec2 cloudUV = d.xz / (d.y + 0.22) * 1.45;
          float c = fbm(cloudUV + vec2(1.8, -0.9));
          float cloudMask = smoothstep(0.54, 0.80, c) * smoothstep(0.05, 0.22, d.y) * 0.42;
          sky = mix(sky, vec3(0.95, 0.97, 0.99), cloudMask);
        }

        // Solar glow & crisp HDR sun disc (exceeds 1.0 for KHDR optical corona bloom!)
        float sunDot = max(dot(d, uSunDir), 0.0);
        sky += vec3(1.0, 0.95, 0.84) * pow(sunDot, 12.0) * 0.28;
        sky += vec3(1.0, 0.98, 0.92) * smoothstep(0.9985, 0.9996, sunDot) * 2.2;

        // Below horizon blends into ocean mist color
        if (d.y < 0.0) {
          sky = mix(uHorizon, vec3(0.58, 0.72, 0.82), smoothstep(0.0, -0.18, d.y));
        }

        gl_FragColor = vec4(sky, 1.0);
      }
    `,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  return mesh;
}

const TELEPORT_PRESETS: Record<string, { x: number; z: number; yaw: number; pitch: number }> = {
  beach: { x: SPAWN_POINT.x, z: SPAWN_POINT.z, yaw: SPAWN_POINT.yaw, pitch: 0.05 },
  lookout: { x: LOOKOUT_POINT.x, z: LOOKOUT_POINT.z, yaw: 0.56, pitch: -0.05 },
  village: { x: 118, z: 325, yaw: 0.36, pitch: -0.04 },
  koban: { x: KOBAN_POINT.x - 14, z: KOBAN_POINT.z + 10, yaw: -0.45, pitch: -0.02 },
  park: { x: PARK_POINT.x + 8, z: PARK_POINT.z + 6, yaw: 0.65, pitch: -0.02 },
  mine: { x: MINE_PORTAL_POINT.x + 8, z: MINE_PORTAL_POINT.z + 24, yaw: 0.12, pitch: 0.05 },
  secret: { x: SECRET_BASE_POINT.x - 8, z: SECRET_BASE_POINT.z + 8, yaw: -0.68, pitch: 0.02 },
  trail: { x: 355, z: -1245, yaw: 0.96, pitch: 0.12 },
  summit: { x: SUMMIT_POINT.x - 4.5, z: SUMMIT_POINT.z - 5.5, yaw: -2.46, pitch: -0.14 },
  port: { x: HIDDEN_PORT_POINT.x + 2.5, z: HIDDEN_PORT_POINT.z + 2.5, yaw: 0.785, pitch: -0.08 },
  eastcliff: { x: EAST_CLIFF_POINT.x, z: EAST_CLIFF_POINT.z, yaw: -0.34, pitch: -0.14 },
  westbluff: { x: WEST_BLUFF_POINT.x, z: WEST_BLUFF_POINT.z, yaw: -1.24, pitch: -0.15 },
  caldera: { x: NORTH_CALDERA_POINT.x, z: NORTH_CALDERA_POINT.z, yaw: 1.22, pitch: -0.14 },
};

function bootstrap(): void {
  const params = new URLSearchParams(window.location.search);
  const skipIntro = params.get('skipIntro') === '1' || params.has('tp');
  const hideHud = params.get('hideHud') === '1';

  const initialRes = (['HD', 'FHD', '1.5K'].includes(params.get('res') || '')
    ? params.get('res')
    : 'FHD') as ResolutionPreset;
  const khdrParam = params.get('khdr');
  const initialKhdr: KhdrMode =
    khdrParam === '0' || khdrParam === 'off' ? 'off' : khdrParam === '1.1' || khdrParam === 'legacy' ? '1.1' : 'hyper';
  const initialShadow = (params.get('shadow')?.toLowerCase() === 'pro' ? 'pro' : 'flash') as ShadowFlameMode;

  const settings: GraphicsSettings = {
    resolution: initialRes,
    fpsLimit: '120',
    khdr: initialKhdr,
    shadowFlame: initialShadow,
  };

  const canvas = document.getElementById('webgl-canvas') as HTMLCanvasElement;
  const hudRoot = document.getElementById('hud-root') as HTMLElement;
  if (hideHud) {
    hudRoot.style.display = 'none';
  }

  // 1. WebGLRenderer setup
  // KHDR modes render into their own MSAA HDR target, so the canvas back buffer only receives one
  // full-screen triangle: skipping canvas MSAA saves a multisampled back buffer + resolve on POCO F7.
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: initialKhdr === 'off',
    powerPreference: 'high-performance',
    stencil: false,
  });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.06;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // 2. Scene, aerial perspective mountain fog, and long-horizon camera (22km far for 3km x 6km 865m summit!)
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(FOG_COLOR);
  scene.fog = new THREE.FogExp2(FOG_COLOR, FOG_DENSITY);

  const camera = new THREE.PerspectiveCamera(62, window.innerWidth / Math.max(1, window.innerHeight), 0.25, 22000);

  // 3. Sky Dome, Hemisphere Fill, Shadow Flame 1.1 Engine (Flash / Pro) & KHDR 1.1 Linear HDR Pipeline
  const mobileTier = detectMobileTier();
  const skyDome = createSkyDome(SUN_DIRECTION);
  const legacySkyMaterial = skyDome.material as THREE.ShaderMaterial;
  scene.add(skyDome);

  const hemiLight = new THREE.HemisphereLight(0xbce0ff, 0x566b46, 1.08);
  scene.add(hemiLight);

  const shadowFlame = new ShadowFlameSystem(scene, SUN_DIRECTION, settings.shadowFlame, mobileTier);
  const sunLight = shadowFlame.sunLight;
  const khdrPipeline = new KHDRPipeline(renderer, 1280, 720, settings.khdr === '1.1', SUN_DIRECTION, mobileTier);

  // KHDR 1.2 hyper (created lazily the first time the mode is selected)
  let atmosphere: KAtmosphere | null = null;
  let hyper: KHDRHyperPipeline | null = null;
  let shaderErrorCount = 0;
  let hyperErrorBaseline = 0;
  renderer.debug.onShaderError = (gl, program, glVertexShader, glFragmentShader) => {
    shaderErrorCount++;
    console.error(
      '[KHDR] shader program failed to compile/link',
      gl.getProgramInfoLog(program),
      gl.getShaderInfoLog(glVertexShader),
      gl.getShaderInfoLog(glFragmentShader)
    );
  };
  const glCtx = renderer.getContext() as WebGL2RenderingContext & { drawingBufferColorSpace?: string };
  const canP3 = 'drawingBufferColorSpace' in glCtx;
  const gamutParam = params.get('gamut');
  const displayIsP3 = typeof window.matchMedia === 'function' && window.matchMedia('(color-gamut: p3)').matches;
  const preferredGamut: KhdrGamut =
    canP3 && (gamutParam === 'p3' || (gamutParam !== 'srgb' && displayIsP3)) ? 'p3' : 'srgb';
  const applyDrawingBufferGamut = (g: KhdrGamut): KhdrGamut => {
    if (!canP3) return 'srgb';
    const want = g === 'p3' ? 'display-p3' : 'srgb';
    try {
      if (glCtx.drawingBufferColorSpace !== want) glCtx.drawingBufferColorSpace = want;
    } catch {
      /* unsupported colour space: keep sRGB */
    }
    return glCtx.drawingBufferColorSpace === 'display-p3' ? 'p3' : 'srgb';
  };

  // 4. Shared Texture Catalog (212 WebP tiles strictly from user-provided assets/textures/)
  const catalog = new TextureCatalog(renderer);

  // 5. Dynamic 5-LOD Streaming Terrain, 4-Tier Streaming Forest & Wind Grass, Ocean, Infrastructure & ALL 32 Structures
  const collision = new WorldCollision();
  const terrainStreamer = new TerrainStreamer(catalog);
  const foliageStreamer = new FoliageStreamer(catalog);
  foliageStreamer.setProShadows(settings.shadowFlame === 'pro');
  const oceanSystem = buildOceanSystem(catalog, SUN_DIRECTION);
  const infrastructure = buildVillageInfrastructure(catalog);
  const houseSystem = buildAllHouses(catalog);

  collision.registerStructures(houseSystem.structures);

  // K-Radiance emissive registry: lamp glass etc. get physical luminance (cd/m^2) in KHDR 1.2 hyper
  const emissiveMats: Array<{ mat: THREE.MeshStandardMaterial; base: number; nits: number; lum: number }> = [];
  {
    const seen = new Set<THREE.Material>();
    houseSystem.group.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh) return;
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const m of mats) {
        if (!m || seen.has(m) || !(m as THREE.MeshStandardMaterial).isMeshStandardMaterial) continue;
        seen.add(m);
        const sm = m as THREE.MeshStandardMaterial;
        const e = sm.emissive;
        const lum = 0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b;
        if (lum <= 1e-4 || sm.emissiveIntensity <= 0) continue;
        const hex = e.getHex();
        // koban red globe ~1800 cd/m^2, dusty caged mine-lamp glass ~6000 cd/m^2
        const nits = hex === 0xe6261a ? 1800 : hex === 0xffb454 ? 6000 : 3000 * sm.emissiveIntensity;
        emissiveMats.push({ mat: sm, base: sm.emissiveIntensity, nits, lum });
      }
    });
  }

  scene.add(terrainStreamer.group);
  scene.add(foliageStreamer.group);
  scene.add(oceanSystem.group);
  scene.add(infrastructure);
  scene.add(houseSystem.group);

  // ★ Subterranean 1890 Coal Mine Dynamic Explorer Headlamp & Strategic Warm Bulkhead Lights (0 cost outside mine!)
  const caveHeadlamp = new THREE.PointLight(0xffd292, 0, 34, 1.35);
  caveHeadlamp.visible = false;
  scene.add(caveHeadlamp);

  const mineStructure = houseSystem.getById('M01');
  const mineBulkheadLights: THREE.PointLight[] = [];
  const mineLampLegacy: number[] = [];
  if (mineStructure) {
    const mc = Math.cos(mineStructure.yaw);
    const ms = Math.sin(mineStructure.yaw);
    const mineLampSpecs: Array<[number, number, number, number, number, number]> = [
      // [lx, ly, lz, color, intensity, distance]
      [0.0, 3.15, -36.0, 0xffb35c, 4.2, 34],    // Main Haulage Drift & Tool Alcove
      [6.8, 2.95, -48.5, 0xffa64a, 3.4, 22],    // Brick Explosives Vault
      [0.0, 4.45, -73.0, 0xffbe68, 5.4, 42],    // Underground Turntable & Electric Hoist Hub
      [-26.0, 1.25, -73.0, 0x8cc8dc, 4.0, 32],  // West Flooded Drainage Pump Gallery (cool damp sheen!)
      [26.2, 4.95, -73.0, 0xffaa4c, 4.6, 30],   // East 1890 Hand-Dug Coal Stope & Mountain God Shrine!
      [0.0, 2.40, -119.0, 0xffbd6b, 6.2, 48],   // Deep -5.2m Grand Coal Cavern & Loading Hopper!
    ];
    for (const [lx, ly, lz, col, inten, dist] of mineLampSpecs) {
      const pl = new THREE.PointLight(col, inten, dist, 1.35);
      pl.position.set(
        mineStructure.position.x + lx * mc + lz * ms,
        mineStructure.position.y + ly,
        mineStructure.position.z - lx * ms + lz * mc
      );
      pl.visible = false;
      scene.add(pl);
      mineBulkheadLights.push(pl);
      mineLampLegacy.push(inten);
    }
  }

  const skyFogColor = new THREE.Color(FOG_COLOR);
  const mineFogColor = new THREE.Color(0x0c1015);
  const currentFogColor = new THREE.Color(FOG_COLOR);
  let caveLightFactor = 0;

  const updateSubterraneanAtmosphere = (instant = false) => {
    let targetFactor = 0;
    if (mineStructure) {
      const dx = controller.position.x - mineStructure.position.x;
      const dz = controller.position.z - mineStructure.position.z;
      if (dx * dx + dz * dz < 165 * 165) {
        const mc = Math.cos(mineStructure.yaw);
        const ms = Math.sin(mineStructure.yaw);
        const lx = dx * mc - dz * ms;
        const lz = dx * ms + dz * mc;
        if (lz < -14.0 && lx > -45 && lx < 42 && lz > -145) {
          // Smooth transition right through the 1890 stone arch portal (Z: -14 -> -26m!)
          targetFactor = Math.max(0, Math.min(1, (-14.0 - lz) / 12.0));
        }
      }
    }
    caveLightFactor = instant ? targetFactor : caveLightFactor + (targetFactor - caveLightFactor) * 0.16;
    if (caveLightFactor < 0.004 && targetFactor === 0) caveLightFactor = 0;

    if (scene.fog instanceof THREE.FogExp2) {
      scene.fog.density = FOG_DENSITY * (1 - caveLightFactor) + 0.0115 * caveLightFactor;
    }
    const caveActive = caveLightFactor > 0.02;
    caveHeadlamp.visible = caveActive;
    if (caveActive) {
      caveHeadlamp.position.copy(camera.position);
    }
    for (let i = 0; i < mineBulkheadLights.length; i++) {
      mineBulkheadLights[i].visible = caveActive;
    }
    applyLightingRegime();
  };

  const tmpFog = new THREE.Color();
  const tmpVecA = new THREE.Vector3();
  const tmpVecB = new THREE.Vector3();
  const groundTint = new THREE.Color(0x566b46);
  const groundTintLum = 0.2126 * groundTint.r + 0.7152 * groundTint.g + 0.0722 * groundTint.b;
  const lum3 = (v: THREE.Vector3) => 0.2126 * v.x + 0.7152 * v.y + 0.0722 * v.z;

  /**
   * Lighting regimes:
   *  - legacy (KHDR OFF / 1.1): the original artist-tuned light values
   *  - physical (KHDR 1.2 hyper, K-Radiance): sun, sky, fog colour, ocean and the sky dome all come from the
   *    same Hillaire atmosphere model (lux, cd/m^2); mine lamps / emissives in candela / cd/m^2. Everything is
   *    multiplied by the CPU pre-exposure so the RGBA16F buffer stays centred on middle grey everywhere.
   */
  function applyLightingRegime(): void {
    const cave = caveLightFactor;
    const fog = scene.fog instanceof THREE.FogExp2 ? scene.fog : null;
    if (settings.khdr !== 'hyper' || !hyper || !atmosphere) {
      if (skyDome.material !== legacySkyMaterial) skyDome.material = legacySkyMaterial;
      sunLight.color.set(0xfff5e2);
      sunLight.intensity = 2.32 * (1 - cave);
      hemiLight.color.set(0xbce0ff);
      hemiLight.groundColor.set(0x566b46);
      hemiLight.intensity = 1.08 * (1 - cave) + 0.24 * cave;
      currentFogColor.copy(skyFogColor).lerp(mineFogColor, cave);
      if (fog) fog.color.copy(currentFogColor);
      scene.background = currentFogColor;
      caveHeadlamp.intensity = 5.4 * cave;
      for (let i = 0; i < mineBulkheadLights.length; i++) mineBulkheadLights[i].intensity = mineLampLegacy[i];
      for (const e of emissiveMats) e.mat.emissiveIntensity = e.base;
      oceanSystem.setPhysical(null);
      return;
    }

    const P = hyper.getPreExposure();
    const atm = atmosphere.getLighting();
    const outdoor = 1 - cave;
    // Sun: illuminance & colour after atmospheric transmittance at the camera altitude
    const sunLum = Math.max(lum3(atm.sunIlluminance), 1e-3);
    sunLight.color.setRGB(atm.sunIlluminance.x / sunLum, atm.sunIlluminance.y / sunLum, atm.sunIlluminance.z / sunLum);
    sunLight.intensity = sunLum * P * outdoor;
    // Sky: hemisphere irradiance from the integrated sky-view LUT; ground bounce from a Lambertian island floor
    const skyLum = Math.max(lum3(atm.skyIrradiance), 1e-3);
    // Partial chromatic adaptation of the skylight colour (the eye white-balances open shade; a camera would
    // render it deep blue). 35% toward neutral, luminance preserved.
    {
      const cr = atm.skyIrradiance.x / skyLum + (1 - atm.skyIrradiance.x / skyLum) * HYPER_SKY_CHROMA_ADAPT;
      const cg = atm.skyIrradiance.y / skyLum + (1 - atm.skyIrradiance.y / skyLum) * HYPER_SKY_CHROMA_ADAPT;
      const cb = atm.skyIrradiance.z / skyLum + (1 - atm.skyIrradiance.z / skyLum) * HYPER_SKY_CHROMA_ADAPT;
      const cl = Math.max(0.2126 * cr + 0.7152 * cg + 0.0722 * cb, 1e-4);
      hemiLight.color.setRGB(cr / cl, cg / cl, cb / cl);
    }
    const groundUp = HYPER_GROUND_ALBEDO * (sunLum * SUN_DIRECTION.y + skyLum);
    const g = groundUp / skyLum / Math.max(groundTintLum, 1e-3);
    hemiLight.groundColor.setRGB(groundTint.r * g, groundTint.g * g, groundTint.b * g);
    hemiLight.intensity = (skyLum * outdoor + HYPER_MINE_AMBIENT_LUX * cave) * P;
    // Fog / aerial-perspective colour = the actual horizon sky radiance (so far ridges melt into the real sky)
    tmpFog.setRGB(atm.horizonRadiance.x * P * outdoor, atm.horizonRadiance.y * P * outdoor, atm.horizonRadiance.z * P * outdoor);
    tmpFog.r += HYPER_MINE_FOG_NITS * 0.8 * P * cave;
    tmpFog.g += HYPER_MINE_FOG_NITS * 0.9 * P * cave;
    tmpFog.b += HYPER_MINE_FOG_NITS * 1.1 * P * cave;
    currentFogColor.copy(tmpFog);
    if (fog) fog.color.copy(currentFogColor);
    scene.background = currentFogColor;
    // Physical sky dome
    if (skyDome.material !== atmosphere.skyMaterial) skyDome.material = atmosphere.skyMaterial;
    const su = atmosphere.skyMaterial.uniforms;
    su.uSkyScale.value = SOLAR_ILLUMINANCE_TOA * P;
    su.uSunDiscScale.value = (SOLAR_ILLUMINANCE_TOA / SUN_SOLID_ANGLE) * P;
    (su.uSunIrr.value as THREE.Vector3).copy(atm.sunIlluminance).multiplyScalar(P);
    (su.uSkyIrr.value as THREE.Vector3).copy(atm.skyIrradiance).multiplyScalar(P);
    su.uCaveDim.value = outdoor;
    // Coal-mine lamps (candela) and lamp glass / koban globe (cd/m^2)
    caveHeadlamp.intensity = HYPER_HEADLAMP_CD * HYPER_DECAY_COMP * P * cave;
    for (let i = 0; i < mineBulkheadLights.length; i++) {
      mineBulkheadLights[i].intensity = mineLampLegacy[i] * HYPER_LAMP_CD_PER_LEGACY * HYPER_DECAY_COMP * P;
    }
    for (const e of emissiveMats) e.mat.emissiveIntensity = (e.nits * P) / Math.max(e.lum, 1e-3);
    // Ocean: water body scaled by the physical illumination, glint lit by the real sun
    const illum = (skyLum + 0.6 * sunLum * SUN_DIRECTION.y) * P * outdoor;
    oceanSystem.setPhysical({
      illumScale: illum / LEGACY_AMBIENT_ILLUM,
      skyRadiance: tmpVecA.copy(atm.horizonRadiance).multiplyScalar(0.75 * P * outdoor),
      sunIlluminance: tmpVecB.copy(atm.sunIlluminance).multiplyScalar(P * outdoor),
      fogColor: currentFogColor,
      fogDensity: fog ? fog.density : FOG_DENSITY,
    });
    hyper.setSunColor(atm.sunIlluminance);
  }

  /** Context estimate (log2 cd/m^2) used to snap K-Adapt v2 on teleports / mode switches. */
  const adaptationContextLog = (): number => {
    if (caveLightFactor > 0.5) return Math.log2(0.6);
    return Math.log2(2600);
  };

  const ensureHyper = (): boolean => {
    if (hyper && atmosphere) return true;
    if (!KHDRHyperPipeline.isSupported(renderer)) return false;
    try {
      atmosphere = new KAtmosphere(renderer, SUN_DIRECTION, Math.max(0, camera.position.y));
      hyper = new KHDRHyperPipeline(renderer, renderWidth, renderHeight, SUN_DIRECTION, mobileTier);
      return true;
    } catch (e) {
      console.error('[KHDR] 1.2 hyper initialisation failed', e);
      atmosphere?.dispose();
      hyper?.dispose();
      atmosphere = null;
      hyper = null;
      return false;
    }
  };

  const setKhdrMode = (mode: KhdrMode): void => {
    let m = mode;
    if (m === 'hyper' && !ensureHyper()) {
      console.warn('[KHDR] 1.2 hyper is not supported on this device, falling back to KHDR 1.1');
      m = '1.1';
    }
    settings.khdr = m;
    khdrPipeline.setEnabled(m === '1.1');
    if (m === 'hyper' && hyper) {
      renderer.toneMapping = THREE.NoToneMapping;
      hyperErrorBaseline = shaderErrorCount;
      hyper.setOutputGamut(applyDrawingBufferGamut(preferredGamut));
      hyper.snap(adaptationContextLog());
    } else {
      applyDrawingBufferGamut('srgb');
    }
    applyLightingRegime();
  };

  // Register lowercase structure IDs (h01..h25, s01, s02, port01, k01, p01, b01, m01) as instant teleport presets
  const presets: Record<string, { x: number; z: number; yaw: number; pitch: number }> = {
    ...TELEPORT_PRESETS,
  };
  for (let i = 0; i < houseSystem.structures.length; i++) {
    const s = houseSystem.structures[i];
    presets[s.id.toLowerCase()] = {
      x: s.entryPoint.x,
      z: s.entryPoint.z,
      yaw: s.entryPoint.lookYaw ?? s.yaw,
      pitch: 0.04,
    };
  }
  // Ensure semantic landmark presets point right at the finished entry vantages!
  if (presets.k01) presets.koban = presets.k01;
  if (presets.p01) presets.park = presets.p01;
  if (presets.b01) presets.secret = presets.b01;
  if (presets.m01) presets.mine = presets.m01;
  if (presets.port01) presets.port = presets.port01;

  // 6. Player First-Person Controller (supports optional ?tp= preset for instant inspection)
  const controller = new FirstPersonController(camera, canvas, collision, skipIntro);

  const tpKey = params.get('tp')?.toLowerCase();
  if (tpKey && presets[tpKey]) {
    const t = presets[tpKey];
    const yawOverride = params.has('yaw') ? Number(params.get('yaw')) : t.yaw;
    const pitchOverride = params.has('pitch') ? Number(params.get('pitch')) : t.pitch;
    controller.teleport(t.x, t.z, yawOverride, pitchOverride);
  }

  // Instant warm-start around initial position (builds immediate LOD0/1 terrain, grass, and house visibility)
  const warmStreamAroundPlayer = () => {
    terrainStreamer.warmStart(controller.position.x, controller.position.z);
    foliageStreamer.warmStart(controller.position.x, controller.position.z);
    houseSystem.update(controller.position);
    updateSubterraneanAtmosphere(true);
    shadowFlame.invalidate();
    khdrPipeline.resetAdaptation();
    hyper?.snap(adaptationContextLog());
  };
  warmStreamAroundPlayer();

  // 7. Resolution Manager (HD 1280x720 / FHD 1920x1080 / 1.5K 2560x1440) + KHDR 1.1 buffer sync
  let renderWidth = 1280;
  let renderHeight = 720;

  const applyResolution = () => {
    const cssW = Math.max(320, window.innerWidth);
    const cssH = Math.max(200, window.innerHeight);
    const aspect = cssW / cssH;
    const cap = RESOLUTION_CAPS[settings.resolution];

    // Match exact preset resolution target preserving current landscape/viewport aspect ratio
    let w = cap.maxW;
    let h = Math.round(w / aspect);
    if (h > cap.maxH) {
      h = cap.maxH;
      w = Math.round(h * aspect);
    }
    renderWidth = Math.max(320, w);
    renderHeight = Math.max(200, h);

    renderer.setPixelRatio(1);
    renderer.setSize(renderWidth, renderHeight, false);
    khdrPipeline.setSize(renderWidth, renderHeight);
    hyper?.setSize(renderWidth, renderHeight);
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
  };

  applyResolution();
  setKhdrMode(settings.khdr);
  window.addEventListener('resize', applyResolution);
  window.addEventListener('orientationchange', () => window.setTimeout(applyResolution, 120));

  const applyGraphicsSettings = (next: GraphicsSettings) => {
    const resChanged = settings.resolution !== next.resolution;
    const shadowChanged = settings.shadowFlame !== next.shadowFlame;
    settings.resolution = next.resolution;
    settings.fpsLimit = next.fpsLimit;
    const khdrChanged = settings.khdr !== next.khdr;
    settings.shadowFlame = next.shadowFlame;
    if (khdrChanged) setKhdrMode(next.khdr);
    if (shadowChanged) {
      shadowFlame.setMode(settings.shadowFlame);
      foliageStreamer.setProShadows(settings.shadowFlame === 'pro', controller.position.x, controller.position.z);
    }
    if (resChanged) {
      applyResolution();
    }
  };

  // 8. HUD & Interactive 3km x 6km Topographic Map
  const hud = new GameHUD(
    hudRoot,
    controller,
    settings,
    {
      onGraphicsChange: (next) => {
        applyGraphicsSettings(next);
      },
      onTeleport: (x, z, yaw, pitch) => {
        controller.teleport(x, z, yaw, pitch);
        warmStreamAroundPlayer();
      },
      onWakeUp: () => {
        controller.beginWakeUp();
      },
    },
    skipIntro,
    houseSystem.structures
  );

  // 9. Main Render Loop with 120 FPS / Unlimited FPS Pacing, Shadow Flame 1.1 Staggered Cascades & KHDR 1.1
  let lastRenderTime = performance.now();
  let lastPhysicsTime = lastRenderTime;
  let smoothFrameMs = 16.6;
  const startTime = lastRenderTime;
  let renderedFrames = 0;
  let loopPaused = false;

  const updateSunShadowFollow = (elapsedSec = 0, force = false) => {
    const tS = terrainStreamer.getStats();
    const fS = foliageStreamer.getStats();
    const hS = houseSystem.getStats();
    const sig = `${tS.activeChunks}:${tS.lod0Count}:${tS.lod1Count}:${fS.nearForestCells}:${fS.midForestCells}:${hS.visibleHouses}:${shadowFlame.getMode()}`;
    shadowFlame.update(controller.position, sig, elapsedSec, force);
  };

  const renderSingleFrame = (now: number, forceHud = false) => {
    const frameMsRaw = Math.max(1.0, now - lastRenderTime);
    const physDt = Math.max(0.001, (now - lastPhysicsTime) * 0.001);
    lastRenderTime = now;
    lastPhysicsTime = now;

    const elapsedSec = (now - startTime) * 0.001;

    // Update player first-person movement & collision
    controller.update(physDt);

    // Update ocean waves, strictly budgeted terrain/foliage streaming & house distance culling
    oceanSystem.update(elapsedSec);
    terrainStreamer.update(controller.position.x, controller.position.z, 4.2);
    foliageStreamer.update(controller.position.x, controller.position.z, elapsedSec);
    houseSystem.update(controller.position);

    // Keep sky dome centered on camera, Shadow Flame cascades synced, and subterranean cave lights tuned!
    skyDome.position.copy(camera.position);
    const hyperActive = settings.khdr === 'hyper' && hyper !== null && atmosphere !== null;
    const hyperCtx = {
      dt: physDt,
      caveFactor: caveLightFactor,
      inside: controller.insideStructure !== null,
      shadowMode: settings.shadowFlame,
    };
    if (hyperActive) {
      // K-Atmos altitude refresh + K-Adapt v2 step => pre-exposure for this frame (before lights are set)
      atmosphere!.update(Math.max(0, camera.position.y));
      hyper!.beginFrame(hyperCtx);
    }
    updateSubterraneanAtmosphere(forceHud);
    updateSunShadowFollow(elapsedSec, forceHud);

    if (hyperActive) {
      // KHDR 1.2 hyper: physical HDR chain (K-Glare, K-Meter, K-LHE v3, K-Filmic v3, P3 ...)
      hyper!.render(scene, camera, hyperCtx);
      if (shaderErrorCount > hyperErrorBaseline) {
        console.warn('[KHDR] 1.2 hyper shader failure detected -> automatic fallback to KHDR 1.1');
        setKhdrMode('1.1');
        hud.syncGraphicsUI(settings);
      }
    } else {
      // KHDR 1.1 (or OFF): legacy pipeline
      khdrPipeline.render(scene, camera, caveLightFactor, settings.shadowFlame, physDt);
    }

    // Consistent FPS / frame-ms telemetry (ignore initial 3 shader-compile warmup frames)
    if (renderedFrames >= 3) {
      const clampedMs = Math.min(250, frameMsRaw);
      smoothFrameMs = renderedFrames === 3 ? clampedMs : smoothFrameMs * 0.88 + clampedMs * 0.12;
    }
    const smoothFps = Math.min(999, 1000 / Math.max(1, smoothFrameMs));

    hud.update(
      {
        fps: smoothFps,
        frameMs: smoothFrameMs,
        renderWidth,
        renderHeight,
        khdr: settings.khdr,
        khdrInfo: hyperActive && hyper ? `EV${hyper.getTelemetry().ev100.toFixed(1)}` : undefined,
        shadowFlame: settings.shadowFlame,
        terrain: terrainStreamer.getStats(),
        foliage: foliageStreamer.getStats(),
        houses: houseSystem.getStats(),
      },
      forceHud ? now + 500 : now
    );

    renderedFrames++;
    if (renderedFrames === 8) {
      (window as unknown as Record<string, unknown>).__KUROISO_READY__ = true;
    }
  };

  const animate = (now: number) => {
    requestAnimationFrame(animate);
    if (loopPaused) return;

    // Enforce 120 FPS cap when selected; render uncapped in 'unlimited' mode
    if (settings.fpsLimit === '120') {
      const minInterval = 1000 / 120 - 0.45;
      if (now - lastRenderTime < minInterval) return;
    }

    renderSingleFrame(now);
  };

  // Expose lightweight debug telemetry & live KHDR 1.1 / Shadow Flame 1.1 A/B toggle for verification scripts
  (window as unknown as Record<string, unknown>).__KUROISO_DEBUG__ = {
    setPaused: (paused: boolean) => {
      loopPaused = paused;
    },
    setGraphics: (partial: Partial<GraphicsSettings>) => {
      const merged: GraphicsSettings = { ...settings, ...partial };
      applyGraphicsSettings(merged);
      hud.syncGraphicsUI(merged);
      updateSunShadowFollow((performance.now() - startTime) * 0.001, true);
    },
    renderFrame: () => {
      renderSingleFrame(performance.now(), true);
    },
    teleport: (x: number, z: number, yaw?: number, pitch?: number, yOverride?: number) => {
      controller.teleport(x, z, yaw, pitch, yOverride);
      warmStreamAroundPlayer();
      skyDome.position.copy(camera.position);
      updateSunShadowFollow((performance.now() - startTime) * 0.001, true);
    },
    teleportPreset: (key: string, yawOverride?: number, pitchOverride?: number) => {
      const t = presets[key.toLowerCase()];
      if (!t) return;
      controller.teleport(t.x, t.z, yawOverride ?? t.yaw, pitchOverride ?? t.pitch);
      warmStreamAroundPlayer();
      skyDome.position.copy(camera.position);
      updateSunShadowFollow((performance.now() - startTime) * 0.001, true);
    },
    teleportHouse: (
      id: string,
      lx: number,
      ly: number | null,
      lz: number,
      localYaw = 0,
      pitch = -0.04
    ) => {
      const s = houseSystem.getById(id.toUpperCase());
      if (!s) return false;
      const c = Math.cos(s.yaw);
      const sn = Math.sin(s.yaw);
      const wx = s.position.x + lx * c + lz * sn;
      const wz = s.position.z - lx * sn + lz * c;
      const wy = ly === null ? undefined : s.position.y + ly;
      controller.teleport(wx, wz, s.yaw + localYaw, pitch, wy);
      warmStreamAroundPlayer();
      skyDome.position.copy(camera.position);
      updateSunShadowFollow((performance.now() - startTime) * 0.001, true);
      return true;
    },
    getKhdr: () => ({
      mode: settings.khdr,
      telemetry: hyper ? hyper.getTelemetry() : null,
      atmosphere: atmosphere ? atmosphere.getLighting() : null,
      preExposure: hyper ? hyper.getPreExposure() : 1,
      shaderErrors: shaderErrorCount,
      drawingBufferColorSpace: glCtx.drawingBufferColorSpace ?? 'srgb',
      toneMapping: renderer.toneMapping,
      toneMappingExposure: renderer.toneMappingExposure,
      canvasMsaa: renderer.getContextAttributes()?.antialias === true,
    }),
    setKhdrDebugView: (on: boolean) => {
      hyper?.setDebugView(on);
    },
    houses: houseSystem.structures.map((s) => ({
      id: s.id,
      name: s.name,
      stories: s.stories,
      pos: s.position.toArray(),
      yaw: s.yaw,
      entry: s.entryPoint,
      floors: s.floorElevations,
    })),
    getStats: () => ({
      pos: controller.position.toArray(),
      inside: controller.insideStructure?.id ?? null,
      khdr: settings.khdr,
      shadowFlame: shadowFlame.getStats(),
      terrain: terrainStreamer.getStats(),
      foliage: foliageStreamer.getStats(),
      houses: houseSystem.getStats(),
      render: [renderWidth, renderHeight],
      rendererInfo: {
        calls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
        geometries: renderer.info.memory.geometries,
      },
    }),
  };

  requestAnimationFrame(animate);
}

bootstrap();
