import * as THREE from 'three';
import type { ShadowFlameMode } from '../types';
import { DualAdaptation, decodeHistogram, HIST_BANDS, HIST_BINS, type HistogramStats } from './adaptation';
import { getGamutBoundaryLut, type KhdrGamut } from './gamutLut';
import {
  COMPOSITE_FRAG,
  DEPTHFX_FRAG,
  DOWN_FIRST_FRAG,
  DOWN_FRAG,
  FULLSCREEN_TRI_VERT,
  GRID_BLUR_FRAG,
  GRID_BUILD_FRAG,
  HISTOGRAM_FRAG,
  UP_FRAG,
} from './hyperShaders';

/**
 * KHDR 1.2 hyper — orchestrates the whole HDR chain for POCO F7-class phones (and desktops):
 *
 *   scene (RGBA16F, pre-exposed, alpha = direct-light fraction)
 *     -> DepthFx atlas (AO / contact shadow / crepuscular rays)
 *     -> K-Bloom v3 pyramid 1/2..1/64 (RGB = glare excess energy, A = log2 L)
 *     -> K-Meter histogram (gather) --async readback--> CPU K-Adapt v2 (dual adaptation) -> pre-exposure
 *     -> K-LHE v3 bilateral grid (gather build + 3D blur)
 *     -> K-Glare upsample chain (CIE 2002 eye-scatter weights)
 *     -> composite: K-SplitLight, local exposure, glare, rays, K-Mesopic, K-Look, K-Filmic v3, P3, dither
 */

// Non-negative fit of the CIE 2002 glare spread function (age 20) to the pyramid levels 1/2..1/64
// (docs/research/khdr_1_2/r4_cie_glare_fit.py). VEIL = energy beyond 5 degrees, applied uniformly.
const GLARE_WEIGHTS = [0.1618, 0.059, 0.0368, 0.0206, 0.0126, 0.0137];
const GLARE_VEIL = 0.0318;
const GLARE_TOTAL = 0.3363; // total scattered energy per unit excess (pyramid + far veil)
const LOG2_DISPLAY_WHITE = Math.log2(1.47); // scene value (paper-white units) where K-Filmic v3 reaches 1.0

export interface HyperFrameContext {
  dt: number;
  caveFactor: number;
  inside: boolean;
  shadowMode: ShadowFlameMode;
}

export interface HyperTelemetry {
  ev100: number;
  exposure: number;
  adaptedNits: number;
  longTermNits: number;
  meteredNits: number;
  key: number;
  rod: number;
  hiC: number;
  shC: number;
  p02: number;
  p98: number;
  glareThreshold: number;
  gamut: KhdrGamut;
  histogramsReceived: number;
}

function fullscreenTriangle(): THREE.BufferGeometry {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 2, 0, 0, 2], 2));
  return g;
}

function passMaterial(fragmentShader: string, uniforms: Record<string, THREE.IUniform>): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    vertexShader: FULLSCREEN_TRI_VERT,
    fragmentShader,
    uniforms,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });
}

function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}

export class KHDRHyperPipeline {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly mobileTier: boolean;
  private readonly msaaSamples: number;
  private readonly sunWorldDir: THREE.Vector3;

  private width = 1280;
  private height = 720;

  private hdrTarget: THREE.WebGLRenderTarget;
  private readonly depthFxHalf: THREE.WebGLRenderTarget;
  private readonly depthFxQuarter: THREE.WebGLRenderTarget;
  private readonly down: THREE.WebGLRenderTarget[] = [];
  private readonly up: THREE.WebGLRenderTarget[] = [];
  private readonly histTarget: THREE.WebGLRenderTarget;
  private readonly gridA: THREE.WebGLRenderTarget;
  private readonly gridB: THREE.WebGLRenderTarget;
  private gridW = 1;
  private gridH = 1;

  private readonly quadScene = new THREE.Scene();
  private readonly quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private readonly quad: THREE.Mesh;

  private readonly depthFxMat: THREE.ShaderMaterial;
  private readonly downFirstMat: THREE.ShaderMaterial;
  private readonly downMat: THREE.ShaderMaterial;
  private readonly upMat: THREE.ShaderMaterial;
  private readonly histMat: THREE.ShaderMaterial;
  private readonly gridBuildMat: THREE.ShaderMaterial;
  private readonly gridBlurMat: THREE.ShaderMaterial;
  private readonly compositeMat: THREE.ShaderMaterial;

  // CPU-side adaptation & statistics
  private readonly adapt = new DualAdaptation();
  private readonly histBuf = new Float32Array((HIST_BINS + 1) * HIST_BANDS * 4);
  private histPending = false;
  private latestHist: { stats: HistogramStats; pre: number } | null = null;
  private lastStats: { stats: HistogramStats; pre: number } | null = null;
  private histogramsReceived = 0;
  private preExposure = this.adapt.state.exposure;
  private hiC = 1.0;
  private shC = 1.0;
  private zMin = -12.0;
  private glareThreshold = 1.47;
  private p02 = -8.0;
  private p98 = 0.0;
  private readonly veil = new THREE.Vector3();
  private gamut: KhdrGamut = 'srgb';
  private frameIndex = 0;

  private readonly tmpSunPoint = new THREE.Vector3();
  private readonly tmpSunView = new THREE.Vector3();
  private readonly tmpCamForward = new THREE.Vector3();
  private readonly tmpNormMat = new THREE.Matrix3();

  static isSupported(renderer: THREE.WebGLRenderer): boolean {
    return renderer.capabilities.isWebGL2 && renderer.extensions.has('EXT_color_buffer_float');
  }

  constructor(renderer: THREE.WebGLRenderer, width: number, height: number, sunDirection: THREE.Vector3, mobileTier: boolean) {
    this.renderer = renderer;
    this.mobileTier = mobileTier;
    this.sunWorldDir = sunDirection.clone().normalize();
    this.width = Math.max(64, Math.floor(width));
    this.height = Math.max(64, Math.floor(height));
    const maxS = renderer.capabilities.maxSamples || 0;
    // TBDR: 2x MSAA keeps RGBA16F + depth inside Adreno tile memory; 4x on desktop
    this.msaaSamples = Math.min(mobileTier ? 2 : 4, maxS);

    this.hdrTarget = this.createHdrTarget(this.width, this.height);
    this.depthFxHalf = this.createTarget(32, 32, THREE.UnsignedByteType, true);
    this.depthFxQuarter = this.createTarget(32, 32, THREE.UnsignedByteType, true);
    for (let i = 0; i < 6; i++) this.down.push(this.createTarget(8, 8, THREE.HalfFloatType, true));
    for (let i = 0; i < 5; i++) this.up.push(this.createTarget(8, 8, THREE.HalfFloatType, true));
    this.histTarget = this.createTarget(HIST_BINS + 1, HIST_BANDS, THREE.FloatType, false);
    this.gridA = this.createTarget(8, 8, THREE.HalfFloatType, false);
    this.gridB = this.createTarget(8, 8, THREE.HalfFloatType, true);

    this.quad = new THREE.Mesh(fullscreenTriangle());
    this.quad.frustumCulled = false;
    this.quadScene.add(this.quad);

    this.depthFxMat = passMaterial(DEPTHFX_FRAG, {
      uDepthTex: { value: null },
      uTexelSize: { value: new THREE.Vector2() },
      uProjParams: { value: new THREE.Vector4(1, 1, 0.25, 22000) },
      uProjScale: { value: new THREE.Vector2(1, 1) },
      uSunDirView: { value: new THREE.Vector3(0, 0.7, -0.7) },
      uSunScreenPos: { value: new THREE.Vector2(0.5, 0.75) },
      uSunFacing: { value: 0 },
      uCaveFactor: { value: 0 },
      uEnableProFx: { value: 0 },
    });
    this.downFirstMat = passMaterial(DOWN_FIRST_FRAG, {
      uSrc: { value: null },
      uSrcTexel: { value: new THREE.Vector2() },
      uThreshold: { value: 1.47 },
    });
    this.downMat = passMaterial(DOWN_FRAG, {
      uSrc: { value: null },
      uSrcTexel: { value: new THREE.Vector2() },
    });
    this.upMat = passMaterial(UP_FRAG, {
      uLow: { value: null },
      uCur: { value: null },
      uLowTexel: { value: new THREE.Vector2() },
      uLowWeight: { value: 1 },
      uCurWeight: { value: 1 },
    });
    this.histMat = passMaterial(HISTOGRAM_FRAG, {
      uSrc: { value: null },
      uSrcSize: { value: new THREE.Vector2() },
    });
    this.gridBuildMat = passMaterial(GRID_BUILD_FRAG, {
      uLogTex: { value: null },
      uSrcSize: { value: new THREE.Vector2() },
      uGridSize: { value: new THREE.Vector2(1, 1) },
      uGridZ: { value: new THREE.Vector2(-12, 1) },
    });
    this.gridBlurMat = passMaterial(GRID_BLUR_FRAG, {
      uGrid: { value: null },
      uGridSize: { value: new THREE.Vector2(1, 1) },
    });
    this.compositeMat = passMaterial(COMPOSITE_FRAG, {
      uSceneTex: { value: null },
      uDepthTex: { value: null },
      uDepthFxTex: { value: null },
      uGlareTex: { value: null },
      uBlurLogTex: { value: null },
      uGridTex: { value: null },
      uGamutLut: { value: getGamutBoundaryLut('srgb') },
      uDepthFxTexel: { value: new THREE.Vector2() },
      uProjParams: { value: new THREE.Vector4(1, 1, 0.25, 22000) },
      uProDepthFx: { value: 0 },
      uDepthFxActive: { value: 0 },
      uGridSize: { value: new THREE.Vector2(1, 1) },
      uGridCells: { value: new THREE.Vector2(1, 1) },
      uGridZ: { value: new THREE.Vector2(-12, 1) },
      uLocal: { value: new THREE.Vector4(Math.log2(0.18), 1, 1, 1) },
      uDetail: { value: 1.0 },
      uVeil: { value: new THREE.Vector3() },
      uGlareGain: { value: 1.0 },
      uShaftColor: { value: new THREE.Vector3(0.32, 0.29, 0.24) },
      uRod: { value: 0 },
      uContrast: { value: 1.06 },
      uSaturation: { value: 1.0 },
      uGamutP3: { value: 0 },
      uFrameMod: { value: 0 },
      uDebugView: { value: 0 },
    });

    this.resizeChain();
  }

  // ---------------------------------------------------------------------------
  // Targets
  // ---------------------------------------------------------------------------
  private createHdrTarget(w: number, h: number): THREE.WebGLRenderTarget {
    const depthTex = new THREE.DepthTexture(w, h, THREE.UnsignedIntType);
    depthTex.format = THREE.DepthFormat;
    depthTex.minFilter = THREE.NearestFilter;
    depthTex.magFilter = THREE.NearestFilter;
    return new THREE.WebGLRenderTarget(w, h, {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: true,
      stencilBuffer: false,
      depthTexture: depthTex,
      samples: this.msaaSamples,
      resolveDepthBuffer: true,
    });
  }

  private createTarget(w: number, h: number, type: THREE.TextureDataType, linear: boolean): THREE.WebGLRenderTarget {
    return new THREE.WebGLRenderTarget(w, h, {
      type,
      format: THREE.RGBAFormat,
      minFilter: linear ? THREE.LinearFilter : THREE.NearestFilter,
      magFilter: linear ? THREE.LinearFilter : THREE.NearestFilter,
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
      depthBuffer: false,
      stencilBuffer: false,
      generateMipmaps: false,
    });
  }

  private resizeChain(): void {
    const w = this.width;
    const h = this.height;
    this.depthFxHalf.setSize(Math.max(32, w >> 1), Math.max(32, h >> 1));
    this.depthFxQuarter.setSize(Math.max(32, w >> 2), Math.max(32, h >> 2));
    for (let i = 0; i < 6; i++) {
      const s = 1 << (i + 1);
      this.down[i].setSize(Math.max(2, Math.floor(w / s)), Math.max(2, Math.floor(h / s)));
    }
    for (let i = 0; i < 5; i++) {
      this.up[i].setSize(this.down[i].width, this.down[i].height);
    }
    const g = this.down[2];
    this.gridW = Math.max(1, Math.ceil(g.width / 8));
    this.gridH = Math.max(1, Math.ceil(g.height / 8));
    this.gridA.setSize(this.gridW * 8, this.gridH);
    this.gridB.setSize(this.gridW * 8, this.gridH);
  }

  public setSize(width: number, height: number): void {
    const w = Math.max(64, Math.floor(width));
    const h = Math.max(64, Math.floor(height));
    if (w === this.width && h === this.height) return;
    this.width = w;
    this.height = h;
    this.hdrTarget.depthTexture?.dispose();
    this.hdrTarget.dispose();
    this.hdrTarget = this.createHdrTarget(w, h);
    this.resizeChain();
  }

  // ---------------------------------------------------------------------------
  // Public controls
  // ---------------------------------------------------------------------------
  public setOutputGamut(gamut: KhdrGamut): void {
    this.gamut = gamut;
    this.compositeMat.uniforms.uGamutLut.value = getGamutBoundaryLut(gamut);
    this.compositeMat.uniforms.uGamutP3.value = gamut === 'p3' ? 1 : 0;
  }

  public getOutputGamut(): KhdrGamut {
    return this.gamut;
  }

  public setDebugView(on: boolean): void {
    this.compositeMat.uniforms.uDebugView.value = on ? 1 : 0;
  }

  /** Normalised physical sun colour for the crepuscular rays. */
  public setSunColor(color: THREE.Vector3): void {
    const m = Math.max(color.x, color.y, color.z, 1e-6);
    this.compositeMat.uniforms.uShaftColor.value.set(color.x / m, color.y / m, color.z / m).multiplyScalar(0.3);
  }

  /** Teleport / mode switch: jump the adaptation to a context estimate (log2 cd/m^2). */
  public snap(contextLog: number): void {
    this.adapt.snap(contextLog);
    this.preExposure = this.adapt.state.exposure;
    this.lastStats = null;
    this.latestHist = null;
  }

  public getPreExposure(): number {
    return this.preExposure;
  }

  public getTelemetry(): HyperTelemetry {
    const s = this.adapt.state;
    return {
      ev100: this.adapt.ev100,
      exposure: s.exposure,
      adaptedNits: Math.pow(2, s.shortLog),
      longTermNits: Math.pow(2, s.longLog),
      meteredNits: Math.pow(2, s.meteredLog),
      key: s.key,
      rod: s.rod,
      hiC: this.hiC,
      shC: this.shC,
      p02: this.p02,
      p98: this.p98,
      glareThreshold: this.glareThreshold,
      gamut: this.gamut,
      histogramsReceived: this.histogramsReceived,
    };
  }

  /**
   * CPU part of the frame: consume the newest histogram, step the dual adaptation and derive the
   * pre-exposure plus all local-exposure / glare parameters. Returns the pre-exposure for this frame.
   */
  public beginFrame(ctx: HyperFrameContext): number {
    const dt = clamp(ctx.dt, 0.0, 0.25);
    let metered: number | null = null;
    if (this.latestHist) {
      const h = this.latestHist;
      this.latestHist = null;
      if (h.stats.valid) {
        // Adaptation luminance includes the veiling glare the bright sources throw onto the retina
        // (Moon & Spencer): a bare mine lamp in view raises adaptation instead of blinding forever.
        const v = h.stats.veil;
        const veilLum = GLARE_TOTAL * (0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2]);
        metered = Math.log2(Math.pow(2, h.stats.meanLog) + veilLum) - Math.log2(h.pre);
        this.lastStats = h;
      }
    }
    this.adapt.step(metered, dt);
    this.preExposure = this.adapt.state.exposure;

    const mid = Math.log2(this.adapt.state.key);
    let hiTarget = 1.0;
    let shTarget = 1.0;
    if (this.lastStats) {
      const shift = Math.log2(this.preExposure) - Math.log2(this.lastStats.pre);
      this.p02 = this.lastStats.stats.p02 + shift;
      this.p98 = this.lastStats.stats.p98 + shift;
      // Range fitting (research E6): highlights of the base layer <= mid + 2.2 EV, deep shadows >= mid - 4 EV
      hiTarget = clamp(2.2 / Math.max(this.p98 - mid, 1e-3), 0.3, 1.0);
      shTarget = clamp(4.0 / Math.max(mid - this.p02, 1e-3), 0.4, 1.0);
      const v = this.lastStats.stats.veil;
      const scale = (this.preExposure / this.lastStats.pre) * GLARE_VEIL;
      this.veil.set(v[0] * scale, v[1] * scale, v[2] * scale);
    }
    const kParam = 1 - Math.exp(-dt / 0.6);
    this.hiC += (hiTarget - this.hiC) * kParam;
    this.shC += (shTarget - this.shC) * kParam;

    // Grid range window (16 bins x 1 EV) with hysteresis so bins don't jitter frame to frame
    const lo = Math.min(this.p02, mid - 5.0);
    const hi = Math.max(this.p98, mid + 2.0);
    if (lo < this.zMin + 0.5 || hi > this.zMin + 15.5 || lo > this.zMin + 4.0) {
      this.zMin = Math.floor(lo) - 1.0;
      if (hi > this.zMin + 15.5) this.zMin = Math.ceil(hi) - 15.5;
    }

    // Glare starts where the display runs out of range *after* the local highlight compression
    this.glareThreshold = Math.pow(2, mid + (LOG2_DISPLAY_WHITE - mid) / Math.max(this.hiC, 0.3));
    return this.preExposure;
  }

  // ---------------------------------------------------------------------------
  // GPU part of the frame
  // ---------------------------------------------------------------------------
  private pass(mat: THREE.ShaderMaterial, target: THREE.WebGLRenderTarget | null): void {
    this.quad.material = mat;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this.quadScene, this.quadCam);
  }

  public render(scene: THREE.Scene, camera: THREE.PerspectiveCamera, ctx: HyperFrameContext): void {
    const r = this.renderer;
    const prevAutoClear = r.autoClear;
    const prevOutput = r.outputColorSpace;
    this.frameIndex = (this.frameIndex + 1) % 64;

    const p00 = camera.projectionMatrix.elements[0];
    const p11 = camera.projectionMatrix.elements[5];

    // 1. Scene -> RGBA16F (pre-exposed radiance, alpha = direct fraction) + resolved 24-bit depth
    r.outputColorSpace = THREE.LinearSRGBColorSpace;
    r.autoClear = true; // also clears every post target first => no tile reloads on TBDR GPUs
    r.setRenderTarget(this.hdrTarget);
    r.render(scene, camera);

    // 2. Depth-optical atlas
    camera.getWorldDirection(this.tmpCamForward);
    const sunDotCam = this.tmpCamForward.dot(this.sunWorldDir);
    const sunFacing = sunDotCam > 0.12 ? Math.pow(Math.max(0, (sunDotCam - 0.12) / 0.88), 1.35) : 0.0;
    this.tmpSunPoint.copy(camera.position).addScaledVector(this.sunWorldDir, 6000).project(camera);
    this.tmpNormMat.setFromMatrix4(camera.matrixWorldInverse);
    this.tmpSunView.copy(this.sunWorldDir).applyMatrix3(this.tmpNormMat).normalize();
    const isPro = ctx.shadowMode === 'pro';
    const runDepthFx = isPro || (sunFacing > 0.01 && ctx.caveFactor < 0.92);
    const fxTarget = isPro ? this.depthFxHalf : this.depthFxQuarter;
    const depthTex = this.hdrTarget.depthTexture;
    if (runDepthFx) {
      const u = this.depthFxMat.uniforms;
      u.uDepthTex.value = depthTex;
      u.uTexelSize.value.set(1 / this.width, 1 / this.height);
      u.uProjParams.value.set(1 / p00, 1 / p11, camera.near, camera.far);
      u.uProjScale.value.set(p00, p11);
      u.uSunDirView.value.copy(this.tmpSunView);
      u.uSunScreenPos.value.set(this.tmpSunPoint.x * 0.5 + 0.5, this.tmpSunPoint.y * 0.5 + 0.5);
      u.uSunFacing.value = sunFacing;
      u.uCaveFactor.value = ctx.caveFactor;
      u.uEnableProFx.value = isPro ? 1 : 0;
      this.pass(this.depthFxMat, fxTarget);
    }

    // 3. K-Bloom v3 pyramid (level 0 extracts the glare excess + log luminance)
    {
      const u = this.downFirstMat.uniforms;
      u.uSrc.value = this.hdrTarget.texture;
      u.uSrcTexel.value.set(1 / this.width, 1 / this.height);
      u.uThreshold.value = this.glareThreshold;
      this.pass(this.downFirstMat, this.down[0]);
    }
    for (let i = 1; i < 6; i++) {
      const src = this.down[i - 1];
      const u = this.downMat.uniforms;
      u.uSrc.value = src.texture;
      u.uSrcTexel.value.set(1 / src.width, 1 / src.height);
      this.pass(this.downMat, this.down[i]);
    }

    // 4. K-Meter histogram (1/16 level keeps small bright sky gaps in p98) + async readback (never stalls).
    //    Only built on frames that start a readback: while one is in flight nobody would read it.
    if (!this.histPending) {
      const src = this.down[3];
      const u = this.histMat.uniforms;
      u.uSrc.value = src.texture;
      u.uSrcSize.value.set(src.width, src.height);
      this.pass(this.histMat, this.histTarget);
      this.histPending = true;
      const pre = this.preExposure;
      r.readRenderTargetPixelsAsync(this.histTarget, 0, 0, HIST_BINS + 1, HIST_BANDS, this.histBuf)
        .then(() => {
          this.latestHist = { stats: decodeHistogram(this.histBuf, HIST_BANDS), pre };
          this.histogramsReceived++;
        })
        .catch(() => {
          /* readback unavailable this frame: adaptation keeps its last state */
        })
        .finally(() => {
          this.histPending = false;
        });
    }

    // 5. K-LHE v3 bilateral grid (gather build from the 1/8 level, then 3x3x3 blur)
    {
      const src = this.down[2];
      const u = this.gridBuildMat.uniforms;
      u.uLogTex.value = src.texture;
      u.uSrcSize.value.set(src.width, src.height);
      u.uGridSize.value.set(this.gridW, this.gridH);
      u.uGridZ.value.set(this.zMin, 1.0);
      this.pass(this.gridBuildMat, this.gridA);
      const b = this.gridBlurMat.uniforms;
      b.uGrid.value = this.gridA.texture;
      b.uGridSize.value.set(this.gridW, this.gridH);
      this.pass(this.gridBlurMat, this.gridB);
    }

    // 6. K-Glare upsample chain with CIE 2002 level weights
    {
      const u = this.upMat.uniforms;
      for (let i = 4; i >= 0; i--) {
        const low = i === 4 ? this.down[5] : this.up[i + 1];
        u.uLow.value = low.texture;
        u.uLowTexel.value.set(1 / low.width, 1 / low.height);
        u.uLowWeight.value = i === 4 ? GLARE_WEIGHTS[5] : 1.0;
        u.uCur.value = this.down[i].texture;
        u.uCurWeight.value = GLARE_WEIGHTS[i];
        this.pass(this.upMat, this.up[i]);
      }
    }

    // 7. Final composite -> canvas
    {
      const u = this.compositeMat.uniforms;
      const mid = Math.log2(this.adapt.state.key);
      u.uSceneTex.value = this.hdrTarget.texture;
      u.uDepthTex.value = depthTex;
      u.uDepthFxTex.value = fxTarget.texture;
      u.uDepthFxTexel.value.set(1 / fxTarget.width, 1 / fxTarget.height);
      u.uProjParams.value.set(1 / p00, 1 / p11, camera.near, camera.far);
      u.uProDepthFx.value = isPro ? 1 : 0;
      u.uDepthFxActive.value = runDepthFx ? 1 : 0;
      u.uGlareTex.value = this.up[0].texture;
      u.uBlurLogTex.value = this.down[3].texture;
      u.uGridTex.value = this.gridB.texture;
      u.uGridSize.value.set(this.gridW, this.gridH);
      u.uGridCells.value.set(this.down[2].width / 8, this.down[2].height / 8);
      u.uGridZ.value.set(this.zMin, 1.0);
      u.uLocal.value.set(mid, this.hiC, this.shC, 1.0);
      u.uVeil.value.copy(this.veil);
      u.uRod.value = this.adapt.state.rod;
      u.uFrameMod.value = this.frameIndex;
      this.pass(this.compositeMat, null);
    }

    r.outputColorSpace = prevOutput;
    r.autoClear = prevAutoClear;
  }

  public dispose(): void {
    this.hdrTarget.depthTexture?.dispose();
    this.hdrTarget.dispose();
    this.depthFxHalf.dispose();
    this.depthFxQuarter.dispose();
    for (const t of this.down) t.dispose();
    for (const t of this.up) t.dispose();
    this.histTarget.dispose();
    this.gridA.dispose();
    this.gridB.dispose();
    for (const m of [
      this.depthFxMat,
      this.downFirstMat,
      this.downMat,
      this.upMat,
      this.histMat,
      this.gridBuildMat,
      this.gridBlurMat,
      this.compositeMat,
    ]) {
      m.dispose();
    }
    this.quad.geometry.dispose();
  }
}
