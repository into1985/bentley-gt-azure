# Brand-aware ::selection styling — universaalreegel

**KOHUSTUSLIK iga listing-projektis ja portfoolio-lehel.**

Kui kasutaja teeb lehel `Ctrl+A` või tõmbab teksti üle, peab valikuvärv olema **bränd-tunnetatud**, mitte browser-default sinine.

## Reegel

- **Selection-taust** = projekti accent-värv (kõige tugevam brand-värv, tavaliselt flame/ember/highlight token)
- **Selection-tekst** = projekti heledaim taustatoon (bone/ivory/cream/paper token) — annab maksimaalse kontrasti accent'i vastu
- **text-shadow: none** — eemaldab võimaliku shadow-glitchi WebKit'is

## CSS-pattern (kopeeri-kleebi)

```css
::selection {
  background: var(--ACCENT);
  color: var(--LIGHTEST-BG);
  text-shadow: none;
}
::-moz-selection {
  background: var(--ACCENT);
  color: var(--LIGHTEST-BG);
  text-shadow: none;
}
```

Asenda token-nimed iga projekti palettiga. Näiteks:
- **Bentley:** `var(--flame)` + `var(--bone)` (oranž taust, bone tekst)
- **Mercedes:** `var(--ember)` + `var(--ivory)` (vastavalt sealsele paletile)
- **Urus:** `var(--accent)` + `var(--paper)` jne

## Kuhu CSS-i panna

Kohe pärast RESET-blokki, ENNE font-deklaratsioone. See on baseline-layer reegel, kuulub samasse kihti nagu `*, *::before, *::after` reset.

## Miks see oluline

- Browser-default sinine valik **rikub luxury-konteksti** kohe esimese Ctrl+A'ga
- Brand-aware selection = peen detail mida 95% AI-genereeritud lehti ei tee
- Konversiooni-mõju null, aga **käsitsi-disainitud-tunne** maksimumis (vt `feedback_each_design_is_artwork`)

## Seotud

- `feedback_self_improving_memory` — proaktiivne mälu täiendamine
- `feedback_each_design_is_artwork` — iga detail tahtlik
- `feedback_quietest_option` — valikuvärv on aktiivne aga RAR esinev, seega võib olla brand-julge
