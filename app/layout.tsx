// app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Modern font bu
import "./globals.css";

// Font ayarları
const font = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "TestDünya - Türkiye'nin Online Test Platformu",
  description: "YKS, LGS, KPSS ve Ehliyet sınavları için ücretsiz deneme çöz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${font.className} antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
