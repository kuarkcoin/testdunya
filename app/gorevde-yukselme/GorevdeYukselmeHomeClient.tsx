'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import type { GorevdeSubject } from './data';

type Badge = { title: string; desc: string; at: string };



function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export default function GorevdeYukselmeHomeClient({ subjects }: { subjects: GorevdeSubject[] }) {
  const tests = subjects.flatMap((subject) => subject.tests);
  const questionCount = tests.reduce((total, test) => total + test.questionCount, 0);
  const [badges, setBadges] = useState<Record<string, Badge>>({});
  const [results, setResults] = useState<Record<string, any>>({});
  const [mistakes, setMistakes] = useState<any[]>([]);

  useEffect(() => {
    setBadges(readJSON('gy_badges', {}));
    setResults(readJSON('gy_results', {}));
    setMistakes(readJSON('my_mistakes', []));
  }, []);

  const stats = useMemo(() => {
    const doneCount = Object.keys(results || {}).length;

    // Hataları ders bazında say (uniqueId: `${testId}-${q.id}`)
    const bySubject: Record<string, number> = {};
    for (const m of mistakes || []) {
      const testTitle: string = m.testTitle || '';
      if (!testTitle.startsWith('gorevde-yukselme-')) continue;

      // gorevde-yukselme-{subjectSlug}-{testNo}
      const parts = testTitle.replace('gorevde-yukselme-', '').split('-');
      const testNo = parts[parts.length - 1];
      const subjectSlug = parts.slice(0, -1).join('-');

      if (!Number(testNo)) continue;
      bySubject[subjectSlug] = (bySubject[subjectSlug] || 0) + 1;
    }

    return { doneCount, bySubject };
  }, [results, mistakes]);

  const badgeList = Object.values(badges || {});

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-8">

        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900">
              Görevde Yükselme • Ortak Konular
            </h1>
            <p className="text-slate-600 font-semibold mt-2">
              {tests.length} test • {questionCount} soru • Yayımlanan konulardan karma deneme
            </p>
          </div>
          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100"
          >
            ← Ana Sayfa
          </Link>
        </div>

        {/* Rozetler */}
        <section className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-xl font-black text-slate-800">🏆 Rozetler</h2>
            <div className="text-sm font-bold text-slate-500">Tamamlanan test: {stats.doneCount}</div>
          </div>

          {badgeList.length === 0 ? (
            <div className="mt-3 text-slate-500 font-semibold">
              Henüz rozet yok. Testleri bitirdikçe otomatik açılacak. 🔥
            </div>
          ) : (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              {badgeList.map((b, i) => (
                <div key={i} className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="font-black text-emerald-800 text-lg">{b.title}</div>
                  <div className="text-emerald-800/80 font-semibold text-sm mt-1">{b.desc}</div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Karma Deneme */}
        <section className="bg-gradient-to-br from-indigo-600 to-slate-900 text-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              
              <h2 className="text-2xl font-black">⚡ Karma Deneme</h2>
              <p className="opacity-90 font-semibold mt-2">Yayımlanan testlerden karışık {Math.min(50, questionCount)} soru • anında oluşturulur</p>
            </div>
            <Link
              href="/gorevde-yukselme/karma"
              className="px-6 py-3 rounded-xl bg-white text-slate-900 font-black hover:bg-slate-100"
            >
              Başlat →
            </Link>
          </div>
        </section>

        {/* Dersler */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((s) => {
            const wrongCount = stats.bySubject[s.slug] || 0;

            if (!s.tests.length) {
              return (
                <article key={s.slug} className="rounded-2xl border border-slate-200 bg-slate-100 p-5">
                  <h2 className="text-lg font-black text-slate-700">{s.title}</h2>
                  <p className="mt-3 text-sm font-semibold text-slate-500">Testler hazırlanıyor.</p>
                </article>
              );
            }
            const href = `/gorevde-yukselme/${s.slug}`;
            const count = s.tests.reduce((total, test) => total + test.questionCount, 0);
            const metaText = `${s.tests.length} Test • ${count} Soru`;

            return (
              <Link
                key={s.slug}
                href={href}
                className="group bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className="font-black text-slate-900 text-lg">{s.title}</div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="text-sm font-bold text-slate-500">{metaText}</div>

                  {wrongCount > 0 ? (
                    <span className="text-xs font-black px-2 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200">
                      {wrongCount} hata
                    </span>
                  ) : (
                    <span className="text-xs font-black px-2 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      temiz
                    </span>
                  )}
                </div>

                <div className="mt-4 text-indigo-700 font-black">Derse Gir →</div>
              </Link>
            );
          })}
        </section>

      </div>
    </main>
  );
}
