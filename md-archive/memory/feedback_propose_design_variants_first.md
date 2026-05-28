---
name: disaini-otsuste-puhul-paku-variante-ra-otsusta-omavoliliselt
description: "Iga sektsiooni sisene disaini-otsus (layout-muster, ikooni-keel, CTA-stiil, default-states, kompositsioon) vajab Indrek'ile pakutavaid variante ENNE ehitust. Töövoo automaatsus ≠ disaini-omavoli."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: f8f396e2-02eb-4145-95f6-b68c0e73c93a
---

**Indrek'i sõnastus (2026-05-27):**
> *"Sa hakkasid tegema enne kui ütlesid mulle, kuidas sa plaanid teha ega pakkunud välja erinevaid variante. Minumeelest on ka see reegel meil kuskil kirjas. Nahhui me neid reegleid teeme, kui neid ei järgita."*

**Konkreetne näide:** Bentley-projektis Faas 2.5 Galerii puhul pakkusin AINULT "Diagonal staggered grid" — Indrek mainis et oleks võib-olla soovinud **bentleymotors.com'i stiilis galeriid**. Mul oli kohustus pakkuda 2-4 varianti (sh tema brand'i referentsi) JA küsida tema valikut ENNE ehitust.

## Reegel — kahe-tasandi süsteem

**1. Töövoog (automaatne, ei küsi):**
- Sektsioonide järjekord: Hero → Hook → Story → Galerii → ADP → ... (vt SKILL.md)
- Faaside järjekord: Faas 1 → 2 → 3 → 4 → 5 → 6
- Iga sektsiooni valmimise järel liigu kohe järgmise juurde — ÄRA küsi "mis järgmine?"

**2. Disaini-otsused (ALATI paku variante):**
Iga sektsiooni sees on disaini-otsused mida ma EI tohi omavoliliselt teha. Pean **pakkuma 2-4 alternatiivset suunda** ja ootama Indrek'i kinnitust ENNE ehitust:

- **Layout-muster** (split-grid vs 3-col vs editorial vs masonry vs timeline)
- **Visuaalne keel** (ikooni-stiil, accent-värvi paigutus, kompositsioon)
- **Hover/state-keel** (CTA: pressed-paper vs underline-grow vs magnet vs stamp)
- **Default-states** (accordion default-OPEN vs CLOSED, gallery hover-icon visible vs hidden)
- **Sub-komponendi orientation** (icon vasak vs üleval, info column vs rows)
- **Foto-paigutus** (full-bleed vs content-width vs side-panel)
- **Brand'i referentsi kasutus** (kas auto-tootja kodulehe stiil sobiks?)

## Variant-pakkumise mall

Iga sektsiooni alguses **enne mingit koodi**:

```
**[Sektsiooni nimi]** — pakun [N] varianti:

A. **[Variandi nimi]** — kirjeldus + miks see sobib + viide (kui Mercedes/Urus/Bentley.com)
B. **[Variandi nimi]** — sama
C. **[Variandi nimi]** — sama

Mu eelistus: [A/B/C] sest [põhjus]. Aga teie otsus.

**Mõjuala (kõikidele):** muudan ainult `index.html` failis; lisan `.[selektor]` CSS-i ja
markup'i; ei puuduta olemasolevat [list].
```

## Kasulikud allikad variantide leidmiseks

1. **LAYOUTS-EVOLVED.md "saadaval mustrid"** — kasutamata muster mis vajab proovimist
2. **Auto-tootja ametlik koduleht** (bentleymotors.com, lamborghini.com, mercedes-benz.com)
   — brand'i tegelik visuaalne keel, mida ostja juba tunneb
3. **CSS Design Awards SOTD / Awwwards** — auto-sektsioonid premium-listing'utel
4. **Tympanus.net Codrops** — eksperimentaalsed muster-näited
5. **Mercedes #2 ja Urus #1 vastav sektsioon** — mis EI tohi korduda

## Stop-signaalid (peatu, paku variante)

Kui sa märkad et hakkad mõtlema:
- "Teen niimoodi sest [intuitsioon]" → STOP, paku variante
- "See sobib brand'iga" → STOP, paku miks ja võrdle alternatiividega
- "Indrek'i mainis seda korra" → STOP, kontrolli kas mainis VARIANTI või OTSUST
- "Pole aega pakkuda" → STOP, töövoog on aeglane parem kui kiire vigane

## Bentley-projekti tagasipööramised (potentsiaalsed)

Kui Indrek otsustab, et mu omavolilised valikud vajavad uuendamist:
- **Galerii** (2.5) — vaata Bentley.com kodulehte ja paku 3-4 variante
- **ADP ikoon** (2.7) — pakkuda chevron / arrow / plus / hairline / underline-grow variante
- **Wellness layout** (2.8) — pakkuda 3-rea / 2-col-cards / single-feature variante
- **Process card** (2.9) — pakkuda 2-col card / 4-step horisontaalne timeline / centered hero-style variante
- **Contact CTA** (2.10) — pakkuda pressed-paper / underline-grow / magnet-card / brass-block variante

NB! Igal juhul olen ehitanud need sektsioonid AUTO-DECIDED'ena — Indrek peab otsustama kas keelan need ümber.
