"""E1: Bloom prefilter coverage / temporal stability (KHDR 1.1 vs proposed).
A small bright light (1x1 .. 3x3 px, area-rasterized = MSAA-like partial coverage) moves across the screen
in 0.125 px steps. We measure the total energy reaching the 1/4-res bloom buffer per frame.
A correct (energy-conserving) downsample keeps it constant; fluctuation == visible bloom flicker/pulsing.
"""
import numpy as np

W = H = 64


def raster_square(cx, cy, size, val=50.0):
    img = np.zeros((H, W))
    x0, x1 = cx - size / 2, cx + size / 2
    y0, y1 = cy - size / 2, cy + size / 2
    xs = np.arange(W)
    ys = np.arange(H)
    covx = np.clip(np.minimum(xs + 1, x1) - np.maximum(xs, x0), 0, 1)
    covy = np.clip(np.minimum(ys + 1, y1) - np.maximum(ys, y0), 0, 1)
    return np.outer(covy, covx) * val


def bilinear(img, px, py):
    # px,py in texel coordinates where texel k spans [k,k+1], center k+0.5 (GL convention)
    x = px - 0.5
    y = py - 0.5
    x0 = np.floor(x).astype(int)
    y0 = np.floor(y).astype(int)
    fx = x - x0
    fy = y - y0
    def g(yy, xx):
        return img[np.clip(yy, 0, H - 1), np.clip(xx, 0, W - 1)]
    return (g(y0, x0) * (1 - fx) * (1 - fy) + g(y0, x0 + 1) * fx * (1 - fy)
            + g(y0 + 1, x0) * (1 - fx) * fy + g(y0 + 1, x0 + 1) * fx * fy)


def down_khdr11(img, karis=False):
    """Exact KHDR 1.1 prefilter tap pattern at 1/4 res: center(x2) + 4 diagonal taps at +-1.5 full-res texels."""
    q = W // 4
    I, J = np.meshgrid(np.arange(q), np.arange(q), indexing='xy')
    cx = 4 * I + 2.0
    cy = 4 * J + 2.0
    taps = [(0, 0, 2.0), (-1.5, -1.5, 1.0), (1.5, -1.5, 1.0), (-1.5, 1.5, 1.0), (1.5, 1.5, 1.0)]
    num = 0
    den = 0
    for dx, dy, wt in taps:
        s = bilinear(img, cx + dx, cy + dy)
        w = wt / (1.0 + s) if karis else wt
        num = num + s * w
        den = den + w
    return num / den


def down_box4(img, karis=False):
    """Proposed: 4 bilinear taps at +-1 texel = exact 4x4 box (full coverage). Karis per 2x2 tap."""
    q = W // 4
    I, J = np.meshgrid(np.arange(q), np.arange(q), indexing='xy')
    cx = 4 * I + 2.0
    cy = 4 * J + 2.0
    num = 0
    den = 0
    for dx, dy in ((-1, -1), (1, -1), (-1, 1), (1, 1)):
        s = bilinear(img, cx + dx, cy + dy)
        w = 1.0 / (1.0 + s) if karis else 1.0
        num = num + s * w
        den = den + w
    return num / den


def down13_half(img, karis=False):
    """COD:AW-style 13-tap downsample to 1/2 res (Jimenez 2014); applied twice for 1/4."""
    h, w = img.shape
    q = w // 2
    I, J = np.meshgrid(np.arange(q), np.arange(q), indexing='xy')
    cx = 2 * I + 1.0
    cy = 2 * J + 1.0
    def S(dx, dy):
        return bilinear_g(img, cx + dx, cy + dy)
    a, b, c = S(-2, -2), S(0, -2), S(2, -2)
    d, e, f = S(-2, 0), S(0, 0), S(2, 0)
    g, hh, i = S(-2, 2), S(0, 2), S(2, 2)
    j, k, l, m = S(-1, -1), S(1, -1), S(-1, 1), S(1, 1)
    groups = [((j + k + l + m) / 4, 0.5), ((a + b + d + e) / 4, 0.125), ((b + c + e + f) / 4, 0.125),
              ((d + e + g + hh) / 4, 0.125), ((e + f + hh + i) / 4, 0.125)]
    if karis:
        num = sum(gv * wt / (1 + gv) for gv, wt in groups)
        den = sum(wt / (1 + gv) for gv, wt in groups)
        return num / den
    return sum(gv * wt for gv, wt in groups)


def bilinear_g(img, px, py):
    h, w = img.shape
    x = px - 0.5
    y = py - 0.5
    x0 = np.floor(x).astype(int)
    y0 = np.floor(y).astype(int)
    fx = x - x0
    fy = y - y0
    def g(yy, xx):
        return img[np.clip(yy, 0, h - 1), np.clip(xx, 0, w - 1)]
    return (g(y0, x0) * (1 - fx) * (1 - fy) + g(y0, x0 + 1) * fx * (1 - fy)
            + g(y0 + 1, x0) * (1 - fx) * fy + g(y0 + 1, x0 + 1) * fx * fy)


def cod_quarter(img, karis=False):
    return down13_half(down13_half(img, karis), False)


methods = {
    'KHDR1.1 5-tap@1/4 (no Karis)': lambda im: down_khdr11(im, False),
    'KHDR1.1 5-tap@1/4 (Karis, as shipped)': lambda im: down_khdr11(im, True),
    'box4 4-tap@1/4 (no Karis)': lambda im: down_box4(im, False),
    'box4 4-tap@1/4 (Karis)': lambda im: down_box4(im, True),
    'COD 13-tap x2 (Karis on 1st)': lambda im: cod_quarter(im, True),
}

for size in (1.0, 2.0, 3.0):
    print(f'--- moving bright square {size:.0f}x{size:.0f} px (value 50, area-rasterized) ---')
    for name, fn in methods.items():
        energies = []
        for step in range(0, 129):
            cx = 24.0 + step * 0.125
            img = raster_square(cx, 29.3, size)
            energies.append(fn(img).sum() * 16.0)   # *16: quarter-res pixel covers 16 full-res px
        e = np.array(energies)
        true_e = raster_square(30.0, 29.3, size).sum()
        print(f'  {name:40s} mean/true {e.mean()/true_e:6.3f}  min/true {e.min()/true_e:6.3f}  max/true {e.max()/true_e:6.3f}'
              f'  flicker (max-min)/mean {100*(e.max()-e.min())/max(e.mean(),1e-9):6.1f}%')
