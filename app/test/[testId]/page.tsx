'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';

// --- SVG İkonlar ---
const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
);
const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
);
const Circle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /></svg>
);
const BookOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
);
const Brain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M12 22v-4" /><path d="M12 2v2" /></svg>
);
const Stethoscope = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 3v9a5 5 0 0 0 10 0V3" /><path d="M6 3h3" /><path d="M13 3h3" /><path d="M11 12v7" /><circle cx="11" cy="21" r="2" /></svg>
);
const GraduationCap = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
);
const Save = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
);

// --- Konfigürasyon (LGS EKLENDİ) ---
const examMeta = {
  yks: { title: 'YKS Sözel', icon: <BookOpen className="w-6 h-6 text-blue-500" />, color: 'text-blue-600', bg: 'bg-blue-50' },
  kpss: { title: 'KPSS Sözel', icon: <Brain className="w-6 h-6 text-orange-500" />, color: 'text-orange-600', bg: 'bg-orange-50' },
  tus: { title: 'TUS', icon: <Stethoscope className="w-6 h-6 text-emerald-500" />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  lgs: { title: 'LGS Türkçe', icon: <GraduationCap className="w-6 h-6 text-purple-500" />, color: 'text-purple-600', bg: 'bg-purple-50' }
};

export default function TestDetailPage() {
  const router = useRouter();
  const params = useParams();
  
  const testId = params?.testId;
  const safeTestId = Array.isArray(testId) ? testId[0] : testId;

  const [completed, setCompleted] = useState<{ [key: string]: number[] }>({});
  const [note, setNote] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (!safeTestId) return;
    try {
      const savedTracker = localStorage.getItem('examTrackerData');
      if (savedTracker) setCompleted(JSON.parse(savedTracker));

      const savedNotes = localStorage.getItem('examTrackerNotes');
      if (savedNotes) {
        const notesObj = JSON.parse(savedNotes);
        if (notesObj[safeTestId]) setNote(notesObj[safeTestId]);
      }
    } catch (e) {
      console.error("Veri yükleme hatası", e);
    }
  }, [safeTestId]);

  if (!safeTestId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500 font-sans">
        <div className="flex flex-col items-center animate-pulse">
          <div className="w-12 h-12 bg-slate-200 rounded-full mb-4"></div>
          <p>Deneme yükleniyor...</p>
        </div>
      </div>
    );
  }

  // ID Ayrıştırma (Örn: yks-1 -> category: yks, number: 1)
  const [category, numberStr] = (safeTestId || '').split('-');
  const number = parseInt(numberStr);
  const info = examMeta[category as keyof typeof examMeta];

  const toggleStatus = () => {
    setCompleted(prev => {
      const currentList = prev[category] || [];
      const newList = currentList.includes(number)
        ? currentList.filter(n => n !== number)
        : [...currentList, number];
      
      const newState = { ...prev, [category]: newList };
      localStorage.setItem('examTrackerData', JSON.stringify(newState));
      return newState;
    });
  };

  const saveNote = () => {
    const savedNotes = localStorage.getItem('examTrackerNotes');
    const notesObj = savedNotes ? JSON.parse(savedNotes) : {};
    
    notesObj[safeTestId] = note;
    localStorage.setItem('examTrackerNotes', JSON.stringify(notesObj));
    
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const isDone = (completed[category] || []).includes(number);

  if (!info) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-8 font-sans">
        <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-red-100 max-w-md">
           <h2 className="text-xl font-bold text-red-600 mb-2">Hata: Geçersiz Deneme</h2>
           <p className="text-slate-600 mb-4">Aradığınız <strong>"{safeTestId}"</strong> ID'li deneme bulunamadı.</p>
           <Link href="/" className="inline-block px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors">
             Ana Sayfaya Dön
           </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800 flex justify-center">
      <div className="w-full max-w-2xl space-y-6">
        
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-slate-800 transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Listeye Dön
        </Link>

        {/* Başlık Kartı */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 text-center space-y-4">
          <div className={`inline-flex p-4 rounded-2xl ${info.bg} mb-2`}>
            {info.icon}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            {info.title} - {number}. Deneme
          </h1>
          <p className="text-slate-500">
            Bu deneme ile ilgili durumunu ve notlarını buradan yönetebilirsin.
          </p>

          {/* Durum Butonu */}
          <button
            onClick={toggleStatus}
            className={`
              w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform active:scale-95
              ${isDone 
                ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' 
                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl'
              }
            `}
          >
            {isDone ? (
              <>
                <CheckCircle className="w-6 h-6" />
                Tamamlandı
              </>
            ) : (
              <>
                <Circle className="w-6 h-6" />
                Tamamlanmadı Olarak İşaretle
              </>
            )}
          </button>
        </div>

        {/* Notlar Bölümü */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            Deneme Notları
          </h2>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Bu denemede yanlış yaptığın konuları veya önemli noktaları buraya not alabilirsin..."
            className="w-full h-40 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none text-slate-700"
          />
          <div className="mt-4 flex justify-end">
            <button
              onClick={saveNote}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <Save className="w-4 h-4" />
              {isSaved ? 'Kaydedildi!' : 'Notu Kaydet'}
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
