import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H18: 杉山家（1887年築・山奥林道入口 ノッチ丸太組木こりの二階小屋）— 2階建
 * 中段〜黒磯林道入口の深い杉林縁（標高266m）に建つ、島唯一の本格「丸太組（校倉交差）木こり小屋」。
 *  - 外壁: 樹皮付き丸太（tree_bark）を水平に段積みし、四隅で45cm突き出して組んだ本物の立体丸太組壁！
 *  - 南西軒下: 割薪を山積みした薪棚＆製材丸太の作業庇・有孔ボード工具壁。
 *  - 1F (Y=+0.45m): 石台座の鉄製薪ストーブ＆2F屋根を貫く黒煙突、温もりある厚板床、囲炉裏畳休み場、丸太手刻み階段。
 *  - 2F (Y=+3.45m): 露出丸太母屋の山林見張りロフト＆正面切妻バルコニー。急勾配スレート瓦切妻屋根！
 */
export function buildHouse18Sugiyama(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Stacked-Log Woodcutter's Cabin Materials ---
  const rubbleStone = catalog.getMaterial('ishigaki_rubble', { roughness: 0.94, bumpScale: 0.08 });
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const logBark = catalog.getMaterial('tree_bark', { roughness: 0.94, bumpScale: 0.08 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.90, bumpScale: 0.05 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.82, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.80, bumpScale: 0.03 });
  const ironStove = catalog.getMaterial('matte_black_metal', { roughness: 0.56, metalness: 0.52 });
  const galvFlash = catalog.getMaterial('galvanized_zinc', { roughness: 0.62, metalness: 0.44 });

  // --- Woodcutter Interior & Shed Materials ---
  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.30, opacity: 0.34, transparent: true });
  const pegboardMat = catalog.getMaterial('pegboard', { roughness: 0.84, bumpScale: 0.04 });
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const cabMat = catalog.getMaterial('kitchen_cabinet', { roughness: 0.82, bumpScale: 0.03 });
  const dresserMat = catalog.getMaterial('wooden_dresser', { roughness: 0.82, bumpScale: 0.03 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.92, bumpScale: 0.03 });
  const coarseCanvas = catalog.getMaterial('coarse_canvas', { roughness: 0.95, bumpScale: 0.05, doubleSide: true });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });

  // --- Steep Alpine Woodcutter Slate-Brown Hon-gawara (山小屋風焦茶スレート瓦) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.74, metalness: 0.16, bumpScale: 0.06, tint: 0x7e6d5e });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.70, metalness: 0.20, bumpScale: 0.05, tint: 0x6a5a4d });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.62, metalness: 0.30, tint: 0x584a40 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.54, metalness: 0.40, tint: 0x483e36 });

  const Y1 = 0.45;
  const Y2 = 3.45;
  const YTOP = 6.35;

  // =========================================================================
  // 1. FIELDSTONE CABIN BASE, FIREWOOD LEAN-TO SHED & FRONT PORCH STEPS
  // =========================================================================
  p.box('ext', 12.2, 3.80, 9.0, 0, Y1 - 1.94, 0, rubbleStone);
  p.box('ext', 3.4, 0.12, 1.40, 0.05, Y1 - 0.02, 4.75, warmFloor);
  p.floor(-1.60, 1.70, 4.02, 5.45, Y1 + 0.04);
  p.stoneSteps('ext', 0.05, 6.25, 5.35, -0.15, Y1, 2.35, 3, stepStone);
  p.cyl('ext', 0.14, 0.16, 2.95, 8, -1.55, Y1 + 1.48, 5.35, logBark);
  p.cyl('ext', 0.14, 0.16, 2.95, 8, 1.65, Y1 + 1.48, 5.35, logBark);

  // ★ WEST ATTACHED FIREWOOD & SAW-LOG LEAN-TO SHED (X ∈ [-7.6, -5.7], Z ∈ [-3.2, +3.2]!)
  p.box('ext', 2.0, 1.60, 6.8, -6.70, Y1 - 0.84, 0, rubbleStone);
  for (const lz of [-3.1, 0.0, 3.1]) {
    p.cyl('ext', 0.12, 0.14, 2.70, 8, -7.55, Y1 + 1.35, lz, logBark);
  }
  p.box('ext', 2.40, 0.12, 7.10, -6.70, Y1 + 2.80, 0, galvFlash, { rz: 0.24 }); // Corrugated shed lean-to roof
  // Stacked Firewood Cords & Giant Felled Cedar Saw-Log on Sawhorses!
  for (let row = 0; row < 4; row++) {
    for (let k = 0; k < 5; k++) {
      p.cyl('ext', 0.14, 0.15, 1.15, 7, -6.55, Y1 + 0.15 + row * 0.28, -2.55 + k * 0.30, logBark, { rz: Math.PI * 0.5 });
    }
  }
  p.cyl('ext', 0.32, 0.38, 3.20, 10, -6.70, Y1 + 0.86, 1.45, logBark, { rx: Math.PI * 0.5 }); // Giant felled saw-log!
  p.box('ext', 0.10, 1.15, 1.65, -5.92, Y1 + 1.65, 1.45, pegboardMat, { uvScale: 0 });       // Outdoor axe/saw pegboard!

  // =========================================================================
  // 2. ★ AUTHENTIC 3D STACKED-LOG WALLS WITH PROJECTING NOTCHED CORNERS (校倉丸太組!)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.00m
  const h2 = YTOP - Y2; // 2.90m

  // Helper to stack authentic cylindrical logs along X (with +0.46m corner overhang on both ends!)
  const logCourseX = (x0: number, x1: number, z: number, y: number) => {
    const len = x1 - x0;
    p.cyl('ext', 0.175, 0.175, len, 8, (x0 + x1) * 0.5, y, z, logBark, { rz: Math.PI * 0.5 });
  };
  const logCourseZ = (z0: number, z1: number, x: number, y: number) => {
    const len = z1 - z0;
    p.cyl('ext', 0.175, 0.175, len, 8, x, y, (z0 + z1) * 0.5, logBark, { rx: Math.PI * 0.5 });
  };

  // Back (-Z=-4.10), West (-X=-5.70), East (+X=+5.70) full 2-story stacked notched log walls!
  // 19 courses from Y1+0.15 up to YTOP-0.05 (spacing 0.31m; X & Z staggered by 0.155m for true cabin interlocking!)
  for (let c = 0; c < 19; c++) {
    const yX = Y1 + 0.16 + c * 0.31;
    const yZ = Y1 + 0.315 + c * 0.31;
    // Back Wall (-Z = -4.10) — solid continuous 12.32m logs with 0.46m projecting corners!
    logCourseX(-6.16, 6.16, -4.10, yX);
    // West & East Side Walls (X = ±5.70) — staggered 9.12m logs with 0.46m projecting corners!
    if (yZ < YTOP) {
      logCourseZ(-4.56, 4.56, -5.70, yZ);
      logCourseZ(-4.56, 4.56, 5.70, yZ);
    }
    // Front Wall (+Z = +4.10) with clean doorways & timber-framed windows!
    if (yX < Y1 + 2.30) {
      // 1F Front Doorway X ∈ [-1.00, +1.10] (2.10m wide) + flanking windows at Y∈[Y1+1.05..Y1+2.25]
      if (yX > Y1 + 1.00 && yX < Y1 + 2.25) {
        logCourseX(-6.16, -4.55, 4.10, yX);
        logCourseX(-2.35, -1.00, 4.10, yX);
        logCourseX(1.10, 2.35, 4.10, yX);
        logCourseX(4.55, 6.16, 4.10, yX);
      } else {
        logCourseX(-6.16, -1.00, 4.10, yX);
        logCourseX(1.10, 6.16, 4.10, yX);
      }
    } else if (yX < Y2 + 0.10) {
      // Continuous heavy log lintel belt between 1F and 2F!
      logCourseX(-6.16, 6.16, 4.10, yX);
    } else if (yX < Y2 + 2.25) {
      // 2F Front Balcony Door X ∈ [-0.90, +0.90] (1.80m wide) + flanking loft windows
      if (yX > Y2 + 0.90 && yX < Y2 + 2.15) {
        logCourseX(-6.16, -4.45, 4.10, yX);
        logCourseX(-2.25, -0.90, 4.10, yX);
        logCourseX(0.90, 2.25, 4.10, yX);
        logCourseX(4.45, 6.16, 4.10, yX);
      } else {
        logCourseX(-6.16, -0.90, 4.10, yX);
        logCourseX(0.90, 6.16, 4.10, yX);
      }
    } else {
      // Upper tie-log belt
      logCourseX(-6.16, 6.16, 4.10, yX);
    }
  }

  // Exact structural colliders & framed window glass panes for the stacked log walls
  p.collider(-5.86, 5.86, Y1, YTOP, -4.28, -3.92); // Back wall
  p.collider(-5.86, -5.54, Y1, YTOP, -4.28, 4.28); // West wall
  p.collider(5.54, 5.86, Y1, YTOP, -4.28, 4.28);   // East wall
  // Front 1F wall colliders (leaving doorway X ∈ [-1.00, +1.10] open)
  p.collider(-5.86, -1.00, Y1, Y2, 3.92, 4.28);
  p.collider(1.10, 5.86, Y1, Y2, 3.92, 4.28);
  // Front 2F wall colliders (leaving balcony door X ∈ [-0.90, +0.90] open)
  p.collider(-5.86, -0.90, Y2, YTOP, 3.92, 4.28);
  p.collider(0.90, 5.86, Y2, YTOP, 3.92, 4.28);
  // Framed Front 1F & 2F Window Panes + Jambs
  for (const wx of [-3.45, 3.45]) {
    p.box('ext', 2.22, 0.09, 0.36, wx, Y1 + 1.00, 4.10, timberDark);
    p.box('ext', 2.22, 0.09, 0.36, wx, Y1 + 2.26, 4.10, timberDark);
    p.box('ext', 2.18, 1.24, 0.06, wx, Y1 + 1.63, 4.10, glassMat, { uvScale: 0 });
  }
  for (const wx of [-3.35, 3.35]) {
    p.box('ext', 2.22, 0.09, 0.36, wx, Y2 + 0.90, 4.10, timberDark);
    p.box('ext', 2.22, 0.09, 0.36, wx, Y2 + 2.16, 4.10, timberDark);
    p.box('ext', 2.18, 1.24, 0.06, wx, Y2 + 1.53, 4.10, glassMat, { uvScale: 0 });
  }
  // Doorway timber jambs
  for (const dx of [-1.02, 1.12]) p.box('ext', 0.12, 2.34, 0.38, dx, Y1 + 1.17, 4.10, timberDark);
  for (const dx of [-0.92, 0.92]) p.box('ext', 0.12, 2.28, 0.38, dx, Y2 + 1.14, 4.10, timberDark);

  // =========================================================================
  // 3. 1F: WOODCUTTER'S HEARTH HALL, POTBELLY WOOD STOVE & HAND-HEWN LOG STAIR
  // =========================================================================
  p.box('int', 11.2, 0.14, 8.0, 0, Y1 - 0.05, 0, warmFloor);
  p.box('int', 4.4, 0.04, 4.4, -2.6, Y1 + 0.03, -1.2, tatamiBord);
  p.box('int', 1.15, 0.03, 0.68, 0.05, Y1 + 0.04, 3.65, coirMat, { uvScale: 0 });
  p.floor(-5.55, 5.55, -3.95, 4.18, Y1 + 0.04);

  // ★ CAST-IRON WOOD-BURNING STOVE ON STONE HEARTH + BLACK FLUE STACK RISING THROUGH 2F & ROOF!
  p.box('int', 1.55, 0.14, 1.55, -0.65, Y1 + 0.07, -1.65, cutStone, { solid: true });
  p.cyl('int', 0.36, 0.40, 0.92, 10, -0.65, Y1 + 0.60, -1.65, ironStove);
  p.collider(-1.10, -0.20, Y1, Y1 + 1.15, -2.10, -1.20);
  // Continuous vertical stove flue rising straight from 1F stove through 2F up through the roof!
  p.cyl('ext', 0.13, 0.13, 8.60, 8, -0.65, Y1 + 5.25, -1.65, ironStove);
  p.cyl('ext', 0.24, 0.24, 0.12, 8, -0.65, Y1 + 9.55, -1.65, ironStove); // Rain cap!

  // 1F Cabin Furnishings
  p.box('int', 1.55, 0.76, 0.92, -3.45, Y1 + 0.38, 1.35, timberDark, { solid: true });
  p.box('int', 1.62, 0.06, 0.98, -3.45, Y1 + 0.78, 1.35, warmFloor, { solid: true }); // Heavy woodcutter table
  p.box('int', 0.60, 0.07, 0.60, -2.6, Y1 + 0.07, -2.4, zabutonMat, { uvScale: 0 });
  p.box('int', 1.45, 1.80, 0.54, 1.85, Y1 + 0.90, -3.65, cabMat, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 0.72, 1.05, -4.65, Y1 + 0.36, -3.15, coarseCanvas, { solid: true });

  // 1F -> 2F East Hand-Hewn Open-Riser Log Staircase (X = +4.45, Z: +2.10 -> -1.90, Y1 -> Y2!)
  p.stairRun('int', {
    x0: 4.45, z0: 2.10, x1: 4.45, z1: -1.90, y0: Y1 + 0.04, y1: Y2 + 0.04,
    width: 1.10, steps: 14, treadMat: warmFloor, stringerMat: timberDark, railMat: logBark,
    railLeft: true, railRight: false, closedRisers: false, guardLeft: true, guardRight: false,
  });

  // =========================================================================
  // 4. 2F: WOODCUTTER'S GABLE LOG LOFT & FOREST-VIEW BALCONY (Y2 = +3.45m)
  // =========================================================================
  // 2F Floor Slabs (cutout X ∈ [+3.78, +5.60], Z ∈ [-1.98, +2.18])
  p.box('int', 9.48, 0.16, 8.15, -0.96, Y2 - 0.06, 0, oakFloor);           // Main X∈[-5.70,+3.78]
  p.box('int', 1.94, 0.16, 2.15, 4.74, Y2 - 0.06, -3.04, oakFloor);        // NE Arrival Z∈[-4.10,-1.96]
  p.box('int', 1.94, 0.16, 1.96, 4.74, Y2 - 0.06, 3.14, oakFloor);         // SE Strip Z∈[+2.16,+4.10]
  p.collider(-5.70, 3.78, Y2 - 0.16, Y2 + 0.02, -4.10, 4.10);
  p.collider(3.78, 5.70, Y2 - 0.16, Y2 + 0.02, -4.10, -1.98);
  p.collider(3.78, 5.70, Y2 - 0.16, Y2 + 0.02, 2.18, 4.10);
  p.floor(-5.55, 3.74, -3.95, 4.15, Y2 + 0.04);
  p.floor(3.70, 5.55, -3.95, -1.92, Y2 + 0.04);
  p.floor(3.70, 5.55, 2.14, 3.95, Y2 + 0.04);

  p.kouranRailing('int', 3.78, -1.98, 3.78, 2.18, Y2, 0.94, timberDark, 0.56);
  p.kouranRailing('int', 3.78, 2.18, 5.55, 2.18, Y2, 0.94, timberDark, 0.48);

  // ★ 2F FRONT LOG-CABIN BALCONY OVERLOOKING DEEP CEDAR FOREST (X ∈ [-3.2, +3.2], Z ∈ [+4.1, +5.25])!
  p.box('ext', 6.50, 0.16, 1.20, 0.0, Y2 - 0.04, 4.68, warmFloor);
  p.kouranRailing('ext', -3.22, 5.24, 3.22, 5.24, Y2, 0.94, timberDark, 0.54);
  p.kouranRailing('ext', -3.22, 4.10, -3.22, 5.24, Y2, 0.94, timberDark, 0.48);
  p.kouranRailing('ext', 3.22, 4.10, 3.22, 5.24, Y2, 0.94, timberDark, 0.48);
  p.floor(-3.12, 3.12, 4.02, 5.16, Y2 + 0.04);

  // 2F Loft Furnishings & Exposed Heavy Cedar Purlins!
  p.box('int', 1.65, 0.20, 2.15, -3.45, Y2 + 0.13, -1.75, futonMat, { solid: true, uvScale: 0 });
  p.box('int', 1.35, 1.15, 0.52, -3.55, Y2 + 0.58, 3.35, dresserMat, { solid: true, uvScale: 0 });
  p.box('int', 2.25, 0.55, 0.85, 1.65, Y2 + 0.28, -3.45, agedTimber, { solid: true }); // Stacked seasoned planks
  for (const pz of [-2.2, 0.0, 2.2]) {
    p.cyl('int', 0.14, 0.14, 11.2, 8, 0, YTOP + (pz === 0 ? 1.85 : 0.72), pz, logBark, { rz: Math.PI * 0.5 });
  }

  // =========================================================================
  // 5. STEEP ALPINE WOODCUTTER'S KIRIZUMA SLATE-HON-GAWARA ROOF (急勾配山小屋切妻!)
  // =========================================================================
  const pitch = 0.54;
  const run = 5.45;
  const ridgeY = YTOP + run * Math.tan(pitch) - 0.52; // ~9.10m
  p.kawaraSlope('ext', {
    bottomWidth: 13.4, run, pitch,
    ridgeX: 0, ridgeY, ridgeZ: 0, downslopeYaw: 0,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 13.4, run, pitch,
    ridgeX: 0, ridgeY, ridgeZ: 0, downslopeYaw: Math.PI,
    tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, ribSpacing: 0.38,
  });
  const gableH = ridgeY - YTOP - 0.08;
  p.gablePrism('ext', 8.20, gableH, 0.28, -5.70, YTOP, 0, agedTimber, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 8.20, gableH, 0.28, 5.70, YTOP, 0, agedTimber, { ry: Math.PI * 0.5 });
  p.kawaraRidge('ext', -6.60, ridgeY + 0.04, 0, 6.60, ridgeY + 0.04, 0, kawaraRidge, oniMat, {
    scale: 1.0, courses: 2, oniStart: true, oniEnd: true,
  });

  return p.build({
    id: 'H18',
    name: '杉山家（山奥林道入口・丸太組木こりの二階小屋）',
    subtitle: '本格ノッチ丸太組外壁・薪棚製材庇・薪ストーブ＆貫通煙突・2F杉林バルコニー',
    category: 'house',
    builtYear: 1887,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1, Y2],
    entryLocal: [0.05, 0.0, 7.6],
    entryLookLocalYaw: 0,
  });
}
