import { absoluteUrl, breadcrumbJsonLd, createPageMetadata, serializeJsonLd } from '../../lib/seo';
import { getGorevdeSubjects } from './data';
import GorevdeYukselmeHomeClient from './GorevdeYukselmeHomeClient';

export const metadata = createPageMetadata({
  title: 'Görevde Yükselme Testleri ve Karma Deneme',
  description: 'Görevde yükselme için yayımlanan mevzuat testlerini çözün. Derslere göre soru sayılarını görün, cevapları inceleyin ve mevcut sorulardan karma deneme oluşturun.',
  path: '/gorevde-yukselme',
});

export default async function GorevdeYukselmeHome() {
  const subjects = await getGorevdeSubjects();
  const available = subjects.filter((subject) => subject.tests.length > 0);
  const schema = {
    '@context': 'https://schema.org', '@type': 'CollectionPage',
    name: 'Görevde Yükselme Testleri', url: absoluteUrl('/gorevde-yukselme'),
    mainEntity: {
      '@type': 'ItemList', numberOfItems: available.length,
      itemListElement: available.map((subject, index) => ({
        '@type': 'ListItem', position: index + 1, name: subject.title, url: absoluteUrl(`/gorevde-yukselme/${subject.slug}`),
      })),
    },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([{ name: 'Ana Sayfa', path: '/' }, { name: 'Görevde Yükselme', path: '/gorevde-yukselme' }])) }} />
    <GorevdeYukselmeHomeClient subjects={subjects} />
  </>;
}
