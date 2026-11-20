import { GraphicsSettings, ResolutionPreset, FpsLimitMode, ShadowFlameMode, BuiltStructure } from '../core/types';
import {
  TERRAIN_EXTENT_X,
  TERRAIN_EXTENT_Z,
  GRADED_PATHS,
  PLANNED_SITES,
  BUILT_HOUSE_IDS,
  SPAWN_POINT,
  LOOKOUT_POINT,
  PARK_POINT,
  MINE_PORTAL_POINT,
  SECRET_BASE_POINT,
  SUMMIT_POINT,
  HIDDEN_PORT_POINT,
  EAST_CLIFF_POINT,
  WEST_BLUFF_POINT,
  NORTH_CALDERA_POINT,
  getTerrainHeight,
} from '../world/terrainMath';
import type { TerrainStreamStats } from '../world/terrainStreamer';
import type { FoliageStreamStats } from '../world/foliageStreamer';
import type { HouseStreamStats } from '../world/houses';
import type { FirstPersonController } from '../player/firstPersonController';

export interface HudCallbacks {
  onGraphicsChange: (settings: GraphicsSettings) => void;
  onTeleport: (x: number, z: number, yaw?: number, pitch?: number) => void;
  onWakeUp: () => void;
}

export interface HudFrameMetrics {
  fps: number;
  frameMs: number;
  renderWidth: number;
  renderHeight: number;
  khdr: boolean;
  shadowFlame: ShadowFlameMode;
  terrain: TerrainStreamStats;
  foliage: FoliageStreamStats;
  houses: HouseStreamStats;
}

interface QuickLandmark {
  label: string;
  elev: string;
  x: number;
  z: number;
  yaw: number;
  pitch?: number;
  isHouse?: boolean;
  isFacility?: boolean;
}

const QUICK_LANDMARKS: QuickLandmark[] = [
  { label: '漂着浜（目覚め地点・南大入江）', elev: '2m', x: SPAWN_POINT.x, z: SPAWN_POINT.z, yaw: SPAWN_POINT.yaw, pitch: 0.04 },
  { label: '見晴らし坂（廃村展望）', elev: '268m', x: LOOKOUT_POINT.x, z: LOOKOUT_POINT.z, yaw: 0.56, pitch: -0.05 },
  { label: '東観音・東展望断崖（隆起海岸段丘）', elev: `${Math.round(EAST_CLIFF_POINT.y)}m`, x: EAST_CLIFF_POINT.x, z: EAST_CLIFF_POINT.z, yaw: -0.34, pitch: -0.14 },
  { label: '西屏風大展望台（廃村＆黒磯岳一望）', elev: `${Math.round(WEST_BLUFF_POINT.y)}m`, x: WEST_BLUFF_POINT.x, z: WEST_BLUFF_POINT.z, yaw: -1.24, pitch: -0.15 },
  { label: '北カルデラ外輪山展望（爆裂火口）', elev: `${Math.round(NORTH_CALDERA_POINT.y)}m`, x: NORTH_CALDERA_POINT.x, z: NORTH_CALDERA_POINT.z, yaw: 1.22, pitch: -0.14 },
  { label: '山頂獣道・東尾根中腹', elev: '629m', x: 355, z: -1245, yaw: 0.96, pitch: 0.12 },
  { label: '★ 黒磯岳 主峰山頂', elev: '865m', x: SUMMIT_POINT.x - 4.5, z: SUMMIT_POINT.z - 5.5, yaw: -2.46, pitch: -0.14 },
];

const COMPASS_LABELS = ['北', '北東', '東', '南東', '南', '南西', '西', '北西'] as const;

function getCompassText(yawRad: number): string {
  // Camera forward is (-sin(yaw), -cos(yaw)); north is -Z (yaw=0)
  const deg = (((-yawRad * 180) / Math.PI) % 360 + 360) % 360;
  const idx = Math.round(deg / 45) % 8;
  return `${COMPASS_LABELS[idx]} ${Math.round(deg)}°`;
}

function classifyZone(x: number, y: number, z: number): string {
  if (Math.hypot(x - SUMMIT_POINT.x, z - SUMMIT_POINT.z) < 85 && y > 800) {
    return '黒磯岳 主峰山頂（標高865m）';
  }
  if (Math.hypot(x - NORTH_CALDERA_POINT.x, z - NORTH_CALDERA_POINT.z) < 120) {
    return '北カルデラ外輪山展望（爆裂火口）';
  }
  if (Math.hypot(x - EAST_CLIFF_POINT.x, z - EAST_CLIFF_POINT.z) < 130) {
    return '東観音・東展望断崖（隆起海岸段丘）';
  }
  if (Math.hypot(x - WEST_BLUFF_POINT.x, z - WEST_BLUFF_POINT.z) < 130) {
    return '西屏風大展望台（西連山主稜線）';
  }
  if (Math.hypot(x - HIDDEN_PORT_POINT.x, z - HIDDEN_PORT_POINT.z) < 115) {
    return '旧黒磯秘境港（北西リアス湾）';
  }
  if (Math.hypot(x - SECRET_BASE_POINT.x, z - SECRET_BASE_POINT.z) < 65) {
    return '子供たちの山奥の秘密基地 (B01)';
  }
  if (Math.hypot(x - MINE_PORTAL_POINT.x, z - MINE_PORTAL_POINT.z) < 155) {
    return '旧黒磯炭鉱 1890 第一坑口・地下坑道 (M01)';
  }
  if (Math.hypot(x - LOOKOUT_POINT.x, z - LOOKOUT_POINT.z) < 65) {
    return '見晴らし坂（廃村展望カーブ）';
  }
  if (Math.hypot(x - PARK_POINT.x, z - PARK_POINT.z) < 42) {
    return '見晴らし村営公園 (P01)';
  }
  if (z < -2350) {
    return '鬼ヶ崎・北端火山断崖（カルデラ海蝕口）';
  }
  if (z < -1820 && x > -340 && x < 580) {
    return '北カルデラ爆裂火口・外輪山';
  }
  if (z > 2050 && x < -420) {
    return '西黒崎（南西玄武岩岬）';
  }
  if (z > 2050 && x > 460) {
    return '東白浜岬（南東断崖半島）';
  }
  if (z > 1950 && y < 35) {
    return '漂着浜（南大入江）';
  }
  if (x > 640) {
    return '東観音連峰・東海岸段丘';
  }
  if (x < -640) {
    return '西屏風連山・西断崖山系';
  }
  if (z > 650 && z <= 1950) {
    return '海岸林道・南山腹斜面';
  }
  if (x > -240 && x < 280 && z >= -480 && z <= 650) {
    return '廃村・黒磯村（山腹斜面集落）';
  }
  if (x < -300 && z < -1020) {
    return '秘境の旧港へのけもの道';
  }
  if (z < -420 && x > 60 && y > 350) {
    return '黒磯岳 山頂への獣道';
  }
  if (z < -420) {
    return '黒磯林道・北山岳地帯';
  }
  return '黒磯島 山岳原生林';
}

export class GameHUD {
  private readonly root: HTMLElement;
  private readonly controller: FirstPersonController;
  private readonly callbacks: HudCallbacks;
  private readonly builtStructures: BuiltStructure[];
  private readonly structureById = new Map<string, BuiltStructure>();
  private readonly mapQuickPoints: QuickLandmark[] = [];
  private settings: GraphicsSettings;

  // DOM elements updated every frame / periodically
  private zoneEl!: HTMLElement;
  private elevEl!: HTMLElement;
  private compassEl!: HTMLElement;
  private siteHintEl!: HTMLElement;
  private telemetryEl!: HTMLElement;
  private wakeupOverlay!: HTMLElement;
  private settingsModal!: HTMLElement;
  private mapModal!: HTMLElement;
  private touchLayer!: HTMLElement;
  private touchToggleBtn!: HTMLButtonElement;
  private mapCanvas!: HTMLCanvasElement;
  private mapBaseImage: ImageData | null = null;
  private mapOverlayCanvas!: HTMLCanvasElement;

  private mapOpen = false;
  private settingsOpen = false;
  private touchEnabled = false;
  private lastUiSync = 0;

  // Map coordinate transform constants (exact 1:2 aspect ratio North-up 3km x 6km canvas)
  private readonly MAP_W = 240;
  private readonly MAP_H = 480;

  constructor(
    root: HTMLElement,
    controller: FirstPersonController,
    initialSettings: GraphicsSettings,
    callbacks: HudCallbacks,
    skipIntro = false,
    builtStructures: BuiltStructure[] = []
  ) {
    this.root = root;
    this.controller = controller;
    this.settings = { ...initialSettings };
    this.callbacks = callbacks;
    this.builtStructures = builtStructures;
    for (let i = 0; i < builtStructures.length; i++) {
      this.structureById.set(builtStructures[i].id, builtStructures[i]);
    }
    this.touchEnabled =
      window.matchMedia('(pointer: coarse)').matches ||
      (navigator.maxTouchPoints ?? 0) > 0;

    // Build ordered quick-jump targets: landmarks first, then all 7 built facilities/mine/port & all 25 built houses
    this.mapQuickPoints.push(...QUICK_LANDMARKS);
    for (let i = 0; i < builtStructures.length; i++) {
      const s = builtStructures[i];
      const floors =
        s.category === 'port' ? '旧港·2F' :
        s.category === 'mine' ? '地下135m' :
        s.category === 'koban' ? '交番·2F' :
        s.category === 'park' ? '公園' :
        s.category === 'secret_base' ? '秘密基地·2F' :
        s.stories ? `${s.stories}F` : '2F';
      this.mapQuickPoints.push({
        label: `[${s.id}] ${s.name}`,
        elev: `${floors} · ${Math.round(s.position.y)}m`,
        x: s.entryPoint.x,
        z: s.entryPoint.z,
        yaw: s.entryPoint.lookYaw ?? s.yaw,
        pitch: 0.04,
        isHouse: s.category === 'house',
        isFacility: s.category !== 'house',
      });
    }

    this.renderMarkup(skipIntro);
    this.bindEvents();
  }

  private renderMarkup(skipIntro: boolean): void {
    const landmarkButtons = this.mapQuickPoints
      .map((lm, idx) => ({ lm, idx }))
      .filter((e) => !e.lm.isHouse && !e.lm.isFacility)
      .map(
        ({ lm, idx }) => `
        <button class="map-tp-btn" data-tp-idx="${idx}">
          <span>${lm.label}</span>
          <span class="map-tp-elev">${lm.elev}</span>
        </button>`
      )
      .join('');

    const facilityButtons = this.mapQuickPoints
      .map((lm, idx) => ({ lm, idx }))
      .filter((e) => e.lm.isFacility)
      .map(
        ({ lm, idx }) => `
        <button class="map-tp-btn" style="border-color: rgba(240, 118, 92, 0.55);" data-tp-idx="${idx}">
          <span>${lm.label}</span>
          <span class="map-tp-elev">${lm.elev}</span>
        </button>`
      )
      .join('');

    const houseButtons = this.mapQuickPoints
      .map((lm, idx) => ({ lm, idx }))
      .filter((e) => e.lm.isHouse)
      .map(
        ({ lm, idx }) => `
        <button class="map-tp-btn" style="border-color: rgba(255, 211, 110, 0.35);" data-tp-idx="${idx}">
          <span>${lm.label}</span>
          <span class="map-tp-elev">${lm.elev}</span>
        </button>`
      )
      .join('');

    const builtHouseCount = this.builtStructures.filter((s) => s.category === 'house').length;
    const builtShopCount = this.builtStructures.filter((s) => s.category === 'commercial').length;
    const builtFacilityCount = this.builtStructures.filter((s) => s.category !== 'house').length;
    const totalBuiltCount = this.builtStructures.length;

    this.root.innerHTML = `
      <!-- Portrait orientation suggestion -->
      <div class="portrait-banner" id="portrait-banner">
        <div style="font-size: 28px;">📱↻</div>
        <h3 style="margin: 0; font-size: 16px;">スマホ横画面・全画面でのプレイを推奨</h3>
        <p style="margin: 0; font-size: 12px; color: var(--text-dim); max-width: 320px; line-height: 1.65;">
          端末を横向きにするか、下のボタンで横画面全画面表示へ切り替えてください。
        </p>
        <div style="display:flex; gap:10px; margin-top:6px;">
          <button class="btn-primary" id="btn-portrait-fs">横画面・全画面</button>
          <button class="btn-ghost" id="btn-portrait-dismiss">このまま続ける</button>
        </div>
      </div>

      <!-- Driftwood Cove Wake-Up Intro -->
      <div class="wakeup-overlay ${skipIntro ? 'hidden' : ''}" id="wakeup-overlay">
        <div class="wakeup-card">
          <div class="wakeup-eyebrow">KUROISO-JIMA 1985 — 3KM × 6KM HYPER-REALISTIC VOLCANIC ISLAND</div>
          <h1 class="wakeup-title">黒磯島 — 3km×6km 超リアル地形＆全${totalBuiltCount}拠点</h1>
          <p class="wakeup-story">
            冷たい砂と波音の中で目を覚ました。あたり一面は見渡す限りの外洋、救助は来ない。<br/>
            リアス式断崖・北カルデラ爆裂火口・東観音連峰・西屏風連山が広がる<strong>3km×6km（18km²）の火山孤島</strong>に、<strong>伝統瓦木造民家全${builtHouseCount}軒</strong>・<strong>商業施設${builtShopCount}軒</strong>・<strong>黒磯駐在所</strong>・<strong>村営公園</strong>・<strong>秘密基地</strong>・<strong>秘境旧港</strong>、そして地下135mへ潜る<strong>1890年旧黒磯炭鉱</strong>まで全${totalBuiltCount}拠点すべて探索可能。
          </p>
          <div class="wakeup-actions">
            <button class="btn-primary" id="btn-wake-start">立ち上がって探索を始める</button>
            <button class="btn-ghost" id="btn-wake-fs">横画面・全画面で開始</button>
          </div>
        </div>
      </div>

      <!-- Top HUD bar -->
      <div class="hud-top">
        <div class="hud-location">
          <div class="hud-zone-name">
            <span class="hud-zone-dot"></span>
            <span id="hud-zone">漂着浜（南大入江）</span>
          </div>
          <div class="hud-meta-row">
            <span id="hud-elev">標高 2.2m</span>
            <span id="hud-compass">北 0°</span>
          </div>
          <div class="hud-site-hint" id="hud-site-hint"></div>
        </div>

        <div class="hud-right-stack">
          <div class="hud-toolbar">
            <button class="hud-btn" id="btn-open-map">地形図 (M)</button>
            <button class="hud-btn" id="btn-open-settings">画質 / FPS</button>
            <button class="hud-btn ${this.touchEnabled ? 'active' : ''}" id="btn-toggle-touch">タッチUI</button>
            <button class="hud-btn" id="btn-fullscreen">全画面</button>
          </div>
          <div class="hud-telemetry" id="hud-telemetry">
            <strong>-- FPS</strong> · -- ms · --×--<br/>
            LOD: -- chunks · 森/草: --
          </div>
        </div>
      </div>

      <div class="hud-reticle"></div>

      <div class="hud-controls-hint">
        WASD 移動 · Shift ダッシュ · Space 跳躍 · C しゃがむ · マウス 視点 · M 3km×6km地形図
      </div>

      <!-- Mobile Landscape Dual-Touch Layer -->
      <div class="touch-layer ${this.touchEnabled ? 'enabled' : ''}" id="touch-layer">
        <div class="touch-stick-zone" id="touch-stick-zone">
          <div class="touch-stick-base" id="touch-stick-base">
            <div class="touch-stick-knob" id="touch-stick-knob"></div>
          </div>
        </div>
        <div class="touch-look-zone" id="touch-look-zone"></div>
        <div class="touch-action-pad">
          <button class="touch-action-btn" id="touch-btn-jump">跳躍</button>
          <button class="touch-action-btn" id="touch-btn-crouch">しゃがむ</button>
        </div>
      </div>

      <!-- Graphics Settings Modal -->
      <div class="modal-backdrop" id="settings-modal">
        <div class="modal-panel settings-panel">
          <div class="modal-header">
            <h2 class="modal-title">グラフィック・フレームレート設定</h2>
            <button class="modal-close" id="btn-close-settings">閉じる</button>
          </div>
          <div class="settings-body">
            <div>
              <div class="setting-group-label">
                <span>内部レンダリング解像度</span>
                <span id="settings-res-readout">${this.settings.resolution}</span>
              </div>
              <div class="segmented" id="res-group">
                <button class="seg-btn ${this.settings.resolution === 'HD' ? 'selected' : ''}" data-res="HD">
                  HD<span>1280×720</span>
                </button>
                <button class="seg-btn ${this.settings.resolution === 'FHD' ? 'selected' : ''}" data-res="FHD">
                  FHD<span>1920×1080</span>
                </button>
                <button class="seg-btn ${this.settings.resolution === '1.5K' ? 'selected' : ''}" data-res="1.5K">
                  1.5K<span>2560×1440</span>
                </button>
              </div>
            </div>

            <div>
              <div class="setting-group-label">
                <span>フレームレート上限</span>
                <span id="settings-fps-readout">${this.settings.fpsLimit === '120' ? '120 FPS' : '無制限'}</span>
              </div>
              <div class="segmented two-col" id="fps-group">
                <button class="seg-btn ${this.settings.fpsLimit === '120' ? 'selected' : ''}" data-fps="120">
                  120 FPS<span>高リフレッシュ安定</span>
                </button>
                <button class="seg-btn ${this.settings.fpsLimit === 'unlimited' ? 'selected' : ''}" data-fps="unlimited">
                  無制限 FPS<span>上限解放</span>
                </button>
              </div>
            </div>

            <div>
              <div class="setting-group-label">
                <span>KHDR（独自強化 16bit 線形 HDR エンジン）</span>
                <span id="settings-khdr-readout">${this.settings.khdr ? 'KHDR ON' : 'KHDR OFF'}</span>
              </div>
              <div class="segmented two-col" id="khdr-group">
                <button class="seg-btn ${this.settings.khdr ? 'selected' : ''}" data-khdr="on">
                  KHDR ON<span>K-LHE局所輝度・光学ブルーム・K-Filmic</span>
                </button>
                <button class="seg-btn ${!this.settings.khdr ? 'selected' : ''}" data-khdr="off">
                  KHDR OFF<span>標準 ACES・最軽量フォワード描画</span>
                </button>
              </div>
            </div>

            <div>
              <div class="setting-group-label">
                <span>Shadow Flame 1.0（独自リアル影エンジン）</span>
                <span id="settings-sf-readout">${this.settings.shadowFlame === 'pro' ? '1.0 Pro' : '1.0 Flash'}</span>
              </div>
              <div class="segmented two-col" id="sf-group">
                <button class="seg-btn ${this.settings.shadowFlame === 'flash' ? 'selected' : ''}" data-sf="flash">
                  Shadow Flame 1.0 Flash<span>超軽量Vogel-6＋青ノイズ回転＋空色反射影</span>
                </button>
                <button class="seg-btn ${this.settings.shadowFlame === 'pro' ? 'selected' : ''}" data-sf="pro">
                  Shadow Flame 1.0 Pro<span>デュアルカスケード＋PCSS硬化＋微細接地影</span>
                </button>
              </div>
            </div>

            <div class="settings-note" id="settings-engine-note">
              <strong>KHDR ${this.settings.khdr ? 'ON' : 'OFF'} × Shadow Flame ${this.settings.shadowFlame === 'pro' ? '1.0 Pro' : '1.0 Flash'} 稼働中</strong><br/>
              ・<strong>KHDR</strong>: RGBA16F 線形HDR＋Karis加重Dual-Kawase光学ブルーム＋K-LHE局所明暗平衡＋K-Clarity微細鮮鋭化＋AgX着想K-Filmic v1色相保持カーブ<br/>
              ・<strong>Shadow Flame 1.0 Flash</strong>: 1536² テンポラルキャッシュ・6タップIGN回転Vogelディスク（標準比-44%画素/-33%フェッチ）＋天空青散乱影<br/>
              ・<strong>Shadow Flame 1.0 Pro</strong>: 近景±50m(4.8cm/texel)＋遠景±245mデュアルカスケード・8探索+16可変PCSS物理接触硬化・画面空間MicroContact微細影・山岳遠景セルフシャドウ
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive 3km x 6km Topographic Map Modal -->
      <div class="modal-backdrop" id="map-modal">
        <div class="modal-panel map-panel">
          <div class="modal-header">
            <h2 class="modal-title">黒磯島 3km × 6km 精密等高線地形図・全${totalBuiltCount}拠点（クリックで現地移動）</h2>
            <button class="modal-close" id="btn-close-map">閉じる (M)</button>
          </div>
          <div class="map-layout">
            <div class="map-canvas-wrap">
              <canvas class="map-canvas" id="topo-map-canvas" width="${this.MAP_W}" height="${this.MAP_H}"></canvas>
            </div>
            <div class="map-sidebar">
              ${facilityButtons ? `<div class="map-sidebar-title">商業・旧港・1890炭鉱・交番・公園・秘密基地（全${builtFacilityCount}拠点）</div><div class="map-tp-list" id="map-facility-list">${facilityButtons}</div>` : ''}
              ${houseButtons ? `<div class="map-sidebar-title" style="margin-top:4px;">建築済 伝統瓦民家（全${builtHouseCount}軒・入室可）</div><div class="map-tp-list" id="map-house-list">${houseButtons}</div>` : ''}
              <div class="map-sidebar-title" style="margin-top:4px;">主要展望スポットへ移動</div>
              <div class="map-tp-list" id="map-tp-list">${landmarkButtons}</div>
              <div class="map-legend">
                <div class="legend-item"><span class="legend-swatch" style="background:#ffd36e;border:1px solid #2e1f12;"></span>民家(${builtHouseCount})</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#f06449;border:1px solid #2e1f12;"></span>商業(${builtShopCount})</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#56e0f5;border:1px solid #2e1f12;"></span>旧港/炭鉱</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#4d96ff;border:1px solid #2e1f12;"></span>交番(K01)</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#63c778;border:1px solid #2e1f12;"></span>公園/秘密基地</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#f2a649;"></span>獣道/村道</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.zoneEl = this.root.querySelector('#hud-zone')!;
    this.elevEl = this.root.querySelector('#hud-elev')!;
    this.compassEl = this.root.querySelector('#hud-compass')!;
    this.siteHintEl = this.root.querySelector('#hud-site-hint')!;
    this.telemetryEl = this.root.querySelector('#hud-telemetry')!;
    this.wakeupOverlay = this.root.querySelector('#wakeup-overlay')!;
    this.settingsModal = this.root.querySelector('#settings-modal')!;
    this.mapModal = this.root.querySelector('#map-modal')!;
    this.touchLayer = this.root.querySelector('#touch-layer')!;
    this.touchToggleBtn = this.root.querySelector('#btn-toggle-touch')!;
    this.mapCanvas = this.root.querySelector('#topo-map-canvas')!;
    this.mapOverlayCanvas = document.createElement('canvas');
    this.mapOverlayCanvas.width = this.MAP_W;
    this.mapOverlayCanvas.height = this.MAP_H;
  }

  private async requestLandscapeFullscreen(): Promise<void> {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen?.();
      }
      const orient = screen.orientation as ScreenOrientation & { lock?: (m: string) => Promise<void> };
      await orient?.lock?.('landscape');
    } catch {
      // Browsers on desktop or iOS Safari may ignore orientation.lock cleanly
    }
  }

  private dismissWakeup(): void {
    this.wakeupOverlay.classList.add('fading');
    this.callbacks.onWakeUp();
    window.setTimeout(() => {
      this.wakeupOverlay.classList.add('hidden');
    }, 950);
  }

  private setMapOpen(open: boolean): void {
    this.mapOpen = open;
    if (open) {
      this.settingsOpen = false;
      this.settingsModal.classList.remove('open');
      this.mapModal.classList.add('open');
      this.ensureTopoMapRendered();
      this.drawDynamicMapOverlay();
    } else {
      this.mapModal.classList.remove('open');
    }
    this.controller.setModalOpen(this.mapOpen || this.settingsOpen);
  }

  private setSettingsOpen(open: boolean): void {
    this.settingsOpen = open;
    if (open) {
      this.mapOpen = false;
      this.mapModal.classList.remove('open');
      this.settingsModal.classList.add('open');
    } else {
      this.settingsModal.classList.remove('open');
    }
    this.controller.setModalOpen(this.mapOpen || this.settingsOpen);
  }

  private bindEvents(): void {
    // Portrait dismiss / fullscreen
    this.root.querySelector('#btn-portrait-fs')?.addEventListener('click', () => {
      this.requestLandscapeFullscreen();
      this.root.querySelector('#portrait-banner')?.classList.add('dismissed');
    });
    this.root.querySelector('#btn-portrait-dismiss')?.addEventListener('click', () => {
      this.root.querySelector('#portrait-banner')?.classList.add('dismissed');
    });

    // Wake-up actions
    this.root.querySelector('#btn-wake-start')?.addEventListener('click', () => {
      this.dismissWakeup();
    });
    this.root.querySelector('#btn-wake-fs')?.addEventListener('click', () => {
      this.requestLandscapeFullscreen();
      this.dismissWakeup();
    });

    // Top toolbar buttons
    this.root.querySelector('#btn-open-map')?.addEventListener('click', () => {
      this.setMapOpen(!this.mapOpen);
    });
    this.root.querySelector('#btn-close-map')?.addEventListener('click', () => {
      this.setMapOpen(false);
    });
    this.root.querySelector('#btn-open-settings')?.addEventListener('click', () => {
      this.setSettingsOpen(!this.settingsOpen);
    });
    this.root.querySelector('#btn-close-settings')?.addEventListener('click', () => {
      this.setSettingsOpen(false);
    });
    this.root.querySelector('#btn-fullscreen')?.addEventListener('click', () => {
      if (document.fullscreenElement) {
        document.exitFullscreen?.();
      } else {
        this.requestLandscapeFullscreen();
      }
    });
    this.touchToggleBtn.addEventListener('click', () => {
      this.touchEnabled = !this.touchEnabled;
      this.touchLayer.classList.toggle('enabled', this.touchEnabled);
      this.touchToggleBtn.classList.toggle('active', this.touchEnabled);
    });

    // Keyboard shortcuts (M = map, Escape = close modal)
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyM' && !this.controller.inIntro) {
        this.setMapOpen(!this.mapOpen);
      } else if (e.code === 'Escape') {
        if (this.mapOpen) this.setMapOpen(false);
        else if (this.settingsOpen) this.setSettingsOpen(false);
      }
    });

    // Graphics settings resolution buttons
    this.root.querySelectorAll('#res-group .seg-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const res = (btn as HTMLElement).dataset.res as ResolutionPreset;
        this.settings.resolution = res;
        this.root.querySelectorAll('#res-group .seg-btn').forEach((b) => b.classList.remove('selected'));
        btn.classList.add('selected');
        const ro = this.root.querySelector('#settings-res-readout');
        if (ro) ro.textContent = res;
        this.callbacks.onGraphicsChange({ ...this.settings });
      });
    });

    // Graphics settings FPS buttons
    this.root.querySelectorAll('#fps-group .seg-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const fps = (btn as HTMLElement).dataset.fps as FpsLimitMode;
        this.settings.fpsLimit = fps;
        this.syncGraphicsUI(this.settings);
        this.callbacks.onGraphicsChange({ ...this.settings });
      });
    });

    // KHDR ON/OFF toggle buttons
    this.root.querySelectorAll('#khdr-group .seg-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const on = (btn as HTMLElement).dataset.khdr === 'on';
        this.settings.khdr = on;
        this.syncGraphicsUI(this.settings);
        this.callbacks.onGraphicsChange({ ...this.settings });
      });
    });

    // Shadow Flame 1.0 Flash / Pro selector buttons
    this.root.querySelectorAll('#sf-group .seg-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const sf = ((btn as HTMLElement).dataset.sf === 'pro' ? 'pro' : 'flash') as ShadowFlameMode;
        this.settings.shadowFlame = sf;
        this.syncGraphicsUI(this.settings);
        this.callbacks.onGraphicsChange({ ...this.settings });
      });
    });

    // Quick-jump landmark & built house buttons
    this.root.querySelectorAll('.map-tp-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number((btn as HTMLElement).dataset.tpIdx);
        const lm = this.mapQuickPoints[idx];
        if (!lm) return;
        this.wakeupOverlay.classList.add('hidden');
        this.callbacks.onTeleport(lm.x, lm.z, lm.yaw, lm.pitch ?? -0.05);
        this.setMapOpen(false);
      });
    });

    // Click anywhere on land on the 2km x 5km topographic canvas to teleport there!
    this.mapCanvas.addEventListener('click', (e) => {
      const rect = this.mapCanvas.getBoundingClientRect();
      const u = (e.clientX - rect.left) / rect.width;
      const v = (e.clientY - rect.top) / rect.height;
      const wx = -TERRAIN_EXTENT_X + u * TERRAIN_EXTENT_X * 2;
      const wz = -TERRAIN_EXTENT_Z + v * TERRAIN_EXTENT_Z * 2;
      if (getTerrainHeight(wx, wz) > 0.3) {
        this.wakeupOverlay.classList.add('hidden');
        this.callbacks.onTeleport(wx, wz);
        this.setMapOpen(false);
      }
    });

    this.bindTouchControls();
  }

  private bindTouchControls(): void {
    const stickZone = this.root.querySelector('#touch-stick-zone') as HTMLElement;
    const stickBase = this.root.querySelector('#touch-stick-base') as HTMLElement;
    const stickKnob = this.root.querySelector('#touch-stick-knob') as HTMLElement;
    const lookZone = this.root.querySelector('#touch-look-zone') as HTMLElement;
    const jumpBtn = this.root.querySelector('#touch-btn-jump') as HTMLElement;
    const crouchBtn = this.root.querySelector('#touch-btn-crouch') as HTMLElement;

    let stickPointerId: number | null = null;
    const maxRadius = 42;

    const updateStick = (clientX: number, clientY: number) => {
      const rect = stickBase.getBoundingClientRect();
      const cx = rect.left + rect.width * 0.5;
      const cy = rect.top + rect.height * 0.5;
      let dx = clientX - cx;
      let dy = clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > maxRadius) {
        dx = (dx / dist) * maxRadius;
        dy = (dy / dist) * maxRadius;
      }
      stickKnob.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
      const nx = dx / maxRadius;
      const ny = dy / maxRadius;
      const sprinting = Math.hypot(nx, ny) > 0.82 && ny < -0.25;
      stickBase.classList.toggle('sprinting', sprinting);
      this.controller.setTouchMove(nx, ny, sprinting);
    };

    const resetStick = () => {
      stickPointerId = null;
      stickKnob.style.transform = 'translate3d(0, 0, 0)';
      stickBase.classList.remove('sprinting');
      this.controller.setTouchMove(0, 0, false);
    };

    stickZone.addEventListener('pointerdown', (e) => {
      if (stickPointerId !== null) return;
      stickPointerId = e.pointerId;
      stickZone.setPointerCapture(e.pointerId);
      updateStick(e.clientX, e.clientY);
    });
    stickZone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== stickPointerId) return;
      updateStick(e.clientX, e.clientY);
    });
    stickZone.addEventListener('pointerup', (e) => {
      if (e.pointerId === stickPointerId) resetStick();
    });
    stickZone.addEventListener('pointercancel', (e) => {
      if (e.pointerId === stickPointerId) resetStick();
    });

    // Right half drag-to-look
    let lookPointerId: number | null = null;
    let lastLX = 0;
    let lastLY = 0;

    lookZone.addEventListener('pointerdown', (e) => {
      if (lookPointerId !== null) return;
      lookPointerId = e.pointerId;
      lastLX = e.clientX;
      lastLY = e.clientY;
      lookZone.setPointerCapture(e.pointerId);
    });
    lookZone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== lookPointerId) return;
      const dx = e.clientX - lastLX;
      const dy = e.clientY - lastLY;
      lastLX = e.clientX;
      lastLY = e.clientY;
      this.controller.applyLookDelta(dx, dy, 0.0052);
    });
    const endLook = (e: PointerEvent) => {
      if (e.pointerId === lookPointerId) lookPointerId = null;
    };
    lookZone.addEventListener('pointerup', endLook);
    lookZone.addEventListener('pointercancel', endLook);

    jumpBtn.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      this.controller.triggerTouchJump();
    });
    crouchBtn.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      const crouching = this.controller.toggleCrouch();
      crouchBtn.classList.toggle('active', crouching);
    });
  }

  private worldToMap(wx: number, wz: number): [number, number] {
    const px = ((wx + TERRAIN_EXTENT_X) / (TERRAIN_EXTENT_X * 2)) * this.MAP_W;
    const py = ((wz + TERRAIN_EXTENT_Z) / (TERRAIN_EXTENT_Z * 2)) * this.MAP_H;
    return [px, py];
  }

  /**
   * Generates a real hypsometric contour map directly from terrainMath.getTerrainHeight(x, z)
   * the first time the user opens the map modal (~45ms once, cached forever).
   */
  private ensureTopoMapRendered(): void {
    if (this.mapBaseImage) return;
    const ctx = this.mapOverlayCanvas.getContext('2d');
    if (!ctx) return;

    const w = this.MAP_W;
    const h = this.MAP_H;
    const img = ctx.createImageData(w, h);
    const data = img.data;
    const elevGrid = new Float32Array(w * h);

    for (let py = 0; py < h; py++) {
      const wz = -TERRAIN_EXTENT_Z + (py / (h - 1)) * TERRAIN_EXTENT_Z * 2;
      for (let px = 0; px < w; px++) {
        const wx = -TERRAIN_EXTENT_X + (px / (w - 1)) * TERRAIN_EXTENT_X * 2;
        const elev = getTerrainHeight(wx, wz);
        elevGrid[py * w + px] = elev;
      }
    }

    for (let py = 0; py < h; py++) {
      for (let px = 0; px < w; px++) {
        const idx = py * w + px;
        const e = elevGrid[idx];
        const eR = px + 1 < w ? elevGrid[idx + 1] : e;
        const eD = py + 1 < h ? elevGrid[idx + w] : e;
        const shade = Math.max(0.66, Math.min(1.28, 1.0 + (e - eR) * 0.056 + (e - eD) * 0.044));

        let r = 12;
        let g = 42;
        let b = 68;

        if (e <= 0) {
          const shallow = Math.max(0, 1 + e / 26);
          r = 10 + shallow * 24;
          g = 36 + shallow * 62;
          b = 60 + shallow * 54;
        } else if (e < 6) {
          r = 178; g = 164; b = 130;
        } else if (e < 190) {
          const t = (e - 6) / 184;
          r = (50 + t * 24) * shade;
          g = (98 + t * 26) * shade;
          b = (56 + t * 14) * shade;
        } else if (e < 320) {
          const t = (e - 190) / 130;
          r = (78 + t * 28) * shade;
          g = (126 + t * 14) * shade;
          b = (70 + t * 6) * shade;
        } else if (e < 620) {
          const t = (e - 320) / 300;
          r = (94 + t * 34) * shade;
          g = (118 - t * 10) * shade;
          b = (68 + t * 14) * shade;
        } else {
          const t = Math.min(1, (e - 620) / 245);
          r = (132 + t * 64) * shade;
          g = (126 + t * 68) * shade;
          b = (104 + t * 78) * shade;
        }

        // Crisp GSI-style 25m minor / 100m major elevation contour lines + coastline outline!
        if (px + 1 < w && py + 1 < h) {
          if ((e > 0) !== (eR > 0) || (e > 0) !== (eD > 0)) {
            r = 215; g = 232; b = 238;
          } else if (e > 4) {
            const b0 = Math.floor(e / 25);
            const b1 = Math.floor(eR / 25);
            const b2 = Math.floor(eD / 25);
            if (b0 !== b1 || b0 !== b2) {
              const major = b0 % 4 === 0; // 100m index contour!
              const mix = major ? 0.44 : 0.16;
              r *= 1 - mix;
              g *= 1 - mix;
              b *= 1 - mix;
            }
          }
        }

        const o = idx * 4;
        data[o] = Math.max(0, Math.min(255, r));
        data[o + 1] = Math.max(0, Math.min(255, g));
        data[o + 2] = Math.max(0, Math.min(255, b));
        data[o + 3] = 255;
      }
    }

    ctx.putImageData(img, 0, 0);

    // Overlay all 11 graded roads & alpine animal trails
    for (const path of GRADED_PATHS) {
      ctx.beginPath();
      for (let i = 0; i < path.points.length; i++) {
        const [mx, my] = this.worldToMap(path.points[i][0], path.points[i][1]);
        if (i === 0) ctx.moveTo(mx, my);
        else ctx.lineTo(mx, my);
      }
      if (path.kind === 'road') {
        ctx.strokeStyle = 'rgba(246, 236, 206, 0.92)';
        ctx.lineWidth = 1.9;
        ctx.setLineDash([]);
      } else if (path.kind === 'forestry') {
        ctx.strokeStyle = 'rgba(224, 198, 136, 0.85)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([]);
      } else {
        ctx.strokeStyle = 'rgba(246, 170, 74, 0.95)';
        ctx.lineWidth = 1.35;
        ctx.setLineDash([3.5, 2.5]);
      }
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Overlay all 32 completed sites
    const catColors: Record<string, string> = {
      house: '#a87b58',
      shop: '#f06449',
      koban: '#4d96ff',
      park: '#63c778',
      secret_base: '#b4e362',
      mine: '#4bc4df',
      port: '#56e0f5',
    };
    for (const s of PLANNED_SITES) {
      const [mx, my] = this.worldToMap(s.x, s.z);
      if (s.category === 'house' && BUILT_HOUSE_IDS.has(s.id)) {
        const sz = 4.2;
        ctx.fillStyle = '#ffd36e';
        ctx.fillRect(mx - sz * 0.5, my - sz * 0.5, sz, sz);
        ctx.strokeStyle = '#2e1f12';
        ctx.lineWidth = 0.9;
        ctx.strokeRect(mx - sz * 0.5, my - sz * 0.5, sz, sz);
      } else {
        ctx.fillStyle = catColors[s.category] ?? '#ffffff';
        const sz = s.category === 'house' ? 3.0 : 4.8;
        ctx.fillRect(mx - sz * 0.5, my - sz * 0.5, sz, sz);
      }
    }

    // 865m Summit star + 3 new 3km x 6km overlook markers
    const [sx, sy] = this.worldToMap(SUMMIT_POINT.x, SUMMIT_POINT.z);
    ctx.fillStyle = '#ffe675';
    ctx.beginPath();
    ctx.arc(sx, sy, 4.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1b1d20';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    for (const pt of [EAST_CLIFF_POINT, WEST_BLUFF_POINT, NORTH_CALDERA_POINT]) {
      const [vx, vy] = this.worldToMap(pt.x, pt.z);
      ctx.fillStyle = '#8ef5c8';
      ctx.beginPath();
      ctx.arc(vx, vy, 3.0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#15251e';
      ctx.lineWidth = 1.0;
      ctx.stroke();
    }

    // Key 3km x 6km geographic & landmark labels directly on map
    ctx.font = 'bold 9px sans-serif';
    ctx.fillStyle = '#fff5d0';
    ctx.strokeStyle = 'rgba(0,0,0,0.80)';
    ctx.lineWidth = 2.4;
    const label = (txt: string, wx: number, wz: number, ox = 5, oy = 3) => {
      const [mx, my] = this.worldToMap(wx, wz);
      ctx.strokeText(txt, mx + ox, my + oy);
      ctx.fillText(txt, mx + ox, my + oy);
    };
    label('鬼ヶ崎', 180, -2640, -14, -4);
    label('北カルデラ', NORTH_CALDERA_POINT.x, NORTH_CALDERA_POINT.z, -24, -7);
    label('▲黒磯岳 865m', SUMMIT_POINT.x, SUMMIT_POINT.z, -36, -8);
    label('秘境旧港', HIDDEN_PORT_POINT.x, HIDDEN_PORT_POINT.z, -24, -8);
    label('1890炭鉱', MINE_PORTAL_POINT.x, MINE_PORTAL_POINT.z, 6, 3);
    label('秘密基地', SECRET_BASE_POINT.x, SECRET_BASE_POINT.z, 5, 3);
    label('東観音岳', 890, -190, -22, 4);
    label('東断崖', EAST_CLIFF_POINT.x, EAST_CLIFF_POINT.z, -28, 12);
    label('西屏風岳', WEST_BLUFF_POINT.x, WEST_BLUFF_POINT.z, -26, -8);
    label('廃村(254m)', 120, 120, 6, 4);
    label('漂着浜', SPAWN_POINT.x, SPAWN_POINT.z, -16, 13);
    label('西黒崎', -910, 2440, -16, 12);
    label('東白浜岬', 950, 2480, -24, 12);

    this.mapBaseImage = ctx.getImageData(0, 0, w, h);
  }

  private drawDynamicMapOverlay(): void {
    const ctx = this.mapCanvas.getContext('2d');
    if (!ctx || !this.mapBaseImage) return;
    ctx.putImageData(this.mapBaseImage, 0, 0);

    // Draw player arrow
    const pos = this.controller.position;
    const [px, py] = this.worldToMap(pos.x, pos.z);
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(-this.controller.yaw);
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#0d1a24';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(5, 6);
    ctx.lineTo(0, 3);
    ctx.lineTo(-5, 6);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  public syncGraphicsUI(next: GraphicsSettings): void {
    this.settings = { ...next };
    this.root.querySelectorAll('#res-group .seg-btn').forEach((b) => {
      b.classList.toggle('selected', (b as HTMLElement).dataset.res === next.resolution);
    });
    this.root.querySelectorAll('#fps-group .seg-btn').forEach((b) => {
      b.classList.toggle('selected', (b as HTMLElement).dataset.fps === next.fpsLimit);
    });
    this.root.querySelectorAll('#khdr-group .seg-btn').forEach((b) => {
      b.classList.toggle('selected', ((b as HTMLElement).dataset.khdr === 'on') === next.khdr);
    });
    this.root.querySelectorAll('#sf-group .seg-btn').forEach((b) => {
      b.classList.toggle('selected', (b as HTMLElement).dataset.sf === next.shadowFlame);
    });
    const resRo = this.root.querySelector('#settings-res-readout');
    if (resRo) resRo.textContent = next.resolution;
    const fpsRo = this.root.querySelector('#settings-fps-readout');
    if (fpsRo) fpsRo.textContent = next.fpsLimit === '120' ? '120 FPS' : '無制限';
    const khdrRo = this.root.querySelector('#settings-khdr-readout');
    if (khdrRo) khdrRo.textContent = next.khdr ? 'KHDR ON' : 'KHDR OFF';
    const sfRo = this.root.querySelector('#settings-sf-readout');
    if (sfRo) sfRo.textContent = next.shadowFlame === 'pro' ? '1.0 Pro' : '1.0 Flash';
    const note = this.root.querySelector('#settings-engine-note');
    if (note) {
      note.innerHTML =
        `<strong>KHDR ${next.khdr ? 'ON' : 'OFF'} × Shadow Flame ${next.shadowFlame === 'pro' ? '1.0 Pro' : '1.0 Flash'} 稼働中</strong><br/>` +
        `・<strong>KHDR</strong>: RGBA16F 線形HDR＋Karis加重Dual-Kawase光学ブルーム＋K-LHE局所明暗平衡＋K-Clarity微細鮮鋭化＋AgX着想K-Filmic v1色相保持カーブ<br/>` +
        `・<strong>Shadow Flame 1.0 Flash</strong>: 1536² テンポラルキャッシュ・6タップIGN回転Vogelディスク（標準比-44%画素/-33%フェッチ）＋天空青散乱影<br/>` +
        `・<strong>Shadow Flame 1.0 Pro</strong>: 近景±50m(4.8cm/texel)＋遠景±245mデュアルカスケード・8探索+16可変PCSS物理接触硬化・画面空間MicroContact微細影・山岳遠景セルフシャドウ`;
    }
  }

  public update(metrics: HudFrameMetrics, nowMs: number): void {
    if (nowMs - this.lastUiSync < 140) return;
    this.lastUiSync = nowMs;

    const p = this.controller.position;
    const inside = this.controller.insideStructure;

    if (inside) {
      const localY = p.y - inside.position.y;
      const elevs = inside.floorElevations;
      let floorNum = 1;
      if (elevs && elevs.length > 0) {
        for (let i = 0; i < elevs.length; i++) {
          if (localY >= elevs[i] - 0.55) floorNum = i + 1;
        }
      }
      const maxStories = inside.stories ?? elevs?.length ?? 2;
      floorNum = Math.min(floorNum, maxStories);
      const shortName = inside.category === 'mine' ? '旧黒磯炭鉱' : inside.name.split('（')[0];

      let floorLabel = `${floorNum}F/${maxStories}F`;
      if (inside.category === 'port') {
        floorLabel = floorNum >= 2 ? '2F 展望・宿直階' : '1F 岸壁・桟橋・倉庫';
      } else if (inside.category === 'koban') {
        floorLabel = floorNum >= 2 ? '2F 駐在官舎' : '1F 事務室・保護室';
      } else if (inside.category === 'park') {
        floorLabel = localY > 1.5 ? 'すべり台頂上' : '園内広場・東屋';
      } else if (inside.category === 'secret_base') {
        floorLabel = floorNum >= 2 ? '2F 巨杉樹上やぐら' : '1F 隠れ家・焚き火';
      } else if (inside.category === 'mine') {
        const dx = p.x - inside.position.x;
        const dz = p.z - inside.position.z;
        const mc = Math.cos(inside.yaw);
        const ms = Math.sin(inside.yaw);
        const lx = dx * mc - dz * ms;
        const lz = dx * ms + dz * mc;
        if (lz > -15.5) floorLabel = '坑口前広場・安全灯室';
        else if (lz > -63.5) floorLabel = lx > 3.2 ? '赤煉瓦火薬庫' : '第一主要坑道';
        else if (lz > -82.5 && lx < -9.5) floorLabel = '西・水没排水ポンプ坑';
        else if (lz > -82.5 && lx > 9.5) floorLabel = '東・1890手掘り炭層';
        else if (lz > -82.5) floorLabel = '地下転車台・捲揚機室';
        else if (lz > -104.0) floorLabel = '北斜坑（地下へ下降）';
        else floorLabel = localY > -3.2 ? '大採炭空洞・ホッパー歩廊' : '地下-5.2m 大採炭空洞';
      }

      const eraText =
        inside.builtYear >= 1926
          ? `昭和${inside.builtYear - 1925}年（${inside.builtYear}年）`
          : `明治${Math.max(1, inside.builtYear - 1867)}年（${inside.builtYear}年）`;
      this.zoneEl.textContent = `[${inside.id}] ${shortName} — ${floorLabel}`;
      this.siteHintEl.textContent = `${inside.name} ｜ ${eraText}・${inside.abandonedYear}年廃村`;
      this.siteHintEl.classList.add('visible');
    } else {
      this.zoneEl.textContent = classifyZone(p.x, p.y, p.z);

      // Show nearest built structure or landmark info when within 28m
      let bestDist = 28;
      let bestSite: (typeof PLANNED_SITES)[number] | null = null;
      for (let i = 0; i < PLANNED_SITES.length; i++) {
        const s = PLANNED_SITES[i];
        const d = Math.hypot(p.x - s.x, p.z - s.z);
        if (d < bestDist) {
          bestDist = d;
          bestSite = s;
        }
      }
      if (bestSite) {
        const built = this.structureById.get(bestSite.id);
        if (built) {
          const stories = built.stories ?? built.floorElevations?.length ?? 2;
          const kindTag =
            built.category === 'commercial' ? '商業施設' :
            built.category === 'port' ? '秘境旧港' :
            built.category === 'mine' ? '1890炭鉱' :
            built.category === 'koban' ? '駐在所' :
            built.category === 'park' ? '村営公園' :
            built.category === 'secret_base' ? '秘密基地' : '建築済';
          const actionHint =
            built.category === 'port' ? '桟橋歩行・灯台登頂・倉庫入室可' :
            built.category === 'mine' ? '全長135m地下坑道・入坑探索可' :
            built.category === 'park' ? 'すべり台登頂・東屋・管理小屋入室可' :
            built.category === 'secret_base' ? '1F隠れ家・2F樹上やぐら昇降可' :
            '入室・階段昇降可';
          const storyText = built.category === 'park' || built.category === 'mine' ? `${built.builtYear}年` : `${stories}階建・${built.builtYear}年築`;
          this.siteHintEl.textContent = `${kindTag} [${built.id}] ${built.name}（${storyText}）— ${actionHint}`;
        } else {
          this.siteHintEl.textContent = `造成予定地 [${bestSite.id}] ${bestSite.name}（${bestSite.note}）`;
        }
        this.siteHintEl.classList.add('visible');
      } else {
        this.siteHintEl.classList.remove('visible');
      }
    }

    this.elevEl.textContent = `標高 ${p.y.toFixed(1)}m`;
    this.compassEl.textContent = getCompassText(this.controller.yaw);

    const triK = (metrics.terrain.approxTriangles / 1000).toFixed(0);
    const khdrTag = metrics.khdr ? 'KHDR ON' : 'KHDR OFF';
    const sfTag = metrics.shadowFlame === 'pro' ? 'SF 1.0 Pro' : 'SF 1.0 Flash';
    this.telemetryEl.innerHTML =
      `<strong>${metrics.fps.toFixed(0)} FPS</strong> · ${metrics.frameMs.toFixed(1)}ms · ${metrics.renderWidth}×${metrics.renderHeight} · <strong>${khdrTag}</strong> · <strong>${sfTag}</strong><br/>` +
      `地形 ${metrics.terrain.activeChunks}ch (${triK}k△) · 木${metrics.foliage.visibleTrees} / 建築${metrics.houses.visibleHouses}(内装${metrics.houses.visibleInteriors})`;

    if (this.mapOpen) {
      this.drawDynamicMapOverlay();
    }
  }
}
