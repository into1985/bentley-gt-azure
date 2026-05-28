---
name: ai-kuldreeglid-12-reegli-kohustuslik-t-leping
description: "Listing-projektide kohustuslik tööleping (`C:\\Users\\indre\\Desktop\\Listing\\AI_KULDREEGLID.md`). 12 reeglit mis kehtivad iga muudatuse puhul. Reegel 10 — kui AI rikub reegleid, töö peatub ja vaja näidata diff-plaani enne edasi minekut. KÕIK järgmised listing-tööd lähtuvad nendest reeglitest."
metadata: 
  node_type: memory
  type: reference
  originSessionId: f8f396e2-02eb-4145-95f6-b68c0e73c93a
---

**Allikas:** `C:\Users\indre\Desktop\Listing\AI_KULDREEGLID.md`

**12 reegli kokkuvõte (loe täismahus enne iga töö-sessiooni):**

1. **Ära muuda enne kui mõjuala on selge** — enne CSS/HTML/JS muudatust ütle: millist faili, milliseid selektoreid, milliseid override'e, mida EI muuda, kuidas kontrollid.
2. **Üks muutus korraga** — mitte font + layout + animatsioon + JS korraga. Iga muudatus väike, kontrollitav, tagasipööratav.
3. **Sama klass ei ole automaatselt sama roll** — `.spec-value` võib eri kohtades erinev olla. Kasuta `.spec-card .spec-value` jms kontekstiga selektoreid.
4. **Ära usu esimest otsingutulemust** — kontrolli kõik klassi-esinemised, media query override'id, hilisemad reeglid, eri HTML-kontekstid.
5. **Responsive ≠ pime breakpoint** — eralda viewporti laius, sisuline layout-murdepunkt, sisendmeetod (hover / pointer / touch).
6. **Tüpograafia käib rolli järgi** — sama-rolli tekstid käituvad järjekindlalt. `clamp()` ühes rollis → kontrolli teisi sama rolli.
7. **Ära paranda sümptomit nii et süsteem läheb segasemaks** — kui parandus tekitab erandeid/dubleerimist, PEATU ja kaardista uuesti.
8. **Olemasolevaid kasutaja muudatusi EI tohi tagasi pöörata** — kui tööpuus on muudatusi mida AI ei teinud, käsitle neid kasutaja tööna; ära "korrasta" omavoliliselt.
9. **Iga muudatus lõpeb kontrolliga** — rg-otsing, git diff, JS parse-kontroll, brauseri smoke-test kus mõistlik. Raporteeri tulemus lühidalt ja ausalt.
10. **Reeglit rikud → kaotad muutmisõiguse** — töö peatub kohe, järgmine samm AINULT read-only analüüs, esita täpne diff-plaan enne edasi minekut. Kasutajal õigus koostöö lõpetada.
11. **Vaikimisi töörežiim:** `Loe → Kaardista → Ütle → Üks väike muudatus → Kontrolli → Raporteeri`.
12. **Projekti närve ei kulutata** — kui muudatust ei saa kontrollitult teha, parem "peatume ja kaardistame" kui "proovin midagi ära".

**Praktilised tagajärjed:**
- ENNE faili muutmist alati: ütle MILLIST faili, MILLISEID selektoreid, MIDA EI muuda, KUIDAS kontrollid.
- Kui leian kahtlust mõjuala osas — STOP ja kaardista, mitte mine edasi.
- Kui rikun reeglit — STOP ja diff-plaan, mitte "ma parandan ära".
- Brauseri-kontroll Indrek'ile alati lühidalt + ausalt (mitte hindavalt et "kõik töötab", vaid mis täpselt kontrolliti).

**Bentley-projekti rikkumised 2026-05-27 (õppetund):** rikkusin reegleid 1, 2, 7, 11 — improviseerisin Hook-struktuuri ilma Mercedes'i lugemata; tegin mitu suurt muudatust paralleelselt; ehitasin valede klassinimedega ilma COMPONENTS.md kontrollimata; jätsin vaikimisi-töörežiimi kaardistus-sammu vahele. Reegli 10 kohaselt töö peatus ja Indrek kinnitas diff-plaani enne edasi minekut.
