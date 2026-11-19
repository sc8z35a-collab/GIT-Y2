import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H22: 黒岩監督邸（高台・懸造り四階洋和折衷館）— 1894年（明治27年）築・1985年廃村 ★4階建懸造り
 * 急斜面へ突き出す清水寺式木柱脚（懸造り）＋切石基礎・東壁4階貫通古赤煉瓦大煙突・
 * 黒瓦＆石州赤茶瓦の重層入母屋屋根＋越屋根・西吹抜U字螺旋階段室(1→2→3→4F)・
 * 1F煉瓦暖炉ホール・2F炭鉱地図監督執務室・3F格天井高級和室＆懸造り縁台・4F露出小屋組展望室
 */
export function buildHouse22Kuroiwa(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const redBrick = catalog.getMaterial('old_red_brick', { roughness: 0.90, bumpScale: 0.06 });
  const woodSiding = catalog.getMaterial('horizontal_wood_siding', { roughness: 0.89, bumpScale: 0.05 });
  const ivoryWall = catalog.getMaterial('ivory_plaster', { roughness: 0.91, bumpScale: 0.04, tint: 0xf4efe2 });
  const cedarStilt = catalog.getMaterial('charred_cedar', { roughness: 0.92, bumpScale: 0.05 });
  const darkTimber = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const parquetFloor = catalog.getMaterial('parquet_floor', { roughness: 0.78, bumpScale: 0.03 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.82, bumpScale: 0.03 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.84, bumpScale: 0.04 });
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const rugRed = catalog.getMaterial('vintage_rug_red', { roughness: 0.93, bumpScale: 0.03 });
  const glassWin = catalog.getMaterial('frosted_grid_window', { roughness: 0.35, opacity: 0.44, transparent: true });
  const shojiDoor = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.88, transparent: true });
  const mapSign = catalog.getMaterial('island_map_sign', { roughness: 0.82, bumpScale: 0.02 });
  const chalkboard = catalog.getMaterial('chalkboard', { roughness: 0.88, bumpScale: 0.02 });
  const noticeBoard = catalog.getMaterial('notice_board', { roughness: 0.88, bumpScale: 0.02 });
  const counterMat = catalog.getMaterial('office_counter', { roughness: 0.80, bumpScale: 0.03 });
  const fileCab = catalog.getMaterial('file_cabinet', { roughness: 0.66, metalness: 0.35 });
  const bookcaseMat = catalog.getMaterial('full_bookcase', { roughness: 0.84, bumpScale: 0.04 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.93, bumpScale: 0.03 });
  const boxesMat = catalog.getMaterial('cardboard_boxes', { roughness: 0.92, bumpScale: 0.04 });
  const ashMat = catalog.getMaterial('black_volcanic_gravel', { roughness: 0.96, bumpScale: 0.06 });

  // Dual-Tone Traditional Kawara: Deep Black Kawara + Sekishu Reddish-Brown Glazed Belt Roof!
  const blackKawara = catalog.getMaterial('dark_slate', { roughness: 0.74, metalness: 0.16, bumpScale: 0.06, tint: 0xaab4be });
  const blackRib = catalog.getMaterial('slate_roof_dark', { roughness: 0.70, metalness: 0.22, bumpScale: 0.05 });
  const sekishuDeck = catalog.getMaterial('glazed_brown_brick', { roughness: 0.56, metalness: 0.16, bumpScale: 0.05, tint: 0xba6b4c });
  const sekishuRib = catalog.getMaterial('old_red_brick', { roughness: 0.60, metalness: 0.16, bumpScale: 0.05, tint: 0x944e36 });
  const ridgeMat = catalog.getMaterial('dark_iron_plate', { roughness: 0.64, metalness: 0.28 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.56, metalness: 0.34 });

  const Y1 = 0.50;
  const Y2 = 3.60;
  const Y3 = 6.65;
  const Y4 = 9.65;
  const YTOP = 12.15;

  // =========================================================================
  // 1. KAKEZUKURI (懸造り) STEEP HILLSIDE TIMBER STILTS + CUT-STONE BASE + 4F CHIMNEY!
  // =========================================================================
  // Rear stone foundation anchoring into mountain slope (Z ∈ [-4.2, +1.8])
  p.box('ext', 10.6, 2.4, 6.2, 0, Y1 - 1.22, -1.2, cutStone);
  // Front overhanging Kakezukuri Timber Platform (Z ∈ [+1.8, +5.4]) carried on deep cross-braced stilts!
  p.box('ext', 10.6, 0.32, 3.6, 0, Y1 - 0.18, 3.6, darkTimber);
  for (const sx of [-4.9, -2.45, 0.0, 2.45, 4.9]) {
    // Tall cedar stilts plunging 5.2m down the steep slope!
    p.box('ext', 0.28, 5.4, 0.28, sx, Y1 - 2.85, 5.15, cedarStilt);
    p.box('ext', 0.26, 4.4, 0.26, sx, Y1 - 2.35, 3.35, cedarStilt);
    // Horizontal cross-ties & X-braces between front stilts
    p.box('ext', 0.16, 0.20, 2.0, sx, Y1 - 1.65, 4.25, cedarStilt);
    p.box('ext', 0.16, 0.20, 2.0, sx, Y1 - 3.25, 4.25, cedarStilt);
  }
  for (const bx of [-3.68, -1.22, 1.22, 3.68]) {
    p.box('ext', 2.65, 0.16, 0.16, bx, Y1 - 1.55, 5.15, cedarStilt, { rz: 0.48 });
    p.box('ext', 2.65, 0.16, 0.16, bx, Y1 - 1.55, 5.15, cedarStilt, { rz: -0.48 });
    p.box('ext', 2.65, 0.16, 0.16, bx, Y1 - 3.15, 5.15, cedarStilt, { rz: 0.48 });
  }
  // Front access walkway & stone steps on front-center (+Z)
  p.stoneSteps('ext', 0.9, 6.35, 5.35, -0.35, Y1, 2.2, 4, stepStone);
  // Front 1F Kakezukuri outer timber deck open kouran balustrade flanking entry
  p.kouranRailing('ext', -5.18, 5.32, -0.32, 5.32, Y1, 0.94, darkTimber, 0.56);
  p.kouranRailing('ext', 2.12, 5.32, 5.18, 5.32, Y1, 0.94, darkTimber, 0.56);
  p.kouranRailing('ext', -5.18, 4.10, -5.18, 5.32, Y1, 0.94, darkTimber, 0.56);
  p.kouranRailing('ext', 5.18, 4.10, 5.18, 5.32, Y1, 0.94, darkTimber, 0.56);

  // ★ SIGNATURE 4-STORY OLD RED BRICK CHIMNEY (古赤煉瓦大煙突: X = +5.32, Z = -0.35, Y = -0.5 -> +14.8m!) ★
  p.box('ext', 1.15, 15.2, 1.45, 5.32, 7.1, -0.35, redBrick);
  p.box('ext', 1.32, 0.34, 1.62, 5.32, 14.65, -0.35, cutStone); // Corbeled stone chimney cap
  p.box('ext', 1.24, 0.24, 1.54, 5.32, 14.92, -0.35, redBrick);

  // =========================================================================
  // 2. 1F: BRICK FIREPLACE HALL & PARQUET RECEPTION PARLOR (10.4m x 8.2m, Y=+0.50m)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.10m
  const mid1 = Y1 + h1 * 0.5;

  p.box('int', 10.2, 0.10, 8.0, 0, Y1 - 0.03, 0, parquetFloor);
  p.box('int', 4.6, 0.03, 4.2, 1.65, Y1 + 0.03, -0.45, rugRed);
  p.floor(-5.05, 5.05, -3.95, 5.35, Y1 + 0.04);

  // 1F Exterior Walls (Horizontal Wood Siding + Front Entry Door X ∈ [+0.1, +1.7])
  p.box('ext', 5.35, h1, 0.22, -2.62, mid1, 4.1, woodSiding, { solid: true });
  p.box('ext', 1.65, 0.80, 0.22, 0.90, Y1 + 2.70, 4.1, woodSiding, { solid: true });
  p.box('ext', 3.55, h1, 0.22, 3.48, mid1, 4.1, woodSiding, { solid: true });
  p.box('ext', 10.55, h1, 0.22, 0, mid1, -4.1, woodSiding, { solid: true });
  p.box('ext', 0.22, h1, 8.35, -5.2, mid1, 0, woodSiding, { solid: true });
  p.box('ext', 0.22, h1, 8.35, 5.2, mid1, 0, woodSiding, { solid: true });

  // 1F Interior Brick Fireplace Hearth (backed directly onto the 4F brick chimney!)
  p.box('int', 0.85, 2.25, 1.95, 4.68, Y1 + 1.12, -0.35, redBrick, { solid: true });
  p.box('int', 0.52, 0.85, 1.15, 4.42, Y1 + 0.42, -0.35, ashMat);
  p.box('int', 0.98, 0.16, 2.15, 4.64, Y1 + 1.45, -0.35, darkTimber); // Fireplace mantel
  p.box('int', 1.75, 0.76, 0.95, 1.65, Y1 + 0.40, -0.45, darkTimber, { solid: true });
  p.box('int', 2.2, 1.92, 0.52, 1.65, Y1 + 0.96, -3.65, bookcaseMat, { solid: true, uvScale: 0 });

  // 1F -> 2F First Flight of West Atrium U-Spiral Stairwell (Outer West X = -4.25, Z: +2.05 -> -1.85, Y1 -> Y2)
  p.stairRun('int', {
    x0: -4.25,
    z0: 2.05,
    x1: -4.25,
    z1: -1.85,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.12,
    steps: 14,
    treadMat: oakFloor,
    stringerMat: darkTimber,
    railMat: darkTimber,
    railLeft: false,
    railRight: true,
    guardLeft: false,
    guardRight: true,
  });

  // =========================================================================
  // 3. 2F: COAL MINE SUPERINTENDENT'S OFFICE & 2F KAKEZUKURI BALCONY (Y=+3.60m)
  // =========================================================================
  const h2 = Y3 - Y2; // 3.05m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs leaving clean cutout over 1F->2F Outer West flight (X ∈ [-5.1, -3.55], Z ∈ [-1.90, +2.15])
  p.box('int', 8.75, 0.16, 8.05, 0.80, Y2 - 0.06, 0, oakFloor);
  p.box('int', 1.58, 0.16, 2.15, -4.32, Y2 - 0.06, -2.98, oakFloor);
  p.box('int', 1.58, 0.16, 1.92, -4.32, Y2 - 0.06, 3.08, oakFloor);

  // Projecting 2F Kakezukuri Scenic Front Balcony (Z ∈ [+4.1, +5.35], X ∈ [-4.8, +4.8])!
  p.box('ext', 9.75, 0.16, 1.30, 0, Y2 - 0.04, 4.72, warmFloor);
  p.kouranRailing('ext', -4.85, 5.34, 4.85, 5.34, Y2, 0.96, darkTimber, 0.56);
  p.kouranRailing('ext', -4.85, 4.10, -4.85, 5.34, Y2, 0.96, darkTimber, 0.56);
  p.kouranRailing('ext', 4.85, 4.10, 4.85, 5.34, Y2, 0.96, darkTimber, 0.56);

  p.collider(-3.55, 5.1, Y2 - 0.16, Y2 + 0.02, -4.0, 4.0);
  p.collider(-5.1, -3.55, Y2 - 0.16, Y2 + 0.02, -4.0, -1.92);
  p.collider(-5.1, -3.55, Y2 - 0.16, Y2 + 0.02, 2.18, 4.0);

  p.floor(-3.55, 5.05, -3.95, 3.95, Y2 + 0.04);
  p.floor(-5.05, -3.55, -3.95, -1.85, Y2 + 0.04);
  p.floor(-5.05, -3.55, 2.10, 3.95, Y2 + 0.04);
  p.floor(-4.75, 4.75, 3.95, 5.26, Y2 + 0.04);

  // 2F Stairwell guard rail along east & south edge of 1F->2F hole
  p.box('int', 0.08, 0.92, 4.08, -3.56, Y2 + 0.46, 0.14, darkTimber, { solid: true });
  p.box('int', 1.52, 0.92, 0.08, -4.32, Y2 + 0.46, 2.16, darkTimber, { solid: true });

  // 2F Exterior Walls (Ivory Plaster + Open Balcony Door at X ∈ [+0.2, +1.8])
  p.box('ext', 5.45, h2, 0.22, -2.52, mid2, 4.1, ivoryWall, { solid: true });
  p.box('ext', 1.65, 0.75, 0.22, 1.00, Y2 + 2.68, 4.1, ivoryWall, { solid: true });
  p.box('ext', 3.45, h2, 0.22, 3.52, mid2, 4.1, ivoryWall, { solid: true });
  p.box('ext', 10.55, h2, 0.22, 0, mid2, -4.1, ivoryWall, { solid: true });
  p.box('ext', 0.22, h2, 8.35, -5.2, mid2, 0, ivoryWall, { solid: true });
  p.box('ext', 0.22, h2, 8.35, 5.2, mid2, 0, ivoryWall, { solid: true });

  // 2F Coal Mine Superintendent Office Furnishings (Giant Island Map, Chalkboard, Office Counter, File Cabinets!)
  p.box('int', 2.4, 1.55, 0.06, 1.25, Y2 + 1.68, -3.92, mapSign, { uvScale: 0 });       // 1890 Coal Mine Survey Map!
  p.box('int', 2.0, 1.25, 0.06, 4.98, Y2 + 1.65, -2.45, chalkboard, { ry: -Math.PI * 0.5, uvScale: 0 });
  p.box('int', 1.35, 0.92, 0.05, 4.98, Y2 + 1.65, 2.25, noticeBoard, { ry: -Math.PI * 0.5, uvScale: 0 });
  p.box('int', 2.2, 0.92, 0.78, 1.35, Y2 + 0.46, -0.55, counterMat, { solid: true, uvScale: 0 });
  p.box('int', 0.64, 1.52, 0.58, 4.45, Y2 + 0.76, 1.05, fileCab, { solid: true, uvScale: 0 });
  p.box('int', 0.64, 1.52, 0.58, 4.45, Y2 + 0.76, 1.72, fileCab, { solid: true, uvScale: 0 });

  // 2F -> 3F Second Flight of West Atrium U-Spiral Stairwell (Inner West X = -2.65, Z: -1.85 -> +2.05, Y2 -> Y3!)
  p.stairRun('int', {
    x0: -2.65,
    z0: -1.85,
    x1: -2.65,
    z1: 2.05,
    y0: Y2 + 0.04,
    y1: Y3 + 0.04,
    width: 1.12,
    steps: 14,
    treadMat: oakFloor,
    stringerMat: darkTimber,
    railMat: darkTimber,
    railLeft: false,
    railRight: true,
    guardLeft: false,
    guardRight: true,
  });

  // =========================================================================
  // 4. 3F: LUXURY COFFERED-CEILING 10-MAT TATAMI & 3F KAKEZUKURI BALCONY (Y=+6.65m)
  // =========================================================================
  const h3 = Y4 - Y3; // 3.00m
  const mid3 = Y3 + h3 * 0.5;

  // 3F Floor Slabs leaving clean cutout over 2F->3F Inner West flight (X ∈ [-3.35, -1.95], Z ∈ [-1.95, +2.10])
  p.box('int', 7.10, 0.16, 8.05, 1.58, Y3 - 0.06, 0, tatamiBord);
  p.box('int', 1.75, 0.16, 8.05, -4.22, Y3 - 0.06, 0, warmFloor);
  p.box('int', 1.45, 0.16, 2.08, -2.65, Y3 - 0.06, -2.98, warmFloor);
  p.box('int', 1.45, 0.16, 1.92, -2.65, Y3 - 0.06, 3.05, warmFloor);

  // Projecting 3F High Scenic Front Balcony (Z ∈ [+4.1, +5.15], X ∈ [-4.6, +4.6])!
  p.box('ext', 9.35, 0.14, 1.10, 0, Y3 - 0.04, 4.62, warmFloor);
  p.kouranRailing('ext', -4.64, 5.14, 4.64, 5.14, Y3, 0.96, darkTimber, 0.56);
  p.kouranRailing('ext', -4.64, 4.10, -4.64, 5.14, Y3, 0.96, darkTimber, 0.56);
  p.kouranRailing('ext', 4.64, 4.10, 4.64, 5.14, Y3, 0.96, darkTimber, 0.56);

  p.collider(-1.95, 5.1, Y3 - 0.16, Y3 + 0.02, -4.0, 4.0);
  p.collider(-5.1, -3.35, Y3 - 0.16, Y3 + 0.02, -4.0, 4.0);
  p.collider(-3.35, -1.95, Y3 - 0.16, Y3 + 0.02, -4.0, -1.98);
  p.collider(-3.35, -1.95, Y3 - 0.16, Y3 + 0.02, 2.12, 4.0);

  p.floor(-1.95, 5.05, -3.95, 3.95, Y3 + 0.04);
  p.floor(-5.05, -3.35, -3.95, 3.95, Y3 + 0.04);
  p.floor(-3.35, -1.95, -3.95, -1.90, Y3 + 0.04);
  p.floor(-3.35, -1.95, 2.05, 3.95, Y3 + 0.04);
  p.floor(-4.55, 4.55, 3.95, 5.06, Y3 + 0.04);

  // 3F Stairwell guard rails around 2F->3F hole
  p.box('int', 0.08, 0.92, 4.08, -1.96, Y3 + 0.46, 0.06, darkTimber, { solid: true });
  p.box('int', 0.08, 0.92, 4.08, -3.34, Y3 + 0.46, 0.06, darkTimber, { solid: true });
  p.box('int', 1.40, 0.92, 0.08, -2.65, Y3 + 0.46, -1.96, darkTimber, { solid: true });

  // 3F Exterior Walls (Horizontal Wood Siding + Wide Shoji Balcony Opening!)
  p.box('ext', 5.2, h3, 0.22, -2.65, mid3, 4.1, woodSiding, { solid: true });
  p.box('ext', 1.85, 0.72, 0.22, 0.85, Y3 + 2.64, 4.1, woodSiding, { solid: true });
  p.box('ext', 3.45, h3, 0.22, 3.52, mid3, 4.1, woodSiding, { solid: true });
  p.box('ext', 1.05, 2.22, 0.06, -0.45, Y3 + 1.12, 3.94, shojiDoor, { uvScale: 0 });
  p.box('ext', 10.55, h3, 0.22, 0, mid3, -4.1, woodSiding, { solid: true });
  p.box('ext', 0.22, h3, 8.35, -5.2, mid3, 0, woodSiding, { solid: true });
  p.box('ext', 0.22, h3, 8.35, 5.2, mid3, 0, woodSiding, { solid: true });

  // 3F Luxury Tatami Furnishings: Tokonoma, Antique Tansu, Zataku + Zabutons, Futon
  p.box('int', 2.4, 0.20, 0.86, 3.55, Y3 + 0.12, -3.55, darkTimber, { solid: true });
  p.box('int', 1.45, 1.42, 0.54, 0.65, Y3 + 0.72, -3.65, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 1.65, 0.36, 0.98, 1.45, Y3 + 0.22, 0.45, darkTimber, { solid: true });
  p.box('int', 0.60, 0.07, 0.60, 1.45, Y3 + 0.08, -0.45, zabutonMat, { uvScale: 0 });
  p.box('int', 0.60, 0.07, 0.60, 1.45, Y3 + 0.08, 1.35, zabutonMat, { uvScale: 0 });
  p.box('int', 1.55, 0.14, 2.05, 3.85, Y3 + 0.11, 1.45, futonMat, { uvScale: 0 });

  // 3F -> 4F Third Flight of West Atrium U-Spiral Stairwell (Outer West X = -4.25, Z: +2.05 -> -1.85, Y3 -> Y4!)
  p.stairRun('int', {
    x0: -4.25,
    z0: 2.05,
    x1: -4.25,
    z1: -1.85,
    y0: Y3 + 0.04,
    y1: Y4 + 0.04,
    width: 1.12,
    steps: 14,
    treadMat: oakFloor,
    stringerMat: darkTimber,
    railMat: darkTimber,
    railLeft: false,
    railRight: true,
    guardLeft: false,
    guardRight: true,
  });

  // =========================================================================
  // 5. ★ 4F: EXPOSED-TRUSS OBSERVATION WATCHROOM (9.2m x 7.0m, Y=+9.65m) ★
  // =========================================================================
  const h4 = YTOP - Y4; // 2.50m
  const mid4 = Y4 + h4 * 0.5;

  // 4F Floor Slabs (X ∈ [-4.8, +4.6], Z ∈ [-3.6, +3.6]) with clean cutout over 3F->4F flight (X ∈ [-4.8, -3.55], Z ∈ [-1.90, +2.15])
  p.box('int', 8.20, 0.16, 7.25, 0.52, Y4 - 0.06, 0, warmFloor);
  p.box('int', 1.30, 0.16, 1.72, -4.18, Y4 - 0.06, -2.76, warmFloor);
  p.box('int', 1.30, 0.16, 1.50, -4.18, Y4 - 0.06, 2.88, warmFloor);

  p.collider(-3.55, 4.6, Y4 - 0.16, Y4 + 0.02, -3.6, 3.6);
  p.collider(-4.8, -3.55, Y4 - 0.16, Y4 + 0.02, -3.6, -1.92);
  p.collider(-4.8, -3.55, Y4 - 0.16, Y4 + 0.02, 2.18, 3.6);

  p.floor(-3.55, 4.5, -3.5, 3.5, Y4 + 0.04);
  p.floor(-4.72, -3.55, -3.5, -1.85, Y4 + 0.04);
  p.floor(-4.72, -3.55, 2.10, 3.5, Y4 + 0.04);

  // 4F Stairwell guard rails
  p.box('int', 0.08, 0.90, 4.10, -3.56, Y4 + 0.45, 0.14, darkTimber, { solid: true });
  p.box('int', 1.25, 0.90, 0.08, -4.18, Y4 + 0.45, 2.16, darkTimber, { solid: true });

  // 4F Panoramic Observation Walls (Ivory Plaster + Wide 360° Strip Windows overlooking Village & 865m Summit!)
  for (const gz of [-3.6, 3.6]) {
    p.box('ext', 1.8, h4, 0.22, -3.95, mid4, gz, ivoryWall, { solid: true });
    p.box('ext', 5.8, 0.85, 0.22, -0.15, Y4 + 0.42, gz, ivoryWall, { solid: true });
    p.box('ext', 5.8, 0.42, 0.22, -0.15, Y4 + 2.29, gz, darkTimber, { solid: true });
    p.box('ext', 5.76, 1.24, 0.06, -0.15, Y4 + 1.46, gz, glassWin, { uvScale: 0 });
    p.box('ext', 2.0, h4, 0.22, 3.68, mid4, gz, ivoryWall, { solid: true });
  }
  p.box('ext', 0.22, h4, 7.35, -4.8, mid4, 0, ivoryWall, { solid: true });
  p.box('ext', 0.22, h4, 7.35, 4.6, mid4, 0, ivoryWall, { solid: true });

  // Exposed Heavy Meiji Roof Trusses overhead inside 4F Watchroom + Archive Crates & Watch Desk!
  for (const tx of [-2.4, -0.4, 1.6, 3.4]) {
    p.box('int', 0.18, 0.20, 7.0, tx, YTOP - 0.14, 0, darkTimber);
  }
  p.box('int', 9.2, 0.12, 7.0, -0.1, YTOP + 0.02, 0, warmFloor);
  p.collider(-4.75, 4.55, YTOP - 0.10, YTOP + 0.12, -3.55, 3.55);

  p.box('int', 1.75, 0.82, 0.85, 0.85, Y4 + 0.42, 1.45, darkTimber, { solid: true });
  p.box('int', 1.45, 0.92, 0.82, 3.45, Y4 + 0.46, -2.45, boxesMat, { solid: true, uvScale: 0 });
  p.box('int', 0.85, 0.65, 0.72, 3.40, Y4 + 1.24, -2.42, boxesMat, { ry: 0.24, uvScale: 0 });

  // =========================================================================
  // 6. DUAL-TONE LAYERED KAWARA ROOFS (黒瓦＆石州赤茶瓦重層入母屋＋越屋根＋鬼瓦!)
  // =========================================================================
  // 6A. 2F Black Kawara Eave Belt over Front/Back/Sides
  p.kawaraSlope('ext', {
    bottomWidth: 11.2,
    run: 1.45,
    pitch: 0.36,
    ridgeX: 0,
    ridgeY: Y2 + 0.12,
    ridgeZ: 4.15,
    downslopeYaw: 0,
    tileMat: blackKawara,
    ribMat: blackRib,
    eaveMat: ridgeMat,
    rafterMat: darkTimber,
    ribSpacing: 0.38,
  });

  // 6B. 3F/4F Transition Sekishu Red-Brown Glazed Kawara Perimeter Skirt!
  p.kawaraSlope('ext', { topWidth: 9.6, bottomWidth: 12.2, run: 1.75, pitch: 0.40, ridgeX: -0.1, ridgeY: Y4 + 0.24, ridgeZ: 3.60, downslopeYaw: 0, tileMat: sekishuDeck, ribMat: sekishuRib, eaveMat: ridgeMat, rafterMat: darkTimber, ribSpacing: 0.38 });
  p.kawaraSlope('ext', { topWidth: 9.6, bottomWidth: 12.2, run: 1.75, pitch: 0.40, ridgeX: -0.1, ridgeY: Y4 + 0.24, ridgeZ: -3.60, downslopeYaw: Math.PI, tileMat: sekishuDeck, ribMat: sekishuRib, eaveMat: ridgeMat, rafterMat: darkTimber, ribSpacing: 0.38 });
  p.kawaraSlope('ext', { topWidth: 7.3, bottomWidth: 10.6, run: 1.65, pitch: 0.40, ridgeX: 4.60, ridgeY: Y4 + 0.24, ridgeZ: 0, downslopeYaw: Math.PI * 0.5, tileMat: sekishuDeck, ribMat: sekishuRib, eaveMat: ridgeMat, rafterMat: darkTimber, ribSpacing: 0.38 });
  p.kawaraSlope('ext', { topWidth: 7.3, bottomWidth: 10.6, run: 1.65, pitch: 0.40, ridgeX: -4.80, ridgeY: Y4 + 0.24, ridgeZ: 0, downslopeYaw: -Math.PI * 0.5, tileMat: sekishuDeck, ribMat: sekishuRib, eaveMat: ridgeMat, rafterMat: darkTimber, ribSpacing: 0.38 });

  // 6C. Crowning 4F Deep-Black Kawara Irimoya Roof + Top Koshiyane Lantern!
  const cPitch = 0.48;
  const cRun = 4.65;
  const yRidge = YTOP - 0.14 + cRun * Math.tan(cPitch); // ~14.42m
  const yBreak = YTOP + 1.05;

  p.kawaraSlope('ext', { topWidth: 6.0, bottomWidth: 11.6, run: cRun, pitch: cPitch, ridgeX: -0.1, ridgeY: yRidge, ridgeZ: 0, downslopeYaw: 0, tileMat: blackKawara, ribMat: blackRib, eaveMat: ridgeMat, rafterMat: darkTimber, ribSpacing: 0.38 });
  p.kawaraSlope('ext', { topWidth: 6.0, bottomWidth: 11.6, run: cRun, pitch: cPitch, ridgeX: -0.1, ridgeY: yRidge, ridgeZ: 0, downslopeYaw: Math.PI, tileMat: blackKawara, ribMat: blackRib, eaveMat: ridgeMat, rafterMat: darkTimber, ribSpacing: 0.38 });
  p.kawaraSlope('ext', { topWidth: 4.6, bottomWidth: 9.3, run: 2.85, pitch: cPitch, ridgeX: 2.90, ridgeY: yBreak + 0.12, ridgeZ: 0, downslopeYaw: Math.PI * 0.5, tileMat: blackKawara, ribMat: blackRib, eaveMat: ridgeMat, rafterMat: darkTimber, ribSpacing: 0.38 });
  p.kawaraSlope('ext', { topWidth: 4.6, bottomWidth: 9.3, run: 2.85, pitch: cPitch, ridgeX: -3.10, ridgeY: yBreak + 0.12, ridgeZ: 0, downslopeYaw: -Math.PI * 0.5, tileMat: blackKawara, ribMat: blackRib, eaveMat: ridgeMat, rafterMat: darkTimber, ribSpacing: 0.38 });

  p.gablePrism('ext', 4.6, yRidge - yBreak, 0.22, 2.85, yBreak, 0, ivoryWall, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 4.6, yRidge - yBreak, 0.22, -3.05, yBreak, 0, ivoryWall, { ry: Math.PI * 0.5 });

  // Four Hip Ridges + Crowning Koshiyane Clerestory Monitor with Twin Horned Onigawara!
  const yEave = YTOP - 0.12;
  p.kawaraRidge('ext', -3.1, yBreak + 0.12, 2.3, -5.85, yEave, 4.6, ridgeMat, oniMat, { scale: 0.74, oniEnd: true });
  p.kawaraRidge('ext', 2.9, yBreak + 0.12, 2.3, 5.65, yEave, 4.6, ridgeMat, oniMat, { scale: 0.74, oniEnd: true });
  p.kawaraRidge('ext', -3.1, yBreak + 0.12, -2.3, -5.85, yEave, -4.6, ridgeMat, oniMat, { scale: 0.74, oniEnd: true });
  p.kawaraRidge('ext', 2.9, yBreak + 0.12, -2.3, 5.65, yEave, -4.6, ridgeMat, oniMat, { scale: 0.74, oniEnd: true });

  // Koshiyane roof monitor perched atop main ridge
  p.box('ext', 3.6, 0.58, 1.15, -0.1, yRidge + 0.14, 0, ivoryWall);
  p.kawaraSlope('ext', { bottomWidth: 4.3, run: 1.05, pitch: 0.44, ridgeX: -0.1, ridgeY: yRidge + 0.88, ridgeZ: 0, downslopeYaw: 0, tileMat: sekishuDeck, ribMat: sekishuRib, eaveMat: ridgeMat, rafterMat: darkTimber, ribSpacing: 0.34 });
  p.kawaraSlope('ext', { bottomWidth: 4.3, run: 1.05, pitch: 0.44, ridgeX: -0.1, ridgeY: yRidge + 0.88, ridgeZ: 0, downslopeYaw: Math.PI, tileMat: sekishuDeck, ribMat: sekishuRib, eaveMat: ridgeMat, rafterMat: darkTimber, ribSpacing: 0.34 });
  p.kawaraRidge('ext', -2.25, yRidge + 0.92, 0, 2.05, yRidge + 0.92, 0, ridgeMat, oniMat, {
    scale: 1.15,
    oniStart: true,
    oniEnd: true,
    courses: 3,
  });

  return p.build({
    id: site.id,
    name: '黒岩監督邸（高台・懸造り四階洋和館）',
    subtitle: '明治27年築・急斜面懸造り木柱脚・4層赤煉瓦煙突・黒＆赤茶重層瓦入母屋・四階建',
    category: 'house',
    builtYear: 1894,
    abandonedYear: 1985,
    stories: 4,
    floorElevations: [Y1 + 0.04, Y2 + 0.04, Y3 + 0.04, Y4 + 0.04],
    entryLocal: [0.9, 0.0, 7.5],
  });
}
