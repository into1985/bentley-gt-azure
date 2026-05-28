# clip-path inset() ei interpoleeru GSAP'iga — CSS custom property workaround

**KRIITILINE TEHNILINE REEGEL** mask-reveal animatsioonide jaoks. Bentley #3 Faas 5 holistilises passis õpitud — vajab kõikides edaspidi-projektides arvestada.

## Probleem

GSAP `gsap.to(element, { clipPath: 'inset(0 0% 0 0)' })` **EI animeeri sujuvalt** kui algväärtus on `inset(0 100% 0 0)`. GSAP kas:
- Hüppab otse lõpp-väärtusele (binary on/off)
- Animeerib ainult osaliselt (esimene komponent interpoleerub, teised hüppavad)
- Sõltuvalt brauserist käitub erinevalt (Chrome ~ok, Safari ~katki, Firefox ~lihtne fade)

Põhjus: `clip-path` `inset()` funktsioon võtab **multi-value sõnet** mida GSAP'i värvi/numbri-interpolaator ei oska splittida ja per-komponendi interpoleerida. GSAP'i CSSPlugin proovib stringi-interpolation'i mis ei tööta CSS shape-functions'ide jaoks.

## Lahendus — CSS custom property workaround

Animeeri **CSS custom property'sid** (`--reveal-x`, `--reveal-y`) ja CSS arvutab clip-path'i nendest. GSAP suudab custom property'sid arvulise interpolatsiooniga animeerida (kui kasutad `%` ühikut).

### CSS

```css
.mask-reveal {
  --reveal-x: 100%;
  --reveal-y: 0%;
  clip-path: inset(var(--reveal-y) var(--reveal-x) 0 0);
}
@media (prefers-reduced-motion: reduce) {
  .mask-reveal { --reveal-x: 0%; --reveal-y: 0%; }
}
```

### JS — ÕIGE

```js
gsap.to(element, {
  '--reveal-x': '0%',
  duration: 0.9,
  ease: 'power2.inOut',
  scrollTrigger: { trigger: element, start: 'top 75%' }
});
```

### JS — VALE (ei tööta sujuvalt)

```js
// ÄRA TEE — clip-path ei interpoleeru
gsap.to(element, {
  clipPath: 'inset(0 0% 0 0)',
  duration: 0.9
});
```

## Kontrollnimekiri kui mask-reveal "ei animeeri"

1. **Kas animeerid clip-path'i otse?** → vaheta custom property workaround'ile
2. **Kas algväärtus on CSS-s defineeritud?** → JS `gsap.set()` ei ole alati piisav, parem CSS initial state
3. **Kas `@media (prefers-reduced-motion)` fallback olemas?** → kui ei, reduced-motion kasutaja näeb peidetud sisu igavesti
4. **Kas ScrollTrigger.refresh() pärast layout-muutust?** → accordion expand, image lazy-load võivad nihutada trigger-positsiooni
5. **`--reveal-x` peab olema `%` ühikus** (mitte `px` ega `0`) — GSAP interpoleerib `100% → 0%` õigesti

## Alternatiivsed lähenemised (vältida)

- **`width`/`height` 0 → täis** — põhjustab layout shift, ümarad elemendid lähevad katki
- **`opacity` 0 → 1** — pole sama mask-feeling, fade puudub luxury-charge
- **`transform: scaleX(0)` → 1** — element koguneb ühest servast (ei sama kui clip-mask)
- **`mask-image: linear-gradient(...)`** — animeerimine ei tööta brauseri-toes piisavalt; clip-path on stabiilsem

## Mälu-rada

- 2026-05-28 Bentley GT Azure #3 Faas 5.2-s tekkis probleem — esimene mask-reveal blokk ei animeerinud sujuvalt. Pärast 30min debugging'ut leidsime et probleem oli `clip-path` otsene animeerimine.
- Lahendus testitud kõigil Faas 5.1-5.7 blokkidel (7 sektsiooni) — kõik töötasid CSS custom property workaround'iga
- Indrek'i 2026-05-28 lisatud universaalseks tehniliseks reegliks
- Seotud: `pattern_mask_reveal_language`, `pattern_hero_pinscrub_jump_fix` (sarnane GSAP-interpolation-cache probleem `immediateRender: false` puhul)
