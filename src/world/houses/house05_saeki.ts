import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H05: 佐伯家（苔と蔦の半壊二階廃墟）— 1875年（明治8年）築・1985年廃村
 * 濃密な蔦壁と剥離漆喰に覆われ、玄関瓦庇が傾き、北東側の黒瓦屋根＆2F天井が崩落して
 * 青空と太陽光が室内の苔侵食畳へ直接差し込む幻想的な半壊二階建廃家
 */
export function buildHouse05Saeki(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  const mossyRock = catalog.getMaterial('moss_rock_heavy', { roughness: 0.96, bumpScale: 0.08 });
  const ivyDense = catalog.getMaterial('ivy_dense_wall', { roughness: 0.95, bumpScale: 0.07 });
  const ivyPlaster = catalog.getMaterial('ivy_climbing_plaster', { roughness: 0.94, bumpScale: 0.06 });
  const peelingBrick = catalog.getMaterial('peeling_plaster_brick', { roughness: 0.94, bumpScale: 0.06 });
  const crumbleStucco = catalog.getMaterial('crumbling_brick_stucco', { roughness: 0.95, bumpScale: 0.06 });
  const deepMoss = catalog.getMaterial('deep_moss', { roughness: 0.97, bumpScale: 0.08 });
  const fallenLeaves = catalog.getMaterial('fallen_leaves', { roughness: 0.96, bumpScale: 0.06 });
  const darkEarth = catalog.getMaterial('dark_soil', { roughness: 0.97, bumpScale: 0.06 });
  const agedRush = catalog.getMaterial('aged_rush_mat', { roughness: 0.95, bumpScale: 0.05 });
  const rotPlank = catalog.getMaterial('driftwood', { roughness: 0.95, bumpScale: 0.06 });
  const darkTimber = catalog.getMaterial('charred_cedar', { roughness: 0.93, bumpScale: 0.05 });
  const crackedConc = catalog.getMaterial('cracked_concrete', { roughness: 0.94, bumpScale: 0.05 });
  const shojiTorn = catalog.getMaterial('shoji_sliding_door', { roughness: 0.9, opacity: 0.78, transparent: true });
  const emptyShelf = catalog.getMaterial('empty_bookshelf', { roughness: 0.88, bumpScale: 0.04 });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.84, bumpScale: 0.04 });
  const vanityMat = catalog.getMaterial('wooden_vanity', { roughness: 0.86, bumpScale: 0.04 });

  // Moss-blanketed black kawara & exposed broken rafters
  const mossKawaraDeck = catalog.getMaterial('deep_moss', { roughness: 0.95, bumpScale: 0.08, tint: 0x7c8f68 });
  const darkKawaraDeck = catalog.getMaterial('dark_slate', { roughness: 0.85, bumpScale: 0.06, tint: 0x7e8780 });
  const kawaraRib = catalog.getMaterial('slate_roof_dark', { roughness: 0.82, bumpScale: 0.05, tint: 0x6f7872 });
  const ridgeMat = catalog.getMaterial('dark_iron_plate', { roughness: 0.78, metalness: 0.18 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.72, metalness: 0.22 });

  const Y1 = 0.35;
  const Y2 = 3.20;
  const YTOP = 5.90;

  // =========================================================================
  // 1. MOSSY FOUNDATION & OVERGROWN CRUMBLING FRONT STEPS
  // =========================================================================
  p.box('ext', 8.7, 0.95, 7.3, 0, Y1 - 0.48, 0, mossyRock);
  p.stoneSteps('ext', 0.95, 4.75, 3.55, -0.35, Y1, 2.0, 4, mossyRock);

  // =========================================================================
  // 2. 1F: MUD-MOSS DOMA, TOPPLED BOOKSHELF LIVING ROOM & ROTTING KITCHEN (Y=+0.35m)
  // =========================================================================
  const h1 = Y2 - Y1; // 2.85m
  const mid1 = Y1 + h1 * 0.5;
  p.box('int', 8.2, 0.08, 6.8, 0, Y1 - 0.04, 0, darkEarth);
  // Thick fallen-leaves & moss drift carpeting the open entry & collapsed east living area
  p.box('int', 4.0, 0.05, 3.6, 1.8, Y1 + 0.02, 1.4, fallenLeaves);
  p.box('int', 4.2, 0.05, 3.8, 1.7, Y1 + 0.02, -1.5, deepMoss);
  p.box('int', 3.7, 0.06, 6.4, -2.15, Y1 + 0.01, 0, rotPlank);
  p.floor(-4.0, 4.0, -3.3, 3.6, Y1 + 0.04);

  // 1F Exterior Walls (Heavily Ivy-Choked & Crumbling Brick-Plaster)
  // Front (+Z = +3.5): wide open sagging entrance X ∈ [0.15, 1.85]
  p.box('ext', 4.35, h1, 0.24, -2.02, mid1, 3.5, ivyDense, { solid: true });
  p.box('ext', 1.74, 0.68, 0.24, 1.00, Y1 + 2.51, 3.5, peelingBrick, { solid: true });
  p.box('ext', 2.35, h1, 0.24, 3.02, mid1, 3.5, ivyPlaster, { solid: true });

  // Back (-Z = -3.5): partially crumbled upper northeast section letting sunlight pour in!
  p.box('ext', 4.6, h1, 0.24, -1.9, mid1, -3.5, ivyDense, { solid: true });
  p.box('ext', 3.8, 1.85, 0.24, 2.3, Y1 + 0.92, -3.5, crumbleStucco, { solid: true });

  // West (-X = -4.2) & East (+X = +4.2) walls
  p.box('ext', 0.24, h1, 7.15, -4.2, mid1, 0, ivyDense, { solid: true });
  p.box('ext', 0.24, h1, 3.6, 4.2, mid1, 1.75, ivyPlaster, { solid: true });
  p.box('ext', 0.24, 2.1, 3.55, 4.2, Y1 + 1.05, -1.78, crumbleStucco, { solid: true });

  // Interior decaying partition with crooked torn shoji door (X = -0.35, wide opening Z ∈ [-0.8, +0.9])
  p.box('int', 0.14, h1, 2.6, -0.35, mid1, -2.1, peelingBrick, { solid: true });
  p.box('int', 0.14, h1, 2.5, -0.35, mid1, 2.2, peelingBrick, { solid: true });
  p.box('int', 0.14, 0.68, 1.75, -0.35, Y1 + 2.51, 0.05, peelingBrick, { solid: true });
  // Crooked detached shoji leaf leaning against wall!
  p.box('int', 0.06, 1.95, 0.92, -0.15, Y1 + 0.98, 1.65, shojiTorn, { rz: 0.14, ry: 0.22, uvScale: 0 });

  // 1F Decay Storytelling Props: Toppled Bookshelf, Mossy Concrete Sink, Fallen Beams & Moss Mounds!
  p.box('int', 1.65, 1.85, 0.44, 2.35, Y1 + 0.42, -1.55, emptyShelf, { rx: 1.32, ry: 0.35, uvScale: 0 });
  p.box('int', 1.75, 0.84, 0.65, -2.55, Y1 + 0.42, -3.02, crackedConc, { solid: true });
  p.box('int', 1.45, 0.22, 0.55, -2.55, Y1 + 0.88, -3.02, deepMoss);
  p.box('int', 0.95, 1.25, 0.52, -3.55, Y1 + 0.64, -1.55, vanityMat, { ry: 0.12, solid: true, uvScale: 0 });
  // Fallen broken wooden timber & moss rubble inside NE 1F corner
  p.box('int', 2.4, 0.16, 0.16, 2.6, Y1 + 0.48, -2.4, darkTimber, { rz: 0.32, ry: -0.45 });
  p.box('int', 1.2, 0.36, 1.0, 3.2, Y1 + 0.18, -2.6, mossyRock);

  // Slightly Leaning Decaying Wooden Staircase along West Wall (X = -3.15, Z: +1.75 -> -1.75, Y1 -> Y2)
  p.stairRun('int', {
    x0: -3.15,
    z0: 1.75,
    x1: -3.15,
    z1: -1.75,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.12,
    steps: 13,
    treadMat: rotPlank,
    stringerMat: darkTimber,
    railMat: darkTimber,
    railLeft: false,
    railRight: true,
    guardLeft: false,
    guardRight: true,
    tiltZ: 0.035,
  });

  // =========================================================================
  // 3. 2F: MOSS-INVADED TATAMI & SUNLIT SKY-HOLE COLLAPSED ROOM (Y=+3.20m)
  // =========================================================================
  const h2 = YTOP - Y2; // 2.70m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs leaving West stairwell open (X ∈ [-4.1, -2.45], Z ∈ [-1.75, +1.85])
  p.box('int', 6.65, 0.16, 6.85, 0.85, Y2 - 0.06, 0, rotPlank);
  p.box('int', 1.65, 0.16, 1.75, -3.28, Y2 - 0.06, -2.58, rotPlank);
  p.box('int', 1.65, 0.16, 1.65, -3.28, Y2 - 0.06, 2.62, rotPlank);
  // Moss-invaded aged rush tatami mats & sunlit moss carpet under the NE sky hole!
  p.box('int', 3.4, 0.04, 5.2, -0.55, Y2 + 0.03, -0.35, agedRush);
  p.box('int', 2.8, 0.05, 3.6, 2.45, Y2 + 0.03, -1.25, deepMoss);
  p.box('int', 1.8, 0.05, 2.1, -0.25, Y2 + 0.04, -1.85, deepMoss);

  p.collider(-2.45, 4.1, Y2 - 0.16, Y2 + 0.02, -3.4, 3.4);
  p.collider(-4.1, -2.45, Y2 - 0.16, Y2 + 0.02, -3.4, -1.80);
  p.collider(-4.1, -2.45, Y2 - 0.16, Y2 + 0.02, 1.90, 3.4);

  p.floor(-2.45, 4.0, -3.3, 3.3, Y2 + 0.04);
  p.floor(-4.0, -2.45, -3.3, -1.72, Y2 + 0.04);
  p.floor(-4.0, -2.45, 1.85, 3.3, Y2 + 0.04);

  // Stairwell guard rail on 2F
  p.box('int', 0.08, 0.90, 3.65, -2.46, Y2 + 0.45, 0.05, darkTimber, { solid: true });
  p.box('int', 1.62, 0.90, 0.08, -3.28, Y2 + 0.45, 1.88, darkTimber, { solid: true });

  // 2F Exterior Walls — INTACT West & Front, CRUMBLED LOW RUIN WALLS on North-East Corner!
  // Front 2F (+Z = +3.5) with ivy-draped open broken window
  p.box('ext', 2.6, h2, 0.22, -2.9, mid2, 3.5, ivyPlaster, { solid: true });
  p.box('ext', 2.8, 0.85, 0.22, -0.2, Y2 + 0.42, 3.5, peelingBrick, { solid: true });
  p.box('ext', 2.8, 0.55, 0.22, -0.2, Y2 + 2.42, 3.5, ivyPlaster, { solid: true });
  p.box('ext', 3.0, h2, 0.22, 2.7, mid2, 3.5, ivyDense, { solid: true });
  // West 2F (-X = -4.2) fully standing under moss
  p.box('ext', 0.22, h2, 7.1, -4.2, mid2, 0, ivyDense, { solid: true });
  // Back 2F (-Z = -3.5): West half stands full height, EAST half collapsed to waist-high jagged ruin!
  p.box('ext', 4.3, h2, 0.22, -2.05, mid2, -3.5, ivyPlaster, { solid: true });
  p.box('ext', 4.1, 1.15, 0.22, 2.15, Y2 + 0.58, -3.5, crumbleStucco, { solid: true });
  // East 2F (+X = +4.2): South half stands, NORTH half crumbled to waist-high ruin overlooking the forest!
  p.box('ext', 0.22, h2, 3.4, 4.2, mid2, 1.8, ivyPlaster, { solid: true });
  p.box('ext', 0.22, 1.25, 3.7, 4.2, Y2 + 0.62, -1.75, crumbleStucco, { solid: true });

  // 2F Half-Ceiling (ONLY over intact West half X < 0.0, leaving EAST completely open to sky!)
  p.box('int', 4.2, 0.12, 6.8, -2.05, YTOP - 0.06, 0, rotPlank);
  p.collider(-4.1, 0.05, YTOP - 0.12, YTOP + 0.1, -3.4, 3.4);

  // 2F Ruin Props: Tilted Antique Tansu, Fallen Roof Beams & Scattered Dark Kawara Shards!
  p.box('int', 1.45, 1.42, 0.56, -0.95, Y2 + 0.72, -2.92, tansuMat, { rz: -0.10, solid: true, uvScale: 0 });
  // Fallen roof beams resting physically from crumbled east/north ruin walls down onto the mossy 2F floor!
  p.box('int', 3.45, 0.18, 0.18, 2.62, Y2 + 0.72, -1.55, darkTimber, { rz: 0.36, ry: 0.12 });
  p.box('int', 0.14, 0.14, 3.15, 1.85, Y2 + 0.67, -2.00, darkTimber, { rx: 0.36, ry: -0.14 });
  p.box('int', 1.1, 0.24, 0.9, 2.25, Y2 + 0.14, -1.85, darkKawaraDeck, { ry: 0.5, rx: 0.14 });
  p.box('int', 0.85, 0.18, 0.75, 1.45, Y2 + 0.10, -2.45, kawaraRib, { ry: -0.4, rz: 0.16 });

  // =========================================================================
  // 4. COLLAPSED & MOSS-DRAPED BLACK KAWARA ROOFS + TILTED ENTRANCE CANOPY!
  // =========================================================================
  // 4A. Drunkenly Tilted Front Entrance Kawara Canopy (傾いた玄関瓦庇!)
  p.box('ext', 2.85, 0.14, 1.55, 1.05, Y2 + 0.05, 4.18, darkKawaraDeck, { rx: 0.36, rz: -0.16 });
  for (let i = -3; i <= 3; i++) {
    p.box('ext', 0.11, 0.07, 1.55, 1.05 + i * 0.38, Y2 + 0.11 - i * 0.06, 4.18, kawaraRib, { rx: 0.36, rz: -0.16 });
  }
  p.box('ext', 0.14, 2.85, 0.14, -0.22, Y1 + 1.42, 4.78, darkTimber, { rz: 0.08 });
  p.box('ext', 0.14, 2.55, 0.14, 2.25, Y1 + 1.25, 4.78, darkTimber, { rz: -0.16 });

  // 4B. Surviving West-Half Moss-Blanketed Black Kawara Kirizuma Roof (X ∈ [-5.1, +0.4])
  const rPitch = 0.50;
  const rRun = 4.45;
  const yRidge = YTOP - 0.12 + rRun * Math.tan(rPitch); // ~8.21m

  // Front (+Z) full width surviving slope (missing a few edge tiles near east break!)
  p.kawaraSlope('ext', {
    bottomWidth: 9.8,
    run: rRun,
    pitch: rPitch,
    ridgeX: 0,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: 0,
    tileMat: mossKawaraDeck,
    ribMat: kawaraRib,
    eaveMat: ridgeMat,
    rafterMat: darkTimber,
    ribSpacing: 0.40,
    skipRibPredicate: (u) => u > 2.6,
  });
  // Back (-Z) ONLY WEST HALF SURVIVES (X ∈ [-4.9, +0.3], width = 5.2m -> huge sunlit hole over NE room!)
  p.kawaraSlope('ext', {
    bottomWidth: 5.3,
    run: rRun,
    pitch: rPitch,
    ridgeX: -2.25,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: Math.PI,
    tileMat: mossKawaraDeck,
    ribMat: kawaraRib,
    eaveMat: ridgeMat,
    rafterMat: darkTimber,
    ribSpacing: 0.40,
    skipRibPredicate: (u) => u < -1.9, // Note: downslopeYaw=PI flips local +u toward -X, so u < -1.9 is near east break!
  });

  // Surviving West Gable Wall (妻壁) & Broken Main Ridge with one surviving Onigawara on West!
  p.gablePrism('ext', 7.2, yRidge - YTOP + 0.14, 0.22, -4.2, YTOP - 0.06, 0, ivyPlaster, { ry: Math.PI * 0.5 });
  p.kawaraRidge('ext', -4.85, yRidge + 0.04, 0, 1.35, yRidge + 0.04, 0, ridgeMat, oniMat, {
    scale: 1.0,
    oniStart: true,
    oniEnd: false,
    courses: 2,
  });

  // Exposed snapped rafters anchored firmly to the surviving ridge (Z=0, Y=yRidge) canting down into the NE opening!
  for (let k = 0; k < 4; k++) {
    const len = 1.95 - k * 0.24;
    const xPos = 0.25 + k * 0.62;
    // Start directly on the ridge line (z = 0, y = yRidge - 0.10) and extend toward -Z along -rPitch
    const halfLen = len * 0.5;
    const cz = -halfLen * Math.cos(rPitch);
    const cy = yRidge - 0.10 - halfLen * Math.sin(rPitch);
    p.box('ext', 0.11, 0.11, len, xPos, cy, cz, darkTimber, {
      rx: -rPitch,
    });
  }

  return p.build({
    id: site.id,
    name: '佐伯家（苔と蔦の半壊二階廃墟）',
    subtitle: '明治8年築・濃密蔦壁＆傾き庇・北東黒瓦屋根崩落（天井抜け青空露出）・二階建',
    category: 'house',
    builtYear: 1875,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1 + 0.04, Y2 + 0.04],
    entryLocal: [1.0, 0.0, 5.8],
  });
}
