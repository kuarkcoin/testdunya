import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { renderToString } from 'katex';
import Grade5QuizClient from '../../../../components/grade5/Grade5QuizClient';
import {
  canonicalBase,
  getGrade5Subject,
  getGrade5Test,
  getGrade5TestParams,
  getGrade5Tests,
  questionImageAlt,
} from '../../../data/grade5/seo';
import type { SubjectId } from '../../../data/grade5/types';
import { breadcrumbJsonLd, createPageMetadata, serializeJsonLd } from '../../../../lib/seo';

type PageProps = { params: Promise<{ subject: string; testSlug: string }> };

export function generateStaticParams() {
  return getGrade5TestParams();
}

const normalizeLegacySlug = (slug: string) => {
  const match = slug.match(/^test(\d+)$/);
  return match ? `test-${match[1]}` : slug;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subject: subjectParam, testSlug } = await params;
  const subject = getGrade5Subject(subjectParam);
  if (!subject) notFound();
  const normalizedSlug = normalizeLegacySlug(testSlug);
  const test = getGrade5Test(subject.id as SubjectId, normalizedSlug);
  if (!test) notFound();
  return createPageMetadata({
    title: `${test.title} - ${test.hasImages ? 'Şekilli' : 'Açıklamalı'} Konu Tekrarı`,
    description: `${test.questions.length} soruluk ${test.term}. dönem 5. sınıf ${subject.titleLabel.toLocaleLowerCase('tr-TR')} Test ${test.testNo}. ${test.hasImages ? 'Şekilli ve metin tabanlı' : 'Metin tabanlı'} soruları ücretsiz çöz, açıklamalı cevapları incele.`,
    path: `/5-sinif/${subject.id}/${test.slug}`,
  });
}

const renderText = (text: string) => text.replace(/\$/g, '');

function QuestionText({ text }: { text: string }) {
  return <>{text.split(/(\$.*?\$)/g).map((part, index) => (
    part.startsWith('$') && part.endsWith('$') && part.length > 2
      ? <span key={index} dangerouslySetInnerHTML={{ __html: renderToString(part.slice(1, -1), { throwOnError: false, trust: false }) }} />
      : <span key={index}>{part}</span>
  ))}</>;
}

export default async function Grade5TestPage({ params }: PageProps) {
  const { subject: subjectParam, testSlug } = await params;
  const subject = getGrade5Subject(subjectParam);
  if (!subject) notFound();

  const normalizedSlug = normalizeLegacySlug(testSlug);
  const test = getGrade5Test(subject.id as SubjectId, normalizedSlug);
  if (!test) notFound();
  if (normalizedSlug !== testSlug) permanentRedirect(`/5-sinif/${subject.id}/${normalizedSlug}`);

  const subjectTests = getGrade5Tests(subject.id as SubjectId);
  const testIndex = subjectTests.findIndex((item) => item.slug === test.slug);
  const relatedStart = Math.max(0, Math.min(testIndex - 2, subjectTests.length - 6));
  const relatedTests = subjectTests.slice(relatedStart, relatedStart + 6).filter((item) => item.slug !== test.slug);
  const canonicalUrl = `${canonicalBase}/5-sinif/${subject.id}/${test.slug}`;
  const originalTestNo = Number(test.originalKey.replace('test', '')) || test.testNo;

  const quizSchema = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: test.title,
    url: canonicalUrl,
    description: `${test.questions.length} soruluk ${test.title}; ${test.hasImages ? 'şekilli ve metin tabanlı' : 'metin tabanlı'} sorulardan oluşan açıklamalı online testtir.`,
    educationalLevel: '5. Sınıf',
    learningResourceType: 'Practice test',
    inLanguage: 'tr-TR',
    provider: { '@type': 'Organization', name: 'TestDünya', url: canonicalBase },
    hasPart: test.questions.map((question, index) => ({
      '@type': 'Question',
      name: `${index + 1}. soru`,
      text: renderText(question.prompt),
    })),
  };

  const breadcrumbSchema = breadcrumbJsonLd([
    { name: 'Ana Sayfa', path: '/' },
    { name: '5. Sınıf', path: '/5-sinif' },
    { name: subject.label, path: `/5-sinif/${subject.id}` },
    { name: `Test ${test.testNo}`, path: `/5-sinif/${subject.id}/${test.slug}` },
  ]);

  const faqItems = [
    {
      q: `5. sınıf ${subject.titleLabel.toLocaleLowerCase('tr-TR')} testleri ücretsiz mi?`,
      a: `Evet, TestDünya üzerindeki 5. sınıf ${subject.titleLabel.toLocaleLowerCase('tr-TR')} testlerini ücretsiz çözebilirsiniz.`,
    },
    { q: 'Bu testlerde şekilli sorular var mı?', a: test.hasImages ? 'Evet, bu testte şekilli ve görselli sorular bulunur.' : 'Bu test yeni nesil soru mantığıyla hazırlanmıştır; görselli testler de aynı ders sayfasında listelenir.' },
    { q: 'Test sonucumu görebilir miyim?', a: 'Evet, testi tamamladığınızda doğru-yanlış sayınızı, başarı oranınızı ve detaylı sonuç ekranını görebilirsiniz.' },
    { q: 'Bu test hangi sınıf düzeyindedir?', a: 'Bu test, 5. sınıf düzeyinde konu tekrarı yapmak için hazırlanmıştır. Ders sayfasından diğer testleri de seçebilirsiniz.' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <script id={`grade5-${subject.id}-${test.slug}-quiz-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(quizSchema) }} />
      <script id={`grade5-${subject.id}-${test.slug}-breadcrumb-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }} />
      <script id={`grade5-${subject.id}-${test.slug}-faq-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />

      <article className="bg-slate-50 text-slate-900 rounded-[2rem] border border-slate-200 shadow-xl p-5 md:p-10 space-y-8">
        <nav className="text-sm font-bold text-slate-500 flex flex-wrap gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-indigo-600">Ana Sayfa</Link>
          <span>›</span>
          <Link href="/5-sinif" className="hover:text-indigo-600">5. Sınıf</Link>
          <span>›</span>
          <Link href={`/5-sinif/${subject.id}`} className="hover:text-indigo-600">{subject.label}</Link>
          <span>›</span>
          <span className="text-slate-900">Test {test.testNo}</span>
        </nav>

        <header className="rounded-[1.75rem] bg-white border border-slate-200 p-6 md:p-10 shadow-sm space-y-4">
          <p className="text-indigo-600 font-black uppercase tracking-[0.25em] text-xs">{subject.label} • {test.term}. dönem • {test.questions.length} soru</p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter">{test.title}</h1>
          <p className="text-slate-600 font-semibold leading-relaxed text-base md:text-lg">
            Bu 5. sınıf {subject.titleLabel.toLocaleLowerCase('tr-TR')} testi, {test.topic.toLocaleLowerCase('tr-TR')} için {test.hasImages ? 'şekilli ve metin tabanlı' : 'metin tabanlı'} sorular içerir. Testi bitirdiğinde doğru cevapları ve çözüm notlarını inceleyebilirsin.
          </p>
          <a href="#testi-coz" className="inline-flex rounded-full bg-indigo-600 text-white px-6 py-3 font-black shadow-lg hover:bg-indigo-700">Testi Çözmeye Başla</a>
        </header>

        <section id="testi-coz" className="rounded-[2rem] bg-white border border-indigo-100 shadow-xl p-4 md:p-8 scroll-mt-24">
          <h2 className="sr-only">5. sınıf {subject.label} Test {test.testNo} interaktif çözme alanı</h2>
          <Grade5QuizClient initialSubject={subject.id as SubjectId} initialTerm={test.term} initialTestNo={originalTestNo} initialTestKey={test.originalKey} initialDisplayTestNo={test.testNo} autoStart />
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">Soruları İncele</h2>
          <div className="space-y-5">
            {test.questions.map((question, index) => (
              <section key={question.id} className="rounded-[1.5rem] bg-white border border-slate-200 p-5 shadow-sm space-y-4">
                <h3 className="font-black text-lg">{index + 1}. Soru</h3>
                <p className="whitespace-pre-line text-slate-800 font-semibold leading-relaxed"><QuestionText text={question.prompt} /></p>
                {question.imageUrl && (
                  <Image
                    src={question.imageUrl}
                    alt={questionImageAlt(subject.titleLabel, test.testNo, index + 1)}
                    width={900}
                    height={600}
                    loading="lazy"
                    sizes="(max-width: 768px) 92vw, 760px"
                    className="w-full max-w-3xl h-auto rounded-xl border border-slate-100 bg-white p-2 object-contain"
                  />
                )}
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-2" type="A">
                  {question.options.map((option, optionIndex) => (
                    <li key={optionIndex} className="rounded-xl bg-slate-50 border border-slate-100 p-3 font-semibold">
                      {String.fromCharCode(65 + optionIndex)}) <QuestionText text={option} />
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] bg-white border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-2xl font-black">Sık Sorulan Sorular</h2>
          {faqItems.map((item) => (
            <details key={item.q} className="rounded-2xl bg-slate-50 border border-slate-100 p-4">
              <summary className="cursor-pointer font-black text-slate-900">{item.q}</summary>
              <p className="mt-2 text-slate-600 font-semibold">{item.a}</p>
            </details>
          ))}
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black">İlgili Diğer Testler</h2>
          <div className="flex flex-wrap gap-3">
            {relatedTests.map((related) => (
              <Link key={related.slug} href={`/5-sinif/${subject.id}/${related.slug}`} className="rounded-full bg-white border border-slate-200 px-4 py-3 font-black text-slate-700 hover:text-indigo-700 hover:border-indigo-200">
                {subject.label} Test {related.testNo}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}

