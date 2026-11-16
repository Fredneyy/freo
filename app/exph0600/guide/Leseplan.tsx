"use client";

import { useState, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

const EKSAMEN = new Date("2026-12-09T09:00:00+01:00").getTime();
const ingenting = () => () => {};

export type Plan = { id: string; navn: string; nar: string; minDager: number; innhold: ReactNode };

// Velger planen som passer antall dager igjen; brukeren kan bytte selv.
export default function Leseplan({ planer }: { planer: Plan[] }) {
  const dager = useSyncExternalStore(
    ingenting,
    () => Math.ceil((EKSAMEN - Date.now()) / 86_400_000),
    () => null,
  );
  const [valgt, setValgt] = useState<string | null>(null);
  const anbefalt = dager === null ? planer[0].id : (planer.find((p) => dager >= p.minDager) ?? planer.at(-1)!).id;
  const aktiv = planer.find((p) => p.id === (valgt ?? anbefalt))!;

  return (
    <div className="space-y-4">
      <div className="grid gap-2 sm:grid-cols-3" role="tablist">
        {planer.map((p) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={p.id === aktiv.id}
            onClick={() => setValgt(p.id)}
            className={`rounded-xl border p-3 text-left transition-colors ${
              p.id === aktiv.id
                ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                : "border-zinc-200 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            }`}
          >
            <span className="block font-medium">{p.navn}</span>
            <span className="block text-sm opacity-75">
              {p.nar}
              {p.id === anbefalt && dager !== null && " · anbefalt for deg"}
            </span>
          </button>
        ))}
      </div>
      {aktiv.innhold}
    </div>
  );
}
