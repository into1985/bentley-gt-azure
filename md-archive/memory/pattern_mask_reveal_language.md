# Mask-reveal motion-keel — universaalpattern listing-projektidele

**KOHUSTUSLIK iga listing-projektis (alates Bentley #3).** Kogu lehe scroll-driven entry-animatsioonid kasutavad **ühtset motion-keelt**: `clip-path inset()` mask-sweep + SVG `stroke-dashoffset` draw-on. Eri sektsioonid varieeruvad **sweep-suunal** (left-right, top-bottom, diagonal, sync vertical+horizontal) AGA mitte motion-tehnoloogial. See annab lehele filmilik-ühtlase tunde.

## Miks see oluline

- **Ühtlus = luxury** — kui igal sektsioonil on erinev animatsiooni-stiil (slide, fade, scale, bounce), tundub leht "AI-template-tehtud"; ühtne motion-keel on disainer-järje signatuur
- **Clip-path mask-sweep** annab editorial-film-trailer'i tunde (≠ "swoosh in" tarbija-AI-animation)
- **SVG draw-on** ikoonidele + signature-mark'idele lisab käsitsi-graveerimise tunde
- **Faas 5 holistiline pass** — ehita kõik staatiliselt, seejärel rakenda mask-language tervele lehele korraga (mitte sektsioon-haaval ehitades)
- Bentley #3 Faas 5.1-5.7 oli proof-of-concept — 7 sektsioonisse rakendati sama keel erinevate suundade ja rütmidega

## Motion-keele 4 sammast

### 1. Clip-path inset() mask-sweep (põhi-tehnoloogia)

Kogu element on **algselt peidetud** clip-path'iga (`inset(0 100% 0 0)` — paremalt täis-peidetud), GSAP tween'ib `0% → 0%` (täis-nähtavale). Animeerime CSS custom property'sid (`--reveal-x`, `--reveal-y`), MITTE `clip-path` enda väärtust (vt allpool tehniline põhjus).

**4 sweep-suunda projekti-portfellis:**

| Suund | inset() algne | Kus kasutada |
|---|---|---|
| Left-to-right | `inset(0 100% 0 0)` | Sektsioonipealkiri, body-paragraph |
| Top-to-bottom | `inset(100% 0 0 0)` | Foto-vertikaal, story-image |
| Bottom-to-top | `inset(0 0 100% 0)` | Spec-card, accordion expand |
| Diagonal (top-left → bottom-right) | `clip-path: polygon(...)` polygon-based | Gallery cascade, hero curtain |

### 2. SVG stroke-dashoffset draw-on (signature-detail)

Hand-drawn SVG-d (spec-ikoonid, signature-mark, route-map, monogram) "joonistatakse" GSAP'iga `stroke-dashoffset` total-length → 0. Kõik path'id saavad `pathLength="100"` atribuudi → universaalne dashoffset 100→0.

```js
const paths = gsap.utils.toArray('.signature-svg path');
gsap.set(paths, { strokeDasharray: 100, strokeDashoffset: 100 });
gsap.to(paths, {
  strokeDashoffset: 0,
  duration: 1.4,
  stagger: 0.08,
  ease: 'power2.inOut',
  scrollTrigger: { trigger: element, start: 'top 70%' }
});
```

### 3. Stagger-rütm (tähendus-pinged)

- **Kiired stagger'id (0.04-0.08s)** — kuuluvad konseptuaalselt kokku, ilmuvad peaaegu üheaegselt (nt 6 spec-card)
- **Aeglased stagger'id (0.12-0.18s)** — narratiivne järjekord (story-paragraph, Mulliner deep-dive sammud)
- **Sync (0s) — parallel** — kui elemendid on visuaalse paari osad (pealkiri + body, frame + corners) — vt mälu `feedback_sync_reveals`

### 4. Easing-keel (üks ease üle kogu lehe)

**`power2.inOut`** on Bentley #3 valitud ease — slow-start + slow-end editorial-feel. KÕIK mask-sweep'id kasutavad sama. **ÄRA segi** `back.out`, `elastic`, `bounce` — need tunduvad lapsiku-AI.

Erand: pin-cinema curtain (Hero) võib kasutada `power3.out` kui curtain langeb gravitatsiooniga.

## Tehniline alus — CSS + JS

### CSS — defineeri mask-state CSS custom property'tega

```css
.mask-reveal {
  --reveal-x: 100%;
  --reveal-y: 0%;
  clip-path: inset(var(--reveal-y) var(--reveal-x) 0 0);
}
/* Element ON peidetud kuni JS tween'ib --reveal-x → 0% */
@media (prefers-reduced-motion: reduce) {
  .mask-reveal { --reveal-x: 0%; --reveal-y: 0%; }
}
```

### JS — animeeri custom property (MITTE clip-path)

```js
gsap.to(element, {
  '--reveal-x': '0%',
  duration: 0.9,
  ease: 'power2.inOut',
  scrollTrigger: { trigger: element, start: 'top 75%' }
});
```

**KRIITILINE:** clip-path inset() ei interpoleeru GSAP'iga otse — kasuta CSS custom property workaround. Vt mälu: `feedback_clip_path_gsap_workaround`.

## Faas 5 holistilise passi protokoll

1. **Ehita kogu leht staatiliselt esmalt** (Faas 2.x → 3.x → 4.x). Animatsioon on viimane pass, mitte sektsioon-haaval.
2. **Faas 5.1 = Hero** — kõige keerukam, pin-cinema kombineerib mask + scale + curtain
3. **Faas 5.2-5.7 — sektsioonid järjest** — iga sektsioon valib oma sweep-suuna mis sobib sisuga (text-section → left-right, photo-section → top-bottom, gallery → diagonal)
4. **`prefers-reduced-motion` defense-in-depth** — JS return-early (`if (prefersReduced) return;` enne ScrollTrigger'i loomist) + CSS @media fallback (`--reveal-x: 0%`). Mõlemad vajalikud.
5. **Holistiline-mitte-sektsioon-haaval QA** — kogu lehe scroll-läbimine korraga; kui üks sektsioon torkab silma teistsuguse rütmiga, kohanda

## Märkused

- **ScrollTrigger.refresh()** kohustuslik kui lehel on dynaamiline sisu (accordion expand, lightbox open) — `ScrollTrigger.create({ ..., invalidateOnRefresh: true })`
- **`gsap.matchMedia()`** mobile vs desktop versioonide jaoks (mobile-l vahel kiiremad durations ~0.7s vs desktop 0.9s)
- **Image-heavy sektsioonid** (gallery) — kasuta `lazyloading="lazy"` + ScrollTrigger.create `onEnter: () => img.src = ...` lazy reveal kombinatsiooni; mask-sweep peidab loading-state'i automaatselt
- **Accordion expand** mask-reveal expand/collapse'il — kui accordion avaneb, sisu reveal'ib mask-sweep'iga (Faas 5.5 lisand Bentley #3)
- **ÄRA kasuta scrub** kõikidele animatsioonidele — ainult Hero pin-cinema'le; teised sektsioonid on `onEnter`-triggered (üks-kord-animatsioon, ei dünaamiline scroll'ile)

## Mälu-rada

- 2026-05-23 Mercedes S 63 #2 — algne clip-path wipe sektsioonidele (per-sektsiooni-tasandil)
- 2026-05-28 Bentley GT Azure #3 — **holistiline pass** kogu lehel, 7 sektsiooni, ühtne motion-keel
- Indrek'i 2026-05-28 lisatud universaalreegliks töövoogu
- Seotud: `feedback_clip_path_gsap_workaround`, `pattern_hero_pinscrub_jump_fix`, `feedback_sync_reveals`, `feedback_bolder_motion`
