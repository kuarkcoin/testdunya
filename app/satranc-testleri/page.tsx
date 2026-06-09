import type { Metadata } from 'next';
import Link from 'next/link';
import TestCard from '../../components/chess/TestCard';
import type { ChessTestsData } from '../../lib/chess/types';
import chessTestsData from '../../public/data/satranc-testleri.json';

const data = chessTestsData as ChessTestsData;

export const metadata: Metadata = {
  title: 'Satranç Testleri | TestDünya',
  description: '10 soruluk ve soru başına 3 dakikalık online satranç hamle testleri.',
  alternates: {
    canonical: '/satranc-testleri',
  },
};

export default function SatrancTestleriPage() {
  const tests = data.tests ?? [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm ring-1 ring-emerald-100 transition hover:bg-emerald-50">
            ← Ana sayfa
          </Link>
        </div>

        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-lime-600 p-6 text-white shadow-2xl sm:p-10">
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-black uppercase tracking-wide backdrop-blur">
              ♔ Satranç Testleri
            </div>
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl">Satranç hamle becerini ölç</h1>
            <p className="mt-4 text-base font-medium text-emerald-50 sm:text-lg">
              Her test 10 sorudan oluşur. Her soru için 3 dakika süren var; süre dolduğunda soru boş sayılır ve sistem otomatik ilerler.
            </p>
          </div>
        </section>

        <section className="mt-10">
          {tests.length === 0 ? (
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-center font-bold text-amber-800">
              Henüz satranç testi eklenmedi. Lütfen daha sonra tekrar kontrol edin.
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
