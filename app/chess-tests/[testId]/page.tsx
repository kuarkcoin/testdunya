import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ChessTestsData } from '../../../lib/chess/types';
import chessTestsData from '../../../public/data/satranc-testleri.json';
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata, serializeJsonLd } from '../../../lib/seo';
import ChessTestClient from './ChessTestClient';

const tests = (chessTestsData as ChessTestsData).tests.filter((test) => test.questions?.length > 0);
type Props = { params: Promise<{ testId: string }> };

function findTest(testId: string) {
  const index = tests.findIndex((test) => test.id === testId);
  if (index < 0) notFound();
  return { test: tests[index], index, number: Number(testId.match(/test-(\d+)$/)?.[1]) || index + 1 };
}

export function generateStaticParams() {
  return tests.map((test) => ({ testId: test.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { testId } = await params;
  const { test, number } = findTest(testId);
  const metadata = createPageMetadata({
    title: `Chess Test ${number} — Best Moves and Tactics`,
    description: `Solve Chess Test ${number} with ${test.questions.length} timed chess puzzles. Practice best moves, checkmates, forks and pins, then review the explanations.`,
    path: `/chess-tests/${test.id}`,
  });
  return { ...metadata, openGraph: { ...metadata.openGraph, locale: 'en_US' } };
}

export default async function ChessTestPage({ params }: Props) {
  const { testId } = await params;
  const { test, index, number } = findTest(testId);
  const path = `/chess-tests/${test.id}`;
  const quizSchema = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: `Chess Test ${number}`,
    description: `${test.questions.length} timed chess puzzles with answer explanations.`,
    learningResourceType: 'Practice test',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    url: absoluteUrl(path),
  };
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Chess Tests', path: '/chess-tests' },
    { name: `Chess Test ${number}`, path },
  ]);

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(quizSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbs) }} />
    <ChessTestClient
      test={test}
      testNumber={number}
      previousTestId={tests[index - 1]?.id}
      nextTestId={tests[index + 1]?.id}
    />
  </>;
}
