import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight">Fant ikke siden</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Siden finnes ikke. <Link href="/" className="underline">Gå til forsiden</Link>.
      </p>
    </div>
  );
}
