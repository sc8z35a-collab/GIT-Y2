import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H13: 神谷家（1879年築・鎮守宮守の朱塗社家・千鳥破風三階邸）— 3階建
 * 中段本通り東脇（標高249m）に建つ黒磯岳鎮守宮守の伝統社家屋敷。
 * 独立朱塗「冠木門」（藍染桜暖簾＆小型本瓦切妻屋根）、2層貫通の空抜け苔石「坪庭」中庭、
 * 1F L字雪見縁側＆10畳御神座祭壇の間（大神棚・朱塗鳥居柱・摺りガラス欄間）、
 * 2F 黄土壁の注連縄仕事部屋（未完藁束）＆レトロ緑タイル浴場＆坪庭見下ろし朱塗高欄、
 * 3F 黒磯岳遥拝書斎（網代天井・L字朱塗高欄縁側）、正面「千鳥破風」＆三重黒銅いぶし本瓦入母屋屋根。
 */
export function buildHouse13Kamiya(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Exterior & Traditional Shrine-Keeper Materials (all verified in manifest.json) ---
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.90, bumpScale: 0.05 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xf7f2e8 });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const vermilionWood = catalog.getMaterial('faded_red_wood', { roughness: 0.80, bumpScale: 0.04, tint: 0xd96652 });
  const slatScreen = catalog.getMaterial('wood_slat_screen', { roughness: 0.85, bumpScale: 0.05 });
  const sakuraNoren = catalog.getMaterial('indigo_sakura_fabric', { roughness: 0.92, bumpScale: 0.02, doubleSide: true });
  const latticeMat = catalog.getMaterial('carved_wood_lattice', { roughness: 0.86, bumpScale: 0.05 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.83, bumpScale: 0.04 });

  // --- Interior, Tsuboniwa & Shrine Materials ---
  const yellowWall = catalog.getMaterial('peeling_yellow_wall', { roughness: 0.92, bumpScale: 0.04 });
  const transomGlass = catalog.getMaterial('frosted_transom', { roughness: 0.42, opacity: 0.62, transparent: true });
  const ajiroCeil = catalog.getMaterial('woven_screen_brown', { roughness: 0.90, bumpScale: 0.05 });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });
  const strawMat = catalog.getMaterial('thatch_straw', { roughness: 0.94, bumpScale: 0.07 });
  const greenTile = catalog.getMaterial('green_tile', { roughness: 0.46, bumpScale: 0.04 });
  const creamTile = catalog.getMaterial('cream_ceramic_tile', { roughness: 0.48, bumpScale: 0.03 });
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiPlain = catalog.getMaterial('tatami_plain', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiGreen = catalog.getMaterial('tatami_green_border', { roughness: 0.92, bumpScale: 0.04 });
  const shrineMat = catalog.getMaterial('shrine_facade', { roughness: 0.80, bumpScale: 0.04 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const bookcaseMat = catalog.getMaterial('full_bookcase', { roughness: 0.84, bumpScale: 0.04 });
  const dresserMat = catalog.getMaterial('wooden_dresser', { roughness: 0.82, bumpScale: 0.03 });
  const vanityMat = catalog.getMaterial('wooden_vanity', { roughness: 0.82, bumpScale: 0.03 });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.90, transparent: true });
  const fusumaMat = catalog.getMaterial('linen_fusuma', { roughness: 0.90, bumpScale: 0.02 });
  const cobbleFloor = catalog.getMaterial('cobblestone', { roughness: 0.92, bumpScale: 0.06 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.78, bumpScale: 0.03 });
  const cabMat = catalog.getMaterial('kitchen_cabinet', { roughness: 0.82, bumpScale: 0.03 });
  const jarShelfMat = catalog.getMaterial('shop_shelves_jars', { roughness: 0.84, bumpScale: 0.03 });
  const deepMoss = catalog.getMaterial('deep_moss', { roughness: 0.95, bumpScale: 0.07 });
  const mossRock = catalog.getMaterial('moss_rock_heavy', { roughness: 0.93, bumpScale: 0.08 });
  const riverCobble = catalog.getMaterial('river_cobble', { roughness: 0.90, bumpScale: 0.06 });
  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.32, opacity: 0.38, transparent: true });
  const clearGlass = catalog.getMaterial('window_frosted_wood', { roughness: 0.22, opacity: 0.22, transparent: true, tint: 0xdde8f2 });

  // --- Black-Bronze Ibushi Hon-gawara (黒銅いぶし本瓦) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.70, metalness: 0.20, bumpScale: 0.06, tint: 0x9aa0a8 });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.66, metalness: 0.24, bumpScale: 0.05, tint: 0x868c94 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.60, metalness: 0.30, tint: 0x7a808a });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.52, metalness: 0.40, tint: 0x6c727a });

  const Y1 = 0.50;
  const Y2 = 3.60;
  const Y3 = 6.60;
  const YTOP = 9.40;

  // =========================================================================
  // 1. DEEP GROUNDED CUT-STONE PLINTH, FRONT STONE STEPS & VERMILION KABUKIMON GATE
  // =========================================================================
  // Deep main plinth (extends down to Y = -3.1m so hillside slope never exposes gaps)
  p.box('ext', 12.1, 3.62, 9.4, 0, Y1 - 1.82, 0, cutStone);
  // Front entrance granite stoop & 4 stone steps rising cleanly to Y1
  p.box('ext', 3.4, 2.2, 1.35, 0.4, Y1 - 1.12, 5.05, cutStone);
  p.stoneSteps('ext', 0.4, 5.85, 4.72, -0.06, Y1, 2.55, 4, stepStone);
  // Flagstone garden walkway from Kabukimon gate (Z=+6.65) to front steps (seated flush with gravel approach)
  p.box('ext', 2.4, 0.24, 2.6, 0.4, -0.14, 6.75, riverCobble);
  p.floor(-1.0, 1.8, 4.4, 8.6, 0.04);
  p.floor(-1.0, 1.8, 4.5, 5.1, Y1 + 0.04);

  // ★ Freestanding Vermilion Kabukimon Gate (独立朱塗・冠木門) at Z = +6.65, X = +0.4
  const gateX = 0.4;
  const gateZ = 6.65;
  // Grounded stone column footings
  p.box('ext', 0.46, 1.25, 0.46, gateX - 1.48, -0.45, gateZ, stepStone);
  p.box('ext', 0.46, 1.25, 0.46, gateX + 1.48, -0.45, gateZ, stepStone);
  // Twin stout vermilion pillars (2.68m clear opening between X = -0.94 and +1.74!)
  p.box('ext', 0.26, 3.08, 0.26, gateX - 1.48, 1.54, gateZ, vermilionWood, { solid: true });
  p.box('ext', 0.26, 3.08, 0.26, gateX + 1.48, 1.54, gateZ, vermilionWood, { solid: true });
  // Lower brace struts (控柱)
  for (const side of [-1, 1]) {
    p.box('ext', 0.16, 2.35, 0.16, gateX + side * 1.48, 1.18, gateZ - 0.58, vermilionWood, { solid: true });
    p.box('ext', 0.14, 0.16, 0.72, gateX + side * 1.48, 2.25, gateZ - 0.28, vermilionWood);
  }
  // Overhanging heavy vermilion lintel beam (冠木) & secondary tie beam (貫)
  p.box('ext', 4.35, 0.28, 0.28, gateX, 3.02, gateZ, vermilionWood);
  p.box('ext', 3.45, 0.18, 0.16, gateX, 2.58, gateZ, vermilionWood);
  // Hanging Indigo Sakura Noren Banner (walk-under height Y = 2.08..2.62 -> full clearance!)
  p.box('ext', 2.45, 0.56, 0.04, gateX, 2.34, gateZ + 0.08, sakuraNoren, { uvScale: 0 });
  // Flanking traditional white-plaster wing garden walls (袖塀)
  for (const side of [-1, 1]) {
    const wx = gateX + side * 2.45;
    p.box('ext', 1.65, 1.15, 0.28, wx, 0.12, gateZ, cutStone, { solid: true });
    p.box('ext', 1.65, 1.25, 0.24, wx, 1.30, gateZ, whitePlaster, { solid: true });
    p.box('ext', 1.80, 0.18, 0.42, wx, 2.00, gateZ, kawaraDeck);
  }
  // Miniature 3D Ibushi Hon-gawara Kirizuma Gate Roof + Twin Mini Horned Onigawara!
  const gatePitch = 0.45;
  const gateRun = 1.05;
  const gateRidgeY = 3.68;
  p.kawaraSlope('ext', {
    bottomWidth: 4.55,
    run: gateRun,
    pitch: gatePitch,
    ridgeX: gateX,
    ridgeY: gateRidgeY,
    ridgeZ: gateZ,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.34,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 4.55,
    run: gateRun,
    pitch: gatePitch,
    ridgeX: gateX,
    ridgeY: gateRidgeY,
    ridgeZ: gateZ,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.34,
  });
  p.kawaraRidge('ext', gateX - 2.24, gateRidgeY + 0.03, gateZ, gateX + 2.24, gateRidgeY + 0.03, gateZ, kawaraRidge, oniMat, {
    scale: 0.72,
    courses: 2,
    oniStart: true,
    oniEnd: true,
  });

  // =========================================================================
  // 2. 1F: SKY-OPEN MOSSY TSUBONIWA, YUKIMI-ENGAWA, ALTAR HALL & KITCHENETTE (11.6m x 9.0m)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.10m
  const mid1 = Y1 + h1 * 0.5;

  // 1F Floor Slabs (leave NW Tsuboniwa courtyard X∈[-5.8,-2.2], Z∈[-4.5,-1.1] recessed as mossy garden!)
  p.box('int', 8.0, 0.12, 9.0, 1.8, Y1 - 0.04, 0, timberDark);        // East + Center main hall base
  p.box('int', 3.6, 0.12, 5.6, -4.0, Y1 - 0.04, 1.7, warmFloor);      // SW Yukimi-Engawa veranda
  p.box('int', 5.8, 0.04, 4.7, 0.9, Y1 + 0.03, -2.0, tatamiBord);     // 10-Mat Altar Hall tatami
  p.box('int', 2.0, 0.05, 1.9, 4.75, Y1 + 0.02, 3.45, cobbleFloor);   // SE Scullery cobblestone
  p.box('int', 1.15, 0.03, 0.72, 0.4, Y1 + 0.04, 4.10, coirMat, { uvScale: 0 }); // Entry coir doormat

  // ★ 1F Sky-Open Mossy Tsuboniwa Courtyard (坪庭中庭: X∈[-5.8,-2.2], Z∈[-4.5,-1.1])
  const gardenY = Y1 - 0.12;
  p.box('ext', 3.6, 0.16, 3.4, -4.0, gardenY - 0.08, -2.8, deepMoss);
  p.box('ext', 2.4, 0.08, 2.2, -3.9, gardenY + 0.01, -2.6, riverCobble);
  // Mossy stepping stones allowing player to walk RIGHT INTO the open-sky courtyard!
  for (const [sx, sz] of [[-3.3, -1.55], [-3.8, -2.25], [-4.45, -2.95]]) {
    p.cyl('ext', 0.34, 0.38, 0.14, 7, sx, gardenY + 0.06, sz, stepStone);
  }
  // Sculpted mossy garden boulders & Tsukubai stone water basin (つくばい)
  p.box('ext', 0.95, 0.62, 0.85, -5.05, gardenY + 0.28, -3.75, mossRock, { solid: true, ry: 0.28 });
  p.box('ext', 0.72, 0.48, 0.68, -2.75, gardenY + 0.22, -3.85, mossRock, { solid: true, ry: -0.4 });
  p.cyl('ext', 0.34, 0.40, 0.56, 8, -4.95, gardenY + 0.28, -2.05, stepStone);
  p.cyl('ext', 0.24, 0.24, 0.10, 8, -4.95, gardenY + 0.58, -2.05, mossRock);
  // Courtyard Stone Lantern (石灯籠)
  p.cyl('ext', 0.14, 0.20, 0.82, 6, -3.15, gardenY + 0.41, -3.95, stepStone);
  p.box('ext', 0.34, 0.34, 0.34, -3.15, gardenY + 0.96, -3.95, stepStone);
  p.box('ext', 0.52, 0.16, 0.52, -3.15, gardenY + 1.22, -3.95, mossRock);
  // Courtyard outer privacy walls (築地塀 on N & W — 2.4m tall, open to sky above!)
  p.box('ext', 3.75, 0.75, 0.28, -3.95, Y1 + 0.25, -4.50, cutStone, { solid: true });
  p.box('ext', 3.75, 1.65, 0.24, -3.95, Y1 + 1.45, -4.50, whitePlaster, { solid: true });
  p.box('ext', 3.90, 0.16, 0.44, -3.95, Y1 + 2.34, -4.50, kawaraDeck);
  p.box('ext', 0.28, 0.75, 3.55, -5.80, Y1 + 0.25, -2.80, cutStone, { solid: true });
  p.box('ext', 0.24, 1.65, 3.55, -5.80, Y1 + 1.45, -2.80, whitePlaster, { solid: true });
  p.box('ext', 0.44, 0.16, 3.68, -5.80, Y1 + 2.34, -2.80, kawaraDeck);

  // Register 1F walkable floor surfaces (main house + walk-in Tsuboniwa courtyard!)
  p.floor(-5.68, 5.68, -1.10, 4.55, Y1 + 0.04);
  p.floor(-2.20, 5.68, -4.40, -1.05, Y1 + 0.04);
  p.floor(-5.55, -2.25, -4.25, -1.10, gardenY + 0.08);

  // 1F Exterior Walls (Charred cedar dado + white plaster + vermilion corner & window trim!)
  // Front 1F (+Z = +4.50): Grand 2.20m entrance opening X ∈ [-0.70, +1.50]
  p.box('ext', 5.12, 1.20, 0.26, -3.26, Y1 + 0.60, 4.50, cedarDark, { solid: true });
  p.box('ext', 1.55, h1 - 1.20, 0.26, -5.04, Y1 + 2.15, 4.50, whitePlaster, { solid: true });
  p.box('ext', 2.40, 0.62, 0.26, -3.10, Y1 + 2.79, 4.50, whitePlaster, { solid: true });
  p.box('ext', 2.36, 1.28, 0.07, -3.10, Y1 + 1.84, 4.50, slatScreen, { uvScale: 0 }); // Fine Senbon-goshi lattice!
  p.box('ext', 1.22, h1 - 1.20, 0.26, -1.31, Y1 + 2.15, 4.50, whitePlaster, { solid: true });
  // Entrance lintel & parted shoji screen
  p.box('ext', 2.24, 0.72, 0.26, 0.40, Y1 + 2.74, 4.50, whitePlaster, { solid: true });
  p.box('ext', 2.50, 0.16, 0.30, 0.40, Y1 + 2.36, 4.54, vermilionWood);
  p.box('ext', 1.05, 2.30, 0.06, -1.18, Y1 + 1.15, 4.30, shojiMat, { uvScale: 0 });
  // East half of Front 1F wall (X ∈ [+1.50, +5.80])
  p.box('ext', 4.34, 1.20, 0.26, 3.66, Y1 + 0.60, 4.50, cedarDark, { solid: true });
  p.box('ext', 1.45, h1 - 1.20, 0.26, 2.22, Y1 + 2.15, 4.50, whitePlaster, { solid: true });
  p.box('ext', 1.80, 0.65, 0.26, 3.85, Y1 + 2.78, 4.50, whitePlaster, { solid: true });
  p.box('ext', 1.76, 1.25, 0.07, 3.85, Y1 + 1.82, 4.50, latticeMat, { uvScale: 0 });
  p.box('ext', 1.10, h1 - 1.20, 0.26, 5.26, Y1 + 2.15, 4.50, whitePlaster, { solid: true });

  // Back 1F (-Z = -4.50, east of Tsuboniwa: X ∈ [-2.20, +5.80])
  p.box('ext', 8.05, 1.15, 0.26, 1.80, Y1 + 0.58, -4.50, cedarDark, { solid: true });
  p.box('ext', 8.05, h1 - 1.15, 0.26, 1.80, Y1 + 2.12, -4.50, whitePlaster, { solid: true });

  // West 1F (-X = -5.80, south of Tsuboniwa: Z ∈ [-1.10, +4.50])
  p.box('ext', 0.26, 1.15, 5.65, -5.80, Y1 + 0.58, 1.70, cedarDark, { solid: true });
  p.box('ext', 0.26, h1 - 1.15, 1.65, -5.80, Y1 + 2.12, -0.28, whitePlaster, { solid: true });
  p.box('ext', 0.26, 0.62, 2.40, -5.80, Y1 + 2.79, 1.75, whitePlaster, { solid: true });
  p.box('ext', 0.06, 1.30, 2.36, -5.80, Y1 + 1.80, 1.75, glassMat, { uvScale: 0 });
  p.box('ext', 0.26, h1 - 1.15, 1.60, -5.80, Y1 + 2.12, 3.72, whitePlaster, { solid: true });

  // East 1F (+X = +5.80, full length Z ∈ [-4.50, +4.50])
  p.box('ext', 0.26, 1.20, 9.05, 5.80, Y1 + 0.60, 0, cedarDark, { solid: true });
  p.box('ext', 0.26, h1 - 1.20, 9.05, 5.80, Y1 + 2.15, 0, whitePlaster, { solid: true });

  // Vermilion exterior accent corner & entrance posts on 1F
  for (const [px, pz] of [[-5.82, 4.52], [-0.74, 4.52], [1.54, 4.52], [5.82, 4.52], [5.82, -4.52]]) {
    p.box('ext', 0.20, h1 + 0.06, 0.20, px, mid1, pz, vermilionWood);
  }

  // 1F Courtyard Frame Walls facing Tsuboniwa (South edge Z = -1.10 & East edge X = -2.20)
  // South edge Z = -1.10: open 1.50m garden walk-out doorway X ∈ [-4.05, -2.55] + Yukimi viewing frame!
  p.box('int', 1.72, h1, 0.16, -4.92, mid1, -1.10, timberDark, { solid: true });
  p.box('int', 1.60, 0.72, 0.16, -3.30, Y1 + 2.74, -1.10, transomGlass, { uvScale: 0 });
  p.box('int', 0.42, h1, 0.16, -2.35, mid1, -1.10, timberDark, { solid: true });
  // East edge X = -2.20 separating Altar Hall from mossy Tsuboniwa: wide panoramic Yukimi glass window!
  p.box('int', 0.16, 0.52, 3.45, -2.20, Y1 + 0.26, -2.80, timberDark, { solid: true });
  p.box('int', 0.06, 1.88, 3.20, -2.20, Y1 + 1.46, -2.80, clearGlass, { uvScale: 0 });
  p.box('int', 0.16, 0.70, 3.45, -2.20, Y1 + 2.75, -2.80, transomGlass, { uvScale: 0 });

  // 1F Interior Partitions: Altar Hall South Divider (Z = +0.45) with wide 2.2m open passage + frosted transom!
  p.box('int', 1.85, h1, 0.14, -1.25, mid1, 0.45, fusumaMat, { solid: true, uvScale: 0 });
  p.box('int', 2.25, 0.70, 0.14, 0.80, Y1 + 2.75, 0.45, transomGlass, { uvScale: 0 });
  p.box('int', 1.95, h1, 0.14, 2.90, mid1, 0.45, washiWall, { solid: true });
  // Decorative indigo sakura noren overhead between Hall & Engawa
  p.box('int', 0.04, 0.62, 1.95, -2.18, Y1 + 2.66, 2.15, sakuraNoren, { uvScale: 0 });

  // ★ 1F Altar Hall Furnishings: Grand Meiji Shrine Altar + Twin Vermilion Torii Posts + Red Zabuton!
  p.box('int', 3.4, 0.24, 0.96, 1.15, Y1 + 0.12, -3.95, timberDark, { solid: true }); // Raised shrine dais
  p.box('int', 2.15, 2.10, 0.64, 1.15, Y1 + 1.28, -4.02, shrineMat, { solid: true, uvScale: 0 }); // 大神棚
  // Twin indoor vermilion sacred pillars & top kasagi beam framing the household shrine
  p.box('int', 0.16, 2.65, 0.16, -0.18, Y1 + 1.44, -3.55, vermilionWood, { solid: true });
  p.box('int', 0.16, 2.65, 0.16, 2.48, Y1 + 1.44, -3.55, vermilionWood, { solid: true });
  p.box('int', 3.10, 0.16, 0.18, 1.15, Y1 + 2.72, -3.55, vermilionWood);
  // Offering table & 3 crimson zabuton kneeling cushions
  p.box('int', 1.35, 0.46, 0.56, 1.15, Y1 + 0.26, -2.70, vermilionWood, { solid: true });
  for (const zx of [0.35, 1.15, 1.95]) {
    p.box('int', 0.64, 0.08, 0.64, zx, Y1 + 0.08, -1.65, zabutonMat, { uvScale: 0 });
  }
  // Hall & Scullery props (positioned clear of east stair entry!)
  p.box('int', 1.45, 1.45, 0.52, -4.65, Y1 + 0.74, 3.85, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 1.75, 0.92, 0.62, 4.65, Y1 + 0.46, 4.05, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 0.58, 1.85, 1.10, 5.40, Y1 + 0.94, 3.10, cabMat, { solid: true, uvScale: 0 });
  p.box('int', 0.52, 1.65, 1.25, 3.45, Y1 + 0.84, 3.72, jarShelfMat, { solid: true, uvScale: 0 });

  // 1F -> 2F East Staircase (X = +4.85, Z: +1.85 -> -2.05, Y1 -> Y2)
  p.stairRun('int', {
    x0: 4.85,
    z0: 1.85,
    x1: 4.85,
    z1: -2.05,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.18,
    steps: 14,
    treadMat: timberDark,
    stringerMat: timberDark,
    railMat: vermilionWood,
    railLeft: true,
    railRight: false,
    closedRisers: true,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 3. 2F: SHIMENAWA WORKSHOP, GREEN-TILE BATH & TSUBONIWA VERMILION GALLERY (Y = +3.60m)
  // =========================================================================
  const h2 = Y3 - Y2; // 3.00m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs (cutouts: NW Tsuboniwa sky-well X∈[-5.8,-2.2], Z∈[-4.5,-1.1] & East stairwell X∈[4.12,5.75], Z∈[-2.05,+2.00])
  p.box('int', 6.32, 0.16, 9.0, 0.96, Y2 - 0.06, 0, warmFloor);            // Center core X∈[-2.20,+4.12]
  p.box('int', 3.60, 0.16, 5.6, -4.00, Y2 - 0.06, 1.70, warmFloor);        // SW Bath wing X∈[-5.8,-2.2], Z∈[-1.1,+4.5]
  p.box('int', 1.68, 0.16, 2.45, 4.94, Y2 - 0.06, -3.28, warmFloor);       // NE Stair landing Z∈[-4.5,-2.05]
  p.box('int', 1.68, 0.16, 2.50, 4.94, Y2 - 0.06, 3.25, warmFloor);        // SE Corner Z∈[+2.0,+4.5]
  p.box('int', 5.8, 0.04, 4.1, 0.95, Y2 + 0.03, -2.35, tatamiPlain);       // Shimenawa workroom tatami
  p.box('int', 3.45, 0.05, 5.35, -3.95, Y2 + 0.02, 1.70, greenTile);       // Retro green-tile bath floor

  // 2F Floor Slabs Colliders & Walkable Surfaces
  p.collider(-2.20, 4.12, Y2 - 0.16, Y2 + 0.02, -4.50, 4.50);
  p.collider(-5.80, -2.20, Y2 - 0.16, Y2 + 0.02, -1.10, 4.50);
  p.collider(4.12, 5.80, Y2 - 0.16, Y2 + 0.02, -4.50, -2.06);
  p.collider(4.12, 5.80, Y2 - 0.16, Y2 + 0.02, 2.02, 4.50);

  p.floor(-2.15, 4.10, -4.40, 4.45, Y2 + 0.04);
  p.floor(-5.68, -2.15, -1.05, 4.40, Y2 + 0.04);
  p.floor(4.05, 5.68, -4.40, -2.00, Y2 + 0.04);
  p.floor(4.05, 5.68, 2.00, 4.40, Y2 + 0.04);

  // ★ 2F Vermilion Kouran Balustrades overlooking the Open-Sky Tsuboniwa Courtyard!
  p.kouranRailing('ext', -5.72, -1.10, -2.20, -1.10, Y2, 0.96, vermilionWood, 0.52);
  p.kouranRailing('ext', -2.20, -4.42, -2.20, -1.10, Y2, 0.96, vermilionWood, 0.52);
  // 2F East Stairwell guard railings
  p.kouranRailing('int', 4.12, -2.04, 4.12, 2.02, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', 4.12, 2.02, 5.72, 2.02, Y2, 0.94, timberDark, 0.56);

  // ★ 2F Front Projecting Vermilion Balcony (Z ∈ [+4.50, +5.65], X ∈ [-4.8, +4.8])
  p.box('ext', 9.75, 0.16, 1.18, 0, Y2 - 0.04, 5.08, warmFloor);
  p.kouranRailing('ext', -4.85, 5.62, 4.85, 5.62, Y2, 0.96, vermilionWood, 0.54);
  p.kouranRailing('ext', -4.85, 4.50, -4.85, 5.62, Y2, 0.96, vermilionWood, 0.54);
  p.kouranRailing('ext', 4.85, 4.50, 4.85, 5.62, Y2, 0.96, vermilionWood, 0.54);
  p.floor(-4.75, 4.75, 4.40, 5.56, Y2 + 0.04);

  // 2F Exterior Walls (White plaster Shinkabe + vermilion timber framing)
  // Front 2F (+Z = +4.50): Open balcony door X ∈ [-0.85, +0.85]
  p.box('ext', 4.98, h2, 0.22, -3.32, mid2, 4.50, whitePlaster, { solid: true });
  p.box('ext', 1.72, 0.72, 0.22, 0.0, Y2 + 2.64, 4.50, whitePlaster, { solid: true });
  p.box('ext', 4.98, h2, 0.22, 3.32, mid2, 4.50, whitePlaster, { solid: true });
  // Back 2F (-Z = -4.50, east of Tsuboniwa: X ∈ [-2.20, +5.80]) with panoramic north window
  p.box('ext', 8.05, 0.96, 0.22, 1.80, Y2 + 0.48, -4.50, whitePlaster, { solid: true });
  p.box('ext', 2.45, h2 - 0.96, 0.22, -0.98, Y2 + 1.98, -4.50, whitePlaster, { solid: true });
  p.box('ext', 3.00, 0.56, 0.22, 1.75, Y2 + 2.72, -4.50, whitePlaster, { solid: true });
  p.box('ext', 2.96, 1.48, 0.06, 1.75, Y2 + 1.70, -4.50, glassMat, { uvScale: 0 });
  p.box('ext', 2.55, h2 - 0.96, 0.22, 4.52, Y2 + 1.98, -4.50, whitePlaster, { solid: true });
  // West 2F (-X = -5.80, south of Tsuboniwa: Z ∈ [-1.10, +4.50])
  p.box('ext', 0.22, h2, 5.65, -5.80, mid2, 1.70, whitePlaster, { solid: true });
  // East 2F (+X = +5.80, full length Z ∈ [-4.50, +4.50])
  p.box('ext', 0.22, h2, 9.05, 5.80, mid2, 0, whitePlaster, { solid: true });
  // Vermilion 2F shinkabe pilasters & eaves band
  for (const px of [-5.82, -2.9, -0.88, 0.88, 2.9, 5.82]) {
    p.box('ext', 0.16, h2 + 0.06, 0.26, px, mid2, 4.52, vermilionWood);
  }
  p.box('ext', 11.75, 0.16, 0.26, 0, Y3 - 0.06, 4.54, vermilionWood);

  // 2F Interior Partitions & Furnishings
  // Shimenawa room south wall (Z = -0.25, open 1.90m doorway X ∈ [-0.55, +1.35])
  p.box('int', 1.65, h2, 0.14, -1.38, mid2, -0.25, fusumaMat, { solid: true, uvScale: 0 });
  p.box('int', 1.95, 0.68, 0.14, 0.40, Y2 + 2.66, -0.25, transomGlass, { uvScale: 0 });
  p.box('int', 2.75, h2, 0.14, 2.75, mid2, -0.25, washiWall, { solid: true });
  // Peeling yellow-ochre tokonoma feature wall + 1985 abandoned shimenawa straw bundles!
  p.box('int', 3.4, h2 - 0.1, 0.12, 0.9, mid2, -4.34, yellowWall);
  p.box('int', 2.2, 0.56, 0.95, 1.1, Y2 + 0.28, -2.40, warmFloor, { solid: true }); // Low craft workbench
  p.box('int', 1.65, 0.26, 0.58, 1.0, Y2 + 0.69, -2.42, strawMat);                 // Unfinished shimenawa rope straw!
  p.cyl('int', 0.26, 0.28, 1.15, 8, -0.85, Y2 + 0.58, -3.72, strawMat);            // Standing golden straw sheaf
  p.cyl('int', 0.22, 0.25, 1.05, 8, -1.42, Y2 + 0.53, -3.62, strawMat);
  p.box('int', 1.35, 1.45, 0.52, 3.05, Y2 + 0.74, -3.95, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 1.15, 1.15, 0.48, 3.25, Y2 + 0.58, -1.65, dresserMat, { solid: true, uvScale: 0 });

  // SW Retro Green-Tile Bath & Dressing Room (X = -2.15 partition, 1.55m doorway Z ∈ [+0.35, +1.90])
  p.box('int', 0.14, h2, 1.45, -2.15, mid2, -0.38, creamTile, { solid: true });
  p.box('int', 0.14, 0.68, 1.60, -2.15, Y2 + 2.66, 1.12, creamTile, { solid: true });
  p.box('int', 0.14, h2, 2.60, -2.15, mid2, 3.20, creamTile, { solid: true });
  // Cream upper bath tile lining & green tile sunken tub + wooden vanity
  p.box('int', 0.10, 1.35, 5.2, -5.66, Y2 + 0.68, 1.70, greenTile);
  p.box('int', 0.10, 1.60, 5.2, -5.66, Y2 + 2.15, 1.70, creamTile);
  p.box('int', 1.55, 0.68, 1.25, -4.82, Y2 + 0.34, 3.45, greenTile, { solid: true }); // Retro tiled bathtub
  p.box('int', 1.15, 1.45, 0.52, -3.35, Y2 + 0.74, 4.05, vanityMat, { solid: true, uvScale: 0 });

  // 2F -> 3F South-Center Staircase (Z = +2.25, X: +2.90 -> -1.00, Y2 -> Y3)
  p.stairRun('int', {
    x0: 2.90,
    z0: 2.25,
    x1: -1.00,
    z1: 2.25,
    y0: Y2 + 0.04,
    y1: Y3 + 0.04,
    width: 1.15,
    steps: 14,
    treadMat: timberDark,
    stringerMat: timberDark,
    railMat: vermilionWood,
    railLeft: true,
    railRight: true,
    closedRisers: false,
    guardLeft: true,
    guardRight: true,
  });

  // =========================================================================
  // 4. 3F: MT. KUROISO WORSHIP STUDY & L-SHAPED VERMILION BALCONY (8.2m x 6.6m, Y = +6.60m)
  // =========================================================================
  const h3 = YTOP - Y3; // 2.80m
  const mid3 = Y3 + h3 * 0.5;

  // 3F Floor Slabs (X ∈ [-4.1, +4.1], Z ∈ [-3.3, +3.3]) with clean 2F->3F cutout (X∈[-1.02,+3.02], Z∈[+1.60,+2.92])
  p.box('int', 8.20, 0.16, 4.92, 0.0, Y3 - 0.06, -0.84, warmFloor);        // North + Mid main study Z∈[-3.3,+1.62]
  p.box('int', 3.10, 0.16, 1.72, -2.55, Y3 - 0.06, 2.44, warmFloor);       // SW arrival landing X∈[-4.1,-1.0]
  p.box('int', 1.10, 0.16, 1.72, 3.55, Y3 - 0.06, 2.44, warmFloor);        // SE strip X∈[+3.0,+4.1]
  p.box('int', 6.80, 0.04, 4.20, 0.15, Y3 + 0.03, -0.95, tatamiGreen);     // Worship study green-border tatami
  // Woven brown Ajiro ceiling panels overhead (網代天井)
  p.box('int', 8.0, 0.08, 6.4, 0, YTOP - 0.08, 0, ajiroCeil);

  p.collider(-4.1, 4.1, Y3 - 0.16, Y3 + 0.02, -3.3, 1.60);
  p.collider(-4.1, -1.02, Y3 - 0.16, Y3 + 0.02, 1.60, 3.3);
  p.collider(3.02, 4.1, Y3 - 0.16, Y3 + 0.02, 1.60, 3.3);

  p.floor(-4.02, 4.02, -3.22, 1.60, Y3 + 0.04);
  p.floor(-4.02, -1.00, 1.55, 3.25, Y3 + 0.04);
  p.floor(3.02, 4.02, 1.55, 3.25, Y3 + 0.04);

  // 3F Stairwell guard railings
  p.kouranRailing('int', -1.02, 1.60, 3.04, 1.60, Y3, 0.94, vermilionWood, 0.54);
  p.kouranRailing('int', 3.04, 1.60, 3.04, 3.20, Y3, 0.94, vermilionWood, 0.54);

  // ★ 3F L-Shaped Vermilion High-Balcony (South Z∈[3.3, 4.35] + West X∈[-5.15, -4.1])
  p.box('ext', 9.30, 0.16, 1.08, -0.52, Y3 - 0.04, 3.82, warmFloor);
  p.box('ext', 1.08, 0.16, 6.65, -4.64, Y3 - 0.04, 0.0, warmFloor);
  p.kouranRailing('ext', -5.14, 4.32, 4.10, 4.32, Y3, 0.96, vermilionWood, 0.54);
  p.kouranRailing('ext', 4.10, 3.30, 4.10, 4.32, Y3, 0.96, vermilionWood, 0.54);
  p.kouranRailing('ext', -5.14, -3.30, -5.14, 4.32, Y3, 0.96, vermilionWood, 0.54);
  p.kouranRailing('ext', -5.14, -3.30, -4.10, -3.30, Y3, 0.96, vermilionWood, 0.54);
  p.floor(-5.05, 4.02, 3.22, 4.25, Y3 + 0.04);
  p.floor(-5.05, -4.02, -3.22, 4.25, Y3 + 0.04);

  // 3F Exterior Walls (White plaster + wide Mt. Kuroiso panoramic north window + dual balcony doors!)
  // South 3F (+Z = +3.30): Balcony doorway on solid SW landing X ∈ [-3.25, -1.65]
  p.box('ext', 0.90, h3, 0.20, -3.68, mid3, 3.30, whitePlaster, { solid: true });
  p.box('ext', 1.64, 0.68, 0.20, -2.45, Y3 + 2.46, 3.30, whitePlaster, { solid: true });
  p.box('ext', 5.80, h3, 0.20, 1.24, mid3, 3.30, whitePlaster, { solid: true });
  // North 3F (-Z = -3.30): Grand 4.6m Mt. Kuroiso worship panoramic window!
  p.box('ext', 8.25, 0.78, 0.20, 0, Y3 + 0.39, -3.30, whitePlaster, { solid: true });
  p.box('ext', 1.85, h3 - 0.78, 0.20, -3.20, Y3 + 1.79, -3.30, whitePlaster, { solid: true });
  p.box('ext', 4.60, 0.44, 0.20, 0.0, Y3 + 2.58, -3.30, whitePlaster, { solid: true });
  p.box('ext', 4.56, 1.58, 0.06, 0.0, Y3 + 1.57, -3.30, clearGlass, { uvScale: 0 });
  p.box('ext', 1.85, h3 - 0.78, 0.20, 3.20, Y3 + 1.79, -3.30, whitePlaster, { solid: true });
  // West 3F (-X = -4.10): Open West balcony doorway Z ∈ [-0.85, +0.75]
  p.box('ext', 0.20, h3, 2.48, -4.10, mid3, -2.08, whitePlaster, { solid: true });
  p.box('ext', 0.20, 0.68, 1.64, -4.10, Y3 + 2.46, -0.05, whitePlaster, { solid: true });
  p.box('ext', 0.20, h3, 2.58, -4.10, mid3, 2.02, whitePlaster, { solid: true });
  // East 3F (+X = +4.10): Solid with tall lattice window
  p.box('ext', 0.20, 0.90, 6.65, 4.10, Y3 + 0.45, 0, whitePlaster, { solid: true });
  p.box('ext', 0.20, h3 - 0.90, 2.05, 4.10, Y3 + 1.85, -2.30, whitePlaster, { solid: true });
  p.box('ext', 0.20, 0.50, 2.50, 4.10, Y3 + 2.55, -0.05, whitePlaster, { solid: true });
  p.box('ext', 0.06, 1.40, 2.46, 4.10, Y3 + 1.60, -0.05, latticeMat, { uvScale: 0 });
  p.box('ext', 0.20, h3 - 0.90, 2.15, 4.10, Y3 + 1.85, 2.25, whitePlaster, { solid: true });
  // Vermilion 3F corner posts
  for (const [px, pz] of [[-4.12, -3.32], [4.12, -3.32], [-4.12, 3.32], [4.12, 3.32]]) {
    p.box('ext', 0.18, h3 + 0.08, 0.18, px, mid3, pz, vermilionWood);
  }

  // 3F Worship Study Furnishings
  p.box('int', 1.65, 0.42, 0.78, 0.0, Y3 + 0.24, -2.15, vermilionWood, { solid: true }); // Worship reading desk
  p.box('int', 0.64, 0.08, 0.64, 0.0, Y3 + 0.08, -1.25, zabutonMat, { uvScale: 0 });
  p.box('int', 0.52, 2.05, 1.75, 3.68, Y3 + 1.04, -1.95, bookcaseMat, { solid: true, uvScale: 0 });
  p.box('int', 0.52, 2.05, 1.75, 3.68, Y3 + 1.04, 0.15, bookcaseMat, { solid: true, uvScale: 0 });

  // =========================================================================
  // 5. FOUR-TIER BLACK-BRONZE IBUSHI HON-GAWARA ROOFS + FRONT CHIDORIHAFU!
  // =========================================================================
  // A. 1F Deep Ibushi Kawara Eaves (Front, East, West-South)
  p.kawaraSlope('ext', {
    bottomWidth: 12.6,
    run: 1.38,
    pitch: 0.36,
    ridgeX: 0,
    ridgeY: Y2 + 0.14,
    ridgeZ: 4.46,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 9.8,
    run: 1.15,
    pitch: 0.36,
    ridgeX: 5.76,
    ridgeY: Y2 + 0.10,
    ridgeZ: 0,
    downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 6.2,
    run: 1.15,
    pitch: 0.36,
    ridgeX: -5.76,
    ridgeY: Y2 + 0.10,
    ridgeZ: 1.70,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });

  // B. 2F Mid-Story Ibushi Kawara Skirt Eaves around 3F Pavilion Base
  const midSkirtPitch = 0.40;
  p.kawaraSlope('ext', {
    topWidth: 8.6,
    bottomWidth: 12.8,
    run: 2.35,
    pitch: midSkirtPitch,
    ridgeX: 0,
    ridgeY: Y3 + 0.52,
    ridgeZ: 3.30,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 8.6,
    bottomWidth: 9.8,
    run: 1.85,
    pitch: midSkirtPitch,
    ridgeX: 1.2,
    ridgeY: Y3 + 0.38,
    ridgeZ: -3.30,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 6.8,
    bottomWidth: 10.6,
    run: 2.30,
    pitch: midSkirtPitch,
    ridgeX: 4.10,
    ridgeY: Y3 + 0.50,
    ridgeZ: 0,
    downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 4.4,
    bottomWidth: 6.8,
    run: 2.25,
    pitch: midSkirtPitch,
    ridgeX: -4.10,
    ridgeY: Y3 + 0.48,
    ridgeZ: 1.75,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });

  // ★ C. Signature Front CHIDORIHAFU (正面・千鳥破風) Dormer Gable with Vermilion Bargeboards & Mini Onigawara!
  const chZ = 4.62;
  const chBaseY = Y3 + 0.04;
  const chSpan = 3.20;
  const chH = 1.46;
  const chDepth = 1.35;
  p.gablePrism('ext', chSpan, chH, chDepth, 0, chBaseY, chZ - chDepth * 0.42, whitePlaster);
  // Twin angled kawara slopes forming the ceremonial Chidorihafu triangle
  const chPitch = Math.atan2(chH, chSpan * 0.5);
  const chRun = chSpan * 0.5 + 0.36;
  p.kawaraSlope('ext', {
    bottomWidth: chDepth + 0.55,
    run: chRun,
    pitch: chPitch,
    ridgeX: 0,
    ridgeY: chBaseY + chH + 0.14,
    ridgeZ: chZ - chDepth * 0.36,
    downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: vermilionWood,
    ribSpacing: 0.34,
  });
  p.kawaraSlope('ext', {
    bottomWidth: chDepth + 0.55,
    run: chRun,
    pitch: chPitch,
    ridgeX: 0,
    ridgeY: chBaseY + chH + 0.14,
    ridgeZ: chZ - chDepth * 0.36,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: vermilionWood,
    ribSpacing: 0.34,
  });
  // Vermilion decorative gable bargeboards (破風板) & carved pendant gegyo (懸魚)
  const bargeLen = Math.hypot(chSpan * 0.5 + 0.25, chH + 0.16);
  for (const side of [-1, 1]) {
    p.box('ext', bargeLen, 0.16, 0.12, side * (chSpan * 0.25 + 0.06), chBaseY + chH * 0.5 + 0.06, chZ + 0.30, vermilionWood, {
      rz: -side * chPitch,
    });
  }
  p.box('ext', 0.28, 0.56, 0.12, 0, chBaseY + chH - 0.28, chZ + 0.34, vermilionWood); // Carved gegyo pendant
  p.kawaraRidge('ext', 0, chBaseY + chH + 0.16, chZ - chDepth * 0.90, 0, chBaseY + chH + 0.16, chZ + 0.32, kawaraRidge, oniMat, {
    scale: 0.78,
    courses: 2,
    oniStart: false,
    oniEnd: true,
  });

  // ★ D. 3F Grand Black-Bronze Ibushi Hon-gawara IRIMOYA Roof (大入母屋本瓦屋根)
  const topPitch = 0.48;
  const topHalfZ = 4.65; // Deep protective eave covering L-shaped 3F vermilion balconies!
  const topRidgeY = YTOP + topHalfZ * Math.tan(topPitch) - 0.10;
  const topRidgeHalfX = 3.05;
  const topBotX = 11.40;
  const topBotZ = 9.30;
  const topSideRun = (topBotX * 0.5) - topRidgeHalfX;

  // Front (+Z) & Back (-Z) main trapezoidal Irimoya slopes
  p.kawaraSlope('ext', {
    topWidth: topRidgeHalfX * 2,
    bottomWidth: topBotX,
    run: topHalfZ,
    pitch: topPitch,
    ridgeX: -0.45,
    ridgeY: topRidgeY,
    ridgeZ: 0.25,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.36,
  });
  p.kawaraSlope('ext', {
    topWidth: topRidgeHalfX * 2,
    bottomWidth: topBotX,
    run: topHalfZ,
    pitch: topPitch,
    ridgeX: -0.45,
    ridgeY: topRidgeY,
    ridgeZ: 0.25,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.36,
  });
  // East (+X) & West (-X) lower Irimoya hip aprons + upper white-plaster triangular gable cheeks (入母屋妻壁)
  const gableH = 1.15;
  const sideStartY = topRidgeY - gableH;
  const sideRun = topSideRun + 0.45;
  p.gablePrism('ext', 4.4, gableH + 0.15, 0.22, -0.45 + topRidgeHalfX, sideStartY - 0.05, 0.25, whitePlaster, {
    ry: Math.PI * 0.5,
  });
  p.gablePrism('ext', 4.4, gableH + 0.15, 0.22, -0.45 - topRidgeHalfX, sideStartY - 0.05, 0.25, whitePlaster, {
    ry: Math.PI * 0.5,
  });
  p.kawaraSlope('ext', {
    topWidth: 4.5,
    bottomWidth: topBotZ,
    run: sideRun,
    pitch: 0.44,
    ridgeX: -0.45 + topRidgeHalfX,
    ridgeY: sideStartY,
    ridgeZ: 0.25,
    downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 4.5,
    bottomWidth: topBotZ,
    run: sideRun,
    pitch: 0.44,
    ridgeX: -0.45 - topRidgeHalfX,
    ridgeY: sideStartY,
    ridgeZ: 0.25,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });

  // Grand 3-Course Main Ridge (大棟) with Twin Monumental Horned Onigawara + 4 Diagonal Hip Ridges (隅棟)
  p.kawaraRidge(
    'ext',
    -0.45 - topRidgeHalfX,
    topRidgeY + 0.04,
    0.25,
    -0.45 + topRidgeHalfX,
    topRidgeY + 0.04,
    0.25,
    kawaraRidge,
    oniMat,
    { scale: 1.12, courses: 3, oniStart: true, oniEnd: true }
  );
  const eaveY = topRidgeY - topHalfZ * Math.tan(topPitch);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      p.kawaraRidge(
        'ext',
        -0.45 + sx * topRidgeHalfX,
        sideStartY + 0.04,
        0.25 + sz * 2.15,
        -0.45 + sx * (topBotX * 0.5 - 0.12),
        eaveY + 0.05,
        0.25 + sz * (topHalfZ - 0.10),
        kawaraRidge,
        oniMat,
        { scale: 0.72, courses: 1, oniStart: false, oniEnd: true }
      );
    }
  }

  return p.build({
    id: 'H13',
    name: '神谷家（鎮守宮守・朱塗冠木門三階社家）',
    subtitle: '独立冠木門・苔石坪庭吹抜・千鳥破風本瓦三階邸',
    category: 'house',
    builtYear: 1879,
    abandonedYear: 1985,
    stories: 3,
    floorElevations: [Y1, Y2, Y3],
    entryLocal: [0.4, 0.0, 8.35],
    entryLookLocalYaw: 0,
  });
}
