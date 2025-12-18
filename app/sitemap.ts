import { MetadataRoute } from 'next';

const BASE_URL = 'https://testdunya.net';

export default function sitemap(): MetadataRoute.Sitemap {
  
  const staticRoutes = [
    '',
    '/mistakes',
    '/5-sinif',
    '/iq-test',
    '/verbal-test',
    '/speedrun',
    '/flashcards',
    '/kelime-avcisi',
    '/wordle',
    '/wordmatch',
    '/ielts/calculator',
    '/ielts/speaking',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dinamik Konfigürasyon
  const dynamicConfig = [
    { prefix: 'ielts-level-test', count: 1, priority: 1.0 },
    { prefix: 'yks-sozel-deneme', count: 30, priority: 0.7 },
    { prefix: 'kpss-sozel', count: 21, priority: 0.7 },
    { prefix: 'tus-deneme', count: 35, priority: 0.6 },
    { prefix: 'dus-deneme', count: 17, priority: 0.6 },
    { prefix: '5-sinif-matematik', count: 10, priority: 0.8 }, // 5. Sınıf Branşları
    { prefix: '5-sinif-turkce', count: 10, priority: 0.8 },
  ];

  let testRoutes: MetadataRoute.Sitemap = [];

  dynamicConfig.forEach((exam) => {
    for (let i = 1; i <= exam.count; i++) {
      testRoutes.push({
        url: `${BASE_URL}/test/${exam.prefix}-${i}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: exam.priority,
      });
    }
  });

  return [...staticRoutes, ...testRoutes];
}
