# Pattern — Hero pin-scrub init-jump fix

**Probleem:** Listing-lehel hero-sektsioonis on tavaline kombinatsioon:
1. Hero-entry animatsioon: pilt scale 1.16 → 1.06 (1.2s Ken Burns reveal)
2. Hero pin-scrub: scroll'imisel pilt scale → 1.22

Kui pin-scrub on tehtud `to('.hero-image', { scale: 1.22 })` — siis **scroll'i alguses pilt HÜPPAB** 1.06 → 1.16 (entry-eelne väärtus) → siis hakkab progresseeruma 1.22-ni.

**Miks see juhtub (kontrollitud reaalse testimisega Mercedes S 63 projektis 2026-05-23):**

GSAP `to()` tween cache'ib FROM-väärtuse **TIMELINE CREATION** ajal (mitte first render ajal). ScrollTrigger initaliseerub kohe lehe-laadimisel, kui hero-image scale on alles 1.16 (just-set by `gsap.set`). Pin-scrub mäletab "minu FROM on 1.16", ka pärast seda kui entry-animatsioon on scale 1.06-ks viinud.

`immediateRender: false` `to()`-le **EI lahenda** — see lükkab ainult VÄÄRTUSE RAKENDAMIST edasi, mitte cache'imist. Tween mäletab endiselt 1.16 kui FROM.

**Õige fix (testitud, töötab):**

```js
gsap.timeline({
  scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=120%', pin: true, scrub: 1, anticipatePin: 1 }
})
  // fromTo + immediateRender: false → eksplitsiitne FROM väärtus (1.06, kus entry lõppes)
  // immediateRender: false hoiab rakendamise edasi kuni esimese scroll-render'ini
  .fromTo('.hero-image', { scale: 1.06 }, { scale: 1.22, ease: 'none', immediateRender: false }, 0)
  .fromTo('.hero-content', { yPercent: 0, opacity: 1 }, { yPercent: -24, opacity: 0.1, ease: 'none', immediateRender: false }, 0);
```

**Reegel:** ScrollTrigger pin-scrub + eelnev entry-animatsioon = ALATI kasuta `fromTo(target, {explicit from}, {to vars, immediateRender: false})`. Mitte `to(... immediateRender: false)`.

**Verifikatsioon:** ainus usaldusväärne kontroll on **reaalne scroll-test** (preview MCP'i `preview_eval` + `ScrollTrigger.update()` + numeerilised samples). Visuaalne hindamine on petlik — disainer märkab 1px-skaala-hüpet kohe.

**Tüüpilised sümptoomid mida testida:**
- scrollY=10 → scale jump (näiteks 1.06 → 1.16 ilma sujuva üleminekuta)
- ScrollTrigger progress=0.04 aga scale juba peaaegu sihtmärgis (3-4× rohkem kui peaks)

**Test-kood:**
```js
window.scrollTo({ top: 10, behavior: 'instant' });
ScrollTrigger.update();
await new Promise(r => setTimeout(r, 1800)); // scrub:1 settle
const scale = parseFloat(getComputedStyle(img).transform.match(/matrix\(([^)]+)\)/)[1].split(',')[0]);
// scale peab olema 1.06 + (10/totalScrollDist)*(1.22-1.06), mitte 1.16
```
