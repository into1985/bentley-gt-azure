---
name: Julgemad animatsioonid — reveal'id, scroll-stiil motion, multi-layer
description: Animatsioonid võivad olla julgemad. Reveal-animatsioonid, scroll-style motion isegi single-screen lehtedel, multi-layer parallax, sequenced character animations. References: gsap.com/showcase, tympanus.net/codrops.
type: feedback
originSessionId: a917eb26-3f85-4f44-bbe3-a06270f1590b
---
Indrek andis selged referentsid:

> "Julgemalt võib ka kasutada liikumist. Nendel lehtedel ma tean et on palju sellist reveal ja scroll animatsioone, mis mulle meeldivad."

**Referenced:**
- https://gsap.com/showcase/
- https://tympanus.net/codrops/

## Mida tähendab "julgem motion"

Senini olen kasutanud:
- Lineaarne entry timeline (fade + y-translate, stagger)
- Üks subtle ongoing motion
- Pin-scrub või ScrollTrigger reveals (Listing-projektis)
- Magnet-cursor (Lambo)

**Edaspidi proovida** (gsap.com/showcase + tympanus.net stiilis):

### Reveal mustrid
- **Clip-path mask reveals** — element ilmub aknast välja, kärbitult
- **SplitText character-by-character** animation (mitte ainult words/lines)
- **Sequential rotation + scale** combinations
- **Multi-stage construction** — element ehitab end üles järk-järgult
- **Reveal-from-mask** — element on alguses kärbitud, kasvab nähtavale

### Scroll-style animations isegi single-screen lehtedel
- **Sequenced page-load timeline** mis tundub nagu scroll oleks toimunud
- **Multi-layer parallax** (mouse-driven) — eri kihid liiguvad eri kiirustel
- **Sticky-feel reveals** — element tundub ühe hetke kinni, siis liigub edasi

### Layered ambient motion (3+ paralleelset)
- Subtle background breath
- Foreground element slow rotation
- Word/text cycler
- Floating particles
- Light/shadow pulse

### Interactive responsiveness
- Cursor-following elements (custom cursors, magnet effects)
- Hover ripples / mouse-tracked highlights
- Text characters reacting to mouse proximity
- Custom interactive sketches/drawings

### Path animations
- SVG paths drawing themselves (stroke-dashoffset)
- Lines connecting / disconnecting
- Shape morphing (path-to-path interpolation)

### Sequential SVG element reveals
- Iga illustratsiooni osa animeerub eraldi
- Stem → leaves → body → seeds (strawberry näide)
- Construction-feel — pilt "ehitab" end üles

## Põhjus

Julgem motion **tõestab oskust**. Klient näeb 404 lehte ja küsib "kui nende 404 on selline, mida saab tehniliselt päris saidil?" — see ON müügiväärtus. Restraint on hea kui brand seda nõuab (Minna, Raisk), aga julgus on hea kui brand on lustakas, attention-grabbing, või tehniline (Musi, Sähh sulle, Kuus).

## Otsustamise protokoll

Iga uue projekti puhul küsi:
1. **Kas brand tahab restraint'i (luxe, formal) või bold motion'it (playful, tech, attention-grabbing)?**
2. **Vali motion-tase brand-tonaalsuse järgi**
3. **Igal projektil minimaalselt 1 motion-tehnoloogia mida pole varem proovinud** (SplitText, clip-path, multi-layer parallax, jne)
4. **Reference inspiration:** gsap.com/showcase + tympanus.net/codrops

## Cataloogitud motion-tehnikad (mida juba proovinud)

- Lineaarne stagger entry (kõik prior projektid)
- Pin-scrub + scrubbed timeline (Lambo Listing)
- Magnet-cursor (Lambo, Kuus)
- Counter-animatsioon (Hook stats)
- Word-cycler infinite loop (Kuus)
- Custom cursor follow (Kuus)
- Stroke-dashoffset draw-on (Kuus, Raisk)
- Multi-stage construction sequence (Kuus 4-stage)
- ScrollTrigger pin + horizontal scroll-jacking (Lambo gallery)

**Mida pole veel proovinud (priority):**
- **SplitText character animation** (chars stagger, not just words)
- **Clip-path mask reveals** (text/image appears through aperture)
- **Mouse-driven multi-layer parallax** (3+ layers reacting to mouse)
- **SVG path morphing** (path-to-path interpolation)
- **Sequential illustration construction** (each element of an SVG illustration animating separately — like a drawing being drawn)
- **Scroll-jacking simulated on single-screen** (sequenced reveal that mimics scroll)
- **Custom cursor with state-reactive behaviors** (cursor changes shape based on hover target)
- **Liquid / blob animations** (organic shape morphing)
- **Particle systems** (floating dots, leaves, sparks)
- **GSAP MorphSVG** (if available) — true shape morphing
- **GSAP MotionPath** — element following an SVG path

## ⚖️ Motion-restraint — julgem ≠ ROHKEM

Indrek märkis Blanco puhul: "natuke tundub, et siin on svg animatsiooniga liiale mindud, natuke liiga palju tundub kõike seda."

Blanco'l oli korraga: terve graveering joonistab end ise + päike pöörleb + linnud triivivad + viinamarjad hingavad. **Liiga palju samaaegset liikumist — silmal pole puhkust.**

**Kalibratsioon:** "Julgem motion" tähendab **ühte signature-momenti mis on julge**, mitte kõike-korraga. Reegel:
- **Üks** signature motion-moment per leht (Blanco puhul: self-drawing engraving — sellest piisab)
- Kõik ülejäänu **restrained või liikumatu**
- Ongoing motion: maksimaalselt 1-2 **väga vaikset** kihti, mitte 4
- Küsi: "kas vaataja silm leiab kuskilt rahu?" Kui kõik liigub, vastus on ei.

Julgus on **kontsentreeritud**, mitte laiali. Üks vägev liigutus > viis keskpärast.
