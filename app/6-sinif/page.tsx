import Link from 'next/link';
import { getGrade6Tests, grade6Subjects } from '../data/grade6/seo';
import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata({
  title: '6. Sınıf Testleri - Matematik, Türkçe, Fen ve İngilizce',
  description: '6. sınıf Matematik, Türkçe, Fen Bilimleri ve İngilizce için konu ve karma tekrar testleri. Soruları ücretsiz çöz, puanını ve açıklamalı cevapları incele.',
  path: '/6-sinif',
});

export default function Grade6Page() {
  const allTests = grade6Subjects.flatMap((subject) => getGrade6Tests(subject.id));
  const questionCount = allTests.reduce((total, test) => total + test.questions.length, 0);

  return (
    <section className="space-y-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 text-slate-900 shadow-xl md:p-10">
      <header className="mx-auto max-w-3xl space-y-4 text-center">
        <p className="text-xs font-black uppercase tracking-widest text-indigo-700">Konu testleri • Karma tekrar</p>
        <h1 className="text-3xl font-black tracking-tight md:text-5xl">6. Sınıf Testleri</h1>
        <p className="font-semibold leading-relaxed text-slate-600">Matematik, Türkçe, Fen Bilimleri ve İngilizce konularını tekrar et, karma testlerle bilgilerini bir arada kullan. Testin sonunda doğru cevapları ve çözüm notlarını incele.</p>
        <p className="font-bold text-indigo-700">4 ders • {allTests.length} test • {questionCount} açıklamalı soru</p>
      </header>
      <nav aria-label="6. sınıf dersleri" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {grade6Subjects.map((subject) => {
          const tests = getGrade6Tests(subject.id);
          return (
            <Link key={subject.id} href={`/6-sinif/${subject.id}`} className={`group relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${subject.gradient} p-6 text-white shadow-lg transition-transform hover:scale-[1.01] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-indigo-700 md:p-8`}>
              <div className="relative z-10 space-y-4">
                <div aria-hidden="true" className="text-5xl">{subject.icon}</div>
                <h2 className="text-2xl font-black md:text-3xl">{subject.label}</h2>
                <p className="font-semibold text-white/95">{subject.description}</p>
                <span className="inline-flex rounded-full bg-black/20 px-4 py-2 text-sm font-black">{tests.length} test • Çözmeye başla →</span>
              </div>
            </Link>
          );
        })}
      </nav>
      <aside className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 font-semibold leading-relaxed text-slate-700">
        İstediğin dersi seçerek konu testlerine ve karma tekrar çalışmalarına ulaşabilirsin. Test kartlarında konu başlığını ve soru sayısını görebilirsin.
      </aside>
    </section>
  );
}

