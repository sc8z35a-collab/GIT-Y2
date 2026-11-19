import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H10: 白井医院（明治擬洋風三階木造診療所）— 1892年（明治25年）築・1985年廃村
 * クリーム漆喰＋淡煉瓦腰壁＋縦杉板＋正面擬洋風切妻瓦玄関＋青琺瑯看板・
 * 1Fテラゾー待合＆白タイル診察室、2F院長住居(ヘリンボーン洋間＆和室)、3F医学書庫＆黒板、いぶし銀本瓦入母屋
 */
export function buildHouse10Shirai(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  const stonePlinth = catalog.getMaterial('dressed_stone', { roughness: 0.91, bumpScale: 0.06 });
  const stepMat = catalog.getMaterial('concrete_steps', { roughness: 0.9, bumpScale: 0.05 });
  const paleBrick = catalog.getMaterial('pale_brick', { roughness: 0.90, bumpScale: 0.06 });
  const creamPlaster = catalog.getMaterial('cream_plaster', { roughness: 0.90, bumpScale: 0.03, tint: 0xf6f0de });
  const vertCedar = catalog.getMaterial('vertical_cedar_panel', { roughness: 0.88, bumpScale: 0.05 });
  const trimWood = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const whiteColumn = catalog.getMaterial('white_plaster', { roughness: 0.86, bumpScale: 0.03 });
  const terrazzo = catalog.getMaterial('terrazzo_floor', { roughness: 0.55, bumpScale: 0.02 });
  const whiteTile = catalog.getMaterial('white_bath_tile', { roughness: 0.42, metalness: 0.05, bumpScale: 0.02 });
  const herringbone = catalog.getMaterial('herringbone_wood', { roughness: 0.78, bumpScale: 0.03 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.82, bumpScale: 0.03 });
  const tatamiMat = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const glassTall = catalog.getMaterial('frosted_grid_window', { roughness: 0.34, opacity: 0.46, transparent: true });
  const glassDoor = catalog.getMaterial('glass_double_door', { roughness: 0.38, opacity: 0.65, transparent: true });
  const enamelSign = catalog.getMaterial('enamel_sign_blue', { roughness: 0.38, metalness: 0.25 });
  const mailboxes = catalog.getMaterial('mailboxes_metal', { roughness: 0.6, metalness: 0.45 });
  const counterMat = catalog.getMaterial('office_counter', { roughness: 0.8, bumpScale: 0.03 });
  const sinkMat = catalog.getMaterial('vanity_sink', { roughness: 0.68, bumpScale: 0.03 });
  const medJars = catalog.getMaterial('shop_shelves_jars', { roughness: 0.72, bumpScale: 0.04 });
  const fileCab = catalog.getMaterial('file_cabinet', { roughness: 0.65, metalness: 0.35 });
  const bulletin = catalog.getMaterial('bulletin_board', { roughness: 0.88, bumpScale: 0.02 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.76, bumpScale: 0.03 });
  const vanityWood = catalog.getMaterial('wooden_vanity', { roughness: 0.82, bumpScale: 0.03 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.93, bumpScale: 0.03 });
  const curtainMat = catalog.getMaterial('botanical_curtain', { roughness: 0.9, opacity: 0.86, transparent: true });
  const bookcaseFull = catalog.getMaterial('full_bookcase', { roughness: 0.84, bumpScale: 0.04 });
  const shelfFilled = catalog.getMaterial('filled_bookshelf', { roughness: 0.84, bumpScale: 0.04 });
  const chalkboard = catalog.getMaterial('chalkboard', { roughness: 0.88, bumpScale: 0.02 });

  // Formal Ibushi-gin Kawara (いぶし銀本瓦・擬洋風入母屋)
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.74, metalness: 0.16, bumpScale: 0.06, tint: 0xcad2dc });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.70, metalness: 0.20, bumpScale: 0.05 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.66, metalness: 0.26 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.58, metalness: 0.34 });

  const Y1 = 0.45;
  const Y2 = 3.55;
  const Y3 = 6.55;
  const YTOP = 9.35;

  // =========================================================================
  // 1. DRESSED-STONE PLINTH, GIYOFU PORTICO & FRONT STEPS
  // =========================================================================
  p.box('ext', 10.5, 1.0, 8.3, 0, Y1 - 0.52, 0, stonePlinth);
  // Projecting Portico Landing Platform (X ∈ [-0.4, +2.8], Z ∈ [+4.0, +5.45])
  p.box('ext', 3.3, 0.95, 1.55, 1.2, Y1 - 0.48, 4.72, stonePlinth);
  p.stoneSteps('ext', 1.2, 6.45, 5.45, -0.35, Y1, 2.25, 4, stepMat);
  p.floor(-0.4, 2.8, 3.9, 5.5, Y1 + 0.04);

  // Twin Classical White Giyofu Porch Columns + Pediment Architrave!
  p.cyl('ext', 0.15, 0.17, 2.85, 10, -0.15, Y1 + 1.42, 5.25, whiteColumn);
  p.cyl('ext', 0.15, 0.17, 2.85, 10, 2.55, Y1 + 1.42, 5.25, whiteColumn);
  p.box('ext', 3.25, 0.32, 0.28, 1.2, Y1 + 2.94, 5.25, whiteColumn);
  // Iconic Blue Enamel Clinic Sign ("白井医院") & Metal Mailboxes on Front Facade!
  p.box('ext', 0.65, 1.35, 0.05, -0.75, Y1 + 1.85, 4.14, enamelSign, { uvScale: 0 });
  p.box('ext', 0.62, 0.72, 0.18, 3.25, Y1 + 1.45, 4.18, mailboxes, { uvScale: 0 });

  // =========================================================================
  // 2. 1F: TERRAZZO WAITING HALL, RECEPTION & WHITE-TILE EXAM ROOM (Y=+0.45m)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.10m
  const mid1 = Y1 + h1 * 0.5;

  p.box('int', 5.2, 0.08, 7.8, 2.45, Y1 - 0.04, 0, terrazzo);    // East Waiting & Dispensary
  p.box('int', 4.9, 0.08, 7.8, -2.55, Y1 - 0.04, 0, whiteTile); // West Exam & Treatment Room
  p.floor(-4.95, 4.95, -3.85, 4.15, Y1 + 0.04);

  // 1F Exterior Walls: Pale Brick Dado (1.10m) + Cream Plaster Upper + Tall Giyofu Windows!
  // Front 1F (+Z = +4.0): Wide clinic double doorway X ∈ [+0.45, +1.95]
  p.box('ext', 5.55, 1.10, 0.24, -2.32, Y1 + 0.55, 4.0, paleBrick, { solid: true });
  p.box('ext', 1.65, h1 - 1.10, 0.24, -4.28, Y1 + 2.10, 4.0, creamPlaster, { solid: true });
  p.box('ext', 1.80, 0.58, 0.24, -2.55, Y1 + 2.81, 4.0, creamPlaster, { solid: true });
  p.box('ext', 1.76, 1.42, 0.06, -2.55, Y1 + 1.81, 4.0, glassTall, { uvScale: 0 });
  p.box('ext', 2.10, h1 - 1.10, 0.24, -0.60, Y1 + 2.10, 4.0, creamPlaster, { solid: true });
  p.box('ext', 1.54, 0.80, 0.24, 1.20, Y1 + 2.70, 4.0, creamPlaster, { solid: true });
  // Half-open frosted glass clinic double door leaf
  p.box('ext', 0.82, 2.25, 0.06, 0.10, Y1 + 1.12, 3.84, glassDoor, { uvScale: 0 });
  p.box('ext', 3.20, 1.10, 0.24, 3.55, Y1 + 0.55, 4.0, paleBrick, { solid: true });
  p.box('ext', 3.20, h1 - 1.10, 0.24, 3.55, Y1 + 2.10, 4.0, creamPlaster, { solid: true });

  // Back 1F (-Z = -4.0)
  p.box('ext', 10.35, 1.10, 0.24, 0, Y1 + 0.55, -4.0, paleBrick, { solid: true });
  p.box('ext', 3.2, h1 - 1.10, 0.24, -3.55, Y1 + 2.10, -4.0, creamPlaster, { solid: true });
  p.box('ext', 2.4, 0.55, 0.24, -0.75, Y1 + 2.82, -4.0, creamPlaster, { solid: true });
  p.box('ext', 2.36, 1.45, 0.06, -0.75, Y1 + 1.82, -4.0, glassTall, { uvScale: 0 });
  p.box('ext', 4.75, h1 - 1.10, 0.24, 2.78, Y1 + 2.10, -4.0, creamPlaster, { solid: true });

  // West 1F (-X = -5.1) with twin tall frosted clinic exam windows
  p.box('ext', 0.24, 1.10, 8.15, -5.1, Y1 + 0.55, 0, paleBrick, { solid: true });
  p.box('ext', 0.24, h1 - 1.10, 2.2, -5.1, Y1 + 2.10, -2.95, creamPlaster, { solid: true });
  p.box('ext', 0.24, 0.58, 1.5, -5.1, Y1 + 2.81, -1.10, creamPlaster, { solid: true });
  p.box('ext', 0.06, 1.42, 1.46, -5.1, Y1 + 1.81, -1.10, glassTall, { uvScale: 0 });
  p.box('ext', 0.24, h1 - 1.10, 1.5, -5.1, Y1 + 2.10, 0.40, creamPlaster, { solid: true });
  p.box('ext', 0.24, 0.58, 1.5, -5.1, Y1 + 2.81, 1.90, creamPlaster, { solid: true });
  p.box('ext', 0.06, 1.42, 1.46, -5.1, Y1 + 1.81, 1.90, glassTall, { uvScale: 0 });
  p.box('ext', 0.24, h1 - 1.10, 1.45, -5.1, Y1 + 2.10, 3.35, creamPlaster, { solid: true });

  // East 1F (+X = +5.1)
  p.box('ext', 0.24, 1.10, 8.15, 5.1, Y1 + 0.55, 0, paleBrick, { solid: true });
  p.box('ext', 0.24, h1 - 1.10, 8.15, 5.1, Y1 + 2.10, 0, creamPlaster, { solid: true });

  // 1F Interior Clinic Partitions (White-Tile Exam Room at X < -0.25, wide doorway at Z ∈ [+0.6, +2.1])
  p.box('int', 0.14, h1, 4.5, -0.25, mid1, -1.65, whiteTile, { solid: true });
  p.box('int', 0.14, 0.78, 1.55, -0.25, Y1 + 2.71, 1.35, creamPlaster, { solid: true });
  p.box('int', 0.14, h1, 1.95, -0.25, mid1, 3.05, whiteTile, { solid: true });

  // 1F Clinic Props: Waiting Bench, Reception Counter, Bulletin Board, Exam Table, Medicine Cabinet, Sink, File Cabinet
  p.box('int', 1.85, 0.96, 0.65, 1.35, Y1 + 0.48, -0.65, counterMat, { solid: true, uvScale: 0 }); // Reception desk
  p.box('int', 1.75, 0.46, 0.48, 2.55, Y1 + 0.23, 3.42, trimWood, { solid: true });              // Waiting bench
  p.box('int', 1.35, 0.92, 0.05, 0.02, Y1 + 1.65, 2.85, bulletin, { uvScale: 0 });               // Clinic notice board
  p.box('int', 0.85, 0.82, 1.95, -2.65, Y1 + 0.41, -1.45, whiteColumn, { solid: true });         // Examination table
  p.box('int', 1.55, 1.82, 0.52, -2.55, Y1 + 0.91, -3.55, medJars, { solid: true, uvScale: 0 }); // Medicine bottle shelves
  p.box('int', 0.88, 0.88, 0.56, -4.45, Y1 + 0.44, -2.75, sinkMat, { solid: true, uvScale: 0 }); // Doctor handwashing sink
  p.box('int', 0.62, 1.45, 0.58, -4.45, Y1 + 0.72, 2.85, fileCab, { solid: true, uvScale: 0 });  // Patient chart cabinet

  // 1F -> 2F Giyofu Newel-Post Staircase along East Wall (X = 3.95, Z: +2.05 -> -1.95, Y1 -> Y2)
  p.stairRun('int', {
    x0: 3.95,
    z0: 2.05,
    x1: 3.95,
    z1: -1.95,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.18,
    steps: 14,
    treadMat: oakFloor,
    stringerMat: trimWood,
    railMat: trimWood,
    railLeft: true,
    railRight: false,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 3. 2F: DOCTOR'S LIVING QUARTERS (HERRINGBONE PARLOR & TATAMI ROOM, Y=+3.55m)
  // =========================================================================
  const h2 = Y3 - Y2; // 3.00m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs leaving clean East stairwell cutout (X ∈ [3.15, 5.0], Z ∈ [-2.00, +2.15])
  p.box('int', 8.20, 0.16, 7.85, -0.92, Y2 - 0.06, 0, herringbone);
  p.box('int', 1.92, 0.16, 2.02, 4.05, Y2 - 0.06, -2.96, oakFloor);
  p.box('int', 1.92, 0.16, 1.85, 4.05, Y2 - 0.06, 3.05, oakFloor);
  p.box('int', 3.4, 0.04, 4.6, 1.25, Y2 + 0.03, 1.45, tatamiMat); // SE Tatami Room

  p.collider(-5.0, 3.15, Y2 - 0.16, Y2 + 0.02, -3.9, 3.9);
  p.collider(3.15, 5.0, Y2 - 0.16, Y2 + 0.02, -3.9, -2.02);
  p.collider(3.15, 5.0, Y2 - 0.16, Y2 + 0.02, 2.18, 3.9);

  p.floor(-4.95, 3.15, -3.85, 3.85, Y2 + 0.04);
  p.floor(3.15, 4.95, -3.85, -1.95, Y2 + 0.04);
  p.floor(3.15, 4.95, 2.10, 3.85, Y2 + 0.04);

  // 2F Stairwell protective guard rails
  p.box('int', 0.08, 0.92, 4.18, 3.16, Y2 + 0.46, 0.08, trimWood, { solid: true });
  p.box('int', 1.85, 0.92, 0.08, 4.05, Y2 + 0.46, 2.16, trimWood, { solid: true });

  // 2F Exterior Walls (Vertical Cedar Clapboard Siding + Tall Meiji Frosted Windows!)
  // Front 2F (+Z = +4.0) with 3 rhythmic tall vertical windows
  p.box('ext', 1.6, h2, 0.22, -4.3, mid2, 4.0, vertCedar, { solid: true });
  for (const wx of [-2.75, 0.0, 2.75]) {
    p.box('ext', 1.50, 0.85, 0.22, wx, Y2 + 0.42, 4.0, vertCedar, { solid: true });
    p.box('ext', 1.50, 0.65, 0.22, wx, Y2 + 2.67, 4.0, vertCedar, { solid: true });
    p.box('ext', 1.46, 1.50, 0.06, wx, Y2 + 1.60, 4.0, glassTall, { uvScale: 0 });
  }
  p.box('ext', 1.25, h2, 0.22, -1.38, mid2, 4.0, vertCedar, { solid: true });
  p.box('ext', 1.25, h2, 0.22, 1.38, mid2, 4.0, vertCedar, { solid: true });
  p.box('ext', 1.65, h2, 0.22, 4.32, mid2, 4.0, vertCedar, { solid: true });
  // Back, West, East 2F walls
  p.box('ext', 10.35, h2, 0.22, 0, mid2, -4.0, vertCedar, { solid: true });
  p.box('ext', 0.22, h2, 2.6, -5.1, mid2, -2.7, vertCedar, { solid: true });
  p.box('ext', 0.22, 0.85, 2.8, -5.1, Y2 + 0.42, 0.0, vertCedar, { solid: true });
  p.box('ext', 0.22, 0.65, 2.8, -5.1, Y2 + 2.67, 0.0, vertCedar, { solid: true });
  p.box('ext', 0.06, 1.50, 2.76, -5.1, Y2 + 1.60, 0.0, glassTall, { uvScale: 0 });
  p.box('ext', 0.22, h2, 2.6, -5.1, mid2, 2.7, vertCedar, { solid: true });
  p.box('ext', 0.22, h2, 8.15, 5.1, mid2, 0, vertCedar, { solid: true });

  // 2F Living Props: Living table, vanity, curtains, kitchen unit, tatami futon & antique tansu
  p.box('int', 1.65, 0.76, 0.92, -2.55, Y2 + 0.38, 1.15, trimWood, { solid: true });
  p.box('int', 0.95, 1.32, 0.50, -4.45, Y2 + 0.66, 2.45, vanityWood, { solid: true, uvScale: 0 });
  p.box('int', 0.05, 1.55, 0.65, -4.92, Y2 + 1.60, -1.05, curtainMat, { uvScale: 0 });
  p.box('int', 1.85, 0.88, 0.62, -3.75, Y2 + 0.44, -3.45, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 1.45, 1.38, 0.54, 1.35, Y2 + 0.72, 3.45, tansuMat, { solid: true, uvScale: 0 });
  p.box('int', 1.45, 0.14, 1.95, 1.25, Y2 + 0.11, 0.95, futonMat, { uvScale: 0 });

  // 2F -> 3F Staircase along NORTH Wall (Z = -2.65, X: +2.05 -> -1.95, Y2 -> Y3!)
  p.stairRun('int', {
    x0: 2.05,
    z0: -2.65,
    x1: -1.95,
    z1: -2.65,
    y0: Y2 + 0.04,
    y1: Y3 + 0.04,
    width: 1.15,
    steps: 14,
    treadMat: oakFloor,
    stringerMat: trimWood,
    railMat: trimWood,
    railLeft: true,
    railRight: false,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 4. 3F: MEDICAL LIBRARY, ARCHIVE & LECTURE CHALKBOARD (Y=+6.55m)
  // =========================================================================
  const h3 = YTOP - Y3; // 2.80m
  const mid3 = Y3 + h3 * 0.5;

  // 3F Floor Slabs leaving clean cutout over 2F->3F stairwell (X ∈ [-2.05, +2.15], Z ∈ [-3.4, -1.95])
  p.box('int', 10.0, 0.16, 5.85, 0, Y3 - 0.06, 0.98, oakFloor);
  p.box('int', 2.98, 0.16, 1.95, -3.52, Y3 - 0.06, -2.92, oakFloor);
  p.box('int', 2.88, 0.16, 1.95, 3.55, Y3 - 0.06, -2.92, oakFloor);

  p.collider(-5.0, 5.0, Y3 - 0.16, Y3 + 0.02, -1.95, 3.9);
  p.collider(-5.0, -2.05, Y3 - 0.16, Y3 + 0.02, -3.9, -1.95);
  p.collider(2.15, 5.0, Y3 - 0.16, Y3 + 0.02, -3.9, -1.95);

  p.floor(-4.95, 4.95, -1.95, 3.85, Y3 + 0.04);
  p.floor(-4.95, -1.95, -3.85, -1.90, Y3 + 0.04);
  p.floor(2.15, 4.95, -3.85, -1.90, Y3 + 0.04);

  // 3F Stairwell guard railings
  p.box('int', 4.22, 0.92, 0.08, 0.05, Y3 + 0.46, -1.96, trimWood, { solid: true });
  p.box('int', 0.08, 0.92, 1.92, 2.15, Y3 + 0.46, -2.92, trimWood, { solid: true });

  // 3F Exterior Walls (Cream Plaster + Corner Timber Quoins + Wide Library Windows)
  p.box('ext', 2.6, h3, 0.22, -3.8, mid3, 4.0, creamPlaster, { solid: true });
  p.box('ext', 5.0, 0.82, 0.22, 0.0, Y3 + 0.41, 4.0, creamPlaster, { solid: true });
  p.box('ext', 5.0, 0.58, 0.22, 0.0, Y3 + 2.51, 4.0, creamPlaster, { solid: true });
  p.box('ext', 4.96, 1.40, 0.06, 0.0, Y3 + 1.52, 4.0, glassTall, { uvScale: 0 });
  p.box('ext', 2.6, h3, 0.22, 3.8, mid3, 4.0, creamPlaster, { solid: true });
  p.box('ext', 10.35, h3, 0.22, 0, mid3, -4.0, creamPlaster, { solid: true });
  p.box('ext', 0.22, h3, 8.15, -5.1, mid3, 0, creamPlaster, { solid: true });
  p.box('ext', 0.22, h3, 8.15, 5.1, mid3, 0, creamPlaster, { solid: true });
  // Classical corner quoins on all 4 corners of 1F–3F
  for (const cx of [-5.12, 5.12]) {
    for (const cz of [-4.02, 4.02]) {
      p.box('ext', 0.28, YTOP - Y1, 0.28, cx, (Y1 + YTOP) * 0.5, cz, trimWood);
    }
  }

  // 3F Ceiling & Medical Archive Furnishings
  p.box('int', 10.0, 0.12, 7.8, 0, YTOP - 0.04, 0, creamPlaster);
  p.collider(-5.0, 5.0, YTOP - 0.12, YTOP + 0.1, -3.9, 3.9);

  p.box('int', 0.52, 1.95, 2.4, -4.65, Y3 + 0.98, 0.5, bookcaseFull, { solid: true, uvScale: 0 });
  p.box('int', 0.52, 1.95, 2.4, 4.65, Y3 + 0.98, 0.5, shelfFilled, { solid: true, uvScale: 0 });
  p.box('int', 2.4, 1.32, 0.06, 0.0, Y3 + 1.65, -3.82, chalkboard, { uvScale: 0 });
  p.box('int', 1.85, 0.80, 0.92, 0.0, Y3 + 0.42, 0.95, trimWood, { solid: true });
  p.box('int', 0.64, 1.48, 0.58, 3.85, Y3 + 0.74, 3.35, fileCab, { solid: true, uvScale: 0 });

  // =========================================================================
  // 5. GIYOFU FRONT PEDIMENT KAWARA PORCH + GRAND IBUSHI-GIN IRIMOYA ROOF
  // =========================================================================
  // 5A. Front Portico Miniature Kirizuma Kawara Pediment Roof (above twin white columns!)
  const pPitch = 0.48;
  const pRun = 1.95;
  const pRidgeY = Y2 + 0.02 + pRun * Math.tan(pPitch);
  p.kawaraSlope('ext', {
    bottomWidth: 2.0,
    run: pRun,
    pitch: pPitch,
    ridgeX: 1.2,
    ridgeY: pRidgeY,
    ridgeZ: 4.82,
    downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: trimWood,
    ribSpacing: 0.34,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 2.0,
    run: pRun,
    pitch: pPitch,
    ridgeX: 1.2,
    ridgeY: pRidgeY,
    ridgeZ: 4.82,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: trimWood,
    ribSpacing: 0.34,
  });
  p.gablePrism('ext', 3.4, pRidgeY - Y2 + 0.08, 0.22, 1.2, Y2 - 0.06, 5.25, whiteColumn);
  p.kawaraRidge('ext', 1.2, pRidgeY + 0.04, 3.95, 1.2, pRidgeY + 0.04, 5.82, kawaraRidge, oniMat, {
    scale: 0.80,
    oniStart: false,
    oniEnd: true,
    courses: 2,
  });

  // 5B. Grand 3F Ibushi-gin Irimoya Kawara Crown Roof
  const mPitch = 0.48;
  const mRun = 5.15;
  const yRidge = YTOP - 0.14 + mRun * Math.tan(mPitch); // ~11.90m
  const yBreak = YTOP + 1.15;

  p.kawaraSlope('ext', {
    topWidth: 6.8,
    bottomWidth: 12.6,
    run: mRun,
    pitch: mPitch,
    ridgeX: 0,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: trimWood,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 6.8,
    bottomWidth: 12.6,
    run: mRun,
    pitch: mPitch,
    ridgeX: 0,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: trimWood,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 5.0,
    bottomWidth: 10.3,
    run: 2.95,
    pitch: mPitch,
    ridgeX: 3.40,
    ridgeY: yBreak + 0.12,
    ridgeZ: 0,
    downslopeYaw: Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: trimWood,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    topWidth: 5.0,
    bottomWidth: 10.3,
    run: 2.95,
    pitch: mPitch,
    ridgeX: -3.40,
    ridgeY: yBreak + 0.12,
    ridgeZ: 0,
    downslopeYaw: -Math.PI * 0.5,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    eaveMat: kawaraRidge,
    rafterMat: trimWood,
    ribSpacing: 0.38,
  });

  // Giyofu Cream Plaster Irimoya Gables + Main & Hip Ridges + Onigawara
  p.gablePrism('ext', 5.0, yRidge - yBreak, 0.22, 3.35, yBreak, 0, creamPlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 5.0, yRidge - yBreak, 0.22, -3.35, yBreak, 0, creamPlaster, { ry: Math.PI * 0.5 });
  p.kawaraRidge('ext', -3.45, yRidge + 0.05, 0, 3.45, yRidge + 0.05, 0, kawaraRidge, oniMat, {
    scale: 1.15,
    oniStart: true,
    oniEnd: true,
    courses: 3,
  });
  const yEave = YTOP - 0.12;
  p.kawaraRidge('ext', -3.4, yBreak + 0.12, 2.5, -6.25, yEave, 5.1, kawaraRidge, oniMat, { scale: 0.74, oniEnd: true });
  p.kawaraRidge('ext', 3.4, yBreak + 0.12, 2.5, 6.25, yEave, 5.1, kawaraRidge, oniMat, { scale: 0.74, oniEnd: true });
  p.kawaraRidge('ext', -3.4, yBreak + 0.12, -2.5, -6.25, yEave, -5.1, kawaraRidge, oniMat, { scale: 0.74, oniEnd: true });
  p.kawaraRidge('ext', 3.4, yBreak + 0.12, -2.5, 6.25, yEave, -5.1, kawaraRidge, oniMat, { scale: 0.74, oniEnd: true });

  return p.build({
    id: site.id,
    name: '白井医院（明治擬洋風三階木造診療所）',
    subtitle: '明治25年築・淡煉瓦腰壁＆青琺瑯看板・白タイル診察室・3F医学書庫・三階建',
    category: 'house',
    builtYear: 1892,
    abandonedYear: 1985,
    stories: 3,
    floorElevations: [Y1 + 0.04, Y2 + 0.04, Y3 + 0.04],
    entryLocal: [1.2, 0.0, 7.5],
  });
}
