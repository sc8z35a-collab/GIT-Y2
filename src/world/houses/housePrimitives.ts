import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { BuiltStructure, LocalBoxCollider, LocalWalkSurface } from '../../core/types';
import type { PlannedSite } from '../terrainMath';

export type GeometryLayer = 'ext' | 'int';

export interface BoxOptions {
  rx?: number;
  ry?: number;
  rz?: number;
  /** If true, automatically registers an axis-aligned local collider (for unrotated boxes). */
  solid?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
  /**
   * World-space UV density (repeats per meter).
   * - Default `0.48` scales each box face proportionally by its physical dimensions so textures never stretch.
   * - Pass `0` to keep exact 0..1 UVs (ideal for doors, windows, cabinets, signs, chalkboards, futons).
   */
  uvScale?: number;
}

export interface CylOptions {
  rx?: number;
  ry?: number;
  rz?: number;
  castShadow?: boolean;
  receiveShadow?: boolean;
}

export interface KawaraSlopeOptions {
  /** Length along the top ridge line (default = bottomWidth for rectangular Kirizuma/Hisashi). */
  topWidth?: number;
  /** Width along the bottom eave edge. */
  bottomWidth: number;
  /** Horizontal projection run from ridge to eave tip (meters). */
  run: number;
  /** Roof slope pitch angle in radians (e.g., 0.42–0.58 rad). */
  pitch: number;
  /** Center point of the TOP ridge line in house-local space. */
  ridgeX: number;
  ridgeY: number;
  ridgeZ: number;
  /**
   * Down-slope facing yaw (rad) in house-local XZ:
   *  0 = slopes down toward +Z (front/south)
   *  Math.PI = slopes down toward -Z (back/north)
   *  Math.PI/2 = slopes down toward +X (east)
   * -Math.PI/2 = slopes down toward -X (west)
   */
  downslopeYaw: number;
  tileMat: THREE.Material;
  ribMat: THREE.Material;
  eaveMat?: THREE.Material;
  rafterMat?: THREE.Material;
  fasciaMat?: THREE.Material;
  /** Spacing between 3D raised round tile ribs (丸瓦の畝). Default 0.38m. */
  ribSpacing?: number;
  /** Deck thickness (default 0.14m). */
  deckThickness?: number;
  /** Add underside wooden rafters (垂木) projecting along eave. Default true. */
  rafters?: boolean;
  /** Optional broken/missing tile indices for storm-damaged or ruined roofs. */
  skipRibPredicate?: (u: number, ribIndex: number) => boolean;
  /** Optional solid overhead collision slab for roofing clearance. */
  castShadow?: boolean;
}

export interface KawaraRidgeOptions {
  /** Scale multiplier for ridge cross-section & onigawara size (default 1.0). */
  scale?: number;
  /** Place sculpted horned 鬼瓦 (Onigawara) finial at start point (x1, y1, z1). */
  oniStart?: boolean;
  /** Place sculpted horned 鬼瓦 (Onigawara) finial at end point (x2, y2, z2). */
  oniEnd?: boolean;
  /** Number of layered 熨斗瓦 courses beneath the round 冠瓦 cap (default 2). */
  courses?: number;
}

export interface StairRunOptions {
  /** Center of bottom step edge */
  x0: number;
  z0: number;
  /** Center of top step edge (must be axis-aligned along X or Z from x0,z0) */
  x1: number;
  z1: number;
  /** Bottom floor local Y */
  y0: number;
  /** Top floor local Y */
  y1: number;
  /** Clear stair width (minimum 0.95m recommended for comfortable FPS walking) */
  width: number;
  /** Number of visual treads */
  steps: number;
  treadMat: THREE.Material;
  stringerMat: THREE.Material;
  railMat?: THREE.Material;
  railLeft?: boolean;
  railRight?: boolean;
  /** If true, adds solid vertical risers (e.g., traditional Meiji box-staircase / 箱階段). */
  closedRisers?: boolean;
  /** Optional solid box-chest cladding beneath closed stairs (箱階段 storage side). */
  boxChestMat?: THREE.Material;
  /** Register side guard colliders along stair edges to guide player smoothly. Default true. */
  guardLeft?: boolean;
  guardRight?: boolean;
  /** Slight visual roll tilt in radians (for decaying/leaning stairs in ruined houses). */
  tiltZ?: number;
}

export interface StructureMeta {
  id: string;
  name: string;
  subtitle: string;
  category: 'house' | 'commercial' | 'port' | 'mine';
  builtYear: number;
  abandonedYear: number;
  stories: number;
  floorElevations: number[];
  /** Local-space point just outside the primary entrance where the player spawns when teleporting to the house */
  entryLocal: [number, number, number];
  /** Additional yaw offset in local space looking from entryLocal toward the front door (default Math.PI looks toward -Z) */
  entryLookLocalYaw?: number;
}

interface BatchBucket {
  layer: GeometryLayer;
  material: THREE.Material;
  castShadow: boolean;
  receiveShadow: boolean;
  geometries: THREE.BufferGeometry[];
}

const _mat4 = new THREE.Matrix4();
const _quat = new THREE.Quaternion();
const _euler = new THREE.Euler();
const _pos = new THREE.Vector3();
const _scale = new THREE.Vector3(1, 1, 1);

function normalizeGeo(raw: THREE.BufferGeometry): THREE.BufferGeometry {
  const g = raw.index ? raw.toNonIndexed() : raw;
  if (!g.getAttribute('normal')) {
    g.computeVertexNormals();
  }
  if (!g.getAttribute('uv')) {
    const count = g.getAttribute('position').count;
    g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(count * 2), 2));
  }
  // Keep strictly (position, normal, uv) so mergeGeometries never rejects attribute mismatch
  for (const key of Object.keys(g.attributes)) {
    if (key !== 'position' && key !== 'normal' && key !== 'uv') {
      g.deleteAttribute(key);
    }
  }
  return g;
}

/**
 * Scales UVs of a standard Three.js BoxGeometry by physical face dimensions (w, h, d)
 * so every wall, beam, foundation, and plank shares consistent real-world texel density.
 */
function scaleBoxUVs(geo: THREE.BoxGeometry, w: number, h: number, d: number, uvScale: number): void {
  if (uvScale <= 0) return;
  const uv = geo.getAttribute('uv') as THREE.BufferAttribute;
  // Standard BoxGeometry face order (4 vertices per face, 6 faces = 24 verts):
  // 0: +X (d x h), 1: -X (d x h), 2: +Y (w x d), 3: -Y (w x d), 4: +Z (w x h), 5: -Z (w x h)
  const faceDims: Array<[number, number]> = [
    [d, h],
    [d, h],
    [w, d],
    [w, d],
    [w, h],
    [w, h],
  ];
  for (let f = 0; f < 6; f++) {
    const [su, sv] = faceDims[f];
    const base = f * 4;
    for (let v = 0; v < 4; v++) {
      const idx = base + v;
      uv.setXY(idx, uv.getX(idx) * su * uvScale, uv.getY(idx) * sv * uvScale);
    }
  }
  uv.needsUpdate = true;
}

/**
 * Creates a closed 6-face trapezoidal roof slab in slope-local space:
 *  - u along ridge: [-topW/2..+topW/2] at w=0, [-botW/2..+botW/2] at w=slopeLen
 *  - v normal to slope: [-thickness..0]
 *  - w down-slope: [0..slopeLen]
 */
function createTrapezoidSlabGeo(
  topW: number,
  botW: number,
  slopeLen: number,
  thickness: number,
  uvScale: number
): THREE.BufferGeometry {
  const ht = topW * 0.5;
  const hb = botW * 0.5;
  const t = thickness;

  // 8 corner points
  const tTL: [number, number, number] = [-ht, 0, 0];
  const tTR: [number, number, number] = [ht, 0, 0];
  const tBL: [number, number, number] = [-hb, 0, slopeLen];
  const tBR: [number, number, number] = [hb, 0, slopeLen];

  const bTL: [number, number, number] = [-ht, -t, 0];
  const bTR: [number, number, number] = [ht, -t, 0];
  const bBL: [number, number, number] = [-hb, -t, slopeLen];
  const bBR: [number, number, number] = [hb, -t, slopeLen];

  const positions: number[] = [];
  const uvs: number[] = [];

  const pushTri = (
    a: [number, number, number],
    b: [number, number, number],
    c: [number, number, number],
    ua: [number, number],
    ub: [number, number],
    uc: [number, number]
  ) => {
    positions.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
    uvs.push(ua[0], ua[1], ub[0], ub[1], uc[0], uc[1]);
  };

  const pushQuad = (
    a: [number, number, number],
    b: [number, number, number],
    c: [number, number, number],
    d: [number, number, number],
    ua: [number, number],
    ub: [number, number],
    uc: [number, number],
    ud: [number, number]
  ) => {
    pushTri(a, b, c, ua, ub, uc);
    pushTri(a, c, d, ua, uc, ud);
  };

  const s = uvScale;
  // Top face (+Y normal): tTL -> tBL -> tBR -> tTR
  pushQuad(tTL, tBL, tBR, tTR, [-ht * s, 0], [-hb * s, slopeLen * s], [hb * s, slopeLen * s], [ht * s, 0]);
  // Bottom face (-Y normal): bTL -> bTR -> bBR -> bBL
  pushQuad(bTL, bTR, bBR, bBL, [-ht * s, 0], [ht * s, 0], [hb * s, slopeLen * s], [-hb * s, slopeLen * s]);
  // Eave front edge (+Z normal): tBL -> bBL -> bBR -> tBR
  pushQuad(tBL, bBL, bBR, tBR, [0, t * s], [0, 0], [botW * s, 0], [botW * s, t * s]);
  // Ridge back edge (-Z normal): tTR -> bTR -> bTL -> tTL
  if (topW > 0.01) {
    pushQuad(tTR, bTR, bTL, tTL, [0, t * s], [0, 0], [topW * s, 0], [topW * s, t * s]);
  }
  // Left bevel edge: tTL -> bTL -> bBL -> tBL
  const sideLen = Math.hypot(hb - ht, slopeLen);
  pushQuad(tTL, bTL, bBL, tBL, [0, t * s], [0, 0], [sideLen * s, 0], [sideLen * s, t * s]);
  // Right bevel edge: tBR -> bBR -> bTR -> tTR
  pushQuad(tBR, bBR, bTR, tTR, [0, t * s], [0, 0], [sideLen * s, 0], [sideLen * s, t * s]);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.computeVertexNormals();
  return geo;
}

/**
 * Creates a closed triangular gable wall prism (妻壁):
 *  - Base runs [-spanX/2..+spanX/2] at y=0, apex at (0, heightY), thickness [-depthZ/2..+depthZ/2].
 */
function createGablePrismGeo(spanX: number, heightY: number, depthZ: number, uvScale: number): THREE.BufferGeometry {
  const hx = spanX * 0.5;
  const hz = depthZ * 0.5;
  const s = uvScale;

  const fL: [number, number, number] = [-hx, 0, hz];
  const fR: [number, number, number] = [hx, 0, hz];
  const fT: [number, number, number] = [0, heightY, hz];
  const bL: [number, number, number] = [-hx, 0, -hz];
  const bR: [number, number, number] = [hx, 0, -hz];
  const bT: [number, number, number] = [0, heightY, -hz];

  const positions: number[] = [];
  const uvs: number[] = [];
  const pushTri = (
    a: [number, number, number],
    b: [number, number, number],
    c: [number, number, number],
    ua: [number, number],
    ub: [number, number],
    uc: [number, number]
  ) => {
    positions.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
    uvs.push(ua[0], ua[1], ub[0], ub[1], uc[0], uc[1]);
  };

  // Front triangle (+Z)
  pushTri(fL, fR, fT, [0, 0], [spanX * s, 0], [hx * s, heightY * s]);
  // Back triangle (-Z)
  pushTri(bR, bL, bT, [0, 0], [spanX * s, 0], [hx * s, heightY * s]);
  // Left slope edge
  const edgeLen = Math.hypot(hx, heightY);
  pushTri(bL, fL, fT, [0, 0], [depthZ * s, 0], [depthZ * s, edgeLen * s]);
  pushTri(bL, fT, bT, [0, 0], [depthZ * s, edgeLen * s], [0, edgeLen * s]);
  // Right slope edge
  pushTri(fR, bR, bT, [0, 0], [depthZ * s, 0], [depthZ * s, edgeLen * s]);
  pushTri(fR, bT, fT, [0, 0], [depthZ * s, edgeLen * s], [0, edgeLen * s]);
  // Bottom edge
  pushTri(bL, bR, fR, [0, 0], [spanX * s, 0], [spanX * s, depthZ * s]);
  pushTri(bL, fR, fL, [0, 0], [spanX * s, depthZ * s], [0, depthZ * s]);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.computeVertexNormals();
  return geo;
}

/**
 * Pure low-level geometry, traditional Japanese kawara roof craft, collision/stair registration,
 * and per-material GPU batching helper. Contains ZERO house or room templates; every house
 * manually places every wall, column, floor, roof slope, staircase, and furniture prop.
 */
export class HousePrimitives {
  public readonly site: PlannedSite;
  public readonly colliders: LocalBoxCollider[] = [];
  public readonly walkSurfaces: LocalWalkSurface[] = [];

  private readonly buckets = new Map<string, BatchBucket>();
  private readonly matIds = new WeakMap<THREE.Material, number>();
  private nextMatId = 1;

  private minX = Infinity;
  private maxX = -Infinity;
  private minY = Infinity;
  private maxY = -Infinity;
  private minZ = Infinity;
  private maxZ = -Infinity;

  constructor(site: PlannedSite) {
    this.site = site;
  }

  private getBucket(
    layer: GeometryLayer,
    material: THREE.Material,
    castShadow: boolean,
    receiveShadow: boolean
  ): BatchBucket {
    let mid = this.matIds.get(material);
    if (!mid) {
      mid = this.nextMatId++;
      this.matIds.set(material, mid);
    }
    const key = `${layer}|${mid}|${castShadow ? 1 : 0}|${receiveShadow ? 1 : 0}`;
    let b = this.buckets.get(key);
    if (!b) {
      b = { layer, material, castShadow, receiveShadow, geometries: [] };
      this.buckets.set(key, b);
    }
    return b;
  }

  private pushGeo(
    layer: GeometryLayer,
    raw: THREE.BufferGeometry,
    mat: THREE.Material,
    matrix: THREE.Matrix4,
    castShadow: boolean,
    receiveShadow: boolean
  ): void {
    const g = normalizeGeo(raw);
    g.applyMatrix4(matrix);
    g.computeBoundingBox();
    if (g.boundingBox) {
      this.minX = Math.min(this.minX, g.boundingBox.min.x);
      this.maxX = Math.max(this.maxX, g.boundingBox.max.x);
      this.minY = Math.min(this.minY, g.boundingBox.min.y);
      this.maxY = Math.max(this.maxY, g.boundingBox.max.y);
      this.minZ = Math.min(this.minZ, g.boundingBox.min.z);
      this.maxZ = Math.max(this.maxZ, g.boundingBox.max.z);
    }
    this.getBucket(layer, mat, castShadow, receiveShadow).geometries.push(g);
  }

  /** Registers an axis-aligned local collider (walls, furniture, ceilings, railings). */
  public collider(minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number): void {
    this.colliders.push({
      minX: Math.min(minX, maxX),
      maxX: Math.max(minX, maxX),
      minY: Math.min(minY, maxY),
      maxY: Math.max(minY, maxY),
      minZ: Math.min(minZ, maxZ),
      maxZ: Math.max(minZ, maxZ),
    });
  }

  /** Registers a flat walkable floor slab in house-local space. */
  public floor(minX: number, maxX: number, minZ: number, maxZ: number, y: number): void {
    this.walkSurfaces.push({
      minX: Math.min(minX, maxX),
      maxX: Math.max(minX, maxX),
      minZ: Math.min(minZ, maxZ),
      maxZ: Math.max(minZ, maxZ),
      yMin: y,
      yMax: y,
      slopeAxis: 'none',
    });
  }

  /** Registers a sloped walkable ramp (used by staircases and stone entry steps). */
  public ramp(
    minX: number,
    maxX: number,
    minZ: number,
    maxZ: number,
    yMin: number,
    yMax: number,
    slopeAxis: 'x' | 'z',
    slopeDir: 1 | -1
  ): void {
    this.walkSurfaces.push({
      minX: Math.min(minX, maxX),
      maxX: Math.max(minX, maxX),
      minZ: Math.min(minZ, maxZ),
      maxZ: Math.max(minZ, maxZ),
      yMin,
      yMax,
      slopeAxis,
      slopeDir,
    });
  }

  /** Places a single box primitive with optional automatic world-UV scaling and local OBB collider. */
  public box(
    layer: GeometryLayer,
    w: number,
    h: number,
    d: number,
    x: number,
    y: number,
    z: number,
    mat: THREE.Material,
    opts: BoxOptions = {}
  ): void {
    const geo = new THREE.BoxGeometry(w, h, d);
    const uvScale = opts.uvScale !== undefined ? opts.uvScale : 0.48;
    scaleBoxUVs(geo, w, h, d, uvScale);

    _euler.set(opts.rx ?? 0, opts.ry ?? 0, opts.rz ?? 0, 'YXZ');
    _quat.setFromEuler(_euler);
    _pos.set(x, y, z);
    _mat4.compose(_pos, _quat, _scale);

    const castShadow = opts.castShadow ?? (layer === 'ext');
    const receiveShadow = opts.receiveShadow ?? true;
    this.pushGeo(layer, geo, mat, _mat4, castShadow, receiveShadow);

    if (opts.solid) {
      const rx = opts.rx ?? 0;
      const ry = opts.ry ?? 0;
      const rz = opts.rz ?? 0;
      if (Math.abs(rx) < 0.01 && Math.abs(ry) < 0.01 && Math.abs(rz) < 0.01) {
        this.collider(x - w * 0.5, x + w * 0.5, y - h * 0.5, y + h * 0.5, z - d * 0.5, z + d * 0.5);
      } else {
        // Compute tight local AABB for rotated solid beam/column
        const hw = w * 0.5;
        const hh = h * 0.5;
        const hd = d * 0.5;
        const corners = [
          [-hw, -hh, -hd], [hw, -hh, -hd], [-hw, hh, -hd], [hw, hh, -hd],
          [-hw, -hh, hd], [hw, -hh, hd], [-hw, hh, hd], [hw, hh, hd],
        ];
        let bMinX = Infinity, bMaxX = -Infinity;
        let bMinY = Infinity, bMaxY = -Infinity;
        let bMinZ = Infinity, bMaxZ = -Infinity;
        const v = new THREE.Vector3();
        for (const [cx, cy, cz] of corners) {
          v.set(cx, cy, cz).applyMatrix4(_mat4);
          if (v.x < bMinX) bMinX = v.x;
          if (v.x > bMaxX) bMaxX = v.x;
          if (v.y < bMinY) bMinY = v.y;
          if (v.y > bMaxY) bMaxY = v.y;
          if (v.z < bMinZ) bMinZ = v.z;
          if (v.z > bMaxZ) bMaxZ = v.z;
        }
        this.collider(bMinX, bMaxX, bMinY, bMaxY, bMinZ, bMaxZ);
      }
    }
  }

  /** Places a cylinder primitive (logs, chimney flues, pillars, round tile finials, barrels). */
  public cyl(
    layer: GeometryLayer,
    rTop: number,
    rBot: number,
    h: number,
    segs: number,
    x: number,
    y: number,
    z: number,
    mat: THREE.Material,
    opts: CylOptions = {}
  ): void {
    const geo = new THREE.CylinderGeometry(rTop, rBot, h, segs);
    _euler.set(opts.rx ?? 0, opts.ry ?? 0, opts.rz ?? 0, 'YXZ');
    _quat.setFromEuler(_euler);
    _pos.set(x, y, z);
    _mat4.compose(_pos, _quat, _scale);
    this.pushGeo(layer, geo, mat, _mat4, opts.castShadow ?? (layer === 'ext'), opts.receiveShadow ?? true);
  }

  /** Places a triangular gable wall (妻壁) with base centered at (cx, baseY, cz). */
  public gablePrism(
    layer: GeometryLayer,
    spanX: number,
    heightY: number,
    depthZ: number,
    cx: number,
    baseY: number,
    cz: number,
    mat: THREE.Material,
    opts: { ry?: number; uvScale?: number; castShadow?: boolean } = {}
  ): void {
    const geo = createGablePrismGeo(spanX, heightY, depthZ, opts.uvScale ?? 0.45);
    _euler.set(0, opts.ry ?? 0, 0, 'YXZ');
    _quat.setFromEuler(_euler);
    _pos.set(cx, baseY, cz);
    _mat4.compose(_pos, _quat, _scale);
    this.pushGeo(layer, geo, mat, _mat4, opts.castShadow ?? true, true);
  }

  /**
   * Builds a genuine 3D-sculpted traditional Japanese kawara roof slope plane:
   * - Rectangular (切妻/庇/錣) or Trapezoidal (入母屋/寄棟) tiled roof deck
   * - Parallel 3D raised round tile ribs (丸瓦の畝) trimmed cleanly to hip diagonals
   * - Circular eave-end tile medallions (軒丸瓦) along the entire drip edge
   * - Projecting underside wooden rafters (垂木) and fascia board (鼻隠し)
   */
  public kawaraSlope(layer: GeometryLayer, opts: KawaraSlopeOptions): void {
    const botW = opts.bottomWidth;
    const topW = opts.topWidth ?? botW;
    const run = opts.run;
    const pitch = opts.pitch;
    const slopeLen = run / Math.cos(pitch);
    const thick = opts.deckThickness ?? 0.14;
    const ribSpacing = opts.ribSpacing ?? 0.38;
    const cast = opts.castShadow ?? true;

    // Slope-local transform: origin at ridge center, yaw = downslopeYaw, then tilt down (+pitch around local X)
    const slopeFrame = new THREE.Matrix4();
    const rotY = new THREE.Matrix4().makeRotationY(opts.downslopeYaw);
    const rotX = new THREE.Matrix4().makeRotationX(pitch);
    const trans = new THREE.Matrix4().makeTranslation(opts.ridgeX, opts.ridgeY, opts.ridgeZ);
    slopeFrame.multiplyMatrices(trans, rotY).multiply(rotX);

    // 1. Main tiled roof deck slab
    const deckGeo = createTrapezoidSlabGeo(topW, botW, slopeLen, thick, 0.55);
    this.pushGeo(layer, deckGeo, opts.tileMat, slopeFrame, cast, true);

    // 2. Parallel 3D raised 丸瓦 (marugawara) tile ribs + circular 軒丸瓦 (nokimarugawara) eave medallions
    const eaveMat = opts.eaveMat ?? opts.ribMat;
    const halfBot = botW * 0.5;
    const halfTop = topW * 0.5;
    const hipDiff = Math.max(0.001, halfBot - halfTop);

    const ribCount = Math.max(2, Math.floor((botW - 0.16) / ribSpacing) + 1);
    const actualSpacing = (botW - 0.24) / Math.max(1, ribCount - 1);

    const localM = new THREE.Matrix4();
    const tmpM = new THREE.Matrix4();
    const rotCap = new THREE.Matrix4().makeRotationX(Math.PI * 0.5);

    for (let i = 0; i < ribCount; i++) {
      const u = -halfBot + 0.12 + i * actualSpacing;
      if (opts.skipRibPredicate && opts.skipRibPredicate(u, i)) continue;

      const absU = Math.abs(u);
      let wStart = 0;
      if (absU > halfTop) {
        wStart = Math.min(slopeLen - 0.22, slopeLen * ((absU - halfTop) / hipDiff));
      }
      const wEnd = slopeLen + 0.04;
      const ribLen = Math.max(0.18, wEnd - wStart);

      // Raised semi-cylindrical/beveled tile rib running down-slope
      const ribGeo = new THREE.BoxGeometry(0.115, 0.072, ribLen);
      scaleBoxUVs(ribGeo, 0.115, 0.072, ribLen, 0.5);
      localM.makeTranslation(u, 0.032, wStart + ribLen * 0.5);
      tmpM.multiplyMatrices(slopeFrame, localM);
      this.pushGeo(layer, ribGeo, opts.ribMat, tmpM, false, true);

      // Circular 軒丸瓦 (eave-end medallion) capping the drip tip of every rib!
      const capGeo = new THREE.CylinderGeometry(0.068, 0.068, 0.065, 8);
      localM.makeTranslation(u, 0.028, wEnd + 0.015).multiply(rotCap);
      tmpM.multiplyMatrices(slopeFrame, localM);
      this.pushGeo(layer, capGeo, eaveMat, tmpM, false, true);
    }

    // 3. Underside wooden rafters (垂木) & eave fascia trim (鼻隠し)
    if (opts.rafters !== false && opts.rafterMat) {
      const rafterStep = 0.62;
      const rCount = Math.max(3, Math.floor((botW - 0.24) / rafterStep) + 1);
      const rStepActual = (botW - 0.30) / Math.max(1, rCount - 1);
      for (let i = 0; i < rCount; i++) {
        const u = -halfBot + 0.15 + i * rStepActual;
        const absU = Math.abs(u);
        let wStart = Math.max(0, slopeLen - 1.35);
        if (absU > halfTop) {
          wStart = Math.max(wStart, slopeLen * ((absU - halfTop) / hipDiff));
        }
        const rLen = Math.max(0.24, slopeLen - 0.06 - wStart);
        const rGeo = new THREE.BoxGeometry(0.075, 0.085, rLen);
        scaleBoxUVs(rGeo, 0.075, 0.085, rLen, 0.5);
        localM.makeTranslation(u, -thick - 0.042, wStart + rLen * 0.5);
        tmpM.multiplyMatrices(slopeFrame, localM);
        this.pushGeo(layer, rGeo, opts.rafterMat, tmpM, false, true);
      }

      // Eave soffit fascia beam (鼻隠し)
      const fasciaMat = opts.fasciaMat ?? opts.rafterMat;
      const fGeo = new THREE.BoxGeometry(botW + 0.04, 0.11, 0.08);
      scaleBoxUVs(fGeo, botW + 0.04, 0.11, 0.08, 0.45);
      localM.makeTranslation(0, -thick - 0.04, slopeLen - 0.16);
      tmpM.multiplyMatrices(slopeFrame, localM);
      this.pushGeo(layer, fGeo, fasciaMat, tmpM, false, true);
    }
  }

  /**
   * Builds a traditional multi-tiered Japanese kawara ridge (大棟 / 隅棟 / 降棟) between any two 3D points,
   * complete with layered 熨斗瓦 courses, rounded 冠瓦 crest, and sculpted horned 3D 鬼瓦 (Onigawara)!
   */
  public kawaraRidge(
    layer: GeometryLayer,
    x1: number,
    y1: number,
    z1: number,
    x2: number,
    y2: number,
    z2: number,
    ridgeMat: THREE.Material,
    oniMat: THREE.Material,
    opts: KawaraRidgeOptions = {}
  ): void {
    const sc = opts.scale ?? 1.0;
    const courses = opts.courses ?? 2;
    const p1 = new THREE.Vector3(x1, y1, z1);
    const p2 = new THREE.Vector3(x2, y2, z2);
    const dir = new THREE.Vector3().subVectors(p2, p1);
    const len = dir.length();
    if (len < 0.05) return;
    dir.normalize();

    const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
    const up = new THREE.Vector3(0, 1, 0);
    // Construct orthonormal basis where local +Z = dir along ridge
    const right = new THREE.Vector3().crossVectors(up, dir);
    if (right.lengthSq() < 1e-4) right.set(1, 0, 0);
    else right.normalize();
    const realUp = new THREE.Vector3().crossVectors(dir, right).normalize();

    const basis = new THREE.Matrix4().makeBasis(right, realUp, dir);
    const ridgeFrame = new THREE.Matrix4().makeTranslation(mid.x, mid.y, mid.z).multiply(basis);

    const localM = new THREE.Matrix4();
    const tmpM = new THREE.Matrix4();

    // Layered 熨斗瓦 (noshi-gawara) stacked ridge courses
    for (let c = 0; c < courses; c++) {
      const cw = (0.32 - c * 0.055) * sc;
      const ch = 0.095 * sc;
      const cy = (0.04 + c * 0.088) * sc;
      const g = new THREE.BoxGeometry(cw, ch, len + 0.08 * sc);
      scaleBoxUVs(g, cw, ch, len, 0.6);
      localM.makeTranslation(0, cy, 0);
      tmpM.multiplyMatrices(ridgeFrame, localM);
      this.pushGeo(layer, g, ridgeMat, tmpM, true, true);
    }

    // Rounded top 冠瓦 (kanmuri-gawara) semicircular crest cap
    const capY = (0.05 + courses * 0.088 + 0.045) * sc;
    const capGeo = new THREE.CylinderGeometry(0.115 * sc, 0.125 * sc, len + 0.12 * sc, 8);
    const rotCap = new THREE.Matrix4().makeRotationX(Math.PI * 0.5);
    localM.makeTranslation(0, capY, 0).multiply(rotCap);
    tmpM.multiplyMatrices(ridgeFrame, localM);
    this.pushGeo(layer, capGeo, ridgeMat, tmpM, true, true);

    // Sculpted 3D horned 鬼瓦 (Onigawara) finials at start and/or end!
    const addOnigawara = (zOff: number) => {
      const baseFrame = new THREE.Matrix4()
        .multiplyMatrices(ridgeFrame, new THREE.Matrix4().makeTranslation(0, (0.08 + courses * 0.088) * sc, zOff));

      // Main shield body
      const shield = new THREE.BoxGeometry(0.38 * sc, 0.44 * sc, 0.14 * sc);
      this.pushGeo(layer, shield, oniMat, baseFrame, true, true);

      // Raised outer collar rim
      const rim = new THREE.BoxGeometry(0.46 * sc, 0.14 * sc, 0.17 * sc);
      localM.makeTranslation(0, 0.18 * sc, 0);
      tmpM.multiplyMatrices(baseFrame, localM);
      this.pushGeo(layer, rim, oniMat, tmpM, true, true);

      // Twin traditional swept horns (鬼の角)
      for (const side of [-1, 1]) {
        const horn = new THREE.BoxGeometry(0.11 * sc, 0.24 * sc, 0.12 * sc);
        localM
          .makeTranslation(side * 0.18 * sc, 0.30 * sc, 0)
          .multiply(new THREE.Matrix4().makeRotationZ(-side * 0.32));
        tmpM.multiplyMatrices(baseFrame, localM);
        this.pushGeo(layer, horn, oniMat, tmpM, true, true);
      }
    };

    if (opts.oniStart) addOnigawara(-len * 0.5 - 0.05 * sc);
    if (opts.oniEnd) addOnigawara(len * 0.5 + 0.05 * sc);
  }

  /**
   * Builds a guaranteed-walkable traditional Japanese wooden staircase flight between
   * two floor elevations, generating individual treads, risers/stringers, handrails,
   * exact smooth LocalWalkSurface ramp (overlapping landings slightly), and side guides.
   */
  public stairRun(layer: GeometryLayer, opts: StairRunOptions): void {
    const dx = opts.x1 - opts.x0;
    const dz = opts.z1 - opts.z0;
    const alongX = Math.abs(dx) >= Math.abs(dz);
    const runLen = alongX ? Math.abs(dx) : Math.abs(dz);
    const dir: 1 | -1 = (alongX ? dx : dz) >= 0 ? 1 : -1;
    const rise = opts.y1 - opts.y0;
    const steps = Math.max(4, opts.steps);
    const hw = opts.width * 0.5;
    const stepRun = runLen / steps;
    const stepRise = rise / steps;
    const tiltZ = opts.tiltZ ?? 0;

    // 1. Visual treads, risers & optional Meiji 箱階段 (box staircase) storage cladding
    for (let i = 0; i < steps; i++) {
      const tMid = (i + 0.5) / steps;
      const treadY = opts.y0 + (i + 1) * stepRise - 0.025;
      const sx = alongX ? opts.x0 + dx * tMid : opts.x0;
      const sz = alongX ? opts.z0 : opts.z0 + dz * tMid;

      const tw = alongX ? stepRun + 0.04 : opts.width;
      const td = alongX ? opts.width : stepRun + 0.04;
      this.box(layer, tw, 0.052, td, sx, treadY, sz, opts.treadMat, {
        rz: tiltZ,
        castShadow: false,
        uvScale: 0.65,
      });

      if (opts.closedRisers) {
        const riserH = stepRise;
        const rEdgeT = i / steps;
        const rx = alongX ? opts.x0 + dx * rEdgeT : opts.x0;
        const rz = alongX ? opts.z0 : opts.z0 + dz * rEdgeT;
        const rw = alongX ? 0.04 : opts.width;
        const rd = alongX ? opts.width : 0.04;
        this.box(layer, rw, riserH, rd, rx, opts.y0 + (i + 0.5) * stepRise, rz, opts.stringerMat, {
          rz: tiltZ,
          castShadow: false,
          uvScale: 0.65,
        });
      }

      if (opts.boxChestMat) {
        const chestH = Math.max(0.15, (i + 1) * stepRise - 0.05);
        const cw = alongX ? stepRun : opts.width - 0.06;
        const cd = alongX ? opts.width - 0.06 : stepRun;
        this.box(layer, cw, chestH, cd, sx, opts.y0 + chestH * 0.5, sz, opts.boxChestMat, {
          castShadow: false,
          uvScale: 0,
        });
      }
    }

    // 2. Side stringer beams (ささら桁) & optional handrails (手すり)
    const slopeAngle = Math.atan2(rise, runLen);
    const diagLen = Math.hypot(runLen, rise);
    const midX = (opts.x0 + opts.x1) * 0.5;
    const midZ = (opts.z0 + opts.z1) * 0.5;
    const midY = (opts.y0 + opts.y1) * 0.5;
    const railMat = opts.railMat ?? opts.stringerMat;

    for (const side of [-1, 1] as const) {
      const ox = alongX ? 0 : side * (hw + 0.04);
      const oz = alongX ? side * (hw + 0.04) : 0;

      // Sloped side stringer beam
      if (alongX) {
        this.box(layer, diagLen + 0.14, 0.22, 0.07, midX, midY - 0.04, midZ + oz, opts.stringerMat, {
          rz: dir * slopeAngle,
          castShadow: false,
        });
      } else {
        this.box(layer, 0.07, 0.22, diagLen + 0.14, midX + ox, midY - 0.04, midZ, opts.stringerMat, {
          rx: -dir * slopeAngle,
          castShadow: false,
        });
      }

      const wantRail = side === -1 ? opts.railLeft : opts.railRight;
      if (wantRail) {
        // Bottom & top newel posts + mid baluster + sloped handrail bar
        for (const frac of [0.02, 0.5, 0.98]) {
          const px = opts.x0 + dx * frac + ox;
          const pz = opts.z0 + dz * frac + oz;
          const py = opts.y0 + rise * frac;
          const postW = frac === 0.5 ? 0.055 : 0.085;
          this.box(layer, postW, 0.96, postW, px, py + 0.46, pz, railMat, { castShadow: false });
        }
        if (alongX) {
          this.box(layer, diagLen + 0.16, 0.075, 0.08, midX, midY + 0.90, midZ + oz, railMat, {
            rz: dir * slopeAngle,
            castShadow: false,
          });
        } else {
          this.box(layer, 0.08, 0.075, diagLen + 0.16, midX + ox, midY + 0.90, midZ, railMat, {
            rx: -dir * slopeAngle,
            castShadow: false,
          });
        }
      }

      // Smooth side guard collider outside tread edge preventing accidental mid-stair side-stepping
      const wantGuard = side === -1 ? (opts.guardLeft ?? true) : (opts.guardRight ?? true);
      if (wantGuard) {
        const gMinY = opts.y0 + 0.48;
        const gMaxY = opts.y1 + 0.85;
        const edge = side * (hw + 0.07);
        if (alongX) {
          this.collider(
            Math.min(opts.x0, opts.x1) + 0.08,
            Math.max(opts.x0, opts.x1) - 0.08,
            gMinY,
            gMaxY,
            opts.z0 + edge - 0.04,
            opts.z0 + edge + 0.04
          );
        } else {
          this.collider(
            opts.x0 + edge - 0.04,
            opts.x0 + edge + 0.04,
            gMinY,
            gMaxY,
            Math.min(opts.z0, opts.z1) + 0.08,
            Math.max(opts.z0, opts.z1) - 0.08
          );
        }
      }
    }

    // 3. Smooth walkable LocalWalkSurface ramp (overlaps 0.16m onto landings for butter-smooth climb!)
    if (alongX) {
      const minX = Math.min(opts.x0, opts.x1);
      const maxX = Math.max(opts.x0, opts.x1);
      this.ramp(minX, maxX, opts.z0 - hw + 0.04, opts.z0 + hw - 0.04, opts.y0, opts.y1, 'x', dir);
      // Small flush landing extensions at bottom & top
      this.floor(opts.x0 - dir * 0.25, opts.x0 + dir * 0.05, opts.z0 - hw, opts.z0 + hw, opts.y0);
      this.floor(opts.x1 - dir * 0.05, opts.x1 + dir * 0.25, opts.z0 - hw, opts.z0 + hw, opts.y1);
    } else {
      const minZ = Math.min(opts.z0, opts.z1);
      const maxZ = Math.max(opts.z0, opts.z1);
      this.ramp(opts.x0 - hw + 0.04, opts.x0 + hw - 0.04, minZ, maxZ, opts.y0, opts.y1, 'z', dir);
      this.floor(opts.x0 - hw, opts.x0 + hw, opts.z0 - dir * 0.25, opts.z0 + dir * 0.05, opts.y0);
      this.floor(opts.x0 - hw, opts.x0 + hw, opts.z1 - dir * 0.05, opts.z1 + dir * 0.25, opts.y1);
    }
  }

  /**
   * Builds walkable exterior stone entrance steps (石段) rising from lower ground (y0)
   * up to the 1F threshold (y1), registering a smooth LocalWalkSurface ramp automatically.
   */
  public stoneSteps(
    layer: GeometryLayer,
    cx: number,
    zLow: number,
    zHigh: number,
    yLow: number,
    yHigh: number,
    width: number,
    stepCount: number,
    mat: THREE.Material
  ): void {
    const dir: 1 | -1 = zHigh >= zLow ? 1 : -1;
    const run = Math.abs(zHigh - zLow);
    const rise = yHigh - yLow;
    const dz = run / stepCount;
    const dy = rise / stepCount;

    for (let i = 0; i < stepCount; i++) {
      const stepH = (i + 1) * dy;
      const sz = zLow + dir * (i + 0.5) * dz;
      this.box(layer, width, stepH + 0.35, dz + 0.04, cx, yLow + stepH * 0.5 - 0.175, sz, mat, {
        castShadow: true,
        receiveShadow: true,
        uvScale: 0.55,
      });
    }

    const minZ = Math.min(zLow, zHigh);
    const maxZ = Math.max(zLow, zHigh);
    this.ramp(cx - width * 0.5, cx + width * 0.5, minZ, maxZ, yLow, yHigh, 'z', dir);
    this.floor(cx - width * 0.5, cx + width * 0.5, zHigh - dir * 0.05, zHigh + dir * 0.35, yHigh);
  }

  /**
   * Builds an authentic open traditional Japanese timber balustrade (高欄/欄干) between
   * (x0, z0) and (x1, z1) at deck elevation `y`: bottom curb sill, middle rail, wider top
   * handrail, end newel posts, evenly spaced vertical balusters, and one safety collider.
   */
  public kouranRailing(
    layer: GeometryLayer,
    x0: number,
    z0: number,
    x1: number,
    z1: number,
    y: number,
    height: number,
    mat: THREE.Material,
    spacing = 0.56
  ): void {
    const dx = x1 - x0;
    const dz = z1 - z0;
    const len = Math.hypot(dx, dz);
    if (len < 0.05) return;
    const mx = (x0 + x1) * 0.5;
    const mz = (z0 + z1) * 0.5;
    const alongX = Math.abs(dx) >= Math.abs(dz);
    const ry = Math.atan2(-dz, dx);

    // Top handrail, middle tie-rail, bottom sill curb
    this.box(layer, len + 0.08, 0.085, 0.115, mx, y + height - 0.04, mz, mat, { ry });
    this.box(layer, len, 0.065, 0.075, mx, y + height * 0.52, mz, mat, { ry });
    this.box(layer, len, 0.11, 0.095, mx, y + 0.055, mz, mat, { ry });

    // End newel posts + evenly spaced vertical balusters
    const count = Math.max(2, Math.round(len / spacing) + 1);
    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      const px = x0 + dx * t;
      const pz = z0 + dz * t;
      const isEnd = i === 0 || i === count - 1;
      const postW = isEnd ? 0.105 : 0.058;
      this.box(layer, postW, height + (isEnd ? 0.04 : 0), postW, px, y + height * 0.5, pz, mat, { ry });
    }

    // Single clean axis-aligned safety collider
    const pad = 0.06;
    if (alongX) {
      this.collider(Math.min(x0, x1) - pad, Math.max(x0, x1) + pad, y, y + height, mz - pad, mz + pad);
    } else {
      this.collider(mx - pad, mx + pad, y, y + height, Math.min(z0, z1) - pad, Math.max(z0, z1) + pad);
    }
  }

  /**
   * Finalizes all placed primitives into GPU-batched exterior & interior Mesh groups,
   * computes exact rotated worldBounds, and returns the BuiltStructure.
   */
  public build(meta: StructureMeta): BuiltStructure {
    const root = new THREE.Group();
    root.name = `House_${meta.id}_${meta.name}`;
    root.position.set(this.site.x, this.site.y, this.site.z);
    root.rotation.y = this.site.yaw;

    const exteriorGroup = new THREE.Group();
    exteriorGroup.name = `${meta.id}_Exterior`;
    const interiorGroup = new THREE.Group();
    interiorGroup.name = `${meta.id}_Interior`;

    for (const bucket of this.buckets.values()) {
      if (bucket.geometries.length === 0) continue;
      const merged =
        bucket.geometries.length === 1
          ? bucket.geometries[0]
          : mergeGeometries(bucket.geometries, false);
      if (!merged) continue;
      if (bucket.geometries.length > 1) {
        for (const g of bucket.geometries) g.dispose();
      }
      const mesh = new THREE.Mesh(merged, bucket.material);
      mesh.castShadow = bucket.layer === 'ext' && bucket.castShadow;
      mesh.receiveShadow = bucket.receiveShadow;
      if (bucket.layer === 'ext') exteriorGroup.add(mesh);
      else interiorGroup.add(mesh);
    }

    root.add(exteriorGroup, interiorGroup);

    // Compute exact rotated world-space AABB
    const worldBounds = new THREE.Box3();
    const c = Math.cos(this.site.yaw);
    const sn = Math.sin(this.site.yaw);
    const loX = isFinite(this.minX) ? this.minX : -this.site.radiusX;
    const hiX = isFinite(this.maxX) ? this.maxX : this.site.radiusX;
    const loY = isFinite(this.minY) ? this.minY : -1;
    const hiY = isFinite(this.maxY) ? this.maxY : 10;
    const loZ = isFinite(this.minZ) ? this.minZ : -this.site.radiusZ;
    const hiZ = isFinite(this.maxZ) ? this.maxZ : this.site.radiusZ;

    const v = new THREE.Vector3();
    for (const lx of [loX, hiX]) {
      for (const ly of [loY, hiY]) {
        for (const lz of [loZ, hiZ]) {
          v.set(
            this.site.x + lx * c + lz * sn,
            this.site.y + ly,
            this.site.z - lx * sn + lz * c
          );
          worldBounds.expandByPoint(v);
        }
      }
    }

    // Transform local entryPoint to world space
    const [ex, ey, ez] = meta.entryLocal;
    const worldEntryX = this.site.x + ex * c + ez * sn;
    const worldEntryZ = this.site.z - ex * sn + ez * c;
    const worldEntryY = this.site.y + ey;
    // Camera forward for yaw is (-sin(yaw), -cos(yaw)); looking from local +Z toward local -Z (into house) = site.yaw
    // Let's verify: local -Z in world is (-sin(site.yaw), -cos(site.yaw)), which IS Three.js camera forward for yaw = site.yaw!
    const lookYaw = this.site.yaw + (meta.entryLookLocalYaw ?? 0);

    return {
      id: meta.id,
      name: meta.name,
      subtitle: meta.subtitle,
      category: meta.category,
      builtYear: meta.builtYear,
      abandonedYear: meta.abandonedYear,
      stories: meta.stories,
      floorElevations: meta.floorElevations,
      position: new THREE.Vector3(this.site.x, this.site.y, this.site.z),
      yaw: this.site.yaw,
      group: root,
      interiorGroup,
      colliders: this.colliders,
      walkSurfaces: this.walkSurfaces,
      entryPoint: { x: worldEntryX, y: worldEntryY, z: worldEntryZ, lookYaw },
      worldBounds,
    };
  }
}
