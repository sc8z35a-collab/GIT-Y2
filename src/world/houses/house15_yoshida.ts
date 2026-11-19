import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H15: 吉田家（1880年明治本瓦本屋 × 1958年昭和トタン車庫増築・空中渡り廊下二棟邸）— 2階建・総幅14.6m
 * 中段本通り東脇（標高252m・H14村田家の北隣）。
 * 西棟は明治13年築の焼杉＆白漆喰・いぶし本瓦切妻の本格二階民家、東棟は昭和33年に増築された
 * 半開き巻き上げシャッター付コンクリート車庫＋灰トタン＆亜鉛鉄板外壁の2F昭和居室（片流れトタン屋根）。
 * 二棟の間を1F石畳通り抜け通路と、2F両面ガラス張りの「空中渡り廊下（スカイブリッジ）」で連結し、
 * 西棟木階段→2Fガラス渡り廊下→東棟鉄骨階段→半開きシャッター車庫へと完全周回できる立体廃村建築！
 */
export function buildHouse15Yoshida(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- West Meiji Wing Materials ---
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.90, bumpScale: 0.05 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xf4f0e6 });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.83, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.80, bumpScale: 0.03 });
  const cobbleFloor = catalog.getMaterial('cobblestone', { roughness: 0.92, bumpScale: 0.06 });
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiPlain = catalog.getMaterial('tatami_plain', { roughness: 0.92, bumpScale: 0.04 });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.90, transparent: true });
  const latticeMat = catalog.getMaterial('carved_wood_lattice', { roughness: 0.86, bumpScale: 0.05 });
  const clearGlass = catalog.getMaterial('window_frosted_wood', { roughness: 0.22, opacity: 0.22, transparent: true, tint: 0xdcebf4 });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.78, bumpScale: 0.03 });
  const cabMat = catalog.getMaterial('kitchen_cabinet', { roughness: 0.82, bumpScale: 0.03 });

  // --- East 1958 Showa Corrugated-Tin & Concrete Garage Annex Materials (brand-new textures!) ---
  const stainedConc = catalog.getMaterial('stained_concrete', { roughness: 0.92, bumpScale: 0.05 });
  const rustConc = catalog.getMaterial('rust_streaked_concrete', { roughness: 0.92, bumpScale: 0.06 });
  const tireConc = catalog.getMaterial('tire_track_concrete', { roughness: 0.90, bumpScale: 0.05 });
  const rollShutter = catalog.getMaterial('roll_shutter', { roughness: 0.56, metalness: 0.55, bumpScale: 0.05 });
  const rustGreenDoor = catalog.getMaterial('door_rusted_green', { roughness: 0.74, metalness: 0.36, bumpScale: 0.04 });
  const corrGray = catalog.getMaterial('corrugated_gray', { roughness: 0.68, metalness: 0.45, bumpScale: 0.06, doubleSide: true });
  const galvZinc = catalog.getMaterial('galvanized_zinc', { roughness: 0.54, metalness: 0.60, bumpScale: 0.04, doubleSide: true });
  const rustBolts = catalog.getMaterial('rusted_plate_bolts', { roughness: 0.74, metalness: 0.48, bumpScale: 0.05 });
  const peelSteel = catalog.getMaterial('peeling_paint_steel', { roughness: 0.74, metalness: 0.40, bumpScale: 0.04 });
  const valvePipes = catalog.getMaterial('mine_valve_pipes', { roughness: 0.62, metalness: 0.55, bumpScale: 0.06 });
  const greenMat = catalog.getMaterial('green_textured_mat', { roughness: 0.94, bumpScale: 0.05 });
  const grayFabric = catalog.getMaterial('woven_fabric_gray', { roughness: 0.94, bumpScale: 0.04 });
  const coarseCanvas = catalog.getMaterial('coarse_canvas', { roughness: 0.95, bumpScale: 0.05, doubleSide: true });
  const boltedSteel = catalog.getMaterial('dark_bolted_steel', { roughness: 0.62, metalness: 0.60, bumpScale: 0.04 });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.88, bumpScale: 0.04 });
  const dresserMat = catalog.getMaterial('wooden_dresser', { roughness: 0.82, bumpScale: 0.03 });
  const bookcaseMat = catalog.getMaterial('full_bookcase', { roughness: 0.84, bumpScale: 0.04 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.92, bumpScale: 0.03 });

  // --- Classic Deep-Slate Ibushi Hon-gawara (West Meiji Main House & Skybridge Roof) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.72, metalness: 0.18, bumpScale: 0.06, tint: 0xa0aab4 });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.68, metalness: 0.22, bumpScale: 0.05, tint: 0x8b95a0 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.62, metalness: 0.28, tint: 0x76808c });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.54, metalness: 0.38, tint: 0x646e78 });

  const Y1 = 0.45;
  const Y2 = 3.55;
  const YTOP = 6.50;

  // =========================================================================
  // 1. TWIN GROUNDED FOUNDATIONS, ENTRY STEPS & GARAGE CONCRETE APRON
  // =========================================================================
  p.box('ext', 8.6, 3.55, 9.2, -3.20, Y1 - 1.79, 0, cutStone);            // West Meiji stone plinth
  p.box('ext', 1.8, 3.35, 8.6, 1.60, Y1 - 1.70, 0, cobbleFloor);          // Center breezeway stone base
  p.box('ext', 5.4, 3.55, 8.6, 4.80, Y1 - 1.79, 0, stainedConc);          // East Showa concrete garage slab

  // West Meiji Front Granite Steps (X = -3.00)
  p.stoneSteps('ext', -3.00, 5.75, 4.55, -0.08, Y1, 2.35, 4, stepStone);
  p.floor(-4.3, -1.7, 4.2, 4.9, Y1 + 0.04);
  // Center Breezeway Steps (X = +1.60)
  p.stoneSteps('ext', 1.60, 5.45, 4.25, -0.08, Y1, 1.35, 3, cobbleFloor);
  // East Showa Garage Concrete Drive Ramp (X = +4.80, width 2.9m)
  p.stoneSteps('ext', 4.80, 5.45, 4.18, -0.08, Y1, 2.95, 3, tireConc);
  p.floor(3.3, 6.3, 3.9, 4.5, Y1 + 0.04);

  // =========================================================================
  // 2. 1F WEST MEIJI HOUSE (X∈[-7.3,+0.9]) + BREEZEWAY + EAST SHOWA GARAGE (X∈[+2.3,+7.3])
  // =========================================================================
  const h1 = Y2 - Y1; // 3.10m
  const mid1 = Y1 + h1 * 0.5;

  // 1F Floors
  p.box('int', 8.0, 0.12, 8.6, -3.20, Y1 - 0.04, 0, warmFloor);
  p.box('int', 5.2, 0.04, 5.4, -2.10, Y1 + 0.03, -1.25, tatamiBord);      // Meiji 8-mat zashiki
  p.box('int', 1.15, 0.03, 0.70, -3.00, Y1 + 0.04, 4.00, coirMat, { uvScale: 0 });
  p.box('ext', 1.50, 0.08, 8.5, 1.60, Y1 - 0.02, 0, cobbleFloor);         // Central open cobblestone breezeway
  p.box('int', 4.9, 0.12, 8.0, 4.80, Y1 - 0.04, 0, tireConc);             // Showa tire-tracked concrete garage floor!
  p.floor(-7.15, 7.15, -4.25, 4.40, Y1 + 0.04);

  // --- WEST MEIJI HOUSE 1F WALLS (X ∈ [-7.30, +0.90], Z ∈ [-4.40, +4.40]) ---
  // Front (+Z = +4.40): 2.0m door X ∈ [-4.00, -2.00]
  p.box('ext', 3.34, 1.20, 0.26, -5.65, Y1 + 0.60, 4.40, cedarDark, { solid: true });
  p.box('ext', 3.34, h1 - 1.20, 0.26, -5.65, Y1 + 2.15, 4.40, whitePlaster, { solid: true });
  p.box('ext', 2.04, 0.72, 0.26, -3.00, Y1 + 2.74, 4.40, whitePlaster, { solid: true });
  p.box('ext', 1.00, 2.30, 0.06, -4.35, Y1 + 1.15, 4.20, shojiMat, { uvScale: 0 });
  p.box('ext', 2.94, 1.20, 0.26, -0.55, Y1 + 0.60, 4.40, cedarDark, { solid: true });
  p.box('ext', 0.65, h1 - 1.20, 0.26, -1.70, Y1 + 2.15, 4.40, whitePlaster, { solid: true });
  p.box('ext', 1.65, 0.56, 0.26, -0.55, Y1 + 2.82, 4.40, whitePlaster, { solid: true });
  p.box('ext', 1.60, 1.32, 0.07, -0.55, Y1 + 1.88, 4.40, latticeMat, { uvScale: 0 });
  p.box('ext', 0.65, h1 - 1.20, 0.26, 0.60, Y1 + 2.15, 4.40, whitePlaster, { solid: true });
  // Back (-Z = -4.40) & West (-X = -7.30)
  p.box('ext', 8.25, 1.20, 0.26, -3.20, Y1 + 0.60, -4.40, cedarDark, { solid: true });
  p.box('ext', 8.25, h1 - 1.20, 0.26, -3.20, Y1 + 2.15, -4.40, whitePlaster, { solid: true });
  p.box('ext', 0.26, 1.20, 8.85, -7.30, Y1 + 0.60, 0, cedarDark, { solid: true });
  p.box('ext', 0.26, h1 - 1.20, 8.85, -7.30, Y1 + 2.15, 0, whitePlaster, { solid: true });
  // East wall of Meiji House facing breezeway (X = +0.90): 1.60m pass-through doorway Z ∈ [-0.80, +0.80]!
  p.box('ext', 0.26, h1, 3.64, 0.90, mid1, -2.60, whitePlaster, { solid: true });
  p.box('ext', 0.26, 0.72, 1.65, 0.90, Y1 + 2.74, 0.0, whitePlaster, { solid: true });
  p.box('ext', 0.26, h1, 3.64, 0.90, mid1, 2.60, whitePlaster, { solid: true });

  // West Meiji 1F Furnishings
  p.box('int', 1.65, 0.38, 0.98, -2.25, Y1 + 0.20, -1.15, timberDark, { solid: true });
  p.box('int', 0.62, 0.08, 0.62, -2.25, Y1 + 0.08, -2.05, zabutonMat, { uvScale: 0 });
  p.box('int', 0.62, 0.08, 0.62, -2.25, Y1 + 0.08, -0.25, zabutonMat, { uvScale: 0 });
  p.box('int', 1.55, 1.48, 0.52, -0.25, Y1 + 0.75, -3.95, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 1.85, 0.92, 0.62, -3.55, Y1 + 0.46, -3.98, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 0.56, 1.85, 1.25, -4.95, Y1 + 0.94, -3.45, cabMat, { solid: true, uvScale: 0 });

  // 1F -> 2F West Meiji Staircase (X = -6.15, Z: +2.35 -> -1.65, Y1 -> Y2)
  p.stairRun('int', {
    x0: -6.15,
    z0: 2.35,
    x1: -6.15,
    z1: -1.65,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.15,
    steps: 14,
    treadMat: timberDark,
    stringerMat: timberDark,
    railMat: warmFloor,
    railLeft: false,
    railRight: true,
    closedRisers: true,
    guardLeft: false,
    guardRight: true,
  });

  // --- EAST 1958 SHOWA CONCRETE GARAGE ANNEX 1F WALLS (X ∈ [+2.30, +7.30], Z ∈ [-4.10, +4.10]) ---
  // Front (+Z = +4.10): ★ Wide 2.80m HALF-RAISED ROLL-SHUTTER Garage Opening (X ∈ [+3.40, +6.20])!
  p.box('ext', 1.14, h1, 0.26, 2.85, mid1, 4.10, rustConc, { solid: true });
  // Half-open Showa metal roll-shutter hanging from top down to Y1 + 2.28m (walk straight underneath!)
  p.box('ext', 2.86, 0.84, 0.16, 4.80, Y1 + 2.68, 4.12, rollShutter, { solid: true, uvScale: 0 });
  p.box('ext', 3.04, 0.34, 0.34, 4.80, Y1 + 3.04, 4.24, rustBolts); // Exterior shutter housing drum!
  p.box('ext', 1.14, h1, 0.26, 6.75, mid1, 4.10, rustConc, { solid: true });
  // Back (-Z = -4.10) & East (+X = +7.30)
  p.box('ext', 5.05, h1, 0.26, 4.80, mid1, -4.10, stainedConc, { solid: true });
  p.box('ext', 0.26, h1, 8.25, 7.30, mid1, 0, rustConc, { solid: true });
  // West wall of Showa Garage facing breezeway (X = +2.30): 1.60m side doorway Z ∈ [-0.80, +0.80] with ajar rusted green door!
  p.box('ext', 0.26, h1, 3.34, 2.30, mid1, -2.45, stainedConc, { solid: true });
  p.box('ext', 0.26, 0.72, 1.65, 2.30, Y1 + 2.74, 0.0, stainedConc, { solid: true });
  p.box('ext', 0.26, h1, 3.34, 2.30, mid1, 2.45, stainedConc, { solid: true });
  p.box('ext', 0.08, 2.24, 1.10, 2.62, Y1 + 1.12, 1.25, rustGreenDoor, { ry: 0.45, uvScale: 0 }); // Ajar rusted green steel door!

  // East Showa Garage Industrial Props
  p.box('int', 1.65, 1.85, 0.56, 3.85, Y1 + 0.94, -3.62, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 1.15, 1.25, 0.52, 2.95, Y1 + 0.64, 2.55, peelSteel, { solid: true, uvScale: 0 });
  p.box('int', 0.54, 1.45, 1.65, 2.75, Y1 + 0.74, -2.25, valvePipes, { solid: true, uvScale: 0 });

  // 1F -> 2F East Showa Garage Industrial Steel Staircase (X = +6.35, Z: +1.95 -> -1.95, Y1 -> Y2!)
  p.stairRun('int', {
    x0: 6.35,
    z0: 1.95,
    x1: 6.35,
    z1: -1.95,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.06,
    steps: 14,
    treadMat: oakFloor,
    stringerMat: boltedSteel,
    railMat: boltedSteel,
    railLeft: true,
    railRight: false,
    closedRisers: false,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 3. 2F: MEIJI TATAMI FLOOR + ★ ELEVATED GLASS SKYBRIDGE + SHOWA CORRUGATED-TIN ANNEX!
  // =========================================================================
  const h2 = YTOP - Y2; // 2.95m
  const mid2 = Y2 + h2 * 0.5;

  // --- WEST MEIJI 2F FLOOR SLABS (cutout: X ∈ [-7.20, -5.42], Z ∈ [-1.72, +2.45]) ---
  p.box('int', 6.32, 0.16, 8.80, -2.26, Y2 - 0.06, 0, warmFloor);         // X∈[-5.42,+0.90]
  p.box('int', 1.88, 0.16, 2.72, -6.36, Y2 - 0.06, -3.04, warmFloor);     // NW Landing
  p.box('int', 1.88, 0.16, 1.96, -6.36, Y2 - 0.06, 3.42, warmFloor);      // SW Strip
  p.box('int', 5.2, 0.04, 7.6, -2.1, Y2 + 0.03, 0, tatamiPlain);          // West 2F Meiji tatami suite
  p.collider(-5.42, 0.90, Y2 - 0.16, Y2 + 0.02, -4.40, 4.40);
  p.collider(-7.30, -5.42, Y2 - 0.16, Y2 + 0.02, -4.40, -1.72);
  p.collider(-7.30, -5.42, Y2 - 0.16, Y2 + 0.02, 2.46, 4.40);
  p.floor(-5.38, 0.95, -4.28, 4.35, Y2 + 0.04);
  p.floor(-7.18, -5.36, -4.28, -1.68, Y2 + 0.04);
  p.floor(-7.18, -5.36, 2.42, 4.28, Y2 + 0.04);

  // West 2F Stairwell guard rails
  p.kouranRailing('int', -5.42, -1.70, -5.42, 2.46, Y2, 0.94, timberDark, 0.54);
  p.kouranRailing('int', -7.18, 2.46, -5.42, 2.46, Y2, 0.94, timberDark, 0.50);

  // West 2F Front Balcony (X ∈ [-6.8, +0.4], Z ∈ [+4.40, +5.35])
  p.box('ext', 7.30, 0.16, 1.00, -3.20, Y2 - 0.04, 4.88, warmFloor);
  p.kouranRailing('ext', -6.82, 5.34, 0.42, 5.34, Y2, 0.94, timberDark, 0.54);
  p.kouranRailing('ext', -6.82, 4.40, -6.82, 5.34, Y2, 0.94, timberDark, 0.54);
  p.kouranRailing('ext', 0.42, 4.40, 0.42, 5.34, Y2, 0.94, timberDark, 0.54);
  p.floor(-6.72, 0.34, 4.32, 5.26, Y2 + 0.04);

  // West 2F Exterior Walls (White Plaster + Front Balcony Door X ∈ [-3.85, -2.15] + Skybridge Opening at X = +0.90!)
  p.box('ext', 3.48, h2, 0.22, -5.56, mid2, 4.40, whitePlaster, { solid: true });
  p.box('ext', 1.74, 0.68, 0.22, -3.00, Y2 + 2.61, 4.40, whitePlaster, { solid: true });
  p.box('ext', 3.08, h2, 0.22, -0.62, mid2, 4.40, whitePlaster, { solid: true });
  p.box('ext', 8.25, h2, 0.22, -3.20, mid2, -4.40, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 8.85, -7.30, mid2, 0, whitePlaster, { solid: true });
  // East wall of West 2F opening cleanly into 2F Skybridge (Z ∈ [-1.10, +1.10] = 2.20m wide!)
  p.box('ext', 0.22, h2, 3.32, 0.90, mid2, -2.75, whitePlaster, { solid: true });
  p.box('ext', 0.22, 0.66, 2.24, 0.90, Y2 + 2.62, 0.0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 3.32, 0.90, mid2, 2.75, whitePlaster, { solid: true });
  // West 2F Furnishings
  p.box('int', 1.65, 0.34, 2.10, -2.45, Y2 + 0.21, -2.45, futonMat, { solid: true, uvScale: 0 });
  p.box('int', 1.25, 1.15, 0.50, -0.35, Y2 + 0.58, -3.95, dresserMat, { solid: true, uvScale: 0 });

  // ★ 2F ELEVATED GLASS SKYBRIDGE (空中渡り廊下: X ∈ [+0.90, +2.30], Z ∈ [-1.50, +1.50], Y = Y2!)
  p.box('ext', 1.65, 0.22, 3.10, 1.60, Y2 - 0.08, 0, timberDark);         // Heavy timber bridge deck beams
  p.box('int', 1.60, 0.04, 2.95, 1.60, Y2 + 0.03, 0, oakFloor);
  p.collider(0.85, 2.35, Y2 - 0.20, Y2 + 0.02, -1.50, 1.50);
  p.floor(0.82, 2.40, -1.38, 1.38, Y2 + 0.04);
  // Panoramic South (+Z = +1.50) & North (-Z = -1.50) Skybridge Glass Curtain Walls!
  for (const bz of [-1.50, 1.50]) {
    p.box('ext', 1.55, 0.85, 0.16, 1.60, Y2 + 0.42, bz, cedarDark, { solid: true });
    p.box('ext', 1.50, 1.52, 0.06, 1.60, Y2 + 1.60, bz, clearGlass, { uvScale: 0 });
    p.box('ext', 1.55, 0.46, 0.16, 1.60, Y2 + 2.60, bz, timberDark, { solid: true });
  }
  // Skybridge miniature pitched ibushi kawara roof (Y = YTOP - 0.15)
  p.kawaraSlope('ext', {
    bottomWidth: 1.95,
    run: 1.95,
    pitch: 0.42,
    ridgeX: 1.60,
    ridgeY: YTOP + 0.72,
    ridgeZ: 0,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.36,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 1.95,
    run: 1.95,
    pitch: 0.42,
    ridgeX: 1.60,
    ridgeY: YTOP + 0.72,
    ridgeZ: 0,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.36,
  });

  // --- EAST 1958 SHOWA CORRUGATED-TIN ANNEX 2F (X ∈ [+2.30, +7.30], Z ∈ [-4.10, +4.10]) ---
  // Cutout for East Steel Staircase: X ∈ [+5.68, +7.22], Z ∈ [-2.02, +2.02]
  p.box('int', 3.40, 0.16, 8.20, 4.00, Y2 - 0.06, 0, oakFloor);           // West 2F room X∈[+2.30,+5.70]
  p.box('int', 1.64, 0.16, 2.12, 6.48, Y2 - 0.06, -3.04, oakFloor);       // NE stair arrival landing Z∈[-4.1,-2.0]
  p.box('int', 1.64, 0.16, 2.12, 6.48, Y2 - 0.06, 3.04, oakFloor);        // SE strip Z∈[+2.0,+4.1]
  p.box('int', 3.10, 0.04, 6.80, 4.00, Y2 + 0.03, 0, greenMat);           // Showa green textured floor mat!

  p.collider(2.30, 5.68, Y2 - 0.16, Y2 + 0.02, -4.10, 4.10);
  p.collider(5.68, 7.30, Y2 - 0.16, Y2 + 0.02, -4.10, -2.02);
  p.collider(5.68, 7.30, Y2 - 0.16, Y2 + 0.02, 2.02, 4.10);
  p.floor(2.25, 5.66, -3.98, 3.98, Y2 + 0.04);
  p.floor(5.62, 7.18, -3.98, -1.96, Y2 + 0.04);
  p.floor(5.62, 7.18, 2.00, 3.98, Y2 + 0.04);

  // East 2F Steel Stairwell Guard Railings
  p.kouranRailing('int', 5.68, -2.00, 5.68, 2.02, Y2, 0.94, boltedSteel, 0.54);
  p.kouranRailing('int', 5.68, 2.02, 7.18, 2.02, Y2, 0.94, boltedSteel, 0.50);

  // East 2F Corrugated-Gray & Galvanized-Zinc Exterior Walls!
  // Front (+Z = +4.10) with wide Showa aluminum-style window
  p.box('ext', 5.05, 0.96, 0.20, 4.80, Y2 + 0.48, 4.10, corrGray, { solid: true });
  p.box('ext', 1.15, h2 - 0.96, 0.20, 2.86, Y2 + 1.96, 4.10, corrGray, { solid: true });
  p.box('ext', 2.45, 0.52, 0.20, 4.65, Y2 + 2.69, 4.10, galvZinc, { solid: true });
  p.box('ext', 2.40, 1.48, 0.06, 4.65, Y2 + 1.70, 4.10, clearGlass, { uvScale: 0 });
  p.box('ext', 1.45, h2 - 0.96, 0.20, 6.58, Y2 + 1.96, 4.10, corrGray, { solid: true });
  // Back (-Z = -4.10) & East (+X = +7.30)
  p.box('ext', 5.05, h2, 0.20, 4.80, mid2, -4.10, corrGray, { solid: true });
  p.box('ext', 0.20, h2, 8.25, 7.30, mid2, 0, galvZinc, { solid: true });
  // West wall of East 2F opening cleanly onto 2F Glass Skybridge (Z ∈ [-1.10, +1.10])!
  p.box('ext', 0.20, h2, 3.02, 2.30, mid2, -2.60, corrGray, { solid: true });
  p.box('ext', 0.20, 0.66, 2.24, 2.30, Y2 + 2.62, 0.0, corrGray, { solid: true });
  p.box('ext', 0.20, h2, 3.02, 2.30, mid2, 2.60, corrGray, { solid: true });

  // East 2F Showa Living Annex Furnishings (coarse canvas curtain, gray fabric sofa, bookcase!)
  p.box('int', 1.85, 0.54, 0.80, 4.15, Y2 + 0.28, 3.45, grayFabric, { solid: true });
  p.box('int', 0.52, 1.95, 1.65, 2.75, Y2 + 0.98, 2.45, bookcaseMat, { solid: true, uvScale: 0 });
  p.box('int', 1.55, 2.10, 0.05, 4.10, Y2 + 1.85, -1.65, coarseCanvas, { uvScale: 0 }); // Hanging canvas partition!
  p.box('int', 1.25, 1.12, 0.48, 3.85, Y2 + 0.56, -3.62, dresserMat, { solid: true, uvScale: 0 });

  // =========================================================================
  // 4. CONTRASTING ROOFS: 1880 MEIJI KAWARA KIRIZUMA (WEST) × 1958 SHOWA MONOPITCH TIN (EAST)!
  // =========================================================================
  // A. West Meiji 1F Front Kawara Eave
  p.kawaraSlope('ext', {
    bottomWidth: 8.8,
    run: 1.25,
    pitch: 0.36,
    ridgeX: -3.20,
    ridgeY: Y2 + 0.12,
    ridgeZ: 4.36,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });

  // B. West Meiji Main House Classic Deep-Slate Hon-gawara Kirizuma Roof (X ∈ [-8.1, +1.55], Z ∈ [-5.3, +5.3])
  const wPitch = 0.48;
  const wRun = 5.30;
  const wRidgeY = YTOP + wRun * Math.tan(wPitch) - 0.10; // ~9.14m
  const wCX = -3.20;
  const wBotW = 9.70;
  const wGableH = wRidgeY - YTOP + 0.10;

  p.gablePrism('ext', 8.90, wGableH, 0.24, -7.30, YTOP - 0.04, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 8.90, wGableH, 0.24, 0.90, YTOP - 0.04, 0, whitePlaster, { ry: Math.PI * 0.5 });

  p.kawaraSlope('ext', {
    bottomWidth: wBotW,
    run: wRun,
    pitch: wPitch,
    ridgeX: wCX,
    ridgeY: wRidgeY,
    ridgeZ: 0,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.36,
  });
  p.kawaraSlope('ext', {
    bottomWidth: wBotW,
    run: wRun,
    pitch: wPitch,
    ridgeX: wCX,
    ridgeY: wRidgeY,
    ridgeZ: 0,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.36,
  });
  p.kawaraRidge(
    'ext',
    wCX - wBotW * 0.5 + 0.06,
    wRidgeY + 0.04,
    0,
    wCX + wBotW * 0.5 - 0.06,
    wRidgeY + 0.04,
    0,
    kawaraRidge,
    oniMat,
    { scale: 1.06, courses: 3, oniStart: true, oniEnd: true }
  );

  // ★ C. East 1958 Showa Annex Monopitch Sloped Galvanized & Corrugated-Tin Roof!
  // Slopes cleanly eastward (+X) from YTOP + 1.05m at X=+2.20 down to YTOP - 0.10m at X=+7.90!
  p.box('ext', 0.20, 1.10, 8.25, 2.30, YTOP + 0.50, 0, corrGray);          // West clerestory parapet riser
  p.box('ext', 6.10, 0.12, 9.20, 5.00, YTOP + 0.54, 0, galvZinc, { rz: -0.20 }); // Monopitch zinc roof!
  p.box('ext', 6.12, 0.06, 3.05, 5.00, YTOP + 0.61, -2.6, corrGray, { rz: -0.20 }); // Patched corrugated panel!
  // Exposed sloped steel roof purlins underneath
  for (const pz of [-3.4, -1.1, 1.2, 3.4]) {
    p.box('int', 5.2, 0.14, 0.12, 4.80, YTOP + 0.42, pz, boltedSteel, { rz: -0.20 });
  }

  return p.build({
    id: 'H15',
    name: '吉田家（明治本瓦本屋×昭和トタン車庫・空中渡り廊下邸）',
    subtitle: '1880年本瓦本屋と1958年トタン車庫を2Fガラス渡り廊下で連結',
    category: 'house',
    builtYear: 1880,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1, Y2],
    entryLocal: [-3.0, 0.0, 6.8],
    entryLookLocalYaw: 0,
  });
}
