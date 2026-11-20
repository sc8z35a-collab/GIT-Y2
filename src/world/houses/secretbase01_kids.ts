import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * B01: 子供たちの山奥の秘密基地（1980〜1985年 — 二層構造・苔巨岩焚き火広場＆廃材トタン隠れ家＆巨杉の樹上やぐら）
 * 黒磯岳山頂への獣道から東山中へ分け入った深い杉林の隠れ窪地（標高376m）に、
 * 1985年の廃村直前まで村の子供たちが手作業で組み上げた二層構造の秘密基地。
 *  - 地上焚き火広場 (Y=0.0m): 苔巨岩×7の天然障壁（東側の獣道到着口は開放）・丸石焚き火跡＆流木ベンチ×3・
 *    流木の「ひみつきち」手作りアーチ門・隠匿リンゴ箱＆段ボール資材置き場。
 *  - 1F 廃材板＆トタン屋根の秘密隠れ家 (Y=+0.38m): 古板・褪色赤板・青錆＆赤錆トタン・帆布タープの不揃いな小屋。
 *    内部には赤ヴィンテージラグ・漫画本棚・リンゴ箱座卓＆赤座布団・手描き宝の地図黒板＆島地図・コルクボード。
 *  - 2F 巨杉の樹上見張りやぐら (Y=+3.28m): 直径1.3m・樹高11mの古杉の巨木を抱き込むように手作り木階段で登る空中デッキ！
 *    流木手摺・赤トタン雨除け・木製望遠鏡支柱を備え、深い原生林越しに黒磯岳主峰を望む！
 */
export function buildSecretBase01Kids(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Forest Glade, Mossy Boulders, Salvaged Timber & Scrap Tin Materials ---
  const mossRock = catalog.getMaterial('moss_rock_heavy', { roughness: 0.94, bumpScale: 0.08 });
  const lichenRock = catalog.getMaterial('lichen_rock', { roughness: 0.94, bumpScale: 0.08 });
  const charredSoil = catalog.getMaterial('charred_soil', { roughness: 0.98, bumpScale: 0.07 });
  const woodchips = catalog.getMaterial('woodchips', { roughness: 0.95, bumpScale: 0.06 });
  const driftwood = catalog.getMaterial('driftwood', { roughness: 0.94, bumpScale: 0.07 });
  const treeBark = catalog.getMaterial('tree_bark', { roughness: 0.95, bumpScale: 0.08 });
  const foliageGreen = catalog.getMaterial('foliage_green', { roughness: 0.86, bumpScale: 0.06, tint: 0x3b5832 });
  const shrubFoliage = catalog.getMaterial('shrub_foliage', { roughness: 0.88, bumpScale: 0.06, tint: 0x456639 });

  // --- Salvaged Village Scrap Boards, Corrugated Tin & Kids' Secret Stash Props ---
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.92, bumpScale: 0.06 });
  const weatheredGray = catalog.getMaterial('weathered_gray_planks', { roughness: 0.92, bumpScale: 0.06 });
  const fadedRedWood = catalog.getMaterial('faded_red_wood', { roughness: 0.88, bumpScale: 0.05 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.86, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.84, bumpScale: 0.04 });
  const blueRustTin = catalog.getMaterial('blue_rust_corrugated', { roughness: 0.72, metalness: 0.34, bumpScale: 0.06, doubleSide: true });
  const rustedTin = catalog.getMaterial('rusted_corrugated', { roughness: 0.74, metalness: 0.36, bumpScale: 0.06, doubleSide: true });
  const redTin = catalog.getMaterial('red_tin_roof', { roughness: 0.70, metalness: 0.28, bumpScale: 0.06, doubleSide: true });
  const scrapMetal = catalog.getMaterial('scrap_metal_patch', { roughness: 0.72, metalness: 0.42, bumpScale: 0.05 });
  const coarseCanvas = catalog.getMaterial('coarse_canvas', { roughness: 0.95, bumpScale: 0.05, doubleSide: true });

  // --- Kids' 1985 Hideout Interior Treasures ---
  const vintageRug = catalog.getMaterial('vintage_rug_red', { roughness: 0.94, bumpScale: 0.04 });
  const chalkboard = catalog.getMaterial('chalkboard', { roughness: 0.88, bumpScale: 0.02 });
  const mapSign = catalog.getMaterial('island_map_sign', { roughness: 0.80, bumpScale: 0.02 });
  const corkBoard = catalog.getMaterial('cork_board', { roughness: 0.90, bumpScale: 0.04 });
  const bookshelf = catalog.getMaterial('filled_bookshelf', { roughness: 0.84, bumpScale: 0.03 });
  const cratesMat = catalog.getMaterial('shop_produce_crates', { roughness: 0.90, bumpScale: 0.05 });
  const cardboard = catalog.getMaterial('cardboard_boxes', { roughness: 0.92, bumpScale: 0.04 });
  const zabuton = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const clearGlass = catalog.getMaterial('window_frosted_wood', { roughness: 0.30, opacity: 0.36, transparent: true });
  const ropeMat = catalog.getMaterial('woven_rope_mat', { roughness: 0.95, bumpScale: 0.05 });

  const Y1 = 0.38;
  const Y2 = 3.28;

  // =========================================================================
  // 1. SHELTERING MOSSY BOULDER GLADE, CAMPFIRE RING & DRIFTWOOD GATE ARCH
  // =========================================================================
  // Woodchip-scattered secret clearing floor (flat level pad across glade)
  p.cyl('ext', 7.20, 7.50, 0.14, 16, 0.0, -0.04, 0.0, woodchips);
  p.floor(-7.4, 7.6, -7.2, 7.4, 0.05);

  // 7 Massive Sheltering Mossy Boulders ringing the glade (East trail entry X > +5.5, Z ∈ [-1.5, +3.5] kept WIDE OPEN!)
  const boulders: Array<[number, number, number, number, number, number]> = [
    [-6.6, -3.4, 2.35, 1.25, 0.88, 1.05],
    [-3.2, -6.5, 2.65, 1.20, 0.92, 1.00],
    [1.8, -6.4, 2.25, 1.15, 0.85, 1.05],
    [5.8, -4.4, 2.40, 1.18, 0.90, 0.98],
    [5.2, 4.8, 2.15, 1.15, 0.84, 1.00],
    [-0.5, 6.2, 2.30, 1.22, 0.86, 0.96],
    [-5.8, 4.2, 2.20, 1.18, 0.85, 1.02],
  ];
  for (let i = 0; i < boulders.length; i++) {
    const [bx, bz, rad, sx, sy, sz] = boulders[i];
    p.rock('ext', rad, 1, bx, rad * sy * 0.42, bz, sx, sy, sz, i % 2 === 0 ? mossRock : lichenRock, {
      ry: i * 1.13,
      solid: true,
    });
  }

  // Hand-tied Crooked Driftwood "ひみつきち" Entrance Arch Gate on East Trail Arrival (X = +5.2, Z = +0.8)!
  p.cyl('ext', 0.12, 0.16, 2.95, 7, 5.20, 1.45, -0.65, driftwood, { rz: 0.08 });
  p.cyl('ext', 0.12, 0.16, 2.95, 7, 5.20, 1.45, 2.25, driftwood, { rz: -0.07 });
  p.cyl('ext', 0.11, 0.12, 3.60, 7, 5.20, 2.86, 0.80, driftwood, { rx: Math.PI * 0.5 + 0.05 });
  p.box('ext', 0.10, 0.44, 1.55, 5.24, 2.52, 0.80, fadedRedWood, { rx: -0.06 }); // Painted wooden "秘密基地" plaque
  p.collider(4.95, 5.45, 0, 2.8, -0.85, -0.45);
  p.collider(4.95, 5.45, 0, 2.8, 2.05, 2.45);

  // ★ CENTRAL CAMPFIRE STONE CIRCLE, CHARRED LOGS & FALLEN LOG SEATS (X = +2.45, Z = +1.40)
  const fx = 2.45;
  const fz = 1.40;
  p.cyl('ext', 0.92, 1.00, 0.08, 12, fx, 0.04, fz, charredSoil);
  for (let k = 0; k < 10; k++) {
    const a = (k / 10) * Math.PI * 2;
    p.rock('ext', 0.22, 0, fx + Math.cos(a) * 0.88, 0.14, fz + Math.sin(a) * 0.88, 1.1, 0.72, 1.0, mossRock);
  }
  // Crossed burnt campfire wood billets
  p.cyl('ext', 0.07, 0.08, 1.15, 6, fx, 0.14, fz, driftwood, { rx: Math.PI * 0.5, rz: 0.45 });
  p.cyl('ext', 0.07, 0.08, 1.15, 6, fx, 0.18, fz, driftwood, { rx: Math.PI * 0.5, rz: -0.62 });
  p.cyl('ext', 0.06, 0.07, 0.95, 6, fx, 0.22, fz, timberDark, { rx: Math.PI * 0.5, rz: 1.40 });
  // 3 Fallen Log Campfire Benches surrounding the fire pit
  p.cyl('ext', 0.21, 0.24, 2.35, 7, fx + 1.85, 0.22, fz - 1.35, treeBark, { rx: Math.PI * 0.5, ry: 0.55 });
  p.cyl('ext', 0.21, 0.24, 2.35, 7, fx + 0.35, 0.22, fz + 2.25, driftwood, { rx: Math.PI * 0.5, ry: 1.42 });
  p.cyl('ext', 0.20, 0.23, 2.10, 7, fx - 1.45, 0.22, fz + 2.05, treeBark, { rx: Math.PI * 0.5, ry: -0.65 });
  p.collider(fx - 0.85, fx + 0.85, 0, 0.45, fz - 0.85, fz + 0.85);
  // Outdoor Secret Stash Crates beside boulder
  p.box('ext', 0.82, 0.66, 0.68, 3.85, 0.35, -3.45, cratesMat, { solid: true, uvScale: 0 });
  p.box('ext', 0.66, 0.52, 0.58, 3.92, 0.94, -3.42, cardboard, { ry: 0.18, uvScale: 0 });

  // =========================================================================
  // 2. ★ COLOSSAL ANCIENT CEDAR TREE ANCHORING THE 2F TREEHOUSE (X=-4.0, Z=-2.4)
  // =========================================================================
  const tx = -4.05;
  const tz = -2.45;
  p.cyl('ext', 0.52, 0.76, 11.4, 10, tx, 5.55, tz, treeBark); // Giant ancient cedar trunk!
  p.collider(tx - 0.65, tx + 0.65, 0.0, 5.5, tz - 0.65, tz + 0.65);
  // Massive spreading cedar root buttresses gripping the clearing
  for (let r = 0; r < 4; r++) {
    const a = r * Math.PI * 0.5 + 0.35;
    p.cyl('ext', 0.18, 0.34, 1.85, 7, tx + Math.cos(a) * 0.72, 0.42, tz + Math.sin(a) * 0.72, treeBark, {
      rx: Math.sin(a) * 0.62,
      rz: -Math.cos(a) * 0.62,
    });
  }
  // Lush Ancient Cedar Bough Canopy high above the 2F Treehouse Lookout (Y = 7.4m -> 11.8m)
  p.rock('ext', 3.45, 1, tx, 8.65, tz, 1.35, 0.58, 1.30, foliageGreen);
  p.rock('ext', 2.85, 1, tx + 1.65, 9.55, tz + 1.10, 1.25, 0.55, 1.20, shrubFoliage);
  p.rock('ext', 2.65, 1, tx - 1.40, 10.15, tz - 0.85, 1.20, 0.58, 1.15, foliageGreen);
  p.rock('ext', 1.95, 1, tx + 0.25, 11.45, tz + 0.10, 1.10, 0.75, 1.10, shrubFoliage);

  // =========================================================================
  // 3. 1F PATCHWORK DRIFTWOOD & SCRAP-TIN SECRET FORT HIDEOUT (Y1 = +0.38m)
  // =========================================================================
  // Raised uneven timber deck (X ∈ [-3.9, +0.9], Z ∈ [-3.2, +1.6]) on stacked stone blocks!
  for (const [px, pz] of [[-3.6, -2.9], [0.6, -2.9], [-3.6, 1.3], [0.6, 1.3], [-1.5, -0.8]]) {
    p.box('ext', 0.54, 0.46, 0.54, px, Y1 - 0.22, pz, mossRock);
  }
  p.box('ext', 4.90, 0.14, 4.90, -1.50, Y1 - 0.05, -0.80, agedTimber);
  p.floor(-3.85, 0.85, -3.15, 1.55, Y1 + 0.04);
  // Short plank ramp stepping cleanly into East doorway (X = +0.9 -> +1.9, Z ∈ [-1.1, +0.4])
  p.box('ext', 1.10, 0.10, 1.50, 1.40, Y1 * 0.5, -0.35, driftwood, { rz: -0.32 });
  p.ramp(0.85, 1.95, -1.10, 0.40, 0.05, Y1 + 0.04, 'x', -1);

  const h1 = Y2 - Y1; // 2.90m
  const mid1 = Y1 + h1 * 0.5;
  // Mismatched Hand-Nailed Patchwork Walls (salvaged weathered planks + faded red boards + rusted scrap metal!)
  // North Wall (Z = -3.20): Aged planks + rusted tin patch
  p.box('ext', 4.90, h1, 0.18, -1.50, mid1, -3.20, agedTimber, { solid: true });
  p.box('ext', 2.20, 1.45, 0.06, -0.45, Y1 + 1.15, -3.32, scrapMetal, { rz: 0.04 });
  // West Wall (X = -3.90): Weathered gray planks + crooked lookout window
  p.box('ext', 0.18, h1, 4.90, -3.90, mid1, -0.80, weatheredGray, { solid: true });
  // South Wall (Z = +1.60): Faded red village planks + clear lookout window (X ∈ [-2.4, -0.6])
  p.box('ext', 1.55, h1, 0.18, -3.12, mid1, 1.60, fadedRedWood, { solid: true });
  p.box('ext', 1.55, h1, 0.18, 0.12, mid1, 1.60, weatheredGray, { solid: true });
  p.box('ext', 1.85, 0.96, 0.18, -1.50, Y1 + 0.48, 1.60, agedTimber, { solid: true });
  p.box('ext', 1.85, 0.72, 0.18, -1.50, Y2 - 0.36, 1.60, fadedRedWood, { solid: true });
  p.box('ext', 1.78, 1.22, 0.05, -1.50, Y1 + 1.58, 1.60, clearGlass, { uvScale: 0 });
  // East Wall (X = +0.90) with Wide Open 1.55m Entry Doorway (Z ∈ [-1.15, +0.40]) facing campfire glade!
  p.box('ext', 0.18, h1, 2.08, 0.90, mid1, -2.18, agedTimber, { solid: true });
  p.box('ext', 0.18, h1, 1.24, 0.90, mid1, 1.00, fadedRedWood, { solid: true });
  p.box('ext', 0.18, 0.74, 1.60, 0.90, Y2 - 0.37, -0.38, blueRustTin, { solid: true });
  // Stretched Canvas Tarp Rain Awning over East Fort Entry (X ∈ [+0.9, +2.6])
  p.cyl('ext', 0.06, 0.07, 2.45, 6, 2.55, 1.22, -1.40, driftwood);
  p.cyl('ext', 0.06, 0.07, 2.45, 6, 2.55, 1.22, 0.95, driftwood);
  p.box('ext', 1.95, 0.05, 2.75, 1.78, Y1 + 2.18, -0.22, coarseCanvas, { rz: -0.22 });

  // ★ 1F KIDS' 1985 SECRET TREASURE HIDEOUT INTERIOR!
  p.box('int', 3.10, 0.04, 2.95, -1.60, Y1 + 0.05, -0.75, vintageRug, { uvScale: 0 }); // Cozy red vintage rug!
  // Apple-crate secret council table + twin red zabuton cushions
  p.box('int', 1.15, 0.42, 0.78, -1.75, Y1 + 0.25, -0.85, cratesMat, { solid: true, uvScale: 0 });
  p.box('int', 1.25, 0.06, 0.88, -1.75, Y1 + 0.48, -0.85, warmFloor);
  p.box('int', 0.50, 0.06, 0.50, -1.75, Y1 + 0.07, 0.05, zabuton, { uvScale: 0 });
  p.box('int', 0.50, 0.06, 0.50, -2.75, Y1 + 0.07, -0.85, zabuton, { uvScale: 0 });
  // Hand-Drawn Kids' Treasure Map Chalkboard, Island Map & Cork Pinboard on North Wall!
  p.box('int', 1.55, 0.96, 0.06, -1.65, Y1 + 1.52, -3.06, chalkboard, { uvScale: 0 });
  p.box('int', 1.15, 0.85, 0.06, -0.15, Y1 + 1.52, -3.06, mapSign, { uvScale: 0 });
  p.box('int', 0.06, 0.88, 1.18, -3.76, Y1 + 1.52, -1.10, corkBoard, { uvScale: 0 });
  // Comic & Adventure Bookshelf + Stacked Cardboard Treasure Boxes!
  p.box('int', 1.15, 1.48, 0.42, -3.10, Y1 + 0.78, -2.85, bookshelf, { solid: true, uvScale: 0 });
  p.box('int', 0.65, 0.54, 0.56, -3.35, Y1 + 0.31, 0.95, cardboard, { solid: true, uvScale: 0 });
  p.box('int', 0.52, 0.46, 0.48, -3.35, Y1 + 0.80, 0.95, cardboard, { ry: 0.25, uvScale: 0 });

  // =========================================================================
  // 4. ★ CLIMBABLE SCRAP-TIMBER STAIRWAY -> 2F ANCIENT CEDAR TREEHOUSE DECK!
  // =========================================================================
  // Exterior North-Side Hand-Built Timber Staircase ascending Westward X: +1.95 -> -1.45, Z = -4.05, Y: 0.05 -> 3.28m!
  p.stairRun('ext', {
    x0: 2.15, z0: -4.05, x1: -1.45, z1: -4.05, y0: 0.05, y1: Y2 + 0.04,
    width: 1.05, steps: 12, treadMat: driftwood, stringerMat: timberDark, railMat: driftwood,
    railLeft: true, railRight: true, closedRisers: false, guardLeft: true, guardRight: true,
  });

  // ★ 2F TREEHOUSE LOOKOUT PLATFORM (L-notched cleanly around NE stair arrival X∈[-1.50,+1.00], Z∈[-4.60,-3.45]!)
  // West Main Treehouse Deck (X ∈ [-5.10, -1.48], Z ∈ [-4.60, +1.60]) hugging the ancient cedar trunk
  p.box('ext', 3.65, 0.16, 6.20, -3.29, Y2 - 0.06, -1.50, warmFloor);
  // SE Overlook Deck (X ∈ [-1.50, +1.00], Z ∈ [-3.45, +1.60]) south of the stair notch
  p.box('ext', 2.52, 0.16, 5.08, -0.25, Y2 - 0.06, -0.92, warmFloor);
  // Heavy diagonal timber tree-brace struts transferring deck load into the cedar trunk!
  p.box('ext', 0.20, 2.35, 0.20, -4.65, Y2 - 1.15, -3.55, timberDark, { rz: -0.35, rx: 0.35 });
  p.box('ext', 0.20, 2.35, 0.20, -4.65, Y2 - 1.15, -1.10, timberDark, { rz: -0.35, rx: -0.35 });
  p.collider(-5.10, -1.48, Y2 - 0.16, Y2 + 0.02, -4.60, 1.60);
  p.collider(-1.50, 1.00, Y2 - 0.16, Y2 + 0.02, -3.45, 1.60);
  p.floor(-4.98, -1.44, -4.48, 1.48, Y2 + 0.04);
  p.floor(-1.52, 0.92, -3.42, 1.48, Y2 + 0.04);

  // Crooked Driftwood Safety Railings around the entire 2F Lookout Deck + along stair notch edge!
  p.kouranRailing('ext', -5.02, 1.54, 0.96, 1.54, Y2, 0.96, driftwood, 0.58);
  p.kouranRailing('ext', 0.96, -3.42, 0.96, 1.54, Y2, 0.96, driftwood, 0.58);
  p.kouranRailing('ext', -1.48, -3.42, 0.96, -3.42, Y2, 0.96, driftwood, 0.58);
  p.kouranRailing('ext', -5.02, -4.54, -5.02, 1.54, Y2, 0.96, driftwood, 0.58);
  p.kouranRailing('ext', -5.02, -4.54, -1.55, -4.54, Y2, 0.96, driftwood, 0.58);

  // Patchwork Slanted Tin Shelter Roof over the West/South Half of 2F Treehouse (open East/North mountain vista!)
  for (const [px, pz] of [[-4.80, 1.35], [0.75, 1.35], [-4.80, -2.10], [0.75, -2.10]]) {
    p.cyl('ext', 0.09, 0.11, 2.55, 7, px, Y2 + 1.28, pz, driftwood);
  }
  p.box('ext', 3.45, 0.08, 4.10, -3.20, Y2 + 2.56, -0.35, redTin, { rx: 0.16, rz: 0.06 });
  p.box('ext', 3.15, 0.08, 4.10, -0.45, Y2 + 2.48, -0.35, blueRustTin, { rx: 0.16, rz: -0.05 });
  p.box('ext', 1.65, 0.07, 1.95, -1.80, Y2 + 2.52, -0.80, rustedTin, { rx: 0.18, ry: 0.08 });

  // 2F Treehouse Lookout Props: Woven Rope Mat, Wooden Watch Crate & Makeshift Spyglass Post!
  p.box('int', 2.20, 0.04, 1.85, -1.65, Y2 + 0.05, -0.45, ropeMat, { uvScale: 0 });
  p.box('int', 0.72, 0.52, 0.58, -0.20, Y2 + 0.30, 0.95, cratesMat, { solid: true, uvScale: 0 });
  // Makeshift Wooden Spyglass / Periscope mounted on SE lookout rail aiming toward Mt. Kuroiso!
  p.cyl('ext', 0.05, 0.06, 1.38, 6, 0.45, Y2 + 0.69, 1.28, driftwood);
  p.cyl('ext', 0.065, 0.085, 0.72, 8, 0.45, Y2 + 1.42, 1.28, scrapMetal, { rx: Math.PI * 0.5 - 0.14, ry: -0.42 });

  return p.build({
    id: 'B01',
    name: '子供たちの山奥の秘密基地',
    subtitle: '昭和55〜60年（1980〜1985年）・苔巨岩焚き火広場＆廃材トタン隠れ家・2F巨杉の樹上見張りやぐら',
    category: 'secret_base',
    builtYear: 1980,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1 + 0.04, Y2 + 0.04],
    entryLocal: [7.8, 0.0, 0.8],
    entryLookLocalYaw: Math.PI * 0.5,
  });
}
