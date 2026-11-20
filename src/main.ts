import * as THREE from 'three';
import './styles.css';
import { GraphicsSettings, ResolutionPreset } from './core/types';
import { TextureCatalog } from './core/textureCatalog';
import { WorldCollision } from './core/collision';
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

        // Solar glow & crisp sun disc
        float sunDot = max(dot(d, uSunDir), 0.0);
        sky += vec3(1.0, 0.95, 0.84) * pow(sunDot, 12.0) * 0.24;
        sky += vec3(1.0, 0.98, 0.92) * smoothstep(0.9985, 0.9996, sunDot) * 1.25;

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

  const settings: GraphicsSettings = {
    resolution: initialRes,
    fpsLimit: '120',
  };

  const canvas = document.getElementById('webgl-canvas') as HTMLCanvasElement;
  const hudRoot = document.getElementById('hud-root') as HTMLElement;
  if (hideHud) {
    hudRoot.style.display = 'none';
  }

  // 1. WebGLRenderer setup
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
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

  // 3. Sky Dome & Lighting (sun shadow frustum follows player across 2km x 5km!)
  const skyDome = createSkyDome(SUN_DIRECTION);
  scene.add(skyDome);

  const hemiLight = new THREE.HemisphereLight(0xbce0ff, 0x566b46, 1.08);
  scene.add(hemiLight);

  const sunLight = new THREE.DirectionalLight(0xfff5e2, 2.32);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.near = 20;
  sunLight.shadow.camera.far = 520;
  const shadowHalf = 108;
  sunLight.shadow.camera.left = -shadowHalf;
  sunLight.shadow.camera.right = shadowHalf;
  sunLight.shadow.camera.top = shadowHalf;
  sunLight.shadow.camera.bottom = -shadowHalf;
  sunLight.shadow.bias = -0.0005;
  sunLight.shadow.normalBias = 0.04;
  scene.add(sunLight);
  scene.add(sunLight.target);

  // 4. Shared Texture Catalog (212 WebP tiles strictly from user-provided assets/textures/)
  const catalog = new TextureCatalog(renderer);

  // 5. Dynamic 4-LOD Streaming Terrain, 3-Tier Streaming Forest & Wind Grass, Ocean, Infrastructure & ALL 32 Structures
  const collision = new WorldCollision();
  const terrainStreamer = new TerrainStreamer(catalog);
  const foliageStreamer = new FoliageStreamer(catalog);
  const oceanSystem = buildOceanSystem(catalog, SUN_DIRECTION);
  const infrastructure = buildVillageInfrastructure(catalog);
  const houseSystem = buildAllHouses(catalog);

  collision.registerStructures(houseSystem.structures);

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

    // Dim outdoor sun & sky fill smoothly as player enters deep beneath Mt. Kuroiso
    sunLight.intensity = 2.32 * (1 - caveLightFactor);
    hemiLight.intensity = 1.08 * (1 - caveLightFactor) + 0.24 * caveLightFactor;
    if (scene.fog instanceof THREE.FogExp2) {
      currentFogColor.copy(skyFogColor).lerp(mineFogColor, caveLightFactor);
      scene.fog.color.copy(currentFogColor);
      scene.fog.density = FOG_DENSITY * (1 - caveLightFactor) + 0.0115 * caveLightFactor;
      scene.background = currentFogColor;
    }

    const caveActive = caveLightFactor > 0.02;
    caveHeadlamp.visible = caveActive;
    if (caveActive) {
      caveHeadlamp.position.copy(camera.position);
      caveHeadlamp.intensity = 5.4 * caveLightFactor;
    }
    for (let i = 0; i < mineBulkheadLights.length; i++) {
      mineBulkheadLights[i].visible = caveActive;
    }
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
  };
  warmStreamAroundPlayer();

  // 7. Resolution Manager (HD 1280x720 / FHD 1920x1080 / 1.5K 2560x1440)
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
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
  };

  applyResolution();
  window.addEventListener('resize', applyResolution);
  window.addEventListener('orientationchange', () => window.setTimeout(applyResolution, 120));

  // 8. HUD & Interactive 2km x 5km Topographic Map
  const hud = new GameHUD(
    hudRoot,
    controller,
    settings,
    {
      onGraphicsChange: (next) => {
        settings.resolution = next.resolution;
        settings.fpsLimit = next.fpsLimit;
        applyResolution();
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

  // 9. Main Render Loop with 120 FPS / Unlimited FPS Pacing & Streaming Budgets
  let lastRenderTime = performance.now();
  let lastPhysicsTime = lastRenderTime;
  let smoothFrameMs = 16.6;
  const startTime = lastRenderTime;
  let renderedFrames = 0;
  let loopPaused = false;

  const updateSunShadowFollow = () => {
    // Snap shadow camera center to 2m grid increments to completely eliminate shadow shimmering!
    const snapX = Math.round(controller.position.x * 0.5) * 2;
    const snapY = Math.round(controller.position.y * 0.5) * 2;
    const snapZ = Math.round(controller.position.z * 0.5) * 2;
    sunLight.target.position.set(snapX, snapY, snapZ);
    sunLight.position.set(
      snapX + SUN_DIRECTION.x * 240,
      snapY + SUN_DIRECTION.y * 240,
      snapZ + SUN_DIRECTION.z * 240
    );
    sunLight.target.updateMatrixWorld();
  };

  const renderSingleFrame = (now: number, forceHud = false) => {
    const frameMsRaw = Math.max(1.0, now - lastRenderTime);
    const physDt = Math.max(0.001, (now - lastPhysicsTime) * 0.001);
    lastRenderTime = now;
    lastPhysicsTime = now;

    const elapsedSec = (now - startTime) * 0.001;

    // Update player first-person movement & collision
    controller.update(physDt);

    // Keep sky dome centered on camera, dynamic sun shadow box locked, and subterranean cave lights tuned!
    skyDome.position.copy(camera.position);
    updateSunShadowFollow();
    updateSubterraneanAtmosphere(forceHud);

    // Update ocean waves, strictly budgeted terrain/foliage streaming & house distance culling
    oceanSystem.update(elapsedSec);
    terrainStreamer.update(controller.position.x, controller.position.z, 4.2);
    foliageStreamer.update(controller.position.x, controller.position.z, elapsedSec);
    houseSystem.update(controller.position);

    // Render frame
    renderer.render(scene, camera);

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

  // Expose lightweight debug telemetry for verification scripts
  (window as unknown as Record<string, unknown>).__KUROISO_DEBUG__ = {
    setPaused: (paused: boolean) => {
      loopPaused = paused;
    },
    renderFrame: () => {
      renderSingleFrame(performance.now(), true);
    },
    teleport: (x: number, z: number, yaw?: number, pitch?: number, yOverride?: number) => {
      controller.teleport(x, z, yaw, pitch, yOverride);
      warmStreamAroundPlayer();
      skyDome.position.copy(camera.position);
      updateSunShadowFollow();
    },
    teleportPreset: (key: string, yawOverride?: number, pitchOverride?: number) => {
      const t = presets[key.toLowerCase()];
      if (!t) return;
      controller.teleport(t.x, t.z, yawOverride ?? t.yaw, pitchOverride ?? t.pitch);
      warmStreamAroundPlayer();
      skyDome.position.copy(camera.position);
      updateSunShadowFollow();
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
      updateSunShadowFollow();
      return true;
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
