---
name: nytt-emne
description: Legg til et nytt NTNU-emne på freo med konsolidert pensum, eksamensguide, quiz, øvingsoppgaver og prøveeksamen – samme prosess som EXPH0600. Bruk når brukeren gir en lenke til en emneside og/eller nytt undervisningsmateriell, eller skriver /nytt-emne.
---

# Nytt emne på freo

Argument: lenke til emnesiden (ntnu.no/studier/emner/KODE). Undervisningsmateriellet ligger i `pensum/<KODE>/`.
EXPH0600 (`app/exph0600/`, `content/exph0600/`, `PLAN.md`) er referanseimplementasjonen. Les den før du starter.

Svar brukeren på norsk. Commit etter hver fase uten å spørre (ikke push). Les `AGENTS.md`, fordi Next.js-versjonen avviker fra treningsdataene.

## Grunnregler (lært av EXPH0600)

- **Feil i fasit er verre enn manglende innhold.** Hver påstand i sammendrag, quiz og modellsvar skal kunne slås opp i kildene.
  - Under QA i EXPH0600 ble det funnet at type I/II-feil var definert motsatt av boka.
  - Det ble også funnet et kildenavn (Berlin) og en påstand («representativitet er viktigst») som ikke stod i boka.
  - Et sitat (Habermas) hadde feil ordlyd.
- **Les kapitlene i sin helhet før du skriver sammendraget.** Sammendrag skrevet etter skumlesing ga feil som måtte rettes senere. Det gjaldt «stråmann er aldri relevant» og en filosof plassert i feil tradisjon.
- **Bruk kildens egne definisjoner, eksempler og ordlyd.** Sensor retter etter pensum, ikke etter standardlærebøker. Et eksempel du har funnet på selv er greit som illustrasjon, men definisjonen skal komme fra pensum.
- **Merk innhold som bare bygger på slides:** «Merk: sammendraget bygger på forelesningsslidene, ikke på originalteksten.»
- **Eksamensformen styrer alt.** Øvingsformatene i fase 4 velges ut fra hvordan eksamen er (se tabellen nedenfor). Ikke kopier kortsvar og case blindt.
- **Studiespørsmål fra foreleser er gull.** Let etter dem i slidene og bruk dem i øvingene.
- **Si fra om det som mangler.** Noter manglende tilleggstekster og spør brukeren én gang. Sier brukeren at de ikke har tilgang, går du videre med slides og merker innholdet.

## Fase 0 – Innhenting og inventar

1. **Hent emnesiden** (WebFetch). Hent ut:
   - emnekode og navn
   - eksamensform, varighet og hjelpemidler
   - dato og klokkeslett (sjekk også eksamensplanen)
   - vekting og delkarakterer
   - læringsutbytte
   - pensumliste
   - om det kreves godkjente øvinger
2. **Ekstraher tekst** fra `pensum/<KODE>/` til scratchpad:
   - PDF: `pdftotext -layout`
   - pptx: les `ppt/slides/*.xml` med `python3 -I` og zipfile
   - HTML: strip tags
   - Lagr én fil per kapittel eller forelesning, slik at du kan søke i dem.
3. **Kartlegg innholdet:**
   - lærebokas kapitler med sidetall
   - forelesningene: tema, foreleser og hvilke kapitler de dekker
   - studiespørsmål, oppgaver og caser i slidene
   - hva som står på pensumlisten, men mangler i mappen
4. **Skriv `plans/<kode>.md`** med samme oppbygning som `PLAN.md`:
   - eksamensfakta
   - kildeoversikt
   - inndeling i deler og kapitler med slugs
   - valgte øvingsformater
   - faseplan
5. **Vis planen til brukeren** og avklar det som mangler (materiell, eksamensdato) før fase 2.

## Fase 1 – Forside og emneside

Kopier strukturen fra EXPH0600. Ikke lag delte komponenter før det finnes et tredje emne.

- Legg emnet til i `emner` i `app/page.tsx` (kode, navn, «Eksamen <dato>»).
- Kopier og tilpass disse til `app/<kode>/`:
  - `page.tsx` med seksjonskort og eksamensboks
  - `Nedtelling.tsx` (endre `EKSAMEN`)
  - `pensum/page.tsx` og `pensum/[kap]/page.tsx`
- **Alle localStorage-nøkler skal ha emnet som navnerom**, for eksempel `freo:<kode>:quiz`. Gjelder også `freo:<kode>:svar:` og `freo:<kode>:proveeksamen`, samt event-navn.
- Seksjoner som ikke er laget ennå, vises som «kommer». De får `href` når de er ferdige.

## Fase 2 – Konsolidert pensum (`content/<kode>/kapitler.ts`)

- Typene `Kapittel` og `Teori` gjenbrukes. Hvert kapittel har:
  - `kjerne`: et avsnitt om hva kapitlet handler om
  - `begreper`: definisjoner med kildens ordlyd
  - `teorier`: med `for` og `mot`
  - `eksamen`: typiske spørsmål
  - `case` (valgfritt)
  - `kilde` og `forelesning`
- **Arbeid del for del.** Les hele kapitlet, sammenlign med forelesningen og skriv sammendraget. Fortsett først når delen er kontrollert. Commit per del eller i biter som henger sammen.
- Kontroller med `grep`/Python mot kildeteksten: navn, årstall, eksempler, tall og sitater.
- For lange norske regex-mønstre: bruk `python3 -I` med `re`, ikke ugrep. Ugrep feiler med «exceeds complexity limits».

## Fase 3 – Eksamensguide (`app/<kode>/guide/page.tsx`)

- **Svaroppskrift for hver oppgavetype:**
  - Kortsvar: definer, forklar, eksemplifiser, avgrens.
  - Case: fem steg.
  - Regneoppgaver: oppsett, mellomregning og enheter.
- **Tabell over oppgaveverb:** gjør rede for, drøft, sammenlign osv.
- **Svakt og godt svar** side om side, pluss vanlige feil.
- **Tidsfordeling** etter eksamenslengde og vekting.
- **Leseplan fra i dag til eksamensdagen**, med prøveeksamen 2–3 dager før.
- **Ankere** (`id=`) for seksjonene, siden øvingssidene lenker dit.
- Skriv på siden at rådene er våre egne anbefalinger, ikke offisielle krav.

## Fase 4 – Øvingsplattform

Velg format etter eksamensformen:

| Eksamen | Øvingsformater |
|---|---|
| Skriftlig med kortsvar/essay | Quiz + kortsvar med modellsvar og sjekkliste + case/essay med løsningsskisse |
| Flervalg (Inspera) | Quiz med mange spørsmål, eksamensmodus med tidsbegrensning |
| Regneoppgaver (matte/fysikk/statistikk) | Oppgaver med fasit og stegvis løsning, formelark |
| Muntlig | Spørsmålskort, «forklar høyt» med sjekkliste |

**4a – Quiz** (`content/<kode>/quiz.ts`, `app/<kode>/quiz/`)
- `alternativer[0]` er riktig svar. UI-et stokker rekkefølgen med Fisher–Yates.
- Spørsmålene skal teste forståelse (anvend, gjenkjenn, skill mellom), ikke navn og årstall.
- Feilalternativene skal være plausible, gjerne begreper fra samme kapittel.
- `forklaring` skal også si hvorfor de vanligste feilsvarene er feil.
- Spør 10–17 per del. Del inn etter del og kapittel.
- Bruk `quizStats.ts` og `SvakeOmrader.tsx` til å vise svake områder: minst 2 svar og under 70 % riktig.

**4b–c – Skriftlige øvinger** (`content/<kode>/ovelser.ts`, `_ove/Besvar.tsx`)
- Brukeren skriver svaret selv. Kladden lagres i localStorage.
- Modellsvar eller løsningsskisse vises først når brukeren ber om det, sammen med en sjekkliste brukeren kan krysse av.
- Ha minst én oppgave per del. Bruk forelesernes egne caser og studiespørsmål der de finnes.

**Prøveeksamen** (`app/<kode>/proveeksamen/`)
- Samme format og varighet som den ekte eksamenen.
- Oppgavene trekkes fra ulike deler, og klokken baseres på `start` i localStorage, så den overlever at siden lastes på nytt.
- Fasit vises etter at brukeren har levert.
- Ferdig når en hel prøveeksamen kan gjennomføres på siden.

## Fase 5 – Kvalitetssikring

1. **Faglig kontroll.** Dump alle fasitsvar og forklaringer:
   ```
   python3 -I - <<'EOF'
   # regex over id/sporsmal/alternativer[0]/forklaring i quiz.ts
   EOF
   ```
   - Søk opp hvert navn, tall, sitat og hver definisjon i kildeteksten.
   - Gjør det samme for modellsvar og løsningsskisser.
   - Ret til kildens ordlyd.
2. **Lenker og ruter:**
   - Curl alle ruter, inkludert hver kapittelslug. Bruk en løkke som fungerer i zsh: `for s in $(... | tr '\n' ' ')`.
   - Sjekk at `kapittel`-slugs i quiz og øvinger finnes i `kapitler.ts`.
   - Sjekk at ankerne i guiden finnes.
3. **404:**
   - En ukjent slug skal gi status 404.
   - Med `cacheComponents` er `dynamicParams` ikke tillatt. Vent derfor på `params` utenfor `<Suspense>`, kall `notFound()`, og sett `export const instant = false`. Se `app/exph0600/pensum/[kap]/page.tsx`.
4. **Mobil.** Last hver side i en iframe på 375 px via `javascript_tool`. Kontroller at:
   - `scrollWidth` er 375
   - ingen `input`, `select` eller `textarea` har skrift under 16 px, ellers zoomer iOS inn
   - skjermbildet ser riktig ut
5. **Chrome-test av flytene:**
   - Gå gjennom quiz, kortsvar og prøveeksamen: start, skriv, last siden på nytt og lever.
   - Se etter feil i konsollen og innsikter fra Next sitt dev-verktøy.
   - Rydd bort testdata fra localStorage og lukk fanen.
6. `npx tsc --noEmit`, `npm run lint` og `npm run build` skal alle være grønne.
7. Commit. Gi brukeren en rapport om hva som ble rettet og hva som ikke er sjekket.

## Rapport til brukeren etter hver fase

- Kort status, og hva som er committet.
- Hva som er verifisert, og hvordan.
- Kjente begrensninger, for eksempel innhold som bare bygger på slides eller ting som ikke er testet på en ekte telefon.
- Hva du trenger fra brukeren for neste fase.
