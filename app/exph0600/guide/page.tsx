import type { Metadata } from "next";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { finnKapittel } from "@/content/exph0600/kapitler";

export const metadata: Metadata = { title: "Eksamensguide · EXPH0600" };

function Kap({ s }: { s: string }) {
  const k = finnKapittel(s);
  if (!k) throw new Error(`Ukjent kapittel: ${s}`);
  return (
    <Link href={`/exph0600/pensum/${s}`} className="underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500">
      {/^\d+$/.test(s) ? `${s} ${k.tittel}` : k.tittel}
    </Link>
  );
}

function Kaps({ s }: { s: string[] }) {
  return s.map((x, i) => (
    <span key={x}>
      {i > 0 && ", "}
      <Kap s={x} />
    </span>
  ));
}

const verb: [string, string][] = [
  ["Gjør rede for / redegjør", "Presenter teorien eller begrepet presist og nøytralt. Ingen egen mening."],
  ["Forklar", "Vis hvordan eller hvorfor. Ta med et eksempel."],
  ["Sammenlign", "Likheter og forskjeller, punkt for punkt, ikke to separate beskrivelser."],
  ["Drøft", "Argumenter for og mot, vei dem mot hverandre, og avslutt med en begrunnet konklusjon."],
  ["Vurder", "Ta stilling og begrunn standpunktet."],
];

const casetyper: [string, string[]][] = [
  ["Etisk dilemma: «Hva bør X gjøre?»", ["16", "17", "18", "14"]],
  ["Ingeniør på jobb, sikkerhet, varsling", ["ingenioransvar", "17", "18"]],
  ["Natur, miljø, klima, utbygging", ["miljoetikk", "baerekraft", "fjelland", "16"]],
  ["Ny teknologi og KI", ["13", "datamaskiner", "12", "fjelland"]],
  ["Forskning, helsepåstander, pseudovitenskap", ["4", "5", "6", "7", "8", "9"]],
  ["Debattinnlegg eller argumentasjon", ["1", "2", "3"]],
  ["Statens rolle, frihet, regulering, demokrati", ["19", "20", "21", "22"]],
];

const steg: { tittel: string; tekst: string }[] = [
  {
    tittel: "Finn problemstillingen",
    tekst:
      "Formuler i én setning hva caset egentlig spør om, og hvilke hensyn som står mot hverandre. Pek ut hvilke deler av pensum som er relevante, og si kort hvorfor du velger nettopp dem.",
  },
  {
    tittel: "Presenter teoriene presist",
    tekst:
      "To til tre teorier er nok. Bruk riktige begreper (nytteprinsippet, humanitetsformuleringen, fronesis …) og forklar dem kort. Dette viser at du kan pensum, men det er ikke her de fleste poengene ligger.",
  },
  {
    tittel: "Anvend hver teori på caset",
    tekst:
      "Det er her poengene ligger. Gå konkret til verks: hvem berøres, hvilke handlingsalternativer finnes, hva sier teorien om akkurat disse? Bruk detaljer fra caseteksten. Viser to teorier til ulike svar, er det en styrke for oppgaven, ikke et problem.",
  },
  {
    tittel: "Drøft",
    tekst:
      "Hvilke svakheter har teoriene i dette caset? Hva ville en motpart sagt? Bruk de kjente innvendingene (krever for mye, rettighetskrenkelser, regelkonflikter, mangler handlingsveiledning) og knytt dem til caset, ikke bare ramse dem opp.",
  },
  {
    tittel: "Konkluder med begrunnelse",
    tekst:
      "Ta et standpunkt og begrunn hvorfor de argumentene du lener deg på, veier tyngst. En betinget konklusjon («bygg, men bare hvis …») er helt greit. Konklusjonen må følge av drøftingen, ikke komme fra løse luften.",
  },
];

const tid: [string, number, string][] = [
  ["Les hele oppgavesettet og velg case", 10, "Velg casen der du ser flest teorier du kan anvende, ikke den med mest spennende tema."],
  ["Fire kortsvar", 70, "Ca. 15 min per spørsmål pluss litt slakk. Hard stopp: kortsvar teller bare 1/3."],
  ["Planlegg casen", 20, "Stikkord for alle fem stegene før du skriver ett avsnitt."],
  ["Skriv casen", 120, "Mesteparten av tiden går til steg 3 og 4."],
  ["Les over og rett", 20, "Sjekk at konklusjonen svarer på oppgaven, og at hvert kortsvar har et eksempel."],
];

const leseplan: { uke: string; dager: [string, string[] | string][] }[] = [
  {
    uke: "Uke 47: argumentasjon og vitenskap",
    dager: [
      ["Man 16.11", ["1", "2"]],
      ["Tir 17.11", ["3"]],
      ["Ons 18.11", ["4", "5"]],
      ["Tor 19.11", ["6", "7"]],
      ["Fre 20.11", ["8", "9"]],
      ["Lør 21.11", ["10"]],
      ["Søn 22.11", "Buffer. Svar skriftlig på eksamensspørsmålene i kap. 1–10 uten å se i notatene."],
    ],
  },
  {
    uke: "Uke 48: menneske, teknologi og etikk",
    dager: [
      ["Man 23.11", ["11"]],
      ["Tir 24.11", ["12"]],
      ["Ons 25.11", ["13", "datamaskiner"]],
      ["Tor 26.11", ["14", "15"]],
      ["Fre 27.11", ["16"]],
      ["Lør 28.11", ["17"]],
      ["Søn 29.11", ["18"]],
    ],
  },
  {
    uke: "Uke 49: politikk, tilleggstekster og case",
    dager: [
      ["Man 30.11", ["19", "20"]],
      ["Tir 1.12", ["21", "22"]],
      ["Ons 2.12", ["ingenioransvar", "miljoetikk"]],
      ["Tor 3.12", ["baerekraft", "fjelland"]],
      ["Fre 4.12", "Skriv datasenter-casen nedenfor på 2,5 timer."],
      ["Lør 5.12", "Kortsvar-runde: ett spørsmål fra hver del, 15 min hver."],
      ["Søn 6.12", "Buffer. Ta igjen det du ligger etter med."],
    ],
  },
  {
    uke: "Siste dager",
    dager: [
      ["Man 7.12", "Prøveeksamen: fire kortsvar og én case, fire timer, uten hjelpemidler."],
      ["Tir 8.12", "Lett repetisjon av begrepene. Ikke nytt stoff. Legg deg tidlig."],
      ["Ons 9.12", "Eksamen kl. 09–13."],
    ],
  },
];

const h2 = "text-xl font-semibold";
const boks = "rounded-xl border border-zinc-200 p-5 dark:border-zinc-800";
const dempet = "text-zinc-600 dark:text-zinc-400";

export default function Guide() {
  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <Link href="/exph0600" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:underline">
          <ChevronLeft className="size-4" aria-hidden />
          EXPH0600
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">Eksamensguide</h1>
        <p className={dempet}>
          Fire timer uten hjelpemidler: fire kortsvar (1/3) og én av to caseoppgaver (2/3). Begge delene må bestås.
          Rådene her er våre anbefalinger, ikke offisielle krav fra emneansvarlig.
        </p>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 pt-2 text-sm">
          {[
            ["#kortsvar", "Kortsvar"],
            ["#case", "Case"],
            ["#tid", "Tidsbruk"],
            ["#leseplan", "Leseplan"],
          ].map(([href, t]) => (
            <a key={href} href={href} className="text-zinc-500 hover:underline">
              {t}
            </a>
          ))}
        </nav>
      </header>

      <section id="kortsvar" className="scroll-mt-6 space-y-5">
        <h2 className={h2}>Kortsvar</h2>
        <p>
          Kortsvar tester om du forstår et begrep eller en teori. Svar med et kort avsnitt, ca. ½–1 side, og bruk ca. 15
          minutter. Følg den samme oppskriften hver gang:
        </p>
        <ol className="grid gap-3 sm:grid-cols-2">
          {[
            ["Definer", "Gi en presis definisjon med pensums egne ord."],
            ["Forklar", "Hva betyr det, og hvorfor er det viktig? Hvem står bak?"],
            ["Eksemplifiser", "Gi et konkret eksempel, helst ditt eget. Eksempelet viser at du har forstått."],
            ["Avgrens", "Skill begrepet fra det det lett forveksles med, eller nevn en innvending hvis spørsmålet ber om det."],
          ].map(([t, x], i) => (
            <li key={t} className={boks}>
              <p className="font-medium">
                <span className="font-mono text-zinc-400">{i + 1}.</span> {t}
              </p>
              <p className={`mt-1 text-sm ${dempet}`}>{x}</p>
            </li>
          ))}
        </ol>

        <div className="space-y-3">
          <h3 className="font-semibold">Les oppgaveverbet</h3>
          <dl className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
            {verb.map(([v, f]) => (
              <div key={v} className="grid gap-1 px-4 py-3 sm:grid-cols-[12rem_1fr]">
                <dt className="font-medium">{v}</dt>
                <dd className={dempet}>{f}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Svakt og godt svar</h3>
          <p className={`text-sm ${dempet}`}>Spørsmål: «Forklar forskjellen på et arguments riktighet og relevans.»</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-red-50 p-5 text-sm dark:bg-red-950/40">
              <p className="font-medium text-red-800 dark:text-red-300">Svakt</p>
              <p className="mt-2">
                Riktighet handler om argumentet er riktig, og relevans handler om det er relevant for saken. Begge deler
                er viktige for at et argument skal være godt.
              </p>
              <p className={`mt-3 ${dempet}`}>Sirkulært, ingen eksempel, ingen forklaring av hvorfor de er uavhengige.</p>
            </div>
            <div className="rounded-xl bg-emerald-50 p-5 text-sm dark:bg-emerald-950/40">
              <p className="font-medium text-emerald-800 dark:text-emerald-300">Godt</p>
              <p className="mt-2">
                Et argument er riktig hvis påstanden det består av, stemmer («Å ja, stemmer det?»). Det er relevant i den
                grad det, gitt at det er riktig, taler for eller mot standpunktet («Hvis det er sant, hva så?»). Begge må
                være på plass for at argumentet skal gi støtte, og de er uavhengige av hverandre. Ta standpunktet
                «Kaffedrikking øker risikoen for kreft». «Koffein er kreftfremkallende» ville vært svært relevant, men er
                ikke riktig. «De fleste som dør av kreft i Norge, drikker kaffe» er trolig riktig, men ikke relevant,
                fordi de fleste voksne drikker kaffe. De fleste som dør av kreft, har også brukt sko.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Vanlige feil</h3>
          <ul className={`list-disc space-y-1 pl-5 ${dempet}`}>
            <li>Å nevne navn og stikkord uten å forklare dem.</li>
            <li>En definisjon uten eksempel.</li>
            <li>Å svare på et annet spørsmål enn det som stilles, for eksempel å drøfte når du bare skal gjøre rede for.</li>
            <li>Å skrive alt du kan om temaet. Sensor gir poeng for presisjon, ikke lengde.</li>
            <li>Å bruke for lang tid. Det femte avsnittet på et kortsvar gir mindre enn det første avsnittet i casen.</li>
          </ul>
        </div>
      </section>

      <section id="case" className="scroll-mt-6 space-y-5">
        <h2 className={h2}>Langsvar: caseoppgaven</h2>
        <p>
          Casen teller 2/3. Den tester om du kan bruke pensum på et konkret tilfelle. Bruk de samme fem stegene hver
          gang, så slipper du å finne opp strukturen på eksamensdagen.
        </p>
        <ol className="space-y-3">
          {steg.map((s, i) => (
            <li key={s.tittel} className={`${boks} flex gap-4`}>
              <span className="font-mono text-2xl text-zinc-300 dark:text-zinc-700">{i + 1}</span>
              <div>
                <p className="font-medium">{s.tittel}</p>
                <p className={`mt-1 text-sm ${dempet}`}>{s.tekst}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="space-y-3">
          <h3 className="font-semibold">Hvilke teorier passer?</h3>
          <dl className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 text-sm dark:divide-zinc-800 dark:border-zinc-800">
            {casetyper.map(([type, s]) => (
              <div key={type} className="grid gap-1 px-4 py-3 sm:grid-cols-[16rem_1fr]">
                <dt className="font-medium">{type}</dt>
                <dd className={dempet}>
                  <Kaps s={s} />
                </dd>
              </div>
            ))}
          </dl>
          <p className={`text-sm ${dempet}`}>
            Argumentasjonsteorien (del 1) kan brukes i alle caser: et godt casesvar skiller riktighet fra relevans og
            gjør implisitte premisser synlige.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Eksempel: datasenter og naturverdier</h3>
          <blockquote className="rounded-xl bg-zinc-100 p-5 text-sm dark:bg-zinc-900">
            En kommune vurderer å bygge et datasenter i et område med skog og myr. Datasenteret kan gi arbeidsplasser og
            skatteinntekter. Men området som bygges ned, lagrer karbon, demper flom, gir leveområder for arter og brukes
            til friluftsliv. Bør kommunen bygge?
            <span className={`mt-2 block ${dempet}`}>Fra forelesning 10.</span>
          </blockquote>
          <ol className="space-y-3 text-sm">
            <li>
              <p className="font-medium">1. Problemstilling</p>
              <p className={dempet}>
                Økonomiske og sosiale gevinster nå (jobber, skatt) står mot naturverdier som også rammer fremtidige
                generasjoner. Relevant pensum: utilitarisme og nytte-kostnadsanalyse (<Kap s="16" />, <Kap s="fjelland" />
                ), <Kap s="miljoetikk" /> og <Kap s="baerekraft" />.
              </p>
            </li>
            <li>
              <p className="font-medium">2–3. Teorier anvendt på caset</p>
              <ul className={`mt-1 list-disc space-y-1 pl-5 ${dempet}`}>
                <li>
                  <strong>Utilitarisme / nytte-kostnad:</strong> summer alle konsekvenser. På nyttesiden står
                  arbeidsplasser og skatteinntekter. På kostnadssiden står tapte økosystemtjenester (karbonlagring,
                  flomdemping) og friluftsliv. Fremtidige generasjoner teller like mye. Men artene har ingen egenverdi for
                  en utilitarist, bare individene som kan lide (storsalamander-eksempelet i boka).
                </li>
                <li>
                  <strong>Fjelland:</strong> med diskontering veier fremtidige skader lite (100 kr om 45 år ≈ 11 kr i dag).
                  Analysen kan dermed systematisk favorisere utbygging, og ikke alt lar seg prise.
                </li>
                <li>
                  <strong>Miljøetikk:</strong> en antroposentriker spør bare hva naturen er verdt for oss. En økosentriker
                  (Leopold) vil si at myra som økosystem har egenverdi som ikke kan veksles mot skatteinntekter.
                </li>
                <li>
                  <strong>Bærekraft:</strong> svak bærekraft tillater å veksle natur mot store nok gevinster, sterk
                  bærekraft gjør det ikke. Føre-var-prinsippet legger bevisbyrden på utbyggeren hvis skaden er alvorlig og
                  uopprettelig.
                </li>
              </ul>
            </li>
            <li>
              <p className="font-medium">4. Drøfting</p>
              <p className={dempet}>
                Nytte-kostnadsanalysen er oversiktlig, men gir et svakt forsvar for natur, og prisene er usikre.
                Økosentrismen tar naturen på alvor, men gir lite veiledning når mennesker trenger jobber. Er myra
                uerstattelig, eller finnes det alternative tomter? Hvem får gevinsten, og hvem bærer kostnaden?
              </p>
            </li>
            <li>
              <p className="font-medium">5. Konklusjon (eksempel)</p>
              <p className={dempet}>
                Kommunen bør ikke bygge her hvis en alternativ tomt uten myr finnes. Karbonlagring i myr er vanskelig å
                gjenopprette, og diskontering undervurderer denne kostnaden. Føre-var-prinsippet taler derfor mot. Den
                motsatte konklusjonen er like gyldig hvis den er godt begrunnet.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section id="tid" className="scroll-mt-6 space-y-4">
        <h2 className={h2}>Tidsbruk på fire timer</h2>
        <div className="flex h-3 overflow-hidden rounded-full">
          {tid.map(([t, min], i) => (
            <div
              key={t}
              style={{ width: `${(min / 240) * 100}%` }}
              className={["bg-zinc-300", "bg-sky-400", "bg-amber-300", "bg-amber-500", "bg-zinc-400"][i] + " dark:opacity-80"}
            />
          ))}
        </div>
        <ul className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 text-sm dark:divide-zinc-800 dark:border-zinc-800">
          {tid.map(([t, min, r]) => (
            <li key={t} className="grid gap-1 px-4 py-3 sm:grid-cols-[4rem_14rem_1fr]">
              <span className="font-mono text-zinc-500">{min} min</span>
              <span className="font-medium">{t}</span>
              <span className={dempet}>{r}</span>
            </li>
          ))}
        </ul>
        <p className={`text-sm ${dempet}`}>
          Velg casen før du begynner på kortsvarene, så kan hodet jobbe med den i bakgrunnen.
        </p>
      </section>

      <section id="leseplan" className="scroll-mt-6 space-y-5">
        <h2 className={h2}>Leseplan frem til 9. desember</h2>
        <p className={dempet}>
          Ett til to kapitler om dagen. Les sammendraget, les kapitlet i Tenk!, og svar på eksamensspørsmålene nederst på
          kapittelsiden uten å se i teksten.
        </p>
        {leseplan.map((u) => (
          <div key={u.uke} className="space-y-2">
            <h3 className="font-semibold">{u.uke}</h3>
            <ul className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 text-sm dark:divide-zinc-800 dark:border-zinc-800">
              {u.dager.map(([d, x]) => (
                <li key={d} className="grid grid-cols-[5.5rem_1fr] gap-2 px-4 py-2.5">
                  <span className="font-mono text-zinc-500">{d}</span>
                  <span>{typeof x === "string" ? x : <Kaps s={x} />}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
