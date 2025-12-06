'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';

// --- İkonlar ---
const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
);
const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
);
const Eye = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
);
const Save = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
);

// --- Tipler ---
type Question = {
  question: string;
  options: string[];
  answer: string;
};

export default function TestDetailPage() {
  const params = useParams();
  const testId = params?.testId as string;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  // Kullanıcı durumları
  const [visibleAnswers, setVisibleAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState<{ [key: string]: number[] }>({});
  const [note, setNote] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  // ID Parçalama (Örn: yks-sozel-deneme-1)
  // Buradaki mantık: Son tireden önceki her şey kategoridir.
  const parts = (testId || '').split('-');
  const numberStr = parts.pop(); // son parça (1)
  const category = 'yks'; // Basitleştirmek için genel kategori, bunu geliştirebiliriz.
  // Gerçekte hangi ana kategoriye (yks, kpss, tus) ait olduğunu bulmak için:
  const mainCategory = testId?.includes('yks') ? 'yks' : testId?.includes('kpss') ? 'kpss' : 'tus';
  const number = parseInt(numberStr || '0');

  // --- Veri Çekme (Fetch) ---
  useEffect(() => {
    if (!testId) return;

    setLoading(true);
    // Public klasöründeki dosyayı çekiyoruz
    fetch(`/data/tests/${testId}.json`)
      .then(res => {
        if (!res.ok) throw new Error("Dosya bulunamadı");
        return res.json();
      })
      .then(data => {
        // Eğer data direkt array değilse ve içinde 'questions' varsa onu al
        const qData = Array.isArray(data) ? data : (data.questions || []);
        setQuestions(qData);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });

    // LocalStorage verilerini yükle
    try {
      const savedTracker = localStorage.getItem('examTrackerData');
      if (savedTracker) setCompleted(JSON.parse(savedTracker));

      const savedNotes = localStorage.getItem('examTrackerNotes');
      if (savedNotes) {
        const notesObj = JSON.parse(savedNotes);
        if (notesObj[testId]) setNote(notesObj[testId]);
      }
    } catch(e) {}

  }, [testId]);

  // Cevap Göster/Gizle
  const toggleAnswer = (index: number) => {
    if (visibleAnswers.includes(index)) {
      setVisibleAnswers(prev => prev.filter(i => i !== index));
    } else {
      setVisibleAnswers(prev => [...prev, index]);
    }
  };

  // Tamamlandı İşaretleme
  const toggleStatus = () => {
    setCompleted(prev => {
      const currentList = prev[mainCategory] || [];
      const newList = currentList.includes(number)
        ? currentList.filter(n => n !== number)
        : [...currentList, number];
      
      const newState = { ...prev, [mainCategory]: newList };
      localStorage.setItem('examTrackerData', JSON.stringify(newState));
      return newState;
    });
  };

  // Not Kaydetme
  const saveNote = () => {
    const savedNotes = localStorage.getItem('examTrackerNotes');
    const notesObj = savedNotes ? JSON.parse(savedNotes) : {};
    notesObj[testId] = note;
    localStorage.setItem('examTrackerNotes', JSON.stringify(notesObj));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const isDone = (completed[mainCategory] || []).includes(number);

  if (loading) return <div className="min-h-screen flex justify-center items-center text-slate-500">Test yükleniyor...</div>;
  if (error) return <div className="min-h-screen flex justify-center items-center text-red-500">Test bulunamadı. Lütfen dosya ismini kontrol edin: {testId}.json</div>;

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Üst Navigasyon */}
        <div className="flex justify-between items-center">
          <Link href="/" className="inline-flex items-center text-slate-500 hover:text-indigo-600 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Ana Sayfaya Dön
          </Link>
          <div className="text-sm font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
            {testId}
          </div>
        </div>

        {/* Başlık ve Kontrol Alanı */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Deneme #{number}</h1>
            <p className="text-slate-500">Toplam {questions.length} soru</p>
          </div>
          
          <button
            onClick={toggleStatus}
            className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
              isDone 
              ? 'bg-emerald-100 text-emerald-700' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            {isDone ? 'Tamamlandı' : 'Bitirince İşaretle'}
          </button>
        </div>

        {/* SORULAR LİSTESİ */}
        <div className="space-y-6">
          {questions.map((q, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-50 text-indigo-600 font-bold rounded-lg text-sm">
                  {idx + 1}
                </span>
                <div className="flex-1 space-y-4">
                  <p className="text-lg font-medium text-slate-800 leading-relaxed">
                    {q.question}
                  </p>
                  
                  {/* Şıklar */}
                  <div className="space-y-2">
                    {q.options.map((opt, optIdx) => (
                      <div key={optIdx} className="p-3 rounded-lg border border-slate-100 text-slate-600 hover:bg-slate-50 text-sm">
                        {opt}
                      </div>
                    ))}
                  </div>

                  {/* Cevap Alanı */}
                  <div className="pt-2">
                    {visibleAnswers.includes(idx) ? (
                      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-800 animate-in fade-in slide-in-from-top-2">
                        <strong>Doğru Cevap:</strong> {q.answer}
                      </div>
                    ) : (
                      <button 
                        onClick={() => toggleAnswer(idx)}
                        className="text-sm font-medium text-indigo-500 hover:text-indigo-700 flex items-center gap-2"
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

        {/* Not Alanı */}
        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
          <h3 className="font-bold text-indigo-900 mb-3">Kişisel Notlar</h3>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full h-32 p-4 rounded-xl bg-white border border-indigo-100 focus:ring-2 focus:ring-indigo-300 outline-none text-slate-700"
            placeholder="Bu denemeden çıkardığın dersler..."
          />
          <div className="flex justify-end mt-3">
            <button onClick={saveNote} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium">
              <Save className="w-4 h-4" /> {isSaved ? 'Kaydedildi' : 'Kaydet'}
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
