// Konsolidert pensum for EXPH0600. Kilder: Tenk! (2023), forelesningsslides høst 2026,
// og tilleggstekstene slik de presenteres i forelesning 5, 7 og 10.

export type Teori = {
  navn: string;
  tekst: string;
  for?: string[];
  mot?: string[];
};

export type Kapittel = {
  slug: string;
  del: number;
  tittel: string;
  kilde: string;
  forelesning?: number[];
  kjerne: string;
  begreper: [term: string, forklaring: string][];
  teorier: Teori[];
  eksamen: string[];
  case?: string;
};

export const deler: { nr: number; tittel: string; intro: string }[] = [
  {
    nr: 1,
    tittel: "Argumentasjonsteori",
    intro: "Hvordan finne, analysere og vurdere argumenter. Brukes i alle andre deler.",
  },
  {
    nr: 2,
    tittel: "Vitenskapsfilosofi",
    intro: "Hva vitenskap er, hvordan hypoteser testes, og hvilken rolle verdier og paradigmer spiller.",
  },
  {
    nr: 3,
    tittel: "Natur-, menneske- og teknologisyn",
    intro: "Synet på naturen, sinnet og teknologien, og hvordan dette former oss.",
  },
  {
    nr: 4,
    tittel: "Etikk",
    intro: "Metaetikk og de tre normative teoriene: utilitarisme, pliktetikk og dydsetikk.",
  },
  {
    nr: 5,
    tittel: "Politisk filosofi",
    intro: "Frihet, rettigheter, fellesskap og hvem som bør styre.",
  },
  {
    nr: 6,
    tittel: "Tilleggstekster (EXPH0600)",
    intro: "Ingeniøretikk, miljøetikk, bærekraft, KI og vitenskapens samfunnsansvar.",
  },
];

export const kapitler: Kapittel[] = [
  // ───────────── DEL 1 ─────────────
  {
    slug: "1",
    del: 1,
    tittel: "Argumentasjon og debatt",
    kilde: "Tenk! kap. 1",
    forelesning: [1],
    kjerne:
      "Offentlig debatt skal gi oss kunnskap (Mill) og legitime politiske beslutninger (Habermas). Det forutsetter debattnormer. Usaklig argumentasjon bryter disse normene, typisk gjennom personargumenter og stråmenn. Et argument støtter et standpunkt i den grad det er både riktig og relevant.",
    begreper: [
      ["Argument", "Én eller flere påstander som er ment å støtte eller svekke en annen påstand."],
      [
        "Debattnormene",
        "1) Oppgi grunner for oppfatningene dine. 2) Forsøk å bidra med riktig informasjon. 3) Forsøk å bidra med relevant informasjon.",
      ],
      [
        "Personargument",
        "Påstand som skal redusere troverdigheten til en person eller gruppe ved å gi dem negative karakteristikker. Bryter kravet om relevans. Ofte usaklig, men kompetanse, habilitet og interesser kan noen ganger være relevante.",
      ],
      [
        "Stråmann",
        "Å argumentere mot en karikert, mindre rimelig eller mer kontroversiell versjon av motpartens syn. Bryter både kravet om riktighet og relevans, og kan aldri være relevant.",
      ],
      ["Logisk funksjon", "Argumentets evne til å faktisk støtte eller svekke en påstand (gi grunner)."],
      ["Retorisk funksjon", "Argumentets evne til å overbevise eller overtale, uavhengig av om det gir gode grunner."],
      ["Riktighet", "Et argument er riktig hvis påstandene i det stemmer. Test: «Å ja, stemmer det?»"],
      [
        "Relevans",
        "Hvor mye argumentet, hvis det var riktig, ville talt for eller mot påstanden. Test: «Hvis det er sant, hva så?»",
      ],
    ],
    teorier: [
      {
        navn: "Riktighet og relevans er uavhengige",
        tekst:
          "Standpunkt: «Kaffe øker kreftrisikoen». «Koffein er kreftfremkallende» er relevant, men ikke riktig. «De fleste som dør av kreft i Norge drikker kaffe» er riktig, men ikke relevant (de fleste voksne drikker kaffe). Begge må være på plass for at argumentet skal gi støtte.",
      },
      {
        navn: "Hvorfor offentlig debatt?",
        tekst:
          "Mill: debatt er et kunnskapssøkende samarbeid der feil kan avsløres. Habermas: fri, offentlig debatt er en forutsetning for at politiske beslutninger er legitime.",
      },
    ],
    eksamen: [
      "Forklar forskjellen på et arguments riktighet og relevans, og gi et eksempel.",
      "Hva er en stråmann? Hvorfor kan stråmannsargumenter aldri være relevante?",
      "Når kan det være legitimt å vise til personen bak et argument?",
      "Forklar forskjellen på argumenters logiske og retoriske funksjon.",
    ],
    case:
      "Får du en debattekst: pek ut konkrete brudd på debattnormene, sitér stedet, og forklar hvilken norm som brytes og hvorfor (riktig og/eller relevant). Husk at ikke alle forenklinger er stråmenn, og at ikke all henvisning til person er usaklig.",
  },
  {
    slug: "2",
    del: 1,
    tittel: "Argumentasjonsanalyse",
    kilde: "Tenk! kap. 2",
    forelesning: [1, 2],
    kjerne:
      "En argumentasjonsanalyse kartlegger strukturen i en argumentasjon: hva standpunktet er, hvilke argumenter som støtter eller svekker det direkte eller indirekte, og hvilke påstander som er implisitte. Resultatet tegnes som et argumentasjonsdiagram.",
    begreper: [
      [
        "Standpunkt",
        "Hovedpåstanden i teksten. Ikke det samme som temaet. Formuleres som én deklarativ setning, f.eks. «Stemmerettsalderen bør senkes til 16 år».",
      ],
      ["Standpunktargument", "Argument som støtter eller svekker standpunktet direkte."],
      [
        "Indirekte argument",
        "Argument som støtter eller svekker et annet argument, og dermed standpunktet indirekte. Viser ofte til forskning, statistikk eller historiske fakta.",
      ],
      ["Argumentasjonskjede", "En rekke argumenter der hvert støtter det neste opp mot standpunktet."],
      [
        "Sammensatt argument",
        "To eller flere påstander som bare sammen gir én grunn for standpunktet (indre logisk sammenheng). Eks.: «Statsbudsjettet øker ikke studiestøtten» + «Uten høyere støtte vil frafallet øke».",
      ],
      [
        "Implisitt påstand",
        "Påstand argumentasjonen hviler på, men som ikke sies. Ofte en normativ premiss. Skal synliggjøres i diagrammet, og kan være argumentets svake punkt.",
      ],
      [
        "Normativ vs. deskriptiv påstand",
        "Deskriptiv: hvordan noe er (sant/usant). Normativ: hvordan noe bør være, eller om det er bra/dårlig. Standpunkter er ofte normative og støttes av begge typer.",
      ],
      [
        "Konsekvensargument",
        "Normativt argument med en deskriptiv påstand om en følge («Hvis p, så q») og en (ofte implisitt) normativ vurdering av følgen («q er bra/dårlig»).",
      ],
      ["Motargument", "Argument som svekker standpunktet eller et annet argument."],
      [
        "Språkavklaring / ekvivokering",
        "Flertydige ord må presiseres. Ekvivokering er en feil der et ord skifter betydning underveis (f.eks. «teori», «frihet», «ulikhet»).",
      ],
    ],
    teorier: [
      {
        navn: "Fremgangsmåte for å finne argumenter",
        tekst:
          "1) Finn steder som gir grunner (se etter «fordi», «derfor», «ettersom»). 2) Omformuler uklare påstander presist. 3) Bryt opp setninger som inneholder flere påstander. 4) Avgjør hvilken påstand hvert argument gir grunn for.",
      },
      {
        navn: "Fordekt standpunkt",
        tekst:
          "Noen tekster unngår å ta tydelig standpunkt («Vi må tenke helhetlig»). Da må du vurdere om det finnes et underforstått standpunkt, eller om teksten egentlig ikke tar stilling.",
      },
    ],
    eksamen: [
      "Hva er forskjellen på et standpunktargument og et indirekte argument?",
      "Hva er et sammensatt argument? Gi et eksempel.",
      "Hva er en implisitt påstand, og hvorfor er det viktig å få den frem?",
      "Forklar forskjellen på normative og deskriptive påstander.",
    ],
    case:
      "Standardoppskrift: 1) Formuler standpunktet som én påstand. 2) List standpunktargumenter (SA1, SA2 …). 3) Legg til indirekte argumenter under riktig SA. 4) Skriv inn implisitte påstander, særlig normative. 5) Tegn diagram (pil = støtter, markér motargumenter).",
  },
  {
    slug: "3",
    del: 1,
    tittel: "Argumentasjonsvurdering",
    kilde: "Tenk! kap. 3",
    forelesning: [2],
    kjerne:
      "Å vurdere et argument er å avgjøre hvor sannsynlig det er riktig og hvor relevant det er. Deduktive argumenter er enten maksimalt relevante eller ikke. Induktive argumenter gjør standpunktet mer eller mindre sannsynlig. Hver type har egne kriterier. Normative argumenter krever i tillegg at du tar stilling til verdier.",
    begreper: [
      [
        "Deduksjon",
        "Standpunktet skal følge med nødvendighet: umulig at standpunktet er feil hvis argumentet er riktig, i kraft av logisk form. Da er argumentet maksimalt relevant (gyldig).",
      ],
      ["Induksjon", "Argumentet skal sannsynliggjøre standpunktet. Relevans kommer i grader."],
      [
        "Induktiv generalisering",
        "Fra et utvalg til en generell påstand («n % av observerte F er G, altså er alle/de fleste F G»). Kriterier: utvalgets størrelse og representativitet (viktigst).",
      ],
      [
        "Induktiv syllogisme",
        "Fra en generalisering til et enkelttilfelle («De fleste F er G, x er F, altså er x G»). Samme kriterier: størrelse og representativitet for akkurat dette tilfellet.",
      ],
      [
        "Analogiargument",
        "Fra et tilfelle til et annet som ligner («x og y er like, x har F, altså har y F»). Kriterier: relevante likheter og relevante ulikheter.",
      ],
      [
        "Abduksjon",
        "Slutning til beste forklaring. Kriterier: forklaringskraft, konservativitet (passer med det vi vet), enkelhet og konkurranse (bedre enn alternative forklaringer).",
      ],
      ["Modus ponens", "Hvis p så q. p. Altså q. (Gyldig.)"],
      ["Modus tollens", "Hvis p så q. Ikke q. Altså ikke p. (Gyldig.)"],
      [
        "Å bekrefte konsekvensen",
        "Hvis p så q. q. Altså p. (Ugyldig! F.eks. «homøopati virker» fordi pasientene blir bedre. Placebo kan forklare det.)",
      ],
    ],
    teorier: [
      {
        navn: "Fire steg for å vurdere et argument",
        tekst:
          "1) Analyser strukturen. 2) Vurder hvor sannsynlig det er at argumentet er riktig. 3) Anta at det er riktig, og vurder hvor relevant det er. 4) Konkluder hvor mye argumentet støtter standpunktet.",
      },
      {
        navn: "Test for deduktiv gyldighet",
        tekst:
          "Anta at standpunktet er feil og at argumentet er riktig. Er dette et mulig (konsistent) scenario? Ja: ikke deduktivt gyldig. Nei: gyldig. Vurder formen, ikke innholdet. Vi lar oss lett lure av om konklusjonen virker troverdig (belief bias).",
      },
      {
        navn: "Normative argumenter",
        tekst:
          "Normativ argumentasjon er ikke en egen type; den kan være deduktiv eller induktiv. Det spesielle er at du selv må gjøre en verdivurdering for å avgjøre om den normative premissen er riktig. Konsekvensargumenter vurderes ved å spørre: Hvor sannsynlig er følgen? Hvor god/dårlig er den? Finnes det andre følger som veier tyngre?",
      },
    ],
    eksamen: [
      "Hva er forskjellen på deduktive og induktive argumenter?",
      "Hvilke kriterier bruker vi for å vurdere en induktiv generalisering?",
      "Forklar hva et analogiargument er og hvordan det vurderes.",
      "Hva er abduksjon? Nevn kriteriene for en god forklaring.",
      "Vis hvorfor «Hvis p så q, q, altså p» ikke er gyldig.",
    ],
    case:
      "Etter analysen: gå gjennom hvert argument og si om det er riktig (sannsynlig?) og relevant (type argument + kriterier). Eks.: «SA2 er et analogiargument; relevansen svekkes fordi forsøkskommunene hadde særtrekk …».",
  },

  // ───────────── DEL 2 ─────────────
  {
    slug: "4",
    del: 2,
    tittel: "Hva er vitenskap?",
    kilde: "Tenk! kap. 4",
    forelesning: [8],
    kjerne:
      "Vitenskap er (Tranøy) systematisk og sosialt organisert søken etter, produksjon av og formidling av kunnskap og innsikt. Mye av det vitenskapen undersøker, kan ikke observeres direkte: det er for stort, smått eller fjernt, for generelt (lover), eller det er årsakssammenhenger (vi observerer bare korrelasjoner). Derfor formulerer vi hypoteser om det uobserverbare og tester dem mot observasjoner. Vi får evidens, aldri sikre bevis. Fordi mennesker har bias, trenger vi metoder som motvirker bias. Målet er ikke forskere uten bias, men metoder som hindrer at bias påvirker resultatene.",
    begreper: [
      [
        "Epistemologi",
        "Læren om kunnskap. Den vurderer (normativt) hva som gjør oppfatninger berettiget; den beskriver ikke bare hva folk tror. (Klassisk definisjon fra forelesning: kunnskap er sann, begrunnet tro.)",
      ],
      [
        "Teoretisk, praktisk og taus kunnskap",
        "Teoretisk kunnskap: å vite at noe er tilfelle. Praktisk kunnskap: å vite hvordan man gjør noe (sykle). Taus kunnskap (Polanyi): kunnskap vi har, men ikke fullt kan sette ord på.",
      ],
      [
        "Fenomen, data og teori",
        "Vitenskapens tre dimensjoner: fenomenet vi vil forstå, dataene/evidensen vi samler, og teoriene/modellene som forklarer. Modellen er et kart, ikke terrenget.",
      ],
      [
        "Teori og hypotese",
        "En teori er et nettverk av hypoteser som forklarer fenomener. Ordet «teori» sier ingenting om hvor godt bekreftet den er (evolusjonsteorien er svært godt bekreftet).",
      ],
      ["Evidens", "Informasjon som gjør en hypotese mer eller mindre sannsynlig. Ikke «bevis»: ingenting i empirisk vitenskap er helt sikkert."],
      [
        "Korrelasjon vs. kausalitet",
        "Korrelasjon: to fenomener opptrer sammen. Kausalitet: det ene forårsaker det andre. Vi observerer korrelasjoner, ikke årsaker; en tredje faktor kan forklare begge.",
      ],
      [
        "Bekreftelsestendens",
        "Tendens til å lete etter og legge merke til informasjon som støtter det vi allerede tror, og overse det som ikke passer. Eks.: årelating virket å fungere fordi man husket de som ble friske.",
      ],
      [
        "Dobbel blinding",
        "Verken deltakerne eller de som behandler og vurderer resultatene, vet hvem som får hva. Særlig viktig at de som vurderer, er blindet.",
      ],
      [
        "Type I- og type II-feil",
        "Type I: falsk positiv (vi tror det er en effekt som ikke finnes). Type II: falsk negativ (vi overser en reell effekt).",
      ],
      [
        "Ockhams barberkniv",
        "Blant ellers like gode hypoteser bør vi (kanskje) foretrekke den enkleste. Boken er forsiktig: enkelhet er et omdiskutert kriterium.",
      ],
    ],
    teorier: [
      {
        navn: "Hvordan velge hypoteser",
        tekst:
          "1) Koherens: passer med det vi ellers vet. 2) Forklarende kraft: forklarer observasjonene, gjerne mer enn de vi startet med. 3) Kanskje enkelhet. Vi starter med en hypotese, ikke med data, og hypotesen må deretter testes. Eks.: Inge Lehmann sluttet fra seismiske målinger at jorda har en indre, fast kjerne, noe ingen kan observere direkte.",
      },
      {
        navn: "Hvorfor studerer vitenskapen det uobserverbare?",
        tekst:
          "Fordi det er for stort, for smått eller for fjernt; fordi lover er generelle og idealiserte (treghetsloven er aldri observert i ren form); og fordi årsakssammenhenger ikke kan observeres, bare korrelasjoner. Det samme gjelder historie og litteraturvitenskap: hypoteser om fortiden testes mot kilder.",
      },
      {
        navn: "Bias og metode",
        tekst:
          "Feynman: det første prinsippet er at du ikke skal lure deg selv, og du er den letteste å lure. Bekreftelsestendens har kanskje en evolusjonær forklaring (det lønte seg å se mønstre). Metoder som kontrollgrupper, dobbel blinding og replikasjon skal motvirke bias.",
      },
    ],
    eksamen: [
      "Hva er epistemologi?",
      "Hva er forskjellen på teoretisk, praktisk og taus kunnskap?",
      "Hvorfor sier vi evidens og ikke bevis i vitenskapen?",
      "Hvorfor må vitenskapen studere ting som ikke kan observeres direkte? Gi eksempler.",
      "Forklar forskjellen på korrelasjon og kausalitet med et eksempel.",
      "Hva er bekreftelsestendens, og hvordan kan vitenskapelige metoder motvirke den?",
      "Hvilke kriterier kan vi bruke for å velge mellom hypoteser?",
    ],
  },
  {
    slug: "5",
    del: 2,
    tittel: "Hypotetisk-deduktiv metode",
    kilde: "Tenk! kap. 5",
    forelesning: [8],
    kjerne:
      "HD-metoden er et skjema for hvordan hypoteser testes, ikke «den» vitenskapelige metoden. Man formulerer en hypotese, utleder en observerbar konsekvens, tester og vurderer. Det er en asymmetri: bekreftelse er aldri deduktivt gyldig og gir bare induktiv støtte i grader, mens avkreftelse har gyldig form. Men heller ikke avkreftelse er sikker, fordi premisset «hvis h, så e» bygger på hjelpeantakelser.",
    begreper: [
      ["Hypotese (h)", "En antakelse om hvordan noe henger sammen, som kan testes."],
      ["Prediksjon (e)", "En observasjon hypotesen sier vi vil gjøre. Kan også gjelde noe som allerede har skjedd men ikke er observert ennå (fossiler som evolusjonsteorien forutsier)."],
      [
        "Oppdagelses- vs. begrunnelseskontekst",
        "Hvordan vi kommer frem til en hypotese (kan være hva som helst: Tu Youyou fant artemisinin mot malaria i gamle kinesiske tekster) vs. hvordan den testes og begrunnes.",
      ],
      ["Transparens", "Metode og data legges åpent frem, slik at andre kan vurdere og etterprøve."],
      [
        "Replikerbarhet",
        "At andre kan gjenta undersøkelsen og få samme resultat. Det er evidensen som må kunne replikeres, ikke fenomenet (Big Bang kan ikke gjentas, men målingene kan).",
      ],
      [
        "Årsaks- vs. formålsforklaring",
        "Årsaksforklaring: hva som forårsaket noe. Formålsforklaring: hvilke grunner og hensikter en aktør hadde. Samfunnsvitenskapene må også forholde seg til aktørenes egne tolkninger.",
      ],
    ],
    teorier: [
      {
        navn: "De fire stegene",
        tekst:
          "1) Formuler hypotese h. 2) Utled en observerbar konsekvens e: «hvis h, så e». 3) Test om e inntreffer. 4) Vurder: e inntraff → h er bekreftet (styrket); e inntraff ikke → h er avkreftet. Eks.: Big Bang predikerte kosmisk bakgrunnsstråling, som COBE-satellitten målte. Hverdagseksempel: «kaken er ferdig» → fyrstikken kommer ren ut.",
      },
      {
        navn: "Gode tester",
        tekst:
          "Prediksjoner må fastsettes før testen; å «la dataene lede» uten hypotese er tvilsomt. Støtten blir sterkere jo flere prediksjoner som slår til, jo mer variert de er, og jo mer overraskende de er (Poisson-flekken som bekreftet Fresnels bølgeteori for lys).",
      },
      {
        navn: "Asymmetrien",
        tekst:
          "Bekreftelse: hvis h så e; e; altså h. Ikke deduktivt gyldig (bekrefte konsekvensen), men gir induktiv støtte. Avkreftelse: hvis h så e; ikke e; altså ikke h. Gyldig (modus tollens). Men premisset «hvis h så e» forutsetter hjelpeantakelser (instrumenter, bakgrunnsteori), så heller ikke falsifisering er helt sikker.",
      },
      {
        navn: "Kritikk og begrensninger",
        tekst:
          "Bias kan styre hvilke hypoteser som blir testet: symptomer på hjerteinfarkt ble lenge forsket på med menn som norm, så kvinners symptomer ble oversett. Det er en kritikk av vitenskapens sosiale og institusjonelle side. I samfunnsvitenskapene er det vanskelig å isolere årsaker og sikre validitet, men HD-tenkning gjelder også der: finner vi ingen korrelasjon, er en årsakshypotese svekket.",
      },
    ],
    eksamen: [
      "Gjør rede for stegene i HD-metoden med et eksempel.",
      "Forklar asymmetrien mellom bekreftelse og avkreftelse. Hvorfor er heller ikke avkreftelse sikker?",
      "Hva er forskjellen på oppdagelseskontekst og begrunnelseskontekst?",
      "Hvorfor bør prediksjonene bestemmes før testen?",
      "Hva gjør at en test gir mye støtte til en hypotese?",
      "Hva er forskjellen på årsaksforklaringer og formålsforklaringer?",
    ],
  },
  {
    slug: "6",
    del: 2,
    tittel: "Demarkasjonskriterium og falsifikasjonisme",
    kilde: "Tenk! kap. 6",
    forelesning: [8],
    kjerne:
      "Popper foreslo falsifiserbarhet som demarkasjonskriterium: en teori er vitenskapelig bare hvis det er mulig å vise at den er feil. Vitenskapen går fremover ved å forsøke å falsifisere teorier og beholde de som tåler det. Quine–Duhem-problemet viser at dette er for enkelt, fordi hypoteser aldri testes alene.",
    begreper: [
      ["Demarkasjonskriterium", "Et kriterium som skiller vitenskap fra ikke-vitenskap/pseudovitenskap."],
      [
        "Falsifiserbar",
        "Det må være mulig å vise at påstanden er usann, dersom den er usann. Den må forby noe observerbart.",
      ],
      [
        "Falsifikasjonisme",
        "Poppers syn: vitenskap kan ikke bekrefte hypoteser, bare falsifisere dem. Gode teorier tåler gjentatte forsøk på falsifisering.",
      ],
      [
        "Pseudovitenskap",
        "Noe som forsøker å fremstå som vitenskap uten å oppfylle kravene til evidens og testing.",
      ],
      [
        "Ad hoc-hypotese",
        "Tilleggshypotese som innføres bare for å redde en teori fra falsifisering, uten uavhengig støtte. Eks.: «Studiene finner ikke effekt fordi metodene ikke kan måle livsenergien.»",
      ],
      [
        "Quine–Duhem-tesen",
        "Hypoteser testes aldri isolert. Det er alltid hjelpehypoteser i spill (instrumentene virker, bakgrunnsteori stemmer), så en mislykket prediksjon sier ikke hvilken antakelse som er feil.",
      ],
      ["Hjelpehypotese", "Antakelse man må forutsette for å gjennomføre en test, men som ikke er det man tester."],
    ],
    teorier: [
      {
        navn: "Falsifikasjonismen",
        tekst:
          "Motivasjon: induksjon kan ikke bevise noe, men modus tollens kan avkrefte. Fremskritt = dristige hypoteser som overlever forsøk på falsifisering.",
        for: [
          "Fanger at vitenskap er åpen for kritikk, mens dogmatiske systemer ikke er det.",
          "Gir et tydelig kriterium mot pseudovitenskap.",
        ],
        mot: [
          "Quine–Duhem: én negativ observasjon kan skyldes instrumenter eller hjelpehypoteser.",
          "Forskere forkaster sjelden teorier ved første avvik; fremskritt skjer oftere ved revisjon.",
          "Vi bruker faktisk teorier fordi de er godt bekreftet, ikke bare «ikke-falsifisert».",
        ],
      },
      {
        navn: "Poppers svar",
        tekst:
          "Falsifikasjonisme er først og fremst en normativ holdning: formuler teorier slik at de kan testes, og vær villig til å endre syn i møte med motstridende data.",
      },
    ],
    eksamen: [
      "Hva menes med at en teori er falsifiserbar?",
      "Hva er en ad hoc-hypotese? Gi et eksempel.",
      "Gjør rede for Quine–Duhem-problemet og hvilken utfordring det gir falsifikasjonismen.",
      "Hvordan kan vi skille vitenskap fra pseudovitenskap?",
    ],
  },
  {
    slug: "7",
    del: 2,
    tittel: "Bekreftelse",
    kilde: "Tenk! kap. 7",
    forelesning: [9],
    kjerne:
      "At en test bekrefter en hypotese, betyr at hypotesen er mer sannsynlig etter testen enn før. Bekreftelse kommer i grader og er kumulativ: mange tester som hver gir litt støtte, gir samlet mye. Sobers overraskelsesprinsipp sier hvor mye en observasjon bekrefter, og base rate sier hvor sannsynlig hypotesen var i utgangspunktet. Begge avhenger av bakgrunnskunnskap og hvilke alternative hypoteser vi kjenner, og derfor er det ofte rasjonelt for ikke-eksperter å lytte til eksperter.",
    begreper: [
      [
        "Overraskelsesprinsippet (Sober)",
        "Observasjon e bekrefter hypotese h i den grad 1) e er forventet dersom h er sann, og 2) e er overraskende dersom h er usann. Eks.: at butleren har hender, bekrefter knapt at han er øksemorderen (mange har hender); en øks med offerets DNA og et motiv bekrefter mye.",
      ],
      [
        "Base rate",
        "Sannsynligheten for at noe er tilfelle før ny evidens kommer inn. Prinsipp 3: hvor sannsynlig er h uavhengig av e?",
      ],
      [
        "Base rate-problematikken",
        "Sykdom X rammer 1 av 1 million; testen er 99 % pålitelig. Av en million testede får 10 000 falskt positivt svar. En positiv test gjør det mer sannsynlig at du er syk (1/1 000 000 → ca. 1/10 000), men det er fortsatt langt mer sannsynlig at testen tok feil.",
      ],
      [
        "Kontekstavhengighet",
        "Hvor mye en observasjon bekrefter, avhenger av hva vi ellers vet og hvilke alternativer vi kjenner. Det er informasjonen vår som endrer seg, ikke verden.",
      ],
      [
        "Epistemologisk arbeidsdeling",
        "De som kan mest om et felt, er best rustet til å vurdere evidens; for de fleste andre er det mest rasjonelt å lytte til dem.",
      ],
      [
        "Bayesianisme",
        "Synet at sannsynlighetskalkylen (Bayes' teorem) gir hele logikken for hvordan evidens styrker eller svekker hypoteser. Kan gi et svar på Humes induksjonsproblem, men har «the problem of priors»: hvor skal vi starte?",
      ],
    ],
    teorier: [
      {
        navn: "Evolusjon vs. intelligent design",
        tekst:
          "Før Darwin bekreftet komplekse organismer designhypotesen, fordi alternativet var rene tilfeldigheter. Da evolusjonsteorien kom, var kompleksitet ikke lenger overraskende selv om design var usant. Designhypotesen ble ikke falsifisert, men en bedre forklaring tok over. Evolusjonsteorien forklarer også fossilrekker, genetikk og rudimentære organer.",
      },
      {
        navn: "Gran Sasso og Quine–Duhem",
        tekst:
          "Målinger antydet nøytrinoer raskere enn lyset. Forskerne veide A (relativitetsteorien er feil) mot B (instrumentene svikter). Relativitetsteorien var svært godt bekreftet, så B var mer sannsynlig. Popper sliter med å forklare hvorfor dette var rimelig; base rate forklarer det. Det gjelder begge veier: et overraskende resultat for at jorda er flat skyldes nok støy.",
      },
      {
        navn: "Hvorfor lytte til eksperter?",
        tekst:
          "Å se hvor overraskende en observasjon er, krever bakgrunnskunnskap. Eks.: dødsfall kort tid etter koronavaksinen i 2021 var forventet statistisk sett, gitt hvem som ble vaksinert. Eksperter kan ta feil, men vurderer statistisk sett bedre. Vitenskapsfornektere henvender seg gjerne til massene, ikke til ekspertene. Men ekspertise finnes også utenfor akademia: ungdom om egen situasjon, AIDS-aktivister (Epstein) og marginaliserte grupper.",
      },
      {
        navn: "Er det problematisk at bekreftelse avhenger av aktørene?",
        tekst: "",
        for: [
          "Base rate må tas med, ellers ender man fort opp med tvilsomme konklusjoner fra tilfeldige funn (Gorski & Novella om homøopati).",
          "Harding: troen på en nøytral vitenskap uten ståsted er en myte og kan hindre fremskritt.",
        ],
        mot: [
          "Jo færre hypoteser man kjenner, jo lettere er det å få bekreftelse. Vi må vurdere alle hypoteser og alle data (Garzarelli traff på Black Monday, men var totalt sett ikke bedre enn tilfeldig gjetting).",
          "Forskere er uenige om utgangssannsynligheter og dermed om hva en test viser. Feil i bakgrunnsteori kan forplante seg.",
          "Mayo (neo-popperianer): uten et nøytralt mål undergraves objektiviteten. Evidens er evidens fordi testene følger god praksis. Beslektet med Evidence-based medicine (EBM).",
        ],
      },
    ],
    eksamen: [
      "Hva vil det si at en observasjon bekrefter en hypotese?",
      "Forklar overraskelsesprinsippet med et eksempel.",
      "Hva er base rate, og hvorfor er det viktig ved f.eks. medisinske tester?",
      "Hvordan kan base rate forklare forskernes reaksjon på Gran Sasso-målingene?",
      "Hvorfor påvirker bakgrunnskunnskap hvor mye en observasjon bekrefter? Er det problematisk?",
      "Hvorfor kan det være rasjonelt å stole på eksperter?",
    ],
  },
  {
    slug: "8",
    del: 2,
    tittel: "Er vitenskapen verdifri?",
    kilde: "Tenk! kap. 8",
    forelesning: [9],
    kjerne:
      "Som aktivitet er vitenskapen åpenbart ikke verdifri: den utføres av mennesker med mål og verdier. De interessante spørsmålene er hvordan verdier påvirker forskningen, og hvordan vi hindrer uheldig påvirkning. Vitenskapen trenger både epistemologiske normer og sosiale normer (Mertons KUDOS). Verdier styrer hvilke spørsmål vi stiller og hvordan vi sorterer data. Kunnskap er situert, og ifølge standpunktepistemologien kan marginaliserte grupper ha epistemologiske fordeler.",
    begreper: [
      [
        "Epistemologiske normer",
        "Normer vi må følge for at undersøkelser skal gi kunnskap: presisjon, nøyaktighet, testdesign som unngår bias, prediksjoner før testing.",
      ],
      [
        "KUDOS (Merton, 1942)",
        "Sosiale normer. Kommunisme: resultater er felles eie og skal ikke holdes hemmelige. Universalisme: påstander vurderes etter upersonlige kriterier, ikke etter kjønn, klasse, nasjonalitet. Desinteresse: personlige, politiske og økonomiske interesser skal ikke påvirke resultatet. Organisert skeptisisme: alt skal utsettes for kritikk.",
      ],
      ["Fagfellevurdering", "Anonyme eksperter på feltet vurderer et arbeid før det publiseres. En kontrollmekanisme mot slurv og prestisjejag."],
      [
        "Publikasjonsbias",
        "Positive funn publiseres oftere enn negative. Negative studier overses, og tilfeldige positive funn kan få et virkningsløst middel til å se ut som et vidundermiddel.",
      ],
      [
        "P-hacking",
        "Å gjøre mange analyser på samme data til noe blir «signifikant» (p ≤ 0,05). Med 1/20 sjanse for falsk positiv per analyse får man fort tilfeldige funn. Bidrar til replikasjonskrisen.",
      ],
      [
        "Naturlige slag",
        "Kategorier som finnes i naturen uavhengig av oss (gull = atomnummer 79), i motsetning til kategorier som speiler våre interesser (trær, arter, epoker, Plutos omklassifisering).",
      ],
      [
        "Interaktive slag (Hacking)",
        "Kategorier om mennesker som påvirker dem som kategoriseres, f.eks. «alkoholiker» eller psykiatriske diagnoser.",
      ],
      [
        "Situert kunnskap (Haraway)",
        "Hva vi vet, avhenger ikke bare av resonnering og empiri, men av sosiale posisjoner og erfaringene til dem som har kunnskapen.",
      ],
      [
        "Standpunktepistemologi (Harding)",
        "Ens sosiale posisjon påvirker hva man har tilgang til. Marginaliserte grupper må forholde seg både til sitt eget og det dominerende perspektivet, og kan derfor ha epistemologiske fordeler.",
      ],
    ],
    teorier: [
      {
        navn: "Verdier styrer spørsmålene, ikke (nødvendigvis) svarene",
        tekst:
          "Alle forskningsvalg er verdiladde, og det er ukontroversielt. Problemet med oppdragsforskning er først og fremst at kommersielle aktører setter agendaen, ikke at svarene er gale. Desinteresse handler om at interesser ikke skal påvirke hvordan vi kommer frem til svarene. Mangfold i forskningen begrunnes med at én gruppe ikke bør sette agendaen alene.",
      },
      {
        navn: "Verdier påvirker hvordan vi sorterer data",
        tekst:
          "Interesser styrer hvilke data vi legger merke til og hvordan vi kategoriserer dem (arter, epoker, Pluto). Fremskritt kommer ofte av bedre begreper, ikke bare nye data: at gull er et grunnstoff, viste at alkymien var dødsdømt.",
      },
      {
        navn: "Harding: upartiskhet er en myte",
        tekst:
          "Vi arbeider alltid fra et perspektiv. Å tro at man er upartisk, gjør det vanskeligere å se egne bakgrunnsantakelser og kan føre til at andres perspektiver avfeies som «uvitenskapelige». Eksempler på standpunktets verdi: kvinnesykdommer som endometriose, kvinnelige primatforskere, McClintocks «hoppende gener», urfolks miljøkunnskap.",
      },
      {
        navn: "Politisk kontroll og demokratisk debatt",
        tekst:
          "Vannevar Bush: en samfunnskontrakt der vitenskapen selv avgjør gode spørsmål. Vitenskapen er apolitisk. Det er en illusjon. Longino: upartiskhet er et kollektivt prosjekt som krever 1) fora for kritikk, 2) at kritikk faktisk tas opp, 3) felles standarder, 4) likhet mellom epistemologiske samfunn. Desinteresse er ikke med. Innvending: hvilken dissens skal anerkjennes? Debatt med vaksinefornektere kan legitimere syn som ikke fortjener det.",
      },
    ],
    eksamen: [
      "Gjør rede for Mertons KUDOS-normer.",
      "Hva er forskjellen på epistemologiske og sosiale normer i vitenskapen?",
      "Nevn noen måter verdier kan påvirke vitenskapelig arbeid.",
      "Hva er publikasjonsbias og p-hacking?",
      "Hva menes med at kunnskap er situert? Hva er standpunktepistemologi?",
      "Gjør rede for Longinos kriterier. Hvordan skiller de seg fra Mertons normer?",
      "Er det et problem at vitenskapen ikke er verdifri? Drøft.",
    ],
  },
  {
    slug: "9",
    del: 2,
    tittel: "Paradigmer og fremskritt",
    kilde: "Tenk! kap. 9",
    forelesning: [9, 10],
    kjerne:
      "Kuhn mente at vitenskap foregår innenfor paradigmer. Normalvitenskap løser oppgaver innenfor rammene til anomalier hoper seg opp, det oppstår krise, og en revolusjon fører til et nytt paradigme. Observasjoner er teoriavhengige, og paradigmer kan være inkommensurable. Det reiser spørsmål om fremskritt og relativisme.",
    begreper: [
      [
        "Paradigme",
        "Rammeverket som organiserer forskningen i en disiplin: begrepsapparat, verdier/normer, teoretiske forutsetninger og mønstereksempler.",
      ],
      ["Normalvitenskap", "Puslespillløsning innenfor et paradigme som ikke selv utfordres."],
      ["Anomali", "Observasjon som ikke passer inn i paradigmet (f.eks. Merkurs bane for Newtons fysikk)."],
      ["Vitenskapelig revolusjon", "Paradigmeskifte: det gamle rammeverket erstattes (Newton → Einstein)."],
      ["Mønstereksempel", "Standardløsninger studenter lærer, som viser hvordan faget skal drives."],
      [
        "Observasjoners teoriavhengighet",
        "Hva vi observerer og hvordan vi tolker det, avhenger av bakgrunnsteori.",
      ],
      [
        "Inkommensurabilitet",
        "To paradigmer mangler felles, nøytralt sammenligningsgrunnlag.",
      ],
      [
        "Relativisme (vitenskapelig)",
        "Hva som er korrekt avhenger av paradigme/gruppe; ingen nøytral standard.",
      ],
      ["Realisme", "Det finnes en virkelighet uavhengig av oss, og vitenskapen fanger (delvis) opp den."],
      [
        "Konstruktivisme",
        "Fakta er (også) resultat av sosiale prosesser og rammeverk (Latour og Woolgar: Laboratory Life; Foucault om galskap). Betyr ikke at virkeligheten er konstruert, men at kunnskapen om den er menneskelig arbeid.",
      ],
    ],
    teorier: [
      {
        navn: "Kuhns syklus",
        tekst:
          "Paradigme → normalvitenskap → anomalier → krise → revolusjon → nytt paradigme → normalvitenskap.",
      },
      {
        navn: "Popper vs. Kuhn",
        tekst:
          "Popper: teorier forkastes når de falsifiseres; gradvis fremskritt; vitenskap er rasjonell og universell. Kuhn: teorier forsvares lenge innenfor paradigmet til anomaliene tvinger frem et skifte; fremskritt skjer gjennom revolusjoner; vitenskap er historisk og perspektivavhengig.",
      },
      {
        navn: "Fører Kuhn til relativisme?",
        tekst:
          "Ikke nødvendigvis. At vitenskap er sosialt formet, betyr ikke at den er vilkårlig. Nye teorier forklarer mer, passer bedre med observasjoner og åpner nye spørsmål. Kart-og-terreng: vi tegner stadig bedre kart. Vitenskapens styrke er at den er selvkorrigerende.",
      },
    ],
    eksamen: [
      "Forklar forskjellen på paradigme og normalvitenskap.",
      "Hva betyr det at observasjoner er teoriavhengige?",
      "Sammenlign Poppers og Kuhns syn på vitenskapelig fremskritt.",
      "Leder Kuhns teori til relativisme? Drøft.",
    ],
  },
  {
    slug: "10",
    del: 2,
    tittel: "Enhet og pluralisme",
    kilde: "Tenk! kap. 10",
    forelesning: [10],
    kjerne:
      "Forskjellige disipliner gir forskjellige forklaringer på samme fenomen. Tesen om enhetsvitenskap sier at forklaringene kan forbindes, f.eks. ved reduksjon. Reduksjonisme er en tese om språk, og mange er skeptiske fordi vi mister det vi er interessert i. Kanskje finnes det felles prinsipper for rasjonell undersøkelse, men ikke én metode, og sannhet alene er ikke målet: vi vil ha interessante sannheter, og hva som er interessant, er et spørsmål om verdier.",
    begreper: [
      [
        "Enhetsvitenskap",
        "Synet at vitenskapenes forklaringer og teorier kan forbindes med hverandre, f.eks. ved at resultatene i prinsippet kan reduseres til en annen disiplin (Carnap).",
      ],
      [
        "Reduksjonisme",
        "At alle sanne påstander om X kan oversettes uttømmende til et språk som bare snakker om Y (håp og ønsker → hjernetilstander). En tese om språk, ikke om hva som finnes: man kan mene at alt er fysisk og likevel avvise reduksjonisme.",
      ],
      [
        "Kart og terreng",
        "Vi trenger både nedbørskart og veikart. Én virkelighet betyr ikke at ett kart er nok. Forskjellige kart er forenlig med realisme.",
      ],
      [
        "Scientisme",
        "Overdreven ydmykhet overfor naturvitenskapene. Fører til forsøk på å gjøre samfunnsvitenskapene mer naturvitenskapelige, med fare for at målene justeres etter metodene (kvantitative målinger i stedet for forståelse).",
      ],
      [
        "Vitenskapenes hierarki",
        "Ideen om at fysikk er mest grunnleggende, deretter kjemi, biologi, og samfunns- og humanvitenskap. Begrunnes med at fysikkens lover er mest universelle.",
      ],
    ],
    teorier: [
      {
        navn: "De røde blomstene",
        tekst:
          "Hvorfor er blomstene røde? Fysikeren: overflatestruktur og refleksjon av lys. Biologen: tilpasning som tiltrekker pollinerende insekter. Historikeren/antropologen: kulturelle normer (valentinsdag). Alle kan være riktige samtidig; hvilken som er best, avhenger av hva vi lurer på.",
      },
      {
        navn: "Mot reduksjonisme og hierarki",
        tekst:
          "Samfunns- og humanvitenskapene handler om handlinger, roller og normer. En forklaring på antidemokratiske holdninger via monoaminer i hjernen er neppe den vi er ute etter. Cartwright og Dupré: virkeligheten har ingen fundamental, enhetlig orden, og selv fysikkens lover er bare universelle i en idealisert forstand.",
      },
      {
        navn: "Enhet i prinsipper, ikke i metode",
        tekst:
          "Kanskje finnes universelle prinsipper for rasjonell undersøkelse (logikk, overraskelsesprinsippene, observasjon som kilde). Derfor er ikke metodevalg vilkårlige: horoskop er ingen metode. Men spørsmålene krever ulike tilnærminger (Higgs-bosonet vs. en gjeng i New York; RCT vs. kohortstudie). Og korrekthet er ikke alltid relevant (en tolkning av Kafka).",
      },
    ],
    eksamen: [
      "Hva menes med enhetsvitenskap og reduksjonisme?",
      "Hvorfor er reduksjonisme en tese om språk og ikke om hva som finnes?",
      "Hva er scientisme, og hvorfor kan det være problematisk?",
      "Finnes det én vitenskapelig metode? Drøft.",
      "Er fysikken mer grunnleggende enn andre vitenskaper?",
    ],
  },

  // ───────────── DEL 3 ─────────────
  {
    slug: "11",
    del: 3,
    tittel: "Natur og natursyn",
    kilde: "Tenk! kap. 11",
    forelesning: [6],
    kjerne:
      "Vi lever i antropocen, og natur- og miljøkrisen gjør det viktig å spørre hvilket natursyn som preger kulturen vår. Aristoteles' teleologiske natursyn forklarer forandringer ut fra målet de realiserer. Det mekanistiske natursynet (Galilei, Descartes, Newton) ser naturen som materie i bevegelse etter universelle, matematiske lover. Darwins evolusjonslære forklarer artenes utvikling uten formål og gjør mennesket til ett dyr blant mange. Moderne fysikk (relativitetsteori, kvantemekanikk) bryter med det mekanistiske synet. Natursynet har etiske konsekvenser for hvordan vi behandler naturen.",
    begreper: [
      [
        "Teleologi",
        "Lære som forklarer prosesser ved å vise til målet (telos) de utvikler seg mot og realiserer. Eikenøtten har eiketreformen i seg og vil bli et eiketre hvis de ytre betingelsene er gode.",
      ],
      [
        "Substans, form og stoff (Aristoteles)",
        "En ting (substans) er det som eksisterer selvstendig, og er en enhet av form og stoff. Formen er hva slags ting det er (katt); stoffet gjør den til akkurat denne (kattene Salt og Pepper).",
      ],
      [
        "Fire typer forandring",
        "Stedsbevegelse, kvalitativ (grønt → rødt eple), kvantitativ (størrelse) og tilblivelse/tilintetgjørelse. Ved naturlige forandringer er formålsårsaken viktigst.",
      ],
      [
        "Kosmos",
        "Aristoteles' ordnede univers med jorda i sentrum. Over månen: eter og evig sirkelbevegelse. Under månen: jord, vann, luft og ild som søker sitt naturlige sted. To ulike fysikker.",
      ],
      [
        "Levende ting og sjel",
        "Alt levende ernærer seg, vokser og forplanter seg; dyr sanser og har begjær i tillegg; mennesker kan også tenke. Sjel og kropp er ikke to substanser, men to aspekter ved én levende ting.",
      ],
      ["Mekanisme", "Ting der bevegelse av noen deler fører til forutsigbar bevegelse av andre. Kan forstås fullt ut fra delene og hvordan de virker på hverandre."],
      [
        "Primære og sekundære egenskaper",
        "Primære: målbare egenskaper ved materien (størrelse, form, posisjon, bevegelse). Sekundære: farge, lukt, smak, som er sanseapparatets reaksjon på de primære.",
      ],
      [
        "Evolusjonsteori",
        "Darwin (Galapagos): arter endrer seg ved naturlig utvalg av de best tilpassede. Utvalget er blindt, uten hensikt. Forskjellen mellom mennesker og dyr er en gradsforskjell, også mentalt.",
      ],
      [
        "Relativitetsteori",
        "Einstein: lyshastigheten er lik for alle observatører, og universell samtidighet forsvinner (spesiell, 1905). E = mc²: masse og energi er to sider av samme sak. Rom og tid blir én romtid som krummes av masse (generell, 1915).",
      ],
      [
        "Kvantemekanikk",
        "Fysikk på atomært nivå: bevegelser skjer i kvantesprang, partikler har bølge-partikkel-dobbeltnatur og beskrives med sannsynligheter. Naturen er ikke deterministisk, og målingen påvirker systemet: vi står ikke utenfor naturen vi undersøker.",
      ],
      ["Antropocen", "«Menneskets tidsalder»: epoken der mennesket har blitt en kraft som endrer klima, arter og landskap globalt."],
    ],
    teorier: [
      {
        navn: "Teleologisk vs. mekanistisk natursyn",
        tekst:
          "Det mekanistiske synet er en forenkling: 1) naturen består av materie, 2) ting skiller seg bare kvantitativt (primære egenskaper), 3) treghet, 4) bare bevirkende årsaker, 5) bare stedsbevegelse, 6) universelle lover (ingen egen himmelfysikk). Aristoteles' fremgangsmåte var empirisk, men kvalitativ og klassifiserende; den nye fysikken er kvantitativ og eksperimentell og kan beregne fremtiden. Newton: det som må forklares, er endring i bevegelsestilstand, ikke forandring som sådan. Aristoteles' forklaring av et ballkast holdt ikke.",
      },
      {
        navn: "Bør alt forklares mekanistisk?",
        tekst:
          "Mekanistiske modeller har gitt enorm kunnskap i biologien. Midgley: liv kan likevel ikke forklares fullt ut mekanistisk; vi trenger også funksjoner, hensikter og atferd, og ting kan forstås på flere måter samtidig. Nussbaum: dyr og mennesker er ikke bare maskiner, men selektive organismer som tolker omgivelsene og strekker seg mot mål. Hun håper dette kan endre hvordan vi behandler dyr.",
      },
      {
        navn: "Har natursyn med etikk å gjøre?",
        tekst:
          "Etter Darwin kan vi ikke lenger plassere mennesket øverst i et verdihierarki. Ser vi oss som del av et nettverk av liv, blir det vanskeligere å bruke naturen som vi vil. Omsorg for naturen (Gruen) og Midgleys «felles hjem» gir naturen egenverdi, ikke bare nytteverdi. Omsorg og nytte utelukker ikke hverandre: sauene har nytteverdi, ulven og sauene har egenverdi.",
      },
    ],
    eksamen: [
      "Hva er forskjellen på et teleologisk og et mekanistisk natursyn?",
      "Gjør rede for hovedtrekkene i det mekanistiske natursynet.",
      "Hva forteller evolusjonsteorien om forholdet mellom mennesker og dyr?",
      "Hvordan endret 1900-tallets fysikk synet på naturen?",
      "Kan alt i naturen forklares mekanistisk? Bruk Midgley eller Nussbaum.",
      "Har natursyn betydning for etikk? Begrunn.",
    ],
  },
  {
    slug: "12",
    del: 3,
    tittel: "Menneskesyn",
    kilde: "Tenk! kap. 12",
    forelesning: [6, 7],
    kjerne:
      "Kapitlet handler om fri vilje og kropp–sinn-problemet: hvordan henger det mentale sammen med det fysiske? Hovedsvarene er substansdualisme (Descartes), fysikalisme/identitetsteori, funksjonalisme, og kroppsliggjorte tilnærminger (enaktivisme, fenomenologi, feministiske perspektiver).",
    begreper: [
      [
        "Determinisme",
        "Alle hendelser, også handlinger, er fullstendig bestemt av tidligere årsaker.",
      ],
      [
        "Kompatibilisme",
        "Fri vilje og determinisme kan forenes: vi er frie når handlingen springer ut fra oss selv og ikke fra ytre tvang.",
      ],
      ["Inkompatibilisme", "Fri vilje og determinisme kan ikke begge være sanne."],
      ["Kropp–sinn-problemet", "Hvordan forholder det mentale seg til det fysiske, og hvordan kan de påvirke hverandre?"],
      [
        "Substansdualisme",
        "Descartes: to substanser, res extensa (utstrakt, fysisk) og res cogitans (tenkende). «Jeg tenker, altså er jeg.»",
      ],
      [
        "Interaksjonsproblemet",
        "Elisabeth av Böhmen: hvis sinn og kropp er helt forskjellige substanser, hvordan kan de påvirke hverandre? (Descartes: konglekjertelen.)",
      ],
      ["Fysikalisme", "Alt som finnes er fysisk, også sinnet."],
      [
        "Identitetsteori",
        "Mentale tilstander er identiske med nevrale tilstander i hjernen. Sinnet er det hjernen gjør (Churchland).",
      ],
      [
        "Funksjonalisme",
        "Mentale tilstander bestemmes av funksjonen de har i et system (årsak → atferd → andre tilstander), ikke av materialet. Sinn kan realiseres på ulike måter (hjerne = maskinvare, sinn = programvare).",
      ],
      [
        "Det vanskelige bevissthetsproblemet",
        "Hvorfor og hvordan fysiske prosesser gir opphav til subjektiv opplevelse, hvordan det er å være noe (førstepersonsperspektivet).",
      ],
      ["Enaktivisme", "Bevissthet skapes i kroppslig samspill og handling med omgivelsene, ikke bare inne i hodet."],
      [
        "Fenomenologi",
        "Husserl, Merleau-Ponty: starter i erfaringen slik den fremtrer; kroppen er vårt synspunkt på verden.",
      ],
    ],
    teorier: [
      {
        navn: "Substansdualisme",
        tekst: "Sinnet er en ikke-fysisk substans.",
        for: ["Fanger at tanker og opplevelser virker helt annerledes enn materie.", "Cogito: jeg kan tvile på kroppen, men ikke på at jeg tenker."],
        mot: ["Interaksjonsproblemet (Elisabeth av Böhmen).", "Passer dårlig med nevrovitenskapen."],
      },
      {
        navn: "Identitetsteori (fysikalisme)",
        tekst: "Smerte er en bestemt hjerneprosess.",
        for: ["Løser interaksjonsproblemet: det finnes bare én ting.", "Passer med naturvitenskapen."],
        mot: [
          "Nevroplastisitet: forholdet mellom hjerne og sinn er ikke 1:1, og påvirkningen går begge veier.",
          "Mary-tankeeksperimentet: å vite alt fysisk om farger er ikke det samme som å oppleve rødt.",
          "Utelukker at dyr/maskiner med annen «hardware» kan ha samme mentale tilstander.",
        ],
      },
      {
        navn: "Funksjonalisme",
        tekst: "Det som gjør noe til et sinn er hva det gjør, ikke hva det er laget av.",
        for: [
          "Åpner for at dyr, romvesener og kanskje maskiner kan ha sinn (multippel realiserbarhet).",
          "Grunnlag for ideen om det utvidede sinn (Clark og Chalmers): notatbok/mobil som del av sinnet.",
        ],
        mot: [
          "Kinesisk rom (Searle): korrekt funksjon/atferd er ikke det samme som forståelse.",
          "Fanger ikke den subjektive opplevelsen (det vanskelige problemet).",
        ],
      },
      {
        navn: "Kroppsliggjorte tilnærminger",
        tekst:
          "Fysikalismen er ikke feil, men ufullstendig. Bevissthet er kroppslig, situert og relasjonell. Feministiske perspektiver (Haraway, Young): kroppen er også sosial og kulturell, og erfaring er preget av posisjon, makt og relasjoner.",
      },
    ],
    eksamen: [
      "Hva er problemet med fri vilje? Forklar kompatibilisme.",
      "Hva er substansdualisme? Gi et argument for og mot.",
      "Forklar forskjellen på identitetsteori og funksjonalisme.",
      "Hva hevder enaktivisme / kroppsliggjorte teorier om bevissthet?",
    ],
  },
  {
    slug: "13",
    del: 3,
    tittel: "Teknologi, menneske, samfunn",
    kilde: "Tenk! kap. 13",
    forelesning: [7],
    kjerne:
      "Teknologi er tosidig: den gir muligheter (ChatGPT, digitalisering, velferdsteknologi), men har også verdimessige følger som unnslipper vår kontroll. Derfor blir teknologiske valg samtidig samfunnsvalg. Tre teknologisyn: instrumentalisme (teknologi er nøytrale verktøy vi styrer), determinisme (teknologien legger premissene) og det relasjonelle synet (teknologi og mennesker former hverandre gjensidig). Teknologi inngår i sosiotekniske nettverk som gjør den vanskelig å regulere, og vi kan ikke bedømme morgendagens teknologi sikkert med dagens normer. Løsningen er teknologibevissthet.",
    begreper: [
      [
        "Teknologi",
        "Fra technê (ferdighet til å fremstille noe, Aristoteles) + logos (kunnskap): «kunnskap om produksjon». I dagligtale konkrete gjenstander. Boken definerer ikke begrepet, men ser på hvordan teknologi former forholdet vårt til verden (Ihde, Verbeek).",
      ],
      [
        "Teknologiens tosidighet",
        "Teknologier gir positive muligheter, men har verdimessige følger som unnslipper vår fulle kontroll. Eks.: digitalisering gjør tjenester enklere, men krever utstyr og kompetanse og kan skape digitalt utenforskap.",
      ],
      [
        "Teknologisk instrumentalisme",
        "Teknologi er rene, verdinøytrale instrumenter. Bruken avgjør om den er god eller dårlig (hammeren: spiker eller hode). Vi styrer utviklingen med politiske, etiske, juridiske og økonomiske virkemidler (Pitt). Heidegger: «den instrumentale og antropologiske bestemmelsen av teknikken».",
      ],
      [
        "Teknologisk determinisme",
        "Teknologien legger i større eller mindre grad premissene for samfunnsutviklingen; vi reagerer heller enn å agere (atomteknologien formet politikken etter 1940). Kan være dystopisk eller optimistisk. Teknologi er verdiladet.",
      ],
      [
        "Relasjonelt teknologisyn",
        "(Ihde, Latour, Barad) Avviser det skarpe skillet mellom menneske og teknologi som begge ismene bygger på. Vi former teknologien, og den former oss. Teknologi er verdiladet, men verdien av en handling skyldes samspillet. Vi kan ikke si noe generelt; hver teknologi må undersøkes i sin kontekst (Verbeek).",
      ],
      [
        "Teknologiens verdiladethet",
        "Teknologi gjør noe lettere, mer attraktivt eller mulig, og stiller krav til bruken. En trapp lar oss bygge i flere etasjer, men forutsetter fungerende bein (Morrow).",
      ],
      [
        "Kyborg (Haraway)",
        "Skillet mellom det menneskelige og det teknologiske er ubestemmelig. Vi kan være 100 % biologiske og likevel kyborger, fordi livet vårt er sammenfiltret med teknologi fra fødselen.",
      ],
      [
        "Skråplansargument",
        "«Tillater vi A, fører det til uønsket B.» Problematisk fordi B sjelden følger nødvendig av A. Platon om skrift, kritikk av ChatGPT og Turkle om sosiale medier kan ta denne formen.",
      ],
      [
        "Sosioteknisk nettverk",
        "Nettverket av økonomiske og sosiale aktører rundt et produkt eller en tjeneste (bil: veier, politi, kjøreskoler, verksteder, lover, avgifter, arbeidsplasser). Gir gjensidig avhengighet som gjør regulering vanskelig (Collingridge). Påvirkningen fra teknologien kan være sterk (olje og gass, digitalisering) eller svak.",
      ],
      [
        "Kunstig intelligens",
        "Informasjonsteknologi som utfører regelstyrte oppgaver vi vanligvis tenker krever kognitiv innsats. Reglene kan være programmert eller lært gjennom maskinlæring (Coeckelbergh).",
      ],
      [
        "Teknologibevissthet",
        "Kunnskap om hvordan teknologi påvirker oss som individer og samfunnsstrukturer. Teknologi kan forme, men ikke bestemme. Gjelder politikere, utviklere (samfunnsansvar) og alle brukere: «Vi trenger alle å bli mer kritiske teknologibrukere, ellers risikerer vi å bli teknologibrukte.»",
      ],
      ["Transhumanisme (forelesning)", "Ideologi om å bruke teknologi til å forbedre menneskets fysiske og mentale egenskaper."],
    ],
    teorier: [
      {
        navn: "Mennesket og teknologien",
        tekst:
          "Gehlen: uten teknologi hadde vi ikke overlevd. Teknologi forsterker (hammer), avlaster (løfterobot) og erstatter (ansiktsgjenkjenning) våre evner. Stiegler: det er ikke mennesket som har funnet opp teknologien, men omvendt; teknologi overfører kultur mellom generasjoner, og vi drives av teknologisk mer enn biologisk evolusjon.",
      },
      {
        navn: "Bør vi frykte teknologien? Kan vi bedømme den i dag?",
        tekst:
          "Platon (Faidros): kong Thamus mente skriften ville svekke hukommelsen. Turkle: sosiale medier gir vennskap uten friksjon, men det er en illusjon; som tobakk og Coca-Cola ser vi skadene først senere. Innvendinger: slike argumenter blir lett skråplansargumenter, og de bedømmer morgendagen med dagens verdier. Skriften opphevet Platons ideal. Likevel er realistiske fremtidsscenarioer nyttige for å diskutere hva vi vil med teknologien (Swierstra).",
      },
      {
        navn: "Determinisme: optimistisk og dystopisk",
        tekst:
          "Marx (optimistisk): teknologien former økonomien og dermed hele samfunnet; i arbeidernes hender kan den frigjøre. Heidegger (dystopisk): moderne teknologi gjør at vi ser alt som ressurser. Det moderne vannkraftverket «overmanner» elva, og vindkraft på Fosen måles i CO2, ikke i naturens egenverdi eller samiske rettigheter. Jaspers: industriell masseproduksjon gir forbrukersamfunn og fremmedgjøring. Men motbevegelser (reparasjon, REKO-ringer) viser at vi ikke uten videre underkaster oss.",
      },
      {
        navn: "Kan en bro være rasistisk? (Winner)",
        tekst:
          "«Technologies have politics.» Robert Moses bygde lave broer over veiene til Jones Beach, slik at busser, som fattige og fargede var avhengige av, ikke kom frem. Analysen er kanskje ensidig, men poenget står: teknologier har verdiladde følger, enten de er designet bevisst eller er bieffekter. Moses utnyttet nettopp verdiladetheten.",
      },
      {
        navn: "Uforutsette følger",
        tekst:
          "Sparepærer i Nederland økte strømforbruket fordi folk lyste opp flere rom. Viagra ble utviklet mot høyt blodtrykk. Algoritmer (Netflix, Spotify) får oss til å spørre om vi styrer teknologien eller den oss.",
      },
      {
        navn: "Etiske utfordringer med KI",
        tekst:
          "Noë: KI er regelstyrt informasjonsbehandling; en klokke holder tiden, men vet ikke hva klokken er. Utfordringer: skjeve data (Tay ble rasistisk, bildegjenkjenning bommer oftere på kvinner og fargede, risikoalgoritmen i amerikansk rettsvesen vurderte Borden og Prater ulikt etter hudfarge), falske nyheter, ansiktsgjenkjenning for overvåking av uigurer, autonome våpen (hvem har ansvaret?), filterbobler, tillit (Watson Oncology foreslo dødelige behandlinger), personvern og gratis arbeid (CAPTCHA).",
      },
    ],
    eksamen: [
      "Gjør rede for teknologisk instrumentalisme, determinisme og det relasjonelle synet.",
      "Hva menes med teknologiens tosidighet og verdiladethet? Gi eksempler.",
      "Er teknologi verdinøytral? Bruk Winners broer.",
      "Hva er et sosioteknisk nettverk, og hvorfor gjør det regulering vanskelig?",
      "Hvorfor er det vanskelig å bedømme morgendagens teknologi ut fra dagens normer?",
      "Hva er et skråplansargument, og hvorfor er det problematisk?",
      "Drøft noen etiske utfordringer ved kunstig intelligens.",
      "Hva er teknologibevissthet, og hvem har ansvar for den?",
    ],
    case:
      "Typisk case: ny teknologi (KI, selvkjørende biler, digitalisering, vindkraft). 1) Hva er tosidigheten: muligheter og risikoer? 2) Hva ville instrumentalisten, deterministen og det relasjonelle synet sagt? 3) Hvilke verdier er bygd inn, og hvem rammes (Winner)? 4) Hvilket sosioteknisk nettverk inngår den i? 5) Hva krever teknologibevissthet av utviklere, politikere og brukere?",
  },

  // ───────────── DEL 4 ─────────────
  {
    slug: "14",
    del: 4,
    tittel: "Etiske grunnlagsproblemer",
    kilde: "Tenk! intro del 4 + kap. 14",
    forelesning: [3],
    kjerne:
      "Metaetikken spør hva moral er og om det finnes objektivt riktige svar. Hume hevdet at vi ikke kan slutte fra «er» til «bør». Nihilismen benekter at det finnes moralsk rett og galt; kulturrelativismen sier moral er relativ til kultur. Begge har alvorlige problemer, og de normative teoriene (utilitarisme, pliktetikk, dydsetikk) søker en allmenngyldig, rasjonell målestokk.",
    begreper: [
      [
        "Normativ etikk",
        "Spør hva vi bør gjøre, hvem vi bør være og hva som er verdifullt. Et skritt tilbake fra herskende moral.",
      ],
      [
        "Metaetikk",
        "Spør om moralens natur og grunnlag: Finnes moralske fakta? Er moral bare følelser? Enda et skritt tilbake.",
      ],
      [
        "Deskriptiv etikk",
        "Beskriver hvilke normer folk faktisk har. Hva flertallet mener, avgjør ikke hva som er rett.",
      ],
      [
        "Er/bør-skillet (Humes lov)",
        "Vi kan ikke slutte til et normativt «bør» bare fra deskriptive «er»-påstander. Det trengs alltid en normativ premiss.",
      ],
      [
        "Naturalistisk feilslutning",
        "(Moore) Å hevde at noe er godt fordi det har naturlige egenskaper (nytelse, etterstrebet). Brukes også om er→bør-slutninger og appell til det naturlige.",
      ],
      [
        "Moralsk nihilisme",
        "Det finnes ikke noe moralsk rett og galt. Moralutsagn er verken sanne eller usanne, eller bare uttrykk for følelser (som smaksutsagn).",
      ],
      [
        "Kulturrelativisme",
        "Moralske normer er gyldige bare relativt til kulturen de tilhører; det finnes ingen kulturuavhengig standard. Moral er konvensjoner, som kjøreregler.",
      ],
      [
        "Objektivisme",
        "Det finnes allmenngyldige moralske standarder. Utilitarisme, pliktetikk og dydsetikk er alle objektivistiske.",
      ],
    ],
    teorier: [
      {
        navn: "Er/bør i praksis",
        tekst:
          "«Kvinner er i snitt fysisk svakere, derfor bør de ikke ha fysiske jobber» mangler en normativ premiss og er en ugyldig slutning. Philippa Foot utfordrer skillet: at mennesker trenger mot, er både et faktum om oss og en grunn til å være modig.",
      },
      {
        navn: "Nihilisme",
        tekst: "Moralutsagn er som smaksutsagn («kaffe er bedre enn te»).",
        mot: [
          "Moralske utsagn er ikke meningsløse; vi argumenterer om dem på en måte vi ikke gjør om smak.",
          "Strider mot de fleste menneskers erfaring av at noe (f.eks. tortur for moro skyld) er galt.",
        ],
      },
      {
        navn: "Kulturrelativisme",
        tekst: "Kan virke tolerant og opplyst, siden kulturer har hatt ulike normer.",
        for: ["Tar kulturelt mangfold på alvor.", "Advarer mot etnosentrisme."],
        mot: [
          "Argumentet er ugyldig: at kulturer er uenige, viser ikke at det ikke finnes et riktig svar (jf. uenighet om jord-/solsentrum).",
          "Deskriptivt feil: noen normer finnes i alle kulturer.",
          "Gjør moralsk fremskritt umulig (avskaffelse av slaveri blir bare «endring»).",
          "Toleransekravet blir selvmotsigende: skal vi tolerere intolerante kulturer? Og toleranse er selv en universell norm.",
        ],
      },
    ],
    eksamen: [
      "Forklar forskjellen på normativ etikk og metaetikk.",
      "Hva går er/bør-skillet ut på? Gi et eksempel på en ugyldig slutning fra er til bør.",
      "Hva er kulturrelativisme? Presenter to innvendinger.",
      "Hva er moralsk nihilisme, og hva er en innvending?",
    ],
  },
  {
    slug: "15",
    del: 4,
    tittel: "Generelt om normativ etikk",
    kilde: "Tenk! kap. 15",
    kjerne:
      "Normative etiske teorier er forslag til de bakenforliggende prinsippene for hva som gjør handlinger rette og hva som er verdifullt. Kapitlet innfører to viktige skiller: mellom beslutnings- og vurderingssituasjoner, og mellom handlingsorienterte og aktørorienterte teorier.",
    begreper: [
      [
        "Beslutningssituasjon",
        "Fremoverskuende: vi skal bestemme hva vi bør gjøre (før handlingen).",
      ],
      [
        "Vurderingssituasjon",
        "Tilbakeskuende: vi vurderer en handling som allerede er utført. Skal den roses eller klandres? (Ligner passivt ansvar i ingeniøretikken.)",
      ],
      [
        "Handlingsorientert teori",
        "Gir generelle prinsipper for hvilke handlinger som er rette (utilitarisme, pliktetikk).",
      ],
      [
        "Aktørorientert teori",
        "Fokuserer på hva slags person man bør være, ikke på regler for handlinger (dydsetikk).",
      ],
      [
        "Ettprinsippteori",
        "Teori som forutsetter at én målestokk kan avgjøre alle spørsmål om rett og godt (utilitarisme, pliktetikk). Lykkes den, har vi en «universalnøkkel» til nye moralske spørsmål.",
      ],
    ],
    teorier: [
      {
        navn: "De tre teoriene i én setning",
        tekst:
          "Utilitarisme: rett handling gir de beste konsekvensene. Pliktetikk: rett handling følger moralske plikter, uavhengig av konsekvensene (det rette har forrang over det gode). Dydsetikk: rett handling er det en dydig person ville gjort; hovedspørsmålet er hva slags menneske man bør være.",
      },
    ],
    eksamen: [
      "Forklar forskjellen på beslutnings- og vurderingssituasjoner.",
      "Hva er forskjellen på handlingsorienterte og aktørorienterte etiske teorier?",
    ],
  },
  {
    slug: "16",
    del: 4,
    tittel: "Utilitarisme",
    kilde: "Tenk! kap. 16",
    forelesning: [3],
    kjerne:
      "Utilitarismen sier at en handling er rett hvis og bare hvis den gir størst mulig sum av gode konsekvenser for alle som berøres (nytteprinsippet). Varianter er uenige om hva som er godt: nytelse (Bentham), kvalitativt høyere nytelser (Mill) eller oppfylte preferanser (Singer). Alle som kan lide, har moralsk status.",
    begreper: [
      [
        "Nytteprinsippet",
        "Vi bør alltid velge det handlingsalternativet som gir størst sum av gode konsekvenser for alle berørte.",
      ],
      ["Konsekvensetikk", "Bare konsekvensene avgjør om en handling er rett eller gal."],
      [
        "Hedonisme",
        "Det eneste som har egenverdi er nytelse/lykke (og fravær av smerte). Klassisk utilitarisme er hedonistisk.",
      ],
      [
        "Benthams lykkekalkyle",
        "Vi kan beregne nytte ved å se på hvor mange som berøres, intensitet og varighet. Alle nytelser er like mye verdt (kvantitativ).",
      ],
      [
        "Mills kvalitative skille",
        "Intellektuelle nytelser er høyere enn sanselige. «Bedre å være en misfornøyd Sokrates enn en tilfreds tosk.»",
      ],
      [
        "Preferanseutilitarisme",
        "Det gode er at flest mulig preferanser (ønsker) blir oppfylt, ikke nødvendigvis nytelse.",
      ],
      [
        "Moralsk status",
        "At vi har plikter overfor noen. For utilitarister: alle som kan lide (Bentham: «Kan de lide?»).",
      ],
      [
        "Artssjåvinisme (speciesism)",
        "Singer: å gi mennesker forrang bare fordi de er mennesker er like vilkårlig som rasisme.",
      ],
      [
        "Upartiskhet",
        "Alles nytte teller likt, også fremmede, dyr og fremtidige generasjoner.",
      ],
    ],
    teorier: [
      {
        navn: "Hvordan fordele goder?",
        tekst:
          "Utilitarister vil fordele slik at samlet nytte blir størst. Pga. avtagende grensenytte (en ekstra krone betyr mer for en fattig) tilsier dette ofte omfordeling, men i prinsippet kan det også rettferdiggjøre skjev fordeling.",
      },
      {
        navn: "Vurderingssituasjoner",
        tekst:
          "Utilitarister vurderer ros/klander ut fra forventede konsekvenser (hva man kunne forutse), og ut fra om rosen/klanderen i seg selv gir gode følger.",
      },
      {
        navn: "Styrker og svakheter",
        tekst: "",
        for: [
          "Enkel og systematisk metode; tar alles velferd på alvor (upartisk).",
          "Historisk progressiv: Bentham for kvinners rettigheter, mot slaveri og fysisk avstraffelse.",
          "Inkluderer dyr og fremtidige generasjoner.",
        ],
        mot: [
          "Kan ofre individets rettigheter for flertallets nytte (f.eks. straffe en uskyldig for å roe en mobb).",
          "For krevende: man må alltid gjøre det som gir best resultat.",
          "Vanskelig å måle og sammenligne nytte, og å forutse konsekvenser.",
          "Overser intensjoner og handlinger som virker gale uansett.",
          "Overser spesielle relasjoner (familie, løfter).",
        ],
      },
    ],
    eksamen: [
      "Hva går nytteprinsippet ut på?",
      "Forklar forskjellen på Benthams og Mills utilitarisme.",
      "Hva er preferanseutilitarisme?",
      "Hva er moralsk status ifølge utilitarismen?",
      "Presenter to innvendinger mot utilitarismen.",
    ],
    case:
      "Bruk: 1) Hva er handlingsalternativene? 2) Hvem berøres (også dyr, fremtidige generasjoner)? 3) Hvilke konsekvenser (positive/negative, sannsynlighet, omfang)? 4) Hvilket alternativ gir størst samlet nytte? 5) Drøft: rettighetsinnvending, målingsproblem.",
  },
  {
    slug: "17",
    del: 4,
    tittel: "Pliktetikk",
    kilde: "Tenk! kap. 17",
    forelesning: [4],
    kjerne:
      "Pliktetikken sier at noen handlinger er rette eller gale i seg selv, uavhengig av konsekvensene: det rette har forrang over det gode. Den fanger intuisjoner utilitarismen sliter med: at noe kan være tillatt uten å være påkrevd, at vi har særlig ansvar for oss selv og våre nærmeste, og at motivet bak handlingen betyr noe. Kants kategoriske imperativ er hovedteorien, og grunnlaget er fornuft og autonomi.",
    begreper: [
      [
        "Pliktetikk (deontologi)",
        "Moralen består av plikter og forbud som gjelder uavhengig av konsekvenser (ikke lyve, holde løfter). Etiske fakta begrunnes i motivasjonen til å handle pliktoppfyllende.",
      ],
      [
        "Handlingsregel (maksime)",
        "Regelen man handler etter, inkludert hensikten: «Jeg lyver for å oppnå X». Handlingsregelen beskriver hva slags handling man gjør.",
      ],
      [
        "Kategorisk imperativ",
        "Et ubetinget moralsk krav som gjelder uansett hvilke mål vi har. Kants grunnprinsipp for moralen.",
      ],
      [
        "Hypotetisk imperativ",
        "Betinget krav: «Hvis du vil X, bør du Y» (hvis du vil bestå, bør du lese).",
      ],
      [
        "Universalitetsformuleringen",
        "Handle bare etter handlingsregler som er slik at du samtidig kan ville at handlingsregelen skal bli en allmenn lov.",
      ],
      [
        "Humanitetsformuleringen",
        "Handle slik at du bruker menneskeheten, i din egen person og i andre, aldri bare som et middel, men alltid samtidig som et mål.",
      ],
      [
        "«Menneskeheten»",
        "De essensielt menneskelige egenskapene: frihet og fornuft. Å behandle noen som mål er en relasjon som ivaretar deres frihet og fornuft.",
      ],
      [
        "Perfekte plikter",
        "Plikter som alltid må oppfylles (ikke lyve, ikke gi falske løfter). Brudd gir en selvmotsigelse når handlingsregelen gjøres allmenn.",
      ],
      [
        "Uperfekte plikter",
        "Plikter som kan oppfylles på flere måter og ikke i hver situasjon (hjelpe andre, utvikle egne evner).",
      ],
      [
        "Autonomi",
        "Selvlovgivning: fornuftige vesener gir seg selv moralloven. Grunnlaget for menneskeverd.",
      ],
      [
        "Moralsk status (Kant)",
        "Bare fornuftsvesener har moralsk status. Dyr har bare indirekte betydning: den som er grusom mot dyr, blir også følelsesløs mot mennesker. (Korsgaard mener Kants teori kan utvides til dyr.)",
      ],
    ],
    teorier: [
      {
        navn: "Slik bruker du universalitetsformuleringen",
        tekst:
          "Steg 1: Formuler handlingsregelen, med hensikten («Jeg sniker i køen for å komme først frem»). Steg 2: Tenk deg en verden der alle følger regelen, som en naturlov. Steg 3: Se etter en selvmotsigelse. Gir handlingen fortsatt mening i den verdenen? Snik i køen forutsetter at andre følger køen; hvis alle sniker, finnes ingen kø å snike i. Løgn forutsetter at folk antar at man snakker sant; hvis alle lyver, antar ingen det. Altså er det selvmotsigende å ville begge deler.",
      },
      {
        navn: "Slik bruker du humanitetsformuleringen",
        tekst:
          "Det er ikke galt å bruke andre som middel; det gjør vi hele tiden (bussjåføren). Det er galt å bruke noen bare som middel, altså på en måte som ikke respekterer deres frihet og fornuft: bedrag, tvang, manipulasjon, mangel på samtykke. Det gjelder også deg selv: å gjøre seg avhengig av noe, eller opprettholde en avhengighet, er å bruke seg selv bare som middel.",
      },
      {
        navn: "Styrker og svakheter",
        tekst: "",
        for: [
          "Beskytter individets rettigheter og verdighet; ingen kan ofres for flertallet.",
          "Tar motivet bak handlingen på alvor.",
          "Forklarer at noe kan være tillatt uten å være påkrevd, og at vi har særlige plikter.",
        ],
        mot: [
          "Bare fornuftsvesener har moralsk status. Hva med dyr og spedbarn? (Svar: spedbarn er potensielle fornuftsvesener?)",
          "Forklarer dårlig at noe kan være mer eller mindre galt (tortur vs. å lese andres e-post).",
          "Noen intuisjoner sier at riktige følelser, ikke plikt, avgjør (trofasthet i et forhold).",
          "Rigid: kan man ikke lyve til morderen på døren?",
          "Pliktkonflikter og lite konkret veiledning når plikter kolliderer.",
        ],
      },
    ],
    eksamen: [
      "Hva kjennetegner pliktetiske teorier?",
      "Forklar universalitetsformuleringen og bruk den på et eksempel.",
      "Forklar humanitetsformuleringen. Hva betyr det å bruke noen «bare som middel»?",
      "Hva er forskjellen på kategoriske og hypotetiske imperativer?",
      "Hva er forskjellen på perfekte og uperfekte plikter?",
      "Hva er Kants syn på moralsk status?",
      "Presenter en styrke og en svakhet ved Kants pliktetikk.",
    ],
    case:
      "Bruk: 1) Formuler handlingsregelen, med hensikt. 2) Universaliseringstest: gir handlingen mening i en verden der alle gjør det? 3) Humanitetstest: behandles noen bare som middel (samtykke, bedrag, tvang)? 4) Perfekt eller uperfekt plikt? 5) Drøft: rigiditet, grader av galhet, moralsk status.",
  },
  {
    slug: "18",
    del: 4,
    tittel: "Dydsetikk",
    kilde: "Tenk! kap. 18",
    forelesning: [4],
    kjerne:
      "Dydsetikken (Aristoteles; moderne: Anscombe, Foot, Williams, Hursthouse) spør ikke først «hvilken handling er rett?», men «hva slags person bør jeg være?». En handling er en måte å være noen på: en venn, en ingeniør, deg selv. Etiske fakta begrunnes i væremåten til en god person, kjennetegnet av dyder. Praktisk fornuft (fronesis) gjør oss i stand til å se hva situasjonen krever, og veien dit er et godt liv (eudaimonia).",
    begreper: [
      [
        "Dyd",
        "Positivt karaktertrekk; en disposisjon til å se og handle slik man bør (visdom, mot, rettferdighet, måtehold, omsorg, ærlighet, ansvarlighet). Å ha vennlighet som dyd er ikke å alltid være «snill», men å verdsette og forstå vennlighet.",
      ],
      ["Last", "Dydens motsats: negativt karaktertrekk (feighet, grådighet, uærlighet)."],
      [
        "Fronesis (praktisk fornuft)",
        "Praktisk visdom: evnen til å «se» hva for eksempel vennlighet krever i en konkret situasjon. Oppøvbar etisk kompetanse som utvikles over tid når man forsøker å handle dydig.",
      ],
      [
        "Eudaimonia",
        "Ofte oversatt med «lykke», men betyr et godt, blomstrende liv (objektiv lykke). Hos Aristoteles er det å utvikle praktisk fornuft veien dit.",
      ],
      [
        "Dydsregler (Hursthouse)",
        "Regler vi kan hente ut av dyds- og lastebegrepene: «Vær ærlig», «Ikke vær grusom». Rett handling er det en dydig person typisk ville gjort.",
      ],
      [
        "«En tanke for mye» (Williams)",
        "Hvis en mann som kan redde enten kona eller en fremmed fra drukning, må lure på om det er moralsk tillatt å redde kona, har han en tanke for mye. Moralen kan ikke abstrahere bort hvem vi er og hvem vi står i forhold til.",
      ],
    ],
    teorier: [
      {
        navn: "Dydsetikkens tre særtrekk",
        tekst:
          "1) Den benekter et skarpt skille mellom er og bør: noe kan være bedre eller verre som ulv eller plante, og mot, klokskap og ærlighet er egenskaper mennesker trenger for å fungere godt (Foot). 2) Den benekter kravet om upartiskhet: vår historie og våre relasjoner kan ikke abstraheres bort (Williams). 3) Den benekter at etiske handlinger avgjøres av generelle prinsipper (Anscombe); i stedet kan vi utvikle praktisk fornuft.",
      },
      {
        navn: "Kritikk av moderne moralfilosofi (Anscombe)",
        tekst:
          "Utilitarisme og pliktetikk søker allmenne prinsipper som fungerer som en domstol for handlinger. Anscombe mener dette mangler grunnlag, og at vi bør gå tilbake til Aristoteles og spørre hva mennesker trenger for å leve godt.",
      },
      {
        navn: "Innvendinger og svar",
        tekst: "",
        for: [
          "Helhetlig: tar karakter, følelser, motiv og relasjoner med.",
          "Fleksibel: tar høyde for at situasjoner er ulike.",
          "Forklarer moralsk utvikling og oppdragelse.",
        ],
        mot: [
          "For lite handlingsveiledende? Svar: dydige personer viser hvordan man bør handle, og dydsbegrepene gir regler (Hursthouse).",
          "Relativistisk fordi dyder er kulturavhengige? Svar: at forståelsen av dydene varierer, betyr ikke at dydene selv er relative (Christensen, Nussbaum).",
          "Kan den veilede statlige beslutninger? Nussbaum: ja, staten skal legge til rette for at borgerne kan utvikle seg og leve gode liv.",
          "Hvis man benekter er/bør-skillet: betyr det at noen mennesker er «bedre på å være mennesker» enn andre? Hvor går grensen?",
        ],
      },
      {
        navn: "Dydsetikk i praksis",
        tekst:
          "Dyreetikk (Hursthouse): hva sier det om vår karakter hvordan vi behandler dyr? Miljøetikk: hvilke dyder og laster viser seg i forholdet til naturen (ydmykhet, måtehold, grådighet)? For ingeniører: profesjonelle dyder som integritet, ansvarlighet og mot (varsling).",
      },
    ],
    eksamen: [
      "Hvordan skiller dydsetikk seg fra utilitarisme og pliktetikk?",
      "Hva er fronesis og eudaimonia?",
      "Hva er en dyd? Hvorfor er en vennlig person ikke bare en som alltid er «snill»?",
      "Gjør rede for dydsetikkens kritikk av upartiskhet (Williams).",
      "Hvilken veiledning kan dydsetikken gi i et moralsk dilemma, f.eks. i dyre- eller miljøetikk?",
    ],
    case:
      "Bruk: 1) Hvilke roller står personen i (venn, ingeniør, ansatt)? 2) Hvilke dyder og laster står på spill (ærlighet, mot, omsorg, lojalitet)? 3) Hva ville en klok og dydig person gjort? 4) Hva bidrar til et godt liv for de involverte? 5) Drøft: handlingsveiledning, relativisme.",
  },

  // ───────────── DEL 5 ─────────────
  {
    slug: "19",
    del: 5,
    tittel: "Skadeprinsippet",
    kilde: "Tenk! kap. 19",
    forelesning: [11],
    kjerne:
      "Mills skadeprinsipp: staten (og samfunnet) kan bare bruke makt mot kompetente, informerte voksne for å hindre skade på andre, aldri for deres eget beste. Mill begrunner det utilitaristisk: frihet (ytringsfrihet og livsstilsfrihet) fremmer på sikt velferd og fremskritt. Prinsippet er anti-paternalistisk, men det er uklart hva som teller som skade.",
    begreper: [
      [
        "Skadeprinsippet",
        "Makt mot kompetente, velinformerte voksne er bare tillatt for å hindre skade på andre.",
      ],
      [
        "Paternalisme",
        "Å begrense andres frihet ut fra hensynet til deres eget beste.",
      ],
      [
        "Myk paternalisme",
        "Å hindre noen midlertidig for å sikre at de forstår risikoen. Forenlig med skadeprinsippet. Eks.: pasientrettigheter. Helsepersonell informerer, men en informert, myndig pasient har siste ord og kan si nei til behandling.",
      ],
      [
        "Hard paternalisme",
        "Å hindre noen selv om de er informert og forstår risikoen. Bryter med skadeprinsippet. Eks.: forbud mot proffboksing.",
      ],
      [
        "Negativ frihet",
        "Frihet fra: fravær av ytre hindringer/innblanding (Berlin). Eller fravær av dominans (kap. 20).",
      ],
      ["Positiv frihet", "Frihet til: evnen til selv å realisere egne mål og verdier."],
    ],
    teorier: [
      {
        navn: "Mill om ytringsfrihet",
        tekst:
          "Det må være lov å uttrykke ethvert synspunkt så lenge man ikke oppfordrer til vold; krenkelse er ikke nok til å straffe. Kornhandleren: å rope «kornhandleren sulter ut de fattige» foran en lynsjemobb kan straffes, å skrive det i en avis kan ikke. Begrunnelser: 1) Det sensurerte kan være sant. 2) Selv usanne meninger kan inneholde en del av sannheten. 3) Sanne meninger som ikke utfordres blir døde dogmer; vi må kunne begrunne dem. Sensur er et ran av nåværende og fremtidige generasjoner.",
      },
      {
        navn: "Livsstilsfrihet",
        tekst:
          "Retten til å leve ut sin egenart så lenge det ikke skader andre. Individualitet gir en energisk karakter, mangfold og «eksperimenter med livet» som samfunnet kan lære av.",
      },
      {
        navn: "Utilitaristisk begrunnelse",
        tekst:
          "Frihet har instrumentell verdi: den fremmer menneskets langsiktige interesser som et progressivt vesen og dermed velferd og lykke.",
      },
      {
        navn: "Problemer med skadeprinsippet",
        tekst: "",
        mot: [
          "Uklart hva som er skade: hvilke interesser teller? Ubehag over at andre lever i likekjønnede forhold bør ikke telle, men hvor går grensen?",
          "Skade er ikke nok: en dyktigere konkurrent kan slå ut kaffebaren din uten at det bør forbys. Prinsippet er bare en nødvendig betingelse, og vi må i tillegg veie nytte mot kostnad. Sexkjøpsloven: mindre menneskehandel, men mer utrygghet for sexarbeidere.",
          "Få handlinger skader bare den som handler: kjederøykeren og fjellklatreren belaster helsevesen og redningstjeneste.",
          "Er hard paternalisme alltid galt (selvmord)? Conly: vi er dårlige beslutningstakere, så staten bør beskytte oss mot oss selv (forby sigaretter, begrense usunn mat og store lån), men bare med de mest hensiktsmessige tiltakene.",
          "Selv Mill avviser slavekontrakter: man kan ikke ha frihet til å si fra seg friheten. Da er prinsippet heller ikke en nødvendig betingelse for inngrep.",
        ],
      },
    ],
    eksamen: [
      "Hva sier skadeprinsippet? Anvend det på et eksempel.",
      "Forklar forskjellen på myk og hard paternalisme.",
      "Hvordan begrunner Mill skadeprinsippet utilitaristisk?",
      "Hvordan argumenterer Mill for ytringsfrihet?",
      "Gi en innvending mot skadeprinsippet.",
    ],
    case:
      "Bruk: 1) Hvem skades av handlingen, bare personen selv eller andre? 2) Er personen kompetent og informert? 3) Er inngrepet myk eller hard paternalisme? 4) Hva tilsier skadeprinsippet? 5) Drøft: uklart skadebegrep, Conlys forsvar for hard paternalisme.",
  },
  {
    slug: "20",
    del: 5,
    tittel: "Frihet som iboende rett",
    kilde: "Tenk! kap. 20",
    forelesning: [11],
    kjerne:
      "Teorier om naturlige (iboende) rettigheter sier at vi har rettigheter i kraft av å være mennesker, uavhengig av om de gir gode konsekvenser. Rettighetene er skranker for hvilke midler vi kan bruke for gode formål (Daschner-saken: tortur er forbudt selv for å redde et barn). Hos Kant og Wollstonecraft er frihet ikke-dominans: å ikke være prisgitt andres vilkårlige vilje. Det krever demokrati, motvirking av fattigdom og likestilling. Mill har derimot et instrumentelt syn på rettigheter.",
    begreper: [
      [
        "Naturlige/iboende rettigheter",
        "Rettigheter alle har i kraft av å være mennesker (liv, sikkerhet, eiendom, frihet fra undertrykkelse). De begrenser hva både privatpersoner og myndigheter kan gjøre. Slavekontrakter er ugyldige fordi de bryter med rettighetene, ikke fordi slaveri gir lidelse (som hos Mill).",
      ],
      [
        "Statusbasert rettighetsteori",
        "Vi har rettigheter fordi vi er vesener med evner som krever respekt (selvbevisste, selvstendig tenkende). Naturrettstradisjonen; i dag f.eks. Kamm og Nagel.",
      ],
      [
        "Interessebasert (instrumentalistisk) rettighetsteori",
        "Rettigheter er midler for å fremme velferd og interesser (Mill). Hvilke rettigheter vi bør ha, avhenger av empiriske forhold.",
      ],
      ["Ikke-innblanding", "Mills negative frihet: fravær av hindringer påført av andre (tvang, trusler)."],
      [
        "Ikke-dominans",
        "Kant og Wollstonecrafts negative frihet: at ingen er i posisjon til å utøve vilkårlig makt over oss. Slaven med en snill herre er ufri, selv om ingen hindrer ham. Lover kan begrense oss og likevel gjøre oss frie.",
      ],
      [
        "Positiv frihet",
        "De indre faktorene som gjør det mulig å handle fritt og bestemme selv. Politisk: retten til å delta i lovgivningen.",
      ],
      [
        "Likhetsfeminisme",
        "Det er ingen grunnleggende forskjeller mellom kjønnene, så alle skal ha de samme rettighetene og mulighetene.",
      ],
      [
        "Forskjellsfeminisme",
        "Kjønnene er grunnleggende ulike. Likestilling handler ikke om at kvinner skal gjøre det samme som menn, men om at kvinners bidrag verdsettes høyere.",
      ],
      [
        "Klassisk liberal feminisme",
        "Staten skal ikke forskjellsbehandle kjønnene, men ellers blande seg minst mulig i hva voksne gjør med egen kropp og hvilke avtaler de inngår.",
      ],
      [
        "Egalitær liberal feminisme (Okin)",
        "Like formelle rettigheter er ikke nok. Kjønnsroller og arbeidsdeling hjemme gir strukturelle skjevheter, så staten må aktivt legge til rette for likestilling.",
      ],
    ],
    teorier: [
      {
        navn: "Kant og Wollstonecraft: frihet som ikke-dominans",
        tekst:
          "Frihet må være lik frihet for alle. Kant: «Enhver handling er rett hvis den, eller dens maksime, er slik at enhver sin vilkårlige frihet kan bestå sammen med alles frihet i samsvar med en allmenn lov.» Det minner om det kategoriske imperativ, men stiller ingen krav til motivet. Ikke-dominans krever at alle har politisk representasjon (demokrati). Wollstonecraft: store klasseforskjeller gjør de fattige prisgitt de rike, og fattigdom er derfor uforenlig med frihet. Kant: staten har plikt til å forsørge de fattige.",
      },
      {
        navn: "Wollstonecraft om likestilling",
        tekst:
          "Kvinner har samme fornuft som menn; det som gjør dem «dumme», er oppdragelsen. De må ha samme rettigheter og være økonomisk selvstendige. Likevel mener hun at kvinner har en morsplikt som borgerplikt. Det tolkes enten som ufullstendig likhetsfeminisme eller som et forskjellsfeministisk trekk.",
      },
      {
        navn: "Okin: en fremtid uten kjønn",
        tekst:
          "Forventninger om at kvinner tar hovedansvaret for barn, og at arbeidstakere ikke gjør det, forsterker skjevheter hjemme og på jobb. Kjønn (gender) bør bli like irrelevant som øyefarge. Tiltak: lik permisjon for begge foreldre, fleksibel arbeidstid og barnepass, kjønnsbalanse ved ansettelser, likestilling i skolen, og at lønnen deles likt mellom ektefellene. Klassiske liberalfeminister kaller dette paternalisme.",
      },
      {
        navn: "Ytringsfrihet og hatytringer",
        tekst:
          "Kamm: ytringsfrihet er den eneste passende måten å behandle personer med egne meninger på. Nagel: forbud mot hatytringer er en urett mot oss alle, fordi det ikke respekterer at voksne kan gjøre seg opp egne meninger. En interessebasert kritiker må i stedet vise at forbud ikke virker eller gjør skade (ekkokamre, misbruk), og det er vanskelig å påvise.",
      },
      {
        navn: "For og mot naturlige rettigheter",
        tekst: "",
        for: [
          "Forklarer ubetingede forpliktelser (ikke drepe, ikke straffe uten lov og dom). De fungerer som trumf og utelukker visse handlinger, i stedet for å bli veid mot andre hensyn.",
          "Mills instrumentelle rettigheter er empirisk betinget og for svake: hvis summariske henrettelser ga mindre vold, kunne retten til rettergang settes til side.",
        ],
        mot: [
          "Mangler begrunnelse: hvorfor skulle vi være født med en ukrenkelig verdighet?",
          "Sirkulært: rettighetene begrunnes i personstatusen, men personstatusen er definert av rettighetene.",
          "Uenighet blant tilhengerne: Nozick mener omfordeling krenker eiendomsretten, mens Kant og Murphy og Nagel mener det motsatte.",
        ],
      },
    ],
    eksamen: [
      "Forklar forskjellen på en teori om naturlige rettigheter og en instrumentalistisk teori om rettigheter.",
      "Hva er forskjellen på frihet som ikke-innblanding og som ikke-dominans?",
      "Hvorfor er fattigdom et problem for frihet ifølge Wollstonecraft og Kant?",
      "Hva er forskjellen på likhetsfeminisme og forskjellsfeminisme? Hvor plasserer du Wollstonecraft?",
      "Hva er forskjellen på klassisk og egalitær liberal feminisme?",
      "Presenter en styrke og en svakhet ved teorier om naturlige rettigheter.",
    ],
    case:
      "Bruk: 1) Hvilke rettigheter står på spill? 2) Blir noen dominert, altså prisgitt andres vilkårlige vilje (arbeidsgiver, partner, plattform)? 3) Er tiltaket en skranke som ikke kan veies bort (ingen tortur, rettferdig rettergang)? 4) Sammenlign med Mill: hva sier en nyttebegrunnelse? 5) Drøft begrunnelsesproblemet.",
  },
  {
    slug: "21",
    del: 5,
    tittel: "Mennesket: det politiske dyret",
    kilde: "Tenk! kap. 21",
    forelesning: [12],
    kjerne:
      "Et vanlig liberalt ideal er at staten skal være nøytral om hva som er et godt liv. Aristoteles mente derimot at mennesket er et politisk dyr som bare kan realisere seg i fellesskap. Charles Taylor og Martha Nussbaum avviser nøytralitetsidealet, men regner seg som liberale og legger mer vekt på positiv frihet. Taylor kritiserer politisk atomisme og forsvarer forskjellspolitikk. Nussbaums kapabilitetstilnærming måler livskvalitet ut fra hva folk faktisk er i stand til å gjøre og være.",
    begreper: [
      [
        "Nøytralitetsidealet",
        "Staten skal ikke favorisere noe bestemt syn på det gode liv, men legge til rette for at hver og en søker lykken på sin måte.",
      ],
      [
        "Politisk atomisme",
        "(a) Menneskelige goder er grunnleggende individuelle, og (b) individets rettigheter er mer grunnleggende enn forpliktelser overfor samfunnet. Taylor knytter det til Locke: staten er et nyttig redskap, og politiske plikter krever samtykke.",
      ],
      [
        "Rettighetenes forrang",
        "Doktrinen om at vi primært har rettigheter, mens forpliktelser overfor fellesskapet er sekundære.",
      ],
      [
        "Holistisk liberalisme",
        "Taylors liberalisme, som vektlegger at vi er avhengige av samfunnet. Begrunner at skattepenger brukes på kulturbærende institusjoner og infrastruktur, ikke bare politi og rettsvesen.",
      ],
      ["Likeverdighetspolitikk", "Politikk med likeverd og like rettigheter for alle i sentrum. Kan begrunne kvotering for å kompensere for dårlig utgangsposisjon, med mål om at forskjellsbehandling blir unødvendig."],
      [
        "Forskjellspolitikk",
        "Politikk som anerkjenner og vil bevare det særegne ved personers og gruppers identitet (språk, tradisjoner). Eks.: samisk språkopplæring, Quebecs språklover, Youngs forslag om reserverte seter for undertrykte grupper.",
      ],
      [
        "Grunnleggende vs. mindre grunnleggende rettigheter",
        "Taylor: liv, frihet, rettferdig rettergang, ytrings- og religionsfrihet kan aldri krenkes. Mindre grunnleggende rettigheter (valg av skolespråk) kan vike for kulturell overlevelse. Derfor kan han støtte Quebec og avvise fatwaen mot Rushdie.",
      ],
      [
        "Kapabilitet",
        "De faktiske mulighetene et menneske har til å utøve en typisk menneskelig funksjon (Nussbaum, Sen). Det er kapabiliteter, ikke funksjoner, som er politikkens mål.",
      ],
      [
        "Tilpassede preferanser",
        "Vi tilpasser ønskene våre til situasjonen vi er i. Den som aldri har fått skolegang, kan være fornøyd uten. Gjør tilfredshet til et dårlig mål på livskvalitet.",
      ],
    ],
    teorier: [
      {
        navn: "Taylor: intet menneske er en øy",
        tekst:
          "Samfunnet gir oss «selve muligheten til å være et menneske som søker det gode». Evnen til selvstendige livsvalg krever kjennskap til alternativer og en kultur for offentlig meningsutveksling, som igjen krever institusjoner (skoler, universiteter, aviser, domstoler) og infrastruktur. Respekterer vi evnene som gir oss rettigheter, må vi også bidra til at de kan utvikles. Da er pliktene til fellesskapet like grunnleggende som rettighetene, og rettighetenes forrang faller.",
      },
      {
        navn: "To problemer med forskjellspolitikk",
        tekst:
          "1) Konserverende effekt: kulturbevaring kan favorisere de dominerende i gruppen og hindre fornyelse. Appiah: barnas selvbestemmelse må gå foran foreldrenes ønske om arrangert ekteskap. Habermas: en kultur kan ikke bevares som en truet art, men lever bare hvis nye generasjoner kritisk og frivillig gjør den til sin. 2) Mangler kriterier: når kan kultur trumfe likestilling? Benhabib: Indian Act fratok kvinner som giftet seg utenfor stammen rettigheter, mens menn beholdt dem. Hva med statskirke i Norge?",
      },
      {
        navn: "Nussbaums ti kapabiliteter",
        tekst:
          "Liv; kroppslig helse; kroppslig integritet; sanser, forestillingsevne og tenkning; følelser; praktisk fornuft; tilknytning; forhold til andre arter; lek; kontroll over egne omgivelser (politisk og materielt). Et minimum for et verdig liv. Ingen kan byttes mot en annen, og sivile og politiske rettigheter er ikke viktigere enn økonomiske og sosiale: ytringsfrihet hjelper lite for den som må bruke all tid på å skaffe mat. Staten må aktivt sikre dem, også mot private (vold mot kvinner).",
      },
      {
        navn: "Kapabilitetstilnærmingen vs. andre mål på livskvalitet",
        tekst:
          "Mot rikdom som mål: penger har bare instrumentell verdi, og en rullestolbruker trenger mer for samme mobilitet. Mot utilitarismen (gjennomsnittlig tilfredshet): 1) snittet kan skjule at mange, f.eks. kvinner, har det dårlig; 2) ulike goder slås sammen, men politisk frihet bør ikke byttes mot velstand; 3) tilfredshet er upålitelig pga. tilpassede preferanser.",
      },
      {
        navn: "Er tilnærmingen kulturelt nøytral nok?",
        tekst: "",
        for: [
          "Et «frittstående moralsk ideal» som kan aksepteres på tvers av livssyn. Ligner FNs menneskerettighetserklæring.",
          "Åpen for tolkning: ytringsfrihet kan spesifiseres ulikt i USA og Tyskland.",
          "Ikke paternalistisk: staten sikrer muligheter, men den enkelte velger (man kan faste eller la være å stemme).",
        ],
        mot: [
          "Noen punkter kan være uttrykk for Nussbaums egne kulturbestemte verdier.",
          "Sier bare noe om et minimum, ikke om fordeling over minimum eller utjevning av økonomiske forskjeller.",
        ],
      },
    ],
    eksamen: [
      "Hva er nøytralitetsidealet, og hvorfor avviser Taylor og Nussbaum det?",
      "Forklar forskjellen på atomistisk og holistisk liberalisme.",
      "Hva er forskjellen på forskjellspolitikk og likeverdighetspolitikk?",
      "Gjør rede for to problemer med forskjellspolitikk.",
      "Hva kjennetegner kapabilitetstilnærmingen, og hvordan skiller den seg fra utilitarismen?",
      "Hvilke plikter har staten ifølge kapabilitetstilnærmingen?",
    ],
  },
  {
    slug: "22",
    del: 5,
    tittel: "Demokrati og ekspertstyre",
    kilde: "Tenk! kap. 22",
    forelesning: [12],
    kjerne:
      "Noen vil gi eksperter mer makt (klima, finanskrisen, korona), mens populister angriper «såkalte eksperter». Moderne demokratier er representative og bygger på maktfordeling. Demokrati kan begrunnes ved egenverdi eller instrumentelt (stabilitet, bedre beslutninger). Landemore forsvarer demokratiet epistemisk; Brennan vil erstatte det med epistokrati. Innvendingene mot ekspertstyre er epistemiske og demokratiske, men de er ikke argumenter for å fjerne ekspertene. Vi bør organisere ekspertorganer slik at fordelene blir størst og ulempene minst.",
    begreper: [
      ["Direkte demokrati", "Borgerne deltar selv i beslutningene (Aten, folkeavstemninger)."],
      ["Indirekte/representativt demokrati", "Borgerne velger representanter som beslutter på deres vegne. Det vanlige i dag."],
      [
        "Maktfordelingsprinsippet",
        "Lovgivende, utøvende og dømmende makt skal ligge hos ulike organer. Montesquieu (og USA): makt skal begrense makt i en balanse. Rousseau og Kant: asymmetrisk, der de utøvende organene er underordnet lovgiveren, som i parlamentarismen.",
      ],
      [
        "Folkesuverenitetsprinsippet",
        "All legitim maktutøvelse skal utgå fra folket, som direkte eller gjennom representanter gir lovene (Rousseau, Kant). De kalte idealet «republikk», fordi antikt demokrati var et skiftende flertalls vilkårlige styre.",
      ],
      [
        "Parlamentarisme",
        "Regjeringen må ha parlamentets tillit. Negativ (Norge): sitter til den felles ved mistillit. Positiv: må godkjennes ved et innsettingsvedtak.",
      ],
      ["Valgdemokrati (aggregativt)", "Beslutninger summerer individuelle preferanser gjennom stemmegivning og flertall."],
      [
        "Deliberativt demokrati (Habermas)",
        "Beslutninger er bare legitime hvis alle berørte har hatt frie og like muligheter til å delta i argumenterende meningsbrytning først. «Kraften i det bedre argument». Flertallsvedtak er aldri endelige.",
      ],
      [
        "Ekspert (Goldman)",
        "En som har avansert og holdbar kunnskap på et område, mer enn de fleste, og kan bruke den på nye problemer. Ekspert på noe, ikke på alt. Tekniske eksperter kan mye om midler, men ikke nødvendigvis om mål.",
      ],
      ["Epistokrati/teknokrati", "Styre ved dem som har kunnskap (ekspertstyre)."],
      [
        "Avpolitisering",
        "At genuin politisk uenighet om interesser, verdier og mål gjøres om til tekniske spørsmål som overlates til eksperter.",
      ],
    ],
    teorier: [
      {
        navn: "Landemores tre epistemiske argumenter for demokrati",
        tekst:
          "1) Condorcets juryteorem: hvis hver har over 50 % sjanse for å ha rett, øker sjansen for at flertallet har rett jo flere som deltar. 2) Inkluderende deliberasjon gir flere argumenter og perspektiver og slår ekspertdiskusjoner. 3) Empiri: Islands borgerskrevne grunnlov (2012) og det franske borgerkonventet om klima (2019) ga bedre forslag enn eksperter. Kritikk: Urbinati mener demokratiet må begrunnes i egenverdien, retten til selvstyre.",
      },
      {
        navn: "Brennans forsvar for epistokrati",
        tekst:
          "Forslag: kompetansetest for stemmerett, ekstra vekt på stemmene til de kunnskapsrike, eller et epistokratisk råd med veto. Argumenter: vi ville ikke godta en uvitende jury eller stemmerett for barn; juryteoremet slår motsatt vei hvis folk oftere tar feil enn har rett; uvitende deltakere hever ikke kvaliteten på deliberasjonen; mange velgere kan lite om politikk; eksperter vet mer.",
      },
      {
        navn: "Innvendinger mot ekspertstyre",
        tekst: "",
        mot: [
          "Epistemiske: ikke-eksperter kan ikke skille gode fra dårlige eksperter. Eksperter gjør logiske feil (Kahneman) og er for skråsikre i spådommer (Tetlock). De har faglige, sosiale og ideologiske skjevheter, og egne interesser.",
          "Demokratiske: makt flyttes til ikke-valgte. Borgere blir fremmedgjort fordi de ikke ser seg som forfattere av lovene (Christiano). Noen eksperter viser manglende respekt for vanlige borgere. Avpolitisering.",
          "Eksperter uttaler seg ofte om mål, ikke bare midler (skolestenging under korona), og det er vanskelig å skille fakta fra verdier.",
        ],
      },
      {
        navn: "Bedre eksperter og demokratisk ansvar",
        tekst:
          "Innvendingene er ikke grunner til å fjerne ekspertene, men til å organisere dem bedre. Negative mekanismer: sanksjoner mot dårlig arbeid og regler mot bindinger og egeninteresser. Positive mekanismer: normer for sannhetssøken, epistemisk tilbakeholdenhet (vær tydelig på grensene for egen ekspertise), epistemisk pluralisme (flere fag) og at argumentene prøves i ulike fora (fagfeller, parlament, offentlighet).",
      },
    ],
    eksamen: [
      "Forklar forskjellen på direkte og indirekte demokrati, og på valgdemokrati og deliberativt demokrati.",
      "Hva er maktfordelingsprinsippet og folkesuverenitetsprinsippet?",
      "Hvordan kan demokrati begrunnes? Skill mellom egenverdi og instrumentelle begrunnelser.",
      "Gjør rede for juryteoremet og hvordan Landemore og Brennan bruker det.",
      "Hva er epistokrati? Gi argumenter for og mot.",
      "Hvordan kan ekspertenes rolle forenes med demokratiet?",
    ],
    case:
      "Typisk case: «Bør eksperter bestemme klimapolitikken / pandemitiltak / renten?» 1) Hvilke spørsmål gjelder midler og hvilke mål? 2) Argumenter for mer ekspertmakt (Brennan). 3) Epistemiske og demokratiske innvendinger. 4) Landemores alternativ (borgerkonvent). 5) Konkluder med mekanismer for ansvarlige eksperter innenfor demokratiet.",
  },

  // ───────────── DEL 6: TILLEGGSTEKSTER ─────────────
  {
    slug: "ingenioransvar",
    del: 6,
    tittel: "Ingeniørers ansvar",
    kilde: "van de Poel & Royakkers (2011): «The Responsibilities of Engineers»",
    forelesning: [5],
    kjerne:
      "Ingeniører har stor makt og dermed stort ansvar. Teksten skiller mellom passivt (tilbakeskuende) og aktivt (fremoverskuende) ansvar, gir fire betingelser for klanderverdighet, og diskuterer ingeniøridealer og tre modeller for ingeniørers ansvar: separatisme, teknokrati og varsling. Eksempel: Challenger-ulykken (1986), der ingeniøren Boisjoly hadde advart.",
    begreper: [
      ["Rolleansvar", "Ansvar knyttet til en rolle (ansatt, ingeniør, forelder). Moralsk ansvar kan trumfe rolleansvar."],
      [
        "Passivt ansvar",
        "Tilbakeskuende ansvar etter at noe har gått galt: å kunne redegjøre for hva som skjedde (accountability) og eventuelt klandres (blameworthiness).",
      ],
      [
        "Aktivt ansvar",
        "Fremoverskuende ansvar før noe har skjedd: plikt til å handle slik at skade unngås og gode konsekvenser fremmes. Krever gode holdninger/dyder.",
      ],
      [
        "Fire betingelser for klanderverdighet",
        "1) Man har brutt en norm/gjort noe galt. 2) Kausal forbindelse mellom handlingen og skaden. 3) Forutsigbarhet: man kunne forutsett følgen. 4) Handlefrihet: man handlet ikke under tvang.",
      ],
      [
        "Ingeniøridealer",
        "Teknologisk entusiasme (gleden ved å skape, men kan overse negative følger), effektivitet (måloppnåelse, virker nøytralt, men er ikke alltid godt) og å bidra til menneskelig velferd (sikkerhet, helse, miljø).",
      ],
      [
        "Separatisme / den tredelte modellen",
        "Politikere/ledere setter mål, ingeniører designer og utvikler, brukere bruker. Ingeniøren har bare ansvar for det tekniske. «Once the rockets go up, who cares where they come down?»",
      ],
      [
        "Teknokrati",
        "Ingeniører/teknologer bør selv ta politiske beslutninger. For: ansvar og kanskje bedre beslutninger. Mot: paternalistisk og udemokratisk.",
      ],
      [
        "Varsling (whistle-blowing)",
        "Mellomposisjon: ingeniøren aksepterer en underordnet rolle, men varsler (internt, til slutt offentlig) når liv og helse står på spill. Viktig, men høy personlig kostnad, kan skade tillit, og bør ikke være eneste mekanisme.",
      ],
    ],
    teorier: [
      {
        navn: "Kobling til etikkteoriene",
        tekst:
          "Passivt ansvar ligner en vurderingssituasjon, aktivt ansvar en beslutningssituasjon (kap. 15). Aktivt ansvar krever dyder (kap. 18). Profesjonskoder (NITO, Tekna, ASCE) sier at sikkerhet, helse og velferd for allmennheten kommer først.",
      },
    ],
    eksamen: [
      "Hva menes med aktivt og passivt ansvar?",
      "Under hvilke betingelser er en person klanderverdig ifølge van de Poel & Royakkers?",
      "Forklar separatisme og den tredelte modellen.",
      "Hva er teknokrati, og hva er vanlige innvendinger?",
      "Hvorfor er varsling problematisk som generell modell for ingeniørers ansvar?",
    ],
    case:
      "Ved en ulykke/case: gå gjennom de fire betingelsene for klanderverdighet for hver aktør. Drøft hvilken ansvarsmodell som ble fulgt (separatisme?) og om varsling hadde vært riktig. Koble gjerne til pliktetikk og dydsetikk.",
  },
  {
    slug: "miljoetikk",
    del: 6,
    tittel: "Miljøetikk",
    kilde: "Martin & Schinzinger (2010): «Environmental Ethics»",
    forelesning: [5],
    kjerne:
      "Miljøetikk spør hvilke forpliktelser vi har overfor natur og dyr, og hva som har egenverdi. To metaforer viser forholdet mellom egennytte og fellesskapets nytte: den usynlige hånd og allmenningens tragedie. Teksten kontrasterer «tekno-tenkning» med «grønn filosofi», og skiller mellom antroposentrisme, biosentrisme og økosentrisme.",
    begreper: [
      [
        "Den usynlige hånd",
        "Adam Smith: når produsenter handler ut fra egeninteresse i et fritt marked, fører konkurransen til best mulige produkter til lavest pris, til fellesskapets beste. Problem: tar ikke hensyn til eksternaliteter (forurensning).",
      ],
      ["Eksternaliteter", "Utilsiktede bivirkninger av økonomisk aktivitet som rammer andre, ofte negative."],
      [
        "Allmenningens tragedie",
        "Hardin: en felles ressurs ødelegges når hver bruker følger egennytten, selv om alle til slutt taper. Det er ikke rasjonelt for én å moderere seg så lenge ikke alle gjør det. Løsning: regulering, men vanskelig når markedet er globalt.",
      ],
      [
        "Tekno-tenkning (techno-think)",
        "Mekanistisk og reduksjonistisk natursyn: naturen er en maskin vi kan kontrollere, og alt kan fikses med teknologi.",
      ],
      [
        "Grønn filosofi",
        "Ydmykhet og respekt overfor naturen. Ingeniører i dag er i større grad pådrivere for bærekraft og kan forene begge.",
      ],
      [
        "Antroposentrisme",
        "Bare mennesker har egenverdi; naturen har instrumentell verdi for oss (Aristoteles, Kant, kristendommen). Delvis unntak: utilitarister som inkluderer alle følende vesener (Bentham, Singer).",
      ],
      [
        "Biosentrisme",
        "Alle levende vesener har egenverdi (Albert Schweitzer, Paul Taylor), men ikke nødvendigvis lik moralsk status.",
      ],
      [
        "Økosentrisme",
        "Holisme: helheten (økosystemer, også ikke-levende deler som en elv) har verdi, ikke bare individene (Aldo Leopold).",
      ],
    ],
    teorier: [
      {
        navn: "De tre etikkteoriene om miljø",
        tekst:
          "Utilitarisme: hvilke handlinger maksimerer nytte, og for hvem (mennesker, dyr, fremtidige generasjoner)? Pliktetikk: hvilke plikter har vi overfor andre land og fremtiden? Har dyr rettigheter? Kan vi bruke naturen bare som middel? Dydsetikk: hvilke holdninger bør vi møte naturen med (ansvarlighet, ydmykhet, omsorg)?",
      },
    ],
    eksamen: [
      "Hva ligger i begrepene den usynlige hånd og allmenningens tragedie?",
      "Gjør rede for «techno-think» og «grønn filosofi». Hvordan kan ingeniører innlemme begge?",
      "Hva kjennetegner antroposentrisme, biosentrisme og økosentrisme?",
    ],
  },
  {
    slug: "baerekraft",
    del: 6,
    tittel: "Bærekraft",
    kilde: "Carson & Skauge (2020): «Bærekraftige virksomheter»",
    forelesning: [5],
    kjerne:
      "Bærekraftig utvikling (Brundtland 1987) er utvikling som møter dagens behov uten å ødelegge fremtidige generasjoners mulighet til å møte sine. Bærekraft har tre dimensjoner: miljø, økonomi og sosiale forhold. Spørsmålet er hva som skjer når de kolliderer (svak vs. sterk bærekraft).",
    begreper: [
      [
        "Bærekraftig utvikling",
        "«En utvikling som møter dagens behov uten å ødelegge fremtidige generasjoners evne til å tilfredsstille sine behov.» (Brundtlandkommisjonen, Vår felles framtid, 1987.)",
      ],
      ["Tre dimensjoner", "Miljø, økonomi og sosiale forhold (FNs 17 bærekraftsmål)."],
      [
        "Svak bærekraft",
        "De tre dimensjonene veies likt; miljøskade kan aksepteres hvis de økonomiske/sosiale gevinstene er store nok (miljø kan «veksles»).",
      ],
      [
        "Sterk bærekraft",
        "Miljøet har forrang og kan ikke veksles mot økonomi eller sosiale hensyn.",
      ],
      [
        "Føre-var-prinsippet",
        "Hvis en handling kan gi alvorlig eller uopprettelig skade, og det ikke er vitenskapelig enighet om at skaden ikke vil skje, ligger bevisbyrden på den som vil gjennomføre handlingen. Et sted mellom sterk og svak bærekraft.",
      ],
      [
        "Den triple bunnlinja (Elkington)",
        "Bedrifter skal måles på miljømessige og sosiale resultater i tillegg til økonomiske (people, planet, profit). Videreført i ESG-rapportering.",
      ],
      ["Grønnvasking", "Å fremstille seg som mer miljøvennlig enn man er."],
    ],
    teorier: [
      {
        navn: "Innvendinger mot den triple bunnlinja",
        tekst: "",
        mot: [
          "Sier ikke hvilken bunnlinje som er viktigst når de kolliderer.",
          "Åpner for grønnvasking.",
          "I praksis avgjør fortsatt ofte det økonomiske resultatet.",
          "Usikkert om de mest bærekraftige vinner i konkurransen (men forbrukermakt kan hjelpe, jf. pelsoppdrett).",
        ],
      },
    ],
    eksamen: [
      "Hva ligger i begrepet bærekraft?",
      "Hva er forskjellen på sterk og svak bærekraft?",
      "Gjør rede for den triple bunnlinja og noen innvendinger.",
      "Hva går føre-var-prinsippet ut på?",
    ],
    case:
      "Ved utbyggingscase (vindkraft, datasenter, gruve): drøft med sterk vs. svak bærekraft, føre-var-prinsippet, og etisk grunnsyn (antroposentrisk vs. bio-/økosentrisk). Koble til nytte-kostnadsanalyse og diskontering (Fjelland).",
  },
  {
    slug: "datamaskiner",
    del: 6,
    tittel: "Kan datamaskiner tenke?",
    kilde: "Bøhn (2023): «Kan datamaskiner tenke?», Norsk filosofisk tidsskrift",
    forelesning: [7],
    kjerne:
      "Bøhns svar er nei, og poenget er å forklare hvorfor. Datamaskiner slik vi kjenner dem er implementerte funksjoner (algoritmer). Ren atferd er ikke nok til å tenke som oss. Han går gjennom Turing, Searle, Dreyfus og Wittgenstein og konkluderer med at tenkning krever bevissthet: subjektiv førstepersonserfaring, som gir en livsverden og gjør oss i stand til å delta i en kollektiv livsform. Han hevder ikke at det er logisk umulig for maskiner å tenke.",
    begreper: [
      [
        "Turingtesten (imitasjonsspillet)",
        "En person chatter med en maskin og et menneske i atskilte rom. Klarer hen ikke å skille dem, har maskinen bestått. Testen måler atferd: intelligens forstått som kompleks problemløsning. Å nekte maskinen intelligens bare fordi den er en maskin, er diskriminering på irrelevant grunnlag.",
      ],
      [
        "Intelligens vs. bevissthet",
        "Intelligens er noe man gjør (problemløsning, atferd). Bevissthet er noe man er: subjektiv erfaring av hvordan det er å være i den tilstanden man er i. Mer kunstig intelligens gir ikke kunstig bevissthet.",
      ],
      [
        "Svak vs. sterk KI (Searle)",
        "Svak KI: imitasjon, som en papegøye. Sterk KI: reell tenkning, slik vi tenker, med forståelse.",
      ],
      [
        "Det kinesiske rommet (Searle)",
        "En person som bare kan norsk, følger regelbøker for å svare på kinesiske lapper. Utenfra ser det ut som rommet forstår kinesisk, men ingen forstår noe. Viser at korrekt symbolbehandling (syntaks) ikke gir forståelse og mening (semantikk).",
      ],
      [
        "Berammingsproblemet («the frame problem»)",
        "Datamaskinen vet ikke hva i bakgrunnen som er endret og hva som er konstant fra én kontekst til en annen, med mindre det er programmert inn. Mennesker overfører lett kunnskap: Magnus Carlsen kan bruke sjakkstrategi i andre spill, en sjakkmaskin kan ikke.",
      ],
      [
        "Livsverden (Dreyfus)",
        "Bakgrunnen vi alltid handler ut fra: bevissthet, faktakunnskap, taus kunnskap og praktisk kunnskap. Gjør at vi utøver skjønn i stedet for bare å følge regler på input.",
      ],
      [
        "Regelfølging (Wittgenstein)",
        "Å følge en regel er mer enn å handle i samsvar med den; det krever forståelse. Regelfølging er en praksis i et sosialt fellesskap som kan korrigere hverandre. Privat regelfølging er umulig.",
      ],
    ],
    teorier: [
      {
        navn: "Bøhns argument i fire steg",
        tekst:
          "1) Turing: maskiner kan imitere intelligent atferd, og Turingtesten er en god test for det (svak KI). 2) Searle: atferd er ikke det samme som forståelse eller bevissthet. Bøhn synes dette er litt overflatisk; det dypere spørsmålet er hvorfor det ikke er reell tenkning. 3) Dreyfus: all KI er regelfølging på input, også maskinlæring. Maskiner mangler en livsverden og takler derfor ikke kontekstskifter. 4) Wittgenstein: maskiner handler bare i samsvar med regler, de følger dem ikke, fordi de ikke tar del i en kollektiv livsform.",
      },
      {
        navn: "Hvorfor er dette et prinsipielt og ikke et praktisk problem?",
        tekst:
          "Innvending: maskinene trenger bare mer kunnskap og data. Bøhns svar er nei. Uten bevissthet mangler de den subjektive erfaringen av likhet/ulikhet og relevans/irrelevans som lar oss overføre kunnskap til nye situasjoner. Spørsmålet blir da om kunstig bevissthet er mulig, og der står vi «på bar bakke».",
      },
      {
        navn: "Kobling til menneskesyn (kap. 12)",
        tekst:
          "Turingtesten passer med funksjonalismen: det som teller er funksjon og atferd. Bøhns kritikk ligner fenomenologiske og kroppsliggjorte innvendinger, og bygger på det vanskelige bevissthetsproblemet (Chalmers).",
      },
    ],
    eksamen: [
      "Hva er Turingtesten, og hva tester den egentlig?",
      "Forklar Searles kinesiske rom og skillet mellom svak og sterk KI.",
      "Hva er berammingsproblemet?",
      "Hva er forskjellen på å følge en regel og å handle i samsvar med den?",
      "Hvorfor mener Bøhn at datamaskiner ikke kan tenke? Er du enig?",
    ],
    case:
      "KI-case (chatbot, KI-lege, selvkjørende bil): skill mellom intelligens (atferd) og bevissthet. Bruk berammingsproblemet til å forklare hvorfor KI kan svikte i nye kontekster, og koble til teknologisyn (kap. 13) og ansvar (hvem har ansvaret når KI tar feil?).",
  },
  {
    slug: "fjelland",
    del: 6,
    tittel: "Vitenskap, fremskritt og ansvar",
    kilde: "Fjelland (tilleggstekst, forelesning 10)",
    forelesning: [10],
    kjerne:
      "Fjelland stiller tre spørsmål til moderne vitenskap og teknologi: Er vitenskapelig fremskritt alltid et gode? Har vi kontroll over den teknologiske utviklingen? Hvilket ansvar har vi for konsekvensene? Han kritiserer teknologisk determinisme og viser at nytte-kostnadsanalyser med diskontering kan undervurdere fremtidige skader. Merk: sammendraget bygger på forelesningsslidene.",
    begreper: [
      [
        "Teknologisk vs. sosialt fremskritt",
        "Ikke alle teknologiske fremskritt er sosiale fremskritt (den grønne revolusjonen ga større avlinger, men gevinsten ble skjevt fordelt). Bedre folkehelse skyldes også ernæring, hygiene og levekår, ikke bare medisin.",
      ],
      [
        "Nytte-kostnadsanalyse",
        "Systematisk sammenligning av alternativer: 1) definer problemet, 2) identifiser alternativer, 3) kartlegg konsekvenser (nytte, kostnad, risiko), 4) verdsett og sammenlign. Utilitaristisk i grunnen. Utfordring: ikke alt kan måles i penger.",
      ],
      ["Instrumentell verdi", "Verdi som middel til noe annet (skogens tømmerverdi)."],
      ["Egenverdi", "Verdi i seg selv (naturens eller menneskets egenverdi)."],
      [
        "Diskontering",
        "Fremtidig nytte og kostnad regnes om til nåverdi (100 kr om 45 år ≈ 11 kr i dag ved 5 % rente). Gjør at fremtidige miljøskader veier lite, noe som oppmuntrer til å ta gevinsten nå og skyve kostnaden fremover.",
      ],
      [
        "Økosystemtjenester",
        "Goder vi får fra naturen: pollinering, vannrensing, flomdemping, karbonlagring. Synliggjør naturens verdi, men kan den uttrykkes fullt ut i penger?",
      ],
      [
        "Hans Jonas' ansvarsetikk",
        "Teknologien gir handlingene våre globale og langvarige følger. Vi har ansvar også for mennesker som ikke er født ennå, og utviklingen må ikke true menneskehetens fremtid.",
      ],
    ],
    teorier: [
      {
        navn: "Har vi kontroll?",
        tekst:
          "Frankenstein og Oppenheimer viser at vitenskapelig evne ikke er det samme som etisk ansvar, og at gode intensjoner kan få uforutsette følger. Eksempler: kugalskap og covid. Marx: teknologi kan frigjøre, men også disiplinere og utnytte. Engels: industri krever underordning. Fjelland: teknologien stiller krav, men bestemmer ikke hele samfunnsorganiseringen (mot determinisme).",
      },
    ],
    eksamen: [
      "Er teknologisk fremskritt alltid sosialt fremskritt? Gi et eksempel.",
      "Hva er en nytte-kostnadsanalyse, og hva er en svakhet ved den?",
      "Hva er diskontering, og hvorfor er det etisk problematisk?",
      "Hva er forskjellen på instrumentell verdi og egenverdi?",
    ],
    case:
      "Utbyggingscase (datasenter i skog og myr): list nytte (arbeidsplasser, skatt) og kostnader (karbonlagring, flomdemping, arter, friluftsliv). Drøft om naturverdier kan prissettes, effekten av diskontering, og ansvaret for fremtidige generasjoner (Jonas, Brundtland).",
  },
];

export function finnKapittel(slug: string) {
  return kapitler.find((k) => k.slug === slug);
}
