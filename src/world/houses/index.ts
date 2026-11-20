import * as THREE from 'three';
import type { BuiltStructure } from '../../core/types';
import type { TextureCatalog } from '../../core/textureCatalog';
import { PLANNED_SITES, type PlannedSite } from '../terrainMath';

import { buildHouse01Hamada } from './house01_hamada';
import { buildHouse02Isobe } from './house02_isobe';
import { buildHouse03Takagi } from './house03_takagi';
import { buildHouse04Iwasaki } from './house04_iwasaki';
import { buildHouse05Saeki } from './house05_saeki';
import { buildHouse06Fujiwara } from './house06_fujiwara';
import { buildHouse07Ando } from './house07_ando';
import { buildHouse08Nagai } from './house08_nagai';
import { buildHouse09Morimoto } from './house09_morimoto';
import { buildHouse10Shirai } from './house10_shirai';
import { buildHouse11Kuroda } from './house11_kuroda';
import { buildHouse12Matsuoka } from './house12_matsuoka';
import { buildHouse13Kamiya } from './house13_kamiya';
import { buildHouse14Murata } from './house14_murata';
import { buildHouse15Yoshida } from './house15_yoshida';
import { buildHouse16Tanabe } from './house16_tanabe';
import { buildHouse17Ono } from './house17_ono';
import { buildHouse18Sugiyama } from './house18_sugiyama';
import { buildHouse19Ogawa } from './house19_ogawa';
import { buildHouse20Engineer } from './house20_engineer';
import { buildHouse21Rowhouse } from './house21_rowhouse';
import { buildHouse22Kuroiwa } from './house22_kuroiwa';
import { buildHouse23Smith } from './house23_smith';
import { buildHouse24Dormitory } from './house24_dormitory';
import { buildHouse25Sawada } from './house25_sawada';
import { buildShop01Yorozu } from './shop01_yorozu';
import { buildShop02Minatoya } from './shop02_minatoya';
import { buildPort01HiddenPort } from './port01_hidden_port';
import { buildKoban01Kuroiso } from './koban01_kuroiso';
import { buildPark01Miharashi } from './park01_miharashi';
import { buildSecretBase01Kids } from './secretbase01_kids';
import { buildMine01CoalMine } from './mine01_coalmine';

export interface HouseStreamStats {
  totalHouses: number;
  visibleHouses: number;
  visibleInteriors: number;
}

export interface HouseSystem {
  group: THREE.Group;
  structures: BuiltStructure[];
  getById(id: string): BuiltStructure | undefined;
  update(playerPos: THREE.Vector3): void;
  getStats(): HouseStreamStats;
}

const EXTERIOR_CULL_DIST = 1750;
const INTERIOR_CULL_DIST = 135;

const HOUSE_BUILDERS: ReadonlyArray<{
  id: string;
  build: (site: PlannedSite, catalog: TextureCatalog) => BuiltStructure;
}> = [
  { id: 'H01', build: buildHouse01Hamada },
  { id: 'H02', build: buildHouse02Isobe },
  { id: 'H03', build: buildHouse03Takagi },
  { id: 'H04', build: buildHouse04Iwasaki },
  { id: 'H05', build: buildHouse05Saeki },
  { id: 'H06', build: buildHouse06Fujiwara },
  { id: 'H07', build: buildHouse07Ando },
  { id: 'H08', build: buildHouse08Nagai },
  { id: 'H09', build: buildHouse09Morimoto },
  { id: 'H10', build: buildHouse10Shirai },
  { id: 'H11', build: buildHouse11Kuroda },
  { id: 'H12', build: buildHouse12Matsuoka },
  { id: 'H13', build: buildHouse13Kamiya },
  { id: 'H14', build: buildHouse14Murata },
  { id: 'H15', build: buildHouse15Yoshida },
  { id: 'H16', build: buildHouse16Tanabe },
  { id: 'H17', build: buildHouse17Ono },
  { id: 'H18', build: buildHouse18Sugiyama },
  { id: 'H19', build: buildHouse19Ogawa },
  { id: 'H20', build: buildHouse20Engineer },
  { id: 'H21', build: buildHouse21Rowhouse },
  { id: 'H22', build: buildHouse22Kuroiwa },
  { id: 'H23', build: buildHouse23Smith },
  { id: 'H24', build: buildHouse24Dormitory },
  { id: 'H25', build: buildHouse25Sawada },
  { id: 'S01', build: buildShop01Yorozu },
  { id: 'S02', build: buildShop02Minatoya },
  { id: 'PORT01', build: buildPort01HiddenPort },
  { id: 'K01', build: buildKoban01Kuroiso },
  { id: 'P01', build: buildPark01Miharashi },
  { id: 'B01', build: buildSecretBase01Kids },
  { id: 'M01', build: buildMine01CoalMine },
];

/**
 * Assembles ALL 32 individually hand-crafted island structures:
 * 25 wooden houses + 2 commercial shops + Hidden Old Port + 1890 Coal Mine Cave + Koban + Village Park + Kids Secret Base!
 */
export function buildAllHouses(catalog: TextureCatalog): HouseSystem {
  const siteById = new Map<string, PlannedSite>();
  for (let i = 0; i < PLANNED_SITES.length; i++) {
    siteById.set(PLANNED_SITES[i].id, PLANNED_SITES[i]);
  }

  const group = new THREE.Group();
  group.name = 'kuroiso_all_32_structures';

  const structures: BuiltStructure[] = [];
  const byId = new Map<string, BuiltStructure>();

  for (let i = 0; i < HOUSE_BUILDERS.length; i++) {
    const entry = HOUSE_BUILDERS[i];
    const site = siteById.get(entry.id);
    if (!site) {
      throw new Error(`Missing PlannedSite for built structure ${entry.id}`);
    }
    const built = entry.build(site, catalog);
    structures.push(built);
    byId.set(built.id, built);
    group.add(built.group);
  }

  let visibleHouses = structures.length;
  let visibleInteriors = structures.length;

  const update = (playerPos: THREE.Vector3): void => {
    let visExt = 0;
    let visInt = 0;

    for (let i = 0; i < structures.length; i++) {
      const s = structures[i];
      // Use distance to worldBounds AABB so sprawling underground tunnels (M01) and piers (PORT01) NEVER cull while inside!
      const dist = s.worldBounds.distanceToPoint(playerPos);

      const showExt = dist <= EXTERIOR_CULL_DIST;
      if (s.group.visible !== showExt) {
        s.group.visible = showExt;
      }
      if (showExt) {
        visExt++;
        if (s.interiorGroup) {
          const showInt = dist <= INTERIOR_CULL_DIST;
          if (s.interiorGroup.visible !== showInt) {
            s.interiorGroup.visible = showInt;
          }
          if (showInt) visInt++;
        }
      }
    }

    visibleHouses = visExt;
    visibleInteriors = visInt;
  };

  return {
    group,
    structures,
    getById: (id: string) => byId.get(id),
    update,
    getStats: () => ({
      totalHouses: structures.length,
      visibleHouses,
      visibleInteriors,
    }),
  };
}
