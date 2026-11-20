import * as THREE from 'three';
import { TextureCatalog } from '../core/textureCatalog';
import {
  TERRAIN_EXTENT_X,
  TERRAIN_EXTENT_Z,
  sampleTerrain,
  getTerrainNormal,
  isInsideMinePortalCutout,
} from './terrainMath';
import { sampleMacroHorizonVis } from './horizon6kmData';

const CHUNK_SIZE = 128;
const CHUNKS_X = (TERRAIN_EXTENT_X * 2) / CHUNK_SIZE; // 24 (3072m)
const CHUNKS_Z = (TERRAIN_EXTENT_Z * 2) / CHUNK_SIZE; // 48 (6144m)

// 5-Tier Dynamic LOD table for 3km x 6km (18 km²): vertex segments per 128m chunk
// LOD4 (4x4 = 32 tris/chunk) keeps the entire 6km island silhouette loaded at negligible GPU cost!
const LOD_SEGMENTS = [64, 32, 16, 8, 4] as const;
const LOD_DIST_MAX = [240, 560, 1280, 2600, 9800] as const;

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
  lod4Count: number;
  pendingQueue: number;
  approxTriangles: number;
}

/**
 * 12-Biome Hyper-Realistic Stratified PBR Terrain Material using ONLY user-provided WebP textures
 * from public/textures/tiles/manifest.json (12 samplers + 1 shadowMap = 13 <= 16 WebGL limit):
 * - Coastal sand & wet wave-swash tidal belt (sand_coarse)
 * - Stratified volcanic cliffs: triplanar basalt_cliff + striated_rock tuff bands + oxidized iron_rust_rock crags
 * - Sunlit Japanese hillside grass & sub-alpine golden-olive sasa meadow (lush_grass, dry_grass)
 * - Aspect-driven microclimate: north-facing / shaded cedar forest moss (deep_moss) vs sunlit south spurs
 * - Gorge stream beds & scree talus skirts (stream_pebbles)
 * - Weathered 1985 village roads (gravel_road) & muddy-root animal trails / 獣道 (root_earth)
 * - Coal-slate shale around 1890 Coal Mine (coal_seam_rock)
 * - High-altitude windswept lichen & volcanic alpine summit crags up to 865m (lichen_rock)
 * - Screen-space derivative Mikkelsen micro-bump normal perturbation + dynamic wet/rock roughness!
 */
function createTerrainMaterial(catalog: TextureCatalog): THREE.MeshStandardMaterial {
  const tSand = catalog.getTexture('sand_coarse', 1, 1);
  const tRock = catalog.getTexture('basalt_cliff', 1, 1);
  const tStrata = catalog.getTexture('striated_rock', 1, 1);
  const tIronRock = catalog.getTexture('iron_rust_rock', 1, 1);
  const tGrass = catalog.getTexture('lush_grass', 1, 1);
  const tDryGrass = catalog.getTexture('dry_grass', 1, 1);
  const tMoss = catalog.getTexture('deep_moss', 1, 1);
  const tRoad = catalog.getTexture('gravel_road', 1, 1);
  const tTrail = catalog.getTexture('root_earth', 1, 1);
  const tPebbles = catalog.getTexture('stream_pebbles', 1, 1);
  const tCoal = catalog.getTexture('coal_seam_rock', 1, 1);
  const tLichen = catalog.getTexture('lichen_rock', 1, 1);

  const mat = new THREE.MeshStandardMaterial({
    roughness: 0.94,
    metalness: 0.02,
  });
  mat.defines = { USE_SF_MACRO_HORIZON: 1 };

  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTexSand = { value: tSand };
    shader.uniforms.uTexRock = { value: tRock };
    shader.uniforms.uTexStrata = { value: tStrata };
    shader.uniforms.uTexIronRock = { value: tIronRock };
    shader.uniforms.uTexGrass = { value: tGrass };
    shader.uniforms.uTexDryGrass = { value: tDryGrass };
    shader.uniforms.uTexMoss = { value: tMoss };
    shader.uniforms.uTexRoad = { value: tRoad };
    shader.uniforms.uTexTrail = { value: tTrail };
    shader.uniforms.uTexPebbles = { value: tPebbles };
    shader.uniforms.uTexCoal = { value: tCoal };
    shader.uniforms.uTexLichen = { value: tLichen };

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        attribute vec4 aBiome; // x=road, y=trail, z=stream, w=coal+terrace packed
        attribute float aHorizonVis; // Shadow Flame 1.1 SF-MacroHorizon 6km prebaked mountain visibility
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        varying vec4 vBiome;
        varying float vHorizonVis;`
      )
      .replace(
        '#include <worldpos_vertex>',
        `#include <worldpos_vertex>
        vec4 wpTerrain = modelMatrix * vec4(transformed, 1.0);
        vWorldPos = wpTerrain.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * objectNormal);
        vBiome = aBiome;
        vHorizonVis = aHorizonVis;`
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform sampler2D uTexSand;
        uniform sampler2D uTexRock;
        uniform sampler2D uTexStrata;
        uniform sampler2D uTexIronRock;
        uniform sampler2D uTexGrass;
        uniform sampler2D uTexDryGrass;
        uniform sampler2D uTexMoss;
        uniform sampler2D uTexRoad;
        uniform sampler2D uTexTrail;
        uniform sampler2D uTexPebbles;
        uniform sampler2D uTexCoal;
        uniform sampler2D uTexLichen;
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        varying vec4 vBiome;
        varying float vHorizonVis;

        // 37-degree rotated dual-scale anti-tiling sampler (eliminates visible repetition across 6km panoramas!)
        vec3 sampleDualRot(sampler2D tex, vec2 uv, float farMul) {
          vec3 a = texture2D(tex, uv).rgb;
          mat2 rot37 = mat2(0.7986, -0.6018, 0.6018, 0.7986);
          vec2 uv2 = (rot37 * uv) * farMul + vec2(0.41, 0.73);
          vec3 b = texture2D(tex, uv2).rgb;
          return mix(a, b, 0.38);
        }

        float geoHash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        float geoNoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(geoHash(i), geoHash(i + vec2(1.0, 0.0)), u.x),
            mix(geoHash(i + vec2(0.0, 1.0)), geoHash(i + vec2(1.0, 1.0)), u.x),
            u.y
          );
        }

        float geoFbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
          for (int i = 0; i < 3; i++) {
            v += a * geoNoise(p);
            p = rot * p * 2.07 + vec2(11.3, 7.9);
            a *= 0.5;
          }
          return v;
        }

        vec3 sampleTriplanar(sampler2D tex, vec3 p, vec3 n, float scale) {
          vec3 bw = pow(abs(n), vec3(3.2));
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

        vec3 cSand     = sampleDualRot(uTexSand,     pXZ * 0.34, 0.27);
        vec3 cRock     = sampleTriplanar(uTexRock,     vWorldPos, wn, 0.13);
        vec3 cStrata   = sampleTriplanar(uTexStrata,   vWorldPos, wn, 0.105);
        vec3 cIronRock = sampleTriplanar(uTexIronRock, vWorldPos, wn, 0.12);
        vec3 cGrass    = sampleDualRot(uTexGrass,    pXZ * 0.22, 0.23);
        vec3 cDryGrass = sampleDualRot(uTexDryGrass, pXZ * 0.20, 0.25);
        vec3 cMoss     = sampleDualRot(uTexMoss,     pXZ * 0.24, 0.28);
        vec3 cRoad     = sampleDualRot(uTexRoad,     pXZ * 0.56, 0.37);
        vec3 cTrail    = sampleDualRot(uTexTrail,    pXZ * 0.42, 0.33);
        vec3 cPebbles  = sampleDualRot(uTexPebbles,  pXZ * 0.44, 0.31);
        vec3 cCoal     = sampleTriplanar(uTexCoal,     vWorldPos, wn, 0.15);
        vec3 cLichen   = sampleTriplanar(uTexLichen,   vWorldPos, wn, 0.13);

        // Multi-scale organic macro variation & Japanese mountain aspect microclimate!
        float macroWave = geoFbm(pXZ * 0.0042);
        float mesoWave  = geoFbm(pXZ * 0.017 + vec2(macroWave * 2.1, -macroWave * 1.7));
        float microVar  = geoNoise(pXZ * 0.065);

        // North-facing shaded slopes (wn.z < 0) hold deep damp cedar moss; South-facing slopes catch warm sun!
        float northShade = smoothstep(0.28, -0.32, wn.z) * smoothstep(0.06, 0.24, slope);
        float southSun   = smoothstep(-0.18, 0.35, wn.z) * smoothstep(0.05, 0.25, slope);
        float forestShade = clamp(0.36 + 0.36 * macroWave + 0.26 * northShade + streamW * 0.52 - southSun * 0.18, 0.0, 1.0);

        // Base vegetated slope: authentic Japanese mountain olive-emerald, sunlit sasa grass & deep moss
        vec3 sunlitGrass = mix(cGrass * vec3(0.75, 0.85, 0.56), cDryGrass * vec3(0.84, 0.82, 0.56), southSun * 0.42 * mesoWave);
        vec3 deepForest  = cMoss * vec3(0.42, 0.57, 0.37);
        vec3 col = mix(sunlitGrass, deepForest, forestShade * (0.72 + 0.28 * microVar));

        // Sub-alpine bamboo-grass sasa meadows (530m -> 760m) & windswept alpine summit lichen (710m -> 865m)
        float subAlpineW = smoothstep(520.0, 680.0, elev);
        float highAlpineW = smoothstep(690.0, 845.0, elev);
        vec3 sasaMeadow = mix(cDryGrass * vec3(0.86, 0.82, 0.55), cGrass * vec3(0.78, 0.82, 0.54), mesoWave * 0.55);
        vec3 alpineCol  = mix(sasaMeadow, cLichen * vec3(0.84, 0.86, 0.81), highAlpineW);
        col = mix(col, alpineCol, subAlpineW * 0.86);

        // Talus & scree rocky apron transition at base of steep cliffs (moderate slopes 0.17..0.33)
        float talusW = smoothstep(0.16, 0.27, slope) * (1.0 - smoothstep(0.32, 0.48, slope)) * (1.0 - roadW * 0.9) * (1.0 - trailW * 0.85);
        col = mix(col, mix(cPebbles * vec3(0.74, 0.72, 0.67), cRock * 0.78, 0.45), talusW * (0.35 + 0.30 * mesoWave));

        // Fluvial mountain gorge cobbles & wet streambeds across all 4 island watersheds
        float cobbleW = smoothstep(0.14, 0.62, streamW) * (1.0 - smoothstep(0.34, 0.56, slope)) * (1.0 - roadW);
        col = mix(col, cPebbles * vec3(0.68, 0.70, 0.66), cobbleW * 0.82);

        // Coastal sandy beach, pebble cove margin & wave-cut intertidal wet rock zone (0m -> 9m)
        float sandW = (1.0 - smoothstep(2.4, 8.8, elev)) * (1.0 - smoothstep(0.16, 0.36, slope));
        col = mix(col, cSand * vec3(0.92, 0.86, 0.75), sandW);
        float coastalPebbleW = (1.0 - smoothstep(1.5, 6.2, elev)) * smoothstep(0.12, 0.28, slope) * (1.0 - smoothstep(0.34, 0.52, slope));
        col = mix(col, cPebbles * vec3(0.66, 0.65, 0.62), coastalPebbleW * 0.75);
        float wetShore = 1.0 - smoothstep(0.2, 2.8, elev);
        col *= mix(1.0, 0.50, wetShore);

        // Coal-shale dark earth around 1890 Coal Mine gorge
        col = mix(col, cCoal * vec3(0.66, 0.67, 0.70), coalW * 0.72);

        // Graded village terraces (mossy compacted earth/gravel yard pads)
        vec3 terraceCol = mix(cRoad * 0.84, cMoss * 0.74, 0.56);
        col = mix(col, terraceCol, terraceW * 0.66);

        // Narrow animal trails (獣道): warm muddy-brown earth & roots cutting through vegetation
        col = mix(col, cTrail * vec3(0.86, 0.75, 0.62), trailW * 0.88);

        // Hillside village roads & coastal forestry road: weathered 1985 gravel with mossy edges
        float roadCore = smoothstep(0.18, 0.76, roadW);
        float roadVerge = roadW * (1.0 - roadCore);
        col = mix(col, cMoss * vec3(0.62, 0.72, 0.48), roadVerge * 0.75);
        col = mix(col, cRoad * vec3(0.86, 0.84, 0.79), roadCore * 0.92);

        // ★ PHOTOREALISTIC VOLCANIC CLIFF GEOLOGY (真fBm地層岩盤: ZERO periodic patterns, natural fractured basalt + tuff + vertical rain streaks!)
        float rockW = smoothstep(0.25, 0.52, slope) * (1.0 - roadW * 0.88) * (1.0 - trailW * 0.80);
        float rockFbm = geoFbm(vec2((pXZ.x + pXZ.y) * 0.011, elev * 0.022));
        float fineFbm = geoFbm(vec2((pXZ.x - pXZ.y) * 0.045, elev * 0.036 + rockFbm * 2.4));
        float rainStreak = geoFbm(vec2((pXZ.x * 0.085 + pXZ.y * 0.068) + rockFbm * 1.4, elev * 0.008));
        float calderaZone = smoothstep(-1650.0, -1980.0, pXZ.y);
        float rustVein = smoothstep(0.56, 0.84, rockFbm * 0.65 + fineFbm * 0.35) * (0.12 + 0.24 * calderaZone);

        vec3 cliffCol = mix(cRock * vec3(0.75, 0.76, 0.74), cStrata * vec3(0.80, 0.79, 0.76), smoothstep(0.36, 0.72, fineFbm) * 0.56);
        cliffCol = mix(cliffCol, cIronRock * vec3(0.74, 0.63, 0.55), rustVein);
        cliffCol = mix(cliffCol, cLichen * vec3(0.82, 0.84, 0.78), highAlpineW * 0.68 + smoothstep(0.60, 0.88, rockFbm) * 0.16);
        cliffCol = mix(cliffCol, cCoal * 0.68, coalW * 0.62);
        cliffCol = mix(cliffCol, cMoss * vec3(0.45, 0.57, 0.39), (streamW * 0.52 + northShade * 0.28 + smoothstep(0.54, 0.82, rainStreak) * 0.22) * (1.0 - highAlpineW));
        // Natural vertical water-stain darkening & rock crevice contrast + wet dark intertidal base
        cliffCol *= (0.82 + 0.28 * (0.55 * rainStreak + 0.45 * fineFbm)) * mix(1.0, 0.56, wetShore);
        col = mix(col, cliffCol, rockW);

        // Damp gorge stream bed darkening
        col *= mix(1.0, 0.60, streamW * (1.0 - rockW * 0.65) * 0.68);

        // Surface descriptors for PBR dynamic roughness & screen-space derivative micro-bump!
        float terrainWetness = clamp(max(wetShore * 0.95, cobbleW * 0.85 + streamW * 0.45), 0.0, 1.0);
        float terrainRockness = clamp(rockW + talusW * 0.45, 0.0, 1.0);
        float terrainMicroH =
          dot(col, vec3(0.299, 0.587, 0.114)) * (0.55 + 0.95 * terrainRockness + 0.40 * roadCore + 0.45 * cobbleW) +
          (rainStreak * 0.14 + fineFbm * 0.12) * terrainRockness;

        diffuseColor.rgb *= col;`
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
        // Dynamic PBR roughness: glossy wet coastal wave-swash & mountain stream cobbles, semi-matte basalt cliffs, dry grass/earth
        roughnessFactor = mix(roughnessFactor, 0.70, terrainRockness * 0.65);
        roughnessFactor = mix(roughnessFactor, 0.26, terrainWetness);`
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
        // Mikkelsen screen-space derivative micro-bump normal perturbation (ZERO extra draw calls or bump maps!)
        #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
        {
          float camDist = length(vViewPosition);
          float bumpFade = 1.0 - smoothstep(45.0, 390.0, camDist);
          if (bumpFade > 0.01) {
            vec3 dPosX = dFdx(-vViewPosition);
            vec3 dPosY = dFdy(-vViewPosition);
            vec3 r1 = cross(dPosY, normal);
            vec3 r2 = cross(normal, dPosX);
            float fDet = dot(dPosX, r1);
            if (abs(fDet) > 1e-7) {
              float dHx = dFdx(terrainMicroH);
              float dHy = dFdy(terrainMicroH);
              vec3 surfGrad = sign(fDet) * (dHx * r1 + dHy * r2);
              float bumpScale = (0.14 + 0.34 * terrainRockness + 0.12 * terrainWetness) * bumpFade;
              normal = normalize(abs(fDet) * normal - bumpScale * surfGrad);
            }
          }
        }
        #endif`
      );
  };

  mat.customProgramCacheKey = () => 'kuroiso-3x6km-hyper-terrain-v5-sf11';
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
  const horizonVis = new Float32Array(totalVerts);

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

      // Shadow Flame 1.1 SF-MacroHorizon 6km mountain visibility (zero samplers!)
      horizonVis[idx] = sampleMacroHorizonVis(wx, wz);
    }
  }

  const indexCount = segs * segs * 6 + 4 * segs * 6;
  const indices = totalVerts > 65535 ? new Uint32Array(indexCount) : new Uint16Array(indexCount);
  let ptr = 0;

  for (let iz = 0; iz < segs; iz++) {
    const qz = z0 + (iz + 0.5) * step;
    for (let ix = 0; ix < segs; ix++) {
      const qx = x0 + (ix + 0.5) * step;
      if (isInsideMinePortalCutout(qx, qz)) continue;
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
      horizonVis[dst] = horizonVis[src];
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
  geo.setAttribute('aHorizonVis', new THREE.BufferAttribute(horizonVis, 1));
  geo.setIndex(new THREE.BufferAttribute(ptr === indices.length ? indices : indices.subarray(0, ptr), 1));
  geo.computeBoundingSphere();
  return geo;
}

/**
 * Dynamic 5-LOD Streaming Terrain Manager for the 3km x 6km Kuroiso-jima island (18 km²).
 * Never loads all high-resolution chunks at once — streams near chunks up to LOD0 (2m)
 * while maintaining ultra-light LOD4 (32m / 32 tris per chunk) horizon silhouettes across
 * the entire 6km mountain range, strictly enforcing a per-frame CPU budget for locked high FPS.
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

    // Register 24x48=1,152 chunk slots & quick-cull pure deep-ocean perimeter cells (9 probe pts)
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
    if (dist < LOD_DIST_MAX[3]) return 3;
    return 4;
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
   * - Builds ultra-light LOD3/LOD4 horizon silhouettes for all 3km x 6km land chunks (~24ms total)
   * - Synchronously builds immediate LOD0/LOD1 area around the player so frame 1 is razor-sharp!
   */
  public warmStart(camX: number, camZ: number): void {
    for (let i = 0; i < this.chunks.length; i++) {
      const rec = this.chunks[i];
      if (rec.isDeepOcean) continue;
      const dist = Math.hypot(rec.centerX - camX, rec.centerZ - camZ);
      const targetLod = dist < 210 ? 0 : dist < 440 ? 1 : dist < 1350 ? 3 : 4;
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
   * so moving rapidly or teleporting across 3km x 6km never drops frame rate.
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
    let lod4Count = 0;
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
      else if (r.currentLod === 3) lod3Count++;
      else lod4Count++;
    }
    return {
      activeChunks,
      lod0Count,
      lod1Count,
      lod2Count,
      lod3Count,
      lod4Count,
      pendingQueue: this.pending.length,
      approxTriangles,
    };
  }
}
