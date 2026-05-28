# Listing project

Premium one-page sales pages for high-value items — cars, real estate, apartments, yachts, art, watches, collectibles. Each `.html` file in this folder is a finished listing for one specific item, designed to be the sole sales surface that the seller can promote on their own domain and social channels.

## How to add a new listing

Use the `/listing` skill. It encodes the full methodology:
- Hard constraints (no italic, no decorative numbers, no Inter, no generic Tailwind look)
- 8-section standard structure (Hero / Hook / Story / Gallery / Specs / Item-deep-dive / Location / Contact)
- Item-type specific sections (auto / kinnisvara / jaht / kunst / kell)
- CSSDA-level scroll narrative (minimum 6 distinct scroll moments per page)
- Personal first-person voice (the owner speaks, never marketing-speak)
- Custom hand-drawn SVG element per page
- Mobile responsive + `prefers-reduced-motion` respected

Trigger: just say "tee listing [item kirjeldus]" and the skill auto-loads. Or invoke explicitly with `/listing {slug}`.

## Project conventions

- **One file per item:** `{item-slug}.html` at project root (e.g., `audi-rs6-2021.html`, `viimsi-maakodu.html`)
- **Real images:** live in `images/{slug}/` subfolder (when seller provides them)
- **Layout history:** tracked in `LAYOUTS-EVOLVED.md` — each new listing must visually + structurally differ from prior ones
- **Default language:** Estonian (`<html lang="et">`)
- **Sihtgrupp:** Eesti turg esmane, edasi laienev Põhjamaade premium turule
- **Custom scrollbar:** every new auto sales listing must include a restrained, brand-specific custom scrollbar built from that page's design-system colors. It should feel premium and quiet, never loud or decorative.
- **Image optimization:** before every deploy, convert listing photos to an optimized modern format such as WebP/AVIF, update all code references to the new extensions, and keep only intentional fallback/OG assets unconverted.

## Quality bar

CSS Design Award worthy. Each page must:
- Have at least 6 distinct scroll-driven moments
- Carry consistent first-person voice throughout
- Show clear typography hierarchy (3+ levels)
- Include one custom SVG element (divider / monogram / signature)
- Respect `prefers-reduced-motion`
- Work cleanly at mobile breakpoint

Read existing listings before generating a new one — distinctiveness comes from rotation, not repetition.
