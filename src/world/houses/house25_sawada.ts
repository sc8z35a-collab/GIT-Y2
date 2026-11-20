import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H25: 沢田小屋（1891年築・獣道入口 巨大落石直撃半崩壊の二階番小屋）— 2階建（落石崩壊）
 * 上段山腹道北東端・黒磯岳865m山頂獣道入口直近（標高288m）に建つ、山守・炭鉱見張り番の二階小屋。
 *  - 巨大落石直撃シーン: 背後（-Z）の865m主峰斜面から崩落した直径3.6m級の火山岩（basalt_cliff, striated_rock,
 *    iron_rust_rock, white_chalk_rock）が北東の本瓦屋根と2F床を真っ二つに突き破り、室内に深く食い込んでいる！
 *  - 1F西側 (Y=+0.40m): 無事残存した番小屋スペース（気象掲示板・島内地図・登山装備棚・石囲炉裏）から
 *    落石の巨大断面を見上げつつ、西階段で2Fへ昇降可能。
 *  - 2F西ロフト (Y=+3.30m): 番人の寝床と安全高欄の崩落縁から、砕けた垂木・巨大落石・865m山頂尾根を一望！
 */
export function buildHouse25Sawada(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Rockfall Volcanic Boulders & Trailhead Watchman Cottage Materials ---
  const basaltRock = catalog.getMaterial('basalt_cliff', { roughness: 0.94, bumpScale: 0.09 });
  const striatedRock = catalog.getMaterial('striated_rock', { roughness: 0.93, bumpScale: 0.08 });
  const ironRustRock = catalog.getMaterial('iron_rust_rock', { roughness: 0.94, bumpScale: 0.08 });
  const chalkRock = catalog.getMaterial('white_chalk_rock', { roughness: 0.92, bumpScale: 0.07 });
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });

  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.90, bumpScale: 0.05 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.92, bumpScale: 0.06 });
  const weatheredGray = catalog.getMaterial('weathered_gray_planks', { roughness: 0.92, bumpScale: 0.06 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xeae5d9 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.85, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.84, bumpScale: 0.04 });

  // --- Trailhead Keeper Props ---
  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.34, opacity: 0.36, transparent: true });
  const mapSign = catalog.getMaterial('island_map_sign', { roughness: 0.80, bumpScale: 0.02 });
  const noticeMat = catalog.getMaterial('notice_board', { roughness: 0.88, bumpScale: 0.02 });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.88, bumpScale: 0.04 });
  const coarseCanvas = catalog.getMaterial('coarse_canvas', { roughness: 0.95, bumpScale: 0.05, doubleSide: true });
  const tatamiPlain = catalog.getMaterial('tatami_plain', { roughness: 0.92, bumpScale: 0.04 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.92, bumpScale: 0.03 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });

  // --- Shattered Mountain Charcoal-Brown Hon-gawara ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.74, metalness: 0.16, bumpScale: 0.06, tint: 0x706c66 });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.70, metalness: 0.20, bumpScale: 0.05, tint: 0x5c5852 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.62, metalness: 0.30, tint: 0x4c4844 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.54, metalness: 0.40, tint: 0x3e3b38 });

  const Y1 = 0.40;
  const Y2 = 3.30;
  const YTOP = 6.10;

  // =========================================================================
  // 1. TRAILHEAD STONE PLINTH & FRONT STEPS
  // =========================================================================
  p.box('ext', 11.2, 3.20, 8.2, 0, Y1 - 1.64, 0, cutStone);
  p.stoneSteps('ext', -0.95, 5.10, 3.80, -0.10, Y1, 2.35, 3, stepStone);

  // =========================================================================
  // 2. ★ MASSIVE VOLCANIC ROCKFALL BOULDER SMASHING THROUGH THE NE ROOF & 2F FLOOR!
  // =========================================================================
  // Primary 3.6m jagged volcanic boulder cluster embedded in NE cottage corner (X ∈ [+1.6, +5.6], Z ∈ [-4.4, +0.9])!
  p.box('ext', 3.45, 3.85, 3.35, 3.65, Y1 + 1.95, -1.75, basaltRock, { rx: 0.18, ry: 0.42, rz: -0.22, solid: true });
  p.box('ext', 2.45, 2.65, 2.55, 2.55, Y1 + 1.25, -0.55, striatedRock, { rx: -0.24, ry: -0.35, rz: 0.18, solid: true });
  p.box('ext', 1.95, 2.15, 2.25, 4.45, Y1 + 3.25, -2.55, ironRustRock, { rx: 0.32, ry: 0.68, rz: -0.28, solid: true });
  p.box('ext', 1.65, 1.45, 1.75, 4.75, Y1 + 0.72, 1.05, chalkRock, { rx: -0.15, ry: 0.50, rz: 0.25, solid: true });
  // Scree trail of fallen boulders tumbling down from uphill (-Z) behind the cottage!
  p.box('ext', 2.20, 1.85, 2.05, 3.85, Y1 + 0.85, -4.95, basaltRock, { ry: 0.72, rz: -0.16, solid: true });
  p.box('ext', 1.45, 1.15, 1.55, 2.15, Y1 + 0.52, -4.75, ironRustRock, { ry: -0.45, solid: true });
  p.box('ext', 1.25, 0.95, 1.20, 5.75, Y1 + 0.42, -3.15, chalkRock, { ry: 0.30, solid: true });
  // Splintered roof rafters & joists driven straight down around the boulder!
  p.box('ext', 0.16, 0.18, 4.60, 2.15, Y2 + 1.25, -0.95, timberDark, { rx: -0.58, rz: 0.24 });
  p.box('ext', 0.16, 0.18, 4.20, 3.25, Y2 + 1.65, 0.35, agedTimber, { rx: 0.48, rz: -0.32 });
  p.box('ext', 3.40, 0.16, 0.16, 2.85, Y2 + 0.45, 1.45, timberDark, { rz: -0.36, ry: 0.22 });

  // =========================================================================
  // 3. 1F: INTACT WEST TRAILHEAD SHELTER & VIEW OF THE EMBEDDED BOULDER (Y1 = +0.40m)
  // =========================================================================
  const h1 = Y2 - Y1; // 2.90m
  const mid1 = Y1 + h1 * 0.5;

  p.box('int', 10.4, 0.14, 7.4, 0, Y1 - 0.05, 0, warmFloor);
  p.box('int', 1.20, 0.03, 0.70, -0.95, Y1 + 0.04, 3.42, coirMat, { uvScale: 0 });
  p.floor(-5.18, 5.10, -3.68, 3.95, Y1 + 0.04);

  // 1F Exterior Walls (Front +Z = +3.80: Wide 2.10m Entry X ∈ [-2.00, +0.10] facing Upper Road!)
  p.box('ext', 3.34, 1.05, 0.24, -3.66, Y1 + 0.52, 3.80, cedarDark, { solid: true });
  p.box('ext', 3.34, h1 - 1.05, 0.24, -3.66, Y1 + 1.98, 3.80, agedTimber, { solid: true });
  p.box('ext', 2.14, 0.66, 0.24, -0.95, Y2 - 0.33, 3.80, agedTimber, { solid: true });
  p.box('ext', 2.16, 0.09, 0.28, -0.95, Y2 - 0.66, 3.80, timberDark);
  p.box('ext', 5.24, 1.05, 0.24, 2.70, Y1 + 0.52, 3.80, cedarDark, { solid: true });
  p.box('ext', 1.45, h1 - 1.05, 0.24, 0.80, Y1 + 1.98, 3.80, agedTimber, { solid: true });
  p.box('ext', 2.10, 0.48, 0.24, 2.55, Y2 - 0.24, 3.80, agedTimber, { solid: true });
  p.box('ext', 2.12, 0.08, 0.28, 2.55, Y1 + 1.06, 3.80, timberDark);
  p.box('ext', 2.12, 0.08, 0.28, 2.55, Y2 - 0.48, 3.80, timberDark);
  p.box('ext', 2.04, 1.38, 0.06, 2.55, Y1 + 1.76, 3.80, glassMat, { uvScale: 0 });
  p.box('ext', 1.74, h1 - 1.05, 0.24, 4.45, Y1 + 1.98, 3.80, weatheredGray, { solid: true });

  // West Wall intact; North & East walls smashed open around the boulder!
  p.box('ext', 0.24, 1.05, 7.64, -5.30, Y1 + 0.52, 0, cedarDark, { solid: true });
  p.box('ext', 0.24, h1 - 1.05, 7.64, -5.30, Y1 + 1.98, 0, agedTimber, { solid: true });
  p.box('ext', 6.50, h1, 0.24, -2.05, mid1, -3.80, agedTimber, { solid: true }); // North-West intact
  p.box('ext', 0.24, 1.65, 3.20, 5.30, Y1 + 0.82, 2.20, weatheredGray, { solid: true }); // SE corner stump

  // 1F Trail-Keeper Shelter Furnishings
  p.box('int', 1.55, 1.12, 0.06, -1.85, Y1 + 1.75, -3.62, mapSign, { uvScale: 0 });       // Summit route map!
  p.box('int', 1.25, 0.96, 0.06, 0.15, Y1 + 1.75, -3.62, noticeMat, { uvScale: 0 });      // Weather warnings
  p.box('int', 0.54, 1.85, 1.85, -4.85, Y1 + 0.92, -2.55, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 0.72, 0.96, -2.45, Y1 + 0.36, -2.75, coarseCanvas, { solid: true });
  p.box('int', 1.25, 0.22, 1.25, -1.55, Y1 + 0.11, -0.35, cutStone, { solid: true });     // Mountain keeper's stone hearth

  // 1F -> 2F Intact West Timber Staircase (X = -4.15, Z: +2.00 -> -1.75, Y1 -> Y2!)
  p.stairRun('int', {
    x0: -4.15, z0: 2.00, x1: -4.15, z1: -1.75, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.06, steps: 14, treadMat: timberDark, stringerMat: timberDark, railMat: warmFloor,
    railLeft: false, railRight: true, closedRisers: false, guardLeft: false, guardRight: true,
  });

  // =========================================================================
  // 4. 2F: SURVIVING WEST WATCHMAN'S LOFT OVERLOOKING THE ROCKFALL CRATER (Y2 = +3.30m)
  // =========================================================================
  const h2 = YTOP - Y2; // 2.80m
  const mid2 = Y2 + h2 * 0.5;

  // Surviving West 2F Loft X ∈ [-5.30, +1.10], Z ∈ [-3.80, +3.80] (stair cutout X ∈ [-5.22, -3.52], Z ∈ [-1.82, +2.08])
  p.box('int', 4.64, 0.16, 7.60, -1.20, Y2 - 0.06, 0, warmFloor);          // Center X∈[-3.52,+1.12]
  p.box('int', 1.80, 0.16, 2.00, -4.40, Y2 - 0.06, -2.80, warmFloor);      // NW Arrival Z∈[-3.80,-1.80]
  p.box('int', 1.80, 0.16, 1.74, -4.40, Y2 - 0.06, 2.94, warmFloor);       // SW Strip Z∈[+2.06,+3.80]
  p.box('int', 3.45, 0.04, 4.65, -1.35, Y2 + 0.03, 0.15, tatamiPlain);
  p.collider(-3.52, 1.10, Y2 - 0.16, Y2 + 0.02, -3.80, 3.80);
  p.collider(-5.30, -3.52, Y2 - 0.16, Y2 + 0.02, -3.80, -1.82);
  p.collider(-5.30, -3.52, Y2 - 0.16, Y2 + 0.02, 2.08, 3.80);
  p.floor(-3.48, 1.06, -3.68, 3.68, Y2 + 0.04);
  p.floor(-5.18, -3.44, -3.68, -1.78, Y2 + 0.04);
  p.floor(-5.18, -3.44, 2.04, 3.68, Y2 + 0.04);

  // Guard Railings (Stairwell + Jagged East Rockfall Crater Overlook at X = +1.05!)
  p.kouranRailing('int', -3.52, -1.82, -3.52, 2.08, Y2, 0.92, timberDark, 0.56);
  p.kouranRailing('int', -5.18, 2.08, -3.52, 2.08, Y2, 0.92, timberDark, 0.48);
  p.kouranRailing('int', 1.05, -3.68, 1.05, 3.68, Y2, 0.88, agedTimber, 0.58);

  // 2F Surviving West Exterior Walls
  p.box('ext', 6.50, 0.88, 0.22, -2.05, Y2 + 0.44, 3.80, whitePlaster, { solid: true });
  p.box('ext', 1.95, h2 - 0.88, 0.22, -4.32, Y2 + 1.84, 3.80, whitePlaster, { solid: true });
  p.box('ext', 2.85, 0.46, 0.22, -1.92, YTOP - 0.23, 3.80, whitePlaster, { solid: true });
  p.box('ext', 2.88, 0.08, 0.26, -1.92, Y2 + 0.90, 3.80, timberDark);
  p.box('ext', 2.88, 0.08, 0.26, -1.92, YTOP - 0.46, 3.80, timberDark);
  p.box('ext', 2.80, 1.44, 0.06, -1.92, Y2 + 1.62, 3.80, glassMat, { uvScale: 0 });
  p.box('ext', 1.72, h2 - 0.88, 0.22, 0.36, Y2 + 1.84, 3.80, whitePlaster, { solid: true });
  p.box('ext', 6.50, h2, 0.22, -2.05, mid2, -3.80, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2, 7.64, -5.30, mid2, 0, whitePlaster, { solid: true });

  // 2F Watchman Furnishings
  p.box('int', 1.55, 0.20, 2.05, -1.65, Y2 + 0.13, -1.45, futonMat, { solid: true, uvScale: 0 });
  p.box('int', 1.32, 1.35, 0.50, -1.65, Y2 + 0.68, 3.35, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 6.35, 0.08, 7.45, -2.10, YTOP - 0.05, 0, agedTimber);

  // =========================================================================
  // 5. SHATTERED CHARCOAL-BROWN HON-GAWARA ROOF (INTACT WEST + ROCKFALL CRATER EAST!)
  // =========================================================================
  const pitch = 0.46;
  const run = 4.65;
  const ridgeY = YTOP + run * Math.tan(pitch) - 0.34; // ~8.05m
  p.kawaraSlope('ext', {
    bottomWidth: 7.40, run, pitch,
    ridgeX: -2.35, ridgeY, ridgeZ: 0, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 7.40, run, pitch,
    ridgeX: -2.35, ridgeY, ridgeZ: 0, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  const gableH = ridgeY - YTOP - 0.06;
  p.gablePrism('ext', 7.60, gableH, 0.22, -5.30, YTOP, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.kawaraRidge('ext', -6.00, ridgeY + 0.04, 0, 1.40, ridgeY - 0.08, 0, kawaraRidge, oniMat, {
    scale: 0.98, courses: 2, oniStart: true, oniEnd: false,
  });

  // 1F Front Entrance Kawara Eave
  p.kawaraSlope('ext', {
    bottomWidth: 6.40, run: 1.25, pitch: 0.36,
    ridgeX: -1.85, ridgeY: Y2 + 0.06, ridgeZ: 3.76, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });

  return p.build({
    id: 'H25',
    name: '沢田小屋（獣道入口・巨大落石直撃半崩壊の二階番小屋）',
    subtitle: '直径3.6m巨大火山落石直撃・粉砕東屋根＆垂木・1F山守番所・2F落石見下ろしロフト',
    category: 'house',
    builtYear: 1891,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1, Y2],
    entryLocal: [-0.95, 0.0, 6.8],
    entryLookLocalYaw: 0,
  });
}
