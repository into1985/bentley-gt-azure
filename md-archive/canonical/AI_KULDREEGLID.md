# AI Kuldreeglid Selle Projekti Jaoks

See fail on kohustuslik tööleping igale AI tööriistale, kes seda projekti muudab.

Kui neid reegleid ei järgita, siis töö peatub. Mitte hiljem, mitte pärast "veel ühte kiiret parandust", vaid kohe.

## 1. Ära muuda enne, kui mõjuala on selge

Enne CSS-i, HTML-i või JavaScripti muutmist tuleb öelda:

- millist faili muudetakse
- milliseid selektoreid, funktsioone või elemente puudutatakse
- millised seotud override'id või media query'd võivad sama asja mõjutada
- mida teadlikult ei muudeta
- kuidas muudatust pärast kontrollitakse

Kui mõjuala pole kontrollitud, ei tohi faili muuta.

## 2. Üks muutus korraga

Ära tee korraga fonti, layouti, animatsiooni ja JavaScripti parandust, kui kasutaja palus ühte asja.

Iga muudatus peab olema väike, kontrollitav ja vajadusel lihtsalt tagasi pööratav.

## 3. Sama klass ei tähenda automaatselt sama rolli

Kui sama klassinimi esineb mitmes sektsioonis, tuleb enne muutmist kontrollida kogu kaskaad.

Näiteks `.spec-value` võib tähendada eri kohtades erinevat visuaalset rolli. Sellisel juhul tuleb kasutada kontekstiga selektorit, näiteks:

```css
.spec-card .spec-value
.spec-item .spec-value
```

Paljast globaalset selektorit ei tohi muuta enne, kui on tõestatud, et see peabki kõiki kohti mõjutama.

## 4. Ära usu esimest otsingutulemust

Üks `rg` vaste ei ole tõde.

Kui muudetakse klassi, fonti, spacingut, breakpointi või JS käitumist, tuleb kontrollida:

- kõik sama klassi esinemised
- kõik media query override'id
- hilisemad sama spetsiifikaga reeglid
- kas sama klassi kasutatakse HTML-is eri kontekstides

## 5. Responsive muudatus ei tohi olla pime breakpoint

Kui muutus puudutab mobiili, tahvlit, hoverit või touchi, tuleb eristada:

- viewporti laius
- sisuline murdepunkt, kus layout päriselt katki läheb
- seadme sisend: hover, pointer, touch

Hover- ja hiirepõhiseid efekte ei tohi siduda ainult laiusega, kui tegelik küsimus on sisendmeetodis.

## 6. Tüpograafia käib rolli, mitte juhusliku klassi järgi

Font-size võib olla fikseeritud või dünaamiline, aga sama rolliga tekstid peavad käituma järjekindlalt.

Näiteks väärtustekstid, labelid, body text ja pealkirjad on eri rollid. Neid ei tohi segada ühe juhusliku paranduse alla.

Kui ühes rollis kasutatakse `clamp()`, tuleb kontrollida, kas sama roll mujal vajab sama süsteemi.

## 7. Ära paranda sümptomit nii, et süsteem läheb segasemaks

Kui väike parandus tekitab juurde erandeid, dubleerimist või vastuolulisi override'e, tuleb peatuda ja mõjuala uuesti läbi vaadata.

Halb parandus, mis "töötab hetkel", ei ole lubatud, kui see muudab järgmise muudatuse ohtlikumaks.

## 8. Olemasolevaid kasutaja muudatusi ei tohi tagasi pöörata

Kui tööpuus on muudatusi, mida AI ei teinud, tuleb neid käsitleda kasutaja tööna.

Neid ei tohi kustutada, vormindada, tagasi pöörata ega "korrastada", kui kasutaja pole seda selgelt palunud.

## 9. Iga muudatus lõpeb kontrolliga

Pärast muudatust tuleb teha sobiv kontroll:

- seotud selektorite otsing `rg` abil
- `git diff --check`
- JavaScripti puhul scripti parse-kontroll
- interaktsiooni või layouti puhul brauseri smoke-test, kui see on mõistlik

Kontrolli tulemus tuleb kasutajale öelda lühidalt ja ausalt.

## 10. Kui reeglit rikud, kaotad muutmisõiguse

Kui AI rikub neid reegleid, siis:

- töö peatub kohe
- uut muudatust ei tehta enne, kui kasutaja lubab
- järgmine samm on ainult read-only analüüs
- agent peab näitama täpset diff-plaani enne järgmist muudatust
- kasutajal on täielik õigus koostöö lõpetada

See ei ole soovitus. See on projekti kvaliteedipiir.

## 11. Vaikimisi töörežiim selles projektis

Edaspidi kehtib vaikimisi:

```text
1. Loe.
2. Kaardista mõjuala.
3. Ütle, mida muudad ja mida ei muuda.
4. Tee üks väike muudatus.
5. Kontrolli.
6. Raporteeri tulemus.
```

Kui ülesanne on ebaselge või seotud laia kaskaadiga, siis ei hakata kohe muutma.

## 12. Projekti närve ei kulutata

Selle projekti eesmärk ei ole toota uusi probleeme.

Kui AI ei suuda muudatust teha kontrollitult, siis parem vastus on "peatume ja kaardistame", mitte "proovin midagi ära".

