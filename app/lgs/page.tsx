import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LGS 2026 Deneme Sınavları | TestDünya',
  description: '2026 LGS sınavı paralelinde hazırlanmış sözel ve sayısal bölüm testleriyle online LGS denemeleri çöz.',
};

const sections = [
  {
    title: 'Sözel Bölüm',
    description: 'Türkçe, T.C. İnkılap Tarihi, Din Kültürü ve İngilizce derslerinden beceri temelli LGS soruları.',
    stats: ['50 Soru', '75 Dakika', 'Türkçe • İnkılap • Din • İngilizce'],
    href: '/lgs/sozel',
    cta: 'Sözel Testleri Gör',
    gradient: 'from-violet-600 via-indigo-600 to-blue-600',
    glow: 'bg-indigo-500/20',
  },
  {
    title: 'Sayısal Bölüm',
    description: 'Matematik ve Fen Bilimleri derslerinden yeni nesil, yorumlama ve problem çözme odaklı LGS soruları.',
    stats: ['40 Soru', '80 Dakika', 'Matematik • Fen Bilimleri'],
    href: '/lgs/sayisal',
    cta: 'Sayısal Testleri Gör',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    glow: 'bg-teal-500/20',
  },
];

export default function LgsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 md:px-8 md:py-14">
      <section className="mx-auto max-w-6xl space-y-10">
        <header className="relative overflow-hidden rounded-[2rem] border border-indigo-100 bg-white p-8 text-center shadow-xl md:p-12">
          <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/50 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-3xl space-y-5">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600">TestDünya LGS Hazırlık</p>
            <h1 className="text-3xl font-black tracking-tight md:text-5xl">LGS 2026 Deneme Sınavları</h1>
            <p className="text-base font-semibold leading-relaxed text-slate-600 md:text-lg">
              2026 LGS sınavı paralelinde hazırlanacak sözel ve sayısal bölüm testleriyle sınava sistemli şekilde hazırlan.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.href} className="premium-card group relative overflow-hidden p-6 md:p-8">
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full ${section.glow} blur-3xl transition-all group-hover:scale-125`} />
              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                <div className="space-y-5">
                  <div className={`h-2 w-24 rounded-full bg-gradient-to-r ${section.gradient}`} />
                  <div>
                    <h2 className="text-2xl font-black tracking-tight md:text-3xl">{section.title}</h2>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600 md:text-base">{section.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.stats.map((stat) => (
                      <span key={stat} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-black text-slate-700">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={section.href} className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-r ${section.gradient} px-5 py-3 text-sm font-black text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl`}>
                  {section.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
