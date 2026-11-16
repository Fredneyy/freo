# freo.no – utviklingsplan

Mål: en enkel studieside der man velger emne og øver til eksamen. Første (og foreløpig eneste) emne: **EXPH0600 Examen philosophicum for ingeniørfag**, eksamen **onsdag 9. desember 2026, kl. 09–13**.

Eksamensformat vi bygger mot:
- **Kortsvar (1/3):** 4 spørsmål fra ulike deler av pensum, et avsnitt hver. Tester begreper og teorier, ikke navn/årstall.
- **Langsvar (2/3):** velg 1 av 2 caseoppgaver. Samme fremgangsmåte som caseoppgavene i modulene.
- Begge deler må bestås.

## Teknisk retning

- Next.js 16 (App Router, allerede satt opp) + Tailwind 4. Ingen nye avhengigheter.
- **Statisk side.** Innhold ligger som TypeScript-data i repoet, ingen database, ingen innlogging.
- Fremgang i quiz lagres i `localStorage` (per nettleser). Holder for én student.
- Les `node_modules/next/dist/docs/` før koding (Next 16 har endringer, jf. `AGENTS.md`).
- **Visuell testing i Chrome** underveis: etter hver fase kjøres `npm run dev`, og sidene sjekkes i Chrome (layout, mobilbredde, konsollfeil, at quizen faktisk fungerer). Brukes også til å hente læringsutbytte fra emnesiden på ntnu.no.

Rutestruktur:

```
/                         Forside: liste over emner (kort per emne)
/exph0600                 Emneside: eksamensformat, nedtelling, lenker videre
/exph0600/pensum          Oversikt over de 5 delene
/exph0600/pensum/[kap]    Konsolidert kapittel (kap 1–22)
/exph0600/guide           Slik svarer du på eksamen (kortsvar + case)
/exph0600/quiz            Flervalgsquiz (filtrer på del/kapittel)
/exph0600/kortsvar        Øv på kortsvarsspørsmål med modellsvar
/exph0600/case            Caseoppgaver med løsningsskisse
```

Datafiler (én per type, ikke mer):

```
content/exph0600/kapitler.ts   kapittelsammendrag
content/exph0600/quiz.ts       flervalgsspørsmål
content/exph0600/kortsvar.ts   kortsvarsspørsmål + modellsvar
content/exph0600/case.ts       caseoppgaver + løsningsskisser
```

## Fase 0 – Kildegrunnlag (før innhold skrives)

Pensum i repoet nå:
- `pensum/EXPH0600/Tenk.pdf` (709 sider, 22 kapitler i 5 deler)
- Forelesning 1–3 og 5–12 (PowerPoint som PDF)

Mangler (ligger på Canvas – bør legges inn i `pensum/EXPH0600/` hvis mulig):
- [ ] **Forelesning 4** (trolig pliktetikk/dydsetikk)
- [ ] **De 5 tilleggstekstene** (variantpensum for EXPH0600)
- [ ] **Studiespørsmålene per modul** – viktigst for kortsvarsdelen
- [ ] **Caseoppgavene fra modulene/seminarene** – viktigst for langsvarsdelen
- [ ] Eventuelle tidligere eksamensoppgaver
- [ ] Læringsutbyttet fra emnesiden (ntnu.no/studier/emner/EXPH0600)

Prioritering: forelesningene viser hva foreleser vektlegger. Kapitler som dekkes i forelesning prioriteres høyest; resten kortes kraftigere ned.

## Fase 1 – Grunnmur (forside og emneside)

- Felles layout: header med «freo», enkel navigasjon, lys/mørk modus via CSS.
- Forside `/`: kort for hvert emne (nå bare EXPH0600, senere flere).
- Emneside `/exph0600`: eksamensformat, nedtelling til 9. des, fire innganger (Pensum, Guide, Quiz, Kortsvar/Case).
- Mobilvennlig fra start (mye lesing skjer på mobil).

**Ferdig når:** man kan navigere forside → emne → tomme undersider.

## Fase 2 – Konsolidert pensum

Ett sammendrag per kapittel (1–22), hver med samme mal:

1. **Kjernen på 3 linjer** – hva kapitlet handler om.
2. **Nøkkelbegreper** – definisjon på én–to setninger hver (dette er det kortsvar tester).
3. **Teoriene/posisjonene** – hva de sier, hovedargument, standard innvending.
4. **Typiske eksamensspørsmål** – lenker til relevante kortsvar/quiz.
5. **Bruk i case** – hvordan teorien anvendes på et konkret tilfelle.

Fordeling (bok → forelesning):

| Del | Kapitler | Forelesning | Kjerneinnhold |
|---|---|---|---|
| 1 Argumentasjonsteori | 1–3 | 1, 2 | saklig/usaklig argumentasjon, standardisering, gyldighet, holdbarhet, relevans, feilslutninger |
| 2 Vitenskapsfilosofi | 4–10 | 8, 9, 10 | HD-metoden, induksjon, falsifikasjon/demarkasjon, bekreftelse, verdier i vitenskap, Kuhn/paradigmer, enhet/pluralisme |
| 3 Natur-, menneske-, teknologisyn | 11–13 | 6, 7 | mekanistisk vs. organisk natursyn, sinn–kropp, teknologisyn (determinisme, instrumentalisme m.m.) |
| 4 Etikk | 14–18 | 3, 4, 5 | metaetikk (relativisme, objektivisme), utilitarisme, pliktetikk (Kant), dydsetikk, ingeniøransvar/bærekraft |
| 5 Politisk filosofi | 19–22 | 11, 12 | skadeprinsippet (Mill), frihet som iboende rett (Kant), mennesket som politisk dyr (Aristoteles), demokrati vs. ekspertstyre |

Arbeidsmåte: trekk ut tekst med `pdftotext` per kapittel, kryssjekk mot forelesningslysbildene, skriv sammendrag. Mål: hvert kapittel leses på **under 10 minutter**.

**Ferdig når:** alle 22 kapitler har sammendrag, og hvert nøkkelbegrep fra forelesningene finnes i et sammendrag.

## Fase 3 – Eksamensguide ✅

`/exph0600/guide`, én side:

- **Kortsvar:** oppskrift (definer begrepet → forklar teorien → gi et eksempel → evt. en innvending), lengde, vanlige feil. Eksempler på svake vs. gode svar.
- **Langsvar/case:** fast fremgangsmåte, f.eks.
  1. Identifiser problemstillingen og hvilke deler av pensum den treffer.
  2. Presenter relevante teorier presist.
  3. Anvend hver teori på caset (det er her poengene ligger).
  4. Drøft: styrker, svakheter, motargumenter.
  5. Konklusjon med begrunnet standpunkt.
- **Tidsbruk på 4 timer:** forslag til fordeling (ca. 1 t kortsvar, ca. 3 t case inkl. planlegging).
- **Leseplan frem til 9. desember** basert på delene.

Tilpasses studiespørsmålene og caseoppgavene fra Canvas når de er lagt inn (fase 0).

## Fase 4 – Øvingsplattform ✅

### 4a Flervalgsquiz
- Spørsmålsformat: `{ id, kapittel, spørsmål, alternativer[], riktig, forklaring }`.
- Ca. 10–15 spørsmål per del til å begynne med (~60 totalt), utvides senere.
- Filtrer på del/kapittel, tilfeldig rekkefølge, vis forklaring etter svar.
- Lagre resultat per kapittel i `localStorage` → «svake områder» på emnesiden.
- Fokus på begrepsforståelse («Hvilket eksempel er en stråmann?»), ikke navn/årstall.

### 4b Kortsvarstrening
- Bygger på studiespørsmålene. Skriv eget svar i tekstfelt → vis modellsvar + sjekkliste («nevnte du X?») → egenvurdering.
- «Eksamensmodus»: 4 tilfeldige spørsmål fra 4 ulike deler, slik som på eksamen.

### 4c Caseoppgaver
- Caset vises, man skriver disposisjon, deretter vises løsningsskisse etter guidens oppskrift.
- Minst én case per del 3–5 (der case-oppgavene typisk ligger) + argumentasjonsanalyse.

**Ferdig når:** man kan ta en full prøveeksamen (4 kortsvar + 1 case) på siden.

## Fase 5 – Kvalitetssikring og publisering (kvalitetssikring ✅, publisering gjenstår)

- Faglig gjennomgang: hvert sammendrag og hvert quizsvar kryssjekkes mot boka (feil i fasit er verre enn manglende innhold).
- `npm run build` + `npm run lint` grønt.
- Test på mobil.
- Deploy (Vercel er enklest for Next.js) og koble domenet **freo.no**.

## Utenfor scope (legges til når behovet faktisk dukker opp)

- Brukerkontoer / synk av fremgang mellom enheter
- Flere emner (strukturen `/[emne]` gjør det enkelt å legge til senere)
- AI-retting av egne svar
- Spaced repetition / flashcards

## Rekkefølge og tidsplan

| Fase | Innhold | Estimat |
|---|---|---|
| 0 | Hente manglende Canvas-materiell | deg |
| 1 | Forside + emneside | kort |
| 2 | 22 kapittelsammendrag | størst |
| 3 | Eksamensguide | middels |
| 4 | Quiz, kortsvar, case | middels |
| 5 | Kvalitetssikring + deploy | kort |

Fase 2 og 4a kan gå parallelt per del, slik at f.eks. Etikk er helt ferdig (sammendrag + quiz) før neste del startes.
