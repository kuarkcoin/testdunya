import Link from 'next/link';
import type { ChessTest } from '../../lib/chess/types';

type TestCardProps = {
  test: ChessTest;
  index: number;
};

export default function TestCard({ test, index }: TestCardProps) {
  const testNumber = index + 1;

  return (
    <Link
      href={`/chess-tests/${test.id}`}
      className="group block h-full rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
    >
      <div className="flex h-full flex-col justify-between gap-6">
        <div>
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl shadow-inner">
              ♟
            </span>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-amber-700">
              Test {testNumber}
            </span>
          </div>
          <h2 className="text-xl font-black text-slate-900">Chess Test {testNumber}</h2>
          <p className="mt-2 text-sm font-medium text-slate-600">Timed chess tactics test</p>
        </div>
        <div className="space-y-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
          <div className="flex items-center justify-between gap-3">
            <span>10 questions</span>
            <span>30 minutes</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span>Timed chess tactics test</span>
            <span className="text-emerald-700 transition-transform group-hover:translate-x-1">Start →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
