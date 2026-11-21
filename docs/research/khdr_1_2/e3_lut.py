"""E3: 3D-LUT baking accuracy for the KHDR 1.2 display transform (K-Filmic v3 prototype, SDR Rec.709).
Compares LUT sizes and shaper functions; trilinear interpolation with GPU-like 8-bit sub-texel weights;
LUT entries stored as fp16 (RGBA16F). Error measured in final sRGB 8-bit code values.
"""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
REPO = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
import numpy as np
import colorlib as C
from kfilmic3 import kfilmic_v3

rng = np.random.default_rng(7)


def make_shaper(kind):
    if kind == 'log2[-12,+8]':
        lo, hi = -12.0, 8.0
        enc = lambda x: np.clip((np.log2(np.maximum(x, 2.0 ** lo)) - lo) / (hi - lo), 0, 1)
        dec = lambda u: 2.0 ** (lo + u * (hi - lo))
    elif kind == 'pow4[0,256]':
        xmax = 256.0
        enc = lambda x: np.clip(np.power(np.maximum(x, 0) / xmax, 0.25), 0, 1)
        dec = lambda u: xmax * u ** 4
    else:
        raise ValueError(kind)
    return enc, dec


def bake(N, dec, tm):
    g = np.linspace(0, 1, N)
    R, G, B = np.meshgrid(g, g, g, indexing='ij')
    pts = np.stack([dec(R), dec(G), dec(B)], axis=-1).reshape(-1, 3)
    out = tm(pts).reshape(N, N, N, 3)
    enc_out = C.srgb_oetf(out)                      # store display-encoded values (better for interpolation)
    return enc_out.astype(np.float16).astype(np.float64)


def trilinear(lut, u, wbits=8):
    N = lut.shape[0]
    p = u * (N - 1)
    i0 = np.clip(np.floor(p).astype(int), 0, N - 2)
    f = p - i0
    if wbits:
        f = np.round(f * (1 << wbits)) / (1 << wbits)
    out = 0
    for dx in (0, 1):
        wx = f[:, 0] if dx else 1 - f[:, 0]
        for dy in (0, 1):
            wy = f[:, 1] if dy else 1 - f[:, 1]
            for dz in (0, 1):
                wz = f[:, 2] if dz else 1 - f[:, 2]
                out = out + (wx * wy * wz)[:, None] * lut[i0[:, 0] + dx, i0[:, 1] + dy, i0[:, 2] + dz]
    return out


# Test set 1: random scene colors, luminance log-uniform -10..+6 EV around paper white, random chromaticity
n = 60000
chrom = rng.dirichlet([1.2, 1.2, 1.2], size=n)
chrom = chrom / C.luma709(chrom)[:, None]
lum = 2.0 ** rng.uniform(-10, 6, size=n)
test = chrom * lum[:, None]
# Test set 2: smooth ramps (gray and sky gradient) for banding
ramp_t = np.linspace(0, 1, 4096)
gray = (2.0 ** (-8 + 12 * ramp_t))[:, None] * np.ones(3)
horizon, zenith = np.array([0.48, 0.63, 0.78]), np.array([0.056, 0.21, 0.54])
sky = (horizon[None, :] * (1 - ramp_t[:, None]) + zenith[None, :] * ramp_t[:, None]) * 1.4

ref = C.srgb_oetf(kfilmic_v3(test)) * 255
ref_gray = C.srgb_oetf(kfilmic_v3(gray)) * 255
ref_sky = C.srgb_oetf(kfilmic_v3(sky)) * 255

print(f'{"shaper":14s} {"N":>3s} {"MB(16F)":>8s} {"max err":>8s} {"p99":>6s} {"mean":>6s} | {"gray max":>8s} {"sky max":>8s}')
for kind in ('log2[-12,+8]', 'pow4[0,256]'):
    enc, dec = make_shaper(kind)
    for N in (17, 25, 33, 48, 65):
        lut = bake(N, dec, kfilmic_v3)
        approx = trilinear(lut, enc(test)) * 255
        e = np.abs(approx - ref).max(axis=1)
        ag = trilinear(lut, enc(gray)) * 255
        asky = trilinear(lut, enc(sky)) * 255
        eg = np.abs(ag - ref_gray).max()
        es = np.abs(asky - ref_sky).max()
        mb = N ** 3 * 8 / 1e6
        print(f'{kind:14s} {N:3d} {mb:8.2f} {e.max():8.2f} {np.percentile(e,99):6.2f} {e.mean():6.3f} | {eg:8.2f} {es:8.2f}')
