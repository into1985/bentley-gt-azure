---
name: loe-eelmised-listing-ud-enne-komponendi-ehitust
description: Listing-projektis IGA sektsiooni / komponendi ehitamise alguses tuleb lugeda eelmise listing-projekti vastav komponent (HTML markup-tasandil). Komponendi-skelett peab jääma struktuurselt järjepidev üle projektide — improviseerimine struktuuri-tasandil on KEELATUD.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: f8f396e2-02eb-4145-95f6-b68c0e73c93a
---

**Reegel:** Enne IGA komponendi (Hook, Story, Specs, Galerii, Mulliner deep-dive, Wellness, Kontakt jne) ehitamist listing-projektis tuleb LUGEDA eelmise listing-projekti vastav komponent HTML-markup'i tasandil. Komponendi **struktuur** (skelett, elementide järjekord, väljade hulk) peab jääma järjepidev — variv ainult **disaini-nahk** (palett, fondid, layout-rütm, motion, värvi-aktsendid, signature-elemendid).

**Why:** Bentley Faas 2.2-s tegin "HOMMIK / ÕHTU" kaks-blokki-split Hook'i, samal ajal kui Mercedes-listing'us oli üks `<h2 class="hook-statement">` paragraph-formaadis. Indrek tabas selle kohe: "ülesehituselt erinevad, miks sa nii tegid, kas see pole reeglites kuskil kirjas?" Vastus: ON kirjas (skill: "Listing'utel on stabiilne komponendi-vundament + vahelduv disain-keel"; ka: "When the project root contains existing listings, read them first"). Ma ei lugenud Mercedes'i ja improviseerisin struktuuri. Pidin Hook ümber kirjutama.

**How to apply — KOHUSTUSLIK protokoll:**

1. **Iga Faas 2.x alguses** (enne CSS/HTML kirjutamist) → loe Mercedes-projekti `index.html` (asukoht: `C:\Users\indre\Desktop\Listing\mercedes-s63-amg\index.html`, vt [[reference_mercedes_s63_project]]) ja leia VASTAV komponent grep'iga.
2. **Tuvasta komponendi-skelett:** mis elemendid, mis järjekorras, kui mitu väli, sub-komponendid, sama-sektsiooni-kuuluvus (nt Mercedes'es spec-cards on Hook'i sama sektsiooni sees, mitte eraldi).
3. **Säilita skelett 1:1** — sama element-tüübid, sama hierarhia, sama sub-komponendid.
4. **Vahetan ainult nahka:** palett, fondid, värvi-aktsendid, signature-elemendid, layout-spacing, em-highlight värv ja stiil, voice (kui sõnastatud erinevalt brand-iseloomus).
5. **Tee otsus kirja:** kommenteeri HTML-i `<!-- Komponendi-skelett peegeldab Mercedes-listing'u X-struktuuri -->` et tulevikus jälg jääks.

**Punased tuled — märk et improviseerin struktuuri-tasandil:**
- "Mul on huvitavam idee kuidas seda esitada" → STOP, kontrolli Mercedes
- "See sobiks brand'iga paremini niimoodi" → võimalik et tõsi naha-tasandil, AGA struktuur peab säilima
- "See on liiga tüüpiline" → tüüpilisus on **komponendi-skeleti omadus**, mitte viga; tüüpilisus tuleb naha-tasandilt ära kustutada, mitte struktuurist

**Erandid:**
- Kui konkreetset komponenti **Mercedes'es POLE** (nt Bentley-spetsiifiline Mulliner-detailing deep-dive), võib leiutada selle struktuuri — AGA siis registreeri see uue baas-komponendina järgmiste projektide jaoks.
- Komponendi-tasandil **lisamine on lubatud** (Bentley võib lisada Wellness-sektsiooni, mida Mercedes'es polnud), aga **olemasolevate komponentide STRUKTUUR-i muutmine on keelatud** ilma teadliku otsuseta.

**Seos teiste reeglitega:**
- [[reference_mercedes_s63_project]] — kus Mercedes-projekt asub
- [[feedback_NEVER_repeat_patterns]] — KARDINAALREEGEL kehtib listing'utel naha-tasandil, MITTE struktuuri-tasandil; see memory täpsustab kus piir on
- [[feedback_each_design_is_artwork]] — iga projekt = kunstiteos; see toimub naha-tasandil, mitte komponendi-skeleti tasandil
