import type { Metadata } from "next";
import Link from "next/link";
import { kapitler } from "@/content/exph0600/kapitler";
import Nedtelling from "./Nedtelling";
import SvakeOmrader from "./SvakeOmrader";

const titler = Object.fromEntries(kapitler.map((k) => [k.slug, k.tittel]));

export const metadata: Metadata = { title: "EXPH0600 Ex.phil." };

const seksjoner = [
  {
    href: "/exph0600/pensum",
    tittel: "Pensum",
    tekst: "Alle kapitler i Tenk! og tilleggstekstene, kokt ned til det du må kunne.",
  },
  {
    href: "/exph0600/guide",
    tittel: "Eksamensguide",
    tekst: "Slik svarer du på kortsvar og caseoppgaven, tidsbruk og leseplan.",
  },
  { href: "/exph0600/quiz", tittel: "Quiz", tekst: "Flervalgsspørsmål per del og kapittel." },
  { href: "/exph0600/kortsvar", tittel: "Kortsvar", tekst: "Skriv svar og sammenlign med modellsvar og sjekkliste." },
  { href: "/exph0600/case", tittel: "Caseoppgaver", tekst: "Seks caser med løsningsskisse etter guidens fem steg." },
  { href: "/exph0600/proveeksamen", tittel: "Prøveeksamen", tekst: "Fire kortsvar og én av to caser på fire timer." },
];

export default function Exph0600() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="font-mono text-sm text-zinc-500">EXPH0600</p>
        <h1 className="text-3xl font-semibold tracking-tight">Examen philosophicum for ingeniørfag</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          <Nedtelling />
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        {seksjoner.map((s) =>
          s.href ? (
            <Link
              key={s.tittel}
              href={s.href}
              className="block rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <p className="font-medium">{s.tittel}</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{s.tekst}</p>
            </Link>
          ) : (
            <div
              key={s.tittel}
              className="rounded-xl border border-dashed border-zinc-200 p-5 text-zinc-400 dark:border-zinc-800 dark:text-zinc-600"
            >
              <p className="font-medium">
                {s.tittel} <span className="text-xs font-normal">· kommer</span>
              </p>
              <p className="mt-1 text-sm">{s.tekst}</p>
            </div>
          ),
        )}
      </section>

      <SvakeOmrader titler={titler} />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Eksamen</h2>
        <p>
          Onsdag 9. desember 2026, kl. 09–13. Fire timer skoleeksamen <strong>uten hjelpemidler</strong>. Begge
          delene må bestås.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-zinc-100 p-5 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500">Teller 1/3</p>
            <p className="font-medium">Kortsvar</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Fire spørsmål fra ulike deler av pensum. Svar på noen linjer eller ett avsnitt. Tester forståelse av
              begreper og teorier, ikke navn og årstall.
            </p>
          </div>
          <div className="rounded-xl bg-zinc-100 p-5 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500">Teller 2/3</p>
            <p className="font-medium">Langsvar (case)</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Velg én av to caseoppgaver. Bruk pensumteori på et konkret tilfelle, samme fremgangsmåte som i
              modulenes caseoppgaver.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
