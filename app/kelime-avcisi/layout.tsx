import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Hunter | AI Powered Word Guessing Game",
  description: "The AI describes a concept, you guess the word. Test your reading comprehension and deduction skills with our new AI engine.",
  keywords: ["Word Hunter", "AI Word Game", "Guess the Word", "English Riddles", "TestDunya AI"],
  openGraph: {
    title: "Play Word Hunter with AI",
    description: "Read the AI's definition and hunt down the correct word.",
    siteName: "TestDunya",
    locale: "en_US",
    type: "website",
  },
};

export default function WordHunterLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-orange-950">{children}</div>;
}
