"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { abonner, lesRaw, nullstill, parse } from "./quizStats";

// Kapitler med minst 2 besvarte spørsmål og under 70 % riktig.
export default function SvakeOmrader({ titler }: { titler: Record<string, string> }) {
  const raw = useSyncExternalStore(abonner, lesRaw, () => null);
  const stats = parse(raw);
  const besvart = Object.values(stats).reduce((n, s) => n + s.totalt, 0);
  if (besvart === 0) return null;

  const svake = Object.entries(stats)
    .filter(([, s]) => s.totalt >= 2 && s.riktig / s.totalt < 0.7)
    .sort(([, a], [, b]) => a.riktig / a.totalt - b.riktig / b.totalt);

  return (
    <section className="space-y-3">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">Svake områder</h2>
        <button onClick={nullstill} className="text-sm text-zinc-500 hover:underline">
          Nullstill
        </button>
      </div>
      {svake.length === 0 ? (
        <p className="text-zinc-600 dark:text-zinc-400">
          Ingen kapitler under 70 % etter {besvart} besvarte quizspørsmål. Bra!
        </p>
      ) : (
        <ul className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
          {svake.map(([slug, s]) => (
            <li key={slug}>
              <Link
                href={`/exph0600/pensum/${slug}`}
                className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-900"
              >
                <span>{titler[slug] ?? slug}</span>
                <span className="font-mono text-sm text-red-600 tabular-nums dark:text-red-400">
                  {s.riktig}/{s.totalt}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
