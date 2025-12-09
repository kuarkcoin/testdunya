import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

// --- SEO VE METADATA AYARLARI ---
export const metadata: Metadata = {
  title: 'TestDünya - YKS, KPSS ve TUS İçin Yapay Zeka Destekli Denemeler',
  description: 'Türkiye\'nin yeni nesil sınav hazırlık platformu. Yapay zeka ile hazırlanan özgün YKS (TYT-AYT), KPSS ve TUS denemeleri ile başarıyı yakalayın. Ücretsiz ve üyeliksiz çöz.',
  keywords: 'yks deneme, kpss deneme, tus soruları, online test çöz, yapay zeka sınav, tyt ayt deneme',
  authors: [{ name: 'TestDünya Ekibi' }],
  icons: {
    icon: '/favicon.ico', 
  },
  openGraph: {
    title: 'TestDünya - Yapay Zeka Destekli Sınav Platformu',
    description: 'Özgün sorularla YKS, KPSS ve TUS sınavlarına ücretsiz hazırlanın.',
    type: 'website',
    locale: 'tr_TR',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
        {/* Tailwind CDN (İleride npm install ile kurman performans için önerilir) */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased relative min-h-screen flex flex-col`}>

        {/* --- GOOGLE ANALYTICS --- */}
        {/* DİKKAT: 'G-XXXXXXXXXX' yerine kendi kodunu yazmalısın */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        {/* ------------------------ */}

        {/* İçerik Alanı (Sayfa içeriği buraya gelir) */}
        <div className="flex-1">
          {children}
        </div>

        {/* --- GLOBAL FOOTER & YASAL UYARI --- */}
        {/* Bu alan tüm sayfalarda (Anasayfa, Test Detay vb.) en altta görünür */}
        <footer className="bg-slate-100 border-t border-slate-200 mt-auto">
          <div className="max-w-4xl mx-auto py-6 px-4">
            
            <p className="text-center text-xs text-slate-500 leading-relaxed font-medium">
              Bu platformdaki tüm sorular yapay zekâ destekli içerik üretim sistemi tarafından 
              oluşturulmuş özgün sorulardır. ÖSYM’ye ait resmî çıkmış sorular içermez. 
              Her soru eğitim ve pratik amaçlıdır.
            </p>

            <div className="text-center text-[10px] text-slate-400 mt-3">
              &copy; {new Date().getFullYear()} TestDünya. Tüm hakları saklıdır.
            </div>
            
          </div>
        </footer>
        {/* ----------------------------------- */}

      </body>
    </html>
  )
}
