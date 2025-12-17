import type { Metadata } from "next";

// Bu kısım Google ve Sosyal Medya için görünür
export const metadata: Metadata = {
  title: "Ücretsiz IQ Testi - Görsel Mantık ve Zeka Testi (Hard) | TestDünya",
  description: "Raven'in Aşamalı Matrisleri tabanlı, 20 soruluk ücretsiz online IQ testimizi çözün. Görsel zeka, soyut düşünme ve mantık becerilerinizi hemen ölçün.",
  keywords: ["IQ Testi", "Ücretsiz IQ Testi", "Görsel Zeka Testi", "Mantık Testi", "Raven Matrisleri", "Online Test Çöz", "TestDünya"],
  alternates: {
    canonical: "https://testdunya.net/iq-test",
  },
  openGraph: {
    title: "Beynini Zorla: 20 Soruluk Görsel IQ Testi",
    description: "Sadece görsel şekillerden oluşan bu zorlu IQ testini tamamlayıp skorunu görebilir misin?",
    url: "https://testdunya.net/iq-test",
    siteName: "TestDünya",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Görsel IQ Testi - TestDünya",
    description: "Mantık ve örüntü kurma becerini ölçmeye hazır mısın?",
  },
};

export default function IQTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
