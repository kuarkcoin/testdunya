import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import 'katex/dist/katex.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { buildOrganizationSchema } from '@/lib/schema';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://testdunya.net'),
  title: {
    default: 'TestDünya | Ücretsiz Online Test Çöz Platformu',
    template: '%s | TestDünya',
  },
  description:
    '5. sınıf testleri başta olmak üzere farklı seviyelerde online test çözebileceğiniz, görselli sorularla desteklenen ücretsiz eğitim platformu.',
  keywords: ['5. sınıf testleri', 'online test çöz', 'görselli sorular', 'TestDünya'],
  authors: [{ name: 'TestDünya Ekibi' }],
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'TestDünya | Online Test Çöz ve Kendini Geliştir',
    description: '5. sınıf dersleri için görselli ve konu odaklı testler. Ücretsiz online çözüm deneyimi.',
    url: 'https://testdunya.net',
    siteName: 'TestDünya',
    locale: 'tr_TR',
    type: 'website',
  },
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
  maximumScale: 1,
  themeColor: '#4f46e5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TestDünya',
    url: 'https://testdunya.net',
    description: 'Ücretsiz online test çöz platformu.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://testdunya.net/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-black dark:bg-zinc-950 dark:text-white transition-colors duration-300 antialiased relative min-h-screen flex flex-col`}
      >
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

        <Script id="structured-data-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }}
        />

        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1700979325865596"
        />

        <ThemeToggle />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-ZQK5MCQ3EG" />
      </body>
    </html>
  );
}
