'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

type Badge = { title: string; desc: string; at: string };

// ✅ TEK ANAYASA: 3 ayrı sayfa kaldırıldı, 1 ders yapıldı.
const subjects = [
  { slug: 'anayasa', title: 'T.C. Anayasası' },

  { slug: 'dmk-657', title: '657 Sayılı Devlet Memurları Kanunu (1-212)' },
  { slug: 'etik-5176', title: '5176 Sayılı Etik Kurulu + Yönetmelik' },
  { slug: 'isg-6331', title: '6331 Sayılı İş Sağlığı ve Güvenliği Kanunu' },
  { slug: 'kmykk-5018', title: '5018 Sayılı Kamu Mali Yönetimi ve Kontrol Kanunu' },
  { slug: 'bilgi-edinme-4982', title: '4982 Sayılı Bilgi Edinme Hakkı Kanunu + Yönetmelik' },
  { slug: 'iyuk-2577', title: '2577 Sayılı İdari Yargılama Usulü Kanunu' },
  { slug: 'cbk-1-16-bolum', title: '1 Sayılı CBK (Onaltıncı Bölüm)' },
  { slug: 'resmi-yazisma-yonetmelik', title: 'Resmi Yazışmalarda Usul ve Esaslar Yönetmeliği' },
  { slug: 'ataturk-ilkeleri-inkilap', title: 'Atatürk İlkeleri ve İnkılap Tarihi' },
  { slug: 'turkce-dilbilgisi', title: 'Türkçe Dil Bilgisi ve Yazım Kuralları' },
  { slug: 'genel-kultur', title: 'Genel Kültür' },

  // ✅ Yeni ekler
  { slug: 'kamu-ihale-4734', title: '4734 Sayılı Kamu İhale Kanunu' },
  { slug: 'devlet-ihale-2886', title: '2886 Sayılı Devlet İhale Kanunu' },
  { slug: 'dilekce-hakki-3071', title: '3071 Sayılı Dilekçe Hakkı Kanunu' },
];

function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export default function GorevdeYukselmeHome() {
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
              Ders seç → 4 test (25 soru) • + Karma Deneme
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
              <div className="text-xs font-black uppercase tracking-wider opacity-80">NEW</div>
              <h2 className="text-2xl font-black">⚡ Karma Deneme (Tüm Mevzuat)</h2>
              <p className="opacity-90 font-semibold mt-2">Tüm derslerden karışık 50 soru • anında oluşturulur</p>
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

            // ✅ Anayasa özel route: /test/gorevde-yukselme/anayasa
            const href = s.slug === 'anayasa' ? '/test/gorevde-yukselme/anayasa' : `/gorevde-yukselme/${s.slug}`;

            // ✅ Kart alt yazısı: anayasa 100 soru
            const metaText = s.slug === 'anayasa' ? '4 Test • 100 Soru' : '4 Test • 25 Soru';

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