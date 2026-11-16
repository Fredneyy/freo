import type { Metadata } from "next";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { deler, finnKapittel } from "@/content/exph0600/kapitler";
import { quiz } from "@/content/exph0600/quiz";
import Quiz, { type Sporsmal } from "./Quiz";

export const metadata: Metadata = { title: "Quiz · EXPH0600" };

const sporsmal: Sporsmal[] = quiz.map((q) => {
  const k = finnKapittel(q.kapittel);
  if (!k) throw new Error(`Ukjent kapittel i quiz: ${q.kapittel}`);
  return { ...q, del: k.del, kapittelTittel: k.tittel };
});

export default function QuizSide() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <Link href="/exph0600" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:underline">
          <ChevronLeft className="size-4" aria-hidden />
          EXPH0600
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">Quiz</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          {sporsmal.length} flervalgsspørsmål om begrepsforståelse. Velg del eller kapittel, svar, og les forklaringen.
          Resultatene lagres i nettleseren din og vises som svake områder på emnesiden.
        </p>
      </header>
      <Quiz sporsmal={sporsmal} deler={deler.map((d) => ({ nr: d.nr, tittel: d.tittel }))} />
    </div>
  );
}
