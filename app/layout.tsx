// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TestDünya - YKS, KPSS ve TUS İçin Yapay Zeka Destekli Denemeler',
  description:
    "Türkiye'nin yeni nesil sınav hazırlık platformu. Yapay zeka ile hazırlanan özgün YKS (TYT-AYT), KPSS ve TUS denemeleri ile başarıyı yakalayın. Ücretsiz ve üyeliksiz çöz.",
  icons: { icon: '/favicon.ico' },
  // diğer meta alanların aynı kalabilir
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 antialiased relative min-h-screen flex flex-col`}
      >
        <div className="flex-1">{children}</div>

        <footer className="bg-slate-100 border-t border-slate-200 mt-auto">
          <div className="max-w-4xl mx-auto py-6 px-4 text-center">
            <p className="text-xs text-slate-500 font-medium">
              Bu platformdaki tüm sorular yapay zekâ destekli içerik üretim sistemi tarafından oluşturulmuş özgün sorulardır.
              ÖSYM’ye ait resmî çıkmış sorular içermez. Her soru eğitim ve pratik amaçlıdır.
            </p>
            <div className="text-[10px] text-slate-400 mt-3">
              © {new Date().getFullYear()} TestDünya. Tüm hakları saklıdır.
            </div>
          </div>
        </footer>

        {/* GA4 buradan yükleniyor */}
        <GoogleAnalytics gaId="G-ZQK5MCQ3EG" />
      </body>
    </html>
  )
}