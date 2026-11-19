import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H02: 磯部家（港見張りの三階櫓家）— 1881年（明治14年）築・1985年廃村
 * 細身縦長の3階建木造櫓家・石州赤茶釉薬瓦切妻屋根＋二段瓦庇・3F四方高欄見張り縁・直階段＋西階段
 */
export function buildHouse02Isobe(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // Materials (distinct from H01: weathered gray planks -> aged timber -> rough stucco + Sekishu reddish-brown glazed kawara!)
  const stoneBase = catalog.getMaterial('ishigaki_mossy', { roughness: 0.95, bumpScale: 0.08 });
  const stepMat = catalog.getMaterial('mossy_pavers', { roughness: 0.93, bumpScale: 0.06 });
  const grayPlank = catalog.getMaterial('weathered_gray_planks', { roughness: 0.92, bumpScale: 0.05 });
  const agedWood = catalog.getMaterial('aged_timber_planks', { roughness: 0.91, bumpScale: 0.05 });
  const stuccoMat = catalog.getMaterial('rough_white_stucco', { roughness: 0.93, bumpScale: 0.05, tint: 0xf1ece0 });
  const darkTimber = catalog.getMaterial('charred_cedar', { roughness: 0.9, bumpScale: 0.05 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.84, bumpScale: 0.04 });
  const tatamiPlain = catalog.getMaterial('tatami_plain', { roughness: 0.92, bumpScale: 0.04 });
  const checkerFloor = catalog.getMaterial('checker_linoleum', { roughness: 0.72, bumpScale: 0.02 });
  const earthDoma = catalog.getMaterial('river_cobble', { roughness: 0.94, bumpScale: 0.06 });
  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.36, opacity: 0.46, transparent: true });
  const curtainWin = catalog.getMaterial('botanical_curtain', { roughness: 0.9, opacity: 0.85, transparent: true });
  const doorWood = catalog.getMaterial('door_wood_brown', { roughness: 0.85, bumpScale: 0.04 });
  const kitchenUnit = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.78, bumpScale: 0.03 });
  const vanityMat = catalog.getMaterial('vanity_sink', { roughness: 0.72, bumpScale: 0.03 });
  const dresserMat = catalog.getMaterial('wooden_dresser', { roughness: 0.82, bumpScale: 0.04 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const deskMat = catalog.getMaterial('office_counter', { roughness: 0.84, bumpScale: 0.03 });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.88, bumpScale: 0.04 });
  const boxesMat = catalog.getMaterial('cardboard_boxes', { roughness: 0.92, bumpScale: 0.04 });
  const ropeMat = catalog.getMaterial('woven_rope_mat', { roughness: 0.95, bumpScale: 0.06 });
  const mapSign = catalog.getMaterial('island_map_sign', { roughness: 0.82, bumpScale: 0.02 });
  const barrelMat = catalog.getMaterial('driftwood', { roughness: 0.93, bumpScale: 0.06 });
  const plasterInt = catalog.getMaterial('ivory_plaster', { roughness: 0.91, bumpScale: 0.03 });

  // Sekishu Reddish-Brown Glazed Kawara (石州赤茶釉薬瓦)
  const sekishuDeck = catalog.getMaterial('glazed_brown_brick', { roughness: 0.56, metalness: 0.14, bumpScale: 0.05, tint: 0xc27756 });
  const sekishuRib = catalog.getMaterial('glazed_brown_brick', { roughness: 0.50, metalness: 0.18, bumpScale: 0.05, tint: 0xa45d3f });
  const sekishuRidge = catalog.getMaterial('old_red_brick', { roughness: 0.62, metalness: 0.12, bumpScale: 0.04, tint: 0x8a4832 });
  const oniMat = catalog.getMaterial('dark_iron_plate', { roughness: 0.58, metalness: 0.28, tint: 0x6b3a29 });

  const Y1 = 0.40;
  const Y2 = 3.30;
  const Y3 = 6.20;
  const YTOP = 8.95;

  // =========================================================================
  // 1. STONE PLINTH & FRONT STEPS
  // =========================================================================
  p.box('ext', 7.5, 1.1, 7.9, 0, Y1 - 0.56, 0, stoneBase);
  p.stoneSteps('ext', 0.0, 5.0, 3.85, -0.35, Y1, 1.9, 4, stepMat);

  // =========================================================================
  // 2. 1F: 網道具・綱蔵土間 (Y = +0.40m)
  // =========================================================================
  const h1 = Y2 - Y1;
  const mid1 = Y1 + h1 * 0.5;
  p.box('int', 7.0, 0.08, 7.4, 0, Y1 - 0.04, 0, earthDoma);
  p.floor(-3.45, 3.45, -3.65, 3.85, Y1 + 0.04);

  // 1F Exterior walls: weathered gray planks, front doorway X ∈ [-0.85, +0.85]
  p.box('ext', 2.8, h1, 0.22, -2.25, mid1, 3.75, grayPlank, { solid: true });
  p.box('ext', 2.8, h1, 0.22, 2.25, mid1, 3.75, grayPlank, { solid: true });
  p.box('ext', 1.74, 0.72, 0.22, 0.0, Y1 + 2.54, 3.75, grayPlank, { solid: true });
  p.box('ext', 0.90, 2.12, 0.06, -1.18, Y1 + 1.06, 3.60, doorWood, { uvScale: 0 }); // Open sliding door

  // Back 1F wall (-Z = -3.75) with small storeroom window
  p.box('ext', 2.6, h1, 0.22, -2.35, mid1, -3.75, grayPlank, { solid: true });
  p.box('ext', 2.1, 1.05, 0.22, 0.0, Y1 + 0.52, -3.75, grayPlank, { solid: true });
  p.box('ext', 2.1, 0.65, 0.22, 0.0, Y1 + 2.57, -3.75, grayPlank, { solid: true });
  p.box('ext', 2.06, 1.20, 0.06, 0.0, Y1 + 1.65, -3.75, glassMat, { uvScale: 0 });
  p.box('ext', 2.6, h1, 0.22, 2.35, mid1, -3.75, grayPlank, { solid: true });

  // West & East 1F walls with timber bracing posts
  p.box('ext', 0.22, h1, 7.62, -3.55, mid1, 0, grayPlank, { solid: true });
  p.box('ext', 0.22, h1, 7.62, 3.55, mid1, 0, grayPlank, { solid: true });
  for (const px of [-3.58, 3.58]) {
    for (const pz of [-3.76, -1.2, 1.2, 3.76]) {
      p.box('ext', 0.18, h1, 0.18, px, mid1, pz, darkTimber);
    }
  }

  // 1F Net & Rope Storage Props
  p.box('int', 0.65, 1.85, 2.2, -3.08, Y1 + 0.92, -1.2, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 0.85, 0.72, -2.4, Y1 + 0.42, 1.85, boxesMat, { solid: true, uvScale: 0 });
  p.cyl('int', 0.38, 0.42, 0.86, 10, -1.8, Y1 + 0.43, -2.85, barrelMat);
  p.cyl('int', 0.36, 0.40, 0.82, 10, -0.95, Y1 + 0.41, -3.05, barrelMat);
  p.cyl('int', 0.48, 0.50, 0.28, 10, 0.45, Y1 + 0.16, -2.85, ropeMat);

  // 1F -> 2F Straight Staircase along East Wall (X = 2.65, Z: +1.7 -> -2.0)
  p.stairRun('int', {
    x0: 2.65,
    z0: 1.70,
    x1: 2.65,
    z1: -2.00,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.15,
    steps: 13,
    treadMat: oakFloor,
    stringerMat: darkTimber,
    railMat: darkTimber,
    railLeft: true,
    railRight: false,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 3. 2F: 居間＆昭和台所 (Y = +3.30m)
  // =========================================================================
  const h2 = Y3 - Y2;
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs with clean East stairwell cutout (X ∈ [1.85, 3.5], Z ∈ [-2.0, +1.95])
  p.box('int', 5.38, 0.16, 7.42, -0.82, Y2 - 0.06, 0, oakFloor);
  p.box('int', 1.65, 0.16, 1.76, 2.68, Y2 - 0.06, -2.86, oakFloor);
  p.box('int', 1.65, 0.16, 1.76, 2.68, Y2 - 0.06, 2.86, oakFloor);
  // Tatami living area (south-center) + Checker linoleum kitchen strip (north-west)
  p.box('int', 4.6, 0.04, 3.8, -0.9, Y2 + 0.03, 1.5, tatamiPlain);
  p.box('int', 4.4, 0.04, 2.4, -1.0, Y2 + 0.03, -2.3, checkerFloor);

  // 1F overhead ceiling colliders (leaving stairwell completely clear!)
  p.collider(-3.5, 1.85, Y2 - 0.16, Y2 + 0.02, -3.7, 3.7);
  p.collider(1.85, 3.5, Y2 - 0.16, Y2 + 0.02, -3.7, -2.05);
  p.collider(1.85, 3.5, Y2 - 0.16, Y2 + 0.02, 2.0, 3.7);

  // 2F Walkable floors
  p.floor(-3.45, 1.85, -3.65, 3.65, Y2 + 0.04);
  p.floor(1.85, 3.45, -3.65, -1.95, Y2 + 0.04);
  p.floor(1.85, 3.45, 1.95, 3.65, Y2 + 0.04);

  // Guard rail along west & south edge of 1F->2F stairwell
  p.box('int', 0.08, 0.92, 3.95, 1.86, Y2 + 0.46, -0.02, darkTimber, { solid: true });
  p.box('int', 1.62, 0.92, 0.08, 2.68, Y2 + 0.46, 1.98, darkTimber, { solid: true });

  // 2F Exterior Walls (経年杉板張り with big frosted windows on front, west & back)
  // Front 2F (+Z = +3.75)
  p.box('ext', 1.8, h2, 0.22, -2.65, mid2, 3.75, agedWood, { solid: true });
  p.box('ext', 3.4, 0.85, 0.22, 0.0, Y2 + 0.42, 3.75, agedWood, { solid: true });
  p.box('ext', 3.4, 0.65, 0.22, 0.0, Y2 + 2.57, 3.75, agedWood, { solid: true });
  p.box('ext', 3.36, 1.40, 0.06, 0.0, Y2 + 1.55, 3.75, glassMat, { uvScale: 0 });
  p.box('ext', 1.8, h2, 0.22, 2.65, mid2, 3.75, agedWood, { solid: true });
  // Botanical curtain flanking 2F window
  p.box('int', 0.55, 1.45, 0.05, -1.35, Y2 + 1.55, 3.58, curtainWin, { uvScale: 0 });

  // Back 2F (-Z = -3.75)
  p.box('ext', 2.2, h2, 0.22, -2.45, mid2, -3.75, agedWood, { solid: true });
  p.box('ext', 2.6, 0.92, 0.22, 0.0, Y2 + 0.46, -3.75, agedWood, { solid: true });
  p.box('ext', 2.6, 0.68, 0.22, 0.0, Y2 + 2.56, -3.75, agedWood, { solid: true });
  p.box('ext', 2.56, 1.30, 0.06, 0.0, Y2 + 1.56, -3.75, glassMat, { uvScale: 0 });
  p.box('ext', 2.2, h2, 0.22, 2.45, mid2, -3.75, agedWood, { solid: true });

  // West & East 2F walls
  p.box('ext', 0.22, h2, 2.4, -3.55, mid2, -2.55, agedWood, { solid: true });
  p.box('ext', 0.22, 0.90, 2.5, -3.55, Y2 + 0.45, 0.0, agedWood, { solid: true });
  p.box('ext', 0.22, 0.68, 2.5, -3.55, Y2 + 2.56, 0.0, agedWood, { solid: true });
  p.box('ext', 0.06, 1.32, 2.46, -3.55, Y2 + 1.56, 0.0, glassMat, { uvScale: 0 });
  p.box('ext', 0.22, h2, 2.4, -3.55, mid2, 2.55, agedWood, { solid: true });
  p.box('ext', 0.22, h2, 7.62, 3.55, mid2, 0, agedWood, { solid: true });

  // 2F Interior Kitchen & Living Furniture
  p.box('int', 1.85, 0.88, 0.62, -0.4, Y2 + 0.44, -3.28, kitchenUnit, { solid: true, uvScale: 0 });
  p.box('int', 0.82, 0.88, 0.56, 1.05, Y2 + 0.44, -3.30, vanityMat, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 0.40, 0.85, -0.3, Y2 + 0.22, 1.25, darkTimber, { solid: true });
  p.box('int', 1.25, 1.15, 0.52, -0.25, Y2 + 0.60, 3.22, dresserMat, { solid: true, uvScale: 0 });

  // 2F -> 3F Staircase along WEST Wall (X = -2.65, Z: -1.85 -> +1.85, rising toward +Z!)
  // Completely opposite side & opposite direction from 1F->2F for an authentic Japanese watchtower climb!
  p.stairRun('int', {
    x0: -2.65,
    z0: -1.85,
    x1: -2.65,
    z1: 1.85,
    y0: Y2 + 0.04,
    y1: Y3 + 0.04,
    width: 1.15,
    steps: 13,
    treadMat: oakFloor,
    stringerMat: darkTimber,
    railMat: darkTimber,
    railLeft: false,
    railRight: true,
    guardLeft: false,
    guardRight: true,
  });

  // =========================================================================
  // 4. 3F: 360° 海・廃村見張り座敷 & 四周高欄縁台 (Y = +6.20m)
  // =========================================================================
  const h3 = YTOP - Y3; // 2.75m
  const mid3 = Y3 + h3 * 0.5;

  // 3F Floor Slabs (inset interior chamber X ∈ [-3.2, +3.2], Z ∈ [-3.25, +3.25], plus overhanging 360° gallery!)
  // Clean cutout over West 2F->3F stairwell (X ∈ [-3.3, -1.85], Z ∈ [-1.85, +1.85])
  p.box('int', 5.10, 0.16, 6.50, 0.70, Y3 - 0.06, 0, tatamiPlain);
  p.box('int', 1.45, 0.16, 1.45, -2.58, Y3 - 0.06, -2.55, oakFloor);
  p.box('int', 1.45, 0.16, 1.45, -2.58, Y3 - 0.06, 2.55, oakFloor);

  // Projecting 360° Watchtower Gallery Deck (高欄見張り縁) wrapping all 4 sides!
  p.box('ext', 8.9, 0.14, 1.15, 0, Y3 - 0.06, 3.82, agedWood);  // Front gallery (+Z)
  p.box('ext', 8.9, 0.14, 1.15, 0, Y3 - 0.06, -3.82, agedWood); // Back gallery (-Z)
  p.box('ext', 1.15, 0.14, 6.55, -3.82, Y3 - 0.06, 0, agedWood); // West gallery
  p.box('ext', 1.15, 0.14, 6.55, 3.82, Y3 - 0.06, 0, agedWood);  // East gallery

  // Open 360° watchtower balustrade railings (高欄)
  p.kouranRailing('ext', -4.35, 4.35, 4.35, 4.35, Y3, 0.96, darkTimber, 0.58);
  p.kouranRailing('ext', -4.35, -4.35, 4.35, -4.35, Y3, 0.96, darkTimber, 0.58);
  p.kouranRailing('ext', -4.35, -4.35, -4.35, 4.35, Y3, 0.96, darkTimber, 0.58);
  p.kouranRailing('ext', 4.35, -4.35, 4.35, 4.35, Y3, 0.96, darkTimber, 0.58);
  // Corner Kouran cap posts
  for (const gx of [-4.35, -1.5, 1.5, 4.35]) {
    p.box('ext', 0.14, 1.08, 0.14, gx, Y3 + 0.54, 4.35, darkTimber);
    p.box('ext', 0.14, 1.08, 0.14, gx, Y3 + 0.54, -4.35, darkTimber);
  }

  // 2F overhead ceiling colliders (strictly matching 3F slabs so West stairwell has full headroom!)
  p.collider(-1.85, 3.4, Y3 - 0.16, Y3 + 0.02, -3.4, 3.4);
  p.collider(-3.4, -1.85, Y3 - 0.16, Y3 + 0.02, -3.4, -1.92);
  p.collider(-3.4, -1.85, Y3 - 0.16, Y3 + 0.02, 1.92, 3.4);

  // 3F Walkable surfaces (interior + entire 360° outer watch balcony!)
  p.floor(-1.85, 4.25, -4.25, 4.25, Y3 + 0.04);
  p.floor(-4.25, -1.85, -4.25, -1.85, Y3 + 0.04);
  p.floor(-4.25, -1.85, 1.85, 4.25, Y3 + 0.04);
  p.floor(-4.25, -3.28, -1.85, 1.85, Y3 + 0.04);

  // Stairwell guard rail on 3F (east & north edges of West stairwell)
  p.box('int', 0.08, 0.92, 3.72, -1.86, Y3 + 0.46, 0.0, darkTimber, { solid: true });
  p.box('int', 1.40, 0.92, 0.08, -2.56, Y3 + 0.46, -1.90, darkTimber, { solid: true });

  // 3F Watchtower Walls (rough white stucco with 360° panoramic windows + open front balcony door!)
  // Front 3F (+Z = +3.25): open door onto gallery at X ∈ [-0.6, +0.9]
  p.box('ext', 2.7, h3, 0.20, -1.95, mid3, 3.25, stuccoMat, { solid: true });
  p.box('ext', 1.55, 0.62, 0.20, 0.15, Y3 + 2.44, 3.25, stuccoMat, { solid: true });
  p.box('ext', 2.35, h3, 0.20, 2.08, mid3, 3.25, stuccoMat, { solid: true });

  // Back 3F (-Z = -3.25): huge panoramic mountain/sea window
  p.box('ext', 1.25, h3, 0.20, -2.62, mid3, -3.25, stuccoMat, { solid: true });
  p.box('ext', 4.0, 0.78, 0.20, 0.0, Y3 + 0.39, -3.25, stuccoMat, { solid: true });
  p.box('ext', 4.0, 0.55, 0.20, 0.0, Y3 + 2.47, -3.25, stuccoMat, { solid: true });
  p.box('ext', 3.96, 1.42, 0.06, 0.0, Y3 + 1.48, -3.25, glassMat, { uvScale: 0 });
  p.box('ext', 1.25, h3, 0.20, 2.62, mid3, -3.25, stuccoMat, { solid: true });

  // East 3F (+X = +3.25) & West 3F (-X = -3.25): wide lookout openings
  for (const sx of [-3.25, 3.25]) {
    p.box('ext', 0.20, h3, 1.35, sx, mid3, -2.58, stuccoMat, { solid: true });
    p.box('ext', 0.20, 0.78, 3.85, sx, Y3 + 0.39, 0, stuccoMat, { solid: true });
    p.box('ext', 0.20, 0.55, 3.85, sx, Y3 + 2.47, 0, stuccoMat, { solid: true });
    p.box('ext', 0.06, 1.42, 3.80, sx, Y3 + 1.48, 0, glassMat, { uvScale: 0 });
    p.box('ext', 0.20, h3, 1.35, sx, mid3, 2.58, stuccoMat, { solid: true });
  }

  // Exposed dark-timber tie beams overhead in 3F watch room
  for (const bz of [-2.2, 0.0, 2.2]) {
    p.box('int', 6.4, 0.18, 0.16, 0, YTOP - 0.12, bz, darkTimber);
  }
  p.box('int', 6.3, 0.10, 6.3, 0, YTOP + 0.04, 0, plasterInt);
  p.collider(-3.2, 3.2, YTOP - 0.05, YTOP + 0.15, -3.2, 3.2);

  // 3F Watchman Furniture: Ledger Desk, Antique Tansu, Wall Island Map
  p.box('int', 1.65, 0.86, 0.68, 1.65, Y3 + 0.43, -1.85, deskMat, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 1.32, 0.54, 2.52, Y3 + 0.66, 1.45, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 1.45, 0.95, 0.05, 2.15, Y3 + 1.65, 3.10, mapSign, { uvScale: 0 });

  // =========================================================================
  // 5. SEKISHU REDDISH-BROWN GLAZED KAWARA ROOFS (石州赤茶釉薬瓦・切妻＋二段庇)
  // =========================================================================
  // 5A. 1F Front & East Kawara Hisashi Eaves
  p.kawaraSlope('ext', {
    bottomWidth: 8.2,
    run: 1.25,
    pitch: 0.36,
    ridgeX: 0,
    ridgeY: Y2 + 0.12,
    ridgeZ: 3.80,
    downslopeYaw: 0,
    tileMat: sekishuDeck,
    ribMat: sekishuRib,
    eaveMat: sekishuRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.36,
  });
  // 5B. 2F Belt-Course Kawara Skirt (wrapping front, back, east, west under the 3F watch gallery!)
  p.kawaraSlope('ext', {
    topWidth: 7.4,
    bottomWidth: 9.2,
    run: 1.15,
    pitch: 0.40,
    ridgeX: 0,
    ridgeY: Y3 - 0.10,
    ridgeZ: 3.70,
    downslopeYaw: 0,
    tileMat: sekishuDeck,
    ribMat: sekishuRib,
    eaveMat: sekishuRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 7.4,
    bottomWidth: 9.2,
    run: 1.15,
    pitch: 0.40,
    ridgeX: 0,
    ridgeY: Y3 - 0.10,
    ridgeZ: -3.70,
    downslopeYaw: Math.PI,
    tileMat: sekishuDeck,
    ribMat: sekishuRib,
    eaveMat: sekishuRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 7.6,
    bottomWidth: 9.4,
    run: 1.15,
    pitch: 0.40,
    ridgeX: 3.55,
    ridgeY: Y3 - 0.10,
    ridgeZ: 0,
    downslopeYaw: Math.PI * 0.5,
    tileMat: sekishuDeck,
    ribMat: sekishuRib,
    eaveMat: sekishuRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 7.6,
    bottomWidth: 9.4,
    run: 1.15,
    pitch: 0.40,
    ridgeX: -3.55,
    ridgeY: Y3 - 0.10,
    ridgeZ: 0,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: sekishuDeck,
    ribMat: sekishuRib,
    eaveMat: sekishuRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.38,
  });

  // 5C. Steep Top 3F Kirizuma Kawara Roof (急勾配切妻・石州赤茶釉薬瓦)
  // Ridge runs NORTH-SOUTH (along Z!) so the grand triangular gable faces the street (+Z) for a dramatic watchtower silhouette!
  const topPitch = 0.56;
  const topRun = 4.65;
  const topRise = topRun * Math.tan(topPitch); // ~2.92m
  const yRidge = YTOP - 0.25 + topRise; // ~11.62m!

  // East & West steep slopes
  p.kawaraSlope('ext', {
    bottomWidth: 9.6,
    run: topRun,
    pitch: topPitch,
    ridgeX: 0,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: Math.PI * 0.5,
    tileMat: sekishuDeck,
    ribMat: sekishuRib,
    eaveMat: sekishuRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.36,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 9.6,
    run: topRun,
    pitch: topPitch,
    ridgeX: 0,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: sekishuDeck,
    ribMat: sekishuRib,
    eaveMat: sekishuRidge,
    rafterMat: darkTimber,
    ribSpacing: 0.36,
  });

  // Front (+Z) & Back (-Z) White Stucco Gable Triangles (切妻妻壁) + Timber Bargeboards (破風板)
  p.gablePrism('ext', 6.6, yRidge - YTOP + 0.18, 0.22, 0, YTOP - 0.08, 3.25, stuccoMat);
  p.gablePrism('ext', 6.6, yRidge - YTOP + 0.18, 0.22, 0, YTOP - 0.08, -3.25, stuccoMat);
  // Decorative timber bargeboards projecting on front & back gable edges
  const bargeLen = topRun / Math.cos(topPitch);
  for (const gz of [-4.72, 4.72]) {
    p.box('ext', bargeLen, 0.24, 0.14, -topRun * 0.5, yRidge - topRise * 0.5, gz, darkTimber, { rz: topPitch });
    p.box('ext', bargeLen, 0.24, 0.14, topRun * 0.5, yRidge - topRise * 0.5, gz, darkTimber, { rz: -topPitch });
  }

  // Tall North-South Main Ridge (大棟) with Twin Sculpted Horned Onigawara (鬼瓦)
  p.kawaraRidge('ext', 0, yRidge + 0.06, -4.78, 0, yRidge + 0.06, 4.78, sekishuRidge, oniMat, {
    scale: 1.15,
    oniStart: true,
    oniEnd: true,
    courses: 3,
  });

  return p.build({
    id: site.id,
    name: '磯部家（港見張りの三階櫓家）',
    subtitle: '明治14年築・石州赤茶釉薬瓦切妻・四周高欄見張り縁・三階建',
    category: 'house',
    builtYear: 1881,
    abandonedYear: 1985,
    stories: 3,
    floorElevations: [Y1 + 0.04, Y2 + 0.04, Y3 + 0.04],
    entryLocal: [0.0, 0.0, 6.1],
  });
}
