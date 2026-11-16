"use client";

import { useSyncExternalStore } from "react";

const EKSAMEN = new Date("2026-12-09T09:00:00+01:00").getTime();
const ingenting = () => () => {};

// Klientkomponent fordi «nå» ikke kan prerendres; serveren rendrer null.
export default function Nedtelling() {
  const dager = useSyncExternalStore(
    ingenting,
    () => Math.ceil((EKSAMEN - Date.now()) / 86_400_000),
    () => null,
  );

  if (dager === null) return <span>&nbsp;</span>;
  if (dager < 0) return <span>Eksamen er gjennomført</span>;
  if (dager === 0) return <span>Eksamen er i dag – lykke til!</span>;
  return (
    <span>
      <strong className="text-2xl tabular-nums">{dager}</strong> {dager === 1 ? "dag" : "dager"} til eksamen
    </span>
  );
}
