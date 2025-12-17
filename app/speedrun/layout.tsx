import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Vocabulary SpeedRun | Race Against Time",
  description: "How fast is your brain? Test your English vocabulary reflexes in this high-speed challenge. Race against the clock and beat your high score.",
  keywords: ["Speedrun", "English Vocabulary Game", "Rapid Fire Vocabulary", "IELTS Speed Test", "English Challenge"],
  openGraph: {
    title: "Vocabulary SpeedRun Challenge",
    description: "You have 60 seconds. How many words can you get right?",
    siteName: "TestDunya",
    locale: "en_US",
    type: "website",
  },
};

export default function SpeedRunLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-indigo-950">{children}</div>;
}
