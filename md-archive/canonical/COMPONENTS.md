# COMPONENTS.md — Listing komponendi-teek

Dokumenteeritud komponendi-inventuur. Allikas: **projekt #1 — Lamborghini Urus SE** (`index.html`, 6283 rida).

**Eesmärk:** see fail on baas-teek, mille peale järgmised auto-lehed ehitatakse. Komponentide
*struktuur, käitumine ja JS-loogika jäävad samaks*. Muutub ainult **disaini-nahk** (värvid, fondid,
spacing, illustratsioonid) ja **sisu** (auto andmed, fotod, müüja).

Legend reuse-märgetes:
- 🟢 **TAASKASUTA 1:1** — struktuur + JS kopeeri otse, ainult sisu/CSS-token'id muutuvad
- 🟡 **TAASKASUTA, KOHANDA** — skelett jääb, aga osa loogikat/markupit kohandub auto järgi
- 🔵 **SISU-MALL** — komponent on hea, aga iga auto täidab uue sisuga (tekstid, arvud, fotod)

---

## 0. Globaalne infrastruktuur

| Element | Kirjeldus | Reuse |
|---|---|---|
| `:root` token'id | `--bone`, `--bone-warm`, `--olive`, `--olive-deep`, `--ink`, `--ember`, `--shadow`, `--scrollbar-compensation` | 🟡 token-NIMED jäävad, VÄÄRTUSED muutuvad iga auto paletiga |
| Fondid | Fontshare: **Eiko** (display, 400–800) + **General Sans** (body, 300–700) | 🟡 paar muutub iga auto järgi — vt page-craft.md font-reeglid |
| `<head>` SEO | `<title>`, meta description, OG/Twitter tags, `product:price`, JSON-LD `@type:"Car"` | 🔵 struktuur 1:1, väärtused per auto |
| Favicon komplekt | `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png` | 🟡 per müüja/bränd |
| `body.is-scroll-locked` | Scroll-lock klass + `--scrollbar-compensation` (väldib layout-nihet kui modal avaneb) | 🟢 universaalne — kopeeri otse |
| Custom scrollbar | Igal auto müügilehel peab olema brändipaletist tuletatud vaikne custom scrollbar (`scrollbar-color` + `::-webkit-scrollbar*`). Kasuta lehe enda disainitokeneid; pöial olgu premium-aktsendiga, track neutraalne, mitte dekoratiivne. | 🟡 kohanda iga auto paletiga |
| Pildi-optimeerimine | Enne deploy'd konverteeri müügilehe fotod WebP/AVIF formaati, uuenda HTML/CSS/JS faililaiendid ning jäta PNG/JPG alles ainult faviconi, OG preview või teadliku fallback'i jaoks. | 🟢 kohustuslik kontroll enne üleslaadimist |
| GSAP CDN | gsap 3.12.5 + ScrollTrigger cdnjs-st | 🟢 sama |

**Universaalne scroll-lock helper** (JS) — vt `LAYOUTS-EVOLVED.md`. Lukustab `body`, kompenseerib
scrollbari laiuse, hoiab `.nav-toggle / .booking-close / #fhw-root` paigal. 🟢 kopeeri otse.

---

## 1. Chrome — püsielemendid

### 1.1 Brand-bar — `<header class="brand-bar">`
Vasakus ülanurgas püsiv väike silt (`mix-blend` hero pildi peal). Sisu: `Autohaus · Tartu`.
- Struktuur: `.brand-bar > .left > a`
- 🔵 **SISU-MALL** — bränd/asukoht muutub; mix-blend käitumine jääb.

### 1.2 Hamburger-nupp — `<button class="nav-toggle">`
Kaks `.nav-toggle-line` riba, paremas ülanurgas. `aria-expanded` togeldab menüü.
- 🟢 **TAASKASUTA 1:1** — ikooni morph (hamburger → X) jääb.

### 1.3 Navigatsioonimenüü — `<nav class="nav-menu">`
Täisekraan-overlay. Kaks veergu:
- `.nav-left` → `.nav-sections` (ankrulingid sektsioonidele) + `.nav-lang` (ET·EN keelelüliti, `.lang-btn`)
- `.nav-contact` → müüja nimi, tel/email, `.nav-cta` nupp
- Ankrud sektsiooni-ID-dele: `#ulevaade #lugu #galerii #mehaanika #lisad #logistika #kontakt`
- ⚠️ `.nav-lang` lülitil on `<!-- TODO: implement i18n switching -->` — visuaal valmis, i18n-loogika pole
- 🟡 **TAASKASUTA, KOHANDA** — struktuur 1:1; sektsiooni-ankrud ja kontakt per auto.

### 1.4 Floating help widget — `<div id="fhw-root">`
Paremas alanurgas hexagon-nupp + teaser-mull + paneel.
- `.fhw-btn` — kuusnurkne nupp, ikooni morph (chat ↔ X)
- `.fhw-teaser` — "Küsi lisainfot või broneeri proovisõit" mull, sulgemisnupp
- `.fhw-panel` — paneel: `.fhw-booking-card` (CTA → broneerimismodal), `.fhw-tabs` (KKK / Küsi),
  `.fhw-faq` (6× accordion-küsimust), `.fhw-tab-chat` ("AI-assistent tulemas" placeholder)
- JS: IIFE alates ~5621, `openPanel/closePanel`, fookuse-haldus
- 🟡 **TAASKASUTA, KOHANDA** — kogu mehaanika 1:1; **KKK küsimused-vastused per auto** (🔵).

---

## 2. Overlay'd / modaalid

### 2.1 Broneerimismodal — `<div class="booking-overlay" id="booking-overlay">`
3-sammuline broneerimisvoog. Kõige keerukam komponent — 🟡 **TAASKASUTA, KOHANDA**.
- **Progress** — `.booking-progress` 3× `.booking-step-dot` + `.booking-step-line`
- **Samm 1** — `.booking-pane#booking-pane-1`: pealkiri + 2× `.booking-card`
  (`data-visit="virtual"` / `"onsite"`), `.booking-card-check` linnuke
- **Samm 2** — `.booking-pane#booking-pane-2`: `.booking-form` väljadega
  - `.booking-field` × nimi/telefon/email + `.booking-error` validatsiooniteade
  - **Custom date-picker** — `.date-picker` (kuude navigatsioon, nädalapäevad, `.date-picker-grid`)
  - **Custom time-picker** — `.time-picker` 3× `.time-picker-option` (hommik/pärastlõuna/õhtu)
  - `.booking-textarea` lisainfo (valikuline)
- **Samm 3** — `.booking-pane#booking-pane-3`: `.booking-success` + `.booking-summary` (`<dl>` kokkuvõte)
- `.booking-close` nupp overlay'st väljas (2× rida → X)
- Reuse: kogu voog + date/time-picker + validatsioon 1:1; sisu (auto-spetsiifiline tekst) per auto.

### 2.2 Lightbox — `<div class="lightbox" id="lightbox">`
Galerii suurenduse-vaade. `.lightbox-close/-prev/-next`, `.lightbox-stage` (2× `.lightbox-img`
cross-fade'iks), `.lightbox-counter` ("01 / 23").
- 🟢 **TAASKASUTA 1:1** — prev/next/zoom/counter loogika jääb; piltide arv muutub.

---

## 3. Lehe sektsioonid (järjekorras)

### 3.1 HERO — `<section class="hero" id="hero">`
- `.hero-image` — taustpilt (Ken Burns scale entry's)
- `.hero-content > .hero-headline` → `.hero-eyebrow` (`.inner` wrapper) + `.hero-title`
  (`.line > .inner` rea-kaupa reveal'iks)
  - ⚠️ **Õppetund:** eyebrow + title PEAVAD olema ühises `.hero-headline` konteineris ja scroll
    animeerib KONTEINERIT — muidu nad nihkuvad lahku ja kattuvad. Vt `HERO_MOTION_CHECKLIST.md`.
- `.hero-meta` → `.hero-meta-left` (kirjeldus) + `.hero-price-block` (`.hero-price-label` + `.hero-price`)
- 🟡 **TAASKASUTA, KOHANDA** — struktuur + pin-scrub 1:1; sisu per auto.

### 3.2 HOOK + spec-kaardid — `<section class="hook" id="ulevaade">`
- `.hook-statement` — suur lause, `<span class="em">` rõhuarvudele
- `.divider` — `.l/.d/.l` teemant-jaotur
- `.spec-cards` — 8× `.spec-card`: hand-drawn `.spec-icon` SVG + `.spec-label` + `.spec-value`
  (`.spec-value-accent` rõhuks)
- 🔵 **SISU-MALL** — 8 kaarti on hea kogus; ikonid + arvud per auto. Grid 1:1.

### 3.3 STORY — `<section class="story" id="lugu">`
- `.story-inner` → `.story-image-wrap` + `.story-text-wrap`
- `.story-image` — **video** (autoplay/muted/loop) parallax'iga VÕI staatiline foto
- **Engine-sound player** — `.es-player`: `<audio>` + visuaalne aktsent (`.es-canvas` waveform VÕI `.es-cylinders` cylinder bank), `.es-btn` play/pause (ikooni-morph), `.es-label`, `.es-error`. **Visuaalne disain varieerub per-project** — JS-hookid (`#es-btn`, `.is-playing`, audio handling) jäävad samaks.
  - **Variant A — SVG waveform** (Urus, Mercedes): horisontaalne `.es-line` ribade kogum, sinise V8 oscilleerib
  - **Variant B — V8 cylinder bank** (Bentley): 8× `.es-cyl` (`.es-cyl-fire` scaleY anim) crossplane firing-order 1-8-4-3-6-5-7-2; `.es-sub` näitab firing-order'it editorial-detailina
- `.story-text` — `<p>` lõigud, `<span class="accent">` rõhuks
- 🟡 **TAASKASUTA, KOHANDA** — engine-sound player skelett + JS 1:1 (auto-spetsiifiline feature); **visuaalne disain per-project** (sama skelett, uus nahk); tekst + video/foto per auto.

### 3.4 GALLERY — `<section class="gallery-section" id="galerii">`
- `.gallery-head` (`.adp-title` + `.adp-intro`)
- `.gallery-pin > .gallery-track` — horisontaalne pin-scroll, drag-to-scroll
- `.gallery-item` (`<figure>`) — `.image` (bg-image) + `.gallery-hover-icon` (suurendusklaas SVG)
- JS: ScrollTrigger pin + `x`-tween, mouse-drag → `window.scrollTo`, klikiblokeering peale drag'i
- 🟢 **TAASKASUTA 1:1** — pin + drag loogika jääb; piltide arv/failid per auto.

### 3.5 SPECS — `<section class="specs" id="mehaanika">`
- `.specs-head` → `.specs-title` (`<span><span>` 2-realiseks) + `.specs-meta`
- `.specs-table` — `.specs-row` (`.specs-label` + `.specs-value`), ember-sweep hover
  - `.specs-link` välislingiks (nt Transpordiamet)
- 🔵 **SISU-MALL** — tabel-struktuur 1:1; read per auto.

### 3.6 KONFIGURATSIOON / ADP — `<section class="adp" id="lisad">`
Suurim sisu-sektsioon. Sisaldab korduvkasutatavaid alamkomponente:
- `.blueprint-container > .blueprint-image` — auto blueprint-pilt
- `.adp-head` (`.adp-title` + `.adp-intro`)
- **Accordion** ×3 — `.accordion[data-accordion]`: `.accordion-trigger` (`aria-expanded`,
  `.accordion-icon` chevron) + `.accordion-content > .accordion-panel-body > .accordion-panel-inner`
  1. *Tehniline teave* — `.specs-grid` × `.spec-item` (label+value)
  2. *Lisavarustus* — `.equipment-categories` × `.equipment-category` (`.equipment-cat-title` + `.equipment-list`)
  3. *Seisukord ja ostuinfo* — `.description-section`: `.description-copy` (`.description-text` +
     `.purchase-contact`) + `.purchase-facts` (`.purchase-fact` label/value grid)
- **Share-nupp** — `.share-wrap`: `.share-btn` + `.share-popover` (5× `.share-option`: kopeeri
  link / email / WhatsApp / Facebook / X) + `.share-toast` ("Link kopeeritud")
- 🟡 Accordion-mehaanika 🟢 1:1. Share-nupp 🟢 1:1. Sisu (varustusnimekirjad, ostuinfo) 🔵 per auto.

### 3.7 LOGISTICS — `<section class="logistics" id="logistika">`
- `.logistics-map` — SVG `viewBox="0 0 580 380"`: grid-jooned, `.route` path (draw-on),
  4× milestone (`.milestone` + `.milestone-tick` + `.milestone-label`), origin/dest punktid
  (`.map-city` + `.map-subtitle`)
- `.logistics-text` — pealkiri + 2× `<p>`
- 🟡 **TAASKASUTA, KOHANDA** — SVG-kaardi struktuur + route-draw 1:1; origin/dest/milestone'id
  per auto (kust auto tuleb, kuhu läheb).

### 3.8 CONTACT + footer — `<section class="contact" id="kontakt">`
- `.contact-bg` — taustpilt
- `.contact-inner` → `.contact-title`, `.contact-card` (`.contact-org` + `.contact-name` +
  `.contact-info` tel/email), `.contact-ctas > .btn-primary` + **`.contact-share` (UNIVERSAL alates Bentley #3)** — sekundaarne "Jaga kuulutust" nupp Web Share API + clipboard fallback'iga; muted color → accent hover/success
- `.contact-bottom` — integreeritud footer (`© 2026 …`)
- ⚠️ **Listing'utel vaikimisi ÜKS kontakt** (primary sales/owner) — mitu kontakti = otsustamise friction. Vt mälu: `feedback_single_contact_default`.
- 🔵 **SISU-MALL** — struktuur 1:1; müüja + copyright per auto. Share-nupp 🟢 1:1.

---

## 4. Korduvad alamkomponendid (cross-section)

| Komponent | Klassid | Kus kasutusel | Reuse |
|---|---|---|---|
| Primaarnupp | `.btn-primary` | Contact, nav-cta | 🟢 1:1, värv per palett |
| Accordion | `.accordion` + `[data-accordion]` | ADP ×3, fhw-faq | 🟢 1:1 |
| Sektsiooni-päis | `.adp-head` (`.adp-title` + `.adp-intro`) | Gallery, ADP | 🟢 1:1 |
| Teemant-jaotur | `.divider` (`.l`/`.d`/`.l`) | Hook | 🟢 1:1 |
| Hexagon-nupp | `.es-btn`, `.fhw-btn` | Story player, help widget | 🟢 vorm 1:1 |
| Hand-drawn SVG ikoon | `.spec-icon` (stroke, viewBox 0 0 32 32) | Spec-kaardid | 🟡 stiil jääb, motiivid per auto |
| Rõhutekst | `.em` (display), `.accent` (body) | Hook, story, jne | 🟢 1:1 |

---

## 5. Kasutuse reegel järgmise auto jaoks

1. **Komponendid jäävad samaks** — skelett, klassinimed, JS-loogika kopeeritakse otse.
2. **Disain muutub täielikult** — uus palett (`:root` token'id), uus font-paar, uus spacing-rütm,
   uued illustratsioonid/ikoonid. Vt `LAYOUTS-EVOLVED.md` + `page-craft.md`.
3. **Sisu on alati uus** — 🔵-märgitud kohad täidetakse auto andmetega nullist.
4. **Ehita sektsioon-haaval, ilma animatsioonita.** Animatsioon on viimane terviklik pass.
   Vt `listing/SKILL.md` build-workflow.
5. Kui mõni komponent saab projektis #2 paremaks tehtud → uuenda see kirje siin.

---

## 6. Universaal käitumis-reeglid (KOHUSTUSLIK iga listing-projektis)

Lisaks komponendi-skelettile rakendab iga listing-projekt **6 universaal käitumis-mustrit** mis defineerivad lehe luxury-tunde aluskihti. Need on **automaatselt eeldatud**, vajab eraldi väljakutset ainult siis kui projekt jätab teadlikult välja.

| Reegel | Mida teeb | Memory-link |
|---|---|---|
| **Brand-aware `::selection`** | Tekstivaliku värv = accent + heledaim bg (ei browser-default sinine) | `feedback_brand_selection_styling` |
| **Faviconid (3 link tag'i)** | `favicon.ico` + `favicon-32x32.png` + `apple-touch-icon.png` (180×180) — pärast canonical, enne OG | `reference_favicon_required` |
| **Sticky button scroll-fade** | FHW peidetud hero'l, ilmub `.hook`-sektsioonil, kaob tagasi-scroll'il + sulgeb avatud paneeli | `pattern_sticky_button_scroll_fade` |
| **Brand-logo scroll-direction-aware hide** | `.brand-bar-left` kaob alla, ilmub üles; hamburger jääb alati nähtavaks | `pattern_brand_logo_scroll_hide` |
| **Share-nupp (Jaga kuulutust)** | Web Share API + clipboard fallback; kontakti-CTA all vaikimisi | `pattern_share_button` |
| **Brand image grading + film grain** | CSS filter (`brightness/contrast/saturate` konservatiivselt) + page-wide SVG `feTurbulence` grain | `pattern_image_grading_grain` |

**Lisaks töövoo-reeglid (vt mälu):**
- `feedback_hamburger_only_nav` — top-bar AINULT brand-mark + hamburger, ei nähtavaid linke
- `feedback_single_contact_default` — Contact-sektsioonis vaikimisi ÜKS isik
- `feedback_read_prior_listing_first` — Faas 2.x alguses LOE eelmise listingu vastav komponent (skelett 1:1)

**Kohustuslik protokoll iga Faas 2.x alguses (juba olemas):**
1. Vaata COMPONENTS.md → leia vastav komponent
2. Loe Urus (`Listing\index.html`) + Mercedes (`Listing\mercedes-s63-amg\index.html`) + Bentley (`Listing\bentley-continental-gt-azure\index.html`) vastav osa
3. Tuvasta järjepidev (klassinimed, sub-komponendid) vs layout-tasandi valik
4. Säilita kanoonilised klassinimed
5. Vali layout-paigutus mis pole varasemates projektides kasutatud
6. Disaini-nahk uue projekti-spetsiifiline (palett, fondid, signature-elemendid)
7. **Universaalreeglid (sektsioon 6) rakendub automaatselt — pole vaja eraldi mainida**
