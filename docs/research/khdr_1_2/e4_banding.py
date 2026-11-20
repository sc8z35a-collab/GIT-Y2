"""E4: Sky-gradient banding vs. HDR scene-buffer format (RGBA16F vs R11G11B10F) and dithering strategy.
Uses the actual Kuroiso sky-dome gradient (src/main.ts createSkyDome) and KHDR tone mappers.
Metric: max |output - ideal| in 8-bit code values over the gradient (after the same final dither),
and 'step excess' = max jump between neighbouring output pixels (ideal ~1 code on a smooth gradient).
"""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
REPO = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
import numpy as np
import colorlib as C
from kfilmic3 import kfilmic_v3_soft

rng = np.random.default_rng(5)


def q_float(x, mant_bits):
    x = np.asarray(x, dtype=np.float64)
    out = np.zeros_like(x)
    pos = x > 0
    e = np.floor(np.log2(np.maximum(x[pos], 2.0 ** -14)))
    e = np.maximum(e, -14)  # subnormal region uses min exponent
    step = 2.0 ** (e - mant_bits)
    out[pos] = np.round(x[pos] / step) * step
    return out


def q_fp16(c):
    return q_float(c, 10)


def q_r11g11b10(c):
    return np.stack([q_float(c[..., 0], 6), q_float(c[..., 1], 6), q_float(c[..., 2], 5)], axis=-1)


def smooth(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)


hor = C.hex709('#b8d0e4')
mid = C.hex709('#7fb4e2')
zen = C.hex709('#437ec2')
n = 1200                                   # ~ vertical pixels of sky on a 1.5K landscape screen
elev = np.linspace(0.0, 0.85, n)
sky = hor * (1 - smooth(0, 0.28, elev))[:, None] + mid * smooth(0, 0.28, elev)[:, None]
sky = sky * (1 - smooth(0.24, 0.85, elev))[:, None] + zen * smooth(0.24, 0.85, elev)[:, None]

for tm_name, tm, expo in (('KFilmic_v2(1.1)', C.tm_kfilmic_v2, 1.2 * 1.04), ('KFilmic_v3', kfilmic_v3_soft, 0.85)):
    ideal = C.srgb_oetf(tm(sky * expo)) * 255.0
    print(f'=== {tm_name} (exposure {expo:.2f}) ===')
    for fmt_name, qf in (('fp32 (ideal)', lambda c: c), ('RGBA16F', q_fp16), ('R11G11B10F', q_r11g11b10)):
        for pre_dither in (False, True):
            if fmt_name.startswith('fp32') and pre_dither:
                continue
            res = []
            for trial in range(8):
                src = sky.copy()
                if pre_dither:  # dither at write time in the sky/material shader: +-0.5 ULP-ish relative noise
                    mant = np.array([6, 6, 5]) if fmt_name == 'R11G11B10F' else np.array([10, 10, 10])
                    src = src * (1 + (rng.random(src.shape) - 0.5) * 2.0 ** (-mant))
                buf = qf(src)
                out = C.srgb_oetf(tm(buf * expo)) * 255.0
                tri = (rng.random(out.shape) + rng.random(out.shape) - 1.0)
                final = np.clip(np.round(out + tri), 0, 255)
                ideal_final = np.clip(np.round(ideal + tri), 0, 255)
                err = np.abs(out - ideal).max()
                # visible banding proxy: low-pass (16 px box) the dithered output and compare to ideal low-pass
                k = np.ones(16) / 16
                lp = np.stack([np.convolve(final[:, c], k, 'valid') for c in range(3)], -1)
                lpi = np.stack([np.convolve(ideal[:, c], k, 'valid') for c in range(3)], -1)
                res.append((err, np.abs(lp - lpi).max()))
            r = np.array(res)
            print(f'  {fmt_name:12s} pre-dither={str(pre_dither):5s}  pre-quantization max err {r[:,0].max():5.2f} codes'
                  f' | perceived (16px low-pass) max err {r[:,1].mean():5.2f} codes')
