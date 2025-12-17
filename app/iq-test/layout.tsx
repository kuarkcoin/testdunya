import type { Metadata } from "next";

export const metadata: Metadata = {
  // Başlık: Global aramalar için İngilizce ve vurucu
  title: "Free Visual IQ Test (2025) | Logical Reasoning & Pattern Recognition",
  
  // Açıklama: Kullanıcıyı testi çözmeye ikna eden metin
  description: "Take our free 20-question visual IQ test based on Raven's Progressive Matrices. Measure your fluid intelligence, logic, and pattern recognition skills. No registration required.",
  
  // Anahtar Kelimeler: Google'ın sevdiği terimler
  keywords: [
    "IQ Test",
    "Free IQ Test",
    "Visual Logic Test",
    "Raven's Matrices",
    "Pattern Recognition",
    "Fluid Intelligence",
    "Non-verbal reasoning",
    "Online IQ Assessment",
    "TestDunya"
  ],
  
  // Canonical URL (SEO için önemli)
  alternates: {
    canonical: "https://testdunya.net/iq-test",
  },

  // Sosyal Medya Kartları (Twitter/Facebook/WhatsApp önizlemesi)
  openGraph: {
    title: "Challenge Your Brain: Free Visual IQ Test",
    description: "Can you solve these 20 visual logic puzzles? Test your pattern recognition skills now. 18 Minutes limit.",
    url: "https://testdunya.net/iq-test",
    siteName: "TestDunya",
    locale: "en_US", // İçeriğin İngilizce/Global olduğunu belirtir
    type: "website",
    // İsterseniz buraya bir görsel ekleyebilirsiniz:
    // images: [{ url: 'https://testdunya.net/og-images/iq-test.jpg', width: 1200, height: 630 }],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Free Visual IQ Test - Test Your Logic",
    description: "20 questions, 18 minutes. How high is your visual IQ?",
  },
};

export default function IQTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Arka plan rengini layout seviyesinde sabitleyebiliriz (opsiyonel)
    <div className="bg-slate-950 min-h-screen">
      {children}
    </div>
  );
}
