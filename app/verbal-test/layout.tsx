import { getStaticPageMetadata } from '../../lib/seo-pages';

export const metadata = getStaticPageMetadata('/verbal-test');

export default function VerbalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="verbal-test-container">
      {children}
    </section>
  );
}

