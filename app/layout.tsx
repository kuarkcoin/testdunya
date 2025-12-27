import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Mic, Headphones, Gamepad2, BarChart3 } from 'lucide-react'
import 'katex/dist/katex.min.css';
import Navbar from './components/Navbar' 
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    // Gemini 2.0 Flash vurgusu ve Türkçe/İngilizce dengesi sağlandı
    default: 'TestDünya | Gemini 2.5 Flash Destekli Yapay Zeka Test Platformu',
    template: '%s | TestDünya'
  },
  description: 'Türkiye\'nin ilk Gemini 2.5 Flash tabanlı sınav hazırlık platformu. 5. Sınıf, LGS, YKS ve IELTS için kişiselleştirilmiş AI analizi ve ücretsiz deneme sınavları.',
  keywords: [
    'yapay zeka test çözme', 'Gemini 2.5 Flash eğitim', '5. sınıf testleri', 'lgs deneme sınavı',
    'ücretsiz ielts simulator', 'online test çöz', 'yks deneme ai', 'akıllı soru analizi'
  ],
  authors: [{ name: 'TestDünya Ekibi' }],
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'TestDünya | AI Destekli Sınav Hazırlık Merkezi',
    description: 'Yanlışlarını Gemini 2.5 Flash teknolojisiyle analiz et, eksiklerini anında kapat. IELTS, YKS ve 5. Sınıf testlerinde yeni nesil deneyim.',
    url: 'https://testdunya.net',
    siteName: 'TestDünya',
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    // Google'ın içeriği daha iyi anlaması için ek talimatlar
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Console doğrulaması için buraya kodunu ekleyebilirsin
    // google: 'google-site-verification-kodun',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#4f46e5',
}

// ... QuickLink bileşeni aynı kalabilir ...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased relative min-h-screen flex flex-col`}>

        {/* --- JSON-LD (Google Rich Snippets için Kritik) --- */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TestDünya",
              "url": "https://testdunya.net",
              "description": "Yapay zeka destekli ücretsiz sınav pratik platformu.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://testdunya.net/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* --- GOOGLE ADSENSE --- */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1700979325865596"
        />

        <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-6">
          {/* Yan panel butonların mevcut kodunla aynı kalabilir */}
        </aside>

        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-ZQK5MCQ3EG" />
      </body>
    </html>
  )
}
