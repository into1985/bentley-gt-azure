---
name: components-md-listing-komponendi-teek
description: "Kanooniline komponendi-inventuur (`C:\\Users\\indre\\Desktop\\Listing\\COMPONENTS.md`). KOHUSTUSLIK lugemine enne IGA listing-komponendi ehitamist. Komponentide STRUKTUUR + klassinimed jäävad samaks üle projektide; muutub disaini-nahk + sisu + layout-paigutus."
metadata: 
  node_type: memory
  type: reference
  originSessionId: f8f396e2-02eb-4145-95f6-b68c0e73c93a
---

**Allikas:** `C:\Users\indre\Desktop\Listing\COMPONENTS.md`

**Indrek'i selgitatud reegel (2026-05-27):**
> *"Me kasutame samu komponente aga uuele projektile omaselt ja vajadusel/võimalusel võime nende ülesehitust/paigutust/layouti muuta."*

Tähendab — komponendid (Hero, Hook, spec-cards, Story, Gallery jne) on **stabiilne ehitusplokid** mida igale projektile kohandame, AGA layout/paigutus/ülesehitus VÕIB muutuda kui see teenib projekti. Klassinimed jäävad kanoonilised. Sisu uus. Disain nahk uus. Aga komponent-skelett (`.hero-image`, `.hero-content`, `.hook-statement`, `.spec-card`, `.spec-icon`, `.spec-label`, `.spec-value` jne) järjepidev.

**Kanoonilised klassinimed (loe COMPONENTS.md detailseks listiks):**

| Sektsioon | Põhi-klassid |
|---|---|
| Brand bar | `.brand-bar` |
| Hamburger | `.nav-toggle` + `.nav-toggle-line` |
| Nav menu | `.nav-menu`, `.nav-sections`, `.nav-cta`, `.nav-lang`, `.lang-btn` |
| Help widget | `#fhw-root`, `.fhw-btn`, `.fhw-teaser`, `.fhw-panel`, `.fhw-booking-card`, `.fhw-tabs`, `.fhw-faq` |
| Booking modal | `.booking-overlay`, `.booking-pane`, `.booking-card`, `.booking-form`, `.booking-field`, `.date-picker`, `.time-picker`, `.booking-summary` |
| Lightbox | `.lightbox`, `.lightbox-close/-prev/-next`, `.lightbox-stage`, `.lightbox-img`, `.lightbox-counter` |
| Hero | `section.hero#hero`, `.hero-image`, `.hero-content`, `.hero-headline`, `.hero-eyebrow > .inner`, `.hero-title > .line > .inner`, `.hero-meta`, `.hero-meta-left`, `.hero-price-block`, `.hero-price-label`, `.hero-price` |
| Hook + Specs | `section.hook#ulevaade`, `.hook-statement` (`<span class="em">` rõhuarvudele), `.divider` (`.l/.d/.l`) VÕI `.section-{nimi}` signature SVG, `.spec-cards`, 8× `.spec-card` (`.spec-icon` SVG + `.spec-card-meta` VÕI `.spec-content` > `.spec-label` + `.spec-value`, `.spec-value-accent` rõhuks) |
| Story | `section.story#lugu`, `.story-inner`, `.story-image-wrap`, `.story-image`, `.story-text-wrap`, `.story-text`, `.es-player` (engine-sound), `.es-canvas`, `.es-btn`, `.es-label`, `<span class="accent">` rõhuks |
| Gallery | `section.gallery-section#galerii`, `.gallery-head`, `.gallery-pin > .gallery-track`, `.gallery-item` (`<figure>`), `.image`, `.gallery-hover-icon` |
| Specs | `section.specs#mehaanika`, `.specs-head`, `.specs-title`, `.specs-meta`, `.specs-table > .specs-row > .specs-label + .specs-value`, `.specs-link` |
| ADP (konfiguratsioon) | `section.adp#lisad`, `.adp-head`, `.adp-title`, `.adp-intro`, `.accordion[data-accordion]`, `.accordion-trigger`, `.accordion-icon`, `.accordion-content`, `.accordion-panel-body`, `.specs-grid > .spec-item`, `.equipment-categories > .equipment-category`, `.purchase-facts > .purchase-fact`, `.share-wrap`, `.share-btn`, `.share-popover > .share-option`, `.share-toast` |
| Logistics | `section.logistics#logistika`, `.logistics-map` (SVG), `.route` path, `.milestone`, `.milestone-tick`, `.milestone-label`, `.map-city`, `.map-subtitle`, `.logistics-text` |
| Contact | `section.contact#kontakt`, `.contact-bg`, `.contact-inner`, `.contact-title`, `.contact-card`, `.contact-org`, `.contact-name`, `.contact-info`, `.contact-ctas`, `.btn-primary`, `.contact-bottom` (integreeritud footer) |

**Reuse-tasemed (legend):**
- 🟢 **1:1** — struktuur + JS otse kopeerida
- 🟡 **KOHANDA** — skelett jääb, osa loogikat/markup'i kohandub
- 🔵 **SISU-MALL** — komponent okei, iga auto uue sisuga

**Kohustuslik protokoll iga Faas 2.x alguses:**
1. Vaata COMPONENTS.md → leia vastav komponent
2. Loe Urus (`Listing\index.html`), Mercedes (`Listing\mercedes-s63-amg\index.html`), Bentley (`Listing\bentley-continental-gt-azure\index.html`) vastav osa grep'iga
3. Tuvasta mis on järjepidev (klassinimed, sub-komponendid, väljade järjekord) ja mis on layout-tasandi valik
4. Säilita kanoonilised klassinimed
5. Vali layout-paigutus mis pole varasemates projektides kasutatud (vt [[reference_LAYOUTS_EVOLVED]])
6. Disaini-nahk projekti-spetsiifiline (palett, fondid, signature-elemendid)

**Engine-sound player visuaalsed variandid:**
- Variant A — SVG waveform (Urus, Mercedes)
- Variant B — V8 cylinder bank (Bentley) — crossplane firing order

**Share-nupp asukoht (UNIVERSAL):**
- Vaikimisi: kontakti-CTA all (`.contact-share` Bentley'st alates)
- Alternatiiv: ADP `.share-popover` (Urus)
- Käitumine sama: Web Share API + clipboard fallback

**6 universaal käitumis-reeglit alates Bentley #3 (kohustuslik):**
| Reegel | Mälu-link |
|---|---|
| Brand-aware ::selection | `feedback_brand_selection_styling` |
| Faviconid (3 tag'i) | `reference_favicon_required` |
| Sticky button scroll-fade | `pattern_sticky_button_scroll_fade` |
| Brand-logo scroll-direction-aware hide | `pattern_brand_logo_scroll_hide` |
| Share-nupp (Jaga kuulutust) | `pattern_share_button` |
| Brand image grading + film grain | `pattern_image_grading_grain` |
