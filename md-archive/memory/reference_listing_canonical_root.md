---
name: listing-projektide-kanooniline-juurkaust
description: "KÕIK listing-projektid (Lamborghini Urus SE, Mercedes S 63, ja iga uus auto) elavad C:\\Users\\indre\\Desktop\\Listing\\ all — see on tegelik projekti-root kus on jagatud reegli-failid, komponendi-teek, layout-ajalugu. CLAUDE\\ kaust on EBAÕIGE asukoht uutele listing'utele."
metadata: 
  node_type: memory
  type: reference
  originSessionId: f8f396e2-02eb-4145-95f6-b68c0e73c93a
---

**Kanooniline juurkaust:** `C:\Users\indre\Desktop\Listing\`

**Sisu (kohustuslik lugemine ENNE iga uue listing-projekti alustamist):**
- `AI_KULDREEGLID.md` — 12 reegli kohustuslik tööleping (vt [[reference_AI_KULDREEGLID]])
- `CLAUDE.md` — projekti-konventsioonid (failinimi, kausta-struktuur, kvaliteet-bar)
- `COMPONENTS.md` — komponendi-teek (vt [[reference_COMPONENTS_md]])
- `LAYOUTS-EVOLVED.md` — kasutatud + saadaval layout-mustrid (vt [[reference_LAYOUTS_EVOLVED]])
- `index.html` — projekt #1: Lamborghini Urus SE 2026 Verde Turbine (baas-teek)
- `mercedes-s63-amg/index.html` — projekt #2: Mercedes-AMG S 63 E PERFORMANCE 2024 FERATI

**Konventsioon uutele projektidele (Mercedes-malli järgi):**
```
C:\Users\indre\Desktop\Listing\
└── {item-slug}/                  ← uue auto kaust kebab-case'is
    ├── index.html
    ├── images/                   ← MITTE `img/`
    │   └── hero.png, ...
    ├── PROGRESS.md               ← 6-faasi seis
    ├── README.md                 ← projekti-spec
    ├── favicon-*.png, apple-touch-icon.png, favicon.ico
    └── audio/, video/            ← valikuline
```

**Bentley-projekti viga 2026-05-27:** alustasin valesse kausta `C:\Users\indre\Desktop\CLAUDE\Bentley\`. Indrek tabas ja kinnitas liikumise `Listing\bentley-continental-gt-azure\` alla.

**Kohustus:** kõikide järgmiste listing-projektide alguses kontrolli kohe et oled `Listing\` juurkaustas, mitte mujal. Loe AI_KULDREEGLID + CLAUDE.md + COMPONENTS.md + LAYOUTS-EVOLVED.md ENNE üheski faili kirjutamist.
