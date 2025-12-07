import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script' // Script bileşenini ekledik

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
        {/* Not: Tailwind'i CDN'den çekmek yerine npm install ile kurman performans için daha iyidir.
            Ama şimdilik yapını bozmamak için burayı ellemedim. */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased relative min-h-screen flex flex-col`}>

        {/* --- 1. GOOGLE ANALYTICS KODU --- */}
        {/* DİKKAT: 'G-XXXXXXXXXX' yerine yeni sitenin kodunu yazmalısın */}
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
        {/* ------------------------------- */}

        {/* İçerik Alanı (flex-1 ile sayfayı kaplamasını sağladık) */}
        <div className="flex-1">
          {children}
        </div>

        {/* --- 2. YASAL UYARI VE FOOTER ALANI --- */}
        <footer className="bg-slate-100 border-t border-slate-200 mt-10">
          <div className="max-w-4xl mx-auto py-6 px-4">
            
            {/* İstediğin Yasal Uyarı Metni */}
            <p className="text-center text-xs text-slate-500 leading-relaxed font-medium">
              Bu platformdaki tüm sorular yapay zekâ destekli içerik üretim sistemi tarafından 
              oluşturulmuş özgün sorulardır. ÖSYM’ye ait resmî çıkmış sorular içermez. 
              Her soru eğitim amaçlıdır.
            </p>

            {/* Telif Hakkı (Opsiyonel) */}
            <div className="text-center text-[10px] text-slate-400 mt-2">
              &copy; {new Date().getFullYear()} TestDünya. Tüm hakları saklıdır.
            </div>
            
          </div>
        </footer>
        {/* -------------------------------------- */}

      </body>
    </html>
  )
}
