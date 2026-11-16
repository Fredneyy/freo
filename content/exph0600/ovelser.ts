// Kortsvar med modellsvar og caseoppgaver med løsningsskisse for EXPH0600.
// Innholdet bygger på sammendragene i kapitler.ts (kontrollert mot Tenk!).

export type Kortsvar = {
  id: string;
  kapittel: string;
  sporsmal: string;
  modellsvar: string;
  sjekkliste: string[];
};

export type Case = {
  id: string;
  tittel: string;
  kapitler: string[];
  tekst: string;
  oppgave: string;
  skisse: { steg: string; tekst: string }[];
};

export const kortsvar: Kortsvar[] = [
  // ── Del 1
  {
    id: "ks-straamann",
    kapittel: "1",
    sporsmal: "Hva er en stråmann, og hvilke debattnormer bryter stråmannsargumentasjon?",
    modellsvar:
      "En stråmann er en gjengivelse av motpartens synspunkt som gjør det mindre rimelig eller mer kontroversielt enn det egentlig er. Stråmannsargumentasjon er å argumentere mot denne forvrengte versjonen. Eksempel: Én debattant mener privat bruk av cannabis bør legaliseres, og motparten svarer at «fri flyt av narkotika er en dårlig idé». Det skaper en skinnuenighet og avsporer debatten. Stråmannsargumentasjon bryter alle tre debattnormene: den feilinformerer om hva motparten mener (norm 2, riktighet), argumentene treffer bare stråmannen og ikke det reelle standpunktet (norm 3, relevans), og den gir derfor ingen grunner i den saken som faktisk diskuteres (norm 1).",
    sjekkliste: [
      "Definisjon: gjengir motpartens syn som mindre rimelig/mer kontroversielt",
      "Konkret eksempel",
      "Skinnuenighet / avsporing",
      "Bryter riktighet (feilinformerer)",
      "Bryter relevans (treffer ikke det reelle standpunktet)",
    ],
  },
  {
    id: "ks-implisitt",
    kapittel: "2",
    sporsmal: "Hva er en implisitt påstand, og hvorfor er det viktig å få den frem i en argumentasjonsanalyse?",
    modellsvar:
      "En implisitt påstand er en påstand argumentasjonen bygger på, men som ikke blir sagt. Ofte er det en normativ premiss. I «Stemmerettsalderen bør senkes fordi det vil øke valgdeltakelsen» er den implisitte påstanden at økt valgdeltakelse er ønskelig. Uten den gir ikke argumentet noen grunn for standpunktet, så den inngår sammen med den uttalte påstanden i et sammensatt argument. Det er viktig å få den frem fordi den gjør strukturen synlig, og fordi den ofte er argumentets svake punkt: det er den som må vurderes for å avgjøre om argumentet holder. Noen ganger blir kontroversielle antakelser utelatt med vilje.",
    sjekkliste: [
      "Definisjon: påstand som forutsettes, men ikke sies",
      "Ofte normativ",
      "Eksempel med standpunkt og argument",
      "Inngår i et sammensatt argument",
      "Kan være svakheten som må vurderes",
    ],
  },
  {
    id: "ks-deduksjon",
    kapittel: "3",
    sporsmal: "Forklar forskjellen på deduktive og induktive argumenter.",
    modellsvar:
      "I et deduktivt argument skal standpunktet følge med nødvendighet: hvis premissene er riktige, er det umulig at konklusjonen er feil, på grunn av argumentets logiske form. Et eksempel er modus ponens: «Hvis det regner, blir gaten våt. Det regner. Altså blir gaten våt.» Et gyldig deduktivt argument er maksimalt relevant. I et induktivt argument skal premissene bare sannsynliggjøre standpunktet, og relevansen kommer i grader. Eksempler er induktiv generalisering (fra et utvalg til en populasjon, vurdert etter utvalgets størrelse og representativitet), analogiargumenter og abduksjon (slutning til beste forklaring). Induktive konklusjoner kan være feil selv om premissene er sanne.",
    sjekkliste: [
      "Deduksjon: konklusjonen følger med nødvendighet (logisk form)",
      "Eksempel på deduktiv form",
      "Induksjon: sannsynliggjør, relevans i grader",
      "Minst én induktiv type med kriterier",
      "Induktiv konklusjon kan være feil med sanne premisser",
    ],
  },
  {
    id: "ks-abduksjon",
    kapittel: "3",
    sporsmal: "Hva er en abduksjon, og hvilke kriterier kan vi bruke for å vurdere den?",
    modellsvar:
      "Abduksjon er en slutning til den beste forklaringen: fra noe vi har observert, slutter vi til den hypotesen som best forklarer det. Eksempel: Det er fotspor i snøen og kakene er borte, så den beste forklaringen er at noen har vært i huset. Abduksjoner vurderes etter fire kriterier: forklaringskraft (hvor mye og hvor godt forklarer den?), konservativitet (passer den med det vi ellers vet?), enkelhet (færre antakelser er bedre), og konkurranse (er den bedre enn alternative forklaringer?). Abduksjon er induktiv, så konklusjonen kan være feil selv om observasjonene stemmer.",
    sjekkliste: [
      "Definisjon: slutning til beste forklaring",
      "Eksempel",
      "Forklaringskraft",
      "Konservativitet og enkelhet",
      "Sammenligning med alternative forklaringer",
    ],
  },
  // ── Del 2
  {
    id: "ks-falsifiserbar",
    kapittel: "6",
    sporsmal: "Hva menes med at en teori er falsifiserbar, og hvorfor mente Popper at dette skiller vitenskap fra pseudovitenskap?",
    modellsvar:
      "En påstand er falsifiserbar hvis det er mulig å vise at den er usann, dersom den er usann. Popper foreslo falsifiserbarhet som demarkasjonskriterium: bare påstander som tar en risiko, er vitenskapelige. Relativitetsteorien predikerte at lys bøyes av tyngdekraften; hadde Eddingtons målinger i 1919 vist noe annet, ville den vært falsifisert. Psykoanalysen kunne derimot forklare både den som dytter et barn i vannet og den som redder det, og en teori som passer med alt, forbyr ingenting og forklarer egentlig ingenting. Pseudovitenskap er ofte for vag til å testes (klistremerker som «rebalanserer energifrekvensen»), eller beskyttes med ad hoc-hypoteser.",
    sjekkliste: [
      "Definisjon av falsifiserbar",
      "Demarkasjonskriterium",
      "Eksempel på risikabel prediksjon (Eddington)",
      "Psykoanalysen forklarer alt → ingenting",
      "Vaghet eller ad hoc-hypoteser",
    ],
  },
  {
    id: "ks-paradigme",
    kapittel: "9",
    sporsmal: "Forklar Kuhns begreper paradigme og normalvitenskap, og hvordan et paradigmeskifte skjer.",
    modellsvar:
      "Et paradigme er rammeverket som organiserer forskningen i en disiplin: verdier (hva som er gode metoder og interessante spørsmål), teoretiske forutsetninger, begrepsapparat og mønstereksempler. Normalvitenskap er problemløsning innenfor et paradigme som selv ikke utfordres; den krever konsensus, for vi kan ikke teste alt samtidig. Resultater som ikke passer, kalles anomalier. De forklares ofte bort eller legges til side, men hoper de seg opp, blir det krise. Da kan det komme en revolusjon der rammeverket byttes ut, for eksempel fra et geosentrisk til et heliosentrisk verdensbilde. Det nye paradigmet kan være delvis inkommensurabelt med det gamle: «masse» betyr ikke det samme hos Newton og Einstein.",
    sjekkliste: [
      "Paradigme som faglig matrise (minst to elementer)",
      "Normalvitenskap = problemløsning, krever konsensus",
      "Anomalier → krise → revolusjon",
      "Eksempel på paradigmeskifte",
      "Inkommensurabilitet (gjerne)",
    ],
  },
  {
    id: "ks-baserate",
    kapittel: "7",
    sporsmal: "Forklar overraskelsesprinsippet og hvorfor base rate er viktig når vi vurderer evidens.",
    modellsvar:
      "Overraskelsesprinsippet (Sober) sier at en observasjon e bekrefter en hypotese h i den grad e er forventet hvis h er sann, og overraskende hvis h er usann. At butleren har hender, bekrefter knapt at han er morderen, fordi nesten alle har hender. En øks med offerets DNA i butlerens rom bekrefter mye mer. Base rate er sannsynligheten for h før den nye evidensen. Den må tas med: rammer en sykdom 1 av en million og en test er 99 % pålitelig, vil en million testede gi rundt 10 000 falske positive og bare én syk. En positiv test gjør det altså mer sannsynlig at du er syk, men det er fortsatt langt mer sannsynlig at testen tok feil.",
    sjekkliste: [
      "Prinsippets to ledd (forventet hvis sann, overraskende hvis usann)",
      "Eksempel (butleren)",
      "Definisjon av base rate",
      "Talleksempel med sjelden sykdom",
      "Konklusjon: positiv test ≠ sannsynligvis syk",
    ],
  },
  {
    id: "ks-kudos",
    kapittel: "8",
    sporsmal: "Gjør rede for Mertons KUDOS-normer.",
    modellsvar:
      "Merton (1942) formulerte fire sosiale normer for vitenskapen. Kommunisme: resultater er felles eie og skal deles, ikke holdes hemmelige. Universalisme: påstander vurderes etter upersonlige kriterier, ikke etter forskerens kjønn, klasse eller nasjonalitet. Desinteresse: personlige, politiske og økonomiske interesser skal ikke påvirke resultatene; en forsker finansiert av et oljeselskap som tonet ned miljøfunn, ville bryte denne normen. Organisert skeptisisme: alle påstander skal utsettes for kritikk, blant annet gjennom fagfellevurdering. Normene er ikke en beskrivelse av hvordan forskere alltid oppfører seg, men idealer som gjør at vitenskapen som fellesskap kan produsere pålitelig kunnskap.",
    sjekkliste: ["Kommunisme", "Universalisme", "Desinteresse", "Organisert skeptisisme", "Minst ett eksempel på brudd"],
  },
  // ── Del 3
  {
    id: "ks-dualisme",
    kapittel: "12",
    sporsmal: "Hva er substansdualisme? Presenter Descartes' argument og en innvending.",
    modellsvar:
      "Substansdualisme er synet at kropp og sinn er to grunnleggende forskjellige substanser. Descartes mente kroppen er res extensa, noe utstrakt og fysisk, mens sinnet er res cogitans, noe tenkende og ikke-utstrakt. Argumentet hans: Jeg kan tvile på at jeg har en kropp, fordi sansene kan lure meg (drømmer, en ond ånd), men jeg kan ikke tvile på at jeg tenker: «Jeg tenker, altså er jeg.» Siden det ene kan betviles og det andre ikke, må de være forskjellige ting. Elisabeth av Böhmen innvendte at bare ting med utstrekning kan påvirke hverandre kausalt. Hvordan kan da et ikke-utstrakt sinn bevege kroppen, og smerte i kroppen påvirke sinnet? Dette interaksjonsproblemet fikk Descartes aldri løst tilfredsstillende.",
    sjekkliste: [
      "Definisjon: to substanser",
      "Res extensa vs. res cogitans",
      "Tvilsargumentet / cogito",
      "Elisabeth av Böhmens interaksjonsproblem",
      "Forklarer hvorfor det er et problem (kausalitet krever utstrekning)",
    ],
  },
  {
    id: "ks-funksjonalisme",
    kapittel: "12",
    sporsmal: "Forklar forskjellen på identitetsteori og funksjonalisme.",
    modellsvar:
      "Begge er forenlige med fysikalisme, men de svarer ulikt på hva en mental tilstand er. Identitetsteorien sier at mentale tilstander er identiske med bestemte nevrale tilstander, slik vann er H2O: smerte er for eksempel C-fiberfyring. Funksjonalismen sier at en mental tilstand er definert av sin funksjonelle profil: hva som forårsaker den (skade), hva den fører til (å rope «au»), og forholdet til andre mentale tilstander (frykt). Dermed kan samme tilstand realiseres i ulike materialer: dyr, marsboere, kanskje datamaskiner. Det kalles multippel realisering. Nevroplastisitet taler mot identitetsteorien: ALS-pasienter kan kommunisere ved hjelp av andre nevroner og BCI. Searles kinesiske rom og kunnskapsargumentet er innvendinger mot funksjonalismen.",
    sjekkliste: [
      "Identitetsteori: mental tilstand = nevral tilstand (eksempel)",
      "Funksjonalisme: funksjonell profil (input, output, andre tilstander)",
      "Multippel realisering",
      "Innvending mot identitetsteori",
      "Innvending mot funksjonalisme",
    ],
  },
  {
    id: "ks-teknologisyn",
    kapittel: "13",
    sporsmal: "Gjør rede for de tre teknologisynene: instrumentalisme, determinisme og det relasjonelle synet.",
    modellsvar:
      "Teknologisk instrumentalisme ser teknologi som verdinøytrale verktøy: en hammer kan slå inn spiker eller skade noen, og det er bruken som avgjør. Vi styrer utviklingen med politiske, juridiske og økonomiske virkemidler. Teknologisk determinisme mener at teknologien i stor grad legger premissene for samfunnet, og at vi reagerer heller enn å handle; atomteknologien formet politikken etter 1940. Den kan være optimistisk eller dystopisk, og ser teknologi som verdiladet. Det relasjonelle synet (Ihde, Latour, Verbeek) avviser det skarpe skillet mellom menneske og teknologi som de to andre bygger på: vi former teknologien, og den former oss. Hver teknologi må derfor undersøkes i sin kontekst. Boka konkluderer med at teknologi kan forme, men ikke bestemme, og at vi trenger teknologibevissthet.",
    sjekkliste: [
      "Instrumentalisme: nøytralt verktøy, bruken avgjør (eksempel)",
      "Determinisme: teknologien legger premissene (eksempel)",
      "Relasjonelt: gjensidig forming, kontekst",
      "Verdinøytral vs. verdiladet",
      "Teknologibevissthet (gjerne)",
    ],
  },
  {
    id: "ks-natursyn",
    kapittel: "11",
    sporsmal: "Sammenlign det teleologiske og det mekanistiske natursynet.",
    modellsvar:
      "Det teleologiske natursynet (Aristoteles) forklarer naturlige prosesser ut fra målet de utvikler seg mot: eikenøtten har eiketreformen i seg og vil bli et eiketre hvis forholdene er gode. Ting er enheter av form og stoff, og formålsårsaken er viktigst. Universet er et ordnet kosmos med jorda i sentrum. Det mekanistiske natursynet (Galilei, Descartes, Newton) forklarer derimot alt ut fra delene og hvordan de virker på hverandre etter naturlover, som i en maskin. Bare primære egenskaper som størrelse, form og bevegelse er virkelige egenskaper ved materien; farge og smak er sekundære. Der teleologien spør «hva er det til for?», spør mekanismen «hva forårsaket det?». Mekanismen gir et deterministisk bilde av naturen, noe som skaper problemet med fri vilje.",
    sjekkliste: [
      "Teleologi: forklaring ut fra mål (eksempel)",
      "Form og stoff / formålsårsak",
      "Mekanisme: deler og naturlover, maskinmetafor",
      "Primære vs. sekundære egenskaper",
      "Sammenligning, ikke bare to beskrivelser",
    ],
  },
  // ── Del 4
  {
    id: "ks-kulturrelativisme",
    kapittel: "14",
    sporsmal: "Hva er kulturrelativisme? Presenter to innvendinger.",
    modellsvar:
      "Kulturrelativisme er synet at normers gyldighet er relativ til kulturen de tilhører: moral er konvensjoner, slik høyrekjøring er det. Den bygger på observasjonen at normer varierer, og trekker et krav om toleranse: vi har ikke grunnlag for å kritisere andre kulturer. Én innvending er at uenighet ikke viser at ingen har rett: folk er uenige om vaksiner også, men vaksiner virker. En annen er at kulturrelativismen gjør moralsk fremskritt umulig. Var det rett det kulturen mente, var det riktig å nekte kvinner stemmerett i 1888, og kvinnesakskvinnene handlet umoralsk. Dessuten gir toleranse mer mening som en allmenngyldig norm enn som et utslag av relativisme.",
    sjekkliste: [
      "Definisjon: gyldighet relativ til kultur",
      "Empirisk grunnlag og toleransekrav",
      "Innvending 1 (uenighet ≠ ingen sannhet)",
      "Innvending 2 (moralsk fremskritt / stemmerett)",
      "Konkrete eksempler",
    ],
  },
  {
    id: "ks-nytteprinsippet",
    kapittel: "16",
    sporsmal: "Hva går nytteprinsippet ut på? Presenter en innvending mot utilitarismen.",
    modellsvar:
      "Nytteprinsippet sier at vi alltid bør velge det handlingsalternativet som gir størst sum av gode konsekvenser for alle som berøres. Bare konsekvensene har moralsk betydning. For Bentham er det gode lykke, forstått som nytelse og fravær av smerte, og vi beregner den ut fra hvor mange som berøres og hvor intens og varig følelsen er. Mill skiller mellom høyere og lavere gleder, og preferanseutilitarister ser oppfylte preferanser som det gode. En innvending er at utilitarismen krever for mye: 10 000 kroner brukt på ferie kunne reddet sju mennesker fra sult i et år, så nesten alt vi gjør blir umoralsk. Singer biter i det sure eplet og mener vi faktisk handler galt. En annen innvending er at maksimering kan krenke enkeltindividers rettigheter.",
    sjekkliste: [
      "Størst sum gode konsekvenser for alle berørte",
      "Bare konsekvenser teller",
      "Hva som er godt (Bentham, gjerne Mill/preferanser)",
      "Én innvending forklart med eksempel",
      "Mulig svar på innvendingen (gjerne)",
    ],
  },
  {
    id: "ks-kant",
    kapittel: "17",
    sporsmal: "Gjør rede for Kants kategoriske imperativ i to formuleringer.",
    modellsvar:
      "Det kategoriske imperativet er et ubetinget moralsk krav som gjelder uansett hvilke mål vi har, i motsetning til hypotetiske imperativer som «vil du bestå, bør du lese». Universalitetsformuleringen: Handle bare etter en handlingsregel som du samtidig kan ville skal bli en allmenn lov. Et falskt løfte er galt fordi ingen ville tro på løfter hvis alle ga falske løfter når det passet dem; handlingsregelen motsier seg selv. Det gir en perfekt plikt. Humanitetsformuleringen: Handle slik at du behandler menneskeheten, i deg selv og andre, aldri bare som et middel, men alltid samtidig som et mål. Å ta en taxi er greit, fordi sjåføren frivillig har gått med på det; å lure noen er det ikke, fordi det overser deres frihet og fornuft.",
    sjekkliste: [
      "Kategorisk vs. hypotetisk",
      "Universalitetsformuleringen",
      "Eksempel (falskt løfte)",
      "Humanitetsformuleringen («ikke bare som middel»)",
      "Eksempel (taxi eller lignende)",
    ],
  },
  {
    id: "ks-dydsetikk",
    kapittel: "18",
    sporsmal: "Hva kjennetegner dydsetikken? Forklar begrepet fronesis.",
    modellsvar:
      "Dydsetikken spør ikke først «hvilken handling er rett?», men «hva slags person bør jeg være?». En rett handling er det en dydig person typisk ville gjort i situasjonen. Dyder er positive karaktertrekk, som mot, ærlighet, rettferdighet og omsorg, mens laster er det motsatte. Fronesis, eller praktisk fornuft, er evnen til å se hva for eksempel ærlighet eller vennlighet krever i en konkret situasjon. Det er ikke å følge en regel, men en etisk kompetanse som utvikles over tid når vi prøver å handle dydig. Veien til et godt, blomstrende liv (eudaimonia) går gjennom å utvikle fronesis. En innvending er at dydsetikken gir lite handlingsveiledning; Hursthouse svarer at vi kan hente dydsregler som «vær ærlig».",
    sjekkliste: [
      "Aktørorientert: hva slags person",
      "Rett handling = det en dydig person ville gjort",
      "Dyd/last med eksempler",
      "Fronesis forklart",
      "Eudaimonia eller innvending/svar",
    ],
  },
  // ── Del 5
  {
    id: "ks-skadeprinsippet",
    kapittel: "19",
    sporsmal: "Hva er skadeprinsippet? Forklar forskjellen på myk og hard paternalisme.",
    modellsvar:
      "Skadeprinsippet (Mill) sier at makt mot kompetente, velinformerte voksne bare er tillatt for å hindre skade på andre. Vårt eget beste er ikke tilstrekkelig grunn. Paternalisme er å begrense noens frihet av hensyn til deres eget beste. Myk paternalisme er å hindre noen midlertidig for å sikre at de forstår risikoen, og er forenlig med skadeprinsippet. Et eksempel er helsepersonell som informerer en pasient, mens en informert og myndig pasient får siste ord. Hard paternalisme er å hindre noen selv om de er informert og forstår risikoen, for eksempel et forbud mot proffboksing. Den bryter med skadeprinsippet.",
    sjekkliste: [
      "Skadeprinsippet presist (bare skade på andre)",
      "Definisjon av paternalisme",
      "Myk paternalisme + eksempel",
      "Hard paternalisme + eksempel",
      "Forholdet til skadeprinsippet",
    ],
  },
  {
    id: "ks-frihet",
    kapittel: "20",
    sporsmal: "Forklar forskjellen på frihet som ikke-innblanding og frihet som ikke-dominans.",
    modellsvar:
      "Begge er former for negativ frihet. Frihet som ikke-innblanding (Mill) betyr fravær av hindringer påført av andre, som tvang og trusler. Frihet som ikke-dominans (Kant, Wollstonecraft) betyr at ingen er i posisjon til å utøve vilkårlig makt over oss. Forskjellen vises med slaven som har en snill herre: ingen blander seg inn i hva hun gjør, så etter det første synet er hun fri. Etter det andre er hun ufri, fordi herren når som helst kan bestemme over henne. Ikke-dominans forklarer også hvordan lover kan begrense oss og likevel gjøre oss frie: de beskytter oss mot vilkårlig makt. Positiv frihet er noe annet: evnen til selv å realisere egne mål, eller å delta i lovgivningen.",
    sjekkliste: [
      "Ikke-innblanding (Mill)",
      "Ikke-dominans (Kant/Wollstonecraft)",
      "Slaven med en snill herre",
      "Lover kan gjøre oss frie",
      "Avgrensning mot positiv frihet",
    ],
  },
  {
    id: "ks-demokrati",
    kapittel: "22",
    sporsmal: "Sammenlign valgdemokrati og deliberativt demokrati.",
    modellsvar:
      "I valgdemokratiet (aggregativt demokrati) blir beslutninger tatt ved å summere individuelle preferanser gjennom stemmegivning, og flertallet avgjør. I det deliberative demokratiet (Habermas) er beslutninger bare legitime hvis alle berørte har hatt frie og like muligheter til å delta i en argumenterende meningsbrytning først. Det er «kraften i det bedre argument» som skal avgjøre, og flertallsvedtak er aldri endelige. Valgdemokratiet tar preferansene som gitte, mens det deliberative mener at preferansene kan og bør endres gjennom offentlig debatt. Det kobler demokratiteorien til debattnormene i kapittel 1. Et problem for det deliberative idealet er at det er krevende i praksis, og at ikke alle har like gode forutsetninger for å delta.",
    sjekkliste: [
      "Valgdemokrati: summerer preferanser, flertall",
      "Deliberativt: fri og lik deltakelse i argumentasjon (Habermas)",
      "«Kraften i det bedre argument»",
      "Forskjell: gitte vs. endrede preferanser",
      "Sammenligning eller kritikk",
    ],
  },
  {
    id: "ks-kapabilitet",
    kapittel: "21",
    sporsmal: "Hva er en kapabilitet, og hvorfor er tilpassede preferanser et argument for kapabilitetstilnærmingen?",
    modellsvar:
      "En kapabilitet er de faktiske mulighetene et menneske har til å utøve en typisk menneskelig funksjon, som å være frisk, utdanne seg eller delta politisk (Nussbaum, Sen). Det er kapabilitetene, ikke funksjonene selv, som er politikkens mål: staten skal sikre muligheten, men overlate valget til den enkelte. Tilpassede preferanser betyr at vi tilpasser ønskene våre til situasjonen vi er i. En kvinne som aldri har fått skolegang, kan si at hun er fornøyd uten. Hvis politikken bare måler tilfredshet eller oppfylte preferanser, vil den overse urettferdighet som folk har vennet seg til. Derfor er kapabiliteter et bedre mål på livskvalitet enn tilfredshet.",
    sjekkliste: [
      "Definisjon av kapabilitet",
      "Kapabilitet vs. funksjon (muligheten, ikke valget)",
      "Tilpassede preferanser forklart",
      "Eksempel",
      "Hvorfor tilfredshet er et dårlig mål",
    ],
  },
  // ── Del 6
  {
    id: "ks-ansvar",
    kapittel: "ingenioransvar",
    sporsmal: "Hva menes med aktivt og passivt ansvar? Når kan en person sies å være klanderverdig?",
    modellsvar:
      "Passivt ansvar er tilbakeskuende: etter at noe har gått galt, kan man måtte redegjøre for hva som skjedde (accountability) og eventuelt klandres (blameworthiness). Aktivt ansvar er fremoverskuende: før noe har skjedd, har man en plikt til å handle slik at skade unngås og gode konsekvenser fremmes. Ifølge van de Poel og Royakkers er en person klanderverdig når fire betingelser er oppfylt: 1) personen har brutt en norm eller gjort noe galt, 2) det er en kausal forbindelse mellom handlingen og skaden, 3) personen kunne forutsett følgen, og 4) personen handlet fritt, ikke under tvang. Challenger-ulykken er et eksempel: ingeniøren Boisjoly advarte på forhånd og tok aktivt ansvar.",
    sjekkliste: [
      "Passivt ansvar (tilbakeskuende, accountability/blame)",
      "Aktivt ansvar (fremoverskuende)",
      "Normbrudd og kausal forbindelse",
      "Forutsigbarhet og handlefrihet",
      "Eksempel",
    ],
  },
  {
    id: "ks-miljo",
    kapittel: "miljoetikk",
    sporsmal: "Forklar forskjellen på antroposentrisme, biosentrisme og økosentrisme.",
    modellsvar:
      "Teoriene svarer ulikt på hva som har egenverdi. Antroposentrismen sier at bare mennesker har egenverdi, mens naturen har instrumentell verdi for oss (Aristoteles, Kant). Utilitarister som Bentham og Singer er et delvis unntak fordi de inkluderer alle følende vesener. Biosentrismen sier at alle levende vesener har egenverdi (Schweitzer, Taylor), men ikke nødvendigvis lik moralsk status. Økosentrismen er holistisk: helheten, som økosystemer og også ikke-levende deler som en elv, har verdi, ikke bare individene (Leopold). I en utbyggingssak vil en antroposentriker spørre hva naturen er verdt for oss, mens en økosentriker kan mene at et økosystem ikke kan veksles mot økonomisk gevinst.",
    sjekkliste: [
      "Antroposentrisme: bare mennesker egenverdi",
      "Biosentrisme: alt levende",
      "Økosentrisme: helheter/økosystemer",
      "Instrumentell verdi vs. egenverdi",
      "Eksempel eller anvendelse",
    ],
  },
  {
    id: "ks-baerekraft",
    kapittel: "baerekraft",
    sporsmal: "Hva er forskjellen på svak og sterk bærekraft? Hvor plasserer føre-var-prinsippet seg?",
    modellsvar:
      "Bærekraftig utvikling er utvikling som møter dagens behov uten å ødelegge fremtidige generasjoners mulighet til å møte sine (Brundtland 1987), og den har tre dimensjoner: miljø, økonomi og sosiale forhold. Spørsmålet er hva som skjer når de kolliderer. Svak bærekraft veier de tre likt, så miljøskade kan aksepteres hvis de økonomiske eller sosiale gevinstene er store nok. Sterk bærekraft gir miljøet forrang, slik at det ikke kan veksles. Føre-var-prinsippet ligger mellom dem: hvis en handling kan gi alvorlig eller uopprettelig skade, og det ikke er vitenskapelig enighet om at skaden ikke vil skje, ligger bevisbyrden på den som vil gjennomføre handlingen.",
    sjekkliste: [
      "Brundtland-definisjonen og tre dimensjoner",
      "Svak bærekraft (kan veksles)",
      "Sterk bærekraft (miljø har forrang)",
      "Føre-var-prinsippet presist (bevisbyrde)",
      "Plassering mellom sterk og svak",
    ],
  },
  {
    id: "ks-turing",
    kapittel: "datamaskiner",
    sporsmal: "Hva er Turingtesten, og hva viser Searles kinesiske rom om den?",
    modellsvar:
      "Turingtesten er et imitasjonsspill: en person kommuniserer skriftlig med en maskin og et menneske i hvert sitt rom. Klarer personen ikke å skille dem, har maskinen bestått. Testen måler atferd og forstår intelligens som kompleks problemløsning; å nekte maskinen intelligens bare fordi den er en maskin, ville være diskriminering på irrelevant grunnlag. Searle innvender med det kinesiske rommet: En som bare kan norsk, følger regelbøker for å svare på lapper med kinesisk. Utenfra ser det ut som rommet forstår kinesisk, men ingen forstår noe. Korrekt symbolbehandling (syntaks) gir altså ikke forståelse (semantikk). En maskin kan bestå testen uten å tenke slik vi gjør. Searle skiller derfor mellom svak KI (imitasjon) og sterk KI (ekte forståelse).",
    sjekkliste: [
      "Turingtesten beskrevet",
      "Måler atferd",
      "Det kinesiske rommet beskrevet",
      "Syntaks vs. semantikk",
      "Svak vs. sterk KI",
    ],
  },
];

export const caser: Case[] = [
  {
    id: "case-mobilforbud",
    tittel: "Argumentasjonsanalyse: mobilforbud i skolen",
    kapitler: ["1", "2", "3"],
    tekst:
      "Fra et debattinnlegg: «Mobilen må ut av klasserommet, nå. En lærer i Bergen forteller at elevene hans er på mobilen over seks timer om dagen. Elever som bruker sosiale medier mye, har flere psykiske plager, og konsentrasjonen svekkes. De som er imot forbud, mener visst at barn skal få gjøre som de vil uten noen grenser. Det er typisk at motstanden kommer fra teknologiselskaper som tjener penger på unges skjermtid. Skolen har ansvar for elevenes læring.»",
    oppgave:
      "Gjør en argumentasjonsanalyse av utdraget: formuler standpunktet, finn argumentene og eventuelle implisitte påstander, og tegn strukturen. Vurder deretter argumentasjonen, og pek ut eventuelle brudd på debattnormene.",
    skisse: [
      {
        steg: "Standpunkt",
        tekst:
          "Formuler med egne ord: «Mobiltelefoner bør forbys i klasserommet.» Ikke bruk første setning ordrett, og ikke overskriften.",
      },
      {
        steg: "Argumenter og struktur",
        tekst:
          "SA1: Mobilbruk svekker elevenes konsentrasjon. SA2: Mye bruk av sosiale medier gir flere psykiske plager (konsekvensargument). Indirekte argument for SA1/SA2: elever er på mobilen over seks timer om dagen. Den siste setningen er et sammensatt argument med en implisitt påstand: «Skolen har ansvar for elevenes læring» + implisitt «Mobilen hemmer læringen».",
      },
      {
        steg: "Implisitte påstander",
        tekst:
          "Konsekvensargumentene forutsetter normative premisser: «Dårligere konsentrasjon og psykiske plager er uønsket.» De forutsetter også at et forbud faktisk vil redusere plagene, noe som ikke er begrunnet.",
      },
      {
        steg: "Vurdering av riktighet og relevans",
        tekst:
          "Seks timer om dagen er én lærers anekdote om sine egne elever: et lite og trolig ikke representativt utvalg (induktiv generalisering). Sammenhengen mellom sosiale medier og psykiske plager er en korrelasjon og viser ikke årsak. Den handler dessuten om bruk generelt, ikke i skoletiden, så relevansen for et forbud i klasserommet er begrenset.",
      },
      {
        steg: "Brudd på debattnormene",
        tekst:
          "Stråmann: motstanderne gjengis som at «barn skal få gjøre som de vil uten noen grenser». Personargument: motstanden avfeies som drevet av teknologiselskapenes interesser, og mistenkeliggjøring av motiver sier ingenting om argumentene deres. Begge bryter kravet om relevans, og stråmannen også kravet om riktighet.",
      },
    ],
  },
  {
    id: "case-helsepreparat",
    tittel: "Vitenskap: et kosttilskudd som «styrker immunforsvaret»",
    kapitler: ["4", "5", "6", "7", "8"],
    tekst:
      "Et selskap selger kosttilskuddet ImmunoPlus, som de sier «styrker immunforsvaret og balanserer kroppens naturlige energi». På nettsiden viser de til hundrevis av fornøyde kunder som har vært mindre syke etter at de begynte med produktet, og til en studie der 40 personer tok tilskuddet i én vinter og rapporterte færre forkjølelser enn vinteren før. Studien er finansiert av selskapet og publisert i et tidsskrift uten fagfellevurdering.",
    oppgave: "Vurder om påstandene om ImmunoPlus er vitenskapelig godt begrunnet. Bruk relevante begreper fra vitenskapsfilosofien.",
    skisse: [
      {
        steg: "Problemstilling",
        tekst:
          "Er det god evidens for at produktet virker, og er påstandene i det hele tatt testbare? Relevante kapitler: falsifiserbarhet (6), HD-metoden (5), bekreftelse (7), normer og bias i forskning (8), korrelasjon/kausalitet og blinding (4).",
      },
      {
        steg: "Testbarhet",
        tekst:
          "«Balanserer kroppens naturlige energi» er for vagt til å kunne falsifiseres (Popper), som Goops klistremerker. «Færre forkjølelser» er derimot testbart, og må vurderes som en vanlig hypotese.",
      },
      {
        steg: "Evidensen",
        tekst:
          "Kundeuttalelser er anekdoter preget av bekreftelsestendens og placebo. Studien har ingen kontrollgruppe og ingen blinding, og sammenligner med vinteren før: færre forkjølelser kan skyldes en mildere sesong (en tredje faktor). Med HD-metoden er prediksjonen «færre forkjølelser» ikke overraskende hvis hypotesen er usann (overraskelsesprinsippet), og slutningen «de ble friskere, altså virker det» er å bekrefte konsekvensen. 40 personer er et lite utvalg.",
      },
      {
        steg: "Forskningsnormer",
        tekst:
          "Finansiering fra selskapet truer desinteresse (KUDOS). Uten fagfellevurdering mangler organisert skeptisisme. Publikasjonsbias og p-hacking gjør at enkeltstående positive funn bør tolkes forsiktig.",
      },
      {
        steg: "Konklusjon",
        tekst:
          "Påstandene er ikke godt begrunnet. Det betyr ikke at produktet ikke virker, men at evidensen ikke gir grunn til å tro det. En god test ville vært et dobbeltblindet, randomisert forsøk med placebogruppe, som andre kan replikere.",
      },
    ],
  },
  {
    id: "case-ki-legevakt",
    tittel: "Teknologi: KI-assistent på legevakten",
    kapitler: ["13", "datamaskiner", "12", "ingenioransvar"],
    tekst:
      "En kommune vurderer å ta i bruk en KI-assistent som snakker med pasienter som ringer legevakten om natten. Assistenten stiller spørsmål, vurderer hvor alvorlig situasjonen er, og avgjør om pasienten skal få time neste dag, kontakte fastlegen eller sendes til legevakten med en gang. Leverandøren viser til at systemet treffer bedre enn en gjennomsnittlig sykepleier i tester, og at det sparer penger. Kritikere frykter at pasientene ikke blir forstått, og spør hvem som har ansvaret hvis noe går galt.",
    oppgave: "Drøft om kommunen bør ta i bruk KI-assistenten. Bruk relevant pensum om teknologi og sinn.",
    skisse: [
      {
        steg: "Problemstilling",
        tekst:
          "Effektivitet og muligens bedre treffsikkerhet står mot forståelse, tillit og ansvar. Relevant pensum: teknologisyn (13), kan datamaskiner tenke (Turingtesten, Searle, berammingsproblemet), og ingeniørers ansvar.",
      },
      {
        steg: "Teknologisyn",
        tekst:
          "En instrumentalist ser KI-en som et nøytralt verktøy: er den treffsikker, er den god. En determinist ser at den legger premisser: sykepleiere kan miste kompetanse, og systemet blir vanskelig å fjerne når det er vevd inn i et sosioteknisk nettverk. Det relasjonelle synet spør hvordan relasjonen mellom pasient og helsevesen endres. Teknologiens tosidighet: noen pasienter (eldre, de med dårlig norsk) kan bli digitalt utenfor.",
      },
      {
        steg: "Forstår maskinen?",
        tekst:
          "At assistenten treffer godt, er et slags bestått Turingtest. Searles kinesiske rom viser at riktig output ikke betyr forståelse. Berammingsproblemet og Dreyfus' livsverden peker på at en sykepleier oppfatter bakgrunnen (angst, noe som er «rart» med pasienten), mens systemet bare vurderer det det er programmert for.",
      },
      {
        steg: "Ansvar og etikk",
        tekst:
          "Hvem er klanderverdig ved en feil? Separatisme («vi leverer bare teknologien») er utilstrekkelig. Utviklerne og kommunen har aktivt ansvar for å teste og overvåke. Utilitaristisk kan sparte ressurser og bedre treffsikkerhet veie tungt. Pliktetisk kan pasienten ha krav på å bli behandlet som et mål, med en menneskelig vurdering ved alvorlige tilfeller.",
      },
      {
        steg: "Konklusjon (eksempel)",
        tekst:
          "Ta den i bruk som støtte for sykepleieren, ikke som en erstatning. Et menneske avgjør i uklare og alvorlige tilfeller, og ansvarslinjer og oppfølging avklares før oppstart.",
      },
    ],
  },
  {
    id: "case-varsling",
    tittel: "Etikk: ingeniøren og den forsinkede broen",
    kapitler: ["ingenioransvar", "16", "17", "18"],
    tekst:
      "Sara er ingeniør i et firma som bygger en gang- og sykkelbro. To uker før åpning oppdager hun at noen sveiser er dårligere enn spesifisert. Hun mener broen trolig tåler vanlig bruk, men er usikker på hva som skjer ved store folkemengder. Prosjektlederen sier at broen er godkjent, at forsinkelse vil koste firmaet millioner og skade et viktig kundeforhold, og at «sånt bestemmer ikke du». Sara vurderer å varsle byggherren.",
    oppgave: "Hva bør Sara gjøre? Drøft ved hjelp av minst to etiske teorier og pensum om ingeniørers ansvar.",
    skisse: [
      {
        steg: "Problemstilling",
        tekst:
          "Sikkerheten til brukerne og Saras faglige ansvar står mot lojalitet til arbeidsgiver og økonomiske tap. Relevant: aktivt ansvar, separatisme og varsling, samt utilitarisme, pliktetikk og dydsetikk.",
      },
      {
        steg: "Ingeniørers ansvar",
        tekst:
          "Prosjektlederen uttrykker separatisme: ingeniøren har bare et teknisk ansvar. Men Sara har aktivt ansvar for å forebygge skade, og ingeniøridealet om å bidra til menneskelig velferd setter sikkerhet først. Skulle broen svikte, vil hun oppfylle betingelsene for klanderverdighet: hun visste om feilen og kunne forutse følgen. Moralsk ansvar kan trumfe rolleansvar. Varsling bør først skje internt, og deretter eksternt.",
      },
      {
        steg: "Teoriene anvendt",
        tekst:
          "Utilitarisme: forventet nytte, der en liten sannsynlighet for en katastrofe med mange skadde ganges med en svært stor skade, kan veie tyngre enn millioner i tap. Usikkerheten gjør beregningen vanskelig. Pliktetikk: brukerne behandles bare som et middel hvis de utsettes for en skjult risiko de ikke har samtykket i; å tie kan heller ikke universaliseres. Dydsetikk: hva ville en ærlig, modig og ansvarlig ingeniør gjort? Fronesis kreves for å finne ut hvordan hun varsler klokt.",
      },
      {
        steg: "Drøfting",
        tekst:
          "Varsling har høy personlig kostnad og kan skade tilliten, og Sara er ikke sikker. Kanskje er det rimelig å kreve en uavhengig kontroll før hun varsler eksternt. Utilitarismen kan bli brukt til å regne bort risikoen hvis tapet er stort nok, mens pliktetikken ikke er avhengig av hvor sannsynlig ulykken er.",
      },
      {
        steg: "Konklusjon (eksempel)",
        tekst:
          "Sara bør dokumentere funnet og ta det opp skriftlig internt, med krav om en uavhengig kontroll før åpning. Avvises det, bør hun varsle byggherren. Alle tre teoriene peker i samme retning, selv om begrunnelsene er ulike.",
      },
    ],
  },
  {
    id: "case-sykkelhjelm",
    tittel: "Politisk filosofi: påbud om sykkelhjelm for voksne",
    kapitler: ["19", "20", "16", "22"],
    tekst:
      "Regjeringen foreslår å innføre påbud om sykkelhjelm for alle, også voksne, med bot for brudd. Helsemyndighetene viser til at hjelm reduserer alvorlige hodeskader, og at skadene koster samfunnet mye. Motstanderne mener at voksne selv må få bestemme over egen risiko, og frykter at færre vil sykle hvis hjelm blir påbudt.",
    oppgave: "Drøft om det er legitimt å innføre et hjelmpåbud for voksne. Bruk relevant pensum fra politisk filosofi.",
    skisse: [
      {
        steg: "Problemstilling",
        tekst:
          "Frihet til å bestemme over egen risiko står mot helse og samfunnets kostnader. Relevant: skadeprinsippet og paternalisme (19), frihet (20), utilitarisme (16), og eventuelt ekspertstyre (22).",
      },
      {
        steg: "Skadeprinsippet",
        tekst:
          "Etter Mill er tvang mot voksne bare tillatt for å hindre skade på andre. Hjelmløs sykling skader primært en selv, så et påbud er hard paternalisme. Myk paternalisme, som informasjonskampanjer, er forenlig med prinsippet. Er samfunnets kostnader «skade på andre»? Hvis ja, kan nesten alt reguleres (mat, ski, fjellturer), og skadeprinsippet mister sin kraft.",
      },
      {
        steg: "Andre perspektiver",
        tekst:
          "Utilitaristisk er det et empirisk spørsmål: færre hodeskader må veies mot mindre sykling (dårligere helse og mer bilkjøring). Mill selv begrunner friheten utilitaristisk, så argumentet om at færre sykler, er sentralt. Med frihet som ikke-dominans kan en lov vedtatt demokratisk være forenlig med frihet, så lenge den ikke er vilkårlig.",
      },
      {
        steg: "Drøfting",
        tekst:
          "Bilbeltepåbudet er en relevant analogi, men har relevante ulikheter: hjelmpåbud kan få folk til å sykle mindre, mens bilbeltepåbud neppe får folk til å kjøre mindre. Helsemyndighetenes ekspertise gjelder skadetall (midler), ikke hvor mye frihet vi bør gi opp (mål), så å overlate saken til eksperter vil være avpolitisering.",
      },
      {
        steg: "Konklusjon (eksempel)",
        tekst:
          "Påbud for voksne er vanskelig å forsvare med skadeprinsippet og er usikkert utilitaristisk. Informasjon og bedre sykkelveier (myk paternalisme) er å foretrekke. Påbud for barn er lettere å forsvare, fordi skadeprinsippet gjelder kompetente voksne.",
      },
    ],
  },
  {
    id: "case-vindkraft",
    tittel: "Miljø og fellesskap: vindkraft i reinbeiteområde",
    kapitler: ["miljoetikk", "baerekraft", "21", "22", "16"],
    tekst:
      "Et energiselskap vil bygge en stor vindpark i et fjellområde. Parken vil gi fornybar strøm til tusenvis av husstander og bidra til å nå klimamålene. Området er beiteland for rein og har vært brukt av en samisk reindriftsfamilie i generasjoner. Familien mener at vindparken vil gjøre reindrift i området umulig og true en kulturell levemåte. Myndighetene har gitt konsesjon etter en faglig vurdering.",
    oppgave: "Drøft om vindparken bør bygges. Bruk relevant pensum om miljøetikk, bærekraft og politisk filosofi.",
    skisse: [
      {
        steg: "Problemstilling",
        tekst:
          "Klimahensyn og energibehov står mot natur, en minoritets kultur og rettigheter. Bærekraftens tre dimensjoner kolliderer innbyrdes: miljø (klima vs. natur), økonomi og sosiale forhold. Relevant: miljøetikk, bærekraft, Taylor (21), demokrati (22) og utilitarisme.",
      },
      {
        steg: "Teorier anvendt",
        tekst:
          "Utilitarisme: klimagevinst og strøm for mange kan veie tyngre enn tapet for én familie, men det er en klassisk situasjon der maksimering kan krenke en minoritet. Bærekraft: svak bærekraft tillater å veksle natur mot klimagevinst. Miljøetikk: en økosentriker vil gi fjellområdet som helhet verdi. Taylor: forskjellspolitikk anerkjenner retten til å bevare en kulturell levemåte, og kulturell overlevelse kan veie tyngre enn mindre grunnleggende hensyn.",
      },
      {
        steg: "Demokrati og ekspertise",
        tekst:
          "At konsesjonen bygger på en faglig vurdering, kan være avpolitisering: verdispørsmålet om hvem som skal bære kostnaden, gjøres om til et teknisk spørsmål. Et deliberativt ideal krever at de berørte har deltatt i reell meningsbrytning før vedtaket.",
      },
      {
        steg: "Drøfting",
        tekst:
          "Klimaendringer truer også reindriften på sikt, og ofte kan andre lokaliseringer redusere konflikten. På den andre siden bærer en liten gruppe hele kostnaden for et gode som deles av mange. Er det rettferdig, selv om summen blir positiv?",
      },
      {
        steg: "Konklusjon (eksempel)",
        tekst:
          "Vindparken bør ikke bygges her uten at reindriftens rettigheter er ivaretatt og alternative lokaliseringer er utredet. Fornybar energi er viktig, men et tap av kulturell levemåte kan ikke uten videre veksles mot en samlet gevinst.",
      },
    ],
  },
];
