import type { Metadata } from "next";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { finnKapittel, kapitler } from "@/content/exph0600/kapitler";
import { caser, kortsvar } from "@/content/exph0600/ovelser";
import Proveeksamen from "./Proveeksamen";

export const metadata: Metadata = { title: "Prøveeksamen · EXPH0600" };

const titler = Object.fromEntries(kapitler.map((k) => [k.slug, k.tittel]));
const medDel = kortsvar.map((k) => {
  const kap = finnKapittel(k.kapittel);
  if (!kap) throw new Error(`Ukjent kapittel i kortsvar: ${k.kapittel}`);
  return { ...k, del: kap.del };
});

export default function ProveeksamenSide() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <Link href="/exph0600" className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:underline">
          <ChevronLeft className="size-4" aria-hidden />
          EXPH0600
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">Prøveeksamen</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Samme format som eksamen 9. desember. Les{" "}
          <Link href="/exph0600/guide#tid" className="underline">
            tidsfordelingen i guiden
          </Link>{" "}
          først.
        </p>
      </header>
      <Proveeksamen kortsvar={medDel} caser={caser} titler={titler} />
    </div>
  );
}
