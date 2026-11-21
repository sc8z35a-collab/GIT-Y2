"""E7: Auto-exposure metering stability while panning (KHDR 1.1 sparse 16-tap metering vs full reduction vs histogram).
Panorama: procedural Kuroiso-like HDR strip (sky gradient, sun disc, white plaster houses, cedar forest, grass, sea).
Metric: frame-to-frame change of the metered target (EV) at constant pan speed -> 'pumping' risk.
"""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
REPO = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
import numpy as np
import colorlib as C

rng = np.random.default_rng(2)
PW, PH = 6144, 360
VW, VH = 640, 360
pano = np.zeros((PH, PW))
yy, xx = np.mgrid[0:PH, 0:PW]
horizon = 150 + 18 * np.sin(xx / 410.0) + 10 * np.sin(xx / 97.0)
sky = yy < horizon
pano[sky] = 0.55 + 0.6 * (1 - yy[sky] / 150.0)                     # sky luminance gradient
pano[~sky] = 0.08 * (1 + 0.6 * rng.random((~sky).sum()))           # grass / forest ground (sunlit + shade mix)
# cedar forest dark bands
for k in range(40):
    cx, w = rng.integers(0, PW), rng.integers(60, 300)
    m = (~sky) & (np.abs(xx - cx) < w) & (yy < horizon + 80)
    pano[m] = 0.018 * (1 + rng.random(m.sum()))
# white plaster houses (sunlit) and shaded facades
for k in range(26):
    cx, w, h = rng.integers(0, PW), rng.integers(20, 70), rng.integers(30, 80)
    top = horizon[0, cx % PW] + rng.integers(-10, 40)
    m = (np.abs(xx - cx) < w) & (yy > top) & (yy < top + h)
    pano[m] = 0.85 if rng.random() < 0.6 else 0.06
# sun disc + glints (tiny, extremely bright)
sun_m = (xx - 3000) ** 2 + (yy - 60) ** 2 < 6 ** 2
pano[sun_m] = 3000.0
for k in range(60):
    gx, gy = rng.integers(0, PW), rng.integers(200, PH)
    pano[gy, gx] = 40.0


def down(a, f):
    h, w = a.shape
    return a[:h - h % f, :w - w % f].reshape(h // f, f, w // f, f).mean(axis=(1, 3))


def bilinear(img, u, v):
    h, w = img.shape
    x = u * w - 0.5
    y = v * h - 0.5
    x0 = int(np.clip(np.floor(x), 0, w - 2))
    y0 = int(np.clip(np.floor(y), 0, h - 2))
    fx = np.clip(x - x0, 0, 1)
    fy = np.clip(y - y0, 0, 1)
    return (img[y0, x0] * (1 - fx) * (1 - fy) + img[y0, x0 + 1] * fx * (1 - fy)
            + img[y0 + 1, x0] * (1 - fx) * fy + img[y0 + 1, x0 + 1] * fx * fy)


def meter_khdr11(view):
    lq = down(np.log2(np.maximum(view, 0.002)), 4)       # prefilter alpha (log avg) at 1/4
    l32 = down(lq, 8)                                     # Kawase chain approximated by box -> 1/32
    s = 0.0
    ws = 0.0
    for iy in range(4):
        fy = 0.18 + iy * 0.20
        wy = 1.0 - abs(fy - 0.44) * 1.15
        for ix in range(4):
            fx = 0.16 + ix * 0.226
            wx = 1.0 - abs(fx - 0.50) * 0.90
            w = max(0.15, wx * wy)
            s += bilinear(l32, fx, 1 - fy) * w
            ws += w
    return s / ws


def center_weights(h, w):
    v = (np.arange(h) + 0.5) / h
    u = (np.arange(w) + 0.5) / w
    wy = np.maximum(0.15, 1.0 - np.abs((1 - v) - 0.44) * 1.15)
    wx = np.maximum(0.15, 1.0 - np.abs(u - 0.50) * 0.90)
    return np.outer(wy, wx)


def meter_full(view):
    l8 = down(np.log2(np.maximum(view, 0.002)), 8)
    w = center_weights(*l8.shape)
    return (l8 * w).sum() / w.sum()


def meter_hist(view, lo_pct=0.40, hi_pct=0.95, bins=64, lmin=-12.0, lmax=8.0):
    """GPU-histogram style (64 bins, built by vertex-scatter at 1/8 res); trimmed mean between percentiles."""
    l8 = np.log2(np.maximum(down(view, 8), 1e-5))         # luminance downsampled first (as a 1/8 buffer would be)
    w = center_weights(*l8.shape)
    idx = np.clip(((l8 - lmin) / (lmax - lmin) * bins).astype(int), 0, bins - 1)
    hist = np.bincount(idx.ravel(), weights=w.ravel(), minlength=bins)
    cdf = np.cumsum(hist) / hist.sum()
    centers = lmin + (np.arange(bins) + 0.5) * (lmax - lmin) / bins
    lo_c = np.concatenate([[0], cdf[:-1]])
    # fraction of each bin inside [lo_pct, hi_pct]
    frac = np.clip((np.minimum(cdf, hi_pct) - np.maximum(lo_c, lo_pct)) / np.maximum(cdf - lo_c, 1e-9), 0, 1)
    ww = hist * frac
    return (centers * ww).sum() / max(ww.sum(), 1e-9)


results = {'KHDR1.1 16-tap@1/32': [], 'full reduction@1/8': [], 'histogram 64-bin trimmed': []}
for x0 in range(0, PW - VW, 3):
    view = pano[:, x0:x0 + VW]
    results['KHDR1.1 16-tap@1/32'].append(meter_khdr11(view))
    results['full reduction@1/8'].append(meter_full(view))
    results['histogram 64-bin trimmed'].append(meter_hist(view))

for k, v in results.items():
    v = np.array(v)
    d = np.diff(v)
    # high-frequency jitter: residual after a 30-frame moving average (0.25 s at 120 fps)
    ma = np.convolve(v, np.ones(31) / 31, 'same')
    resid = (v - ma)[20:-20]
    print(f'{k:26s} per-frame |dEV| mean {np.abs(d).mean():.4f}  p99 {np.percentile(np.abs(d),99):.4f}  max {np.abs(d).max():.3f}'
          f'  | jitter (resid std) {resid.std():.4f} EV  | sun-in-view bias {v[(3000-VW)//3+50]-np.median(v):+.2f} EV')
