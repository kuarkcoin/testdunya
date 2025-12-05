'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    // 'sticky top-0 z-40' ekledik: Menü aşağı kaydırınca üstte sabit kalır
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* SOL TARAFA: Tıklanabilir Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-xs font-black text-slate-900 shadow-md">
            TD
          </div>
          <div className="leading-tight">
            <div className="text-xs text-slate-400">Sınav Platformu</div>
            <div className="text-sm font-semibold text-slate-800">TestDünya</div>
          </div>
        </Link>

        {/* SAĞ TARAF: Linkler ve Badge */}
        <div className="flex items-center gap-3 md:gap-6">
          
          <nav className="flex items-center gap-4">
            {/* İletişim Linki */}
            <Link 
              href="/iletisim" 
              className="text-xs md:text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              İletişim
            </Link>
          </nav>

          {/* 2025 Rozeti (Mobilde gizlemesek de olur ama ekranda yer kalsın diye md:block yapabiliriz, şimdilik kalsın) */}
          <span className="hidden md:block text-[11px] px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 font-mono">
            2025
          </span>
        </div>

      </div>
    </header>
  );
}
