import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * S02: 炭鉱購買部・大衆食堂「みなとや」（商業施設 02 — 1894年築・1962年改装・幅15.2m 二階建）
 * 中段・下段村道が合流する渓谷中央交差点（標高258m）に建つ、炭鉱夫たちの胃袋を支えた大衆食堂＆炭鉱購買部！
 *  - 外観: 正面食堂入口に揺れる暖簾（shop_noren）、東購買部の縞庇（shop_striped_awning）、
 *    幅16.8mの石州赤茶本瓦大屋根＆厨房煙出し越屋根（鬼瓦×4基）。
 *  - 1F西〜中央「大衆食堂みなとや」: L字木製カウンター＆丸椅子×5脚・木札メニュー表（shop_menu_boards）・
 *    レトロタイル厨房・冷蔵飲料ケース（shop_drink_cooler）・レジ台・テーブル席×2。
 *  - 1F東「炭鉱購買部」: 配給・作業具ラック・米俵シート・配給価格黒板・配電制御盤。
 *  - 2F (Y=+3.65m): 炭鉱夫の「二階大宴会お座敷」（長座卓×2・赤座布団×8）＋幅14.4m交差点見晴らし縁側！
 */
export function buildShop02Minatoya(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Showa Diner & Coal-Mine Commissary Materials ---
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const sidewalkSlab = catalog.getMaterial('sidewalk_slab', { roughness: 0.90, bumpScale: 0.05 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.90, bumpScale: 0.05 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.90, bumpScale: 0.05 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xf4eee2 });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.82, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.80, bumpScale: 0.03 });
  const ajiroCeil = catalog.getMaterial('woven_screen_brown', { roughness: 0.90, bumpScale: 0.05 });
  const louverMat = catalog.getMaterial('cedar_louvers', { roughness: 0.86, bumpScale: 0.05 });

  // --- Dedicated Showa Diner & Commissary Textures! ---
  const shopNoren = catalog.getMaterial('shop_noren', { roughness: 0.92, bumpScale: 0.02, doubleSide: true });
  const menuBoards = catalog.getMaterial('shop_menu_boards', { roughness: 0.82, bumpScale: 0.03 });
  const stripedAwning = catalog.getMaterial('shop_striped_awning', { roughness: 0.88, bumpScale: 0.04, doubleSide: true });
  const registerCounter = catalog.getMaterial('shop_register_counter', { roughness: 0.72, bumpScale: 0.03 });
  const drinkCooler = catalog.getMaterial('shop_drink_cooler', { roughness: 0.42, metalness: 0.25, bumpScale: 0.03 });
  const retroTile = catalog.getMaterial('retro_tile_wall', { roughness: 0.46, bumpScale: 0.03 });
  const whiteTile = catalog.getMaterial('white_bath_tile', { roughness: 0.44, bumpScale: 0.02 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.78, bumpScale: 0.03 });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.88, bumpScale: 0.04 });
  const coarseCanvas = catalog.getMaterial('coarse_canvas', { roughness: 0.95, bumpScale: 0.05, doubleSide: true });
  const darkGreenChalk = catalog.getMaterial('dark_green_chalk', { roughness: 0.88, bumpScale: 0.02 });
  const minePanel = catalog.getMaterial('mine_control_panel', { roughness: 0.62, metalness: 0.45, bumpScale: 0.04 });

  // --- 2F Banquet Hall Materials ---
  const clearGlass = catalog.getMaterial('window_frosted_wood', { roughness: 0.22, opacity: 0.24, transparent: true, tint: 0xe6f0f5 });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.88, transparent: true });
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiGreen = catalog.getMaterial('tatami_green_border', { roughness: 0.92, bumpScale: 0.04 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });

  // --- Warm Sekishu Red-Brown Glazed Hon-gawara (石州赤茶本瓦大屋根!) ---
  const kawaraDeck = catalog.getMaterial('glazed_brown_brick', { roughness: 0.66, metalness: 0.18, bumpScale: 0.06, tint: 0xb67a5c });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.64, metalness: 0.22, bumpScale: 0.05, tint: 0x8e5d46 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.58, metalness: 0.30, tint: 0x744b38 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.50, metalness: 0.40, tint: 0x5c3c2d });

  const Y1 = 0.45;
  const Y2 = 3.65;
  const YTOP = 6.65;

  // =========================================================================
  // 1. CROSSROADS DINER STONE STOOP, HANGING SHOP NOREN & STRIPED AWNING!
  // =========================================================================
  p.box('ext', 15.8, 3.20, 9.8, 0, Y1 - 1.62, 0, cutStone);
  p.box('ext', 15.4, 0.10, 1.55, 0, 0.02, 5.45, sidewalkSlab);
  p.stoneSteps('ext', -1.00, 5.75, 4.58, -0.04, Y1, 3.10, 3, stepStone);
  // Hanging Showa Diner Curtain (shop_noren) spanning the wide 2.80m entrance above head height!
  p.box('ext', 2.75, 0.68, 0.05, -1.00, Y1 + 2.26, 4.78, shopNoren, { uvScale: 0 });
  // East Co-op Commissary Striped Awning!
  p.box('ext', 5.20, 0.10, 1.45, 4.95, Y1 + 2.74, 5.28, stripedAwning, { rx: 0.26, uvScale: 0 });

  // =========================================================================
  // 2. 1F: SHOWA DINER "MINATOYA" (WEST/CENTER) & COAL-MINE CO-OP COMMISSARY (EAST)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.20m
  const mid1 = Y1 + h1 * 0.5;

  p.box('int', 10.0, 0.14, 9.0, -2.55, Y1 - 0.05, 0, oakFloor);           // Warm diner floor
  p.box('int', 5.25, 0.14, 9.0, 5.00, Y1 - 0.05, 0, whiteTile);           // Clean tiled commissary floor
  p.box('int', 1.40, 0.03, 0.74, -1.00, Y1 + 0.04, 4.18, coirMat, { uvScale: 0 });
  p.floor(-7.48, 7.48, -4.48, 4.68, Y1 + 0.04);

  // 1F Exterior Walls (+Z = +4.60): Wide 2.80m Open Diner Portal X ∈ [-2.40, +0.40]!
  p.box('ext', 5.24, 0.90, 0.24, -5.00, Y1 + 0.45, 4.60, cedarDark, { solid: true });
  p.box('ext', 1.05, h1 - 0.90, 0.24, -7.10, Y1 + 2.05, 4.60, agedTimber, { solid: true });
  p.box('ext', 3.15, 0.56, 0.24, -4.98, Y2 - 0.28, 4.60, agedTimber, { solid: true });
  p.box('ext', 3.18, 0.08, 0.28, -4.98, Y1 + 0.92, 4.60, timberDark);
  p.box('ext', 3.18, 0.08, 0.28, -4.98, Y2 - 0.56, 4.60, timberDark);
  p.box('ext', 3.10, 1.70, 0.06, -4.98, Y1 + 1.78, 4.60, clearGlass, { uvScale: 0 });
  p.box('ext', 1.04, h1 - 0.90, 0.24, -2.90, Y1 + 2.05, 4.60, agedTimber, { solid: true });

  p.box('ext', 2.84, 0.66, 0.24, -1.00, Y2 - 0.33, 4.60, agedTimber, { solid: true });
  p.box('ext', 2.86, 0.09, 0.28, -1.00, Y2 - 0.66, 4.60, timberDark);

  p.box('ext', 7.24, 0.90, 0.24, 4.00, Y1 + 0.45, 4.60, cedarDark, { solid: true });
  p.box('ext', 1.55, h1 - 0.90, 0.24, 1.15, Y1 + 2.05, 4.60, agedTimber, { solid: true });
  p.box('ext', 4.15, 0.56, 0.24, 4.00, Y2 - 0.28, 4.60, agedTimber, { solid: true });
  p.box('ext', 4.18, 0.08, 0.28, 4.00, Y1 + 0.92, 4.60, timberDark);
  p.box('ext', 4.18, 0.08, 0.28, 4.00, Y2 - 0.56, 4.60, timberDark);
  p.box('ext', 4.10, 1.70, 0.06, 4.00, Y1 + 1.78, 4.60, clearGlass, { uvScale: 0 });
  p.box('ext', 1.56, h1 - 0.90, 0.24, 6.84, Y1 + 2.05, 4.60, agedTimber, { solid: true });

  p.box('ext', 15.25, 1.05, 0.24, 0, Y1 + 0.52, -4.60, cedarDark, { solid: true });
  p.box('ext', 15.25, h1 - 1.05, 0.24, 0, Y1 + 2.12, -4.60, agedTimber, { solid: true });
  p.box('ext', 0.24, 1.05, 9.24, -7.60, Y1 + 0.52, 0, cedarDark, { solid: true });
  p.box('ext', 0.24, h1 - 1.05, 9.24, -7.60, Y1 + 2.12, 0, agedTimber, { solid: true });
  p.box('ext', 0.24, 1.05, 9.24, 7.60, Y1 + 0.52, 0, cedarDark, { solid: true });
  p.box('ext', 0.24, h1 - 1.05, 9.24, 7.60, Y1 + 2.12, 0, agedTimber, { solid: true });

  // Internal 1F Partition dividing Diner & Coal-Mine Commissary at X = +2.40 (Wide 2.20m Archway Z ∈ [+1.20, +3.40]!)
  p.box('int', 0.18, h1, 5.82, 2.40, mid1, -1.70, washiWall, { solid: true });
  p.box('int', 0.18, 0.70, 2.24, 2.40, Y2 - 0.35, 2.30, washiWall, { solid: true });
  p.box('int', 0.22, 0.09, 2.26, 2.40, Y2 - 0.70, 2.30, timberDark);
  p.box('int', 0.18, h1, 1.24, 2.40, mid1, 4.00, washiWall, { solid: true });

  // --- 1F WEST/CENTER SHOWA DINER「みなとや」FURNISHINGS ---
  // Retro Tiled Open Kitchen Rear Wall + Iconic Hanging Wooden Japanese Menu Boards (shop_menu_boards!)
  p.box('int', 7.20, h1 - 0.1, 0.10, -1.55, mid1, -4.44, retroTile);
  p.box('int', 3.45, 0.96, 0.08, -1.65, Y1 + 2.18, -4.34, menuBoards, { uvScale: 0 }); // Hanging wooden menu boards!
  p.box('int', 2.25, 0.92, 0.66, -2.55, Y1 + 0.46, -4.08, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 0.84, 1.98, 1.35, 1.78, Y1 + 0.99, -3.55, drinkCooler, { solid: true, uvScale: 0 }); // Diner drink cooler!
  // ★ L-SHAPED WOODEN RAMEN & TEISHOKU COUNTER + 5 HANDCRAFTED ROUND WOODEN STOOLS!
  p.box('int', 4.85, 0.92, 0.68, -2.05, Y1 + 0.46, -1.85, timberDark, { solid: true });
  p.box('int', 4.95, 0.07, 0.78, -2.05, Y1 + 0.95, -1.85, warmFloor, { solid: true }); // Polished diner counter slab!
  for (const sx of [-4.05, -3.05, -2.05, -1.05, -0.05]) {
    p.cyl('int', 0.21, 0.21, 0.06, 10, sx, Y1 + 0.56, -1.02, warmFloor);
    p.cyl('int', 0.05, 0.06, 0.54, 8, sx, Y1 + 0.27, -1.02, timberDark);
    p.collider(sx - 0.22, sx + 0.22, Y1, Y1 + 0.60, -1.24, -0.80);
  }
  // Diner Cashier Register Counter beside entry + 2 Handcrafted Wooden Diner Tables & Benches!
  p.box('int', 1.75, 0.90, 0.72, -3.85, Y1 + 0.45, 3.35, registerCounter, { solid: true, uvScale: 0 });
  p.box('int', 1.84, 0.06, 0.78, -3.85, Y1 + 0.92, 3.35, warmFloor, { solid: true });
  for (const [tx, tz] of [[-3.85, 1.15], [0.55, 1.15]]) {
    p.box('int', 1.35, 0.06, 0.84, tx, Y1 + 0.74, tz, warmFloor, { solid: true });
    p.box('int', 1.15, 0.72, 0.08, tx, Y1 + 0.36, tz - 0.34, timberDark, { solid: true });
    p.box('int', 1.15, 0.72, 0.08, tx, Y1 + 0.36, tz + 0.34, timberDark, { solid: true });
  }

  // --- 1F EAST COAL-MINE CO-OP COMMISSARY FURNISHINGS (炭鉱購買部!) ---
  p.box('int', 0.60, 1.85, 2.65, 6.95, Y1 + 0.92, -2.15, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 0.60, 1.85, 2.65, 6.95, Y1 + 0.92, 1.65, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 1.85, 0.84, 1.15, 4.35, Y1 + 0.42, -3.65, coarseCanvas, { solid: true }); // Rice & coal-ration sacks!
  p.box('int', 2.35, 1.42, 0.05, 4.85, Y1 + 1.78, -4.44, timberDark);
  p.box('int', 2.22, 1.30, 0.06, 4.85, Y1 + 1.78, -4.40, darkGreenChalk, { uvScale: 0 }); // Co-op ration prices!
  p.box('int', 1.40, 1.62, 0.54, 3.35, Y1 + 0.81, -4.15, minePanel, { solid: true, uvScale: 0 });

  // 1F -> 2F West Diner Banquet Staircase (X = -6.45, Z: +2.35 -> -2.05, Y1 -> Y2!)
  p.stairRun('int', {
    x0: -6.45, z0: 2.35, x1: -6.45, z1: -2.05, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.18, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: false, railRight: true, closedRisers: false, guardLeft: false, guardRight: true,
  });

  // =========================================================================
  // 3. 2F: MINERS' GRAND TATAMI BANQUET HALL & 14.4m CROSSROADS VERANDA (Y2 = +3.65m)
  // =========================================================================
  const h2 = YTOP - Y2; // 3.00m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs (cutout X ∈ [-7.52, -5.72], Z ∈ [-2.12, +2.42])
  p.box('int', 13.34, 0.16, 9.15, 0.94, Y2 - 0.06, 0, oakFloor);           // Main Banquet Hall X∈[-5.72,+7.60]
  p.box('int', 1.92, 0.16, 2.50, -6.66, Y2 - 0.06, -3.35, oakFloor);       // NW Arrival Z∈[-4.60,-2.10]
  p.box('int', 1.92, 0.16, 2.20, -6.66, Y2 - 0.06, 3.50, oakFloor);        // SW Strip Z∈[+2.40,+4.60]
  p.box('int', 5.80, 0.04, 6.80, -2.05, Y2 + 0.03, 0.0, tatamiBord);
  p.box('int', 5.80, 0.04, 6.80, 3.85, Y2 + 0.03, 0.0, tatamiGreen);
  p.box('int', 15.0, 0.08, 9.00, 0, YTOP - 0.05, 0, ajiroCeil);
  p.collider(-5.72, 7.60, Y2 - 0.16, Y2 + 0.02, -4.60, 4.60);
  p.collider(-7.60, -5.72, Y2 - 0.16, Y2 + 0.02, -4.60, -2.12);
  p.collider(-7.60, -5.72, Y2 - 0.16, Y2 + 0.02, 2.42, 4.60);
  p.floor(-5.68, 7.48, -4.48, 4.68, Y2 + 0.04);
  p.floor(-7.48, -5.64, -4.48, -2.06, Y2 + 0.04);
  p.floor(-7.48, -5.64, 2.38, 4.48, Y2 + 0.04);

  p.kouranRailing('int', -5.72, -2.12, -5.72, 2.42, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', -7.48, 2.42, -5.72, 2.42, Y2, 0.94, timberDark, 0.48);

  // ★ 2F 14.4m CROSSROADS PANORAMA KOURAN VERANDA (X ∈ [-7.20, +7.20], Z ∈ [+4.60, +5.72])!
  p.box('ext', 14.50, 0.16, 1.18, 0, Y2 - 0.04, 5.16, warmFloor);
  p.kouranRailing('ext', -7.22, 5.70, 7.22, 5.70, Y2, 0.94, timberDark, 0.58);
  p.kouranRailing('ext', -7.22, 4.60, -7.22, 5.70, Y2, 0.94, timberDark, 0.48);
  p.kouranRailing('ext', 7.22, 4.60, 7.22, 5.70, Y2, 0.94, timberDark, 0.48);
  p.floor(-7.12, 7.12, 4.52, 5.62, Y2 + 0.04);

  // 2F Exterior Walls (White Plaster Shinkabe + Shoji Banquet Screens + Veranda Door X ∈ [-1.00, +0.90]!)
  p.box('ext', 6.64, 0.90, 0.22, -4.30, Y2 + 0.45, 4.60, whitePlaster, { solid: true });
  p.box('ext', 1.65, h2 - 0.90, 0.22, -6.80, Y2 + 1.95, 4.60, whitePlaster, { solid: true });
  p.box('ext', 3.45, 0.52, 0.22, -4.25, YTOP - 0.26, 4.60, whitePlaster, { solid: true });
  p.box('ext', 3.48, 0.08, 0.26, -4.25, Y2 + 0.92, 4.60, timberDark);
  p.box('ext', 3.48, 0.08, 0.26, -4.25, YTOP - 0.52, 4.60, timberDark);
  p.box('ext', 3.40, 1.54, 0.06, -4.25, Y2 + 1.70, 4.60, shojiMat, { uvScale: 0 });
  p.box('ext', 1.54, h2 - 0.90, 0.22, -1.75, Y2 + 1.95, 4.60, whitePlaster, { solid: true });

  p.box('ext', 1.94, 0.68, 0.22, -0.05, YTOP - 0.34, 4.60, whitePlaster, { solid: true });
  p.box('ext', 1.96, 0.09, 0.26, -0.05, YTOP - 0.68, 4.60, timberDark);

  p.box('ext', 6.74, 0.90, 0.22, 4.25, Y2 + 0.45, 4.60, whitePlaster, { solid: true });
  p.box('ext', 1.60, h2 - 0.90, 0.22, 1.68, Y2 + 1.95, 4.60, whitePlaster, { solid: true });
  p.box('ext', 3.55, 0.52, 0.22, 4.25, YTOP - 0.26, 4.60, whitePlaster, { solid: true });
  p.box('ext', 3.58, 0.08, 0.26, 4.25, Y2 + 0.92, 4.60, timberDark);
  p.box('ext', 3.58, 0.08, 0.26, 4.25, YTOP - 0.52, 4.60, timberDark);
  p.box('ext', 3.50, 1.54, 0.06, 4.25, Y2 + 1.70, 4.60, shojiMat, { uvScale: 0 });
  p.box('ext', 1.60, h2 - 0.90, 0.22, 6.82, Y2 + 1.95, 4.60, whitePlaster, { solid: true });

  p.box('ext', 15.25, h2, 0.22, 0, mid2, -4.60, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 9.24, -7.60, mid2, 0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 9.24, 7.60, mid2, 0, whitePlaster, { solid: true });

  // ★ 2F GRAND BANQUET TABLES & 8 CRIMSON ZABUTON CUSHIONS!
  for (const bx of [-2.15, 3.65]) {
    p.box('int', 3.25, 0.36, 1.05, bx, Y2 + 0.20, 0.0, timberDark, { solid: true });
    for (const dx of [-0.95, 0.95]) {
      p.box('int', 0.60, 0.07, 0.60, bx + dx, Y2 + 0.07, -0.95, zabutonMat, { uvScale: 0 });
      p.box('int', 0.60, 0.07, 0.60, bx + dx, Y2 + 0.07, 0.95, zabutonMat, { uvScale: 0 });
    }
  }
  p.box('int', 1.55, 1.48, 0.54, 0.75, Y2 + 0.74, -4.16, tansuMat, { solid: true, uvScale: 0 });

  // =========================================================================
  // 4. SEKISHU RED-BROWN GRAND KIRIZUMA HON-GAWARA & DINER KITCHEN KOSHIYANE!
  // =========================================================================
  const pitch = 0.44;
  const run = 5.85;
  const ridgeY = YTOP + run * Math.tan(pitch) - 0.38; // ~9.02m
  p.kawaraSlope('ext', {
    bottomWidth: 16.8, run, pitch,
    ridgeX: 0, ridgeY, ridgeZ: 0, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 16.8, run, pitch,
    ridgeX: 0, ridgeY, ridgeZ: 0, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  const gableH = ridgeY - YTOP - 0.06;
  p.gablePrism('ext', 9.20, gableH, 0.22, -7.60, YTOP, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 9.20, gableH, 0.22, 7.60, YTOP, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.kawaraRidge('ext', -8.30, ridgeY + 0.04, 0, 8.30, ridgeY + 0.04, 0, kawaraRidge, oniMat, {
    scale: 1.12, courses: 3, oniStart: true, oniEnd: true,
  });

  // Diner Kitchen Smoke-Vent Koshiyane Monitor (煙出し越屋根)
  const kBaseY = ridgeY - 0.08;
  const kTopY = kBaseY + 0.88;
  p.box('ext', 5.60, 0.86, 1.50, -0.80, kBaseY + 0.43, 0, louverMat);
  p.kawaraSlope('ext', {
    bottomWidth: 6.50, run: 1.25, pitch: 0.40,
    ridgeX: -0.80, ridgeY: kTopY + 0.46, ridgeZ: 0, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.36,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 6.50, run: 1.25, pitch: 0.40,
    ridgeX: -0.80, ridgeY: kTopY + 0.46, ridgeZ: 0, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.36,
  });
  p.kawaraRidge('ext', -3.95, kTopY + 0.50, 0, 2.35, kTopY + 0.50, 0, kawaraRidge, oniMat, {
    scale: 0.78, courses: 1, oniStart: true, oniEnd: true,
  });

  // 1F Front Kawara Skirt Eave
  p.kawaraSlope('ext', {
    bottomWidth: 16.0, run: 1.38, pitch: 0.34,
    ridgeX: 0, ridgeY: Y2 + 0.08, ridgeZ: 4.56, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.40,
  });

  return p.build({
    id: 'S02',
    name: '炭鉱購買部・大衆食堂「みなとや」（商業施設 02）',
    subtitle: '食堂暖簾・L字カウンター＆丸椅子・木札メニュー表・炭鉱購買部・2F大宴会座敷＆石州赤茶本瓦',
    category: 'commercial',
    builtYear: 1894,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1, Y2],
    entryLocal: [-1.00, 0.0, 8.2],
    entryLookLocalYaw: 0,
  });
}
