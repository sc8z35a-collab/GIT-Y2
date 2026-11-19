import { GraphicsSettings, ResolutionPreset, FpsLimitMode } from '../core/types';
import {
  TERRAIN_EXTENT_X,
  TERRAIN_EXTENT_Z,
  GRADED_PATHS,
  PLANNED_SITES,
  SPAWN_POINT,
  LOOKOUT_POINT,
  KOBAN_POINT,
  PARK_POINT,
  MINE_PORTAL_POINT,
  SECRET_BASE_POINT,
  SUMMIT_POINT,
  HIDDEN_PORT_POINT,
  getTerrainHeight,
} from '../world/terrainMath';
import type { TerrainStreamStats } from '../world/terrainStreamer';
import type { FoliageStreamStats } from '../world/foliageStreamer';
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
  terrain: TerrainStreamStats;
  foliage: FoliageStreamStats;
}

interface QuickLandmark {
  label: string;
  elev: string;
  x: number;
  z: number;
  yaw: number;
  pitch?: number;
}

const QUICK_LANDMARKS: QuickLandmark[] = [
  { label: '漂着浜（目覚め地点）', elev: '2m', x: SPAWN_POINT.x, z: SPAWN_POINT.z, yaw: SPAWN_POINT.yaw, pitch: 0.04 },
  { label: '見晴らし坂（廃村展望）', elev: '268m', x: LOOKOUT_POINT.x, z: LOOKOUT_POINT.z, yaw: 0.56, pitch: -0.05 },
  { label: '黒磯駐在所・交番予定地 (K01)', elev: '238m', x: KOBAN_POINT.x - 14, z: KOBAN_POINT.z + 10, yaw: -0.45, pitch: -0.02 },
  { label: 'よろず商店予定地 (S01)', elev: '252m', x: 118, z: 325, yaw: 0.32, pitch: -0.02 },
  { label: '購買部みなとや予定地 (S02)', elev: '258m', x: -55, z: -158, yaw: 0.4, pitch: -0.03 },
  { label: '見晴らし村営公園 (P01)', elev: '242m', x: PARK_POINT.x + 8, z: PARK_POINT.z + 6, yaw: 0.65, pitch: -0.02 },
  { label: '1890年炭鉱坑口予定地 (M01)', elev: '348m', x: MINE_PORTAL_POINT.x + 8, z: MINE_PORTAL_POINT.z + 24, yaw: 0.12, pitch: 0.05 },
  { label: '子供たちの山奥秘密基地 (B01)', elev: '376m', x: SECRET_BASE_POINT.x - 8, z: SECRET_BASE_POINT.z + 8, yaw: -0.68, pitch: 0.02 },
  { label: '山頂獣道・東尾根中腹', elev: '629m', x: 355, z: -1245, yaw: 0.96, pitch: 0.12 },
  { label: '★ 黒磯岳 主峰山頂', elev: '865m', x: SUMMIT_POINT.x - 4.5, z: SUMMIT_POINT.z - 5.5, yaw: -2.46, pitch: -0.14 },
  { label: '秘境の旧港・建設案 (PORT01)', elev: '2.8m', x: HIDDEN_PORT_POINT.x + 2.5, z: HIDDEN_PORT_POINT.z + 2.5, yaw: 0.785, pitch: -0.08 },
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
  if (Math.hypot(x - HIDDEN_PORT_POINT.x, z - HIDDEN_PORT_POINT.z) < 110) {
    return '秘境の旧港（建設案・北西入江）';
  }
  if (Math.hypot(x - SECRET_BASE_POINT.x, z - SECRET_BASE_POINT.z) < 65) {
    return '子供たちの山奥の秘密基地 (B01)';
  }
  if (Math.hypot(x - MINE_PORTAL_POINT.x, z - MINE_PORTAL_POINT.z) < 95) {
    return '旧黒磯炭鉱 1890 坑口予定地 (M01)';
  }
  if (Math.hypot(x - LOOKOUT_POINT.x, z - LOOKOUT_POINT.z) < 65) {
    return '見晴らし坂（廃村展望カーブ）';
  }
  if (Math.hypot(x - PARK_POINT.x, z - PARK_POINT.z) < 42) {
    return '見晴らし村営公園 (P01)';
  }
  if (z > 1950 && y < 35) {
    return '漂着浜（南端入江）';
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

  // Map coordinate transform constants (North-up 2km x 5km canvas)
  private readonly MAP_W = 220;
  private readonly MAP_H = 550;

  constructor(
    root: HTMLElement,
    controller: FirstPersonController,
    initialSettings: GraphicsSettings,
    callbacks: HudCallbacks,
    skipIntro = false
  ) {
    this.root = root;
    this.controller = controller;
    this.settings = { ...initialSettings };
    this.callbacks = callbacks;
    this.touchEnabled =
      window.matchMedia('(pointer: coarse)').matches ||
      (navigator.maxTouchPoints ?? 0) > 0;

    this.renderMarkup(skipIntro);
    this.bindEvents();
  }

  private renderMarkup(skipIntro: boolean): void {
    const landmarkButtons = QUICK_LANDMARKS.map(
      (lm, idx) => `
        <button class="map-tp-btn" data-tp-idx="${idx}">
          <span>${lm.label}</span>
          <span class="map-tp-elev">${lm.elev}</span>
        </button>`
    ).join('');

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
          <div class="wakeup-eyebrow">KUROISO-JIMA 1985 — 2KM × 5KM ISOLATED MOUNTAIN ISLAND</div>
          <h1 class="wakeup-title">黒磯島 — 1985年廃村・孤島地形探索</h1>
          <p class="wakeup-story">
            冷たい砂と波音の中で目を覚ました。あたり一面は見渡す限りの外洋、救助は来ない。<br/>
            背後にそびえる山の斜面（標高約254m）に廃村予定地と道路網、さらに獣道を登り詰めた先に
            <strong>標高865mの黒磯岳山頂</strong>と<strong>秘境の旧港</strong>が広がっている。
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
            <span id="hud-zone">漂着浜（南端入江）</span>
          </div>
          <div class="hud-meta-row">
            <span id="hud-elev">標高 2.1m</span>
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
        WASD 移動 · Shift ダッシュ · Space 跳躍 · C しゃがむ · マウス 視点 · M 2km×5km地形図
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

            <div class="settings-note">
              <strong>2km×5km ストリーミング最適化稼働中</strong><br/>
              ・4段階マルチLOD地形チャンク（640区画を毎フレーム4.2ms予算で動的ロード＆破棄）<br/>
              ・3階層インスタンス植生（遠景森林 256m / 近景精密樹木 128m / 風揺れ雑草・シダ・ススキ 64m）<br/>
              ※ KHDR・Shadow Flame・25軒の個別手作業家屋建築は次フェーズにて実装予定。
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive 2km x 5km Topographic Map Modal -->
      <div class="modal-backdrop" id="map-modal">
        <div class="modal-panel map-panel">
          <div class="modal-header">
            <h2 class="modal-title">黒磯島 2km × 5km 地形図・配置計画（クリックで現地視察移動）</h2>
            <button class="modal-close" id="btn-close-map">閉じる (M)</button>
          </div>
          <div class="map-layout">
            <div class="map-canvas-wrap">
              <canvas class="map-canvas" id="topo-map-canvas" width="${this.MAP_W}" height="${this.MAP_H}"></canvas>
            </div>
            <div class="map-sidebar">
              <div class="map-sidebar-title">主要拠点・展望スポットへ移動</div>
              <div class="map-tp-list" id="map-tp-list">${landmarkButtons}</div>
              <div class="map-legend">
                <div class="legend-item"><span class="legend-swatch" style="background:#f2e7cc;"></span>村道/海岸林道</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#f2a649;"></span>獣道/けもの道</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#d99a6c;"></span>民家予定地(25)</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#e85b48;"></span>商店(2)/交番(1)</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#63c778;"></span>公園/秘密基地</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#4bc4df;"></span>炭鉱/秘境旧港</div>
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
        this.root.querySelectorAll('#fps-group .seg-btn').forEach((b) => b.classList.remove('selected'));
        btn.classList.add('selected');
        const ro = this.root.querySelector('#settings-fps-readout');
        if (ro) ro.textContent = fps === '120' ? '120 FPS' : '無制限';
        this.callbacks.onGraphicsChange({ ...this.settings });
      });
    });

    // Quick-jump landmark buttons
    this.root.querySelectorAll('.map-tp-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number((btn as HTMLElement).dataset.tpIdx);
        const lm = QUICK_LANDMARKS[idx];
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
        const shade = Math.max(0.72, Math.min(1.24, 1.0 + (e - eR) * 0.045 + (e - eD) * 0.035));

        let r = 12;
        let g = 42;
        let b = 68;

        if (e <= 0) {
          const shallow = Math.max(0, 1 + e / 24);
          r = 10 + shallow * 22;
          g = 36 + shallow * 58;
          b = 60 + shallow * 52;
        } else if (e < 6) {
          r = 176; g = 162; b = 128;
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
          r = (132 + t * 62) * shade;
          g = (126 + t * 66) * shade;
          b = (104 + t * 76) * shade;
        }

        // Crisp 50m elevation contour lines
        if (e > 5 && px + 1 < w && py + 1 < h) {
          const b0 = Math.floor(e / 50);
          const b1 = Math.floor(eR / 50);
          const b2 = Math.floor(eD / 50);
          if (b0 !== b1 || b0 !== b2) {
            const major = b0 % 2 === 0;
            const mix = major ? 0.42 : 0.22;
            r *= 1 - mix;
            g *= 1 - mix;
            b *= 1 - mix;
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

    // Overlay all 8 graded roads & animal trails
    for (const path of GRADED_PATHS) {
      ctx.beginPath();
      for (let i = 0; i < path.points.length; i++) {
        const [mx, my] = this.worldToMap(path.points[i][0], path.points[i][1]);
        if (i === 0) ctx.moveTo(mx, my);
        else ctx.lineTo(mx, my);
      }
      if (path.kind === 'road') {
        ctx.strokeStyle = 'rgba(246, 236, 206, 0.92)';
        ctx.lineWidth = 2.0;
        ctx.setLineDash([]);
      } else if (path.kind === 'forestry') {
        ctx.strokeStyle = 'rgba(224, 198, 136, 0.85)';
        ctx.lineWidth = 1.6;
        ctx.setLineDash([]);
      } else {
        ctx.strokeStyle = 'rgba(246, 170, 74, 0.95)';
        ctx.lineWidth = 1.45;
        ctx.setLineDash([4, 3]);
      }
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Overlay all 32 planned sites
    const catColors: Record<string, string> = {
      house: '#d99a6c',
      shop: '#f06449',
      koban: '#4d96ff',
      park: '#63c778',
      secret_base: '#b4e362',
      mine: '#4bc4df',
      port: '#56e0f5',
    };
    for (const s of PLANNED_SITES) {
      const [mx, my] = this.worldToMap(s.x, s.z);
      ctx.fillStyle = catColors[s.category] ?? '#ffffff';
      const sz = s.category === 'house' ? 3.2 : 5.2;
      ctx.fillRect(mx - sz * 0.5, my - sz * 0.5, sz, sz);
    }

    // 865m Summit star
    const [sx, sy] = this.worldToMap(SUMMIT_POINT.x, SUMMIT_POINT.z);
    ctx.fillStyle = '#ffe675';
    ctx.beginPath();
    ctx.arc(sx, sy, 4.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1b1d20';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Key labels directly on map
    ctx.font = 'bold 9.5px sans-serif';
    ctx.fillStyle = '#fff5d0';
    ctx.strokeStyle = 'rgba(0,0,0,0.75)';
    ctx.lineWidth = 2.4;
    const label = (txt: string, wx: number, wz: number, ox = 6, oy = 3) => {
      const [mx, my] = this.worldToMap(wx, wz);
      ctx.strokeText(txt, mx + ox, my + oy);
      ctx.fillText(txt, mx + ox, my + oy);
    };
    label('▲黒磯岳 865m', SUMMIT_POINT.x, SUMMIT_POINT.z, -42, -10);
    label('秘境旧港', HIDDEN_PORT_POINT.x, HIDDEN_PORT_POINT.z, 6, 4);
    label('1890炭鉱', MINE_PORTAL_POINT.x, MINE_PORTAL_POINT.z, 7, 3);
    label('秘密基地', SECRET_BASE_POINT.x, SECRET_BASE_POINT.z, -48, 4);
    label('廃村(254m)', 120, 120, 6, 4);
    label('漂着浜', SPAWN_POINT.x, SPAWN_POINT.z, -20, 16);

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

  public update(metrics: HudFrameMetrics, nowMs: number): void {
    if (nowMs - this.lastUiSync < 140) return;
    this.lastUiSync = nowMs;

    const p = this.controller.position;
    this.zoneEl.textContent = classifyZone(p.x, p.y, p.z);
    this.elevEl.textContent = `標高 ${p.y.toFixed(1)}m`;
    this.compassEl.textContent = getCompassText(this.controller.yaw);

    // Show nearest planned site info when within 26m
    let bestDist = 26;
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
      this.siteHintEl.textContent = `造成予定地 [${bestSite.id}] ${bestSite.name}（${bestSite.note}）`;
      this.siteHintEl.classList.add('visible');
    } else {
      this.siteHintEl.classList.remove('visible');
    }

    const triK = (metrics.terrain.approxTriangles / 1000).toFixed(0);
    this.telemetryEl.innerHTML =
      `<strong>${metrics.fps.toFixed(0)} FPS</strong> · ${metrics.frameMs.toFixed(1)}ms · ${metrics.renderWidth}×${metrics.renderHeight}<br/>` +
      `地形 ${metrics.terrain.activeChunks}ch (${triK}k△) · 木${metrics.foliage.visibleTrees} / 草${metrics.foliage.visibleGrassTufts}`;

    if (this.mapOpen) {
      this.drawDynamicMapOverlay();
    }
  }
}
