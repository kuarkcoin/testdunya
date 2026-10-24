import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Grade6QuizClient from '../../../../components/grade6/Grade6QuizClient';
import { canonicalBase, getGrade6Subject, getGrade6Test, getGrade6TestParams, getGrade6Tests } from '../../../data/grade6/seo';

type PageProps = { params: Promise<{ subject: string; testSlug: string }> };
export const generateStaticParams = getGrade6TestParams;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subject: subjectId, testSlug } = await params;
  const subject = getGrade6Subject(subjectId);
  const test = subject && getGrade6Test(subject.id, testSlug);
  if (!subject || !test) return { title: '6. Sınıf Test Bulunamadı' };
  return {
    title: `6. Sınıf ${subject.label} ${test.title}`,
    description: `${test.questions.length} soruluk 6. sınıf ${subject.label} ${test.topic} testi. Testi çöz, puanını ve açıklamalı cevapları incele.`,
    alternates: { canonical: `${canonicalBase}/6-sinif/${subject.id}/${test.slug}` },
  };
}

export default async function Grade6TestPage({ params }: PageProps) {
  const { subject: subjectId, testSlug } = await params;
  const subject = getGrade6Subject(subjectId);
  const test = subject && getGrade6Test(subject.id, testSlug);
  if (!subject || !test) notFound();
  const relatedTests = getGrade6Tests(subject.id).filter((item) => item.slug !== test.slug).slice(0, 5);

  return (
    <article className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-3 text-slate-900 shadow-xl md:p-8">
      <nav aria-label="Sayfa yolu" className="flex flex-wrap gap-2 px-2 text-sm font-bold text-slate-600">
        <Link href="/6-sinif" className="rounded hover:text-indigo-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600">6. Sınıf</Link><span aria-hidden="true">›</span>
        <Link href={`/6-sinif/${subject.id}`} className="rounded hover:text-indigo-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600">{subject.label}</Link><span aria-hidden="true">›</span>
        <span aria-current="page">{test.title}</span>
      </nav>
      <header className="space-y-3 px-2">
        <h1 className="text-2xl font-black tracking-tight md:text-4xl">6. Sınıf {subject.label} • Test {test.testNo}</h1>
        <p className="font-bold text-indigo-700">{test.topic}</p>
        <p className="font-semibold text-slate-600">{test.term}. Dönem • {test.questions.length} soru • Açıklamalı başlangıç testi</p>
      </header>
      <Grade6QuizClient key={`${subject.id}-${test.slug}`} subjectId={subject.id} subjectLabel={subject.label} term={test.term} testNo={test.testNo} questions={test.questions} />
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
