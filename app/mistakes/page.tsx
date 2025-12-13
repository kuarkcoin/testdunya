'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

// --- ICONS ---
const Trash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
);
const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);
const AlertCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
);
const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"/></svg>
);

// ----------------------------------------------------
// Security: Minimal HTML sanitizer (no external deps)
// NOTE: For strongest security later, you can swap with DOMPurify.
// ----------------------------------------------------
function sanitizeHtml(input: string) {
  if (!input) return '';

  let s = String(input);

  // 1) Remove script/style/iframe/object/embed tags completely
  s = s.replace(/<\s*(script|style|iframe|object|embed)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, '');

  // 2) Remove inline event handlers like onclick=, onerror= ...
  s = s.replace(/\son\w+\s*=\s*["'][\s\S]*?["']/gi, '');

  // 3) Block javascript: URLs
  s = s.replace(/(href|src)\s*=\s*["']\s*javascript:[\s\S]*?["']/gi, '$1="#"');

  return s;
}

// --- HELPER: Format Text (HTML & Badges) ---
function formatText(text: string) {
  if (!text) return null;

  const raw = String(text);

  // HTML içerik varsa: (Reading vb.) sanitize + bas
  if (raw.includes('<div') || raw.includes('<p') || raw.includes('<br') || raw.includes('<strong')) {
    const safe = sanitizeHtml(raw);
    return (
      <div
        className="prose prose-sm max-w-none text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100"
        dangerouslySetInnerHTML={{ __html: safe }}
      />
    );
  }

  // **bold** parçaları badge yap
  const parts = raw.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          let content = part.slice(2, -2).replace(/^['"]+|['"]+$/g, '');
          return (
            <span
              key={index}
              className="bg-indigo-50 text-indigo-700 font-bold px-1.5 py-0.5 rounded text-sm border border-indigo-100"
            >
              {content}
            </span>
          );
        }
        // Normal metin: HTML yoksa direkt bas
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

// --- HELPER: Başlık Güzelleştirici ---
function getReadableTitle(rawId: string) {
  if (!rawId) return 'Bilinmeyen Test';

  const id = String(rawId);

  // Örnek: "ielts-speaking" -> "IELTS: SPEAKING"
  // Örnek: "yks-sozel-deneme-3" -> "YKS: SÖZEL DENEME 3"
  // Örnek: "yds-exam-test-5" -> "YDS EXAM TEST 5"

  let readable = id.replace(/_/g, '-');

  // Sondaki -q12 gibi suffixleri temizle
  readable = readable.replace(/-q\d+$/i, '');

  // Basit domain mapping
  if (readable.startsWith('ielts')) readable = readable.replace(/^ielts-?/i, 'IELTS: ');
  else if (readable.startsWith('yks')) readable = readable.replace(/^yks-?/i, 'YKS: ');
  else if (readable.startsWith('kpss')) readable = readable.replace(/^kpss-?/i, 'KPSS: ');
  else if (readable.startsWith('tus')) readable = readable.replace(/^tus-?/i, 'TUS: ');
  else if (readable.startsWith('dus')) readable = readable.replace(/^dus-?/i, 'DUS: ');
  else if (readable.startsWith('yds')) readable = readable.toUpperCase();

  // tire -> boşluk, büyük harf
  readable = readable.replace(/-/g, ' ').replace(/\s+/g, ' ').trim().toUpperCase();

  return readable;
}

type MistakeItem = {
  uniqueId: string;
  testTitle?: string;
  testSlug?: string;
  savedAt?: string | number;
  prompt?: string;
  explanation?: string;
  choices?: { id: string; text: string; isCorrect?: boolean }[];
  myWrongAnswer?: string;
  answer?: string;
};

export default function MistakesPage() {
  const [mistakes, setMistakes] = useState<MistakeItem[]>([]);
  const [mounted, setMounted] = useState(false);

  // Storage'dan OKU (storage sırası: eski -> yeni varsayımı)
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('my_mistakes');
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored);
      const arr = Array.isArray(parsed) ? (parsed as MistakeItem[]) : [];
      // UI: yeni -> eski göster
      setMistakes([...arr].reverse());
    } catch {
      console.error('Hata verisi okunamadı');
      setMistakes([]);
    }
  }, []);

  // UI'daki (reverse) listeden sil, storage'a doğru sırayla yaz
  const deleteMistake = (uniqueId: string) => {
    const updatedUI = mistakes.filter((m) => m.uniqueId !== uniqueId);
    setMistakes(updatedUI);

    // storage: eski->yeni
    const updatedStorage = [...updatedUI].reverse();
    localStorage.setItem('my_mistakes', JSON.stringify(updatedStorage));
  };

  const clearAll = () => {
    if (confirm('Tüm hatalı soruları silmek istediğine emin misin?')) {
      setMistakes([]);
      localStorage.removeItem('my_mistakes');
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold mb-2 transition-colors">
              <ArrowLeft className="w-5 h-5" /> Ana Sayfa
            </Link>
            <h1 className="text-3xl font-black text-slate-800 flex items-center gap-3">
              <span className="text-rose-500">📕</span> Hata Analiz Merkezi
            </h1>
            <p className="text-slate-500 mt-1">
              Yanlış yaptığın sorular burada birikir. Tekrar edip öğrenince silebilirsin.
            </p>
          </div>

          {mistakes.length > 0 && (
            <button
              onClick={clearAll}
              className="px-4 py-2 bg-white border border-rose-200 text-rose-600 rounded-xl font-bold hover:bg-rose-50 transition-colors flex items-center gap-2 shadow-sm"
            >
              <Trash className="w-4 h-4" /> Listeyi Temizle
            </button>
          )}
        </div>

        {/* EMPTY STATE */}
        {mistakes.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Harika Gidiyorsun!</h2>
            <p className="text-slate-500 max-w-md mx-auto mb-8">
              Şu an kayıtlı bir hatan yok. Ya henüz test çözmedin ya da hepsini doğru yaptın.
            </p>
            <Link href="/" className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              Test Çözmeye Başla
            </Link>
          </div>
        ) : (
          /* MISTAKES LIST */
          <div className="space-y-6">
            {mistakes.map((m) => {
              const titleSource =
                m.testTitle ||
                m.testSlug ||
                (m.uniqueId ? m.uniqueId.split('-q')[0] : '');

              const savedDate =
                m.savedAt ? new Date(m.savedAt).toLocaleDateString('tr-TR') : '';

              // performans: find'ları bir kere yap
              const wrongText =
                m.choices?.find((c) => c.id === m.myWrongAnswer)?.text || m.myWrongAnswer || '';

              const correctText =
                m.choices?.find((c) => c.id === m.answer)?.text || m.answer || '';

              return (
                <div
                  key={m.uniqueId} // ✅ idx yerine uniqueId
                  className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all group relative"
                >
                  {/* DELETE BUTTON */}
                  <button
                    onClick={() => deleteMistake(m.uniqueId)}
                    className="absolute top-4 right-4 p-2 text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all"
                    title="Öğrendim, listeden kaldır"
                    aria-label="Öğrendim, listeden kaldır"
                  >
                    <Check className="w-6 h-6" />
                  </button>

                  {/* META INFO */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg uppercase tracking-wider border border-indigo-100">
                      {getReadableTitle(titleSource)}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {savedDate}
                    </span>
                  </div>

                  {/* QUESTION */}
                  <div className="text-lg font-medium text-slate-800 mb-6 pr-8 leading-relaxed">
                    {formatText(m.prompt || '')}
                  </div>

                  {/* ANSWERS COMPARISON */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {/* WRONG CHOICE */}
                    <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl">
                      <div className="text-xs font-bold text-rose-500 uppercase mb-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Senin Cevabın
                      </div>
                      <div className="text-rose-900 font-medium">
                        {wrongText || '—'}
                      </div>
                    </div>

                    {/* CORRECT CHOICE */}
                    <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                      <div className="text-xs font-bold text-emerald-600 uppercase mb-1 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Doğru Cevap
                      </div>
                      <div className="text-emerald-900 font-bold">
                        {correctText || '—'}
                      </div>
                    </div>
                  </div>

                  {/* EXPLANATION */}
                  {m.explanation && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="flex gap-3 items-start text-sm text-indigo-900 bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
                        <span className="text-xl">💡</span>
                        <div>
                          <span className="font-bold block mb-1 text-indigo-800">Açıklama / Çözüm:</span>
                          <div className="opacity-90 leading-relaxed">
                            {formatText(m.explanation)}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}