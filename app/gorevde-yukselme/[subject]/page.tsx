import Link from 'next/link';
import { notFound } from 'next/navigation';
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata, serializeJsonLd } from '../../../lib/seo';
import { GOREVDE_SUBJECTS, getGorevdeSubjects } from '../data';

type Props = { params: Promise<{ subject: string }> };

async function getSubject(slug: string) {
  if (!GOREVDE_SUBJECTS.some((subject) => subject.slug === slug)) notFound();
  const subject = (await getGorevdeSubjects()).find((item) => item.slug === slug);
  if (!subject) notFound();
  return subject;
}

export async function generateStaticParams() {
  return (await getGorevdeSubjects()).filter((subject) => subject.tests.length > 0).map(({ slug }) => ({ subject: slug }));
}

export async function generateMetadata({ params }: Props) {
  const subject = await getSubject((await params).subject);
  const count = subject.tests.reduce((total, test) => total + test.questionCount, 0);
  return createPageMetadata({
    title: `${subject.title} Testleri`,
    description: subject.tests.length
      ? `${subject.title} konusunda ${subject.tests.length} test ve ${count} soru ile görevde yükselme sınavına çalışın. Cevapları ve açıklamaları test sonunda inceleyin.`
      : `${subject.title} için görevde yükselme testleri hazırlanıyor. Yayımlanan diğer konu testlerini inceleyebilirsiniz.`,
    path: `/gorevde-yukselme/${subject.slug}`,
    index: subject.tests.length > 0,
  });
}

export default async function SubjectPage({ params }: Props) {
  const subject = await getSubject((await params).subject);
  const count = subject.tests.reduce((total, test) => total + test.questionCount, 0);
  const path = `/gorevde-yukselme/${subject.slug}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', name: `${subject.title} Testleri`, url: absoluteUrl(path),
    mainEntity: {
      '@type': 'ItemList', numberOfItems: subject.tests.length,
      itemListElement: subject.tests.map((test, index) => ({
        '@type': 'ListItem', position: index + 1, name: test.title, url: absoluteUrl(`/test/${test.id}`),
      })),
    },
  };
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      {subject.tests.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([
        { name: 'Ana Sayfa', path: '/' }, { name: 'Görevde Yükselme', path: '/gorevde-yukselme' }, { name: subject.title, path },
      ])) }} />
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900">{subject.title}</h1>
            <p className="mt-2 font-semibold text-slate-600">
              {subject.tests.length ? `${subject.tests.length} Test • Toplam ${count} soru` : 'Bu konu için testler hazırlanıyor.'}
            </p>
          </div>
          <Link href="/gorevde-yukselme" className="rounded-xl border border-slate-200 bg-white px-4 py-2 font-bold text-slate-700 hover:bg-slate-100">← Geri</Link>
        </div>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {subject.tests.map((test) => (
            <Link key={test.id} href={`/test/${test.id}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <h2 className="font-black text-slate-900">{test.title}</h2>
              <div className="mt-2 text-xl font-black text-slate-900">{test.questionCount} Soru</div>
              <div className="mt-4 font-black text-indigo-700">Başlat →</div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
