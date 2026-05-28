---
name: komponentide-visuaalne-disain-peab-erinema-le-projektide
description: "Komponendi-skelett (klassinimed, struktuur, JS-loogika) jääb järjepidev üle listing-projektide — AGA komponendi visuaalne disain (kuju, värv, kompositsioon, motion) peab erinema kui see on võimalik. Ainult sama copy + samad ikoonid + sama värvid + sama paigutus = projekt-kordus, isegi kui komponendi-klassinimed on samad."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: f8f396e2-02eb-4145-95f6-b68c0e73c93a
---

**Indrek'i sõnastus (2026-05-27):**
> *"Listing projektid kasutavad sarnaseid komponente aga nende välimus/disain peab olema erinev kui see on võimalik. Miks ma seda mainin, sellepärast et audio playeri tegid sa sarnase AMG projektile."*

**Reegel:** Komponendi-klassinimed ja roll on järjepidevad (vt [[reference_COMPONENTS_md]]) — aga **komponendi visuaalne disain peab uue projekti puhul olema VISUAALSELT eristuv**, mitte ainult värvilt vaid:

- **Kuju** (ringnupp ↔ kuusnurkne ↔ ruudukujuline ↔ pinch-tight pill)
- **Paigutus** (button vasak + label parem ↔ button keskel + label all ↔ ümber pildi tähistus)
- **Detail-elementid** (waveform ↔ pulse ring ↔ time-counter ↔ track-bar)
- **Motion-iseloom** (smooth wave ↔ reactive pulse ↔ tick-tick ↔ slow breathe)
- **Mood-iseloom** (energiline ↔ rahulik ↔ tehniline ↔ orgaaniline)

**Audio-pleieri näide — kus läks valesti (Bentley Faas 2.3):**
Tegin Bentley es-pleieri Mercedes-mustri otse:
- Ringnupp (sama struktuur)
- Label vasakul, waveform paremal (sama)
- SVG vertikaalsete joonte waveform (sama)
- Sama proportsioonid

Ainus erinevus: värv (--graphite ringnupp + --flame waveform vs Mercedes'i champagne).

**Kuidas oleks pidanud:** Bentley audio-pleier vajab täiesti uut visuaalset keelt. Ideed Bentley'le tagasi tulemiseks:
- **Knurled wheel marker** — pleier on round wheel, mille välimine ring on knurled (teemandi-mustriga grilli-echo). Pulse breathe = mootori käivitumine.
- **Tachometer arc** — pleier kuvab progress'i arc-meetrina (nagu rpm-näidik). Arc kasvab kui mängib.
- **Vertical-cylinder bars** — V8-mootori cilindrite-stiilis vertikaalseid plokke, mis pulseerivad järjest (mitte sünkroonselt nagu klassikalised waveform-bars).
- **Side-shifted layout** — nupp suuremalt, label hoopis ÜLEVAL eraldi, waveform väike all (vs Mercedes'i lineaarne button-label-wave rida).

**Praktiline protokoll iga komponendi puhul:**
1. Vaata Urus + Mercedes vastav komponent
2. Kirjuta MAHA mis on neil VISUAALSELT (kuju + paigutus + detail-elemendid)
3. Kontrolli — kas mu Bentley versioon erineb mõlemast vähemalt 2+ visuaalses dimensioonis?
4. Kui EI → redisaini enne ehitamist
5. Klassinimed jäävad samaks (kanoonilised), aga visuaalne keel uus

**Käsitlemata komponendid Bentley'l mis vajavad ka erilist tähelepanu:**
- Quick-spec cards icons — kas mu 8 ikooni erinevad piisavalt Urus + Mercedes ikoonidest visuaalselt (ei ainult joonis erinev, vaid ka stiil — outline vs filled, geometric vs organic)?
- Custom hamburger — kontrollin et 2-joonega offset ei kordu Mercedes'i 2-joonelist hamburgerit (kontroll TODO)
- Lightbox transitions — Faas 4 ehitamisel kontrolli

**Tagasi-tulemise nimekiri** (vt Bentley `PROGRESS.md` "TULEME TAGASI" sektsioon):
- Audio-pleieri visuaalne redisaini
- Spec-card ikoonide stiil-võrdlus Urus + Mercedes vastu
- Iga komponendi puhul sama auditeerimine enne deploy'd
