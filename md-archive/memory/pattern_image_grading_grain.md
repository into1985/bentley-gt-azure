# Brand image grading + film grain — universaalpattern

**KOHUSTUSLIK iga listing-projektis.** Kõigi piltide tonaalsus ühtlustatakse projekti palettiga ja lehele lisatakse peen film-stock grain — see on **Aman Resorts / Hermès / Bentley.com** tegelik treatment ja kõige nähtamatum aga kõige mõjuvam luxury-detail.

## Mida saavutab

- **Tonaalne ühtlus** — pildid pärinevad eri allikatest (kataloog, autoportaal, omanik), filter muudab nad **ühtseks visuaalseks pereks**
- **Mati film-stock feel** — vähendab digital-sterile tunnet, lisab käsitsi-graded'itud editorial-kvaliteeti
- **Grain on tactile** — tundub füüsiliselt printida-väärsem; AI-genereeritud lehed ei tee seda

## Kaks komponenti

### 1. Per-image filtri grade (CSS `filter`)

```css
.hero-image,
.story-image,
.g-img,            /* gallery photos */
.lightbox-img,     /* lightbox open */
.contact-bg {      /* contact section bg-image */
  filter: brightness(0.97) contrast(0.96) saturate(0.96);
}
```

**Numbrid sõltuvad projektist** — alus-pattern on:
- `brightness` — 0.95-0.98 (3-5% tumedam, mitte rohkem)
- `contrast` — 0.94-0.98 (matt feel = pisut LANGETUS, mitte tõstmine)
- `saturate` — 0.92-0.96 (subtle desaturation, **NEVER 0.85 või alla** sest tapab brand-värvid)

**KRIITILINE: ÄRA tapa auto/toote signature-värvi.** AMG #2 kasutas saturate 0.78 — see oli tema palettiga OK aga Bentley'l oleks Mulliner-orange purunenud. **Konservatiivne on parem kui agressiivne.**

### 2. Page-wide grain (`body::after`)

```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  opacity: 0.08;
  mix-blend-mode: soft-light;
}
@media (prefers-reduced-motion: reduce) {
  body::after { display: none; }
}
```

**Tuninguv vundament:**
- `baseFrequency='0.9'` — fine grain (suurem arv = peenem)
- `numOctaves='1'` — clean noise (2 = cloudy, 1 = sharp film)
- `feColorMatrix` 4. rea viimane 0.55 — vähendab SVG enda läbipaistvust
- `stitchTiles='stitch'` — KOHUSTUSLIK, väldib nähtavaid tile-piire
- `opacity: 0.08` — silmaga **tuntav, mitte nähtav**; tõsta 0.10-0.12 kui vajad rohkem; vähenda 0.05 vaiksema versiooni jaoks
- `mix-blend-mode: soft-light` — **kõige värvi-säästvam** (alternatiivid: `overlay` rohkem punchi, `multiply` darkening, `screen` lightening — ÄRA kasuta `screen`)
- `z-index: 9999` — peab katma kõik (lightbox, modal, FHW); kasuta 9999 standardina
- `position: fixed` + `pointer-events: none` — grain liigub viewport'iga, ei sega klikkimist

## Asukoht koodis

- **CSS:** lõpus, enne `</style>`-tag'i, oma blokis "Faas 6.X — Brand image grading + film grain"
- Pärast kõiki Faas 5 mask-reveal blokke (et override saaks toimida vajadusel)

## Mille peale tähelepanu

### 1. Auto/toote värv on listingu LUBADUS
Kui Bentley GT Azure ON Orange Flame Satin, siis filter ei tohi seda muuta. Saturate < 0.92 = riskantne. **Test alati eheda foto peal enne kinnitamist.**

### 2. Sketch'id / joonistused — JÄTA VÄLJA
Joonistus, ikoon, illustratsioon EI saa fotofiltri-treatment'it. Lisa selektoritesse AINULT päris-fotosid. Bentley'l `.wellness-sketch img` jäi filtrist välja.

### 3. Lightbox-katvus
Kui projektis on lightbox (galerii-zoom), see avab images at full-size. CSS-filter `.lightbox-img` peab olema KAASATUD selektorisse. Page-wide grain (`body::after`) katab automaatselt sest see on `position: fixed`.

### 4. SVG turbulence perf
`feTurbulence` on GPU-friendly, üks-kord-render (cache'itav). Ei mõjuta scroll-perfi.

### 5. Dark sektsioonide eripära
Tumedal taustal (graphite contact-bg) grain on **rohkem nähtav**. Kui see segab, kohanda mix-blend-mode → `overlay` või vähenda opacity 0.05.

### 6. `prefers-reduced-motion` fallback
Grain ei animeeritu, AGA kasutaja eelistus võib viidata visuaal-müra vältimisele. `display: none` reduced-motion'is on turvaline default. Variant: jätta nähtavale aga vähem opacity.

## Per-project numbrite kohandamine

Üldreegel — alusta KÕIGE KONSERVATIIVSEMATEST numbritest, vajadusel intensiivista:

| Projekti tunde-sõnum | brightness | contrast | saturate | grain opacity | blend |
|---|---|---|---|---|---|
| Bright, hopeful, premium | 0.98 | 0.97 | 0.96 | 0.05 | soft-light |
| Editorial, warm luxury (Bentley) | 0.97 | 0.96 | 0.96 | 0.08 | soft-light |
| Cool, technical, AMG-like | 0.92 | 0.90 | 0.80 | 0.06 | overlay |
| Moody, cinematic, dark | 0.88 | 1.05 | 0.78 | 0.10 | overlay |

## Mälu-rada

- 2026-05-23 AMG #2-s loodud (esimene versioon — filter only, ilma grain'ita)
- 2026-05-28 Bentley #3-s evolved — filter + page-wide grain + soft-light blend
- Indrek'i 2026-05-28 lisatud universaalreegliks töövoogu
- Seotud: `feedback_self_improving_memory`, `feedback_each_design_is_artwork`, `feedback_quietest_option` (vaikseim variant on default)
