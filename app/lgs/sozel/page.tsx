import Link from 'next/link';

const tests = [1, 2, 3, 4].map((number) => ({
  title: `LGS Sözel Deneme ${number}`,
  href: `/test/lgs-sozel-test-${number}`,
  stats: ['50 Soru', '75 Dakika', 'Sözel Bölüm', '2026 Paralel'],
}));

export default function LgsSozelPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 md:px-8 md:py-14">
      <section className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-[2rem] border border-violet-100 bg-white p-8 shadow-xl md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-600">LGS 2026</p>
          <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">LGS Sözel Bölüm Testleri</h1>
          <p className="mt-4 max-w-3xl text-base font-semibold leading-relaxed text-slate-600 md:text-lg">
            Türkçe, T.C. İnkılap Tarihi, Din Kültürü ve İngilizce derslerinden 2026 LGS formatına uygun özgün sözel bölüm soruları.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tests.map((test) => (
            <article key={test.href} className="premium-card flex flex-col justify-between gap-6 p-5">
              <div>
                <h2 className="text-xl font-black tracking-tight">{test.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {test.stats.map((stat) => (
                    <span key={stat} className="rounded-full bg-violet-50 px-3 py-2 text-xs font-black text-violet-700">{stat}</span>
                  ))}
                </div>
              </div>
              <Link href={test.href} className="rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-black text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-violet-700">
                Teste Başla →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
