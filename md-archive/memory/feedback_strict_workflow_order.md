---
name: t-voog-samm-sammu-mitte-off-flow-variandid
description: "Listing-projektide loomine on järk-järguline 6-faasi protsess. Ärge pakkuge Indrek'ile valikuid mis ei sobi töövoo flow'ga. Iga asi tuleb teha konkreetses järjekorras."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: f8f396e2-02eb-4145-95f6-b68c0e73c93a
---

**Indrek'i sõnastus (2026-05-27):**
> *"Ära paku mulle variante mis ei ühildu töövoo flowga, iga asi tuleb teha konkreetses järjekorras. Mersu lehel saime me imehästi hakkama, samm sammu kaua, teadlikult tegutsedes."*

**Reegel:**
- Faas 3-s tehakse KÕIK overlay'd (nav-menu → lightbox → broneerimismodal → fhw-widget) ENNE Faas 4 (JS-i)
- Faas 4-s tehakse JS-loogika ENNE Faas 5 (animatsioonid)
- ÄRA paku Indrek'ile "kas tahad teha modali või liigume kohe Faas 4-sse" — modaal on Faas 3 sees, järjekorras.
- Optional komponendid (broneerimismodal, fhw-widget) on optional **selles mõttes et SKILL.md ei nõua neid kõigil projektidel** — AGA Bentley'l on need pakutud Faas 1 plaanis, järelikult ehitatakse kõik järjekorras.

**Skill-täiendus** (TODO Faas 6 refleksioon):
- Lisa SKILL.md sektsiooni 2 ja 3 selgemalt: "Faas 3-s ehitatakse ALL projekti-plaanis nimekirjas olevad overlay'd enne Faas 4 algust"
- Variantide pakkumine on disaini-otsuste jaoks (LAYOUT, värv, paigutus komponendi sees) — MITTE töövoog-otsuste jaoks (mis on järgmine faas)

**Mis on lubatud pakkuda variantidena:**
- Layout-mustri valikud sektsiooni sees (centered card vs full-screen)
- Värvi-rõhu paigutus
- Ikooni-stiil

**Mis EI ole lubatud pakkuda variantidena:**
- "Kas teeme modali või liigume Faas 4-sse" (vastus on alati: tehke järjekorras)
- "Kas teeme overlay'd või jätame välja" (kui Faas 1 plaanis on, siis teeme)
- "Mis järgmine?" — vastus on alati järgmine Faas-numbri järgi
