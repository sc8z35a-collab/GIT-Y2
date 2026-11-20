import * as THREE from 'three';
import { TextureCatalog } from '../core/textureCatalog';
import {
  PLANNED_SITES,
  BUILT_HOUSE_IDS,
  GRADED_PATHS,
  SPAWN_POINT,
  SUMMIT_POINT,
  LOOKOUT_POINT,
  getTerrainHeight,
  getStreamCenterX,
} from './terrainMath';

/**
 * Builds the 2km x 5km hillside road infrastructure, site preparation (石垣 retaining walls
 * for older plots), wooden utility poles & sagging wires, guardrails, Lookout Bend mossy
 * graveyard/Jizo lanterns, 865m summit triangulation marker, Kuroiso Gorge stream, and
 * Driftwood Cove beach remnants.
 */
export function buildVillageInfrastructure(catalog: TextureCatalog): THREE.Group {
  const group = new THREE.Group();
  group.name = 'KuroisoInfrastructureAndSites';

  const ishigakiMat = catalog.getMaterial('ishigaki_mossy', { repeatX: 3, repeatY: 1, roughness: 0.94, bumpScale: 0.08 });
  const rubbleWallMat = catalog.getMaterial('ishigaki_rubble', { repeatX: 3, repeatY: 1, roughness: 0.95, bumpScale: 0.08 });
  const poleMat = catalog.getMaterial('charred_cedar', { repeatX: 1, repeatY: 3, roughness: 0.92, bumpScale: 0.05 });
  const woodStakeMat = catalog.getMaterial('aged_timber_planks', { repeatX: 1, repeatY: 1, roughness: 0.92 });
  const rustSteelMat = catalog.getMaterial('dark_iron_plate', { repeatX: 1, repeatY: 1, roughness: 0.75, metalness: 0.55 });
  const guardrailMat = catalog.getMaterial('peeling_paint_steel', { repeatX: 2, repeatY: 1, roughness: 0.78, metalness: 0.35 });
  const concreteMat = catalog.getMaterial('mossy_aged_concrete', { repeatX: 2, repeatY: 1, roughness: 0.94, bumpScale: 0.05 });
  const driftwoodMat = catalog.getMaterial('driftwood', { repeatX: 2, repeatY: 1, roughness: 0.94, bumpScale: 0.07 });
  const seaweedMat = catalog.getMaterial('seaweed_shore', { repeatX: 2, repeatY: 2, roughness: 0.72, bumpScale: 0.05 });
  const barnacleMat = catalog.getMaterial('barnacle_rock', { repeatX: 2, repeatY: 2, roughness: 0.9, bumpScale: 0.08 });
  const mossRockMat = catalog.getMaterial('moss_rock_heavy', { repeatX: 2, repeatY: 2, roughness: 0.92, bumpScale: 0.08 });
  const wireMat = new THREE.LineBasicMaterial({ color: 0x1a1c20, transparent: true, opacity: 0.72 });

  // =========================================================================
  // 1. STONE RETAINING WALLS (石垣) FOR EARLIER PLOTS WITHOUT BESPOKE FOUNDATIONS
  // =========================================================================
  const stakeGeo = new THREE.BoxGeometry(0.14, 1.15, 0.14);
  const cornerStoneGeo = new THREE.BoxGeometry(0.45, 0.36, 0.45);
  const signCapColors: Record<string, number> = {
    house: 0x8b6e52,
    shop: 0xb85b3f,
    koban: 0x3b6ca8,
    park: 0x4b874b,
    secret_base: 0x7c8e42,
    mine: 0x3f434a,
    port: 0x3a7d8c,
  };

  for (let i = 0; i < PLANNED_SITES.length; i++) {
    const s = PLANNED_SITES[i];
    const isBuilt = BUILT_HOUSE_IDS.has(s.id);
    const siteGrp = new THREE.Group();
    siteGrp.position.set(s.x, s.y, s.z);
    siteGrp.rotation.y = s.yaw;

    // Hillside stone retaining embankment (石垣) holding up each terraced plot
    const bespokeFoundationIds = new Set([
      'H06', 'H07', 'H08', 'H09', 'H13', 'H14', 'H15', 'H16', 'H17', 'H18', 'H19', 'H20', 'H21', 'H22', 'H23', 'H24', 'H25',
      'S01', 'S02', 'PORT01', 'K01', 'P01', 'B01', 'M01',
    ]);
    if (s.category !== 'secret_base' && s.category !== 'port' && !bespokeFoundationIds.has(s.id)) {
      const wallH = 4.2;
      const wall = new THREE.Mesh(
        new THREE.BoxGeometry(s.radiusX * 1.96, wallH, s.radiusZ * 1.96),
        i % 2 === 0 ? ishigakiMat : rubbleWallMat
      );
      wall.position.y = -wallH * 0.5 - 0.06;
      wall.receiveShadow = true;
      wall.castShadow = true;
      siteGrp.add(wall);
    }

    // Only place temporary corner boundary stones & survey stake on unbuilt planned plots (now 0 unbuilt!)
    if (!isBuilt) {
      const hx = s.radiusX * 0.82;
      const hz = s.radiusZ * 0.82;
      for (const [cx, cz] of [[-hx, -hz], [hx, -hz], [-hx, hz], [hx, hz]]) {
        const stone = new THREE.Mesh(cornerStoneGeo, concreteMat);
        stone.position.set(cx, 0.14, cz);
        stone.receiveShadow = true;
        siteGrp.add(stone);
      }

      const stake = new THREE.Mesh(stakeGeo, woodStakeMat);
      stake.position.set(0, 0.55, hz + 0.25);
      stake.castShadow = true;
      const cap = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.16, 0.22),
        new THREE.MeshStandardMaterial({ color: signCapColors[s.category] ?? 0x8b6e52, roughness: 0.85 })
      );
      cap.position.set(0, 1.16, hz + 0.25);
      siteGrp.add(stake, cap);
    }

    group.add(siteGrp);
  }

  // Sections 2–4 (P01 Village Park, B01 Kids Secret Base, M01 1890 Coal Mine Cave) and K01 Police Box
  // are now full collidable/enterable BuiltStructures in src/world/houses/!

  // =========================================================================
  // 5. 865.0m SUMMIT PANORAMA MARKER (黒磯岳主峰 標高865m 一等三角点 & ケルン)
  // =========================================================================
  {
    const sy = getTerrainHeight(SUMMIT_POINT.x, SUMMIT_POINT.z);
    const sumGrp = new THREE.Group();
    sumGrp.position.set(SUMMIT_POINT.x, sy, SUMMIT_POINT.z);
    // Granite triangulation stone pillar (一等三角点) deeply bedded into summit rock
    const trigBase = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.80, 0.98), concreteMat);
    trigBase.position.y = -0.10;
    trigBase.castShadow = true;
    trigBase.receiveShadow = true;
    const trigPillar = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.90, 0.32), concreteMat);
    trigPillar.position.y = 0.72;
    trigPillar.castShadow = true;
    // Wooden summit signboard post ("黒磯岳 865m") rooted solidly into local slope elevation
    const signLocalY = getTerrainHeight(SUMMIT_POINT.x + 2.2, SUMMIT_POINT.z - 1.2) - sy;
    const signPost = new THREE.Mesh(new THREE.BoxGeometry(0.16, 3.0, 0.16), woodStakeMat);
    signPost.position.set(2.2, signLocalY + 0.95, -1.2);
    signPost.castShadow = true;
    const signPlank = new THREE.Mesh(new THREE.BoxGeometry(0.34, 1.15, 0.08), woodStakeMat);
    signPlank.position.set(2.2, signLocalY + 1.85, -1.12);
    signPlank.castShadow = true;
    // Stacked hiker's stone cairn (ケルン) tightly seated onto local slope with overlapping stone contact
    const cairnLocalY = getTerrainHeight(SUMMIT_POINT.x - 2.6, SUMMIT_POINT.z + 1.4) - sy;
    const cairnLayers: Array<[number, number]> = [
      [0.74, 0.14],
      [0.58, 0.50],
      [0.44, 0.80],
      [0.30, 1.04],
    ];
    for (const [r, ly] of cairnLayers) {
      const st = new THREE.Mesh(new THREE.DodecahedronGeometry(r, 0), mossRockMat);
      st.scale.set(1.22, 0.56, 1.12);
      st.position.set(-2.6, cairnLocalY + ly, 1.4);
      st.castShadow = true;
      st.receiveShadow = true;
      sumGrp.add(st);
    }
    sumGrp.add(trigBase, trigPillar, signPost, signPlank);
    group.add(sumGrp);
  }

  // Section 6 (PORT01 Hidden Port) is now built as a full collidable/enterable BuiltStructure
  // in src/world/houses/port01_hidden_port.ts (stone quay, 22m walkable pier, boat, lighthouse, 2F warehouse).

  // =========================================================================
  // 7. SHOWA WOODEN UTILITY POLES (木製電柱) & SAGGING WIRES ALONG HILLSIDE ROADS
  // =========================================================================
  const poleGeo = new THREE.CylinderGeometry(0.11, 0.17, 8.8, 6);
  poleGeo.translate(0, 4.4, 0);
  const armGeo = new THREE.BoxGeometry(1.75, 0.11, 0.11);

  const wireRoadIds = new Set(['road_village_mid', 'road_village_low', 'road_village_high']);
  for (const path of GRADED_PATHS) {
    if (!wireRoadIds.has(path.id)) continue;
    const anchorsA: THREE.Vector3[] = [];
    const anchorsB: THREE.Vector3[] = [];
    for (let i = 0; i < path.points.length; i++) {
      const [rx, rz] = path.points[i];
      const next = path.points[Math.min(i + 1, path.points.length - 1)];
      const prev = path.points[Math.max(i - 1, 0)];
      const dx = next[0] - prev[0];
      const dz = next[1] - prev[1];
      const len = Math.hypot(dx, dz) || 1;
      const sideX = (-dz / len) * 3.4;
      const sideZ = (dx / len) * 3.4;
      const px = rx + sideX;
      const pz = rz + sideZ;
      const py = getTerrainHeight(px, pz) - 0.35;
      const yaw = Math.atan2(dx, dz);

      const pGrp = new THREE.Group();
      pGrp.position.set(px, py, pz);
      pGrp.rotation.y = yaw;
      pGrp.rotation.z = ((i % 3) - 1) * 0.03;

      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.castShadow = true;
      const arm1 = new THREE.Mesh(armGeo, rustSteelMat);
      arm1.position.y = 8.0;
      const arm2 = new THREE.Mesh(armGeo, rustSteelMat);
      arm2.position.y = 7.3;
      pGrp.add(pole, arm1, arm2);
      group.add(pGrp);

      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      anchorsA.push(new THREE.Vector3(px - 0.72 * cosY, py + 8.05, pz + 0.72 * sinY));
      anchorsB.push(new THREE.Vector3(px + 0.72 * cosY, py + 8.05, pz - 0.72 * sinY));
    }

    for (const anchors of [anchorsA, anchorsB]) {
      for (let i = 0; i < anchors.length - 1; i++) {
        const a = anchors[i];
        const b = anchors[i + 1];
        const dist = a.distanceTo(b);
        if (dist > 220) continue;
        const sag = Math.min(3.5, dist * 0.028);
        const pts: THREE.Vector3[] = [];
        for (let s = 0; s <= 8; s++) {
          const t = s / 8;
          const p = new THREE.Vector3().lerpVectors(a, b, t);
          p.y -= 4 * t * (1 - t) * sag;
          pts.push(p);
        }
        group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), wireMat));
      }
    }
  }

  // =========================================================================
  // 8. LOOKOUT BEND LANDMARKS (見晴らし坂 — image.png homage!)
  //    Mossy gravestones, stone lantern & weathered hillside guardrails
  // =========================================================================
  const gx = LOOKOUT_POINT.x + 8.5;
  const gz = LOOKOUT_POINT.z + 10.0;
  const gy = getTerrainHeight(gx, gz);
  const graveWall = new THREE.Mesh(new THREE.BoxGeometry(7.6, 1.4, 0.72), ishigakiMat);
  graveWall.position.set(gx, gy + 0.35, gz);
  graveWall.rotation.y = -0.35;
  group.add(graveWall);

  for (const [ox, oz, w, h] of [[-2.0, -1.2, 0.52, 1.48], [-0.7, -1.7, 0.42, 1.18], [0.6, -2.2, 0.48, 1.34]]) {
    const tx = gx + ox;
    const tz = gz + oz;
    const ty = getTerrainHeight(tx, tz);
    const stele = new THREE.Mesh(new THREE.BoxGeometry(w, h, w * 0.72), ishigakiMat);
    stele.position.set(tx, ty + h * 0.5, tz);
    stele.rotation.y = -0.35;
    stele.castShadow = true;
    group.add(stele);
  }
  // Stone lantern (石灯籠)
  const lx = gx + 2.4;
  const lz = gz - 2.9;
  const ly = getTerrainHeight(lx, lz);
  const lanPed = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.34, 0.85, 6), ishigakiMat);
  lanPed.position.set(lx, ly + 0.42, lz);
  const lanBox = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.42, 0.46), ishigakiMat);
  lanBox.position.set(lx, ly + 1.05, lz);
  const lanRoof = new THREE.Mesh(new THREE.ConeGeometry(0.58, 0.36, 4), ishigakiMat);
  lanRoof.position.set(lx, ly + 1.42, lz);
  lanRoof.rotation.y = Math.PI / 4;
  group.add(lanPed, lanBox, lanRoof);

  // Rusted roadside guardrails along steep drops of Middle Main Hillside Road
  const midRoad = GRADED_PATHS.find((p) => p.id === 'road_village_mid');
  if (midRoad) {
    for (let i = 1; i < midRoad.points.length - 2; i += 2) {
      const [ax, az] = midRoad.points[i];
      const [bx, bz] = midRoad.points[i + 1];
      const dx = bx - ax;
      const dz = bz - az;
      const len = Math.hypot(dx, dz) || 1;
      // Place guardrail on downhill (-X) roadside edge
      const offX = -2.8;
      const steps = Math.max(3, Math.floor(len / 8));
      for (let s = 0; s < steps; s++) {
        const t0 = s / steps;
        const t1 = (s + 1) / steps;
        const x0 = ax + dx * t0 + offX;
        const z0 = az + dz * t0;
        const x1 = ax + dx * t1 + offX;
        const z1 = az + dz * t1;
        const y0 = getTerrainHeight(x0, z0);
        const y1 = getTerrainHeight(x1, z1);
        const segLen = Math.hypot(x1 - x0, z1 - z0);
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.95, 5), rustSteelMat);
        post.position.set(x0, y0 + 0.45, z0);
        const beam = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.28, segLen + 0.08), guardrailMat);
        beam.position.set((x0 + x1) * 0.5, (y0 + y1) * 0.5 + 0.72, (z0 + z1) * 0.5);
        beam.rotation.y = Math.atan2(x1 - x0, z1 - z0);
        beam.rotation.x = -Math.atan2(y1 - y0, segLen);
        group.add(post, beam);
      }
    }
  }

  // =========================================================================
  // 9. KUROISO GORGE MOUNTAIN STREAM WATER RIBBON
  // =========================================================================
  const sVerts: number[] = [];
  const sIdx: number[] = [];
  let sCount = 0;
  for (let z = -760; z <= 2140; z += 18) {
    const cx = getStreamCenterX(z);
    const halfW = 3.8 + (z > 1400 ? (z - 1400) * 0.006 : 0);
    const y = getTerrainHeight(cx, z) + 0.55;
    sVerts.push(cx - halfW, y, z, cx + halfW, y, z);
    if (sCount > 0) {
      const b = (sCount - 1) * 2;
      sIdx.push(b, b + 2, b + 1, b + 1, b + 2, b + 3);
    }
    sCount++;
  }
  const streamGeo = new THREE.BufferGeometry();
  streamGeo.setAttribute('position', new THREE.Float32BufferAttribute(sVerts, 3));
  streamGeo.setIndex(sIdx);
  streamGeo.computeVertexNormals();
  const streamMesh = new THREE.Mesh(
    streamGeo,
    new THREE.MeshStandardMaterial({ color: 0x3b6e78, roughness: 0.14, metalness: 0.22, transparent: true, opacity: 0.78 })
  );
  group.add(streamMesh);

  // =========================================================================
  // 10. DRIFTWOOD COVE (漂着浜) — Protagonist Wake-up Beach Details
  // =========================================================================
  const driftLogs: Array<[number, number, number, number, number]> = [
    [SPAWN_POINT.x - 8, SPAWN_POINT.z - 5, 4.4, 0.26, 0.42],
    [SPAWN_POINT.x + 9, SPAWN_POINT.z - 3, 5.1, 0.30, -0.68],
    [SPAWN_POINT.x - 16, SPAWN_POINT.z - 11, 5.6, 0.32, 1.12],
    [SPAWN_POINT.x + 18, SPAWN_POINT.z - 9, 3.8, 0.22, 2.05],
    [SPAWN_POINT.x + 2, SPAWN_POINT.z + 7, 3.2, 0.18, -1.25],
    [SPAWN_POINT.x - 24, SPAWN_POINT.z + 2, 4.5, 0.28, -0.32],
  ];
  for (const [dx, dz, len, rad, rot] of driftLogs) {
    const dy = getTerrainHeight(dx, dz);
    const log = new THREE.Mesh(new THREE.CylinderGeometry(rad * 0.74, rad, len, 7), driftwoodMat);
    log.position.set(dx, dy + rad * 0.55, dz);
    log.rotation.set(Math.PI / 2 - 0.05, rot, 0.06);
    log.castShadow = true;
    log.receiveShadow = true;
    group.add(log);
  }
  // Natural half-buried wet tide boulders & weathered driftwood boards along the surf line
  for (let i = 0; i < 14; i++) {
    const sx = SPAWN_POINT.x - 36 + i * 5.6;
    const sz = SPAWN_POINT.z + 9 + Math.sin(i * 1.9) * 4.5;
    const sy = getTerrainHeight(sx, sz);
    if (sy < 0.25 || sy > 3.2) continue;
    if (i % 3 === 0) {
      // Half-buried weathered wooden boat plank washed ashore
      const plank = new THREE.Mesh(new THREE.BoxGeometry(2.1 + (i % 2) * 0.7, 0.09, 0.32), driftwoodMat);
      plank.position.set(sx, sy + 0.02, sz);
      plank.rotation.set(0.05, i * 0.85, -0.04);
      plank.castShadow = true;
      plank.receiveShadow = true;
      group.add(plank);
    } else {
      // Half-buried rounded seaweed/barnacle tide stone
      const r = 0.55 + (i % 4) * 0.22;
      const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), i % 2 === 0 ? seaweedMat : barnacleMat);
      rock.scale.set(1.4, 0.42, 1.15);
      rock.position.set(sx, sy - r * 0.14, sz);
      rock.rotation.set(0.12 * i, i * 1.1, 0.08);
      rock.receiveShadow = true;
      group.add(rock);
    }
  }
  for (const [rx, rz, rs] of [
    [SPAWN_POINT.x - 56, SPAWN_POINT.z + 16, 4.8],
    [SPAWN_POINT.x - 72, SPAWN_POINT.z + 28, 6.8],
    [SPAWN_POINT.x + 62, SPAWN_POINT.z + 14, 5.2],
    [SPAWN_POINT.x + 78, SPAWN_POINT.z + 28, 7.2],
  ]) {
    const ry = getTerrainHeight(rx, rz);
    const rk = new THREE.Mesh(new THREE.DodecahedronGeometry(rs, 1), barnacleMat);
    rk.scale.set(1.25, 0.72, 1.05);
    rk.position.set(rx, ry + rs * 0.22, rz);
    rk.castShadow = true;
    rk.receiveShadow = true;
    group.add(rk);
  }

  return group;
}
