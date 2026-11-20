import * as THREE from 'three';

/**
 * KHDR (Kuroiso Hyper-Dynamic Range) — Proprietary 16-bit Linear HDR Post-Processing Engine.
 *
 * Original techniques engineered specifically for Kuroiso Island's extreme contrast
 * (sunlit coastal ocean & white Meiji shikkui plaster vs dense Japanese cedar shade & 1890 coal mine):
 * 1. RGBA16F Linear HDR Scene Buffer with WebGL2 MSAA (preserves > 1.0 physical radiance)
 * 2. Dual-Purpose Karis-Weighted Spectral Pre-Filter + Dual-Kawase Pyramid (1/4 & 1/8 res):
 *    Packs Optical Bloom radiance in RGB and Local Surround Log-Luminance in Alpha (ZERO extra targets!)
 * 3. K-LHE (Kuroiso Local Highlight-Shadow Equilibrium): Perceptual eye-adaptation that lifts
 *    crushed timber/foliage shadow details without lifting true subterranean coal-mine black!
 * 4. K-Clarity: Midtone-gated local micro-contrast recovery sharpening wood grain, kawara tiles & cliffs
 * 5. K-Filmic v1: AgX-inspired chroma-preserving perceptual inset filmic curve (zero green-to-yellow hue shift!)
 * 6. Triangular Blue-Noise Anti-Banding Dither for silky 8-bit sky & cavern gradients.
 */
export class KHDRPipeline {
  private readonly renderer: THREE.WebGLRenderer;
  private enabled: boolean;

  private hdrTarget: THREE.WebGLRenderTarget;
  private bloomQuarter: THREE.WebGLRenderTarget;
  private bloomEighth: THREE.WebGLRenderTarget;
  private bloomUpQuarter: THREE.WebGLRenderTarget;

  private readonly quadScene = new THREE.Scene();
  private readonly quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private readonly quadMesh: THREE.Mesh;

  private readonly prefilterMat: THREE.ShaderMaterial;
  private readonly kawaseDownMat: THREE.ShaderMaterial;
  private readonly kawaseUpMat: THREE.ShaderMaterial;
  private readonly compositeMat: THREE.ShaderMaterial;

  private width = 1280;
  private height = 720;
  private readonly msaaSamples: number;
  private readonly hdrTexType: THREE.TextureDataType;

  constructor(renderer: THREE.WebGLRenderer, width: number, height: number, initialEnabled = true) {
    this.renderer = renderer;
    this.enabled = initialEnabled;
    this.width = Math.max(64, width);
    this.height = Math.max(64, height);

    const isWebGL2 = renderer.capabilities.isWebGL2;
    this.msaaSamples = isWebGL2 ? Math.min(4, renderer.capabilities.maxSamples || 0) : 0;
    this.hdrTexType =
      isWebGL2 || renderer.extensions.has('OES_texture_half_float')
        ? THREE.HalfFloatType
        : THREE.UnsignedByteType;

    this.hdrTarget = this.createHdrTarget(this.width, this.height);
    this.bloomQuarter = this.createBloomTarget(Math.max(32, Math.floor(this.width / 4)), Math.max(32, Math.floor(this.height / 4)));
    this.bloomEighth = this.createBloomTarget(Math.max(16, Math.floor(this.width / 8)), Math.max(16, Math.floor(this.height / 8)));
    this.bloomUpQuarter = this.createBloomTarget(Math.max(32, Math.floor(this.width / 4)), Math.max(32, Math.floor(this.height / 4)));

    const fullscreenVert = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `;

    // Pass 2A: Karis-Weighted 5-Tap Spectral Pre-Filter + Surround Log-Luminance Packer (1/4 res)
    this.prefilterMat = new THREE.ShaderMaterial({
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uSceneTex: { value: this.hdrTarget.texture },
        uTexelSize: { value: new THREE.Vector2(1 / this.width, 1 / this.height) },
        uThreshold: { value: 1.02 },
        uKnee: { value: 0.52 },
      },
      vertexShader: fullscreenVert,
      fragmentShader: `
        uniform sampler2D uSceneTex;
        uniform vec2 uTexelSize;
        uniform float uThreshold;
        uniform float uKnee;
        varying vec2 vUv;

        float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

        vec3 karisSample(vec2 uv, out float w, out float logL) {
          vec3 c = max(texture2D(uSceneTex, uv).rgb, vec3(0.0));
          float l = luma(c);
          logL = log2(max(l, 0.002));
          // Soft-knee spectral threshold preserves hue & prevents firefly flicker
          float rq = clamp(l - uThreshold + uKnee, 0.0, 2.0 * uKnee);
          rq = (rq * rq) / max(4.0 * uKnee, 1e-4);
          float contrib = max(rq, l - uThreshold) / max(l, 1e-4);
          vec3 bright = c * max(contrib, 0.0);
          w = 1.0 / (1.0 + luma(bright));
          return bright;
        }

        void main() {
          vec2 d = uTexelSize * 1.5;
          float w0, w1, w2, w3, w4;
          float l0, l1, l2, l3, l4;
          vec3 b0 = karisSample(vUv, w0, l0);
          vec3 b1 = karisSample(vUv + vec2(-d.x, -d.y), w1, l1);
          vec3 b2 = karisSample(vUv + vec2( d.x, -d.y), w2, l2);
          vec3 b3 = karisSample(vUv + vec2(-d.x,  d.y), w3, l3);
          vec3 b4 = karisSample(vUv + vec2( d.x,  d.y), w4, l4);

          vec3 bloom = (b0 * w0 * 2.0 + b1 * w1 + b2 * w2 + b3 * w3 + b4 * w4) / max(w0 * 2.0 + w1 + w2 + w3 + w4, 1e-4);
          // Clamp extreme specular spikes while retaining luminous warmth
          bloom = min(bloom, vec3(4.5));
          float avgLogL = (l0 * 2.0 + l1 + l2 + l3 + l4) * (1.0 / 6.0);
          gl_FragColor = vec4(bloom, avgLogL);
        }
      `,
    });

    // Pass 2B: Dual-Kawase 5-Tap Wide Downsample (1/4 -> 1/8 res)
    this.kawaseDownMat = new THREE.ShaderMaterial({
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uSrcTex: { value: this.bloomQuarter.texture },
        uHalfPixel: { value: new THREE.Vector2(0.5 / this.bloomQuarter.width, 0.5 / this.bloomQuarter.height) },
      },
      vertexShader: fullscreenVert,
      fragmentShader: `
        uniform sampler2D uSrcTex;
        uniform vec2 uHalfPixel;
        varying vec2 vUv;

        void main() {
          vec2 o = uHalfPixel * 2.5;
          vec4 s = texture2D(uSrcTex, vUv) * 4.0;
          s += texture2D(uSrcTex, vUv + vec2(-o.x, -o.y));
          s += texture2D(uSrcTex, vUv + vec2( o.x, -o.y));
          s += texture2D(uSrcTex, vUv + vec2(-o.x,  o.y));
          s += texture2D(uSrcTex, vUv + vec2( o.x,  o.y));
          gl_FragColor = s * 0.125;
        }
      `,
    });

    // Pass 2C: Dual-Kawase 8-Tap Tent Upsample merging 1/8 wide halo + 1/4 tight halo
    this.kawaseUpMat = new THREE.ShaderMaterial({
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uLowTex: { value: this.bloomEighth.texture },
        uHighTex: { value: this.bloomQuarter.texture },
        uHalfPixel: { value: new THREE.Vector2(0.5 / this.bloomEighth.width, 0.5 / this.bloomEighth.height) },
      },
      vertexShader: fullscreenVert,
      fragmentShader: `
        uniform sampler2D uLowTex;
        uniform sampler2D uHighTex;
        uniform vec2 uHalfPixel;
        varying vec2 vUv;

        void main() {
          vec2 o = uHalfPixel * 2.0;
          vec4 up = texture2D(uLowTex, vUv + vec2(-o.x * 2.0, 0.0));
          up += texture2D(uLowTex, vUv + vec2( o.x * 2.0, 0.0));
          up += texture2D(uLowTex, vUv + vec2(0.0, -o.y * 2.0));
          up += texture2D(uLowTex, vUv + vec2(0.0,  o.y * 2.0));
          up += texture2D(uLowTex, vUv + vec2(-o.x, -o.y)) * 2.0;
          up += texture2D(uLowTex, vUv + vec2( o.x, -o.y)) * 2.0;
          up += texture2D(uLowTex, vUv + vec2(-o.x,  o.y)) * 2.0;
          up += texture2D(uLowTex, vUv + vec2( o.x,  o.y)) * 2.0;
          up *= (1.0 / 12.0);

          vec4 tight = texture2D(uHighTex, vUv);
          // RGB = dual-scale optical bloom; Alpha = wide smooth surround log-luminance for halo-free K-LHE!
          gl_FragColor = vec4(mix(tight.rgb, up.rgb, 0.62), up.a);
        }
      `,
    });

    // Pass 3: KHDR Proprietary Optical & Perceptual Composite (K-LHE + K-Clarity + K-Filmic v1 + Dither)
    this.compositeMat = new THREE.ShaderMaterial({
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uSceneTex: { value: this.hdrTarget.texture },
        uBloomTex: { value: this.bloomUpQuarter.texture },
        uExposure: { value: 1.04 },
        uBloomStrength: { value: 0.28 },
        uCaveFactor: { value: 0.0 },
      },
      vertexShader: fullscreenVert,
      fragmentShader: `
        uniform sampler2D uSceneTex;
        uniform sampler2D uBloomTex;
        uniform float uExposure;
        uniform float uBloomStrength;
        uniform float uCaveFactor;
        varying vec2 vUv;

        float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

        // AgX-inspired perceptual inset & outset matrices (preserves Japanese forest greens & ocean blues under bright sun!)
        const mat3 KHDR_INSET = mat3(
          0.85662715, 0.13731897, 0.11189821,
          0.09512124, 0.76124199, 0.07679942,
          0.04825161, 0.10143904, 0.81130236
        );
        const mat3 KHDR_OUTSET = mat3(
          1.12710058, -0.14132976, -0.14132976,
         -0.11060664,  1.15782370, -0.11060664,
         -0.01649394, -0.01649394,  1.25193640
        );

        // K-Filmic v1: Calibrated filmic exposure slope (velvet deep shadows + crisp midtones + radiant >1.0 HDR headroom!)
        vec3 kFilmicCurve(vec3 x) {
          x = max(x, vec3(0.0));
          // Inset into perceptual working primaries so bright highlights roll off organically without hue skew
          vec3 w = max(KHDR_INSET * x, vec3(0.0)) * 0.62;
          vec3 a = w * (w * 1.16 + 0.025);
          vec3 b = w * (w * 1.04 + 0.48) + 0.22;
          vec3 mapped = clamp(a / b, 0.0, 1.0);
          return clamp(KHDR_OUTSET * mapped, 0.0, 1.0);
        }

        // Exact IEC 61966-2-1 linear -> sRGB transfer function
        vec3 linearToSRGBExact(vec3 c) {
          vec3 lo = c * 12.92;
          vec3 hi = 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055;
          return mix(lo, hi, step(vec3(0.0031308), c));
        }

        void main() {
          vec3 hdr = max(texture2D(uSceneTex, vUv).rgb, vec3(0.0));
          vec4 bloomPack = texture2D(uBloomTex, vUv);
          vec3 bloom = max(bloomPack.rgb, vec3(0.0));
          float surrLogL = bloomPack.a;

          float L = luma(hdr);
          float logL = log2(max(L, 0.0015));

          // 1. K-LHE (Kuroiso Local Highlight-Shadow Equilibrium):
          // Surgically lifts ONLY deep crushed timber/foliage shadow cavities (L in 0.008..0.10) while keeping
          // midtones rich & punchy and protecting true pitch-black underground coal-mine depths!
          float shadowGate = smoothstep(0.007, 0.028, L) * (1.0 - smoothstep(0.055, 0.14, L));
          float shadowLift = 1.0 + 0.16 * shadowGate * (1.0 - uCaveFactor * 0.70);
          float hiGuard = 1.0 / (1.0 + max(0.0, L - 1.55) * 0.14);

          // 2. K-Clarity: Midtone-gated local micro-contrast recovery sharpening kawara tiles, timber & stratified cliffs!
          float detailDiff = clamp(logL - surrLogL, -1.25, 1.25);
          float midGate = smoothstep(0.020, 0.12, L) * (1.0 - smoothstep(0.85, 2.2, L));
          float clarityGain = exp2(detailDiff * 0.22 * midGate);

          vec3 col = hdr * (uExposure * shadowLift * hiGuard * clarityGain);

          // 3. Dual-Scale Optical Bloom (radiant sunlight glints & glowing 1890 coal-mine bulkhead lamps!)
          float bloomBoost = mix(uBloomStrength, uBloomStrength * 1.85, uCaveFactor);
          col += bloom * bloomBoost;

          // 4. K-Filmic v1 Tone Mapping (cinema contrast + AgX-inset true Japanese mountain & ocean color fidelity)
          vec3 mapped = kFilmicCurve(col);

          // 5. Luminance-gated perceptual color depth (+10% crisp midtone richness, zero clipping or leaf-hue drift)
          float mL = luma(mapped);
          float satWeight = 0.10 * smoothstep(0.04, 0.22, mL) * (1.0 - smoothstep(0.76, 0.96, mL));
          mapped = clamp(mix(vec3(mL), mapped, 1.0 + satWeight), 0.0, 1.0);

          // 6. Exact linear -> sRGB encoding + triangular anti-banding micro-dither
          vec3 srgb = linearToSRGBExact(mapped);
          float rnd1 = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
          float rnd2 = fract(sin(dot(gl_FragCoord.xy + vec2(1.7, 3.1), vec2(39.346, 11.135))) * 43758.5453);
          float triDither = (rnd1 + rnd2 - 1.0) * (1.0 / 255.0);
          gl_FragColor = vec4(clamp(srgb + triDither, 0.0, 1.0), 1.0);
        }
      `,
    });

    const quadGeo = new THREE.PlaneGeometry(2, 2);
    this.quadMesh = new THREE.Mesh(quadGeo, this.compositeMat);
    this.quadMesh.frustumCulled = false;
    this.quadScene.add(this.quadMesh);

    this.syncRendererToneMapping();
  }

  private createHdrTarget(w: number, h: number): THREE.WebGLRenderTarget {
    return new THREE.WebGLRenderTarget(w, h, {
      type: this.hdrTexType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: true,
      stencilBuffer: false,
      samples: this.msaaSamples,
    });
  }

  private createBloomTarget(w: number, h: number): THREE.WebGLRenderTarget {
    return new THREE.WebGLRenderTarget(w, h, {
      type: this.hdrTexType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false,
      stencilBuffer: false,
      samples: 0,
    });
  }

  private syncRendererToneMapping(): void {
    if (this.enabled) {
      // KHDR composite pass performs K-Filmic v1 tone mapping & exact sRGB OETF directly
      this.renderer.toneMapping = THREE.NoToneMapping;
      this.renderer.toneMappingExposure = 1.0;
    } else {
      // Standard baseline forward ACESFilmic
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.06;
    }
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public setEnabled(enabled: boolean): void {
    if (this.enabled === enabled) return;
    this.enabled = enabled;
    this.syncRendererToneMapping();
  }

  public setSize(width: number, height: number): void {
    const w = Math.max(64, width);
    const h = Math.max(64, height);
    if (w === this.width && h === this.height) return;
    this.width = w;
    this.height = h;

    const qW = Math.max(32, Math.floor(w / 4));
    const qH = Math.max(32, Math.floor(h / 4));
    const eW = Math.max(16, Math.floor(w / 8));
    const eH = Math.max(16, Math.floor(h / 8));

    this.hdrTarget.setSize(w, h);
    this.bloomQuarter.setSize(qW, qH);
    this.bloomEighth.setSize(eW, eH);
    this.bloomUpQuarter.setSize(qW, qH);

    this.prefilterMat.uniforms.uTexelSize.value.set(1 / w, 1 / h);
    this.kawaseDownMat.uniforms.uHalfPixel.value.set(0.5 / qW, 0.5 / qH);
    this.kawaseUpMat.uniforms.uHalfPixel.value.set(0.5 / eW, 0.5 / eH);
  }

  public render(scene: THREE.Scene, camera: THREE.Camera, caveLightFactor = 0): void {
    if (!this.enabled) {
      this.renderer.setRenderTarget(null);
      this.renderer.render(scene, camera);
      return;
    }

    // Pass 1: Render 3D world into 16-bit Half-Float Linear HDR MSAA buffer
    this.renderer.setRenderTarget(this.hdrTarget);
    this.renderer.render(scene, camera);

    // Pass 2A: Karis-weighted spectral threshold + surround log-luminance (1/4 res)
    this.quadMesh.material = this.prefilterMat;
    this.renderer.setRenderTarget(this.bloomQuarter);
    this.renderer.render(this.quadScene, this.quadCam);

    // Pass 2B: Dual-Kawase downsample (1/8 res)
    this.quadMesh.material = this.kawaseDownMat;
    this.renderer.setRenderTarget(this.bloomEighth);
    this.renderer.render(this.quadScene, this.quadCam);

    // Pass 2C: Dual-Kawase tent upsample combining tight + wide optical bloom & smooth surround luminance
    this.quadMesh.material = this.kawaseUpMat;
    this.renderer.setRenderTarget(this.bloomUpQuarter);
    this.renderer.render(this.quadScene, this.quadCam);

    // Pass 3: KHDR Final Composite (K-LHE + K-Clarity + Optical Bloom + K-Filmic v1 + Dither -> Screen)
    this.compositeMat.uniforms.uCaveFactor.value = caveLightFactor;
    this.quadMesh.material = this.compositeMat;
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.quadScene, this.quadCam);
  }
}
