# Sticky button scroll-fade — universaalpattern

**KOHUSTUSLIK iga listing-projektis.** Floating sticky button (tavaliselt FHW = Floating Help Widget, võib olla ka CTA-pill või "broneeri" sticky-nupp) PEIDETUD hero-sektsioonis ja ILMUB sujuvalt nähtavale järgmise sektsiooni sisenedes. Tagasi hero'le scroll'ides nupp kaob ära.

## Miks see oluline

- Hero on **kompositsioon ise** — sticky nupp ülevalt segab esmamuljet
- Esimene sektsioon (Hook/Story) on signaal "scroll on alanud" → nüüd pakume sticky help/CTA
- Tagasi hero'le → kompositsioon taas puhas
- AMG #2-s tehtud + Bentley #3-s kanooniliseks tehtud

## Käitumis-pattern

- **Trigger:** `.hook` (esimene sektsioon hero järel)
- **Start:** `'top bottom'` (Hook hakkab viewport'i sisenema alt → nupp fade-in)
- **onEnter:** opacity 0→1, y 10→0, duration ~0.5s `power2.out`
- **onLeaveBack:** opacity 1→0, y 0→10, duration ~0.35s `power2.in` + **sulge panel + peida teaser + reset aria-states**

## CSS initial-state (FOUC vältimiseks)

```css
html.js #sticky-root {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(10px);
}
@media (prefers-reduced-motion: reduce) {
  html.js #sticky-root { transform: none; }
}
```

## JS IIFE-pattern (kopeeri-kleebi)

```js
(function () {
  'use strict';
  if (typeof gsap === 'undefined' || !window.ScrollTrigger) return;
  const root = document.getElementById('sticky-root');
  const hook = document.querySelector('.hook');
  if (!root || !hook) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function closeAll() {
    // Sulge avatud panel, peida teaser, reset aria
    const panel = document.getElementById('sticky-panel');
    const btn = document.getElementById('sticky-btn');
    const teaser = document.getElementById('sticky-teaser');
    if (panel) panel.setAttribute('aria-hidden', 'true');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    if (teaser) teaser.setAttribute('aria-hidden', 'true');
  }

  if (prefersReduced) {
    ScrollTrigger.create({
      trigger: hook,
      start: 'top bottom',
      onEnter: function () {
        root.style.opacity = '1';
        root.style.visibility = 'visible';
        root.style.pointerEvents = 'auto';
        root.style.transform = 'none';
      },
      onLeaveBack: function () {
        closeAll();
        root.style.opacity = '0';
        root.style.visibility = 'hidden';
        root.style.pointerEvents = 'none';
      }
    });
    return;
  }

  ScrollTrigger.create({
    trigger: hook,
    start: 'top bottom',
    onEnter: function () {
      gsap.to(root, { opacity: 1, visibility: 'visible', pointerEvents: 'auto', y: 0, duration: 0.5, ease: 'power2.out' });
    },
    onLeaveBack: function () {
      closeAll();
      gsap.to(root, { opacity: 0, visibility: 'hidden', pointerEvents: 'none', y: 10, duration: 0.35, ease: 'power2.in' });
    }
  });
})();
```

## Märkused

- **Sama Hook trigger** mis Mercedes #2-s (proven, ei muuda väärtust ilma põhjuseta)
- **`prefers-reduced-motion`:** instant on/off (mitte y-translate)
- **`visibility: hidden`** + `pointer-events: none` GSAP-iga koos → nupp ei jää nähtamatult klikkitavaks
- **closeAll() onLeaveBack-is** oluline: kui kasutaja avas paneeli ja scroll'is tagasi hero'le, järgmine fade-in algab puhtast state'ist
- Visuaalne disain (nupu kuju, värv, ikoonid) on PER-PROJECT — käitumine sama, ilme uus
- Trigger võib olla mistahes esimene sektsioon (`.hook`, `.story`, vms projekt-spetsiifiline) — peamine et hero pole

## Mälu-rada

- 2026-05-23 AMG #2-s loodud
- 2026-05-28 Bentley #3-s universaalreegliks tehtud
- Seotud: `feedback_self_improving_memory`, `feedback_each_design_is_artwork`, `feedback_ctas_must_be_unique` (käitumine sama, visuaalne uus)
