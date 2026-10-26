import Link from 'next/link';
import Grade5QuizClient from '../../components/grade5/Grade5QuizClient';
import { canonicalBase, getGrade5Tests, grade5Subjects } from '../data/grade5/seo';
import { createPageMetadata, serializeJsonLd } from '../../lib/seo';

export const metadata = createPageMetadata({
  title: '5. Sınıf Test Çöz - Matematik, Türkçe, Fen ve İngilizce',
  description:
    '5. sınıf Matematik, Türkçe, Fen Bilimleri ve İngilizce için konu tekrarları, şekilli ve metin tabanlı testler. Ücretsiz çöz, açıklamalı cevapları incele.',
  path: '/5-sinif',
});

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '5. Sınıf Test Çöz - Matematik, Türkçe, Fen ve İngilizce',
  description:
    'TestDünya 5. sınıf testleri; Matematik, Türkçe, Fen Bilimleri ve İngilizce için şekilli ve metin tabanlı sorularla konu tekrarı sunar.',
  url: `${canonicalBase}/5-sinif`,
  educationalLevel: '5. Sınıf',
  learningResourceType: 'Practice test',
  inLanguage: 'tr-TR',
  provider: { '@type': 'Organization', name: 'TestDünya', url: canonicalBase },
};

export default function Grade5Page() {
  return (
    <>
      <script id="grade5-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(webPageSchema) }} />
      <section className="bg-slate-50 text-slate-900 rounded-[2rem] border border-slate-200 shadow-xl p-5 md:p-10 space-y-10">
        <header className="max-w-4xl mx-auto text-center space-y-5">
          <p className="text-indigo-600 font-black uppercase tracking-[0.25em] text-xs">Ücretsiz ve açıklamalı online testler</p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter">
            5. Sınıf Test Çöz - Matematik, Türkçe, Fen ve İngilizce
          </h1>
          <p className="text-base md:text-lg text-slate-600 font-semibold leading-relaxed">
            Matematik, Türkçe, Fen Bilimleri ve İngilizce konularını ücretsiz testlerle tekrar et. Dersini seç, şekilli veya metin tabanlı soruları çöz; testin sonunda cevapları ve çözüm notlarını incele.
          </p>
        </header>

        <nav aria-label="5. sınıf dersleri" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {grade5Subjects.map((subject) => {
            const tests = getGrade5Tests(subject.id);
            const imageCount = tests.reduce((total, test) => total + test.questions.filter((question) => question.imageUrl).length, 0);
            return (
              <Link
                key={subject.id}
                href={`/5-sinif/${subject.id}`}
                className={`group relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${subject.gradient} p-6 md:p-8 text-white shadow-lg transition-transform hover:scale-[1.01]`}
              >
                <div className="relative z-10 space-y-4">
                  <div className="text-5xl">{subject.icon}</div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black">5. Sınıf {subject.label} Testleri</h2>
                    <p className="mt-2 text-white/90 font-semibold">{subject.shortDescription}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-black">
                    <span className="rounded-full bg-black/20 px-3 py-2">{tests.length} test</span>
                    <span className="rounded-full bg-black/20 px-3 py-2">{imageCount > 0 ? 'Şekilli/görselli sorular' : 'Yeni nesil sorular'}</span>
                    <span className="rounded-full bg-black/20 px-3 py-2">Derse git ➔</span>
                  </div>
                </div>
                <span className="absolute -right-8 -bottom-10 text-[9rem] opacity-10">{subject.icon}</span>
              </Link>
            );
          })}
        </nav>

        <section className="rounded-[1.75rem] bg-white border border-slate-200 p-6 md:p-8 shadow-sm space-y-3">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">5. Sınıf Konu Tekrar Testleri</h2>
          <p className="text-slate-600 font-semibold leading-relaxed">
            Test listelerinde soru sayısını, dönemi ve görsel bulunup bulunmadığını görebilirsin. Testleri tamamlayarak sonuçlarını ve açıklamalı cevaplarını inceleyebilirsin.
          </p>
        </section>
      </section>

      <section className="mt-10 rounded-[2rem] bg-white border border-indigo-100 shadow-xl p-4 md:p-8">
        <h2 className="sr-only">5. sınıf interaktif test çözme paneli</h2>
        <Grade5QuizClient />
      </section>
    </>
  );
}

