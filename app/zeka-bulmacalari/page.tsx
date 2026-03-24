import Link from 'next/link';
import { ZEKA_BULMACA_TESTS } from '../data/zekaBulmacalari';

export default function ZekaBulmacalariHubPage() {
  return (
    <main className="min-h-screen px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-slate-800 p-6 md:p-10 text-white shadow-2xl">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            New Category
          </span>
          <h1 className="mt-4 text-3xl font-black md:text-5xl">Zeka Bulmacaları</h1>
          <p className="mt-3 max-w-3xl text-sm text-indigo-100 md:text-lg">
            Image-based detective and logic puzzles. Choose one of 50 fixed tests. Each test includes exactly 10 questions and 5 options per question.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ZEKA_BULMACA_TESTS.map((test) => (
            <Link
              key={test.id}
              href={`/zeka-bulmacalari/${test.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-lg">🧠</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">10 Questions</span>
              </div>

              <h2 className="mt-4 text-xl font-black text-slate-800">{test.title}</h2>
              <p className="mt-1 text-sm font-medium text-slate-600">{test.subtitle}</p>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-600">
                Start Test <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
