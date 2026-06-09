import React from 'react';

export default function Grade5Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Üst Bilgi Çubuğu ve AI Göstergesi */}
      <header className="bg-slate-900 border-b border-white/5 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Sol Kısım: Başlık ve AI Durumu */}
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2.5 rounded-2xl shadow-lg shadow-orange-500/20">
              <span className="text-2xl">🎒</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-black text-white text-lg md:text-xl tracking-tight leading-none">
                5. SINIF ÇALIŞMA ODASI
              </h2>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em]">
                  Yapay Zeka Rehber Öğretmen Aktif
                </span>
              </div>
            </div>
          </div>

          {/* Sağ Kısım: Ders Rozetleri */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <div className="flex gap-2 text-[10px] font-black uppercase">
               <span className="bg-white/5 border border-white/10 text-slate-400 px-3 py-1.5 rounded-xl whitespace-nowrap">Türkçe</span>
               <span className="bg-white/5 border border-white/10 text-slate-400 px-3 py-1.5 rounded-xl whitespace-nowrap">Matematik</span>
               <span className="bg-white/5 border border-white/10 text-slate-400 px-3 py-1.5 rounded-xl whitespace-nowrap">Fen Bilimleri</span>
            </div>
            
            <div className="hidden lg:flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-xl">
               <span className="text-sm">🤖</span>
               <span className="text-[9px] font-bold text-indigo-200 leading-tight">
                 Hataların AI tarafından <br/> anlık analiz edilir.
               </span>
            </div>
          </div>
        </div>
      </header>

      {/* Ana İçerik Alanı */}
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
