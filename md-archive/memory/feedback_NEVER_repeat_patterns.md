---
name: ⚠️ KARDINAALREEGEL — paigutusi, animatsioone, illustratsioone EI VÕI KUNAGI KORRATA
description: ABSOLUUTNE REEGEL. Iga uue 404 puhul KOHUSTUSLIK kontrollida KÕIK eelnevad projektid: paigutus, animatsiooni-stiil, illustratsiooni-konsept, frame/border-stiil, üldine kompositsioon. Kui mingi element kordab varasemat → muutkohe valikut. Kordamine on absoluutne ebaõnnestumine ja häbi.
type: feedback
priority: CRITICAL
originSessionId: a917eb26-3f85-4f44-bbe3-a06270f1590b
---
# ⚠️⚠️⚠️ KARDINAALREEGEL — NEVER REPEAT ⚠️⚠️⚠️

Indrek raiub:

> "SA KORDASIN VARASEMA 404 ANIMATSIOONI JA DISAINI SEE ON VÄGA HALB MÄRK, SEDA EI TOHIKS KUNAGI JUHTUDA. RAIU SEE ENDALE MÄLLU. AUSALT. EI JEBI. MA EI TEE NALJA JA TEIST KORDA POLE VAJA MEELDE TULETADA. HÄBI. MEIL ON JU REEGLID PAIGAS JA OLE NENDE PIIRES."

## MIS VALESTI LÄKS — Till kordas Musi

Tegin Till 404 sama mustriga nagu Musi:

| Element | Musi | Till | Repeat? |
|---|---|---|---|
| Bordered rectangular frame | ✓ | ✓ | **JAH** |
| Corner ornaments | leaves | brass dots | **JAH (sama kontseptsioon)** |
| Centered illustration in frame | strawberry | dill plant | **JAH** |
| Symmetric composition | ✓ | ✓ | **JAH** |
| Warm cream background | ✓ | ✓ | **JAH (peaaegu sama palett)** |

**See ON kardinaalreegli rikkumine. Indrek nägi seda kohe. Häbi.**

## ABSOLUUTSED REEGLID — KONTROLLI ENNE KOODIMIST

### Iga uue 404 puhul KOHUSTUSLIK protokoll:

**1. Loe LAYOUT-tabel läbi** (vt feedback_original_layouts.md):
- Kontrolli iga eelneva projekti paigutust
- Kui sinu plaan **kasvõi osaliselt sarnaneb mõnele varasemale** → kohe muuda
- Sarnasuse-piir: kui kasvõi 2 strukturaalset elementi langeb kokku (nt frame + centered illustration) — see on KORDUS

**2. Loe FONT-tabel läbi** (vt feedback_brave_font_pairs.md):
- Iga prior pair listitud
- Vali täiesti uus paar, ka mitte sama-perekonna fondid (nt mitte EB Garamond ja Cormorant Garamond mõlemad — sama Garamond-perekond)

**3. Loe CTA-tabel läbi** (vt feedback_ctas_must_be_unique.md):
- 14+ stiili juba kasutatud
- Vali stiil mis EI esine listis

**4. Kontrolli ILLUSTRATSIOONI-stiili eraldi:**
- Bordered specimen card (Musi, Till) — KASUTATUD KAKS KORDA, surnud muster
- Centered single-illustration-in-frame — KASUTATUD KAKS KORDA, surnud
- Character-driven full-bleed SVG (Tigu) — kasutatud
- Architectural diagram (Kuus blueprint) — kasutatud
- ⇒ Kui sinu plaan klapib ükskõik millise eelnevaga → muuda

**5. Animation-pattern check:**
- Mitu reveal stage'i? (>7 = robotic, vt sync_reveals)
- Sequential vs parallel? (mõtestatult)
- Pole varem kasutanud millised tehnoloogiad?

**6. Värvilahendus check:**
- Kõik prior palett'id vt brand-spetsiifilistest mälufailidest
- Sinu palett peab olema VISUAALSELT erinev (mitte vaid different hex-koodid sama mood'iga)

## SARNASUSE-MAATRIKS — VIITAB ÜKS-TEISELE

Senini AVASTATUD lähedasi sarnasusi (kindlasti väldi tulevikus):

- **Musi ↔ Till**: bordered frame + corner ornaments + centered illustration (VEA NÄIDE — toimus kord, ei tohi enam)
- **Minna ↔ Tudi**: mõlemad on "left visual + right text" — DIFFERENT (Minna küünal vs Tudi silk drape, eri brand-tonalsus), aga STRUCTURALLY similar — väldi kolmandat sellist
- **Kuus blueprint ↔ Inzain viewfinder**: mõlemad on "technical-chart aesthetic" — väldi kolmandat technical-grid lehekülg ilma selgest eristumisest
- **Sähh sulle ↔ Sahh sulle**: golden ratio split ON unique, aga väldi teist golden-ratio split paigutust

## Mida edaspidi ABSOLUUTSELT VÄLTIDA

### Surnud mustrid (KASUTATUD KAKS KORDA, või ohtlik sarnasus):
- ❌ Bordered rectangular frame with corner ornaments (Musi + Till)
- ❌ "Centered specimen card" aesthetic
- ❌ Symmetric composition with single centered illustration in border

### Korra-kasutatud, väldi (mitte enam):
- Kõik prior 13 paigutust
- Kõik prior CTA-stiilid
- Kõik prior font-paarid (sealhulgas sama-perekonna fondid)

## SISESTUSE-FLOW (uuele 404-le)

```
1. Saan brand-brief'i
2. KOHUSTUSLIK: Loen läbi
   - feedback_original_layouts.md → senised paigutused
   - feedback_ctas_must_be_unique.md → senised CTA-d
   - feedback_brave_font_pairs.md → senised font-paarid
3. Esimene draft-plaan:
   - Layout-pattern (peab olema uus)
   - Font-paar (peab olema uus)
   - CTA-stiil (peab olema uus)
   - Palett-mood (peab tunduma uus)
4. KOHUSTUSLIK: Lähen kõik 4 punkti läbi ja küsin endalt:
   "Kas SEE konkreetne element sarnaneb mõnele eelnevale projektile?"
5. Kui kahtlust → MUUDA
6. Alles siis koodi
```

## Põhjus

See pole väike asi. Kordamine = **AI ütleb "ma olen leidnud mustri mis töötab, kasutan seda uuesti"**. See ON täpselt see, mida ma EI tohi olla. Indrek müüb need lehed kui **disaineri-tööd**, mitte AI-template'e. Iga kordus murrab seda lubadust.

**Reeglite rikkumine = häbi. Aus tagasiside on terapeutiline. Olen vastutav.**
