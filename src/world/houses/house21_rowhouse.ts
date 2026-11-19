import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H21: 第一坑夫長屋（1893年築・島最大幅19.6m 三戸連棟二階建炭住長屋）— 2階建
 * 上段山腹道（標高277m・H20明治技師館とH22黒岩監督邸の中間）に建つ黒磯炭鉱の象徴的三戸連棟長屋。
 * 全長19.6mの連続1F軒下石畳ポーチ＆2F通し高欄ベランダを備え、3戸すべてが完全個別の間取り・内装・階段を持つ：
 *  - 西戸(1号室): ベテラン先山坑夫家族の住まい（藍染桜暖簾・6畳居間・竈台所・2F家族布団部屋）
 *  - 中央戸(2号室): 炭鉱組合連絡所兼単身寮（緑黒板シフト表・炭鉱制御盤・2F共同図書＆バルブ教材棚）
 *  - 東戸(3号室): 1985年急ぎ転居の半荒廃空き家（錆緑鉄戸・苔侵食壁・傾いた荷箱・粗布シート）
 * 頭上を全長21.2mの連続黒燻し本瓦大切妻屋根（鬼瓦×2）と20.6m連続1F本瓦下屋庇が貫く！
 */
export function buildHouse21Rowhouse(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Shared Rowhouse Structural & Kawara Materials ---
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.92, bumpScale: 0.06 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.90, bumpScale: 0.05 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xf1ece0 });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.83, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.80, bumpScale: 0.03 });
  const cobbleFloor = catalog.getMaterial('cobblestone', { roughness: 0.92, bumpScale: 0.06 });
  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.34, opacity: 0.36, transparent: true });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.90, transparent: true });
  const latticeMat = catalog.getMaterial('carved_wood_lattice', { roughness: 0.86, bumpScale: 0.05 });
  const slatScreen = catalog.getMaterial('wood_slat_screen', { roughness: 0.85, bumpScale: 0.05 });

  // --- Unit-Specific Distinct Interior Materials (3 unique lives!) ---
  const sakuraNoren = catalog.getMaterial('indigo_sakura_fabric', { roughness: 0.92, bumpScale: 0.02, doubleSide: true });
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiPlain = catalog.getMaterial('tatami_plain', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiGreen = catalog.getMaterial('tatami_green_border', { roughness: 0.92, bumpScale: 0.04 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.78, bumpScale: 0.03 });
  const cabMat = catalog.getMaterial('kitchen_cabinet', { roughness: 0.82, bumpScale: 0.03 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.92, bumpScale: 0.03 });
  const dresserMat = catalog.getMaterial('wooden_dresser', { roughness: 0.82, bumpScale: 0.03 });
  const wardrobeMat = catalog.getMaterial('wardrobe_wood', { roughness: 0.82, bumpScale: 0.03 });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });

  const darkGreenChalk = catalog.getMaterial('dark_green_chalk', { roughness: 0.88, bumpScale: 0.02 });
  const minePanel = catalog.getMaterial('mine_control_panel', { roughness: 0.62, metalness: 0.45, bumpScale: 0.04 });
  const valvePipes = catalog.getMaterial('mine_valve_pipes', { roughness: 0.62, metalness: 0.55, bumpScale: 0.06 });
  const counterMat = catalog.getMaterial('office_counter', { roughness: 0.80, bumpScale: 0.03 });
  const fileCab = catalog.getMaterial('file_cabinet', { roughness: 0.66, metalness: 0.25 });
  const noticeMat = catalog.getMaterial('notice_board', { roughness: 0.88, bumpScale: 0.02 });
  const corkMat = catalog.getMaterial('cork_board', { roughness: 0.92, bumpScale: 0.03 });
  const grayCarpet = catalog.getMaterial('woven_carpet_gray', { roughness: 0.94, bumpScale: 0.04 });
  const bookcaseMat = catalog.getMaterial('full_bookcase', { roughness: 0.84, bumpScale: 0.04 });

  const mossyWall = catalog.getMaterial('mossy_wall_patch', { roughness: 0.94, bumpScale: 0.06 });
  const mossyConc = catalog.getMaterial('mossy_concrete_stain', { roughness: 0.94, bumpScale: 0.06 });
  const rustGreenDoor = catalog.getMaterial('door_rusted_green', { roughness: 0.74, metalness: 0.36, bumpScale: 0.04 });
  const coarseCanvas = catalog.getMaterial('coarse_canvas', { roughness: 0.95, bumpScale: 0.05, doubleSide: true });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.88, bumpScale: 0.04 });

  // --- Charcoal-Slate Miners' Hon-gawara (炭住黒燻し本瓦) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.74, metalness: 0.16, bumpScale: 0.06, tint: 0x868c94 });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.70, metalness: 0.20, bumpScale: 0.05, tint: 0x727880 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.62, metalness: 0.28, tint: 0x626870 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.54, metalness: 0.38, tint: 0x525860 });

  const Y1 = 0.45;
  const Y2 = 3.55;
  const YTOP = 6.50;

  // =========================================================================
  // 1. MASSIVE 20.2m GROUNDED STONE PLINTH & FULL-WIDTH 1F COVERED PORCH APRON
  // =========================================================================
  p.box('ext', 20.2, 3.65, 9.0, 0, Y1 - 1.84, 0, cutStone);
  // Full-length 19.8m communal covered front stone porch (Z ∈ [+4.20, +5.55])
  p.box('ext', 19.8, 2.20, 1.45, 0, Y1 - 1.12, 4.92, cutStone);
  p.box('ext', 19.7, 0.08, 1.38, 0, Y1 - 0.02, 4.92, cobbleFloor);
  p.floor(-9.75, 9.75, 4.15, 5.55, Y1 + 0.04);

  // Three separate granite entrance staircases serving Unit 1 (-6.5), Unit 2 (0.0), Unit 3 (+6.5)!
  for (const sx of [-6.5, 0.0, 6.5]) {
    p.stoneSteps('ext', sx, 6.45, 5.45, -0.10, Y1, 2.25, 3, stepStone);
  }
  // 8 Stout timber porch columns supporting the 20.6m covered street eave
  for (const px of [-9.65, -7.85, -5.15, -3.20, -1.25, 1.25, 3.20, 5.15, 7.85, 9.65]) {
    p.box('ext', 0.28, 0.22, 0.28, px, Y1 + 0.11, 5.48, stepStone);
    p.box('ext', 0.16, 2.96, 0.16, px, Y1 + 1.62, 5.48, timberDark, { solid: true });
  }
  p.box('ext', 19.8, 0.20, 0.20, 0, Y1 + 3.06, 5.48, timberDark);

  // =========================================================================
  // 2. 1F: THREE COMPLETELY INDIVIDUAL MINERS' UNITS (X ∈ [-9.8, +9.8], Z ∈ [-4.2, +4.2])
  // =========================================================================
  const h1 = Y2 - Y1; // 3.10m
  const mid1 = Y1 + h1 * 0.5;

  // 1F Base Floor & Distinct Room Finishes across Units 1, 2, 3
  p.box('int', 19.4, 0.12, 8.2, 0, Y1 - 0.04, 0, warmFloor);
  // Unit 1 West (X ∈ [-9.8, -3.2]): Cobble entry + 6-mat bordered tatami
  p.box('int', 2.4, 0.05, 2.5, -6.5, Y1 + 0.02, 2.85, cobbleFloor);
  p.box('int', 4.6, 0.04, 5.4, -5.6, Y1 + 0.03, -1.35, tatamiBord);
  p.box('int', 1.10, 0.03, 0.68, -6.5, Y1 + 0.04, 3.85, coirMat, { uvScale: 0 });
  // Unit 2 Center (X ∈ [-3.2, +3.2]): Union office oak planks + rear tatami bunk alcove
  p.box('int', 6.1, 0.05, 5.2, 0.0, Y1 + 0.02, 1.50, oakFloor);
  p.box('int', 4.4, 0.04, 2.9, -0.8, Y1 + 0.03, -2.60, tatamiGreen);
  p.box('int', 1.10, 0.03, 0.68, 0.0, Y1 + 0.04, 3.85, coirMat, { uvScale: 0 });
  // Unit 3 East (X ∈ [+3.2, +9.8]): Damp mossy concrete stain doma + worn aged timber planks
  p.box('int', 6.3, 0.05, 3.6, 6.5, Y1 + 0.02, 2.25, mossyConc);
  p.box('int', 5.8, 0.04, 4.3, 6.2, Y1 + 0.03, -1.85, agedTimber);

  p.floor(-9.68, 9.68, -4.08, 4.28, Y1 + 0.04);

  // 1F Exterior Walls (Weathered aged timber lower + charred cedar & plaster upper, 3 distinct doorways!)
  // Front 1F (+Z = +4.20): Doors at Unit 1 [-7.4, -5.6], Unit 2 [-0.9, +0.9], Unit 3 [+5.6, +7.4]
  const addFrontSolidSeg = (x0: number, x1: number, winMat?: typeof latticeMat) => {
    const w = x1 - x0;
    const cx = (x0 + x1) * 0.5;
    p.box('ext', w, 1.18, 0.24, cx, Y1 + 0.59, 4.20, cedarDark, { solid: true });
    if (winMat && w >= 2.2) {
      const sideW = (w - 1.55) * 0.5;
      p.box('ext', sideW, h1 - 1.18, 0.24, x0 + sideW * 0.5, Y1 + 2.14, 4.20, agedTimber, { solid: true });
      p.box('ext', 1.58, 0.56, 0.24, cx, Y1 + 2.82, 4.20, agedTimber, { solid: true });
      p.box('ext', 1.54, 1.36, 0.07, cx, Y1 + 1.86, 4.20, winMat, { uvScale: 0 });
      p.box('ext', sideW, h1 - 1.18, 0.24, x1 - sideW * 0.5, Y1 + 2.14, 4.20, agedTimber, { solid: true });
    } else {
      p.box('ext', w, h1 - 1.18, 0.24, cx, Y1 + 2.14, 4.20, agedTimber, { solid: true });
    }
  };
  addFrontSolidSeg(-9.80, -7.40, slatScreen);
  p.box('ext', 1.84, 0.72, 0.24, -6.50, Y1 + 2.74, 4.20, agedTimber, { solid: true });
  p.box('ext', 1.65, 0.52, 0.04, -6.50, Y1 + 2.16, 4.35, sakuraNoren, { uvScale: 0 }); // Unit 1 Sakura Noren!
  addFrontSolidSeg(-5.60, -0.90, latticeMat);
  p.box('ext', 1.84, 0.72, 0.24, 0.0, Y1 + 2.74, 4.20, agedTimber, { solid: true });
  p.box('ext', 1.15, 0.88, 0.08, -1.65, Y1 + 1.72, 4.36, noticeMat, { uvScale: 0 });  // Unit 2 Union Notice Board!
  addFrontSolidSeg(0.90, 5.60, glassMat);
  p.box('ext', 1.84, 0.72, 0.24, 6.50, Y1 + 2.74, 4.20, mossyWall, { solid: true });
  p.box('ext', 0.96, 2.28, 0.08, 7.62, Y1 + 1.14, 4.55, rustGreenDoor, { ry: 0.65, uvScale: 0 }); // Unit 3 Ajar rusted door!
  addFrontSolidSeg(7.40, 9.80, slatScreen);

  // Back 1F (-Z = -4.20), West 1F (-X = -9.80), East 1F (+X = +9.80)
  p.box('ext', 19.65, 1.15, 0.24, 0, Y1 + 0.58, -4.20, cedarDark, { solid: true });
  p.box('ext', 19.65, h1 - 1.15, 0.24, 0, Y1 + 2.12, -4.20, agedTimber, { solid: true });
  p.box('ext', 0.24, h1, 8.45, -9.80, mid1, 0, agedTimber, { solid: true });
  p.box('ext', 0.24, h1, 8.45, 9.80, mid1, 0, mossyWall, { solid: true });

  // Solid 1F Party Firewalls separating the 3 Units at X = -3.20 and X = +3.20!
  p.box('int', 0.20, h1, 8.20, -3.20, mid1, 0, washiWall, { solid: true });
  p.box('int', 0.20, h1, 8.20, 3.20, mid1, 0, mossyWall, { solid: true });

  // --- UNIT 1 (WEST) 1F FURNISHINGS & STAIRCASE ---
  p.box('int', 1.45, 0.36, 0.88, -5.55, Y1 + 0.20, -1.15, timberDark, { solid: true });
  p.box('int', 0.60, 0.07, 0.60, -5.55, Y1 + 0.07, -1.95, zabutonMat, { uvScale: 0 });
  p.box('int', 0.60, 0.07, 0.60, -5.55, Y1 + 0.07, -0.35, zabutonMat, { uvScale: 0 });
  p.box('int', 1.75, 0.92, 0.62, -4.75, Y1 + 0.46, -3.78, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 0.54, 1.45, 1.35, -3.55, Y1 + 0.74, 1.25, tansuMat, { solid: true, uvScale: 0 });
  p.stairRun('int', {
    x0: -8.75, z0: 2.15, x1: -8.75, z1: -1.80, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.08, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: false, railRight: true, closedRisers: true, guardLeft: false, guardRight: true,
  });

  // --- UNIT 2 (CENTER UNION OFFICE) 1F FURNISHINGS & STAIRCASE ---
  p.box('int', 0.05, 1.47, 2.37, -3.07, Y1 + 1.65, 1.35, timberDark);                     // Chalkboard cedar frame
  p.box('int', 0.06, 1.35, 2.25, -3.03, Y1 + 1.65, 1.35, darkGreenChalk, { uvScale: 0 }); // Mine shift schedule chalkboard!
  p.box('int', 1.45, 1.65, 0.56, -2.05, Y1 + 0.84, -3.72, minePanel, { solid: true, uvScale: 0 }); // Retired mine control panel!
  p.box('int', 1.65, 0.82, 0.76, -1.35, Y1 + 0.41, 1.25, counterMat, { solid: true, uvScale: 0 });
  p.box('int', 1.72, 0.06, 0.82, -1.35, Y1 + 0.85, 1.25, warmFloor, { solid: true });     // Polished hardwood counter top!
  p.box('int', 0.56, 1.48, 0.74, -2.65, Y1 + 0.74, 3.25, fileCab, { solid: true, uvScale: 0 });
  p.box('int', 1.25, 0.96, 0.08, 0.15, Y1 + 1.68, -4.04, corkMat, { uvScale: 0 });
  p.stairRun('int', {
    x0: 2.25, z0: 2.15, x1: 2.25, z1: -1.80, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.08, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: true, railRight: false, closedRisers: false, guardLeft: true, guardRight: false,
  });

  // --- UNIT 3 (EAST ABANDONED MOSSY UNIT) 1F FURNISHINGS & STAIRCASE ---
  p.box('int', 0.10, h1 - 0.1, 7.6, 3.34, mid1, 0, mossyWall);
  p.box('int', 0.54, 1.75, 1.55, 3.68, Y1 + 0.88, -2.45, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 1.25, 1.05, 0.52, 4.95, Y1 + 0.54, -3.55, dresserMat, { solid: true, rz: 0.10, uvScale: 0 }); // Tilted dresser!
  p.box('int', 1.45, 0.78, 1.15, 4.55, Y1 + 0.40, 0.85, coarseCanvas, { solid: true }); // Canvas-draped crates
  p.box('int', 0.54, 1.80, 1.25, 3.65, Y1 + 0.92, 2.75, cabMat, { solid: true, uvScale: 0 });
  p.stairRun('int', {
    x0: 8.75, z0: 2.15, x1: 8.75, z1: -1.80, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.08, steps: 14, treadMat: agedTimber, stringerMat: timberDark, railMat: agedTimber,
    railLeft: true, railRight: false, closedRisers: false, guardLeft: true, guardRight: false,
  });

  // =========================================================================
  // 3. 2F: THREE INTERCONNECTED ROOMS + 19.4m FULL-WIDTH FRONT TIMBER BALCONY!
  // =========================================================================
  const h2 = YTOP - Y2; // 2.95m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs with 3 clean stairwell cutouts:
  //   Unit 1 West cutout:   X ∈ [-9.72, -8.04], Z ∈ [-1.86, +2.26]
  //   Unit 2 Center cutout: X ∈ [+1.54, +3.12], Z ∈ [-1.86, +2.26]
  //   Unit 3 East cutout:   X ∈ [+8.04, +9.72], Z ∈ [-1.86, +2.26]
  // Continuous North landing strip Z ∈ [-4.20, -1.86] across ALL 19.6m!
  p.box('int', 19.60, 0.16, 2.34, 0, Y2 - 0.06, -3.03, warmFloor);
  // Continuous South balcony-corridor strip Z ∈ [+2.26, +4.20] across ALL 19.6m!
  p.box('int', 19.60, 0.16, 1.96, 0, Y2 - 0.06, 3.22, warmFloor);
  // Middle floor islands between the 3 stairwells (Z ∈ [-1.86, +2.26])
  p.box('int', 9.58, 0.16, 4.14, -3.25, Y2 - 0.06, 0.20, warmFloor);     // X∈[-8.04,+1.54]
  p.box('int', 4.92, 0.16, 4.14, 5.58, Y2 - 0.06, 0.20, agedTimber);     // X∈[+3.12,+8.04]

  // Room Floor Overlays
  p.box('int', 4.6, 0.04, 6.2, -5.6, Y2 + 0.03, 0.6, tatamiPlain);       // Unit 1 2F family tatami
  p.box('int', 4.4, 0.04, 6.2, -0.8, Y2 + 0.03, 0.6, grayCarpet);        // Unit 2 2F common lounge carpet

  p.collider(-9.80, 9.80, Y2 - 0.16, Y2 + 0.02, -4.20, -1.86);
  p.collider(-9.80, 9.80, Y2 - 0.16, Y2 + 0.02, 2.26, 4.20);
  p.collider(-8.04, 1.54, Y2 - 0.16, Y2 + 0.02, -1.86, 2.26);
  p.collider(3.12, 8.04, Y2 - 0.16, Y2 + 0.02, -1.86, 2.26);

  p.floor(-9.68, 9.68, -4.08, -1.80, Y2 + 0.04);
  p.floor(-9.68, 9.68, 2.22, 4.15, Y2 + 0.04);
  p.floor(-8.02, 1.52, -1.86, 2.26, Y2 + 0.04);
  p.floor(3.14, 8.02, -1.86, 2.26, Y2 + 0.04);

  // 2F Stairwell Guard Railings for ALL THREE staircases!
  p.kouranRailing('int', -8.04, -1.84, -8.04, 2.26, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', -9.68, 2.26, -8.04, 2.26, Y2, 0.94, timberDark, 0.50);
  p.kouranRailing('int', 1.54, -1.84, 1.54, 2.26, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', 1.54, 2.26, 3.12, 2.26, Y2, 0.94, timberDark, 0.50);
  p.kouranRailing('int', 8.04, -1.84, 8.04, 2.26, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', 8.04, 2.26, 9.68, 2.26, Y2, 0.94, timberDark, 0.50);

  // ★ 19.4m FULL-WIDTH CONTINUOUS 2F FRONT TIMBER BALCONY (X ∈ [-9.7, +9.7], Z ∈ [+4.20, +5.30])!
  p.box('ext', 19.55, 0.16, 1.14, 0, Y2 - 0.04, 4.76, warmFloor);
  p.kouranRailing('ext', -9.72, 5.28, 9.72, 5.28, Y2, 0.94, timberDark, 0.58);
  p.kouranRailing('ext', -9.72, 4.20, -9.72, 5.28, Y2, 0.94, timberDark, 0.52);
  p.kouranRailing('ext', 9.72, 4.20, 9.72, 5.28, Y2, 0.94, timberDark, 0.52);
  p.floor(-9.62, 9.62, 4.12, 5.22, Y2 + 0.04);

  // 2F Exterior Walls (White Plaster Shinkabe + Exposed Timber Columns + 3 Balcony Doorways!)
  const add2fFrontSeg = (x0: number, x1: number) => {
    p.box('ext', x1 - x0, h2, 0.22, (x0 + x1) * 0.5, mid2, 4.20, whitePlaster, { solid: true });
  };
  add2fFrontSeg(-9.80, -7.30);
  p.box('ext', 1.64, 0.68, 0.22, -6.50, Y2 + 2.61, 4.20, whitePlaster, { solid: true }); // Unit 1 balcony door
  add2fFrontSeg(-5.70, -0.80);
  p.box('ext', 1.64, 0.68, 0.22, 0.0, Y2 + 2.61, 4.20, whitePlaster, { solid: true });   // Unit 2 balcony door
  add2fFrontSeg(0.80, 5.70);
  p.box('ext', 1.64, 0.68, 0.22, 6.50, Y2 + 2.61, 4.20, whitePlaster, { solid: true });   // Unit 3 balcony door
  add2fFrontSeg(7.30, 9.80);

  // Exposed dark rhythmic shinkabe posts across full 19.6m facade!
  for (const px of [-9.82, -7.32, -5.68, -3.20, -0.82, 0.82, 3.20, 5.68, 7.32, 9.82]) {
    p.box('ext', 0.16, h2 + 0.06, 0.26, px, mid2, 4.22, timberDark);
  }
  p.box('ext', 19.65, h2, 0.22, 0, mid2, -4.20, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 8.45, -9.80, mid2, 0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 8.45, 9.80, mid2, 0, mossyWall, { solid: true });

  // 2F Party Walls at X = -3.20 & X = +3.20 with 1.55m connecting emergency passage Z ∈ [-3.70, -2.15]!
  for (const wx of [-3.20, 3.20]) {
    p.box('int', 0.18, h2, 0.52, wx, mid2, -3.95, washiWall, { solid: true });
    p.box('int', 0.18, 0.68, 1.60, wx, Y2 + 2.61, -2.92, washiWall, { solid: true });
    p.box('int', 0.18, h2, 6.38, wx, mid2, 1.02, washiWall, { solid: true });
  }

  // 2F Unit Furnishings
  // Unit 1: Family futons & dresser
  p.box('int', 1.45, 0.34, 2.05, -6.35, Y2 + 0.21, 0.20, futonMat, { solid: true, uvScale: 0 });
  p.box('int', 1.45, 0.34, 2.05, -4.55, Y2 + 0.21, 0.20, futonMat, { solid: true, uvScale: 0 });
  p.box('int', 1.25, 1.15, 0.48, -5.45, Y2 + 0.58, -3.82, dresserMat, { solid: true, uvScale: 0 });
  // Unit 2: Miners' common shogi/book lounge + valve pipe shelf!
  p.box('int', 1.85, 1.95, 0.52, -1.65, Y2 + 0.98, -3.82, bookcaseMat, { solid: true, uvScale: 0 });
  p.box('int', 0.52, 1.65, 1.55, -2.82, Y2 + 0.84, 0.35, valvePipes, { solid: true, uvScale: 0 });
  p.box('int', 1.15, 0.42, 1.15, -0.55, Y2 + 0.22, 0.45, timberDark, { solid: true });
  // Unit 3: Abandoned canvas-curtained loft & mossy walls
  p.box('int', 0.56, 1.85, 1.35, 3.62, Y2 + 0.94, 0.65, wardrobeMat, { solid: true, uvScale: 0 });
  p.box('int', 2.25, 2.15, 0.05, 5.55, Y2 + 1.85, -1.45, coarseCanvas, { uvScale: 0 });
  p.box('int', 1.35, 0.46, 0.72, 6.15, Y2 + 0.24, 0.95, agedTimber, { solid: true, ry: 0.35 });

  // =========================================================================
  // 4. MONUMENTAL 21.2m CONTINUOUS HON-GAWARA KIRIZUMA ROOF + 20.6m 1F PORCH EAVE!
  // =========================================================================
  // 1F Full-Length 20.6m Covered Street Portico Hon-gawara Eave
  p.kawaraSlope('ext', {
    bottomWidth: 20.6,
    run: 1.72,
    pitch: 0.34,
    ridgeX: 0,
    ridgeY: Y2 + 0.14,
    ridgeZ: 4.18,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.40,
  });

  // 2F Monumental 21.2m Continuous Miners' Rowhouse Kirizuma Hon-gawara Roof!
  const mainPitch = 0.46;
  const mainRun = 5.45; // Covers full 2F front balcony & rear walls cleanly!
  const mainRidgeY = YTOP + mainRun * Math.tan(mainPitch) - 0.10; // ~9.10m
  const mainBotW = 21.20;
  const gableH = mainRidgeY - YTOP + 0.10;

  p.gablePrism('ext', 8.50, gableH, 0.24, -9.80, YTOP - 0.04, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 8.50, gableH, 0.24, 9.80, YTOP - 0.04, 0, mossyWall, { ry: Math.PI * 0.5 });

  p.kawaraSlope('ext', {
    bottomWidth: mainBotW,
    run: mainRun,
    pitch: mainPitch,
    ridgeX: 0,
    ridgeY: mainRidgeY,
    ridgeZ: 0,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.40,
  });
  p.kawaraSlope('ext', {
    bottomWidth: mainBotW,
    run: mainRun,
    pitch: mainPitch,
    ridgeX: 0,
    ridgeY: mainRidgeY,
    ridgeZ: 0,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.40,
  });
  p.kawaraRidge(
    'ext',
    -mainBotW * 0.5 + 0.06,
    mainRidgeY + 0.04,
    0,
    mainBotW * 0.5 - 0.06,
    mainRidgeY + 0.04,
    0,
    kawaraRidge,
    oniMat,
    { scale: 1.16, courses: 3, oniStart: true, oniEnd: true }
  );

  return p.build({
    id: 'H21',
    name: '第一坑夫長屋（19.6m三戸連棟炭住長屋）',
    subtitle: '全3戸個別間取り＆階段・2F通し高欄回廊・21m連続本瓦大屋根',
    category: 'house',
    builtYear: 1893,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1, Y2],
    entryLocal: [0.0, 0.0, 7.6],
    entryLookLocalYaw: 0,
  });
}
