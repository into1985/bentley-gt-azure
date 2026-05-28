# Share-nupp — universaalpattern listing-projektidele

**KOHUSTUSLIK iga listing-projektis.** Igal lehel peab olema nupp millega kasutaja saab kuulutust jagada (link sõpradele, sotsiaalmeediasse, e-mailile, WhatsApp'i jne).

## Asukoht

**Asukoht on lahtine** — sõltub sektsiooni-disainist. Vaikimisi-soovitus:
- **Kontakti / footer-CTA sektsioonis, primary-CTA all** (lihtne sekundaarne action)
- Võib olla ka Hero meta-rida, sticky FHW, või eraldi share-overlay — kujundus otsustab

AMG #2 + Bentley #3 mõlemad lähevad **footer-CTA all** marsruudiga.

## Käitumis-spec

**Web Share API → clipboard fallback** kahesammuline strateegia:

1. **Esimene eelistus:** `navigator.share(shareData)` — mobile'is avab natiivse jagamise-lehe (WhatsApp / Messenger / SMS / Mail / Twitter / ...)
2. **Fallback (desktop ja brauserid mis ei toeta Share API-d):** `navigator.clipboard.writeText(url)` — kopeerib URL'i + näitab 2.2s feedback'i "Link kopeeritud ✓"
3. **AbortError** (kasutaja tühistas Share-lehe): mitte midagi näidata
4. **Muu viga** Share API-st: langeb läbi clipboard'i fallback'ile

## Visuaalne disain

- **Ikoon:** standard share-ikoon (3 ringi + 2 ühendavat joont — kanooniline kõikidel platvormidel)
- **Label:** "Jaga kuulutust" (eesti k.) — sõnastus kindel
- **Aria-label:** "Jaga seda kuulutust"
- **Muted color** default-state (näiteks `rgba(bone, 0.65)` tumedal tausta), hover → accent (flame)
- **Hover:** ikoon liigub paremale +3px (subtle invitation)
- **`.is-success` state:** color → accent (flame), ikoon peidetud, label vahetatud "Link kopeeritud ✓"-ks 2.2s

## HTML-pattern (kopeeri-kleebi)

```html
<button type="button" class="contact-share" id="cta-share" aria-label="Jaga seda kuulutust">
  <svg class="contact-share-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
  <span class="contact-share-label">Jaga kuulutust</span>
</button>
```

## CSS-pattern (kopeeri-kleebi, kohanda värvid)

```css
.contact-share {
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
  padding: 0.4em 0;
  font-family: var(--font-body);
  font-size: 0.74rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  color: rgba(LIGHTEST-BG, 0.65); /* muted: heledaim taustatoon 65% opacity */
  transition: color 0.35s ease;
}
.contact-share-icon { flex-shrink: 0; transition: transform 0.35s ease; }
.contact-share:hover { color: var(--ACCENT); }
.contact-share:hover .contact-share-icon { transform: translateX(3px); }
.contact-share.is-success { color: var(--ACCENT); cursor: default; }
.contact-share.is-success .contact-share-icon { display: none; }
```

## JS IIFE-pattern (kopeeri-kleebi)

```js
(function () {
  'use strict';
  const shareBtn = document.getElementById('cta-share');
  if (!shareBtn) return;
  const shareLabel = shareBtn.querySelector('.contact-share-label');
  if (!shareLabel) return;
  const originalText = shareLabel.textContent;
  let resetTimer;

  function showFeedback(msg) {
    if (resetTimer) clearTimeout(resetTimer);
    shareLabel.textContent = msg;
    shareBtn.classList.add('is-success');
    resetTimer = setTimeout(function () {
      shareLabel.textContent = originalText;
      shareBtn.classList.remove('is-success');
    }, 2200);
  }

  const shareData = {
    title: 'PROJEKT_TITLE',           // kohanda
    text:  'PROJEKT_LÜHIKIRJELDUS',   // kohanda
    url: window.location.href
  };

  shareBtn.addEventListener('click', async function () {
    if (navigator.share && (!navigator.canShare || navigator.canShare(shareData))) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if (err.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(shareData.url);
      showFeedback('Link kopeeritud ✓');
    } catch (err) {
      showFeedback('Kopeerimine ebaõnnestus');
    }
  });
})();
```

## Märkused

- **`shareData.title` + `text`** peab vastama projekti SEO-meta'le — sama sõnumi tugevdus
- **`shareData.url = window.location.href`** — alati current-page URL, pole vaja hard-code'da
- **Sama ikoon** üle projektide (kanooniline share-glyph) — visuaalne keel muutub värvide kaudu, mitte ikoonide kaudu
- **`async` + try/catch** — Share API on Promise-based, AbortError tuleb käsitleda eraldi (kasutaja tühistas, mitte viga)
- **`navigator.canShare()`** lisaks `navigator.share` olemasolule — kontrollib kas just see shareData on jagatav (mõned brauserid keelduvad ilma URL'ita, vms)
- Listing-portaalide ametlik lehekülg on alati `window.location.href` — kui projekt lokaal-dev'is, näitab `localhost:8766/...`, see on OK testimiseks

## Mälu-rada

- 2026-05-23 AMG #2-s loodud (Web Share API + clipboard fallback)
- 2026-05-28 Bentley #3-s reproduced + universaalreegliks tehtud
- Indrek'i 2026-05-28 lisatud töövoogu
- Seotud: `feedback_self_improving_memory`, `feedback_each_design_is_artwork`, `feedback_ctas_must_be_unique` (visuaalne sama-skelett-uus-nahk per project)
