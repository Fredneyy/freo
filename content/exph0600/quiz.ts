// Flervalgsspørsmål for EXPH0600. Konvensjon: alternativer[0] er riktig svar; UI-et stokker rekkefølgen.
// Alle spørsmål er kontrollert mot sammendragene i kapitler.ts (som igjen er kontrollert mot Tenk!).

export type QuizSporsmal = {
  id: string;
  kapittel: string;
  sporsmal: string;
  alternativer: [riktig: string, ...feil: string[]];
  forklaring: string;
};

export const quiz: QuizSporsmal[] = [
  // ───────────── DEL 1: Argumentasjonsteori ─────────────
  {
    id: "1-person",
    kapittel: "1",
    sporsmal:
      "I en debatt om vinsalg i butikk svarer motparten: «I fjor måtte du beklage oppførselen din på et nachspiel. Og nå vil du ha vin i butikk!?» Hva slags argumentasjon er dette?",
    alternativer: ["Usaklig personargument", "Stråmannsargument", "Ekvivokering", "Å bekrefte konsekvensen"],
    forklaring:
      "Svaret retter seg mot personen, ikke standpunktet. Selv om påstanden er riktig, er den ikke relevant for om vin bør selges i butikk. Det bryter norm 3 (relevans) og norm 1 (gi grunner).",
  },
  {
    id: "1-straamann",
    kapittel: "1",
    sporsmal:
      "Du argumenterer for at privat bruk av cannabis bør legaliseres. Motdebattanten svarer: «I motsetning til min motstander mener jeg at fri flyt av narkotika er en dårlig idé.» Hva har motdebattanten gjort?",
    alternativer: [
      "Laget en stråmann: gjengitt synet ditt som mer kontroversielt enn det er",
      "Brukt et saklig motargument mot riktigheten av standpunktet",
      "Kommet med et usaklig personargument",
      "Pekt ut en implisitt påstand i argumentasjonen din",
    ],
    forklaring:
      "Du sa ingenting om «fri flyt av narkotika». Gjengivelsen skaper en skinnuenighet og avsporer debatten. Argumentene hans treffer bare stråmannen, ikke det du faktisk mente.",
  },
  {
    id: "1-person-saklig",
    kapittel: "1",
    sporsmal: "Når kan et personargument være saklig?",
    alternativer: [
      "Når standpunktet handler om personen selv, eller når vi vurderer om en kilde er pålitelig",
      "Når påstanden om personen er sann",
      "Når personen er en offentlig person, for eksempel en politiker",
      "Aldri: personargumenter er alltid usaklige",
    ],
    forklaring:
      "«Justisministeren bør ikke ha Stortingets tillit» handler om en person, og da er påstander om personen relevante. Ekspertise er relevant for troverdighet. At en påstand om personen er sann, gjør den ikke relevant.",
  },
  {
    id: "1-bullshit",
    kapittel: "1",
    sporsmal: "Hvorfor mener Harry Frankfurt at «bullshit» er en større trussel mot offentlig debatt enn løgn?",
    alternativer: [
      "Løgneren utnytter at publikum forventer sannhet, mens den som farer med bullshit er likegyldig til sannheten og undergraver normene",
      "Bullshit er vanskeligere å motbevise fordi det alltid er usant",
      "Løgn er straffbart, mens bullshit ikke er det",
      "Bullshit brukes mest av politikere, som har størst innflytelse",
    ],
    forklaring:
      "Løgneren vet hva som er sant og forholder seg til normen. Den som farer med bullshit bryr seg ikke om det er riktig eller relevant, og blir det vanlig, mister debattnormene status som felles regler.",
  },
  {
    id: "1-riktig-relevant",
    kapittel: "1",
    sporsmal:
      "Standpunkt: «Kaffedrikking øker risikoen for kreft.» Argument: «De fleste som dør av kreft i Norge, drikker kaffe.» Hvordan bør argumentet vurderes?",
    alternativer: [
      "Trolig riktig, men ikke relevant",
      "Relevant, men ikke riktig",
      "Både riktig og relevant",
      "Verken riktig eller relevant",
    ],
    forklaring:
      "De fleste voksne drikker kaffe, så det stemmer nok. Men det sier ingenting om årsak: de fleste som dør av kreft, har også brukt sko. «Koffein er kreftfremkallende» ville vært motsatt: relevant, men ikke riktig.",
  },
  {
    id: "2-sammensatt",
    kapittel: "2",
    sporsmal:
      "«Færre studenter vil fullføre. Statsbudsjettet øker ikke studiestøtten, og uten høyere studiestøtte vil frafallet øke.» Hvordan bør de to siste påstandene analyseres?",
    alternativer: [
      "Som ett sammensatt argument: de gir bare en grunn sammen",
      "Som to uavhengige standpunktargumenter",
      "Som en argumentasjonskjede der den ene støtter den andre",
      "Som et argument og et motargument",
    ],
    forklaring:
      "Test: hvis statsbudsjettet faktisk økte støtten, ville påstanden om frafall miste relevans, og omvendt. De henger sammen og må tegnes med sammenslåtte piler.",
  },
  {
    id: "2-implisitt",
    kapittel: "2",
    sporsmal:
      "«Norge bør bruke mer på forsvar, for alle NATO-medlemmer forventes å bruke minst 2 % av BNP på forsvar.» Hvilken implisitt påstand forutsetter argumentet?",
    alternativer: [
      "Norge bruker i dag mindre enn 2 % av BNP på forsvar",
      "NATO er en nyttig allianse",
      "Forsvaret er viktigere enn helse og skole",
      "Norge bør melde seg ut av NATO hvis kravet ikke oppfylles",
    ],
    forklaring:
      "Bruker Norge allerede over 2 %, er argumentet irrelevant. Den implisitte påstanden gjør argumentet til et sammensatt argument. («Norge er medlem av NATO» er også implisitt.)",
  },
  {
    id: "2-ekvivokering",
    kapittel: "2",
    sporsmal:
      "«Evolusjonsteorien er bare en teori. Man skal aldri stole på en teori. Altså skal man ikke stole på evolusjonsteorien.» Hva er feilen?",
    alternativer: [
      "Ekvivokering: «teori» betyr noe ulikt i de to premissene",
      "Stråmann: evolusjonsteorien fremstilles feil",
      "Å bekrefte konsekvensen",
      "Argumentet har ingen feil, det er deduktivt gyldig",
    ],
    forklaring:
      "I første premiss er en teori en vitenskapelig begrunnet forklaring, i andre en løs hypotese. Med samme betydning i begge blir én av premissene usann.",
  },
  {
    id: "2-mot-relevans",
    kapittel: "2",
    sporsmal:
      "Standpunkt: «Flere vil bli fagorganisert.» Standpunktargument: «Regjeringen vil øke fagforeningsfradraget.». Motargument: «Økningen er for liten til å gi et ekstra insentiv.» Hva retter motargumentet seg mot?",
    alternativer: [
      "Relevansen til standpunktargumentet",
      "Riktigheten til standpunktargumentet",
      "Standpunktet direkte, som et nytt standpunktargument",
      "Det er et indirekte argument for standpunktet",
    ],
    forklaring:
      "Motargumentet aksepterer at fradraget økes (riktig), men nekter for at det taler for standpunktet. I diagrammet tegnes pilen mot forbindelsen, ikke mot påstanden.",
  },
  {
    id: "3-tollens",
    kapittel: "3",
    sporsmal: "«Hvis det har regnet, er gaten våt. Gaten er ikke våt. Altså har det ikke regnet.» Hvilken form har argumentet?",
    alternativer: ["Modus tollens (gyldig)", "Modus ponens (gyldig)", "Å bekrefte konsekvensen (ugyldig)", "Induktiv generalisering"],
    forklaring: "Hvis p så q. Ikke q. Altså ikke p. Det er modus tollens, og den er deduktivt gyldig.",
  },
  {
    id: "3-konsekvens",
    kapittel: "3",
    sporsmal: "«Hvis homøopati virker, blir pasientene bedre. Pasientene ble bedre. Altså virker homøopati.» Hva er galt?",
    alternativer: [
      "Det er å bekrefte konsekvensen: andre ting, som placebo, kan forklare at pasientene ble bedre",
      "Det er modus tollens brukt feil",
      "Premissene er usanne, men formen er gyldig",
      "Ingenting: det er modus ponens",
    ],
    forklaring: "Hvis p så q. q. Altså p. Formen er ugyldig fordi q kan ha andre årsaker enn p.",
  },
  {
    id: "3-representativ",
    kapittel: "3",
    sporsmal:
      "En undersøkelse blant 2000 studenter i Oslo konkluderer med hva «nordmenn flest» mener om bompenger. Hva er den viktigste svakheten?",
    alternativer: [
      "Utvalget er ikke representativt for befolkningen",
      "Utvalget er for lite",
      "Det er en deduktiv slutning som ikke er gyldig",
      "Det er et analogiargument med for få likheter",
    ],
    forklaring:
      "Ved induktiv generalisering er størrelse og representativitet kriteriene. 2000 er mye, men studenter i Oslo er ikke som befolkningen ellers.",
  },
  {
    id: "3-abduksjon",
    kapittel: "3",
    sporsmal: "Hva kjennetegner en abduksjon?",
    alternativer: [
      "En slutning til den beste forklaringen av noe vi har observert",
      "En slutning der konklusjonen følger med nødvendighet",
      "En slutning fra et utvalg til en hel populasjon",
      "En slutning fra ett tilfelle til et annet som ligner",
    ],
    forklaring:
      "Abduksjon vurderes etter forklaringskraft, konservativitet (passer med det vi vet), enkelhet og om den er bedre enn konkurrerende forklaringer.",
  },
  {
    id: "3-analogi",
    kapittel: "3",
    sporsmal: "Hva avgjør hvor godt et analogiargument er?",
    alternativer: [
      "Om tilfellene har relevante likheter og ingen relevante ulikheter",
      "Hvor mange likheter tilfellene har, uansett hvilke",
      "Om konklusjonen følger logisk av premissene",
      "Hvor stort og representativt utvalget er",
    ],
    forklaring: "Det er relevansen som teller: mange overfladiske likheter hjelper ikke hvis en relevant ulikhet ødelegger sammenligningen.",
  },

  // ───────────── DEL 2: Vitenskapsfilosofi ─────────────
  {
    id: "4-korrelasjon",
    kapittel: "4",
    sporsmal: "Salget av is og antall drukningsulykker øker samtidig. Hva er den beste forklaringen?",
    alternativer: [
      "En tredje faktor, varmt vær, forårsaker begge",
      "Issalg forårsaker drukning",
      "Drukning forårsaker økt issalg",
      "Sammenhengen må være tilfeldig",
    ],
    forklaring: "Vi observerer korrelasjoner, ikke årsaker. En felles bakenforliggende årsak kan forklare at to ting opptrer sammen.",
  },
  {
    id: "4-blinding",
    kapittel: "4",
    sporsmal: "Hva betyr det at et forsøk er dobbelt blindet?",
    alternativer: [
      "Verken deltakerne eller de som behandler og vurderer resultatene, vet hvem som får hva",
      "Forsøket er gjennomført to ganger av ulike forskere",
      "Både deltakerne og forskerne er anonyme for leserne",
      "Fagfellene vet ikke hvem som har skrevet artikkelen",
    ],
    forklaring: "Dobbel blinding beskytter mot placebo hos deltakerne og bekreftelsestendens hos forskerne.",
  },
  {
    id: "4-type1",
    kapittel: "4",
    sporsmal: "Et legemiddel testes for skadevirkninger. Forskerne konkluderer med at det er ufarlig, men det er faktisk farlig. Hva kaller Tenk! denne feilen?",
    alternativer: ["Type I-feil", "Type II-feil", "Bekreftelsestendens", "Publikasjonsbias"],
    forklaring: "I bokas eksempel er type I å tro at legemidlet er ufarlig når det er farlig, og type II å tro at det er farlig når det er ufarlig. Type I er ofte viktigere å unngå, og forsøkene bør designes deretter.",
  },
  {
    id: "5-replikerbar",
    kapittel: "5",
    sporsmal: "Big Bang kan ikke gjentas. Hvordan kan teorien likevel oppfylle kravet om replikerbarhet?",
    alternativer: [
      "Det er evidensen (målingene) som må kunne replikeres, ikke fenomenet selv",
      "Den kan ikke det, og er derfor ikke vitenskapelig",
      "Den er bekreftet av matematiske bevis, så replikasjon er unødvendig",
      "Kravet om replikerbarhet gjelder bare samfunnsvitenskapene",
    ],
    forklaring: "Andre forskere kan gjenta målingene av for eksempel bakgrunnsstrålingen og få samme resultat.",
  },
  {
    id: "5-oppdagelse",
    kapittel: "5",
    sporsmal:
      "Tu Youyou fant malariamedisinen artemisinin ved å lese gamle kinesiske tekster. Hva illustrerer dette ved den hypotetisk-deduktive metoden?",
    alternativer: [
      "Oppdagelseskonteksten kan være hva som helst; det avgjørende er hvordan hypotesen testes og begrunnes",
      "Gamle tekster er en god kilde til vitenskapelig kunnskap",
      "Hypoteser må utledes deduktivt fra tidligere teorier",
      "Hypotesen er bekreftet fordi den har lang tradisjon",
    ],
    forklaring:
      "HD-metoden sier ingenting om hvor hypotesen kommer fra (oppdagelseskonteksten), bare om hvordan den begrunnes ved å teste prediksjoner (begrunnelseskonteksten).",
  },
  {
    id: "6-falsifiserbar",
    kapittel: "6",
    sporsmal: "Hvilken påstand er ikke falsifiserbar?",
    alternativer: [
      "Klistremerkene rebalanserer kroppens energifrekvens",
      "Klistremerkene er laget av samme materiale som NASA bruker i romdrakter",
      "Jorda er flat",
      "Universet startet med Big Bang",
    ],
    forklaring:
      "Påstanden om energifrekvens er for vag til å kunne vises usann. NASA-påstanden kunne testes, og måtte dementeres. Flat jord er falsifiserbar (og falsifisert), men forsvares med ad hoc-hypoteser.",
  },
  {
    id: "6-psykoanalyse",
    kapittel: "6",
    sporsmal: "Hvorfor mente Popper at psykoanalysen er pseudovitenskap?",
    alternativer: [
      "Den kan forklare all mulig atferd, også motsatte handlinger, og forbyr derfor ingenting",
      "Den hadde for få tilhengere blant forskere",
      "Den var blitt falsifisert av eksperimenter",
      "Den bygget på induksjon i stedet for deduksjon",
    ],
    forklaring:
      "Den forklarer både den som dytter et barn i vannet og den som redder det. En teori som passer med alt, forutsier ingenting. Relativitetsteorien tok derimot en risiko (Eddington 1919).",
  },
  {
    id: "6-quine-duhem",
    kapittel: "6",
    sporsmal: "Hva sier Quine–Duhem-tesen?",
    alternativer: [
      "En hypotese testes aldri alene: slår prediksjonen feil, kan feilen ligge i en av hjelpehypotesene",
      "En hypotese kan aldri falsifiseres, bare bekreftes",
      "To konkurrerende teorier kan ikke sammenlignes",
      "Alle observasjoner er teoriavhengige",
    ],
    forklaring:
      "Prediksjonen har formen «hvis h og h1, h2 …, så e». Slår e feil, vet vi bare at minst én er gal. Popper gir ikke noe kriterium for hvilken som skal forkastes.",
  },
  {
    id: "6-korroborert",
    kapittel: "6",
    sporsmal: "Hva mener Popper med at en hypotese er korroborert?",
    alternativer: [
      "Den har overlevd strenge forsøk på å falsifisere den, men er ikke dermed bekreftet",
      "Den er bekreftet av mange observasjoner",
      "Den er bevist sann",
      "Den er akseptert av et flertall av forskerne",
    ],
    forklaring: "For Popper gir ikke observasjoner induktiv støtte. En korroborert hypotese er bare foreløpig ikke falsifisert, til tross for gode forsøk.",
  },
  {
    id: "7-overraskelse",
    kapittel: "7",
    sporsmal: "Hvorfor bekrefter observasjonen «butleren har hender» nesten ikke hypotesen om at han er øksemorderen?",
    alternativer: [
      "Observasjonen er ikke overraskende hvis hypotesen er usann: nesten alle har hender",
      "Observasjonen er ikke forventet hvis hypotesen er sann",
      "Hypotesen har lav base rate",
      "Observasjonen er ikke falsifiserbar",
    ],
    forklaring:
      "Overraskelsesprinsippet (Sober): e bekrefter h i den grad e er forventet hvis h er sann, og overraskende hvis h er usann. Det første er oppfylt, men ikke det andre.",
  },
  {
    id: "7-baserate",
    kapittel: "7",
    sporsmal:
      "En sykdom rammer 1 av 1 million. En test er 99 % pålitelig, og du tester positivt. Hva er riktig?",
    alternativer: [
      "Det er mer sannsynlig enn før at du er syk, men fortsatt langt mer sannsynlig at testen tok feil",
      "Det er 99 % sannsynlig at du er syk",
      "Testen sier ingenting, siden sykdommen er så sjelden",
      "Det er 50 % sannsynlig at du er syk",
    ],
    forklaring:
      "Av en million testede får 10 000 falskt positivt svar, mens bare én er syk. Base rate-en må tas med: sannsynligheten øker fra 1/1 000 000 til ca. 1/10 000.",
  },
  {
    id: "8-kudos",
    kapittel: "8",
    sporsmal: "En forsker som er finansiert av et oljeselskap, toner ned negative miljøfunn. Hvilken av Mertons normer brytes tydeligst?",
    alternativer: ["Desinteresse", "Kommunisme", "Universalisme", "Organisert skeptisisme"],
    forklaring:
      "Desinteresse: personlige, politiske og økonomiske interesser skal ikke påvirke resultatet. (Det bryter også kommunismen, men interessekonflikten er kjernen.)",
  },
  {
    id: "8-phacking",
    kapittel: "8",
    sporsmal: "Hva er p-hacking?",
    alternativer: [
      "Å kjøre mange analyser på de samme dataene til noe blir statistisk signifikant",
      "At bare positive funn blir publisert",
      "Å stjele data fra andre forskere",
      "At fagfeller avviser artikler fra konkurrenter",
    ],
    forklaring: "Med 1/20 sjanse for falsk positiv per analyse får man fort tilfeldige funn. Det bidrar til replikasjonskrisen. (Det andre alternativet er publikasjonsbias.)",
  },
  {
    id: "9-normalvitenskap",
    kapittel: "9",
    sporsmal: "Hva er normalvitenskap ifølge Kuhn?",
    alternativer: [
      "Problemløsning innenfor et paradigme som ikke selv blir utfordret",
      "Forsøk på å falsifisere de grunnleggende antakelsene i faget",
      "Vitenskap som følger den hypotetisk-deduktive metoden",
      "Perioden der flere paradigmer konkurrerer",
    ],
    forklaring: "Normalvitenskap krever konsensus om rammeverket. Du kan ikke forske på DNA-struktur og samtidig lure på om gener finnes.",
  },
  {
    id: "9-galileo",
    kapittel: "9",
    sporsmal: "«De lo av Galileo, og han fikk rett. De ler av meg også.» Hvorfor er dette et dårlig argument?",
    alternativer: [
      "Nesten alle som bryter med vitenskapelig konsensus, tar feil, så å bli avvist sier lite om at man har rett",
      "Galileo tok egentlig feil",
      "Det er et personargument",
      "Konsensus er alltid riktig",
    ],
    forklaring:
      "Dette kalles Galileo gambit. Konsensus fortjener normalt autoritet. Wegener ble tatt på alvor, men fikk først gjennomslag da platetektonikken ga en mekanisme.",
  },
  {
    id: "9-inkommensurabel",
    kapittel: "9",
    sporsmal: "Hva betyr det at to paradigmer er inkommensurable?",
    alternativer: [
      "De har ikke noe helt nøytralt sammenligningsgrunnlag, for eksempel fordi «masse» betyr ulike ting hos Newton og Einstein",
      "Det ene paradigmet er bevist feil",
      "De handler om helt ulike deler av virkeligheten",
      "De gir nøyaktig de samme prediksjonene",
    ],
    forklaring:
      "Boka viser likevel at sammenligning er mulig: Newton og Einstein er enige om hvor Merkur står på himmelen, men teoriene predikerer ulikt.",
  },
  {
    id: "10-reduksjonisme",
    kapittel: "10",
    sporsmal: "Hvilken påstand om reduksjonisme stemmer med boka?",
    alternativer: [
      "Det er en tese om språk: at alle sanne påstander om X kan oversettes til påstander om Y",
      "Det er det samme som å mene at alt som finnes, er fysisk",
      "Det er synet at vitenskapen bør bruke færrest mulig hypoteser",
      "Det er synet at samfunnsvitenskapene står høyest i vitenskapenes hierarki",
    ],
    forklaring: "Man kan mene at alt er fysisk og likevel avvise reduksjonisme. Vi trenger både nedbørskart og veikart, selv om det er én virkelighet.",
  },

  // ───────────── DEL 3: Natur-, menneske- og teknologisyn ─────────────
  {
    id: "11-teleologi",
    kapittel: "11",
    sporsmal: "«Eikenøtten har eiketreformen i seg og vil bli et eiketre hvis forholdene er gode.» Hvilket natursyn uttrykker dette?",
    alternativer: [
      "Det teleologiske (Aristoteles)",
      "Det mekanistiske (Descartes, Newton)",
      "Det evolusjonære (Darwin)",
      "Det kvantemekaniske",
    ],
    forklaring: "Teleologi forklarer prosesser ut fra målet (telos) de utvikler seg mot. Det mekanistiske synet forklarer ut fra delene og hvordan de virker på hverandre.",
  },
  {
    id: "11-sekundaer",
    kapittel: "11",
    sporsmal: "I det mekanistiske natursynet er fargen på et eple en …",
    alternativer: [
      "sekundær egenskap: sanseapparatets reaksjon på de primære egenskapene",
      "primær egenskap ved materien",
      "formålsårsak",
      "substans",
    ],
    forklaring: "Primære egenskaper er målbare (størrelse, form, bevegelse). Farge, lukt og smak er sekundære.",
  },
  {
    id: "12-kompatibilisme",
    kapittel: "12",
    sporsmal: "Hvordan forstår Hobbes fri vilje?",
    alternativer: [
      "Vi er frie når vi kan gjøre det vi ønsker uten å bli hindret, selv om ønskene er bestemt",
      "Vi er frie fordi vi ikke er bestemt av tidligere årsaker",
      "Fri vilje er en illusjon, og vi har ikke moralsk ansvar",
      "Vi er frie fordi sinnet er en egen, ikke-fysisk substans",
    ],
    forklaring:
      "Hobbes er kompatibilist: frihet er forenlig med determinisme. Friheten er minimal; en møll som flyr mot lyset, er fri på samme måte. Alternativ 2 er libertarianisme, 3 er hard determinisme.",
  },
  {
    id: "12-elisabeth",
    kapittel: "12",
    sporsmal: "Hva var Elisabeth av Böhmens innvending mot Descartes?",
    alternativer: [
      "Bare ting med utstrekning kan påvirke hverandre, så et ikke-utstrakt sinn kan ikke bevege kroppen",
      "Vi kan tvile på at vi tenker, ikke bare på at vi har kropp",
      "Dyr har også sinn",
      "Sinnet kan realiseres på mange ulike måter",
    ],
    forklaring: "Dette er interaksjonsproblemet. Hun forsvarte selv monisme: sinnet er også materielt.",
  },
  {
    id: "12-multippel",
    kapittel: "12",
    sporsmal: "Både mennesker, blekkspruter og i prinsippet marsboere kan ha smerte, selv om hjernene er bygd helt ulikt. Hvilken teori passer dette best med?",
    alternativer: ["Funksjonalisme", "Identitetsteori", "Substansdualisme", "Hard determinisme"],
    forklaring:
      "Multippel realisering: en mental tilstand defineres av sin funksjonelle profil (input, output, andre tilstander), ikke av materialet. Identitetsteorien binder smerte til bestemte nevrale prosesser.",
  },
  {
    id: "12-mary",
    kapittel: "12",
    sporsmal: "Mary vet alt fysisk om fargesyn, men har bare sett svart-hvitt. Når hun ser en rød tomat, lærer hun noe nytt. Hva skal dette vise?",
    alternativer: [
      "At ikke alle fakta er fysiske fakta (kunnskapsargumentet mot fysikalismen)",
      "At sinnet kan utvides med teknologi",
      "At korrekt symbolbehandling ikke gir forståelse",
      "At hjernen er plastisk",
    ],
    forklaring: "Jacksons argument peker på forklaringsgapet mellom tredjepersons- og førstepersonsperspektivet: det vanskelige bevissthetsproblemet.",
  },
  {
    id: "12-otto",
    kapittel: "12",
    sporsmal: "Otto har alzheimer og slår opp adressen til museet i notatboken sin. Inga husker den. Hva mener Clark og Chalmers?",
    alternativer: [
      "Notatboken har samme funksjon som Ingas hukommelse og er en del av Ottos sinn",
      "Otto vet ikke egentlig hvor museet er",
      "Ottos sinn er svekket, mens Ingas er intakt",
      "Bare biologiske prosesser kan være mentale",
    ],
    forklaring: "Tesen om utvidet sinn bygger på funksjonalismen: det er funksjonen som teller, ikke om prosessen skjer i hjernen.",
  },
  {
    id: "data-kinesisk",
    kapittel: "datamaskiner",
    sporsmal: "Hva skal Searles kinesiske rom vise?",
    alternativer: [
      "At korrekt behandling av symboler (syntaks) ikke er det samme som forståelse (semantikk)",
      "At datamaskiner aldri vil bestå Turingtesten",
      "At mennesker ikke kan lære kinesisk av regelbøker",
      "At sinnet er utvidet til omgivelsene",
    ],
    forklaring: "Utenfra ser det ut som rommet forstår kinesisk, men ingen gjør det. Searle mener derfor sterk KI er umulig; datamaskiner kan bare simulere forståelse.",
  },
  {
    id: "13-instrumentalisme",
    kapittel: "13",
    sporsmal: "«En hammer kan brukes til å slå inn spiker eller til å slå noen i hodet. Det er bruken som avgjør.» Hvilket teknologisyn er dette?",
    alternativer: [
      "Teknologisk instrumentalisme",
      "Teknologisk determinisme",
      "Relasjonelt teknologisyn",
      "Transhumanisme",
    ],
    forklaring: "Instrumentalismen ser teknologi som nøytrale verktøy vi styrer. Determinismen og det relasjonelle synet mener at teknologien er verdiladet.",
  },
  {
    id: "13-skraaplan",
    kapittel: "13",
    sporsmal: "«Tillater vi ChatGPT på skolen, slutter elevene å tenke selv.» Hva slags argument er dette, og hva er svakheten?",
    alternativer: [
      "Et skråplansargument: den uønskede følgen følger sjelden nødvendig av det første steget",
      "Et analogiargument med for få likheter",
      "En stråmann av dem som vil tillate ChatGPT",
      "Et deduktivt gyldig argument",
    ],
    forklaring: "Skråplansargumenter («tillater vi A, fører det til B») finnes også hos Platon om skrift og hos Turkle om sosiale medier.",
  },
  {
    id: "13-sosioteknisk",
    kapittel: "13",
    sporsmal: "Hvorfor er bilen vanskelig å regulere bort, ifølge boka?",
    alternativer: [
      "Den inngår i et sosioteknisk nettverk (veier, verksteder, lover, arbeidsplasser) som skaper gjensidig avhengighet",
      "Teknologien bestemmer samfunnsutviklingen fullt ut",
      "Biler er verdinøytrale verktøy",
      "Politikerne mangler teknisk kunnskap",
    ],
    forklaring: "Collingridge: når teknologien først er vevd inn i et nettverk av aktører, blir den vanskelig å endre.",
  },

  // ───────────── DEL 4: Etikk ─────────────
  {
    id: "14-normativ",
    kapittel: "14",
    sporsmal: "Hvilket utsagn er normativt?",
    alternativer: [
      "Eiendomsskatt er urettferdig",
      "De fleste mennesker lyver flere ganger i uken",
      "Oljeprisen bør falle når produksjonen avtar neste år",
      "Flertallet av nordmenn støtter dødshjelp",
    ],
    forklaring:
      "Normative utsagn vurderer. De kan bruke «er», og et «bør» kan uttrykke en deskriptiv prediksjon, slik som om oljeprisen.",
  },
  {
    id: "14-naturlig",
    kapittel: "14",
    sporsmal: "«Økologisk mat er bedre fordi den er mer naturlig.» Hva er problemet?",
    alternativer: [
      "Det er en appell til det naturlige: at noe er naturlig, sier ikke i seg selv at det er godt",
      "Det er en stråmann",
      "Det er kulturrelativisme",
      "Det er ikke noe problem, fordi det naturlige er godt",
    ],
    forklaring:
      "Slutningen går fra «er» til «bør» (Humes lov). Den er like ugyldig som å si at homofili er galt fordi det er «unaturlig», eller rett fordi det er «naturlig».",
  },
  {
    id: "14-kulturrelativisme",
    kapittel: "14",
    sporsmal: "Hvilken innvending mot kulturrelativismen trekker boka frem?",
    alternativer: [
      "Den gjør moralsk fremskritt umulig: kvinnesakskvinnene i 1888 ville ha handlet umoralsk",
      "Den er for tolerant overfor egen kultur",
      "Den bygger på religion",
      "Den gjør moral til et spørsmål om smak og behag",
    ],
    forklaring:
      "Hvis rett er det kulturen til enhver tid mener, var det riktig å nekte kvinner stemmerett i 1888. Det siste alternativet beskriver nihilistisk ekspressivisme.",
  },
  {
    id: "14-ekspressivisme",
    kapittel: "14",
    sporsmal: "«Når jeg sier at dødsstraff er galt, betyr det bare: Dødsstraff, bu!» Hvilket syn er dette?",
    alternativer: ["Ekspressivisme (en form for nihilisme)", "Kulturrelativisme", "Objektivisme", "Utilitarisme"],
    forklaring:
      "Ekspressivismen sier at moralutsagn bare uttrykker følelser og ikke kan være sanne. Innvending: da har ingen rett eller galt om Talibans angrep på Malala.",
  },
  {
    id: "15-vurdering",
    kapittel: "15",
    sporsmal: "Etter en ulykke diskuterer vi om sjåføren bør klandres. Hva slags situasjon er dette?",
    alternativer: ["En vurderingssituasjon", "En beslutningssituasjon", "Et kollektivt handlingsproblem", "En dydsregel"],
    forklaring: "Vurderingssituasjoner er tilbakeskuende (ros eller klander). Beslutningssituasjoner er fremoverskuende: hva bør vi gjøre?",
  },
  {
    id: "16-grensenytte",
    kapittel: "16",
    sporsmal: "Hvorfor kan en utilitarist argumentere for omfordeling fra rike til fattige?",
    alternativer: [
      "Avtakende grensenytte: 100 000 kr gir mye mer lykke til en med lav inntekt enn til en millionær",
      "Fordi en rettferdig fordeling har verdi i seg selv",
      "Fordi de rike har brutt en perfekt plikt",
      "Fordi alle har en naturlig rett til lik inntekt",
    ],
    forklaring: "For utilitaristen teller bare summen av lykke, ikke fordelingen. Men insentiver taler for at noe ulikhet kan gi større sum.",
  },
  {
    id: "16-lykkepille",
    kapittel: "16",
    sporsmal: "Mange ville takket nei til en lykkepille som ga konstant lykke uten forbindelse til virkeligheten. Hvilken teori fanger dette best?",
    alternativer: [
      "Preferanseutilitarisme",
      "Benthams hedonistiske utilitarisme",
      "Kulturrelativisme",
      "Ekspressivisme",
    ],
    forklaring: "Preferanseutilitarismen sier at det gode er at preferanser oppfylles, og man kan foretrekke et ekte liv fremfor mest mulig lykkefølelse.",
  },
  {
    id: "16-singer",
    kapittel: "16",
    sporsmal: "Hva mener Singer med artssjåvinisme?",
    alternativer: [
      "Å gi en like sterk lidelse mindre vekt fordi den rammer et dyr, sammenlignbart med rasisme",
      "At mennesker og dyr må behandles helt likt",
      "At bare mennesker har moralsk status",
      "At arter har egenverdi og må bevares",
    ],
    forklaring: "Lik moralsk status betyr ikke lik behandling: mennesker og dyr har ulike behov. For utilitaristen har arter ikke egenverdi, bare individer.",
  },
  {
    id: "16-krevende",
    kapittel: "16",
    sporsmal: "Du bruker 10 000 kr på en ferie i stedet for å redde sju mennesker fra sult i ett år. Hvilken innvending mot utilitarismen illustrerer dette?",
    alternativer: [
      "At den krever for mye av oss",
      "At den krenker individers rettigheter",
      "At den ikke kan forklare kollektive handlingsproblemer",
      "At den ikke tar hensyn til konsekvenser",
    ],
    forklaring: "Singer biter i det sure eplet: vi handler faktisk galt når vi bruker penger på luksus (eller flaskevann).",
  },
  {
    id: "17-universalitet",
    kapittel: "17",
    sporsmal: "Hvorfor er det galt å gi et falskt løfte ifølge universalitetsformuleringen?",
    alternativer: [
      "Hvis alle ga falske løfter når det passet dem, ville ingen tro på løfter, og handlingsregelen motsier seg selv",
      "Fordi det gir dårlige konsekvenser for den som blir lurt",
      "Fordi en dydig person ikke ville gjort det",
      "Fordi det er forbudt i de fleste kulturer",
    ],
    forklaring: "Det er en perfekt plikt: brudd gir en selvmotsigelse når handlingsregelen gjøres til allmenn lov.",
  },
  {
    id: "17-humanitet",
    kapittel: "17",
    sporsmal: "Hvorfor er det ikke galt å ta en taxi ifølge humanitetsformuleringen?",
    alternativer: [
      "Vi bruker sjåføren som et middel, men ikke bare som et middel: sjåføren har frivillig gått med på det",
      "Fordi konsekvensene er gode for begge",
      "Fordi formuleringen bare gjelder nære relasjoner",
      "Fordi det er en uperfekt plikt",
    ],
    forklaring: "Formuleringen sier aldri bare som middel, men alltid samtidig som mål. Det betyr å respektere andres frihet og fornuft.",
  },
  {
    id: "17-hypotetisk",
    kapittel: "17",
    sporsmal: "«Hvis du vil bestå eksamen, bør du lese.» Hva slags imperativ er dette?",
    alternativer: ["Hypotetisk", "Kategorisk", "Perfekt plikt", "Dydsregel"],
    forklaring: "Et hypotetisk imperativ er betinget av et mål du har. Et kategorisk imperativ gjelder uansett mål.",
  },
  {
    id: "17-uperfekt",
    kapittel: "17",
    sporsmal: "Plikten til å hjelpe andre er hos Kant en …",
    alternativer: [
      "uperfekt plikt: den kan oppfylles på flere måter og ikke i hver eneste situasjon",
      "perfekt plikt som alltid må oppfylles",
      "hypotetisk plikt",
      "plikt bare overfor familien",
    ],
    forklaring: "Uperfekte plikter (hjelpe andre, utvikle egne evner) gir rom for valg. Perfekte plikter (ikke lyve) må alltid oppfylles.",
  },
  {
    id: "18-fronesis",
    kapittel: "18",
    sporsmal: "Hva er fronesis i dydsetikken?",
    alternativer: [
      "Praktisk fornuft: evnen til å se hva for eksempel vennlighet krever i en konkret situasjon",
      "Et godt, blomstrende liv",
      "Et positivt karaktertrekk som mot eller ærlighet",
      "Å følge universelle regler uten unntak",
    ],
    forklaring: "Fronesis er en etisk kompetanse som utvikles over tid. Det andre alternativet er eudaimonia, det tredje en dyd.",
  },
  {
    id: "18-tanke",
    kapittel: "18",
    sporsmal: "En mann kan redde enten kona si eller en fremmed fra drukning, og lurer på om det er moralsk tillatt å redde kona. Hva mener Williams?",
    alternativer: [
      "Han har «en tanke for mye»: moralen kan ikke abstrahere bort hvem vi er og hvem vi står i forhold til",
      "Han bør redde den som gir størst samlet lykke",
      "Han bør redde den fremmede for å være upartisk",
      "Han bør trekke lodd",
    ],
    forklaring: "Williams' poeng er en kritikk av upartiske teorier som utilitarisme og pliktetikk, og brukes til støtte for dydsetikken.",
  },

  // ───────────── DEL 5: Politisk filosofi ─────────────
  {
    id: "19-hard",
    kapittel: "19",
    sporsmal: "Et forbud mot proffboksing, også for voksne som kjenner risikoen, er et eksempel på …",
    alternativer: [
      "hard paternalisme, som bryter med skadeprinsippet",
      "myk paternalisme, som er forenlig med skadeprinsippet",
      "anvendelse av skadeprinsippet",
      "positiv frihet",
    ],
    forklaring: "Skadeprinsippet tillater bare tvang for å hindre skade på andre. Myk paternalisme er å hindre noen midlertidig til de forstår risikoen.",
  },
  {
    id: "19-negativ",
    kapittel: "19",
    sporsmal: "Hva er forskjellen på negativ og positiv frihet?",
    alternativer: [
      "Negativ frihet er frihet fra ytre hindringer; positiv frihet er de aktørinterne evnene som gjør at vi kan utøve selvbestemmelse",
      "Negativ frihet er dårlig, positiv frihet er god",
      "Negativ frihet gjelder staten, positiv frihet gjelder individet",
      "Negativ frihet er ikke-dominans, positiv frihet er ikke-innblanding",
    ],
    forklaring: "Mill forstår negativ frihet som ikke-innblanding. Kant og Wollstonecraft forstår den som ikke-dominans (kap. 20).",
  },
  {
    id: "20-dominans",
    kapittel: "20",
    sporsmal: "En slave har en snill herre som aldri blander seg inn i hva hun gjør. Er hun fri?",
    alternativer: [
      "Nei, ifølge frihet som ikke-dominans: herren kan når som helst utøve vilkårlig makt over henne",
      "Ja, fordi ingen hindrer henne",
      "Ja, ifølge skadeprinsippet",
      "Nei, fordi hun mangler positiv frihet til å delta i lovgivningen",
    ],
    forklaring: "Kant og Wollstonecraft: det avgjørende er at ingen er i posisjon til å utøve vilkårlig makt. Lover kan begrense oss og likevel gjøre oss frie.",
  },
  {
    id: "20-status",
    kapittel: "20",
    sporsmal: "Hvorfor er en slavekontrakt ugyldig ifølge en statusbasert rettighetsteori?",
    alternativer: [
      "Den bryter med rettigheter vi har i kraft av å være vesener med evner som krever respekt",
      "Fordi slaveri gir mer lidelse enn lykke",
      "Fordi flertallet er imot slaveri",
      "Fordi kontrakten ikke er skrevet ned",
    ],
    forklaring: "Mill (interessebasert) begrunner rettigheter med velferd. Den statusbaserte teorien sier at rettighetene gjelder uansett konsekvenser.",
  },
  {
    id: "20-okin",
    kapittel: "20",
    sporsmal: "Hva kjennetegner Okins egalitære liberale feminisme?",
    alternativer: [
      "Like formelle rettigheter er ikke nok: kjønnsroller og arbeidsdeling hjemme gir skjevheter staten må motvirke",
      "Staten skal ikke forskjellsbehandle kjønnene, men ellers blande seg minst mulig",
      "Kjønnene er grunnleggende ulike, og kvinners bidrag må verdsettes høyere",
      "Kjønn er en irrelevant kategori i politikken",
    ],
    forklaring: "Det andre alternativet er klassisk liberal feminisme, det tredje forskjellsfeminisme.",
  },
  {
    id: "21-atomisme",
    kapittel: "21",
    sporsmal: "Hva kritiserer Charles Taylor med begrepet politisk atomisme?",
    alternativer: [
      "Synet at goder er grunnleggende individuelle og at rettigheter går foran forpliktelser overfor samfunnet",
      "Synet at staten bør eie produksjonsmidlene",
      "Synet at bare eksperter bør styre",
      "Synet at alt i samfunnet kan forklares fysisk",
    ],
    forklaring: "Taylor mener vi er avhengige av samfunnet for å bli frie individer. Hans holistiske liberalisme kan begrunne at staten støtter kultur.",
  },
  {
    id: "21-tilpassede",
    kapittel: "21",
    sporsmal: "En kvinne som aldri har fått skolegang, sier hun er fornøyd uten. Hvorfor mener Nussbaum at tilfredshet da er et dårlig mål?",
    alternativer: [
      "Tilpassede preferanser: vi tilpasser ønskene våre til situasjonen vi er i",
      "Fordi kvinnen ikke forstår sitt eget beste",
      "Fordi utdanning er en perfekt plikt",
      "Fordi flertallet mener utdanning er viktig",
    ],
    forklaring: "Derfor er det kapabiliteter, de faktiske mulighetene til å fungere, og ikke tilfredshet som er politikkens mål.",
  },
  {
    id: "21-forskjell",
    kapittel: "21",
    sporsmal: "Samisk språkopplæring for å bevare samisk kultur er et eksempel på …",
    alternativer: ["forskjellspolitikk", "likeverdighetspolitikk", "politisk atomisme", "nøytralitetsidealet"],
    forklaring: "Forskjellspolitikk vil anerkjenne og bevare det særegne ved grupper. Likeverdighetspolitikk vil ha like rettigheter for alle.",
  },
  {
    id: "22-deliberativ",
    kapittel: "22",
    sporsmal: "Hva kreves for at en beslutning skal være legitim ifølge det deliberative demokratiet (Habermas)?",
    alternativer: [
      "At alle berørte har hatt frie og like muligheter til å delta i argumenterende meningsbrytning først",
      "At flertallet har stemt for",
      "At eksperter har godkjent den",
      "At den maksimerer samlet nytte",
    ],
    forklaring: "«Kraften i de bedre argumenter» skal avgjøre. Valgdemokratiet summerer derimot bare preferanser.",
  },
  {
    id: "22-avpolitisering",
    kapittel: "22",
    sporsmal: "Et spørsmål om hvor mye natur vi skal ofre for vindkraft overlates helt til ingeniører som et «teknisk spørsmål». Hvilken fare peker dette på?",
    alternativer: [
      "Avpolitisering: genuin uenighet om verdier gjøres om til tekniske spørsmål",
      "Direkte demokrati",
      "Folkesuverenitet",
      "Maktfordeling",
    ],
    forklaring: "Tekniske eksperter kan mye om midler, men ikke nødvendigvis om mål (Goldman: ekspert på noe, ikke alt).",
  },
  {
    id: "22-parlamentarisme",
    kapittel: "22",
    sporsmal: "Hva kjennetegner negativ parlamentarisme, slik vi har i Norge?",
    alternativer: [
      "Regjeringen sitter til den felles ved et mistillitsforslag",
      "Regjeringen må godkjennes av parlamentet ved et innsettingsvedtak",
      "Folket velger regjeringen direkte",
      "Regjeringen og parlamentet er helt uavhengige",
    ],
    forklaring: "Ved positiv parlamentarisme må regjeringen godkjennes aktivt av parlamentet.",
  },

  // ───────────── DEL 6: Tilleggstekster ─────────────
  {
    id: "ing-klander",
    kapittel: "ingenioransvar",
    sporsmal: "Hvilken av disse er ikke en av de fire betingelsene for klanderverdighet hos van de Poel og Royakkers?",
    alternativer: [
      "At handlingen var i strid med arbeidsgiverens instruks",
      "At man har gjort noe galt (brutt en norm)",
      "At det er en kausal forbindelse mellom handlingen og skaden",
      "At man kunne forutsett følgen og handlet fritt",
    ],
    forklaring: "Betingelsene er: normbrudd, kausal forbindelse, forutsigbarhet og handlefrihet. Moralsk ansvar kan dessuten trumfe rolleansvar.",
  },
  {
    id: "ing-separatisme",
    kapittel: "ingenioransvar",
    sporsmal: "«Once the rockets go up, who cares where they come down? That's not my department.» Hvilken modell uttrykker dette?",
    alternativer: [
      "Separatisme (den tredelte modellen)",
      "Teknokrati",
      "Varsling",
      "Aktivt ansvar",
    ],
    forklaring: "Politikere setter mål, ingeniører utvikler og brukere bruker. Ingeniøren har da bare ansvar for det tekniske.",
  },
  {
    id: "ing-aktivt",
    kapittel: "ingenioransvar",
    sporsmal: "En ingeniør gjennomgår designet en ekstra gang før produksjon for å unngå mulige skader. Hva slags ansvar tar hun?",
    alternativer: ["Aktivt ansvar", "Passivt ansvar", "Klanderverdighet", "Rolleansvar alene"],
    forklaring: "Aktivt ansvar er fremoverskuende (før noe skjer). Passivt ansvar er tilbakeskuende: å redegjøre for og eventuelt klandres for noe som har gått galt.",
  },
  {
    id: "miljo-allmenning",
    kapittel: "miljoetikk",
    sporsmal: "Hver fisker tjener på å fiske litt mer, men til sammen fisker de bestanden tom. Hva kalles dette?",
    alternativer: ["Allmenningens tragedie", "Den usynlige hånd", "Diskontering", "Grønnvasking"],
    forklaring: "Hardin: det er ikke rasjonelt for én å moderere seg så lenge ikke alle gjør det. Løsningen er regulering.",
  },
  {
    id: "miljo-oko",
    kapittel: "miljoetikk",
    sporsmal: "Hvilket syn mener at en elv eller et økosystem som helhet har egenverdi?",
    alternativer: ["Økosentrisme", "Biosentrisme", "Antroposentrisme", "Utilitarisme"],
    forklaring: "Økosentrismen (Leopold) er holistisk. Biosentrismen gir egenverdi til alle levende individer, men ikke til ikke-levende deler.",
  },
  {
    id: "baer-svak",
    kapittel: "baerekraft",
    sporsmal: "En kommune godtar å bygge ned et viktig naturområde fordi de økonomiske gevinstene er store. Hvilken bærekraftforståelse er dette?",
    alternativer: ["Svak bærekraft", "Sterk bærekraft", "Føre-var-prinsippet", "Økosentrisme"],
    forklaring: "Svak bærekraft lar miljøet «veksles» mot økonomiske og sosiale gevinster. Sterk bærekraft gir miljøet forrang.",
  },
  {
    id: "baer-forevar",
    kapittel: "baerekraft",
    sporsmal: "Hva sier føre-var-prinsippet?",
    alternativer: [
      "Kan en handling gi alvorlig eller uopprettelig skade, ligger bevisbyrden på den som vil gjennomføre den",
      "Ingen handlinger med risiko for miljøskade er tillatt",
      "Man bør vente til forskerne er helt sikre på at skaden vil skje",
      "Fremtidig skade skal regnes om til nåverdi",
    ],
    forklaring: "Prinsippet ligger et sted mellom sterk og svak bærekraft. Det forbyr ikke all risiko, men snur bevisbyrden.",
  },
  {
    id: "data-frame",
    kapittel: "datamaskiner",
    sporsmal: "Magnus Carlsen kan bruke sjakkstrategi i andre spill, mens en sjakkmaskin ikke kan det. Hvilket problem illustrerer dette?",
    alternativer: [
      "Berammingsproblemet (the frame problem)",
      "Det vanskelige bevissthetsproblemet",
      "Interaksjonsproblemet",
      "Induksjonsproblemet",
    ],
    forklaring: "Maskinen vet ikke hva i bakgrunnen som er endret fra én kontekst til en annen, med mindre det er programmert inn. Dreyfus: vi handler ut fra en livsverden.",
  },
  {
    id: "data-bevissthet",
    kapittel: "datamaskiner",
    sporsmal: "Hva er forskjellen på intelligens og bevissthet i teksten om datamaskiner?",
    alternativer: [
      "Intelligens er noe man gjør (problemløsning); bevissthet er noe man er (subjektiv erfaring)",
      "Det er ingen forskjell: en intelligent maskin er bevisst",
      "Intelligens er biologisk, bevissthet er teknisk",
      "Bevissthet kan måles med Turingtesten",
    ],
    forklaring: "Mer kunstig intelligens gir derfor ikke automatisk kunstig bevissthet. Turingtesten måler atferd.",
  },
  {
    id: "fjell-diskontering",
    kapittel: "fjelland",
    sporsmal: "Hvorfor kritiserer Fjelland bruken av diskontering i nytte-kostnadsanalyser?",
    alternativer: [
      "Fremtidige miljøskader veier lite i nåverdi, noe som oppmuntrer til å ta gevinsten nå og skyve kostnaden fremover",
      "Den gjør fremtidige gevinster for store",
      "Den tar ikke hensyn til penger",
      "Den er ikke basert på utilitarisme",
    ],
    forklaring: "Med 5 % rente er 100 kr om 45 år bare verdt ca. 11 kr i dag. Hans Jonas: vi har ansvar også for dem som ikke er født ennå.",
  },
];
