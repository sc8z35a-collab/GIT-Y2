import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * S01: 黒磯よろず商店・簡易郵便取扱所（商業施設 01 — 1888年築・幅13.8m 二階建商家）
 * 中段本通り角地（標高252m）に軒を連ねる、島唯一のよろず屋兼簡易郵便局。全室入室＆2F階段昇降可能！
 *  - 外観: 赤白縞の商店テント庇（shop_striped_awning）、クラシック赤丸型郵便ポスト、青い琺瑯看板、
 *    歩道舗装＆縁石前庭、商家格調のいぶし銀本瓦入母屋屋根＋白漆喰卯建（うだつ）袖壁＆双鬼瓦。
 *  - 1F (Y=+0.45m): 西〜中央「よろず売場」（レジカウンター shop_register_counter・瓶飲料冷蔵ケース
 *    shop_drink_cooler・陳列商品棚×3列・クリームタイル床）、東「簡易郵便取扱所」（窓口・配達地図・区分棚）。
 *  - 2F (Y=+3.65m): 東裏階段より昇降。店主家族の8畳座敷・台所・寝室・卸荷倉＋幅12.8m正面高欄縁！
 */
export function buildShop01Yorozu(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Corner General Store & Rural Post Office Materials ---
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const sidewalkSlab = catalog.getMaterial('sidewalk_slab', { roughness: 0.90, bumpScale: 0.05 });
  const concreteCurb = catalog.getMaterial('concrete_curb', { roughness: 0.90, bumpScale: 0.05 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.90, bumpScale: 0.05 });
  const horizWood = catalog.getMaterial('horizontal_wood_siding', { roughness: 0.88, bumpScale: 0.05 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xf6f1e6 });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.82, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.80, bumpScale: 0.03 });
  const creamTile = catalog.getMaterial('cream_ceramic_tile', { roughness: 0.52, bumpScale: 0.02 });
  const ajiroCeil = catalog.getMaterial('woven_screen_brown', { roughness: 0.90, bumpScale: 0.05 });

  // --- Dedicated Commercial Shop & Postal Textures! ---
  const stripedAwning = catalog.getMaterial('shop_striped_awning', { roughness: 0.88, bumpScale: 0.04, doubleSide: true });
  const registerCounter = catalog.getMaterial('shop_register_counter', { roughness: 0.72, bumpScale: 0.03 });
  const drinkCooler = catalog.getMaterial('shop_drink_cooler', { roughness: 0.42, metalness: 0.25, bumpScale: 0.03 });
  const postboxRed = catalog.getMaterial('red_tin_roof', { roughness: 0.46, metalness: 0.34, tint: 0xd6362e });
  const enamelBlue = catalog.getMaterial('enamel_sign_blue', { roughness: 0.46, metalness: 0.32 });
  const officeCounter = catalog.getMaterial('office_counter', { roughness: 0.80, bumpScale: 0.03 });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.88, bumpScale: 0.04 });
  const noticeMat = catalog.getMaterial('notice_board', { roughness: 0.88, bumpScale: 0.02 });
  const corkMat = catalog.getMaterial('cork_board', { roughness: 0.92, bumpScale: 0.03 });
  const mapSign = catalog.getMaterial('island_map_sign', { roughness: 0.80, bumpScale: 0.02 });
  const fileCab = catalog.getMaterial('file_cabinet', { roughness: 0.66, metalness: 0.25 });
  const clearGlass = catalog.getMaterial('window_frosted_wood', { roughness: 0.22, opacity: 0.24, transparent: true, tint: 0xe4f0f6 });
  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.32, opacity: 0.36, transparent: true });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });

  // --- 2F Shopkeeper Living Suite Props ---
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.78, bumpScale: 0.03 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.92, bumpScale: 0.03 });
  const coarseCanvas = catalog.getMaterial('coarse_canvas', { roughness: 0.95, bumpScale: 0.05, doubleSide: true });

  // --- Noble Merchant Silver-Black Hon-gawara (商家いぶし銀本瓦) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.68, metalness: 0.22, bumpScale: 0.06, tint: 0xa4aeb8 });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.64, metalness: 0.26, bumpScale: 0.05, tint: 0x8e98a2 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.58, metalness: 0.32, tint: 0x76808a });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.50, metalness: 0.42, tint: 0x626a74 });

  const Y1 = 0.45;
  const Y2 = 3.65;
  const YTOP = 6.60;

  // =========================================================================
  // 1. CORNER SHOPFRONT APRON, STRIPED AWNING & CLASSIC RED JAPANESE POSTBOX!
  // =========================================================================
  p.box('ext', 14.4, 3.20, 9.4, 0, Y1 - 1.62, 0, cutStone);
  p.box('ext', 14.2, 0.10, 1.95, 0, 0.02, 5.42, sidewalkSlab);
  p.box('ext', 14.4, 0.16, 0.20, 0, 0.06, 6.42, concreteCurb);
  p.stoneSteps('ext', -0.50, 5.50, 4.38, -0.04, Y1, 3.30, 3, stepStone);

  // ★ CLASSIC RED CYLINDRICAL JAPANESE POSTBOX (丸型郵便ポスト — outside East postal window!)
  p.box('ext', 0.52, 0.20, 0.52, 2.25, 0.10, 5.15, concreteCurb, { solid: true });
  p.cyl('ext', 0.21, 0.22, 1.18, 12, 2.25, 0.78, 5.15, postboxRed);
  p.cyl('ext', 0.25, 0.25, 0.16, 12, 2.25, 1.42, 5.15, postboxRed);
  p.box('ext', 0.26, 0.06, 0.06, 2.25, 1.24, 5.36, timberDark); // Mail slot!
  p.collider(1.98, 2.52, 0.0, 1.55, 4.88, 5.42);

  // ★ ICONIC RED-AND-WHITE STRIPED CANVAS STOREFRONT AWNING (shop_striped_awning!)
  p.box('ext', 13.6, 0.10, 1.65, 0, Y1 + 2.75, 5.18, stripedAwning, { rx: 0.28, uvScale: 0 });
  for (const ax of [-6.5, -2.3, 1.3, 6.5]) {
    p.box('ext', 0.08, 0.08, 1.55, ax, Y1 + 2.55, 5.12, timberDark, { rx: 0.26 });
  }

  // =========================================================================
  // 2. 1F: GENERAL STORE SALES FLOOR (WEST/CENTER) & RURAL POST OFFICE (EAST)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.20m
  const mid1 = Y1 + h1 * 0.5;

  p.box('int', 13.6, 0.14, 8.6, 0, Y1 - 0.05, 0, creamTile);
  p.box('int', 1.45, 0.03, 0.78, -0.50, Y1 + 0.04, 3.95, coirMat, { uvScale: 0 });
  p.floor(-6.78, 6.78, -4.28, 4.50, Y1 + 0.04);

  // 1F Exterior Storefront (+Z = +4.40): Wide 3.20m Double Shop Portal X ∈ [-2.10, +1.10] + Big Showcase Windows!
  p.box('ext', 4.84, 0.84, 0.24, -4.50, Y1 + 0.42, 4.40, cedarDark, { solid: true });
  p.box('ext', 0.90, h1 - 0.84, 0.24, -6.48, Y1 + 2.02, 4.40, horizWood, { solid: true });
  p.box('ext', 3.10, 0.56, 0.24, -4.48, Y2 - 0.28, 4.40, horizWood, { solid: true });
  p.box('ext', 3.14, 0.08, 0.28, -4.48, Y1 + 0.86, 4.40, timberDark);
  p.box('ext', 3.14, 0.08, 0.28, -4.48, Y2 - 0.56, 4.40, timberDark);
  p.box('ext', 3.06, 1.76, 0.06, -4.48, Y1 + 1.74, 4.40, clearGlass, { uvScale: 0 }); // West showcase window!
  p.box('ext', 0.88, h1 - 0.84, 0.24, -2.52, Y1 + 2.02, 4.40, horizWood, { solid: true });

  p.box('ext', 3.24, 0.68, 0.24, -0.50, Y2 - 0.34, 4.40, horizWood, { solid: true });
  p.box('ext', 3.26, 0.09, 0.28, -0.50, Y2 - 0.68, 4.40, timberDark);

  p.box('ext', 5.84, 0.84, 0.24, 4.00, Y1 + 0.42, 4.40, cedarDark, { solid: true });
  p.box('ext', 1.45, h1 - 0.84, 0.24, 1.80, Y1 + 2.02, 4.40, horizWood, { solid: true });
  p.box('ext', 1.25, 0.76, 0.08, 1.80, Y1 + 1.85, 4.56, enamelBlue, { uvScale: 0 });  // Blue enamel postal sign!
  p.box('ext', 3.05, 0.56, 0.24, 4.05, Y2 - 0.28, 4.40, horizWood, { solid: true });
  p.box('ext', 3.08, 0.08, 0.28, 4.05, Y1 + 0.86, 4.40, timberDark);
  p.box('ext', 3.08, 0.08, 0.28, 4.05, Y2 - 0.56, 4.40, timberDark);
  p.box('ext', 3.00, 1.76, 0.06, 4.05, Y1 + 1.74, 4.40, clearGlass, { uvScale: 0 });  // East postal window!
  p.box('ext', 1.38, h1 - 0.84, 0.24, 6.24, Y1 + 2.02, 4.40, horizWood, { solid: true });
  p.box('ext', 1.15, 0.86, 0.08, 6.24, Y1 + 1.75, 4.56, noticeMat, { uvScale: 0 });   // Village bulletin board

  p.box('ext', 13.85, 1.05, 0.24, 0, Y1 + 0.52, -4.40, cedarDark, { solid: true });
  p.box('ext', 13.85, h1 - 1.05, 0.24, 0, Y1 + 2.12, -4.40, horizWood, { solid: true });
  p.box('ext', 0.24, 1.05, 8.84, -6.90, Y1 + 0.52, 0, cedarDark, { solid: true });
  p.box('ext', 0.24, h1 - 1.05, 8.84, -6.90, Y1 + 2.12, 0, horizWood, { solid: true });
  p.box('ext', 0.24, 1.05, 8.84, 6.90, Y1 + 0.52, 0, cedarDark, { solid: true });
  p.box('ext', 0.24, h1 - 1.05, 8.84, 6.90, Y1 + 2.12, 0, horizWood, { solid: true });

  // Internal 1F Archway Partition separating General Store & Postal Agency at X = +2.60 (Wide 2.20m opening Z ∈ [+1.40, +3.60]!)
  p.box('int', 0.18, h1, 5.82, 2.60, mid1, -1.50, washiWall, { solid: true });
  p.box('int', 0.18, 0.70, 2.24, 2.60, Y2 - 0.35, 2.50, washiWall, { solid: true });
  p.box('int', 0.22, 0.09, 2.26, 2.60, Y2 - 0.70, 2.50, timberDark);
  p.box('int', 0.18, h1, 0.84, 2.60, mid1, 4.00, washiWall, { solid: true });

  // --- 1F GENERAL STORE FURNISHINGS (レジ台・瓶飲料冷蔵庫・陳列棚×3!) ---
  p.box('int', 2.25, 0.92, 0.82, -3.55, Y1 + 0.46, 1.65, registerCounter, { solid: true, uvScale: 0 });
  p.box('int', 2.34, 0.06, 0.88, -3.55, Y1 + 0.94, 1.65, warmFloor, { solid: true }); // Polished shop register counter top!
  p.box('int', 0.82, 1.98, 1.45, -6.32, Y1 + 0.99, 1.85, drinkCooler, { solid: true, uvScale: 0 }); // Glass-front drink cooler!
  // Three stocked general-store merchandise display racks with generous 1.8m shopping aisles!
  p.box('int', 0.62, 1.72, 2.65, -4.35, Y1 + 0.86, -1.95, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 0.62, 1.72, 2.65, -0.55, Y1 + 0.86, -1.95, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 2.65, 1.78, 0.56, -2.55, Y1 + 0.89, -4.00, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 1.45, 0.82, 1.05, -6.05, Y1 + 0.42, -3.55, coarseCanvas, { solid: true });

  // --- 1F EAST RURAL POSTAL AGENCY FURNISHINGS (簡易郵便取扱所!) ---
  p.box('int', 2.15, 0.86, 0.76, 4.05, Y1 + 0.43, 0.15, officeCounter, { solid: true, uvScale: 0 });
  p.box('int', 2.24, 0.06, 0.82, 4.05, Y1 + 0.88, 0.15, warmFloor, { solid: true });  // Postal teller desktop!
  p.box('int', 0.58, 1.52, 0.76, 3.12, Y1 + 0.76, -3.75, fileCab, { solid: true, uvScale: 0 });
  p.box('int', 1.65, 1.15, 0.06, 4.55, Y1 + 1.82, -4.22, mapSign, { uvScale: 0 });    // Island postal delivery route map!
  p.box('int', 1.25, 0.92, 0.06, 2.75, Y1 + 1.75, -1.55, corkMat, { ry: Math.PI * 0.5, uvScale: 0 });

  // 1F -> 2F East Merchant Staircase (X = +5.65, Z: +2.30 -> -2.00, Y1 -> Y2!)
  p.stairRun('int', {
    x0: 5.65, z0: 2.30, x1: 5.65, z1: -2.00, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.12, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: true, railRight: false, closedRisers: false, guardLeft: true, guardRight: false,
  });

  // =========================================================================
  // 3. 2F: SHOPKEEPER'S FAMILY LIVING SUITE & 12.8m FRONT KOURAN BALCONY (Y2 = +3.65m)
  // =========================================================================
  const h2 = YTOP - Y2; // 2.95m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs (cutout X ∈ [+4.95, +6.82], Z ∈ [-2.08, +2.38])
  p.box('int', 11.88, 0.16, 8.75, -0.96, Y2 - 0.06, 0, oakFloor);          // Main X∈[-6.90,+4.98]
  p.box('int', 1.98, 0.16, 2.34, 5.92, Y2 - 0.06, -3.23, oakFloor);        // NE Arrival Z∈[-4.40,-2.06]
  p.box('int', 1.98, 0.16, 2.04, 5.92, Y2 - 0.06, 3.38, oakFloor);         // SE Strip Z∈[+2.36,+4.40]
  p.box('int', 5.20, 0.04, 5.80, 0.45, Y2 + 0.03, 0.25, tatamiBord);       // 8-mat family living zashiki
  p.box('int', 13.6, 0.08, 8.60, 0, YTOP - 0.05, 0, ajiroCeil);
  p.collider(-6.90, 4.95, Y2 - 0.16, Y2 + 0.02, -4.40, 4.40);
  p.collider(4.95, 6.90, Y2 - 0.16, Y2 + 0.02, -4.40, -2.08);
  p.collider(4.95, 6.90, Y2 - 0.16, Y2 + 0.02, 2.38, 4.40);
  p.floor(-6.78, 4.92, -4.28, 4.48, Y2 + 0.04);
  p.floor(4.88, 6.78, -4.28, -2.02, Y2 + 0.04);
  p.floor(4.88, 6.78, 2.32, 4.28, Y2 + 0.04);

  p.kouranRailing('int', 4.95, -2.08, 4.95, 2.38, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', 4.95, 2.38, 6.78, 2.38, Y2, 0.94, timberDark, 0.48);

  // ★ 2F 12.8m FRONT KOURAN BALCONY ABOVE THE STRIPED AWNING (X ∈ [-6.40, +6.40], Z ∈ [+4.40, +5.48])!
  p.box('ext', 12.90, 0.16, 1.14, 0, Y2 - 0.04, 4.94, warmFloor);
  p.kouranRailing('ext', -6.42, 5.46, 6.42, 5.46, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('ext', -6.42, 4.40, -6.42, 5.46, Y2, 0.94, timberDark, 0.48);
  p.kouranRailing('ext', 6.42, 4.40, 6.42, 5.46, Y2, 0.94, timberDark, 0.48);
  p.floor(-6.32, 6.32, 4.32, 5.40, Y2 + 0.04);

  // 2F Exterior Walls (White Machiya Plaster + Udatsu Wing Fire-Wall Cheeks + Balcony Door X ∈ [-1.00, +0.80]!)
  p.box('ext', 5.94, 0.90, 0.22, -3.95, Y2 + 0.45, 4.40, whitePlaster, { solid: true });
  p.box('ext', 1.40, h2 - 0.90, 0.22, -6.22, Y2 + 1.92, 4.40, whitePlaster, { solid: true });
  p.box('ext', 3.05, 0.50, 0.22, -3.98, YTOP - 0.25, 4.40, whitePlaster, { solid: true });
  p.box('ext', 3.08, 0.08, 0.26, -3.98, Y2 + 0.92, 4.40, timberDark);
  p.box('ext', 3.08, 0.08, 0.26, -3.98, YTOP - 0.50, 4.40, timberDark);
  p.box('ext', 3.00, 1.50, 0.06, -3.98, Y2 + 1.68, 4.40, glassMat, { uvScale: 0 });
  p.box('ext', 1.48, h2 - 0.90, 0.22, -1.72, Y2 + 1.92, 4.40, whitePlaster, { solid: true });

  p.box('ext', 1.84, 0.68, 0.22, -0.10, YTOP - 0.34, 4.40, whitePlaster, { solid: true });
  p.box('ext', 1.86, 0.09, 0.26, -0.10, YTOP - 0.68, 4.40, timberDark);

  p.box('ext', 6.14, 0.90, 0.22, 3.85, Y2 + 0.45, 4.40, whitePlaster, { solid: true });
  p.box('ext', 1.50, h2 - 0.90, 0.22, 1.54, Y2 + 1.92, 4.40, whitePlaster, { solid: true });
  p.box('ext', 3.05, 0.50, 0.22, 3.82, YTOP - 0.25, 4.40, whitePlaster, { solid: true });
  p.box('ext', 3.08, 0.08, 0.26, 3.82, Y2 + 0.92, 4.40, timberDark);
  p.box('ext', 3.08, 0.08, 0.26, 3.82, YTOP - 0.50, 4.40, timberDark);
  p.box('ext', 3.00, 1.50, 0.06, 3.82, Y2 + 1.68, 4.40, glassMat, { uvScale: 0 });
  p.box('ext', 1.58, h2 - 0.90, 0.22, 6.14, Y2 + 1.92, 4.40, whitePlaster, { solid: true });

  // Traditional Merchant Udatsu (卯建) Wing Fire-Wall Cheeks projecting cleanly at the 2F corners!
  p.box('ext', 0.32, h2 + 0.35, 1.15, -6.96, mid2 + 0.12, 4.92, whitePlaster);
  p.box('ext', 0.32, h2 + 0.35, 1.15, 6.96, mid2 + 0.12, 4.92, whitePlaster);

  p.box('ext', 13.85, h2, 0.22, 0, mid2, -4.40, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 8.84, -6.90, mid2, 0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 8.84, 6.90, mid2, 0, whitePlaster, { solid: true });

  // 2F Shopkeeper Living Suite Furnishings
  p.box('int', 1.48, 0.36, 0.92, 0.45, Y2 + 0.20, 0.25, timberDark, { solid: true });
  p.box('int', 0.60, 0.07, 0.60, 0.45, Y2 + 0.07, -0.58, zabutonMat, { uvScale: 0 });
  p.box('int', 0.60, 0.07, 0.60, 0.45, Y2 + 0.07, 1.08, zabutonMat, { uvScale: 0 });
  p.box('int', 1.95, 0.92, 0.64, 1.85, Y2 + 0.46, -3.96, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 1.42, 1.45, 0.54, -1.65, Y2 + 0.74, -3.98, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 1.65, 0.20, 2.15, -4.85, Y2 + 0.13, -1.65, futonMat, { solid: true, uvScale: 0 });
  p.box('int', 1.55, 0.85, 1.15, -5.65, Y2 + 0.44, 2.35, coarseCanvas, { solid: true });

  // =========================================================================
  // 4. GRAND MERCHANT SILVER-BLACK IRIMOYA HON-GAWARA ROOF (商家入母屋本瓦・双鬼瓦!)
  // =========================================================================
  const pitch = 0.44;
  const run = 5.65;
  const ridgeY = YTOP + run * Math.tan(pitch) - 0.36; // ~8.90m
  const ridgeHalfX = 4.60;
  const gableH = 1.25;
  const sideStartY = ridgeY - gableH;

  p.kawaraSlope('ext', {
    topWidth: ridgeHalfX * 2, bottomWidth: 15.8, run, pitch,
    ridgeX: 0, ridgeY, ridgeZ: 0, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.36,
  });
  p.kawaraSlope('ext', {
    topWidth: ridgeHalfX * 2, bottomWidth: 15.8, run, pitch,
    ridgeX: 0, ridgeY, ridgeZ: 0, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.36,
  });
  p.gablePrism('ext', 4.65, gableH - 0.08, 0.20, ridgeHalfX, sideStartY, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 4.65, gableH - 0.08, 0.20, -ridgeHalfX, sideStartY, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.kawaraSlope('ext', {
    topWidth: 4.80, bottomWidth: 11.4, run: 3.35, pitch: 0.44,
    ridgeX: ridgeHalfX, ridgeY: sideStartY, ridgeZ: 0, downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.36,
  });
  p.kawaraSlope('ext', {
    topWidth: 4.80, bottomWidth: 11.4, run: 3.35, pitch: 0.44,
    ridgeX: -ridgeHalfX, ridgeY: sideStartY, ridgeZ: 0, downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.36,
  });
  p.kawaraRidge('ext', -ridgeHalfX, ridgeY + 0.04, 0, ridgeHalfX, ridgeY + 0.04, 0, kawaraRidge, oniMat, {
    scale: 1.12, courses: 3, oniStart: true, oniEnd: true,
  });

  return p.build({
    id: 'S01',
    name: '黒磯よろず商店・簡易郵便取扱所（商業施設 01）',
    subtitle: '赤白縞テント庇・丸型郵便ポスト・よろず売場＆飲料冷蔵ケース・郵便窓口・2F店主居宅',
    category: 'commercial',
    builtYear: 1888,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1, Y2],
    entryLocal: [-0.50, 0.0, 8.2],
    entryLookLocalYaw: 0,
  });
}
