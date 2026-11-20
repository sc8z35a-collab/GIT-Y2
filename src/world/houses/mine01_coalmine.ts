import * as THREE from 'three';
import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * M01: 旧黒磯炭鉱 第一坑口・地下坑道（明治23年/1890年開坑・昭和60年/1985年閉山）
 * 黒磯岳西斜面の玄武岩・炭層断崖直下（標高348m）から山体深部へ全長135m・高低差5.2m・全3分岐に広がる、
 * 完全手作業の地下炭鉱ダンジョン！
 *  - Zone A (坑口前広場 Z=+4→-16m): 600mm鉄軌道＆木枕木、西側選炭桟橋＆石炭積載トロッコ、
 *    東側入室可能「安全灯室・坑口見張所」、明治23年(1890)切石＆赤煉瓦の重厚坑門アーチ。
 *  - Zone B (第一水平主要運搬坑道 Z=-16→-64m): 坑木鳥居枠×13組・圧縮空気配管・防爆坑道灯・
 *    西側工具待避所・東側半開鉄扉の奥に隠れた「赤煉瓦アーチ火薬庫」(X:+3..+9.4m)。
 *  - Zone C (地下分岐ロータリー＆捲揚機室 Z=-64→-82m): 中央鉄製転車台・脱線トロッコ・電動捲揚機＆制御盤。
 *  - Zone D (西支坑・水没排水ポンプ坑道 X=-8.6→-38m, Y=-2.0m): 傾斜スロープ・黒水溜り上の鉄グレーチング歩廊・
 *    大型排水ポンプ＆バルブ配管・西端崩落落盤壁。
 *  - Zone E (東支坑・1890年手掘り旧採炭室 X=+8.6→+33.5m): 露頭黒炭層＆鉄錆・白石英脈・密集丸太支保工の森・
 *    岩壁の石棚に祀られた炭鉱夫の「山の神 小祠」。
 *  - Zone F (北本線・22m斜坑→地下-5.2m 大採炭空洞 Z=-82→-136m): 傾斜軌道＆歩廊を5.2m下り、
 *    高さ11.4mの大空洞・高さ28mの自然排気縦坑・登れる2層鉄骨ホッパー歩廊・1985年閉山切羽へ到達！
 */
export function buildMine01CoalMine(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Geology, Masonry Portal & Subterranean Coal-Seam Materials ---
  const coalSeam = catalog.getMaterial('coal_seam_rock', { roughness: 0.88, bumpScale: 0.09 });
  const basaltCliff = catalog.getMaterial('basalt_cliff', { roughness: 0.92, bumpScale: 0.09 });
  const wetDarkRock = catalog.getMaterial('wet_dark_rock', { roughness: 0.72, bumpScale: 0.09 });
  const darkDampStone = catalog.getMaterial('dark_damp_stone', { roughness: 0.84, bumpScale: 0.08 });
  const volcanicGravel = catalog.getMaterial('black_volcanic_gravel', { roughness: 0.95, bumpScale: 0.07 });
  const ironRustRock = catalog.getMaterial('iron_rust_rock', { roughness: 0.90, bumpScale: 0.08 });
  const whiteChalkRock = catalog.getMaterial('white_chalk_rock', { roughness: 0.90, bumpScale: 0.07 });
  const gneissRock = catalog.getMaterial('gneiss_rock', { roughness: 0.90, bumpScale: 0.08 });
  const striatedRock = catalog.getMaterial('striated_rock', { roughness: 0.92, bumpScale: 0.08 });
  const mossRock = catalog.getMaterial('moss_rock_heavy', { roughness: 0.94, bumpScale: 0.08 });

  // --- Meiji Brick/Stone Portal, Timber Shoring & Industrial Mine Hardware ---
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const mossyStone = catalog.getMaterial('ishigaki_mossy', { roughness: 0.94, bumpScale: 0.08 });
  const oldBrick = catalog.getMaterial('old_red_brick', { roughness: 0.90, bumpScale: 0.07 });
  const mossyConc = catalog.getMaterial('mossy_aged_concrete', { roughness: 0.92, bumpScale: 0.06 });
  const rawConc = catalog.getMaterial('raw_concrete', { roughness: 0.90, bumpScale: 0.05 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.88, bumpScale: 0.05 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.92, bumpScale: 0.06 });
  const treeBark = catalog.getMaterial('tree_bark', { roughness: 0.95, bumpScale: 0.08 });
  const ironBlack = catalog.getMaterial('matte_black_metal', { roughness: 0.56, metalness: 0.54 });
  const darkIron = catalog.getMaterial('dark_iron_plate', { roughness: 0.60, metalness: 0.52 });
  const rustBolts = catalog.getMaterial('rusted_plate_bolts', { roughness: 0.72, metalness: 0.50, bumpScale: 0.05 });
  const boltedSteel = catalog.getMaterial('dark_bolted_steel', { roughness: 0.64, metalness: 0.54, bumpScale: 0.05 });
  const diamondPlate = catalog.getMaterial('diamond_plate', { roughness: 0.58, metalness: 0.56, bumpScale: 0.05 });
  const metalGrate = catalog.getMaterial('metal_grate', { roughness: 0.62, metalness: 0.54, bumpScale: 0.05 });
  const drainGrate = catalog.getMaterial('drain_grate', { roughness: 0.64, metalness: 0.52 });
  const steelTruss = catalog.getMaterial('steel_truss_wall', { roughness: 0.66, metalness: 0.50, bumpScale: 0.05 });
  const corrGray = catalog.getMaterial('corrugated_gray', { roughness: 0.68, metalness: 0.36, bumpScale: 0.06 });
  const rustedCorr = catalog.getMaterial('rusted_corrugated', { roughness: 0.74, metalness: 0.38, bumpScale: 0.06 });

  // --- Dedicated Coal Mine Equipment & Safety Textures ---
  const mineSteelDoor = catalog.getMaterial('mine_steel_door', { roughness: 0.66, metalness: 0.48, bumpScale: 0.05 });
  const minePanel = catalog.getMaterial('mine_control_panel', { roughness: 0.58, metalness: 0.45, bumpScale: 0.04 });
  const valvePipes = catalog.getMaterial('mine_valve_pipes', { roughness: 0.60, metalness: 0.54, bumpScale: 0.06 });
  const hazardStripes = catalog.getMaterial('hazard_stripes', { roughness: 0.72, bumpScale: 0.03 });
  const elecMeter = catalog.getMaterial('electric_meter', { roughness: 0.62, metalness: 0.34 });
  const fireBox = catalog.getMaterial('fire_extinguisher_box', { roughness: 0.54, metalness: 0.26 });
  const officeCounter = catalog.getMaterial('office_counter', { roughness: 0.80, bumpScale: 0.03 });
  const noticeMat = catalog.getMaterial('notice_board', { roughness: 0.88, bumpScale: 0.02 });
  const darkChalk = catalog.getMaterial('dark_green_chalk', { roughness: 0.88, bumpScale: 0.02 });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.88, bumpScale: 0.04 });
  const cratesMat = catalog.getMaterial('shop_produce_crates', { roughness: 0.90, bumpScale: 0.05 });
  const cardboard = catalog.getMaterial('cardboard_boxes', { roughness: 0.92, bumpScale: 0.04 });
  const shrineFacade = catalog.getMaterial('shrine_facade', { roughness: 0.86, bumpScale: 0.04 });
  const redWood = catalog.getMaterial('faded_red_wood', { roughness: 0.86, bumpScale: 0.05 });

  // Warm Glowing Mining Bulkhead Lamp Glass (manifest frosted_acrylic + warm amber emissive!)
  const mineLampMat = catalog.getMaterial('frosted_acrylic', { roughness: 0.28, metalness: 0.05 }).clone();
  mineLampMat.emissive = new THREE.Color(0xffb454);
  mineLampMat.emissiveIntensity = 1.65;

  // Subterranean Flooded Black Mine Water Surface (wet_dark_rock glossy translucent water sheen!)
  const sumpWaterMat = catalog.getMaterial('wet_dark_rock', { roughness: 0.08, metalness: 0.45, opacity: 0.82, transparent: true, tint: 0x16242a });

  const Y0 = 0.04; // Standard tunnel floor elevation (348.04m)
  const Y_W = -2.00; // West flooded pump gallery catwalk elevation
  const Y_N = -5.16; // North deep Grand Coal Cavern elevation (-5.2m down incline!)

  // Register full underground cave terrain-bypass volume (starts just inside the 1890 stone arch at Z = -16.2!)
  p.caveOverride(-44.0, 40.0, -10.0, 32.0, -144.0, -16.2);

  // Helper: Hand-crafted 600mm Iron Ore Minecart (トロッコ) placed at any local (x, y, z, ry, rz)
  const placeMinecart = (layer: 'ext' | 'int', cx: number, cy: number, cz: number, ry = 0, rz = 0, filled = true, solid = true) => {
    // Iron wheel chassis & axles
    p.box(layer, 0.92, 0.14, 1.56, cx, cy + 0.28, cz, ironBlack, { ry, rz });
    for (const wz of [-0.46, 0.46]) {
      for (const wx of [-0.36, 0.36]) {
        const rx = wx * Math.cos(ry) + wz * Math.sin(ry);
        const rzz = -wx * Math.sin(ry) + wz * Math.cos(ry);
        p.cyl(layer, 0.17, 0.17, 0.08, 10, cx + rx, cy + 0.17, cz + rzz, darkIron, { rz: Math.PI * 0.5, ry });
      }
    }
    // Riveted rusted iron ore tub body
    p.box(layer, 1.06, 0.72, 1.72, cx, cy + 0.72, cz, rustBolts, { ry, rz });
    p.box(layer, 1.12, 0.09, 1.78, cx, cy + 1.08, cz, darkIron, { ry, rz });
    if (filled) {
      p.rock(layer, 0.48, 0, cx, cy + 1.16, cz - 0.25, 1.0, 0.65, 1.1, coalSeam);
      p.rock(layer, 0.44, 0, cx, cy + 1.14, cz + 0.32, 0.95, 0.62, 1.0, coalSeam);
    }
    if (solid) {
      p.collider(cx - 0.62, cx + 0.62, cy, cy + 1.35, cz - 0.92, cz + 0.92);
    }
  };

  // Helper: Straight 600mm steel rail segment + timber crossties along Z
  const railTrackZ = (layer: 'ext' | 'int', xC: number, zStart: number, zEnd: number, y: number) => {
    const len = Math.abs(zEnd - zStart);
    const zMid = (zStart + zEnd) * 0.5;
    p.box(layer, 0.07, 0.07, len, xC - 0.34, y + 0.04, zMid, darkIron);
    p.box(layer, 0.07, 0.07, len, xC + 0.34, y + 0.04, zMid, darkIron);
    const zMin = Math.min(zStart, zEnd);
    const zMax = Math.max(zStart, zEnd);
    for (let z = zMin + 0.6; z <= zMax - 0.4; z += 1.35) {
      p.box(layer, 1.18, 0.06, 0.16, xC, y + 0.01, z, timberDark);
    }
  };

  // Helper: Straight 600mm steel rail segment + timber crossties along X
  const railTrackX = (layer: 'ext' | 'int', zC: number, xStart: number, xEnd: number, y: number) => {
    const len = Math.abs(xEnd - xStart);
    const xMid = (xStart + xEnd) * 0.5;
    p.box(layer, len, 0.07, 0.07, xMid, y + 0.04, zC - 0.34, darkIron);
    p.box(layer, len, 0.07, 0.07, xMid, y + 0.04, zC + 0.34, darkIron);
    const xMin = Math.min(xStart, xEnd);
    const xMax = Math.max(xStart, xEnd);
    for (let x = xMin + 0.6; x <= xMax - 0.4; x += 1.35) {
      p.box(layer, 0.16, 0.06, 1.18, x, y + 0.01, zC, timberDark);
    }
  };

  // =========================================================================
  // ZONE A: SURFACE FORECOURT, ORE TRESTLE, LAMP HOUSE & 1890 MASONRY PORTAL!
  // =========================================================================
  // Flat coal-shale yard deck bridging cleanly right up to the 1890 portal at Z = -16.0m!
  p.box('ext', 25.0, 6.20, 21.0, 0.0, -3.10, -6.50, mossyStone);
  p.box('ext', 24.6, 0.12, 20.6, 0.0, -0.02, -6.50, volcanicGravel);
  p.floor(-12.2, 12.2, -16.8, 4.2, Y0);
  railTrackZ('ext', 0.0, 3.6, -16.4, Y0);

  // West Wooden Ore-Tipping Trestle, Coal Heap & Loaded Iron Minecart (X ∈ [-10.5, -4.5], Z ∈ [-12.0, -4.0])!
  p.box('ext', 5.20, 0.18, 2.30, -7.20, 1.55, -8.20, agedTimber);
  for (const tx of [-9.4, -7.2, -5.0]) {
    p.box('ext', 0.24, 1.60, 0.24, tx, 0.78, -9.15, timberDark, { solid: true });
    p.box('ext', 0.24, 1.60, 0.24, tx, 0.78, -7.25, timberDark, { solid: true });
  }
  placeMinecart('ext', -6.80, 1.64, -8.20, Math.PI * 0.5, 0, true, false);
  p.rock('ext', 1.85, 1, -10.2, 0.72, -8.20, 1.25, 0.68, 1.35, coalSeam, { solid: true });
  p.rock('ext', 1.25, 0, -9.1, 0.45, -6.40, 1.10, 0.62, 1.05, coalSeam, { solid: true });

  // ★ EAST ENTERABLE SAFETY-LAMP HOUSE & MINE DISPATCH HUT (安全灯室・坑口見張所: X∈[+5.2,+11.2], Z∈[-12.0,-4.4])!
  const lhY = 0.24;
  const lhH = 2.85;
  p.box('ext', 6.20, 0.34, 7.80, 8.20, lhY - 0.17, -8.20, rawConc);
  p.floor(5.30, 11.05, -11.85, -4.55, lhY + 0.04);
  p.ramp(4.20, 5.35, -9.20, -7.20, Y0, lhY + 0.04, 'x', 1); // Smooth step up into hut
  // Corrugated steel walls (Open West Doorway Z ∈ [-9.2, -7.2], X = +5.20)
  p.box('ext', 6.00, lhH, 0.20, 8.20, lhY + lhH * 0.5, -12.0, corrGray, { solid: true });
  p.box('ext', 6.00, lhH, 0.20, 8.20, lhY + lhH * 0.5, -4.40, corrGray, { solid: true });
  p.box('ext', 0.20, lhH, 7.60, 11.20, lhY + lhH * 0.5, -8.20, rustedCorr, { solid: true });
  p.box('ext', 0.20, lhH, 2.80, 5.20, lhY + lhH * 0.5, -10.60, corrGray, { solid: true });
  p.box('ext', 0.20, lhH, 2.80, 5.20, lhY + lhH * 0.5, -5.80, corrGray, { solid: true });
  p.box('ext', 0.20, 0.65, 2.10, 5.20, lhY + lhH - 0.32, -8.20, hazardStripes, { solid: true });
  // Slanted rusted tin shed roof
  p.box('ext', 6.80, 0.14, 8.40, 8.20, lhY + lhH + 0.18, -8.20, rustedCorr, { rz: -0.14 });
  p.collider(5.10, 11.30, lhY + lhH, lhY + lhH + 0.45, -12.1, -4.3);
  // Lamp House Interior Props: Mine Control Panel, Shift Notice Board, Lamp Rack, Desk & Fire Extinguisher!
  p.box('int', 0.45, 1.55, 1.35, 10.75, lhY + 0.80, -10.20, minePanel, { solid: true, uvScale: 0 });
  p.box('int', 0.62, 1.85, 1.45, 10.68, lhY + 0.94, -6.25, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 1.65, 0.92, 0.68, 7.60, lhY + 0.48, -11.35, officeCounter, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 0.92, 0.06, 7.60, lhY + 1.58, -11.84, noticeMat, { uvScale: 0 });
  p.box('int', 0.36, 0.72, 0.22, 5.52, lhY + 1.25, -5.20, fireBox, { uvScale: 0 });
  p.box('ext', 0.14, 0.54, 0.40, 5.04, lhY + 1.48, -6.40, elecMeter, { uvScale: 0 });

  // ★ MONUMENTAL 1890 MEIJI MASONRY ARCH PORTAL & BASALT CLIFF COLLAR (Z = -15.6 -> -32.0)!
  // Seals the terrain-mesh portal cutout (lx ∈ [-3.6,+3.6], lz ∈ [-30.5,-19.5]) 100% seamlessly into Mt. Kuroiso!
  // Heavy Cut-Stone & Aged Red-Brick Portal Headwall framing open 4.6m × 3.9m entrance (X ∈ [-2.3,+2.3], Y ∈ [0,3.9])!
  p.box('ext', 4.40, 5.80, 2.80, -4.50, 2.90, -16.80, cutStone, { solid: true });
  p.box('ext', 4.40, 5.80, 2.80, 4.50, 2.90, -16.80, cutStone, { solid: true });
  p.box('ext', 13.60, 2.45, 3.00, 0.0, 5.15, -16.80, cutStone, { solid: true });
  // Red-brick recessed Meiji portal arch ring + keystone lintel + "明治23年(1890)" granite header plaque!
  p.box('ext', 0.62, 4.10, 0.80, -2.52, 2.05, -15.55, oldBrick);
  p.box('ext', 0.62, 4.10, 0.80, 2.52, 2.05, -15.55, oldBrick);
  p.box('ext', 5.66, 0.72, 0.85, 0.0, 4.24, -15.55, oldBrick);
  p.box('ext', 0.72, 0.92, 0.96, 0.0, 4.30, -15.48, mossyConc); // Keystone
  p.box('ext', 2.80, 0.78, 0.24, 0.0, 5.30, -15.26, darkDampStone); // 1890 engraved date lintel slab
  p.box('ext', 0.56, 0.22, 0.14, -2.55, 3.55, -15.10, hazardStripes);
  p.box('ext', 0.56, 0.22, 0.14, 2.55, 3.55, -15.10, hazardStripes);
  // Glowing warm entrance bulkhead lamp right above portal arch
  p.box('ext', 0.42, 0.24, 0.28, 0.0, 3.74, -15.50, mineLampMat);

  // Massive Sculpted Coal-Seam Basalt Cliff Overburden Collar sealing Z = -17..-33 & X = -14..+14 into Mt. Kuroiso!
  p.box('ext', 26.0, 14.5, 16.5, 0.0, 11.4, -24.80, basaltCliff); // Thick rock mass overhead (Y = +4.15 -> +18.65m!)
  p.box('ext', 10.5, 13.5, 16.5, -7.80, 2.8, -24.80, coalSeam);   // West flank cliff shoulder
  p.box('ext', 10.5, 13.5, 16.5, 7.80, 2.8, -24.80, basaltCliff); // East flank cliff shoulder
  // Organic jagged rock crags crowning & flanking the portal masonry so it merges naturally with the mountain!
  const portalRocks: Array<[number, number, number, number, number, number, number]> = [
    [-7.8, 3.4, -15.8, 3.4, 1.3, 1.1, 1.1],
    [7.8, 3.6, -15.6, 3.5, 1.3, 1.1, 1.1],
    [-4.2, 8.2, -17.8, 4.2, 1.4, 0.95, 1.1],
    [4.4, 8.4, -17.6, 4.4, 1.4, 0.95, 1.1],
    [0.0, 9.6, -19.2, 4.8, 1.5, 0.92, 1.15],
    [-10.5, 1.8, -14.2, 2.8, 1.2, 0.9, 1.0],
    [10.8, 2.0, -14.5, 2.9, 1.2, 0.9, 1.0],
  ];
  for (let i = 0; i < portalRocks.length; i++) {
    const [rx, ry, rz, rad, sx, sy, sz] = portalRocks[i];
    p.rock('ext', rad, 1, rx, ry, rz, sx, sy, sz, i % 3 === 0 ? mossRock : i % 2 === 0 ? coalSeam : basaltCliff, { ry: i * 0.9 });
  }

  // =========================================================================
  // ZONE B: FIRST-LEVEL MAIN HAULAGE DRIFT (Z = -16.0 -> -64.0m, 48 METERS!)
  // =========================================================================
  // Continuous Rock Floor, Ceiling & Tracks
  p.box('int', 5.80, 0.40, 48.8, 0.0, -0.18, -40.2, darkDampStone);
  p.box('int', 6.20, 0.80, 48.8, 0.0, 4.25, -40.2, basaltCliff);
  p.floor(-2.30, 2.30, -64.4, -15.8, Y0);
  p.collider(-2.60, 2.60, 3.82, 4.65, -64.2, -16.0);
  railTrackZ('int', 0.0, -16.4, -64.0, Y0);

  // West Main Tunnel Wall (X = -2.45) with Open Tool/Switchgear Alcove at Z ∈ [-36.2, -31.8]!
  p.box('int', 0.80, 4.20, 16.0, -2.85, 1.95, -23.8, coalSeam);
  p.collider(-3.20, -2.45, -0.2, 4.0, -31.8, -15.8);
  p.box('int', 0.80, 4.20, 28.2, -2.85, 1.95, -50.3, wetDarkRock);
  p.collider(-3.20, -2.45, -0.2, 4.0, -64.4, -36.2);
  // West Tool & Switchgear Alcove (X ∈ [-4.4, -2.4], Z ∈ [-36.2, -31.8])
  p.box('int', 2.40, 0.36, 4.80, -3.45, -0.16, -34.0, darkDampStone);
  p.box('int', 2.40, 0.60, 4.80, -3.45, 3.85, -34.0, basaltCliff);
  p.box('int', 0.60, 4.00, 4.80, -4.65, 1.90, -34.0, coalSeam, { solid: true });
  p.box('int', 2.20, 4.00, 0.50, -3.45, 1.90, -31.6, basaltCliff, { solid: true });
  p.box('int', 2.20, 4.00, 0.50, -3.45, 1.90, -36.4, basaltCliff, { solid: true });
  p.floor(-4.35, -2.25, -36.1, -31.9, Y0);
  p.box('int', 0.45, 1.55, 1.35, -4.12, 0.82, -34.0, minePanel, { solid: true, uvScale: 0 });
  p.box('int', 0.68, 0.54, 0.62, -3.95, 0.31, -32.4, cratesMat, { solid: true, uvScale: 0 });

  // East Main Tunnel Wall (X = +2.45) with Open Explosives Vault Cross-Cut at Z ∈ [-49.6, -47.4]!
  p.box('int', 0.80, 4.20, 31.8, 2.85, 1.95, -31.5, wetDarkRock);
  p.collider(2.45, 3.20, -0.2, 4.0, -47.4, -15.8);
  p.box('int', 0.80, 4.20, 15.0, 2.85, 1.95, -57.1, coalSeam);
  p.collider(2.45, 3.20, -0.2, 4.0, -64.4, -49.6);

  // ★ EAST EXPLOSIVES & DETONATOR VAULT (火薬庫: X ∈ [+2.4, +9.4], Z ∈ [-53.0, -44.0])!
  // Short Cross-Cut Passage (X ∈ [+2.4, +4.4], Z ∈ [-49.6, -47.4]) with Half-Open Rusted Green Steel Blast Door!
  p.box('int', 2.40, 0.36, 2.60, 3.40, -0.16, -48.5, rawConc);
  p.box('int', 2.40, 0.60, 2.60, 3.40, 3.45, -48.5, mossyConc);
  p.box('int', 2.20, 3.80, 0.50, 3.40, 1.80, -47.15, mossyConc, { solid: true });
  p.box('int', 2.20, 3.80, 0.50, 3.40, 1.80, -49.85, mossyConc, { solid: true });
  p.floor(2.20, 4.50, -49.55, -47.45, Y0);
  // Half-open heavy mine blast door swung ajar into the vault!
  p.box('int', 0.12, 2.45, 1.45, 3.95, 1.26, -47.72, mineSteelDoor, { ry: 0.92, uvScale: 0 });
  p.box('int', 0.24, 0.36, 2.30, 3.20, 2.85, -48.50, hazardStripes);
  // Brick-Vaulted Explosives Storage Chamber (X ∈ [+4.4, +9.4], Z ∈ [-53.0, -44.0])
  p.box('int', 5.40, 0.36, 9.40, 6.90, -0.16, -48.5, rawConc);
  p.box('int', 5.40, 0.50, 9.40, 6.90, 3.65, -48.5, oldBrick);
  p.box('int', 0.50, 3.80, 9.40, 9.65, 1.85, -48.5, oldBrick, { solid: true });
  p.box('int', 5.40, 3.80, 0.50, 6.90, 1.85, -53.25, oldBrick, { solid: true });
  p.box('int', 5.40, 3.80, 0.50, 6.90, 1.85, -43.75, oldBrick, { solid: true });
  p.box('int', 0.45, 3.80, 3.55, 4.35, 1.85, -51.45, oldBrick, { solid: true });
  p.box('int', 0.45, 3.80, 3.55, 4.35, 1.85, -45.55, oldBrick, { solid: true });
  p.floor(4.40, 9.35, -52.95, -44.05, Y0);
  p.collider(4.20, 9.60, 3.40, 3.95, -53.1, -43.9);
  // Explosives Vault Props: Hazard Blast Wall, Dynamite & Detonator Crates, Storage Racks, Warm Vault Lamp!
  p.box('int', 0.62, 1.85, 2.40, 9.05, 0.96, -50.8, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 0.62, 1.85, 2.40, 9.05, 0.96, -46.2, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 1.15, 0.72, 0.85, 6.80, 0.40, -52.1, cratesMat, { solid: true, uvScale: 0 });
  p.box('int', 0.85, 0.62, 0.72, 6.85, 1.07, -52.1, cardboard, { ry: 0.14, uvScale: 0 });
  p.box('int', 1.05, 0.66, 0.82, 6.90, 0.37, -44.8, cratesMat, { solid: true, uvScale: 0 });
  p.box('int', 1.25, 0.88, 0.06, 6.90, 1.85, -52.96, noticeMat, { uvScale: 0 });
  p.box('int', 0.36, 0.20, 0.36, 6.90, 3.30, -48.50, mineLampMat);

  // ★ 13 MEIJI HEAVY CEDAR TIMBER SHORING SETS (坑木鳥居枠) + OVERHEAD PIPES + BULKHEAD LAMPS ALONG MAIN DRIFT!
  for (let i = 0; i < 13; i++) {
    const sz = -19.2 - i * 3.55;
    // Skip blocking doorways into West alcove / East explosives vault
    const blockL = sz < -31.5 && sz > -36.5;
    const blockR = sz < -47.0 && sz > -50.0;
    if (!blockL) p.box('int', 0.26, 3.72, 0.26, -2.20, 1.88, sz, timberDark, { rz: -0.05 });
    if (!blockR) p.box('int', 0.26, 3.72, 0.26, 2.20, 1.88, sz, timberDark, { rz: 0.05 });
    p.box('int', 4.70, 0.28, 0.28, 0.0, 3.68, sz, timberDark); // Collar cap beam
    if (!blockL) p.box('int', 0.18, 0.95, 0.18, -1.78, 3.32, sz, agedTimber, { rz: -0.78 });
    if (!blockR) p.box('int', 0.18, 0.95, 0.18, 1.78, 3.32, sz, agedTimber, { rz: 0.78 });
    if (i % 3 === 1) {
      // Glowing warm amber bulkhead cage lamp mounted under ceiling collar!
      p.box('int', 0.32, 0.18, 0.32, 0.0, 3.44, sz, mineLampMat);
    }
  }
  // Continuous overhead compressed-air & drainage steel pipes along West drift wall
  p.cyl('int', 0.10, 0.10, 48.0, 8, -2.02, 2.72, -40.0, valvePipes, { rx: Math.PI * 0.5 });
  p.cyl('int', 0.07, 0.07, 48.0, 8, -2.02, 2.38, -40.0, rustBolts, { rx: Math.PI * 0.5 });

  // =========================================================================
  // ZONE C: UNDERGROUND TURNTABLE JUNCTION & HOIST CHAMBER (Z = -64 -> -82m!)
  // =========================================================================
  p.box('int', 18.0, 0.40, 18.8, 0.0, -0.18, -73.0, darkDampStone);
  p.box('int', 18.4, 0.90, 18.8, 0.0, 5.85, -73.0, basaltCliff);
  p.floor(-8.45, 8.45, -82.2, -63.8, Y0);
  p.collider(-8.8, 8.8, 5.38, 6.25, -82.4, -63.6);

  // Chamber Perimeter Rock Walls with 4 Cardinal Tunnel Portals (S: Main Drift, N: Incline, W: Pump, E: 1890 Stope!)
  // South wall (Z = -64.0, open X ∈ [-2.4, +2.4])
  p.box('int', 6.40, 5.80, 0.80, -5.60, 2.80, -63.7, coalSeam, { solid: true });
  p.box('int', 6.40, 5.80, 0.80, 5.60, 2.80, -63.7, coalSeam, { solid: true });
  p.box('int', 5.20, 2.00, 0.80, 0.0, 4.75, -63.7, basaltCliff);
  // North wall (Z = -82.0, open X ∈ [-2.5, +2.5] to Sloped Incline!)
  p.box('int', 6.30, 5.80, 0.80, -5.65, 2.80, -82.3, wetDarkRock, { solid: true });
  p.box('int', 6.30, 5.80, 0.80, 5.65, 2.80, -82.3, wetDarkRock, { solid: true });
  p.box('int', 5.40, 2.00, 0.80, 0.0, 4.75, -82.3, basaltCliff);
  // West wall (X = -8.6, open Z ∈ [-75.5, -70.5] to Flooded Pump Gallery!)
  p.box('int', 0.80, 5.80, 6.70, -8.90, 2.80, -67.15, basaltCliff, { solid: true });
  p.box('int', 0.80, 5.80, 6.70, -8.90, 2.80, -78.85, basaltCliff, { solid: true });
  p.box('int', 0.80, 2.10, 5.40, -8.90, 4.75, -73.0, coalSeam);
  // East wall (X = +8.6, open Z ∈ [-75.2, -70.8] to 1890 Hand-Dug Stope!)
  p.box('int', 0.80, 5.80, 6.80, 8.90, 2.80, -67.20, coalSeam, { solid: true });
  p.box('int', 0.80, 5.80, 6.80, 8.90, 2.80, -78.80, coalSeam, { solid: true });
  p.box('int', 0.80, 2.10, 5.00, 8.90, 4.75, -73.0, basaltCliff);

  // Overhead Steel Truss Hoist Gantry Beams & Glowing Junction Crown Lamps
  for (const gz of [-68.0, -73.0, -78.0]) {
    p.box('int', 17.2, 0.56, 0.34, 0.0, 5.15, gz, steelTruss);
  }
  p.box('int', 0.52, 0.24, 0.52, 0.0, 4.82, -73.0, mineLampMat);
  p.box('int', 0.38, 0.20, 0.38, -5.2, 4.82, -73.0, mineLampMat);
  p.box('int', 0.38, 0.20, 0.38, 5.2, 4.82, -73.0, mineLampMat);

  // ★ CENTRAL 4.0m IRON MINECART TURNTABLE PLATE (転車台: X=0, Z=-73.0) + 4-WAY RAILS!
  p.cyl('int', 2.05, 2.15, 0.08, 16, 0.0, Y0 + 0.02, -73.0, diamondPlate);
  p.cyl('int', 2.28, 2.28, 0.05, 16, 0.0, Y0 + 0.01, -73.0, boltedSteel);
  railTrackZ('int', 0.0, -64.0, -82.0, Y0);
  railTrackX('int', -73.0, -8.6, 8.6, Y0);

  // ★ ELECTRIC WINCH / HOIST DRUM (捲揚機: NE corner X∈[+4.2,+7.8], Z∈[-80.8,-76.8]) + DERAILED COAL CART (SW)!
  p.box('int', 3.40, 0.42, 3.20, 6.00, 0.22, -78.8, rawConc, { solid: true });
  p.box('int', 3.46, 0.16, 0.16, 6.00, 0.44, -77.15, hazardStripes);
  p.cyl('int', 0.85, 0.85, 1.85, 14, 6.00, 1.25, -78.9, boltedSteel, { rz: Math.PI * 0.5 }); // Giant cable drum!
  p.box('int', 0.36, 1.45, 1.45, 4.95, 1.12, -78.9, darkIron, { solid: true });
  p.box('int', 0.36, 1.45, 1.45, 7.05, 1.12, -78.9, darkIron, { solid: true });
  p.box('int', 1.45, 1.55, 0.56, 5.80, 0.82, -76.2, minePanel, { solid: true, uvScale: 0 });
  // Derailed tilted iron minecart & spilled coal chunks in SW corner!
  placeMinecart('int', -5.45, Y0, -67.6, 0.42, 0.18, true, true);
  p.rock('int', 0.72, 0, -4.35, 0.32, -66.8, 1.2, 0.65, 1.0, coalSeam);

  // =========================================================================
  // ZONE D: WEST FLOODED DRAINAGE & PUMP GALLERY (X = -8.6 -> -38.0m, Y = -2.0m!)
  // =========================================================================
  // Descending Ramp (X: -8.6 -> -16.6, Z ∈ [-75.2, -70.8], Y: Y0 -> Y_W = -2.00m)
  const wRampLen = Math.hypot(8.0, 2.04);
  const wRampPitch = Math.atan2(2.04, 8.0);
  p.box('int', wRampLen, 0.24, 4.60, -12.6, (Y0 + Y_W) * 0.5 - 0.12, -73.0, agedTimber, { rz: wRampPitch });
  p.box('int', wRampLen + 0.6, 0.80, 5.20, -12.6, (Y0 + Y_W) * 0.5 + 3.90, -73.0, basaltCliff, { rz: wRampPitch });
  p.box('int', 8.40, 6.20, 0.70, -12.6, 0.90, -75.6, wetDarkRock, { solid: true });
  p.box('int', 8.40, 6.20, 0.70, -12.6, 0.90, -70.4, wetDarkRock, { solid: true });
  p.ramp(-16.65, -8.55, -75.05, -70.95, Y_W, Y0, 'x', 1);

  // Flooded Pump Gallery Cavern (X: -16.6 -> -37.5, Z ∈ [-76.8, -69.2])
  p.box('int', 21.8, 0.40, 8.20, -27.2, -2.85, -73.0, wetDarkRock);       // Submerged stone sump floor
  p.box('int', 21.4, 0.06, 7.80, -27.2, -2.28, -73.0, sumpWaterMat);      // Glistening black subterranean mine water!
  p.box('int', 21.8, 0.90, 8.40, -27.2, 2.35, -73.0, basaltCliff);        // Damp rock ceiling
  p.box('int', 21.8, 5.60, 0.80, -27.2, -0.25, -77.1, wetDarkRock, { solid: true });
  p.box('int', 21.8, 5.60, 0.80, -27.2, -0.25, -68.9, wetDarkRock, { solid: true });
  p.collider(-37.8, -16.5, 1.85, 2.65, -77.2, -68.8);

  // ★ ELEVATED WALKABLE RUSTED IRON CATWALK GRATE (X: -16.6 -> -34.6, Z ∈ [-74.3, -71.7], Y = -2.00m)!
  p.box('int', 18.2, 0.14, 2.65, -25.6, Y_W - 0.07, -73.0, metalGrate);
  p.floor(-34.6, -16.55, -74.25, -71.75, Y_W);
  for (let px = -18.5; px >= -33.5; px -= 3.8) {
    p.box('int', 0.34, 0.90, 2.55, px, Y_W - 0.50, -73.0, mossyConc); // Concrete catwalk piers rising from water!
    // Damp shoring arches spanning the pump gallery
    p.box('int', 0.24, 4.60, 0.24, px, -0.35, -76.3, timberDark);
    p.box('int', 0.24, 4.60, 0.24, px, -0.35, -69.7, timberDark);
    p.box('int', 0.24, 0.24, 7.10, px, 1.82, -73.0, timberDark);
  }
  p.kouranRailing('int', -34.5, -74.28, -16.7, -74.28, Y_W, 0.94, rustBolts, 1.25);
  p.kouranRailing('int', -34.5, -71.72, -16.7, -71.72, Y_W, 0.94, rustBolts, 1.25);
  p.box('int', 0.36, 0.18, 0.36, -26.5, 1.64, -73.0, mineLampMat);

  // Twin Heavy Drainage Pumps, Thick Valve Pipe Manifold & West Rockfall Collapse Wall!
  for (const pz of [-75.55, -70.45]) {
    p.box('int', 2.40, 0.85, 1.35, -31.8, -2.20, pz, mossyConc);
    p.cyl('int', 0.46, 0.48, 1.95, 12, -31.8, -1.35, pz, boltedSteel, { rz: Math.PI * 0.5 });
    p.box('int', 1.45, 1.25, 0.95, -29.2, -1.30, pz, valvePipes, { uvScale: 0 });
    p.cyl('int', 0.14, 0.14, 15.0, 8, -24.2, -0.60, pz, valvePipes, { rz: Math.PI * 0.5 });
  }
  p.box('int', 1.20, 0.08, 1.20, -33.4, Y_W + 0.02, -73.0, drainGrate);
  // Dramatic West Rockfall Collapse Plug (X = -35.8..-38.5)
  p.box('int', 1.20, 5.60, 8.20, -37.8, -0.25, -73.0, basaltCliff, { solid: true });
  p.rock('int', 2.40, 1, -35.8, -1.10, -74.2, 1.15, 1.05, 1.15, striatedRock, { solid: true });
  p.rock('int', 2.25, 1, -35.5, -1.15, -71.6, 1.10, 0.98, 1.12, basaltCliff, { solid: true });
  p.rock('int', 1.95, 1, -36.2, 0.75, -73.0, 1.05, 0.92, 1.35, coalSeam);
  p.box('int', 0.24, 3.10, 0.24, -34.9, -0.75, -72.8, agedTimber, { rz: 0.62, rx: 0.25 }); // Snapped shoring beam!

  // =========================================================================
  // ZONE E: EAST 1890 HAND-DUG MEIJI COAL STOPE & MOUNTAIN GOD SHRINE!
  // =========================================================================
  // Narrow Hand-Picked Meiji Approach Drift (X: +8.6 -> +19.0, Z ∈ [-75.2, -70.8])
  p.box('int', 11.0, 0.40, 4.80, 13.8, -0.18, -73.0, volcanicGravel);
  p.box('int', 11.0, 0.75, 5.20, 13.8, 3.85, -73.0, coalSeam);
  p.box('int', 10.6, 4.10, 0.80, 13.8, 1.90, -75.6, ironRustRock, { solid: true });
  p.box('int', 10.6, 4.10, 0.80, 13.8, 1.90, -70.4, coalSeam, { solid: true });
  p.floor(8.4, 19.2, -75.05, -70.95, Y0);
  p.collider(8.5, 19.2, 3.45, 4.15, -75.4, -70.6);
  railTrackX('int', -73.0, 8.6, 23.5, Y0);

  // ★ 1890 HAND-DUG MEIJI COAL SEAM STOPE CHAMBER (X: +19.0 -> +33.5, Z ∈ [-79.5, -66.5], Ceiling Y = 6.0m!)
  p.box('int', 15.2, 0.40, 13.8, 26.2, -0.18, -73.0, volcanicGravel);
  p.box('int', 15.4, 0.90, 14.0, 26.2, 6.25, -73.0, coalSeam);
  p.floor(18.9, 33.2, -79.2, -66.8, Y0);
  p.collider(18.8, 33.8, 5.75, 6.65, -79.6, -66.4);
  // Stratified Geological Rock Walls: Coal Seam, Iron Rust Sandstone & White Chalk/Quartz Veins!
  p.box('int', 0.90, 6.20, 13.8, 33.9, 3.00, -73.0, coalSeam, { solid: true }); // East Exposed Coal Face!
  p.box('int', 0.40, 1.15, 13.0, 33.3, 2.35, -73.0, whiteChalkRock, { rx: 0.14 }); // Dramatic white quartz vein!
  p.box('int', 0.40, 1.25, 13.0, 33.3, 4.15, -73.0, ironRustRock, { rx: 0.14 });   // Oxidized iron strata band!
  p.box('int', 15.2, 6.20, 0.90, 26.2, 3.00, -79.9, gneissRock, { solid: true });
  p.box('int', 15.2, 6.20, 0.90, 26.2, 3.00, -66.1, ironRustRock, { solid: true });
  p.box('int', 0.80, 6.20, 4.40, 18.7, 3.00, -77.6, coalSeam, { solid: true });
  p.box('int', 0.80, 6.20, 4.40, 18.7, 3.00, -68.4, coalSeam, { solid: true });
  p.box('int', 0.80, 2.60, 5.20, 18.7, 4.85, -73.0, basaltCliff);

  // Forest of Closely-Spaced 1890 Unpeeled Bark Timber Pit-Props (手掘り時代の丸太支保工群)!
  const pitProps: Array<[number, number]> = [
    [21.2, -77.2], [21.2, -68.8], [24.8, -77.4], [24.8, -68.6],
    [28.5, -77.2], [28.5, -68.8], [25.6, -75.0], [25.6, -71.0],
    [29.8, -75.2], [29.8, -70.8],
  ];
  for (const [px, pz] of pitProps) {
    p.cyl('int', 0.15, 0.18, 6.05, 7, px, 2.98, pz, treeBark);
    p.box('int', 0.52, 0.18, 0.52, px, 5.72, pz, agedTimber); // Headboard wedge cap
    p.collider(px - 0.22, px + 0.22, 0, 4.0, pz - 0.22, pz + 0.22);
  }
  // Spilled Hand-Mined Coal Heap & Minecart parked beside north loading siding (leaving direct shrine aisle open!)
  placeMinecart('int', 22.8, Y0, -75.4, Math.PI * 0.5, 0, true, true);
  p.rock('int', 1.55, 1, 31.6, 0.65, -77.4, 1.3, 0.68, 1.2, coalSeam, { solid: true });
  p.rock('int', 1.35, 1, 31.8, 0.55, -68.5, 1.2, 0.62, 1.1, coalSeam, { solid: true });
  p.box('int', 0.42, 0.20, 0.42, 26.2, 5.60, -73.0, mineLampMat);

  // ★ MINERS' SACRED MOUNTAIN GOD SHRINE (山の神 小祠: tucked into East Coal Seam Shelf X=+32.4, Z=-73.0)!
  p.box('int', 1.45, 1.05, 2.35, 32.65, 0.52, -73.0, cutStone, { solid: true }); // Dressed stone altar shelf
  p.box('int', 0.88, 1.25, 1.18, 32.85, 1.66, -73.0, shrineFacade, { uvScale: 0 }); // Sacred cedar shrine facade!
  p.box('int', 1.15, 0.12, 1.55, 32.80, 2.38, -73.0, timberDark, { rz: -0.22 }); // Shrine mini roof
  // Miniature Vermilion Wooden Torii standing in front of the Mountain God Shrine!
  p.cyl('int', 0.045, 0.05, 1.62, 6, 32.05, 1.84, -73.75, redWood);
  p.cyl('int', 0.045, 0.05, 1.62, 6, 32.05, 1.84, -72.25, redWood);
  p.box('int', 0.10, 0.12, 2.05, 32.05, 2.66, -73.0, redWood);
  p.box('int', 0.07, 0.08, 1.65, 32.05, 2.36, -73.0, redWood);
  p.box('int', 0.18, 0.24, 0.18, 32.20, 1.18, -73.55, mineLampMat); // Warm votive lantern A
  p.box('int', 0.18, 0.24, 0.18, 32.20, 1.18, -72.45, mineLampMat); // Warm votive lantern B

  // =========================================================================
  // ZONE F: NORTH 22m SLOPED INCLINE (斜坑) -> DEEP -5.2m GRAND COAL CAVERN!
  // =========================================================================
  // 22-Meter Sloped Incline (X ∈ [-2.5, +2.5], Z: -82.0 -> -104.0, Y: Y0=+0.04 -> Y_N=-5.16m, 13.3° slope!)
  const incLen = Math.hypot(22.0, 5.20);
  const incPitch = Math.atan2(5.20, 22.0);
  const incMidY = (Y0 + Y_N) * 0.5;
  p.box('int', 5.40, 0.36, incLen + 0.4, 0.0, incMidY - 0.18, -93.0, darkDampStone, { rx: incPitch });
  p.box('int', 5.80, 0.85, incLen + 0.6, 0.0, incMidY + 4.10, -93.0, basaltCliff, { rx: incPitch });
  p.box('int', 0.80, 10.6, 22.8, -2.90, incMidY + 1.80, -93.0, wetDarkRock, { solid: true });
  p.box('int', 0.80, 10.6, 22.8, 2.90, incMidY + 1.80, -93.0, coalSeam, { solid: true });
  p.ramp(-2.40, 2.40, -104.1, -81.9, Y_N, Y0, 'z', 1); // Smooth walkable incline (rises toward +Z)!
  // Inclined Twin Steel Rails + Center Haulage Cable + East Safety Handrail + 6 Shoring Sets!
  p.box('int', 0.07, 0.07, incLen, -0.34, incMidY + 0.05, -93.0, darkIron, { rx: incPitch });
  p.box('int', 0.07, 0.07, incLen, 0.34, incMidY + 0.05, -93.0, darkIron, { rx: incPitch });
  p.cyl('int', 0.025, 0.025, incLen, 6, 0.0, incMidY + 0.12, -93.0, boltedSteel, { rx: Math.PI * 0.5 + incPitch });
  p.box('int', 0.08, 0.08, incLen, 2.18, incMidY + 0.96, -93.0, rustBolts, { rx: incPitch });
  for (let i = 0; i < 6; i++) {
    const t = (i + 0.5) / 6;
    const iz = -82.0 - t * 22.0;
    const iy = Y0 + (Y_N - Y0) * t;
    p.box('int', 0.24, 3.85, 0.24, -2.26, iy + 1.85, iz, timberDark);
    p.box('int', 0.24, 3.85, 0.24, 2.26, iy + 1.85, iz, timberDark);
    p.box('int', 4.80, 0.26, 0.26, 0.0, iy + 3.72, iz, timberDark);
    if (i === 1 || i === 4) p.box('int', 0.32, 0.18, 0.32, 0.0, iy + 3.48, iz, mineLampMat);
  }

  // ★ GRAND SUBTERRANEAN COAL CAVERN (大採炭空洞: X ∈ [-11.0,+11.0], Z: -104.0 -> -136.0, Floor Y = -5.16m, Ceiling Y = +6.2m!)
  p.box('int', 23.0, 0.50, 33.0, 0.0, Y_N - 0.25, -120.0, darkDampStone);
  p.floor(-10.8, 10.8, -135.6, -103.9, Y_N);
  // Cavern Perimeter Towering Rock Walls (11.6m tall!)
  p.box('int', 0.90, 12.2, 33.0, -11.4, Y_N + 5.8, -120.0, basaltCliff, { solid: true });
  p.box('int', 0.90, 12.2, 33.0, 11.4, Y_N + 5.8, -120.0, coalSeam, { solid: true });
  p.box('int', 23.2, 12.2, 1.00, 0.0, Y_N + 5.8, -136.5, coalSeam, { solid: true }); // 1985 Final Abandonment Heading!
  // South Cavern Wall (Z = -104.0) framing Incline Mouth (X ∈ [-2.5, +2.5])
  p.box('int', 8.80, 12.2, 0.90, -6.90, Y_N + 5.8, -103.7, wetDarkRock, { solid: true });
  p.box('int', 8.80, 12.2, 0.90, 6.90, Y_N + 5.8, -103.7, wetDarkRock, { solid: true });
  p.box('int', 5.60, 7.60, 0.90, 0.0, Y_N + 8.1, -103.7, basaltCliff);

  // ★ CEILING WITH CENTRAL 28m VERTICAL VENTILATION ROCK CHIMNEY SHAFT (排気縦坑: X∈[-3.2,+3.2], Z∈[-122,-116])!
  p.box('int', 23.2, 1.00, 12.6, 0.0, 6.45, -110.0, basaltCliff); // South ceiling slab
  p.box('int', 23.2, 1.00, 14.6, 0.0, 6.45, -129.2, basaltCliff); // North ceiling slab
  p.box('int', 8.20, 1.00, 6.40, -7.30, 6.45, -119.0, basaltCliff); // West chimney flank
  p.box('int', 8.20, 1.00, 6.40, 7.30, 6.45, -119.0, basaltCliff);  // East chimney flank
  // 22m-Tall Vertical Ventilation Shaft Liner rising from Y = +6.0m -> +28.0m inside Mt. Kuroiso!
  p.box('int', 7.00, 22.0, 0.80, 0.0, 17.0, -115.7, wetDarkRock);
  p.box('int', 7.00, 22.0, 0.80, 0.0, 17.0, -122.3, wetDarkRock);
  p.box('int', 0.80, 22.0, 7.00, -3.50, 17.0, -119.0, coalSeam);
  p.box('int', 0.80, 22.0, 7.00, 3.50, 17.0, -119.0, coalSeam);
  p.box('int', 7.60, 1.00, 7.60, 0.0, 28.0, -119.0, ironBlack); // Sealed shaft cap far overhead!
  p.box('int', 2.40, 0.06, 2.40, 0.0, Y_N + 0.02, -119.0, drainGrate); // Sump grate directly beneath shaft!

  // Lower Haulage Tracks + 2 Parked Coal Minecarts + Steel Drainage Channels!
  railTrackZ('int', 0.0, -104.2, -133.0, Y_N);
  placeMinecart('int', 0.0, Y_N, -125.5, 0, 0, true, true);
  placeMinecart('int', 0.0, Y_N, -129.2, 0, 0, true, true);

  // ★ CLIMBABLE TWO-STORY STEEL COAL LOADING HOPPER & INSPECTION CATWALK (X∈[-9.6,-3.6], Z∈[-126,-112])!
  const Y_CAT = Y_N + 3.10; // -2.06m (3.1m above cavern floor!)
  // Walkable Steel Staircase climbing North along X = -4.35, Z: -108.5 -> -112.5, Y: -5.16 -> -2.06m!
  p.stairRun('int', {
    x0: -4.35, z0: -108.4, x1: -4.35, z1: -112.4, y0: Y_N, y1: Y_CAT,
    width: 1.15, steps: 12, treadMat: diamondPlate, stringerMat: boltedSteel, railMat: rustBolts,
    railLeft: true, railRight: true, closedRisers: false, guardLeft: true, guardRight: true,
  });
  // Elevated Steel Hopper Inspection Platform (X ∈ [-9.6, -3.5], Z ∈ [-125.5, -112.4], Y = Y_CAT)
  p.box('int', 6.15, 0.16, 13.2, -6.55, Y_CAT - 0.08, -119.0, metalGrate);
  p.floor(-9.45, -3.55, -125.35, -112.35, Y_CAT);
  p.collider(-9.60, -3.50, Y_CAT - 0.18, Y_CAT + 0.02, -125.5, -112.4);
  for (const [hx, hz] of [[-9.4, -125.2], [-3.7, -125.2], [-9.4, -119.0], [-3.7, -119.0], [-9.4, -112.6], [-3.7, -112.6]]) {
    p.box('int', 0.24, 3.10, 0.24, hx, Y_N + 1.55, hz, steelTruss, { solid: true });
  }
  // Overhead Coal Loading Hopper Bin & Steel Chute projecting toward center track!
  p.box('int', 3.40, 2.85, 5.20, -7.80, Y_CAT + 1.48, -119.0, boltedSteel, { solid: true });
  p.box('int', 3.45, 0.24, 5.25, -7.80, Y_CAT + 2.95, -119.0, hazardStripes);
  p.box('int', 2.85, 0.42, 2.20, -4.45, Y_CAT + 1.35, -119.0, rustBolts, { rz: -0.45 }); // Ore chute
  p.kouranRailing('int', -3.56, -125.4, -3.56, -112.4, Y_CAT, 0.98, rustBolts, 1.15);
  p.kouranRailing('int', -9.50, -125.4, -3.56, -125.4, Y_CAT, 0.98, rustBolts, 1.15);
  p.kouranRailing('int', -9.50, -112.4, -5.05, -112.4, Y_CAT, 0.98, rustBolts, 1.15);

  // ★ EAST SIDE 1985 ABANDONMENT SUPERVISOR STATION, PIPELINES & FINAL COAL FACE BOULDERS!
  p.box('int', 1.85, 0.94, 0.72, 7.60, Y_N + 0.47, -116.5, officeCounter, { solid: true, uvScale: 0 });
  p.box('int', 0.56, 1.65, 1.65, 10.65, Y_N + 0.84, -116.5, minePanel, { solid: true, uvScale: 0 });
  p.box('int', 0.08, 1.15, 2.10, 10.85, Y_N + 2.15, -120.0, darkChalk, { uvScale: 0 }); // 1985 final shift chalkboard!
  p.box('int', 0.62, 1.95, 2.60, 10.55, Y_N + 0.98, -124.2, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 0.85, 1.55, 2.80, 10.45, Y_N + 2.40, -111.5, valvePipes, { uvScale: 0 });
  // Fractured 1985 final coal-face rock outcrops along North wall (Z = -134.5)
  p.rock('int', 2.85, 1, -6.8, Y_N + 1.30, -134.5, 1.4, 1.1, 1.1, coalSeam, { solid: true });
  p.rock('int', 2.65, 1, 6.8, Y_N + 1.25, -134.5, 1.35, 1.05, 1.1, basaltCliff, { solid: true });
  p.rock('int', 2.15, 1, 3.2, Y_N + 0.95, -134.8, 1.2, 0.88, 1.0, coalSeam, { solid: true });
  // Cavern Warm Bulkhead Flood Lamps
  p.box('int', 0.52, 0.24, 0.52, -4.5, Y_CAT + 2.85, -119.0, mineLampMat);
  p.box('int', 0.52, 0.24, 0.52, 6.5, Y_N + 5.65, -118.0, mineLampMat);
  p.box('int', 0.52, 0.24, 0.52, 0.0, Y_N + 5.65, -130.0, mineLampMat);

  return p.build({
    id: 'M01',
    name: '旧黒磯炭鉱 第一坑口・地下坑道',
    subtitle: '明治23年（1890年）開坑・全長135m地下坑道・火薬庫・水没排水坑・手掘り炭層＆山の神・斜坑大空洞',
    category: 'mine',
    builtYear: 1890,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y_N, Y_W, Y0],
    entryLocal: [0.0, 0.0, 2.5],
    entryLookLocalYaw: 0,
  });
}
