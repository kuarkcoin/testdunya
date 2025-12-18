import React from 'react';

export default function Grade5Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-amber-50/20">
      {/* Başarı Rozeti ve Ders Seçimi */}
      <aside className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎒</span>
            <h2 className="font-black text-lg tracking-tight">5. SINIF ÇALIŞMA ODASI</h2>
          </div>
          <div className="flex gap-4 text-xs font-bold uppercase">
             <span className="bg-white/20 px-2 py-1 rounded">Türkçe</span>
             <span className="bg-white/20 px-2 py-1 rounded">Matematik</span>
             <span className="bg-white/20 px-2 py-1 rounded">Fen Bilimleri</span>
          </div>
        </div>
      </aside>

      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
}
