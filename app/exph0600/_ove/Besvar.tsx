"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Case, Kortsvar } from "@/content/exph0600/ovelser";

const PREFIX = "freo:exph0600:svar:";

export function slettKladder(ids: string[]) {
  try {
    for (const id of ids) localStorage.removeItem(PREFIX + id);
  } catch {}
}

// Tekstfelt der kladden lagres i nettleseren (uten state, så serveren og klienten rendrer likt).
function Svarfelt({ id, rader, plassholder }: { id: string; rader: number; plassholder: string }) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    try {
      const lagret = localStorage.getItem(PREFIX + id);
      if (lagret && ref.current) ref.current.value = lagret;
    } catch {}
  }, [id]);
  return (
    <textarea
      ref={ref}
      rows={rader}
      placeholder={plassholder}
      onChange={(e) => {
        try {
          localStorage.setItem(PREFIX + id, e.target.value);
        } catch {}
      }}
      className="block w-full rounded-lg border border-zinc-300 bg-transparent p-3 leading-relaxed dark:border-zinc-700"
    />
  );
}

function Fasit({ tittel, children }: { tittel: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3 rounded-xl bg-zinc-100 p-5 text-sm dark:bg-zinc-900">
      <p className="font-medium">{tittel}</p>
      {children}
    </div>
  );
}

function Sjekkliste({ punkter }: { punkter: string[] }) {
  const [huket, setHuket] = useState<boolean[]>(() => punkter.map(() => false));
  const antall = huket.filter(Boolean).length;
  return (
    <div className="space-y-2">
      <p className="font-medium">
        Sjekkliste: fikk du med …{" "}
        <span className="font-mono text-zinc-500 tabular-nums">
          {antall}/{punkter.length}
        </span>
      </p>
      <ul className="space-y-1">
        {punkter.map((p, i) => (
          <li key={p}>
            <label className="flex cursor-pointer gap-2">
              <input
                type="checkbox"
                checked={huket[i]}
                onChange={() => setHuket(huket.map((h, j) => (j === i ? !h : h)))}
                className="mt-1"
              />
              <span>{p}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

type Felles = {
  titler: Record<string, string>;
  /** Skjul «vis»-knappen (prøveeksamen før levering). */
  laast?: boolean;
  /** Vis fasit uten knappetrykk (prøveeksamen etter levering). */
  apen?: boolean;
  idPrefix?: string;
};

function KapLenker({ slugs, titler }: { slugs: string[]; titler: Record<string, string> }) {
  return (
    <p className="text-zinc-500">
      Les mer:{" "}
      {slugs.map((s, i) => (
        <span key={s}>
          {i > 0 && ", "}
          <Link href={`/exph0600/pensum/${s}`} className="underline">
            {titler[s] ?? s}
          </Link>
        </span>
      ))}
    </p>
  );
}

function useVis(apen?: boolean) {
  const [vis, setVis] = useState(false);
  return [vis || !!apen, () => setVis(true)] as const;
}

const knapp =
  "rounded-lg border border-zinc-300 px-4 py-2 text-sm hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500";

export function KortsvarKort({ k, titler, laast, apen, idPrefix = "" }: { k: Kortsvar } & Felles) {
  const [vis, visNa] = useVis(apen);
  return (
    <div className="space-y-3">
      <p className="font-medium">{k.sporsmal}</p>
      <Svarfelt id={idPrefix + k.id} rader={7} plassholder="Skriv svaret ditt her: definer, forklar, eksemplifiser, avgrens." />
      {vis ? (
        <Fasit tittel="Modellsvar">
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{k.modellsvar}</p>
          <Sjekkliste punkter={k.sjekkliste} />
          <KapLenker slugs={[k.kapittel]} titler={titler} />
        </Fasit>
      ) : (
        !laast && (
          <button onClick={visNa} className={knapp}>
            Vis modellsvar
          </button>
        )
      )}
    </div>
  );
}

export function CaseKort({ c, titler, laast, apen, idPrefix = "" }: { c: Case } & Felles) {
  const [vis, visNa] = useVis(apen);
  return (
    <div className="space-y-4">
      <blockquote className="rounded-xl border-l-4 border-zinc-300 bg-zinc-50 p-4 leading-relaxed dark:border-zinc-700 dark:bg-zinc-900/50">
        {c.tekst}
      </blockquote>
      <p className="font-medium">{c.oppgave}</p>
      <Svarfelt
        id={idPrefix + c.id}
        rader={14}
        plassholder="Skriv disposisjonen (eller hele svaret): 1) problemstilling 2) teorier 3) anvendelse 4) drøfting 5) konklusjon"
      />
      {vis ? (
        <Fasit tittel="Løsningsskisse">
          <ol className="space-y-3">
            {c.skisse.map((s, i) => (
              <li key={s.steg}>
                <p className="font-medium">
                  {i + 1}. {s.steg}
                </p>
                <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{s.tekst}</p>
              </li>
            ))}
          </ol>
          <p className="text-zinc-500">
            Skissen er ett mulig godt svar. Andre teorier og en annen konklusjon kan være like gode hvis de er godt
            begrunnet.
          </p>
          <KapLenker slugs={c.kapitler} titler={titler} />
        </Fasit>
      ) : (
        !laast && (
          <button onClick={visNa} className={knapp}>
            Vis løsningsskisse
          </button>
        )
      )}
    </div>
  );
}
