---
name: Mõtle raamidest välja — proovi AI default'idest erinevalt
description: Disainides väldi turvalist AI-vaikimisi-paigutust. Iga uus projekt peab proovida vähemalt ühte ebatavalist asja — golden ratio paigutus, sticker-style nupud, hand-drawn elemendid, asümmeetrilised grid-logikad. Standardlahendused on AI-järje, mitte disaineri-järje.
type: feedback
originSessionId: a917eb26-3f85-4f44-bbe3-a06270f1590b
---
Indrek ootab, et iga uus projekt **proovib midagi raamidest välja**. Hädavajalik mitte default'ida AI-tavasse, vaid pakkuda alati ka julgemat varianti.

## Mida tähendab "raamidest välja"

**Layout:**
- Mitte 12-col / 4-col / 3-col grid → proovi **golden ratio** (61.8 / 38.2 split)
- Mitte hero-centered + button center → proovi asümmeetria, viewport-edge anchoring, diagonal composition
- Mitte standard side-by-side ühel kõrgusel → proovi nested compositions, overlapping zones
- Mitte standard scroll-fade-up → proovi clip-path mask reveal, scale + rotate combos, sequential SVG draw-on

**Nupud:**
- Mitte pill / rounded-8px / clean rectangle → proovi:
  - **Sticker style** (rectangular base, offset accent-color shadow behind, slightly rotated, hover rotates to 0)
  - **Stamp style** (circular or octagonal, outlined, rotated)
  - **Hand-drawn underline** ghost-buttons (SVG wavy path, not CSS border)
  - **Torn-paper edge** clip-path nupud
  - **Tüpograafia-only** buttons (no bg, just bold + arrow)

**Tüpograafia:**
- Mitte serif + sans default pair → proovi:
  - Üksik variable font, kasutatud läbi kõigi rollide eri weight'idega
  - Dual-serif (kaks erinevat serif'i — editorial nagu A24 / Magnum Photos)
  - Display + mono kombo (cinema / technical feel)
  - Single ultra-thin display font (Italiana, Cardinal Fruit) kogu ulatuses
- **Type scale võib järgida φ** (1.0625 / 1.72 / 2.78 / 4.5 / 7.28 rem) — mitte alati 1.25 / 1.5 / 2 / 3 rem järjestus

**Värvid:**
- Vähemalt üks värv mida vastav tööstus EI kasuta (anti-cliché). Kui müüakse autosid, ära kasuta neon-rohelist (Bolt). Kui müüakse pesu, ära kasuta beebist-roosa.

## Mida arvestada

- "Outside-box" ≠ chaotic ega childish — peab olema **purposeful**, brändi-loogika kantud
- Kui konseptsioon ei kanna ebatavalist paigutust, default tagasi tavalisesse — aga **proovi alati esmalt** julgemat varianti
- Iga projekti puhul tee minimaalselt **üks raamivälja-otsus** ja kommenteeri seda Indrek'ile, et ta saaks valida

## Näited mida proovitud / proovida

| Projekt | Raamiväline otsus |
|---|---|
| Minna 404 (peokorraldus) | Viewport-edge tucked composition — küünal + horisontaalne vari kogu lehe ulatuses; diagonaalne nurk-ankur |
| Sähh sulle 404 (toidukullerus) | Golden ratio split 61.8/38.2; sticker-stiilis nupp (tilted + offset shadow); tilted paper-bag SVG koos circular VOID stamp |
| *— järgmised, mida proovida —* | Pseudo-3D pedestal hero; brutalist single-column ainult tüpograafiaga; horisontaalne magazine-spread; conceptual map-diagram; diptych connected by visual link |
