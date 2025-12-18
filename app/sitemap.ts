import { MetadataRoute } from 'next';

const BASE_URL = 'https://testdunya.net';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Ana Statik Sayfalar ve Oyunlar
  const staticRoutes = [
    '',
    '/mistakes',
    '/iletisim',
    '/gizlilik',
    '/5-sinif',           // Yeni kategori
    '/iq-test',           // Yeni oyun
    '/verbal-test',       // Yeni oyun
    '/ielts/calculator',
    '/ielts/speaking',
    '/ielts/listening',
    '/speedrun',
    '/flashcards',
    '/kelime-avcisi',
    '/wordle',
    '/wordmatch',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. IELTS ve Özel Seviye Testleri
  const specializedTests = [
    'ielts-level-test-1', // Placement Test
    'ielts-reading',
    'ielts-listening',
    'ielts-listening-2',
    'ielts-listening-3',
    'ielts-listening-4',
    'ielts-listening-5',
    'ielts-listening-7',
    'ielts-writing',
    'ielts-vocab',
    'ielts-grammar'
  ].map((id) => ({
    url: `${BASE_URL}/test/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 3. Genel Sınav Konfigürasyonu (Dinamik Üretim)
  const examConfig = [
    { prefix: 'yks-sozel-deneme', count: 30 },
    { prefix: 'kpss-sozel', count: 21 },
    { prefix: 'tus-deneme', count: 35 },
    { prefix: 'dus-deneme', count: 17 },
    { prefix: '5-sinif-matematik', count: 10 }, // Örnek branşlar
    { prefix: '5-sinif-turkce', count: 10 },
  ];

  let otherTestRoutes: MetadataRoute.Sitemap = [];

  examConfig.forEach((exam) => {
    for (let i = 1; i <= exam.count; i++) {
      otherTestRoutes.push({
        url: `${BASE_URL}/test/${exam.prefix}-${i}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6, 
      });
    }
  });

  return [...staticRoutes, ...specializedTests, ...otherTestRoutes];
}
