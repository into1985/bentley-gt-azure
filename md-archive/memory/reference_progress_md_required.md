---
name: progress-md-kohustuslik-iga-listing-projektis
description: "Iga listing-projekti kausta tuleb luua ja pidevalt uuendada `PROGRESS.md` fail. Iga suurema töö (sektsioon valmis, faas vahetub) lõpus uuenda. Sisu: mis tehtud, mis pooleli, mis \"tulemen tagasi\" listil, järgmine samm. Aitab sessiooni-katkestuse järel kohe jätkata."
metadata: 
  node_type: memory
  type: reference
  originSessionId: f8f396e2-02eb-4145-95f6-b68c0e73c93a
---

**Indrek'i sõnastus (2026-05-27):**
> *"Iga mõne suurema töö lõpus pane endale kuskile kirja mis on tehtud ja mis veel on vaja teha, et kui kunagi peksin magama minema või lihtsalt krediit saab otsa siis järgmine kord uuesti alustades on selge, kus kohast peame jätkama."*

**Reegel:** Iga listing-projekti kaustas elab `PROGRESS.md` fail. Uuendan seda **iga sektsiooni valmimise järel** (ja iga faasi-vahetuse järel). Mercedes-projektis on see olemas — kasuta seda struktuur'i mall'ina.

**PROGRESS.md struktuur:**

```markdown
# {Auto-mark Auto-mudel} — Bentley Continental GT Azure V8 Hybrid

**Asukoht:** C:\Users\indre\Desktop\Listing\bentley-continental-gt-azure\
**Müüja:** Bentley Tallinn | Auto 100 Premium OÜ
**Hind:** 386 653 €
**Algatud:** 2026-05-27
**Viimati uuendatud:** {ISO date}

## Praegune seis

**Aktiivne faas:** Faas 2 — sisu-sektsioonid staatiliselt
**Praegu pooleli:** {sektsioon}
**Järgmine samm:** {nimetus}

## Faasi-seis (✓ tehtud, ◐ pooleli, ☐ tegemata)

### Faas 1 — Plaan
- [✓] Brand-iseloom + palett + font-paar + voice B
- [✓] Layout-muster valitud (Hero Split, Hook Mercedes-mall, Story 2-col quote-led, ...)
- [✓] Failistruktuur paikas (Listing\bentley-continental-gt-azure\)

### Faas 2 — Sektsioonid staatiliselt
- [✓] 2.1 Hero (kanooniline naming, Split layout)
- [✓] 2.2 Hook + 2.4 Spec-cards (üks sektsioon, Mercedes-mall)
- [✓] 2.3 Story (Two-column quote-led, foto + es-player)
- [☐] 2.5 Galerii ({layout TBD})
- ...

### Faas 3 — Overlay'd staatiliselt
- [☐] Hamburger-menüü overlay
- [☐] Booking modal
- [☐] Lightbox

### Faas 4 — Interaktsioonid & JS
- [☐] Scroll-lock helper
- [☐] Audio-pleier play/pause + waveform
- [☐] Lightbox prev/next/zoom
- [☐] Accordion height-collapse
- [☐] Hamburger toggle

### Faas 5 — Animatsioonid holistiline pass
- [☐] Hero pin-scrub + Ken Burns
- [☐] Hook stagger reveal
- [☐] Story scroll-reveal
- [☐] Gallery scroll-entry
- ...

### Faas 6 — Viimistlus + QA + docs
- [☐] prefers-reduced-motion
- [☐] Mobile + cross-browser QA
- [☐] LAYOUTS-EVOLVED.md uuendus (Bentley #3 lisa)
- [☐] COMPONENTS.md uuendus (kui komponente paranes)
- [☐] Mälu-uuendus (õpitud reeglid)

## 🔁 Tuleme tagasi (komponentide redisaini-nimekiri)

Komponendid mis on Bentley-projekti ehitatud, AGA visuaalselt sarnased eelmistele projektidele
ja vajavad enne deploy'd ümberdisaini:

- **Audio-pleier (.es-player)** — 2.3-s tegin liiga sarnase Mercedes'ile (ringnupp + horisontaalne layout + SVG-waveform). Pakkumised: knurled wheel marker, tachometer arc, vertical-cylinder bars. Vt [[feedback_component_design_must_differ]].
- **{lisamiseks tulevikus}**

## 📐 Layout-valikud Bentley jaoks (jälg)

- Hero: Split layout (5fr text + 7fr image) — kasutamata muster
- Hook + specs: Mercedes-mall (hook-statement + spec-cards samas sektsioonis) + diamond-mesh signature mark (.section-mesh)
- Story: Two-column quote-led (pull-quote vasakul + supporting paragraph paremal) + foto content-width all + es-player full-content-width
- Galerii: {TBD}
- ...

## Kontekst järgmistele sessioonidele

- Voice: B (auto enda hääl, esimese-isiku)
- Brand-bar: `Bentley Tallinn · Pirni 1` + hamburger
- Hind: 386 653 € (sis. KM 24%)
- Asukoht: Pirni 1, Tallinn
- Kontakt: AINULT Kristjan Uuk (mitte 3 müügikonsultanti)
- Faili-konventsioonid: index.html, images/hero.png .. story.png .. 1-25.png, audio/sound.mp3, font/Migra-*.woff2
- Eelmised projektid referentsiks: Urus (Listing\index.html), Mercedes (Listing\mercedes-s63-amg\index.html)
```

**Uuendamise rütm:**
- Pärast iga Faas 2.x sektsiooni: lisa ✓ ja kirjuta "praegu pooleli" + "järgmine samm"
- Pärast iga faasi-vahetust: aktualiseeri "Aktiivne faas"
- Kui spawn'in või leian "tuleme tagasi" item'i: lisa kohe nimekirja
- Iga uuenduse järel: "Viimati uuendatud" timestamp
