import * as THREE from 'three';
import { TextureCatalog } from '../core/textureCatalog';
import {
  TERRAIN_EXTENT_X,
  TERRAIN_EXTENT_Z,
  SUMMIT_POINT,
  LOOKOUT_POINT,
  sampleTerrain,
  getTerrainNormal,
  isInsideBuiltHouseFootprint,
} from './terrainMath';

const FOREST_CELL = 256; // Macro & mid forest canopy streaming cell (256m x 256m)
const DETAIL_CELL = 128; // High-detail near forest + mossy boulders (128m x 128m)
const GRASS_CELL = 64;   // Ultra-dense swaying wild grass, weeds, ferns, pampas (64m x 64m)

function cellHash(cx: number, cz: number, salt: number): () => number {
  let a = (Math.imul(cx, 374761393) ^ Math.imul(cz, 668265263) ^ Math.imul(salt, 1442695041)) >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Builds an organic crossed-blade 3-plane star tuft geometry with slightly curved tips
 * and vertex attribute `aHeight` (0 at roots -> 1 at tips) for smooth GPU wind swaying.
 */
function createCrossedTuftGeometry(width: number, height: number): THREE.BufferGeometry {
  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];
  const planes = 3;

  for (let p = 0; p < planes; p++) {
    const ang = (p / planes) * Math.PI;
    const dx = Math.cos(ang) * width * 0.5;
    const dz = Math.sin(ang) * width * 0.5;
    // Slight organic outward droop at top of blade cluster
    const bendX = -Math.sin(ang) * width * 0.14;
    const bendZ = Math.cos(ang) * width * 0.14;
    const base = p * 4;

    positions.push(
      -dx, 0, -dz,
      dx, 0, dz,
      -dx * 0.72 + bendX, height, -dz * 0.72 + bendZ,
      dx * 0.72 + bendX, height, dz * 0.72 + bendZ
    );
    // Point normals predominantly upward so grass catches warm sky/sun light smoothly like real blades!
    for (let k = 0; k < 4; k++) {
      normals.push(0, 1, 0);
    }
    uvs.push(0, 0, 1, 0, 0, 1, 1, 1);
    indices.push(base, base + 1, base + 2, base + 1, base + 3, base + 2);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  return geo;
}

/**
 * Creates a GPU wind-swaying alpha-cutout vegetation material from any extracted ground/foliage tile.
 * Uses procedural jagged grass-blade / fern-frond silhouette masking in fragment shader so
 * opaque JPEG/WebP textures render as natural organic blades, weeds, ferns, and pampas tufts!
 */
function createWindGrassMaterial(
  catalog: TextureCatalog,
  tileName: string,
  tint: number,
  windUniform: { value: number },
  bladeDensity: number,
  maxFadeDist: number,
  windStrength: number
): THREE.MeshStandardMaterial {
  const tex = catalog.getTexture(tileName, 1, 1);
  const mat = new THREE.MeshStandardMaterial({
    map: tex,
    color: tint,
    roughness: 0.78,
    metalness: 0.0,
    side: THREE.DoubleSide,
    alphaTest: 0.34,
  });

  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uWindTime = windUniform;
    shader.uniforms.uBladeDensity = { value: bladeDensity };
    shader.uniforms.uMaxFade = { value: maxFadeDist };
    shader.uniforms.uWindStr = { value: windStrength };

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform float uWindTime;
        uniform float uWindStr;
        varying vec2 vGrassUv;
        varying float vCamDist;`
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        vGrassUv = uv;
        vec4 instWorld = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float phase = instWorld.x * 0.14 + instWorld.z * 0.11;
        float gust = sin(uWindTime * 1.9 + phase) + 0.45 * sin(uWindTime * 3.7 + phase * 1.7);
        float tipFlex = uv.y * uv.y;
        transformed.x += gust * uWindStr * tipFlex;
        transformed.z += cos(uWindTime * 1.45 + phase * 0.8) * (uWindStr * 0.65) * tipFlex;
        vCamDist = distance(cameraPosition, instWorld.xyz);`
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform float uBladeDensity;
        uniform float uMaxFade;
        varying vec2 vGrassUv;
        varying float vCamDist;`
      )
      .replace(
        '#include <alphatest_fragment>',
        `// Sculpt organic spiky grass/weed/fern silhouette tips from UV without separate alpha PNG
        float x = vGrassUv.x;
        float y = vGrassUv.y;
        float blades = sin(x * 3.14159 * uBladeDensity) * 0.5 + 0.5;
        float subBlades = sin(x * 3.14159 * (uBladeDensity * 1.73) + 1.2) * 0.5 + 0.5;
        float arch = sin(x * 3.14159);
        float tipLimit = (0.24 + 0.54 * blades + 0.26 * subBlades) * (0.48 + 0.52 * arch);
        float distFade = 1.0 - smoothstep(uMaxFade * 0.68, uMaxFade, vCamDist);
        float mask = smoothstep(y - 0.09, y + 0.04, tipLimit * distFade);
        // Subtle root AO transitioning into warm sunlit translucent blade tips
        diffuseColor.rgb *= mix(0.62, 1.24, smoothstep(0.0, 0.78, y));
        diffuseColor.a = mask;
        #include <alphatest_fragment>`
      )
      .replace(
        '#include <normal_fragment_begin>',
        `#include <normal_fragment_begin>
        // CRITICAL: Never flip grass normals downward on DoubleSide back faces (eliminates black grass!)
        normal = normalize(vNormal);`
      );
  };

  mat.customProgramCacheKey = () => `wind-grass-v2-${tileName}-${bladeDensity}-${maxFadeDist}`;
  return mat;
}

/**
 * Sculpts an organic drooping-bough Japanese Cedar (杉・檜) foliage tier with ruffled scalloped
 * branch tips and upward-biased lighting normals so trees read as lush organic evergreens, not sharp cones.
 * Uses openEnded=true to eliminate unseen bottom cap triangles for maximum GPU throughput!
 */
function createOrganicCedarTier(
  botR: number,
  topR: number,
  height: number,
  baseY: number,
  radialSegs: number,
  heightSegs: number,
  droop: number,
  seed: number
): THREE.BufferGeometry {
  const geo = new THREE.CylinderGeometry(topR, botR, height, radialSegs, heightSegs, true);
  geo.translate(0, baseY + height * 0.5, 0);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const r = Math.hypot(x, z);
    if (r < 0.05) continue;
    const ang = Math.atan2(z, x);
    const t = Math.max(0, Math.min(1, (y - baseY) / height));
    // Scalloped projecting cedar boughs with drooping tips around lower rim
    const boughWave = 1.0 + 0.22 * Math.sin(ang * (radialSegs * 0.5) + seed) + 0.11 * Math.cos(ang * 3.0 - seed);
    const flare = 1.0 + (1.0 - t) * (1.0 - t) * 0.18;
    const nr = r * boughWave * flare;
    const ny = y - Math.max(0, (boughWave - 0.95)) * droop * (1.0 - t * 0.75);
    pos.setXYZ(i, Math.cos(ang) * nr, ny, Math.sin(ang) * nr);
  }
  geo.computeVertexNormals();
  // Softly lift foliage normals upward for realistic canopy sunlight scatter
  const norm = geo.attributes.normal as THREE.BufferAttribute;
  for (let i = 0; i < norm.count; i++) {
    const nx = norm.getX(i);
    const ny = norm.getY(i) + 0.48;
    const nz = norm.getZ(i);
    const l = Math.hypot(nx, ny, nz) || 1;
    norm.setXYZ(i, nx / l, ny / l, nz / l);
  }
  return geo;
}

/**
 * Sculpts an organic multi-lobe deciduous Japanese mountain broadleaf crown (クヌギ・ブナ・広葉樹).
 */
function createOrganicBroadleafGeo(radius: number, centerY: number, detail: number): THREE.BufferGeometry {
  const geo = new THREE.IcosahedronGeometry(radius, detail);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const ang = Math.atan2(z, x);
    const lobe =
      1.0 +
      0.19 * Math.sin(ang * 3.0 + y * 0.7) +
      0.13 * Math.cos(ang * 5.0 - y * 0.9) +
      0.10 * Math.sin((x + z) * 0.8);
    // Flatten underside gently, billow upper crown lobes
    const yScale = y < 0 ? 0.68 : 0.96;
    pos.setXYZ(i, x * lobe * 1.18, y * lobe * yScale + centerY, z * lobe * 1.12);
  }
  geo.computeVertexNormals();
  const norm = geo.attributes.normal as THREE.BufferAttribute;
  for (let i = 0; i < norm.count; i++) {
    const nx = norm.getX(i);
    const ny = norm.getY(i) + 0.55;
    const nz = norm.getZ(i);
    const l = Math.hypot(nx, ny, nz) || 1;
    norm.setXYZ(i, nx / l, ny / l, nz / l);
  }
  return geo;
}

export interface FoliageStreamStats {
  farForestCells: number;
  nearForestCells: number;
  grassCells: number;
  visibleTrees: number;
  visibleGrassTufts: number;
}

/**
 * AAA 3-Tier Dynamic Streaming Vegetation Engine for the 2km x 5km Kuroiso-jima Island:
 * - Tier 1 (Far Forest Canopy, 256m cells up to 3,100m): blankets all mountains up to 760m treeline
 *   in dense layered Japanese Cedar/Cypress & Broadleaf silhouettes (ultra-light 12–20 tris/tree)!
 * - Tier 2 (Near Detailed Forest, 128m cells up to 460m): textured cedar trunks + 3-tier drooping boughs +
 *   multi-lobe broadleaf crowns + mossy forest boulders!
 * - Tier 3 (Ultra-Lush Wind-Swaying Grass, Weeds, Ferns & Pampas Grass, 64m micro-cells up to 162m):
 *   thousands of GPU-animated wild grass tufts, weeds, golden susuki pampas, and woodland ferns!
 */
export class FoliageStreamer {
  public readonly group = new THREE.Group();
  private readonly windUniform = { value: 0 };

  // Shared GPU geometries & materials
  private readonly farCedarGeo: THREE.BufferGeometry;
  private readonly farBroadGeo: THREE.BufferGeometry;
  private readonly farCedarMat: THREE.MeshStandardMaterial;
  private readonly farBroadMat: THREE.MeshStandardMaterial;

  private readonly nearTrunkGeo: THREE.BufferGeometry;
  private readonly nearBough1Geo: THREE.BufferGeometry;
  private readonly nearBough2Geo: THREE.BufferGeometry;
  private readonly nearBough3Geo: THREE.BufferGeometry;
  private readonly nearBroadTrunkGeo: THREE.BufferGeometry;
  private readonly nearBroadCrownGeo: THREE.BufferGeometry;
  private readonly boulderGeo: THREE.BufferGeometry;

  private readonly barkMat: THREE.MeshStandardMaterial;
  private readonly cedarBoughMat: THREE.MeshStandardMaterial;
  private readonly cedarTipMat: THREE.MeshStandardMaterial;
  private readonly broadCrownMat: THREE.MeshStandardMaterial;
  private readonly boulderMat: THREE.MeshStandardMaterial;

  // Ground-cover wild grass, weeds, pampas, ferns
  private readonly weedGeo: THREE.BufferGeometry;
  private readonly pampasGeo: THREE.BufferGeometry;
  private readonly fernGeo: THREE.BufferGeometry;
  private readonly flowerWeedGeo: THREE.BufferGeometry;

  private readonly weedMat: THREE.MeshStandardMaterial;
  private readonly pampasMat: THREE.MeshStandardMaterial;
  private readonly fernMat: THREE.MeshStandardMaterial;
  private readonly flowerWeedMat: THREE.MeshStandardMaterial;

  private readonly farCells = new Map<string, { group: THREE.Group; count: number }>();
  private readonly nearCells = new Map<string, { group: THREE.Group; count: number }>();
  private readonly grassCells = new Map<string, { group: THREE.Group; count: number }>();

  private readonly dummy = new THREE.Object3D();
  private readonly tmpColor = new THREE.Color();

  constructor(catalog: TextureCatalog) {
    this.group.name = 'KuroisoStreamingFoliage';

    // --- Far forest ultra-light overlapping organic silhouettes (ONLY 12–20 tris per tree!) ---
    this.farCedarGeo = createOrganicCedarTier(7.4, 0.4, 22.5, 0.5, 6, 1, 2.0, 0.7);
    this.farBroadGeo = createOrganicBroadleafGeo(6.4, 3.4, 0);

    // Bright natural tints because foliage_green / shrub_foliage already hold deep photographic leaf tones
    this.farCedarMat = catalog.getMaterial('foliage_green', {
      repeatX: 2, repeatY: 2, roughness: 0.9, tint: 0x90b384, bumpScale: 0.0,
    });
    this.farBroadMat = catalog.getMaterial('shrub_foliage', {
      repeatX: 2, repeatY: 2, roughness: 0.88, tint: 0xc8da96, bumpScale: 0.0,
    });

    // --- Near detailed organic tree geometries (trimmed caps & balanced segments for 120 FPS mobile!) ---
    this.nearTrunkGeo = new THREE.CylinderGeometry(0.16, 0.44, 11.8, 6, 1, true);
    this.nearTrunkGeo.translate(0, 5.9, 0);
    this.nearBough1Geo = createOrganicCedarTier(4.3, 1.2, 7.8, 4.4, 8, 2, 1.35, 0.4);
    this.nearBough2Geo = createOrganicCedarTier(3.3, 0.85, 6.8, 9.2, 8, 2, 1.15, 2.1);
    this.nearBough3Geo = createOrganicCedarTier(2.1, 0.14, 6.2, 13.4, 6, 1, 0.85, 3.8);

    this.nearBroadTrunkGeo = new THREE.CylinderGeometry(0.22, 0.42, 4.8, 6, 1, true);
    this.nearBroadTrunkGeo.translate(0, 2.4, 0);
    this.nearBroadCrownGeo = createOrganicBroadleafGeo(3.9, 6.4, 1);

    this.boulderGeo = new THREE.DodecahedronGeometry(1.0, 1);

    this.barkMat = catalog.getMaterial('tree_bark', { repeatX: 1, repeatY: 3, roughness: 0.94, tint: 0xd8cec2, bumpScale: 0.06 });
    this.cedarBoughMat = catalog.getMaterial('foliage_green', { repeatX: 2, repeatY: 2, roughness: 0.86, tint: 0x9bbd8e, bumpScale: 0.04 });
    this.cedarTipMat = catalog.getMaterial('foliage_green', { repeatX: 2, repeatY: 2, roughness: 0.84, tint: 0xb7d4a2, bumpScale: 0.04 });
    this.broadCrownMat = catalog.getMaterial('shrub_foliage', { repeatX: 2, repeatY: 2, roughness: 0.86, tint: 0xd5e3a4, bumpScale: 0.05 });
    this.boulderMat = catalog.getMaterial('moss_rock_heavy', { repeatX: 2, repeatY: 2, roughness: 0.92, tint: 0xd8dfd0, bumpScale: 0.08 });

    // --- Dense wind-swaying wild grass, weeds, golden pampas (ススキ), forest ferns (シダ) ---
    this.weedGeo = createCrossedTuftGeometry(1.22, 0.82);
    this.pampasGeo = createCrossedTuftGeometry(1.48, 1.58);
    this.fernGeo = createCrossedTuftGeometry(1.38, 0.94);
    this.flowerWeedGeo = createCrossedTuftGeometry(0.98, 0.65);

    this.weedMat = createWindGrassMaterial(catalog, 'tall_grass', 0xb8d486, this.windUniform, 7.0, 132.0, 0.11);
    this.pampasMat = createWindGrassMaterial(catalog, 'dry_grass', 0xe8d9a4, this.windUniform, 9.0, 145.0, 0.22);
    this.fernMat = createWindGrassMaterial(catalog, 'dry_ferns', 0x99b870, this.windUniform, 6.0, 118.0, 0.09);
    this.flowerWeedMat = createWindGrassMaterial(catalog, 'meadow_wildflower', 0xc2d896, this.windUniform, 8.0, 96.0, 0.10);
  }

  private canPlaceTree(x: number, z: number, elev: number, ny: number, s: ReturnType<typeof sampleTerrain>): boolean {
    // Treeline: ocean shore 9m up to sub-alpine 760m (leaving 760m–865m summit crag open for panoramic views!)
    if (elev < 9.5 || elev > 760.0) return false;
    if (ny < 0.42) return false;
    // Keep roads, animal trails, graded house/shop/koban/park/mine/port terraces strictly clear of tree trunks!
    if (s.roadWeight > 0.06 || s.trailWeight > 0.08 || s.terraceWeight > 0.08) return false;
    // Keep Summit crown & Lookout Bend foreground sightline open
    if (Math.hypot(x - SUMMIT_POINT.x, z - SUMMIT_POINT.z) < 95) return false;
    if (Math.hypot(x - LOOKOUT_POINT.x, z - LOOKOUT_POINT.z) < 32) return false;
    return true;
  }

  private buildFarForestCell(cx: number, cz: number): { group: THREE.Group; count: number } {
    const grp = new THREE.Group();
    const x0 = cx * FOREST_CELL;
    const z0 = cz * FOREST_CELL;
    const rand = cellHash(cx, cz, 101);

    const cedars: Array<[number, number, number, number, number]> = [];
    const broads: Array<[number, number, number, number, number]> = [];

    // Wide overlapping canopy groves (155 candidates/cell x 12-20 tris = lush mountains at 15x less GPU cost!)
    for (let i = 0; i < 155; i++) {
      const wx = x0 + rand() * FOREST_CELL;
      const wz = z0 + rand() * FOREST_CELL;
      if (Math.abs(wx) > TERRAIN_EXTENT_X - 24 || Math.abs(wz) > TERRAIN_EXTENT_Z - 24) continue;
      const s = sampleTerrain(wx, wz);
      const [, ny] = getTerrainNormal(wx, wz, 4.0);
      if (!this.canPlaceTree(wx, wz, s.height, ny, s)) continue;

      // Alpine dwarfing above 600m
      const altScale = s.height > 600 ? Math.max(0.48, 1.0 - (s.height - 600) / 260) : 1.0;
      const sc = (0.95 + rand() * 0.92) * altScale;
      const shade = 0.78 + rand() * 0.34;

      // Rich mix of Japanese cedar ridges & sunlit broadleaf groves
      if (s.height < 460 && rand() < 0.35) {
        broads.push([wx, s.height - 1.4, wz, sc, shade]);
      } else {
        cedars.push([wx, s.height - 1.6, wz, sc, shade]);
      }
    }

    if (cedars.length > 0) {
      const im = new THREE.InstancedMesh(this.farCedarGeo, this.farCedarMat, cedars.length);
      for (let i = 0; i < cedars.length; i++) {
        const [x, y, z, sc, sh] = cedars[i];
        this.dummy.position.set(x, y, z);
        this.dummy.rotation.set(0, rand() * Math.PI * 2, 0);
        this.dummy.scale.set(sc, sc * (0.9 + (i % 4) * 0.08), sc);
        this.dummy.updateMatrix();
        im.setMatrixAt(i, this.dummy.matrix);
        this.tmpColor.setRGB(sh * 0.90, sh * 1.02, sh * 0.88);
        im.setColorAt(i, this.tmpColor);
      }
      im.frustumCulled = true;
      grp.add(im);
    }

    if (broads.length > 0) {
      const im = new THREE.InstancedMesh(this.farBroadGeo, this.farBroadMat, broads.length);
      for (let i = 0; i < broads.length; i++) {
        const [x, y, z, sc, sh] = broads[i];
        this.dummy.position.set(x, y, z);
        this.dummy.rotation.set(0, rand() * Math.PI * 2, 0);
        this.dummy.scale.set(sc, sc, sc);
        this.dummy.updateMatrix();
        im.setMatrixAt(i, this.dummy.matrix);
        if (i % 5 === 0) this.tmpColor.setRGB(sh * 1.08, sh * 0.95, sh * 0.64);
        else this.tmpColor.setRGB(sh * 0.84, sh * 0.98, sh * 0.72);
        im.setColorAt(i, this.tmpColor);
      }
      im.frustumCulled = true;
      grp.add(im);
    }

    return { group: grp, count: cedars.length + broads.length };
  }

  private buildNearForestCell(cx: number, cz: number): { group: THREE.Group; count: number } {
    const grp = new THREE.Group();
    const x0 = cx * DETAIL_CELL;
    const z0 = cz * DETAIL_CELL;
    const rand = cellHash(cx, cz, 202);

    const cedars: Array<[number, number, number, number, number, number]> = [];
    const broads: Array<[number, number, number, number, number, number]> = [];
    const rocks: Array<[number, number, number, number, number, number]> = [];

    // Trees
    for (let i = 0; i < 64; i++) {
      const wx = x0 + rand() * DETAIL_CELL;
      const wz = z0 + rand() * DETAIL_CELL;
      if (Math.abs(wx) > TERRAIN_EXTENT_X - 16 || Math.abs(wz) > TERRAIN_EXTENT_Z - 16) continue;
      const s = sampleTerrain(wx, wz);
      const [, ny] = getTerrainNormal(wx, wz, 2.5);
      if (!this.canPlaceTree(wx, wz, s.height, ny, s)) continue;

      const altScale = s.height > 580 ? Math.max(0.45, 1.0 - (s.height - 580) / 260) : 1.0;
      const sc = (0.72 + rand() * 0.88) * altScale;
      const rot = rand() * Math.PI * 2;
      const sh = 0.74 + rand() * 0.36;

      if (s.height < 430 && rand() < 0.27) {
        broads.push([wx, s.height - 0.5, wz, sc, rot, sh]);
      } else {
        cedars.push([wx, s.height - 0.6, wz, sc, rot, sh]);
      }
    }

    // Mossy hillside & forest boulders
    for (let i = 0; i < 24; i++) {
      const wx = x0 + rand() * DETAIL_CELL;
      const wz = z0 + rand() * DETAIL_CELL;
      if (Math.abs(wx) > TERRAIN_EXTENT_X - 16 || Math.abs(wz) > TERRAIN_EXTENT_Z - 16) continue;
      const s = sampleTerrain(wx, wz);
      if (s.height < 0.6 || s.roadWeight > 0.25 || s.trailWeight > 0.35 || s.terraceWeight > 0.35) continue;
      const sc = s.height > 720 || s.height < 12 ? 1.1 + rand() * 2.5 : 0.65 + rand() * 1.65;
      rocks.push([wx, s.height - sc * 0.22, wz, sc, rand() * Math.PI, rand() * Math.PI]);
    }

    if (cedars.length > 0) {
      const trunks = new THREE.InstancedMesh(this.nearTrunkGeo, this.barkMat, cedars.length);
      const b1 = new THREE.InstancedMesh(this.nearBough1Geo, this.cedarBoughMat, cedars.length);
      const b2 = new THREE.InstancedMesh(this.nearBough2Geo, this.cedarBoughMat, cedars.length);
      const b3 = new THREE.InstancedMesh(this.nearBough3Geo, this.cedarTipMat, cedars.length);
      for (let i = 0; i < cedars.length; i++) {
        const [x, y, z, sc, rot, sh] = cedars[i];
        this.dummy.position.set(x, y, z);
        this.dummy.rotation.set((rand() - 0.5) * 0.04, rot, (rand() - 0.5) * 0.04);
        this.dummy.scale.set(sc, sc * (0.9 + (i % 5) * 0.06), sc);
        this.dummy.updateMatrix();
        trunks.setMatrixAt(i, this.dummy.matrix);
        b1.setMatrixAt(i, this.dummy.matrix);
        b2.setMatrixAt(i, this.dummy.matrix);
        b3.setMatrixAt(i, this.dummy.matrix);
        this.tmpColor.setRGB(sh * 0.88, sh, sh * 0.86);
        b1.setColorAt(i, this.tmpColor);
        b2.setColorAt(i, this.tmpColor);
        b3.setColorAt(i, this.tmpColor);
      }
      b1.castShadow = true;
      b2.castShadow = true;
      b1.receiveShadow = true;
      b2.receiveShadow = true;
      grp.add(trunks, b1, b2, b3);
    }

    if (broads.length > 0) {
      const trunks = new THREE.InstancedMesh(this.nearBroadTrunkGeo, this.barkMat, broads.length);
      const crowns = new THREE.InstancedMesh(this.nearBroadCrownGeo, this.broadCrownMat, broads.length);
      for (let i = 0; i < broads.length; i++) {
        const [x, y, z, sc, rot, sh] = broads[i];
        this.dummy.position.set(x, y, z);
        this.dummy.rotation.set(0, rot, 0);
        this.dummy.scale.set(sc, sc, sc);
        this.dummy.updateMatrix();
        trunks.setMatrixAt(i, this.dummy.matrix);
        crowns.setMatrixAt(i, this.dummy.matrix);
        if (i % 5 === 0) this.tmpColor.setRGB(sh * 1.12, sh * 0.94, sh * 0.58);
        else this.tmpColor.setRGB(sh * 0.85, sh * 0.99, sh * 0.72);
        crowns.setColorAt(i, this.tmpColor);
      }
      crowns.castShadow = true;
      crowns.receiveShadow = true;
      grp.add(trunks, crowns);
    }

    if (rocks.length > 0) {
      const im = new THREE.InstancedMesh(this.boulderGeo, this.boulderMat, rocks.length);
      for (let i = 0; i < rocks.length; i++) {
        const [x, y, z, sc, rx, ry] = rocks[i];
        this.dummy.position.set(x, y, z);
        this.dummy.rotation.set(rx, ry, rx * 0.5);
        this.dummy.scale.set(sc * 1.15, sc * 0.68, sc * 0.95);
        this.dummy.updateMatrix();
        im.setMatrixAt(i, this.dummy.matrix);
      }
      im.castShadow = true;
      im.receiveShadow = true;
      grp.add(im);
    }

    return { group: grp, count: cedars.length + broads.length };
  }

  private buildGrassCell(cx: number, cz: number): { group: THREE.Group; count: number } {
    const grp = new THREE.Group();
    const x0 = cx * GRASS_CELL;
    const z0 = cz * GRASS_CELL;
    const rand = cellHash(cx, cz, 303);

    const weeds: Array<[number, number, number, number, number, number]> = [];
    const pampas: Array<[number, number, number, number, number, number]> = [];
    const ferns: Array<[number, number, number, number, number, number]> = [];
    const flowers: Array<[number, number, number, number, number, number]> = [];

    // 460 candidate ground-cover tufts per 64m x 64m micro-cell -> super lush weeds, ferns & pampas!
    for (let i = 0; i < 460; i++) {
      const wx = x0 + rand() * GRASS_CELL;
      const wz = z0 + rand() * GRASS_CELL;
      if (Math.abs(wx) > TERRAIN_EXTENT_X - 8 || Math.abs(wz) > TERRAIN_EXTENT_Z - 8) continue;
      const s = sampleTerrain(wx, wz);
      if (s.height < 3.5 || s.height > 845.0) continue;
      // Keep center of paved roads, animal trails, and built house interiors clear of wild exterior grass!
      if (s.roadWeight > 0.68 || s.trailWeight > 0.62) continue;
      if (s.terraceWeight > 0.25 && isInsideBuiltHouseFootprint(wx, wz, 0.35)) continue;
      const [, ny] = getTerrainNormal(wx, wz, 2.0);
      if (ny < 0.56) continue;

      const rot = rand() * Math.PI * 2;
      const sh = 0.76 + rand() * 0.34;
      const isRoadEdge = s.roadWeight > 0.12 || s.trailWeight > 0.12 || s.terraceWeight > 0.15;

      if (s.height > 610) {
        // High mountain alpine pampas & tough wind-swept grass
        if (rand() < 0.62) pampas.push([wx, s.height - 0.08, wz, 0.7 + rand() * 0.65, rot, sh]);
        else weeds.push([wx, s.height - 0.06, wz, 0.75 + rand() * 0.5, rot, sh]);
      } else if (isRoadEdge) {
        // Abandoned 1985 roadside weeds, wildflowers & golden pampas encroaching on terraces!
        const r = rand();
        if (r < 0.45) weeds.push([wx, s.height - 0.06, wz, 0.8 + rand() * 0.65, rot, sh]);
        else if (r < 0.75) pampas.push([wx, s.height - 0.08, wz, 0.75 + rand() * 0.65, rot, sh]);
        else flowers.push([wx, s.height - 0.05, wz, 0.8 + rand() * 0.55, rot, sh]);
      } else if (s.streamWeight > 0.2 || s.height > 320) {
        // Shaded cedar forest floor: lush ferns + woodland weeds
        if (rand() < 0.65) ferns.push([wx, s.height - 0.06, wz, 0.85 + rand() * 0.65, rot, sh]);
        else weeds.push([wx, s.height - 0.06, wz, 0.75 + rand() * 0.55, rot, sh]);
      } else {
        // Hillside meadow grass, weeds & pampas
        const r = rand();
        if (r < 0.52) weeds.push([wx, s.height - 0.06, wz, 0.85 + rand() * 0.7, rot, sh]);
        else if (r < 0.78) pampas.push([wx, s.height - 0.08, wz, 0.8 + rand() * 0.7, rot, sh]);
        else if (r < 0.90) ferns.push([wx, s.height - 0.06, wz, 0.8 + rand() * 0.55, rot, sh]);
        else flowers.push([wx, s.height - 0.05, wz, 0.8 + rand() * 0.5, rot, sh]);
      }
    }

    const addLayer = (
      arr: Array<[number, number, number, number, number, number]>,
      geo: THREE.BufferGeometry,
      mat: THREE.MeshStandardMaterial
    ) => {
      if (arr.length === 0) return;
      const im = new THREE.InstancedMesh(geo, mat, arr.length);
      for (let i = 0; i < arr.length; i++) {
        const [x, y, z, sc, rot, sh] = arr[i];
        this.dummy.position.set(x, y, z);
        this.dummy.rotation.set(0, rot, 0);
        this.dummy.scale.set(sc, sc * (0.85 + (i % 4) * 0.1), sc);
        this.dummy.updateMatrix();
        im.setMatrixAt(i, this.dummy.matrix);
        this.tmpColor.setRGB(sh, sh, sh * 0.94);
        im.setColorAt(i, this.tmpColor);
      }
      im.receiveShadow = true;
      im.castShadow = false;
      grp.add(im);
    };

    addLayer(weeds, this.weedGeo, this.weedMat);
    addLayer(pampas, this.pampasGeo, this.pampasMat);
    addLayer(ferns, this.fernGeo, this.fernMat);
    addLayer(flowers, this.flowerWeedGeo, this.flowerWeedMat);

    return { group: grp, count: weeds.length + pampas.length + ferns.length + flowers.length };
  }

  private disposeGroup(grp: THREE.Group): void {
    this.group.remove(grp);
    grp.traverse((obj) => {
      if ((obj as THREE.InstancedMesh).isInstancedMesh) {
        (obj as THREE.InstancedMesh).dispose();
      }
    });
  }

  public warmStart(camX: number, camZ: number): void {
    // Synchronously populate immediate grass + near forest + surrounding ridge canopy (non-overlapping!)
    this.streamGrid(camX, camZ, GRASS_CELL, 128, 152, this.grassCells, (cx, cz) => this.buildGrassCell(cx, cz), 18);
    this.streamGrid(camX, camZ, DETAIL_CELL, 360, 440, this.nearCells, (cx, cz) => this.buildNearForestCell(cx, cz), 20);
    this.streamGrid(camX, camZ, FOREST_CELL, 2400, 2900, this.farCells, (cx, cz) => this.buildFarForestCell(cx, cz), 64, 340);
  }

  private streamGrid(
    camX: number,
    camZ: number,
    cellSize: number,
    loadRadius: number,
    unloadRadius: number,
    map: Map<string, { group: THREE.Group; count: number }>,
    builder: (cx: number, cz: number) => { group: THREE.Group; count: number },
    maxCreates: number,
    minDistForFar = 0
  ): void {
    // 1. Evict distant cells cleanly
    for (const [key, entry] of map.entries()) {
      const [scx, scz] = key.split(',').map(Number);
      const dist = Math.hypot((scx + 0.5) * cellSize - camX, (scz + 0.5) * cellSize - camZ);
      if (dist > unloadRadius || (minDistForFar > 0 && dist < minDistForFar - 90)) {
        this.disposeGroup(entry.group);
        map.delete(key);
      }
    }

    // 2. Find missing cells within loadRadius, nearest first
    const minCX = Math.max(Math.floor(-TERRAIN_EXTENT_X / cellSize), Math.floor((camX - loadRadius) / cellSize));
    const maxCX = Math.min(Math.floor(TERRAIN_EXTENT_X / cellSize) - 1, Math.floor((camX + loadRadius) / cellSize));
    const minCZ = Math.max(Math.floor(-TERRAIN_EXTENT_Z / cellSize), Math.floor((camZ - loadRadius) / cellSize));
    const maxCZ = Math.min(Math.floor(TERRAIN_EXTENT_Z / cellSize) - 1, Math.floor((camZ + loadRadius) / cellSize));

    const toBuild: Array<{ cx: number; cz: number; key: string; dist: number }> = [];
    for (let cz = minCZ; cz <= maxCZ; cz++) {
      for (let cx = minCX; cx <= maxCX; cx++) {
        const dist = Math.hypot((cx + 0.5) * cellSize - camX, (cz + 0.5) * cellSize - camZ);
        if (dist > loadRadius || dist < minDistForFar) continue;
        const key = `${cx},${cz}`;
        if (!map.has(key)) {
          toBuild.push({ cx, cz, key, dist });
        }
      }
    }

    if (toBuild.length === 0) return;
    toBuild.sort((a, b) => a.dist - b.dist);

    const limit = Math.min(maxCreates, toBuild.length);
    for (let i = 0; i < limit; i++) {
      const job = toBuild[i];
      const built = builder(job.cx, job.cz);
      map.set(job.key, built);
      this.group.add(built.group);
    }
  }

  public update(camX: number, camZ: number, elapsedSec: number): void {
    this.windUniform.value = elapsedSec;
    // Strict per-frame streaming budget: max 2 grass micro-cells, 1 near forest cell, 2 far canopy cells per frame!
    this.streamGrid(camX, camZ, GRASS_CELL, 132, 162, this.grassCells, (cx, cz) => this.buildGrassCell(cx, cz), 2);
    this.streamGrid(camX, camZ, DETAIL_CELL, 380, 460, this.nearCells, (cx, cz) => this.buildNearForestCell(cx, cz), 1);
    this.streamGrid(camX, camZ, FOREST_CELL, 2500, 3100, this.farCells, (cx, cz) => this.buildFarForestCell(cx, cz), 2, 320);
  }

  public getStats(): FoliageStreamStats {
    let visibleTrees = 0;
    let visibleGrassTufts = 0;
    for (const v of this.farCells.values()) visibleTrees += v.count;
    for (const v of this.nearCells.values()) visibleTrees += v.count;
    for (const v of this.grassCells.values()) visibleGrassTufts += v.count;
    return {
      farForestCells: this.farCells.size,
      nearForestCells: this.nearCells.size,
      grassCells: this.grassCells.size,
      visibleTrees,
      visibleGrassTufts,
    };
  }
}
