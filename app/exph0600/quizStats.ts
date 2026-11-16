// Quizresultater per kapittel i localStorage. Bare for denne nettleseren; feiler stille uten lagring.
const KEY = "freo:exph0600:quiz";
const EVENT = "freo-quiz-stats";

export type Stats = Record<string, { riktig: number; totalt: number }>;

export function lesRaw(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function parse(raw: string | null): Stats {
  try {
    return raw ? (JSON.parse(raw) as Stats) : {};
  } catch {
    return {};
  }
}

export function registrer(kapittel: string, riktig: boolean) {
  const s = parse(lesRaw());
  const k = s[kapittel] ?? { riktig: 0, totalt: 0 };
  s[kapittel] = { riktig: k.riktig + (riktig ? 1 : 0), totalt: k.totalt + 1 };
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
    window.dispatchEvent(new Event(EVENT));
  } catch {}
}

export function nullstill() {
  try {
    localStorage.removeItem(KEY);
    window.dispatchEvent(new Event(EVENT));
  } catch {}
}

export function abonner(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(EVENT, cb);
  };
}
