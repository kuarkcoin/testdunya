import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TestDünya – YKS, LGS, KPSS Testleri",
  description:
    "TestDünya ile YKS, TYT, LGS, KPSS, Ehliyet ve ALES sınavları için ücretsiz deneme testleri çöz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
