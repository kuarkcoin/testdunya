import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { getParagrafTestBySlug, PARAGRAF_TESTS } from '../../data/paragrafTests';

export function generateStaticParams() {
  return PARAGRAF_TESTS.map((test) => ({ testSlug: test.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ testSlug: string }>;
}): Promise<Metadata> {
  const { testSlug } = await params;
  const test = getParagrafTestBySlug(testSlug);

  if (!test) {
    return {
      title: 'Paragraf Testi Bulunamadı | Testdunya',
      description: 'İstenen paragraf testi bulunamadı.',
    };
  }

  return {
    title: `Paragraf Test ${test.id} | Testdunya`,
    description: `Paragraf Test ${test.id} sayfasında 20 soruluk 5. sınıf düzeyi okuduğunu anlama testi çözün.`,
    openGraph: {
      title: `Paragraf Test ${test.id}`,
      description: '20 soruluk paragraf testi',
      type: 'article',
      url: `https://www.testdunya.com/paragraf/${test.slug}`,
    },
    alternates: {
      canonical: `/paragraf/${test.slug}`,
    },
  };
}

export default async function ParagrafTestDetailRedirectPage({
  params,
}: {
  params: Promise<{ testSlug: string }>;
}) {
  const { testSlug } = await params;
  const test = getParagrafTestBySlug(testSlug);

  if (!test) {
    notFound();
  }

  redirect(`/test/${test.dataId}`);
}
