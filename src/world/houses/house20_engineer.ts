import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H20: 旧黒磯炭鉱・明治技師館（1891年築・青磁色下見板と角望楼塔屋の四階洋和折衷官邸）— ★4階建ランドマーク
 * 上段山腹道（標高275m）の高台にそびえる明治24年築の和魂洋才・主任採鉱技師官邸。
 * 1F スクラッチタイル腰壁・黒大理石ポルティコ玄関・ヘリンボーン応接間（赤煉瓦＆黒大理石暖炉）＋裏和館6畳畳間、
 * 2F 首席技師・炭鉱製図室（黒板・島地図・製図台）＆灰絨毯主寝室＆緑タイル浴室＆西洋高欄ベランダ、
 * 3F 市松床のガラス張り温室サンルーム（廃村後の苔＆シダ繁茂）＆地質標本庫（石炭・片麻岩標本）、
 * 4F 360°超透過パノラマの南西角望楼塔屋（黒大理石羅針盤海図台）＋急勾配四方「宝形本瓦」尖塔＆銅緑青の露盤・宝珠！
 */
export function buildHouse20Engineer(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Meiji Western-Japanese Hybrid Exterior Materials (all verified in manifest.json) ---
  const scratchTile = catalog.getMaterial('exterior_tile_beige', { roughness: 0.84, bumpScale: 0.05 });
  const travertine = catalog.getMaterial('travertine_stone', { roughness: 0.86, bumpScale: 0.05 });
  const blackMarble = catalog.getMaterial('black_marble', { roughness: 0.34, metalness: 0.14, bumpScale: 0.02 });
  const sageClapboard = catalog.getMaterial('weathered_sage_paint', { roughness: 0.84, bumpScale: 0.05, tint: 0xd8e5db });
  const darkGreenWood = catalog.getMaterial('dark_green_wood', { roughness: 0.80, bumpScale: 0.04 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.90, bumpScale: 0.03, tint: 0xf7f5ef });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.82, bumpScale: 0.04 });
  const panelDoor = catalog.getMaterial('wood_panel_door', { roughness: 0.80, bumpScale: 0.04 });

  // --- Interior, Parlor, Drafting Studio, Conservatory & Specimen Materials ---
  const herringbone = catalog.getMaterial('herringbone_wood', { roughness: 0.72, bumpScale: 0.03 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.78, bumpScale: 0.03 });
  const fadedBlueWall = catalog.getMaterial('faded_blue_plaster', { roughness: 0.90, bumpScale: 0.04 });
  const whiteFabricWall = catalog.getMaterial('white_fabric_wall', { roughness: 0.92, bumpScale: 0.03 });
  const redBrick = catalog.getMaterial('red_brick', { roughness: 0.90, bumpScale: 0.06 });
  const ginghamMat = catalog.getMaterial('gingham_cloth', { roughness: 0.92, bumpScale: 0.02 });
  const curtainMat = catalog.getMaterial('botanical_curtain', { roughness: 0.90, bumpScale: 0.02, doubleSide: true });
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.90, transparent: true });
  const retroTile = catalog.getMaterial('retro_tile_wall', { roughness: 0.50, bumpScale: 0.03 });
  const creamTile = catalog.getMaterial('cream_ceramic_tile', { roughness: 0.48, bumpScale: 0.03 });
  const greenTile = catalog.getMaterial('green_tile', { roughness: 0.46, bumpScale: 0.04 });
  const grayCarpet = catalog.getMaterial('woven_carpet_gray', { roughness: 0.94, bumpScale: 0.04 });
  const checkerFloor = catalog.getMaterial('checker_linoleum', { roughness: 0.62, bumpScale: 0.02 });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.78, bumpScale: 0.03 });
  const cabMat = catalog.getMaterial('kitchen_cabinet', { roughness: 0.82, bumpScale: 0.03 });
  const counterMat = catalog.getMaterial('office_counter', { roughness: 0.80, bumpScale: 0.03 });
  const mapSign = catalog.getMaterial('island_map_sign', { roughness: 0.80, bumpScale: 0.02 });
  const chalkMat = catalog.getMaterial('chalkboard', { roughness: 0.88, bumpScale: 0.02 });
  const corkMat = catalog.getMaterial('cork_board', { roughness: 0.92, bumpScale: 0.03 });
  const fileCab = catalog.getMaterial('file_cabinet', { roughness: 0.66, metalness: 0.25 });
  const wardrobeMat = catalog.getMaterial('wardrobe_wood', { roughness: 0.82, bumpScale: 0.03 });
  const dresserMat = catalog.getMaterial('wooden_dresser', { roughness: 0.82, bumpScale: 0.03 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.92, bumpScale: 0.03 });
  const vanitySink = catalog.getMaterial('vanity_sink', { roughness: 0.56, bumpScale: 0.03 });
  const bookcaseMat = catalog.getMaterial('full_bookcase', { roughness: 0.84, bumpScale: 0.04 });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.88, bumpScale: 0.04 });
  const noticeMat = catalog.getMaterial('notice_board', { roughness: 0.88, bumpScale: 0.02 });
  const deepMoss = catalog.getMaterial('deep_moss', { roughness: 0.95, bumpScale: 0.07 });
  const dryFerns = catalog.getMaterial('dry_ferns', { roughness: 0.93, bumpScale: 0.06 });
  const coalRock = catalog.getMaterial('coal_seam_rock', { roughness: 0.86, bumpScale: 0.08 });
  const gneissRock = catalog.getMaterial('gneiss_rock', { roughness: 0.90, bumpScale: 0.08 });
  const frostedGrid = catalog.getMaterial('frosted_grid_window', { roughness: 0.30, opacity: 0.34, transparent: true });
  const clearGlass = catalog.getMaterial('window_frosted_wood', { roughness: 0.20, opacity: 0.20, transparent: true, tint: 0xdcecf5 });

  // --- Verdigris-Tinted Ibushi Hon-gawara & Copper Spire Finial (緑青帯び濃灰いぶし本瓦＆銅緑青宝珠) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.68, metalness: 0.20, bumpScale: 0.06, tint: 0xaabcb8 });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.64, metalness: 0.24, bumpScale: 0.05, tint: 0x92a8a4 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.58, metalness: 0.30, tint: 0x7c9490 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.50, metalness: 0.42, tint: 0x627a76 });
  const verdigrisCopper = catalog.getMaterial('dark_iron_plate', { roughness: 0.44, metalness: 0.52, tint: 0x5da492 });

  const Y1 = 0.55;
  const Y2 = 3.75;
  const Y3 = 6.90;
  const Y4 = 9.95;
  const YTOP = 12.65;

  // =========================================================================
  // 1. DEEP TRAVERTINE & SCRATCH-TILE PLINTH + BLACK MARBLE PORTICO STEPS
  // =========================================================================
  p.box('ext', 13.7, 3.82, 9.5, 0, Y1 - 1.92, -0.10, travertine);
  p.box('ext', 5.2, 3.82, 1.35, -4.2, Y1 - 1.92, 4.90, travertine); // SW Turret projecting plinth
  // Travertine water-table molding band (seated cleanly BELOW Y1 so 1F interior floors shine unobstructed!)
  p.box('ext', 13.85, 0.22, 9.65, 0, Y1 - 0.14, -0.10, travertine);

  // Grand Black-Marble Portico Terrace & 5 Ceremonial Entry Steps (X = +2.20, Z = +4.4..+6.4)
  p.box('ext', 3.6, 2.2, 1.55, 2.2, Y1 - 1.12, 5.12, travertine);
  p.box('ext', 3.55, 0.14, 1.52, 2.2, Y1 - 0.03, 5.12, blackMarble);
  p.stoneSteps('ext', 2.2, 6.65, 5.45, -0.12, Y1, 2.8, 5, blackMarble);
  p.floor(0.55, 3.85, 4.35, 5.65, Y1 + 0.04);

  // Classical white-plaster portico columns supporting the entry kawara pediment
  for (const px of [0.65, 3.75]) {
    p.box('ext', 0.34, 0.32, 0.34, px, Y1 + 0.16, 5.68, blackMarble);
    p.box('ext', 0.24, 2.86, 0.24, px, Y1 + 1.65, 5.68, whitePlaster, { solid: true });
    p.box('ext', 0.34, 0.20, 0.34, px, Y1 + 3.08, 5.68, whitePlaster);
  }
  p.box('ext', 3.65, 0.28, 0.32, 2.2, Y1 + 3.22, 5.68, whitePlaster);

  // =========================================================================
  // 2. 1F: BLACK-MARBLE FOYER, VICTORIAN PARLOR, REAR JAPANESE WING & PANTRY (13.2m x 9.0m + SW Bay)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.20m
  const mid1 = Y1 + h1 * 0.5;

  // Distinct Room Floorings
  p.box('int', 13.0, 0.10, 8.9, 0, Y1 - 0.04, -0.10, oakFloor);
  p.box('int', 6.7, 0.05, 6.2, -3.2, Y1 + 0.02, 2.0, herringbone);       // Victorian Parlor + SW Turret bay!
  p.box('int', 4.3, 0.05, 5.5, 2.25, Y1 + 0.02, 1.65, blackMarble);      // Black-marble grand foyer
  p.box('int', 6.3, 0.05, 3.3, -3.35, Y1 + 0.03, -2.85, tatamiBord);     // Rear NW 6-mat Japanese Wing!
  p.box('int', 4.4, 0.05, 3.3, 2.05, Y1 + 0.02, -2.85, creamTile);       // NE Retro-tile pantry
  p.box('int', 1.25, 0.03, 0.72, 2.20, Y1 + 0.05, 4.02, coirMat, { uvScale: 0 });

  p.floor(-6.45, 6.45, -4.45, 4.45, Y1 + 0.04);
  p.floor(-6.45, -1.85, 4.25, 5.05, Y1 + 0.04); // Projecting SW bay walkable floor!

  // 1F Exterior Walls (Scratch-tile lower dado + pale sage clapboard upper + dark-green shutters!)
  // Front 1F Main (+Z = +4.40, X ∈ [-1.80, +6.60]): Grand 2.10m foyer door X ∈ [+1.15, +3.25]
  p.box('ext', 2.98, 1.35, 0.26, -0.32, Y1 + 0.68, 4.40, scratchTile, { solid: true });
  p.box('ext', 2.98, h1 - 1.35, 0.26, -0.32, Y1 + 2.28, 4.40, sageClapboard, { solid: true });
  p.box('ext', 2.14, 0.75, 0.26, 2.20, Y1 + 2.82, 4.40, sageClapboard, { solid: true });
  p.box('ext', 0.96, 2.38, 0.08, 0.72, Y1 + 1.20, 4.16, panelDoor, { uvScale: 0 }); // Parted Meiji entry door
  p.box('ext', 3.38, 1.35, 0.26, 4.92, Y1 + 0.68, 4.40, scratchTile, { solid: true });
  p.box('ext', 1.15, h1 - 1.35, 0.26, 3.82, Y1 + 2.28, 4.40, sageClapboard, { solid: true });
  p.box('ext', 1.30, 0.52, 0.26, 5.02, Y1 + 2.94, 4.40, sageClapboard, { solid: true });
  p.box('ext', 1.26, 1.35, 0.06, 5.02, Y1 + 2.02, 4.40, clearGlass, { uvScale: 0 });
  p.box('ext', 0.34, 1.40, 0.08, 4.24, Y1 + 2.02, 4.54, darkGreenWood); // Shutter L
  p.box('ext', 0.34, 1.40, 0.08, 5.80, Y1 + 2.02, 4.54, darkGreenWood); // Shutter R
  p.box('ext', 0.96, h1 - 1.35, 0.26, 6.14, Y1 + 2.28, 4.40, sageClapboard, { solid: true });

  // SW Projecting Turret Bay 1F (+Z = +5.20, X ∈ [-6.60, -1.80] & East cheek X = -1.80, Z ∈ [+4.40, +5.20])
  p.box('ext', 4.85, 1.15, 0.26, -4.20, Y1 + 0.58, 5.20, scratchTile, { solid: true });
  p.box('ext', 1.15, h1 - 1.15, 0.26, -6.04, Y1 + 2.18, 5.20, sageClapboard, { solid: true });
  p.box('ext', 2.55, 0.55, 0.26, -4.20, Y1 + 2.92, 5.20, sageClapboard, { solid: true });
  p.box('ext', 2.50, 1.52, 0.06, -4.20, Y1 + 1.90, 5.20, clearGlass, { uvScale: 0 });
  p.box('ext', 0.42, 1.58, 0.08, -5.68, Y1 + 1.90, 5.34, darkGreenWood);
  p.box('ext', 0.42, 1.58, 0.08, -2.72, Y1 + 1.90, 5.34, darkGreenWood);
  p.box('ext', 1.15, h1 - 1.15, 0.26, -2.36, Y1 + 2.18, 5.20, sageClapboard, { solid: true });
  p.box('ext', 0.26, 1.35, 0.90, -1.80, Y1 + 0.68, 4.80, scratchTile, { solid: true });
  p.box('ext', 0.26, h1 - 1.35, 0.90, -1.80, Y1 + 2.28, 4.80, sageClapboard, { solid: true });

  // Back 1F (-Z = -4.60) — Rear Japanese Wing shoji garden window + pantry wall
  p.box('ext', 13.25, 1.15, 0.26, 0, Y1 + 0.58, -4.60, scratchTile, { solid: true });
  p.box('ext', 1.75, h1 - 1.15, 0.26, -5.74, Y1 + 2.18, -4.60, sageClapboard, { solid: true });
  p.box('ext', 3.40, 0.58, 0.26, -3.20, Y1 + 2.91, -4.60, sageClapboard, { solid: true });
  p.box('ext', 3.36, 1.48, 0.06, -3.20, Y1 + 1.88, -4.60, shojiMat, { uvScale: 0 }); // Rear Japanese shoji!
  p.box('ext', 8.15, h1 - 1.15, 0.26, 2.55, Y1 + 2.18, -4.60, sageClapboard, { solid: true });

  // West 1F (-X = -6.60, Z ∈ [-4.60, +5.20]) & East 1F (+X = +6.60, Z ∈ [-4.60, +4.40])
  p.box('ext', 0.26, 1.35, 9.85, -6.60, Y1 + 0.68, 0.30, scratchTile, { solid: true });
  p.box('ext', 0.26, h1 - 1.35, 9.85, -6.60, Y1 + 2.28, 0.30, sageClapboard, { solid: true });
  p.box('ext', 0.26, 1.35, 9.05, 6.60, Y1 + 0.68, -0.10, scratchTile, { solid: true });
  p.box('ext', 0.26, h1 - 1.35, 9.05, 6.60, Y1 + 2.28, -0.10, sageClapboard, { solid: true });

  // Classical White Corner Pilasters (1F)
  for (const [px, pz] of [[-6.62, 5.22], [-1.78, 5.22], [6.62, 4.42], [-6.62, -4.62], [6.62, -4.62]]) {
    p.box('ext', 0.26, h1 + 0.06, 0.26, px, mid1, pz, whitePlaster);
  }

  // 1F Interior Partitions
  // Rear divider Z = -1.20 separating Japanese Wing & Pantry from Parlor/Foyer (two generous 1.75m doorways!)
  p.box('int', 3.65, h1, 0.16, -4.75, mid1, -1.20, fadedBlueWall, { solid: true });
  p.box('int', 1.80, 0.72, 0.16, -2.05, Y1 + 2.84, -1.20, fadedBlueWall, { solid: true });
  p.box('int', 2.45, h1, 0.16, 0.05, mid1, -1.20, fadedBlueWall, { solid: true });
  p.box('int', 1.80, 0.72, 0.16, 2.15, Y1 + 2.84, -1.20, retroTile, { solid: true });
  p.box('int', 1.55, h1, 0.16, 3.80, mid1, -1.20, retroTile, { solid: true });
  // Divider between Rear NW Japanese Wing & NE Pantry (X = -0.20, Z ∈ [-4.60, -1.20])
  p.box('int', 0.16, h1, 3.40, -0.20, mid1, -2.90, retroTile, { solid: true });
  // Parlor-to-Foyer decorative arch columns (X = +0.20, wide 2.6m open arch Z ∈ [+1.0, +3.6]!)
  p.box('int', 0.22, h1, 2.25, 0.20, mid1, -0.10, whitePlaster, { solid: true });
  p.box('int', 0.22, 0.65, 2.65, 0.20, Y1 + 2.88, 2.32, whitePlaster, { solid: true });
  p.box('int', 0.22, h1, 0.85, 0.20, mid1, 4.02, whitePlaster, { solid: true });

  // ★ 1F Victorian Parlor Furnishings: Red-Brick & Black-Marble Fireplace, Gingham Table, Botanical Curtains!
  p.box('int', 0.10, h1 - 0.1, 6.2, -6.44, mid1, 2.0, fadedBlueWall);
  // Monumental Meiji Fireplace against West wall (X = -6.10, Z = +1.70)
  p.box('int', 0.78, 1.52, 1.95, -6.10, Y1 + 0.76, 1.70, redBrick, { solid: true });
  p.box('int', 0.62, 1.65, 1.25, -6.16, Y1 + 2.34, 1.70, redBrick, { solid: true }); // Chimney breast
  p.box('int', 0.90, 0.16, 2.18, -6.04, Y1 + 1.54, 1.70, blackMarble);               // Polished black marble mantle
  p.box('int', 0.92, 0.12, 2.15, -6.00, Y1 + 0.06, 1.70, blackMarble);               // Marble hearth slab
  // Botanical curtains framing the SW parlor bay window
  p.box('int', 0.65, 2.25, 0.06, -5.65, Y1 + 1.95, 4.98, curtainMat, { uvScale: 0 });
  p.box('int', 0.65, 2.25, 0.06, -2.75, Y1 + 1.95, 4.98, curtainMat, { uvScale: 0 });
  // Parlor gingham tea table & wooden chairs
  p.box('int', 1.65, 0.76, 1.05, -3.45, Y1 + 0.38, 1.95, ginghamMat, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 1.45, 0.52, -5.45, Y1 + 0.74, -3.98, wardrobeMat, { solid: true, uvScale: 0 }); // Rear Japanese wing
  p.box('int', 1.95, 0.92, 0.64, 1.65, Y1 + 0.46, -4.18, kitchenMat, { solid: true, uvScale: 0 });   // NE Pantry
  p.box('int', 1.35, 1.85, 0.56, 3.65, Y1 + 0.94, -4.18, cabMat, { solid: true, uvScale: 0 });

  // 1F -> 2F Grand East Western Newel Staircase (X = +5.45, Z: +2.50 -> -1.55, Y1 -> Y2)
  p.stairRun('int', {
    x0: 5.45,
    z0: 2.50,
    x1: 5.45,
    z1: -1.55,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.24,
    steps: 15,
    treadMat: timberDark,
    stringerMat: whitePlaster,
    railMat: timberDark,
    railLeft: true,
    railRight: false,
    closedRisers: true,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 3. 2F: CHIEF ENGINEER DRAFTING STUDIO, MASTER BEDROOM, GREEN BATH & VERANDA (Y = +3.75m)
  // =========================================================================
  const h2 = Y3 - Y2; // 3.15m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs (cutout: East 1F->2F stairwell X∈[4.66,+6.52], Z∈[-1.60,+2.65])
  p.box('int', 11.26, 0.16, 9.00, -0.97, Y2 - 0.06, -0.10, oakFloor);      // Main west & center X∈[-6.6,+4.66]
  p.box('int', 4.80, 0.16, 0.90, -4.20, Y2 - 0.06, 4.80, oakFloor);        // SW Turret bay
  p.box('int', 1.94, 0.16, 3.00, 5.63, Y2 - 0.06, -3.10, oakFloor);        // NE Stair landing Z∈[-4.6,-1.6]
  p.box('int', 1.94, 0.16, 1.80, 5.63, Y2 - 0.06, 3.50, oakFloor);         // SE strip Z∈[+2.6,+4.4]
  p.box('int', 3.7, 0.04, 3.3, 2.55, Y2 + 0.03, 0.65, grayCarpet);         // Master bedroom woven gray carpet
  p.box('int', 3.6, 0.04, 3.2, -4.70, Y2 + 0.03, -2.90, greenTile);        // NW Western green-tile bath

  p.collider(-6.60, 4.66, Y2 - 0.16, Y2 + 0.02, -4.60, 4.40);
  p.collider(-6.60, -1.80, Y2 - 0.16, Y2 + 0.02, 4.40, 5.20);
  p.collider(4.66, 6.60, Y2 - 0.16, Y2 + 0.02, -4.60, -1.62);
  p.collider(4.66, 6.60, Y2 - 0.16, Y2 + 0.02, 2.66, 4.40);

  p.floor(-6.45, 4.64, -4.45, 4.35, Y2 + 0.04);
  p.floor(-6.45, -1.85, 4.25, 5.08, Y2 + 0.04);
  p.floor(4.60, 6.45, -4.45, -1.55, Y2 + 0.04);
  p.floor(4.60, 6.45, 2.65, 4.35, Y2 + 0.04);

  // 2F East Stairwell guard railings
  p.kouranRailing('int', 4.66, -1.58, 4.66, 2.66, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', 4.66, 2.66, 6.48, 2.66, Y2, 0.94, timberDark, 0.56);

  // ★ 2F Front Colonial Open Veranda (X ∈ [-1.75, +6.00], Z ∈ [+4.40, +5.60])
  p.box('ext', 7.80, 0.16, 1.24, 2.12, Y2 - 0.04, 5.00, oakFloor);
  p.kouranRailing('ext', -1.75, 5.56, 5.96, 5.56, Y2, 0.96, whitePlaster, 0.52);
  p.kouranRailing('ext', 5.96, 4.40, 5.96, 5.56, Y2, 0.96, whitePlaster, 0.52);
  p.floor(-1.68, 5.88, 4.35, 5.50, Y2 + 0.04);

  // 2F Exterior Walls (Pale Sage Clapboard + White Pilasters + Dark Green Shutters)
  // Front 2F Main (+Z = +4.40, X ∈ [-1.80, +6.60]): Open Colonial Veranda Door X ∈ [+1.25, +3.05]
  p.box('ext', 3.08, h2, 0.24, -0.28, mid2, 4.40, sageClapboard, { solid: true });
  p.box('ext', 1.84, 0.72, 0.24, 2.15, Y2 + 2.79, 4.40, sageClapboard, { solid: true });
  p.box('ext', 3.58, h2, 0.24, 4.82, mid2, 4.40, sageClapboard, { solid: true });
  // SW Turret 2F (+Z = +5.20, X ∈ [-6.60, -1.80] & East cheek X = -1.80)
  p.box('ext', 4.85, 0.96, 0.24, -4.20, Y2 + 0.48, 5.20, sageClapboard, { solid: true });
  p.box('ext', 1.15, h2 - 0.96, 0.24, -6.04, Y2 + 2.06, 5.20, sageClapboard, { solid: true });
  p.box('ext', 2.55, 0.56, 0.24, -4.20, Y2 + 2.87, 5.20, sageClapboard, { solid: true });
  p.box('ext', 2.50, 1.62, 0.06, -4.20, Y2 + 1.78, 5.20, clearGlass, { uvScale: 0 });
  p.box('ext', 0.42, 1.68, 0.08, -5.68, Y2 + 1.78, 5.34, darkGreenWood);
  p.box('ext', 0.42, 1.68, 0.08, -2.72, Y2 + 1.78, 5.34, darkGreenWood);
  p.box('ext', 1.15, h2 - 0.96, 0.24, -2.36, Y2 + 2.06, 5.20, sageClapboard, { solid: true });
  p.box('ext', 0.24, h2, 0.90, -1.80, mid2, 4.80, sageClapboard, { solid: true });
  // Back 2F, West 2F, East 2F
  p.box('ext', 13.25, h2, 0.24, 0, mid2, -4.60, sageClapboard, { solid: true });
  p.box('ext', 0.24, 0.98, 9.85, -6.60, Y2 + 0.49, 0.30, sageClapboard, { solid: true });
  p.box('ext', 0.24, h2 - 0.98, 3.85, -6.60, Y2 + 2.06, -2.68, sageClapboard, { solid: true });
  p.box('ext', 0.24, 0.55, 2.40, -6.60, Y2 + 2.88, 0.45, sageClapboard, { solid: true });
  p.box('ext', 0.06, 1.62, 2.36, -6.60, Y2 + 1.79, 0.45, clearGlass, { uvScale: 0 });
  p.box('ext', 0.24, h2 - 0.98, 3.55, -6.60, Y2 + 2.06, 3.45, sageClapboard, { solid: true });
  p.box('ext', 0.24, h2, 9.05, 6.60, mid2, -0.10, sageClapboard, { solid: true });
  // White pilasters & belt trim
  for (const [px, pz] of [[-6.62, 5.22], [-1.78, 5.22], [6.62, 4.42], [-6.62, -4.62], [6.62, -4.62]]) {
    p.box('ext', 0.24, h2 + 0.06, 0.24, px, mid2, pz, whitePlaster);
  }

  // 2F Interior Partitions & Furnishings
  // NW Bath partition (X = -2.85, Z ∈ [-4.60, -1.00]; South bath wall Z = -1.00 with 1.55m doorway X ∈ [-5.1, -3.55])
  p.box('int', 0.14, h2, 3.62, -2.85, mid2, -2.80, creamTile, { solid: true });
  p.box('int', 1.48, h2, 0.14, -5.85, mid2, -1.00, whiteFabricWall, { solid: true });
  p.box('int', 1.60, 0.72, 0.14, -4.32, Y2 + 2.79, -1.00, whiteFabricWall, { solid: true });
  p.box('int', 0.75, h2, 0.14, -3.20, mid2, -1.00, whiteFabricWall, { solid: true });
  p.box('int', 1.60, 0.66, 1.10, -5.55, Y2 + 0.34, -3.82, greenTile, { solid: true });
  p.box('int', 1.15, 1.42, 0.52, -3.85, Y2 + 0.72, -4.15, vanitySink, { solid: true, uvScale: 0 });

  // ★ 2F Chief Mine Engineer Drafting Studio Furnishings (SW + West Open Studio)
  p.box('int', 0.10, 1.45, 2.35, -6.42, Y2 + 1.68, 2.85, chalkMat, { uvScale: 0 });     // Mine shaft section chalkboard!
  p.box('int', 1.95, 1.35, 0.08, -1.25, Y2 + 1.72, 4.22, mapSign, { uvScale: 0 });      // Framed Kuroiso Island map!
  p.box('int', 1.35, 1.05, 0.08, -3.95, Y2 + 1.78, -0.88, corkMat, { uvScale: 0 });     // Survey notes corkboard
  p.box('int', 2.05, 0.88, 0.96, -4.15, Y2 + 0.44, 2.55, counterMat, { solid: true, uvScale: 0 }); // Drafting table 1
  p.box('int', 1.75, 0.88, 0.90, -1.55, Y2 + 0.44, 1.45, counterMat, { solid: true, uvScale: 0 }); // Drafting table 2
  p.box('int', 0.56, 1.48, 0.75, -6.12, Y2 + 0.74, 4.35, fileCab, { solid: true, uvScale: 0 });
  p.box('int', 0.56, 1.48, 0.75, -6.12, Y2 + 0.74, -0.15, fileCab, { solid: true, uvScale: 0 });

  // 2F Master Bedroom Furnishings (East-Center X ∈ [+0.7, +4.4], Z ∈ [-0.8, +2.3])
  p.box('int', 0.14, h2, 3.15, 0.65, mid2, 0.75, whiteFabricWall, { solid: true });
  p.box('int', 1.55, 0.36, 2.10, 2.75, Y2 + 0.22, 0.65, futonMat, { solid: true, uvScale: 0 });
  p.box('int', 1.25, 1.15, 0.50, 3.75, Y2 + 0.58, -0.45, dresserMat, { solid: true, uvScale: 0 });

  // 2F -> 3F North Corridor Staircase (Z = -3.05, X: +3.10 -> -1.10, Y2 -> Y3)
  p.stairRun('int', {
    x0: 3.10,
    z0: -3.05,
    x1: -1.10,
    z1: -3.05,
    y0: Y2 + 0.04,
    y1: Y3 + 0.04,
    width: 1.18,
    steps: 14,
    treadMat: timberDark,
    stringerMat: whitePlaster,
    railMat: timberDark,
    railLeft: true,
    railRight: false,
    closedRisers: false,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 4. 3F: GLASS MOSS CONSERVATORY SUNROOM & GEOLOGICAL ORE ARCHIVE (Y = +6.90m)
  // =========================================================================
  const h3 = Y4 - Y3; // 3.05m
  const mid3 = Y3 + h3 * 0.5;

  // 3F Floor Slabs (X ∈ [-6.6, +4.4], Z ∈ [-3.8, +4.4] + SW Turret Z ∈ [+4.4, +5.2])
  // Cutout for 2F->3F stairs: X ∈ [-1.14, +3.20], Z ∈ [-3.72, -2.38]
  p.box('int', 11.00, 0.16, 6.80, -1.10, Y3 - 0.06, 1.00, oakFloor);        // Main south/mid Z∈[-2.4,+4.4]
  p.box('int', 5.46, 0.16, 1.44, -3.87, Y3 - 0.06, -3.10, oakFloor);        // NW landing X∈[-6.6,-1.14]
  p.box('int', 1.22, 0.16, 1.44, 3.80, Y3 - 0.06, -3.10, oakFloor);         // NE strip X∈[+3.2,+4.4]
  p.box('int', 4.80, 0.16, 0.90, -4.20, Y3 - 0.06, 4.80, checkerFloor);     // SW Turret conservatory bay
  p.box('int', 10.60, 0.04, 4.45, -1.10, Y3 + 0.03, 2.08, checkerFloor);    // Iconic checkerboard sunroom floor!

  p.collider(-6.60, 4.40, Y3 - 0.16, Y3 + 0.02, -2.38, 4.40);
  p.collider(-6.60, -1.14, Y3 - 0.16, Y3 + 0.02, -3.80, -2.38);
  p.collider(3.20, 4.40, Y3 - 0.16, Y3 + 0.02, -3.80, -2.38);
  p.collider(-6.60, -1.80, Y3 - 0.16, Y3 + 0.02, 4.40, 5.20);

  p.floor(-6.45, 4.32, -2.35, 4.35, Y3 + 0.04);
  p.floor(-6.45, -1.10, -3.72, -2.30, Y3 + 0.04);
  p.floor(3.20, 4.32, -3.72, -2.30, Y3 + 0.04);
  p.floor(-6.45, -1.85, 4.25, 5.08, Y3 + 0.04);

  // 3F Stairwell guard railings
  p.kouranRailing('int', -1.14, -2.38, 3.20, -2.38, Y3, 0.94, timberDark, 0.56);
  p.kouranRailing('int', 3.20, -3.72, 3.20, -2.38, Y3, 0.94, timberDark, 0.56);

  // 3F East Sun Balcony (X ∈ [-1.75, +4.40], Z ∈ [+4.40, +5.30])
  p.box('ext', 6.20, 0.16, 0.96, 1.32, Y3 - 0.04, 4.86, oakFloor);
  p.kouranRailing('ext', -1.75, 5.28, 4.36, 5.28, Y3, 0.94, whitePlaster, 0.52);
  p.kouranRailing('ext', 4.36, 4.40, 4.36, 5.28, Y3, 0.94, whitePlaster, 0.52);
  p.floor(-1.68, 4.30, 4.35, 5.22, Y3 + 0.04);

  // 3F Exterior Walls (Glass Conservatory Sunroom walls on South & East!)
  // Front 3F Main Conservatory (+Z = +4.40, X ∈ [-1.80, +4.40]): Open balcony door X ∈ [+1.15, +2.75], full glass panes!
  p.box('ext', 2.98, 0.65, 0.22, -0.32, Y3 + 0.32, 4.40, sageClapboard, { solid: true });
  p.box('ext', 2.94, 1.98, 0.06, -0.32, Y3 + 1.65, 4.40, frostedGrid, { uvScale: 0 });
  p.box('ext', 2.98, 0.42, 0.22, -0.32, Y3 + 2.84, 4.40, whitePlaster, { solid: true });
  p.box('ext', 1.64, 0.66, 0.22, 1.95, Y3 + 2.72, 4.40, whitePlaster, { solid: true });
  p.box('ext', 1.68, 0.65, 0.22, 3.58, Y3 + 0.32, 4.40, sageClapboard, { solid: true });
  p.box('ext', 1.64, 1.98, 0.06, 3.58, Y3 + 1.65, 4.40, frostedGrid, { uvScale: 0 });
  p.box('ext', 1.68, 0.42, 0.22, 3.58, Y3 + 2.84, 4.40, whitePlaster, { solid: true });

  // SW Turret 3F Glass Bay (+Z = +5.20, X ∈ [-6.60, -1.80] & East cheek X = -1.80)
  p.box('ext', 4.85, 0.68, 0.22, -4.20, Y3 + 0.34, 5.20, sageClapboard, { solid: true });
  p.box('ext', 0.85, h3 - 0.68, 0.22, -6.18, Y3 + 1.86, 5.20, sageClapboard, { solid: true });
  p.box('ext', 3.16, 1.92, 0.06, -4.20, Y3 + 1.64, 5.20, frostedGrid, { uvScale: 0 });
  p.box('ext', 3.20, 0.45, 0.22, -4.20, Y3 + 2.82, 5.20, sageClapboard, { solid: true });
  p.box('ext', 0.85, h3 - 0.68, 0.22, -2.22, Y3 + 1.86, 5.20, sageClapboard, { solid: true });
  p.box('ext', 0.22, h3, 0.90, -1.80, mid3, 4.80, sageClapboard, { solid: true });

  // Back 3F (-Z = -3.80), West 3F (-X = -6.60), East 3F Conservatory Wall (+X = +4.40)
  p.box('ext', 11.05, h3, 0.22, -1.10, mid3, -3.80, sageClapboard, { solid: true });
  p.box('ext', 0.22, 0.72, 9.05, -6.60, Y3 + 0.36, 0.70, sageClapboard, { solid: true });
  p.box('ext', 0.22, h3 - 0.72, 4.05, -6.60, Y3 + 1.88, -1.78, sageClapboard, { solid: true });
  p.box('ext', 0.06, 1.88, 3.60, -6.60, Y3 + 1.66, 2.05, frostedGrid, { uvScale: 0 });
  p.box('ext', 0.22, 0.46, 3.64, -6.60, Y3 + 2.82, 2.05, sageClapboard, { solid: true });
  p.box('ext', 0.22, h3 - 0.72, 1.40, -6.60, Y3 + 1.88, 4.52, sageClapboard, { solid: true });
  p.box('ext', 0.22, 0.68, 8.25, 4.40, Y3 + 0.34, 0.30, sageClapboard, { solid: true });
  p.box('ext', 0.22, h3 - 0.68, 3.05, 4.40, Y3 + 1.86, -2.28, sageClapboard, { solid: true });
  p.box('ext', 0.06, 1.92, 4.20, 4.40, Y3 + 1.64, 1.40, frostedGrid, { uvScale: 0 });
  p.box('ext', 0.22, 0.46, 4.25, 4.40, Y3 + 2.82, 1.40, whitePlaster, { solid: true });
  p.box('ext', 0.22, h3 - 0.68, 0.96, 4.40, Y3 + 1.86, 3.94, sageClapboard, { solid: true });

  // ★ 3F Abandoned Moss/Fern Conservatory Planter Beds & Kuroiso Ore Archive Furnishings!
  // Raised brick conservatory planter beds overflowing with moss & ferns along the sunny glass bay!
  p.box('int', 3.45, 0.56, 0.88, -4.55, Y3 + 0.28, 4.55, redBrick, { solid: true });
  p.box('int', 3.30, 0.22, 0.74, -4.55, Y3 + 0.62, 4.55, deepMoss);
  p.box('int', 1.35, 0.48, 0.64, -5.25, Y3 + 0.88, 4.55, dryFerns);
  p.box('int', 1.20, 0.42, 0.58, -3.75, Y3 + 0.84, 4.52, dryFerns);
  p.box('int', 0.88, 0.56, 2.85, 3.82, Y3 + 0.28, 1.45, redBrick, { solid: true });
  p.box('int', 0.74, 0.22, 2.70, 3.82, Y3 + 0.62, 1.45, deepMoss);
  p.box('int', 0.62, 0.45, 1.95, 3.82, Y3 + 0.86, 1.45, dryFerns);
  // Conservatory gingham tea table
  p.box('int', 1.35, 0.74, 0.96, 0.45, Y3 + 0.38, 1.85, ginghamMat, { solid: true, uvScale: 0 });
  // Geological Ore Archive (NW): coal seam & metamorphic gneiss specimen pedestals + bookcases
  p.box('int', 2.05, 1.95, 0.52, -4.95, Y3 + 0.98, -3.45, bookcaseMat, { solid: true, uvScale: 0 });
  p.box('int', 0.54, 1.85, 1.65, -6.18, Y3 + 0.94, -1.75, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 1.05, 0.08, -2.55, Y3 + 1.68, -3.65, noticeMat, { uvScale: 0 });
  p.box('int', 0.75, 0.82, 0.75, -4.85, Y3 + 0.41, -1.15, whitePlaster, { solid: true });
  p.box('int', 0.46, 0.36, 0.42, -4.85, Y3 + 0.96, -1.15, coalRock, { ry: 0.4 });
  p.box('int', 0.75, 0.82, 0.75, -4.85, Y3 + 0.41, 0.15, whitePlaster, { solid: true });
  p.box('int', 0.48, 0.34, 0.44, -4.85, Y3 + 0.96, 0.15, gneissRock, { ry: -0.35 });

  // 3F -> 4F SW Turret Staircase (X = -2.55, Z: -0.85 -> +2.95, Y3 -> Y4; verified headroom 2.01m!)
  p.stairRun('int', {
    x0: -2.55,
    z0: -0.85,
    x1: -2.55,
    z1: 2.95,
    y0: Y3 + 0.04,
    y1: Y4 + 0.04,
    width: 1.10,
    steps: 14,
    treadMat: timberDark,
    stringerMat: whitePlaster,
    railMat: timberDark,
    railLeft: true,
    railRight: true,
    closedRisers: false,
    guardLeft: true,
    guardRight: true,
  });

  // =========================================================================
  // 5. ★ 4F ICONIC 360° SW CORNER OBSERVATORY TURRET (4.8m x 4.8m, Y = +9.95m)
  // =========================================================================
  const h4 = YTOP - Y4; // 2.70m
  const mid4 = Y4 + h4 * 0.5;
  const tCX = -4.20;
  const tCZ = 2.80;

  // 4F Turret Floor Slabs (X ∈ [-6.6, -1.8], Z ∈ [+0.4, +5.2]) with clean stairwell cutout (X∈[-3.20,-1.88], Z∈[+0.44,+3.02])
  p.box('int', 3.40, 0.16, 4.80, -4.90, Y4 - 0.06, 2.80, herringbone);   // West panoramic floor X∈[-6.6,-3.2]
  p.box('int', 1.42, 0.16, 2.20, -2.50, Y4 - 0.06, 4.10, herringbone);   // South arrival landing Z∈[+3.0,+5.2]
  p.collider(-6.60, -3.20, Y4 - 0.16, Y4 + 0.02, 0.40, 5.20);
  p.collider(-3.20, -1.80, Y4 - 0.16, Y4 + 0.02, 3.02, 5.20);
  p.floor(-6.45, -3.18, 0.52, 5.08, Y4 + 0.04);
  p.floor(-3.22, -1.92, 2.98, 5.08, Y4 + 0.04);

  // 4F Stairwell guard balustrade
  p.kouranRailing('int', -3.20, 0.48, -3.20, 3.02, Y4, 0.94, timberDark, 0.52);

  // 4F 360° Ultra-Clear Panoramic Meiji Windows on ALL FOUR Turret Sides!
  const addTurretWindowWall = (axis: 'x' | 'z', fixedCoord: number, spanCenter: number) => {
    const dadoH = 0.78;
    const headerH = 0.42;
    const winH = h4 - dadoH - headerH; // 1.50m tall unobstructed panoramic glass!
    if (axis === 'z') {
      p.box('ext', 4.85, dadoH, 0.20, spanCenter, Y4 + dadoH * 0.5, fixedCoord, sageClapboard, { solid: true });
      p.box('ext', 4.85, headerH, 0.20, spanCenter, YTOP - headerH * 0.5, fixedCoord, sageClapboard, { solid: true });
      p.box('ext', 0.72, winH, 0.20, spanCenter - 2.06, Y4 + dadoH + winH * 0.5, fixedCoord, sageClapboard, { solid: true });
      p.box('ext', 0.72, winH, 0.20, spanCenter + 2.06, Y4 + dadoH + winH * 0.5, fixedCoord, sageClapboard, { solid: true });
      p.box('ext', 3.40, winH, 0.06, spanCenter, Y4 + dadoH + winH * 0.5, fixedCoord, clearGlass, { uvScale: 0 });
      // Dark green wooden mullions
      p.box('ext', 0.10, winH, 0.12, spanCenter - 0.85, Y4 + dadoH + winH * 0.5, fixedCoord, darkGreenWood);
      p.box('ext', 0.10, winH, 0.12, spanCenter + 0.85, Y4 + dadoH + winH * 0.5, fixedCoord, darkGreenWood);
    } else {
      p.box('ext', 0.20, dadoH, 4.85, fixedCoord, Y4 + dadoH * 0.5, spanCenter, sageClapboard, { solid: true });
      p.box('ext', 0.20, headerH, 4.85, fixedCoord, YTOP - headerH * 0.5, spanCenter, sageClapboard, { solid: true });
      p.box('ext', 0.20, winH, 0.72, fixedCoord, Y4 + dadoH + winH * 0.5, spanCenter - 2.06, sageClapboard, { solid: true });
      p.box('ext', 0.20, winH, 0.72, fixedCoord, Y4 + dadoH + winH * 0.5, spanCenter + 2.06, sageClapboard, { solid: true });
      p.box('ext', 0.06, winH, 3.40, fixedCoord, Y4 + dadoH + winH * 0.5, spanCenter, clearGlass, { uvScale: 0 });
      p.box('ext', 0.12, winH, 0.10, fixedCoord, Y4 + dadoH + winH * 0.5, spanCenter - 0.85, darkGreenWood);
      p.box('ext', 0.12, winH, 0.10, fixedCoord, Y4 + dadoH + winH * 0.5, spanCenter + 0.85, darkGreenWood);
    }
  };
  addTurretWindowWall('z', 5.20, tCX);
  addTurretWindowWall('z', 0.40, tCX);
  addTurretWindowWall('x', -6.60, tCZ);
  addTurretWindowWall('x', -1.80, tCZ);

  // Turret white corner pilasters & open perimeter frieze cornice (revealing exposed pyramidal rafters above!)
  for (const [px, pz] of [[-6.62, 5.22], [-1.78, 5.22], [-6.62, 0.38], [-1.78, 0.38]]) {
    p.box('ext', 0.24, h4 + 0.08, 0.24, px, mid4, pz, whitePlaster);
  }
  p.box('ext', 5.10, 0.18, 0.26, tCX, YTOP - 0.04, 5.20, whitePlaster);
  p.box('ext', 5.10, 0.18, 0.26, tCX, YTOP - 0.04, 0.40, whitePlaster);
  p.box('ext', 0.26, 0.18, 5.10, -6.60, YTOP - 0.04, tCZ, whitePlaster);
  p.box('ext', 0.26, 0.18, 5.10, -1.80, YTOP - 0.04, tCZ, whitePlaster);

  // 4F Observatory Centerpiece: Black-Marble Compass & Kuroiso Island Sea-Chart Pedestal!
  p.cyl('int', 0.44, 0.54, 0.86, 8, -4.95, Y4 + 0.43, 2.75, blackMarble);
  p.box('int', 1.25, 0.10, 1.05, -4.95, Y4 + 0.90, 2.75, blackMarble, { solid: true });
  p.box('int', 1.05, 0.03, 0.84, -4.95, Y4 + 0.96, 2.75, mapSign, { uvScale: 0 });
  // Exposed timber hip rafters inside 4F observatory roof vault
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      p.box('int', 0.14, 0.18, 3.6, tCX + sx * 1.15, YTOP + 0.95, tCZ + sz * 1.15, timberDark, {
        ry: Math.atan2(sx, sz),
        rx: -0.58,
      });
    }
  }

  // =========================================================================
  // 6. FOUR-LAYER VERDIGRIS-IBUSHI HON-GAWARA ROOFS + 4F PYRAMIDAL HOGYO SPIRE!
  // =========================================================================
  // A. 1F Front Black-Marble Portico Miniature Kawara Gable Roof (X = +2.2, Z = +5.25)
  const portPitch = 0.44;
  const portRidgeY = Y2 + 0.72;
  p.gablePrism('ext', 3.7, 0.72, 0.22, 2.20, Y2 + 0.02, 5.75, whitePlaster);
  p.kawaraSlope('ext', {
    bottomWidth: 2.05,
    run: 2.15,
    pitch: portPitch,
    ridgeX: 2.20,
    ridgeY: portRidgeY,
    ridgeZ: 5.15,
    downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.34,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 2.05,
    run: 2.15,
    pitch: portPitch,
    ridgeX: 2.20,
    ridgeY: portRidgeY,
    ridgeZ: 5.15,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.34,
  });
  p.kawaraRidge('ext', 2.20, portRidgeY + 0.04, 4.25, 2.20, portRidgeY + 0.04, 6.18, kawaraRidge, oniMat, {
    scale: 0.76,
    courses: 2,
    oniStart: false,
    oniEnd: true,
  });

  // B. 2F Belt Kawara Skirt Eaves around East/North/West edges covering 2F overhang
  p.kawaraSlope('ext', {
    bottomWidth: 9.8,
    run: 2.65,
    pitch: 0.42,
    ridgeX: 4.40,
    ridgeY: Y3 + 0.92,
    ridgeZ: -0.10,
    downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 14.0,
    run: 1.55,
    pitch: 0.40,
    ridgeX: 0,
    ridgeY: Y3 + 0.48,
    ridgeZ: -3.80,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  // Belt kawara drip eaves on West & SW Turret waist at Y3
  p.kawaraSlope('ext', {
    bottomWidth: 5.6,
    run: 0.92,
    pitch: 0.38,
    ridgeX: tCX,
    ridgeY: Y3 + 0.14,
    ridgeZ: 5.16,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.34,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 10.6,
    run: 0.95,
    pitch: 0.38,
    ridgeX: -6.56,
    ridgeY: Y3 + 0.14,
    ridgeZ: 0.30,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });

  // C. 3F Main Wing Verdigris-Ibushi Hon-gawara Roofs (split cleanly OUTSIDE 4F SW Turret X∈[-6.6,-1.8], Z∈[+0.4,+5.2]!)
  // C1. East Main Wing Irimoya Roof (X ∈ [-1.80, +5.45], stops strictly flush against Turret East wall X = -1.80!)
  const mainPitch = 0.45;
  const mainHalfZ = 4.90;
  const mainRidgeY = Y4 + mainHalfZ * Math.tan(mainPitch) - 0.12; // ~12.19m
  const eastCenterX = 1.80;
  const eastCenterZ = 0.30;
  const eastBotX = 7.20; // Spans X ∈ [-1.80, +5.40] -> ZERO penetration into turret (X < -1.80)!
  const eastTopX = 4.60;
  const eastBotZ = mainHalfZ * 2;

  p.kawaraSlope('ext', {
    topWidth: eastTopX,
    bottomWidth: eastBotX,
    run: mainHalfZ,
    pitch: mainPitch,
    ridgeX: eastCenterX,
    ridgeY: mainRidgeY,
    ridgeZ: eastCenterZ,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: eastTopX,
    bottomWidth: eastBotX,
    run: mainHalfZ,
    pitch: mainPitch,
    ridgeX: eastCenterX,
    ridgeY: mainRidgeY,
    ridgeZ: eastCenterZ,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  // East Irimoya hip + white gable cheek
  const mGableH = 1.10;
  const mSideY = mainRidgeY - mGableH;
  p.gablePrism('ext', 4.4, mGableH + 0.14, 0.22, eastCenterX + eastTopX * 0.5, mSideY - 0.04, eastCenterZ, whitePlaster, {
    ry: Math.PI * 0.5,
  });
  p.kawaraSlope('ext', {
    topWidth: 4.4,
    bottomWidth: eastBotZ,
    run: 2.30,
    pitch: 0.44,
    ridgeX: eastCenterX + eastTopX * 0.5,
    ridgeY: mSideY,
    ridgeZ: eastCenterZ,
    downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  // West gable closure against 4F Turret East wall (X = -1.80)
  p.gablePrism('ext', eastBotZ - 0.8, mainRidgeY - Y4 + 0.06, 0.20, -1.78, Y4 - 0.04, eastCenterZ, sageClapboard, {
    ry: Math.PI * 0.5,
  });
  // Main Wing 3-Course Ridge + Horned Onigawara
  p.kawaraRidge(
    'ext',
    -1.78,
    mainRidgeY + 0.04,
    eastCenterZ,
    eastCenterX + eastTopX * 0.5,
    mainRidgeY + 0.04,
    eastCenterZ,
    kawaraRidge,
    oniMat,
    { scale: 1.05, courses: 3, oniStart: false, oniEnd: true }
  );

  // C2. NW Rear Wing Verdigris-Ibushi Shed Roof (X ∈ [-6.95, -1.78], Z ∈ [-4.60, +0.36] — strictly north of Turret Z=+0.40!)
  const nwPitch = 0.42;
  const nwRun = 4.96;
  const nwRidgeY = Y4 + nwRun * Math.tan(nwPitch) - 0.12;
  p.kawaraSlope('ext', {
    bottomWidth: 5.35,
    run: nwRun,
    pitch: nwPitch,
    ridgeX: -4.40,
    ridgeY: nwRidgeY,
    ridgeZ: 0.36,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  // West drip trim & ridge flashing where NW shed meets Turret North wall (Z = +0.36)
  p.kawaraRidge('ext', -7.02, nwRidgeY + 0.04, 0.34, -1.78, nwRidgeY + 0.04, 0.34, kawaraRidge, oniMat, {
    scale: 0.78,
    courses: 1,
    oniStart: true,
    oniEnd: false,
  });

  // ★ D. 4F SW CORNER OBSERVATORY TURRET: STEEP 4-SIDED PYRAMIDAL HOGYO HON-GAWARA SPIRE (宝形本瓦尖塔)
  //       + COPPER-VERDIGRIS ROBAN & HOJU SACRED JEWEL FINIAL (露盤・宝珠, peak Y ≈ +15.70m!)
  const spirePitch = 0.64;
  const spireRun = 3.05; // Overhangs 4.8m turret cleanly by 0.65m on every side!
  const spireBotW = spireRun * 2; // 6.10m square drip edge
  const spireApexY = YTOP + spireRun * Math.tan(spirePitch) - 0.05; // ~14.87m!

  for (const yaw of [0, Math.PI * 0.5, Math.PI, -Math.PI * 0.5]) {
    p.kawaraSlope('ext', {
      topWidth: 0.24,
      bottomWidth: spireBotW,
      run: spireRun,
      pitch: spirePitch,
      ridgeX: tCX,
      ridgeY: spireApexY,
      ridgeZ: tCZ,
      downslopeYaw: yaw,
      tileMat: kawaraDeck,
      ribMat: kawaraRib,
      rafterMat: timberDark,
      ribSpacing: 0.34,
    });
  }

  // 4 Sweeping Diagonal Pyramidal Hip Ridges (隅棟) descending from apex to all 4 turret corners + 4 mini Onigawara!
  const spireEaveY = YTOP - 0.05;
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      p.kawaraRidge(
        'ext',
        tCX + sx * 0.14,
        spireApexY + 0.04,
        tCZ + sz * 0.14,
        tCX + sx * (spireRun - 0.08),
        spireEaveY + 0.06,
        tCZ + sz * (spireRun - 0.08),
        kawaraRidge,
        oniMat,
        { scale: 0.72, courses: 1, oniStart: false, oniEnd: true }
      );
    }
  }

  // Sculpted Copper-Verdigris Roban (露盤), Fukubachi (伏鉢), Lotus Collar & Hoju Finial (宝珠)
  p.box('ext', 0.62, 0.20, 0.62, tCX, spireApexY + 0.10, tCZ, verdigrisCopper);
  p.cyl('ext', 0.24, 0.30, 0.18, 10, tCX, spireApexY + 0.28, tCZ, verdigrisCopper);
  p.cyl('ext', 0.10, 0.14, 0.24, 8, tCX, spireApexY + 0.46, tCZ, verdigrisCopper);
  p.cyl('ext', 0.03, 0.16, 0.34, 10, tCX, spireApexY + 0.72, tCZ, verdigrisCopper); // Pointed jewel crest (~15.76m!)

  return p.build({
    id: 'H20',
    name: '旧黒磯炭鉱・明治技師館（洋和折衷四階望楼邸）',
    subtitle: '青磁色下見板・3F苔シダ温室・4F角望楼宝形本瓦尖塔',
    category: 'house',
    builtYear: 1891,
    abandonedYear: 1985,
    stories: 4,
    floorElevations: [Y1, Y2, Y3, Y4],
    entryLocal: [2.2, 0.0, 7.65],
    entryLookLocalYaw: 0,
  });
}
