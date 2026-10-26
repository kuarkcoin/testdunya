import { getStaticPageMetadata } from '../../lib/seo-pages';

export const metadata = getStaticPageMetadata('/kelime-avcisi');

export default function WordHunterLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-orange-950">{children}</div>;
}

