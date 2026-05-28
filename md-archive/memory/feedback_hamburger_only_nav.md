---
name: navbaril-ainult-hamburger-mitte-n-htavad-lingid
description: "KÕIGI projektide top-bar / navbar / brand-bar kannab AINULT hamburger-nuppu (ja brand-mark'i), MITTE nähtavaid menüü-linke. Kõik navigatsiooni-lingid avanevad hamburger-menüü overlay'st."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: f8f396e2-02eb-4145-95f6-b68c0e73c93a
---

**Reegel:** Iga lehe top-bar'is kuvatakse ainult **(a)** brand-mark / nimi vasakul ja **(b)** hamburger-nupp paremal. Menüü-lingid (Kontakt, Galerii, About jne) **EI ole** nähtavad bar'is — need elavad hamburger-menüü overlay'is, mis avaneb klõpsamisel.

**Why:** Indrek mainis Bentley Faas 2.1 review's: "navbaril me ei kasuta linke, kõikidel projektidel on hamburger menüü ja seal klikkides näeb alles kõiki menüü linke." Universaalne reegel — kehtib kõigile lehe-tüüpidele (landing, listing, 404, agentuuri-leht). Selge minimalism, fookus sisul, mitte navigatsiooni-müral.

**How to apply:**
- **Top-bar struktuur:** vasakul brand-mark/nimi (ja vajadusel linn/aadress), paremal hamburger-nupp. **Kõik.** Mitte üksikut "Kontakt" linki, mitte "Menüü" sõna, mitte breadcrumbs.
- **Hamburger nupp:** custom-disain'itud iga projekti puhul (mitte kolme generic-joone ikoon). Sobib brand-keelega — kui projekt on editorial, võib olla peene 2-rea hint; kui brand on bold, võib olla geomeetriline. **Mitte Material Icons default.**
- **Faas 2 (staatiline):** lisa hamburger-nupp markup'ina, ilma funktsionaalsuseta.
- **Faas 3 (overlays):** disainib menüü-overlay staatiliselt avatud olekus.
- **Faas 4 (interaktsioonid):** lisab ava/sulge JS-loogika + scroll-lock + fookus-haldus + ESC-key.

**Seos teiste reeglitega:**
- [[feedback_cta_count]] — vaikimisi üks selge järgmine samm; analoogselt navbar ei reklaami valikuid
- [[feedback_single_contact_default]] — sama loogika: vähem valikuid, vähem friction
- [[feedback_ctas_must_be_unique]] — hamburger-nupp ise on CTA-kategooria element, ei tohi olla generic kolm-joont (universal nõue iga projekti puhul disain'ida)

**Universaalne — kehtib KÕIKIDELE skillidele (listing, 404, landing).** Tuleks lisada ka `page-craft.md`-sse järgmise päevikutamise käigus.
