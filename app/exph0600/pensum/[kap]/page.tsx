import type { Metadata } from "next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { deler, finnKapittel, kapitler } from "@/content/exph0600/kapitler";

// Alle kapitler er forhåndsrendret. params avventes utenfor Suspense slik at ukjente slugs gir ekte 404-status.
export const instant = false;

export function generateStaticParams() {
  return kapitler.map((k) => ({ kap: k.slug }));
}

export async function generateMetadata({ params }: PageProps<"/exph0600/pensum/[kap]">): Promise<Metadata> {
  const k = finnKapittel((await params).kap);
  return { title: k ? `${k.tittel} · EXPH0600` : "Fant ikke kapittel" };
}

export default async function KapittelSide({ params }: PageProps<"/exph0600/pensum/[kap]">) {
  const { kap } = await params;
  const k = finnKapittel(kap);
  if (!k) notFound();

  const i = kapitler.indexOf(k);
  const forrige = kapitler[i - 1];
  const neste = kapitler[i + 1];
  const del = deler.find((d) => d.nr === k.del)!;

  return (
    <article className="space-y-10">
      <header className="space-y-2">
        <Link href="/exph0600/pensum" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:underline">
          <ChevronLeft className="size-4" aria-hidden />
          Pensum · Del {del.nr}: {del.tittel}
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">{k.tittel}</h1>
        <p className="text-sm text-zinc-500">
          {k.kilde}
          {k.forelesning && ` · Forelesning ${k.forelesning.join(", ")}`}
        </p>
      </header>

      <section className="rounded-xl bg-zinc-100 p-5 leading-relaxed dark:bg-zinc-900">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-zinc-500">Kjernen</h2>
        <p>{k.kjerne}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Nøkkelbegreper</h2>
        <dl className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {k.begreper.map(([term, forklaring]) => (
            <div key={term} className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium">{term}</dt>
              <dd className="mt-1 text-zinc-700 sm:col-span-2 sm:mt-0 dark:text-zinc-300">{forklaring}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Teorier og poenger</h2>
        {k.teorier.map((t) => (
          <div key={t.navn} className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
            <h3 className="font-medium">{t.navn}</h3>
            {t.tekst && <p className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">{t.tekst}</p>}
            {(t.for || t.mot) && (
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {t.for && <Liste tittel="For / styrker" punkter={t.for} farge="text-emerald-600 dark:text-emerald-400" />}
                {t.mot && <Liste tittel="Mot / svakheter" punkter={t.mot} farge="text-rose-600 dark:text-rose-400" />}
              </div>
            )}
          </div>
        ))}
      </section>

      {k.case && (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Bruk i caseoppgaven</h2>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{k.case}</p>
        </section>
      )}

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Typiske eksamensspørsmål</h2>
        <ul className="list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
          {k.eksamen.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <nav className="flex justify-between gap-4 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800">
        {forrige ? (
          <Link href={`/exph0600/pensum/${forrige.slug}`} className="inline-flex items-center gap-1 hover:underline">
            <ChevronLeft className="size-4 shrink-0" aria-hidden />
            {forrige.tittel}
          </Link>
        ) : (
          <span />
        )}
        {neste && (
          <Link href={`/exph0600/pensum/${neste.slug}`} className="inline-flex items-center gap-1 text-right hover:underline">
            {neste.tittel}
            <ChevronRight className="size-4 shrink-0" aria-hidden />
          </Link>
        )}
      </nav>
    </article>
  );
}

function Liste({ tittel, punkter, farge }: { tittel: string; punkter: string[]; farge: string }) {
  return (
    <div>
      <p className={`text-sm font-medium ${farge}`}>{tittel}</p>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
        {punkter.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
