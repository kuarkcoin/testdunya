import { TURKCE_GAMES_CONFIG } from '../../components/turkce-oyunlari/turkce-games-config';
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata, serializeJsonLd } from '../../lib/seo';
import TurkceOyunlariHubClient from './TurkceOyunlariHubClient';

export const metadata = createPageMetadata({
  title: 'Türkçe Oyunları — Ses, Anlam ve Dil Bilgisi',
  description: 'Türkçe oyunlarını sınıf, konu ve zorluk düzeyine göre seçin. Harfler, heceler, yazım kuralları, sözcükte anlam ve paragraf becerilerini oyunlarla çalışın.',
  path: '/turkce-oyunlari',
});

export default function TurkceOyunlariHubPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Türkçe Oyunları',
    url: absoluteUrl('/turkce-oyunlari'),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: TURKCE_GAMES_CONFIG.length,
      itemListElement: TURKCE_GAMES_CONFIG.map((game, index) => ({
        '@type': 'ListItem', position: index + 1, name: game.title, url: absoluteUrl(`/turkce-oyunlari/${game.slug}`),
      })),
    },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([{ name: 'Ana Sayfa', path: '/' }, { name: 'Türkçe Oyunları', path: '/turkce-oyunlari' }])) }} />
    <TurkceOyunlariHubClient />
  </>;
}
