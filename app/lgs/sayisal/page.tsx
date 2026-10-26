import { getStaticPageMetadata } from '../../../lib/seo-pages';
import { getTestCatalog } from '../../../lib/test-data';
import Link from 'next/link';

export const metadata = getStaticPageMetadata('/lgs/sayisal');

export default async function LgsSayisalPage() {
  const tests = (await getTestCatalog())
    .filter((test) => /^lgs-sayisal-test-[1-4]$/.test(test.id))
    .sort((a, b) => a.id.localeCompare(b.id, 'tr', { numeric: true }))
    .map((test) => ({
      title: `LGS Sayısal Deneme ${test.id.split('-').at(-1)}`,
      href: `/test/${test.id}`,
      stats: [`${test.questionCount} Soru`, 'Sayısal Bölüm'],
    }));

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 md:px-8 md:py-14">
      <section className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-[2rem] border border-teal-100 bg-white p-8 shadow-xl md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-teal-600">LGS Hazırlık</p>
          <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">LGS Sayısal Bölüm Testleri</h1>
          <p className="mt-4 max-w-3xl text-base font-semibold leading-relaxed text-slate-600 md:text-lg">
            Matematik ve Fen Bilimleri derslerinden sayısal bölüm soruları. Her testin soru sayısını kartında görebilirsin.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tests.map((test) => (
            <article key={test.href} className="premium-card flex flex-col justify-between gap-6 p-5">
              <div>
                <h2 className="text-xl font-black tracking-tight">{test.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {test.stats.map((stat) => (
                    <span key={stat} className="rounded-full bg-teal-50 px-3 py-2 text-xs font-black text-teal-700">{stat}</span>
                  ))}
                </div>
              </div>
              <Link href={test.href} className="rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-black text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-teal-700">
                Teste Başla →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

