---
name: staatiline-multi-pane-modal-ehitus-pattern
description: Bentley Faas 3.3 broneerimismodali ehituse pattern mis töötas hästi. Rakenda kõigile järgmistele listing-projektidele multi-pane modaalide juures.
metadata: 
  node_type: memory
  type: pattern
  originSessionId: f8f396e2-02eb-4145-95f6-b68c0e73c93a
---

**Indrek 2026-05-27 Bentley broneerimismodali pärast: "selle tegid sa sitaks hästi, ma ei tea miks aga see lähenemine mulle meeldis."**

**Mis töötas:**

1. **Üks suur CSS Edit + üks suur HTML Edit** — komplekssele komponendile (modal + 3 paneeli + custom date-picker + time-picker) on tehniliselt efektiivsem teha ühe pass'iga kui jagada paljudeks väikesteks edit'iks. Token-kulu kokkuhoid + vältib sünkroniseerimise probleeme.

2. **Stack-all-panes-visible review-pattern** — staatilises Faas 3-s NÄITA kõik paneelid stack'ituna (peen `1px dashed` separator), dokumenteeri HTML-kommentaaris et Faas 4 JS hides 2-3 default. Indrek näeb KÕIK paneelide visuaali korraga, JS-loogika tuleb hiljem.

3. **`aria-pressed="true"` näitab state'i staatilises markup'is** — selected visit-card, selected date (14), selected time-slot. CSS reageerib `[aria-pressed="true"]` selektorile — annab visuaalse "selected" state'i juba enne JS-i.

4. **Variandi-pakkumine LÜHIDALT kui otsus on selge** — Indrek küsis ainult layout (A: centered card / B: full-screen). Pakkusin 2 varianti 1-rea kirjeldusega + eelistuse. EI tabel, EI mitu küsimust. Indrek vastas "A" — kõik.

5. **Trust the canonical structure** — 3 paneeli skelett (visit-type → form+pickers → success) on COMPONENTS.md sees. EI improviseeri. EHITA struktuur 1:1, vaheta ainult nahka (Migra Extralight title, --flame accent state'idele, peen dashed separator).

6. **Custom date-picker ja time-picker pole hirmus** — 36 button-cellid grid'is, väikesed time-slots radiogroup'is. Markup on verbose aga lihtne. Aspect-ratio 1 + grid 7-col + selected state = elegant kalender.

7. **Süntaks-koherentsus kogu modalis** — sama label-stiil (uppercase 0.26em tracked, --clay), sama input border-bottom underline, sama nupp-card aria-pressed state. Üks dialog = üks rütm.

**Mis hoidku ennast meeles:**

- Pärast suure komponendi ehitust → AINULT lühike report (1-2 rida) + 1 brief preview-eval kontroll. Skip pikki "mis tehtud" tabeleid.
- Kui Indrek annab discretion ("luban sina otsustada") → tee otsus, ehita, raporteeri. ÄRA hakka uuesti pakkuma variante.
- Komplekssed komponendid (modaal, accordion-set, gallery) ÜHE Edit-pass'iga > väikeste sammhaaval Edit'idega.
