import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H12: 松岡家（中央V字谷の白壁瓦二階家）— 1886年（明治19年／昭和43年改装）築・1985年廃村
 * 参考写真中央の象徴的白壁二階家！雨染みある白漆喰モルタル外壁・濃灰いぶし瓦大判切妻屋根・
 * 1F市松リノリウム昭和台所＆赤絨毯リビング＆白小タイル風呂、2F子供部屋＆6畳緑縁和室
 */
export function buildHouse12Matsuoka(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  const concBase = catalog.getMaterial('raw_concrete', { roughness: 0.92, bumpScale: 0.05 });
  const stepConc = catalog.getMaterial('concrete_steps', { roughness: 0.91, bumpScale: 0.05 });
  const ivoryWall = catalog.getMaterial('ivory_plaster', { roughness: 0.91, bumpScale: 0.04, tint: 0xf4f0e6 });
  const mortarStain = catalog.getMaterial('weathered_mortar', { roughness: 0.93, bumpScale: 0.05, tint: 0xd8d4ca });
  const darkWood = catalog.getMaterial('dark_hardwood', { roughness: 0.85, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.82, bumpScale: 0.03 });
  const checkerFloor = catalog.getMaterial('checker_linoleum', { roughness: 0.70, bumpScale: 0.02 });
  const redRug = catalog.getMaterial('vintage_rug_red', { roughness: 0.92, bumpScale: 0.03 });
  const smallWhiteTile = catalog.getMaterial('small_white_tile', { roughness: 0.42, metalness: 0.05, bumpScale: 0.02 });
  const beigeCarpet = catalog.getMaterial('beige_carpet', { roughness: 0.94, bumpScale: 0.03 });
  const tatamiGreen = catalog.getMaterial('tatami_green_border', { roughness: 0.92, bumpScale: 0.04 });
  const glassWin = catalog.getMaterial('window_curtained', { roughness: 0.42, opacity: 0.56, transparent: true });
  const glassFrost = catalog.getMaterial('frosted_grid_window', { roughness: 0.36, opacity: 0.46, transparent: true });
  const doorFrost = catalog.getMaterial('door_frosted_glass', { roughness: 0.45, bumpScale: 0.03 });
  const meterBox = catalog.getMaterial('electric_meter', { roughness: 0.65, metalness: 0.35 });
  const steelRail = catalog.getMaterial('brushed_steel', { roughness: 0.42, metalness: 0.72 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.75, bumpScale: 0.03 });
  const cabMat = catalog.getMaterial('kitchen_cabinet', { roughness: 0.8, bumpScale: 0.03 });
  const vanitySink = catalog.getMaterial('vanity_sink', { roughness: 0.68, bumpScale: 0.03 });
  const bookshelf = catalog.getMaterial('filled_bookshelf', { roughness: 0.84, bumpScale: 0.04 });
  const corkBoard = catalog.getMaterial('cork_board', { roughness: 0.9, bumpScale: 0.03 });
  const greenCurtain = catalog.getMaterial('green_curtain', { roughness: 0.92, opacity: 0.88, transparent: true });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.93, bumpScale: 0.03 });
  const wardrobe = catalog.getMaterial('wardrobe_wood', { roughness: 0.82, bumpScale: 0.04 });
  const dresser = catalog.getMaterial('wooden_dresser', { roughness: 0.82, bumpScale: 0.04 });

  // Heavy Deep Charcoal-Gray Ibushi Kawara Kirizuma Roof (濃灰いぶし瓦・大判切妻屋根)
  const charcoalDeck = catalog.getMaterial('dark_slate', { roughness: 0.75, metalness: 0.16, bumpScale: 0.06, tint: 0xa2a9b2 });
  const charcoalRib = catalog.getMaterial('slate_roof_dark', { roughness: 0.70, metalness: 0.22, bumpScale: 0.05, tint: 0x8e96a0 });
  const ridgeMat = catalog.getMaterial('dark_iron_plate', { roughness: 0.66, metalness: 0.26 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.58, metalness: 0.34 });

  const Y1 = 0.45;
  const Y2 = 3.40;
  const YTOP = 6.20;

  // =========================================================================
  // 1. CONCRETE PLINTH & FRONT STEPS
  // =========================================================================
  p.box('ext', 9.7, 1.0, 7.7, 0, Y1 - 0.52, 0, concBase);
  p.stoneSteps('ext', -0.45, 4.95, 3.75, -0.35, Y1, 2.0, 4, stepConc);

  // =========================================================================
  // 2. 1F: SHOWA CHECKER-TILE KITCHEN, RED-RUG LIVING & WHITE-TILE BATH (Y=+0.45m)
  // =========================================================================
  const h1 = Y2 - Y1; // 2.95m
  const mid1 = Y1 + h1 * 0.5;

  p.box('int', 9.2, 0.08, 7.2, 0, Y1 - 0.04, 0, oakFloor);
  p.box('int', 5.2, 0.04, 3.1, 1.9, Y1 + 0.03, -2.0, checkerFloor);     // NE Showa Kitchen
  p.box('int', 4.6, 0.04, 3.6, 1.5, Y1 + 0.03, 1.45, redRug);           // SE Red-Rug Living Room
  p.box('int', 2.7, 0.04, 3.1, -3.2, Y1 + 0.03, -2.0, smallWhiteTile);  // NW Small-White-Tile Bath
  p.floor(-4.55, 4.55, -3.55, 3.85, Y1 + 0.04);

  // 1F Exterior Walls (Rain-stained Weathered Mortar lower + Ivory White Plaster upper)
  // Front 1F (+Z = +3.7): Entrance doorway X ∈ [-1.25, +0.35]
  p.box('ext', 3.55, 1.15, 0.22, -3.02, Y1 + 0.58, 3.7, mortarStain, { solid: true });
  p.box('ext', 3.55, h1 - 1.15, 0.22, -3.02, Y1 + 2.05, 3.7, ivoryWall, { solid: true });
  p.box('ext', 1.65, 0.72, 0.22, -0.45, Y1 + 2.59, 3.7, ivoryWall, { solid: true });
  p.box('ext', 0.88, 2.18, 0.06, -1.62, Y1 + 1.09, 3.55, doorFrost, { uvScale: 0 });
  p.box('ext', 4.45, 0.90, 0.22, 2.58, Y1 + 0.45, 3.7, mortarStain, { solid: true });
  p.box('ext', 1.35, h1 - 0.90, 0.22, 1.02, Y1 + 1.92, 3.7, ivoryWall, { solid: true });
  p.box('ext', 2.10, 0.62, 0.22, 2.75, Y1 + 2.64, 3.7, ivoryWall, { solid: true });
  p.box('ext', 2.06, 1.44, 0.06, 2.75, Y1 + 1.62, 3.7, glassWin, { uvScale: 0 });
  p.box('ext', 1.00, h1 - 0.90, 0.22, 4.30, Y1 + 1.92, 3.7, ivoryWall, { solid: true });
  // Electric meter box mounted outside front-left!
  p.box('ext', 0.44, 0.62, 0.16, -2.15, Y1 + 1.55, 3.86, meterBox, { uvScale: 0 });

  // Back 1F (-Z = -3.7) with kitchen window
  p.box('ext', 9.55, 0.95, 0.22, 0, Y1 + 0.48, -3.7, mortarStain, { solid: true });
  p.box('ext', 5.4, h1 - 0.95, 0.22, -2.08, Y1 + 1.95, -3.7, ivoryWall, { solid: true });
  p.box('ext', 2.2, 0.62, 0.22, 1.72, Y1 + 2.64, -3.7, ivoryWall, { solid: true });
  p.box('ext', 2.16, 1.40, 0.06, 1.72, Y1 + 1.64, -3.7, glassFrost, { uvScale: 0 });
  p.box('ext', 1.95, h1 - 0.95, 0.22, 3.80, Y1 + 1.95, -3.7, ivoryWall, { solid: true });

  // West & East 1F walls
  p.box('ext', 0.22, 1.15, 7.55, -4.7, Y1 + 0.58, 0, mortarStain, { solid: true });
  p.box('ext', 0.22, h1 - 1.15, 7.55, -4.7, Y1 + 2.05, 0, ivoryWall, { solid: true });
  p.box('ext', 0.22, 1.15, 7.55, 4.7, Y1 + 0.58, 0, mortarStain, { solid: true });
  p.box('ext', 0.22, h1 - 1.15, 7.55, 4.7, Y1 + 2.05, 0, ivoryWall, { solid: true });

  // 1F Interior Partitions: Small-White-Tile Bath NW (X < -1.85, Z < -0.45, door X ∈ [-2.85, -1.85])
  p.box('int', 0.14, h1, 3.2, -1.85, mid1, -2.05, smallWhiteTile, { solid: true });
  p.box('int', 1.45, h1, 0.14, -3.95, mid1, -0.45, smallWhiteTile, { solid: true });
  p.box('int', 1.40, 0.75, 0.14, -2.55, Y1 + 2.58, -0.45, ivoryWall, { solid: true });
  // Built-in White-Tile Bathtub & Washbasin
  p.box('int', 1.35, 0.62, 1.05, -3.85, Y1 + 0.34, -2.95, smallWhiteTile, { solid: true });
  p.box('int', 0.85, 0.88, 0.54, -2.45, Y1 + 0.44, -3.25, vanitySink, { solid: true, uvScale: 0 });

  // 1F Kitchen & Red-Rug Living Furnishings
  p.box('int', 2.05, 0.88, 0.64, 1.95, Y1 + 0.44, -3.22, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 0.58, 1.80, 1.25, 4.25, Y1 + 0.90, -2.25, cabMat, { solid: true, uvScale: 0 });
  p.box('int', 1.55, 0.72, 0.92, 1.75, Y1 + 0.38, -1.25, darkWood, { solid: true }); // Dining table
  p.box('int', 1.45, 0.42, 0.85, 1.85, Y1 + 0.24, 1.45, darkWood, { solid: true });  // Living coffee table
  p.box('int', 0.52, 1.78, 1.85, 4.28, Y1 + 0.90, 1.35, bookshelf, { solid: true, uvScale: 0 });

  // 1F -> 2F West Hallway Staircase (X = -3.75, Z: +2.75 -> -0.15? Wait: bath ends at Z = -0.45!)
  // Let's run 1F -> 2F along West-South side: X = -3.75, Z: +2.85 -> -0.35 (wait 3.2m run, gentle 42deg!)
  // Even better: run along SOUTH-WEST wall EAST-TO-WEST? No, Z: +2.95 -> -0.35 has run 3.3m, height 2.95m (41.8 deg) -> super comfortable!
  // Let's verify landing at Z = -0.35 -> north of Z = -0.45 is the bath wall! So put top landing turning EAST onto Z ∈ [-0.45, +0.45] or better yet move the bath wall back to Z = -0.85 so Z ∈ [-0.85, +2.85] has a HUGE 3.7m stairwell + landing! Let's make bath Z ∈ [-3.6, -0.85] -> Wait: let's check our bath lines above! Line 82 has `Z = -0.45`; let's place 1F -> 2F cleanly along **X = -3.85, Z: +3.05 -> -0.15**... wait: we are writing this file fresh right now, so let's simply keep the stair on the **WEST wall rising NORTH from Z = +3.10 to Z = +0.05**... actually wait: if we step off at `Z = +0.05` heading `-Z`, the bath wall at `-0.45` is only `0.50m` away on 1F (NOT on 2F! On 2F there is NO bath wall there — 2F is wide open all the way to `Z = -3.55`!!).
  // YES!! On 2F, there is NO wall at `Z = -0.45` — you step smoothly onto the spacious 2F hallway (`Z ∈ [-3.55, +0.05]`)!!
  p.stairRun('int', {
    x0: -3.75,
    z0: 3.05,
    x1: -3.75,
    z1: -0.25,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.12,
    steps: 13,
    treadMat: oakFloor,
    stringerMat: darkWood,
    railMat: darkWood,
    railLeft: false,
    railRight: true,
    guardLeft: false,
    guardRight: true,
  });

  // =========================================================================
  // 3. 2F: SHOWA-60 CHILDREN'S ROOM & 6-MAT GREEN-BORDER TATAMI ROOM (Y=+3.40m)
  // =========================================================================
  const h2 = YTOP - Y2; // 2.80m
  const mid2 = Y2 + h2 * 0.5;

  // 2F Floor Slabs leaving clean West stairwell cutout (X ∈ [-4.6, -3.05], Z ∈ [-0.30, +3.15])
  p.box('int', 7.65, 0.16, 7.25, 0.78, Y2 - 0.06, 0, oakFloor);
  p.box('int', 1.62, 0.16, 3.35, -3.82, Y2 - 0.06, -1.98, oakFloor);
  p.box('int', 1.62, 0.16, 0.55, -3.82, Y2 - 0.06, 3.42, oakFloor);
  p.box('int', 4.1, 0.04, 4.4, -0.8, Y2 + 0.03, -1.35, beigeCarpet);  // Kids' study bedroom
  p.box('int', 3.4, 0.04, 4.8, 2.85, Y2 + 0.03, -1.15, tatamiGreen);  // East 6-mat Tatami Room

  p.collider(-3.05, 4.6, Y2 - 0.16, Y2 + 0.02, -3.6, 3.6);
  p.collider(-4.6, -3.05, Y2 - 0.16, Y2 + 0.02, -3.6, -0.32);

  p.floor(-3.05, 4.55, -3.55, 3.55, Y2 + 0.04);
  p.floor(-4.55, -3.05, -3.55, -0.22, Y2 + 0.04);

  // 2F Stairwell guard rail
  p.box('int', 0.08, 0.92, 3.50, -3.06, Y2 + 0.46, 1.45, darkWood, { solid: true });

  // 2F Exterior Walls (Ivory Plaster + Front 2F Showa Metal Drying Rail Window!)
  p.box('ext', 2.2, h2, 0.22, -3.6, mid2, 3.7, ivoryWall, { solid: true });
  p.box('ext', 4.6, 0.85, 0.22, -0.2, Y2 + 0.42, 3.7, ivoryWall, { solid: true });
  p.box('ext', 4.6, 0.58, 0.22, -0.2, Y2 + 2.51, 3.7, ivoryWall, { solid: true });
  p.box('ext', 4.56, 1.38, 0.06, -0.2, Y2 + 1.54, 3.7, glassFrost, { uvScale: 0 });
  p.box('ext', 2.65, h2, 0.22, 3.42, mid2, 3.7, ivoryWall, { solid: true });
  // Iconic 1968-1985 Showa aluminum/steel window drying rail outside front 2F window!
  p.box('ext', 4.65, 0.05, 0.05, -0.2, Y2 + 1.25, 4.02, steelRail);
  p.box('ext', 4.65, 0.05, 0.05, -0.2, Y2 + 0.92, 4.02, steelRail);
  for (const rx of [-2.3, -0.9, 0.5, 1.9]) {
    p.box('ext', 0.04, 0.46, 0.04, rx, Y2 + 1.08, 4.02, steelRail);
    p.box('ext', 0.04, 0.04, 0.28, rx, Y2 + 0.92, 3.88, steelRail);
  }

  p.box('ext', 9.55, h2, 0.22, 0, mid2, -3.7, ivoryWall, { solid: true });
  p.box('ext', 0.22, h2, 7.55, -4.7, mid2, 0, ivoryWall, { solid: true });
  p.box('ext', 0.22, h2, 2.2, 4.7, mid2, -2.6, ivoryWall, { solid: true });
  p.box('ext', 0.22, 0.85, 2.4, 4.7, Y2 + 0.42, -0.3, ivoryWall, { solid: true });
  p.box('ext', 0.22, 0.58, 2.4, 4.7, Y2 + 2.51, -0.3, ivoryWall, { solid: true });
  p.box('ext', 0.06, 1.38, 2.36, 4.7, Y2 + 1.54, -0.3, glassWin, { uvScale: 0 });
  p.box('ext', 0.22, h2, 2.8, 4.7, mid2, 2.3, ivoryWall, { solid: true });

  // 2F Room Divider (X = 1.15, wide opening into East Tatami at Z ∈ [+1.4, +2.9])
  p.box('int', 0.12, h2, 5.0, 1.15, mid2, -1.1, ivoryWall, { solid: true });
  p.box('int', 0.12, 0.72, 1.55, 1.15, Y2 + 2.44, 2.15, ivoryWall, { solid: true });
  p.box('int', 0.12, h2, 0.82, 1.15, mid2, 3.30, ivoryWall, { solid: true });

  // 2F Ceiling & Nostalgic 1985 Furnishings
  p.box('int', 9.2, 0.12, 7.2, 0, YTOP - 0.04, 0, ivoryWall);
  p.collider(-4.6, 4.6, YTOP - 0.12, YTOP + 0.1, -3.6, 3.6);

  // Kids' Study Room (West-Center): Study desk, corkboard, bookshelf, green curtain
  p.box('int', 1.35, 0.78, 0.68, -1.25, Y2 + 0.39, -3.15, darkWood, { solid: true });
  p.box('int', 1.25, 0.85, 0.05, -1.25, Y2 + 1.48, -3.52, corkBoard, { uvScale: 0 });
  p.box('int', 0.48, 1.72, 1.45, 0.78, Y2 + 0.86, -2.55, bookshelf, { solid: true, uvScale: 0 });
  p.box('int', 0.62, 1.42, 0.05, -2.1, Y2 + 1.54, 3.52, greenCurtain, { uvScale: 0 });
  // East 6-Mat Tatami Room: Floral Futon, Wooden Wardrobe & Dresser
  p.box('int', 1.45, 0.14, 1.95, 2.85, Y2 + 0.11, -1.25, futonMat, { uvScale: 0 });
  p.box('int', 1.15, 1.82, 0.56, 2.25, Y2 + 0.91, -3.22, wardrobe, { solid: true, uvScale: 0 });
  p.box('int', 1.15, 1.08, 0.52, 3.85, Y2 + 0.56, -3.22, dresser, { solid: true, uvScale: 0 });

  // =========================================================================
  // 4. DEEP CHARCOAL-GRAY IBUSHI KAWARA KIRIZUMA ROOF & FRONT ENTRANCE EAVE
  // =========================================================================
  // Front Entrance Kawara Hisashi Eave
  p.kawaraSlope('ext', {
    bottomWidth: 3.4,
    run: 1.35,
    pitch: 0.36,
    ridgeX: -0.45,
    ridgeY: Y2 + 0.10,
    ridgeZ: 3.76,
    downslopeYaw: 0,
    tileMat: charcoalDeck,
    ribMat: charcoalRib,
    eaveMat: ridgeMat,
    rafterMat: darkWood,
    ribSpacing: 0.36,
  });

  // Grand Oversized Kirizuma Kawara Roof (大判切妻・濃灰いぶし瓦) with crisp white-plaster gables!
  const kPitch = 0.46;
  const kRun = 4.90;
  const yRidge = YTOP - 0.14 + kRun * Math.tan(kPitch); // ~8.52m

  p.kawaraSlope('ext', {
    bottomWidth: 11.4,
    run: kRun,
    pitch: kPitch,
    ridgeX: 0,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: 0,
    tileMat: charcoalDeck,
    ribMat: charcoalRib,
    eaveMat: ridgeMat,
    rafterMat: darkWood,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: 11.4,
    run: kRun,
    pitch: kPitch,
    ridgeX: 0,
    ridgeY: yRidge,
    ridgeZ: 0,
    downslopeYaw: Math.PI,
    tileMat: charcoalDeck,
    ribMat: charcoalRib,
    eaveMat: ridgeMat,
    rafterMat: darkWood,
    ribSpacing: 0.38,
  });
  // Crisp White-Plaster East & West Gable Triangles (妻壁) + Dark Timber Bargeboards
  p.gablePrism('ext', 7.6, yRidge - YTOP + 0.14, 0.22, 4.7, YTOP - 0.06, 0, ivoryWall, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 7.6, yRidge - YTOP + 0.14, 0.22, -4.7, YTOP - 0.06, 0, ivoryWall, { ry: Math.PI * 0.5 });
  // Tall Main Ridge + Twin Sculpted Onigawara
  p.kawaraRidge('ext', -5.65, yRidge + 0.05, 0, 5.65, yRidge + 0.05, 0, ridgeMat, oniMat, {
    scale: 1.12,
    oniStart: true,
    oniEnd: true,
    courses: 3,
  });

  return p.build({
    id: site.id,
    name: '松岡家（中央V字谷の白壁瓦二階家）',
    subtitle: '明治19年築・白漆喰モルタル＆濃灰いぶし瓦大判切妻・昭和60年台所＆子供部屋・二階建',
    category: 'house',
    builtYear: 1886,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1 + 0.04, Y2 + 0.04],
    entryLocal: [-0.45, 0.0, 5.95],
  });
}
