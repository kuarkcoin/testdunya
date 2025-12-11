'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// --- ICONS ---
const CalculatorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
);

export default function IeltsCalculator() {
  // Inputs (0-40 for R/L, 0-9 for W/S)
  const [listening, setListening] = useState<number | ''>('');
  const [reading, setReading] = useState<number | ''>('');
  const [writing, setWriting] = useState<number | ''>('');
  const [speaking, setSpeaking] = useState<number | ''>('');

  // Calculated Bands
  const [lBand, setLBand] = useState(0);
  const [rBand, setRBand] = useState(0);
  const [overall, setOverall] = useState(0);

  // --- HESAPLAMA MANTIĞI (ACADEMIC) ---
  const calculateBand = (raw: number, type: 'L' | 'R') => {
    if (raw >= 39) return 9.0;
    if (raw >= 37) return 8.5;
    if (raw >= 35) return 8.0;
    if (raw >= 32) return 7.5;
    if (raw >= 30) return 7.0;
    if (raw >= 26) return 6.5;
    if (raw >= 23) return 6.0;
    if (raw >= 18) return 5.5;
    if (raw >= 16) return 5.0;
    if (raw >= 13) return 4.5;
    if (raw >= 10) return 4.0;
    return 0; // Basit tutuldu
  };

  useEffect(() => {
    // 1. Listening & Reading (Raw -> Band)
    const l = typeof listening === 'number' ? calculateBand(listening, 'L') : 0;
    const r = typeof reading === 'number' ? calculateBand(reading, 'R') : 0;
    setLBand(l);
    setRBand(r);

    // 2. Overall Calculation
    // (L + R + W + S) / 4 -> Round to nearest 0.5
    const w = typeof writing === 'number' ? writing : 0;
    const s = typeof speaking === 'number' ? speaking : 0;

    if (l > 0 || r > 0 || w > 0 || s > 0) {
      const avg = (l + r + w + s) / 4;
      // IELTS Yuvarlama Mantığı: .25 -> .5, .75 -> next whole
      const rounded = Math.round(avg * 2) / 2;
      setOverall(rounded);
    } else {
      setOverall(0);
    }

  }, [listening, reading, writing, speaking]);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans">
      <div className="max-w-2xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <Link href="/" className="text-sm font-bold text-slate-400 hover:text-indigo-600 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-2 flex items-center justify-center gap-3">
            <CalculatorIcon className="w-8 h-8 text-indigo-500" /> IELTS Band Calculator
          </h1>
          <p className="text-slate-500">Calculate your Academic IELTS score instantly.</p>
        </div>

        {/* CALCULATOR CARD */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            {/* LISTENING */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">🎧 Listening (Correct Answers)</label>
              <div className="flex items-center gap-4">
                <input 
                  type="number" 
                  min="0" max="40" 
                  placeholder="0-40"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={listening}
                  onChange={(e) => setListening(Number(e.target.value))}
                />
                <div className="w-16 text-center">
                  <span className="block text-xs text-slate-400 font-bold">BAND</span>
                  <span className="text-xl font-black text-indigo-600">{lBand}</span>
                </div>
              </div>
            </div>

            {/* READING */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">📖 Reading (Correct Answers)</label>
              <div className="flex items-center gap-4">
                <input 
                  type="number" 
                  min="0" max="40" 
                  placeholder="0-40"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={reading}
                  onChange={(e) => setReading(Number(e.target.value))}
                />
                <div className="w-16 text-center">
                  <span className="block text-xs text-slate-400 font-bold">BAND</span>
                  <span className="text-xl font-black text-indigo-600">{rBand}</span>
                </div>
              </div>
            </div>

            {/* WRITING */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">✍️ Writing (Estimated Score)</label>
              <input 
                type="number" 
                min="0" max="9" step="0.5"
                placeholder="e.g. 6.5"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={writing}
                onChange={(e) => setWriting(Number(e.target.value))}
              />
            </div>

            {/* SPEAKING */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">🎤 Speaking (Estimated Score)</label>
              <input 
                type="number" 
                min="0" max="9" step="0.5"
                placeholder="e.g. 7.0"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={speaking}
                onChange={(e) => setSpeaking(Number(e.target.value))}
              />
            </div>

          </div>

          {/* RESULT BOX */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Overall Band Score</h3>
              <p className="text-slate-400 text-sm">Based on the 4 skills above.</p>
            </div>
            <div className="relative">
              <div className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                {overall}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
