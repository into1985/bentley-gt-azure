---
name: layouts-evolved-md-kasutatud-vabad-layout-mustrid
description: "Kanooniline layout-ajalugu (`C:\\Users\\indre\\Desktop\\Listing\\LAYOUTS-EVOLVED.md`). Listib mis layout-mustrid iga projekt"
metadata: 
  node_type: memory
  type: reference
  originSessionId: f8f396e2-02eb-4145-95f6-b68c0e73c93a
---

**Allikas:** `C:\Users\indre\Desktop\Listing\LAYOUTS-EVOLVED.md`

**Kasutatud projektid:**

### Projekt #1 — Lamborghini Urus SE
- **Mood:** Stealth-military luxury, matte olive, orange brake-caliper aktsent
- **Palett:** `--bone`, `--olive`, `--ink`, `--ember`, `--shadow`
- **Font-paar:** **Eiko** + **General Sans** (mõlemad Fontshare)
- **Hero:** Cinematic full-bleed pinned scrub (Ken Burns + title scale-fade)
- **Hook:** Suur editorial pull-statement + 4-stat grid + animated counters
- **Custom SVG:** Y-shape monogram (Lambo Y-geomeetria) + diamond section-divider + dotted route map
- **CTA:** Magnetic-CTA button (cursor distance)

### Projekt #2 — Mercedes-AMG S 63 E PERFORMANCE
- **Mood:** Nokturne platinum, tume täppis-luksus, soe champagne-aktsent
- **Palett:** `--graphite`, `--platinum`, `--pewter`, `--champagne` (TUME baas)
- **Font-paar:** **Hubot Sans** + **Hanken Grotesk** (mõlemad Google Fonts)
- **Hero:** Editorial alanurka-ankurdatud (≠ Urus full-bleed tsenter), clip-path wipe entry, "S 63" täht-haaval reveal, grille self-draw
- **Hook:** 8 vertikaalset spec-tahvlit (ikoon üleval), `.section-grille` Mercedes-spetsiifiline signatuur
- **Markerid/nupud:** **Ruudud** (mitte kuusnurgad — kuusnurk oli #1 element)
- **Custom SVG:** AMG Panamericana grille-glüüf, 8 hand-drawn spec-ikooni, mootoriheli-lainekuju

### Projekt #3 — Bentley Continental GT Azure V8 Hybrid
- **Mood:** Editorial warm-luxury, käsitsi-graveeritud, Aman/Hermès/Bentley.com treatment
- **Palett:** `--bone`, `--bone-cream`, `--graphite` (espresso-tume, mitte must), `--clay`, `--flame` (Orange Flame Satin Mulliner), `--brass` (HELE baas, oranž signatuur)
- **Font-paar:** **Migra** (custom .woff, self-hosted) + **Sentient** (Fontshare body) — esmakordne custom-display
- **Hero:** **Split hero** (vasak: massive 3-realine Migra-type; parem: foto full-bleed) + pin-cinema curtain reveal
- **Hook:** paragraph-statement + 6× spec-card + `.section-mesh` diamond-mesh signature (Bentley quilted leather geomeetria)
- **Story:** sync vertical + horizontal body mask-reveal + **V8 cylinder bank audio-pleier** (crossplane firing order 1-8-4-3-6-5-7-2)
- **Galerii:** diagonal cascade reveal (mitmes laines, ei pin-scroll)
- **Spetsiifiline:** Mulliner deep-dive (käsitööde dokumenteerimine) + Wellness sektsioon (sketch + pair-reveal) Azure-spetsiifiline
- **Kontakt:** pair-grouped editorial reveal B + pressed-paper hand-set CTA
- **Markerid/nupud:** **Väikesed teemandid** (mitte ruudud — ruudud olid Mercedes; mitte kuusnurgad — kuusnurgad olid Urus)
- **Custom SVG:** Diamond-mesh, 6 spec-ikooni (Bentley editorial line-weight), V8 cylinder bank, Mulliner aktsent-skitseering
- **6 universaal käitumis-mustrit lisati alates Bentley'st:** brand-aware ::selection, faviconid, sticky button scroll-fade, brand-logo scroll-direction-aware hide, share-nupp (Jaga kuulutust), brand image grading + film grain

---

**Saadaval (mis pole veel kasutatud):**

**Hero approaches:**
- Brutalist typographic hero (item name AS the visual)
- Pseudo-3D pedestal hero
- Mask-revealed hero (silhouette/cutout)
- Negative-space hero (huge whitespace + tiny corner composition)
- Multi-image stacked hero

**Story approaches:**
- Vertical timeline
- Pinned text section with sequential word/sentence reveals
- Two-column quote-led story
- Letter-from-owner style (handwriting accent)

**Gallery approaches:**
- Vertical Ken Burns sequence with cross-fading
- Mosaic / masonry with scroll-revealed entry
- Single-image-at-a-time scroll-controlled cross-fade
- Pinned hero-frame with cross-fading photos
- Directional clip-path blade-wipe lightbox (kasutamata)

**Specs approaches:**
- Beautifully typeset chrome reference card
- Architectural-drawing aesthetic (real estate)
- Spec table with dotted leader lines (technical manual)
- Numeric facts as huge display type (one fact per panel)

**Closing/contact approaches:**
- Concierge-style contact card with photograph
- Map-anchored composition with viewing-time picker
- Single-line phone-number-as-display-type
- Calendar embed for direct booking

---

**Universaalsed JS-mustrid (kopeerida igale listing'ule):**
- **Scroll-lock without layout shift** — `scrollbar-gutter: stable` + `lockScroll/unlockScroll` count-põhine helper
- **Accordion height-collapse** — JS-mõõdetud `height` (mitte `grid-template-rows: 0fr` trikk)
- **Engine-sound player** — kahe-režiimi (file:// pseudo-laine + https:// Web Audio analüsaator)

---

**Kasutatud font-paarid:**
- Urus: Eiko + General Sans (Fontshare)
- Mercedes: Hubot Sans + Hanken Grotesk (Google Fonts)
- Bentley: Migra + Sentient (custom .woff + Fontshare) — esmakordne self-hosted display

**Kasutatud palette:**
- Urus: bone + olive + ember (hele)
- Mercedes: graphite + platinum + champagne (tume)
- Bentley: bone + bone-cream + graphite + clay + flame + brass (hele baas, oranž signatuur, espresso-tekst mitte must)

**6 universaal käitumis-mustrit (alates Bentley #3):**
- `feedback_brand_selection_styling` — accent ::selection
- `reference_favicon_required` — 3 favicon link tag'i
- `pattern_sticky_button_scroll_fade` — FHW peidetud hero'l
- `pattern_brand_logo_scroll_hide` — logo scroll-direction-aware
- `pattern_share_button` — Jaga kuulutust + clipboard fallback
- `pattern_image_grading_grain` — filter + page-wide grain
