'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// --- İkonlar ---
const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
);
const Eye = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
);

export default function TestDetailPage() {
  const params = useParams();
  const testId = params?.testId as string;

  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [visibleAnswers, setVisibleAnswers] = useState<number[]>([]);

  // Veri Çekme
  useEffect(() => {
    if (!testId) return;

    setLoading(true);
    setError(false);

    // URL'deki testId (örn: kpss-sozel-1) doğrudan dosya adıdır.
    const jsonUrl = `/data/tests/${testId}.json`;

    fetch(jsonUrl)
      .then(res => {
        if (!res.ok) throw new Error("Dosya bulunamadı");
        return res.json();
      })
      .then(data => {
        // Veri yapısı kontrolü: Array mi, Obje mi?
        if (Array.isArray(data)) {
          setQuestions(data);
        } else if (data.questions && Array.isArray(data.questions)) {
          setQuestions(data.questions);
        } else {
          console.error("Veri formatı bilinmiyor:", data);
          setQuestions([]); 
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("JSON Yükleme Hatası:", err);
        setError(true);
        setLoading(false);
      });
  }, [testId]);

  const toggleAnswer = (index: number) => {
    if (visibleAnswers.includes(index)) {
      setVisibleAnswers(prev => prev.filter(i => i !== index));
    } else {
      setVisibleAnswers(prev => [...prev, index]);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 text-slate-500">
      <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
      <p>Test verileri yükleniyor...</p>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 text-red-500 p-4 text-center">
      <h2 className="text-xl font-bold mb-2">Hata: Test Bulunamadı</h2>
      <p>Sistem <strong>/data/tests/{testId}.json</strong> dosyasını bulamadı.</p>
      <p className="text-sm mt-4 text-slate-500">Lütfen dosya isminin 'public' klasöründekiyle aynı olduğundan emin olun.</p>
      <Link href="/" className="mt-6 px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900">Ana Sayfaya Dön</Link>
    </div>
  );

  if (questions.length === 0) return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 text-slate-500">
      <p>Bu test dosyasının içi boş veya formatı hatalı.</p>
      <Link href="/" className="mt-4 text-indigo-600 underline">Geri Dön</Link>
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Üst Navigasyon */}
        <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100 sticky top-4 z-10">
          <Link href="/" className="inline-flex items-center text-slate-500 hover:text-indigo-600 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Ana Sayfa
          </Link>
          <span className="font-bold text-slate-700 hidden sm:block">
             {testId}
          </span>
        </div>

        {/* SORULAR LİSTESİ */}
        <div className="space-y-6">
          {questions.map((q, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-50 text-indigo-600 font-bold rounded-lg text-sm h-fit">
                  {idx + 1}
                </span>
                <div className="flex-1 space-y-4">
                  {/* Soru Metni */}
                  <p className="text-lg font-medium text-slate-800 leading-relaxed">
                    {q.question || q.soru || "Soru metni bulunamadı"}
                  </p>
                  
                  {/* Şıklar */}
                  <div className="space-y-2">
                    {(q.options || q.secenekler || []).map((opt: string, optIdx: number) => (
                      <div key={optIdx} className="p-3 rounded-lg border border-slate-100 text-slate-600 hover:bg-slate-50 text-sm cursor-default">
                        {opt}
                      </div>
                    ))}
                  </div>

                  {/* Cevap */}
                  <div className="pt-2">
                    {visibleAnswers.includes(idx) ? (
                      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-800 animate-in fade-in slide-in-from-top-2">
                        <strong>Doğru Cevap:</strong> {q.answer || q.cevap}
                      </div>
                    ) : (
                      <button 
                        onClick={() => toggleAnswer(idx)}
                        className="text-sm font-medium text-indigo-500 hover:text-indigo-700 flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        Cevabı Göster
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
