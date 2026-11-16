import type { Metadata } from "next";
import Link from "next/link";
import { deler, kapitler } from "@/content/exph0600/kapitler";

export const metadata: Metadata = { title: "Pensum · EXPH0600" };

export default function Pensum() {
  return (
    <div className="space-y-10">
      <section className="space-y-2">
        <Link href="/exph0600" className="text-sm text-zinc-500 hover:underline">
          ← EXPH0600
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">Pensum</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Hvert kapittel har kjernen, nøkkelbegreper, teorier med styrker og svakheter, og typiske eksamensspørsmål.
        </p>
      </section>

      {deler.map((d) => (
        <section key={d.nr} className="space-y-3">
          <div>
            <h2 className="text-lg font-semibold">
              Del {d.nr}: {d.tittel}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{d.intro}</p>
          </div>
          <ul className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
            {kapitler
              .filter((k) => k.del === d.nr)
              .map((k) => (
                <li key={k.slug}>
                  <Link
                    href={`/exph0600/pensum/${k.slug}`}
                    className="flex items-baseline gap-3 px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                  >
                    <span className="w-8 shrink-0 font-mono text-sm text-zinc-500">
                      {/^\d+$/.test(k.slug) ? k.slug : "+"}
                    </span>
                    <span>{k.tittel}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
