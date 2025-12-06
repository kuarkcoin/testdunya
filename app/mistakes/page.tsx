'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// --- ICONS ---
const Trash2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
);
const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);

function formatText(text: string) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      let content = part.slice(2, -2).replace(/^['"]+|['"]+$/g, '');
      return <span key={index} className="bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded mx-1 border border-indigo-100">{content}</span>;
    }
    return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
  });
}

export default function MyMistakesPage() {
  const [mistakes, setMistakes] = useState<any[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem('my_mistakes');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if(Array.isArray(parsed)) setMistakes(parsed.reverse());
      } catch (e) {
        console.error("Hata verisi okunamadı");
      }
    }
  }, []);

  const clearMistakes = () => {
    if (confirm('Tüm hata geçmişini silmek istediğine emin misin?')) {
      localStorage.removeItem('my_mistakes');
      setMistakes([]);
    }
  };

  const removeMistake = (id: string) => {
    const newMistakes = mistakes.filter((m) => m.uniqueId !== id);
    setMistakes(newMistakes);
    localStorage.setItem('my_mistakes', JSON.stringify(newMistakes));
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 font-sans">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl font-black text-slate-800 flex items-center gap-2">
              <span className="text-red-500">📕</span> Hatalarım
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Yanlış yaptığın soruları tekrar et ve öğren.
            </p>
          </div>
          <div className="flex gap-3">
             <Link href="/" className="px-4 py-2 text-sm font-bold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 flex items-center gap-2">
               <ArrowLeft className="w-4 h-4" /> Ana Sayfa
             </Link>
             {mistakes.length > 0 && (
               <button onClick={clearMistakes} className="px-4 py-2 text-sm font-bold text-red-600 bg-red-50 border border-red-100 rounded-lg hover:bg-red-100 flex items-center gap-2">
                 <Trash2 className="w-4 h-4" /> Temizle
               </button>
             )}
          </div>
        </div>

        {/* LIST */}
        {mistakes.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-lg font-bold text-slate-700">Harika! Hiç hatan yok.</h3>
            <p className="text-slate-400">Ya henüz test çözmedin ya da hepsini doğru yaptın.</p>
            <Link href="/" className="inline-block mt-4 text-indigo-600 font-bold hover:underline">Test Çözmeye Başla</Link>
          </div>
        ) : (
          <div className="space-y-8">
            {mistakes.map((q, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group">
                <button onClick={() => removeMistake(q.uniqueId)} className="absolute top-4 right-4 text-slate-300 hover:text-red-500 p-2 transition-colors"><Trash2 className="w-5 h-5" /></button>
                <div className="text-xs font-bold text-slate-400 uppercase mb-3 bg-slate-100 inline-block px-2 py-1 rounded">{q.testTitle || 'Test Sorusu'}</div>
                <div className="text-lg font-medium text-slate-800 mb-6 leading-relaxed">{formatText(q.prompt)}</div>

                <div className="grid gap-2 opacity-90">
                  {q.choices.map((c: any) => {
                    const isCorrect = c.id === q.answer;
                    const isMyWrongAnswer = c.id === q.myWrongAnswer;

                    let style = "p-3 rounded-lg border flex items-center gap-3 ";
                    let circleStyle = "w-6 h-6 rounded-full flex items-center justify-center text-xs border ";

                    if (isCorrect) {
                        style += "bg-emerald-50 border-emerald-200 text-emerald-900 font-bold";
                        circleStyle += "bg-emerald-500 text-white border-emerald-500";
                    } else if (isMyWrongAnswer) {
                        style += "bg-red-50 border-red-200 text-red-900 line-through opacity-80";
                        circleStyle += "bg-red-500 text-white border-red-500";
                    } else {
                        style += "bg-white border-slate-100 text-slate-400 text-sm";
                        circleStyle += "border-slate-300";
                    }

                    return (
                      <div key={c.id} className={style}>
                          <div className={circleStyle}>{c.id}</div>
                          <span>{c.text}</span>
                      </div>
                    )
                  })}
                </div>

                {/* AÇIKLAMA ALANI */}
                {q.explanation && q.explanation.length > 2 && (
                  <div className="mt-6 pt-4 border-t border-slate-100 animate-in fade-in">
                      <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-sm text-indigo-900">
                        <span className="text-xl">💡</span>
                        <div>
                            <span className="font-bold block mb-1">Açıklama:</span>
                            {q.explanation}
                        </div>
                      </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
