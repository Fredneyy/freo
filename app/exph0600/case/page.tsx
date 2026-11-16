import type { Metadata } from "next";
import Link from "next/link";
import { kapitler } from "@/content/exph0600/kapitler";
import { caser } from "@/content/exph0600/ovelser";
import { CaseKort } from "../_ove/Besvar";

export const metadata: Metadata = { title: "Caseoppgaver · EXPH0600" };

const titler = Object.fromEntries(kapitler.map((k) => [k.slug, k.tittel]));

export default function CaseSide() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <Link href="/exph0600" className="text-sm text-zinc-500 hover:underline">
          ← EXPH0600
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">Caseoppgaver</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Les caset, skriv en disposisjon etter de{" "}
          <Link href="/exph0600/guide#case" className="underline">
            fem stegene i guiden
          </Link>
          , og sammenlign med løsningsskissen. Til eksamen har du ca. 2,5 timer på én case.
        </p>
      </header>

      {caser.map((c) => (
        <details key={c.id} className="group rounded-xl border border-zinc-200 dark:border-zinc-800">
          <summary className="cursor-pointer list-none px-4 py-3 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900">
            <span className="mr-2 inline-block text-zinc-400 transition-transform group-open:rotate-90">›</span>
            {c.tittel}
          </summary>
          <div className="border-t border-zinc-200 p-4 dark:border-zinc-800">
            <CaseKort c={c} titler={titler} />
          </div>
        </details>
      ))}
    </div>
  );
}
