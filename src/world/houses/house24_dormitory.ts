import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H24: 旧黒磯炭鉱 詰所兼独身寮（1895年築・1952年昭和増築・幅16.4m三階建）— 3階建
 * 上段山腹道北端（標高285m・1890年炭鉱坑口＆865m山頂獣道直前）に建つ、炭鉱現場詰所＋共同浴場＋独身寄宿舎。
 *  - 外観: アスファルト舗装＆縁石の前庭、幅16.4mの木造×波トタン折衷寄宿舎＋東側屋根付き屋外非常階段塔！
 *  - 1F西 (Y=+0.45m): 現場詰所＆保安室（事務カウンター・炭鉱制御盤・バルブ配管・シフト緑黒板・書類庫・琺瑯看板）。
 *  - 1F東 (Y=+0.45m): 坑夫の「青モザイクタイル共同浴場（段差付大浴槽・洗い場・脱衣棚・ボイラー室重鉄戸）」。
 *  - 2F (Y=+3.55m): 南側16.4m通し日向廊下＆16.2m木製高欄ベランダ＋北側に完全個別の独身個室4室（201〜204号室）！
 *    西屋内大階段と東屋外非常階段の両方から1F↔2Fを自在に周回可能！
 *  - 3F (Y=+6.55m): 食堂兼娯楽集会室（長テーブル×2・配膳台所・島地図＆掲示板・865m山頂パノラマ窓）＋越屋根排気塔！
 */
export function buildHouse24Dormitory(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Mining Dispatch, Bathhouse & Dormitory Materials ---
  const asphaltDark = catalog.getMaterial('asphalt_dark', { roughness: 0.94, bumpScale: 0.05 });
  const patchedAsphalt = catalog.getMaterial('patched_asphalt', { roughness: 0.94, bumpScale: 0.06 });
  const concreteCurb = catalog.getMaterial('concrete_curb', { roughness: 0.90, bumpScale: 0.05 });
  const smoothConc = catalog.getMaterial('smooth_concrete_dark', { roughness: 0.88, bumpScale: 0.04 });
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });

  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.90, bumpScale: 0.05 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.91, bumpScale: 0.05 });
  const horizWood = catalog.getMaterial('horizontal_wood_siding', { roughness: 0.88, bumpScale: 0.05 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xf0ebe0 });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const mossyWall = catalog.getMaterial('mossy_wall_patch', { roughness: 0.94, bumpScale: 0.06 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.82, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.80, bumpScale: 0.03 });
  const greenMat = catalog.getMaterial('green_textured_mat', { roughness: 0.90, bumpScale: 0.03 });

  // --- Industrial Showa Tin, Steel, Bath Tiles & Mining Props ---
  const galvZinc = catalog.getMaterial('galvanized_zinc', { roughness: 0.62, metalness: 0.44, bumpScale: 0.05 });
  const corrGray = catalog.getMaterial('corrugated_gray', { roughness: 0.66, metalness: 0.36, bumpScale: 0.06 });
  const steelTruss = catalog.getMaterial('steel_truss_wall', { roughness: 0.62, metalness: 0.52, bumpScale: 0.05 });
  const mineDoor = catalog.getMaterial('mine_steel_door', { roughness: 0.66, metalness: 0.50, bumpScale: 0.05 });
  const minePanel = catalog.getMaterial('mine_control_panel', { roughness: 0.62, metalness: 0.45, bumpScale: 0.04 });
  const valvePipes = catalog.getMaterial('mine_valve_pipes', { roughness: 0.62, metalness: 0.55, bumpScale: 0.06 });
  const blueMosaic = catalog.getMaterial('blue_mosaic_tile', { roughness: 0.36, bumpScale: 0.03 });
  const whiteTile = catalog.getMaterial('white_bath_tile', { roughness: 0.44, bumpScale: 0.02 });
  const retroTile = catalog.getMaterial('retro_tile_wall', { roughness: 0.48, bumpScale: 0.03 });
  const darkWater = catalog.getMaterial('smooth_concrete_dark', { roughness: 0.16, metalness: 0.18, tint: 0x264c62 });

  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.30, opacity: 0.34, transparent: true });
  const clearGlass = catalog.getMaterial('window_frosted_wood', { roughness: 0.22, opacity: 0.22, transparent: true, tint: 0xdcebf4 });
  const louverMat = catalog.getMaterial('cedar_louvers', { roughness: 0.86, bumpScale: 0.05 });
  const darkGreenChalk = catalog.getMaterial('dark_green_chalk', { roughness: 0.88, bumpScale: 0.02 });
  const counterMat = catalog.getMaterial('office_counter', { roughness: 0.80, bumpScale: 0.03 });
  const fileCab = catalog.getMaterial('file_cabinet', { roughness: 0.66, metalness: 0.25 });
  const enamelBlue = catalog.getMaterial('enamel_sign_blue', { roughness: 0.46, metalness: 0.32 });
  const noticeMat = catalog.getMaterial('notice_board', { roughness: 0.88, bumpScale: 0.02 });
  const corkMat = catalog.getMaterial('cork_board', { roughness: 0.92, bumpScale: 0.03 });
  const mapSign = catalog.getMaterial('island_map_sign', { roughness: 0.80, bumpScale: 0.02 });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.88, bumpScale: 0.04 });
  const coarseCanvas = catalog.getMaterial('coarse_canvas', { roughness: 0.95, bumpScale: 0.05, doubleSide: true });
  const bookcaseMat = catalog.getMaterial('full_bookcase', { roughness: 0.84, bumpScale: 0.04 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.78, bumpScale: 0.03 });
  const tatamiPlain = catalog.getMaterial('tatami_plain', { roughness: 0.92, bumpScale: 0.04 });
  const grayCarpet = catalog.getMaterial('woven_carpet_gray', { roughness: 0.94, bumpScale: 0.04 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.92, bumpScale: 0.03 });
  const dresserMat = catalog.getMaterial('wooden_dresser', { roughness: 0.82, bumpScale: 0.03 });
  const wardrobeMat = catalog.getMaterial('wardrobe_wood', { roughness: 0.82, bumpScale: 0.03 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });

  // --- Weathered Iron-Slate Mining Dormitory Hon-gawara (炭鉱鉄灰いぶし本瓦) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.72, metalness: 0.20, bumpScale: 0.06, tint: 0x8e959c });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.68, metalness: 0.24, bumpScale: 0.05, tint: 0x7a8188 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.60, metalness: 0.32, tint: 0x666d74 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.52, metalness: 0.42, tint: 0x545a60 });

  const Y1 = 0.45;
  const Y2 = 3.55;
  const Y3 = 6.55;
  const YTOP = 9.45;

  // =========================================================================
  // 1. ASPHALT MARSHALING YARD APRON, CONCRETE PLINTH & EAST ESCAPE STAIR BASE
  // =========================================================================
  p.box('ext', 17.0, 2.80, 9.5, 0, Y1 - 1.42, 0, smoothConc);
  // Front Miners' Asphalt Marshaling Apron & Concrete Curb (Z ∈ [+4.50, +6.65])
  p.box('ext', 16.8, 0.10, 2.15, 0, 0.02, 5.58, asphaltDark);
  p.box('ext', 5.4, 0.11, 1.85, 3.2, 0.025, 5.55, patchedAsphalt);
  p.box('ext', 17.0, 0.16, 0.20, 0, 0.06, 6.66, concreteCurb);
  // Main Dispatch Entry Steps (X = -3.50, Z: +5.55 -> +4.48, Y: 0 -> Y1)
  p.stoneSteps('ext', -3.50, 5.55, 4.48, -0.04, Y1, 2.50, 3, stepStone);
  // 1952 Showa Corrugated Steel Front Entrance Porch Posts & Canopy!
  for (const px of [-5.20, -1.80]) {
    p.box('ext', 0.18, 2.95, 0.18, px, Y1 + 1.48, 5.85, timberDark, { solid: true });
  }
  p.box('ext', 3.70, 0.14, 1.65, -3.50, Y1 + 2.96, 5.15, galvZinc, { rx: 0.14 });

  // ★ EAST EXTERIOR COVERED ESCAPE STAIR LANDINGS (X ∈ [+8.20, +10.00])!
  // 1F East Ground-to-Landing Apron (Z ∈ [-4.30, +4.30])
  p.box('ext', 1.95, 2.40, 8.80, 9.12, Y1 - 1.22, 0.0, cutStone);
  p.box('ext', 1.88, 0.10, 8.70, 9.12, Y1 - 0.02, 0.0, smoothConc);
  p.floor(8.15, 9.95, -4.20, 4.20, Y1 + 0.04);
  p.stoneSteps('ext', 9.10, 5.35, 4.30, -0.04, Y1, 1.80, 3, stepStone);
  // East Exterior Steel-Timber Escape Staircase (1F North Z=-2.20 -> 2F South Z=+2.10!)
  p.stairRun('ext', {
    x0: 9.10, z0: -2.20, x1: 9.10, z1: 2.10, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.18, steps: 14, treadMat: agedTimber, stringerMat: timberDark, railMat: timberDark,
    railLeft: true, railRight: true, closedRisers: false, guardLeft: true, guardRight: true,
  });
  // East 2F Exterior Stair Arrival Deck (X ∈ [+8.20, +10.00], Z ∈ [+2.08, +4.30])
  p.box('ext', 1.90, 0.16, 2.30, 9.12, Y2 - 0.06, 3.20, warmFloor);
  p.floor(8.15, 9.95, 2.06, 4.25, Y2 + 0.04);
  p.kouranRailing('ext', 9.98, 2.08, 9.98, 4.30, Y2, 0.96, timberDark, 0.52);
  p.kouranRailing('ext', 8.20, 4.30, 9.98, 4.30, Y2, 0.96, timberDark, 0.48);
  // Exterior Escape Stair Tower Posts & Showa Corrugated Canopy
  for (const pz of [-4.20, 0.0, 4.20]) {
    p.box('ext', 0.18, Y3 - Y1, 0.18, 9.95, Y1 + (Y3 - Y1) * 0.5, pz, timberDark);
  }
  p.box('ext', 2.25, 0.12, 9.00, 9.18, Y3 + 0.08, 0.0, corrGray, { rz: -0.18 });

  // =========================================================================
  // 2. 1F: WEST MINE DISPATCH OFFICE & EAST MINERS' COMMUNAL BATHHOUSE (Y1 = +0.45m)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.10m
  const mid1 = Y1 + h1 * 0.5;

  // 1F Floors
  p.box('int', 8.05, 0.12, 8.95, -4.18, Y1 - 0.04, 0, smoothConc);        // West Dispatch Concrete Floor
  p.box('int', 8.45, 0.12, 8.95, 3.98, Y1 - 0.04, 0, whiteTile);          // East Communal Bath Tiled Floor!
  p.box('int', 1.25, 0.03, 0.72, -3.50, Y1 + 0.04, 4.08, coirMat, { uvScale: 0 });
  p.floor(-8.08, 8.15, -4.38, 4.50, Y1 + 0.04);

  // 1F Exterior Walls (Charred Cedar + Horizontal Timber + Showa Safety Plaque!)
  // Front 1F (+Z = +4.50): Main Dispatch Entry X ∈ [-4.60, -2.40] (2.20m wide!)
  p.box('ext', 3.64, 1.05, 0.24, -6.40, Y1 + 0.52, 4.50, cedarDark, { solid: true });
  p.box('ext', 3.64, h1 - 1.05, 0.24, -6.40, Y1 + 2.08, 4.50, horizWood, { solid: true });
  p.box('ext', 2.24, 0.72, 0.24, -3.50, Y2 - 0.36, 4.50, horizWood, { solid: true });
  p.box('ext', 2.26, 0.09, 0.28, -3.50, Y2 - 0.72, 4.50, timberDark);
  p.box('ext', 1.25, 0.76, 0.08, -5.65, Y1 + 1.85, 4.66, enamelBlue, { uvScale: 0 }); // Mine Safety Enamel Plaque!
  p.box('ext', 10.65, 1.15, 0.24, 2.90, Y1 + 0.58, 4.50, cedarDark, { solid: true });
  p.box('ext', 1.50, h1 - 1.15, 0.24, -1.68, Y1 + 2.12, 4.50, horizWood, { solid: true });
  p.box('ext', 3.40, 0.56, 0.24, 0.75, Y2 - 0.28, 4.50, horizWood, { solid: true });
  p.box('ext', 3.44, 0.08, 0.28, 0.75, Y1 + 1.16, 4.50, timberDark);
  p.box('ext', 3.44, 0.08, 0.28, 0.75, Y2 - 0.56, 4.50, timberDark);
  p.box('ext', 3.36, 1.38, 0.06, 0.75, Y1 + 1.86, 4.50, glassMat, { uvScale: 0 });
  p.box('ext', 5.80, h1 - 1.15, 0.24, 5.32, Y1 + 2.12, 4.50, corrGray, { solid: true }); // Bathhouse frosted/tin flank

  // Back 1F (-Z = -4.50), West 1F (-X = -8.20), East 1F (+X = +8.20 with Steel Fire-Exit Door Z ∈ [+2.00, +3.70]!)
  p.box('ext', 16.45, 1.05, 0.24, 0, Y1 + 0.52, -4.50, cedarDark, { solid: true });
  p.box('ext', 16.45, h1 - 1.05, 0.24, 0, Y1 + 2.08, -4.50, horizWood, { solid: true });
  p.box('ext', 0.24, 1.05, 9.06, -8.20, Y1 + 0.52, 0, cedarDark, { solid: true });
  p.box('ext', 0.24, h1 - 1.05, 9.06, -8.20, Y1 + 2.08, 0, horizWood, { solid: true });
  p.box('ext', 0.24, h1, 6.52, 8.20, mid1, -1.26, corrGray, { solid: true });
  p.box('ext', 0.24, 0.72, 1.74, 8.20, Y2 - 0.36, 2.85, corrGray, { solid: true });
  p.box('ext', 0.28, 0.09, 1.78, 8.20, Y2 - 0.72, 2.85, timberDark);
  p.box('ext', 0.24, h1, 0.84, 8.20, mid1, 4.10, corrGray, { solid: true });
  p.box('ext', 0.10, 2.28, 1.15, 8.58, Y1 + 1.14, 1.62, mineDoor, { ry: 0.72, uvScale: 0 }); // Boiler fire exit door ajar!

  // Internal 1F Partition dividing Dispatch Office & Bathhouse at X = -0.40 (Doorway Z ∈ [+1.60, +3.35]!)
  p.box('int', 0.20, h1, 6.12, -0.40, mid1, -1.46, whiteTile, { solid: true });
  p.box('int', 0.20, 0.72, 1.80, -0.40, Y2 - 0.36, 2.48, whiteTile, { solid: true });
  p.box('int', 0.24, 0.09, 1.82, -0.40, Y2 - 0.72, 2.48, timberDark);
  p.box('int', 0.20, h1, 1.18, -0.40, mid1, 3.92, whiteTile, { solid: true });

  // --- 1F WEST MINE DISPATCH & SAFETY OFFICE FURNISHINGS ---
  p.box('int', 2.45, 0.84, 0.80, -2.95, Y1 + 0.42, 0.35, counterMat, { solid: true, uvScale: 0 });
  p.box('int', 2.54, 0.06, 0.86, -2.95, Y1 + 0.87, 0.35, warmFloor, { solid: true });     // Solid timber dispatch counter top!
  p.box('int', 2.65, 1.50, 0.05, -2.95, Y1 + 1.72, -4.34, timberDark);                    // Cedar chalkboard frame
  p.box('int', 2.52, 1.38, 0.06, -2.95, Y1 + 1.72, -4.30, darkGreenChalk, { uvScale: 0 }); // Shift safety roster!
  p.box('int', 1.48, 1.68, 0.56, -5.15, Y1 + 0.84, -4.05, minePanel, { solid: true, uvScale: 0 });
  p.box('int', 0.14, 2.15, 2.45, -0.60, Y1 + 1.25, -2.25, valvePipes, { uvScale: 0 });    // Boiler steam valve manifold!
  p.box('int', 0.58, 1.50, 0.76, -0.82, Y1 + 0.75, 0.65, fileCab, { solid: true, uvScale: 0 });

  // --- 1F EAST MINERS' COMMUNAL MOSAIC-TILE BATHHOUSE (共同浴場!) ---
  p.box('int', 8.20, h1 - 0.1, 0.10, 3.95, mid1, -4.34, retroTile);                       // Retro tiled bath rear wall!
  // Large Blue-Mosaic Communal Soaking Tub (X ∈ [+1.55, +5.45], Z ∈ [-3.95, -0.85]) — tiled rim + dark basin!
  p.box('int', 3.95, 0.58, 0.28, 3.50, Y1 + 0.29, -0.85, blueMosaic, { solid: true });    // South rim
  p.box('int', 3.95, 0.58, 0.28, 3.50, Y1 + 0.29, -3.95, blueMosaic, { solid: true });    // North rim
  p.box('int', 0.28, 0.58, 3.10, 1.55, Y1 + 0.29, -2.40, blueMosaic, { solid: true });    // West rim
  p.box('int', 0.28, 0.58, 3.10, 5.45, Y1 + 0.29, -2.40, blueMosaic, { solid: true });    // East rim
  p.box('int', 3.65, 0.42, 2.85, 3.50, Y1 + 0.21, -2.40, darkWater, { solid: true });     // Still deep tub water basin
  // Changing-room wooden locker racks & Boiler room steel-truss divider
  p.box('int', 2.45, 1.85, 0.54, 1.85, Y1 + 0.92, 4.02, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 0.16, h1, 4.65, 6.45, mid1, -2.10, steelTruss, { solid: true, uvScale: 0 }); // Boiler truss screen!

  // West Internal Wide Dorm Staircase (1F North Z=-2.10 -> 2F South Corridor Z=+2.25!)
  p.stairRun('int', {
    x0: -7.05, z0: -2.10, x1: -7.05, z1: 2.25, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.20, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: true, railRight: false, closedRisers: false, guardLeft: true, guardRight: false,
  });

  // =========================================================================
  // 3. 2F: SUNLIT 16.4m CORRIDOR + 4 INDIVIDUAL BACHELORS' ROOMS (201-204) + FRONT BALCONY!
  // =========================================================================
  const h2 = Y3 - Y2; // 3.00m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs (cutout for West 1F->2F stair: X ∈ [-8.12, -6.32], Z ∈ [-2.18, +2.34])
  p.box('int', 14.54, 0.16, 8.60, 0.94, Y2 - 0.06, 0, oakFloor);           // Main X∈[-6.32,+8.22]
  p.box('int', 1.92, 0.16, 2.15, -7.24, Y2 - 0.06, -3.24, oakFloor);       // NW Strip Z∈[-4.30,-2.16]
  p.box('int', 1.92, 0.16, 2.00, -7.24, Y2 - 0.06, 3.32, oakFloor);        // SW Arrival Z∈[+2.32,+4.30]
  // Room-specific floor overlays for the 4 Bachelors' Dormitory Cubicles!
  p.box('int', 2.55, 0.04, 5.45, -4.92, Y2 + 0.03, -1.45, tatamiPlain);    // Room 201 tatami
  p.box('int', 3.40, 0.04, 5.45, 2.58, Y2 + 0.03, -1.45, grayCarpet);      // Room 203 carpet
  // Full 2F Wooden Dormitory Ceiling outside the central 2F->3F stairwell cutout (X∈[-0.68,+0.68], Z∈[-2.18,+1.78])!
  p.box('int', 7.50, 0.08, 8.56, -4.44, Y3 - 0.06, 0, agedTimber);
  p.box('int', 7.50, 0.08, 8.56, 4.44, Y3 - 0.06, 0, agedTimber);
  p.box('int', 1.42, 0.08, 2.12, 0.0, Y3 - 0.06, -3.24, agedTimber);
  p.box('int', 1.42, 0.08, 2.52, 0.0, Y3 - 0.06, 3.04, agedTimber);
  p.collider(-6.32, 8.20, Y2 - 0.16, Y2 + 0.02, -4.30, 4.30);
  p.collider(-8.20, -6.32, Y2 - 0.16, Y2 + 0.02, -4.30, -2.18);
  p.collider(-8.20, -6.32, Y2 - 0.16, Y2 + 0.02, 2.34, 4.30);
  p.floor(-6.28, 8.25, -4.18, 4.38, Y2 + 0.04);
  p.floor(-8.08, -6.24, -4.18, -2.12, Y2 + 0.04);
  p.floor(-8.08, -6.24, 2.28, 4.24, Y2 + 0.04);

  p.kouranRailing('int', -6.32, -2.18, -6.32, 2.34, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', -8.08, -2.18, -6.32, -2.18, Y2, 0.94, timberDark, 0.48);

  // ★ 2F FULL-WIDTH 16.2m FRONT TIMBER DORMITORY BALCONY (X ∈ [-8.10, +8.10], Z ∈ [+4.30, +5.38])!
  p.box('ext', 16.30, 0.16, 1.14, 0, Y2 - 0.04, 4.84, warmFloor);
  p.kouranRailing('ext', -8.10, 5.36, 8.10, 5.36, Y2, 0.94, timberDark, 0.58);
  p.kouranRailing('ext', -8.10, 4.30, -8.10, 5.36, Y2, 0.94, timberDark, 0.50);
  p.kouranRailing('ext', 8.10, 4.30, 8.10, 5.36, Y2, 0.94, timberDark, 0.50);
  p.floor(-8.00, 8.00, 4.22, 5.30, Y2 + 0.04);

  // 2F Exterior Walls (White Plaster Shinkabe + 2 Balcony Doorways + East Exterior Escape Door!)
  // Front 2F (+Z = +4.30): Balcony doors at X ∈ [-5.0, -3.4] and X ∈ [+3.4, +5.0]!
  p.box('ext', 3.22, h2, 0.22, -6.60, mid2, 4.30, whitePlaster, { solid: true });
  p.box('ext', 1.64, 0.68, 0.22, -4.20, Y3 - 0.34, 4.30, whitePlaster, { solid: true });
  p.box('ext', 1.66, 0.09, 0.26, -4.20, Y3 - 0.68, 4.30, timberDark);
  p.box('ext', 6.84, 0.90, 0.22, 0.0, Y2 + 0.45, 4.30, whitePlaster, { solid: true });
  p.box('ext', 1.10, h2 - 0.90, 0.22, -2.86, Y2 + 1.95, 4.30, whitePlaster, { solid: true });
  p.box('ext', 4.65, 0.52, 0.22, 0.0, Y3 - 0.26, 4.30, whitePlaster, { solid: true });
  p.box('ext', 4.68, 0.08, 0.26, 0.0, Y2 + 0.92, 4.30, timberDark);
  p.box('ext', 4.68, 0.08, 0.26, 0.0, Y3 - 0.52, 4.30, timberDark);
  p.box('ext', 4.60, 1.54, 0.06, 0.0, Y2 + 1.70, 4.30, glassMat, { uvScale: 0 });
  p.box('ext', 1.10, h2 - 0.90, 0.22, 2.86, Y2 + 1.95, 4.30, whitePlaster, { solid: true });
  p.box('ext', 1.64, 0.68, 0.22, 4.20, Y3 - 0.34, 4.30, whitePlaster, { solid: true });
  p.box('ext', 1.66, 0.09, 0.26, 4.20, Y3 - 0.68, 4.30, timberDark);
  p.box('ext', 3.22, h2, 0.22, 6.60, mid2, 4.30, whitePlaster, { solid: true });

  // Back 2F (-Z = -4.30), West 2F (-X = -8.20), East 2F (+X = +8.20 with Exterior Escape Door Z ∈ [+2.25, +3.90]!)
  p.box('ext', 16.45, h2, 0.22, 0, mid2, -4.30, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 8.66, -8.20, mid2, 0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 6.58, 8.20, mid2, -1.04, whitePlaster, { solid: true });
  p.box('ext', 0.22, 0.68, 1.68, 8.20, Y3 - 0.34, 3.08, whitePlaster, { solid: true });
  p.box('ext', 0.26, 0.09, 1.70, 8.20, Y3 - 0.68, 3.08, timberDark);
  p.box('ext', 0.22, h2, 0.44, 8.20, mid2, 4.10, whitePlaster, { solid: true });

  // ★ 4 INDIVIDUAL BACHELORS' CUBICLE ROOMS ALONG NORTH SIDE (Z ∈ [-4.30, +1.50], Open Doors onto South Corridor!)
  // Dividing walls between Rooms 201 | 202 | Central Stair Bay | 203 | 204
  for (const wx of [-6.25, -3.55, -0.78, 0.78, 4.40]) {
    p.box('int', 0.16, h2, 5.80, wx, mid2, -1.40, washiWall, { solid: true });
  }
  // Corridor Front Partitions at Z = +1.50 with 1.35m wide open doorways into every room!
  const addDormDoorWall = (x0: number, x1: number, doorCenter: number) => {
    const d0 = doorCenter - 0.68;
    const d1 = doorCenter + 0.68;
    if (d0 - x0 > 0.12) p.box('int', d0 - x0, h2, 0.14, (x0 + d0) * 0.5, mid2, 1.50, washiWall, { solid: true });
    p.box('int', 1.40, 0.72, 0.14, doorCenter, Y3 - 0.36, 1.50, washiWall, { solid: true });
    p.box('int', 1.42, 0.08, 0.18, doorCenter, Y3 - 0.72, 1.50, timberDark);
    if (x1 - d1 > 0.12) p.box('int', x1 - d1, h2, 0.14, (d1 + x1) * 0.5, mid2, 1.50, washiWall, { solid: true });
  };
  addDormDoorWall(-6.25, -3.55, -4.90); // Room 201
  addDormDoorWall(-3.55, -0.78, -2.15); // Room 202
  addDormDoorWall(0.78, 4.40, 2.55);    // Room 203
  addDormDoorWall(4.40, 8.20, 6.25);    // Room 204

  // Individual Furnishings for Rooms 201, 202, 203, 204!
  // Room 201: Veteran miner's tidy tatami room
  p.box('int', 1.45, 0.18, 2.05, -4.95, Y2 + 0.12, -2.75, futonMat, { solid: true, uvScale: 0 });
  p.box('int', 0.50, 1.12, 1.25, -5.85, Y2 + 0.56, -0.25, dresserMat, { solid: true, uvScale: 0 });
  // Room 202: Gear & survey locker room
  p.box('int', 0.54, 1.85, 1.75, -3.12, Y2 + 0.92, -2.45, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 1.25, 0.76, 0.96, -1.80, Y2 + 0.40, -3.25, coarseCanvas, { solid: true });
  p.box('int', 1.15, 0.88, 0.06, -2.15, Y2 + 1.65, -4.14, corkMat, { uvScale: 0 });
  // Room 203: Union clerk's study room
  p.box('int', 0.52, 1.98, 1.85, 1.18, Y2 + 0.99, -2.45, bookcaseMat, { solid: true, uvScale: 0 });
  p.box('int', 1.38, 0.74, 0.72, 2.85, Y2 + 0.37, -3.72, timberDark, { solid: true });
  p.box('int', 1.44, 0.05, 0.78, 2.85, Y2 + 0.76, -3.72, warmFloor, { solid: true });
  // Room 204: 1985 mossy abandoned dorm room!
  p.box('int', 0.10, h2 - 0.1, 5.4, 8.04, mid2, -1.40, mossyWall);
  p.box('int', 0.56, 1.85, 1.28, 7.55, Y2 + 0.92, -2.55, wardrobeMat, { solid: true, rz: 0.08, uvScale: 0 });
  p.box('int', 0.60, 0.07, 0.60, 6.05, Y2 + 0.07, -1.85, zabutonMat, { uvScale: 0 });

  // Central 2F -> 3F Staircase (ENTIRELY inside 3F footprint X ∈ [-5.6, +5.6], Z ∈ [-3.5, +3.5]!)
  p.stairRun('int', {
    x0: 0.0, z0: 1.70, x1: 0.0, z1: -2.10, y0: Y2 + 0.04, y1: Y3 + 0.04,
    width: 1.14, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: true, railRight: true, closedRisers: false, guardLeft: true, guardRight: true,
  });

  // =========================================================================
  // 4. 3F: MINERS' UNION MESS HALL & RECREATION LOFT (11.2m x 7.0m, Y3 = +6.55m)
  // =========================================================================
  const h3 = YTOP - Y3; // 2.90m
  const mid3 = Y3 + h3 * 0.5;

  // 3F Floor Slabs (cutout X ∈ [-0.68, +0.68], Z ∈ [-2.18, +1.78])
  p.box('int', 4.94, 0.16, 7.00, -3.14, Y3 - 0.06, 0, greenMat);           // West Mess Hall X∈[-5.60,-0.68]
  p.box('int', 4.94, 0.16, 7.00, 3.14, Y3 - 0.06, 0, greenMat);            // East Recreation Loft X∈[+0.68,+5.60]
  p.box('int', 1.40, 0.16, 1.36, 0.0, Y3 - 0.06, -2.84, greenMat);         // North Arrival Z∈[-3.50,-2.16]
  p.box('int', 1.40, 0.16, 1.76, 0.0, Y3 - 0.06, 2.64, greenMat);          // South Bridge Z∈[+1.76,+3.50]
  p.collider(-5.60, -0.68, Y3 - 0.16, Y3 + 0.02, -3.50, 3.50);
  p.collider(0.68, 5.60, Y3 - 0.16, Y3 + 0.02, -3.50, 3.50);
  p.collider(-0.68, 0.68, Y3 - 0.16, Y3 + 0.02, -3.50, -2.18);
  p.collider(-0.68, 0.68, Y3 - 0.16, Y3 + 0.02, 1.78, 3.50);
  p.floor(-5.48, -0.64, -3.38, 3.38, Y3 + 0.04);
  p.floor(0.64, 5.48, -3.38, 3.38, Y3 + 0.04);
  p.floor(-0.70, 0.70, -3.38, -2.14, Y3 + 0.04);
  p.floor(-0.70, 0.70, 1.74, 3.38, Y3 + 0.04);

  p.kouranRailing('int', -0.68, -2.18, -0.68, 1.78, Y3, 0.94, timberDark, 0.56);
  p.kouranRailing('int', 0.68, -2.18, 0.68, 1.78, Y3, 0.94, timberDark, 0.56);
  p.kouranRailing('int', -0.68, 1.78, 0.68, 1.78, Y3, 0.94, timberDark, 0.45);

  // 3F Exterior Walls (Timber-Framed Panoramic Windows overlooking the 865m Summit & Mine Valley!)
  for (const sz of [-3.50, 3.50]) {
    p.box('ext', 11.25, 0.86, 0.22, 0, Y3 + 0.43, sz, whitePlaster, { solid: true });
    p.box('ext', 2.25, h3 - 0.86, 0.22, -4.50, Y3 + 1.88, sz, whitePlaster, { solid: true });
    p.box('ext', 2.25, h3 - 0.86, 0.22, 4.50, Y3 + 1.88, sz, whitePlaster, { solid: true });
    p.box('ext', 6.75, 0.48, 0.22, 0, YTOP - 0.24, sz, whitePlaster, { solid: true });
    p.box('ext', 6.78, 0.08, 0.26, 0, Y3 + 0.88, sz, timberDark);
    p.box('ext', 6.78, 0.09, 0.26, 0, YTOP - 0.48, sz, timberDark);
    for (const mx of [-1.68, 0.0, 1.68]) p.box('ext', 0.08, 1.54, 0.14, mx, Y3 + 1.64, sz, timberDark);
    p.box('ext', 6.68, 1.52, 0.06, 0, Y3 + 1.64, sz, clearGlass, { uvScale: 0 });
  }
  p.box('ext', 0.22, h3, 7.04, -5.60, mid3, 0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h3, 7.04, 5.60, mid3, 0, whitePlaster, { solid: true });

  // 3F Mess Hall Communal Dining Tables, Serving Kitchen & Union Recreation Props!
  for (const tx of [-3.55, -2.05]) {
    p.box('int', 0.82, 0.06, 2.85, tx, Y3 + 0.74, 0.35, warmFloor, { solid: true });
    p.box('int', 0.68, 0.72, 0.08, tx, Y3 + 0.36, -0.88, timberDark, { solid: true });
    p.box('int', 0.68, 0.72, 0.08, tx, Y3 + 0.36, 1.58, timberDark, { solid: true });
  }
  p.box('int', 2.05, 0.92, 0.64, -3.55, Y3 + 0.46, -3.02, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 1.55, 1.12, 0.06, 5.42, Y3 + 1.72, -1.25, mapSign, { ry: -Math.PI * 0.5, uvScale: 0 });
  p.box('int', 1.35, 1.02, 0.06, 5.42, Y3 + 1.72, 1.25, noticeMat, { ry: -Math.PI * 0.5, uvScale: 0 });
  p.box('int', 1.35, 1.35, 0.52, 3.25, Y3 + 0.68, -3.02, tansuMat, { solid: true, uvScale: 0 });

  // =========================================================================
  // 5. TWO-TIER IRON-SLATE HON-GAWARA & KOSHIYANE EXHAUST CUPOLA ROOF!
  // =========================================================================
  // A. 1F Front Long Kawara Skirt Eave
  p.kawaraSlope('ext', {
    bottomWidth: 17.4, run: 1.32, pitch: 0.34,
    ridgeX: 0, ridgeY: Y2 + 0.08, ridgeZ: 4.46, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.40,
  });

  // B. 2F Flanking Kawara Skirt Roofs wrapping the 3F Mess Hall (full 17.8m wide!)
  const sk2Pitch = 0.40;
  p.kawaraSlope('ext', {
    topWidth: 11.4, bottomWidth: 17.8, run: 2.35, pitch: sk2Pitch,
    ridgeX: 0, ridgeY: Y3 + 0.50, ridgeZ: 3.48, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.40,
  });
  p.kawaraSlope('ext', {
    topWidth: 11.4, bottomWidth: 17.8, run: 1.85, pitch: sk2Pitch,
    ridgeX: 0, ridgeY: Y3 + 0.40, ridgeZ: -3.48, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.40,
  });
  p.kawaraSlope('ext', {
    topWidth: 7.2, bottomWidth: 10.6, run: 3.35, pitch: sk2Pitch,
    ridgeX: 5.58, ridgeY: Y3 + 0.62, ridgeZ: 0, downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.40,
  });
  p.kawaraSlope('ext', {
    topWidth: 7.2, bottomWidth: 10.6, run: 3.35, pitch: sk2Pitch,
    ridgeX: -5.58, ridgeY: Y3 + 0.62, ridgeZ: 0, downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.40,
  });

  // C. 3F Main Kirizuma Hon-gawara Roof + Industrial Ridge Koshiyane Ventilator!
  const topPitch = 0.46;
  const topRun = 4.65;
  const topRidgeY = YTOP + topRun * Math.tan(topPitch) - 0.36; // ~11.40m
  p.kawaraSlope('ext', {
    bottomWidth: 13.0, run: topRun, pitch: topPitch,
    ridgeX: 0, ridgeY: topRidgeY, ridgeZ: 0, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.36,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 13.0, run: topRun, pitch: topPitch,
    ridgeX: 0, ridgeY: topRidgeY, ridgeZ: 0, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.36,
  });
  const topGableH = topRidgeY - YTOP - 0.06;
  p.gablePrism('ext', 7.04, topGableH, 0.22, -5.60, YTOP, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 7.04, topGableH, 0.22, 5.60, YTOP, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.kawaraRidge('ext', -6.40, topRidgeY + 0.04, 0, 6.40, topRidgeY + 0.04, 0, kawaraRidge, oniMat, {
    scale: 1.05, courses: 2, oniStart: true, oniEnd: true,
  });

  // Industrial Dormitory Ridge Exhaust Cupola (越屋根排気塔)
  const cupBaseY = topRidgeY - 0.08;
  const cupTopY = cupBaseY + 0.86;
  p.box('ext', 4.80, 0.84, 1.45, 0, cupBaseY + 0.42, 0, louverMat);
  p.kawaraSlope('ext', {
    bottomWidth: 5.70, run: 1.20, pitch: 0.38,
    ridgeX: 0, ridgeY: cupTopY + 0.42, ridgeZ: 0, downslopeYaw: 0,
    tileMat: galvZinc, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 5.70, run: 1.20, pitch: 0.38,
    ridgeX: 0, ridgeY: cupTopY + 0.42, ridgeZ: 0, downslopeYaw: Math.PI,
    tileMat: galvZinc, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraRidge('ext', -2.75, cupTopY + 0.46, 0, 2.75, cupTopY + 0.46, 0, kawaraRidge, oniMat, {
    scale: 0.72, courses: 1, oniStart: true, oniEnd: true,
  });

  return p.build({
    id: 'H24',
    name: '旧黒磯炭鉱 詰所兼独身寮（16.4m三階寄宿舎）',
    subtitle: '現場詰所・青タイル共同浴場・2F独身4個室＆東屋外非常階段・3F組合食堂＆越屋根',
    category: 'house',
    builtYear: 1895,
    abandonedYear: 1985,
    stories: 3,
    floorElevations: [Y1, Y2, Y3],
    entryLocal: [-3.50, 0.0, 9.0],
    entryLookLocalYaw: 0,
  });
}
