import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IELTS Wordle - Daily Academic Word Game",
  description: "Guess the hidden academic English word in 6 tries. A daily brain teaser designed to improve your IELTS spelling and vocabulary.",
  keywords: ["IELTS Wordle", "Academic Wordle", "Word Guess Game", "5 Letter Word Game", "Daily Puzzle"],
  openGraph: {
    title: "Play IELTS Wordle",
    description: "Can you guess the academic word of the day?",
    siteName: "TestDunya",
    locale: "en_US",
    type: "website",
  },
};

export default function WordleLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-slate-900">{children}</div>;
}
