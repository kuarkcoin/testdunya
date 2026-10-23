import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { canonicalBase, getGrade6Subject, getGrade6SubjectParams, getGrade6Tests } from '../../data/grade6/seo';

type PageProps = { params: Promise<{ subject: string }> };
export const generateStaticParams = getGrade6SubjectParams;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const subject = getGrade6Subject((await params).subject);
  if (!subject) return { title: '6. Sınıf Ders Bulunamadı' };
  return {
    title: `6. Sınıf ${subject.label} Testleri`,
    description: `6. sınıf ${subject.label} için açıklamalı 1. dönem başlangıç testleri. Soruları ücretsiz çöz, sonuçlarını incele ve tekrar çalış.`,
    alternates: { canonical: `${canonicalBase}/6-sinif/${subject.id}` },
  };
}

export default async function Grade6SubjectPage({ params }: PageProps) {
  const subject = getGrade6Subject((await params).subject);
  if (!subject) notFound();
  const tests = getGrade6Tests(subject.id);

  return (
    <article className="space-y-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 text-slate-900 shadow-xl md:p-10">
      <nav aria-label="Sayfa yolu" className="flex flex-wrap gap-2 text-sm font-bold text-slate-600">
        <Link href="/6-sinif" className="rounded hover:text-indigo-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600">6. Sınıf</Link><span aria-hidden="true">›</span><span aria-current="page">{subject.label}</span>
      </nav>
      <header className={`space-y-4 rounded-[1.75rem] bg-gradient-to-br ${subject.gradient} p-6 text-white shadow-lg md:p-10`}>
        <span aria-hidden="true" className="text-5xl">{subject.icon}</span>
        <h1 className="text-3xl font-black tracking-tight md:text-5xl">6. Sınıf {subject.label} Testleri</h1>
        <p className="font-semibold text-white/95">{subject.description}</p>
        <p className="font-bold">Başlangıç paketi • {tests.length} test</p>
      </header>
      {([1, 2] as const).map((term) => {
        const termTests = tests.filter((test) => test.term === term);
        return (
          <section key={term} aria-labelledby={`term-${term}`} className="space-y-4">
            <h2 id={`term-${term}`} className="text-2xl font-black">{term}. Dönem</h2>
            {termTests.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 font-semibold text-slate-600">Bu dönem için henüz test eklenmedi. 1. dönem başlangıç testleriyle çalışabilirsin.</p>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {termTests.map((test) => (
                  <Link key={test.slug} href={`/6-sinif/${subject.id}/${test.slug}`} className="space-y-3 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:border-indigo-300 hover:shadow-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600">
                    <h3 className="text-xl font-black">Test {test.testNo}</h3>
                    <p className="font-bold text-slate-800">{test.topic}</p>
                    <p className="font-semibold text-slate-600">{test.questions.length} soru • Açıklamalı cevaplar</p>
                    <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-black text-indigo-700">Testi çöz →</span>
                  </Link>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </article>
  );
}
