'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// İKONLAR
const Sparkles = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/></svg>;
const Bulb = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>;
const Refresh = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>;
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;

export default function WordHunterGame() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [guess, setGuess] = useState('');
  const [score, setScore] = useState(0);
  const [hintsUsed, setHintsUsed] = useState({ synonym: false, example: false, firstLetter: false });
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [streak, setStreak] = useState(0);

  // Oyunu Başlat / Yeni Kelime Getir
  const fetchWord = async () => {
    setLoading(true);
    setGameStatus('playing');
    setHintsUsed({ synonym: false, example: false, firstLetter: false });
    setGuess('');
    
    try {
      const res = await fetch('/api/game/word', { method: 'POST' });
      const json = await res.json();
      setData(json);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  // Tahmin Kontrolü
  const checkGuess = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!data) return;

    const userGuess = guess.trim().toLowerCase();
    const correctWord = data.word.trim().toLowerCase();

    if (userGuess === correctWord) {
      setGameStatus('won');
      setScore(s => s + 100);
      setStreak(s => s + 1);
    } else {
      // Yanlış cevap efekti eklenebilir
      const input = document.getElementById('guess-input');
      input?.classList.add('animate-shake');
      setTimeout(() => input?.classList.remove('animate-shake'), 500);
    }
  };

  const revealHint = (type: 'synonym' | 'example' | 'firstLetter') => {
    setHintsUsed(prev => ({ ...prev, [type]: true }));
    setScore(s => Math.max(0, s - 10)); // İpucu kullanınca puan düşer
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col items-center justify-center p-4">
      
      {/* Üst Bar */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-slate-800/50 backdrop-blur-md border-b border-white/10">
         <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition"><HomeIcon /> Ana Sayfa</Link>
         <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">Score</span>
                <span className="text-2xl font-black text-amber-400 font-mono">{score}</span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">Streak</span>
                <span className="text-2xl font-black text-emerald-400 font-mono">🔥 {streak}</span>
            </div>
         </div>
      </div>

      <div className="max-w-2xl w-full space-y-8 mt-10">
        
        {/* Başlık */}
        <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-bold border border-indigo-500/30">
                <Sparkles /> AI Powered Game
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                Word Hunter
            </h1>
            <p className="text-slate-400">Can you guess the word from its definition?</p>
        </div>

        {/* Oyun Alanı */}
        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-center">
            
            {loading ? (
                <div className="flex flex-col items-center gap-4 animate-pulse">
                    <div className="w-16 h-16 rounded-full bg-slate-700"></div>
                    <div className="h-4 w-3/4 bg-slate-700 rounded"></div>
                    <div className="h-4 w-1/2 bg-slate-700 rounded"></div>
                    <p className="text-slate-500 font-bold animate-pulse">Summoning AI...</p>
                </div>
            ) : gameStatus === 'won' ? (
                <div className="text-center space-y-6 animate-in zoom-in duration-300">
                    <div className="text-6xl">🎉</div>
                    <h2 className="text-3xl font-bold text-white">Correct!</h2>
                    <div className="text-5xl font-black text-emerald-400 tracking-wider">{data.word.toUpperCase()}</div>
                    <p className="text-slate-400 text-lg">{data.turkish_meaning}</p>
                    <button onClick={fetchWord} className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-emerald-900/50 transition-all hover:scale-105 flex items-center gap-2 mx-auto">
                        <Refresh /> Next Word
                    </button>
                </div>
            ) : gameStatus === 'lost' ? (
                <div className="text-center space-y-6 animate-in zoom-in duration-300">
                    <div className="text-6xl">💀</div>
                    <h2 className="text-3xl font-bold text-rose-500">Game Over</h2>
                    <p className="text-slate-400">The word was:</p>
                    <div className="text-4xl font-black text-white tracking-wider">{data.word.toUpperCase()}</div>
                    <p className="text-slate-400">{data.turkish_meaning}</p>
                    <button onClick={fetchWord} className="px-8 py-4 bg-slate-600 hover:bg-slate-500 text-white rounded-xl font-bold text-lg transition-all mx-auto">
                        Try Another
                    </button>
                </div>
            ) : (
                <div className="space-y-8">
                    
                    {/* Tanım (Definition) */}
                    <div className="text-center">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Definition</h3>
                        <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                            "{data.definition}"
                        </p>
                    </div>

                    {/* İpuçları Alanı */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <button 
                            onClick={() => revealHint('synonym')} 
                            disabled={hintsUsed.synonym}
                            className={`p-3 rounded-xl border text-sm font-bold transition-all ${hintsUsed.synonym ? 'bg-slate-700 border-slate-600 text-slate-300' : 'bg-slate-800/50 border-slate-600 text-indigo-400 hover:bg-indigo-500/10'}`}
                        >
                            {hintsUsed.synonym ? `Synonym: ${data.synonym}` : '💡 Reveal Synonym (-10pts)'}
                        </button>
                        
                        <button 
                            onClick={() => revealHint('example')} 
                            disabled={hintsUsed.example}
                            className={`p-3 rounded-xl border text-sm font-bold transition-all ${hintsUsed.example ? 'bg-slate-700 border-slate-600 text-slate-300' : 'bg-slate-800/50 border-slate-600 text-indigo-400 hover:bg-indigo-500/10'}`}
                        >
                            {hintsUsed.example ? `Ex: ${data.example_sentence}` : '📝 Reveal Example (-10pts)'}
                        </button>

                         <button 
                            onClick={() => revealHint('firstLetter')} 
                            disabled={hintsUsed.firstLetter}
                            className={`p-3 rounded-xl border text-sm font-bold transition-all ${hintsUsed.firstLetter ? 'bg-slate-700 border-slate-600 text-slate-300' : 'bg-slate-800/50 border-slate-600 text-indigo-400 hover:bg-indigo-500/10'}`}
                        >
                            {hintsUsed.firstLetter ? `Starts with: ${data.word[0]}` : '🔤 First Letter (-10pts)'}
                        </button>
                    </div>

                    {/* Input Alanı */}
                    <form onSubmit={checkGuess} className="relative">
                        <input
                            id="guess-input"
                            type="text"
                            value={guess}
                            onChange={(e) => setGuess(e.target.value)}
                            placeholder="Type your guess here..."
                            className="w-full bg-slate-900/50 border-2 border-slate-600 text-white text-center text-2xl font-bold py-4 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all placeholder:text-slate-600"
                            autoFocus
                            autoComplete="off"
                        />
                        <button type="submit" className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 rounded-xl font-bold transition-all">
                            GUESS
                        </button>
                    </form>

                    <div className="text-center">
                         <button onClick={() => setGameStatus('lost')} className="text-slate-500 text-xs hover:text-rose-500 underline font-bold transition-colors">
                            I give up, show me the word
                         </button>
                    </div>

                </div>
            )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); border-color: #f43f5e; }
          75% { transform: translateX(5px); border-color: #f43f5e; }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
}
