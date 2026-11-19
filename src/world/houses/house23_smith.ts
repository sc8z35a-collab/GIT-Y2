import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * H23: 鉄山鍛冶場（1885年築・黒燻し煙出し越屋根＆12m赤煉瓦大煙突の吹抜二階鍛冶屋兼住居）— 2階建＋吹抜中二階
 * 上段山腹道北部（標高281m）・炭鉱林道口そばに建つ明治18年築の黒磯炭鉱御用達鍛冶工房。
 * 西翼は天井高6.5m＋小屋組露出の大吹抜鍛冶場（炭床・鉄溝蓋・幅2.6mリベット鉄扉・赤煉瓦二連大炉・
 * ボルト鉄煙フード・木製鞴・丸太金床・焼入れ水槽・石炭置場・消火器BOX）、
 * 西外壁に高さ12.1mテーパー赤煉瓦大煙突＆青錆トタン炭置場下屋を併設。
 * 吹抜内の鉄骨木踏板階段を昇ると2F北側キャットウォーク回廊から大炉と金床を一望でき、
 * 防火壁の東翼は静かな職人家族の2層畳住居（昭和台所・青タイル風呂・図面書斎・8畳寝室・高欄縁側）。
 * 屋根は煤黒燻し本瓦大切妻＋全長通気「煙出し越屋根」（金属＆杉ルーバー換気）＋四方鬼瓦×4基！
 */
export function buildHouse23Smith(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Blacksmith Exterior, Brick Chimney, Corrugated Lean-to & Industrial Steel Materials ---
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.92, bumpScale: 0.06, tint: 0xbcb2a4 });
  const cedarDark = catalog.getMaterial('charred_cedar', { roughness: 0.91, bumpScale: 0.05 });
  const whitePlaster = catalog.getMaterial('white_plaster', { roughness: 0.92, bumpScale: 0.04, tint: 0xf2eee4 });
  const studdedWood = catalog.getMaterial('heavy_studded_wood', { roughness: 0.86, bumpScale: 0.06 });
  const redBrick = catalog.getMaterial('red_brick', { roughness: 0.90, bumpScale: 0.06 });
  const oldBrick = catalog.getMaterial('old_red_brick', { roughness: 0.92, bumpScale: 0.07 });
  const rivetedSteel = catalog.getMaterial('oxidized_riveted_steel', { roughness: 0.68, metalness: 0.55, bumpScale: 0.05 });
  const boltedSteel = catalog.getMaterial('dark_bolted_steel', { roughness: 0.62, metalness: 0.60, bumpScale: 0.05 });
  const blueRustTin = catalog.getMaterial('blue_rust_corrugated', { roughness: 0.72, metalness: 0.42, bumpScale: 0.06, doubleSide: true });
  const rustTin = catalog.getMaterial('rusted_corrugated', { roughness: 0.78, metalness: 0.36, bumpScale: 0.06, doubleSide: true });
  const zincTin = catalog.getMaterial('corrugated_zinc_bolts', { roughness: 0.62, metalness: 0.50, bumpScale: 0.05, doubleSide: true });
  const metalLouver = catalog.getMaterial('metal_louver_vent', { roughness: 0.65, metalness: 0.48, bumpScale: 0.06 });
  const cedarLouver = catalog.getMaterial('cedar_louvers', { roughness: 0.88, bumpScale: 0.05 });
  const diamondPlate = catalog.getMaterial('diamond_plate', { roughness: 0.56, metalness: 0.65, bumpScale: 0.05 });
  const hazardMat = catalog.getMaterial('hazard_stripes', { roughness: 0.76, bumpScale: 0.02 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const ironMat = catalog.getMaterial('matte_black_metal', { roughness: 0.50, metalness: 0.72 });

  // --- Forge Interior & East Residence Materials ---
  const charredSoil = catalog.getMaterial('charred_soil', { roughness: 0.96, bumpScale: 0.07 });
  const coalRock = catalog.getMaterial('coal_seam_rock', { roughness: 0.86, bumpScale: 0.08 });
  const metalGrate = catalog.getMaterial('metal_grate', { roughness: 0.60, metalness: 0.62, bumpScale: 0.06 });
  const drainGrate = catalog.getMaterial('drain_grate', { roughness: 0.62, metalness: 0.58, bumpScale: 0.06 });
  const fireBox = catalog.getMaterial('fire_extinguisher_box', { roughness: 0.54, metalness: 0.25 });
  const scrapMetal = catalog.getMaterial('scrap_metal_patch', { roughness: 0.72, metalness: 0.52, bumpScale: 0.06 });
  const treeBark = catalog.getMaterial('tree_bark', { roughness: 0.94, bumpScale: 0.07 });
  const dampStone = catalog.getMaterial('dark_damp_stone', { roughness: 0.84, bumpScale: 0.07 });
  const pegboardMat = catalog.getMaterial('pegboard', { roughness: 0.84, bumpScale: 0.04 });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.88, bumpScale: 0.04 });
  const oakFloor = catalog.getMaterial('oak_flooring', { roughness: 0.80, bumpScale: 0.03 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.83, bumpScale: 0.04 });
  const ajiroCeil = catalog.getMaterial('woven_screen_brown', { roughness: 0.90, bumpScale: 0.05 });
  const coirMat = catalog.getMaterial('coir_doormat', { roughness: 0.96, bumpScale: 0.06 });
  const tatamiGreen = catalog.getMaterial('tatami_green_border', { roughness: 0.92, bumpScale: 0.04 });
  const tatamiBord = catalog.getMaterial('tatami_bordered', { roughness: 0.92, bumpScale: 0.04 });
  const shojiMat = catalog.getMaterial('shoji_sliding_door', { roughness: 0.88, opacity: 0.90, transparent: true });
  const tansuMat = catalog.getMaterial('antique_tansu', { roughness: 0.78, bumpScale: 0.04 });
  const zabutonMat = catalog.getMaterial('red_zabuton', { roughness: 0.92, bumpScale: 0.03 });
  const kitchenMat = catalog.getMaterial('retro_kitchen_unit', { roughness: 0.78, bumpScale: 0.03 });
  const cabMat = catalog.getMaterial('kitchen_cabinet', { roughness: 0.82, bumpScale: 0.03 });
  const blueBath = catalog.getMaterial('blue_bath_tile', { roughness: 0.48, bumpScale: 0.03 });
  const futonMat = catalog.getMaterial('floral_futon', { roughness: 0.92, bumpScale: 0.03 });
  const wardrobeMat = catalog.getMaterial('wardrobe_wood', { roughness: 0.82, bumpScale: 0.03 });
  const dresserMat = catalog.getMaterial('wooden_dresser', { roughness: 0.82, bumpScale: 0.03 });
  const chalkMat = catalog.getMaterial('chalkboard', { roughness: 0.88, bumpScale: 0.02 });
  const fileCab = catalog.getMaterial('file_cabinet', { roughness: 0.66, metalness: 0.25 });
  const bookcaseMat = catalog.getMaterial('full_bookcase', { roughness: 0.84, bumpScale: 0.04 });
  const corkMat = catalog.getMaterial('cork_board', { roughness: 0.92, bumpScale: 0.03 });
  const glassMat = catalog.getMaterial('window_frosted_wood', { roughness: 0.34, opacity: 0.36, transparent: true });

  // --- Heavy Soot-Black Ibushi Kuro-gawara (煤黒燻し本瓦) ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.76, metalness: 0.16, bumpScale: 0.06, tint: 0x747a82 });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.72, metalness: 0.20, bumpScale: 0.05, tint: 0x626870 });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.64, metalness: 0.28, tint: 0x565c64 });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.54, metalness: 0.38, tint: 0x4b5058 });

  const Y1 = 0.40;
  const Y2 = 3.55;
  const YTOP = 6.55;

  // =========================================================================
  // 1. DEEP CUT-STONE FOUNDATION, DIAMOND-PLATE FORGE RAMP & EAST STONE STEPS
  // =========================================================================
  p.box('ext', 13.3, 3.45, 9.2, 0, Y1 - 1.74, 0, cutStone);
  // West Forge Heavy Diamond-Plate Entry Apron & Ramp (X = -3.10, width 2.8m)
  p.box('ext', 3.2, 1.45, 1.45, -3.10, Y1 - 0.74, 5.05, cutStone);
  p.box('ext', 2.9, 0.08, 1.45, -3.10, Y1 - 0.02, 5.05, diamondPlate);
  p.box('ext', 2.8, 0.12, 0.24, -3.10, Y1 + 0.04, 4.42, hazardMat, { uvScale: 0 }); // Showa safety stripe sill
  p.stoneSteps('ext', -3.10, 6.05, 5.15, -0.08, Y1, 2.75, 3, diamondPlate);
  p.floor(-4.5, -1.7, 4.3, 5.25, Y1 + 0.04);

  // East Family Residence Entry Stone Steps (X = +3.50, width 1.9m)
  p.stoneSteps('ext', 3.50, 5.55, 4.55, -0.08, Y1, 1.95, 3, cutStone);
  p.floor(2.5, 4.5, 4.3, 4.7, Y1 + 0.04);

  // ★ EXTERNAL 12.1m TAPERED RED-BRICK FORGE CHIMNEY (X = -6.55, Z = -0.80)
  // Built directly outside the west forge hearth wall with steel tension bands & corbeled top!
  const chX = -6.65;
  const chZ = -0.80;
  p.box('ext', 1.85, 3.40, 1.85, chX, -1.20, chZ, cutStone, { solid: true });          // Deep stone footing
  p.box('ext', 1.65, 3.60, 1.65, chX, 2.20, chZ, oldBrick, { solid: true });           // Lower soot-stained brick base
  p.box('ext', 1.42, 3.40, 1.42, chX, 5.65, chZ, redBrick, { solid: true });           // Mid stack
  p.box('ext', 1.20, 3.10, 1.20, chX, 8.85, chZ, redBrick, { solid: true });           // Upper tapered shaft
  p.box('ext', 1.06, 1.65, 1.06, chX, 11.15, chZ, oldBrick, { solid: true });          // Smoke-darkened crown shaft
  p.box('ext', 1.34, 0.28, 1.34, chX, 12.02, chZ, oldBrick);                           // Corbeled brick cap (Y = 12.16m!)
  for (const bandY of [4.1, 7.2, 10.2]) {
    const bw = bandY < 5 ? 1.56 : bandY < 8 ? 1.32 : 1.16;
    p.box('ext', bw, 0.14, bw, chX, bandY, chZ, boltedSteel);                          // Bolted iron tension collars
  }

  // ★ WEST BLUE-RUST CORRUGATED COAL & SCRAP LEAN-TO SHED (X ∈ [-7.95, -6.40], Z ∈ [-3.9, +2.6])
  p.box('ext', 1.75, 2.0, 6.7, -7.22, -0.80, -0.65, cutStone);
  // Weathered timber support posts along X = -7.85
  for (const pz of [-3.75, -2.05, 0.65, 2.45]) {
    p.box('ext', 0.16, 2.85, 0.16, -7.85, Y1 + 1.32, pz, agedTimber, { solid: true });
  }
  // Sloped corrugated lean-to roof panels (shifted cleanly outside X = -6.40 west forge wall!)
  p.box('ext', 1.76, 0.08, 2.25, -7.42, Y1 + 2.92, -2.75, blueRustTin, { rz: 0.24 });
  p.box('ext', 1.76, 0.08, 2.25, -7.42, Y1 + 2.92, -0.55, rustTin, { rz: 0.24 });
  p.box('ext', 1.76, 0.08, 2.30, -7.42, Y1 + 2.92, 1.68, zincTin, { rz: 0.24 });
  // Stacked exterior coal mounds & mine rail scrap beneath lean-to
  p.box('ext', 1.05, 0.72, 1.85, -7.15, Y1 + 0.32, 1.45, coalRock, { solid: true });
  p.box('ext', 0.85, 0.56, 1.45, -7.10, Y1 + 0.25, -2.65, scrapMetal, { solid: true });

  // =========================================================================
  // 2. 1F: DOUBLE-HEIGHT BLACKSMITH FORGE (WEST) & CRAFTSMAN RESIDENCE (EAST)
  // =========================================================================
  const h1 = Y2 - Y1; // 3.15m
  const mid1 = Y1 + h1 * 0.5;
  const hFull = YTOP - Y1; // 6.15m double-height forge walls!
  const midFull = Y1 + hFull * 0.5;

  // 1F Floors
  p.box('int', 7.0, 0.12, 8.7, -2.90, Y1 - 0.04, 0, charredSoil);      // West Forge soot-black charred floor!
  p.box('int', 1.15, 0.04, 5.4, -2.15, Y1 + 0.02, -0.5, drainGrate);   // Industrial floor drain grate
  p.box('int', 1.35, 0.04, 1.85, -4.35, Y1 + 0.02, -0.8, metalGrate);  // Grated forge work pad
  p.box('int', 5.8, 0.12, 8.7, 3.50, Y1 - 0.04, 0, warmFloor);         // East Residence wood subfloor
  p.box('int', 5.3, 0.04, 4.7, 3.45, Y1 + 0.03, 1.75, tatamiGreen);    // East 6-mat family tea room
  p.box('int', 2.2, 0.05, 2.5, 5.20, Y1 + 0.02, -3.00, blueBath);      // NE Showa blue-tile washroom
  p.box('int', 1.10, 0.03, 0.68, 3.50, Y1 + 0.04, 4.02, coirMat, { uvScale: 0 });

  p.floor(-6.25, 6.25, -4.25, 4.42, Y1 + 0.04);

  // Exterior Walls — WEST DOUBLE-HEIGHT FORGE WING (X ∈ [-6.40, +0.60], full height Y1..YTOP = 6.15m!)
  // Front Forge Wall (+Z = +4.40, X ∈ [-6.40, +0.60]): Wide 2.60m riveted-steel barn doorway X ∈ [-4.40, -1.80]!
  p.box('ext', 2.04, hFull, 0.28, -5.40, midFull, 4.40, agedTimber, { solid: true });
  p.box('ext', 2.64, hFull - 2.68, 0.28, -3.10, Y1 + 2.68 + (hFull - 2.68) * 0.5, 4.40, agedTimber, { solid: true });
  p.box('ext', 2.44, hFull, 0.28, -0.60, midFull, 4.40, agedTimber, { solid: true });
  // Riveted steel corner armor plates & industrial upper louver vents on forge facade
  p.box('ext', 1.85, 1.35, 0.32, -5.40, Y1 + 0.72, 4.42, rivetedSteel);
  p.box('ext', 2.15, 1.35, 0.32, -0.60, Y1 + 0.72, 4.42, rivetedSteel);
  p.box('ext', 2.20, 0.95, 0.16, -3.10, Y2 + 1.75, 4.50, metalLouver, { uvScale: 0 });
  // Twin ajar riveted-steel & heavy studded-wood barn doors swung open outside the 2.6m forge portal!
  p.box('ext', 1.26, 2.62, 0.12, -4.85, Y1 + 1.31, 4.92, rivetedSteel, { ry: -0.78, solid: true, uvScale: 0 });
  p.box('ext', 1.26, 2.62, 0.12, -1.35, Y1 + 1.31, 4.92, studdedWood, { ry: 0.78, solid: true, uvScale: 0 });

  // West Forge Wall (-X = -6.40, full double height 6.15m, industrial high clerestory louvers!)
  p.box('ext', 0.28, hFull, 8.85, -6.40, midFull, 0, agedTimber, { solid: true });
  p.box('ext', 0.32, 1.40, 8.85, -6.42, Y1 + 0.70, 0, rivetedSteel);
  p.box('ext', 0.14, 1.05, 2.85, -6.50, Y2 + 1.65, 2.15, metalLouver, { uvScale: 0 });

  // Back Forge Wall (-Z = -4.40, X ∈ [-6.40, +0.60], full double height 6.15m with 2F catwalk north window)
  p.box('ext', 7.05, h1 + 0.95, 0.28, -2.90, Y1 + (h1 + 0.95) * 0.5, -4.40, agedTimber, { solid: true });
  p.box('ext', 1.95, hFull - h1 - 0.95, 0.28, -5.44, Y2 + 1.98, -4.40, agedTimber, { solid: true });
  p.box('ext', 3.00, 0.55, 0.28, -2.98, YTOP - 0.28, -4.40, agedTimber, { solid: true });
  p.box('ext', 2.96, 1.50, 0.06, -2.98, Y2 + 1.70, -4.40, glassMat, { uvScale: 0 });
  p.box('ext', 2.15, hFull - h1 - 0.95, 0.28, -0.42, Y2 + 1.98, -4.40, agedTimber, { solid: true });

  // Exterior Walls — EAST 1F CRAFTSMAN RESIDENCE WING (X ∈ [+0.60, +6.40], charred cedar + white plaster!)
  // Front 1F East (+Z = +4.40): Residence door X ∈ [+2.70, +4.30]
  p.box('ext', 2.14, 1.25, 0.26, 1.65, Y1 + 0.62, 4.40, cedarDark, { solid: true });
  p.box('ext', 2.14, h1 - 1.25, 0.26, 1.65, Y1 + 2.20, 4.40, whitePlaster, { solid: true });
  p.box('ext', 1.64, 0.78, 0.26, 3.50, Y1 + 2.76, 4.40, whitePlaster, { solid: true });
  p.box('ext', 2.14, 1.25, 0.26, 5.35, Y1 + 0.62, 4.40, cedarDark, { solid: true });
  p.box('ext', 2.14, h1 - 1.25, 0.26, 5.35, Y1 + 2.20, 4.40, whitePlaster, { solid: true });
  // Back 1F East (-Z = -4.40) & East 1F (+X = +6.40) with Shoji tea-room garden window
  p.box('ext', 5.85, 1.25, 0.26, 3.50, Y1 + 0.62, -4.40, cedarDark, { solid: true });
  p.box('ext', 5.85, h1 - 1.25, 0.26, 3.50, Y1 + 2.20, -4.40, whitePlaster, { solid: true });
  p.box('ext', 0.26, 1.15, 8.85, 6.40, Y1 + 0.58, 0, cedarDark, { solid: true });
  p.box('ext', 0.26, h1 - 1.15, 3.85, 6.40, Y1 + 2.15, -2.50, whitePlaster, { solid: true });
  p.box('ext', 0.26, 0.58, 2.70, 6.40, Y1 + 2.86, 0.80, whitePlaster, { solid: true });
  p.box('ext', 0.06, 1.42, 2.66, 6.40, Y1 + 1.86, 0.80, shojiMat, { uvScale: 0 });
  p.box('ext', 0.26, h1 - 1.15, 2.30, 6.40, Y1 + 2.15, 3.28, whitePlaster, { solid: true });

  // Central Interior Firewall separating Double-Height Forge & East Residence (X = +0.60)
  // 1F Firewall: open 1.50m pass-through doorway Z ∈ [+2.25, +3.75]
  p.box('int', 0.22, h1, 6.68, 0.60, mid1, -1.08, oldBrick, { solid: true });
  p.box('int', 0.22, 0.72, 1.55, 0.60, Y1 + 2.79, 3.00, oldBrick, { solid: true });
  p.box('int', 0.22, h1, 0.68, 0.60, mid1, 4.08, oldBrick, { solid: true });

  // ★ 1F BLACKSMITH FORGE HERO EQUIPMENT (clear of 2F North catwalk Z∈[-4.3,-2.45] for dramatic look-down!)
  // 1. Monumental Double-Chamber Red-Brick Forge Hearth (X = -5.25, Z = -0.80) + Bolted-Steel Smoke Hood!
  p.box('int', 1.75, 1.05, 2.05, -5.32, Y1 + 0.52, -0.80, redBrick, { solid: true });     // Hearth masonry body
  p.box('int', 1.65, 0.65, 0.34, -5.32, Y1 + 1.38, -1.68, oldBrick, { solid: true });     // North cheek wall
  p.box('int', 1.65, 0.65, 0.34, -5.32, Y1 + 1.38, 0.08, oldBrick, { solid: true });      // South cheek wall
  p.box('int', 0.95, 0.24, 1.18, -5.25, Y1 + 1.12, -0.80, coalRock);                      // Dark forge coal bed
  // Riveted & bolted steel tapered smoke hood + flue connecting straight into external brick chimney!
  p.box('int', 1.92, 0.42, 2.18, -5.22, Y1 + 2.38, -0.80, boltedSteel);
  p.box('int', 1.48, 0.75, 1.64, -5.44, Y1 + 2.96, -0.80, rivetedSteel);
  p.box('int', 1.04, 1.15, 1.16, -5.68, Y1 + 3.90, -0.80, boltedSteel);
  p.box('int', 0.92, 0.72, 0.92, -6.02, Y1 + 4.45, -0.80, rivetedSteel);
  // 2. Traditional Japanese Timber Box-Bellows (鞴) beside the hearth (X = -5.15, Z = +1.10)
  p.box('int', 1.15, 0.88, 1.05, -5.25, Y1 + 0.44, 1.08, agedTimber, { solid: true });
  p.cyl('int', 0.05, 0.05, 0.65, 6, -4.42, Y1 + 0.65, 1.08, ironMat, { rz: Math.PI * 0.5 });
  // 3. Oak-Stump Horned Iron Anvil (金床) in hero center of forge (X = -3.35, Z = -0.65)!
  p.cyl('int', 0.38, 0.44, 0.66, 10, -3.35, Y1 + 0.33, -0.65, treeBark);
  p.collider(-3.78, -2.92, Y1, Y1 + 1.05, -1.08, -0.22);
  p.box('int', 0.32, 0.22, 0.72, -3.35, Y1 + 0.78, -0.65, ironMat);                       // Anvil waist & face
  p.box('int', 0.22, 0.14, 0.32, -3.35, Y1 + 0.82, -0.20, ironMat);                       // Anvil tapered horn
  // 4. Damp-Stone Water Quenching Trough (焼入れ水槽, X = -3.35, Z = +1.15)
  p.box('int', 0.72, 0.70, 1.05, -3.35, Y1 + 0.35, 1.15, dampStone, { solid: true });
  // 5. Indoor Coal Bunker, Tool Pegboard, Scrap Mine-Rail Rack & 1985 Showa Fire Extinguisher Box!
  p.box('int', 1.45, 0.72, 1.25, -5.45, Y1 + 0.36, 3.10, coalRock, { solid: true });
  p.box('int', 0.08, 1.45, 2.35, 0.44, Y1 + 1.68, -0.65, pegboardMat, { uvScale: 0 });    // Hanging forge tools!
  p.box('int', 0.52, 1.75, 1.55, -5.98, Y1 + 0.88, -3.35, rackMat, { solid: true, uvScale: 0 });
  p.box('int', 0.48, 0.96, 1.25, -4.25, Y1 + 0.48, -3.85, scrapMetal, { solid: true });
  p.box('int', 0.36, 0.82, 0.24, -1.35, Y1 + 0.98, 4.18, fireBox, { solid: true, uvScale: 0 }); // 1985 Showa fire box!

  // 1F East Craftsman Residence Partitions & Furnishings
  // Divider between Tea Room (South) & Kitchen/Bath (North) at Z = -0.80 (open 1.75m doorway X ∈ [+1.65, +3.40])
  p.box('int', 1.05, h1, 0.14, 1.12, mid1, -0.80, whitePlaster, { solid: true });
  p.box('int', 1.80, 0.72, 0.14, 2.52, Y1 + 2.79, -0.80, whitePlaster, { solid: true });
  p.box('int', 3.00, h1, 0.14, 4.90, mid1, -0.80, whitePlaster, { solid: true });
  // Tea Room furniture
  p.box('int', 1.55, 0.38, 0.96, 3.55, Y1 + 0.20, 1.45, timberDark, { solid: true });
  p.box('int', 0.62, 0.07, 0.62, 3.55, Y1 + 0.07, 0.55, zabutonMat, { uvScale: 0 });
  p.box('int', 0.62, 0.07, 0.62, 3.55, Y1 + 0.07, 2.35, zabutonMat, { uvScale: 0 });
  p.box('int', 0.52, 1.48, 1.45, 5.95, Y1 + 0.75, 2.95, tansuMat, { solid: true, uvScale: 0 });
  // Kitchen & Blue-Tile Bath furniture
  p.box('int', 1.85, 0.92, 0.62, 2.15, Y1 + 0.46, -3.98, kitchenMat, { solid: true, uvScale: 0 });
  p.box('int', 0.56, 1.85, 1.35, 1.02, Y1 + 0.94, -2.55, cabMat, { solid: true, uvScale: 0 });
  p.box('int', 1.55, 0.66, 1.15, 5.45, Y1 + 0.33, -3.55, blueBath, { solid: true });

  // ★ 1F -> 2F OPEN-FORGE BOLTED-STEEL & OAK STAIRCASE (X = -0.25, Z: +2.55 -> -1.45, Y1 -> Y2!)
  p.stairRun('int', {
    x0: -0.25,
    z0: 2.55,
    x1: -0.25,
    z1: -1.45,
    y0: Y1 + 0.04,
    y1: Y2 + 0.04,
    width: 1.16,
    steps: 14,
    treadMat: oakFloor,
    stringerMat: boltedSteel,
    railMat: boltedSteel,
    railLeft: true,
    railRight: false,
    closedRisers: false,
    guardLeft: true,
    guardRight: false,
  });

  // =========================================================================
  // 3. 2F: FORGE-OVERLOOK MEZZANINE CATWALK (WEST) & STUDY + 8-MAT BEDROOM (EAST)
  // =========================================================================
  const h2 = YTOP - Y2; // 3.00m
  const mid2 = Y2 + h2 * 0.5;

  // ★ 2F West Forge-Overlook Mezzanine Catwalk (Z ∈ [-4.35, -2.45], X ∈ [-6.35, +0.60] + Arrival Landing X ∈ [-0.96, +0.60], Z ∈ [-2.45, -1.45])
  p.box('int', 6.95, 0.18, 1.92, -2.88, Y2 - 0.07, -3.40, oakFloor);
  p.box('int', 3.45, 0.04, 1.30, -3.65, Y2 + 0.03, -3.30, metalGrate);     // Industrial grated overlook walkway!
  p.box('int', 1.60, 0.18, 1.05, -0.18, Y2 - 0.07, -1.96, oakFloor);       // Top of stairs arrival landing
  // Heavy exposed dark steel/timber cantilever support beam underneath catwalk
  p.box('int', 6.95, 0.24, 0.22, -2.88, Y2 - 0.24, -2.50, boltedSteel);
  p.collider(-6.35, 0.60, Y2 - 0.18, Y2 + 0.02, -4.35, -2.45);
  p.collider(-0.96, 0.60, Y2 - 0.18, Y2 + 0.02, -2.45, -1.45);
  p.floor(-6.22, 0.65, -4.25, -2.46, Y2 + 0.04);
  p.floor(-0.95, 0.65, -2.48, -1.44, Y2 + 0.04);

  // ★ Open Kouran Balustrades guarding the Forge-Overlook Mezzanine Catwalk (looking down onto hearth & anvil!)
  p.kouranRailing('int', -6.26, -2.46, -0.96, -2.46, Y2, 0.96, boltedSteel, 0.52);
  p.kouranRailing('int', -0.96, -2.46, -0.96, -1.46, Y2, 0.96, boltedSteel, 0.50);

  // 2F East Residence Floor Slabs (X ∈ [+0.60, +6.40], Z ∈ [-4.40, +4.40])
  p.box('int', 5.80, 0.16, 8.80, 3.50, Y2 - 0.06, 0, oakFloor);
  p.box('int', 5.45, 0.04, 4.45, 3.50, Y2 + 0.03, 2.00, tatamiBord);       // 8-Mat Craftsman Master Bedroom
  p.box('int', 5.65, 0.08, 4.65, 3.50, YTOP - 0.08, 2.00, ajiroCeil);      // Woven Ajiro ceiling over bedroom
  p.collider(0.60, 6.40, Y2 - 0.16, Y2 + 0.02, -4.40, 4.40);
  p.floor(0.60, 6.28, -4.28, 4.35, Y2 + 0.04);

  // 2F East-Front Balcony (X ∈ [+0.80, +6.20], Z ∈ [+4.40, +5.45])
  p.box('ext', 5.45, 0.16, 1.08, 3.50, Y2 - 0.04, 4.94, warmFloor);
  p.kouranRailing('ext', 0.80, 5.42, 6.18, 5.42, Y2, 0.94, timberDark, 0.52);
  p.kouranRailing('ext', 0.80, 4.40, 0.80, 5.42, Y2, 0.94, timberDark, 0.52);
  p.kouranRailing('ext', 6.18, 4.40, 6.18, 5.42, Y2, 0.94, timberDark, 0.52);
  p.floor(0.88, 6.10, 4.32, 5.36, Y2 + 0.04);

  // 2F Firewall (X = +0.60): Open 1.60m doorway Z ∈ [-3.80, -2.20] linking Forge Catwalk & East Study!
  p.box('int', 0.22, h2, 0.62, 0.60, mid2, -4.10, whitePlaster, { solid: true });
  p.box('int', 0.22, 0.72, 1.65, 0.60, Y2 + 2.64, -3.00, whitePlaster, { solid: true });
  p.box('int', 0.22, h2, 6.62, 0.60, mid2, 1.10, whitePlaster, { solid: true });

  // 2F East Residence Exterior Walls (White Plaster Shinkabe + Exposed Dark Timber Columns)
  // Front 2F East (+Z = +4.40): Open balcony doorway X ∈ [+2.65, +4.35]
  p.box('ext', 2.08, h2, 0.22, 1.64, mid2, 4.40, whitePlaster, { solid: true });
  p.box('ext', 1.74, 0.70, 0.22, 3.50, Y2 + 2.65, 4.40, whitePlaster, { solid: true });
  p.box('ext', 2.08, h2, 0.22, 5.36, mid2, 4.40, whitePlaster, { solid: true });
  // Back 2F East & East 2F wall
  p.box('ext', 5.85, h2, 0.22, 3.50, mid2, -4.40, whitePlaster, { solid: true });
  p.box('ext', 0.22, 0.94, 8.85, 6.40, Y2 + 0.47, 0, whitePlaster, { solid: true });
  p.box('ext', 0.22, h2 - 0.94, 2.50, 6.40, Y2 + 1.97, -3.15, whitePlaster, { solid: true });
  p.box('ext', 0.22, 0.56, 2.60, 6.40, Y2 + 2.72, -0.60, whitePlaster, { solid: true });
  p.box('ext', 0.06, 1.50, 2.56, 6.40, Y2 + 1.69, -0.60, glassMat, { uvScale: 0 });
  p.box('ext', 0.22, h2 - 0.94, 3.75, 6.40, Y2 + 1.97, 2.55, whitePlaster, { solid: true });
  // Exposed vertical posts along East 2F front facade
  for (const px of [0.64, 2.62, 4.38, 6.42]) {
    p.box('ext', 0.16, h2 + 0.06, 0.26, px, mid2, 4.42, timberDark);
  }

  // 2F East Interior Partition (Z = -0.40 dividing Study & 8-Mat Bedroom, open 1.65m passage X ∈ [+2.25, +3.90])
  p.box('int', 1.68, h2, 0.14, 1.44, mid2, -0.40, whitePlaster, { solid: true });
  p.box('int', 1.70, 0.70, 0.14, 3.08, Y2 + 2.65, -0.40, whitePlaster, { solid: true });
  p.box('int', 2.52, h2, 0.14, 5.15, mid2, -0.40, whitePlaster, { solid: true });

  // 2F Study & Bedroom Furnishings
  p.box('int', 2.15, 1.35, 0.08, 3.55, Y2 + 1.70, -4.22, chalkMat, { uvScale: 0 });          // Forging dimensions chalkboard
  p.box('int', 1.25, 0.98, 0.08, 1.55, Y2 + 1.72, -4.22, corkMat, { uvScale: 0 });
  p.box('int', 0.52, 1.95, 1.65, 5.98, Y2 + 0.98, -3.25, bookcaseMat, { solid: true, uvScale: 0 });
  p.box('int', 0.56, 1.48, 0.74, 5.95, Y2 + 0.74, -1.75, fileCab, { solid: true, uvScale: 0 });
  p.box('int', 1.65, 0.34, 2.15, 4.85, Y2 + 0.21, 1.75, futonMat, { solid: true, uvScale: 0 }); // 8-Mat bedroom futon
  p.box('int', 0.56, 1.82, 1.35, 1.05, Y2 + 0.92, 1.35, wardrobeMat, { solid: true, uvScale: 0 });
  p.box('int', 1.20, 1.12, 0.48, 1.55, Y2 + 0.56, 3.88, dresserMat, { solid: true, uvScale: 0 });

  // ★ EXPOSED DARK TIMBER ROOF TIE-BEAMS (大梁) & KING POSTS VISIBLE ABOVE DOUBLE-HEIGHT FORGE!
  for (const bx of [-4.6, -2.4, -0.4]) {
    p.box('int', 0.22, 0.26, 8.6, bx, YTOP - 0.15, 0, timberDark);
    p.box('int', 0.18, 2.15, 0.18, bx, YTOP + 0.96, 0, timberDark);
  }
  p.box('int', 6.8, 0.24, 0.22, -2.9, YTOP + 2.05, 0, timberDark); // Exposed purlin ridge beam inside forge!

  // =========================================================================
  // 4. MASSIVE SOOT-BLACK HON-GAWARA KIRIZUMA ROOF + ELEVATED VENTILATED KEMURIDASHI MONITOR (煙出し越屋根)!
  // =========================================================================
  // East Residence 1F Entry Canopy (small black-kawara lean-to over X = +3.50 door)
  p.kawaraSlope('ext', {
    bottomWidth: 6.2,
    run: 1.25,
    pitch: 0.36,
    ridgeX: 3.55,
    ridgeY: Y2 + 0.10,
    ridgeZ: 4.38,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });

  // A. Main Monumental Soot-Black Hon-gawara Kirizuma Roof (大切妻屋根)
  const mainPitch = 0.48;
  const mainRun = 5.45; // Generous 1.05m protective overhang on North & South!
  const mainRidgeY = YTOP + mainRun * Math.tan(mainPitch) - 0.10; // ~9.29m
  const mainBotW = 14.30; // Overhangs East & West gable walls by 0.75m each!
  const gableH = mainRidgeY - YTOP + 0.12;

  // East (+X = +6.40) & West (-X = -6.40) Gable Prisms (妻壁)
  p.gablePrism('ext', 8.9, gableH, 0.26, 6.40, YTOP - 0.04, 0, whitePlaster, { ry: Math.PI * 0.5 });
  p.gablePrism('ext', 8.9, gableH, 0.26, -6.40, YTOP - 0.04, 0, agedTimber, { ry: Math.PI * 0.5 });
  // Gable attic ventilation louvers
  p.box('ext', 0.14, 0.85, 1.85, -6.54, YTOP + 1.15, 0, cedarLouver, { uvScale: 0 });
  p.box('ext', 0.14, 0.85, 1.85, 6.54, YTOP + 1.15, 0, cedarLouver, { uvScale: 0 });

  // Main South (+Z) & North (-Z) Soot-Black Hon-gawara Slopes
  p.kawaraSlope('ext', {
    bottomWidth: mainBotW,
    run: mainRun,
    pitch: mainPitch,
    ridgeX: 0,
    ridgeY: mainRidgeY,
    ridgeZ: 0,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  p.kawaraSlope('ext', {
    bottomWidth: mainBotW,
    run: mainRun,
    pitch: mainPitch,
    ridgeX: 0,
    ridgeY: mainRidgeY,
    ridgeZ: 0,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.38,
  });
  // Main Ridge (大棟) with Twin Large Horned Onigawara at East & West Gable Ends!
  p.kawaraRidge(
    'ext',
    -mainBotW * 0.5 + 0.06,
    mainRidgeY + 0.04,
    0,
    mainBotW * 0.5 - 0.06,
    mainRidgeY + 0.04,
    0,
    kawaraRidge,
    oniMat,
    { scale: 1.14, courses: 3, oniStart: true, oniEnd: true }
  );

  // ★ B. FULL-LENGTH ELEVATED VENTILATED KEMURIDASHI KOSHI-YANE MONITOR ROOF (煙出し越屋根)!
  // Runs X ∈ [-4.75, +4.75] (9.5m long!) rising 1.15m directly above the main ridge with louvered smoke vents!
  const monW = 9.50;
  const monD = 2.15;
  const monBaseY = mainRidgeY - 0.42;
  const monEaveY = mainRidgeY + 0.96; // Clear vertical louvered clerestory rising above the main ridge!
  const monH = monEaveY - monBaseY;
  const monMidY = monBaseY + monH * 0.5;

  // Louvered ventilated clerestory side walls (South & North) + solid cedar gable ends (East & West)
  p.box('ext', monW, monH, 0.16, 0, monMidY, monD * 0.5, metalLouver, { uvScale: 0.7 });
  p.box('ext', monW, monH, 0.16, 0, monMidY, -monD * 0.5, cedarLouver, { uvScale: 0.7 });
  p.box('ext', 0.18, monH, monD, -monW * 0.5, monMidY, 0, cedarDark);
  p.box('ext', 0.18, monH, monD, monW * 0.5, monMidY, 0, cedarDark);
  // Vertical dark structural mullions rhythmically dividing the 9.5m smoke-vent clerestory
  for (const mx of [-4.75, -2.85, -0.95, 0.95, 2.85, 4.75]) {
    p.box('ext', 0.14, monH + 0.08, 0.22, mx, monMidY, monD * 0.5 + 0.04, timberDark);
    p.box('ext', 0.14, monH + 0.08, 0.22, mx, monMidY, -monD * 0.5 - 0.04, timberDark);
  }

  // Secondary Raised 3D Hon-gawara Monitor Roof + 2 MORE Horned Onigawara (4 Onigawara total!)
  const monPitch = 0.44;
  const monRun = 1.62;
  const monRidgeY = monEaveY + monRun * Math.tan(monPitch) - 0.06; // ~10.96m!
  const monRoofW = monW + 0.95; // 10.45m overhanging monitor eaves!
  p.gablePrism('ext', monD + 0.10, monRidgeY - monEaveY + 0.08, 0.18, -monW * 0.5, monEaveY - 0.04, 0, cedarDark, {
    ry: Math.PI * 0.5,
  });
  p.gablePrism('ext', monD + 0.10, monRidgeY - monEaveY + 0.08, 0.18, monW * 0.5, monEaveY - 0.04, 0, cedarDark, {
    ry: Math.PI * 0.5,
  });
  p.kawaraSlope('ext', {
    bottomWidth: monRoofW,
    run: monRun,
    pitch: monPitch,
    ridgeX: 0,
    ridgeY: monRidgeY,
    ridgeZ: 0,
    downslopeYaw: 0,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.36,
  });
  p.kawaraSlope('ext', {
    bottomWidth: monRoofW,
    run: monRun,
    pitch: monPitch,
    ridgeX: 0,
    ridgeY: monRidgeY,
    ridgeZ: 0,
    downslopeYaw: Math.PI,
    tileMat: kawaraDeck,
    ribMat: kawaraRib,
    rafterMat: timberDark,
    ribSpacing: 0.36,
  });
  p.kawaraRidge(
    'ext',
    -monRoofW * 0.5 + 0.05,
    monRidgeY + 0.04,
    0,
    monRoofW * 0.5 - 0.05,
    monRidgeY + 0.04,
    0,
    kawaraRidge,
    oniMat,
    { scale: 0.88, courses: 2, oniStart: true, oniEnd: true }
  );

  return p.build({
    id: 'H23',
    name: '鉄山鍛冶場（越屋根＆煉瓦大煙突の吹抜二階鍛冶屋）',
    subtitle: '6.5m吹抜鍛冶工房・2F見下ろし回廊・煙出し越屋根＆12m大煙突',
    category: 'house',
    builtYear: 1885,
    abandonedYear: 1985,
    stories: 2,
    floorElevations: [Y1, Y2],
    entryLocal: [-3.1, 0.0, 6.45],
    entryLookLocalYaw: 0,
  });
}
