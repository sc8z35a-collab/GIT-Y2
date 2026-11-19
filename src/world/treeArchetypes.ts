export type LeafGroup = 'cedar' | 'broad';
export type FoliageStyle = 'conifer_tier' | 'pine_pad' | 'broad_crown';
export type TreeBiomeTag = 'mountain' | 'valley' | 'coastal' | 'understory' | 'ridge' | 'mixed';

export interface BakedGeoData {
  positions: Float32Array;
  normals: Float32Array;
  uvs: Float32Array;
  ao: Float32Array; // Per-vertex luminance/AO multiplier (0.58..1.08) preserving exact leaf hue!
  indices: Uint16Array;
  vertexCount: number;
  triCount: number;
}

export interface TreeArchetypeSpec {
  id: number;
  name: string;
  leafGroup: LeafGroup;
  style: FoliageStyle;
  biome: TreeBiomeTag;
  height: number;       // Base height in meters (3.4m .. 25.5m)
  trunkRadius: number;  // Base radius at ground
  branchCount: number;  // Explicit 3D branch count (4 .. 15!)
  stems: 1 | 2 | 3;     // Single trunk, twin-forked, or multi-stem coppice
  leanX: number;        // Natural trunk lean/curve
  leanZ: number;
  sCurve: number;       // Organic trunk S-bend amplitude
  crownStart: number;   // Fraction of trunk height where lowest branches emerge
  branchReach: number;  // Typical lateral reach of primary branches
  branchPitch: number;  // Upward (+) or drooping (-) pitch angle in radians
  leafRadius: number;   // Base size of branch-tip foliage cluster
  leafFlatness: number; // Vertical flattening of foliage clusters
  deadStubs: number;    // Optional bare broken limbs (storm/old-growth realism)
  seed: number;
}

export interface BakedTreeArchetype {
  spec: TreeArchetypeSpec;
  woodLod0: BakedGeoData;
  leafLod0: BakedGeoData;
  woodLod1: BakedGeoData;
  leafLod1: BakedGeoData;
}

// ============================================================================
// 32 HAND-DESIGNED JAPANESE MOUNTAIN FOREST TREE ARCHETYPES
// - Every single archetype has 4 to 15 real 3D branches (no repetitive cones!)
// - Heights span 3.4m understory saplings to 25.5m ancient giant cedars & oaks
// - Strictly reuses existing cedar ('foliage_green') & broad ('shrub_foliage')
//   leaf materials with zero hue alteration!
// ============================================================================
export const TREE_SPECS: readonly TreeArchetypeSpec[] = [
  // --- A. Japanese Cedar & Hinoki Cypress (杉・檜系 8種: 4〜15枝, 7.5m〜25.5m) ---
  { id: 0,  name: '細身若杉(4枝)',       leafGroup: 'cedar', style: 'conifer_tier', biome: 'mountain',   height: 7.6,  trunkRadius: 0.16, branchCount: 4,  stems: 1, leanX: 0.25,  leanZ: -0.15, sCurve: 0.18, crownStart: 0.28, branchReach: 1.55, branchPitch: -0.18, leafRadius: 1.45, leafFlatness: 0.56, deadStubs: 0, seed: 101 },
  { id: 1,  name: '根曲がり斜面杉(6枝)', leafGroup: 'cedar', style: 'conifer_tier', biome: 'mountain',   height: 11.2, trunkRadius: 0.24, branchCount: 6,  stems: 1, leanX: 0.85,  leanZ: 0.35,  sCurve: 0.65, crownStart: 0.30, branchReach: 2.15, branchPitch: -0.22, leafRadius: 1.75, leafFlatness: 0.52, deadStubs: 0, seed: 202 },
  { id: 2,  name: '標準山杉(8枝)',       leafGroup: 'cedar', style: 'conifer_tier', biome: 'mountain',   height: 15.6, trunkRadius: 0.34, branchCount: 8,  stems: 1, leanX: -0.35, leanZ: 0.28,  sCurve: 0.30, crownStart: 0.28, branchReach: 2.65, branchPitch: -0.20, leafRadius: 2.05, leafFlatness: 0.50, deadStubs: 0, seed: 303 },
  { id: 3,  name: '双幹夫婦杉(10枝)',    leafGroup: 'cedar', style: 'conifer_tier', biome: 'mountain',   height: 17.4, trunkRadius: 0.38, branchCount: 10, stems: 2, leanX: 0.40,  leanZ: -0.30, sCurve: 0.35, crownStart: 0.26, branchReach: 2.55, branchPitch: -0.16, leafRadius: 1.95, leafFlatness: 0.52, deadStubs: 0, seed: 404 },
  { id: 4,  name: '高枝払い老杉(11枝)',  leafGroup: 'cedar', style: 'conifer_tier', biome: 'mountain',   height: 21.2, trunkRadius: 0.44, branchCount: 11, stems: 1, leanX: 0.30,  leanZ: 0.42,  sCurve: 0.28, crownStart: 0.46, branchReach: 2.95, branchPitch: -0.14, leafRadius: 2.15, leafFlatness: 0.48, deadStubs: 2, seed: 505 },
  { id: 5,  name: '古檜重層樹冠(13枝)',  leafGroup: 'cedar', style: 'conifer_tier', biome: 'mountain',   height: 19.6, trunkRadius: 0.42, branchCount: 13, stems: 1, leanX: -0.52, leanZ: -0.22, sCurve: 0.40, crownStart: 0.24, branchReach: 3.15, branchPitch: -0.26, leafRadius: 2.10, leafFlatness: 0.46, deadStubs: 1, seed: 606 },
  { id: 6,  name: '風衝片枝杉(14枝)',    leafGroup: 'cedar', style: 'conifer_tier', biome: 'ridge',      height: 14.5, trunkRadius: 0.36, branchCount: 14, stems: 1, leanX: 1.45,  leanZ: 0.55,  sCurve: 0.72, crownStart: 0.32, branchReach: 2.80, branchPitch: -0.12, leafRadius: 1.80, leafFlatness: 0.45, deadStubs: 2, seed: 707 },
  { id: 7,  name: '御神木級大杉(15枝)',  leafGroup: 'cedar', style: 'conifer_tier', biome: 'mountain',   height: 25.5, trunkRadius: 0.62, branchCount: 15, stems: 1, leanX: -0.25, leanZ: 0.32,  sCurve: 0.42, crownStart: 0.26, branchReach: 3.95, branchPitch: -0.22, leafRadius: 2.55, leafFlatness: 0.48, deadStubs: 2, seed: 808 },

  // --- B. Japanese Coastal & Ridge Pines (黒松・赤松系 6種: 4〜15枝, 5.8m〜18.0m) ---
  { id: 8,  name: '岩場盆栽小松(4枝)',   leafGroup: 'cedar', style: 'pine_pad',     biome: 'coastal',    height: 5.8,  trunkRadius: 0.19, branchCount: 4,  stems: 1, leanX: 1.15,  leanZ: -0.45, sCurve: 0.85, crownStart: 0.38, branchReach: 2.10, branchPitch: 0.14,  leafRadius: 1.55, leafFlatness: 0.42, deadStubs: 0, seed: 909 },
  { id: 9,  name: '斜傾海岸黒松(6枝)',   leafGroup: 'cedar', style: 'pine_pad',     biome: 'coastal',    height: 10.6, trunkRadius: 0.30, branchCount: 6,  stems: 1, leanX: 1.65,  leanZ: 0.60,  sCurve: 0.95, crownStart: 0.42, branchReach: 2.95, branchPitch: 0.16,  leafRadius: 1.95, leafFlatness: 0.40, deadStubs: 1, seed: 1010 },
  { id: 10, name: 'S字幹尾根松(8枝)',    leafGroup: 'cedar', style: 'pine_pad',     biome: 'ridge',      height: 13.5, trunkRadius: 0.35, branchCount: 8,  stems: 1, leanX: -0.95, leanZ: 0.85,  sCurve: 1.15, crownStart: 0.40, branchReach: 3.15, branchPitch: 0.18,  leafRadius: 2.00, leafFlatness: 0.38, deadStubs: 1, seed: 1111 },
  { id: 11, name: '二股大黒松(10枝)',    leafGroup: 'cedar', style: 'pine_pad',     biome: 'coastal',    height: 16.0, trunkRadius: 0.44, branchCount: 10, stems: 2, leanX: 0.72,  leanZ: -0.64, sCurve: 0.78, crownStart: 0.38, branchReach: 3.40, branchPitch: 0.22,  leafRadius: 2.15, leafFlatness: 0.38, deadStubs: 1, seed: 1212 },
  { id: 12, name: '高台傘松(12枝)',      leafGroup: 'cedar', style: 'pine_pad',     biome: 'ridge',      height: 18.0, trunkRadius: 0.46, branchCount: 12, stems: 1, leanX: -0.60, leanZ: -0.45, sCurve: 0.65, crownStart: 0.52, branchReach: 3.90, branchPitch: 0.26,  leafRadius: 2.25, leafFlatness: 0.36, deadStubs: 1, seed: 1313 },
  { id: 13, name: '懸崖老松(15枝)',      leafGroup: 'cedar', style: 'pine_pad',     biome: 'coastal',    height: 14.2, trunkRadius: 0.48, branchCount: 15, stems: 1, leanX: 2.15,  leanZ: -0.75, sCurve: 1.25, crownStart: 0.32, branchReach: 3.75, branchPitch: 0.10,  leafRadius: 1.95, leafFlatness: 0.38, deadStubs: 2, seed: 1414 },

  // --- C. Japanese Broadleaf Oaks, Beeches & Zelkovas (広葉樹 8種: 4〜15枝, 5.2m〜22.0m) ---
  { id: 14, name: '林床若木クヌギ(4枝)', leafGroup: 'broad', style: 'broad_crown',  biome: 'understory', height: 5.2,  trunkRadius: 0.12, branchCount: 4,  stems: 1, leanX: 0.32,  leanZ: 0.24,  sCurve: 0.28, crownStart: 0.38, branchReach: 1.55, branchPitch: 0.48,  leafRadius: 1.55, leafFlatness: 0.78, deadStubs: 0, seed: 1515 },
  { id: 15, name: '細枝ヒメシャラ(5枝)', leafGroup: 'broad', style: 'broad_crown',  biome: 'valley',     height: 8.2,  trunkRadius: 0.17, branchCount: 5,  stems: 1, leanX: -0.48, leanZ: 0.35,  sCurve: 0.42, crownStart: 0.42, branchReach: 2.05, branchPitch: 0.52,  leafRadius: 1.80, leafFlatness: 0.74, deadStubs: 0, seed: 1616 },
  { id: 16, name: '三又雑木コナラ(7枝)', leafGroup: 'broad', style: 'broad_crown',  biome: 'mixed',      height: 11.6, trunkRadius: 0.28, branchCount: 7,  stems: 2, leanX: 0.42,  leanZ: -0.40, sCurve: 0.45, crownStart: 0.34, branchReach: 2.75, branchPitch: 0.44,  leafRadius: 2.15, leafFlatness: 0.72, deadStubs: 0, seed: 1717 },
  { id: 17, name: '横張り山ブナ(9枝)',   leafGroup: 'broad', style: 'broad_crown',  biome: 'valley',     height: 14.2, trunkRadius: 0.38, branchCount: 9,  stems: 1, leanX: -0.55, leanZ: 0.48,  sCurve: 0.50, crownStart: 0.36, branchReach: 3.45, branchPitch: 0.36,  leafRadius: 2.40, leafFlatness: 0.66, deadStubs: 0, seed: 1818 },
  { id: 18, name: '斜幹渓谷トチ(11枝)',  leafGroup: 'broad', style: 'broad_crown',  biome: 'valley',     height: 16.0, trunkRadius: 0.42, branchCount: 11, stems: 1, leanX: 1.25,  leanZ: -0.55, sCurve: 0.70, crownStart: 0.35, branchReach: 3.65, branchPitch: 0.38,  leafRadius: 2.45, leafFlatness: 0.68, deadStubs: 1, seed: 1919 },
  { id: 19, name: '扇樹冠ケヤキ(12枝)',  leafGroup: 'broad', style: 'broad_crown',  biome: 'mixed',      height: 18.6, trunkRadius: 0.48, branchCount: 12, stems: 1, leanX: 0.25,  leanZ: 0.22,  sCurve: 0.32, crownStart: 0.34, branchReach: 4.10, branchPitch: 0.62,  leafRadius: 2.50, leafFlatness: 0.65, deadStubs: 0, seed: 2020 },
  { id: 20, name: '株立ち雑木(14枝)',    leafGroup: 'broad', style: 'broad_crown',  biome: 'mixed',      height: 12.8, trunkRadius: 0.24, branchCount: 14, stems: 3, leanX: -0.30, leanZ: 0.45,  sCurve: 0.40, crownStart: 0.30, branchReach: 3.15, branchPitch: 0.50,  leafRadius: 2.05, leafFlatness: 0.72, deadStubs: 0, seed: 2121 },
  { id: 21, name: '巨木古ブナ・楠(15枝)', leafGroup: 'broad', style: 'broad_crown', biome: 'valley',     height: 22.0, trunkRadius: 0.66, branchCount: 15, stems: 1, leanX: -0.65, leanZ: -0.45, sCurve: 0.55, crownStart: 0.32, branchReach: 4.85, branchPitch: 0.42,  leafRadius: 2.95, leafFlatness: 0.64, deadStubs: 1, seed: 2222 },

  // --- D. Understory Shrub-Trees & Sub-Canopy Fillers (低木・亜高木 5種: 4〜10枝, 3.4m〜7.8m) ---
  { id: 22, name: '林縁小灌木(4枝)',     leafGroup: 'broad', style: 'broad_crown',  biome: 'understory', height: 3.4,  trunkRadius: 0.09, branchCount: 4,  stems: 2, leanX: 0.20,  leanZ: -0.18, sCurve: 0.22, crownStart: 0.22, branchReach: 1.25, branchPitch: 0.45,  leafRadius: 1.25, leafFlatness: 0.80, deadStubs: 0, seed: 2323 },
  { id: 23, name: '株立ち低木(5枝)',     leafGroup: 'broad', style: 'broad_crown',  biome: 'understory', height: 4.5,  trunkRadius: 0.11, branchCount: 5,  stems: 3, leanX: -0.22, leanZ: 0.25,  sCurve: 0.26, crownStart: 0.24, branchReach: 1.50, branchPitch: 0.48,  leafRadius: 1.38, leafFlatness: 0.76, deadStubs: 0, seed: 2424 },
  { id: 24, name: '枝垂れ渓流木(6枝)',   leafGroup: 'broad', style: 'broad_crown',  biome: 'valley',     height: 6.8,  trunkRadius: 0.16, branchCount: 6,  stems: 1, leanX: 0.75,  leanZ: 0.32,  sCurve: 0.55, crownStart: 0.35, branchReach: 2.35, branchPitch: -0.05, leafRadius: 1.75, leafFlatness: 0.70, deadStubs: 0, seed: 2525 },
  { id: 25, name: '丸冠中低木(8枝)',     leafGroup: 'broad', style: 'broad_crown',  biome: 'understory', height: 7.8,  trunkRadius: 0.19, branchCount: 8,  stems: 1, leanX: -0.28, leanZ: -0.24, sCurve: 0.30, crownStart: 0.28, branchReach: 2.25, branchPitch: 0.36,  leafRadius: 1.85, leafFlatness: 0.75, deadStubs: 0, seed: 2626 },
  { id: 26, name: '広がりヤブツバキ(10枝)', leafGroup: 'cedar', style: 'broad_crown', biome: 'understory', height: 6.2, trunkRadius: 0.18, branchCount: 10, stems: 2, leanX: 0.35,  leanZ: 0.28,  sCurve: 0.32, crownStart: 0.24, branchReach: 2.20, branchPitch: 0.32,  leafRadius: 1.58, leafFlatness: 0.72, deadStubs: 0, seed: 2727 },

  // --- E. Storm-Scarred & Old-Growth Island Character Trees (個性派 5種: 5〜15枝, 12.0m〜20.5m) ---
  { id: 27, name: '台風折れ片枝杉(5枝)', leafGroup: 'cedar', style: 'conifer_tier', biome: 'ridge',      height: 13.6, trunkRadius: 0.36, branchCount: 5,  stems: 1, leanX: 1.05,  leanZ: -0.60, sCurve: 0.62, crownStart: 0.38, branchReach: 2.55, branchPitch: -0.15, leafRadius: 1.95, leafFlatness: 0.50, deadStubs: 3, seed: 2828 },
  { id: 28, name: '高幹二層冠杉(7枝)',   leafGroup: 'cedar', style: 'conifer_tier', biome: 'mountain',   height: 17.2, trunkRadius: 0.34, branchCount: 7,  stems: 1, leanX: -0.40, leanZ: 0.52,  sCurve: 0.38, crownStart: 0.42, branchReach: 2.75, branchPitch: -0.20, leafRadius: 2.15, leafFlatness: 0.48, deadStubs: 1, seed: 2929 },
  { id: 29, name: '曲幹古山桜型(9枝)',   leafGroup: 'broad', style: 'broad_crown',  biome: 'mixed',      height: 12.2, trunkRadius: 0.34, branchCount: 9,  stems: 1, leanX: 1.35,  leanZ: 0.68,  sCurve: 0.88, crownStart: 0.36, branchReach: 3.35, branchPitch: 0.24,  leafRadius: 2.20, leafFlatness: 0.60, deadStubs: 1, seed: 3030 },
  { id: 30, name: '密生複層ヒバ(12枝)',  leafGroup: 'cedar', style: 'conifer_tier', biome: 'mountain',   height: 15.2, trunkRadius: 0.36, branchCount: 12, stems: 1, leanX: -0.28, leanZ: -0.35, sCurve: 0.34, crownStart: 0.20, branchReach: 2.75, branchPitch: -0.28, leafRadius: 1.95, leafFlatness: 0.52, deadStubs: 0, seed: 3131 },
  { id: 31, name: '原生林絡み古木(15枝)', leafGroup: 'broad', style: 'broad_crown', biome: 'valley',     height: 20.5, trunkRadius: 0.58, branchCount: 15, stems: 2, leanX: 0.85,  leanZ: -0.72, sCurve: 0.82, crownStart: 0.28, branchReach: 4.45, branchPitch: 0.35,  leafRadius: 2.65, leafFlatness: 0.62, deadStubs: 2, seed: 3232 },
];

// Deterministic PRNG for reproducible organic geometry
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

class MeshAcc {
  public readonly pos: number[] = [];
  public readonly norm: number[] = [];
  public readonly uv: number[] = [];
  public readonly ao: number[] = [];
  public readonly idx: number[] = [];

  public addTube(
    pts: Array<[number, number, number, number]>,
    radialSegs: number,
    uvRepeatY: number,
    baseAo = 0.72,
    tipAo = 0.96
  ): void {
    if (pts.length < 2) return;
    const baseVertex = this.pos.length / 3;
    let accLen = 0;

    for (let s = 0; s < pts.length; s++) {
      const [px, py, pz, r] = pts[s];
      if (s > 0) {
        accLen += Math.hypot(px - pts[s - 1][0], py - pts[s - 1][1], pz - pts[s - 1][2]);
      }
      // Compute tangent
      const prev = pts[Math.max(0, s - 1)];
      const next = pts[Math.min(pts.length - 1, s + 1)];
      let tx = next[0] - prev[0];
      let ty = next[1] - prev[1];
      let tz = next[2] - prev[2];
      const tl = Math.hypot(tx, ty, tz) || 1;
      tx /= tl; ty /= tl; tz /= tl;

      // Stable orthonormal basis (u, v) perpendicular to tangent
      const refX = Math.abs(ty) < 0.92 ? 0 : 1;
      const refY = Math.abs(ty) < 0.92 ? 1 : 0;
      const refZ = 0;
      let ux = ty * refZ - tz * refY;
      let uy = tz * refX - tx * refZ;
      let uz = tx * refY - ty * refX;
      const ul = Math.hypot(ux, uy, uz) || 1;
      ux /= ul; uy /= ul; uz /= ul;

      const vx = ty * uz - tz * uy;
      const vy = tz * ux - tx * uz;
      const vz = tx * uy - ty * ux;

      const tFrac = s / (pts.length - 1);
      const vAo = baseAo + (tipAo - baseAo) * tFrac;
      const vCoord = accLen * uvRepeatY;

      for (let j = 0; j <= radialSegs; j++) {
        const ang = (j / radialSegs) * Math.PI * 2;
        const ca = Math.cos(ang);
        const sa = Math.sin(ang);
        const nx = ux * ca + vx * sa;
        const ny = uy * ca + vy * sa;
        const nz = uz * ca + vz * sa;
        this.pos.push(px + nx * r, py + ny * r, pz + nz * r);
        this.norm.push(nx, ny, nz);
        this.uv.push(j / radialSegs, vCoord);
        this.ao.push(vAo);
      }
    }

    const ring = radialSegs + 1;
    for (let s = 0; s < pts.length - 1; s++) {
      const r0 = baseVertex + s * ring;
      const r1 = baseVertex + (s + 1) * ring;
      for (let j = 0; j < radialSegs; j++) {
        this.idx.push(r0 + j, r1 + j, r0 + j + 1);
        this.idx.push(r0 + j + 1, r1 + j, r1 + j + 1);
      }
    }
  }

  public addFoliageCluster(
    cx: number,
    cy: number,
    cz: number,
    rx: number,
    ry: number,
    rz: number,
    style: FoliageStyle,
    yaw: number,
    tilt: number,
    lowPoly: boolean,
    rand: () => number,
    heightFrac: number
  ): void {
    // Smooth vertex-shared organic foliage dome/puff (ZERO flat-shaded icosahedron facets!)
    // LOD0: 6 radial x 2 mid rings + 2 poles = 14 verts, 24 tris (vs 60 unshared flat verts before!)
    // LOD1/LOD2: 5 radial x 1 equator ring + 2 poles = 7 verts, 10 tris!
    const segs = lowPoly ? 5 : 6;
    const pSeed = rand() * Math.PI * 2;
    const cyaw = Math.cos(yaw);
    const syaw = Math.sin(yaw);
    const ct = Math.cos(tilt);
    const st = Math.sin(tilt);

    const baseVertex = this.pos.length / 3;

    const pushVert = (ux: number, uy: number, uz: number, uCoord: number, vCoord: number) => {
      const ang = Math.atan2(uz, ux);
      let y = uy;
      let lobe = 1.0;

      if (style === 'conifer_tier') {
        // Softly scalloped drooping Japanese cedar/hinoki bough spray
        lobe = 1.0 + 0.22 * Math.sin(ang * 3.0 + pSeed) + 0.12 * Math.cos(ang * 2.0 - pSeed);
        if (y < 0) y *= 0.44;
        else y *= 1.12;
        y -= Math.max(0, 0.42 - Math.abs(uy)) * 0.24 * (lobe - 0.84);
      } else if (style === 'pine_pad') {
        // Classic flattened-underside Japanese cloud pine needle pad
        lobe = 1.0 + 0.20 * Math.sin(ang * 3.0 + pSeed) + 0.13 * Math.cos(ang * 4.0 + pSeed * 1.3);
        y = y < 0 ? y * 0.30 : y * 0.90;
      } else {
        // Velvety multi-lobed deciduous Japanese mountain broadleaf crown
        lobe = 1.0 + 0.18 * Math.sin(ang * 3.0 + uy * 1.4 + pSeed) + 0.12 * Math.cos(ang * 2.0 - pSeed);
        if (y < 0) y *= 0.64;
      }

      const px = ux * rx * lobe;
      const py = y * ry * lobe;
      const pz = uz * rz * lobe;

      // Tilt around local X, then rotate around Y by branch azimuth
      const ty = py * ct - pz * st;
      const tz = py * st + pz * ct;
      const wx = px * cyaw + tz * syaw + cx;
      const wz = -px * syaw + tz * cyaw + cz;
      const wy = ty + cy;
      this.pos.push(wx, wy, wz);

      // Smooth upward-biased botanical canopy normal (soft velvety sun-dappled shading, zero hard creases!)
      const lnx = ux * 0.82;
      const lny = uy * 0.72 + 0.68;
      const lnz = uz * 0.82;
      const rny = lny * ct - lnz * st;
      const rnz = lny * st + lnz * ct;
      const wnx = lnx * cyaw + rnz * syaw;
      const wnz = -lnx * syaw + rnz * cyaw;
      const nl = Math.hypot(wnx, rny, wnz) || 1;
      this.norm.push(wnx / nl, rny / nl, wnz / nl);

      this.uv.push(uCoord, vCoord);
      // Soft natural underside-to-sunlit-crest AO (clamped <= 0.96 to preserve exact natural green hue without HDR glare!)
      const localAo = 0.72 + Math.max(0, Math.min(1, (uy + 0.85) * 0.56)) * 0.18 + heightFrac * 0.06;
      this.ao.push(Math.max(0.64, Math.min(0.96, localAo)));
    };

    // Ring profile latitudes (from bottom pole to top pole)
    const ringPhis = lowPoly ? [-0.08] : [-0.38, 0.34];

    // Vertex 0: Bottom pole
    pushVert(0, -1, 0, 0.5, 0.0);

    // Intermediate rings (segs + 1 verts per ring for clean UV wrap)
    const ringStride = segs + 1;
    for (let r = 0; r < ringPhis.length; r++) {
      const phi = ringPhis[r];
      const cosP = Math.cos(phi);
      const sinP = Math.sin(phi);
      const vCoord = ((r + 1) / (ringPhis.length + 1)) * 1.4;
      for (let j = 0; j <= segs; j++) {
        const ang = (j / segs) * Math.PI * 2;
        pushVert(Math.cos(ang) * cosP, sinP, Math.sin(ang) * cosP, (j / segs) * 1.6, vCoord);
      }
    }

    // Last vertex: Top pole
    const topPoleIdx = baseVertex + 1 + ringPhis.length * ringStride;
    pushVert(0, 1, 0, 0.5, 1.4);

    // Bottom cap fan (CCW outward winding)
    const firstRing = baseVertex + 1;
    for (let j = 0; j < segs; j++) {
      this.idx.push(baseVertex, firstRing + j, firstRing + j + 1);
    }
    // Side bands between rings
    for (let r = 0; r < ringPhis.length - 1; r++) {
      const r0 = baseVertex + 1 + r * ringStride;
      const r1 = r0 + ringStride;
      for (let j = 0; j < segs; j++) {
        this.idx.push(r0 + j, r1 + j + 1, r0 + j + 1);
        this.idx.push(r0 + j, r1 + j, r1 + j + 1);
      }
    }
    // Top cap fan
    const lastRing = baseVertex + 1 + (ringPhis.length - 1) * ringStride;
    for (let j = 0; j < segs; j++) {
      this.idx.push(lastRing + j, topPoleIdx, lastRing + j + 1);
    }
  }

  public finalize(): BakedGeoData {
    return {
      positions: new Float32Array(this.pos),
      normals: new Float32Array(this.norm),
      uvs: new Float32Array(this.uv),
      ao: new Float32Array(this.ao),
      indices: new Uint16Array(this.idx),
      vertexCount: this.pos.length / 3,
      triCount: this.idx.length / 3,
    };
  }
}

/**
 * Evaluates a point along a naturally curving stem with root flare at base.
 */
function sampleStemPoint(
  t: number,
  height: number,
  baseR: number,
  leanX: number,
  leanZ: number,
  sCurve: number,
  phase: number,
  ox: number,
  oz: number
): [number, number, number, number] {
  const y = t * height;
  const sBend = Math.sin(t * Math.PI * 1.35 + phase) * sCurve * t;
  const cBend = Math.cos(t * Math.PI * 1.15 - phase) * sCurve * 0.45 * t;
  const x = ox + leanX * Math.pow(t, 1.25) + sBend;
  const z = oz + leanZ * Math.pow(t, 1.25) + cBend;
  // Subtle organic buttress root flare near ground + natural taper to leader tip
  const flare = t < 0.14 ? 1.0 + Math.pow(1.0 - t / 0.14, 2) * 0.42 : 1.0;
  const r = Math.max(0.035, baseR * Math.pow(1.0 - t * 0.84, 0.92) * flare);
  return [x, y, z, r];
}

function buildArchetypeLod(spec: TreeArchetypeSpec, isLod1: boolean): { wood: BakedGeoData; leaf: BakedGeoData } {
  const rand = mulberry32(spec.seed * 7919 + 17);
  const wood = new MeshAcc();
  const leaf = new MeshAcc();

  const trunkSegs = isLod1 ? 2 : 3;
  const trunkRadSegs = isLod1 ? 3 : 4;
  const branchRadSegs = 3;
  const stemInfos: Array<{
    height: number;
    baseR: number;
    leanX: number;
    leanZ: number;
    sCurve: number;
    phase: number;
    ox: number;
    oz: number;
  }> = [];

  // 1. Build 1, 2, or 3 curved main trunks (single / twin-forked / multi-stem coppice)
  for (let st = 0; st < spec.stems; st++) {
    const ang = (st / spec.stems) * Math.PI * 2 + rand() * 0.9;
    const splitSpread = spec.stems === 1 ? 0 : (0.55 + rand() * 0.55) * (spec.height * 0.08);
    const stemH = spec.height * (st === 0 ? 1.0 : 0.78 + rand() * 0.18);
    const stemR = spec.trunkRadius * (st === 0 ? 1.0 : 0.72 + rand() * 0.18);
    const lx = spec.leanX + Math.cos(ang) * splitSpread;
    const lz = spec.leanZ + Math.sin(ang) * splitSpread;
    const sc = spec.sCurve * (0.75 + rand() * 0.5);
    const ph = rand() * Math.PI * 2;
    const ox = spec.stems === 1 ? 0 : Math.cos(ang) * stemR * 0.75;
    const oz = spec.stems === 1 ? 0 : Math.sin(ang) * stemR * 0.75;

    stemInfos.push({ height: stemH, baseR: stemR, leanX: lx, leanZ: lz, sCurve: sc, phase: ph, ox, oz });

    const pts: Array<[number, number, number, number]> = [];
    // Sink root slightly (-0.45m) so trees on steep 35° slopes never float!
    const p0 = sampleStemPoint(0, stemH, stemR, lx, lz, sc, ph, ox, oz);
    pts.push([p0[0], -0.55, p0[2], p0[3] * 1.15]);
    for (let k = 0; k <= trunkSegs; k++) {
      pts.push(sampleStemPoint(k / trunkSegs, stemH, stemR, lx, lz, sc, ph, ox, oz));
    }
    wood.addTube(pts, trunkRadSegs, 0.35, 0.65, 0.92);

    // Top leader foliage cap on every stem so crown apex always closes organically
    const topP = pts[pts.length - 1];
    const capR = spec.leafRadius * (spec.style === 'conifer_tier' ? 0.62 : 0.92);
    leaf.addFoliageCluster(
      topP[0],
      topP[1] + capR * spec.leafFlatness * 0.25,
      topP[2],
      capR,
      capR * (spec.style === 'conifer_tier' ? 1.18 : spec.leafFlatness),
      capR * (0.9 + rand() * 0.22),
      spec.style,
      rand() * Math.PI * 2,
      0,
      isLod1,
      rand,
      1.0
    );
  }

  // 2. Grow EXACTLY spec.branchCount (4 .. 15) organic 3D primary + forked sub-branches!
  const goldenAngle = 2.399963229728653;
  const azBase = rand() * Math.PI * 2;

  for (let b = 0; b < spec.branchCount; b++) {
    const stem = stemInfos[b % stemInfos.length];
    const frac = spec.branchCount <= 1 ? 0.65 : b / (spec.branchCount - 1);
    // Distribute nodes vertically from crownStart up to 92% height with organic jitter
    const tNode = Math.min(
      0.93,
      Math.max(spec.crownStart * 0.85, spec.crownStart + frac * (0.91 - spec.crownStart) + (rand() - 0.5) * 0.06)
    );
    const node = sampleStemPoint(tNode, stem.height, stem.baseR, stem.leanX, stem.leanZ, stem.sCurve, stem.phase, stem.ox, stem.oz);

    // Golden-angle spiral + organic wind/random jitter prevents ANY radial mechanical pattern!
    let az = azBase + b * goldenAngle + (rand() - 0.5) * 0.55;
    // Wind-sculpted coastal/ridge species bias limbs gently toward lean direction
    if (spec.biome === 'ridge' || (spec.biome === 'coastal' && Math.hypot(spec.leanX, spec.leanZ) > 1.2)) {
      const leanAng = Math.atan2(spec.leanZ, spec.leanX);
      const diff = Math.atan2(Math.sin(leanAng - az), Math.cos(leanAng - az));
      az += diff * 0.22;
    }

    // Taper branch length smoothly toward apex (wider lower limbs for conifers, wider upper limbs for broadleaves)
    const taperProfile =
      spec.style === 'conifer_tier'
        ? 1.18 - frac * 0.62
        : spec.style === 'pine_pad'
          ? 0.92 + Math.sin(frac * Math.PI) * 0.34
          : 0.84 + Math.sin(frac * Math.PI * 0.85) * 0.36;

    const len = spec.branchReach * taperProfile * (0.76 + rand() * 0.48);
    const pitch = spec.branchPitch + (frac - 0.35) * (spec.style === 'conifer_tier' ? 0.28 : 0.24) + (rand() - 0.5) * 0.22;
    const dx = Math.cos(az) * Math.cos(pitch);
    const dy = Math.sin(pitch);
    const dz = Math.sin(az) * Math.cos(pitch);

    const bBaseR = Math.max(0.04, Math.min(node[3] * 0.68, stem.baseR * (0.34 - frac * 0.14)));
    const midLift = spec.style === 'conifer_tier' ? -len * 0.08 : len * 0.10;
    const pMid: [number, number, number, number] = [
      node[0] + dx * len * 0.52,
      node[1] + dy * len * 0.52 + midLift,
      node[2] + dz * len * 0.52,
      bBaseR * 0.64,
    ];
    const pTip: [number, number, number, number] = [
      node[0] + dx * len,
      node[1] + dy * len + (spec.style === 'pine_pad' ? len * 0.12 : 0),
      node[2] + dz * len,
      Math.max(0.025, bBaseR * 0.28),
    ];

    // LOD1 draws primary major limbs (skipping finest alternating twigs) to stay ultra-light while preserving silhouette!
    const drawBranchWood = !isLod1 || b % 2 === 0 || spec.branchCount <= 7;
    if (drawBranchWood) {
      wood.addTube(isLod1 ? [node, pTip] : [node, pMid, pTip], branchRadSegs, 0.45, 0.68, 0.94);
    }

    // Secondary Y-fork sub-branch on larger branches (LOD0) for genuine branching complexity!
    const hasFork = !isLod1 && len > 1.85 && (b % 2 === 0 || spec.branchCount >= 10);
    let forkTip: [number, number, number, number] | null = null;
    if (hasFork) {
      const fAz = az + (b % 2 === 0 ? 1 : -1) * (0.42 + rand() * 0.34);
      const fPitch = pitch + 0.16 + (rand() - 0.5) * 0.18;
      const fLen = len * (0.46 + rand() * 0.18);
      forkTip = [
        pMid[0] + Math.cos(fAz) * Math.cos(fPitch) * fLen,
        pMid[1] + Math.sin(fPitch) * fLen,
        pMid[2] + Math.sin(fAz) * Math.cos(fPitch) * fLen,
        Math.max(0.022, bBaseR * 0.24),
      ];
      wood.addTube([pMid, forkTip], 3, 0.5, 0.74, 0.95);
    }

    // Attach lush organic foliage cluster(s) directly onto this branch!
    const drawLeaf = !isLod1 || b % 2 === 0 || spec.branchCount <= 8;
    if (drawLeaf) {
      const lr = spec.leafRadius * (0.72 + taperProfile * 0.32) * (0.82 + rand() * 0.36) * (isLod1 ? 1.24 : 1.0);
      const ly = lr * spec.leafFlatness * (0.88 + rand() * 0.26);
      const lTilt = spec.style === 'conifer_tier' ? 0.22 : (rand() - 0.5) * 0.18;
      // Place foliage slightly inward from tip so wooden branch visibly supports the green bough underneath!
      const leafCenterX = pMid[0] * 0.28 + pTip[0] * 0.72;
      const leafCenterY = pMid[1] * 0.28 + pTip[1] * 0.72 + (spec.style === 'pine_pad' ? ly * 0.35 : 0.12);
      const leafCenterZ = pMid[2] * 0.28 + pTip[2] * 0.72;

      leaf.addFoliageCluster(
        leafCenterX,
        leafCenterY,
        leafCenterZ,
        lr * (0.92 + rand() * 0.22),
        ly,
        lr * (0.88 + rand() * 0.26),
        spec.style,
        az,
        lTilt,
        isLod1,
        rand,
        frac
      );

      // Fork sub-branch foliage pad (makes 8–15 branch trees unmistakably full and multi-clustered!)
      if (forkTip) {
        const flr = lr * (0.68 + rand() * 0.16);
        leaf.addFoliageCluster(
          forkTip[0],
          forkTip[1] + (spec.style === 'pine_pad' ? flr * spec.leafFlatness * 0.35 : 0.08),
          forkTip[2],
          flr,
          flr * spec.leafFlatness,
          flr * 0.94,
          spec.style,
          az + 0.5,
          lTilt * 0.7,
          true,
          rand,
          frac
        );
      }
    }
  }

  // 3. Optional bare storm-snapped / dead lower branches (adds tremendous abandoned-forest authenticity!)
  if (!isLod1 && spec.deadStubs > 0) {
    for (let d = 0; d < spec.deadStubs; d++) {
      const stem = stemInfos[0];
      const tStub = Math.max(0.16, spec.crownStart - 0.04 - d * 0.06);
      const node = sampleStemPoint(tStub, stem.height, stem.baseR, stem.leanX, stem.leanZ, stem.sCurve, stem.phase, stem.ox, stem.oz);
      const az = azBase + d * 2.1 + 1.1;
      const sLen = 0.85 + rand() * 1.15;
      const tip: [number, number, number, number] = [
        node[0] + Math.cos(az) * sLen,
        node[1] - 0.18 + (rand() - 0.5) * 0.35,
        node[2] + Math.sin(az) * sLen,
        0.025,
      ];
      wood.addTube([node, tip], 3, 0.5, 0.62, 0.80);
    }
  }

  return { wood: wood.finalize(), leaf: leaf.finalize() };
}

/**
 * Builds 6 varied ultra-light far-canopy silhouettes (10–20 tris each) so distant
 * mountain ranges (425m–2,550m) read as a rich, organic real-world Japanese forest canopy
 * instead of repetitive pointed cones!
 */
export function buildFarCanopyShapes(): { cedar: BakedGeoData[]; broad: BakedGeoData[] } {
  const makeCanopy = (
    style: FoliageStyle,
    clusters: Array<[number, number, number, number, number, number]>,
    seed: number
  ): BakedGeoData => {
    const rand = mulberry32(seed);
    const acc = new MeshAcc();
    for (let i = 0; i < clusters.length; i++) {
      const [cx, cy, cz, rx, ry, rz] = clusters[i];
      acc.addFoliageCluster(cx, cy, cz, rx, ry, rz, style, rand() * Math.PI * 2, 0, true, rand, i / Math.max(1, clusters.length - 1));
    }
    return acc.finalize();
  };

  const cedar: BakedGeoData[] = [
    // Tall organic cedar spire (layered double cluster)
    makeCanopy('conifer_tier', [[0, 7.5, 0, 4.8, 7.2, 4.6], [0.4, 15.2, -0.3, 3.1, 6.2, 3.0]], 5101),
    // Twin-crown mountain cedar
    makeCanopy('conifer_tier', [[-1.6, 8.8, 0.4, 4.2, 7.5, 4.0], [1.9, 10.6, -0.5, 3.8, 8.2, 3.7]], 5202),
    // Sweeping wide ancient hinoki / ridge pine umbrella
    makeCanopy('pine_pad', [[0.8, 9.2, 0.2, 6.2, 3.6, 5.4], [-1.4, 12.6, -0.6, 4.6, 3.0, 4.2]], 5303),
  ];

  const broad: BakedGeoData[] = [
    // Classic wide beech dome
    makeCanopy('broad_crown', [[0, 7.2, 0, 5.8, 4.8, 5.5]], 5401),
    // Multi-lobe spreading zelkova fan
    makeCanopy('broad_crown', [[-2.0, 8.5, 0.8, 4.4, 3.8, 4.2], [2.1, 9.2, -0.7, 4.6, 4.0, 4.3]], 5502),
    // Dense low hillside grove cluster
    makeCanopy('broad_crown', [[0, 4.8, 0, 5.2, 3.6, 4.9], [1.8, 6.4, 1.2, 3.4, 2.8, 3.3]], 5603),
  ];

  return { cedar, broad };
}

let cachedArchetypes: BakedTreeArchetype[] | null = null;

/** Returns all 32 pre-baked multi-branch Japanese mountain tree archetypes (cached singleton). */
export function getTreeArchetypes(): readonly BakedTreeArchetype[] {
  if (cachedArchetypes) return cachedArchetypes;
  cachedArchetypes = TREE_SPECS.map((spec) => {
    const lod0 = buildArchetypeLod(spec, false);
    const lod1 = buildArchetypeLod(spec, true);
    return {
      spec,
      woodLod0: lod0.wood,
      leafLod0: lod0.leaf,
      woodLod1: lod1.wood,
      leafLod1: lod1.leaf,
    };
  });
  return cachedArchetypes;
}
