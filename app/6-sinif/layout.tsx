import Link from 'next/link';
import type { Viewport } from 'next';
import type { ReactNode } from 'react';

export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 5, userScalable: true };

export default function Grade6Layout({ children }: { children: ReactNode }) {
  return (
    <div lang="tr" className="min-h-screen bg-slate-950">
      <header className="border-b border-white/10 bg-slate-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 md:px-8">
          <Link href="/6-sinif" className="rounded-lg font-black tracking-tight focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-300">
            🎒 6. SINIF ÇALIŞMA ODASI
          </Link>
          <Link href="/" className="rounded-lg px-2 py-2 text-sm font-bold text-slate-200 hover:text-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-300">← Ana Sayfa</Link>
        </div>
      </header>
      <div className="mx-auto max-w-6xl p-3 md:p-8">{children}</div>
    </div>
  );
}
