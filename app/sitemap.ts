import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://testdunya.vercel.app' // Kendi domaininle değiştir

  // Ana Sayfalar
  const routes = [
    '',
    '/iletisim',
    '/mistakes',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  // Test Linklerini Otomatik Oluştur
  const examConfig = [
    { prefix: 'yks-sozel-deneme', count: 30 },
    { prefix: 'kpss-sozel', count: 21 },
    { prefix: 'tus-deneme', count: 22 },
  ];

  let testRoutes: any[] = [];

  examConfig.forEach(exam => {
    for (let i = 1; i <= exam.count; i++) {
        testRoutes.push({
            url: `${baseUrl}/test/${exam.prefix}-${i}`,
            lastModified: new Date(),
        })
    }
  });

  return [...routes, ...testRoutes]
}
