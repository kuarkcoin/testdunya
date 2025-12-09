import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TestDünya - YKS, KPSS, TUS ve DUS İçin Ücretsiz Denemeler',
  description: 'Türkiye\'nin yeni nesil sınav hazırlık platformu. Yapay zeka ile hazırlanan özgün YKS, KPSS, TUS ve DUS (Diş Hekimliği) denemeleri ile başarıyı yakalayın. Ücretsiz ve üyeliksiz çöz.',
  keywords: 'yks deneme, kpss deneme, tus soruları, dus deneme, diş hekimliği uzmanlık sınavı, online test çöz, yapay zeka sınav, tyt ayt deneme',
  authors: [{ name: 'TestDünya Ekibi' }],
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'TestDünya - YKS, KPSS, TUS ve DUS Denemeleri',
    description: 'YKS, KPSS, TUS ve DUS sınavlarına yapay zeka destekli özgün sorularla hazırlan.',
    type: 'website',
    locale: 'tr_TR',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased relative min-h-screen flex flex-col`}>

        {/* Tailwind CDN - Sayfa yüklenmeden stilleri hazırlar */}
        <Script 
          src="https://cdn.tailwindcss.com" 
          strategy="beforeInteractive" 
        />

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

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-ZQK5MCQ3EG" />
        
      </body>
    </html>
  )
}
