import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Grade5QuizClient from '../../components/grade5/Grade5QuizClient';
import { canonicalBase, getGrade5Tests, grade5Subjects } from '../data/grade5/seo';

export const metadata: Metadata = {
  title: '5. Sınıf Test Çöz - Matematik, Türkçe, Fen ve İngilizce | TestDünya',
  description:
    '5. sınıf test çöz sayfasında matematik, Türkçe, fen ve İngilizce için MEB uyumlu şekilli, görselli ve yeni nesil soruları ücretsiz çöz.',
  alternates: { canonical: `${canonicalBase}/5-sinif` },
  robots: { index: true, follow: true },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '5. Sınıf Test Çöz - Matematik, Türkçe, Fen ve İngilizce',
  description:
    'TestDünya 5. sınıf testleri; matematik, Türkçe, fen bilimleri ve İngilizce dersleri için MEB uyumlu şekilli, görselli ve yeni nesil sorulardan oluşur.',
  educationalLevel: '5. Sınıf',
  learningResourceType: 'Practice test',
  inLanguage: 'tr-TR',
  provider: { '@type': 'Organization', name: 'TestDünya', url: canonicalBase },
};

export default function Grade5Page() {
  return (
    <>
      <Script id="grade5-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <section className="bg-slate-50 text-slate-900 rounded-[2rem] border border-slate-200 shadow-xl p-5 md:p-10 space-y-10">
        <header className="max-w-4xl mx-auto text-center space-y-5">
          <p className="text-indigo-600 font-black uppercase tracking-[0.25em] text-xs">MEB uyumlu online testler</p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter">
            5. Sınıf Test Çöz - Matematik, Türkçe, Fen ve İngilizce
          </h1>
          <p className="text-base md:text-lg text-slate-600 font-semibold leading-relaxed">
            TestDünya ile <strong>5. sınıf test çöz</strong> deneyimini güçlendir: <strong>5. sınıf matematik testi</strong>,{' '}
            <strong>5. sınıf fen testi</strong>, <strong>5. sınıf türkçe testi</strong> ve{' '}
            <strong>5. sınıf ingilizce testi</strong> içerikleri; <strong>şekilli sorular</strong>, <strong>görselli sorular</strong>,{' '}
            <strong>yeni nesil sorular</strong> ve <strong>MEB uyumlu</strong> kazanım yapısıyla ücretsiz sunulur.
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
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">5. Sınıf Şekilli ve Görselli Testler</h2>
          <p className="text-slate-600 font-semibold leading-relaxed">
            TestDünya 5. sınıf testleri; matematik, Türkçe, fen bilimleri ve İngilizce dersleri için şekilli, görselli ve yeni nesil sorulardan oluşur. Öğrenciler testleri ücretsiz çözebilir, sonuçlarını görebilir ve eksiklerini analiz edebilir.
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
