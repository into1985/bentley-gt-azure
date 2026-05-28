# Brand-logo scroll-direction-aware hide — universaalpattern

**KOHUSTUSLIK iga listing-projektis.** Brand-bar'i **logo + tekst** (`.brand-bar-left` või vastav) kaob sujuvalt nähtavalt kui kasutaja **kerib alla** ja ilmub tagasi kui kasutaja **kerib üles**. **Hamburger-nupp (`.nav-toggle`) jääb alati nähtavaks** — nav peab kogu aeg käes olema.

## Miks see oluline

- Alla-kerides kasutaja keskendub sisule → logo on häiriv
- Üles-kerides kasutaja otsib navigatsiooni / kontaktiinfot → logo tagasi
- Hamburger AGA alati nähtav — see on kasutaja navigatsiooni-mehhanism, ei tohi kaduda
- Mercedes #2 tegi scroll-progress fade (esimene 220px); Bentley #3 evolved direction-aware — parem UX
- Modernne "Headroom.js" style pattern, kohandatud listing-projektidele

## Käitumis-spec

- **Top-zone** (scrollY < 80px): logo alati nähtav (esmamulje terviklik)
- **Alla-kerimisel** (delta > 5px): `.is-hidden` lisatakse → opacity 0 + translateY(-8px) + pointer-events none
- **Üles-kerimisel** (delta < -5px): `.is-hidden` eemaldatakse → tagasi nähtavale
- **Threshold 5px** väldib jitter'it väikestest scroll-värinatest
- **rAF throttled** scroll listener → smooth + perf-friendly
- `prefers-reduced-motion`: lühem transition (0.15s linear) + ei kasuta translateY transformi

## CSS-pattern (kopeeri-kleebi)

```css
.brand-bar-left {
  /* ... olemasolevad stiilid ... */
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.brand-bar-left.is-hidden {
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
}
@media (prefers-reduced-motion: reduce) {
  .brand-bar-left { transition: opacity 0.15s linear; }
  .brand-bar-left.is-hidden { transform: none; }
}
```

## JS IIFE-pattern (kopeeri-kleebi)

```js
(function () {
  'use strict';
  const brandLeft = document.querySelector('.brand-bar-left');
  if (!brandLeft) return;

  const TOP_ZONE = 80;
  const DELTA_MIN = 5;

  let lastY = window.scrollY;
  let ticking = false;

  function update() {
    const y = window.scrollY;
    const delta = y - lastY;

    if (y < TOP_ZONE) {
      brandLeft.classList.remove('is-hidden');
    } else if (delta > DELTA_MIN) {
      brandLeft.classList.add('is-hidden');
    } else if (delta < -DELTA_MIN) {
      brandLeft.classList.remove('is-hidden');
    }

    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();
```

## Asukoht koodis

- **CSS:** otse `.brand-bar-left` bloki sisse (transition) + uus `.is-hidden` reegel + `prefers-reduced-motion` fallback
- **JS:** uus IIFE-blokk kohe Faas 4.2 (nav-menu) JS järele, enne Faas 4.3-t. Nimeta "Faas 4.2b — Brand-mark scroll-direction-aware hide"

## Märkused

- **AINULT logo** kaob (`.brand-bar-left`), MITTE kogu `.brand-bar` ega hamburger
- Kui projektis on muu nimega element (nt `.header-left`, `.logo-block`), kohanda selektor — käitumine sama
- Pole vaja GSAP'i / ScrollTrigger'it — vanilla rAF + classList toggling on piisav ja kiirem
- `pointer-events: none` peidetud-seisus, et accidentally klikkimine on välistatud
- TOP_ZONE on 80px sest brand-bar ise on ~70-90px kõrge — kuni hero-pilt veel täielikult viewport'is, logo nähtav

## Mälu-rada

- 2026-05-23 AMG #2-s tehti scroll-progress fade (esimene versioon)
- 2026-05-28 Bentley #3-s evolved direction-aware + logo-only versiooniks (parem UX)
- Indrek'i 2026-05-28 lisatud universaalreegliks töövoogu
- Seotud: `feedback_hamburger_only_nav` (hamburger jääb alati nähtavaks), `feedback_self_improving_memory`, `pattern_sticky_button_scroll_fade` (sarnane scroll-aware UI pattern)
