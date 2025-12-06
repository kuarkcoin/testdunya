import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
        {/* Tailwind Script */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased relative min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
