// Figurer til kapittelsidene. Laget i HTML/CSS slik at tekst brytes på mobil og mørk modus fungerer.
// Innholdet bygger på kapitler.ts (kontrollert mot Tenk! og forelesningene).
import { ArrowDown, ArrowLeft, ArrowLeftRight, ArrowRight, ArrowUp, RotateCcw } from "lucide-react";
import type { ReactNode } from "react";

const stil = {
  n: "border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950",
  a: "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900",
  s: "border-dashed border-zinc-400 text-zinc-600 dark:border-zinc-600 dark:text-zinc-400",
  g: "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/40",
  r: "border-rose-300 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/40",
};

function B({ children, v = "n", className = "" }: { children: ReactNode; v?: keyof typeof stil; className?: string }) {
  return (
    <div className={`rounded-lg border px-3 py-2 text-center text-sm leading-snug ${stil[v]} ${className}`}>{children}</div>
  );
}
const S = ({ children }: { children: ReactNode }) => <span className="mt-0.5 block text-xs opacity-75">{children}</span>;
const Ned = () => <ArrowDown className="mx-auto size-4 shrink-0 text-zinc-400" aria-hidden />;
const Opp = () => <ArrowUp className="mx-auto size-4 shrink-0 text-zinc-400" aria-hidden />;
const Hoyre = () => <ArrowRight className="size-4 shrink-0 self-center text-zinc-400" aria-hidden />;
const Kol = ({ children }: { children: ReactNode }) => <div className="flex flex-col gap-2">{children}</div>;
const Etikett = ({ children }: { children: ReactNode }) => (
  <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{children}</p>
);

export type Diagram = { tittel: string; tekst?: string; figur: ReactNode };

export const diagrammer: Record<string, Diagram[]> = {
  "1": [
    {
      tittel: "Riktighet og relevans er uavhengige",
      tekst: "Et argument gir bare støtte når begge er på plass. Standpunkt: «Kaffe øker kreftrisikoen».",
      figur: (
        <div className="grid grid-cols-[auto_1fr_1fr] gap-2 text-sm">
          <span />
          <Etikett>Relevant</Etikett>
          <Etikett>Ikke relevant</Etikett>
          <Etikett>Riktig</Etikett>
          <B v="g">Gir støtte til standpunktet</B>
          <B>
            «De fleste som dør av kreft i Norge, drikker kaffe»
            <S>de fleste voksne drikker kaffe</S>
          </B>
          <Etikett>Ikke riktig</Etikett>
          <B>«Koffein er kreftfremkallende»</B>
          <B v="r">Gir ingen støtte</B>
        </div>
      ),
    },
  ],
  "2": [
    {
      tittel: "Argumentstruktur",
      tekst:
        "Standpunktet øverst, argumentene under. Påstandene i et sammensatt argument gir bare én grunn sammen; de implisitte (stiplet) må du selv formulere. Et motargument kan rette seg mot riktigheten (påstanden) eller relevansen (forbindelsen).",
      figur: (
        <div className="space-y-2">
          <B v="a">
            <Etikett>Standpunkt</Etikett>
            Norge bør bruke mer av statsbudsjettet på forsvar
          </B>
          <Opp />
          <div className="rounded-xl border border-zinc-200 p-2 dark:border-zinc-800">
            <p className="mb-2 text-center text-xs text-zinc-500">Sammensatt standpunktargument</p>
            <div className="grid gap-2 sm:grid-cols-3">
              <B>Alle NATO-medlemmer forventes å bruke minst 2 % av BNP på forsvar</B>
              <B v="s">
                Norge er medlem av NATO <S>implisitt</S>
              </B>
              <B v="s">
                Norge bruker i dag under 2 % av BNP på forsvar <S>implisitt</S>
              </B>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <Kol>
              <Opp />
              <B>
                Indirekte argument
                <S>støtter én av påstandene, f.eks. statistikk over forsvarsbudsjettet</S>
              </B>
            </Kol>
            <Kol>
              <Opp />
              <B v="r">
                Motargument
                <S>mot riktighet: «påstanden stemmer ikke» · mot relevans: «den taler ikke for standpunktet»</S>
              </B>
            </Kol>
          </div>
        </div>
      ),
    },
  ],
  "3": [
    {
      tittel: "Typer argumenter og hvordan de vurderes",
      figur: (
        <div className="grid gap-4 sm:grid-cols-2">
          <Kol>
            <B v="a">
              Deduktive
              <S>konklusjonen følger med nødvendighet</S>
            </B>
            <Ned />
            <B v="g">
              Modus ponens <S>hvis p så q · p · altså q</S>
            </B>
            <B v="g">
              Modus tollens <S>hvis p så q · ikke q · altså ikke p</S>
            </B>
            <B v="r">
              Å bekrefte konsekvensen (ugyldig) <S>hvis p så q · q · altså p</S>
            </B>
          </Kol>
          <Kol>
            <B v="a">
              Induktive
              <S>premissene sannsynliggjør · relevans i grader</S>
            </B>
            <Ned />
            <B>
              Generalisering <S>størrelse · representativitet</S>
            </B>
            <B>
              Induktiv syllogisme <S>størrelse · representativitet for tilfellet</S>
            </B>
            <B>
              Analogi <S>relevante likheter · relevante ulikheter</S>
            </B>
            <B>
              Abduksjon <S>forklaringskraft · konservativitet · enkelhet · konkurranse</S>
            </B>
          </Kol>
        </div>
      ),
    },
  ],
  "4": [
    {
      tittel: "Korrelasjon er ikke kausalitet",
      tekst: "Issalg og drukningsulykker øker samtidig, men det er varmt vær som forårsaker begge.",
      figur: (
        <div className="space-y-2">
          <B v="a" className="mx-auto max-w-48">
            Varmt vær
          </B>
          <div className="grid grid-cols-2 gap-2">
            <Ned />
            <Ned />
            <B>Mer issalg</B>
            <B>Flere drukningsulykker</B>
          </div>
          <p className="flex items-center justify-center gap-2 text-xs text-zinc-500">
            <ArrowLeftRight className="size-4" aria-hidden /> korrelasjon, ikke årsak
          </p>
        </div>
      ),
    },
  ],
  "5": [
    {
      tittel: "Den hypotetisk-deduktive metoden",
      tekst:
        "Asymmetrien: avkreftelse er deduktivt gyldig (modus tollens), bekreftelse er det ikke (å bekrefte konsekvensen). Men prediksjonen forutsetter hjelpeantakelser, så heller ikke falsifisering er helt sikker.",
      figur: (
        <div className="space-y-2">
          <B>
            1. Formuler hypotese h <S>Universet startet med Big Bang</S>
          </B>
          <Ned />
          <B>
            2. Utled observerbar konsekvens: hvis h, så e <S>Det finnes kosmisk bakgrunnsstråling</S>
          </B>
          <Ned />
          <B>
            3. Test om e inntreffer <S>COBE-satellitten målte strålingen</S>
          </B>
          <div className="grid grid-cols-2 gap-2">
            <Ned />
            <Ned />
            <B v="g">
              e inntraff → h bekreftet <S>styrket, men ikke bevist</S>
            </B>
            <B v="r">
              e inntraff ikke → h avkreftet <S>med mindre en hjelpeantakelse sviktet</S>
            </B>
          </div>
        </div>
      ),
    },
  ],
  "7": [
    {
      tittel: "Base rate: sjelden sykdom, 99 % pålitelig test",
      tekst:
        "Rundt 10 001 får positivt svar, men bare én av dem er syk. En positiv test gjør det mer sannsynlig at du er syk, men det er fortsatt langt mer sannsynlig at testen tok feil.",
      figur: (
        <div className="space-y-2">
          <B v="a">1 000 000 testes</B>
          <div className="grid grid-cols-2 gap-2">
            <Ned />
            <Ned />
            <B>1 er syk</B>
            <B>999 999 er friske</B>
            <Ned />
            <Ned />
            <B v="g">
              1 positiv <S>riktig</S>
            </B>
            <B v="r">
              ca. 10 000 positive <S>1 % feil gir falske positive</S>
            </B>
          </div>
        </div>
      ),
    },
  ],
  "9": [
    {
      tittel: "Kuhns syklus",
      figur: (
        <div className="space-y-3">
          <div className="mx-auto flex max-w-xs flex-col gap-2">
            <B v="a">Paradigme</B>
            <Ned />
            <B>
              Normalvitenskap <S>problemløsning innenfor paradigmet</S>
            </B>
            <Ned />
            <B>
              Anomalier <S>resultater som ikke passer</S>
            </B>
            <Ned />
            <B v="r">Krise</B>
            <Ned />
            <B>
              Revolusjon <S>paradigmeskifte</S>
            </B>
            <Ned />
            <B v="a">Nytt paradigme</B>
          </div>
          <p className="flex items-center justify-center gap-2 text-xs text-zinc-500">
            <RotateCcw className="size-4" aria-hidden /> ny normalvitenskap, og syklusen starter på nytt
          </p>
        </div>
      ),
    },
  ],
  "12": [
    {
      tittel: "Kropp/sinn-problemet: hovedposisjonene",
      figur: (
        <div className="space-y-2">
          <B v="a">Hvordan forholder sinnet seg til kroppen?</B>
          <div className="grid gap-3 sm:grid-cols-[1fr_2fr]">
            <Kol>
              <Ned />
              <B>
                Substansdualisme (Descartes)
                <S>to substanser: res extensa og res cogitans</S>
              </B>
              <B v="r">
                Interaksjonsproblemet <S>Elisabeth av Böhmen</S>
              </B>
            </Kol>
            <Kol>
              <Ned />
              <B>
                Fysikalisme <S>alt er i bunn og grunn fysisk</S>
              </B>
              <div className="grid grid-cols-2 gap-2">
                <Kol>
                  <B>
                    Identitetsteori <S>smerte = C-fiberfyring</S>
                  </B>
                  <B v="r">
                    Nevroplastisitet <S>locked-in, BCI</S>
                  </B>
                </Kol>
                <Kol>
                  <B>
                    Funksjonalisme <S>funksjonell profil, multippel realisering</S>
                  </B>
                  <B v="s">
                    Utvidet sinn <S>Clark og Chalmers</S>
                  </B>
                  <B v="r">
                    Det kinesiske rommet <S>Searle</S>
                  </B>
                </Kol>
              </div>
              <B v="r">
                Kunnskapsargumentet <S>Mary (Jackson): ikke alle fakta er fysiske</S>
              </B>
            </Kol>
          </div>
        </div>
      ),
    },
  ],
  "13": [
    {
      tittel: "Tre teknologisyn",
      tekst: "Boka konkluderer med at teknologi kan forme, men ikke bestemme, og at vi trenger teknologibevissthet.",
      figur: (
        <div className="space-y-3">
          {(
            [
              ["Instrumentalisme", ArrowRight, "Vi styrer nøytrale verktøy. Bruken avgjør."],
              ["Determinisme", ArrowLeft, "Teknologien legger premissene. Verdiladet."],
              ["Relasjonelt syn", ArrowLeftRight, "Vi former teknologien, og den former oss."],
            ] as const
          ).map(([navn, Pil, tekst]) => (
            <div key={navn} className="space-y-1">
              <p className="text-sm font-medium">{navn}</p>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <B>Menneske</B>
                <Pil className="size-5 text-zinc-500" aria-hidden />
                <B>Teknologi</B>
              </div>
              <p className="text-xs text-zinc-500">{tekst}</p>
            </div>
          ))}
        </div>
      ),
    },
  ],
  "14": [
    {
      tittel: "Metaetikk: finnes det moralsk rett og galt?",
      figur: (
        <div className="grid gap-3 sm:grid-cols-3">
          <Kol>
            <B v="a">Objektivisme</B>
            <B>
              Det finnes en allmenngyldig standard <S>utilitarisme, pliktetikk, dydsetikk</S>
            </B>
          </Kol>
          <Kol>
            <B v="a">Kulturrelativisme</B>
            <B>Gyldighet er relativ til kulturen</B>
            <B v="r">
              Uenighet ≠ ingen sannhet <S>vaksiner virker</S>
            </B>
            <B v="r">
              Gjør moralsk fremskritt umulig <S>stemmerett 1888</S>
            </B>
          </Kol>
          <Kol>
            <B v="a">Nihilisme</B>
            <B>
              Det finnes ikke noe moralsk rett og galt <S>feilteori · ekspressivisme: «Dødsstraff, bu!»</S>
            </B>
          </Kol>
        </div>
      ),
    },
  ],
  "15": [
    {
      tittel: "Hva de tre teoriene ser på",
      tekst:
        "Utilitarisme og pliktetikk er handlingsorienterte: de gir prinsipper for hvilke handlinger som er rette. Dydsetikk er aktørorientert: hva slags person bør jeg være?",
      figur: (
        <div className="grid gap-3 sm:grid-cols-3">
          {(
            [
              ["Aktøren", "Dydsetikk", "hva ville en dydig person gjort?"],
              ["Handlingen", "Pliktetikk", "følger handlingen moralske plikter?"],
              ["Konsekvensene", "Utilitarisme", "gir den de beste konsekvensene?"],
            ] as const
          ).map(([fokus, teori, sporsmal]) => (
            <Kol key={fokus}>
              <B v="a">{fokus}</B>
              <Opp />
              <B>
                {teori} <S>{sporsmal}</S>
              </B>
            </Kol>
          ))}
        </div>
      ),
    },
  ],
  "19": [
    {
      tittel: "Skadeprinsippet i praksis",
      figur: (
        <div className="space-y-2">
          <B v="a">Skader handlingen andre?</B>
          <div className="grid grid-cols-2 gap-2">
            <Kol>
              <Ned />
              <B v="g">
                Ja: inngrep kan være tillatt <S>tvang er bare tillatt for å hindre skade på andre</S>
              </B>
            </Kol>
            <Kol>
              <Ned />
              <B v="a">Nei: forstår personen risikoen?</B>
              <div className="grid grid-cols-2 gap-2">
                <Kol>
                  <Ned />
                  <B v="g">
                    Usikkert: myk paternalisme <S>hindre til risikoen er forstått</S>
                  </B>
                </Kol>
                <Kol>
                  <Ned />
                  <B v="r">
                    Ja: hard paternalisme <S>bryter skadeprinsippet, f.eks. forbud mot proffboksing</S>
                  </B>
                </Kol>
              </div>
            </Kol>
          </div>
        </div>
      ),
    },
  ],
  "20": [
    {
      tittel: "Tre måter å forstå frihet på",
      tekst:
        "Slaven med en velvillig herre opplever få hindringer, men er ufri: det er opp til herren hvor stort handlingsrom hun har.",
      figur: (
        <div className="grid gap-3 sm:grid-cols-[2fr_1fr]">
          <Kol>
            <B v="a">Negativ frihet</B>
            <div className="grid grid-cols-2 gap-2">
              <B>
                Ikke-innblanding (Mill) <S>ingen hindrer meg</S>
              </B>
              <B>
                Ikke-dominans (Kant, Wollstonecraft) <S>ingen kan utøve vilkårlig makt over meg</S>
              </B>
              <B v="g">
                Slaven: langt på vei fri <S>få hindringer</S>
              </B>
              <B v="r">
                Slaven: ufri <S>prisgitt herrens velvilje</S>
              </B>
            </div>
          </Kol>
          <Kol>
            <B v="a">Positiv frihet</B>
            <B>
              Aktørinterne faktorer for selvbestemmelse <S>skoleplikt kan fremme frihet</S>
            </B>
          </Kol>
        </div>
      ),
    },
  ],
  "22": [
    {
      tittel: "Valgdemokrati og deliberativt demokrati",
      figur: (
        <div className="grid gap-4 sm:grid-cols-2">
          <Kol>
            <Etikett>Valgdemokrati (aggregativt)</Etikett>
            <B>Individuelle preferanser</B>
            <Ned />
            <B>Stemmegivning</B>
            <Ned />
            <B v="a">Flertallet avgjør</B>
          </Kol>
          <Kol>
            <Etikett>Deliberativt (Habermas)</Etikett>
            <B>Preferanser</B>
            <Ned />
            <B>
              Fri og lik meningsbrytning <S>«kraften i de bedre argumenter»</S>
            </B>
            <Ned />
            <B>Preferanser kan endres · enighet eller avstemning</B>
            <Ned />
            <B v="a">
              Vedtak <S>aldri endelig: mindretallet kan argumentere videre</S>
            </B>
          </Kol>
        </div>
      ),
    },
  ],
  ingenioransvar: [
    {
      tittel: "Aktivt og passivt ansvar",
      tekst: "Klanderverdighet krever at alle fire betingelsene er oppfylt (van de Poel og Royakkers).",
      figur: (
        <div className="space-y-4">
          <div className="grid grid-cols-[1fr_auto_auto_auto_1fr] items-center gap-1.5">
            <B v="g">
              Aktivt ansvar <S>før: forebygge skade</S>
            </B>
            <Hoyre />
            <B v="a">Hendelse</B>
            <Hoyre />
            <B v="r">
              Passivt ansvar <S>etter: redegjøre og klandres</S>
            </B>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <B>1. Normbrudd</B>
            <B>2. Kausal forbindelse</B>
            <B>3. Forutsigbarhet</B>
            <B>4. Handlefrihet</B>
          </div>
        </div>
      ),
    },
  ],
  miljoetikk: [
    {
      tittel: "Hva er i sentrum for etikken?",
      tekst:
        "Antroposentrismen gir naturen instrumentell verdi. Utilitarismen er et delvis unntak: Bentham og Singer inkluderer alle følende vesener.",
      figur: (
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="absolute inset-0 rounded-full border border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/40" />
          <div className="absolute inset-[17%] rounded-full border border-emerald-400 bg-emerald-100 dark:border-emerald-700 dark:bg-emerald-900/40" />
          <div className="absolute inset-[34%] flex flex-col items-center justify-center rounded-full border border-zinc-900 bg-zinc-900 text-center text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900">
            <span className="text-sm font-medium">Mennesket</span>
            <span className="text-xs opacity-75">antroposentrisme</span>
          </div>
          <p className="absolute inset-x-0 top-[4%] text-center text-sm font-medium leading-tight">
            Økosystemer
            <span className="block text-xs font-normal opacity-75">økosentrisme (Leopold)</span>
          </p>
          <p className="absolute inset-x-0 top-[20%] text-center text-sm font-medium leading-tight">
            Alt levende
            <span className="block text-xs font-normal opacity-75">biosentrisme (Schweitzer, Taylor)</span>
          </p>
        </div>
      ),
    },
  ],
  baerekraft: [
    {
      tittel: "Svak og sterk bærekraft",
      tekst:
        "Føre-var-prinsippet ligger et sted mellom: kan en handling gi alvorlig eller uopprettelig skade, ligger bevisbyrden på den som vil gjennomføre den.",
      figur: (
        <div className="grid gap-4 sm:grid-cols-2">
          <Kol>
            <Etikett>Svak bærekraft</Etikett>
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-1">
              <B v="g">Miljø</B>
              <ArrowLeftRight className="size-4 text-zinc-400" aria-hidden />
              <B>Økonomi</B>
              <ArrowLeftRight className="size-4 text-zinc-400" aria-hidden />
              <B>Sosialt</B>
            </div>
            <p className="text-xs text-zinc-500">Veies likt. Miljøskade kan veksles mot store økonomiske eller sosiale gevinster.</p>
          </Kol>
          <Kol>
            <Etikett>Sterk bærekraft</Etikett>
            <B v="g">Miljø har forrang</B>
            <div className="grid grid-cols-2 gap-1">
              <B>Økonomi</B>
              <B>Sosialt</B>
            </div>
            <p className="text-xs text-zinc-500">Miljøskade kan ikke veksles mot de to andre.</p>
          </Kol>
        </div>
      ),
    },
  ],
};
