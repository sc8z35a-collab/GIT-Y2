import * as THREE from 'three';
import { TextureCatalog } from '../core/textureCatalog';

export interface OceanPhysicalParams {
  /** multiplies the legacy water-body colours (scene illumination x pre-exposure / legacy illumination) */
  illumScale: number;
  /** sky radiance reflected by the water (cd/m^2 x pre-exposure) */
  skyRadiance: THREE.Vector3;
  /** sun illuminance at the surface (lux x pre-exposure) for the physically bright specular glint */
  sunIlluminance: THREE.Vector3;
  fogColor: THREE.Color;
  fogDensity: number;
}

export interface OceanSystem {
  group: THREE.Group;
  update: (elapsedSec: number) => void;
  /** KHDR 1.2 hyper: switch between the legacy look and physically scaled radiance (null = legacy). */
  setPhysical: (params: OceanPhysicalParams | null) => void;
}

/**
 * Endless 42km x 42km surrounding ocean (あたり一面海・救助も来ない) built for both
 * sea-level coastal views and the 865m panoramic mountain summit horizon across the 3km x 6km island,
 * with animated multi-directional wave normals, Fresnel sky reflection, coastal turquoise shallows,
 * and offshore basalt sea stacks (離れ岩).
 */
export function buildOceanSystem(
  catalog: TextureCatalog,
  sunDirection: THREE.Vector3
): OceanSystem {
  const group = new THREE.Group();
  group.name = 'SurroundingPacificOcean';

  const uniforms = {
    uTime: { value: 0 },
    uSunDir: { value: sunDirection.clone().normalize() },
    uDeepColor: { value: new THREE.Color(0x0b2640) },
    uShallowColor: { value: new THREE.Color(0x1f6470) },
    uSkyColor: { value: new THREE.Color(0xa0c6e6) },
    uFogColor: { value: new THREE.Color(0xb8d0e4) },
    uFogDensity: { value: 0.000145 },
    uPhysical: { value: 0.0 },
    uIllumScale: { value: 1.0 },
    uSkyRadiance: { value: new THREE.Vector3(0.35, 0.56, 0.79) },
    uSunIrr: { value: new THREE.Vector3() },
  };
  const legacySky = uniforms.uSkyColor.value.clone();
  const legacyFog = uniforms.uFogColor.value.clone();

  const oceanMat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      uniform float uTime;
      varying vec3 vWorldPos;
      varying float vWaveH;

      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        float w1 = sin(wp.x * 0.04 + uTime * 1.15) * cos(wp.z * 0.03 - uTime * 0.85) * 0.24;
        float w2 = sin((wp.x * 0.085 - wp.z * 0.07) + uTime * 1.8) * 0.10;
        float distFade = 1.0 - smoothstep(3400.0, 11500.0, length(wp.xz));
        float wave = (w1 + w2) * distFade;
        wp.y += wave;
        vWaveH = wave;
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uSunDir;
      uniform vec3 uDeepColor;
      uniform vec3 uShallowColor;
      uniform vec3 uSkyColor;
      uniform vec3 uFogColor;
      uniform float uFogDensity;
      uniform float uPhysical;
      uniform float uIllumScale;
      uniform vec3 uSkyRadiance;
      uniform vec3 uSunIrr;

      varying vec3 vWorldPos;
      varying float vWaveH;

      vec3 waveNormal(vec2 p, float t) {
        float e = 0.28;
        float h0 = sin(p.x * 0.22 + t * 1.55) * 0.08 + cos(p.y * 0.29 - t * 1.3) * 0.07
                 + sin((p.x + p.y) * 0.52 + t * 2.2) * 0.035;
        float hx = sin((p.x + e) * 0.22 + t * 1.55) * 0.08 + cos(p.y * 0.29 - t * 1.3) * 0.07
                 + sin((p.x + e + p.y) * 0.52 + t * 2.2) * 0.035;
        float hz = sin(p.x * 0.22 + t * 1.55) * 0.08 + cos((p.y + e) * 0.29 - t * 1.3) * 0.07
                 + sin((p.x + p.y + e) * 0.52 + t * 2.2) * 0.035;
        return normalize(vec3(-(hx - h0) / e, 1.0, -(hz - h0) / e));
      }

      void main() {
        vec3 viewVec = cameraPosition - vWorldPos;
        float dist = length(viewVec);
        vec3 V = viewVec / max(dist, 0.001);

        float detailFade = 1.0 - smoothstep(180.0, 1650.0, dist);
        vec3 N = normalize(mix(vec3(0.0, 1.0, 0.0), waveNormal(vWorldPos.xz, uTime), 0.03 + 0.97 * detailFade));

        // Coastal shallow turquoise belt hugging the 3km x 6km Rias island perimeter
        vec2 islandUV = vec2(vWorldPos.x / 1540.0, vWorldPos.z / 3040.0);
        float coastalMask = 1.0 - smoothstep(0.88, 1.42, length(islandUV));
        vec3 waterBase = mix(uDeepColor, uShallowColor, coastalMask * 0.74) * uIllumScale;

        float fresnel = pow(1.0 - max(dot(N, V), 0.0), 4.0);
        fresnel = clamp(0.08 + 0.88 * fresnel, 0.0, 1.0);
        vec3 skyRefl = uPhysical > 0.5 ? uSkyRadiance : uSkyColor;
        vec3 color = mix(waterBase, skyRefl, fresnel * 0.82);

        vec3 H = normalize(uSunDir + V);
        float NdotH = max(dot(N, H), 0.0);
        if (uPhysical > 0.5) {
          // KHDR 1.2 hyper: energy-normalised Blinn-Phong glint lit by the real sun illuminance + Schlick Fresnel
          float VdotH = max(dot(V, H), 0.0);
          float F = 0.02 + 0.98 * pow(1.0 - VdotH, 5.0);
          float D = (193.0 / 25.1327) * pow(NdotH, 185.0) + (30.0 / 25.1327) * pow(NdotH, 22.0) * 0.3;
          color += min(uSunIrr * (F * D * max(dot(N, uSunDir), 0.0) * 0.25), vec3(20000.0));
        } else {
          float spec = pow(NdotH, 185.0);
          float broadSpec = pow(NdotH, 22.0) * 0.14;
          color += vec3(1.0, 0.96, 0.86) * (spec * 1.3 + broadSpec);
        }

        float foamNoise = sin(vWorldPos.x * 0.36 + uTime * 2.0) * cos(vWorldPos.z * 0.42 - uTime * 1.6);
        float foamFade = 1.0 - smoothstep(160.0, 820.0, dist);
        float crestFoam = smoothstep(0.18, 0.29, vWaveH + foamNoise * 0.05) * coastalMask * foamFade * 0.36;
        color = mix(color, vec3(0.92, 0.96, 0.98) * (uPhysical > 0.5 ? max(uIllumScale * 0.5, 0.0) : 1.0), crestFoam);

        float fogFactor = 1.0 - exp(-pow(dist * uFogDensity, 2.0));
        color = mix(color, uFogColor, clamp(fogFactor, 0.0, 1.0));

        gl_FragColor = vec4(color, 1.0);
      }
    `,
    side: THREE.FrontSide,
  });

  // High-detail inner ocean hugging the 3km x 6km island + massive 42km horizon ocean for 865m summit!
  const innerGeo = new THREE.PlaneGeometry(7600, 10600, 160, 200);
  innerGeo.rotateX(-Math.PI / 2);
  const innerMesh = new THREE.Mesh(innerGeo, oceanMat);
  group.add(innerMesh);

  const outerGeo = new THREE.PlaneGeometry(42000, 42000, 28, 28);
  outerGeo.rotateX(-Math.PI / 2);
  const outerMesh = new THREE.Mesh(outerGeo, oceanMat);
  outerMesh.position.y = -0.70;
  group.add(outerMesh);

  // Offshore basalt sea stacks (離れ岩) framing Driftwood Bay, Twin South Capes, NW Rias Fjord, East/West Coves & Onigasaki!
  const rockMat = catalog.getMaterial('basalt_cliff', { repeatX: 3, repeatY: 3, roughness: 0.92, bumpScale: 0.08 });
  const stacks: Array<[number, number, number, number, number]> = [
    [-380, 2500, 32, 26, 26],   // Driftwood Bay West guardian rock
    [435, 2470, 38, 34, 28],    // Driftwood Bay East guardian rock
    [185, 2640, 22, 16, 18],    // Outer Driftwood reef stack
    [-1170, 2790, 46, 50, 36],  // Cape Nishikurosaki (西黒崎) offshore needle
    [1210, 2820, 48, 54, 38],   // Cape Higashishirahama (東白浜岬) offshore needle
    [-1120, -2060, 46, 42, 34], // Framing Northwest Rias Fjord mouth!
    [-920, -2380, 38, 36, 30],  // Northern Rias channel sea stack
    [-1490, 740, 44, 42, 36],   // West Basalt Bay (西磯湾) stack
    [-1520, -280, 48, 46, 38],  // West Byobu offshore crag
    [1460, -180, 50, 48, 38],   // East Sea-Cliff Cove (東磯入江) stack
    [1490, 620, 44, 40, 34],    // East Cliff southern reef rock
    [-290, -2960, 54, 62, 42],  // West Onigasaki (鬼ヶ崎) volcanic spire
    [340, -2990, 58, 68, 46],   // East Onigasaki volcanic spire
    [15, -2890, 28, 34, 24],    // North Caldera breach sea needle
  ];

  for (let i = 0; i < stacks.length; i++) {
    const [sx, sz, rx, ry, rz] = stacks[i];
    const geo = new THREE.DodecahedronGeometry(1.0, 1);
    const pos = geo.attributes.position;
    for (let v = 0; v < pos.count; v++) {
      const vx = pos.getX(v);
      const vy = pos.getY(v);
      const vz = pos.getZ(v);
      const j = 0.8 + 0.34 * Math.sin(vx * 4.1 + i * 2.1) * Math.cos(vz * 3.7 - vy * 2.8);
      pos.setXYZ(v, vx * rx * j, vy * ry * (vy > 0 ? 1.15 : 0.7), vz * rz * j);
    }
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, rockMat);
    m.position.set(sx, ry * 0.25, sz);
    m.rotation.y = i * 1.17;
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
  }

  return {
    group,
    update(elapsedSec: number) {
      uniforms.uTime.value = elapsedSec;
    },
    setPhysical(params: OceanPhysicalParams | null) {
      if (!params) {
        uniforms.uPhysical.value = 0.0;
        uniforms.uIllumScale.value = 1.0;
        uniforms.uSkyColor.value.copy(legacySky);
        uniforms.uFogColor.value.copy(legacyFog);
        uniforms.uFogDensity.value = 0.000145;
        return;
      }
      uniforms.uPhysical.value = 1.0;
      uniforms.uIllumScale.value = params.illumScale;
      uniforms.uSkyRadiance.value.copy(params.skyRadiance);
      uniforms.uSunIrr.value.copy(params.sunIlluminance);
      uniforms.uFogColor.value.copy(params.fogColor);
      uniforms.uFogDensity.value = params.fogDensity;
    },
  };
}
