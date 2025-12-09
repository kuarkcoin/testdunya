import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TestDünya - YKS, KPSS ve TUS İçin Yapay Zeka Destekli Denemeler',
  description: 'Türkiye\'nin yeni nesil sınav hazırlık platformu...',
  keywords: 'yks deneme, kpss deneme, tus soruları, online test çöz',
  authors: [{ name: 'TestDünya Ekibi' }],
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'TestDünya',
    description: 'Özgün sorularla sınava hazırlan.',
    type: 'website',
    locale: 'tr_TR',
  }
}

// Viewport ayarını buraya taşıdık (Doğrusu budur)
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

        {/* 1. Tailwind CDN (beforeInteractive ile en başta yüklenir) */}
        <Script 
          src="https://cdn.tailwindcss.com" 
          strategy="beforeInteractive" 
        />

        {/* 2. Google Analytics (afterInteractive ile sayfa yüklenince çalışır) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZQK5MCQ3EG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZQK5MCQ3EG', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <div className="flex-1">{children}</div>

        <footer className="bg-slate-100 border-t border-slate-200 mt-auto">
          <div className="max-w-4xl mx-auto py-6 px-4 text-center">
            <p className="text-xs text-slate-500 font-medium">
              Bu platformdaki tüm sorular yapay zekâ destekli içerik üretim sistemi tarafından oluşturulmuş özgün sorulardır.
            </p>
            <div className="text-[10px] text-slate-400 mt-3">
              © {new Date().getFullYear()} TestDünya. Tüm hakları saklıdır.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
