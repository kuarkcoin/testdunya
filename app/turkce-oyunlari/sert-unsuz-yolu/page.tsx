import SertUnsuzYoluGame from '../../../components/turkce-oyunlari/SertUnsuzYoluGame';
import { serializeJsonLd } from '../../../lib/seo';
import { getGamePageData } from '../seo';

const { metadata, schema, breadcrumbs } = getGamePageData('sert-unsuz-yolu');
export { metadata };

export default function SertUnsuzYoluPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-indigo-100 px-3 py-6 md:px-6 md:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbs) }} />
      <SertUnsuzYoluGame />
    </main>
  );
}
