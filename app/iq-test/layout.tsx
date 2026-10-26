import { getStaticPageMetadata } from '../../lib/seo-pages';

export const metadata = getStaticPageMetadata('/iq-test');

export default function IQTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Arka plan rengini layout seviyesinde sabitleyebiliriz (opsiyonel)
    <div className="bg-slate-950 min-h-screen">
      {children}
    </div>
  );
}

