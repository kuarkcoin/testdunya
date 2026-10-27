import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { renderToString } from 'katex';
import Grade6QuizClient from '../../../../components/grade6/Grade6QuizClient';
import { getGrade6Subject, getGrade6Test, getGrade6TestParams, getGrade6Tests } from '../../../data/grade6/seo';
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata, serializeJsonLd, SITE_URL } from '../../../../lib/seo';

type PageProps = { params: Promise<{ subject: string; testSlug: string }> };
export const generateStaticParams = getGrade6TestParams;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subject: subjectId, testSlug } = await params;
  const subject = getGrade6Subject(subjectId);
  const test = subject && getGrade6Test(subject.id, testSlug);
  if (!subject || !test) notFound();
  return createPageMetadata({
    title: `6. Sınıf ${subject.label} ${test.term === 2 ? '2. Dönem ' : ''}Test ${test.testNo}: ${test.topic}`,
    description: `${test.questions.length} soruluk 6. sınıf ${subject.label} ${test.topic} testi. Testi çöz, puanını ve açıklamalı cevapları incele.`,
    path: `/6-sinif/${subject.id}/${test.slug}`,
  });
}

function QuestionText({ text }: { text: string }) {
  return <>{text.split(/(\$.*?\$)/g).map((part, index) => (
    part.startsWith('$') && part.endsWith('$') && part.length > 2
      ? <span key={index} dangerouslySetInnerHTML={{ __html: renderToString(part.slice(1, -1), { throwOnError: false, trust: false }) }} />
      : <span key={index}>{part}</span>
  ))}</>;
}

export default async function Grade6TestPage({ params }: PageProps) {
  const { subject: subjectId, testSlug } = await params;
  const subject = getGrade6Subject(subjectId);
  const test = subject && getGrade6Test(subject.id, testSlug);
  if (!subject || !test) notFound();
  const subjectTests = getGrade6Tests(subject.id);
  const testIndex = subjectTests.findIndex((item) => item.slug === test.slug);
  const relatedStart = Math.max(0, Math.min(testIndex - 2, subjectTests.length - 6));
  const relatedTests = subjectTests.slice(relatedStart, relatedStart + 6).filter((item) => item.slug !== test.slug);
  const path = `/6-sinif/${subject.id}/${test.slug}`;
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Ana Sayfa', path: '/' },
    { name: '6. Sınıf', path: '/6-sinif' },
    { name: subject.label, path: `/6-sinif/${subject.id}` },
    { name: test.title, path },
  ]);
  const quizSchema = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    '@id': `${absoluteUrl(path)}#quiz`,
    url: absoluteUrl(path),
    name: `6. Sınıf ${subject.label} ${test.term === 2 ? '2. Dönem ' : ''}Test ${test.testNo}: ${test.topic}`,
    description: `${test.questions.length} soruluk ${test.topic} testi; sorular, seçenekler ve açıklamalı cevaplar.`,
    educationalLevel: '6. Sınıf',
    learningResourceType: 'Practice test',
    inLanguage: subject.id === 'ingilizce' ? ['tr-TR', 'en'] : 'tr-TR',
    provider: { '@type': 'Organization', name: 'TestDünya', url: SITE_URL },
    hasPart: test.questions.map((question, index) => ({
      '@type': 'Question',
      name: `${index + 1}. Soru`,
      text: question.prompt,
      ...(question.imageUrl ? { image: absoluteUrl(question.imageUrl) } : {}),
      acceptedAnswer: { '@type': 'Answer', text: `${question.options[question.correct]}\n${question.explanation}` },
      suggestedAnswer: question.options.filter((_, optionIndex) => optionIndex !== question.correct).map((text) => ({ '@type': 'Answer', text })),
    })),
  };

  return (
    <article className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-3 text-slate-900 shadow-xl md:p-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(quizSchema) }} />
      <nav aria-label="Sayfa yolu" className="flex flex-wrap gap-2 px-2 text-sm font-bold text-slate-600">
        <Link href="/" className="rounded hover:text-indigo-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600">Ana Sayfa</Link><span aria-hidden="true">›</span>
        <Link href="/6-sinif" className="rounded hover:text-indigo-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600">6. Sınıf</Link><span aria-hidden="true">›</span>
        <Link href={`/6-sinif/${subject.id}`} className="rounded hover:text-indigo-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600">{subject.label}</Link><span aria-hidden="true">›</span>
        <span aria-current="page">{test.title}</span>
      </nav>
      <header className="space-y-3 px-2">
        <h1 className="text-2xl font-black tracking-tight md:text-4xl">6. Sınıf {subject.label} • {test.term === 2 ? '2. Dönem • ' : ''}Test {test.testNo}</h1>
        <p className="font-bold text-indigo-700">{test.topic}</p>
        <p className="font-semibold text-slate-600">{test.term}. Dönem • {test.questions.length} soru • Açıklamalı konu ve karma tekrar</p>
      </header>
      <Grade6QuizClient key={`${subject.id}-${test.slug}`} subjectId={subject.id} subjectLabel={subject.label} term={test.term} testNo={test.testNo} questions={test.questions} />
      <section aria-labelledby="question-review-title" className="space-y-4 border-t border-slate-200 pt-6">
        <h2 id="question-review-title" className="text-xl font-black">Sorular ve Açıklamalı Cevaplar</h2>
        <details className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
          <summary className="cursor-pointer rounded font-bold text-indigo-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600">{test.questions.length} soruyu, seçenekleri ve çözüm notlarını incele</summary>
          <div className="mt-6 space-y-6">
            {test.questions.map((question, index) => (
              <article key={question.id} id={`soru-${index + 1}`} className="space-y-4 rounded-xl border border-slate-200 p-4">
                <h3 className="text-lg font-black">{index + 1}. Soru</h3>
                <p className="whitespace-pre-line break-words font-semibold leading-relaxed"><QuestionText text={question.prompt} /></p>
                {question.imageUrl && <Image src={question.imageUrl} alt={question.imageAlt ?? `${index + 1}. soruya ait şekil`} width={question.imageWidth ?? 900} height={question.imageHeight ?? 600} loading="lazy" sizes="(max-width: 768px) 90vw, 760px" className="h-auto max-h-[36rem] w-full rounded-xl object-contain" />}
                <ol type="A" className="list-inside list-[upper-alpha] space-y-2">
                  {question.options.map((option, optionIndex) => <li key={optionIndex} className="rounded-lg bg-slate-50 p-3"><QuestionText text={option} /></li>)}
                </ol>
                <p className="rounded-lg bg-emerald-50 p-3 text-emerald-900"><strong>Doğru cevap: {String.fromCharCode(65 + question.correct)}) </strong><QuestionText text={question.options[question.correct]} /></p>
                <div className="space-y-2 rounded-lg bg-indigo-50 p-4">
                  <h4 className="font-black text-indigo-800">Çözüm Notu</h4>
                  <p className="whitespace-pre-line break-words leading-relaxed"><QuestionText text={question.explanation} /></p>
                </div>
              </article>
            ))}
          </div>
        </details>
      </section>
      {relatedTests.length > 0 && (
        <section className="space-y-4 border-t border-slate-200 pt-6">
          <h2 className="text-xl font-black">Diğer Testler</h2>
          <div className="flex flex-wrap gap-3">
            {relatedTests.map((related) => (
              <Link key={related.slug} href={`/6-sinif/${subject.id}/${related.slug}`} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-bold text-indigo-700 hover:border-indigo-400 focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600">{related.title}</Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

