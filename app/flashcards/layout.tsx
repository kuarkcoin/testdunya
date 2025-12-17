import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IELTS & Academic Flashcards | 1000+ Essential Words",
  description: "Master academic vocabulary with our interactive flashcards. Flip, learn, and memorize Band 7+ words for IELTS, TOEFL, and PTE exams.",
  keywords: ["IELTS Flashcards", "Academic Vocabulary", "Study English", "Word Cards", "Online Flashcards"],
  openGraph: {
    title: "Free IELTS Academic Flashcards",
    description: "The smartest way to learn new English words. Start flipping cards now.",
    siteName: "TestDunya",
    locale: "en_US",
    type: "website",
  },
};

export default function FlashcardsLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-slate-50">{children}</div>;
}
