import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import type { PlannedSite } from '../terrainMath';
import { HousePrimitives } from './housePrimitives';

/**
 * P01: 見晴らし村営公園（1964年整備・1985年閉園 — 全29m×23m 昭和レトロ村営公園）
 * 下段斜面村道（road_village_low）の東側に広がる、苔石垣に囲まれた開放的な見晴らし広場。
 * すべての遊具・東屋・管理小屋が手作業＆完全衝突・登頂対応！
 *  1. 西正門（幅4.8m開放）＆切石門柱・島案内図・町内掲示板・苔石舗装園路。
 *  2. 登って滑れる昭和レトロ「すべり台」（階段昇降→地上+2.30m踊り場→傾斜ステンレスシュート滑走！）。
 *  3. 錆びた二連鉄管ブランコ＆3×3×3溶接鉄骨ジャングルジム＆コンクリート縁砂場＆傾いた木製シーソー。
 *  4. 宝形本瓦屋根の見晴らし木造東屋（休憩所・高床デッキ＆周囲ベンチから渓谷対岸の廃村を一望）。
 *  5. 中央の白青レトロタイル水飲み場・木製公園ベンチ×4・古鉄園灯×3・入室可能な公園管理小屋兼公衆便所。
 */
export function buildPark01Miharashi(site: PlannedSite, catalog: TextureCatalog): BuiltStructure {
  const p = new HousePrimitives(site);

  // --- Nostalgic 1964–1985 Japanese Showa Park Materials ---
  const mossyStone = catalog.getMaterial('ishigaki_mossy', { roughness: 0.94, bumpScale: 0.08 });
  const cutStone = catalog.getMaterial('ishigaki_cut', { roughness: 0.92, bumpScale: 0.07 });
  const stepStone = catalog.getMaterial('dressed_stone', { roughness: 0.90, bumpScale: 0.06 });
  const mossyPavers = catalog.getMaterial('mossy_pavers', { roughness: 0.92, bumpScale: 0.06 });
  const sidewalkSlab = catalog.getMaterial('sidewalk_slab', { roughness: 0.90, bumpScale: 0.05 });
  const dirtYard = catalog.getMaterial('dirt_gravel_yard', { roughness: 0.96, bumpScale: 0.07 });
  const sandMat = catalog.getMaterial('sand_coarse', { roughness: 0.95, bumpScale: 0.06 });
  const mossyConc = catalog.getMaterial('mossy_aged_concrete', { roughness: 0.94, bumpScale: 0.06 });
  const concreteCurb = catalog.getMaterial('concrete_curb', { roughness: 0.92, bumpScale: 0.05 });
  const rawConc = catalog.getMaterial('raw_concrete', { roughness: 0.92, bumpScale: 0.05 });

  // --- Playground Equipment, Gazebo & Restroom Materials ---
  const peelSteel = catalog.getMaterial('peeling_paint_steel', { roughness: 0.72, metalness: 0.40, bumpScale: 0.05 });
  const blueSteel = catalog.getMaterial('peeling_paint_steel', { roughness: 0.70, metalness: 0.36, bumpScale: 0.05, tint: 0x628ea6 });
  const redWood = catalog.getMaterial('faded_red_wood', { roughness: 0.86, bumpScale: 0.05 });
  const brushedSteel = catalog.getMaterial('brushed_steel', { roughness: 0.36, metalness: 0.74, bumpScale: 0.02 });
  const rustBolts = catalog.getMaterial('rusted_plate_bolts', { roughness: 0.74, metalness: 0.48, bumpScale: 0.05 });
  const ironBlack = catalog.getMaterial('matte_black_metal', { roughness: 0.54, metalness: 0.50 });
  const agedTimber = catalog.getMaterial('aged_timber_planks', { roughness: 0.90, bumpScale: 0.05 });
  const timberDark = catalog.getMaterial('dark_hardwood', { roughness: 0.84, bumpScale: 0.04 });
  const warmFloor = catalog.getMaterial('warm_wood_plank', { roughness: 0.82, bumpScale: 0.04 });
  const smallWhiteTile = catalog.getMaterial('small_white_tile', { roughness: 0.42, bumpScale: 0.03 });
  const blueMosaic = catalog.getMaterial('blue_mosaic_tile', { roughness: 0.44, bumpScale: 0.03 });
  const whiteBath = catalog.getMaterial('white_bath_tile', { roughness: 0.44, bumpScale: 0.03 });
  const vanitySink = catalog.getMaterial('vanity_sink', { roughness: 0.48, bumpScale: 0.03 });
  const drainGrate = catalog.getMaterial('drain_grate', { roughness: 0.65, metalness: 0.55 });
  const rackMat = catalog.getMaterial('storage_rack', { roughness: 0.86, bumpScale: 0.04 });
  const fireBox = catalog.getMaterial('fire_extinguisher_box', { roughness: 0.54, metalness: 0.26 });
  const mapSign = catalog.getMaterial('island_map_sign', { roughness: 0.78, bumpScale: 0.02 });
  const noticeMat = catalog.getMaterial('notice_board', { roughness: 0.86, bumpScale: 0.02 });
  const frostedGlass = catalog.getMaterial('frosted_acrylic', { roughness: 0.35, opacity: 0.65, transparent: true });

  // --- Gazebo Hon-gawara Roof Materials ---
  const kawaraDeck = catalog.getMaterial('slate_roof_dark', { roughness: 0.72, metalness: 0.18, bumpScale: 0.06, tint: 0x66746c });
  const kawaraRib = catalog.getMaterial('dark_slate', { roughness: 0.68, metalness: 0.22, bumpScale: 0.05, tint: 0x54625a });
  const kawaraRidge = catalog.getMaterial('dark_iron_plate', { roughness: 0.60, metalness: 0.32, tint: 0x48544d });
  const oniMat = catalog.getMaterial('matte_black_metal', { roughness: 0.52, metalness: 0.40, tint: 0x3b443e });

  // =========================================================================
  // 1. RETAINING STONE TERRACE, PERIMETER WALL, WEST ROAD GATE & PROMENADE
  // =========================================================================
  p.box('ext', 29.4, 3.60, 23.4, 0, -1.84, 0, mossyStone);
  // Mossy stone paved main walkways + central fountain circle + gravel play areas
  p.box('ext', 26.8, 0.08, 3.00, -0.4, 0.01, 0.0, mossyPavers);
  p.box('ext', 2.80, 0.08, 20.6, -2.5, 0.01, 0.0, mossyPavers);
  p.cyl('ext', 3.55, 3.65, 0.09, 16, -2.5, 0.015, 0.0, sidewalkSlab);
  p.box('ext', 11.4, 0.05, 8.6, -7.8, 0.0, 6.4, dirtYard);  // SW Swing/Play gravel pad
  p.box('ext', 11.4, 0.05, 8.6, -7.8, 0.0, -6.4, dirtYard); // NW Jungle-gym gravel pad
  p.floor(-14.8, 14.0, -11.0, 11.0, 0.06);

  // Low Mossy Stone Perimeter Wall on all 4 sides (West Road Gate open Z ∈ [-2.4, +2.4]!)
  p.box('ext', 28.8, 0.84, 0.56, 0.0, 0.42, -11.2, mossyStone, { solid: true });
  p.box('ext', 28.8, 0.84, 0.56, 0.0, 0.42, 11.2, mossyStone, { solid: true });
  p.box('ext', 0.56, 0.84, 22.8, 14.2, 0.42, 0.0, mossyStone, { solid: true });
  p.box('ext', 0.56, 0.84, 8.80, -14.2, 0.42, -6.8, mossyStone, { solid: true });
  p.box('ext', 0.56, 0.84, 8.80, -14.2, 0.42, 6.8, mossyStone, { solid: true });

  // Cut-Stone Park Entrance Gate Pillars (X = -14.2, Z = ±2.55) + Park Map & Notice Board!
  for (const gz of [-2.55, 2.55]) {
    p.box('ext', 0.74, 1.82, 0.74, -14.2, 0.91, gz, cutStone, { solid: true });
    p.box('ext', 0.86, 0.14, 0.86, -14.2, 1.86, gz, stepStone);
    p.box('ext', 0.34, 0.38, 0.34, -14.2, 2.12, gz, frostedGlass);
    p.box('ext', 0.44, 0.08, 0.44, -14.2, 2.34, gz, ironBlack);
  }
  // Park Village Trail Map & Notice Board inside West Gate
  p.box('ext', 0.12, 1.85, 0.12, -12.6, 0.92, 3.10, timberDark, { solid: true });
  p.box('ext', 0.12, 1.85, 0.12, -12.6, 0.92, 4.45, timberDark, { solid: true });
  p.box('ext', 0.10, 0.95, 1.30, -12.6, 1.32, 3.78, mapSign, { solid: true, uvScale: 0 });
  p.box('ext', 0.50, 0.08, 1.65, -12.6, 1.86, 3.78, timberDark);
  p.box('ext', 0.12, 1.80, 0.12, -12.6, 0.90, -3.10, timberDark, { solid: true });
  p.box('ext', 0.12, 1.80, 0.12, -12.6, 0.90, -4.35, timberDark, { solid: true });
  p.box('ext', 0.10, 0.88, 1.20, -12.6, 1.28, -3.72, noticeMat, { solid: true, uvScale: 0 });

  // =========================================================================
  // 2. RETRO TILED CENTRAL DRINKING FOUNTAIN (水飲み場) & WOODEN PARK BENCHES
  // =========================================================================
  p.box('ext', 1.48, 0.84, 1.48, -2.5, 0.42, 0.0, smallWhiteTile, { solid: true });
  p.box('ext', 1.56, 0.16, 1.56, -2.5, 0.86, 0.0, blueMosaic);
  p.box('ext', 1.12, 0.08, 1.12, -2.5, 0.80, 0.0, drainGrate);
  p.cyl('ext', 0.05, 0.05, 0.24, 8, -2.5, 1.00, 0.48, brushedSteel); // Spout faucet A
  p.cyl('ext', 0.05, 0.05, 0.24, 8, -2.5, 1.00, -0.48, brushedSteel); // Spout faucet B

  // 4 Weathered Wooden Park Benches facing the central promenade
  const benchSpecs: Array<[number, number, number]> = [
    [-7.8, 2.25, 0],
    [-7.8, -2.25, Math.PI],
    [2.6, 2.25, 0],
    [2.6, -2.25, Math.PI],
  ];
  for (const [bx, bz, bry] of benchSpecs) {
    const backSign = bry === 0 ? 1 : -1;
    p.box('ext', 2.20, 0.10, 0.52, bx, 0.48, bz, agedTimber, { solid: true });
    p.box('ext', 2.20, 0.36, 0.09, bx, 0.78, bz + backSign * 0.24, agedTimber);
    p.box('ext', 0.16, 0.46, 0.46, bx - 0.85, 0.23, bz, mossyConc);
    p.box('ext', 0.16, 0.46, 0.46, bx + 0.85, 0.23, bz, mossyConc);
  }
  // 3 Tall Retro Park Lamp Posts
  for (const [lx, lz] of [[-5.6, 2.2], [0.5, -2.2], [5.8, 2.2]]) {
    p.cyl('ext', 0.07, 0.11, 3.65, 8, lx, 1.82, lz, ironBlack);
    p.box('ext', 0.38, 0.40, 0.38, lx, 3.82, lz, frostedGlass);
    p.box('ext', 0.52, 0.08, 0.52, lx, 4.06, lz, ironBlack);
    p.collider(lx - 0.16, lx + 0.16, 0, 2.4, lz - 0.16, lz + 0.16);
  }

  // =========================================================================
  // 3. ★ CLIMBABLE RETRO PLAYGROUND SLIDE (すべり台 — 階段登頂＆滑走可!)
  // =========================================================================
  const sZ = 5.40;
  // Walkable Staircase climbing Eastward X: +2.0 -> +4.35, Y: 0.06 -> +2.28m!
  p.stairRun('ext', {
    x0: 2.00, z0: sZ, x1: 4.35, z1: sZ, y0: 0.06, y1: 2.28,
    width: 1.12, steps: 9, treadMat: brushedSteel, stringerMat: blueSteel, railMat: redWood,
    railLeft: true, railRight: true, closedRisers: false, guardLeft: true, guardRight: true,
  });
  // Top Slide Platform (X ∈ [+4.35, +5.65], Z ∈ [sZ-0.62, sZ+0.62], Y = +2.28m)
  p.box('ext', 1.35, 0.14, 1.28, 5.00, 2.21, sZ, brushedSteel);
  p.floor(4.32, 5.68, sZ - 0.58, sZ + 0.58, 2.28);
  // Support legs under slide platform
  for (const [px, pz] of [[4.42, sZ - 0.56], [4.42, sZ + 0.56], [5.58, sZ - 0.56], [5.58, sZ + 0.56]]) {
    p.cyl('ext', 0.055, 0.06, 2.22, 8, px, 1.11, pz, blueSteel);
  }
  p.kouranRailing('ext', 4.36, sZ - 0.60, 5.64, sZ - 0.60, 2.28, 0.88, redWood, 0.44);
  p.kouranRailing('ext', 4.36, sZ + 0.60, 5.64, sZ + 0.60, 2.28, 0.88, redWood, 0.44);
  // ★ WALKABLE SLOPED BRUSHED-STEEL SLIDE CHUTE descending X: +5.65 (2.28m) -> +9.45 (0.14m)!
  const chuteLen = Math.hypot(3.80, 2.14);
  const chutePitch = Math.atan2(2.14, 3.80);
  p.box('ext', chuteLen, 0.10, 1.16, 7.55, 1.21, sZ, brushedSteel, { rz: -chutePitch });
  p.box('ext', chuteLen, 0.28, 0.09, 7.55, 1.36, sZ - 0.58, redWood, { rz: -chutePitch });
  p.box('ext', chuteLen, 0.28, 0.09, 7.55, 1.36, sZ + 0.58, redWood, { rz: -chutePitch });
  p.box('ext', 0.65, 0.14, 1.26, 9.55, 0.07, sZ, mossyConc); // Landing pad curb
  p.ramp(5.60, 9.48, sZ - 0.54, sZ + 0.54, 0.14, 2.28, 'x', -1);

  // =========================================================================
  // 4. WEATHERED 2-SEAT SWING SET (ブランコ), JUNGLE GYM, SANDBOX & SEESAW
  // =========================================================================
  // Two-Seat Swing Set (SW lawn: X = -8.4, Z = +7.2)
  const swX = -8.40;
  const swZ = 7.20;
  p.cyl('ext', 0.06, 0.06, 4.65, 8, swX, 3.02, swZ, blueSteel, { rz: Math.PI * 0.5 }); // Top crossbar
  for (const sx of [swX - 2.20, swX + 2.20]) {
    p.cyl('ext', 0.055, 0.06, 3.35, 8, sx, 1.54, swZ - 0.72, blueSteel, { rx: 0.44 });
    p.cyl('ext', 0.055, 0.06, 3.35, 8, sx, 1.54, swZ + 0.72, blueSteel, { rx: -0.44 });
    p.collider(sx - 0.22, sx + 0.22, 0, 2.8, swZ - 1.35, swZ + 1.35);
  }
  // Seat 1 (level) & Seat 2 (slightly crooked from 1985 wind)
  for (const [seatX, tilt] of [[swX - 0.92, 0], [swX + 0.92, 0.14]]) {
    p.cyl('ext', 0.016, 0.016, 2.38, 6, seatX - 0.26, 1.80, swZ, rustBolts);
    p.cyl('ext', 0.016, 0.016, 2.38, 6, seatX + 0.26, 1.80, swZ, rustBolts);
    p.box('ext', 0.64, 0.06, 0.28, seatX, 0.62, swZ, agedTimber, { rz: tilt });
  }

  // ★ 3x3x3 WELDED STEEL JUNGLE GYM (ジャングルジム: NW Play Area X=-8.4, Z=-7.0)
  const jgX = -8.40;
  const jgZ = -7.00;
  const jStep = 0.82;
  const jSpan = jStep * 3; // 2.46m cube
  for (let iy = 0; iy <= 3; iy++) {
    const yy = iy * jStep + 0.08;
    for (let ix = 0; ix <= 3; ix++) {
      const xx = jgX + (ix - 1.5) * jStep;
      if (iy > 0) p.cyl('ext', 0.024, 0.024, jSpan, 6, xx, yy, jgZ, peelSteel, { rx: Math.PI * 0.5 });
      if (iy === 0) {
        for (let iz = 0; iz <= 3; iz++) {
          const zz = jgZ + (iz - 1.5) * jStep;
          p.cyl('ext', 0.024, 0.024, jSpan, 6, xx, jSpan * 0.5 + 0.08, zz, peelSteel);
        }
      }
    }
    if (iy > 0) {
      for (let iz = 0; iz <= 3; iz++) {
        const zz = jgZ + (iz - 1.5) * jStep;
        p.cyl('ext', 0.024, 0.024, jSpan, 6, jgX, yy, zz, peelSteel, { rz: Math.PI * 0.5 });
      }
    }
  }
  p.collider(jgX - jSpan * 0.52, jgX + jSpan * 0.52, 0.0, jSpan + 0.1, jgZ - jSpan * 0.52, jgZ + jSpan * 0.52);

  // Concrete-Curbed Sandbox (砂場: X ∈ [-4.4, +0.6], Z ∈ [+5.6, +9.4])
  p.box('ext', 4.85, 0.10, 3.65, -1.90, 0.05, 7.50, sandMat);
  p.box('ext', 5.20, 0.30, 0.26, -1.90, 0.15, 5.65, concreteCurb);
  p.box('ext', 5.20, 0.30, 0.26, -1.90, 0.15, 9.35, concreteCurb);
  p.box('ext', 0.26, 0.30, 3.90, -4.40, 0.15, 7.50, concreteCurb);
  p.box('ext', 0.26, 0.30, 3.90, 0.60, 0.15, 7.50, concreteCurb);

  // Tilted Wooden Seesaw (シーソー: X = +4.2, Z = -5.6)
  p.box('ext', 0.18, 0.62, 0.42, 4.20, 0.31, -5.60, ironBlack, { solid: true });
  p.box('ext', 4.10, 0.09, 0.34, 4.20, 0.64, -5.60, redWood, { rz: 0.19 });
  p.cyl('ext', 0.022, 0.022, 0.34, 6, 2.75, 0.56, -5.60, ironBlack);
  p.cyl('ext', 0.022, 0.022, 0.34, 6, 5.65, 1.06, -5.60, ironBlack);

  // =========================================================================
  // 5. ★ WALK-IN HON-GAWARA PARK GAZEBO PAVILION (見晴らし東屋: X∈[+6.8,+12.6])
  // =========================================================================
  const gx = 9.70;
  const gz = -2.20;
  const gY = 0.38;
  p.box('ext', 5.80, 0.44, 5.80, gx, gY - 0.22, gz, cutStone);
  p.box('ext', 5.40, 0.10, 5.40, gx, gY - 0.03, gz, warmFloor);
  p.floor(gx - 2.65, gx + 2.65, gz - 2.65, gz + 2.65, gY + 0.04);
  // West Entry Steps into Gazebo (aligned along X facing the central park promenade!)
  p.box('ext', 0.56, 0.20, 2.30, gx - 3.38, 0.10, gz, stepStone);
  p.box('ext', 0.54, 0.36, 2.30, gx - 2.94, 0.18, gz, stepStone);
  p.ramp(gx - 3.68, gx - 2.62, gz - 1.15, gz + 1.15, 0.06, gY + 0.04, 'x', 1);
  // 4 Corner Cedar Pillars + Roof Beams + Built-in Perimeter View Benches (North, East, South)!
  for (const [cx, cz] of [[gx - 2.42, gz - 2.42], [gx + 2.42, gz - 2.42], [gx - 2.42, gz + 2.42], [gx + 2.42, gz + 2.42]]) {
    p.box('ext', 0.22, 2.86, 0.22, cx, gY + 1.43, cz, timberDark, { solid: true });
  }
  p.box('ext', 5.10, 0.20, 0.20, gx, gY + 2.86, gz - 2.42, timberDark);
  p.box('ext', 5.10, 0.20, 0.20, gx, gY + 2.86, gz + 2.42, timberDark);
  p.box('ext', 0.20, 0.20, 5.10, gx - 2.42, gY + 2.86, gz, timberDark);
  p.box('ext', 0.20, 0.20, 5.10, gx + 2.42, gY + 2.86, gz, timberDark);
  // Perimeter Wooden Benches overlooking the valley
  p.box('ext', 4.30, 0.10, 0.56, gx, gY + 0.44, gz - 2.12, agedTimber, { solid: true });
  p.box('ext', 4.30, 0.10, 0.56, gx, gY + 0.44, gz + 2.12, agedTimber, { solid: true });
  p.box('ext', 0.56, 0.10, 4.30, gx + 2.12, gY + 0.44, gz, agedTimber, { solid: true });
  // Hand-Crafted 4-Way Pyramidal Hon-gawara Hogyo Roof (宝形本瓦屋根) + Central Rohban Finial!
  const gPitch = 0.48;
  const gRun = 3.55;
  const gBaseY = gY + 2.86;
  const gApexY = gBaseY + gRun * Math.tan(gPitch);
  for (const yaw of [0, Math.PI * 0.5, Math.PI, -Math.PI * 0.5]) {
    p.kawaraSlope('ext', {
      topWidth: 0.08, bottomWidth: 7.10, run: gRun, pitch: gPitch,
      ridgeX: gx, ridgeY: gApexY, ridgeZ: gz, downslopeYaw: yaw,
      tileMat: kawaraDeck, ribMat: kawaraRib, rafterMat: timberDark, fasciaMat: timberDark, ribSpacing: 0.38,
    });
  }
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    p.kawaraRidge('ext', gx, gApexY + 0.02, gz, gx + sx * gRun, gBaseY - 0.04, gz + sz * gRun, kawaraRidge, oniMat, {
      scale: 0.68, oniEnd: true, courses: 1,
    });
  }
  // Traditional Central Pyramidal Rohban / Hogyo Roof Finial (露盤宝珠)
  p.box('ext', 0.42, 0.24, 0.42, gx, gApexY + 0.14, gz, oniMat);
  p.cyl('ext', 0.08, 0.16, 0.48, 8, gx, gApexY + 0.48, gz, oniMat);

  // =========================================================================
  // 6. ENTERABLE CONCRETE PARK MANAGEMENT SHED & PUBLIC RESTROOM (北隅)
  // =========================================================================
  const rx = 0.20;
  const rz = -9.15;
  const rY = 0.18;
  const rH = 2.75;
  p.box('ext', 5.80, 0.24, 3.40, rx, rY - 0.10, rz, rawConc);
  p.box('int', 5.40, 0.08, 3.00, rx, rY - 0.02, rz, whiteBath);
  p.floor(rx - 2.65, rx + 2.65, rz - 1.45, rz + 1.65, rY + 0.04);
  // Concrete Walls (Open South Doorway X ∈ [-0.6, +1.0], Z = rz + 1.60)
  p.box('ext', 5.80, rH, 0.22, rx, rY + rH * 0.5, rz - 1.60, mossyConc, { solid: true });
  p.box('ext', 0.22, rH, 3.20, rx - 2.80, rY + rH * 0.5, rz, mossyConc, { solid: true });
  p.box('ext', 0.22, rH, 3.20, rx + 2.80, rY + rH * 0.5, rz, mossyConc, { solid: true });
  p.box('ext', 2.20, rH, 0.22, rx - 1.80, rY + rH * 0.5, rz + 1.60, mossyConc, { solid: true });
  p.box('ext', 2.00, rH, 0.22, rx + 1.90, rY + rH * 0.5, rz + 1.60, mossyConc, { solid: true });
  p.box('ext', 1.65, 0.62, 0.22, rx + 0.20, rY + rH - 0.31, rz + 1.60, mossyConc, { solid: true });
  // Overhanging Flat Concrete Roof Slab
  p.box('ext', 6.45, 0.24, 4.05, rx, rY + rH + 0.12, rz, rawConc);
  p.collider(rx - 2.95, rx + 2.95, rY + rH, rY + rH + 0.28, rz - 1.75, rz + 1.75);
  // Interior Tiled Restroom Sink, Floor Drain, Tool Rack & Fire Box!
  p.box('int', 5.20, rH - 0.10, 0.06, rx, rY + rH * 0.5, rz - 1.45, whiteBath);
  p.box('int', 1.05, 0.88, 0.52, rx - 1.65, rY + 0.44, rz - 1.12, vanitySink, { solid: true, uvScale: 0 });
  p.box('int', 0.56, 0.03, 0.56, rx + 0.20, rY + 0.04, rz - 0.45, drainGrate);
  p.box('int', 1.25, 1.75, 0.52, rx + 1.85, rY + 0.88, rz - 1.12, rackMat, { solid: true, uvScale: 0 });
  p.box('ext', 0.34, 0.72, 0.22, rx - 1.25, rY + 1.20, rz + 1.80, fireBox, { uvScale: 0 });

  return p.build({
    id: 'P01',
    name: '見晴らし村営公園',
    subtitle: '昭和39年（1964年）整備・登れるすべり台＆ブランコ＆ジャングルジム・本瓦東屋・水飲み場・管理小屋',
    category: 'park',
    builtYear: 1964,
    abandonedYear: 1985,
    stories: 1,
    floorElevations: [0.06, 2.28],
    entryLocal: [-16.6, 0.0, 0.0],
    entryLookLocalYaw: -Math.PI * 0.5,
  });
}
