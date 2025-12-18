import type { Metadata } from "next";

// Bu sayfa için özel SEO ayarları
export const metadata: Metadata = {
  title: "Professional Verbal Reasoning Test | English Logic Assessment",
  description: "Challenge your English deductive logic and high-level vocabulary with our 15-question advanced verbal reasoning test. Global academic standards.",
  keywords: ["Verbal Reasoning Test", "English Logic Quiz", "GMAT Verbal Practice", "GRE Vocabulary Test", "Deductive Reasoning"],
  alternates: {
    canonical: "https://testdunya.net/verbal-test",
  },
  openGraph: {
    title: "Take the Verbal Reasoning Challenge",
    description: "Measure your English logic skills in 15 minutes.",
    url: "https://testdunya.net/verbal-test",
    type: "article", // Test sayfaları için article veya website uygundur
  }
};

export default function VerbalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="verbal-test-container">
      {/* Google'ın bu sayfayı bir 'Quiz' (Sınav) olarak tanıması için JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            "name": "Global Verbal Reasoning Assessment",
            "description": "A professional test to measure English logical and verbal skills.",
            "educationalAlignment": [
              {
                "@type": "AlignmentObject",
                "alignmentType": "educational level",
                "educationalFramework": "GMAT/GRE Standards",
                "targetName": "Advanced English"
              }
            ],
            "hasPart": {
              "@type": "Question",
              "eduQuestionType": "Multiple choice"
            }
          }),
        }}
      />
      {children}
    </section>
  );
}
