---
name: token-kulu-v-hendamise-reeglid
description: "Indrek'i 2026-05-27 palve — sessiooni-limiit täitub liiga kiiresti. Säilita kvaliteet, väldi verbosity't. Rakendatakse kõigis järgnevates listing-projektides."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: f8f396e2-02eb-4145-95f6-b68c0e73c93a
---

**Säilita (KOHUSTUSLIK):**
- Ütle mõjuala enne muudatust (AI_KULDREEGLID rule 11)
- Paku disaini-variante kui Indrek pole täpsustanud
- Üks sektsioon korraga + stop pärast

**Vähenda:**
- Mõjuala = 1-2 lauset, MITTE tabel
- 2 varianti mitte 4, lühike 1-rea kirjeldus
- Edit sihti konkreetsele reale, MITTE kogu blokk-replace (kahekordne token-kulu)
- "Mis tehtud" raport = 3 rida max
- Skip preview-verify lihtsate muudatuste juures (color/padding/single-property) — verify ainult kui layout võib lammutada või lisad uut elementi
- Uued memory-failid = 10-15 rida max (sõnastatud reegel + lühike näide), MITTE 200-rea traktaadid
- Urus/Mercedes grep ainult kui mälus pole vastav komponent — pärast esimest grep'i salvesta KOMPONENDI sisu mällu, ei pea uuesti grep'mata
- Mitu väikest muudatust → kombineeri ühte Edit'i kui võimalik

**Indrek'i poole (info):**
- `/clear` kui sessioon hakkab täituma → PROGRESS.md + viimati muudetud osa index.html'ist piisavad jätkamiseks
- Kui Indrek juba teab varianti → ütleb otse ("teeme A, see värv, see paigutus") — ei pea pakkumist ootama
- Kui vastus liiga pikk → "lühemalt" → kohendan kohe stiili
