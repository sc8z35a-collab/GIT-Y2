"""E6: Local tone mapping prototypes on a synthetic Kuroiso interior-with-bright-window HDR scene
built from the project's real WebP tiles. Compares:
  A  global exposure + K-Filmic v2 (KHDR 1.1 without K-LHE)
  B  KHDR 1.1 (K-Adapt clamp + Bilateral K-LHE v2 + clarity) + K-Filmic v2   [port of shipped shader]
  C  proposed K-LHE v3: bilateral-grid local exposure (gather-built, WebGL2-feasible) + K-Filmic v3
  D  alternative: fast guided filter base layer + K-Filmic v3
Usage: python3 -I docs/research/khdr_1_2/e6_local_tm.py   (writes results/e6_*.webp)
"""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
REPO = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
import numpy as np
from PIL import Image
import colorlib as C
from kfilmic3 import kfilmic_v3_soft

TILES = os.path.join(REPO, 'public', 'textures', 'tiles')
OUT = os.path.join(HERE, 'results')
os.makedirs(OUT, exist_ok=True)
W, H = 640, 360


def tile(name, w, h, scale=1.0):
    a = np.asarray(Image.open(os.path.join(TILES, name + '.webp')).convert('RGB'), dtype=np.float64) / 255.0
    lin = C.srgb_eotf(a)
    if scale != 1.0:
        im = Image.fromarray((a * 255).astype(np.uint8)).resize((int(256 * scale), int(256 * scale)), Image.BILINEAR)
        lin = C.srgb_eotf(np.asarray(im, dtype=np.float64) / 255.0)
    reps = (int(np.ceil(h / lin.shape[0])), int(np.ceil(w / lin.shape[1])), 1)
    return np.tile(lin, reps)[:h, :w]


def build_scene(ratio_in_out):
    """Return HDR radiance image (linear 709) and region masks. ratio_in_out = interior/exterior illuminance."""
    img = np.zeros((H, W, 3))
    E_out = 1.25
    E_in = E_out * ratio_in_out
    yy, xx = np.mgrid[0:H, 0:W]
    floor = yy > 250
    win = (xx > 300) & (xx < 560) & (yy > 70) & (yy < 235)
    wall = ~floor & ~win
    tatami = tile('tatami_plain', W, H, 0.75)
    washi = tile('washi_plaster', W, H, 1.0)
    wood = tile('dark_hardwood', W, H, 0.5)
    img[floor] = tatami[floor] * E_in * 0.9
    img[wall] = washi[wall] * E_in * (0.55 + 0.45 * (1 - np.abs(xx[wall] - 430) / 640.0))[..., None]
    beam = ((yy > 50) & (yy < 70)) | ((xx > 280) & (xx < 300) & (yy < 250)) | ((xx > 560) & (xx < 580) & (yy < 250))
    img[beam] = wood[beam] * E_in * 0.6
    # exterior view through the window: sky, sunlit neighbour plaster wall, cedar forest, grass
    sky_h = 120
    ext = np.zeros((H, W, 3))
    ext[:] = C.hex709('#7fb4e2') * 1.6
    plaster = tile('ivory_plaster', W, H, 1.0) * E_out
    foliage = tile('foliage_green', W, H, 0.6) * C.hex709('#9bbd8e') * E_out
    grass = tile('lush_grass', W, H, 0.6) * E_out * 0.9
    m_wall = (xx > 300) & (xx < 400) & (yy > 100)
    m_for = (xx >= 400) & (yy > sky_h - 15 + 25 * np.sin(xx / 23.0))
    m_grass = (yy > 200)
    ext[m_for] = foliage[m_for]
    ext[m_wall] = plaster[m_wall]
    ext[m_grass] = grass[m_grass]
    img[win] = ext[win]
    beam2 = beam & ~win
    img[beam2] = wood[beam2] * E_in * 0.6
    return img, {'interior': ~win & ~beam, 'exterior': win}


def log2L(img):
    return np.log2(np.maximum(C.luma709(img), 1.5e-3))


def box_down(a, f):
    h, w = a.shape[:2]
    return a[:h - h % f, :w - w % f].reshape(h // f, f, w // f, f, *a.shape[2:]).mean(axis=(1, 3))


def bilerp(small, h, w):
    sh, sw = small.shape
    ys = (np.arange(h) + 0.5) * sh / h - 0.5
    xs = (np.arange(w) + 0.5) * sw / w - 0.5
    y0 = np.clip(np.floor(ys).astype(int), 0, sh - 2)
    x0 = np.clip(np.floor(xs).astype(int), 0, sw - 2)
    fy = np.clip(ys - y0, 0, 1)[:, None]
    fx = np.clip(xs - x0, 0, 1)[None, :]
    a = small[y0][:, x0]
    b = small[y0][:, x0 + 1]
    c = small[y0 + 1][:, x0]
    d = small[y0 + 1][:, x0 + 1]
    return a * (1 - fx) * (1 - fy) + b * fx * (1 - fy) + c * (1 - fx) * fy + d * fx * fy


def method_A(img):
    key = np.exp2(log2L(img).mean())
    expo = 0.18 / key * 1.6 * 1.04   # roughly K-Filmic v2's mid-gray placement
    return C.tm_kfilmic_v2(img * expo)


def method_B(img):
    """Port of KHDR 1.1 composite: K-Adapt (clamped) + Bilateral K-LHE v2 + clarity + K-Filmic v2."""
    L = C.luma709(img)
    logL = np.log2(np.maximum(L, 0.0015))
    q = box_down(np.log2(np.maximum(L, 0.002)), 4)          # 1/4-res surround (prefilter alpha)
    adaptedL = np.exp2(box_down(q, 8).mean())                # K-Adapt log-average (approx of 16 taps)
    ev = np.clip(np.log2(0.30 / max(adaptedL, 0.004)), -0.38, 1.25)
    expo = np.clip(1.04 * 2 ** ev, 0.72, 2.55)
    # 5-tap bilateral at +-1.6 quarter texels (sigma_r = 0.75 EV), sampled with bilinear upsampling
    qh, qw = q.shape
    def samp(dx, dy):
        sh = np.roll(np.roll(q, -int(round(dy)), axis=0), -int(round(dx)), axis=1)
        return bilerp(sh, H, W)
    taps = [(0, 0, 1.5), (-1.6, -1.6, 1), (1.6, -1.6, 1), (-1.6, 1.6, 1), (1.6, 1.6, 1)]
    inv2s2 = 1.0 / (2 * 0.75 * 0.75)
    num = logL * 0.05
    den = np.full_like(logL, 0.05)
    for dx, dy, wt in taps:
        bl = samp(dx, dy)
        w = np.exp(-(bl - logL) ** 2 * inv2s2) * wt
        num += bl * w
        den += w
    surr = num / den
    def ss(a, b, x):
        t = np.clip((x - a) / (b - a), 0, 1)
        return t * t * (3 - 2 * t)
    shadowGate = ss(0.007, 0.028, L) * (1 - ss(0.055, 0.14, L))
    shadowLift = 1 + 0.14 * shadowGate
    hiGuard = 1.0 / (1.0 + np.maximum(0, L - 1.65) * 0.12)
    detail = np.clip(logL - surr, -1.15, 1.15)
    midGate = ss(0.018, 0.10, L) * (1 - ss(0.90, 2.30, L))
    clarity = np.exp2(detail * 0.25 * midGate)
    col = img * (expo * shadowLift * hiGuard * clarity)[..., None]
    return C.tm_kfilmic_v2(col), expo


def bilateral_grid_base(l, s=16, dz=1.0, blur=True):
    """Gather-built bilateral grid on 1/4-res log2 luminance (WebGL2-feasible: each cell gathers its footprint).
    s: spatial cell size in 1/4-res px; dz: range bin size in EV."""
    q = box_down(l, 4)
    qh, qw = q.shape
    z0 = np.floor(q.min()) - 1
    nz = int(np.ceil((q.max() - z0) / dz)) + 2
    gh, gw = qh // s + 2, qw // s + 2
    S = np.zeros((gh, gw, nz))
    Wt = np.zeros((gh, gw, nz))
    yy, xx = np.mgrid[0:qh, 0:qw]
    gy = (yy + 0.5) / s
    gx = (xx + 0.5) / s
    gz = (q - z0) / dz
    # tent splat expressed as gather (identical math): each pixel contributes to 2x2x2 neighbouring cells
    iy0, ix0, iz0 = np.floor(gy).astype(int), np.floor(gx).astype(int), np.floor(gz).astype(int)
    fy, fx, fz = gy - iy0, gx - ix0, gz - iz0
    for dy in (0, 1):
        wy = fy if dy else 1 - fy
        for dx in (0, 1):
            wx = fx if dx else 1 - fx
            for dzz in (0, 1):
                wz = fz if dzz else 1 - fz
                w = wy * wx * wz
                np.add.at(S, (iy0 + dy, ix0 + dx, iz0 + dzz), w * q)
                np.add.at(Wt, (iy0 + dy, ix0 + dx, iz0 + dzz), w)
    if blur:
        k = np.array([1, 2, 1]) / 4.0
        for ax in range(3):
            S = np.apply_along_axis(lambda v: np.convolve(v, k, 'same'), ax, S)
            Wt = np.apply_along_axis(lambda v: np.convolve(v, k, 'same'), ax, Wt)
    # slice at full res
    yy, xx = np.mgrid[0:H, 0:W]
    gy = ((yy + 0.5) / 4) / s
    gx = ((xx + 0.5) / 4) / s
    gz = (l - z0) / dz
    iy0 = np.clip(np.floor(gy).astype(int), 0, gh - 2)
    ix0 = np.clip(np.floor(gx).astype(int), 0, gw - 2)
    iz0 = np.clip(np.floor(gz).astype(int), 0, nz - 2)
    fy, fx, fz = gy - iy0, gx - ix0, np.clip(gz - iz0, 0, 1)
    num = 0
    den = 0
    for dy in (0, 1):
        wy = fy if dy else 1 - fy
        for dx in (0, 1):
            wx = fx if dx else 1 - fx
            for dzz in (0, 1):
                wz = fz if dzz else 1 - fz
                w = wy * wx * wz
                num = num + w * S[iy0 + dy, ix0 + dx, iz0 + dzz]
                den = den + w * Wt[iy0 + dy, ix0 + dx, iz0 + dzz]
    return num / np.maximum(den, 1e-6), (gh, gw, nz)


def guided_base(l, r=24, eps=0.3):
    q = box_down(l, 4)
    def box(a):
        k = np.ones(2 * r + 1) / (2 * r + 1)
        a = np.apply_along_axis(lambda v: np.convolve(np.pad(v, r, mode='edge'), k, 'valid'), 0, a)
        return np.apply_along_axis(lambda v: np.convolve(np.pad(v, r, mode='edge'), k, 'valid'), 1, a)
    mI = box(q)
    vI = box(q * q) - mI * mI
    a = vI / (vI + eps)
    b = mI - a * mI
    A = bilerp(box(a), H, W)
    B = bilerp(box(b), H, W)
    return A * l + B


def local_exposure(img, base, hi_c=None, sh_c=None, detail=1.0, blurred_blend=0.15, target_ev=4.5):
    l = log2L(img)
    blurred = bilerp(box_down(box_down(l, 4), 8), H, W)
    base = (1 - blurred_blend) * base + blurred_blend * blurred
    mid = np.log2(np.exp2(l.mean()))            # global log-average = global exposure anchor
    # range-fitting (auto) contrast: highlights of the base layer are pulled to <= mid+2.2 EV (just under paper
    # white for K-Filmic v3), deep shadows lifted to >= mid-4.0 EV; detail layer untouched (no halo by design)
    p98, p2 = np.percentile(base, 98), np.percentile(base, 2)
    hi_auto = min(1.0, 2.2 / max(p98 - mid, 1e-3))
    sh_auto = min(1.0, 4.0 / max(mid - p2, 1e-3))
    hi_c = hi_auto if hi_c is None else hi_c
    sh_c = sh_auto if sh_c is None else sh_c
    contrast = np.where(base > mid, hi_c, sh_c)
    target = (base - mid) * contrast + mid + (l - base) * detail
    gain = np.exp2(target - l)
    expo = 0.18 / np.exp2(mid) * 2.5 * 0.4      # place global key at ~18% of paper white (K-Filmic v3 units)
    return kfilmic_v3_soft(img * (gain * expo)[..., None]), gain


def gauss_pyr(a, n):
    p = [a]
    for _ in range(n):
        a = box_down(np.pad(a, ((0, a.shape[0] % 2), (0, a.shape[1] % 2)) + ((0, 0),) * (a.ndim - 2), mode='edge'), 2)
        p.append(a)
    return p


def up2(a, shape):
    if a.ndim == 2:
        return bilerp(a, *shape)
    return np.stack([bilerp(a[..., c], *shape) for c in range(a.shape[-1])], -1)


def exposure_fusion(img, evs=(-2.0, 0.0, 2.5), sigma=0.2, levels=5):
    l = log2L(img)
    base_expo = 0.18 / np.exp2(l.mean()) * 2.5 * 0.4
    ims, ws = [], []
    for ev in evs:
        o = kfilmic_v3_soft(img * base_expo * 2 ** ev)
        Y = C.srgb_oetf(C.luma709(o))
        w = np.exp(-((Y - 0.5) ** 2) / (2 * sigma * sigma)) + 1e-6
        ims.append(np.log2(np.maximum(C.luma709(o), 1e-4)))
        ws.append(w)
    wsum = sum(ws)
    ws = [w / wsum for w in ws]
    # Laplacian blending of log-luminance, then re-apply chroma ratio from the middle exposure
    out_lap = None
    for im, w in zip(ims, ws):
        gp = gauss_pyr(im, levels)
        wp = gauss_pyr(w, levels)
        lp = [gp[i] - up2(gp[i + 1], gp[i].shape) for i in range(levels)] + [gp[levels]]
        contrib = [lp[i] * wp[i] for i in range(levels + 1)]
        out_lap = contrib if out_lap is None else [a + b for a, b in zip(out_lap, contrib)]
    rec = out_lap[levels]
    for i in range(levels - 1, -1, -1):
        rec = up2(rec, out_lap[i].shape) + out_lap[i]
    mid = kfilmic_v3_soft(img * base_expo)
    Ym = np.maximum(C.luma709(mid), 1e-6)
    out = np.clip(mid * (np.exp2(rec) / Ym)[..., None], 0, 1)
    return out


def metrics(out, masks, img):
    Y = C.luma709(out)
    res = {}
    for k, m in masks.items():
        res[k + '_meanY'] = Y[m].mean()
        res[k + '_clip%'] = 100 * np.mean(Y[m] >= 0.98)
        res[k + '_crush%'] = 100 * np.mean(Y[m] <= 0.004)
    # detail preservation: high-pass std of log luminance in output vs input (per region)
    def hp(a):
        la = np.log2(np.maximum(a, 1e-4))
        k = np.ones((5, 5)) / 25
        from numpy.lib.stride_tricks import sliding_window_view as sw
        pad = np.pad(la, 2, mode='edge')
        lo = sw(pad, (5, 5)).mean(axis=(-1, -2))
        return la - lo
    hpo, hpi = hp(Y), hp(C.luma709(img))
    for k, m in masks.items():
        res[k + '_detail'] = hpo[m].std() / max(hpi[m].std(), 1e-6)
    # halo: interior band 4..24 px left of window edge (x=300) vs far interior (x 60..200), rows 100..230
    rows = slice(100, 230)
    near = Y[rows, 255:278].mean()
    far = Y[rows, 60:200].mean()
    res['halo_interior_near_vs_far%'] = 100 * (near - far) / far
    nearx = Y[rows, 304:324].mean()
    farx = Y[rows, 330:390].mean()
    res['halo_exterior_near_vs_far%'] = 100 * (nearx - farx) / farx
    return res


for label, ratio in (('1.1-calibrated (interior/exterior = 1/10)', 0.10), ('physical (interior/exterior = 1/80)', 1 / 80.0)):
    img, masks = build_scene(ratio)
    l = log2L(img)
    print(f'=== Scene: {label}; scene DR p1..p99 = {np.percentile(l,99)-np.percentile(l,1):.1f} EV ===')
    outs = {}
    outs['A_global+KFilmic_v2'] = method_A(img)
    outs['B_KHDR1.1(K-LHE v2)'], expoB = method_B(img)
    base_bg, gshape = bilateral_grid_base(l)
    outs['C_bilateral_grid+v3'], gainC = local_exposure(img, base_bg)
    outs['D_guided_filter+v3'], gainD = local_exposure(img, guided_base(l))
    outs['E_exposure_fusion+v3'] = exposure_fusion(img)
    for name, o in outs.items():
        m = metrics(o, masks, img)
        print(f'  {name:22s} interior meanY {m["interior_meanY"]:.3f} (crush {m["interior_crush%"]:4.1f}%)'
              f' | exterior meanY {m["exterior_meanY"]:.3f} (clip {m["exterior_clip%"]:4.1f}%)'
              f' | detail in/ex {m["interior_detail"]:.2f}/{m["exterior_detail"]:.2f}'
              f' | halo in {m["halo_interior_near_vs_far%"]:+5.1f}% ex {m["halo_exterior_near_vs_far%"]:+5.1f}%')
    print(f'  (KHDR1.1 K-Adapt exposure = {expoB:.2f}; bilateral grid = {gshape[1]}x{gshape[0]}x{gshape[2]} cells; '
          f'grid gather cost ~ {gshape[0]*gshape[1]*gshape[2]} cells x {16*16} taps at 1/4 res)')
    tag = 'calib' if ratio > 0.05 else 'phys'
    strip = np.concatenate([np.clip(C.srgb_oetf(o), 0, 1) for o in outs.values()], axis=0)
    Image.fromarray((strip * 255 + 0.5).astype(np.uint8)).save(os.path.join(OUT, f'e6_{tag}.webp'), quality=90)
