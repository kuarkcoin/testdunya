'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const subjectSlugs = [
  'tc-anayasasi-genel-esaslar',
  'tc-anayasasi-temel-haklar',
  'tc-anayasasi-temel-organlar',
  'dmk-657',
  'etik-5176',
  'isg-6331',
  'kmykk-5018',
  'bilgi-edinme-4982',
  'iyuk-2577',
  'cbk-1-16-bolum',
  'resmi-yazisma-yonetmelik',
  'ataturk-ilkeleri-inkilap',
  'turkce-dilbilgisi',
  'genel-kultur',
  'kamu-ihale-4734',
  'devlet-ihale-2886',
  'dilekce-hakki-3071',
];

// küçük shuffle
function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function KarmaPage() {
  const router = useRouter();
  const [msg, setMsg] = useState('Karma deneme hazırlanıyor...');

  useEffect(() => {
    (async () => {
      try {
        const pool: any[] = [];

        // tüm derslerin 1..4 testleri
        const urls: string[] = [];
        for (const slug of subjectSlugs) {
          for (const n of [1,2,3,4]) {
            urls.push(`/data/tests/gorevde-yukselme-${slug}-${n}.json?t=${Date.now()}`);
          }
        }

        // paralel çek
        const res = await Promise.all(urls.map(u => fetch(u).then(r => (r.ok ? r.json() : null)).catch(() => null)));

        res.forEach((raw) => {
          if (!raw) return;
          const list = Array.isArray(raw) ? raw : (raw.questions || []);
          list.forEach((q: any) => pool.push(q));
        });

        if (pool.length < 60) throw new Error('Havuz çok küçük / JSON dosyaları eksik olabilir.');

        const selected = shuffle(pool).slice(0, 50);

        const testId = `gy-karma-${Date.now()}`;
        sessionStorage.setItem(`gy_karma_${testId}`, JSON.stringify({ questions: selected }));

        setMsg('Hazır! Başlatılıyor...');
        router.push(`/test/${testId}`);
      } catch (e: any) {
        console.error(e);
        setMsg('Karma deneme oluşturulamadı. JSON dosyaları eksik olabilir.');
      }
    })();
  }, [router]);

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="text-xl font-black text-slate-900">⚡ Karma Deneme</div>
        <div className="mt-3 text-slate-600 font-semibold">{msg}</div>
        <div className="mt-4 text-xs text-slate-500">
          Not: Karma deneme için ilgili test JSON’larının public/data/tests altında bulunması gerekir.
        </div>
      </div>
    </main>
  );
}