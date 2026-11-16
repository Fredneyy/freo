import type { Metadata } from "next";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
        <Link href="/exph0600" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:underline">
          <ChevronLeft className="size-4" aria-hidden />
          EXPH0600
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
        <details key={c.id} className="group overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
          <summary className="flex cursor-pointer list-none items-start gap-2 px-4 py-3 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900">
            <ChevronRight className="mt-0.5 size-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-90" aria-hidden />
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
