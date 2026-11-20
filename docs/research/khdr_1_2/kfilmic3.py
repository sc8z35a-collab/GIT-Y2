"""Prototype of the proposed KHDR 1.2 'K-Filmic v3' display transform (research only, not product code).

Design:
  1. Tone curve on luminance Y only (GT-style: toe + linear mid + convergent shoulder, peak-parameterized).
  2. Scale RGB by Y_out / Y_in  -> preserves RGB ratios -> preserves Oklab hue exactly (cube-root is homogeneous).
  3. Highlight path-to-white: reduce Oklab chroma at constant Oklab L and h as Y_out approaches peak.
  4. Gamut compression: reduce Oklab chroma at constant L,h until inside target gamut (Rec.709 or P3), with a soft knee.
Inputs are exposed scene-linear Rec.709 where 1.0 == diffuse/paper white.
"""
import numpy as np
import colorlib as C


class GTCurve:
    """GT Tone Mapping V2 shape in paper-white-relative units (peak P >= 1)."""

    def __init__(self, peak=1.0, alpha=0.25, mid=0.215, lin=0.444, toe=1.28):
        self.P, self.mid, self.lin, self.toe = peak, mid, lin, toe
        k = (lin - 1.0) / (alpha - 1.0)
        self.kA = peak * lin + peak * k
        self.kB = -peak * k * np.exp(lin / k)
        self.kC = -1.0 / (k * peak)

    def __call__(self, x):
        x = np.maximum(np.asarray(x, dtype=np.float64), 0.0)
        t = np.clip(x / self.mid, 0.0, 1.0)
        wl = t * t * (3 - 2 * t)
        toe_m = self.mid * np.power(x / self.mid, self.toe)
        lin_part = (1 - wl) * toe_m + wl * x
        sh = self.kA + self.kB * np.exp(x * self.kC)
        return np.minimum(np.where(x < self.lin * self.P, lin_part, sh), self.P)


def _oklab_to_709(lab):
    M2inv = np.linalg.inv(C._OK_M2)
    M1inv = np.linalg.inv(C._OK_M1)
    lms_ = C.apply_mat(M2inv, lab)
    return C.apply_mat(M1inv, lms_ ** 3)


def _in_gamut(rgb, eps=1e-6):
    return np.all((rgb >= -eps) & (rgb <= 1.0 + eps), axis=-1)


def kfilmic_v3(x709, peak=1.0, desat_ev=3.0, gamut='709', twist=0.0, curve=None):
    """Return display-linear RGB in the requested gamut (709 or P3), 1.0 == peak (SDR white)."""
    x = np.clip(np.asarray(x709, dtype=np.float64), 0.0, None)
    curve = curve or GTCurve(peak=peak)
    Y = C.luma709(x)
    Yo = curve(Y)
    ratio = np.where(Y > 1e-9, Yo / np.maximum(Y, 1e-9), 0.0)
    col = x * ratio[..., None]                     # hue-exact (Oklab) luminance mapping
    lab = C.oklab(col)
    L = lab[..., 0]
    Cc = np.hypot(lab[..., 1], lab[..., 2])
    h = np.arctan2(lab[..., 2], lab[..., 1])
    # 3. path-to-white: chroma fades as Yo approaches the peak (perceptual highlight desaturation)
    # fade measured on the INPUT overexposure beyond the linear section (film-like): starts when
    # the scene luminance passes lin*peak and reaches white desat_ev stops above it
    over = np.log2(np.maximum(Y, 1e-9) / (curve.lin * peak))
    t = np.clip(over / desat_ev, 0.0, 1.0)
    fade = 1.0 - t * t * (3 - 2 * t)
    Cc = Cc * fade
    # 4. constant-L,h chroma reduction into the target gamut (bisection, 18 iterations)
    to_target = (lambda c: C.apply_mat(C.M709_TO_P3, c)) if gamut == 'P3' else (lambda c: c)
    lo = np.zeros_like(Cc)
    hi = Cc.copy()
    test = np.stack([L, Cc * np.cos(h), Cc * np.sin(h)], axis=-1)
    ok = _in_gamut(to_target(_oklab_to_709(test)) / peak)
    lo = np.where(ok, Cc, lo)
    for _ in range(18):
        mid = 0.5 * (lo + hi)
        t = np.stack([L, mid * np.cos(h), mid * np.sin(h)], axis=-1)
        okm = _in_gamut(to_target(_oklab_to_709(t)) / peak)
        lo = np.where(okm, mid, lo)
        hi = np.where(okm, hi, mid)
    Cf = np.where(ok, Cc, lo)
    out_lab = np.stack([L, Cf * np.cos(h), Cf * np.sin(h)], axis=-1)
    out709 = _oklab_to_709(out_lab)
    if twist > 0:  # optional GT7-style 'camera-like' per-channel twist blend for emissives
        pc = np.minimum(curve(x), peak)
        out709 = (1 - twist) * out709 + twist * pc
    out = to_target(out709)
    return np.clip(out / peak, 0.0, 1.0)


def _cmax_bisect(L, h, peak, to_target, hi0=0.5, iters=22):
    lo = np.zeros_like(L)
    hi = np.full_like(L, hi0)
    for _ in range(iters):
        mid = 0.5 * (lo + hi)
        t = np.stack([L, mid * np.cos(h), mid * np.sin(h)], axis=-1)
        okm = _in_gamut(to_target(_oklab_to_709(t)) / peak)
        lo = np.where(okm, mid, lo)
        hi = np.where(okm, hi, mid)
    return lo


def kfilmic_v3_soft(x709, peak=1.0, desat_ev=3.0, gamut='709', knee=0.75, curve=None):
    """Variant with C1-smooth soft-knee gamut compression: C_out = Cmax * s(C/Cmax)."""
    x = np.clip(np.asarray(x709, dtype=np.float64), 0.0, None)
    curve = curve or GTCurve(peak=peak)
    Y = C.luma709(x)
    Yo = curve(Y)
    ratio = np.where(Y > 1e-9, Yo / np.maximum(Y, 1e-9), 0.0)
    lab = C.oklab(x * ratio[..., None])
    L = lab[..., 0]
    Cc = np.hypot(lab[..., 1], lab[..., 2])
    h = np.arctan2(lab[..., 2], lab[..., 1])
    over = np.log2(np.maximum(Y, 1e-9) / (curve.lin * peak))
    t = np.clip(over / desat_ev, 0.0, 1.0)
    Cc = Cc * (1.0 - t * t * (3 - 2 * t))
    to_target = (lambda c: C.apply_mat(C.M709_TO_P3, c)) if gamut == 'P3' else (lambda c: c)
    Lc = np.clip(L, 0.0, 0.99999 * np.cbrt(1.0))
    cmax = _cmax_bisect(Lc, h, peak, to_target)
    r = Cc / np.maximum(cmax, 1e-6)
    # soft knee: identity below knee, smooth asymptote to 1.0 above (C1 continuous)
    k = knee
    comp = np.where(r <= k, r, k + (1 - k) * np.tanh((r - k) / (1 - k)))
    Cf = comp * cmax
    out709 = _oklab_to_709(np.stack([L, Cf * np.cos(h), Cf * np.sin(h)], axis=-1))
    return np.clip(to_target(out709) / peak, 0.0, 1.0)
