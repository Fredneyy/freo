"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { Case, Kortsvar } from "@/content/exph0600/ovelser";
import { CaseKort, KortsvarKort, slettKladder } from "../_ove/Besvar";

const KEY = "freo:exph0600:proveeksamen";
const EVENT = "freo-proveeksamen";
const VARIGHET = 4 * 60 * 60 * 1000;
const PREFIX = "prove-";

type Okt = { ks: string[]; caser: string[]; start: number; levert: boolean };

function lagre(okt: Okt | null) {
  try {
    if (okt) localStorage.setItem(KEY, JSON.stringify(okt));
    else localStorage.removeItem(KEY);
    window.dispatchEvent(new Event(EVENT));
  } catch {}
}
function abonner(cb: () => void) {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}
function les() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function stokk<T>(xs: T[]): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Klokke({ start }: { start: number }) {
  const [na, setNa] = useState(Date.now);
  useEffect(() => {
    const t = setInterval(() => setNa(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const igjen = Math.max(0, start + VARIGHET - na);
  const t = Math.floor(igjen / 3_600_000);
  const m = Math.floor((igjen % 3_600_000) / 60_000);
  const s = Math.floor((igjen % 60_000) / 1000);
  return (
    <span className={`font-mono tabular-nums ${igjen === 0 ? "text-red-600" : ""}`}>
      {igjen === 0 ? "Tiden er ute" : `${t}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")} igjen`}
    </span>
  );
}

export default function Proveeksamen({
  kortsvar,
  caser,
  titler,
}: {
  kortsvar: (Kortsvar & { del: number })[];
  caser: Case[];
  titler: Record<string, string>;
}) {
  const raw = useSyncExternalStore(abonner, les, () => null);
  const okt: Okt | null = raw ? JSON.parse(raw) : null;

  function start() {
    const perDel = new Map<number, Kortsvar[]>();
    for (const k of kortsvar) perDel.set(k.del, [...(perDel.get(k.del) ?? []), k]);
    const ks = stokk([...perDel.values()])
      .slice(0, 4)
      .map((liste) => stokk(liste)[0].id);
    lagre({ ks, caser: stokk(caser).slice(0, 2).map((c) => c.id), start: Date.now(), levert: false });
  }

  function ny() {
    if (okt) slettKladder([...okt.ks, ...okt.caser].map((id) => PREFIX + id));
    lagre(null);
  }

  if (!okt) {
    return (
      <div className="space-y-4">
        <ul className="list-disc space-y-1 pl-5 text-zinc-600 dark:text-zinc-400">
          <li>Fire kortsvar fra fire ulike deler (teller 1/3).</li>
          <li>To caseoppgaver. Velg og besvar én (teller 2/3).</li>
          <li>Fire timer. Klokken fortsetter selv om du lukker siden, og svarene dine lagres i nettleseren.</li>
          <li>Ingen hjelpemidler: ikke åpne pensumsidene underveis.</li>
          <li>Modellsvar og løsningsskisser vises når du leverer.</li>
        </ul>
        <button
          onClick={start}
          className="rounded-lg bg-zinc-900 px-5 py-2.5 font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Start prøveeksamen
        </button>
      </div>
    );
  }

  const ks = okt.ks.map((id) => kortsvar.find((k) => k.id === id)).filter((k) => k !== undefined);
  const cs = okt.caser.map((id) => caser.find((c) => c.id === id)).filter((c) => c !== undefined);
  const felles = { titler, laast: !okt.levert, apen: okt.levert, idPrefix: PREFIX };

  return (
    <div className="space-y-10">
      <div className="sticky top-0 z-10 -mx-4 flex items-center justify-between border-b border-zinc-200 bg-white/90 px-4 py-3 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
        {okt.levert ? <span className="font-medium">Levert: sammenlign med fasit</span> : <Klokke start={okt.start} />}
        {okt.levert ? (
          <button onClick={ny} className="rounded-lg border border-zinc-300 px-4 py-1.5 text-sm dark:border-zinc-700">
            Ny prøveeksamen
          </button>
        ) : (
          <button
            onClick={() => lagre({ ...okt, levert: true })}
            className="rounded-lg bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
          >
            Lever
          </button>
        )}
      </div>

      <section className="space-y-8">
        <h2 className="text-xl font-semibold">Del 1: Kortsvar (1/3)</h2>
        {ks.map((k, i) => (
          <div key={k.id} className="space-y-2">
            <p className="text-sm text-zinc-500">Oppgave {i + 1}</p>
            <KortsvarKort k={k} {...felles} />
          </div>
        ))}
      </section>

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold">Del 2: Langsvar (2/3)</h2>
          <p className="text-zinc-600 dark:text-zinc-400">Velg én av de to caseoppgavene.</p>
        </div>
        {cs.map((c, i) => (
          <div key={c.id} className="space-y-2">
            <p className="text-sm text-zinc-500">Case {"AB"[i]}</p>
            <CaseKort c={c} {...felles} />
          </div>
        ))}
      </section>
    </div>
  );
}
