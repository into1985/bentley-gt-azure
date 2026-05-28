---
name: komponendi-taaskasutuse-reegel-indrek-i-selgitatud
description: Listing-projektides me kasutame SAMU komponente aga uuele projektile omaselt. Komponendi-skelett + klassinimed jäävad järjepidevad üle projektide. Layout/paigutus/ülesehitus VÕIB muutuda kui see teenib projekti. NB! see selgitab nüansi mis pole COMPONENTS.md-s otse väljendatud.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: f8f396e2-02eb-4145-95f6-b68c0e73c93a
---

**Indrek'i sõnastus (2026-05-27):**
> *"Meil peaks olema reegel, et me kasutame samu komponente aga uuele projektile omaselt ja vajadusel/võimalusel võime nende ülesehitust/paigutust/layouti muuta."*

**Why:** Bentley-projekti Hook-veast tulenev selgitus. COMPONENTS.md ütleb "TAASKASUTA 1:1" mis võiks paberil tähendada et MITTE midagi ei muutu. Tegelikult Mercedes #2 muutis mitmeid Urus #1 detaile (`.hook-line` spans → `<br><br>`, lisas `.hook-inner` wrapperi, lisas `.section-grille` signature, drop'is `.divider`-i, jne). Indrek selgitas et see oli **lubatud paindlikkus** layout-tasandil, mida ma pean ka kasutama.

**Mis JÄÄB järjepidev (komponendi-skelett):**
- Section-tasandi klassinimed: `section.hero#hero`, `section.hook#ulevaade`, `section.story#lugu`, `section.gallery-section#galerii`, `section.specs#mehaanika`, `section.adp#lisad`, `section.logistics#logistika`, `section.contact#kontakt`
- Põhi-komponendid sektsioonide sees: `.hero-image`, `.hero-content`, `.hero-headline`, `.hero-title`, `.hook-statement`, `.spec-cards`, `.spec-card`, `.spec-icon`, `.spec-label`, `.spec-value`, `.divider`, `.story-inner`, `.gallery-pin`, `.gallery-track`, `.gallery-item`, `.specs-table`, `.accordion`, `.contact-card` jne
- Modifier-klassid: `.spec-value-accent`, `.divider-top`, `<span class="em">`, `<span class="accent">`
- Sektsiooni-ankrute ID-d: `#hero #ulevaade #lugu #galerii #mehaanika #lisad #logistika #kontakt`
- Universal JS-mustrid (vt [[reference_LAYOUTS_EVOLVED]]): scroll-lock, accordion height-collapse, engine-sound player kahe-režiimi

**Mis VÕIB muutuda (layout / paigutus / ülesehitus):**
- Wrappers (nt Mercedes lisas `.hook-inner` mille polnud Urus'el)
- Sub-komponentide järjekord (statement enne või pärast spec-cards'e)
- Signature-elementide nimed ja vorm (`.divider` Urus → `.section-grille` Mercedes → `.section-mesh` Bentley jne)
- Hero-elementide paigutus (Urus full-bleed, Mercedes alanurka, Bentley side-by-side split — sama HERO komponent, kolm erinevat layout-paigutust)
- Hook-statement formaat (Urus `.hook-line` spans line-by-line vs Mercedes `<br><br>` paragraphs)
- Spec-cards orientation (horizontal vs vertical orientation), grid (4×2 vs 2×4 jne)
- Optional elements (`.divider` võib olla või mitte — Urus oli, Mercedes polnud)

**Mis on UUS sisu (per project):**
- Auto-spetsiifiline copy, voice, story
- Spec-väärtused (numbrid, mudel, värv jne)
- 8 custom-SVG spec-ikooni (motiivid auto järgi)
- Palett, font-paar, signature-elemendid
- Custom kursor / scrollbar (paletist tuletatud)

**Otsuse-protokoll iga Faas 2.x alguses:**
1. Vaata COMPONENTS.md → leia komponendi kanooniline klassinimi-loend
2. Loe Urus + Mercedes vastav osa — märgi kus need ERINEVAD (= layout-paindlikkuse näited)
3. Vali Bentley jaoks layout-paigutus mis ERINEB mõlemast (originaalsus) AGA säilitab kõik kanoonilised klassinimed (järjepidevus)
4. Disaini-nahk täiesti uus (palett, fondid, signatuur)
5. Sisu täiesti uus (Bentley copy, voice B)

**Praktiline näide — Hook:**
- Urus: `.hook-statement` line-by-line spans + `.divider` + `.spec-cards`
- Mercedes: `.hook-inner` wrapper + `.section-grille` + `.hook-statement` `<br><br>` + `.spec-cards`
- Bentley: `.hook-inner` wrapper + `.section-mesh` (uus signature) + `.hook-statement` `<br><br>` + `.spec-cards`
  - Kanoonilised klassid (.hook-statement, .em, .spec-cards, .spec-card, .spec-icon, .spec-label, .spec-value, .spec-value-accent) säilitatud
  - Layout-valik: Mercedes-pattern statement + spec-cards koos, AGA Bentley signature mark
  - Naha-tasandil: bone/flame palett, Sentient + Neue Montreal, diamond-mesh motiiv
