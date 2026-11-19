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
} from './world/terrainMath';
import { TerrainStreamer } from './world/terrainStreamer';
import { FoliageStreamer } from './world/foliageStreamer';
import { buildOceanSystem } from './world/ocean';
import { buildVillageInfrastructure } from './world/villageInfrastructure';
import { FirstPersonController } from './player/firstPersonController';
import { GameHUD } from './ui/hud';

// Atmospheric sky & aerial-perspective fog calibrated to Japanese mountain photography
const FOG_COLOR = 0xb8d0e4;
const FOG_DENSITY = 0.000175;
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
  const geo = new THREE.SphereGeometry(16000, 32, 20);
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

  // 2. Scene, aerial perspective mountain fog, and long-horizon camera (18km far for 865m summit!)
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(FOG_COLOR);
  scene.fog = new THREE.FogExp2(FOG_COLOR, FOG_DENSITY);

  const camera = new THREE.PerspectiveCamera(62, window.innerWidth / Math.max(1, window.innerHeight), 0.25, 18500);

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

  // 5. Dynamic 4-LOD Streaming Terrain, 3-Tier Streaming Forest & Wind Grass, Ocean & Hillside Infrastructure
  const collision = new WorldCollision();
  const terrainStreamer = new TerrainStreamer(catalog);
  const foliageStreamer = new FoliageStreamer(catalog);
  const oceanSystem = buildOceanSystem(catalog, SUN_DIRECTION);
  const infrastructure = buildVillageInfrastructure(catalog);

  scene.add(terrainStreamer.group);
  scene.add(foliageStreamer.group);
  scene.add(oceanSystem.group);
  scene.add(infrastructure);

  // 6. Player First-Person Controller (supports optional ?tp= preset for instant inspection)
  const controller = new FirstPersonController(camera, canvas, collision, skipIntro);

  const tpKey = params.get('tp');
  if (tpKey && TELEPORT_PRESETS[tpKey]) {
    const t = TELEPORT_PRESETS[tpKey];
    const yawOverride = params.has('yaw') ? Number(params.get('yaw')) : t.yaw;
    const pitchOverride = params.has('pitch') ? Number(params.get('pitch')) : t.pitch;
    controller.teleport(t.x, t.z, yawOverride, pitchOverride);
  }

  // Instant warm-start around initial position (builds immediate LOD0/1 terrain, grass, and horizon silhouettes)
  const warmStreamAroundPlayer = () => {
    terrainStreamer.warmStart(controller.position.x, controller.position.z);
    foliageStreamer.warmStart(controller.position.x, controller.position.z);
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
    skipIntro
  );

  // 9. Main Render Loop with 120 FPS / Unlimited FPS Pacing & Streaming Budgets
  let lastRenderTime = performance.now();
  let lastPhysicsTime = lastRenderTime;
  let smoothFrameMs = 16.6;
  const startTime = lastRenderTime;
  let renderedFrames = 0;

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

  const animate = (now: number) => {
    requestAnimationFrame(animate);

    // Enforce 120 FPS cap when selected; render uncapped in 'unlimited' mode
    if (settings.fpsLimit === '120') {
      const minInterval = 1000 / 120 - 0.45;
      if (now - lastRenderTime < minInterval) return;
    }

    const frameMsRaw = Math.max(1.0, now - lastRenderTime);
    const physDt = Math.max(0.001, (now - lastPhysicsTime) * 0.001);
    lastRenderTime = now;
    lastPhysicsTime = now;

    const elapsedSec = (now - startTime) * 0.001;

    // Update player first-person movement & collision
    controller.update(physDt);

    // Keep sky dome centered on camera & dynamic sun shadow box locked around player
    skyDome.position.copy(camera.position);
    updateSunShadowFollow();

    // Update ocean waves & strictly budgeted terrain / foliage streaming
    oceanSystem.update(elapsedSec);
    terrainStreamer.update(controller.position.x, controller.position.z, 4.2);
    foliageStreamer.update(controller.position.x, controller.position.z, elapsedSec);

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
      },
      now
    );

    renderedFrames++;
    if (renderedFrames === 8) {
      (window as unknown as Record<string, unknown>).__KUROISO_READY__ = true;
    }
  };

  // Expose lightweight debug telemetry for verification scripts
  (window as unknown as Record<string, unknown>).__KUROISO_DEBUG__ = {
    teleport: (x: number, z: number, yaw?: number, pitch?: number) => {
      controller.teleport(x, z, yaw, pitch);
      warmStreamAroundPlayer();
      skyDome.position.copy(camera.position);
      updateSunShadowFollow();
    },
    teleportPreset: (key: string, yawOverride?: number, pitchOverride?: number) => {
      const t = TELEPORT_PRESETS[key];
      if (!t) return;
      controller.teleport(t.x, t.z, yawOverride ?? t.yaw, pitchOverride ?? t.pitch);
      warmStreamAroundPlayer();
      skyDome.position.copy(camera.position);
      updateSunShadowFollow();
    },
    getStats: () => ({
      pos: controller.position.toArray(),
      terrain: terrainStreamer.getStats(),
      foliage: foliageStreamer.getStats(),
      render: [renderWidth, renderHeight],
    }),
  };

  requestAnimationFrame(animate);
}

bootstrap();
