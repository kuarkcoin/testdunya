import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Match Game | Synonyms & Definitions",
  description: "Drag and drop to match words with their correct definitions or synonyms. A fun way to test your English comprehension skills.",
  keywords: ["Word Match", "Synonym Game", "Definition Matching", "English Logic Game", "Vocabulary Trainer"],
  openGraph: {
    title: "Word Match Challenge",
    description: "Match the words to their meanings as fast as you can!",
    siteName: "TestDunya",
    locale: "en_US",
    type: "website",
  },
};

export default function WordMatchLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-violet-950">{children}</div>;
}
