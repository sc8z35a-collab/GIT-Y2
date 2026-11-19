import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H16: 田辺家（1878年築・半地下石倉併設・養蚕大屋根の明治豪農三階家）— 半地下＋3階建
 * 中段本通り中腹（標高255m）に構える、半地下の石造蔵（石倉）と高床農家住居が一体化した重厚な明治豪農邸。
 *  - 半地下石倉 (Y=+0.18m, 天井高3.92m!): 1F高床住居（Y=+1.10m）から石造5段階段を「降りて」入る本格的な半地下蔵！
 *    濡れ黒岩腰石＋風化石灰岩内壁＋半開きの重鉄防火扉（mine_steel_door）＋西側地上搬入口＋酒樽＆貯蔵棚。
 *  - 1F東翼住居 (Y=+1.10m): 高石垣基礎上の叩き土間（clay_earth）・石竈＆昭和台所・縁付畳の囲炉裏茶の間。
 *  - 2F (Y=+4.10m): 西翼は白漆喰耐火「上蔵宝物庫」、東翼は10畳本座敷＆幅10m南向き収穫物干し高欄縁側。
 *  - 3F (Y=+7.05m): 露出小屋組大梁と網代蚕棚を備えた伝統「養蚕屋根裏階」＋越屋根（煙出し・採光通気小屋根）。
 */
export function buildHouse16Tanabe(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Semi-Sunken Stone Kura & Meiji Farmhouse Materials ---
  const wetRock = catalog.getMaterial('wet_dark_rock', { roughness: 0.88, bumpScale: 0.08 });
  const rubbleStone = catalog.getMaterial('ishigaki_rubble', { roughness: 0.94, bumpScale: 0.08 });
  const mossyStone = catalog.getMaterial('ishigaki_mossy', { roughness: 0.94, bumpScale: 0.08 });
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const limestoneWall = catalog.getMaterial('weathered_limestone', { roughness: 0.92, bumpScale: 0.06 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const ironVaultDoor = catalog.getMaterial('mine_steel_door', { roughness: 0.68, metalness: 0.52, bumpScale: 0.05 });
  const clayDoma = catalog.getMaterial('clay_earth', { roughness: 0.96, bumpScale: 0.06 });

  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.90, bumpScale: 0.05 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.91, bumpScale: 0.06 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xf5f0e6 });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.82, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.80, bumpScale: 0.03 });
  const latticeMat = catalog.getMaterial('carved_wood_lattice', { roughness: 0.86, bumpScale: 0.05 });
  const slatScreen = catalog.getMaterial('wood_slat_screen', { roughness: 0.85, bumpScale: 0.05 });
  const wovenTray = catalog.getMaterial('woven_screen_brown', { roughness: 0.90, bumpScale: 0.05 });
  const louverMat = catalog.getMaterial('cedar_louvers', { roughness: 0.86, bumpScale: 0.05 });

  // --- Interior Farmhouse & Kura Props ---
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiPlain = catalog.getMaterial('tatami_plain', { roughness: 0.92, bumpScale: 0.04 });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.88, transparent: true });
  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.30, opacity: 0.34, transparent: true });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.78, bumpScale: 0.03 });
  const cabMat = catalog.getMaterial('kitchen_cabinet', { roughness: 0.82, bumpScale: 0.03 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const dresserMat = catalog.getMaterial('wooden_dresser', { roughness: 0.82, bumpScale: 0.03 });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.88, bumpScale: 0.04 });
  const coarseCanvas = catalog.getMaterial('coarse_canvas', { roughness: 0.95, bumpScale: 0.05, doubleSide: true });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });

  // --- Deep Farmhouse Charcoal-Black Hon-gawara (豪農黒燻し大本瓦) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.72, metalness: 0.18, bumpScale: 0.06, tint: 0x7a8088 });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.68, metalness: 0.22, bumpScale: 0.05, tint: 0x686e76 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.60, metalness: 0.30, tint: 0x585e66 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.52, metalness: 0.40, tint: 0x484e56 });

  // ★ GENUINE SPLIT-LEVEL HALF-BASEMENT STONE KURA + ELEVATED FARMHOUSE 1F!
  const YC = 0.18;     // Semi-sunken West Stone Kura Cellar floor (just above 0.0m terrain -> zero terrain bleed!)
  const Y1 = 1.10;     // Elevated East Farmhouse 1F floor (entered up 5 granite steps; descend 5 steps into Kura!)
  const Y2 = 4.10;     // Full 2F Living Floor + Upper Fireproof Kura Treasure Loft
  const Y3 = 7.05;     // 3F Silkworm & Exposed-Beam Attic
  const YTOP = 9.65;

  // =========================================================================
  // 1. HEAVY STONE KURA PLINTH, ELEVATED FARMHOUSE BASE & COVERED PORCH
  // =========================================================================
  // Underground anchor core beneath both wings
  p.box('ext', 6.8, 2.8, 9.4, -3.85, YC - 1.42, 0, wetRock);
  p.box('ext', 7.9, 3.6, 9.4, 3.25, Y1 - 1.82, 0, rubbleStone);

  // East Front Covered Farmer's Porch (X ∈ [-0.50, +7.10], Z ∈ [+4.50, +5.75], Y1 = +1.10m)
  p.box('ext', 7.65, 2.20, 1.30, 3.30, Y1 - 1.12, 5.12, cutStone);
  p.box('ext', 7.55, 0.10, 1.24, 3.30, Y1 - 0.02, 5.12, stepStone);
  p.floor(-0.45, 7.00, 4.45, 5.70, Y1 + 0.04);
  // 5 Broad Granite Steps ascending from Middle Road level (0.0m) up to Farmhouse Porch (Y1 = +1.10m)
  p.stoneSteps('ext', 2.40, 7.35, 5.65, -0.05, Y1, 2.65, 5, stepStone);
  for (const px of [-0.40, 0.90, 3.90, 6.95]) {
    p.box('ext', 0.18, 2.95, 0.18, px, Y1 + 1.50, 5.65, timberDark, { solid: true });
  }
  p.box('ext', 7.65, 0.20, 0.20, 3.30, Y1 + 2.96, 5.65, timberDark);
  // West Ground-Level Stone Cellar Loading Apron (outside West Kura Iron Bulkhead Door!)
  p.box('ext', 1.45, 0.36, 2.40, -7.80, YC - 0.18, -0.10, stepStone);
  p.box('ext', 0.48, 0.16, 2.10, -8.72, 0.04, -0.10, stepStone);
  p.floor(-8.96, -7.00, -1.25, 1.05, YC + 0.04);

  // =========================================================================
  // 2. HALF-BASEMENT WEST STONE KURA (YC = +0.18m, Ceiling = 4.10m!) & EAST 1F FARMHOUSE (Y1 = +1.10m)
  // =========================================================================
  const hC = Y2 - YC;  // 3.92m cavernous stone Kura!
  const midC = YC + hC * 0.5;
  const h1 = Y2 - Y1;  // 3.00m farmhouse 1F
  const mid1 = Y1 + h1 * 0.5;

  // --- WEST SEMI-SUNKEN STONE KURA CELLAR (X ∈ [-7.10, -0.60], Z ∈ [-4.50, +4.50], Y = +0.18m) ---
  p.box('int', 6.55, 0.16, 8.95, -3.85, YC - 0.06, 0, wetRock);
  p.floor(-6.98, -0.58, -4.38, 4.38, YC + 0.04);
  // Massive Dressed Limestone & Mossy Stone Kura Exterior Walls (0.42m thick authentic fortress walls!)
  // Front Kura Wall (Z = +4.50) with TWO high narrow iron-slat cellar vents right above ground level!
  p.box('ext', 6.60, 1.85, 0.42, -3.85, YC + 0.92, 4.50, wetRock, { solid: true });
  p.box('ext', 1.15, hC - 1.85, 0.42, -6.58, YC + 2.88, 4.50, mossyStone, { solid: true });
  p.box('ext', 1.50, hC - 1.85, 0.42, -3.85, YC + 2.88, 4.50, mossyStone, { solid: true });
  p.box('ext', 1.15, hC - 1.85, 0.42, -1.12, YC + 2.88, 4.50, mossyStone, { solid: true });
  p.box('ext', 6.60, 0.98, 0.42, -3.85, Y2 - 0.49, 4.50, cutStone, { solid: true });
  for (const vx of [-5.30, -2.40]) {
    p.box('ext', 1.44, 0.08, 0.46, vx, YC + 1.88, 4.50, timberDark);
    p.box('ext', 1.44, 0.08, 0.46, vx, Y2 - 0.98, 4.50, timberDark);
    p.box('ext', 1.38, 1.05, 0.08, vx, YC + 2.40, 4.50, slatScreen, { uvScale: 0 });
  }
  // Back Kura Wall (-Z = -4.50)
  p.box('ext', 6.60, 1.60, 0.42, -3.85, YC + 0.80, -4.50, wetRock, { solid: true });
  p.box('ext', 6.60, hC - 1.60, 0.42, -3.85, YC + 2.76, -4.50, mossyStone, { solid: true });
  // West Kura Wall (-X = -7.10) with Ground-Level Iron Bulkhead Vault Door Z ∈ [-1.05, +0.85]!
  p.box('ext', 0.42, hC, 3.48, -7.10, midC, -2.78, mossyStone, { solid: true });
  p.box('ext', 0.42, hC - 2.38, 1.94, -7.10, Y2 - (hC - 2.38) * 0.5, -0.10, cutStone, { solid: true });
  p.box('ext', 0.46, 0.12, 1.98, -7.10, YC + 2.38, -0.10, timberDark);
  p.box('ext', 0.42, hC, 3.68, -7.10, midC, 2.68, mossyStone, { solid: true });
  // Heavy rusted iron Kura fire door swung dramatically ajar!
  p.box('ext', 0.12, 2.32, 1.25, -7.52, YC + 1.16, 1.25, ironVaultDoor, { ry: -0.78, uvScale: 0 });
  // Inner Kura limestone lining & massive exposed oak ceiling joists overhead!
  p.box('int', 6.18, hC - 0.1, 0.10, -3.85, midC, -4.24, limestoneWall);
  for (const jz of [-3.2, -1.6, 0.0, 1.6, 3.2]) {
    p.box('int', 6.20, 0.24, 0.22, -3.85, Y2 - 0.22, jz, timberDark);
  }

  // Thick Stone Dividing Wall (X = -0.60) between Kura Cellar & East Farmhouse (Portal Z ∈ [+1.55, +3.35]!)
  p.box('int', 0.34, hC, 6.05, -0.60, midC, -1.48, limestoneWall, { solid: true });
  p.box('int', 0.34, 0.90, 1.84, -0.60, Y2 - 0.45, 2.45, limestoneWall, { solid: true });
  p.box('int', 0.38, 0.10, 1.88, -0.60, Y2 - 0.90, 2.45, timberDark);
  p.box('int', 0.34, hC, 1.18, -0.60, midC, 3.92, limestoneWall, { solid: true });

  // ★ INTERNAL 5-STEP STONE CELLAR STAIRCASE DESCENDING FROM FARMHOUSE 1F (+1.10m) INTO HALF-BASEMENT KURA (+0.18m)!
  p.stairRun('int', {
    x0: 0.55, z0: 2.45, x1: -1.75, z1: 2.45, y0: Y1 + 0.04, y1: YC + 0.04,
    width: 1.48, steps: 5, treadMat: stepStone, stringerMat: cutStone, railMat: timberDark,
    railLeft: true, railRight: true, closedRisers: true, guardLeft: true, guardRight: true,
  });

  // --- KURA CELLAR FURNISHINGS (Giant Cedar Sake/Miso Casks, Racks, Canvas Crates!) ---
  for (const [cx, cz] of [[-5.65, -3.15], [-4.15, -3.15], [-2.65, -3.15], [-5.65, 2.85]]) {
    p.cyl('int', 0.52, 0.56, 1.32, 12, cx, YC + 0.66, cz, agedTimber);
    p.cyl('int', 0.56, 0.56, 0.08, 12, cx, YC + 0.32, cz, timberDark);
    p.cyl('int', 0.56, 0.56, 0.08, 12, cx, YC + 1.00, cz, timberDark);
    p.collider(cx - 0.55, cx + 0.55, YC, YC + 1.34, cz - 0.55, cz + 0.55);
  }
  p.box('int', 0.62, 1.95, 2.25, -1.25, YC + 0.98, -2.55, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 1.45, 0.85, 1.15, -3.85, YC + 0.44, -0.55, coarseCanvas, { solid: true });

  // --- EAST 1F FARMHOUSE LIVING & DOMA KITCHEN (X ∈ [-0.60, +7.10], Y1 = +1.10m) ---
  // Floor Slabs cleanly cut out for the cellar stair descent (X ∈ [-0.60, +0.55], Z ∈ [+1.55, +3.35])!
  p.box('int', 6.55, 0.16, 9.00, 3.82, Y1 - 0.06, 0, clayDoma);            // Main East X∈[+0.55,+7.10]
  p.box('int', 1.18, 0.16, 6.08, -0.02, Y1 - 0.06, -1.48, clayDoma);       // North of cellar stair Z∈[-4.50,+1.55]
  p.box('int', 1.18, 0.16, 1.18, -0.02, Y1 - 0.06, 3.92, clayDoma);        // South of cellar stair Z∈[+3.35,+4.50]
  p.box('int', 4.45, 0.05, 4.95, 2.45, Y1 + 0.03, -1.45, tatamiBord);      // Raised hearth dining tatami
  p.box('int', 1.20, 0.03, 0.70, 2.40, Y1 + 0.04, 4.10, coirMat, { uvScale: 0 });
  p.floor(0.50, 6.98, -4.38, 4.55, Y1 + 0.04);
  p.floor(-0.55, 0.56, -4.38, 1.56, Y1 + 0.04);
  p.floor(-0.55, 0.56, 3.34, 4.42, Y1 + 0.04);
  p.kouranRailing('int', -0.45, 1.55, 0.55, 1.55, Y1, 0.88, timberDark, 0.45);
  p.kouranRailing('int', -0.45, 3.35, 0.55, 3.35, Y1, 0.88, timberDark, 0.45);

  // East 1F Exterior Walls (Z = +4.50 front, -Z = -4.50 back, +X = +7.10 east)
  // Front 1F Doorway X ∈ [+1.35, +3.45] (2.10m wide!)
  p.box('ext', 1.98, 1.05, 0.24, 0.36, Y1 + 0.52, 4.50, cedarDark, { solid: true });
  p.box('ext', 1.98, h1 - 1.05, 0.24, 0.36, Y1 + 2.02, 4.50, whitePlaster, { solid: true });
  p.box('ext', 2.14, 0.68, 0.24, 2.40, Y2 - 0.34, 4.50, whitePlaster, { solid: true });
  p.box('ext', 2.16, 0.09, 0.28, 2.40, Y2 - 0.68, 4.50, timberDark);
  p.box('ext', 3.68, 1.05, 0.24, 5.28, Y1 + 0.52, 4.50, cedarDark, { solid: true });
  p.box('ext', 0.90, h1 - 1.05, 0.24, 3.88, Y1 + 2.02, 4.50, whitePlaster, { solid: true });
  p.box('ext', 2.00, 0.50, 0.24, 5.32, Y2 - 0.25, 4.50, whitePlaster, { solid: true });
  p.box('ext', 2.02, 0.08, 0.28, 5.32, Y1 + 1.06, 4.50, timberDark);
  p.box('ext', 2.02, 0.08, 0.28, 5.32, Y2 - 0.50, 4.50, timberDark);
  p.box('ext', 1.96, 1.44, 0.06, 5.32, Y1 + 1.78, 4.50, latticeMat, { uvScale: 0 });
  p.box('ext', 0.80, h1 - 1.05, 0.24, 6.72, Y1 + 2.02, 4.50, whitePlaster, { solid: true });

  p.box('ext', 7.75, 1.05, 0.24, 3.25, Y1 + 0.52, -4.50, cedarDark, { solid: true });
  p.box('ext', 7.75, h1 - 1.05, 0.24, 3.25, Y1 + 2.02, -4.50, agedTimber, { solid: true });
  p.box('ext', 0.24, 1.05, 9.06, 7.10, Y1 + 0.52, 0, cedarDark, { solid: true });
  p.box('ext', 0.24, h1 - 1.05, 9.06, 7.10, Y1 + 2.02, 0, agedTimber, { solid: true });

  // East 1F Farmhouse Furnishings (Kamado Stone Stove, Kitchen, Low Dining Table, Tansu!)
  p.box('int', 1.45, 0.82, 0.92, 0.55, Y1 + 0.41, -3.86, cutStone, { solid: true }); // Stone kamado hearth!
  p.box('int', 2.05, 0.92, 0.64, 2.85, Y1 + 0.46, -4.02, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 1.50, 0.36, 0.92, 2.45, Y1 + 0.20, -1.25, timberDark, { solid: true });
  p.box('int', 0.60, 0.07, 0.60, 2.45, Y1 + 0.07, -2.05, zabutonMat, { uvScale: 0 });
  p.box('int', 0.60, 0.07, 0.60, 2.45, Y1 + 0.07, -0.45, zabutonMat, { uvScale: 0 });
  p.box('int', 0.54, 1.48, 1.40, -0.10, Y1 + 0.74, -0.85, tansuMat, { solid: true, uvScale: 0 });

  // 1F -> 2F Farmhouse Staircase along East Wall (X = +5.75, Z: +2.40 -> -1.95, Y1 -> Y2!)
  p.stairRun('int', {
    x0: 5.75, z0: 2.40, x1: 5.75, z1: -1.95, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.15, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: true, railRight: false, closedRisers: false, guardLeft: true, guardRight: false,
  });

  // =========================================================================
  // 3. 2F: FIREPROOF WHITE-WALL KURA UPPER LOFT + FARMHOUSE ZASHIKI + 10m HARVEST BALCONY
  // =========================================================================
  const h2 = Y3 - Y2; // 2.95m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs (cutout for 1F->2F stair: X ∈ [+5.05, +6.98], Z ∈ [-2.02, +2.48])
  p.box('int', 12.16, 0.16, 9.00, -1.02, Y2 - 0.06, 0, oakFloor);           // Main X∈[-7.10,+5.06]
  p.box('int', 2.08, 0.16, 2.52, 6.08, Y2 - 0.06, -3.26, oakFloor);         // NE Arrival Z∈[-4.50,-2.00]
  p.box('int', 2.08, 0.16, 2.04, 6.08, Y2 - 0.06, 3.48, oakFloor);          // SE Strip Z∈[+2.46,+4.50]
  p.box('int', 5.20, 0.04, 6.40, 2.25, Y2 + 0.03, 0.45, tatamiPlain);       // East 2F 10-mat Zashiki
  p.collider(-7.10, 5.05, Y2 - 0.16, Y2 + 0.02, -4.50, 4.50);
  p.collider(5.05, 7.10, Y2 - 0.16, Y2 + 0.02, -4.50, -2.02);
  p.collider(5.05, 7.10, Y2 - 0.16, Y2 + 0.02, 2.48, 4.50);
  p.floor(-6.98, 5.02, -4.38, 4.46, Y2 + 0.04);
  p.floor(4.96, 6.98, -4.38, -1.96, Y2 + 0.04);
  p.floor(4.96, 6.98, 2.44, 4.40, Y2 + 0.04);

  // 2F Stairwell Guard Railings
  p.kouranRailing('int', 5.05, -2.02, 5.05, 2.48, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', 5.05, 2.48, 6.98, 2.48, Y2, 0.94, timberDark, 0.48);

  // ★ 2F SOUTH HARVEST DRYING BALCONY (X ∈ [-1.20, +6.95], Z ∈ [+4.50, +5.65])!
  p.box('ext', 8.20, 0.16, 1.20, 2.88, Y2 - 0.04, 5.08, warmFloor);
  p.kouranRailing('ext', -1.20, 5.64, 6.95, 5.64, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('ext', -1.20, 4.50, -1.20, 5.64, Y2, 0.94, timberDark, 0.52);
  p.kouranRailing('ext', 6.95, 4.50, 6.95, 5.64, Y2, 0.94, timberDark, 0.52);
  p.floor(-1.12, 6.85, 4.42, 5.56, Y2 + 0.04);

  // 2F Exterior Walls — West Upper Kura is Thick Fireproof White Shikkui (土蔵白壁!), East is Shinkabe!
  p.box('ext', 6.55, h2, 0.30, -3.82, mid2, 4.50, whitePlaster, { solid: true }); // Thick fireproof Kura front!
  p.box('ext', 1.45, 0.90, 0.12, -3.85, Y2 + 1.65, 4.66, timberDark);             // Kura fire-shutter window accent
  p.box('ext', 1.80, h2, 0.22, 0.30, mid2, 4.50, whitePlaster, { solid: true });
  // 2F Balcony Doorway X ∈ [+1.20, +3.00]
  p.box('ext', 1.84, 0.68, 0.22, 2.10, Y3 - 0.34, 4.50, whitePlaster, { solid: true });
  p.box('ext', 1.86, 0.09, 0.26, 2.10, Y3 - 0.68, 4.50, timberDark);
  p.box('ext', 4.15, 0.92, 0.22, 5.06, Y2 + 0.46, 4.50, whitePlaster, { solid: true });
  p.box('ext', 1.05, h2 - 0.92, 0.22, 3.50, Y2 + 1.94, 4.50, whitePlaster, { solid: true });
  p.box('ext', 2.05, 0.54, 0.22, 5.05, Y3 - 0.27, 4.50, whitePlaster, { solid: true });
  p.box('ext', 2.08, 0.08, 0.26, 5.05, Y2 + 0.94, 4.50, timberDark);
  p.box('ext', 2.08, 0.08, 0.26, 5.05, Y3 - 0.54, 4.50, timberDark);
  p.box('ext', 2.00, 1.46, 0.06, 5.05, Y2 + 1.68, 4.50, glassMat, { uvScale: 0 });
  p.box('ext', 1.08, h2 - 0.92, 0.22, 6.60, Y2 + 1.94, 4.50, whitePlaster, { solid: true });

  p.box('ext', 14.25, h2, 0.26, 0, mid2, -4.50, whitePlaster, { solid: true });
  p.box('ext', 0.30, h2, 9.06, -7.10, mid2, 0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 9.06, 7.10, mid2, 0, whitePlaster, { solid: true });

  // 2F Fireproof Kura Partition Wall at X = -0.60 with wide 1.75m Vault Opening Z ∈ [-1.25, +0.50]!
  p.box('int', 0.26, h2, 3.25, -0.60, mid2, -2.88, whitePlaster, { solid: true });
  p.box('int', 0.26, 0.68, 1.78, -0.60, Y3 - 0.34, -0.38, whitePlaster, { solid: true });
  p.box('int', 0.30, 0.09, 1.82, -0.60, Y3 - 0.68, -0.38, timberDark);
  p.box('int', 0.26, h2, 4.02, -0.60, mid2, 2.50, whitePlaster, { solid: true });

  // 2F Furnishings (Upper Kura Heirlooms & East Living Zashiki)
  p.box('int', 0.56, 1.50, 1.55, -6.52, Y2 + 0.76, -2.65, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 0.56, 1.50, 1.55, -6.52, Y2 + 0.76, 1.65, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 1.65, 0.88, 0.86, -3.85, Y2 + 0.44, -3.55, coarseCanvas, { solid: true });
  p.box('int', 1.45, 1.15, 0.54, 3.45, Y2 + 0.58, -3.95, dresserMat, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 1.80, 0.54, 1.65, Y2 + 0.90, -4.02, cabMat, { solid: true, uvScale: 0 });

  // 2F -> 3F Silkworm Attic Staircase (ENTIRELY inside East 2F & 3F footprint: X = +1.35, Z: +2.15 -> -1.85!)
  p.stairRun('int', {
    x0: 1.35, z0: 2.15, x1: 1.35, z1: -1.85, y0: Y2 + 0.04, y1: Y3 + 0.04,
    width: 1.12, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: true, railRight: true, closedRisers: false, guardLeft: true, guardRight: true,
  });

  // =========================================================================
  // 4. 3F: SILKWORM & EXPOSED-RAFTER ROOF-TRUSS ATTIC (10.8m x 6.2m, Y3 = +7.05m)
  // =========================================================================
  const h3 = YTOP - Y3; // 2.60m
  const mid3 = Y3 + h3 * 0.5;

  // 3F Floor Slabs (cutout for 2F->3F stair: X ∈ [+0.70, +2.00], Z ∈ [-1.92, +2.25])
  p.box('int', 6.12, 0.16, 6.20, -2.35, Y3 - 0.06, 0, agedTimber);         // West Silkworm Loft X∈[-5.40,+0.70]
  p.box('int', 3.42, 0.16, 6.20, 3.71, Y3 - 0.06, 0, agedTimber);          // East Silkworm Loft X∈[+2.00,+5.40]
  p.box('int', 1.34, 0.16, 1.22, 1.35, Y3 - 0.06, -2.50, agedTimber);      // North Arrival Strip Z∈[-3.10,-1.90]
  p.box('int', 1.34, 0.16, 0.88, 1.35, Y3 - 0.06, 2.67, agedTimber);       // South Strip Z∈[+2.24,+3.10]
  p.collider(-5.40, 0.70, Y3 - 0.16, Y3 + 0.02, -3.10, 3.10);
  p.collider(2.00, 5.40, Y3 - 0.16, Y3 + 0.02, -3.10, 3.10);
  p.collider(0.70, 2.00, Y3 - 0.16, Y3 + 0.02, -3.10, -1.92);
  p.collider(0.70, 2.00, Y3 - 0.16, Y3 + 0.02, 2.25, 3.10);
  p.floor(-5.28, 0.74, -2.98, 2.98, Y3 + 0.04);
  p.floor(1.96, 5.28, -2.98, 2.98, Y3 + 0.04);
  p.floor(0.68, 2.02, -2.98, -1.86, Y3 + 0.04);
  p.floor(0.68, 2.02, 2.20, 2.98, Y3 + 0.04);

  p.kouranRailing('int', 0.70, -1.92, 0.70, 2.25, Y3, 0.92, timberDark, 0.56);
  p.kouranRailing('int', 2.00, -1.92, 2.00, 2.25, Y3, 0.92, timberDark, 0.56);
  p.kouranRailing('int', 0.70, 2.25, 2.00, 2.25, Y3, 0.92, timberDark, 0.45);

  // 3F Exterior Walls (Ventilated Silkworm Loft with Wide Valley Louvers & Shoji Transoms!)
  p.box('ext', 10.85, 0.86, 0.22, 0, Y3 + 0.43, 3.10, agedTimber, { solid: true });
  p.box('ext', 2.40, h3 - 0.86, 0.22, -4.22, Y3 + 1.73, 3.10, whitePlaster, { solid: true });
  p.box('ext', 6.08, 0.44, 0.22, 0, YTOP - 0.22, 3.10, whitePlaster, { solid: true });
  p.box('ext', 6.10, 0.08, 0.26, 0, Y3 + 0.88, 3.10, timberDark);
  p.box('ext', 6.10, 0.08, 0.26, 0, YTOP - 0.44, 3.10, timberDark);
  p.box('ext', 6.04, 1.28, 0.06, 0, Y3 + 1.52, 3.10, shojiMat, { uvScale: 0 });
  p.box('ext', 2.40, h3 - 0.86, 0.22, 4.22, Y3 + 1.73, 3.10, whitePlaster, { solid: true });
  p.box('ext', 10.85, h3, 0.22, 0, mid3, -3.10, whitePlaster, { solid: true });
  p.box('ext', 0.22, h3, 6.24, -5.40, mid3, 0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h3, 6.24, 5.40, mid3, 0, whitePlaster, { solid: true });

  // 3F Silkworm Drying Racks (養蚕棚) & Exposed Heavy Tie-Beams!
  for (const bx of [-3.6, -1.2, 2.2, 4.2]) {
    p.box('int', 0.22, 0.24, 6.00, bx, YTOP - 0.14, 0, timberDark);
  }
  for (const rx of [-3.65, 3.55]) {
    // 3-tier woven silkworm tray frame
    p.box('int', 1.85, 0.05, 1.15, rx, Y3 + 0.65, 0.35, wovenTray, { solid: true });
    p.box('int', 1.85, 0.05, 1.15, rx, Y3 + 1.25, 0.35, wovenTray);
    p.box('int', 1.85, 0.05, 1.15, rx, Y3 + 1.85, 0.35, wovenTray);
    for (const dx of [-0.88, 0.88]) {
      for (const dz of [-0.52, 0.52]) {
        p.box('int', 0.08, 1.92, 0.08, rx + dx, Y3 + 0.96, 0.35 + dz, timberDark);
      }
    }
  }
  p.box('int', 1.75, 0.85, 0.72, -3.15, Y3 + 0.44, -2.55, rackMat, { solid: true, uvScale: 0 });

  // =========================================================================
  // 5. CHARCOAL FARMHOUSE DOUBLE-TIER HON-GAWARA & KOSHIYANE VENTILATION ROOF!
  // =========================================================================
  // A. 1F Front Porch Kawara Eave
  p.kawaraSlope('ext', {
    bottomWidth: 8.20, run: 1.55, pitch: 0.35,
    ridgeX: 3.30, ridgeY: Y2 + 0.08, ridgeZ: 4.46, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });

  // B. 2F Deep Farmhouse Skirt Eaves wrapping the 3F Silkworm Attic (all 4 sides!)
  const skPitch = 0.40;
  p.kawaraSlope('ext', {
    topWidth: 11.0, bottomWidth: 15.6, run: 2.85, pitch: skPitch,
    ridgeX: 0, ridgeY: Y3 + 0.56, ridgeZ: 3.08, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 11.0, bottomWidth: 15.6, run: 2.40, pitch: skPitch,
    ridgeX: 0, ridgeY: Y3 + 0.48, ridgeZ: -3.08, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 6.4, bottomWidth: 10.6, run: 2.55, pitch: skPitch,
    ridgeX: 5.38, ridgeY: Y3 + 0.50, ridgeZ: 0, downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 6.4, bottomWidth: 10.6, run: 2.55, pitch: skPitch,
    ridgeX: -5.38, ridgeY: Y3 + 0.50, ridgeZ: 0, downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });

  // C. 3F Main Silkworm Attic Steep Kirizuma Roof + Raised Koshiyane Ventilation Monitor!
  const topPitch = 0.50;
  const topRun = 4.25;
  const topRidgeY = YTOP + topRun * Math.tan(topPitch) - 0.36; // ~11.61m
  p.kawaraSlope('ext', {
    bottomWidth: 12.6, run: topRun, pitch: topPitch,
    ridgeX: 0, ridgeY: topRidgeY, ridgeZ: 0, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.36,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 12.6, run: topRun, pitch: topPitch,
    ridgeX: 0, ridgeY: topRidgeY, ridgeZ: 0, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.36,
  });
  const topGableH = topRidgeY - YTOP - 0.06;
  p.gablePrism('ext', 6.24, topGableH, 0.22, -5.40, YTOP, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 6.24, topGableH, 0.22, 5.40, YTOP, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.kawaraRidge('ext', -6.20, topRidgeY + 0.04, 0, 6.20, topRidgeY + 0.04, 0, kawaraRidge, oniMat, {
    scale: 1.05, courses: 2, oniStart: true, oniEnd: true,
  });

  // ★ Crown Koshiyane (越屋根 — Silkworm Loft Ridge Ventilation Lantern!)
  const koshiBaseY = topRidgeY - 0.10;
  const koshiTopY = koshiBaseY + 0.92;
  p.box('ext', 5.40, 0.88, 1.50, 0, koshiBaseY + 0.44, 0, louverMat);
  p.kawaraSlope('ext', {
    bottomWidth: 6.30, run: 1.25, pitch: 0.40,
    ridgeX: 0, ridgeY: koshiTopY + 0.46, ridgeZ: 0, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.34,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 6.30, run: 1.25, pitch: 0.40,
    ridgeX: 0, ridgeY: koshiTopY + 0.46, ridgeZ: 0, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.34,
  });
  p.kawaraRidge('ext', -3.05, koshiTopY + 0.50, 0, 3.05, koshiTopY + 0.50, 0, kawaraRidge, oniMat, {
    scale: 0.78, courses: 1, oniStart: true, oniEnd: true,
  });

  return p.build({
    id: 'H16',
    name: '田辺家（半地下石倉・養蚕大屋根の明治豪農三階家）',
    subtitle: '半地下石倉(5段下降)・重鉄防火扉・高床土間竈・2F収穫縁側・3F養蚕屋根裏＆越屋根',
    category: 'house',
    builtYear: 1878,
    abandonedYear: 1985,
    stories: 3,
    floorElevations: [YC, Y1, Y2, Y3],
    entryLocal: [2.4, 0.0, 9.2],
    entryLookLocalYaw: 0,
  });
}
