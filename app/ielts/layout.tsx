import type { Metadata } from "next";

export const metadata: Metadata = {
  // Title: Dikkat çekici ve anahtar kelime dolu
  title: "Free IELTS Academic Practice Tests & AI Tools | TestDunya",
  
  // Description: Kullanıcıyı çekecek İngilizce açıklama
  description: "Prepare for your IELTS exam with free online practice tests. Access Academic Reading, Listening, Writing templates, and our AI Speaking Simulator to boost your Band Score to 7.0+.",
  
  // Keywords: Global aramalar için
  keywords: [
    "IELTS Practice Test",
    "Free IELTS Mock Test",
    "IELTS Speaking Simulator",
    "IELTS Academic Reading",
    "Band Score Calculator",
    "English Vocabulary",
    "TestDunya"
  ],
  
  // Sosyal Medya Paylaşımları (WhatsApp, Twitter, LinkedIn)
  openGraph: {
    title: "Boost Your IELTS Score: Free Practice & AI Tools",
    description: "Take free IELTS Academic practice tests and simulate the Speaking exam with AI. No registration required.",
    url: "https://testdunya.net/ielts", // Burayı kendi yolunuzla güncelleyin
    siteName: "TestDunya",
    locale: "en_US", // Google'a içeriğin İngilizce olduğunu söyler
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free IELTS Prep & AI Speaking Simulator",
    description: "Prepare for IELTS with our free tools and practice tests.",
  },
};

export default function IELTSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // lang="en" özelliği bu bölümün İngilizce olduğunu tarayıcılara bildirir
    <div lang="en">
      {children}
    </div>
  );
}
