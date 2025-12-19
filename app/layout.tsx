import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
// Lucide ikonlarını kullanıyoruz (Hata vermemesi için package.json'da mevcut)
import { Mic, Headphones, Gamepad2, BarChart3 } from 'lucide-react'

// Bileşenler
import Navbar from './components/Navbar' 
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'TestDünya | Free Online IELTS, YKS, TUS, DUS Practice Platform',
    template: '%s | TestDünya'
  },
  description: 'The ultimate free exam practice platform. Solve unlimited IELTS Reading, Listening, Speaking tests. Türkiye\'nin yapay zeka destekli YKS, KPSS, TUS ve DUS deneme merkezi.',
  keywords: [
    'IELTS Practice', 'Free IELTS Test', 'IELTS Speaking Simulator', 'IELTS Reading', 'IELTS Listening',
    'yks deneme', 'kpss deneme', 'tus soruları', 'dus deneme', 'online test çöz', 'tyt ayt deneme'
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

// Hızlı Erişim Buton Bileşeni
function QuickLink({ href, icon, label, color }: { href: string, icon: any, label: string, color: string }) {
  return (
    <a href={href} className="group relative flex items-center">
      <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500`}></div>
      <div className={`relative p-4 rounded-2xl bg-white border border-slate-100 shadow-xl text-slate-600 group-hover:text-white group-hover:bg-gradient-to-br group-hover:${color} transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3`}>
        {icon}
      </div>
      <span className={`absolute left-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0`}>
        {label}
      </span>
    </a>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased relative min-h-screen flex flex-col`}>

        {/* --- GOOGLE ADSENSE --- */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1700979325865596"
        />

        {/* --- YENİ: YAN HIZLI ERİŞİM PANELİ --- */}
        <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-6">
          <QuickLink 
            href="/ielts/speaking" 
            icon={<Mic size={24} />} 
            label="Speaking AI" 
            color="from-rose-500 to-pink-600" 
          />
          <QuickLink 
            href="/ielts/listening" 
            icon={<Headphones size={24} />} 
            label="Listening AI" 
            color="from-blue-500 to-indigo-600" 
          />
          <QuickLink 
            href="#exams" 
            icon={<Gamepad2 size={24} />} 
            label="Oyun Modları" 
            color="from-amber-500 to-orange-600" 
          />
          <QuickLink 
            href="/mistakes" 
            icon={<BarChart3 size={24} />} 
            label="Hatalarım" 
            color="from-emerald-500 to-teal-600" 
          />
        </aside>

        <Navbar />

        {/* Ana İçerik */}
        <main className="flex-1 w-full">
            {children}
        </main>

        <Footer />

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-ZQK5MCQ3EG" />

      </body>
    </html>
  )
}
