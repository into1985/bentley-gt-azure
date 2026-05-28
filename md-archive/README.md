# md-archive — Bentley Continental GT Azure listing dokumentatsioon

**Loodud:** 2026-05-28 (Faas 6 lõpetuse järel)
**Sisu:** kõik md-failid mis selle projekti loomisel kasutati või loodi.

---

## Struktuur

```
md-archive/
├── README.md              ← see fail
├── canonical/             ← Listing-juurkausta canonical doc'id
│   ├── AI_KULDREEGLID.md  ← 12 reeglit (kohustuslik tööleping)
│   ├── CLAUDE.md          ← projektitase Claude-instruktsioonid
│   ├── COMPONENTS.md      ← komponendi-inventuur (Sektsioon 6 uus — universaalreeglid)
│   └── LAYOUTS-EVOLVED.md ← layout-ajalugu + Projekt #3 Bentley sissekanne
├── memory/                ← kogu Claude-mälu (~/.claude/projects/.../memory/)
│   ├── MEMORY.md          ← indeks-fail kõikidele mälu-tükkidele
│   └── *.md               ← 47 mälu-faili (vt allpool kategoriseerimist)
└── progress/
    └── PROGRESS.md        ← selle projekti edu-jälgija (Faas 0 → 6.7)
```

---

## Selle projekti käigus LOODUD uued failid (8 mälu-tükki)

Need on **uued universaalreeglid** mille Bentley #3 projekti käigus lisasime töövoogu — kõik järgmised listing-projektid kasutavad neid automaatselt:

| Fail | Mida defineerib |
|---|---|
| `feedback_brand_selection_styling.md` | Brand-aware `::selection` (accent + heledaim bg) |
| `reference_favicon_required.md` | 3 favicon link tag'i (`<head>`-i kohustuslik) |
| `pattern_sticky_button_scroll_fade.md` | Sticky FHW/CTA peidetud hero'l, ilmub järgmisel sektsioonil |
| `pattern_brand_logo_scroll_hide.md` | Logo kaob alla-kerides, ilmub üles-kerides |
| `pattern_share_button.md` | Web Share API + clipboard fallback ("Jaga kuulutust") |
| `pattern_image_grading_grain.md` | CSS filter + page-wide grain (Aman/Hermès/Bentley.com treatment) |
| `pattern_mask_reveal_language.md` | Ühtne motion-keel kogu lehel (clip-path mask + SVG draw-on) |
| `feedback_clip_path_gsap_workaround.md` | GSAP-i clip-path interpoleerimise probleem + lahendus |

---

## Selle projekti käigus UUENDATUD canonical doc'id (4 faili)

| Fail | Mida lisati |
|---|---|
| `canonical/LAYOUTS-EVOLVED.md` | Projekt #3 Bentley täisplokk; 5 catalogue'is "kasutatud" märget; 6 universal-mustrit koos koodi-näidistega |
| `canonical/COMPONENTS.md` | Engine-sound player 2 visuaalset varianti (A waveform / B V8 cylinder); share-nupp universaal; **uus Sektsioon 6 — Universaal käitumis-reeglid tabel** |
| `canonical/AI_KULDREEGLID.md` | (puutumatu — kasutati lugemiseks) |
| `canonical/CLAUDE.md` | (puutumatu — kasutati lugemiseks) |

---

## Memory-failide kategooriad

### `pattern_*` — kanoonilised koodi-mustrid (8 faili)
- `pattern_brand_logo_scroll_hide.md` ← UUS Bentley'st
- `pattern_hero_pinscrub_jump_fix.md`
- `pattern_image_grading_grain.md` ← UUS Bentley'st
- `pattern_mask_reveal_language.md` ← UUS Bentley'st
- `pattern_share_button.md` ← UUS Bentley'st
- `pattern_static_modal_build.md`
- `pattern_sticky_button_scroll_fade.md` ← UUS Bentley'st

### `feedback_*` — Indrek'i õpitud disaini-/töövoo-reeglid (29 faili)
- `feedback_NEVER_repeat_patterns.md` (kardinaalreegel)
- `feedback_bolder_motion.md`
- `feedback_brand_creation.md`
- `feedback_brand_selection_styling.md` ← UUS Bentley'st
- `feedback_brave_font_pairs.md`
- `feedback_break_the_mold.md`
- `feedback_clip_path_gsap_workaround.md` ← UUS Bentley'st
- `feedback_compact_permission.md`
- `feedback_component_design_must_differ.md`
- `feedback_component_reuse_rule.md`
- `feedback_cta_count.md`
- `feedback_ctas_must_be_unique.md`
- `feedback_design_skills.md`
- `feedback_each_design_is_artwork.md`
- `feedback_experimental_display_fonts.md`
- `feedback_experimental_fonts.md`
- `feedback_hamburger_only_nav.md`
- `feedback_no_asking_what_next.md`
- `feedback_no_decorative_numbers.md`
- `feedback_no_italic.md`
- `feedback_original_layouts.md`
- `feedback_polite_copy_ok.md`
- `feedback_propose_design_variants_first.md`
- `feedback_quietest_option.md`
- `feedback_read_prior_listing_first.md`
- `feedback_self_improving_memory.md`
- `feedback_single_contact_default.md`
- `feedback_stop_after_every_section.md`
- `feedback_strict_workflow_order.md`
- `feedback_sync_reveals.md`
- `feedback_token_budget.md`

### `reference_*` — kanoonilised viited (6 faili)
- `reference_AI_KULDREEGLID.md`
- `reference_COMPONENTS_md.md`
- `reference_LAYOUTS_EVOLVED.md`
- `reference_favicon_required.md` ← UUS Bentley'st
- `reference_listing_canonical_root.md`
- `reference_mercedes_s63_project.md`
- `reference_progress_md_required.md`

### `brand_*` — brand-profiilid (2 faili)
- `brand_kuus_identity.md`
- `brand_sahh_sulle.md`

### Indeks
- `MEMORY.md` — kõikide ülal-toodud failide lühi-indeks selgituste-listidega

---

## Kuidas alla laadida

**Variant A — kogu kausta ZIP'iga:**
1. Ava File Explorer: `C:\Users\indre\Desktop\Listing\bentley-continental-gt-azure\md-archive\`
2. Parem-klikk kausta peal → "Send to" → "Compressed (zipped) folder"
3. Saadud ZIP on ~50 md-failiga, ~150kb suurune

**Variant B — Powershell:**
```powershell
Compress-Archive -Path "C:\Users\indre\Desktop\Listing\bentley-continental-gt-azure\md-archive" -DestinationPath "$HOME\Desktop\bentley-md-archive.zip"
```

---

## Märkus algallikate kohta

Need failid on **koopiad** — algallikad asuvad endiselt:
- Canonical: `C:\Users\indre\Desktop\Listing\*.md`
- Memory: `C:\Users\indre\.claude\projects\C--Users-indre-Desktop-CLAUDE\memory\*.md`
- Progress: `C:\Users\indre\Desktop\Listing\bentley-continental-gt-azure\PROGRESS.md`

Kui pärast arhiivi loomist mõni neist failidest muutub (uus reegel, uus projekt jne), siis arhiiv jääb selle ajahetke snapshot'iks. Värske koopia tegemiseks korda kopeerimist.
