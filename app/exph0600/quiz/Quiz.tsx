"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { QuizSporsmal } from "@/content/exph0600/quiz";
import { registrer } from "../quizStats";

export type Sporsmal = QuizSporsmal & { del: number; kapittelTittel: string };

type Runde = {
  items: { q: Sporsmal; alternativer: string[]; riktig: number }[];
  svar: (number | null)[];
  i: number;
};

function stokk<T>(xs: T[]): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const chip = (aktiv: boolean) =>
  `rounded-full border px-3 py-1 text-sm transition-colors ${
    aktiv
      ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
      : "border-zinc-300 hover:border-zinc-500 dark:border-zinc-700"
  }`;

export default function Quiz({ sporsmal, deler }: { sporsmal: Sporsmal[]; deler: { nr: number; tittel: string }[] }) {
  const [del, setDel] = useState<number | null>(null);
  const [kap, setKap] = useState<string | null>(null);
  const [antall, setAntall] = useState(10);
  const [runde, setRunde] = useState<Runde | null>(null);

  const utvalg = sporsmal.filter((q) => (kap ? q.kapittel === kap : del === null || q.del === del));
  const kapitler = useMemo(() => {
    const m = new Map<string, string>();
    for (const q of sporsmal) if (del === null || q.del === del) m.set(q.kapittel, q.kapittelTittel);
    return [...m];
  }, [sporsmal, del]);

  function start(fra: Sporsmal[]) {
    const items = stokk(fra)
      .slice(0, antall)
      .map((q) => {
        const rekkefolge = stokk(q.alternativer.map((_, i) => i));
        return { q, alternativer: rekkefolge.map((i) => q.alternativer[i]), riktig: rekkefolge.indexOf(0) };
      });
    setRunde({ items, svar: items.map(() => null), i: 0 });
  }

  if (!runde) {
    return (
      <div className="space-y-6">
        <fieldset className="space-y-2">
          <legend className="text-sm font-medium">Del</legend>
          <div className="flex flex-wrap gap-2">
            <button className={chip(del === null)} onClick={() => (setDel(null), setKap(null))}>
              Alle
            </button>
            {deler.map((d) => (
              <button key={d.nr} className={chip(del === d.nr)} onClick={() => (setDel(d.nr), setKap(null))}>
                {d.nr}. {d.tittel}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="block space-y-2">
          <span className="text-sm font-medium">Kapittel</span>
          <select
            value={kap ?? ""}
            onChange={(e) => setKap(e.target.value || null)}
            className="block w-full rounded-lg border border-zinc-300 bg-transparent px-3 py-2 dark:border-zinc-700"
          >
            <option value="">Alle kapitler {del ? `i del ${del}` : ""}</option>
            {kapitler.map(([slug, tittel]) => (
              <option key={slug} value={slug}>
                {/^\d+$/.test(slug) ? `${slug}. ` : ""}
                {tittel}
              </option>
            ))}
          </select>
        </label>

        <fieldset className="space-y-2">
          <legend className="text-sm font-medium">Antall spørsmål</legend>
          <div className="flex gap-2">
            {[5, 10, 20, 1000].map((n) => (
              <button key={n} className={chip(antall === n)} onClick={() => setAntall(n)}>
                {n === 1000 ? "Alle" : n}
              </button>
            ))}
          </div>
        </fieldset>

        <button
          onClick={() => start(utvalg)}
          disabled={utvalg.length === 0}
          className="rounded-lg bg-zinc-900 px-5 py-2.5 font-medium text-white hover:bg-zinc-700 disabled:opacity-40 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Start ({Math.min(antall, utvalg.length)} spørsmål)
        </button>
      </div>
    );
  }

  const ferdig = runde.i >= runde.items.length;
  const poeng = runde.items.filter((it, i) => runde.svar[i] === it.riktig).length;

  if (ferdig) {
    const feil = runde.items.filter((it, i) => runde.svar[i] !== it.riktig);
    return (
      <div className="space-y-6">
        <div className="rounded-xl bg-zinc-100 p-6 text-center dark:bg-zinc-900">
          <p className="text-4xl font-semibold tabular-nums">
            {poeng} / {runde.items.length}
          </p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">riktige svar</p>
        </div>
        {feil.length > 0 && (
          <div className="space-y-3">
            <h2 className="font-semibold">Disse bør du lese mer på</h2>
            <ul className="space-y-3">
              {feil.map(({ q }) => (
                <li key={q.id} className="rounded-xl border border-zinc-200 p-4 text-sm dark:border-zinc-800">
                  <p className="font-medium">{q.sporsmal}</p>
                  <p className="mt-1 text-emerald-700 dark:text-emerald-400">{q.alternativer[0]}</p>
                  <Link href={`/exph0600/pensum/${q.kapittel}`} className="mt-2 inline-block text-zinc-500 underline">
                    {q.kapittelTittel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex gap-3">
          <button
            onClick={() => start(runde.items.map((it) => it.q))}
            className="rounded-lg border border-zinc-300 px-4 py-2 hover:border-zinc-500 dark:border-zinc-700"
          >
            Samme spørsmål igjen
          </button>
          <button
            onClick={() => setRunde(null)}
            className="rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
          >
            Ny runde
          </button>
        </div>
      </div>
    );
  }

  const it = runde.items[runde.i];
  const valgt = runde.svar[runde.i];
  const besvart = valgt !== null;

  function svar(i: number) {
    if (besvart || !runde) return;
    registrer(it.q.kapittel, i === it.riktig);
    setRunde({ ...runde, svar: runde.svar.map((s, j) => (j === runde.i ? i : s)) });
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between text-sm text-zinc-500">
        <span className="tabular-nums">
          {runde.i + 1} / {runde.items.length}
        </span>
        <button onClick={() => setRunde(null)} className="hover:underline">
          Avslutt
        </button>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
        <div className="h-full bg-zinc-900 dark:bg-zinc-100" style={{ width: `${(runde.i / runde.items.length) * 100}%` }} />
      </div>

      <p className="text-sm text-zinc-500">
        Del {it.q.del} · {it.q.kapittelTittel}
      </p>
      <h2 className="text-lg font-medium">{it.q.sporsmal}</h2>

      <ul className="space-y-2">
        {it.alternativer.map((a, i) => {
          const farge = !besvart
            ? "border-zinc-200 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            : i === it.riktig
              ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40"
              : i === valgt
                ? "border-red-400 bg-red-50 dark:bg-red-950/40"
                : "border-zinc-200 opacity-60 dark:border-zinc-800";
          return (
            <li key={a}>
              <button
                onClick={() => svar(i)}
                disabled={besvart}
                className={`flex w-full gap-3 rounded-xl border p-4 text-left transition-colors ${farge}`}
              >
                <span className="font-mono text-zinc-400">{"ABCD"[i]}</span>
                <span>{a}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div aria-live="polite">
        {besvart && (
          <div className="space-y-4">
            <div className="rounded-xl bg-zinc-100 p-4 text-sm dark:bg-zinc-900">
              <p className="font-medium">{valgt === it.riktig ? "Riktig!" : "Ikke helt."}</p>
              <p className="mt-1 text-zinc-700 dark:text-zinc-300">{it.q.forklaring}</p>
              <Link href={`/exph0600/pensum/${it.q.kapittel}`} className="mt-2 inline-block text-zinc-500 underline">
                Les kapitlet
              </Link>
            </div>
            <button
              autoFocus
              onClick={() => setRunde({ ...runde, i: runde.i + 1 })}
              className="rounded-lg bg-zinc-900 px-5 py-2.5 font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
            >
              {runde.i + 1 < runde.items.length ? "Neste" : "Se resultat"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
