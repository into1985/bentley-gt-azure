# Faviconid — kohustuslik iga listing-projektis

**KOHUSTUSLIK.** Iga listing-projekti `<head>`'i lisada favicon-link'id. Failid on projekti **root-kaustas** (mitte `images/` ega muus alamkaustas).

## Failid mida Indrek lisab projekti root'i

- `favicon.ico` — klassikaline browser-tab ikoon (vajalik vana brauserite jaoks)
- `favicon-32x32.png` — modern browser-tab (Retina + täpsem kvaliteet)
- `apple-touch-icon.png` — iOS home-screen / iPad bookmark (180×180 standardsuurus)

## HTML pattern (kopeeri-kleebi)

```html
<!-- Favicons -->
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
```

## Kuhu `<head>`-s asetada

Pärast `<link rel="canonical">` rida, ENNE Open Graph blokki. Loogiline rühmitus:
1. Meta tags (charset, viewport, title, description, robots, author)
2. Canonical
3. **Favicons** ← siia
4. Open Graph
5. Twitter Card
6. JSON-LD
7. Preconnect + fontid

## Märkused

- **Suhtelised teed** (`href="favicon.ico"`) — töötab nii lokaalselt kui Vercel'is/serveri-environment'is
- **Sizes-atribuut** annab brauserile vihje õige variandi valikuks (32×32 vs 180×180)
- **Apple touch icon** suurus 180×180 on iOS 7+ standard, vana 152/120/etc EI vaja eraldi enam
- Indrek lisab ise failid root'i — sina lisad AINULT `<link>` tag'id

## Mälu-rada

- Lisatud 2026-05-28 pärast Bentley #3-s implementeerimist
- Seotud reeglitega: `feedback_each_design_is_artwork`, `feedback_self_improving_memory`
