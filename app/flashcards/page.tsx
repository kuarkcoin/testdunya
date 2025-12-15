'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// --- TİP TANIMLAMALARI ---
type VocabItem = {
  word: string;
  meaning: string;
};

// --- İKONLAR ---
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const RotateIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
);
const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);
const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
);
const ShuffleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l14.2-12.6c.8-1.1 2-1.7 3.3-1.7H22"/><path d="M2 6h1.4c1.3 0 2.5.6 3.3 1.7l14.2 12.6c.8 1.1 2 1.7 3.3 1.7H22"/></svg>
);

// --- YARDIMCI ---
function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export default function FlashcardsPage() {
  // State
  const [loading, setLoading] = useState(true);
  const [dataset, setDataset] = useState<VocabItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);

  // 1. Veri Yükleme
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/data/tests/IELTS_Vocabulary_Phrasal_1000_format.json');
        if (!res.ok) throw new Error('Fetch failed');
        const data: VocabItem[] = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          // İlk açılışta karıştırarak sun
          setDataset(shuffleArray(data));
        }
      } catch (e) {
        console.error("Flashcards load error:", e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // 2. Klavye Kontrolü
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (loading || dataset.length === 0) return;

      if (e.code === 'Space') {
        e.preventDefault(); // Sayfa kaymasını engelle
        setIsFlipped((prev) => !prev);
      } else if (e.code === 'ArrowRight' || e.code === 'ArrowDown') {
        handleNext();
      } else if (e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, dataset, currentIndex]);

  // Actions
  const handleNext = () => {
    if (currentIndex < dataset.length - 1) {
      setIsFlipped(false);
      setDirection('next');
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setDirection(null);
      }, 150);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setDirection('prev');
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setDirection(null);
      }, 150);
    }
  };

  const handleShuffle = () => {
    setLoading(true);
    setIsFlipped(false);
    setCurrentIndex(0);
    // Kısa bir bekleme efekti
    setTimeout(() => {
      setDataset(shuffleArray(dataset));
      setLoading(false);
    }, 500);
  };

  const currentCard = dataset[currentIndex];
  const progressPercent = dataset.length > 0 ? ((currentIndex + 1) / dataset.length) * 100 : 0;

  // --- RENDER ---
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col font-sans overflow-hidden">
      
      {/* HEADER */}
      <header className="p-4 flex items-center justify-between border-b border-white/10 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 text-emerald-300 hover:text-white transition-colors">
          <HomeIcon className="w-5 h-5" />
          <span className="font-bold hidden sm:block">Home</span>
        </Link>

        <h1 className="text-xl md:text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
          FLASHCARDS
        </h1>

        <button 
          onClick={handleShuffle}
          className="p-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 rounded-lg transition-colors"
          title="Shuffle Cards"
        >
          <ShuffleIcon className="w-5 h-5" />
        </button>
      </header>

      {/* LOADING STATE */}
      {loading && (
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-emerald-300 font-medium">Shuffling Deck...</p>
        </div>
      )}

      {/* MAIN CONTENT */}
      {!loading && dataset.length > 0 && currentCard && (
        <div className="flex-1 flex flex-col items-center justify-center p-4 relative w-full max-w-4xl mx-auto">
          
          {/* Background Blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-40">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-xl mb-6 flex flex-col gap-2">
             <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
               <span>Card {currentIndex + 1}</span>
               <span>{dataset.length} Total</span>
             </div>
             <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
             </div>
          </div>

          {/* THE FLIP CARD CONTAINER */}
          {/* perspective: 3D derinlik hissi için */}
          <div 
            className="group relative w-full max-w-xl aspect-[4/3] sm:aspect-[16/9] cursor-pointer"
            style={{ perspective: '1000px' }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Inner Card Wrapper with transition */}
            <div 
              className={`relative w-full h-full transition-transform duration-500 ease-in-out shadow-2xl rounded-3xl border border-white/10 ${direction ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}
              style={{ 
                transformStyle: 'preserve-3d', 
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
              }}
            >
              
              {/* --- FRONT SIDE (WORD) --- */}
              <div 
                className="absolute inset-0 w-full h-full bg-slate-800 rounded-3xl flex flex-col items-center justify-center p-8 text-center"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4">
                  Vocabulary
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg select-none">
                  {currentCard.word}
                </h2>
                <div className="mt-8 text-slate-500 text-sm font-medium flex items-center gap-2 animate-pulse">
                  <RotateIcon className="w-4 h-4" />
                  Tap to flip
                </div>
              </div>

              {/* --- BACK SIDE (MEANING) --- */}
              <div 
                className="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-900 to-slate-900 rounded-3xl flex flex-col items-center justify-center p-8 text-center border-2 border-emerald-500/30"
                style={{ 
                  backfaceVisibility: 'hidden', 
                  transform: 'rotateY(180deg)' 
                }}
              >
                 <span className="text-emerald-300 font-bold tracking-widest uppercase text-sm mb-4">
                  Definition
                </span>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed select-none">
                  {currentCard.meaning}
                </p>
              </div>

            </div>
          </div>

          {/* CONTROLS */}
          <div className="mt-10 flex items-center gap-6">
            
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              disabled={currentIndex === 0}
              className="p-4 rounded-full bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
              aria-label="Previous Card"
            >
              <ArrowLeftIcon className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped); }}
              className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg shadow-lg shadow-emerald-900/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
            >
              <RotateIcon className="w-5 h-5" />
              Flip Card
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              disabled={currentIndex === dataset.length - 1}
              className="p-4 rounded-full bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
              aria-label="Next Card"
            >
              <ArrowRightIcon className="w-8 h-8" />
            </button>

          </div>

          <div className="mt-6 text-slate-500 text-sm hidden sm:block">
            Pro Tip: Use <kbd className="bg-slate-800 px-2 py-1 rounded text-white">Space</kbd> to flip and <kbd className="bg-slate-800 px-2 py-1 rounded text-white">Arrow Keys</kbd> to navigate.
          </div>

        </div>
      )}

      {/* FINISHED STATE (Opsiyonel: Liste biterse) */}
      {!loading && dataset.length > 0 && currentIndex === dataset.length && (
        <div className="flex-1 flex flex-col items-center justify-center p-4">
           <h2 className="text-3xl font-bold text-white mb-4">Set Completed!</h2>
           <button 
             onClick={handleShuffle}
             className="px-6 py-3 bg-emerald-600 rounded-xl font-bold text-white hover:bg-emerald-500"
           >
             Start Over
           </button>
        </div>
      )}

    </main>
  );
}
