import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import TestCard from '../../components/chess/TestCard';
import type { ChessTestsData } from '../../lib/chess/types';
import chessTestsData from '../../public/data/satranc-testleri.json';

const data = chessTestsData as ChessTestsData;
const baseUrl = 'https://testdunya.net';

export const metadata: Metadata = {
  title: 'Chess Tests Online | Best Move, Checkmate and Tactics Puzzles | TestDünya',
  description: 'Solve online chess tests with best move puzzles, checkmate tactics, forks, pins, skewers and defensive moves. 50 chess tests with 500 real puzzle questions.',
  keywords: [
    'chess tests',
    'online chess test',
    'chess puzzles',
    'best move',
    'checkmate puzzles',
    'chess tactics',
    'fork tactic',
    'pin tactic',
    'skewer tactic',
    'defensive move',
    'chess quiz',
    'chess training',
  ],
  alternates: {
    canonical: '/chess-tests',
  },
  openGraph: {
    title: 'Chess Tests Online | TestDünya',
    description: 'Practice chess tactics with 50 online chess tests and 500 real puzzle questions.',
    url: '/chess-tests',
    siteName: 'TestDünya',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chess Tests Online | TestDünya',
    description: 'Practice chess tactics with 50 online chess tests and 500 real puzzle questions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChessTestsPage() {
  const tests = data.tests ?? [];
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Chess Tests Online',
    description: '50 online chess tests with 500 real puzzle questions.',
    inLanguage: 'en-US',
    url: `${baseUrl}/chess-tests`,
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 px-4 py-10 sm:px-6 lg:px-8">
      <Script id="chess-tests-collection-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm ring-1 ring-emerald-100 transition hover:bg-emerald-50">
            ← Home
          </Link>
        </div>

        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-lime-600 p-6 text-white shadow-2xl sm:p-10">
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-black uppercase tracking-wide backdrop-blur">
              ♔ Chess Tests
            </div>
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl">Chess Tests Online</h1>
            <p className="mt-4 text-base font-medium text-emerald-50 sm:text-lg">
              Improve your chess tactics with timed best-move puzzles. Each test includes 10 questions and every question has a 3-minute timer.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black text-slate-900">Online Chess Tests for Tactics Training</h2>
          <p className="mt-3 max-w-4xl text-base font-medium leading-7 text-slate-700">
            These online chess tests help players practice best-move decisions, checkmate patterns, forks, pins, skewers, hanging pieces and defensive moves. Each test contains 10 timed chess puzzle questions based on real chess positions.
          </p>
        </section>

        <section className="mt-6 rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black text-slate-900">What You Can Practice</h2>
          <ul className="mt-4 grid gap-3 text-sm font-bold text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Best move puzzles',
              'Checkmate puzzles',
              'Fork tactics',
              'Pin tactics',
              'Skewer tactics',
              'Defensive moves',
              'Hanging piece tactics',
              'Real chess puzzle positions',
            ].map((item) => (
              <li key={item} className="rounded-2xl bg-emerald-50 px-4 py-3 text-emerald-900">✓ {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          {tests.length === 0 ? (
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-center font-bold text-amber-800">
              No chess tests are available yet. Please check again later.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {tests.map((test, index) => (
                <TestCard key={test.id} test={test} index={index} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
