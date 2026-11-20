import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H06: 藤原家（1876年築・沢沿い 苔石垣＆半壊水車小屋付二階家）— 2階建（一部半崩落）
 * 下段斜面・黒磯渓谷の沢縁（標高226m）に建つ、木造水車小屋を西翼に併設した明治初期の沢沿い二階家。
 *  - 西翼水車小屋 (X∈[-6.1,-2.5]): 玉石・濡れ黒岩の深い沢石垣基礎の上へ建てられ、西外壁に直径3.2m・12本スポークの
 *    手作業「木造水車」と貫通主軸・石臼部屋を備える。北西屋根が半崩落し折れた黒垂木越しに青空が覗く！
 *  - 東側本屋 (X∈[-2.5,+6.1]): 1Fは縁付畳居間・昭和台所・和箪笥、東階段で2Fへ登ると苔侵食座敷から
 *    崩落した西水車吹抜＆渓谷を見下ろす安全な高欄縁を備える。
 *  - 屋根: 沢の湿気と苔を帯びた「深苔黒本瓦」切妻屋根（東本屋健在＋西水車翼半崩落）。
 */
export function buildHouse06Fujiwara(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Creekside Mossy Stone, Waterwheel & Aged Timber Materials ---
  const wetRock = catalog.getMaterial('wet_dark_rock', { roughness: 0.88, bumpScale: 0.08 });
  const mossyStone = catalog.getMaterial('ishigaki_mossy', { roughness: 0.94, bumpScale: 0.08 });
  const streamPebbles = catalog.getMaterial('stream_pebbles', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.90, bumpScale: 0.05 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.92, bumpScale: 0.06 });
  const weatheredGray = catalog.getMaterial('weathered_gray_planks', { roughness: 0.92, bumpScale: 0.05 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xe6e4d8 });
  const mossyWall = catalog.getMaterial('mossy_wall_patch', { roughness: 0.94, bumpScale: 0.06 });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.85, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.84, bumpScale: 0.04 });
  const rustIron = catalog.getMaterial('rusted_plate_bolts', { roughness: 0.72, metalness: 0.48, bumpScale: 0.05 });

  // --- Interior Mill & Cottage Materials ---
  const tatamiGreen = catalog.getMaterial('tatami_green_border', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiPlain = catalog.getMaterial('tatami_plain', { roughness: 0.92, bumpScale: 0.04 });
  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.34, opacity: 0.38, transparent: true });
  const slatScreen = catalog.getMaterial('wood_slat_screen', { roughness: 0.86, bumpScale: 0.05 });
  const coarseCanvas = catalog.getMaterial('coarse_canvas', { roughness: 0.95, bumpScale: 0.05, doubleSide: true });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.80, bumpScale: 0.03 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.80, bumpScale: 0.04 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.92, bumpScale: 0.03 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });

  // --- Damp Creek-Moss Charcoal Hon-gawara (沢苔黒本瓦) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.78, metalness: 0.14, bumpScale: 0.07, tint: 0x627264 });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.74, metalness: 0.18, bumpScale: 0.06, tint: 0x526254 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.64, metalness: 0.28, tint: 0x48564a });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.56, metalness: 0.36, tint: 0x3b463d });

  const Y1 = 0.45;
  const Y2 = 3.45;
  const YTOP = 6.30;

  // =========================================================================
  // 1. DEEP MOSSY CREEKSIDE RETAINING BASE, WATERWHEEL CHANNEL & FRONT STEPS
  // =========================================================================
  p.box('ext', 12.8, 4.40, 8.8, 0, Y1 - 2.24, 0, mossyStone);
  p.box('ext', 4.4, 1.40, 8.9, -4.3, Y1 - 0.72, 0, wetRock);
  // Creek-bed pebble flume trough running right beneath the West wooden waterwheel!
  p.box('ext', 1.55, 0.55, 9.2, -6.75, Y1 - 0.68, 0, streamPebbles);
  p.box('ext', 0.36, 0.95, 9.2, -7.55, Y1 - 0.45, 0, mossyStone);

  // ★ HAND-CRAFTED 3.2m-DIAMETER 12-SPOKE WEATHERED WOODEN WATERWHEEL (西外壁 X = -6.58!)
  const wCx = -6.58;
  const wCy = Y1 + 1.55;
  const wCz = -0.35;
  // Horizontal axle shaft penetrating the West mill wall into the indoor grinding wheel
  p.cyl('ext', 0.18, 0.18, 2.40, 10, wCx + 0.85, wCy, wCz, timberDark, { rz: Math.PI * 0.5 });
  p.cyl('ext', 0.28, 0.28, 0.42, 10, wCx, wCy, wCz, rustIron, { rz: Math.PI * 0.5 });
  // 12 radial timber spokes + 12 outer rim paddle buckets forming a genuine 3D wooden waterwheel!
  const wheelR = 1.52;
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const ny = Math.cos(a);
    const nz = Math.sin(a);
    // Radial spoke
    p.box('ext', 0.12, wheelR * 1.95, 0.10, wCx, wCy, wCz, timberDark, { rx: a });
    // Twin rim chords & cross paddle bucket
    const py = wCy + ny * wheelR;
    const pz = wCz + nz * wheelR;
    p.box('ext', 0.62, 0.10, 0.36, wCx, py, pz, agedTimber, { rx: a });
    p.box('ext', 0.09, 0.14, 0.84, wCx - 0.28, py, pz, timberDark, { rx: a + Math.PI * 0.5 });
    p.box('ext', 0.09, 0.14, 0.84, wCx + 0.28, py, pz, timberDark, { rx: a + Math.PI * 0.5 });
  }
  // Wooden millrace flume chute feeding water to top of wheel
  p.box('ext', 0.48, 0.30, 3.60, wCx, wCy + 1.85, wCz - 2.35, weatheredGray, { rx: 0.10 });

  // Front Porch & Steps (East Main Entry X = +1.20)
  p.box('ext', 8.8, 2.80, 1.30, 1.70, Y1 - 1.42, 4.72, mossyStone);
  p.box('ext', 8.7, 0.10, 1.24, 1.70, Y1 - 0.02, 4.72, warmFloor);
  p.floor(-2.60, 6.00, 4.05, 5.30, Y1 + 0.04);
  p.stoneSteps('ext', 1.20, 6.15, 5.20, -0.35, Y1, 2.25, 4, stepStone);
  for (const px of [-2.45, -0.15, 2.55, 5.95]) {
    p.box('ext', 0.16, 2.92, 0.16, px, Y1 + 1.46, 5.25, timberDark, { solid: true });
  }
  p.box('ext', 8.7, 0.18, 0.18, 1.70, Y1 + 2.94, 5.25, timberDark);

  // =========================================================================
  // 2. 1F: WEST STONE-GRINDING MILLROOM & EAST CREEKSIDE LIVING COTTAGE (Y1 = +0.45m)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.00m
  const mid1 = Y1 + h1 * 0.5;

  // 1F Floors
  p.box('int', 3.65, 0.14, 8.15, -4.30, Y1 - 0.05, 0, streamPebbles);     // Damp stone-mill floor
  p.box('int', 8.65, 0.14, 8.15, 1.80, Y1 - 0.05, 0, warmFloor);          // Main house wood floor
  p.box('int', 4.35, 0.04, 5.15, 1.55, Y1 + 0.03, -0.85, tatamiGreen);    // East living tatami
  p.box('int', 1.15, 0.03, 0.68, 1.20, Y1 + 0.04, 3.68, coirMat, { uvScale: 0 });
  p.floor(-5.98, 5.98, -3.98, 4.18, Y1 + 0.04);

  // 1F Exterior Walls (Front +Z = +4.10: Wide 2.00m Entry X ∈ [+0.20, +2.20])
  p.box('ext', 3.65, 1.15, 0.24, -4.30, Y1 + 0.58, 4.10, wetRock, { solid: true });
  p.box('ext', 3.65, h1 - 1.15, 0.24, -4.30, Y1 + 2.08, 4.10, agedTimber, { solid: true });
  p.box('ext', 2.74, 1.05, 0.24, -1.15, Y1 + 0.52, 4.10, cedarDark, { solid: true });
  p.box('ext', 2.74, h1 - 1.05, 0.24, -1.15, Y1 + 2.02, 4.10, mossyWall, { solid: true });
  p.box('ext', 2.04, 0.68, 0.24, 1.20, Y2 - 0.34, 4.10, agedTimber, { solid: true });
  p.box('ext', 2.06, 0.09, 0.28, 1.20, Y2 - 0.68, 4.10, timberDark);
  p.box('ext', 3.94, 1.05, 0.24, 4.15, Y1 + 0.52, 4.10, cedarDark, { solid: true });
  p.box('ext', 0.90, h1 - 1.05, 0.24, 2.62, Y1 + 2.02, 4.10, whitePlaster, { solid: true });
  p.box('ext', 2.05, 0.52, 0.24, 4.12, Y2 - 0.26, 4.10, whitePlaster, { solid: true });
  p.box('ext', 2.08, 0.08, 0.28, 4.12, Y1 + 1.06, 4.10, timberDark);
  p.box('ext', 2.08, 0.08, 0.28, 4.12, Y2 - 0.52, 4.10, timberDark);
  p.box('ext', 2.00, 1.40, 0.06, 4.12, Y1 + 1.78, 4.10, slatScreen, { uvScale: 0 });
  p.box('ext', 1.00, h1 - 1.05, 0.24, 5.62, Y1 + 2.02, 4.10, whitePlaster, { solid: true });

  // Back (-Z = -4.10), West Mill Wall (-X = -6.10), East Wall (+X = +6.10)
  p.box('ext', 12.25, 1.15, 0.24, 0, Y1 + 0.58, -4.10, cedarDark, { solid: true });
  p.box('ext', 12.25, h1 - 1.15, 0.24, 0, Y1 + 2.08, -4.10, mossyWall, { solid: true });
  p.box('ext', 0.24, 1.15, 8.24, -6.10, Y1 + 0.58, 0, wetRock, { solid: true });
  p.box('ext', 0.24, h1 - 1.15, 8.24, -6.10, Y1 + 2.08, 0, agedTimber, { solid: true });
  p.box('ext', 0.24, 1.15, 8.24, 6.10, Y1 + 0.58, 0, cedarDark, { solid: true });
  p.box('ext', 0.24, h1 - 1.15, 8.24, 6.10, Y1 + 2.08, 0, agedTimber, { solid: true });

  // Internal 1F Mill Partition at X = -2.50 (Wide 1.75m Doorway Z ∈ [+1.00, +2.75])
  p.box('int', 0.20, h1, 5.12, -2.50, mid1, -1.55, mossyWall, { solid: true });
  p.box('int', 0.20, 0.68, 1.78, -2.50, Y2 - 0.34, 1.88, mossyWall, { solid: true });
  p.box('int', 0.24, 0.08, 1.80, -2.50, Y2 - 0.68, 1.88, timberDark);
  p.box('int', 0.20, h1, 1.38, -2.50, mid1, 3.42, mossyWall, { solid: true });

  // --- 1F WEST STONE-GRINDING MILL FURNISHINGS (石臼＆大歯車＆麻袋!) ---
  p.cyl('int', 0.68, 0.72, 0.78, 12, -4.75, Y1 + 0.39, -0.35, stepStone); // Heavy granite millstone!
  p.collider(-5.48, -4.02, Y1, Y1 + 0.85, -1.08, 0.38);
  p.cyl('int', 0.82, 0.82, 0.18, 12, -5.45, Y1 + 1.55, -0.35, timberDark, { rz: Math.PI * 0.5 }); // Indoor gear wheel!
  p.box('int', 1.45, 0.75, 1.05, -4.45, Y1 + 0.38, -2.95, coarseCanvas, { solid: true });        // Grain sacks
  // Fallen broken roof beam resting dramatically in the far NW corner of the mill!
  p.box('int', 0.16, 0.18, 4.40, -5.25, Y1 + 2.10, -2.25, timberDark, { rx: 0.42, rz: 0.14 });

  // --- 1F EAST COTTAGE FURNISHINGS & STAIRCASE ---
  p.box('int', 1.40, 0.36, 0.86, 1.55, Y1 + 0.20, -0.85, timberDark, { solid: true });
  p.box('int', 0.60, 0.07, 0.60, 1.55, Y1 + 0.07, -1.65, zabutonMat, { uvScale: 0 });
  p.box('int', 1.90, 0.92, 0.62, 1.05, Y1 + 0.46, -3.66, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 0.54, 1.45, 1.38, -2.06, Y1 + 0.74, -1.25, tansuMat, { solid: true, uvScale: 0 });

  p.stairRun('int', {
    x0: 4.95, z0: 2.15, x1: 4.95, z1: -1.95, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.10, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: true, railRight: false, closedRisers: false, guardLeft: true, guardRight: false,
  });

  // =========================================================================
  // 3. 2F: SURVIVING EAST BEDROOM & GUARD-RAILED OVERLOOK INTO HALF-COLLAPSED MILL!
  // =========================================================================
  const h2 = YTOP - Y2; // 2.85m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor covers East/Center X ∈ [-2.50, +6.10] (West mill wing is open double-height & half-collapsed!)
  // Stairwell cutout: X ∈ [+4.30, +6.02], Z ∈ [-2.02, +2.22]
  p.box('int', 6.82, 0.16, 8.15, 0.90, Y2 - 0.06, 0, warmFloor);           // Main 2F X∈[-2.50,+4.30]
  p.box('int', 1.82, 0.16, 2.10, 5.20, Y2 - 0.06, -3.06, warmFloor);       // NE Arrival Z∈[-4.10,-2.00]
  p.box('int', 1.82, 0.16, 1.90, 5.20, Y2 - 0.06, 3.16, warmFloor);        // SE Strip Z∈[+2.20,+4.10]
  p.box('int', 4.65, 0.04, 5.85, 0.85, Y2 + 0.03, 0.0, tatamiPlain);
  p.collider(-2.50, 4.30, Y2 - 0.16, Y2 + 0.02, -4.10, 4.10);
  p.collider(4.30, 6.10, Y2 - 0.16, Y2 + 0.02, -4.10, -2.02);
  p.collider(4.30, 6.10, Y2 - 0.16, Y2 + 0.02, 2.22, 4.10);
  p.floor(-2.42, 4.26, -3.98, 3.98, Y2 + 0.04);
  p.floor(4.22, 5.98, -3.98, -1.96, Y2 + 0.04);
  p.floor(4.22, 5.98, 2.18, 3.98, Y2 + 0.04);

  // Stairwell Guard Railings + Safe Overlook Railing at X = -2.44 peering into Collapsed Mill Loft!
  p.kouranRailing('int', 4.30, -2.02, 4.30, 2.22, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', 4.30, 2.22, 5.98, 2.22, Y2, 0.94, timberDark, 0.48);
  p.kouranRailing('int', -2.44, -3.98, -2.44, 3.98, Y2, 0.94, agedTimber, 0.56);

  // 2F Exterior Walls (Intact East/Center + Half-Ruined Jagged West Mill Upper Wall!)
  p.box('ext', 8.65, 0.88, 0.22, 1.80, Y2 + 0.44, 4.10, whitePlaster, { solid: true });
  p.box('ext', 1.85, h2 - 0.88, 0.22, -1.60, Y2 + 1.86, 4.10, mossyWall, { solid: true });
  p.box('ext', 3.65, 0.48, 0.22, 1.15, YTOP - 0.24, 4.10, whitePlaster, { solid: true });
  p.box('ext', 3.68, 0.08, 0.26, 1.15, Y2 + 0.90, 4.10, timberDark);
  p.box('ext', 3.68, 0.08, 0.26, 1.15, YTOP - 0.48, 4.10, timberDark);
  p.box('ext', 3.60, 1.46, 0.06, 1.15, Y2 + 1.64, 4.10, glassMat, { uvScale: 0 });
  p.box('ext', 3.15, h2 - 0.88, 0.22, 4.55, Y2 + 1.86, 4.10, whitePlaster, { solid: true });
  p.box('ext', 8.65, h2, 0.22, 1.80, mid2, -4.10, mossyWall, { solid: true });
  p.box('ext', 0.22, h2, 8.24, 6.10, mid2, 0, whitePlaster, { solid: true });
  // Half-broken West Mill Upper Walls (south side standing, north side crumbled down!)
  p.box('ext', 3.65, 1.85, 0.22, -4.30, Y2 + 0.92, 4.10, weatheredGray, { solid: true });
  p.box('ext', 0.22, 1.65, 4.40, -6.10, Y2 + 0.82, 1.90, weatheredGray, { solid: true });
  p.box('ext', 3.65, 0.85, 0.22, -4.30, Y2 + 0.42, -4.10, mossyWall, { solid: true });

  // 2F Furnishings (Mossy Bedroom)
  p.box('int', 1.65, 0.20, 2.15, 0.95, Y2 + 0.13, -1.65, futonMat, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 1.32, 0.52, 2.25, Y2 + 0.66, -3.65, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 8.40, 0.08, 8.00, 1.80, YTOP - 0.05, 0, washiWall);

  // =========================================================================
  // 4. DAMP MOSS-BLACK HON-GAWARA ROOF (INTACT EAST + HALF-COLLAPSED WEST MILL!)
  // =========================================================================
  const mainPitch = 0.46;
  const mainRun = 5.10;
  const mainRidgeY = YTOP + mainRun * Math.tan(mainPitch) - 0.34; // ~8.48m
  // Intact East/Center Kirizuma Roof (X ∈ [-2.8, +6.9])
  p.kawaraSlope('ext', {
    bottomWidth: 9.80, run: mainRun, pitch: mainPitch,
    ridgeX: 2.05, ridgeY: mainRidgeY, ridgeZ: 0, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 9.80, run: mainRun, pitch: mainPitch,
    ridgeX: 2.05, ridgeY: mainRidgeY, ridgeZ: 0, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  const gableH = mainRidgeY - YTOP - 0.06;
  p.gablePrism('ext', 8.20, gableH, 0.22, 6.10, YTOP, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.kawaraRidge('ext', -2.75, mainRidgeY + 0.04, 0, 6.85, mainRidgeY + 0.04, 0, kawaraRidge, oniMat, {
    scale: 1.0, courses: 2, oniStart: false, oniEnd: true,
  });

  // Surviving South Slope over West Mill Wing + Fractured Exposed Timber Rafters on Collapsed North Side!
  p.kawaraSlope('ext', {
    bottomWidth: 4.10, run: 4.75, pitch: 0.48,
    ridgeX: -4.45, ridgeY: Y2 + 3.45, ridgeZ: 0.20, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.42,
  });
  // Broken silhouetted rafters & sagging ridge purlin over the collapsed NW mill opening!
  p.box('ext', 4.10, 0.18, 0.18, -4.40, Y2 + 3.15, 0.10, timberDark, { rz: -0.14 });
  for (let i = 0; i < 5; i++) {
    const rx = -2.95 - i * 0.78;
    p.box('ext', 0.10, 0.12, 2.2 + (i % 2) * 1.1, rx, Y2 + 2.45 - i * 0.12, -1.45, timberDark, { rx: -0.45 - (i % 3) * 0.12 });
  }

  // 1F Front Porch Kawara Eave
  p.kawaraSlope('ext', {
    bottomWidth: 9.20, run: 1.48, pitch: 0.34,
    ridgeX: 1.70, ridgeY: Y2 + 0.06, ridgeZ: 4.06, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });

  return p.build({
    id: 'H06',
    name: '藤原家（沢沿い・苔石垣＆半壊水車小屋付二階家）',
    subtitle: '直径3.2m木造水車・石臼部屋・北西屋根半崩落・2F吹抜見下ろし高欄・沢苔黒本瓦',
    category: 'house',
    builtYear: 1876,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1, Y2],
    entryLocal: [1.20, 0.0, 7.6],
    entryLookLocalYaw: 0,
  });
}
