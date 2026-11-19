#!/usr/bin/env python3
"""Extract clean, border-free individual texture tiles from the 36 3x3 mosaic sheets
in assets/textures/ into public/textures/tiles/*.webp for Three.js PBR rendering.
"""
import os
import json
from PIL import Image
import numpy as np

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(REPO_ROOT, "assets", "textures")
OUT_DIR = os.path.join(REPO_ROOT, "public", "textures", "tiles")
os.makedirs(OUT_DIR, exist_ok=True)

FILES = sorted(os.listdir(SRC_DIR))
assert len(FILES) == 36, f"Expected 36 source texture sheets, found {len(FILES)}"

# Map semantic tile names -> (sheet_index, row 0..2, col 0..2, tile_size, extra_inset_px)
# Extra inset trims black 3x3 divider lines cleanly on sheets that have grid borders.
TILES = {
    # --- Sheet 00: 9種の地質テクスチャー九分割モザイク-2.png ---
    "basalt_cliff":          (0, 0, 0, 256, 6),
    "striated_rock":         (0, 0, 1, 256, 6),
    "mossy_cliff":           (0, 0, 2, 256, 6),
    "granite_sand_rock":     (0, 1, 0, 256, 6),
    "gneiss_rock":           (0, 1, 1, 256, 6),
    "wet_dark_rock":         (0, 1, 2, 256, 6),
    "iron_rust_rock":        (0, 2, 0, 256, 6),
    "weathered_limestone":   (0, 2, 1, 256, 6),
    "white_chalk_rock":      (0, 2, 2, 256, 6),

    # --- Sheet 01: 9種の舗装テクスチャモザイク-1.png ---
    "red_grit_surface":      (1, 0, 0, 256, 6),
    "green_grit_surface":    (1, 0, 1, 256, 6),
    "pebble_aggregate":      (1, 0, 2, 256, 6),
    "cracked_concrete":      (1, 1, 0, 256, 6),
    "patched_asphalt":       (1, 1, 1, 256, 6),
    "cobblestone":           (1, 1, 2, 256, 6),
    "mossy_pavers":          (1, 2, 0, 256, 6),
    "wet_asphalt":           (1, 2, 1, 256, 6),
    "stained_concrete":      (1, 2, 2, 256, 6),

    # --- Sheet 02: 9種類のリアルな壁面テクスチャ_gbc-7.png ---
    "white_plaster":         (2, 0, 0, 256, 6),
    "charred_cedar":         (2, 0, 1, 256, 6),
    "rusted_corrugated":     (2, 0, 2, 256, 6),
    "raw_concrete":          (2, 1, 0, 256, 6),
    "red_brick":             (2, 1, 1, 256, 6),
    "green_tile":            (2, 1, 2, 256, 6),
    "blue_mosaic_tile":      (2, 2, 0, 256, 6),
    "cork_board":            (2, 2, 1, 256, 6),
    "pegboard":              (2, 2, 2, 256, 6),

    # --- Sheet 03: 14_22_33-1.png ---
    "peeling_yellow_wall":   (3, 0, 0, 256, 6),
    "dark_green_chalk":      (3, 0, 1, 256, 6),
    "woven_rope_mat":        (3, 0, 2, 256, 6),
    "mossy_wall_patch":      (3, 1, 1, 256, 6),
    "hazard_stripes":        (3, 2, 0, 256, 6),
    "galvanized_zinc":       (3, 2, 1, 256, 6),
    "frosted_acrylic":       (3, 2, 2, 256, 6),

    # --- Sheet 04: 14_22_35-2.png ---
    "woven_screen_brown":    (4, 0, 0, 256, 6),
    "diamond_plate":         (4, 0, 1, 256, 6),
    "corrugated_gray":       (4, 0, 2, 256, 6),
    "weathered_sage_paint":  (4, 1, 0, 256, 6),
    "dark_green_wood":       (4, 1, 2, 256, 6),
    "coarse_canvas":         (4, 2, 0, 256, 6),
    "weathered_mortar":      (4, 2, 1, 256, 6),

    # --- Sheet 05: 14_22_36-3.png ---
    "dark_iron_plate":       (5, 0, 0, 256, 6),
    "rust_streaked_concrete":(5, 0, 1, 256, 6),
    "ivory_plaster":         (5, 0, 2, 256, 6),
    "metal_grate":           (5, 1, 0, 256, 6),
    "matte_black_metal":     (5, 1, 2, 256, 6),
    "coal_seam_rock":        (5, 2, 2, 256, 6),

    # --- Sheet 06: 14_23_43-1.png ---
    "lush_grass":            (6, 0, 0, 256, 6),
    "dry_grass":             (6, 0, 1, 256, 6),
    "dark_soil":             (6, 0, 2, 256, 6),
    "fallen_leaves":         (6, 1, 0, 256, 6),
    "foliage_green":         (6, 1, 1, 256, 6),
    "tree_bark":             (6, 1, 2, 256, 6),
    "deep_moss":             (6, 2, 0, 256, 6),
    "woodchips":             (6, 2, 1, 256, 6),
    "wild_grass_clover":     (6, 2, 2, 256, 6),

    # --- Sheet 07: 14_23_44-2.png ---
    "asphalt_dark":          (7, 0, 0, 256, 6),
    "concrete_curb":         (7, 1, 0, 256, 6),
    "sidewalk_slab":         (7, 1, 1, 256, 6),
    "smooth_concrete_dark":  (7, 1, 2, 256, 6),
    "gravel_road":           (7, 2, 0, 256, 6),
    "corrugated_zinc_bolts": (7, 2, 1, 256, 6),
    "drain_grate":           (7, 2, 2, 256, 6),

    # --- Sheet 08: 14_23_46-3.png ---
    "tatami_plain":          (8, 0, 0, 256, 6),
    "washi_plaster":         (8, 0, 1, 256, 6),
    "woven_carpet_gray":     (8, 0, 2, 256, 6),
    "beige_carpet":          (8, 1, 0, 256, 6),
    "white_fabric_wall":     (8, 1, 1, 256, 6),
    "white_bath_tile":       (8, 2, 0, 256, 6),
    "dark_hardwood":         (8, 2, 1, 256, 6),
    "checker_linoleum":      (8, 2, 2, 256, 6),

    # --- Sheet 09: 15_03_12-1.png (has black grid lines -> inset 10) ---
    "scrap_metal_patch":     (9, 1, 1, 256, 10),
    "dark_bolted_steel":     (9, 2, 2, 256, 10),

    # --- Sheet 11: 15_03_15-3.png (inset 10) ---
    "wood_panel_door":       (11, 0, 2, 256, 10),
    "glass_double_door":     (11, 1, 1, 256, 10),
    "frosted_transom":       (11, 1, 2, 256, 10),
    "linen_fusuma":          (11, 2, 0, 256, 10),
    "steel_truss_wall":      (11, 2, 1, 256, 10),

    # --- Sheet 12: 15_03_16-4.png (inset 10) ---
    "vintage_rug_red":       (12, 0, 0, 256, 10),
    "herringbone_wood":      (12, 1, 1, 256, 10),
    "tatami_bordered":       (12, 1, 2, 256, 10),
    "floral_wallpaper_blue": (12, 2, 1, 256, 10),
    "gingham_cloth":         (12, 2, 2, 256, 10),

    # --- Sheet 13: 15_03_17-5.png ---
    "peeling_plaster_brick": (13, 0, 0, 256, 6),
    "faded_red_wood":        (13, 0, 1, 256, 6),
    "galvanized_sheet":      (13, 0, 2, 256, 6),
    "red_tin_roof":          (13, 1, 0, 256, 6),
    "weathered_gray_planks": (13, 1, 1, 256, 6),
    "thatch_straw":          (13, 1, 2, 256, 6),
    "stacked_logs":          (13, 2, 0, 256, 6),
    "mossy_aged_concrete":   (13, 2, 1, 256, 6),

    # --- Sheet 14: 15_06_35-1.png ---
    "tall_grass":            (14, 0, 0, 256, 6),
    "meadow_wildflower":     (14, 0, 1, 256, 6),
    "dirt_patch_grass":      (14, 1, 0, 256, 6),
    "dry_ferns":             (14, 1, 1, 256, 6),
    "shrub_foliage":         (14, 1, 2, 256, 6),
    "charred_soil":          (14, 2, 0, 256, 6),
    "root_earth":            (14, 2, 1, 256, 6),
    "gravel_path":           (14, 2, 2, 256, 6),

    # --- Sheet 15: 15_06_37-2.png ---
    "dark_slate":            (15, 0, 2, 256, 6),
    "lichen_rock":           (15, 1, 0, 256, 6),
    "sand_rippled":          (15, 1, 1, 256, 6),
    "stream_pebbles":        (15, 1, 2, 256, 6),
    "moss_rock_heavy":       (15, 2, 0, 256, 6),
    "wet_coastal_pebbles":   (15, 2, 1, 256, 6),
    "clay_earth":            (15, 2, 2, 256, 6),

    # --- Sheet 16: 15_06_38-3.png ---
    "ishigaki_rubble":       (16, 0, 0, 256, 6),
    "ishigaki_mossy":        (16, 0, 1, 256, 6),
    "ishigaki_cut":          (16, 0, 2, 256, 6),
    "crumbling_brick_stucco":(16, 1, 0, 256, 6),
    "rough_white_stucco":    (16, 1, 1, 256, 6),
    "mossy_concrete_stain":  (16, 2, 0, 256, 6),
    "dark_damp_stone":       (16, 2, 1, 256, 6),
    "heavy_studded_wood":    (16, 2, 2, 256, 6),

    # --- Sheet 17: 15_06_39-4.png ---
    "carved_wood_lattice":   (17, 2, 0, 256, 6),
    "faded_blue_plaster":    (17, 2, 1, 256, 6),

    # --- Sheet 18: 16_18_44-1.png ---
    "travertine_stone":      (18, 0, 0, 256, 6),
    "slate_roof_dark":       (18, 0, 2, 256, 6),
    "pale_brick":            (18, 1, 0, 256, 6),
    "glazed_brown_brick":    (18, 1, 1, 256, 6),
    "cedar_louvers":         (18, 1, 2, 256, 6),
    "gabion_stone":          (18, 2, 0, 256, 6),
    "dressed_stone":         (18, 2, 1, 256, 6),

    # --- Sheet 20: 16_18_48-4.png ---
    "ivy_dense_wall":        (20, 0, 0, 256, 8),
    "ivy_climbing_plaster":  (20, 0, 1, 256, 8),
    "frosted_grid_window":   (20, 1, 1, 256, 8),
    "horizontal_wood_siding":(20, 1, 2, 256, 8),

    # --- Sheet 21: 08_48_40-2.png (black grid lines -> inset 10) ---
    "rusted_plate_bolts":    (21, 0, 0, 256, 10),
    "peeling_paint_steel":   (21, 0, 1, 256, 10),
    "green_textured_mat":    (21, 0, 2, 256, 10),
    "wood_slat_screen":      (21, 1, 2, 256, 10),
    "terrazzo_floor":        (21, 2, 0, 256, 10),

    # --- Sheet 22: 08_48_41-3.png (black grid lines -> inset 10) ---
    "oxidized_riveted_steel":(22, 0, 1, 256, 10),
    "tire_track_concrete":   (22, 0, 2, 256, 10),
    "blue_rust_corrugated":  (22, 1, 0, 256, 10),
    "aged_timber_planks":    (22, 1, 1, 256, 10),
    "roll_shutter":          (22, 2, 1, 256, 10),
    "mine_steel_door":       (22, 2, 2, 256, 10),

    # --- Sheet 23: 08_48_42-4.png (black grid lines -> inset 10) ---
    "oak_flooring":          (23, 0, 0, 256, 10),
    "tatami_green_border":   (23, 0, 1, 256, 10),
    "cream_plaster":         (23, 0, 2, 256, 10),
    "small_white_tile":      (23, 1, 1, 256, 10),
    "vertical_cedar_panel":  (23, 2, 1, 256, 10),
    "blue_bath_tile":        (23, 2, 2, 256, 10),

    # --- Sheet 24: 08_48_42-5.png (furniture fronts -> inset 10) ---
    "wardrobe_wood":         (24, 1, 0, 256, 10),
    "kitchen_cabinet":       (24, 1, 1, 256, 10),
    "wooden_dresser":        (24, 1, 2, 256, 10),
    "empty_bookshelf":       (24, 2, 1, 256, 10),
    "vanity_sink":           (24, 2, 2, 256, 10),

    # --- Sheet 25: 08_48_44-6.png (inset 10) ---
    "cream_ceramic_tile":    (25, 0, 1, 256, 10),
    "floral_futon":          (25, 0, 2, 256, 10),
    "indigo_sakura_fabric":  (25, 1, 0, 256, 10),
    "red_zabuton":           (25, 1, 1, 256, 10),
    "woven_fabric_gray":     (25, 1, 2, 256, 10),
    "botanical_curtain":     (25, 2, 0, 256, 10),

    # --- Sheet 26: 08_48_44-7.png (inset 10) ---
    "door_wood_brown":       (26, 0, 1, 256, 10),
    "door_rusted_green":     (26, 1, 0, 256, 10),
    "door_light_wood":       (26, 1, 1, 256, 10),
    "door_frosted_glass":    (26, 1, 2, 256, 10),
    "window_frosted_wood":   (26, 2, 1, 256, 10),
    "coir_doormat":          (26, 2, 2, 256, 10),

    # --- Sheet 27: 08_48_45-8.png (inset 10) ---
    "mailboxes_metal":       (27, 0, 1, 256, 10),
    "electric_meter":        (27, 0, 2, 256, 10),
    "fire_extinguisher_box": (27, 1, 0, 256, 10),
    "enamel_sign_blue":      (27, 1, 2, 256, 10),
    "bulletin_board":        (27, 2, 0, 256, 10),

    # --- Sheet 28: 08_48_46-10.png (commercial shop tiles! inset 10) ---
    "shop_noren":            (28, 0, 0, 256, 10),
    "shop_menu_boards":      (28, 0, 1, 256, 10),
    "shop_shelves_jars":     (28, 0, 2, 256, 10),
    "shop_drink_cooler":     (28, 1, 0, 256, 10),
    "shop_produce_crates":   (28, 1, 1, 256, 10),
    "shop_striped_awning":   (28, 1, 2, 256, 10),
    "shop_register_counter": (28, 2, 0, 256, 10),
    "dirt_gravel_yard":      (28, 2, 1, 256, 10),

    # --- Sheet 29: 08_48_46-9.png (industrial/mine! inset 10) ---
    "mine_valve_pipes":      (29, 0, 0, 256, 10),
    "mine_control_panel":    (29, 0, 1, 256, 10),
    "metal_louver_vent":     (29, 0, 2, 256, 10),
    "island_map_sign":       (29, 1, 1, 256, 10),
    "cardboard_boxes":       (29, 1, 2, 256, 10),

    # --- Sheet 30: 08_48_47-11.png (inset 10) ---
    "chalkboard":            (30, 0, 0, 256, 10),
    "office_counter":        (30, 0, 1, 256, 10),
    "green_curtain":         (30, 0, 2, 256, 10),
    "retro_tile_wall":       (30, 2, 0, 256, 10),
    "filled_bookshelf":      (30, 2, 1, 256, 10),
    "shrine_facade":         (30, 2, 2, 256, 10),

    # --- Sheet 31: 10_41_56-1.png (inset 10) ---
    "window_curtained":      (31, 0, 0, 256, 10),
    "exterior_tile_beige":   (31, 0, 2, 256, 10),
    "warm_wood_plank":       (31, 1, 0, 256, 10),
    "brushed_steel":         (31, 1, 1, 256, 10),
    "pebble_dash_wall":      (31, 2, 0, 256, 10),
    "concrete_steps":        (31, 2, 2, 256, 10),

    # --- Sheet 32: 10_48_36-3.png (inset 10) ---
    "shoji_sliding_door":    (32, 0, 2, 256, 10),
    "full_bookcase":         (32, 1, 1, 256, 10),
    "retro_kitchen_unit":    (32, 1, 2, 256, 10),
    "antique_tansu":         (32, 2, 1, 256, 10),
    "wooden_vanity":         (32, 2, 2, 256, 10),

    # --- Sheet 33: 11_44_01-3.png (inset 10) ---
    "file_cabinet":          (33, 1, 1, 256, 10),
    "notice_board":          (33, 1, 2, 256, 10),
    "storage_rack":          (33, 2, 0, 256, 10),

    # --- Sheet 34: 12_41_57-7.png ---
    "sand_coarse":           (34, 0, 0, 256, 6),
    "black_volcanic_gravel": (34, 0, 1, 256, 6),
    "shell_sand":            (34, 0, 2, 256, 6),
    "barnacle_rock":         (34, 1, 0, 256, 6),
    "driftwood":             (34, 1, 2, 256, 6),
    "wet_sand_ripples":      (34, 2, 1, 256, 6),
    "seaweed_shore":         (34, 2, 2, 256, 6),

    # --- Sheet 35: ９種類の質感フロアサンプルボード-6.png (black grid lines -> inset 12) ---
    "parquet_floor":         (35, 0, 2, 256, 12),
    "river_cobble":          (35, 1, 0, 256, 12),
    "old_red_brick":         (35, 1, 1, 256, 12),
    "aged_rush_mat":         (35, 1, 2, 256, 12),
    "light_wood_grain":      (35, 2, 0, 256, 12),
    "black_marble":          (35, 2, 2, 256, 12),
}

# Cache opened sheets
loaded = {}
manifest = {}
total_bytes = 0

for name, (sheet_idx, r, c, size, inset) in sorted(TILES.items()):
    if sheet_idx not in loaded:
        path = os.path.join(SRC_DIR, FILES[sheet_idx])
        loaded[sheet_idx] = Image.open(path).convert("RGB")
    im = loaded[sheet_idx]
    w, h = im.size
    cw = w / 3.0
    ch = h / 3.0
    x0 = int(round(c * cw)) + inset
    y0 = int(round(r * ch)) + inset
    x1 = int(round((c + 1) * cw)) - inset
    y1 = int(round((r + 1) * ch)) - inset
    crop = im.crop((x0, y0, x1, y1)).resize((size, size), Image.LANCZOS)
    out_path = os.path.join(OUT_DIR, f"{name}.webp")
    crop.save(out_path, format="WEBP", quality=84, method=4)
    fsize = os.path.getsize(out_path)
    total_bytes += fsize
    manifest[name] = {
        "file": f"textures/tiles/{name}.webp",
        "source": FILES[sheet_idx],
        "cell": [r, c],
    }

with open(os.path.join(OUT_DIR, "manifest.json"), "w", encoding="utf-8") as f:
    json.dump(manifest, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(TILES)} clean WebP tiles -> {OUT_DIR} (total {total_bytes/1024/1024:.2f} MB)")
