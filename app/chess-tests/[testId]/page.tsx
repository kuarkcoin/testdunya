import type { Metadata } from 'next';
import type { ChessTestsData } from '../../../lib/chess/types';
import chessTestsData from '../../../public/data/satranc-testleri.json';
import ChessTestClient from './ChessTestClient';

const data = chessTestsData as ChessTestsData;
const baseUrl = 'https://testdunya.net';

function getTestNumber(testId: string) {
  const match = testId.match(/test-(\d+)/);
  return match ? Number(match[1]) : undefined;
}

export function generateStaticParams() {
  return (data.tests ?? []).map((test) => ({ testId: test.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ testId: string }>;
}): Promise<Metadata> {
  const { testId } = await params;
  const test = (data.tests ?? []).find((item) => item.id === testId);
  const testNumber = getTestNumber(testId);
  const title = test && testNumber
    ? `Chess Test ${testNumber} | Best Move and Tactics Puzzle Quiz | TestDünya`
    : 'Chess Test Not Found | TestDünya';
  const description = test && testNumber
    ? `Solve Chess Test ${testNumber} with 10 timed chess puzzle questions. Practice best moves, checkmates, forks, pins and chess tactics online.`
    : 'The requested chess test could not be found.';

  return {
    title,
    description,
    alternates: {
      canonical: test ? `/chess-tests/${test.id}` : '/chess-tests',
    },
    openGraph: {
      title: test && testNumber ? `Chess Test ${testNumber} | TestDünya` : 'Chess Test | TestDünya',
      description,
      url: test ? `/chess-tests/${test.id}` : '/chess-tests',
      siteName: 'TestDünya',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: test && testNumber ? `Chess Test ${testNumber} | TestDünya` : 'Chess Test | TestDünya',
      description,
    },
    robots: {
      index: Boolean(test),
      follow: true,
    },
  };
}

export default async function ChessTestPage({
  params,
}: {
  params: Promise<{ testId: string }>;
}) {
  const { testId } = await params;
  const tests = data.tests ?? [];
  const testIndex = tests.findIndex((item) => item.id === testId);
  const test = tests[testIndex];
  const testNumber = getTestNumber(testId) ?? testIndex + 1;
  const previousTestId = testIndex > 0 ? tests[testIndex - 1]?.id : undefined;
  const nextTestId = testIndex >= 0 && testIndex < tests.length - 1 ? tests[testIndex + 1]?.id : undefined;

  const quizSchema = test ? {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: `Chess Test ${testNumber}`,
    learningResourceType: 'Quiz',
    educationalLevel: 'Beginner to Intermediate',
    inLanguage: 'en-US',
    numberOfQuestions: test.questions?.length ?? 10,
    provider: {
      '@type': 'Organization',
      name: 'TestDünya',
    },
    url: `${baseUrl}/chess-tests/${test.id}`,
  } : undefined;

  const breadcrumbSchema = test ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Chess Tests',
        item: `${baseUrl}/chess-tests`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Chess Test ${testNumber}`,
        item: `${baseUrl}/chess-tests/${test.id}`,
      },
    ],
  } : undefined;

  return (
    <ChessTestClient
      test={test}
      testNumber={testNumber}
      previousTestId={previousTestId}
      nextTestId={nextTestId}
      quizSchema={quizSchema}
      breadcrumbSchema={breadcrumbSchema}
    />
  );
}
