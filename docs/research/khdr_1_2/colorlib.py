"""Shared color / tone-mapping library for KHDR 1.2 research experiments.

All tone mappers take linear Rec.709 (sRGB primaries) scene values (already exposed)
as numpy arrays of shape (..., 3) and return display-linear Rec.709 in [0, 1].
"""
import numpy as np

# ---------------------------------------------------------------------------
# Basic transfer functions
# ---------------------------------------------------------------------------

def srgb_oetf(c):
    c = np.clip(c, 0.0, None)
    return np.where(c <= 0.0031308, c * 12.92, 1.055 * np.power(c, 1.0 / 2.4) - 0.055)


def srgb_eotf(v):
    v = np.asarray(v, dtype=np.float64)
    return np.where(v <= 0.04045, v / 12.92, np.power((v + 0.055) / 1.055, 2.4))


def luma709(c):
    return c[..., 0] * 0.2126 + c[..., 1] * 0.7152 + c[..., 2] * 0.0722


def glsl_mat3(*cols9):
    """GLSL mat3(a..i) is column-major. Return numpy row-major matrix M so that M @ v == GLSL M * v."""
    a = np.array(cols9, dtype=np.float64).reshape(3, 3)  # rows are GLSL columns
    return a.T


def apply_mat(M, c):
    return np.einsum('ij,...j->...i', M, c)

# ---------------------------------------------------------------------------
# Color space matrices
# ---------------------------------------------------------------------------
M709_TO_XYZ = np.array([
    [0.4123908, 0.3575843, 0.1804808],
    [0.2126390, 0.7151687, 0.0721923],
    [0.0193308, 0.1191948, 0.9505322]])
M2020_TO_XYZ = np.array([
    [0.6369580, 0.1446169, 0.1688810],
    [0.2627002, 0.6779981, 0.0593017],
    [0.0000000, 0.0280727, 1.0609851]])
MP3_TO_XYZ = np.array([
    [0.4865709, 0.2656677, 0.1982173],
    [0.2289746, 0.6917385, 0.0792869],
    [0.0000000, 0.0451134, 1.0439444]])
M709_TO_2020 = np.linalg.inv(M2020_TO_XYZ) @ M709_TO_XYZ
M2020_TO_709 = np.linalg.inv(M709_TO_2020)
M709_TO_P3 = np.linalg.inv(MP3_TO_XYZ) @ M709_TO_XYZ
MP3_TO_709 = np.linalg.inv(M709_TO_P3)

# ---------------------------------------------------------------------------
# Oklab (Ottosson 2020) from linear sRGB
# ---------------------------------------------------------------------------
_OK_M1 = np.array([
    [0.4122214708, 0.5363325363, 0.0514459929],
    [0.2119034982, 0.6806995451, 0.1073969566],
    [0.0883024619, 0.2817188376, 0.6299787005]])
_OK_M2 = np.array([
    [0.2104542553, 0.7936177850, -0.0040720468],
    [1.9779984951, -2.4285922050, 0.4505937099],
    [0.0259040371, 0.7827717662, -0.8086757660]])


def oklab(c709):
    lms = apply_mat(_OK_M1, np.clip(c709, 0.0, None))
    lms_ = np.cbrt(lms)
    return apply_mat(_OK_M2, lms_)


def oklch(c709):
    lab = oklab(c709)
    C = np.hypot(lab[..., 1], lab[..., 2])
    h = np.degrees(np.arctan2(lab[..., 2], lab[..., 1]))
    return lab[..., 0], C, h

# ---------------------------------------------------------------------------
# ICtCp (ITU-R BT.2100) from absolute linear Rec.2020 (cd/m^2)
# ---------------------------------------------------------------------------
_PQ_M1 = 0.1593017578125
_PQ_M2 = 78.84375
_PQ_C1 = 0.8359375
_PQ_C2 = 18.8515625
_PQ_C3 = 18.6875


def pq_inv_eotf(nits):
    y = np.clip(np.asarray(nits, dtype=np.float64) / 10000.0, 0.0, None)
    ym = np.power(y, _PQ_M1)
    return np.power((_PQ_C1 + _PQ_C2 * ym) / (1.0 + _PQ_C3 * ym), _PQ_M2)


def pq_eotf(n):
    n = np.clip(np.asarray(n, dtype=np.float64), 0.0, 1.0)
    np_ = np.power(n, 1.0 / _PQ_M2)
    l = np.clip(np_ - _PQ_C1, 0.0, None) / (_PQ_C2 - _PQ_C3 * np_)
    return np.power(l, 1.0 / _PQ_M1) * 10000.0


def ictcp_from_2020_nits(rgb2020_nits):
    r, g, b = rgb2020_nits[..., 0], rgb2020_nits[..., 1], rgb2020_nits[..., 2]
    l = (1688 * r + 2146 * g + 262 * b) / 4096
    m = (683 * r + 2951 * g + 462 * b) / 4096
    s = (99 * r + 309 * g + 3688 * b) / 4096
    lp, mp, sp = pq_inv_eotf(l), pq_inv_eotf(m), pq_inv_eotf(s)
    I = 0.5 * lp + 0.5 * mp
    Ct = (6610 * lp - 13613 * mp + 7003 * sp) / 4096
    Cp = (17933 * lp - 17390 * mp - 543 * sp) / 4096
    return np.stack([I, Ct, Cp], axis=-1)


def delta_e_itp(rgb709_nits_a, rgb709_nits_b):
    """BT.2124 Delta E ITP (x720 scale) between two absolute-luminance Rec.709 colors."""
    a = ictcp_from_2020_nits(apply_mat(M709_TO_2020, rgb709_nits_a))
    b = ictcp_from_2020_nits(apply_mat(M709_TO_2020, rgb709_nits_b))
    d = a - b
    return 720.0 * np.sqrt(d[..., 0] ** 2 + (0.5 * d[..., 1]) ** 2 + d[..., 2] ** 2)

# ---------------------------------------------------------------------------
# Tone mappers
# ---------------------------------------------------------------------------
KHDR_INSET = glsl_mat3(0.85662715, 0.13731897, 0.11189821,
                       0.09512124, 0.76124199, 0.07679942,
                       0.04825161, 0.10143904, 0.81130236)
KHDR_OUTSET = glsl_mat3(1.12710058, -0.14132976, -0.14132976,
                        -0.11060664, 1.15782370, -0.11060664,
                        -0.01649394, -0.01649394, 1.25193640)


def tm_kfilmic_v1(x):
    """KHDR 1.0 K-Filmic v1 (exact port)."""
    x = np.clip(x, 0.0, None)
    w = np.clip(apply_mat(KHDR_INSET, x), 0.0, None) * 0.62
    a = w * (w * 1.16 + 0.025)
    b = w * (w * 1.04 + 0.48) + 0.22
    mapped = np.clip(a / b, 0.0, 1.0)
    return np.clip(apply_mat(KHDR_OUTSET, mapped), 0.0, 1.0)


def tm_kfilmic_v2(x):
    """KHDR 1.1 K-Filmic v2 (exact port of src/core/khdrPipeline.ts composite)."""
    x = np.clip(np.asarray(x, dtype=np.float64), 0.0, None)
    L = luma709(x)
    safeL = np.maximum(L, 1e-5)
    w = L * 0.68
    tL = np.clip((w * (w * 1.13 + 0.046)) / (w * (w * 1.07 + 0.45) + 0.19), 0.0, 1.0)
    col = x * (tL / safeL)[..., None]
    sd = np.clip((L - 1.15) / (L + 2.65), 0.0, 0.82)[..., None]
    col = col * (1 - sd) + tL[..., None] * sd
    mx = np.max(col, axis=-1)
    k = (1.0 - tL) / np.maximum(mx - tL, 1e-5)
    over = (mx > 1.0)[..., None]
    col = np.where(over, tL[..., None] + (col - tL[..., None]) * k[..., None], col)
    out = np.clip(col, 0.0, 1.0)
    out = np.where((L < 1e-5)[..., None], 0.0, out)
    return out


def tm_aces_three(x, exposure=1.0):
    ACESIn = glsl_mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777)
    ACESOut = glsl_mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602)
    c = np.asarray(x, dtype=np.float64) * exposure / 0.6
    c = apply_mat(ACESIn, c)
    a = c * (c + 0.0245786) - 0.000090537
    b = c * (0.983729 * c + 0.4329510) + 0.238081
    c = a / b
    return np.clip(apply_mat(ACESOut, c), 0.0, 1.0)


def tm_agx_three(x):
    L709_2020 = glsl_mat3(0.6274, 0.0691, 0.0164, 0.3293, 0.9195, 0.0880, 0.0433, 0.0113, 0.8956)
    L2020_709 = glsl_mat3(1.6605, -0.1246, -0.0182, -0.5876, 1.1329, -0.1006, -0.0728, -0.0083, 1.1187)
    Inset = glsl_mat3(0.856627153315983, 0.137318972929847, 0.11189821299995,
                      0.0951212405381588, 0.761241990602591, 0.0767994186031903,
                      0.0482516061458583, 0.101439036467562, 0.811302368396859)
    Outset = glsl_mat3(1.1271005818144368, -0.1413297634984383, -0.14132976349843826,
                       -0.11060664309660323, 1.157823702216272, -0.11060664309660294,
                       -0.016493938717834573, -0.016493938717834257, 1.2519364065950405)
    mn, mxv = -12.47393, 4.026069
    c = apply_mat(L709_2020, np.asarray(x, dtype=np.float64))
    c = apply_mat(Inset, c)
    c = np.log2(np.maximum(c, 1e-10))
    c = np.clip((c - mn) / (mxv - mn), 0.0, 1.0)
    x2 = c * c
    x4 = x2 * x2
    c = 15.5 * x4 * x2 - 40.14 * x4 * c + 31.96 * x4 - 6.868 * x2 * c + 0.4298 * x2 + 0.1191 * c - 0.00232
    c = apply_mat(Outset, c)
    c = np.power(np.maximum(c, 0.0), 2.2)
    c = apply_mat(L2020_709, c)
    return np.clip(c, 0.0, 1.0)


def tm_neutral_three(x):
    c = np.array(x, dtype=np.float64, copy=True)
    start = 0.8 - 0.04
    desat = 0.15
    xm = np.min(c, axis=-1)
    offset = np.where(xm < 0.08, xm - 6.25 * xm * xm, 0.04)
    c = c - offset[..., None]
    peak = np.max(c, axis=-1)
    d = 1.0 - start
    newPeak = 1.0 - d * d / (peak + d - start)
    scaled = c * (newPeak / np.maximum(peak, 1e-9))[..., None]
    g = 1.0 - 1.0 / (desat * (peak - newPeak) + 1.0)
    comp = scaled * (1 - g[..., None]) + newPeak[..., None] * g[..., None]
    out = np.where((peak < start)[..., None], c, comp)
    return np.clip(out, 0.0, 1.0)

# --- GT7 tone mapping (port of Polyphony Digital MIT sample, ICtCp UCS) -------------
# The GT7 class below is a Python port of "Sample implementation of the GT7 Tone Mapping operator"
# (SIGGRAPH 2025 Physically Based Shading course supplemental, gt7_tone_mapping.cpp, v1.0 2025-08-10).
#
# MIT License
#
# Copyright (c) 2025 Polyphony Digital Inc.
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
REF_LUM = 100.0          # 1.0 frame-buffer = 100 cd/m^2
SDR_PAPER_WHITE = 250.0  # cd/m^2


def _gt_smoothstep(x, e0, e1):
    t = np.clip((x - e0) / (e1 - e0), 0.0, 1.0)
    return t * t * (3.0 - 2.0 * t)


class GT7:
    def __init__(self, peak_nits=None, blend=0.6, fade_start=0.98, fade_end=1.16):
        if peak_nits is None:  # SDR
            self.sdr_corr = 1.0 / (SDR_PAPER_WHITE / REF_LUM)
            target = SDR_PAPER_WHITE
        else:
            self.sdr_corr = 1.0
            target = peak_nits
        self.target_fb = target / REF_LUM
        P = self.target_fb
        alpha, mid, lin, toe = 0.25, 0.538, 0.444, 1.280
        self.P, self.mid, self.lin, self.toe = P, mid, lin, toe
        k = (lin - 1.0) / (alpha - 1.0)
        self.kA = P * lin + P * k
        self.kB = -P * k * np.exp(lin / k)
        self.kC = -1.0 / (k * P)
        self.blend, self.fs, self.fe = blend, fade_start, fade_end
        self.target_I = self._ucs(np.array([P, P, P]))[0]

    def curve(self, x):
        x = np.asarray(x, dtype=np.float64)
        wl = _gt_smoothstep(x, 0.0, self.mid)
        wt = 1.0 - wl
        shoulder = self.kA + self.kB * np.exp(x * self.kC)
        toe_m = self.mid * np.power(np.maximum(x, 0.0) / self.mid, self.toe)
        lin_part = wt * toe_m + wl * x
        out = np.where(x < self.lin * self.P, lin_part, shoulder)
        return np.where(x < 0.0, 0.0, out)

    def _ucs(self, rgb2020_fb):
        return ictcp_from_2020_nits(np.asarray(rgb2020_fb) * REF_LUM)

    def _ucs_inv(self, ictcp):
        I, Ct, Cp = ictcp[..., 0], ictcp[..., 1], ictcp[..., 2]
        l = I + 0.00860904 * Ct + 0.11103 * Cp
        m = I - 0.00860904 * Ct - 0.11103 * Cp
        s = I + 0.560031 * Ct - 0.320627 * Cp
        L, M, S = pq_eotf(l) / REF_LUM, pq_eotf(m) / REF_LUM, pq_eotf(s) / REF_LUM
        r = np.maximum(3.43661 * L - 2.50645 * M + 0.0698454 * S, 0.0)
        g = np.maximum(-0.79133 * L + 1.9836 * M - 0.192271 * S, 0.0)
        b = np.maximum(-0.0259499 * L - 0.0989137 * M + 1.12486 * S, 0.0)
        return np.stack([r, g, b], axis=-1)

    def apply_2020(self, rgb2020_fb):
        ucs = self._ucs(rgb2020_fb)
        skew = self.curve(rgb2020_fb)
        skew_ucs = self._ucs(skew)
        chroma = 1.0 - _gt_smoothstep(ucs[..., 0] / self.target_I, self.fs, self.fe)
        scaled = np.stack([skew_ucs[..., 0], ucs[..., 1] * chroma, ucs[..., 2] * chroma], axis=-1)
        scaled_rgb = self._ucs_inv(scaled)
        blended = (1.0 - self.blend) * skew + self.blend * scaled_rgb
        return self.sdr_corr * np.minimum(blended, self.target_fb)

    def __call__(self, x709_scene, scene_to_fb=SDR_PAPER_WHITE / REF_LUM):
        """x709_scene: exposed scene-linear (1.0 == SDR paper white). Returns display-linear Rec.709.
        SDR: [0,1] with 1.0 = paper white.  HDR: relative to paper white (can exceed 1)."""
        rgb2020 = apply_mat(M709_TO_2020, np.clip(x709_scene, 0.0, None) * scene_to_fb)
        out2020 = self.apply_2020(rgb2020)
        out709 = apply_mat(M2020_TO_709, out2020)
        if self.sdr_corr != 1.0:
            return np.clip(out709, 0.0, 1.0)
        return np.clip(out709, 0.0, None) / (SDR_PAPER_WHITE / REF_LUM)


def tm_gt7_sdr(x):
    return _GT7_SDR(x)


_GT7_SDR = GT7(None)

TONEMAPPERS = {
    'KFilmic_v1(1.0)': tm_kfilmic_v1,
    'KFilmic_v2(1.1)': tm_kfilmic_v2,
    'ACES(three)': tm_aces_three,
    'AgX(three)': tm_agx_three,
    'PBRNeutral': tm_neutral_three,
    'GT7_SDR': tm_gt7_sdr,
}


def hex709(h):
    h = h.lstrip('#')
    v = np.array([int(h[i:i + 2], 16) for i in (0, 2, 4)], dtype=np.float64) / 255.0
    return srgb_eotf(v)
