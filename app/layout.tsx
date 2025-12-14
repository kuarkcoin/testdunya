// app/layout.tsx
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'

// --- DÜZELTİLEN KISIM BURASI ---
// Dosyalar app/components içinde olduğu için "./" kullanıyoruz
import Navbar from './components/Navbar' 
import Footer from './components/Footer'
// -------------------------------

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'TestDünya | Free Online IELTS, YKS, TUS, DUS Practice Platform',
    template: '%s | TestDünya'
  },
  description: 'The ultimate free exam practice platform. Solve unlimited IELTS Reading, Listening, Speaking tests. Türkiye\'nin yapay zeka destekli YKS, KPSS, TUS ve DUS deneme merkezi.',
  keywords: [
    'IELTS Practice', 'Free IELTS Test', 'IELTS Speaking Simulator', 'IELTS Reading', 'IELTS Listening',
    'yks deneme', 'kpss deneme', 'tus soruları', 'dus deneme', 'diş hekimliği uzmanlık sınavı', 'online test çöz', 'tyt ayt deneme'
  ],
  authors: [{ name: 'TestDünya Ekibi' }],
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'TestDünya | Global Exam Platform',
    description: 'Boost your exam scores with our free online simulators for IELTS, YKS, TUS & DUS.',
    type: 'website',
    locale: 'en_US',
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
  themeColor: '#4f46e5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased relative min-h-screen flex flex-col`}>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1700979325865596"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Tailwind CSS */}
        <Script 
          src="https://cdn.tailwindcss.com" 
          strategy="beforeInteractive" 
        />

        {/* Navbar */}
        <Navbar />

        {/* Ana İçerik */}
        <div className="flex-1">
            {children}
        </div>

        {/* Footer */}
        <Footer />

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-ZQK5MCQ3EG" />

      </body>
    </html>
  )
}
