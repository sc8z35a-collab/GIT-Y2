import * as THREE from 'three';
import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * K01: 黒磯駐在所（交番 — 明治29年/1896年築・昭和33年改装・2階建）
 * 海岸林道と中段・下段村道が合流する黒磯村入口の三叉路北東角（標高239m）に建つ、
 * 島の玄関口を守った歴史ある木造白壁の駐在所（交番）。
 *  - 外観: 切石腰基礎・白漆喰＆下見板二階建、いぶし銀本瓦入母屋大屋根（鬼瓦×2）、
 *    正面玄関庇に灯る赤色丸型常夜灯（交番赤灯）＆青ホーロー看板、屋外掲示板＆島案内図、
 *    西側に巡回黒自転車を収めたトタン自転車置場。
 *  - 1F (Y=+0.42m): テラゾー土間の駐在事務室（受付カウンター・書類キャビネット・事件マップ掲示板・
 *    消火器箱・配電盤）＋奥の鉄格子付簡易保護室兼証拠保管室。
 *  - 2F (Y=+3.52m): 駐在巡査一家の畳官舎（縁付畳・箪笥・布団・書棚・座卓）＋三叉路を見下ろす正面バルコニー！
 */
export function buildKoban01Kuroiso(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Meiji-Showa Rural Police Substation Materials ---
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const sidewalkSlab = catalog.getMaterial('sidewalk_slab', { roughness: 0.90, bumpScale: 0.05 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.91, bumpScale: 0.04, tint: 0xf6f3ec });
  const pebbleWall = catalog.getMaterial('pebble_dash_wall', { roughness: 0.92, bumpScale: 0.06 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.88, bumpScale: 0.05 });
  const sidingLight = catalog.getMaterial('horizontal_wood_siding', { roughness: 0.88, bumpScale: 0.04, tint: 0xdce4e2 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.82, bumpScale: 0.04 });
  const terrazzoMat = catalog.getMaterial('terrazzo_floor', { roughness: 0.56, bumpScale: 0.03 });
  const ironBlack = catalog.getMaterial('matte_black_metal', { roughness: 0.52, metalness: 0.52 });
  const darkIron = catalog.getMaterial('dark_iron_plate', { roughness: 0.58, metalness: 0.48 });
  const zincBolts = catalog.getMaterial('corrugated_zinc_bolts', { roughness: 0.68, metalness: 0.36, bumpScale: 0.06 });

  // --- Authentic Police Box Signage, Glowing Red Lamp & Office Props ---
  const enamelBlue = catalog.getMaterial('enamel_sign_blue', { roughness: 0.44, metalness: 0.22, bumpScale: 0.02 });
  const bulletinMat = catalog.getMaterial('bulletin_board', { roughness: 0.86, bumpScale: 0.03 });
  const noticeMat = catalog.getMaterial('notice_board', { roughness: 0.86, bumpScale: 0.02 });
  const mapSign = catalog.getMaterial('island_map_sign', { roughness: 0.78, bumpScale: 0.02 });
  const corkBoard = catalog.getMaterial('cork_board', { roughness: 0.90, bumpScale: 0.04 });
  const officeCounter = catalog.getMaterial('office_counter', { roughness: 0.76, bumpScale: 0.03 });
  const fileCab = catalog.getMaterial('file_cabinet', { roughness: 0.62, metalness: 0.28 });
  const fireBox = catalog.getMaterial('fire_extinguisher_box', { roughness: 0.54, metalness: 0.26 });
  const elecMeter = catalog.getMaterial('electric_meter', { roughness: 0.64, metalness: 0.32 });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.86, bumpScale: 0.04 });
  const mailboxes = catalog.getMaterial('mailboxes_metal', { roughness: 0.62, metalness: 0.34 });
  const glassDoor = catalog.getMaterial('glass_double_door', { roughness: 0.32, opacity: 0.58, transparent: true });
  const clearGlass = catalog.getMaterial('window_frosted_wood', { roughness: 0.24, opacity: 0.28, transparent: true, tint: 0xe6f2f6 });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.88, transparent: true });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });

  // Glowing Red Police Box 常夜灯 Globe Lamp (uses manifest red_tin_roof texture + warm crimson emissive!)
  const redLampMat = catalog.getMaterial('red_tin_roof', { roughness: 0.28, metalness: 0.10 }).clone();
  redLampMat.emissive = new THREE.Color(0xe6261a);
  redLampMat.emissiveIntensity = 1.45;

  // --- 2F Resident Officer's Family Quarters Materials ---
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.90, bumpScale: 0.03 });
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const bookshelfMat = catalog.getMaterial('filled_bookshelf', { roughness: 0.84, bumpScale: 0.03 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.92, bumpScale: 0.03 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const fusumaMat = catalog.getMaterial('linen_fusuma', { roughness: 0.90, bumpScale: 0.03 });

  // --- Classic Ibushi-Gin Silver-Black Hon-gawara Roof ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.68, metalness: 0.22, bumpScale: 0.06, tint: 0x7e848b });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.64, metalness: 0.26, bumpScale: 0.05, tint: 0x6a7078 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.56, metalness: 0.34, tint: 0x575d65 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.48, metalness: 0.44, tint: 0x454b52 });

  const Y1 = 0.42;
  const Y2 = 3.52;
  const YTOP = 6.32;

  // =========================================================================
  // 1. CUT-STONE BASE, CROSSROADS APRON, ENTRY PORCH & ICONIC RED POLICE LAMP
  // =========================================================================
  p.box('ext', 11.4, 3.80, 8.6, 0, Y1 - 1.94, 0, cutStone);
  p.box('ext', 11.8, 0.16, 1.90, 0, -0.06, 4.95, sidewalkSlab);
  p.stoneSteps('ext', 0.0, 5.25, 3.82, -0.06, Y1, 2.50, 3, stepStone);

  // Projecting Front Entrance Canopy (Z = +3.80 -> +5.15) with Blue Enamel Plaque & Red Police Globe Lamp!
  p.box('ext', 0.15, 2.86, 0.15, -1.48, Y1 + 1.43, 5.02, timberDark, { solid: true });
  p.box('ext', 0.15, 2.86, 0.15, 1.48, Y1 + 1.43, 5.02, timberDark, { solid: true });
  p.box('ext', 3.45, 0.14, 1.48, 0.0, Y1 + 2.84, 4.46, kawaraDeck, { rx: 0.16 });
  p.box('ext', 3.48, 0.20, 0.14, 0.0, Y1 + 2.74, 5.14, timberDark);
  // Official Blue Enamel "黒磯駐在所" Plaque centered over entrance!
  p.box('ext', 1.48, 0.38, 0.06, 0.0, Y1 + 2.74, 5.23, enamelBlue, { uvScale: 0 });
  // ★ ICONIC GLOWING RED POLICE BOX GLOBE LAMP (赤色常夜灯) on West Porch Pillar!
  p.box('ext', 0.38, 0.06, 0.06, -1.66, Y1 + 2.28, 5.02, ironBlack);
  p.cyl('ext', 0.15, 0.15, 0.10, 10, -1.84, Y1 + 2.38, 5.02, ironBlack);
  p.rock('ext', 0.16, 1, -1.84, Y1 + 2.18, 5.02, 1.0, 1.15, 1.0, redLampMat);
  p.cyl('ext', 0.11, 0.15, 0.08, 10, -1.84, Y1 + 2.00, 5.02, ironBlack);

  // ★ OUTDOOR COMMUNITY POLICE BULLETIN BOARD (East Front Yard) & ISLAND MAP SIGN (West Front Yard)!
  // East Roofed Police Bulletin Board (X = +3.55, Z = +5.05)
  p.box('ext', 0.11, 2.08, 0.11, 2.75, 1.04, 5.05, timberDark, { solid: true });
  p.box('ext', 0.11, 2.08, 0.11, 4.35, 1.04, 5.05, timberDark, { solid: true });
  p.box('ext', 1.56, 1.05, 0.12, 3.55, 1.38, 5.05, bulletinMat, { solid: true, uvScale: 0 });
  p.box('ext', 1.98, 0.10, 0.65, 3.55, 2.10, 5.05, kawaraDeck, { rx: 0.18 });
  // West Village Crossroads Map Board (X = -3.70, Z = +5.00)
  p.box('ext', 0.11, 1.88, 0.11, -4.40, 0.94, 5.00, timberDark, { solid: true });
  p.box('ext', 0.11, 1.88, 0.11, -3.00, 0.94, 5.00, timberDark, { solid: true });
  p.box('ext', 1.34, 0.96, 0.10, -3.70, 1.32, 5.00, mapSign, { solid: true, uvScale: 0 });
  p.box('ext', 1.62, 0.08, 0.48, -3.70, 1.88, 5.00, timberDark, { rx: 0.15 });

  // ★ WEST ATTACHED PATROL BICYCLE SHELTER & VINTAGE BLACK PATROL BICYCLE (X ∈ [-6.9, -5.2])!
  p.box('ext', 1.85, 0.18, 4.40, -6.10, 0.06, 0.20, sidewalkSlab);
  p.cyl('ext', 0.06, 0.06, 2.35, 8, -6.92, 1.24, -1.85, ironBlack);
  p.cyl('ext', 0.06, 0.06, 2.35, 8, -6.92, 1.24, 2.25, ironBlack);
  p.box('ext', 2.05, 0.08, 4.60, -6.08, 2.48, 0.20, zincBolts, { rz: 0.22 });
  // Hand-crafted Vintage Black Police Patrol Bicycle parked under the shelter!
  const bX = -6.12;
  const bZ = 0.25;
  p.cyl('ext', 0.34, 0.34, 0.07, 12, bX, 0.48, bZ - 0.56, ironBlack, { rz: Math.PI * 0.5 }); // Rear wheel
  p.cyl('ext', 0.34, 0.34, 0.07, 12, bX, 0.48, bZ + 0.56, ironBlack, { rz: Math.PI * 0.5 }); // Front wheel
  p.box('ext', 0.06, 0.06, 1.12, bX, 0.86, bZ, ironBlack);       // Top frame bar
  p.box('ext', 0.06, 0.65, 0.06, bX, 0.72, bZ - 0.32, ironBlack, { rx: 0.22 }); // Seat tube
  p.box('ext', 0.06, 0.76, 0.06, bX, 0.84, bZ + 0.48, ironBlack, { rx: -0.18 }); // Front fork & stem
  p.box('ext', 0.56, 0.05, 0.05, bX, 1.20, bZ + 0.42, ironBlack); // Handlebars
  p.box('ext', 0.20, 0.08, 0.28, bX, 1.04, bZ - 0.38, timberDark); // Leather saddle
  p.box('ext', 0.34, 0.26, 0.30, bX, 1.04, bZ + 0.66, darkIron);   // Front wire patrol basket
  p.collider(-7.05, -5.25, 0.0, 2.4, -2.0, 2.4);

  // =========================================================================
  // 2. 1F: POLICE SUBSTATION DUTY OFFICE, COUNTER & HOLDING/RECORDS ROOM
  // =========================================================================
  const h1 = Y2 - Y1; // 3.10m
  const mid1 = Y1 + h1 * 0.5;

  // 1F Terrazzo Floor Slab
  p.box('int', 10.4, 0.14, 7.6, 0, Y1 - 0.05, 0, terrazzoMat);
  p.floor(-5.05, 5.05, -3.65, 3.85, Y1 + 0.04);
  p.box('int', 1.55, 0.03, 0.90, 0.0, Y1 + 0.05, 3.25, coirMat, { uvScale: 0 });

  // South Front Wall (Z = +3.80): Wide Open 1.80m Entry (X ∈ [-0.90, +0.90]) + Wide Patrol Showcase Windows!
  p.box('ext', 1.80, 0.80, 0.24, 0.0, Y2 - 0.40, 3.80, whitePlaster, { solid: true });
  p.box('ext', 0.46, 2.30, 0.06, -0.68, Y1 + 1.15, 3.72, glassDoor, { uvScale: 0 }); // Slid-open left glass panel
  // West Front Wall (X ∈ [-5.2, -0.9]) with wide patrol window X ∈ [-4.4, -1.6]
  p.box('ext', 0.80, h1, 0.24, -4.80, mid1, 3.80, whitePlaster, { solid: true });
  p.box('ext', 0.70, h1, 0.24, -1.25, mid1, 3.80, whitePlaster, { solid: true });
  p.box('ext', 2.85, 0.96, 0.24, -3.00, Y1 + 0.48, 3.80, pebbleWall, { solid: true });
  p.box('ext', 2.85, 0.76, 0.24, -3.00, Y2 - 0.38, 3.80, whitePlaster, { solid: true });
  p.box('ext', 2.80, 1.38, 0.05, -3.00, Y1 + 1.65, 3.80, clearGlass, { uvScale: 0 });
  p.box('ext', 2.86, 0.08, 0.28, -3.00, Y1 + 0.98, 3.80, timberDark);
  // East Front Wall (X ∈ [+0.9, +5.2]) with wide duty-desk patrol window X ∈ [+1.6, +4.4]
  p.box('ext', 0.70, h1, 0.24, 1.25, mid1, 3.80, whitePlaster, { solid: true });
  p.box('ext', 0.80, h1, 0.24, 4.80, mid1, 3.80, whitePlaster, { solid: true });
  p.box('ext', 2.85, 0.96, 0.24, 3.00, Y1 + 0.48, 3.80, pebbleWall, { solid: true });
  p.box('ext', 2.85, 0.76, 0.24, 3.00, Y2 - 0.38, 3.80, whitePlaster, { solid: true });
  p.box('ext', 2.80, 1.38, 0.05, 3.00, Y1 + 1.65, 3.80, clearGlass, { uvScale: 0 });
  p.box('ext', 2.86, 0.08, 0.28, 3.00, Y1 + 0.98, 3.80, timberDark);

  // North, West, East 1F Perimeter Walls (stone dado + crisp white plaster + timber corner posts)
  p.box('ext', 10.4, 0.98, 0.26, 0, Y1 + 0.49, -3.80, pebbleWall, { solid: true });
  p.box('ext', 10.4, h1 - 0.98, 0.24, 0, Y1 + 0.98 + (h1 - 0.98) * 0.5, -3.80, whitePlaster, { solid: true });
  p.box('ext', 0.26, 0.98, 7.6, -5.20, Y1 + 0.49, 0, pebbleWall, { solid: true });
  p.box('ext', 0.24, h1 - 0.98, 7.6, -5.20, Y1 + 0.98 + (h1 - 0.98) * 0.5, 0, whitePlaster, { solid: true });
  p.box('ext', 0.26, 0.98, 7.6, 5.20, Y1 + 0.49, 0, pebbleWall, { solid: true });
  p.box('ext', 0.24, h1 - 0.98, 7.6, 5.20, Y1 + 0.98 + (h1 - 0.98) * 0.5, 0, whitePlaster, { solid: true });
  // Electric meter & metal post box mounted on exterior side walls
  p.box('ext', 0.14, 0.56, 0.42, -5.36, Y1 + 1.55, 2.75, elecMeter, { uvScale: 0 });
  p.box('ext', 0.14, 0.58, 0.44, 5.36, Y1 + 1.38, 2.75, mailboxes, { uvScale: 0 });

  // ★ 1F POLICE DUTY OFFICE FURNITURE & PROPS
  // L-Shaped Duty Counter Desk (X ∈ [+1.2, +4.4], Z = +0.55)
  p.box('int', 3.20, 0.96, 0.72, 2.80, Y1 + 0.48, 0.55, officeCounter, { solid: true, uvScale: 0 });
  p.box('int', 3.30, 0.08, 0.80, 2.80, Y1 + 0.98, 0.55, timberDark);
  // Vintage Black Police Telephone & Desk Lamp on Duty Counter
  p.box('int', 0.26, 0.16, 0.22, 1.75, Y1 + 1.10, 0.55, ironBlack);
  p.cyl('int', 0.07, 0.10, 0.34, 8, 3.85, Y1 + 1.18, 0.45, ironBlack);
  // Wall-mounted Island Map, Crime Cork Pinboard & Village Notice Board on East Wall (X = +5.04)
  p.box('int', 0.06, 1.10, 1.45, 5.04, Y1 + 1.82, 1.85, mapSign, { uvScale: 0 });
  p.box('int', 0.06, 0.96, 1.28, 5.04, Y1 + 1.82, -0.10, corkBoard, { uvScale: 0 });
  p.box('int', 0.06, 0.85, 1.05, -5.04, Y1 + 1.75, 2.40, noticeMat, { uvScale: 0 });
  // Twin Steel Filing Cabinets & Red Fire Extinguisher Box
  p.box('int', 0.56, 1.45, 0.62, 4.72, Y1 + 0.73, 2.95, fileCab, { solid: true, uvScale: 0 });
  p.box('int', 0.56, 1.45, 0.62, 4.72, Y1 + 0.73, 2.25, fileCab, { solid: true, uvScale: 0 });
  p.box('int', 0.34, 0.76, 0.24, -1.25, Y1 + 1.15, 3.56, fireBox, { uvScale: 0 });
  // Visitor waiting wooden bench along West front wall
  p.box('int', 2.00, 0.10, 0.48, -2.55, Y1 + 0.44, 3.25, warmFloor, { solid: true });
  p.box('int', 0.10, 0.42, 0.42, -3.45, Y1 + 0.21, 3.25, timberDark);
  p.box('int', 0.10, 0.42, 0.42, -1.65, Y1 + 0.21, 3.25, timberDark);

  // ★ NE IRON-BARRED HOLDING & EVIDENCE RECORDS ROOM (X ∈ [+1.4, +5.0], Z ∈ [-3.6, -1.1])!
  p.box('int', 0.20, h1, 2.55, 1.40, mid1, -2.42, whitePlaster, { solid: true }); // West concrete-plaster partition
  // Front Iron-Barred Partition along Z = -1.15 (open entry gate X ∈ [+1.75, +2.95] so player can step right inside!)
  p.box('int', 2.15, 0.16, 0.16, 4.02, Y1 + 0.08, -1.15, darkIron, { solid: true });
  p.box('int', 3.65, 0.22, 0.18, 3.25, Y2 - 0.11, -1.15, darkIron, { solid: true });
  for (let bx = 3.05; bx <= 4.95; bx += 0.22) {
    p.cyl('int', 0.024, 0.024, h1 - 0.24, 6, bx, mid1, -1.15, ironBlack);
  }
  p.collider(2.96, 5.10, Y1, Y2, -1.28, -1.02);
  // Detention bench & evidence records shelf inside holding room
  p.box('int', 1.85, 0.44, 0.56, 3.95, Y1 + 0.22, -3.28, warmFloor, { solid: true });
  p.box('int', 0.62, 1.85, 1.25, 4.72, Y1 + 0.93, -2.20, rackMat, { solid: true, uvScale: 0 });

  // =========================================================================
  // 3. WEST TIMBER STAIRCASE (1F -> 2F RESIDENT CONSTABLE QUARTERS)
  // =========================================================================
  p.stairRun('int', {
    x0: -3.75, z0: 1.55, x1: -3.75, z1: -2.25, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.12, steps: 12, treadMat: warmFloor, stringerMat: timberDark, railMat: timberDark,
    railLeft: false, railRight: true, closedRisers: true, guardLeft: false, guardRight: true,
  });

  // =========================================================================
  // 4. 2F: RESIDENT POLICEMAN'S TATAMI QUARTERS + FRONT CROSSROADS BALCONY!
  // =========================================================================
  const h2 = YTOP - Y2; // 2.80m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs with exact stairwell cutout (X ∈ [-4.45, -3.05], Z ∈ [-2.35, +1.65])
  p.box('int', 8.20, 0.18, 7.60, 1.05, Y2 - 0.07, 0.0, warmFloor);            // Main East 2F X∈[-3.05,+5.15]
  p.box('int', 0.72, 0.18, 7.60, -4.82, Y2 - 0.07, 0.0, warmFloor);           // West Strip X∈[-5.18,-4.45]
  p.box('int', 1.52, 0.18, 1.48, -3.75, Y2 - 0.07, -3.06, warmFloor);         // North Landing Z∈[-3.80,-2.32]
  p.box('int', 1.52, 0.18, 2.18, -3.75, Y2 - 0.07, 2.72, warmFloor);          // South Landing Z∈[+1.62,+3.80]
  p.collider(-3.05, 5.15, Y2 - 0.18, Y2 + 0.02, -3.80, 3.80);
  p.collider(-5.18, -4.45, Y2 - 0.18, Y2 + 0.02, -3.80, 3.80);
  p.collider(-4.48, -3.02, Y2 - 0.18, Y2 + 0.02, -3.80, -2.32);
  p.collider(-4.48, -3.02, Y2 - 0.18, Y2 + 0.02, 1.62, 3.80);
  p.floor(-3.06, 5.05, -3.68, 3.72, Y2 + 0.04);
  p.floor(-5.05, -3.02, -3.68, -2.28, Y2 + 0.04);
  p.floor(-5.05, -3.02, 1.60, 3.72, Y2 + 0.04);
  p.kouranRailing('int', -3.04, -2.30, -3.04, 1.64, Y2, 0.92, timberDark, 0.56);
  p.kouranRailing('int', -4.45, 1.64, -3.04, 1.64, Y2, 0.92, timberDark, 0.56);

  // 2F Exterior Walls (soft Meiji pale-sage clapboard siding + white plaster top trim)
  p.box('ext', 10.4, h2, 0.24, 0, mid2, -3.80, sidingLight, { solid: true });
  p.box('ext', 0.24, h2, 7.6, -5.20, mid2, 0, sidingLight, { solid: true });
  p.box('ext', 0.24, h2, 7.6, 5.20, mid2, 0, sidingLight, { solid: true });
  // 2F South Wall with Open 1.50m Balcony Doorway (X ∈ [-0.75, +0.75]) + Flanking Shoji Windows!
  p.box('ext', 4.45, h2, 0.22, -2.98, mid2, 3.80, sidingLight, { solid: true });
  p.box('ext', 4.45, h2, 0.22, 2.98, mid2, 3.80, sidingLight, { solid: true });
  p.box('ext', 1.60, 0.65, 0.22, 0.0, YTOP - 0.32, 3.80, sidingLight, { solid: true });
  p.box('ext', 1.95, 1.25, 0.06, -3.00, Y2 + 1.52, 3.92, shojiMat, { uvScale: 0 });
  p.box('ext', 1.95, 1.25, 0.06, 3.00, Y2 + 1.52, 3.92, shojiMat, { uvScale: 0 });
  // 2F Ceiling & Interior Plaster Liner
  p.box('int', 10.2, 0.14, 7.4, 0, YTOP - 0.04, 0, cedarDark);
  p.collider(-5.15, 5.15, YTOP - 0.16, YTOP + 0.10, -3.75, 3.75);
  p.box('int', 10.0, h2 - 0.16, 0.06, 0, mid2, -3.65, washiWall);

  // ★ 2F FRONT CROSSROADS LOOKOUT BALCONY (X ∈ [-3.5, +3.5], Z ∈ [+3.80, +4.92])!
  p.box('ext', 7.10, 0.16, 1.18, 0.0, Y2 - 0.06, 4.38, warmFloor);
  p.floor(-3.45, 3.45, 3.74, 4.86, Y2 + 0.04);
  p.kouranRailing('ext', -3.48, 4.90, 3.48, 4.90, Y2, 0.96, timberDark, 0.56);
  p.kouranRailing('ext', -3.48, 3.82, -3.48, 4.90, Y2, 0.96, timberDark, 0.56);
  p.kouranRailing('ext', 3.48, 3.82, 3.48, 4.90, Y2, 0.96, timberDark, 0.56);

  // 2F Constable's Family Tatami Living Quarters (X ∈ [-1.6, +4.9])
  p.box('int', 6.40, 0.06, 6.60, 1.65, Y2 + 0.03, 0.0, tatamiBord);
  p.box('int', 1.80, 2.25, 0.08, 3.60, Y2 + 1.15, -3.60, fusumaMat, { uvScale: 0 });
  p.box('int', 1.35, 1.50, 0.56, 4.45, Y2 + 0.78, -2.55, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 1.25, 1.68, 0.42, 4.55, Y2 + 0.86, 1.65, bookshelfMat, { solid: true, uvScale: 0 });
  p.box('int', 1.25, 0.14, 1.95, 2.55, Y2 + 0.11, -2.15, futonMat, { uvScale: 0 });
  p.box('int', 1.25, 0.34, 0.85, 1.30, Y2 + 0.21, 0.75, timberDark, { solid: true });
  p.box('int', 0.52, 0.06, 0.52, 0.28, Y2 + 0.07, 0.75, zabutonMat, { uvScale: 0 });
  p.box('int', 0.52, 0.06, 0.52, 2.32, Y2 + 0.07, 0.75, zabutonMat, { uvScale: 0 });

  // =========================================================================
  // 5. HAND-CRAFTED IBUSHI-GIN SILVER-BLACK IRIMOYA HON-GAWARA ROOF (入母屋本瓦)
  // =========================================================================
  const roofPitch = 0.45;
  const runNS = 5.10;
  const ridgeY = YTOP + runNS * Math.tan(roofPitch) - 0.14;
  // South & North main kawara slopes (trapezoidal Irimoya profile!)
  p.kawaraSlope('ext', {
    topWidth: 6.40, bottomWidth: 12.60, run: runNS, pitch: roofPitch,
    ridgeX: 0, ridgeY, ridgeZ: 0, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, fasciaMat: cedarDark, ribSpacing: 0.40,
  });
  p.kawaraSlope('ext', {
    topWidth: 6.40, bottomWidth: 12.60, run: runNS, pitch: roofPitch,
    ridgeX: 0, ridgeY, ridgeZ: 0, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, fasciaMat: cedarDark, ribSpacing: 0.40,
  });
  // East & West lower hip skirts + upper white-plaster Irimoya gable triangles (破風妻壁)
  const hipRunEW = 3.25;
  const hipTopY = YTOP + hipRunEW * Math.tan(roofPitch) - 0.14;
  p.kawaraSlope('ext', {
    topWidth: 3.70, bottomWidth: 10.20, run: hipRunEW, pitch: roofPitch,
    ridgeX: 3.05, ridgeY: hipTopY, ridgeZ: 0, downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, fasciaMat: cedarDark, ribSpacing: 0.42,
  });
  p.kawaraSlope('ext', {
    topWidth: 3.70, bottomWidth: 10.20, run: hipRunEW, pitch: roofPitch,
    ridgeX: -3.05, ridgeY: hipTopY, ridgeZ: 0, downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, fasciaMat: cedarDark, ribSpacing: 0.42,
  });
  p.gablePrism('ext', 3.75, ridgeY - hipTopY + 0.10, 0.24, 3.05, hipTopY - 0.05, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 3.75, ridgeY - hipTopY + 0.10, 0.24, -3.05, hipTopY - 0.05, 0, whitePlaster, { ry: -Math.PI * 0.5 });
  // Main Horizontal Ridge (大棟) with Twin Sculpted Horned Onigawara + 4 Sweeping Hip Ridges (隅棟)!
  p.kawaraRidge('ext', -3.20, ridgeY + 0.04, 0, 3.20, ridgeY + 0.04, 0, kawaraRidge, oniMat, { scale: 1.05, oniStart: true, oniEnd: true, courses: 2 });
  p.kawaraRidge('ext', -3.05, hipTopY + 0.02, 1.85, -6.20, YTOP - 0.10, 5.05, kawaraRidge, oniMat, { scale: 0.72, oniEnd: true, courses: 1 });
  p.kawaraRidge('ext', 3.05, hipTopY + 0.02, 1.85, 6.20, YTOP - 0.10, 5.05, kawaraRidge, oniMat, { scale: 0.72, oniEnd: true, courses: 1 });
  p.kawaraRidge('ext', -3.05, hipTopY + 0.02, -1.85, -6.20, YTOP - 0.10, -5.05, kawaraRidge, oniMat, { scale: 0.72, oniEnd: true, courses: 1 });
  p.kawaraRidge('ext', 3.05, hipTopY + 0.02, -1.85, 6.20, YTOP - 0.10, -5.05, kawaraRidge, oniMat, { scale: 0.72, oniEnd: true, courses: 1 });

  return p.build({
    id: 'K01',
    name: '黒磯駐在所（交番）',
    subtitle: '明治29年（1896年）築・赤灯常夜灯＆掲示板・1F事務室＆鉄格子保護室・2F官舎バルコニー',
    category: 'koban',
    builtYear: 1896,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1 + 0.04, Y2 + 0.04],
    entryLocal: [0.0, 0.0, 7.6],
    entryLookLocalYaw: 0,
  });
}
