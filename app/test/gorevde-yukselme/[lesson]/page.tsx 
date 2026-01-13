'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const LESSONS: Record<
  string,
  { title: string; tests: { id: string; title: string; count: number }[] }
> = {
  anayasa: {
    title: 'T.C. Anayasası',
    tests: [
      { id: 'gorevde-yukselme-anayasa-1', title: 'Test 1', count: 25 },
      { id: 'gorevde-yukselme-anayasa-2', title: 'Test 2', count: 25 },
      { id: 'gorevde-yukselme-anayasa-3', title: 'Test 3', count: 25 },
      { id: 'gorevde-yukselme-anayasa-4', title: 'Test 4', count: 25 },
    ],
  },
  // Diğer dersleri istersen buraya 2 satırda ekleriz.
};

export default function LessonPage() {
  const params = useParams();
  const lesson = (params?.lesson as string) || '';

  const data = LESSONS[lesson];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="max-w-lg w-full bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <h1 className="text-2xl font-black text-slate-900 mb-2">Ders bulunamadı</h1>
          <p className="text-slate-600 font-medium mb-6">
            Bu ders henüz tanımlı değil: <span className="font-mono">{lesson}</span>
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800"
          >
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    );
  }

  const total = data.tests.reduce((a, t) => a + t.count, 0);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
          <Link href="/" className="text-slate-500 font-bold hover:text-slate-700">
            ← Ana sayfa
          </Link>

          <h1 className="text-3xl font-black text-slate-900 mt-3">{data.title}</h1>
          <p className="text-slate-600 font-medium mt-2">
            4 Test • Toplam {total} Soru
          </p>
        </div>

        <div className="grid gap-4">
          {data.tests.map((t) => (
            <Link
              key={t.id}
              href={`/test/${t.id}`}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-black tracking-wider uppercase text-slate-500 mb-1">
                    {data.title}
                  </div>
                  <div className="text-xl font-black text-slate-900">{t.title}</div>
                  <div className="text-slate-600 font-medium">{t.count} soru</div>
                </div>
                <div className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-black">
                  Başla →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}