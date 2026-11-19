import * as THREE from 'three';
import { TextureCatalog } from '../core/textureCatalog';

export interface OceanSystem {
  group: THREE.Group;
  update: (elapsedSec: number) => void;
}

/**
 * Endless 32km x 32km surrounding ocean (あたり一面海・救助も来ない) built for both
 * sea-level coastal views and the 865m panoramic mountain summit horizon, with animated
 * multi-directional wave normals, Fresnel sky reflection, coastal turquoise shallows,
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
    uFogDensity: { value: 0.000175 },
  };

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
        float distFade = 1.0 - smoothstep(2600.0, 9500.0, length(wp.xz));
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

        float detailFade = 1.0 - smoothstep(320.0, 3800.0, dist);
        vec3 N = normalize(mix(vec3(0.0, 1.0, 0.0), waveNormal(vWorldPos.xz, uTime), 0.3 + 0.7 * detailFade));

        // Coastal shallow turquoise belt hugging the 2km x 5km island perimeter
        vec2 islandUV = vec2(vWorldPos.x / 1040.0, vWorldPos.z / 2520.0);
        float coastalMask = 1.0 - smoothstep(0.90, 1.44, length(islandUV));
        vec3 waterBase = mix(uDeepColor, uShallowColor, coastalMask * 0.72);

        float fresnel = pow(1.0 - max(dot(N, V), 0.0), 4.0);
        fresnel = clamp(0.08 + 0.88 * fresnel, 0.0, 1.0);
        vec3 color = mix(waterBase, uSkyColor, fresnel * 0.82);

        vec3 H = normalize(uSunDir + V);
        float spec = pow(max(dot(N, H), 0.0), 185.0);
        float broadSpec = pow(max(dot(N, H), 0.0), 22.0) * 0.14;
        color += vec3(1.0, 0.96, 0.86) * (spec * 1.3 + broadSpec);

        float foamNoise = sin(vWorldPos.x * 0.36 + uTime * 2.0) * cos(vWorldPos.z * 0.42 - uTime * 1.6);
        float crestFoam = smoothstep(0.18, 0.29, vWaveH + foamNoise * 0.05) * coastalMask * 0.38;
        color = mix(color, vec3(0.92, 0.96, 0.98), crestFoam);

        float fogFactor = 1.0 - exp(-pow(dist * uFogDensity, 2.0));
        color = mix(color, uFogColor, clamp(fogFactor, 0.0, 1.0));

        gl_FragColor = vec4(color, 1.0);
      }
    `,
    side: THREE.FrontSide,
  });

  // High-detail inner ocean hugging the 2km x 5km island + massive 32km horizon ocean for 865m summit!
  const innerGeo = new THREE.PlaneGeometry(5400, 8200, 128, 160);
  innerGeo.rotateX(-Math.PI / 2);
  const innerMesh = new THREE.Mesh(innerGeo, oceanMat);
  group.add(innerMesh);

  const outerGeo = new THREE.PlaneGeometry(34000, 34000, 24, 24);
  outerGeo.rotateX(-Math.PI / 2);
  const outerMesh = new THREE.Mesh(outerGeo, oceanMat);
  outerMesh.position.y = -0.22;
  group.add(outerMesh);

  // Offshore basalt sea stacks (離れ岩) flanking Driftwood Cove, Hidden Port & North Cliffs
  const rockMat = catalog.getMaterial('basalt_cliff', { repeatX: 3, repeatY: 3, roughness: 0.92, bumpScale: 0.08 });
  const stacks: Array<[number, number, number, number, number]> = [
    [-390, 2440, 32, 26, 26],
    [435, 2410, 38, 34, 28],
    [195, 2540, 22, 16, 18],
    [-980, -1820, 44, 38, 32], // Framing Northwest Hidden Port Cove!
    [-895, -2010, 36, 30, 28],
    [-1120, 240, 42, 36, 34],
    [1140, -320, 48, 44, 38],
    [-260, -2640, 52, 58, 40],
    [320, -2680, 56, 66, 44],
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
  };
}
