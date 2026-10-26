import './globals.css'
import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import 'katex/dist/katex.min.css';
import Navbar from './components/Navbar' 
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import AdSenseScript from './components/AdSenseScript'
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_IMAGE, serializeJsonLd } from '../lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TestDünya | Online Testler ve Eğitici Oyunlar',
    template: '%s | TestDünya',
  },
  description: DEFAULT_DESCRIPTION,
  authors: [{ name: 'TestDünya Ekibi' }],
  icons: { icon: '/icon.svg' },
  manifest: '/manifest.webmanifest',
  openGraph: {
    siteName: SITE_NAME,
    locale: 'tr_TR',
    type: 'website',
    images: [SOCIAL_IMAGE],
  },
  twitter: { card: 'summary_large_image', images: [SOCIAL_IMAGE.url] },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#4f46e5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-zinc-950 dark:text-white transition-colors duration-300 antialiased relative min-h-screen flex flex-col font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  try{
    const t = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = t || (prefersDark ? "dark" : "light");
    if(theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }catch(e){}
})();`,
          }}
        />

        <script
          id="site-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': `${SITE_URL}/#website`,
                  name: SITE_NAME,
                  url: `${SITE_URL}/`,
                  description: DEFAULT_DESCRIPTION,
                  inLanguage: 'tr',
                  publisher: { '@id': `${SITE_URL}/#organization` },
                },
                { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME, url: `${SITE_URL}/` },
              ],
            }),
          }}
        />

        {/* --- GOOGLE ADSENSE --- */}
        <AdSenseScript />

        <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-6">
          {/* Yan panel butonların mevcut kodunla aynı kalabilir */}
        </aside>

        <ThemeToggle />

        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-ZQK5MCQ3EG" />
      </body>
    </html>
  )
}

