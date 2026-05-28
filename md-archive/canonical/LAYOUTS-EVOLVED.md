# Layout patterns used so far

Track which layout / composition / scroll-narrative approaches have been used across listings in this project. Each new listing must visually + structurally differ from prior ones. This file is updated after each completed listing.

---

## Used patterns

### 01. lamborghini-urus-se.html — *Lamborghini Urus SE 2026, Verde Turbine*

**Mood:** Stealth-military luxury · matte olive · orange brake-caliper accent · gloss black trim · cinematic full-bleed photography

**Palette:**
- `--bone` `#EFEAE0` (showroom stone / concrete walls)
- `--olive` `#7D7E5F` (Verde Turbine matte body)
- `--ink` `#16170F` (deep blackgreen / gloss accents / text on light, bg on dark)
- `--ember` `#E26A2C` (orange brake calipers — brand signature, used sparingly)
- `--shadow` `#4A4B3A` (deeper muted olive — secondary text)

**Font pair:** **Eiko** (display, Fontshare) + **General Sans** (body/labels, Fontshare)

**Layout pattern:**
- Full-bleed cinematic hero with pinned scrub (image Ken Burns, title scale-fade)
- Mix-blend-difference fixed brand bar (adapts to dark/light sections automatically)
- Hook section: large editorial pull-statement + 4-stat grid with animated counters
- Diamond/angular section divider (Lambo Y-shape geometry)
- Story section: dark inverse with parallax side-photo + body-text reveal stagger
- Horizontal pinned gallery scroll-jacking (23 photos translateX-scrubbed)
- Editorial lightbox: cross-fade + counter-scale transition (outgoing 1.0→1.05, incoming 0.95→1.0, 0.95s power2.inOut — print-portfolio rahulik), bounded zoom (capped at native resolution, no upscaling), keyboard nav + ESC
- Specs section: technical grid table with row-by-row mask reveal
- Ad Personam section: 4-category grid with bullet-point diamonds + warm bone-warm bg
- Logistics section: olive-bg with abstract dotted-route map SVG (Saksamaa → Eesti)
- Contact section: dark inverse + centered card + magnetic CTA button

**Scroll moments delivered:**
1. Hero pin & scrub (120%)
2. Stats counters animated on enter
3. Story parallax + sequential paragraph reveal
4. Gallery horizontal pin scroll-jacking
5. Specs row-by-row masked entry
6. Ad Personam category-by-category stagger
7. Logistics route SVG draws on
8. Magnetic-CTA button on contact
9. Gallery lightbox cross-fade + counter-scale transitions (interactive, not scroll-driven)

**Custom SVG element:** Y-shape monogram in brand bar (Lambo design language) + diamond section dividers + dotted route map.

---

### 02. mercedes-s63-amg/index.html — *Mercedes-AMG S 63 E PERFORMANCE 2024*

**Mood:** Nokturne platinum · tume täppis-luksus · soe champagne-aktsent · vaoshoitud aga võimas (ärilimusiin + 802 hj koletis)

**Palette (TUME baas — projekti esimene tume listing):**
- `--graphite` `#181719` (lehe baas — salongi must)
- `--graphite-soft` `#211F22` (kaardid, paneelid)
- `--graphite-line` `#2E2C30` (hairline'id)
- `--platinum` `#E9E5DC` (põhitekst — auto kere + hele salong)
- `--platinum-mute` `#C2BDB2` · `--pewter` `#9B968C` (pehmem / sekundaartekst)
- `--champagne` `#C9A86B` (signatuur-aktsent) + `--champagne-bright` hover

**Font pair:** **Hubot Sans** (display) + **Hanken Grotesk** (body) — mõlemad Google Fonts

**Motiiv:** AMG Panamericana vertikaalne peenjoone-grille — hero-divider, section-opener glüüfid, mootoriheli-lainekuju. Markerid/nupud = **ruudud** (mitte kuusnurgad — kuusnurk oli projekt #1 element).

**Layout-mustrid (komponendi-skelett sama, disain uus):**
- Hero — editorial alanurka-ankurdatud (≠ Urus full-bleed tsenter)
- Hook — 8 vertikaalset spec-tahvlit, ikoon üleval (≠ Urus horisontaalne kaart)
- Story — pealkiri-üleval + tekst|portree-foto + **eraldiseisev** mootoriheli-moodul (≠ Urus player pildi peal)
- Galerii — asümmeetriline editorial-grid, 5 bändi (≠ Urus horisontaalne scroll-jack)
- Üldandmed — 2-veeruline faktitabel (≠ Urus üks veerg)
- Konfiguratsioon — 3 accordion'i, JS-mõõdetud height-collapse
- Ostuprotsess — 4-sammuline horisontaalne ajatelg (logistika ümber mõtestatud — auto on kohapeal)
- Kontakt — 2-veeruline editorial + integreeritud footer

**Scroll-momendid:**
1. Hero clip-path wipe entry + "S 63" täht-haaval reveal + grille self-draw (signatuur)
2. Hero pin-scrub + hiire-juhitav 3-kihiline parallax
3. Hook clip-reveal + wow-counter'id (802 / 3,3 loevad nullist)
4. Spec-kaardid clip-reveal stagger
5. Galerii bändid clip-wipe + mitme-kihiline parallax (tahvlid eri sügavusel)
6. Ostuprotsessi sammud järjestikune clip-wipe
7. Lightbox cross-fade

**CTA:** täis-champagne plokk-nupp + grille-glüüf noole asemel (≠ Urus magnet-CTA).

**Custom SVG:** Panamericana grille-glüüf, 8 hand-drawn spec-ikooni, mootoriheli-lainekuju.

---

### 03. bentley-continental-gt-azure/index.html — *Bentley Continental GT Azure V8 Hybrid 2026, Orange Flame Satin Mulliner*

**Mood:** Editorial warm-luxury · hele bone-baas · käsitsi-graveeritud orange-flame signatuur · Mulliner-tasandi käsitööd dokumenteeritud aukartuse-tooniga · Bentley.com tegelik treatment (filter + grain)

**Palett (HELE baas — projekti teine hele listing pärast Urus):**
- `--bone` `#F2EDE2` (lehe baas — Bentley showroomi marmor / showroom-floor)
- `--bone-cream` `#E8E2D6` (kaardid, paneelid — pisut soojem)
- `--graphite` `#1B1814` (põhitekst — Bentley-iseloomulik espresso-tume, mitte must)
- `--clay` `#5D544A` (sekundaartekst, hairlines)
- `--flame` `#D85A1F` (Orange Flame Satin Mulliner — auto signatuur, accent)
- `--brass` `#A07A4B` (vask-detail, hover-state, sekundaarne aktsent)

**Font pair:** **Migra** (display, custom .woff/.woff2 — Extrabold + ExtralightItalic) + **Sentient** (body, Fontshare) — Migra on **eksperimentaalne contrast-font** (≠ AI-default safe-serif), Sentient on hipsterlikum modern-serif. Esmakordne custom-font kasutamine projektis (.woff'id `font/` kaustas).

**Motiiv:** **Diamond-mesh** (Bentley salongi quilted leather geomeetria) — kasutatud Hook-sektsiooni signature-mark'is, FHW pill-nupu taustal, broneerimismodal'i panel-divider'ina. Lipud/kaalud/protsendid orange-flame'is (`<span class="em">`). Markerid/nupud = **väikesed teemandid** (mitte ruudud — ruudud olid Mercedes #2 element; mitte kuusnurgad — kuusnurgad olid Urus #1).

**Layout-mustrid (komponendi-skelett sama, disain + paigutus uus):**
- Hero — **Split hero** (vasak: massive Migra-type "Continental / GT / Azure" 3-realine; parem: hero-image full-bleed; mobile: stack vertikaalselt). ≠ Urus full-bleed center, ≠ Mercedes anchored corner.
- Hook — paragraph-statement + 6× `.spec-card` samas sektsioonis + `.section-mesh` Bentley-spetsiifiline diamond-mesh signature (≠ Mercedes Panamericana vertikaal-jooned)
- Story — **sync vertical + horizontal body reveal** (pealkiri-portree-vertikaal + tekst-paragraph-horizontaal'sed mask-sweep'id sünkroniseeritud aknas). Audio-pleier on **kandiline switchgear V8 cylinder bank** (≠ Mercedes ringi waveform). Crossplane V8 firing order 1-8-4-3-6-5-7-2 visualizeeritud silindrite "süttimisega" alt-üles.
- Galerii — **diagonal cascade reveal** (foto-mask-sweep diagonaalselt left-top-to-right-bottom, mitmes laines, ei pinscroll-jacking). ≠ Urus horisontaalne pin, ≠ Mercedes editorial-bändid.
- Mulliner deep-dive — eraldi sektsioon Mulliner-tasandi käsitööde dokumenteerimiseks (Orange Flame Satin värvi-protsess, Diamond-quilted istmed, ametlikud aktsent-õmblused) cascade-reveal'iga. ≠ Urus ADP grid.
- Wellness — Azure-spetsiifiline (massage seats, ioniser, mood lighting) `.wellness-sketch` joonis (mitte foto) + pair-reveal A-variant. ≠ Mercedes ostuprotsessi 4-sammuline timeline.
- Kontakt — **pair-grouped editorial reveal B** (sektsioonipealkiri + müüja-kaart + share-nupp grupeeritud paaridena, mitte üksteise järel). Üks kontakt (Kristjan Uuk, Bentley Tallinn). ≠ Mercedes 2-veeruline.

**Scroll-momendid (Faas 5 holistiline mask-reveal pass — kogu lehel ühtne motion-keel):**
1. Hero **pin-cinema curtain** C-variant: bone-curtain langeb image'i pealt, type reveal'ib word-by-word, image scale 1.16→1.06 entry + pin 1.06→1.22 scrub (KRIITILINE: `fromTo({explicit from}, {to, immediateRender: false})` — vt `pattern_hero_pinscrub_jump_fix`)
2. Hook + spec-grid mask sweep A — sektsioonipealkiri left-to-right clip-path, spec-kaardid cascade
3. Story sync vertical + horizontal — pealkiri/portree-vertikaal + tekst-horizontaal sünkroniseeritud
4. Galerii diagonal cascade — 7 foto, diagonal-sweep 3 laines
5. ADP / Lisad cascade reveal A — accordion-blokid mask-sweep ülevalt
6. Wellness pair A — sketch + tekst-paragraph pair-reveal'ina
7. Contact pair-grouped editorial B — pealkiri+kaart, share+CTA paaridena

**Universaalreeglid (rakendati esmakordselt + lisati töövoogu):**
- **Brand-aware `::selection`** — accent-bg + bone-text (browser-default sinine valik rikub luxury-konteksti)
- **Faviconid** — 3 link tag'i (ico + 32×32 + apple-touch-180×180)
- **Sticky button scroll-fade** — FHW peidetud hero'l, ilmub `.hook`-sektsiooni sisenedes, kaob tagasi-scrollil
- **Brand-logo scroll-direction-aware hide** — `.brand-bar-left` kaob alla, ilmub üles; hamburger jääb alati nähtavaks
- **Share-nupp (Jaga kuulutust)** — Web Share API + clipboard fallback, kontakti-CTA all
- **Brand image grading + film grain** — CSS filter (0.97/0.96/0.96) + page-wide SVG `feTurbulence` (opacity 0.08, soft-light)

**Custom SVG:** Diamond-mesh pattern (`.section-mesh`), 6 hand-drawn spec-ikooni (Bentley editorial line-weight), V8 cylinder bank ikooni-süsteem (8× `.es-cyl` + spark-plug `::before` tip), Mulliner aktsent-õmbluste skitseering.

**CTA:** Pressed-into-paper hand-set type (`.btn-primary` letterpress-style indent + flame-accent underline ribbon) — ≠ Urus magnet-CTA, ≠ Mercedes täis-champagne plokk.

**Kasutamise õpetused (kandidaadid mälusse):**
- `clip-path: inset()` ei interpoleeru GSAP'iga otse — kasuta CSS custom property workaround (`--reveal-x`, `--reveal-y`)
- V8 cylinder bank audio-player skelett saab Mercedes'i `.es-player` JS hookid (`#es-btn`, `.is-playing`) puutumatuks jätta
- Migra display-font Fontshare'is pole — kasutame self-hosted `.woff/.woff2` (font/ kaustas) `@font-face`-iga; legaalsuse kontroll vajab kasutaja-tasandil

---

## Pattern catalogue (still available)

### Hero approaches *(used → cinematic full-bleed pin-scrub, anchored-corner clip-wipe, split + pin-cinema curtain)*
- ~~Cinematic full-bleed hero with scrubbed Ken Burns~~ (Urus)
- ~~Editorial alanurka-ankurdatud + clip-path wipe entry + letter-by-letter title~~ (Mercedes S 63)
- ~~Split hero (image on one half, massive type on the other) + pin-cinema curtain reveal~~ (Bentley GT Azure)
- Brutalist typographic hero (item name AS the visual — works when no photo yet)
- Pseudo-3D pedestal hero (item on a stage, with depth via parallax layers)
- Mask-revealed hero (silhouette/cutout that the image fills)
- Negative-space hero (huge whitespace + tiny precise composition in one corner)
- Multi-image stacked hero (gallery-as-hero from the first scroll)

### Story / narrative sections *(used → parallax stagger, separate audio-module, sync vertical+horizontal mask)*
- ~~Two-column with parallax photo + paragraph stagger~~ (Urus)
- ~~Pealkiri-üleval + tekst|portree-foto + eraldiseisev audio-moodul~~ (Mercedes S 63)
- ~~Sync vertical + horizontal body mask-reveal + V8 cylinder bank audio-pleier~~ (Bentley GT Azure)
- Vertical timeline (chronological story scroll)
- Pinned text section with sequential word/sentence reveals tied to scroll progress
- Two-column quote-led story (large pull-quote + supporting paragraph)
- Letter-from-owner style (handwriting accent + formal type)

### Gallery approaches *(used → horizontal pin scroll-jack, asymmetric editorial bands, diagonal cascade)*
- ~~Horizontal pinned scroll-jacking (translateX scrub)~~ (Urus)
- ~~Asümmeetriline editorial-grid, 5 bändi, clip-wipe + parallax~~ (Mercedes S 63)
- ~~Diagonal cascade reveal (foto-mask-sweep diagonaalselt, mitmes laines)~~ (Bentley GT Azure)
- ~~Lightbox with cross-fade + counter-scale + bounded zoom~~ (Urus)
- Lightbox with directional clip-path blade-wipe (tried on Urus, felt too cinematic/active — kept available for bolder brands)
- Vertical Ken Burns sequence with cross-fading
- Mosaic / masonry with scroll-revealed entry
- Single-image-at-a-time with scroll-controlled cross-fade
- Pinned hero-frame with cross-fading photos in place

### Specs / facts sections *(used → grid table with row mask)*
- ~~Two-column grid table with dotted border-bottom + row stagger~~ (Urus)
- Beautifully typeset chrome reference card
- Architectural-drawing aesthetic (real estate floor plan as background)
- Spec table with dotted leader lines (technical manual feel)
- Numeric facts as huge display type (one fact per scroll panel)

### Item-specific deep-dives *(used → Ad Personam grid, ostuprotsess horizontal timeline, Mulliner deep-dive + Wellness sketch)*
- ~~Categorized option list grid~~ (Urus)
- ~~Ostuprotsess 4-sammuline horisontaalne ajatelg~~ (Mercedes S 63)
- ~~Mulliner deep-dive (käsitööde dokumenteerimine cascade-reveal'iga) + Wellness (sketch + pair-reveal)~~ (Bentley GT Azure)
- Service history as horizontal timeline (cars)
- Floor plan with hover-reveal of room details (real estate)
- Routes-sailed map with traced path (yachts)
- Provenance chain as vertical chain-of-custody diagram (art)

### Closing / contact sections *(used → centered dark card + magnet, 2-veeruline editorial + footer, pair-grouped editorial)*
- ~~Magnetic CTA card (button follows cursor distance)~~ (Urus)
- ~~2-veeruline editorial + integreeritud footer + täis-champagne plokk-nupp~~ (Mercedes S 63)
- ~~Pair-grouped editorial reveal B (pealkiri+kaart, share+CTA paaridena) + pressed-paper hand-set CTA~~ (Bentley GT Azure)
- Concierge-style contact card with photograph
- Map-anchored composition with viewing-time slot picker
- Single-line phone-number-as-display-type
- Calendar embed for direct booking

---

## Universal JS patterns (copy to every listing)

### Scroll lock without layout shift — `scrollbar-gutter`
Overlay avades (`overflow: hidden`) kaob kerimisriba ja sisu nihkub vasakule/paremale. **Lahendus: `scrollbar-gutter: stable` — CSS-only, ei vaja JS-mõõtmist.** Vana mõõtmise-trikk (`padding-right` kompensatsioon) on veaohtlik — kompensatsioon jääb kergesti poolikuks.

```css
html { scrollbar-gutter: stable; }        /* gutter ALATI reserveeritud */
html.is-scroll-locked { overflow: hidden; }
```
```js
let lockCount = 0; /* count → toetab pesastatud lukke */
function lockScroll() {
  if (lockCount === 0) document.documentElement.classList.add('is-scroll-locked');
  lockCount++;
}
function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) document.documentElement.classList.remove('is-scroll-locked');
}
```

Gutter on alati reserveeritud → lukustamine ei muuda ühtegi mõõdet → ei sisu ega fixed-elemendid nihku. Lukusta `<html>`-il (mitte `<body>`-l) — sama element, mis kannab `scrollbar-gutter`-it. Defineeri `lockScroll`/`unlockScroll` üks kord globaalselt — hamburger, modaal, lightbox jagavad sama helperit.

### Collapsible / accordion — JS-mõõdetud kõrgus
Accordion'i / collapsible'i sulgemiseks kasuta **JS-mõõdetud `height`-i**, mitte `grid-template-rows: 0fr` trikki — viimane ei kollapseeru kõigis brauserites usaldusväärselt 0-ni (sisu jääb piiluma).

```css
.accordion-content { height: 0; overflow: hidden; transition: height 0.4s ease; }
```
Avades: `height = scrollHeight + 'px'` → `transitionend` järel `height = 'auto'` (et reflow töötaks). Sulgedes: `auto → fikseeritud scrollHeight → 0` (vahel `void offsetHeight` reflow'i sundimiseks).

### Engine / mootoriheli-pleier — `file://` lõks ja kahe-režiimi strateegia

Auto- või mehhanismi-heli pleier (audio + reaktiivne lainekuju) Web Audio API integratsiooniga **töötab live-domeenil, AGA mitte `file://` protokollil.**

`createMediaElementSource(audioEl)` Chrome'is/Edge'is `file://`-l "õnnestub" (ei viska viga, AudioContext luuakse, routing toimub), **kuid taintib audio output'i → kõlarid jäävad vaikseks.** Lainekuju ribad ei liigu, sest sagedus-data on kogu aeg null'id. Konsoolis viga ei näe — tehniliselt midagi ei katki.

**Strateegia: kahe-režiimi pleier.**
- **Arenduses (`file://`):** ära kasuta Web Audio'd. `<audio>.play()` otse + JS-i pseudo-juhuslik mitme-sinise V8-laine animatsioon (vt allpool). Heli kindlalt mängib, ribad orgaaniliselt liiguvad.
- **Live (`https://`):** vaheta Web Audio analüsaatorile — `createMediaElementSource` + `AnalyserNode` (fftSize 128) + `getByteFrequencyData` reageerib päris sagedustele.

**Pseudo-laine (file:// fallback):**
```js
function esTick() {
  if (!esPlaying) return;
  const t = performance.now() / 1000;
  esLines.forEach(function (ln, i) {
    const phase = i * 0.42;
    const v = Math.sin(t * 3.1 + phase) * 0.45
           + Math.sin(t * 7.3 + phase * 1.7) * 0.32
           + Math.sin(t * 13  + phase * 0.6) * 0.23;
    const h = 4 + Math.abs(v) * 24;
    ln.setAttribute('y1', (32 - h).toFixed(1));
    ln.setAttribute('y2', (32 + h).toFixed(1));
  });
  esRAF = requestAnimationFrame(esTick);
}
```

Igal projektil, kus on heli-pleier: alusta pseudo-laine variandiga, deploy'i puhul vaheta päris analüsaatorile + märgi PROGRESS.md-sse "live-deployment TODO".

### Brand-aware `::selection` styling — UNIVERSAL (alates Bentley #3)

Iga listing-projekti CSS-i lisada `::selection` + `::-moz-selection` blokk RESET-bloki järele: taust = projekti accent-värv, tekst = heledaim taustatoon, `text-shadow: none`. Browser-default sinine valik rikub luxury-konteksti esimese Ctrl+A'ga. Vt mälu: `feedback_brand_selection_styling`.

```css
::selection { background: var(--ACCENT); color: var(--LIGHTEST-BG); text-shadow: none; }
::-moz-selection { background: var(--ACCENT); color: var(--LIGHTEST-BG); text-shadow: none; }
```

### Faviconid — UNIVERSAL (alates Bentley #3)

Iga projekti `<head>`-i lisada 3 favicon-link'i (failid root-kaustas): `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png` (180×180). Asukoht: pärast `<link rel="canonical">`, enne Open Graph blokki. Vt mälu: `reference_favicon_required`.

### Sticky button scroll-fade — UNIVERSAL (AMG #2 + Bentley #3 kanooniliseks)

Floating sticky button (FHW / CTA-pill / "broneeri" sticky) PEIDETUD hero'l, ILMUB järgmise sektsiooni (`.hook`) sisenedes, kaob tagasi hero'le scroll'imisel + sulgeb avatud paneeli. ScrollTrigger `trigger: '.hook'`, `start: 'top bottom'`, `onEnter` GSAP fade-in + `onLeaveBack` fade-out + `closeAll()`. `prefers-reduced-motion`: instant on/off. Vt mälu: `pattern_sticky_button_scroll_fade`.

### Brand-logo scroll-direction-aware hide — UNIVERSAL (alates Bentley #3)

`.brand-bar-left` (logo + tekst) kaob alla-kerides, ilmub üles-kerides. **Hamburger jääb alati nähtavaks.** Top-zone <80px hoiab logo nähtaval. rAF-throttled vanilla scroll listener, classList `.is-hidden` toggle, delta threshold 5px jitter'i vältimiseks. Vt mälu: `pattern_brand_logo_scroll_hide`.

### Share-nupp (Jaga kuulutust) — UNIVERSAL (AMG #2 + Bentley #3 kanooniliseks)

Web Share API (mobiil natiivne sharing) + clipboard fallback (desktop `writeText` + "Link kopeeritud ✓" 2.2s feedback). Vaikimisi asukoht: kontakti/footer-CTA all (sekundaarne action), asukoht lahtine per-project. Kanooniline 3-ringi share-ikoon, label "Jaga kuulutust", muted → accent hover/success. `shareData.url = window.location.href`. Vt mälu: `pattern_share_button`.

### Brand image grading + film grain — UNIVERSAL (alates Bentley #3)

Kõigi fotode tonaalsus ühtlustatakse CSS `filter` (`brightness(0.97) contrast(0.96) saturate(0.96)` konservatiivselt) + page-wide grain (`body::after` SVG `feTurbulence` `position: fixed` `z-index: 9999` `mix-blend-mode: soft-light` opacity ~0.08). Aman/Hermès/Bentley.com tegelik treatment. **KRIITILINE: ÄRA tapa auto signature-värvi** — `saturate` 0.92-0.96, mitte alla. Sketch'id/joonistused jätta filtrist välja. Lightbox kaetud automaatselt sest grain on fixed. `prefers-reduced-motion`: grain `display: none`. Per-project numbrid tuning-tabelis. Vt mälu: `pattern_image_grading_grain`.

---

## Font pairs used so far

- **Urus SE:** Eiko + General Sans *(both Fontshare)*
- **S 63 AMG:** Hubot Sans + Hanken Grotesk *(both Google Fonts)*
- **Bentley GT Azure:** Migra (custom .woff) + Sentient *(Fontshare body)* — esmakordne self-hosted display-font

## Color palettes used so far

- **Urus SE:** bone + olive + ink + ember + shadow *(stealth-military luxury — hele baas)*
- **S 63 AMG:** graphite + platinum + pewter + champagne *(Nokturne platinum — tume baas)*
- **Bentley GT Azure:** bone + bone-cream + graphite + clay + flame + brass *(editorial warm-luxury — hele baas, oranž signatuur, espresso-tekst mitte must)*
