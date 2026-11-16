import type { Metadata } from "next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { deler, finnKapittel, kapitler } from "@/content/exph0600/kapitler";
import { kortsvar } from "@/content/exph0600/ovelser";
import { KortsvarKort } from "../_ove/Besvar";

export const metadata: Metadata = { title: "Kortsvar · EXPH0600" };

const titler = Object.fromEntries(kapitler.map((k) => [k.slug, k.tittel]));

export default function KortsvarSide() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <Link href="/exph0600" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:underline">
          <ChevronLeft className="size-4" aria-hidden />
          EXPH0600
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">Kortsvar</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Skriv ditt eget svar først, bruk ca. 15 minutter, og sammenlign så med modellsvaret og sjekklisten. Svarene
          dine lagres i nettleseren. Vil du øve som på eksamen, ta en{" "}
          <Link href="/exph0600/proveeksamen" className="underline">
            prøveeksamen
          </Link>
          . Flere spørsmål uten modellsvar finner du nederst på hver{" "}
          <Link href="/exph0600/pensum" className="underline">
            kapittelside
          </Link>
          .
        </p>
      </header>

      {deler.map((d) => {
        const liste = kortsvar.filter((k) => finnKapittel(k.kapittel)?.del === d.nr);
        if (liste.length === 0) return null;
        return (
          <section key={d.nr} className="space-y-4">
            <h2 className="text-lg font-semibold">
              Del {d.nr}: {d.tittel}
            </h2>
            {liste.map((k) => (
              <details key={k.id} className="group overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                <summary className="flex cursor-pointer list-none items-start gap-2 px-4 py-3 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900">
                  <ChevronRight className="mt-0.5 size-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-90" aria-hidden />
                  {k.sporsmal}
                </summary>
                <div className="border-t border-zinc-200 p-4 dark:border-zinc-800">
                  <KortsvarKort k={k} titler={titler} />
                </div>
              </details>
            ))}
          </section>
        );
      })}
    </div>
  );
}
