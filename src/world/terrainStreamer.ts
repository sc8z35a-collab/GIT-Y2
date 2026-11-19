import * as THREE from 'three';
import { TextureCatalog } from '../core/textureCatalog';
import {
  TERRAIN_EXTENT_X,
  TERRAIN_EXTENT_Z,
  sampleTerrain,
  getTerrainNormal,
} from './terrainMath';

const CHUNK_SIZE = 128;
const CHUNKS_X = (TERRAIN_EXTENT_X * 2) / CHUNK_SIZE; // 16 (2048m)
const CHUNKS_Z = (TERRAIN_EXTENT_Z * 2) / CHUNK_SIZE; // 40 (5120m)

// 4-Tier Dynamic LOD table: vertex segments per 128m chunk
const LOD_SEGMENTS = [64, 32, 16, 8] as const;
const LOD_DIST_MAX = [240, 580, 1450, 9000] as const;

interface TerrainChunkRecord {
  cx: number;
  cz: number;
  centerX: number;
  centerZ: number;
  isDeepOcean: boolean;
  currentLod: number;
  mesh: THREE.Mesh | null;
}

export interface TerrainStreamStats {
  activeChunks: number;
  lod0Count: number;
  lod1Count: number;
  lod2Count: number;
  lod3Count: number;
  pendingQueue: number;
  approxTriangles: number;
}

/**
 * 8-Biome Triplanar PBR Terrain Material using the user's real extracted WebP textures:
 * - Coastal sand & wet shore (sand_coarse)
 * - Triplanar stratified basalt cliffs (basalt_cliff) — ZERO UV stretching on steep slopes
 * - Sunlit mountain grass & alpine dry slopes (lush_grass, dry_grass)
 * - Deep cedar forest moss & ravine earth (deep_moss)
 * - Weathered hillside village roads (gravel_road)
 * - Trodden dirt & root animal trails / 獣道 (root_earth)
 * - Coal-slate shale around 1890 Coal Mine (coal_seam_rock)
 * - High-altitude lichen & rocky alpine crest up to 865m (lichen_rock)
 */
function createTerrainMaterial(catalog: TextureCatalog): THREE.MeshStandardMaterial {
  const tSand = catalog.getTexture('sand_coarse', 1, 1);
  const tRock = catalog.getTexture('basalt_cliff', 1, 1);
  const tGrass = catalog.getTexture('lush_grass', 1, 1);
  const tMoss = catalog.getTexture('deep_moss', 1, 1);
  const tRoad = catalog.getTexture('gravel_road', 1, 1);
  const tTrail = catalog.getTexture('root_earth', 1, 1);
  const tCoal = catalog.getTexture('coal_seam_rock', 1, 1);
  const tLichen = catalog.getTexture('lichen_rock', 1, 1);

  const mat = new THREE.MeshStandardMaterial({
    roughness: 0.93,
    metalness: 0.02,
  });

  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTexSand = { value: tSand };
    shader.uniforms.uTexRock = { value: tRock };
    shader.uniforms.uTexGrass = { value: tGrass };
    shader.uniforms.uTexMoss = { value: tMoss };
    shader.uniforms.uTexRoad = { value: tRoad };
    shader.uniforms.uTexTrail = { value: tTrail };
    shader.uniforms.uTexCoal = { value: tCoal };
    shader.uniforms.uTexLichen = { value: tLichen };

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        attribute vec4 aBiome; // x=road, y=trail, z=stream, w=coal+terrace packed
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        varying vec4 vBiome;`
      )
      .replace(
        '#include <worldpos_vertex>',
        `#include <worldpos_vertex>
        vec4 wpTerrain = modelMatrix * vec4(transformed, 1.0);
        vWorldPos = wpTerrain.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * objectNormal);
        vBiome = aBiome;`
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform sampler2D uTexSand;
        uniform sampler2D uTexRock;
        uniform sampler2D uTexGrass;
        uniform sampler2D uTexMoss;
        uniform sampler2D uTexRoad;
        uniform sampler2D uTexTrail;
        uniform sampler2D uTexCoal;
        uniform sampler2D uTexLichen;
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        varying vec4 vBiome;

        vec3 sampleDual(sampler2D tex, vec2 uv, float farMul) {
          vec3 a = texture2D(tex, uv).rgb;
          vec3 b = texture2D(tex, uv * farMul + vec2(0.41, 0.73)).rgb;
          return mix(a, b, 0.36);
        }

        vec3 sampleTriplanar(sampler2D tex, vec3 p, vec3 n, float scale) {
          vec3 bw = pow(abs(n), vec3(3.0));
          bw /= max(bw.x + bw.y + bw.z, 0.0001);
          vec3 cx = texture2D(tex, p.zy * scale).rgb;
          vec3 cy = texture2D(tex, p.xz * scale).rgb;
          vec3 cz = texture2D(tex, p.xy * scale).rgb;
          return cx * bw.x + cy * bw.y + cz * bw.z;
        }`
      )
      .replace(
        '#include <map_fragment>',
        `#include <map_fragment>
        vec3 wn = normalize(vWorldNormal);
        float slope = 1.0 - clamp(wn.y, 0.0, 1.0);
        float elev = vWorldPos.y;
        vec2 pXZ = vWorldPos.xz;

        float roadW    = vBiome.x;
        float trailW   = vBiome.y;
        float streamW  = vBiome.z;
        float coalW    = clamp(vBiome.w, 0.0, 1.0);
        float terraceW = clamp(-vBiome.w, 0.0, 1.0);

        vec3 cSand   = sampleDual(uTexSand,   pXZ * 0.34, 0.27);
        vec3 cRock   = sampleTriplanar(uTexRock, vWorldPos, wn, 0.14);
        vec3 cGrass  = sampleDual(uTexGrass,  pXZ * 0.22, 0.24);
        vec3 cMoss   = sampleDual(uTexMoss,   pXZ * 0.24, 0.28);
        vec3 cRoad   = sampleDual(uTexRoad,   pXZ * 0.56, 0.39);
        vec3 cTrail  = sampleDual(uTexTrail,  pXZ * 0.42, 0.34);
        vec3 cCoal   = sampleTriplanar(uTexCoal, vWorldPos, wn, 0.16);
        vec3 cLichen = sampleTriplanar(uTexLichen, vWorldPos, wn, 0.14);

        // Dramatic Japanese mountain ridge variation (rich deep cedar flanks vs sunlit grassy spurs like image.png)
        float ridgeBand = 0.5 + 0.5 * sin(pXZ.x * 0.011 + cos(pXZ.y * 0.009) * 2.1);
        float microVar  = 0.5 + 0.5 * sin(pXZ.x * 0.045 - pXZ.y * 0.039);
        float forestShade = clamp(0.40 + 0.50 * ridgeBand + streamW * 0.50, 0.0, 1.0);

        // Base vegetated slope: authentic Japanese mountain olive-emerald & deep mossy undergrowth
        vec3 sunlitGrass = cGrass * vec3(0.74, 0.84, 0.56);
        vec3 deepForest  = cMoss * vec3(0.44, 0.58, 0.38);
        vec3 col = mix(sunlitGrass, deepForest, forestShade * (0.74 + 0.26 * microVar));

        // Sub-alpine meadow & windswept highland grass transition (560m -> 865m)
        float alpineW = smoothstep(560.0, 790.0, elev);
        vec3 alpineCol = mix(cGrass * vec3(0.84, 0.80, 0.54), cLichen * vec3(0.84, 0.85, 0.80), smoothstep(690.0, 845.0, elev));
        col = mix(col, alpineCol, alpineW * 0.84);

        // Coastal sandy beach & dark wet tidal zone (0m -> 7m)
        float sandW = (1.0 - smoothstep(2.2, 8.5, elev)) * (1.0 - smoothstep(0.18, 0.40, slope));
        col = mix(col, cSand * vec3(0.92, 0.86, 0.75), sandW);
        float wetShore = 1.0 - smoothstep(0.2, 2.4, elev);
        col *= mix(1.0, 0.54, wetShore);

        // Coal-shale dark earth around 1890 Coal Mine gorge
        col = mix(col, cCoal * vec3(0.68, 0.68, 0.70), coalW * 0.72);

        // Graded village terraces (mossy compacted earth/gravel yard pads ready for future houses)
        vec3 terraceCol = mix(cRoad * 0.84, cMoss * 0.74, 0.56);
        col = mix(col, terraceCol, terraceW * 0.66);

        // Narrow animal trails (獣道): unmistakable warm muddy-brown earth & roots cutting through grass
        col = mix(col, cTrail * vec3(0.86, 0.75, 0.62), trailW * 0.88);

        // Hillside village roads & coastal forestry road: weathered 1985 gravel with mossy edges
        float roadCore = smoothstep(0.18, 0.76, roadW);
        float roadVerge = roadW * (1.0 - roadCore);
        col = mix(col, cMoss * vec3(0.62, 0.72, 0.48), roadVerge * 0.75);
        col = mix(col, cRoad * vec3(0.86, 0.84, 0.79), roadCore * 0.92);

        // Steep cliff rock faces (triplanar basalt + alpine lichen at high altitudes)
        float rockW = smoothstep(0.27, 0.55, slope) * (1.0 - roadW * 0.88) * (1.0 - trailW * 0.78);
        vec3 cliffCol = mix(cRock * 0.84, cLichen * 0.88, alpineW * 0.7);
        cliffCol = mix(cliffCol, cCoal * 0.72, coalW * 0.6);
        cliffCol = mix(cliffCol, cMoss * 0.62, streamW * 0.45);
        col = mix(col, cliffCol, rockW);

        // Damp gorge stream bed darkening
        col *= mix(1.0, 0.62, streamW * (1.0 - rockW) * 0.65);

        diffuseColor.rgb *= col;`
      );
  };

  mat.customProgramCacheKey = () => 'kuroiso-2x5km-terrain-v3';
  return mat;
}

/**
 * Generates one 128m x 128m terrain chunk at the requested LOD resolution with downward
 * boundary skirts to completely eliminate T-junction cracks between adjacent LOD chunks.
 */
function buildChunkGeometry(cx: number, cz: number, segs: number): THREE.BufferGeometry {
  const x0 = -TERRAIN_EXTENT_X + cx * CHUNK_SIZE;
  const z0 = -TERRAIN_EXTENT_Z + cz * CHUNK_SIZE;
  const step = CHUNK_SIZE / segs;

  const vSide = segs + 1;
  const mainCount = vSide * vSide;
  const totalVerts = mainCount + 4 * vSide;

  const positions = new Float32Array(totalVerts * 3);
  const normals = new Float32Array(totalVerts * 3);
  const uvs = new Float32Array(totalVerts * 2);
  const biomes = new Float32Array(totalVerts * 4);

  const normStep = Math.min(3.5, Math.max(1.5, step * 0.75));

  for (let iz = 0; iz <= segs; iz++) {
    const wz = z0 + iz * step;
    for (let ix = 0; ix <= segs; ix++) {
      const wx = x0 + ix * step;
      const idx = iz * vSide + ix;
      const s = sampleTerrain(wx, wz);
      const [nx, ny, nz] = getTerrainNormal(wx, wz, normStep);

      positions[idx * 3] = wx;
      positions[idx * 3 + 1] = s.height;
      positions[idx * 3 + 2] = wz;

      normals[idx * 3] = nx;
      normals[idx * 3 + 1] = ny;
      normals[idx * 3 + 2] = nz;

      uvs[idx * 2] = wx * 0.08;
      uvs[idx * 2 + 1] = wz * 0.08;

      biomes[idx * 4] = s.roadWeight;
      biomes[idx * 4 + 1] = s.trailWeight;
      biomes[idx * 4 + 2] = s.streamWeight;
      // Pack coalWeight (>0) or terraceWeight (<0) into w channel
      biomes[idx * 4 + 3] = s.coalWeight > 0.05 ? s.coalWeight : -s.terraceWeight;
    }
  }

  const indexCount = segs * segs * 6 + 4 * segs * 6;
  const indices = totalVerts > 65535 ? new Uint32Array(indexCount) : new Uint16Array(indexCount);
  let ptr = 0;

  for (let iz = 0; iz < segs; iz++) {
    for (let ix = 0; ix < segs; ix++) {
      const a = iz * vSide + ix;
      const b = a + 1;
      const c = a + vSide;
      const d = c + 1;
      indices[ptr++] = a;
      indices[ptr++] = c;
      indices[ptr++] = b;
      indices[ptr++] = b;
      indices[ptr++] = c;
      indices[ptr++] = d;
    }
  }

  // Downward skirts scaled gently with LOD step to mask any LOD boundary height delta
  const skirtDrop = step * 1.45 + 3.0;
  let skirtCursor = mainCount;

  const appendSkirt = (edge: number[], rev: boolean) => {
    const base = skirtCursor;
    for (let k = 0; k < edge.length; k++) {
      const src = edge[k];
      const dst = skirtCursor++;
      positions[dst * 3] = positions[src * 3];
      positions[dst * 3 + 1] = positions[src * 3 + 1] - skirtDrop;
      positions[dst * 3 + 2] = positions[src * 3 + 2];
      normals[dst * 3] = normals[src * 3];
      normals[dst * 3 + 1] = normals[src * 3 + 1];
      normals[dst * 3 + 2] = normals[src * 3 + 2];
      uvs[dst * 2] = uvs[src * 2];
      uvs[dst * 2 + 1] = uvs[src * 2 + 1];
      biomes[dst * 4] = biomes[src * 4];
      biomes[dst * 4 + 1] = biomes[src * 4 + 1];
      biomes[dst * 4 + 2] = biomes[src * 4 + 2];
      biomes[dst * 4 + 3] = biomes[src * 4 + 3];
    }
    for (let k = 0; k < edge.length - 1; k++) {
      const t0 = edge[k];
      const t1 = edge[k + 1];
      const b0 = base + k;
      const b1 = base + k + 1;
      if (rev) {
        indices[ptr++] = t0; indices[ptr++] = t1; indices[ptr++] = b0;
        indices[ptr++] = t1; indices[ptr++] = b1; indices[ptr++] = b0;
      } else {
        indices[ptr++] = t0; indices[ptr++] = b0; indices[ptr++] = t1;
        indices[ptr++] = t1; indices[ptr++] = b0; indices[ptr++] = b1;
      }
    }
  };

  const nEdge: number[] = [];
  const sEdge: number[] = [];
  const wEdge: number[] = [];
  const eEdge: number[] = [];
  for (let i = 0; i < vSide; i++) {
    nEdge.push(i);
    sEdge.push(segs * vSide + i);
    wEdge.push(i * vSide);
    eEdge.push(i * vSide + segs);
  }
  appendSkirt(nEdge, false);
  appendSkirt(sEdge, true);
  appendSkirt(wEdge, true);
  appendSkirt(eEdge, false);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geo.setAttribute('aBiome', new THREE.BufferAttribute(biomes, 4));
  geo.setIndex(new THREE.BufferAttribute(indices, 1));
  geo.computeBoundingSphere();
  return geo;
}

/**
 * Dynamic 4-LOD Streaming Terrain Manager for the 2km x 5km Kuroiso-jima island.
 * Never loads all high-resolution chunks at once — streams near chunks up to LOD0 (2m)
 * while maintaining ultra-light LOD3 horizon silhouettes for the entire 5km mountain range,
 * strictly enforcing a per-frame CPU budget so gameplay stays locked at high FPS.
 */
export class TerrainStreamer {
  public readonly group = new THREE.Group();
  private readonly material: THREE.MeshStandardMaterial;
  private readonly chunks: TerrainChunkRecord[] = [];
  private lastCamX = Number.NaN;
  private lastCamZ = Number.NaN;
  private pending: Array<{ rec: TerrainChunkRecord; desiredLod: number; dist: number }> = [];

  constructor(catalog: TextureCatalog) {
    this.group.name = 'KuroisoStreamingTerrain';
    this.material = createTerrainMaterial(catalog);

    // Register 16x40=640 chunk slots & quick-cull pure deep-ocean perimeter cells (9 probe pts)
    for (let cz = 0; cz < CHUNKS_Z; cz++) {
      for (let cx = 0; cx < CHUNKS_X; cx++) {
        const x0 = -TERRAIN_EXTENT_X + cx * CHUNK_SIZE;
        const z0 = -TERRAIN_EXTENT_Z + cz * CHUNK_SIZE;
        const centerX = x0 + CHUNK_SIZE * 0.5;
        const centerZ = z0 + CHUNK_SIZE * 0.5;

        let maxProbe = -999;
        for (let pz = 0; pz <= 2; pz++) {
          for (let px = 0; px <= 2; px++) {
            const h = sampleTerrain(x0 + px * 64, z0 + pz * 64).height;
            if (h > maxProbe) maxProbe = h;
          }
        }
        this.chunks.push({
          cx,
          cz,
          centerX,
          centerZ,
          isDeepOcean: maxProbe < -16.0,
          currentLod: -1,
          mesh: null,
        });
      }
    }
  }

  private desiredLodForDist(dist: number): number {
    if (dist < LOD_DIST_MAX[0]) return 0;
    if (dist < LOD_DIST_MAX[1]) return 1;
    if (dist < LOD_DIST_MAX[2]) return 2;
    return 3;
  }

  private rebuildChunk(rec: TerrainChunkRecord, lod: number): void {
    const segs = LOD_SEGMENTS[lod];
    const geo = buildChunkGeometry(rec.cx, rec.cz, segs);

    if (rec.mesh) {
      rec.mesh.geometry.dispose();
      rec.mesh.geometry = geo;
    } else {
      const mesh = new THREE.Mesh(geo, this.material);
      mesh.receiveShadow = true;
      mesh.castShadow = lod <= 1; // Only near/mid chunks cast terrain shadows for GPU speed
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      this.group.add(mesh);
      rec.mesh = mesh;
    }
    rec.mesh.castShadow = lod <= 1;
    rec.currentLod = lod;
  }

  /**
   * Instant initial bootstrap around spawn/teleport point:
   * - Builds ultra-light LOD3 horizon silhouettes for all land chunks (~20ms total)
   * - Synchronously builds immediate LOD0/LOD1 area around the player so frame 1 is sharp!
   */
  public warmStart(camX: number, camZ: number): void {
    for (let i = 0; i < this.chunks.length; i++) {
      const rec = this.chunks[i];
      if (rec.isDeepOcean) continue;
      const dist = Math.hypot(rec.centerX - camX, rec.centerZ - camZ);
      const targetLod = dist < 210 ? 0 : dist < 440 ? 1 : 3;
      if (rec.currentLod !== targetLod) {
        this.rebuildChunk(rec, targetLod);
      }
    }
    this.lastCamX = camX;
    this.lastCamZ = camZ;
    this.refreshQueue(camX, camZ);
  }

  private refreshQueue(camX: number, camZ: number): void {
    this.pending.length = 0;
    for (let i = 0; i < this.chunks.length; i++) {
      const rec = this.chunks[i];
      if (rec.isDeepOcean) continue;
      const dist = Math.hypot(rec.centerX - camX, rec.centerZ - camZ);
      const desired = this.desiredLodForDist(dist);
      // Hysteresis buffer of 36m prevents rapid LOD flip-flopping on borders
      if (rec.currentLod !== desired) {
        if (rec.currentLod !== -1) {
          const prevMax = LOD_DIST_MAX[rec.currentLod];
          const prevMin = rec.currentLod > 0 ? LOD_DIST_MAX[rec.currentLod - 1] : 0;
          if (dist > prevMin - 36 && dist < prevMax + 36) continue;
        }
        this.pending.push({ rec, desiredLod: desired, dist });
      }
    }
    // Nearest chunks upgrade first
    this.pending.sort((a, b) => a.dist - b.dist);
  }

  /**
   * Called once per frame. Enforces a tight CPU time budget (default 4.2ms/frame)
   * so moving rapidly or teleporting across 2km x 5km never drops frame rate.
   */
  public update(camX: number, camZ: number, budgetMs = 4.2): void {
    const moved = Math.hypot(camX - this.lastCamX, camZ - this.lastCamZ);
    if (Number.isNaN(moved) || moved > 24.0 || this.pending.length === 0) {
      if (Number.isNaN(moved) || moved > 24.0) {
        this.lastCamX = camX;
        this.lastCamZ = camZ;
        this.refreshQueue(camX, camZ);
      }
    }

    if (this.pending.length === 0) return;

    const tStart = performance.now();
    let built = 0;
    while (this.pending.length > 0 && built < 4) {
      const job = this.pending.shift()!;
      if (job.rec.currentLod !== job.desiredLod) {
        this.rebuildChunk(job.rec, job.desiredLod);
        built++;
      }
      if (performance.now() - tStart >= budgetMs) break;
    }
  }

  public getStats(): TerrainStreamStats {
    let activeChunks = 0;
    let lod0Count = 0;
    let lod1Count = 0;
    let lod2Count = 0;
    let lod3Count = 0;
    let approxTriangles = 0;
    for (let i = 0; i < this.chunks.length; i++) {
      const r = this.chunks[i];
      if (!r.mesh) continue;
      activeChunks++;
      const seg = LOD_SEGMENTS[r.currentLod];
      approxTriangles += seg * seg * 2 + seg * 8;
      if (r.currentLod === 0) lod0Count++;
      else if (r.currentLod === 1) lod1Count++;
      else if (r.currentLod === 2) lod2Count++;
      else lod3Count++;
    }
    return {
      activeChunks,
      lod0Count,
      lod1Count,
      lod2Count,
      lod3Count,
      pendingQueue: this.pending.length,
      approxTriangles,
    };
  }
}
