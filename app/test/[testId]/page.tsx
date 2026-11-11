import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTestCatalog, getTestData } from '../../../lib/test-data';
import { getRelatedTests, getTestParent } from '../../../lib/test-navigation';
import { isPersonalTestId } from '../../../lib/test-types';
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata, serializeJsonLd } from '../../../lib/seo';
import QuizClient from './QuizClient';

type PageProps = { params: Promise<{ testId: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { testId } = await params;
  if (isPersonalTestId(testId)) {
    return createPageMetadata({
      title: 'Görevde Yükselme Karma Deneme',
      description: 'Bu oturum için oluşturulan kişisel karma denemenizi çözün.',
      path: `/test/${testId}`,
      index: false,
    });
  }
  const test = await getTestData(testId);
  if (!test) notFound();
  return createPageMetadata({
    title: test.title,
    description: test.description,
    path: `/test/${test.canonicalId}`,
    locale: test.id.includes('ielts') ? 'en_US' : 'tr_TR',
  });
}

export default async function TestPage({ params }: PageProps) {
  const { testId } = await params;
  if (isPersonalTestId(testId)) {
    return (
      <main>
        <header className="mx-auto max-w-3xl px-4 pt-8">
          <h1 className="text-2xl font-black">Görevde Yükselme Karma Deneme</h1>
          <p className="mt-2 text-slate-600 dark:text-zinc-300">Bu oturum için oluşturulan kişisel denemeniz.</p>
        </header>
        <QuizClient key={testId} testId={testId} initialTest={null} />
      </main>
    );
  }

  const test = await getTestData(testId);
  if (!test) notFound();
  const path = `/test/${test.canonicalId}`;
  const parent = getTestParent(test.canonicalId);
  const relatedTests = getRelatedTests(await getTestCatalog(), test.canonicalId);
  const schema = [
    breadcrumbJsonLd([
      { name: 'Ana Sayfa', path: '/' },
      { name: parent.breadcrumbPath === '/testler' ? 'Test Kataloğu' : parent.title, path: parent.breadcrumbPath },
      { name: test.title, path },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      '@id': `${absoluteUrl(path)}#quiz`,
      name: test.title,
      description: test.description,
      url: absoluteUrl(path),
      inLanguage: test.id.includes('ielts') ? 'en' : 'tr',
      educationalUse: 'assessment',
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
      <header className="mx-auto max-w-3xl px-4 py-8">
        <nav aria-label="İçerik yolu" className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-zinc-300">
          <Link href="/" className="underline-offset-4 hover:underline">Ana Sayfa</Link>
          <span aria-hidden="true">/</span>
          <Link href={parent.href} className="underline-offset-4 hover:underline">{parent.title}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{test.title}</span>
        </nav>
        <h1 className="text-2xl font-black sm:text-3xl">{test.title}</h1>
        <p className="mt-3 text-slate-600 dark:text-zinc-300">{test.description}</p>
      </header>
      <QuizClient key={test.id} testId={test.id} initialTest={test} />
      {relatedTests.length > 0 ? (
        <section aria-labelledby="related-tests-heading" className="mx-auto max-w-3xl px-4 py-10">
          <h2 id="related-tests-heading" className="text-2xl font-black">Benzer Testlerle Devam Edin</h2>
          <p className="mt-2 text-slate-600 dark:text-zinc-300">Aynı alandaki diğer testlerden birini seçerek çalışmanızı sürdürebilirsiniz.</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {relatedTests.map((related) => (
              <li key={related.id}>
                <Link href={`/test/${related.canonicalId}`} prefetch={false} className="block h-full rounded-xl border border-slate-200 bg-white p-4 hover:border-indigo-400 hover:bg-indigo-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-indigo-500 dark:hover:bg-zinc-800">
                  <span className="font-bold text-slate-900 dark:text-zinc-100">{related.title}</span>
                  <span className="mt-2 block text-sm text-slate-600 dark:text-zinc-300">{related.questionCount} soru</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href={parent.href} className="mt-5 inline-block font-semibold text-indigo-700 hover:underline dark:text-indigo-300">{parent.title} bölümüne dön <span aria-hidden="true">→</span></Link>
        </section>
      ) : null}
    </main>
  );
}

