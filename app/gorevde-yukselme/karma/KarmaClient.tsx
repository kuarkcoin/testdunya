'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { Question } from '../../../lib/test-types';

function shuffle<T>(items: T[]) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function KarmaClient({ questions }: { questions: Question[] }) {
  const router = useRouter();
  const started = useRef(false);
  const [message, setMessage] = useState('Karma deneme hazırlanıyor...');

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (!questions.length) {
      setMessage('Karma deneme için henüz yayımlanmış soru bulunmuyor.');
      return;
    }
    try {
      const testId = `gy-karma-${Date.now()}`;
      const selected = shuffle(questions).slice(0, 50);
      sessionStorage.setItem(`gy_karma_${testId}`, JSON.stringify({ questions: selected }));
      setMessage('Hazır! Deneme açılıyor...');
      router.replace(`/test/${testId}`);
    } catch {
      setMessage('Deneme bu tarayıcıda kaydedilemedi. Tarayıcının site depolamasına izin verip yeniden deneyebilirsiniz.');
    }
  }, [questions, router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <section className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-black text-slate-900">Karma Deneme</h1>
        <p className="mt-3 font-semibold text-slate-600" role="status">{message}</p>
        <Link href="/gorevde-yukselme" className="mt-5 inline-block font-bold text-indigo-700">← Konu testlerine dön</Link>
      </section>
    </main>
  );
}
