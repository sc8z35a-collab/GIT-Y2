import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H17: 大野家（1875年築・蔦と苔に呑まれた全壊寸前・傾き二階廃家）— 2階建（重度廃墟）
 * 中段本通り北沢（標高260m）の深い森縁に沈む、黒磯村で最も崩壊が進んだ幻想的な蔦廃墟。
 *  - 外観: 濃密な蔦壁（ivy_dense_wall, ivy_climbing_plaster）・剥離漆喰煉瓦（peeling_plaster_brick）・
 *    傾いた玄関柱＆垂れ下がった正面瓦庇。東半分は屋根と2F床が青空へ大きく陥没！
 *  - 1F (Y=+0.40m): 朽ちた板張りの隙間から土根（root_earth）と苔が這い出し、落下垂木・傾いた箪笥をかわしながら
 *    西木階段で2Fへ安全に昇降可能。
 *  - 2F (Y=+3.30m): 西・北側の残存苔畳座敷と崩落縁の高欄から、青空へ抜けた南東崩壊吹抜と原生林を一望。
 */
export function buildHouse17Ono(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Heavily Overgrown Ivy & Near-Collapsed Ruin Materials ---
  const mossyStone = catalog.getMaterial('ishigaki_mossy', { roughness: 0.95, bumpScale: 0.08 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.92, bumpScale: 0.06 });
  const ivyDense = catalog.getMaterial('ivy_dense_wall', { roughness: 0.94, bumpScale: 0.08 });
  const ivyPlaster = catalog.getMaterial('ivy_climbing_plaster', { roughness: 0.93, bumpScale: 0.06 });
  const peelingBrick = catalog.getMaterial('peeling_plaster_brick', { roughness: 0.94, bumpScale: 0.07 });
  const mossyWall = catalog.getMaterial('mossy_wall_patch', { roughness: 0.95, bumpScale: 0.06 });
  const mossyConc = catalog.getMaterial('mossy_concrete_stain', { roughness: 0.95, bumpScale: 0.06 });
  const rootEarth = catalog.getMaterial('root_earth', { roughness: 0.96, bumpScale: 0.07 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.94, bumpScale: 0.06 });
  const weatheredGray = catalog.getMaterial('weathered_gray_planks', { roughness: 0.93, bumpScale: 0.06 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.88, bumpScale: 0.05 });

  // --- Decayed Interior Props ---
  const tatamiPlain = catalog.getMaterial('tatami_plain', { roughness: 0.95, bumpScale: 0.05, tint: 0xbcb89e });
  const dresserMat = catalog.getMaterial('wooden_dresser', { roughness: 0.88, bumpScale: 0.04 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.86, bumpScale: 0.04 });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.90, bumpScale: 0.04 });
  const slatScreen = catalog.getMaterial('wood_slat_screen', { roughness: 0.88, bumpScale: 0.05 });

  // --- Heavy Moss-Swallowed Broken Black Hon-gawara ---
  const kawaraDeck = catalog.getMaterial('dark_slate', { roughness: 0.84, metalness: 0.10, bumpScale: 0.07, tint: 0x566454 });
  const kawaraRib = catalog.getMaterial('deep_moss', { roughness: 0.92, bumpScale: 0.08, tint: 0x6a7e5c });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.72, metalness: 0.24, tint: 0x4a5248 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.62, metalness: 0.34, tint: 0x3a403a });

  const Y1 = 0.40;
  const Y2 = 3.30;
  const YTOP = 6.10;

  // =========================================================================
  // 1. MOSS-ENGULFED FOUNDATION & LEANING PORCH ENTRY
  // =========================================================================
  p.box('ext', 11.4, 4.20, 8.4, 0, Y1 - 2.14, 0, mossyStone);
  p.stoneSteps('ext', -0.10, 5.25, 3.90, -0.15, Y1, 2.30, 3, stepStone);
  // Visibly leaning porch posts holding the sagging entrance eave!
  p.box('ext', 0.16, 2.80, 0.16, -1.75, Y1 + 1.38, 4.88, timberDark, { rz: 0.08, solid: true });
  p.box('ext', 0.16, 2.80, 0.16, 1.55, Y1 + 1.38, 4.88, timberDark, { rz: 0.09, solid: true });
  // Sagging tilted kawara entrance canopy!
  p.box('ext', 3.90, 0.16, 1.35, -0.10, Y1 + 2.74, 4.48, kawaraDeck, { rx: 0.24, rz: -0.09 });

  // =========================================================================
  // 2. 1F: OVERGROWN IVY RUIN HALL WITH FALLEN RAFTERS & SOIL ENCROACHMENT
  // =========================================================================
  const h1 = Y2 - Y1; // 2.90m
  const mid1 = Y1 + h1 * 0.5;

  p.box('int', 10.6, 0.14, 7.6, 0, Y1 - 0.05, 0, agedTimber);
  p.box('int', 3.4, 0.05, 3.8, 3.2, Y1 + 0.02, 1.4, rootEarth);             // Soil & roots breaking through SE collapse zone!
  p.box('int', 4.2, 0.04, 4.4, -0.2, Y1 + 0.03, -0.8, tatamiPlain);
  p.floor(-5.25, 5.25, -3.78, 4.02, Y1 + 0.04);

  // 1F Exterior Walls (Dense Ivy + Peeling Brick-Plaster! Wide 2.20m Entry X ∈ [-1.20, +1.00])
  p.box('ext', 4.24, h1, 0.24, -3.30, mid1, 3.90, ivyDense, { solid: true });
  p.box('ext', 2.24, 0.66, 0.24, -0.10, Y2 - 0.33, 3.90, peelingBrick, { solid: true });
  p.box('ext', 2.26, 0.09, 0.28, -0.10, Y2 - 0.66, 3.90, timberDark, { rz: -0.04 });
  p.box('ext', 4.44, 1.15, 0.24, 3.20, Y1 + 0.58, 3.90, ivyPlaster, { solid: true });
  p.box('ext', 1.45, h1 - 1.15, 0.24, 1.70, Y1 + 2.02, 3.90, peelingBrick, { solid: true });
  p.box('ext', 1.45, h1 - 1.15, 0.24, 4.70, Y1 + 2.02, 3.90, ivyDense, { solid: true });
  // Broken slat window on SE front
  p.box('ext', 1.55, 1.25, 0.06, 3.20, Y1 + 1.82, 3.90, slatScreen, { rz: 0.08, uvScale: 0 });

  p.box('ext', 10.85, h1, 0.24, 0, mid1, -3.90, ivyDense, { solid: true });
  p.box('ext', 0.24, h1, 7.84, -5.40, mid1, 0, ivyPlaster, { solid: true });
  p.box('ext', 0.24, h1, 7.84, 5.40, mid1, 0, peelingBrick, { solid: true });
  // Creeping interior ivy drapes along North & East walls!
  p.box('int', 8.80, 2.20, 0.10, 0.4, Y1 + 1.35, -3.72, ivyDense);
  p.box('int', 0.10, 2.40, 6.20, 5.22, Y1 + 1.40, 0, ivyPlaster);

  // Fallen Roof Rafters, Shattered Tile Pile & Tilted Furniture in SE Collapse Zone (leaving W/Center path clear!)
  p.box('int', 1.35, 1.05, 0.52, 3.85, Y1 + 0.52, -2.95, dresserMat, { solid: true, rz: -0.14, uvScale: 0 });
  p.box('int', 0.54, 1.75, 1.55, 4.65, Y1 + 0.85, 0.85, rackMat, { solid: true, rx: 0.12, uvScale: 0 });
  p.box('int', 1.85, 0.48, 1.45, 3.45, Y1 + 0.24, 2.25, mossyConc, { solid: true }); // Collapsed plaster rubble mound
  p.box('int', 0.16, 0.16, 4.20, 3.60, Y1 + 1.55, 1.45, timberDark, { rx: 0.52, rz: -0.18 });
  p.box('int', 0.14, 0.14, 3.60, 2.65, Y1 + 1.35, 2.10, agedTimber, { rx: -0.48, rz: 0.15 });

  // 1F -> 2F West Weathered Staircase (X = -4.25, Z: +2.05 -> -1.85, Y1 -> Y2!)
  p.stairRun('int', {
    x0: -4.25, z0: 2.05, x1: -4.25, z1: -1.85, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.08, steps: 14, treadMat: weatheredGray, stringerMat: timberDark, railMat: agedTimber,
    railLeft: false, railRight: true, closedRisers: false, guardLeft: false, guardRight: true,
  });

  // =========================================================================
  // 3. 2F: SURVIVING WEST/NORTH MOSS TATAMI LOFT & OPEN-SKY SE COLLAPSE HOLE!
  // =========================================================================
  const h2 = YTOP - Y2; // 2.80m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Surviving Floor Slabs:
  //   - Stairwell cutout: X ∈ [-5.32, -3.58], Z ∈ [-1.92, +2.14]
  //   - SE Collapse Opening to 1F & Sky: X ∈ [+1.60, +5.40], Z ∈ [-0.40, +3.90]
  p.box('int', 10.80, 0.16, 3.52, 0.0, Y2 - 0.06, -2.14, agedTimber);     // Full North strip Z∈[-3.90,-0.40] (past stair top X>-3.58)
  p.box('int', 5.20, 0.16, 4.32, -1.00, Y2 - 0.06, 1.74, agedTimber);     // South-Center X∈[-3.60,+1.60], Z∈[-0.40,+3.90]
  p.box('int', 1.82, 0.16, 1.98, -4.48, Y2 - 0.06, -2.91, agedTimber);    // NW Arrival Z∈[-3.90,-1.92]
  p.box('int', 1.82, 0.16, 1.76, -4.48, Y2 - 0.06, 3.02, agedTimber);     // SW Strip Z∈[+2.14,+3.90]
  p.box('int', 4.35, 0.04, 3.20, -0.75, Y2 + 0.03, 1.15, tatamiPlain);    // Sunlit mossy 2F tatami!

  // Clean non-overlapping colliders & walkable floor planes
  p.collider(-3.58, 5.40, Y2 - 0.16, Y2 + 0.02, -3.90, -0.40);
  p.collider(-3.58, 1.60, Y2 - 0.16, Y2 + 0.02, -0.40, 3.90);
  p.collider(-5.40, -3.58, Y2 - 0.16, Y2 + 0.02, -3.90, -1.92);
  p.collider(-5.40, -3.58, Y2 - 0.16, Y2 + 0.02, 2.14, 3.90);
  p.floor(-3.52, 5.28, -3.78, -0.42, Y2 + 0.04);
  p.floor(-3.52, 1.56, -0.46, 3.78, Y2 + 0.04);
  p.floor(-5.28, -3.50, -3.78, -1.88, Y2 + 0.04);
  p.floor(-5.28, -3.50, 2.10, 3.78, Y2 + 0.04);

  // Stairwell Guard Railings + Jagged Timber Lip Guarding the SE Collapse Opening!
  p.kouranRailing('int', -3.58, -1.92, -3.58, 2.14, Y2, 0.92, agedTimber, 0.56);
  p.kouranRailing('int', -5.28, 2.14, -3.58, 2.14, Y2, 0.92, agedTimber, 0.48);
  p.kouranRailing('int', 1.60, -0.40, 1.60, 3.78, Y2, 0.86, timberDark, 0.62);
  p.kouranRailing('int', 1.60, -0.40, 5.28, -0.40, Y2, 0.86, timberDark, 0.62);

  // 2F Exterior Walls (Intact West & North, Crumbling Low Parapet on SE Collapse Corner!)
  p.box('ext', 7.10, h2, 0.22, -1.85, mid2, 3.90, ivyPlaster, { solid: true });
  p.box('ext', 3.75, 1.05, 0.22, 3.55, Y2 + 0.52, 3.90, peelingBrick, { solid: true }); // Crumbling SE front!
  p.box('ext', 10.85, h2, 0.22, 0, mid2, -3.90, ivyDense, { solid: true });
  p.box('ext', 0.22, h2, 7.84, -5.40, mid2, 0, ivyDense, { solid: true });
  p.box('ext', 0.22, h2, 3.70, 5.40, mid2, -2.05, mossyWall, { solid: true });
  p.box('ext', 0.22, 1.15, 4.15, 5.40, Y2 + 0.58, 1.85, peelingBrick, { solid: true }); // Crumbling SE side!

  // 2F Tilted Antique Tansu & Exposed Broken Ceiling Joists!
  p.box('int', 1.40, 1.42, 0.52, -0.85, Y2 + 0.72, -3.45, tansuMat, { solid: true, rz: 0.07, uvScale: 0 });
  p.box('int', 1.25, 1.08, 0.50, 3.20, Y2 + 0.54, -3.42, dresserMat, { solid: true, rz: -0.09, uvScale: 0 });

  // =========================================================================
  // 4. BROKEN SWAY-BACKED MOSS-BLACK HON-GAWARA ROOF (EAST HALF TORN OPEN TO SKY!)
  // =========================================================================
  const pitch = 0.46;
  const run = 4.75;
  const ridgeY = YTOP + run * Math.tan(pitch) - 0.34; // ~8.10m
  // Surviving West Half of the Kirizuma Roof (X ∈ [-6.1, +1.5])
  p.kawaraSlope('ext', {
    bottomWidth: 7.70, run, pitch,
    ridgeX: -2.30, ridgeY, ridgeZ: 0, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.40,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 11.4, run, pitch,
    ridgeX: -0.35, ridgeY, ridgeZ: 0, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.40,
  });
  const gableH = ridgeY - YTOP - 0.06;
  p.gablePrism('ext', 7.80, gableH, 0.22, -5.40, YTOP, 0, ivyPlaster, { ry: Math.PI * 0.5 });
  p.kawaraRidge('ext', -6.05, ridgeY + 0.04, 0, 1.65, ridgeY - 0.14, 0, kawaraRidge, oniMat, {
    scale: 0.96, courses: 2, oniStart: true, oniEnd: false,
  });
  // Jagged broken rafters overhanging the open-sky SE roof cavern!
  for (let i = 0; i < 5; i++) {
    const rx = 2.05 + i * 0.76;
    p.box('ext', 0.11, 0.14, 1.85 + (i % 2) * 0.95, rx, ridgeY - 0.65 - i * 0.12, 1.05, timberDark, { rx: 0.54 + (i % 3) * 0.08 });
  }
  p.box('ext', 3.90, 0.18, 0.18, 3.40, ridgeY - 0.35, 0.0, timberDark, { rz: -0.14 });

  return p.build({
    id: 'H17',
    name: '大野家（蔦と苔に呑まれた全壊寸前・傾き二階廃家）',
    subtitle: '濃密蔦壁・剥離煉瓦漆喰・傾き玄関庇・2F南東屋根陥没吹抜・苔黒瓦廃墟',
    category: 'house',
    builtYear: 1875,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1, Y2],
    entryLocal: [-0.10, 0.0, 6.8],
    entryLookLocalYaw: 0,
  });
}
