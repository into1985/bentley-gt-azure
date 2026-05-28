---
name: mercedes-s-63-projekti-asukoht
description: "Eelmise listing-projekti (Mercedes-AMG S 63 E PERFORMANCE 2024, FERATI Tallinn) asukoht failisüsteemis — referentsiks workflow'le ja komponendi-skelettidele."
metadata: 
  node_type: memory
  type: reference
  originSessionId: f8f396e2-02eb-4145-95f6-b68c0e73c93a
---

**Asukoht:** `C:\Users\indre\Desktop\Listing\mercedes-s63-amg\`

**Auto:** Mercedes-AMG S 63 E PERFORMANCE 2024, 802 hj, plaatina-hõbe + hele Nappa, 217 900 €
**Müüja:** FERATI Tallinn (eraisik-müügile vahendaja)
**Voice:** First-person omaniku-style
**Brand-bar:** `FERATI · TALLINN`
**Tehtud:** 2026-05-23 (vt pattern_hero_pinscrub_jump_fix.md)

**Sektsioonid mis seal olemas:**
- Hero (pin-scrub + Mercedes-AMG split-tähtedega headline)
- Hook (kahe-iseloomu copy "Vaikne, mugav... 802 hj AMG jõud")
- Story / kirjeldus + V8 mootoriheli player
- Galerii (15 fotot)
- Üldandmed tabel
- Quick-spec 8-card grid

**Bentley-projektis EI tohi korrata:**
- Brand-bar pattern `FERATI · TALLINN` typography — Bentley kasutab teemandi-mesh ikoon + nimi + linn
- Mercedes-AMG split-tähtedega headline (M-E-R-C-E-D-E-S spaced apart) — Bentley kasutab kahe-rea-asümmeetrilist Continental / GT layout'i
- "Kuula auto häält" V8-player komponent (Bentley pole sportauto, hybrid focus on wellness mitte mootoriheli)
- Plaatina-hõbe + hele Nappa palette → Bentley on oranž matt-satiin + bone

**Lubatud taaskasutada komponendi-struktuur (mitte naha-tasandil disain):**
- Hero `min-height: 100vh` + grid layout vundament
- Quick-spec 8-card grid skelett (4×2)
- Galerii layout-loogika (kuigi paigutus erinev)
- Section-narratiivi järjekord (Hero → Hook → Story → Specs → Galerii → ...)

**Launch-config:** `.claude/launch.json` config `s63` käivitab selle projekti pordil 8765 (python http.server).
