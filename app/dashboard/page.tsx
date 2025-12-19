'use client';

import React from 'react';
import Link from 'next/link';
import { Gamepad2, Zap, Target, ArrowRight, Trophy, Brain } from 'lucide-react';

export default function DashboardPage() {
  const games = [
    {
      id: 'color-logic',
      title: 'Color Logic',
      desc: 'Master the Stroop effect. Level up your brain with mirror & ghost modes.',
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      color: 'from-zinc-900 to-black',
      border: 'border-cyan-500/50',
      badge: 'Cognitive'
    },
    {
      id: 'chrono-link',
      title: 'Chrono Link',
      desc: 'Visual memory challenge. Memorize the sequence and connect nodes in time.',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      color: 'from-zinc-900 to-black',
      border: 'border-purple-500/50',
      badge: 'Spatial Memory'
    },
    {
      id: 'number-hunter',
      title: 'Number Hunter',
      desc: 'Global math speed challenge. Reach the target value before time runs out.',
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      color: 'from-zinc-900 to-black',
      border: 'border-emerald-500/50',
      badge: 'Math Speed'
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2 uppercase">
              Neural<span className="text-cyan-500">Lab</span>
            </h1>
            <p className="text-zinc-500 font-medium italic">Kabiliyetlerini test et, sınırlarını zorla.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800">
            <Trophy size={18} className="text-amber-400" />
            <span className="text-sm font-bold">Global Rank: #1</span>
          </div>
        </header>

        {/* Game Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Link 
              key={game.id} 
              href={`/${game.id}`}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${game.color} p-8 border ${game.border} transition-all hover:scale-[1.05] hover:shadow-2xl hover:shadow-${game.id === 'chrono-link' ? 'purple' : 'cyan'}-500/10`}
            >
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-zinc-400 backdrop-blur-sm">
                    {game.badge}
                  </div>
                  <div className="mb-4">{game.icon}</div>
                  <h3 className="text-3xl font-black mb-3 italic tracking-tighter">{game.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {game.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold group-hover:text-white transition-colors">
                    BAĞLANTI KUR <ArrowRight size={16} />
                  </div>
                  <Gamepad2 className="opacity-10 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
