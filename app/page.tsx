import Link from "next/link";

const emner = [
  {
    href: "/exph0600",
    kode: "EXPH0600",
    navn: "Examen philosophicum for ingeniørfag",
    info: "Eksamen 9. desember 2026",
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Øv til eksamen</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Konsolidert pensum og øvingsoppgaver for NTNU-emner. Velg et emne.
        </p>
      </section>

      <ul className="grid gap-3 sm:grid-cols-2">
        {emner.map((e) => (
          <li key={e.kode}>
            <Link
              href={e.href}
              className="block rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <p className="font-mono text-sm text-zinc-500">{e.kode}</p>
              <p className="mt-1 font-medium">{e.navn}</p>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{e.info}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
