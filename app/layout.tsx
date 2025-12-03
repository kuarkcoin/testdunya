import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TestDünya – Ücretsiz YKS, LGS, KPSS ve Tüm Sınav Testleri",
  description:
    "TestDünya; YKS, LGS, KPSS, Ehliyet, ALES, YÖKDİL, DGS, TUS, DUS ve AÖL için ücretsiz online deneme sınavları ve konu tarama testleri sunan modern test platformudur.",
  metadataBase: new URL("https://www.testdunya.net"),
  openGraph: {
    title: "TestDünya – Türkiye'nin Sınav Test Platformu",
    description:
      "YKS, LGS, KPSS, Ehliyet, ALES, YÖKDİL, DGS, TUS, DUS ve AÖL testlerini tek sitede çözün. Ücretsiz, hızlı, üye olmadan çözmeye başlayın.",
    url: "https://www.testdunya.net",
    siteName: "TestDünya",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.testdunya.net",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <div className="app-shell">
          <main className="app-main">{children}</main>
          <footer className="td-footer">
            <div className="td-footer-inner">
              <p className="td-footer-text">
                © {new Date().getFullYear()} TestDünya. Tüm hakları saklıdır.
              </p>
              <div className="td-footer-links">
                <span>Gizlilik Politikası (yakında)</span>
                <span>Hakkımızda (yakında)</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}