'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const subjectTitleMap: Record<string, string> = {
  // ✅ TEK ANAYASA (3 bölüm yok)
  anayasa: 'T.C. Anayasası',

  'dmk-657': '657 Sayılı Devlet Memurları Kanunu (1-212)',
  'etik-5176': '5176 Sayılı Etik Kurulu + Yönetmelik',
  'isg-6331': '6331 Sayılı İş Sağlığı ve Güvenliği Kanunu',
  'kmykk-5018': '5018 Sayılı Kamu Mali Yönetimi ve Kontrol Kanunu',
  'bilgi-edinme-4982': '4982 Sayılı Bilgi Edinme Hakkı Kanunu + Yönetmelik',
  'iyuk-2577': '2577 Sayılı İdari Yargılama Usulü Kanunu',
  'cbk-1-16-bolum': '1 Sayılı CBK (Onaltıncı Bölüm)',
  'resmi-yazisma-yonetmelik': 'Resmi Yazışmalarda Usul ve Esaslar Yönetmeliği',
  'ataturk-ilkeleri-inkilap': 'Atatürk İlkeleri ve İnkılap Tarihi',
  'turkce-dilbilgisi': 'Türkçe Dil Bilgisi ve Yazım Kuralları',
  'genel-kultur': 'Genel Kültür',

  'kamu-ihale-4734': '4734 Sayılı Kamu İhale Kanunu',
  'devlet-ihale-2886': '2886 Sayılı Devlet İhale Kanunu',
  'dilekce-hakki-3071': '3071 Sayılı Dilekçe Hakkı Kanunu',
};

export default function SubjectPage() {
  const params = useParams();
  const subject = (params?.subject as string) || '';
  const title = subjectTitleMap[subject] || subject;

  // ✅ TEST ID tabanı (senin quiz sayfan bunu okuyor)
  const base = `gorevde-yukselme-${subject}`;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900">{title}</h1>
            <p className="text-slate-600 font-semibold mt-2">
              4 Test • Her test 25 soru • Toplam 100 soru
            </p>
          </div>

          <Link
            href="/gorevde-yukselme"
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100"
          >
            ← Geri
          </Link>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <Link
              key={n}
              href={`/test/${base}-${n}`}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="text-xs font-black text-slate-500 uppercase tracking-wider">
                Test {n}
              </div>
              <div className="mt-2 text-xl font-black text-slate-900">25 Soru</div>
              <div className="mt-4 font-black text-indigo-700">Başlat →</div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}