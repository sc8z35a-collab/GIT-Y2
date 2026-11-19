import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H03: 高木家（船大工のL字二階工房邸・北屋根半崩落）— 1878年（明治11年）築・1985年廃村
 * L字二棟構成：西側＝天井高5.4m吹抜造船工房（北側いぶし瓦屋根陥没＆朽ちた和船肋骨）、
 * 東側＝寄木床茶の間＆2F製図ロフト（健全ないぶし銀錣屋根）
 */
export function buildHouse03Takagi(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // Materials (timber workshop + zinc sheet patches + herringbone living room + collapsed dark kawara)
  const stonePlinth = catalog.getMaterial('ishigaki_rubble', { roughness: 0.95, bumpScale: 0.08 });
  const stepStone = catalog.getMaterial('cracked_concrete', { roughness: 0.93, bumpScale: 0.05 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.92, bumpScale: 0.05 });
  const sidingWood = catalog.getMaterial('horizontal_wood_siding', { roughness: 0.9, bumpScale: 0.05 });
  const zincPatch = catalog.getMaterial('galvanized_sheet', { roughness: 0.58, metalness: 0.52, bumpScale: 0.03 });
  const darkBeam = catalog.getMaterial('charred_cedar', { roughness: 0.92, bumpScale: 0.05 });
  const washiWall = catalog.getMaterial('washi_plaster', { roughness: 0.91, bumpScale: 0.03 });
  const woodchipsFloor = catalog.getMaterial('woodchips', { roughness: 0.95, bumpScale: 0.06 });
  const herringbone = catalog.getMaterial('herringbone_wood', { roughness: 0.80, bumpScale: 0.03 });
  const tatamiMat = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const lightTimber = catalog.getMaterial('warm_wood_plank', { roughness: 0.86, bumpScale: 0.04 });
  const driftwood = catalog.getMaterial('driftwood', { roughness: 0.94, bumpScale: 0.06 });
  const stackedLogs = catalog.getMaterial('stacked_logs', { roughness: 0.93, bumpScale: 0.07 });
  const pegboard = catalog.getMaterial('pegboard', { roughness: 0.86, bumpScale: 0.04 });
  const glassMat = catalog.getMaterial('frosted_grid_window', { roughness: 0.38, opacity: 0.45, transparent: true });
  const doorMat = catalog.getMaterial('door_light_wood', { roughness: 0.86, bumpScale: 0.04 });
  const kitchenCab = catalog.getMaterial('kitchen_cabinet', { roughness: 0.82, bumpScale: 0.03 });
  const sinkMat = catalog.getMaterial('vanity_sink', { roughness: 0.72, bumpScale: 0.03 });
  const bookshelf = catalog.getMaterial('filled_bookshelf', { roughness: 0.84, bumpScale: 0.04 });
  const chalkboard = catalog.getMaterial('chalkboard', { roughness: 0.88, bumpScale: 0.02 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.93, bumpScale: 0.03 });
  const wardrobe = catalog.getMaterial('wardrobe_wood', { roughness: 0.82, bumpScale: 0.04 });
  const mossMat = catalog.getMaterial('deep_moss', { roughness: 0.96, bumpScale: 0.08 });

  // Weathered Ibushi Kawara (いぶし銀瓦 & 苔混じり崩落瓦)
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.80, metalness: 0.12, bumpScale: 0.06, tint: 0xc2c7cd });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.76, metalness: 0.16, bumpScale: 0.05 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.72, metalness: 0.22, bumpScale: 0.04 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.65, metalness: 0.28 });

  const Y1 = 0.40;
  const Y2 = 3.45;
  const YTOP_W = 5.60; // Double-height west workshop eaves
  const YTOP_E = 6.20; // East 2F living wing eaves

  // =========================================================================
  // 1. L-SHAPED FOUNDATION PLINTH & WIDE WORKSHOP RAMP + KITCHEN STEPS
  // =========================================================================
  // West Boat Workshop Plinth: X ∈ [-5.7, -0.1], Z ∈ [-4.5, +4.5]
  p.box('ext', 5.7, 1.0, 9.1, -2.9, Y1 - 0.52, 0, stonePlinth);
  // East Residential Plinth: X ∈ [-0.1, +5.5], Z ∈ [-2.3, +4.3]
  p.box('ext', 5.7, 1.0, 6.7, 2.7, Y1 - 0.52, 1.0, stonePlinth);

  // Wide entry steps into West Boat Workshop (2.4m wide!) and East Kitchen door
  p.stoneSteps('ext', -2.9, 5.55, 4.42, -0.35, Y1, 2.6, 4, stepStone);
  p.stoneSteps('ext', 2.9, 5.25, 4.22, -0.35, Y1, 1.5, 4, stepStone);

  // =========================================================================
  // 2. 1F FLOORS & WALKABLE L-SHAPED PLAN
  // =========================================================================
  // West Workshop Floor (packed woodchips & rain-moss under collapsed north roof)
  p.box('int', 5.4, 0.08, 8.8, -2.9, Y1 - 0.04, 0, woodchipsFloor);
  p.box('int', 3.4, 0.05, 2.8, -3.2, Y1 + 0.01, -2.5, mossMat); // Rain-fed moss pool under sky hole!
  // East Tea Room (Herringbone parquet!) & South Kitchen
  p.box('int', 5.3, 0.10, 6.3, 2.65, Y1 - 0.01, 1.0, herringbone);

  p.floor(-5.45, -0.15, -4.25, 4.45, Y1 + 0.04);
  p.floor(-0.25, 5.25, -2.1, 4.25, Y1 + 0.04);

  // =========================================================================
  // 3. WEST WING: DOUBLE-HEIGHT BOATWRIGHT WORKSHOP (X ∈ [-5.6, -0.2], Z ∈ [-4.4, +4.4])
  // =========================================================================
  const hW = YTOP_W - Y1; // 5.20m soaring interior height!
  const midW = Y1 + hW * 0.5;

  // Front Workshop Wall (+Z = +4.4): HUGE 2.4m double barn doorway at X ∈ [-4.1, -1.7]
  p.box('ext', 1.55, hW, 0.22, -4.85, midW, 4.4, agedTimber, { solid: true });
  p.box('ext', 1.55, hW, 0.22, -0.95, midW, 4.4, agedTimber, { solid: true });
  p.box('ext', 2.45, 2.35, 0.22, -2.90, Y1 + 4.02, 4.4, agedTimber, { solid: true });
  // Swung-open barn door leaves flanking the big entrance!
  p.box('ext', 0.08, 2.75, 1.18, -4.18, Y1 + 1.38, 4.95, doorMat, { ry: -0.35, uvScale: 0 });
  p.box('ext', 0.08, 2.75, 1.18, -1.62, Y1 + 1.38, 4.95, doorMat, { ry: 0.35, uvScale: 0 });

  // West Workshop Wall (-X = -5.6) with galvanized zinc repair patches & high clerestory windows
  p.box('ext', 0.22, hW, 8.95, -5.6, midW, 0, agedTimber, { solid: true });
  p.box('ext', 0.06, 2.2, 3.4, -5.73, Y1 + 1.4, -1.5, zincPatch);
  p.box('ext', 0.06, 1.8, 2.6, -5.73, Y1 + 3.2, 2.1, zincPatch);

  // North Workshop Wall (-Z = -4.4) — partially jagged/weathered where north roof collapsed
  p.box('ext', 5.5, hW - 0.55, 0.22, -2.9, midW - 0.28, -4.4, agedTimber, { solid: true });
  p.box('ext', 2.4, 1.35, 0.06, -3.2, Y1 + 1.8, -4.53, mossMat);

  // East wall of north projection (X = -0.2, Z ∈ [-4.4, -2.2])
  p.box('ext', 0.22, hW, 2.3, -0.2, midW, -3.3, agedTimber, { solid: true });

  // Heavy exposed cedar workshop trusses & posts (northern trusses snapped!)
  for (const tz of [3.2, 1.4, -0.4]) {
    p.box('int', 5.3, 0.22, 0.20, -2.9, YTOP_W - 0.16, tz, darkBeam);
  }
  // Snapped hanging rafters plunging down into the northern boat workshop!
  p.box('int', 3.4, 0.16, 0.16, -3.4, YTOP_W - 1.15, -2.2, darkBeam, { rz: 0.58, ry: 0.15 });
  p.box('int', 3.2, 0.14, 0.14, -2.3, YTOP_W - 1.45, -2.9, darkBeam, { rz: -0.64, ry: -0.12 });
  p.box('int', 2.8, 0.14, 0.14, -3.8, Y1 + 1.15, -3.4, darkBeam, { rz: 0.42, ry: 0.25 });

  // CENTERPIECE: Half-Built Traditional Japanese Wooden Boat Hull (和船の竜骨と肋骨) at X=-3.4, Z=-0.6!
  // Sawhorses
  p.box('int', 1.35, 0.65, 0.18, -3.4, Y1 + 0.32, 1.0, driftwood);
  p.box('int', 1.35, 0.65, 0.18, -3.4, Y1 + 0.32, -2.2, driftwood);
  // Central keel beam (竜骨)
  p.box('int', 0.24, 0.22, 4.9, -3.4, Y1 + 0.72, -0.6, lightTimber, { solid: true });
  // Prow stem post angled up at south bow
  p.box('int', 0.20, 1.35, 0.22, -3.4, Y1 + 1.25, 1.92, lightTimber, { rx: 0.42 });
  // 7 pairs of curved boat ribs (肋骨) + side gunwale strakes!
  for (let r = 0; r < 7; r++) {
    const rz = -2.4 + r * 0.62;
    const widthScale = 0.55 + Math.sin(((r + 0.5) / 7) * Math.PI) * 0.55;
    const halfSpan = 0.78 * widthScale;
    p.box('int', halfSpan, 0.10, 0.09, -3.4 - halfSpan * 0.5, Y1 + 0.85, rz, driftwood, { rz: -0.25 });
    p.box('int', halfSpan, 0.10, 0.09, -3.4 + halfSpan * 0.5, Y1 + 0.85, rz, driftwood, { rz: 0.25 });
    p.box('int', 0.10, 0.72, 0.09, -3.4 - halfSpan - 0.14, Y1 + 1.22, rz, driftwood, { rz: 0.22 });
    p.box('int', 0.10, 0.72, 0.09, -3.4 + halfSpan + 0.14, Y1 + 1.22, rz, driftwood, { rz: -0.22 });
  }
  // Boatwright's Planing Workbench, Pegboard Tool Wall & Stacked Cedar Logs along West Wall
  p.box('int', 0.78, 0.86, 2.8, -5.05, Y1 + 0.43, 1.4, lightTimber, { solid: true });
  p.box('int', 0.06, 1.35, 2.4, -5.45, Y1 + 1.65, 1.4, pegboard, { uvScale: 0 });
  p.box('int', 0.95, 0.88, 2.2, -4.95, Y1 + 0.44, -2.5, stackedLogs, { solid: true, uvScale: 0 });
  // Fallen dark kawara rubble chunks on north workshop floor
  p.box('int', 0.85, 0.22, 0.75, -2.1, Y1 + 0.12, -3.3, kawaraDeck, { ry: 0.4, rx: 0.18 });
  p.box('int', 0.65, 0.18, 0.55, -2.9, Y1 + 0.10, -3.7, kawaraRib, { ry: -0.5, rz: 0.22 });

  // =========================================================================
  // 4. SHARED DIVIDING WALL (X = -0.2) & OPEN WORKSHOP STAIRCASE (1F -> 2F)
  // =========================================================================
  // 1F wall between Workshop and East Tea Room (wide doorway at Z ∈ [+1.2, +2.7])
  const h1 = Y2 - Y1;
  const mid1 = Y1 + h1 * 0.5;
  p.box('int', 0.18, h1, 3.4, -0.2, mid1, -0.5, agedTimber, { solid: true });
  p.box('int', 0.18, 0.75, 1.55, -0.2, Y1 + 2.65, 1.95, agedTimber, { solid: true });
  p.box('int', 0.18, h1, 1.65, -0.2, mid1, 3.55, agedTimber, { solid: true });

  // Open timber staircase rising along West face of X = -0.2 (at X = -0.88, Z: +2.3 -> -1.4, Y1 -> Y2)
  // Top landing turns EAST right into the 2F Drafting Loft over X ∈ [-1.5, +0.4], Z ∈ [-2.0, -1.0]!
  p.stairRun('int', {
    x0: -0.88,
    z0: 2.35,
    x1: -0.88,
    z1: -1.35,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.12,
    steps: 14,
    treadMat: lightTimber,
    stringerMat: darkBeam,
    railMat: darkBeam,
    railLeft: true,
    railRight: false,
    guardLeft: true,
    guardRight: false,
  });
  // Top 2F wooden cantilever landing deck connecting stair top straight into East 2F Loft!
  p.box('int', 1.48, 0.16, 1.35, -0.88, Y2 - 0.06, -1.92, lightTimber);
  p.floor(-1.58, 0.05, -2.52, -1.25, Y2 + 0.04);
  p.box('int', 0.08, 0.94, 1.35, -1.58, Y2 + 0.47, -1.92, darkBeam, { solid: true });
  p.box('int', 1.45, 0.94, 0.08, -0.88, Y2 + 0.47, -2.55, darkBeam, { solid: true });

  // =========================================================================
  // 5. EAST WING: 1F TEA ROOM & KITCHEN (X ∈ [-0.2, +5.4], Z ∈ [-2.2, +4.2])
  // =========================================================================
  // Front 1F (+Z = +4.2): kitchen entrance at X ∈ [2.2, 3.6]
  p.box('ext', 2.45, h1, 0.22, 1.0, mid1, 4.2, sidingWood, { solid: true });
  p.box('ext', 1.45, 0.78, 0.22, 2.9, Y1 + 2.66, 4.2, sidingWood, { solid: true });
  p.box('ext', 1.85, h1, 0.22, 4.5, mid1, 4.2, sidingWood, { solid: true });
  // East 1F (+X = +5.4) with tea-room window
  p.box('ext', 0.22, h1, 2.2, 5.4, mid1, -1.1, sidingWood, { solid: true });
  p.box('ext', 0.22, 0.90, 2.2, 5.4, Y1 + 0.45, 1.1, sidingWood, { solid: true });
  p.box('ext', 0.22, 0.75, 2.2, 5.4, Y1 + 2.67, 1.1, sidingWood, { solid: true });
  p.box('ext', 0.06, 1.38, 2.16, 5.4, Y1 + 1.58, 1.1, glassMat, { uvScale: 0 });
  p.box('ext', 0.22, h1, 2.1, 5.4, mid1, 3.25, sidingWood, { solid: true });
  // North 1F (-Z = -2.2)
  p.box('ext', 5.65, h1, 0.22, 2.6, mid1, -2.2, sidingWood, { solid: true });

  // East 1F Furniture: Bookshelf, low wooden table, kitchen cabinet & sink
  p.box('int', 1.55, 1.82, 0.48, 2.4, Y1 + 0.91, -1.82, bookshelf, { solid: true, uvScale: 0 });
  p.box('int', 1.45, 0.42, 0.92, 2.5, Y1 + 0.24, 0.55, darkBeam, { solid: true });
  p.box('int', 1.45, 0.88, 0.62, 4.5, Y1 + 0.44, 2.9, kitchenCab, { solid: true, uvScale: 0 });
  p.box('int', 0.85, 0.88, 0.58, 0.75, Y1 + 0.44, 3.72, sinkMat, { solid: true, uvScale: 0 });

  // =========================================================================
  // 6. EAST WING 2F: BOATWRIGHT DRAFTING LOFT & 6-MAT BEDROOM (Y = +3.45m)
  // =========================================================================
  const h2 = YTOP_E - Y2; // 2.75m
  const mid2 = Y2 + h2 * 0.5;

  p.box('int', 5.55, 0.16, 6.35, 2.6, Y2 - 0.06, 1.0, lightTimber);
  p.box('int', 5.2, 0.04, 3.0, 2.6, Y2 + 0.03, 2.55, tatamiMat); // South bedroom tatami
  p.collider(-0.2, 5.4, Y2 - 0.16, Y2 + 0.02, -2.2, 4.2);
  p.floor(-0.2, 5.25, -2.05, 4.05, Y2 + 0.04);

  // West Loft Overlook Edge (X = -0.2): open entry from landing at Z ∈ [-2.2, -1.0],
  // plus OPEN WAIST-HIGH BALUSTRADE at Z ∈ [-1.0, +1.2] looking right down onto the wooden boat ribs!!
  p.box('int', 0.12, 0.94, 2.25, -0.2, Y2 + 0.47, 0.12, darkBeam, { solid: true });
  p.box('ext', 0.22, h2, 3.05, -0.2, mid2, 2.75, washiWall, { solid: true });

  // East 2F Outer Walls (Washi Plaster)
  p.box('ext', 5.65, h2, 0.22, 2.6, mid2, -2.2, washiWall, { solid: true });
  p.box('ext', 1.6, h2, 0.22, 0.6, mid2, 4.2, washiWall, { solid: true });
  p.box('ext', 2.4, 0.85, 0.22, 2.6, Y2 + 0.42, 4.2, washiWall, { solid: true });
  p.box('ext', 2.4, 0.62, 0.22, 2.6, Y2 + 2.44, 4.2, washiWall, { solid: true });
  p.box('ext', 2.36, 1.28, 0.06, 2.6, Y2 + 1.48, 4.2, glassMat, { uvScale: 0 });
  p.box('ext', 1.6, h2, 0.22, 4.6, mid2, 4.2, washiWall, { solid: true });
  p.box('ext', 0.22, h2, 6.45, 5.4, mid2, 1.0, washiWall, { solid: true });

  // 2F Ceiling & Loft Furniture (Drafting desk, ship-plan chalkboard, bedroom futon & wardrobe)
  p.box('int', 5.5, 0.12, 6.3, 2.6, YTOP_E - 0.06, 1.0, lightTimber);
  p.collider(-0.2, 5.4, YTOP_E - 0.12, YTOP_E + 0.1, -2.2, 4.2);

  p.box('int', 1.95, 0.82, 0.95, 3.6, Y2 + 0.41, -1.25, lightTimber, { solid: true }); // Drafting desk
  p.box('int', 2.2, 1.25, 0.06, 3.4, Y2 + 1.68, -2.04, chalkboard, { uvScale: 0 });   // Ship hull plan chalkboard
  p.box('int', 1.45, 0.14, 1.95, 3.7, Y2 + 0.10, 2.65, futonMat, { uvScale: 0 });
  p.box('int', 1.15, 1.78, 0.56, 0.95, Y2 + 0.89, 3.72, wardrobe, { solid: true, uvScale: 0 });

  // =========================================================================
  // 7. TRADITIONAL KAWARA ROOFS: COLLAPSED WEST KIRIZUMA + INTACT EAST SHIKORO (錣屋根)
  // =========================================================================
  // 7A. West Workshop Roof — SOUTHERN HALF INTACT, NORTHERN HALF CAVED IN WITH MISSING RIBS!
  const wPitch = 0.50;
  const wRun = 3.55;
  const wRidgeY = YTOP_W - 0.12 + wRun * Math.tan(wPitch); // ~7.42m

  // Intact Southern Half of West Workshop Roof (Z ∈ [-0.4, +5.1] -> center Z = +2.35, width = 5.5m)
  p.kawaraSlope('ext', {
    bottomWidth: 5.6,
    run: wRun,
    pitch: wPitch,
    ridgeX: -2.9,
    ridgeY: wRidgeY,
    ridgeZ: 2.35,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: darkBeam,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 5.6,
    run: wRun,
    pitch: wPitch,
    ridgeX: -2.9,
    ridgeY: wRidgeY,
    ridgeZ: 2.35,
    downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: darkBeam,
    ribSpacing: 0.38,
  });
  // Front gable triangle (+Z = +4.4)
  p.gablePrism('ext', 5.6, wRidgeY - YTOP_W + 0.14, 0.22, -2.9, YTOP_W - 0.06, 4.4, agedTimber);

  // Storm-Damaged Sagging Northern Workshop Roof Stub (only outer west edge remains, huge open sky hole over boat!)
  p.kawaraSlope('ext', {
    bottomWidth: 4.5,
    run: 1.55,
    pitch: 0.68,
    ridgeX: -4.65,
    ridgeY: YTOP_W + 0.72,
    ridgeZ: -2.65,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: darkBeam,
    ribSpacing: 0.42,
    skipRibPredicate: (_u, idx) => idx % 3 === 1, // Broken missing tiles!
  });
  // Broken Main Ridge stopping abruptly at the northern collapse break (with Onigawara on intact south front!)
  p.kawaraRidge('ext', -2.9, wRidgeY + 0.04, -0.35, -2.9, wRidgeY + 0.04, 5.05, kawaraRidge, oniMat, {
    scale: 1.02,
    oniStart: false,
    oniEnd: true,
    courses: 2,
  });

  // 7B. East 2F Living Wing — Intact Traditional Ibushi-gin Shikoro-yane (いぶし銀錣屋根: steep upper + flared lower skirt!)
  const ePitchUp = 0.56;
  const ePitchLow = 0.34;
  const eRunUp = 2.15;
  const eRidgeY = YTOP_E + 0.45 + eRunUp * Math.tan(ePitchUp); // ~8.00m

  // Upper steep slopes (east & west)
  p.kawaraSlope('ext', {
    bottomWidth: 7.4,
    run: eRunUp,
    pitch: ePitchUp,
    ridgeX: 2.6,
    ridgeY: eRidgeY,
    ridgeZ: 1.0,
    downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: darkBeam,
    ribSpacing: 0.36,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 7.4,
    run: eRunUp,
    pitch: ePitchUp,
    ridgeX: 2.6,
    ridgeY: eRidgeY,
    ridgeZ: 1.0,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: darkBeam,
    ribSpacing: 0.36,
  });
  // Lower flared Shikoro eave skirt on East, South, and North!
  p.kawaraSlope('ext', {
    bottomWidth: 7.8,
    run: 1.75,
    pitch: ePitchLow,
    ridgeX: 4.65,
    ridgeY: YTOP_E + 0.52,
    ridgeZ: 1.0,
    downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: darkBeam,
    ribSpacing: 0.36,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 6.4,
    run: 1.15,
    pitch: ePitchLow,
    ridgeX: 2.6,
    ridgeY: Y2 + 0.14,
    ridgeZ: 4.25,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: darkBeam,
    ribSpacing: 0.36,
  });
  // Gables & Ridge with twin horned Onigawara on East Wing
  p.gablePrism('ext', 5.6, eRidgeY - YTOP_E + 0.12, 0.22, 2.6, YTOP_E - 0.06, 4.2, washiWall);
  p.gablePrism('ext', 5.6, eRidgeY - YTOP_E + 0.12, 0.22, 2.6, YTOP_E - 0.06, -2.2, washiWall);
  p.kawaraRidge('ext', 2.6, eRidgeY + 0.05, -2.65, 2.6, eRidgeY + 0.05, 4.65, kawaraRidge, oniMat, {
    scale: 1.05,
    oniStart: true,
    oniEnd: true,
    courses: 3,
  });

  return p.build({
    id: site.id,
    name: '高木家（船大工のL字二階工房邸）',
    subtitle: '明治11年築・吹抜造船工房（北屋根半崩落・和船肋骨）＆いぶし銀錣屋根・二階建',
    category: 'house',
    builtYear: 1878,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1 + 0.04, Y2 + 0.04],
    entryLocal: [-2.9, 0.0, 6.6],
  });
}
