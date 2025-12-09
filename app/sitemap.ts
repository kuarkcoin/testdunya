import { MetadataRoute } from 'next';

// Sitenin ana URL'si (Canlıya aldığında burayı güncellemelisin)
// Şu anlık örnek domain var, kendi domainini yaz: https://testdunya.com gibi
const BASE_URL = 'https://testdunya.com'; // BURAYI KENDİ DOMAININ YAP

export default function sitemap(): MetadataRoute.Sitemap {
  
  // 1. Statik Sayfalar
  const routes = [
    '',
    '/mistakes',
    '/iletisim',
    '/gizlilik',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dinamik Test Sayfaları (Mantığı app/page.tsx ile aynı tutuyoruz)
  const examConfig = [
    { prefix: 'yks-sozel-deneme', count: 30 },
    { prefix: 'kpss-sozel', count: 21 },
    { prefix: 'tus-deneme', count: 35 },
    { prefix: 'dus-deneme', count: 10 }, // DUS eklendi
  ];

  let testRoutes: MetadataRoute.Sitemap = [];

  examConfig.forEach((exam) => {
    for (let i = 1; i <= exam.count; i++) {
      testRoutes.push({
        url: `${BASE_URL}/test/${exam.prefix}-${i}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const, // Test içeriği çok değişmez
        priority: 0.9, // Test sayfaları önemlidir
      });
    }
  });

  return [...routes, ...testRoutes];
}
