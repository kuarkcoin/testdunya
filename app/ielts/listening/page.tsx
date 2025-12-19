'use client';

import Link from 'next/link';
import { Play, Lock } from 'lucide-react';

type Level = 'Easy' | 'Medium' | 'Hard';

type ListeningTest = {
  id: string;
  title: string;
  part: 'Part 1' | 'Part 2' | 'Part 3' | 'Part 4';
  level: Level;
  locked?: boolean;
};

const levelBadgeClass = (level: Level) => {
  switch (level) {
    case 'Easy':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'Medium':
      return 'bg-amber-100 text-amber-700 border-amber-200';
    case 'Hard':
      return 'bg-red-100 text-red-700 border-red-200';
    default:
      return 'bg-slate-100 text-slate-700 border-slate-200';
  }
};

export default function ListeningMenu() {
  const tests: ListeningTest[] = [
    { id: 'ielts-listening', title: 'Accommodation', part: 'Part 1', level: 'Easy' },
    { id: 'ielts-listening-2', title: 'New Gym', part: 'Part 2', level: 'Medium' },
    { id: 'ielts-listening-3', title: 'Museum Tour', part: 'Part 2', level: 'Medium' },
    { id: 'ielts-listening-4', title: 'Zoo Volunteering', part: 'Part 2', level: 'Easy' },
    { id: 'ielts-listening-5', title: 'Business Project', part: 'Part 3', level: 'Hard' },
    { id: 'ielts-listening-7', title: 'Research Proposal', part: 'Part 3', level: 'Hard' },
  ];

  const activeCount = tests.filter((t) => !t.locked).length;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Top nav */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="text-sm font-bold text-slate-400 hover:text-indigo-600 transition-colors"
          >
            ← Ana Sayfa
          </Link>

          <div className="text-xs font-semibold text-slate-400">
            Available: <span className="text-slate-600">{activeCount}</span> /{' '}
            <span className="text-slate-600">{tests.length}</span>
          </div>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-2">
            IELTS Listening Library
          </h1>
          <p className="text-slate-500">
            Real IELTS-style listening tests with instant practice flow.
          </p>
          <p className="text-xs text-slate-400 mt-2">Headphones recommended 🎧</p>
        </div>

        {/* List */}
        <div className="space-y-4">
          {tests.map((t) => {
            const href = `/test/${t.id}`;
            const disabled = !!t.locked;

            const CardInner = (
              <div className="flex justify-between items-center gap-4">
                <div className="min-w-0">
                  <h3
                    className={`font-extrabold text-lg md:text-xl truncate transition-colors ${
                      disabled ? 'text-slate-500' : 'text-slate-800 group-hover:text-indigo-600'
                    }`}
                  >
                    {t.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                      {t.part}
                    </span>

                    <span
                      className={`text-xs font-extrabold px-2.5 py-1 rounded-md border ${levelBadgeClass(
                        t.level
                      )}`}
                    >
                      {t.level}
                    </span>

                    {disabled && (
                      <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md border border-slate-200 inline-flex items-center gap-1">
                        <Lock size={14} />
                        Locked
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all shrink-0 ${
                    disabled
                      ? 'bg-slate-100 text-slate-400 border-slate-200'
                      : 'bg-slate-100 text-slate-700 border-slate-200 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600'
                  }`}
                  aria-hidden="true"
                >
                  {disabled ? <Lock size={18} /> : <Play size={18} />}
                </div>
              </div>
            );

            if (disabled) {
              return (
                <div
                  key={t.id}
                  className="block bg-white p-6 rounded-2xl shadow-sm border border-slate-200 opacity-90 cursor-not-allowed"
                  title="Locked content"
                >
                  {CardInner}
                </div>
              );
            }

            return (
              <Link
                key={t.id}
                href={href}
                className="block bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                {CardInner}
              </Link>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-10 text-xs text-slate-400">
          Tip: Each test is organized by IELTS parts (1–4). Start with Part 1 for warm-up, then
          progress to Part 3–4 for harder sections.
        </div>
      </div>
    </main>
  );
}