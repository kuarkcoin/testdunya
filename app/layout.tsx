import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // Title artık bir obje; alt sayfalar için şablon oluşturur
  title: {
    default: 'TestDünya | Free Online IELTS, YKS, TUS, DUS Practice Platform',
    template: '%s | TestDünya'
  },
  // Açıklama hem İngilizce hem Türkçe (Global + Yerel SEO)
  description: 'The ultimate free exam practice platform. Solve unlimited IELTS Reading, Listening, Speaking tests. Türkiye\'nin yapay zeka destekli YKS, KPSS, TUS ve DUS deneme merkezi.',
  // Anahtar kelimeler karma (Mixed Keywords)
  keywords: [
    // Global
    'IELTS Practice', 'Free IELTS Test', 'IELTS Speaking Simulator', 'IELTS Reading', 'IELTS Listening',
    // Local (TR)
    'yks deneme', 'kpss deneme', 'tus soruları', 'dus deneme', 'diş hekimliği uzmanlık sınavı', 'online test çöz', 'tyt ayt deneme'
  ],
  authors: [{ name: 'TestDünya Ekibi' }],
  icons: { icon: '/favicon.ico' },
  // Sosyal Medya Paylaşımları İçin (WhatsApp/Twitter/LinkedIn)
  openGraph: {
    title: 'TestDünya | Global Exam Platform',
    description: 'Boost your exam scores with our free online simulators for IELTS, YKS, TUS & DUS.',
    type: 'website',
    locale: 'en_US', // Global olduğu için en_US yaptık (Google evrensel bakar)
    siteName: 'TestDünya',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#4f46e5', // İndigo rengi (tarayıcı çubuğu için)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Lang 'en' yaptık çünkü global hedefliyoruz (Türkçe karakter sorunu yaratmaz)
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased relative min-h-screen flex flex-col`}>

        {/* --- GOOGLE ADSENSE KODU (BURAYA EKLENDİ) --- */}
        {/* Next.js için optimize edilmiş Script bileşeni kullanıldı */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1700979325865596"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* ------------------------------------------- */}

        {/* Tailwind CDN - Tasarımının bozulmaması için korundu */}
        <Script 
          src="https://cdn.tailwindcss.com" 
          strategy="beforeInteractive" 
        />

        <div className="flex-1">{children}</div>

        {/* Global Footer */}
        <footer className="bg-slate-100 border-t border-slate-200 mt-auto">
          <div className="max-w-4xl mx-auto py-8 px-4 text-center">
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              This platform uses AI-generated content for educational purposes. 
              <br className="hidden sm:block" />
              Bu platformdaki sorular yapay zeka destekli olup, ÖSYM veya Cambridge (IELTS) resmi sorularını içermez.
            </p>
            <div className="text-[10px] text-slate-400 mt-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
              <span>© {new Date().getFullYear()} TestDünya.</span>
              <span className="hidden sm:inline">•</span>
              <span>All rights reserved.</span>
            </div>
          </div>
        </footer>

        {/* Google Analytics (Senin ID'n Korundu) */}
        <GoogleAnalytics gaId="G-ZQK5MCQ3EG" />

      </body>
    </html>
  )
}
