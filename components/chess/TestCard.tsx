import Link from 'next/link';
import type { ChessTest } from '../../lib/chess/types';

type TestCardProps = {
  test: ChessTest;
  index: number;
};

export default function TestCard({ test, index }: TestCardProps) {
  return (
    <Link
      href={`/satranc-testleri/${test.id}`}
      className="group block h-full rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
    >
      <div className="flex h-full flex-col justify-between gap-6">
        <div>
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl shadow-inner">
              ♟
            </span>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-amber-700">
              Test {index + 1}
            </span>
          </div>
          <h2 className="text-xl font-black text-slate-900">{test.title}</h2>
          <p className="mt-2 text-sm font-medium text-slate-600">{test.description}</p>
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
          <span>10 soru / 30 dakika</span>
          <span className="text-emerald-700 transition-transform group-hover:translate-x-1">Başla →</span>
        </div>
      </div>
    </Link>
  );
}
