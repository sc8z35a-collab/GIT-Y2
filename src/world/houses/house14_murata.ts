import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H14: 村田家（1883年築・11.8m赤煉瓦ペチカ煙突＆リシン洋間＋3F物干し高欄デッキの三階邸）— 3階建
 * 中段本通り東脇（標高249m・H13神谷家の北隣）。
 * 1F西側は明治の豪農らしい太い黒光り大黒柱＆石枠囲炉裏座敷、東側は昭和初期増築のリシン掻き落とし外壁
 * （pebble_dash_wall）＆赤煉瓦ペチカ暖房炉の洋間＋タイル風呂（南東角の11.8m段付き赤煉瓦大煙突に直結）。
 * 2Fは乳白アクリル欄間＆和室二間続き＋正面高欄縁側、3Fは西側展望書斎＆東側開放「物干し高欄ルーフデッキ」。
 * 屋根は温かみある備前茶褐いぶし本瓦の切妻＆重層庇（鬼瓦×4基）！
 */
export function buildHouse14Murata(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Exterior & Brick Chimney Materials (all verified in manifest.json) ---
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.90, bumpScale: 0.05 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xf4efe4 });
  const pebbleDash = catalog.getMaterial('pebble_dash_wall', { roughness: 0.94, bumpScale: 0.06, tint: 0xe6dfd0 });
  const redBrick = catalog.getMaterial('red_brick', { roughness: 0.90, bumpScale: 0.06 });
  const oldBrick = catalog.getMaterial('old_red_brick', { roughness: 0.92, bumpScale: 0.07 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.83, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.80, bumpScale: 0.03 });
  const boltedSteel = catalog.getMaterial('dark_bolted_steel', { roughness: 0.62, metalness: 0.60, bumpScale: 0.04 });

  // --- Interior Materials (Irori, Pechka Parlor, Frosted Acrylic Transom, Laundry Roof Deck) ---
  const herringbone = catalog.getMaterial('herringbone_wood', { roughness: 0.74, bumpScale: 0.03 });
  const dampStone = catalog.getMaterial('dark_damp_stone', { roughness: 0.86, bumpScale: 0.07 });
  const charredSoil = catalog.getMaterial('charred_soil', { roughness: 0.96, bumpScale: 0.07 });
  const ironMat = catalog.getMaterial('matte_black_metal', { roughness: 0.54, metalness: 0.68 });
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiPlain = catalog.getMaterial('tatami_plain', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiGreen = catalog.getMaterial('tatami_green_border', { roughness: 0.92, bumpScale: 0.04 });
  const frostedAcrylic = catalog.getMaterial('frosted_acrylic', { roughness: 0.30, opacity: 0.54, transparent: true });
  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.30, opacity: 0.34, transparent: true });
  const clearGlass = catalog.getMaterial('window_frosted_wood', { roughness: 0.20, opacity: 0.20, transparent: true, tint: 0xdce8f2 });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.90, transparent: true });
  const fusumaMat = catalog.getMaterial('linen_fusuma', { roughness: 0.90, bumpScale: 0.02 });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const yellowWall = catalog.getMaterial('peeling_yellow_wall', { roughness: 0.92, bumpScale: 0.04 });
  const grayFabric = catalog.getMaterial('woven_fabric_gray', { roughness: 0.94, bumpScale: 0.04 });
  const retroTile = catalog.getMaterial('retro_tile_wall', { roughness: 0.50, bumpScale: 0.03 });
  const greenTile = catalog.getMaterial('green_tile', { roughness: 0.46, bumpScale: 0.04 });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.78, bumpScale: 0.03 });
  const cabMat = catalog.getMaterial('kitchen_cabinet', { roughness: 0.82, bumpScale: 0.03 });
  const dresserMat = catalog.getMaterial('wooden_dresser', { roughness: 0.82, bumpScale: 0.03 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.92, bumpScale: 0.03 });
  const bookcaseMat = catalog.getMaterial('full_bookcase', { roughness: 0.84, bumpScale: 0.04 });
  const counterMat = catalog.getMaterial('office_counter', { roughness: 0.80, bumpScale: 0.03 });
  const latticeMat = catalog.getMaterial('carved_wood_lattice', { roughness: 0.86, bumpScale: 0.05 });
  const weatheredConcrete = catalog.getMaterial('mossy_aged_concrete', { roughness: 0.92, bumpScale: 0.05 });

  // --- Warm Bizen Chestnut-Bronze Glazed Hon-gawara (備前茶褐いぶし本瓦) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.68, metalness: 0.16, bumpScale: 0.06, tint: 0xac8a74 });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.64, metalness: 0.20, bumpScale: 0.05, tint: 0x967662 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.60, metalness: 0.26, tint: 0x826452 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.52, metalness: 0.36, tint: 0x6e5446 });

  const Y1 = 0.50;
  const Y2 = 3.65;
  const Y3 = 6.70;
  const YTOP = 9.50;

  // =========================================================================
  // 1. DEEP CUT-STONE PLINTH, FRONT GRANITE STEPS & 11.8m RED-BRICK PECHKA CHIMNEY
  // =========================================================================
  p.box('ext', 12.9, 3.65, 9.2, 0, Y1 - 1.84, 0, cutStone);
  p.box('ext', 3.2, 2.0, 1.30, -0.5, Y1 - 1.02, 4.95, cutStone);
  p.stoneSteps('ext', -0.5, 5.80, 4.65, -0.10, Y1, 2.55, 4, stepStone);
  p.floor(-1.9, 0.9, 4.3, 5.2, Y1 + 0.04);

  // ★ Monumental 11.85m Stepped Red-Brick Pechka & Boiler Chimney on East Wall (X = +6.55, Z = -2.15)
  const chX = 6.55;
  const chZ = -2.15;
  p.box('ext', 1.75, 3.20, 1.75, chX, -1.10, chZ, cutStone, { solid: true });
  p.box('ext', 1.52, 3.80, 1.52, chX, 2.30, chZ, oldBrick, { solid: true });
  p.box('ext', 1.28, 3.60, 1.28, chX, 5.95, chZ, redBrick, { solid: true });
  p.box('ext', 1.05, 3.85, 1.05, chX, 9.65, chZ, redBrick, { solid: true });
  p.box('ext', 1.32, 0.28, 1.32, chX, 11.72, chZ, oldBrick); // Corbeled brick cap (Y = 11.86m!)
  for (const by of [4.2, 7.6, 10.4]) {
    const bw = by < 5 ? 1.44 : by < 8 ? 1.20 : 1.12;
    p.box('ext', bw, 0.12, bw, chX, by, chZ, boltedSteel);
  }

  // =========================================================================
  // 2. 1F: DAIKOKU-BASHIRA IRORI HALL (WEST) & PEBBLE-DASH PECHKA PARLOR (EAST)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.15m
  const mid1 = Y1 + h1 * 0.5;

  p.box('int', 12.2, 0.12, 8.6, 0, Y1 - 0.04, 0, warmFloor);
  p.box('int', 7.1, 0.04, 8.2, -2.55, Y1 + 0.03, 0, tatamiBord);          // West Daikoku-bashira Irori hall
  p.box('int', 4.8, 0.04, 5.8, 3.65, Y1 + 0.03, 1.35, herringbone);       // East Pechka western parlor!
  p.box('int', 4.8, 0.05, 2.6, 3.65, Y1 + 0.02, -3.00, greenTile);        // NE Retro brick-heated bath
  p.box('int', 1.20, 0.03, 0.72, -0.50, Y1 + 0.04, 4.02, coirMat, { uvScale: 0 });
  p.floor(-6.05, 6.05, -4.25, 4.42, Y1 + 0.04);

  // 1F Exterior Walls — West Wing (Charred Cedar + White Plaster) / East Wing (Textured Pebble-Dash!)
  // Front 1F (+Z = +4.40): Entrance doorway X ∈ [-1.55, +0.55] (2.10m wide)
  p.box('ext', 4.68, 1.25, 0.26, -3.88, Y1 + 0.62, 4.40, cedarDark, { solid: true });
  p.box('ext', 1.35, h1 - 1.25, 0.26, -5.54, Y1 + 2.20, 4.40, whitePlaster, { solid: true });
  p.box('ext', 2.25, 0.58, 0.26, -3.72, Y1 + 2.86, 4.40, whitePlaster, { solid: true });
  p.box('ext', 2.20, 1.32, 0.07, -3.72, Y1 + 1.90, 4.40, latticeMat, { uvScale: 0 });
  p.box('ext', 1.08, h1 - 1.25, 0.26, -2.06, Y1 + 2.20, 4.40, whitePlaster, { solid: true });
  p.box('ext', 2.14, 0.74, 0.26, -0.50, Y1 + 2.78, 4.40, whitePlaster, { solid: true });
  p.box('ext', 1.05, 2.34, 0.06, -1.95, Y1 + 1.18, 4.20, shojiMat, { uvScale: 0 });
  // East Front 1F Pebble-Dash Parlor Wall (X ∈ [+0.55, +6.20]) with bright Meiji parlor window!
  p.box('ext', 5.68, 1.12, 0.26, 3.38, Y1 + 0.56, 4.40, pebbleDash, { solid: true });
  p.box('ext', 1.35, h1 - 1.12, 0.26, 1.22, Y1 + 2.14, 4.40, pebbleDash, { solid: true });
  p.box('ext', 2.55, 0.54, 0.26, 3.18, Y1 + 2.88, 4.40, pebbleDash, { solid: true });
  p.box('ext', 2.50, 1.48, 0.06, 3.18, Y1 + 1.86, 4.40, clearGlass, { uvScale: 0 });
  p.box('ext', 1.78, h1 - 1.12, 0.26, 5.34, Y1 + 2.14, 4.40, pebbleDash, { solid: true });

  // Back 1F (-Z = -4.40), West 1F (-X = -6.20), East 1F Pebble-Dash (+X = +6.20)
  p.box('ext', 7.45, 1.20, 0.26, -2.48, Y1 + 0.60, -4.40, cedarDark, { solid: true });
  p.box('ext', 7.45, h1 - 1.20, 0.26, -2.48, Y1 + 2.18, -4.40, whitePlaster, { solid: true });
  p.box('ext', 5.05, h1, 0.26, 3.70, mid1, -4.40, pebbleDash, { solid: true });
  p.box('ext', 0.26, 1.20, 8.85, -6.20, Y1 + 0.60, 0, cedarDark, { solid: true });
  p.box('ext', 0.26, h1 - 1.20, 8.85, -6.20, Y1 + 2.18, 0, whitePlaster, { solid: true });
  p.box('ext', 0.26, h1, 8.85, 6.20, mid1, 0, pebbleDash, { solid: true });

  // 1F Interior Partitions (West Irori Hall ↔ East Pechka Parlor at X = +1.20, 1.80m archway Z ∈ [+1.15, +2.95])
  p.box('int', 0.16, h1, 5.58, 1.20, mid1, -1.62, washiWall, { solid: true });
  p.box('int', 0.16, 0.72, 1.85, 1.20, Y1 + 2.79, 2.05, frostedAcrylic, { uvScale: 0 });
  p.box('int', 0.16, h1, 1.48, 1.20, mid1, 3.68, washiWall, { solid: true });
  // East Bath/Kitchen divider Z = -1.75 (open 1.55m doorway X ∈ [+1.85, +3.40])
  p.box('int', 0.68, h1, 0.14, 1.54, mid1, -1.75, retroTile, { solid: true });
  p.box('int', 1.60, 0.72, 0.14, 2.62, Y1 + 2.79, -1.75, retroTile, { solid: true });
  p.box('int', 2.85, h1, 0.14, 4.82, mid1, -1.75, retroTile, { solid: true });

  // ★ 1F Hero Props: Giant Daikoku-bashira Pillar, Sunken Stone Irori Hearth & Tall Red-Brick Pechka Heater!
  p.box('int', 0.42, h1, 0.42, -1.95, mid1, 0.25, timberDark, { solid: true }); // Massive Daikoku-bashira!
  // Sunken Stone-Edged Irori Hearth (囲炉裏) at (-3.35, -1.65)
  p.box('int', 1.55, 0.20, 1.55, -3.35, Y1 + 0.10, -1.65, dampStone, { solid: true });
  p.box('int', 1.12, 0.12, 1.12, -3.35, Y1 + 0.18, -1.65, charredSoil);
  p.cyl('int', 0.22, 0.20, 0.22, 10, -3.35, Y1 + 0.36, -1.65, ironMat);          // Iron tea kettle
  p.cyl('int', 0.03, 0.03, 2.65, 6, -3.35, Y1 + 1.80, -1.65, ironMat);           // Hanging Jizai-kagi hook
  for (const [zx, zz] of [[-3.35, -0.55], [-2.20, -1.65], [-3.35, -2.75]]) {
    p.box('int', 0.62, 0.08, 0.62, zx, Y1 + 0.08, zz, zabutonMat, { uvScale: 0 });
  }
  p.box('int', 1.45, 1.48, 0.52, -0.45, Y1 + 0.75, -3.95, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 1.75, 0.92, 0.62, -2.45, Y1 + 0.46, -3.98, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 0.56, 1.85, 1.25, 0.85, Y1 + 0.94, -3.35, cabMat, { solid: true, uvScale: 0 });

  // ★ Tall Russian-Meiji Red-Brick Pechka Heating Stove inside East Parlor (X = +5.40, Z = -0.35)!
  p.box('int', 1.15, 2.55, 1.25, 5.42, Y1 + 1.28, -0.35, oldBrick, { solid: true });
  p.box('int', 1.24, 0.16, 1.34, 5.42, Y1 + 2.58, -0.35, redBrick);
  p.box('int', 0.54, 0.62, 0.08, 4.82, Y1 + 0.72, -0.35, ironMat);               // Cast-iron firebox door
  p.box('int', 1.95, 0.52, 0.82, 3.65, Y1 + 0.28, 3.45, grayFabric, { solid: true }); // Parlor woven sofa
  p.box('int', 1.25, 0.58, 0.72, 3.65, Y1 + 0.30, 1.95, timberDark, { solid: true }); // Coffee table
  p.box('int', 1.65, 0.68, 1.15, 5.15, Y1 + 0.34, -3.55, greenTile, { solid: true }); // Brick-heated tub

  // 1F -> 2F West Staircase (X = -5.20, Z: +2.30 -> -1.75, Y1 -> Y2)
  p.stairRun('int', {
    x0: -5.20,
    z0: 2.30,
    x1: -5.20,
    z1: -1.75,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.18,
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

  // =========================================================================
  // 3. 2F: TWIN TATAMI SUITES, FROSTED-ACRYLIC TRANSOMS & FRONT VERANDA (Y = +3.65m)
  // =========================================================================
  const h2 = Y3 - Y2; // 3.05m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs (cutout: West 1F->2F stairwell X ∈ [-6.12, -4.46], Z ∈ [-1.80, +2.42])
  p.box('int', 10.66, 0.16, 8.80, 0.87, Y2 - 0.06, 0, warmFloor);         // Center + East X∈[-4.46,+6.20]
  p.box('int', 1.74, 0.16, 2.62, -5.33, Y2 - 0.06, -3.10, warmFloor);     // NW Landing Z∈[-4.40,-1.78]
  p.box('int', 1.74, 0.16, 2.00, -5.33, Y2 - 0.06, 3.40, warmFloor);      // SW Strip Z∈[+2.40,+4.40]
  p.box('int', 4.6, 0.04, 5.2, -1.9, Y2 + 0.03, 1.2, tatamiPlain);        // West 2F guest tatami
  p.box('int', 5.2, 0.04, 7.6, 3.4, Y2 + 0.03, 0.2, tatamiGreen);         // East 2F family master tatami

  p.collider(-4.46, 6.20, Y2 - 0.16, Y2 + 0.02, -4.40, 4.40);
  p.collider(-6.20, -4.46, Y2 - 0.16, Y2 + 0.02, -4.40, -1.80);
  p.collider(-6.20, -4.46, Y2 - 0.16, Y2 + 0.02, 2.42, 4.40);
  p.floor(-4.42, 6.08, -4.28, 4.35, Y2 + 0.04);
  p.floor(-6.08, -4.40, -4.28, -1.75, Y2 + 0.04);
  p.floor(-6.08, -4.40, 2.40, 4.28, Y2 + 0.04);

  // 2F West Stairwell guard rails
  p.kouranRailing('int', -4.46, -1.78, -4.46, 2.42, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', -6.08, 2.42, -4.46, 2.42, Y2, 0.94, timberDark, 0.52);

  // 2F Front Projecting Timber Veranda (Z ∈ [+4.40, +5.45], X ∈ [-5.6, +5.6])
  p.box('ext', 11.35, 0.16, 1.10, 0, Y2 - 0.04, 4.94, warmFloor);
  p.kouranRailing('ext', -5.62, 5.44, 5.62, 5.44, Y2, 0.94, timberDark, 0.54);
  p.kouranRailing('ext', -5.62, 4.40, -5.62, 5.44, Y2, 0.94, timberDark, 0.54);
  p.kouranRailing('ext', 5.62, 4.40, 5.62, 5.44, Y2, 0.94, timberDark, 0.54);
  p.floor(-5.52, 5.52, 4.32, 5.36, Y2 + 0.04);

  // 2F Exterior Walls (White Plaster West + Pebble-Dash East!)
  // Front 2F (+Z = +4.40): Open veranda door X ∈ [-0.85, +0.85]
  p.box('ext', 5.38, h2, 0.22, -3.52, mid2, 4.40, whitePlaster, { solid: true });
  p.box('ext', 1.74, 0.72, 0.22, 0.0, Y2 + 2.69, 4.40, whitePlaster, { solid: true });
  p.box('ext', 5.38, h2, 0.22, 3.52, mid2, 4.40, pebbleDash, { solid: true });
  p.box('ext', 7.45, h2, 0.22, -2.48, mid2, -4.40, whitePlaster, { solid: true });
  p.box('ext', 5.05, h2, 0.22, 3.70, mid2, -4.40, pebbleDash, { solid: true });
  p.box('ext', 0.22, h2, 8.85, -6.20, mid2, 0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 8.85, 6.20, mid2, 0, pebbleDash, { solid: true });
  for (const px of [-6.22, -3.1, -0.88, 0.88, 3.6, 6.22]) {
    p.box('ext', 0.16, h2 + 0.06, 0.26, px, mid2, 4.42, timberDark);
  }

  // 2F Interior Partitions (Twin suites divided at X = +2.45, leaving a spacious 1.40m landing before the 2F->3F stair at X=+1.05!)
  p.box('int', 0.14, h2, 4.12, 2.45, mid2, -2.35, fusumaMat, { solid: true, uvScale: 0 });
  p.box('int', 0.14, 0.72, 2.05, 2.45, Y2 + 2.69, 0.70, frostedAcrylic, { uvScale: 0 });
  p.box('int', 0.14, h2, 2.72, 2.45, mid2, 3.05, fusumaMat, { solid: true, uvScale: 0 });
  // 2F Yellow ochre alcove wall + futon + dresser
  p.box('int', 0.10, h2 - 0.1, 3.2, 6.04, mid2, 1.4, yellowWall);
  p.box('int', 1.65, 0.34, 2.15, 4.45, Y2 + 0.21, 1.55, futonMat, { solid: true, uvScale: 0 });
  p.box('int', 1.25, 1.15, 0.50, 4.65, Y2 + 0.58, -3.95, dresserMat, { solid: true, uvScale: 0 });
  p.box('int', 1.45, 1.45, 0.52, -1.85, Y2 + 0.74, 3.92, tansuMat, { solid: true, uvScale: 0 });

  // 2F -> 3F North Staircase (ENTIRELY inside 3F West Study footprint: Z = -2.35, X: +1.05 -> -2.85, Y2 -> Y3!)
  p.stairRun('int', {
    x0: 1.05,
    z0: -2.35,
    x1: -2.85,
    z1: -2.35,
    y0: Y2 + 0.04,
    y1: Y3 + 0.04,
    width: 1.14,
    steps: 14,
    treadMat: timberDark,
    stringerMat: timberDark,
    railMat: warmFloor,
    railLeft: true,
    railRight: true,
    closedRisers: false,
    guardLeft: true,
    guardRight: true,
  });

  // =========================================================================
  // 4. 3F: WEST PANORAMIC STUDY (7.8m x 6.4m) + ★ EAST OPEN LAUNDRY ROOF DECK (4.2m x 6.4m)!
  // =========================================================================
  const h3 = YTOP - Y3; // 2.80m
  const mid3 = Y3 + h3 * 0.5;

  // 3F West Study Floor (X ∈ [-6.0, +1.8], Z ∈ [-3.2, +3.2]) with 2F->3F cutout (X∈[-2.88,+1.12], Z∈[-2.96,-1.74])
  p.box('int', 7.80, 0.16, 4.96, -2.10, Y3 - 0.06, 0.72, oakFloor);        // Main south/mid Z∈[-1.76,+3.2]
  p.box('int', 3.14, 0.16, 1.46, -4.43, Y3 - 0.06, -2.47, oakFloor);       // NW arrival landing X∈[-6.0,-2.86]
  p.box('int', 0.70, 0.16, 1.46, 1.45, Y3 - 0.06, -2.47, oakFloor);        // NE strip X∈[+1.10,+1.80]

  // ★ 3F East Open Laundry & View Roof Deck (X ∈ [+1.8, +6.05], Z ∈ [-3.25, +3.25] — open sky beside brick chimney!)
  p.box('ext', 4.30, 0.18, 6.55, 3.92, Y3 - 0.06, 0, weatheredConcrete);
  p.box('ext', 3.90, 0.05, 6.10, 3.92, Y3 + 0.04, 0, warmFloor);           // Duckboard wooden deck planks!
  p.kouranRailing('ext', 1.80, 3.22, 6.02, 3.22, Y3, 0.96, timberDark, 0.54);
  p.kouranRailing('ext', 6.02, -3.22, 6.02, 3.22, Y3, 0.96, timberDark, 0.54);
  p.kouranRailing('ext', 1.80, -3.22, 6.02, -3.22, Y3, 0.96, timberDark, 0.54);
  // Traditional Showa wooden rooftop laundry poles (物干し竿) along east deck edge
  for (const lz of [-2.4, 2.4]) {
    p.box('ext', 0.10, 1.95, 0.10, 5.25, Y3 + 0.98, lz, timberDark);
  }
  p.cyl('ext', 0.032, 0.032, 5.10, 6, 5.25, Y3 + 1.82, 0, warmFloor, { rx: Math.PI * 0.5 });

  p.collider(-6.0, 1.8, Y3 - 0.16, Y3 + 0.02, -1.74, 3.2);
  p.collider(-6.0, -2.88, Y3 - 0.16, Y3 + 0.02, -3.2, -1.74);
  p.collider(1.12, 1.8, Y3 - 0.16, Y3 + 0.02, -3.2, -1.74);
  p.collider(1.8, 6.05, Y3 - 0.18, Y3 + 0.02, -3.25, 3.25);

  p.floor(-5.88, 1.85, -1.72, 3.12, Y3 + 0.04);
  p.floor(-5.88, -2.82, -3.12, -1.70, Y3 + 0.04);
  p.floor(1.12, 1.85, -3.12, -1.70, Y3 + 0.04);
  p.floor(1.75, 5.92, -3.12, 3.12, Y3 + 0.04);

  // 3F Stairwell guard railings
  p.kouranRailing('int', -2.86, -1.74, 1.12, -1.74, Y3, 0.94, timberDark, 0.54);
  p.kouranRailing('int', 1.12, -3.12, 1.12, -1.74, Y3, 0.94, timberDark, 0.50);

  // 3F West Pavilion Exterior Walls (White Plaster + Panoramic South/West Windows + East Roof-Deck Doorway!)
  // East 3F wall (X = +1.80): Open 1.75m roof-deck doorway Z ∈ [+0.15, +1.90]
  p.box('ext', 0.22, h3, 3.40, 1.80, mid3, -1.52, whitePlaster, { solid: true });
  p.box('ext', 0.22, 0.68, 1.80, 1.80, Y3 + 2.46, 1.02, whitePlaster, { solid: true });
  p.box('ext', 0.22, h3, 1.34, 1.80, mid3, 2.56, whitePlaster, { solid: true });
  // South 3F (+Z = +3.20) with wide mountain valley window
  p.box('ext', 7.85, 0.85, 0.22, -2.10, Y3 + 0.42, 3.20, whitePlaster, { solid: true });
  p.box('ext', 2.05, h3 - 0.85, 0.22, -5.00, Y3 + 1.82, 3.20, whitePlaster, { solid: true });
  p.box('ext', 3.60, 0.46, 0.22, -2.15, Y3 + 2.57, 3.20, whitePlaster, { solid: true });
  p.box('ext', 3.56, 1.48, 0.06, -2.15, Y3 + 1.60, 3.20, clearGlass, { uvScale: 0 });
  p.box('ext', 2.25, h3 - 0.85, 0.22, 0.72, Y3 + 1.82, 3.20, whitePlaster, { solid: true });
  // North 3F (-Z = -3.20) & West 3F (-X = -6.00)
  p.box('ext', 7.85, h3, 0.22, -2.10, mid3, -3.20, whitePlaster, { solid: true });
  p.box('ext', 0.22, 0.88, 6.45, -6.00, Y3 + 0.44, 0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h3 - 0.88, 1.85, -6.00, Y3 + 1.84, -2.30, whitePlaster, { solid: true });
  p.box('ext', 0.22, 0.48, 2.65, -6.00, Y3 + 2.56, -0.05, whitePlaster, { solid: true });
  p.box('ext', 0.06, 1.44, 2.60, -6.00, Y3 + 1.60, -0.05, glassMat, { uvScale: 0 });
  p.box('ext', 0.22, h3 - 0.88, 1.98, -6.00, Y3 + 1.84, 2.24, whitePlaster, { solid: true });

  // 3F Study Furnishings
  p.box('int', 1.85, 0.84, 0.82, -2.25, Y3 + 0.44, 1.95, counterMat, { solid: true, uvScale: 0 });
  p.box('int', 0.52, 1.95, 1.75, -5.58, Y3 + 0.98, 1.85, bookcaseMat, { solid: true, uvScale: 0 });
  p.box('int', 1.45, 1.10, 0.48, -4.45, Y3 + 0.56, -2.80, dresserMat, { solid: true, uvScale: 0 });

  // =========================================================================
  // 5. WARM BIZEN CHESTNUT-BRONZE HON-GAWARA ROOFS (1F Eaves, 2F Skirts, 3F Kirizuma!)
  // =========================================================================
  // 1F Front & Side Kawara Eaves
  p.kawaraSlope('ext', {
    bottomWidth: 13.2,
    run: 1.32,
    pitch: 0.36,
    ridgeX: 0,
    ridgeY: Y2 + 0.12,
    ridgeZ: 4.36,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 9.6,
    run: 1.05,
    pitch: 0.36,
    ridgeX: -6.16,
    ridgeY: Y2 + 0.10,
    ridgeZ: 0,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });

  // 2F Lower Skirt Kawara Eaves along Front (+Z), Back (-Z), and West (-X) (leaving 3F East Roof Deck wide open!)
  p.kawaraSlope('ext', {
    bottomWidth: 13.4,
    run: 2.35,
    pitch: 0.38,
    ridgeX: 0,
    ridgeY: Y3 + 0.24,
    ridgeZ: 3.22,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 13.4,
    run: 1.95,
    pitch: 0.38,
    ridgeX: 0,
    ridgeY: Y3 + 0.20,
    ridgeZ: -3.22,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });

  // ★ 3F Bold Bizen-Bronze Hon-gawara Kirizuma Roof over West Pavilion (X ∈ [-6.95, +2.65], Z ∈ [-4.25, +4.25])
  const topPitch = 0.48;
  const topRun = 4.25;
  const topRidgeY = YTOP + topRun * Math.tan(topPitch) - 0.10; // ~11.61m
  const topCX = -2.10;
  const topBotW = 9.50;
  const gableH = topRidgeY - YTOP + 0.10;

  p.gablePrism('ext', 6.50, gableH, 0.22, -6.00, YTOP - 0.04, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 6.50, gableH, 0.22, 1.80, YTOP - 0.04, 0, whitePlaster, { ry: Math.PI * 0.5 });

  p.kawaraSlope('ext', {
    bottomWidth: topBotW,
    run: topRun,
    pitch: topPitch,
    ridgeX: topCX,
    ridgeY: topRidgeY,
    ridgeZ: 0,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.36,
  });
  p.kawaraSlope('ext', {
    bottomWidth: topBotW,
    run: topRun,
    pitch: topPitch,
    ridgeX: topCX,
    ridgeY: topRidgeY,
    ridgeZ: 0,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.36,
  });
  p.kawaraRidge(
    'ext',
    topCX - topBotW * 0.5 + 0.06,
    topRidgeY + 0.04,
    0,
    topCX + topBotW * 0.5 - 0.06,
    topRidgeY + 0.04,
    0,
    kawaraRidge,
    oniMat,
    { scale: 1.08, courses: 3, oniStart: true, oniEnd: true }
  );

  return p.build({
    id: 'H14',
    name: '村田家（赤煉瓦ペチカ煙突＆物干しデッキ三階邸）',
    subtitle: '11.8m赤煉瓦大煙突・リシン洋間・囲炉裏大黒柱・3F開放デッキ',
    category: 'house',
    builtYear: 1883,
    abandonedYear: 1985,
    stories: 3,
    floorElevations: [Y1, Y2, Y3],
    entryLocal: [-0.5, 0.0, 6.8],
    entryLookLocalYaw: 0,
  });
}
