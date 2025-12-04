'use client';

export function Navbar() {
  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-xs font-black text-slate-900 shadow-md">
            TD
          </div>
          <div className="leading-tight">
            <div className="text-xs text-slate-400">Sınav Platformu</div>
            <div className="text-sm font-semibold text-slate-800">TestDünya</div>
          </div>
        </div>
        <span className="text-[11px] px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500">
          2025
        </span>
      </div>
    </header>
  );
}
