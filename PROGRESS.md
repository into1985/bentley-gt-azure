# Bentley Continental GT Azure V8 Hybrid — PROGRESS

**Asukoht:** `C:\Users\indre\Desktop\Listing\bentley-continental-gt-azure\`
**Müüja:** Bentley Tallinn | Auto 100 Premium OÜ (Pirni 1, Tallinn)
**Hind:** 386 653 € (sis. KM 24%)
**Algatud:** 2026-05-27
**Viimati uuendatud:** 2026-05-28 (Faas 6.1 KOMPLEKTNE — audio-pleier V8 cylinder redesign)

---

## 🎯 Praegune seis — pärast /compact'i jätka SIIT

**Aktiivne faas:** Faas 6 — Viimistlus & QA
**Faas 5 lõpetatud:** kogu lehel ühtlane mask-reveal motion-keel (clip-path inset + SVG stroke-dashoffset draw-on)

### Faas 6 plaan (alustasime ettevalmistamisega)

**Sub-task'id (üks korraga, paku variante kus disain-otsus):**

- [x] **6.1** Audio-pleier visuaalne redesign ✓ (B-variant: V8 cylinder bank). Kandiline switchgear-nupp 48×48 (border-radius 2px) asendab ringnuppu. SVG-waveform asendatud 8 püstise silindriga `.es-cyl` mis "süttivad" alt-üles `.es-cyl-fire` (scaleY 0.08→1→0.45→0.12) crossplane V8 firing-order järgi 1-8-4-3-6-5-7-2 (delay 0/0.7/0.3/0.2/0.5/0.4/0.6/0.1s, 0.8s tsükkel). `.es-sub` näitab firing-order'it editorial-detailina. Spark-plug tips iga silindri kohal `::before` peen detail. Mobile: 100% width, max 18px silindri-laius. `prefers-reduced-motion`: staatiline scaleY(0.55). JS `.is-playing` hook + Faas 5.3 mask-reveal puutumatud.
- [x] **6.2** Mobile + cross-browser QA ✓ Desktop (1440), Tablet (768), Mobile (375) preview MCP eval'idega. 0 console errors. Komponendi-state'id puhtad: gsap+ST loaded, html.js, 8 cylinders + 8 fires, brand-left + fhw-root + share-btn olemas. Filters validated: hero/gallery `brightness(0.97) contrast(0.96) saturate(0.96)` rakendub, `.wellness-sketch img` filter:none ✓. Scroll-käitumine: brand-bar hide alla, ilmub üles, FHW fade-in/out hook'il ✓. Scroll-lock: html.is-scroll-locked + overflow hidden ✓. **Fixed P1 touch-target'id (kõik nüüd 44×44):** `.nav-toggle` 32→44, `.lightbox-close` 40→44, `.booking-close` 36→44, `.fhw-panel-close` 28→44 (lisaks -8px margin offset visuaalseks compensation'iks). Cross-browser features: kõik CSS-id (grid/flex/clip-path/mix-blend-mode/scrollbar-width) toetatud; Web Share API puudus → clipboard fallback aktiveerub korrektselt; `::-moz-selection` + `-webkit-` prefiksid olemas.
- [x] **6.3** Custom scrollbar ✓ (A: hairline graphite). 6px lai, track transparent, thumb `rgba(27,24,20,0.25)` → `0.55` hover, no border-radius (sharp editorial). Firefox: `scrollbar-width: thin` + `scrollbar-color`. WebKit: `::-webkit-scrollbar*` täiskomplekt. Brand-vaikuse-printsiip säilitatud.
- [x] **6.4** SEO meta + OG + JSON-LD ✓. Title: "Bentley Continental GT Azure V8 Hybrid · Läbisõit 62 km". Description: 62 km + Satin Orange + Azure-varustus + Naim + Rotating Display. Canonical: `https://bentley-gt-azure.vercel.app/`. OG: Bentley-Open-Graphic.jpg (1200×630). Twitter `summary_large_image`. JSON-LD `@type: Car`: brand Bentley, model "Continental GT Azure", year 2026, NewCondition, 62 km (KMT), V8 Hybrid 4.0L/500kW, Orange Flame Satin Mulliner, offer 386 653 EUR InStock, seller AutoDealer Bentley Tallinn / Auto 100 Premium OÜ, Pirni 1 Tallinn EE.
- [x] **6.5** `prefers-reduced-motion` täielik audit ✓ — KÕIK PUHAS, fix'e ei vajatud. 7 JS IIFE (5.1-5.7) + 10 CSS @media bloki (sh 6.1 V8 cylinder + accordion content + FAQ content). Defense-in-depth: JS inline-style + CSS @media kahekordne. Hero pin-cinema: JS return'ib enne ScrollTrigger'i loomist → staatiline sektsioon. Hero curtain: `display: none`.
- [x] **6.6** LAYOUTS-EVOLVED.md + COMPONENTS.md uuendus Bentley #3-ga ✓ Canonical failid (`Listing\LAYOUTS-EVOLVED.md` + `Listing\COMPONENTS.md`) + mälu-mirror'id (`reference_LAYOUTS_EVOLVED.md` + `reference_COMPONENTS_md.md`) sünkroniseeritud. Lisatud: Projekt #3 täisplokk (mood/palett/font/motiivi-diamond-mesh/7 layout-mustrit/7 scroll-momenti/6 universaalreeglit/custom SVG/CTA pressed-paper). Catalogue'is märgitud kasutatud: Split hero + pin-cinema curtain, sync vertical+horizontal story + V8 cylinder audio, diagonal cascade gallery, Mulliner deep-dive + Wellness sketch, pair-grouped editorial contact. Universal patterns sektsioon lisatud 6 mustriga + mälu-linkidega. Font-paaride + paletide loend uuendatud. COMPONENTS.md uus sektsioon 6 — "Universaal käitumis-reeglid" tabel. Engine-sound player 2 visuaalset varianti dokumenteeritud (A waveform / B V8 cylinder). Share-nupp asukoht dokumenteeritud (contact-CTA default, ADP alternatiiv).
- [x] **6.14** Pre-deploy code cleanup ✓ Eemaldatud kõik build-process noise: 63 Faas X.Y referencit, 29 cross-project (Mercedes/AMG/Urus) narratiivi, 6 memory-file referencit (`pattern_X`, `feedback_X`, `vt mälu`), 11 Indrek mentions, 1 TODO faasi-viide. Säilitatud: WHY-kommentaarid (clip-path GSAP workaround, file:// AudioContext quirk), accessibility-märkused, browser-quirk hoiatused. **Final audit:** 0 Faas/0 cross-project/0 memory-ref/0 Indrek/0 console.log/1 genuine TODO (i18n switching). File size: 192 KB → 189 KB (-2.8 KB cleanup). Funktsionaalsus verified live: 31 image 0 broken, GSAP+ST+Lenis+8 cyl + 24 thumbs + 2 lightbox stack + share + FHW kõik intact, 0 console errors. One-shot cleanup-skriptid (`cleanup-comments.js`, `cleanup-comments-2.js`) kustutatud.
- [x] **6.13** Pildid PNG → WebP optimization ✓ Konverteeritud 31 PNG-d `/images/` kaustas WebP'sse (quality 85, effort 6, sharp v0.34) Node.js skriptiga (`convert-images.js` projektis säilinud). **Tulemus: 54.8 MB → 3.0 MB = -94.5%, säästsime 51.8 MB.** Per-file reductionid 87-96% vahemikus (uncompressed PNG-d olid massiivsed). HTML/CSS reference'eid uuendatud regex'iga 39 kohta (`images/X.png` → `images/X.webp`). Säilitatud: `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png`, `Bentley-Open-Graphic.jpg` puutumata. **PNG-d jäid kausta backupiks** — kustuta pärast Vercel deploy verifit. Verified live: 0 broken images, hero+contact bg WebP-references, visual quality eristamatu originaalist. Universaalpattern memory `pattern_image_optimization_webp.md` loodud (täielik skript + protokoll + tuning-tabel + lõksud) tulevaste projektide jaoks.
- [x] **6.12** Lightbox mask-sweep image transitions (direction-aware) ✓ Brand-coherent Faas 5 mask-reveal language'iga, asendab igavat `img.src` flash-replace'i. **Markup:** wrap single img → `<div class="lightbox-img-stack">` + 2 `<img>` data-slot="a"/"b". **CSS:** stack on `display: grid; grid-template-areas: "img"` (mõlemad samasse cell'i, sized by content + object-fit: contain). 2 direction-aware classid: `.is-entering-next` `clip-path: inset(0 var(--reveal-x) 0 0)` (mask paremalt), `.is-entering-prev` `inset(0 0 0 var(--reveal-x))` (mask vasakult). **JS:** flip-flop roles (activeImg/inactiveImg), `transitTo(idx, direction)` seab incoming src, z-index 2, direction class, --reveal-x 100% init, GSAP tween → 0% (0.7s `power2.inOut`), onComplete swap roles. Active tween reference (`activeTween.kill()`) rapid-click abort'iks. `prefers-reduced-motion`: instant swap CSS + JS bypass. Verified live: next 1→2 mid (80ms) --reveal-x 99.33%, end roles swap'itud (B z=2, A z=1). Prev 2→1: --reveal-x 98.83% L→R direction. Universal pattern memory `pattern_mask_reveal_language.md` uuendatud (lightbox-transit sektsioon koos CSS+JS koodiga).
- [x] **6.11** Audio-pleier Web Audio sync ✓ Kahe-režiimi switch implementeeritud (AMG-st õpitud, nüüd koodina + universaalreegel mälus). Kontroll: `AudioCtx` olemas JA `location.protocol !== 'file:'` (file:// Chrome'is taintib audio output'i → mute). https:///localhost → setupWebAudio(): `createMediaElementSource(audio)` + `AnalyserNode` fftSize 128 (64 bins) + `smoothingTimeConstant 0.72`, source → analyser → destination. `.is-analysing` klass override'b CSS keyframe. RAF-loop loeb `getByteFrequencyData`, 8 bins per cylinder averaged → 0..1 → 0.08..1.0 → `--fire` custom property. User-gesture'i sees `audioCtx.resume()` + setup AINULT esimesel klikkil (createMediaElementSource throws InvalidStateError kahekordsel). Graceful fallback: try-catch → kui fail, CSS-anim jätkab nähtamatuks kasutajale. Verified live localhost http://: cyl 1 (bass band) 0.75→0.67→0.62→0.58→0.46 decay (V8 mootori bass-rumble amplitude envelope), cyl 4 (mid) ja cyl 8 (treble) idle 0.08 — sünk MP3 sageduste'ga ✓. Pause → kõik cylinders reset 0.08-le.
- [x] **6.10** Lenis smooth scroll integratsioon ✓ Lenis 1.1.20 CDN lisatud `<head>`-i pärast GSAP. Init IIFE peale Faas 4.1 (Universal JS), enne Faas 4.2. Konfiguratsioon: duration 1.15, easing expo-out, `smoothWheel: true`, `smoothTouch: false` (touch jätab natiivseks), `prefers-reduced-motion` skip (kasutab natiivset scrollIntoView fallback'i). GSAP ticker bridge (`gsap.ticker.add` + `lagSmoothing(0)`) — üks ühtne render-loop. ScrollTrigger bridge (`lenis.on('scroll', ScrollTrigger.update)`). Scroll-lock wrap KRIITILINE: `bx.lockScroll` peatab Lenis'i (vastasel juhul scroll lekib modal'i taga olevasse lehte). Nav-menu anchor refactor: kasutab `bx.scrollTo()` 520ms delay'iga peale closeMenu (oot nav-menu mask-reveal close'i lõppu). Verified live: 0 console errors, Lenis scroll-tracking sync window.scrollY-ga, split-collapse scrub töötab Lenis'i sees (--content-w 20.83% at scroll 450px). Universaalreegliks tehtud — uus mem `pattern_lenis_smooth_scroll.md` + LAYOUTS-EVOLVED.md uuendatud.
- [x] **6.9** Hero split-collapse scrub ✓ ASENDAB Mercedes #2-st 1:1 pin-cinema curtain'i (Indrek'i idee). Vasak tekst-paneel kahaneb (CSS custom property `--content-w: 41.667% → 0%` GSAP scrub'iga, grid-template-columns animeerub var() kaudu) + tühjeneb (y -80px, opacity 0). Parem foto-paneel laieneb täis-bleediks (auto-fill 1fr veerg). Foto jääb paigal (object-fit: cover; object-position: center) — raam laieneb ÜLE, näitab rohkem fotost (õige object-cover käitumine). Ei blur'i, ei bone-curtain'i, ei Ken Burns scale'i. 100vh pin, scrub 0.6, anticipatePin 1. `gsap.matchMedia('(min-width: 721px)')` — mobile'l skip (paneelid juba stack'is mobile media-query'is). Eemaldatud: `.hero-curtain` markup/CSS/JS. Entry timeline (eyebrow + title-lines + meta sisse-reveal stagger) säilis. Verified live preview eval'iga: --content-w interpoleerub 41.667% → 20.833% → 0% sujuvalt, grid 596|834 → 298|1132 → 0|1430, opacity 1 → 0.5 → 0. Award-worthy panel-collapse transformation, kasutab split-layouti tahtlikult. **Refinement (Indrek'i tellitud):** tekst-fade kestab 45% pin'ist (duration 0.45), paneel-collapse kogu pin'i (duration 1.0). Tulemus: tekst on opacity 0 juba 405px peal, paneel kahaneb veel 495px ulatuses puhtas vaates. Väldib mid-state "tekst kleebitakse serva" muljet — kaks selget faasi: (1) tekst tühjeneb, (2) paneel sulgub.
- [x] **6.8** Nav-menu mask-reveal avanemine/sulgemine ✓ Variant A: clip-path inset ülevalt alla, 0.5s `power2.inOut`. CSS custom property workaround per `feedback_clip_path_gsap_workaround` (animeeri `--nav-reveal: 100% ↔ 0%`, mitte clip-path otse). openMenu: aria-hidden=false → GSAP tween 100%→0%. closeMenu: GSAP tween 0%→100% → onComplete sets aria-hidden=true + unlockScroll + restore focus. `prefers-reduced-motion`: instant snap (JS bypass + CSS @media fallback). Nav-menu motion-keel nüüd kooskõlas Faas 5 holistilise mask-reveal'iga. Verified via preview eval: --nav-reveal 100→96.9→0→3.2→100% smooth interpolation.
- [x] **6.7** Mälu-uuendused ✓ Kaks uut memory-faili loodud + MEMORY.md indeks uuendatud. (1) `pattern_mask_reveal_language.md` — universaalpattern listing'utele: clip-path inset mask-sweep + SVG stroke-dashoffset draw-on, 4 sweep-suunda, stagger-rütm reeglid, ühtne `power2.inOut` ease, Faas 5 holistilise passi protokoll, prefers-reduced-motion defense-in-depth. (2) `feedback_clip_path_gsap_workaround.md` — kriitiline tehniline reegel: GSAP ei interpoleeri clip-path'i otse → CSS custom property workaround (`--reveal-x: 100% → 0%`), CSS arvutab `clip-path: inset(var(--reveal-y) var(--reveal-x) 0 0)`. Bentley Faas 5.2-s lahendatud, testitud 7 sektsioonil.

---

## Faasi-seis

### Faas 1–3 ✓ (kõik plaan + staatiline sisu + overlay'd)
### Faas 4 — Interaktsioonid & JS ✓ KOMPLEKTNE
- 4.1 Universal `window.bx.*` (scroll-lock + focus-trap + ESC)
- 4.2 Nav-menu, 4.3 Lightbox, 4.4 Booking modal, 4.5 Audio player, 4.6 Accordion, 4.7 FHW widget

### Faas 5 — Animatsioonid ✓ KOMPLEKTNE
**Brand motion-keel** (kogu leht ühtlane):
- `clip-path: inset()` mask-reveal — vertikaalne (--reveal-y) headline'idele/pildidele, horisontaalne (--reveal-x) body-text'idele/cardidele
- CSS custom property workaround (GSAP ei interpoleeri `inset()` otse)
- SVG stroke-dashoffset draw-on ikoonidele (200 → 0)
- Sync-reveal konseptuaalselt-paaris elementidele (per memory `feedback_sync_reveals`)
- `html.js` klass + initial states + `prefers-reduced-motion` fallback igas IIFE'is
- ScrollTrigger 'top 72-75%' onEnter trigger, toggleActions 'play none none none'

**Sub-task'id:**
- 5.1 Hero pin-cinema curtain (variant C) — image scale + bone-curtain + content blur scrub
- 5.2 Hook + Spec-grid mask sweep — horisontaalne + 8 spec-card stagger + SVG draw-on
- 5.3 Story sync paar (title+image vert) + body horiz + es-player horiz
- 5.4 Galerii diagonal Manhattan cascade (24 pilti)
- 5.5 ADP cascade + (lisand) accordion-content mask reveal expand/collapse'il (ADP + FAQ)
- 5.6 Wellness sketch (vert) + heading paar + 3 rida cascade + ikoonid draw-on
- 5.7 Contact pair-grouped editorial (title üksi + 2 paari sync)

### Faas 6 — Viimistlus & QA (POOLELI, alustab pärast /compact'i)
Vt ülal "Faas 6 plaan".

---

## Olulised projekti-muudatused

- **Process sektsioon EEMALDATUD** (2026-05-28) — kogu HTML + CSS + nav-link kustutatud. Info konsolideeritakse Contact (footer-CTA) sektsiooni. Lehe järjekord nüüd: Hero → Hook → Story → Galerii → ADP → Wellness → Contact.
- **Wellness sketch** lisatud (`images/sketch.png`, max-width = wellness-inner 1240px, `clamp(3.5rem, 7vw, 6rem)` margin-bottom). Animeeritud Faas 5.6-s vertikaalse maskiga.

---

## 🔁 Tuleme tagasi (Faas 6 kandidaadid)

- **Audio-pleier `.es-player`** — visuaalne redesign liiga sarnane Mercedes'iga (vt Faas 6.1). Faas 4.5 JS-loogika ja Faas 5.3 motion jäävad alles, AINULT visuaalne keel ehk struktuur võib muutuda. Variandid (pakuda ehituse käigus): knurled wheel marker, tachometer arc, vertical-cylinder V8-bars, või julgem.
- **Spec-card ikoonid audit** — kontroll: kas 8 SVG erineb Urus + Mercedes piisavalt
- **Custom hamburger audit** — vs Mercedes'i hamburger

---

## Kontekst

- **Voice:** B (auto enda hääl, esimese-isiku)
- **Brand-bar:** `Bentley Tallinn · Pirni 1` + custom hamburger
- **Hind:** 386 653 € (sis. KM 24%)
- **Kontakt:** AINULT Kristjan Uuk (kristjan.uuk@auto100premium.ee, +372 516 1115)
- **Failid:** `index.html`, `images/{hero,story,sketch,footer,1-24}.png`, `audio/sound.mp3`, `font/Migra-{Extralight,Extrabold}.woff2`
- **Preview server:** port 8766 (`.claude/launch.json` "bentley" config)
- **Eelmised projektid:**
  - Urus #1: `Listing\index.html`
  - Mercedes #2: `Listing\mercedes-s63-amg\index.html`

---

## Tehnilised märkused

- **GSAP CDN** `<head>`'is sünkroonselt (mitte defer) — meie inline IIFE blokid faili lõpus saavad `gsap` kohe kasutada
- **Brand motion-DNA:** mask-reveal (mitte y+opacity), aeglane 1.0–1.4s, deliberate, expensive
- **GSAP clip-path probleem:** GSAP ei interpoleeri `inset()` otse → kasutame CSS custom property `--reveal-x` / `--reveal-y` + clip-path osutab sellele. Animeerime CSS variabli, browser interpoleerib clip-path.
- **Headline'id (vert mask) vs body (horiz mask):** kahe-direktsiooniline brand-keel mis annab visuaalse signaali element-tüübi kohta

---

## Kriitilised reeglid mida JÄRGIN

- [[reference_AI_KULDREEGLID]] — 12 reeglit (eriti reegel 11: Loe → Kaardista → Ütle → Üks väike muudatus → Kontrolli → Raporteeri)
- [[feedback_stop_after_every_section]] — ÜKS sektsioon korraga, stop + ootus pärast
- [[feedback_propose_design_variants_first]] — paku 2-4 motion-varianti enne ehitust (NB! rikkusin reeglit audio-pleier reveal'il Faas 5.3-s — vabandasin)
- [[feedback_bolder_motion]] — julgem motion, iga projekt 1 uus tehnoloogia (mask-reveal vocabulary on selle projekti uus tehnoloogia vs Urus/Mercedes)
- [[feedback_sync_reveals]] — konseptuaalselt-kokku-kuuluvad elemendid PARALLEELSELT (Story title+image, Galerii title+intro, ADP title+intro, Wellness title+intro, Contact lede+card)
- [[feedback_component_design_must_differ]] — Faas 6.1 audio-pleier redisain
- [[feedback_token_budget]] — lühem mõjuala, sihistatud Edit'id, 3-rea raport
