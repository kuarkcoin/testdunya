import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTestData } from '../../../lib/test-data';
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
  const schema = [
    breadcrumbJsonLd([{ name: 'Ana Sayfa', path: '/' }, { name: test.title, path }]),
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
        <h1 className="text-2xl font-black sm:text-3xl">{test.title}</h1>
        <p className="mt-3 text-slate-600 dark:text-zinc-300">{test.description}</p>
      </header>
      <QuizClient key={test.id} testId={test.id} initialTest={test} />
    </main>
  );
}
