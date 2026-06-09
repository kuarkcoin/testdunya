import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import {
  canonicalBase,
  getGrade5Subject,
  getGrade5SubjectParams,
  getGrade5Tests,
  type Grade5TestSeo,
} from '../../data/grade5/seo';
import type { SubjectId } from '../../data/grade5/types';

type PageProps = { params: Promise<{ subject: string }> };

export function generateStaticParams() {
  return getGrade5SubjectParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subject: subjectParam } = await params;
  const subject = getGrade5Subject(subjectParam);
  if (!subject) return { title: '5. Sınıf Ders Bulunamadı | TestDünya' };
  return {
    title: `5. Sınıf ${subject.label} Testleri - Şekilli Yeni Nesil Sorular | TestDünya`,
    description: `5. sınıf ${subject.titleLabel.toLocaleLowerCase('tr-TR')} testleri ile şekilli, görselli ve yeni nesil soruları ücretsiz çöz. MEB kazanımlarına uygun cevaplı online testler.`,
    alternates: { canonical: `${canonicalBase}/5-sinif/${subject.id}` },
    robots: { index: true, follow: true },
  };
}

const testDescription = (test: Grade5TestSeo) =>
  `${test.questions.length} soru • ${test.hasImages ? 'şekilli/görselli sorular' : 'metin tabanlı yeni nesil sorular'} • ${test.term}. dönem`;

export default async function Grade5SubjectPage({ params }: PageProps) {
  const { subject: subjectParam } = await params;
  const subject = getGrade5Subject(subjectParam);
  if (!subject) notFound();
  const tests = getGrade5Tests(subject.id as SubjectId);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: canonicalBase },
      { '@type': 'ListItem', position: 2, name: '5. Sınıf', item: `${canonicalBase}/5-sinif` },
      { '@type': 'ListItem', position: 3, name: subject.label, item: `${canonicalBase}/5-sinif/${subject.id}` },
    ],
  };

  return (
    <>
      <Script id={`grade5-${subject.id}-breadcrumb`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="bg-slate-50 text-slate-900 rounded-[2rem] border border-slate-200 shadow-xl p-5 md:p-10 space-y-8">
        <nav className="text-sm font-bold text-slate-500 flex flex-wrap gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-indigo-600">Ana Sayfa</Link>
          <span>›</span>
          <Link href="/5-sinif" className="hover:text-indigo-600">5. Sınıf</Link>
          <span>›</span>
          <span className="text-slate-900">{subject.label}</span>
        </nav>

        <header className={`rounded-[1.75rem] bg-gradient-to-br ${subject.gradient} text-white p-6 md:p-10 shadow-lg relative overflow-hidden`}>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-5xl">{subject.icon}</span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter">5. Sınıf {subject.label} Testleri</h1>
            <p className="text-white/90 font-semibold text-base md:text-lg leading-relaxed">{subject.description}</p>
          </div>
          <span className="absolute -right-8 -bottom-10 text-[10rem] opacity-10">{subject.icon}</span>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-black tracking-tight">5. Sınıf {subject.label} Test Listesi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {tests.map((test) => (
              <Link
                key={test.slug}
                href={`/5-sinif/${subject.id}/${test.slug}`}
                className="rounded-[1.5rem] bg-white border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all space-y-3"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600">Test {test.testNo}</p>
                <h3 className="text-xl font-black text-slate-900">{test.topic}</h3>
                <p className="text-slate-600 font-semibold">{testDescription(test)}</p>
                <span className="inline-flex rounded-full bg-indigo-50 text-indigo-700 px-4 py-2 text-sm font-black">Testi aç ➔</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
