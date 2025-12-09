import { MetadataRoute } from 'next'

// Sitenin ana URL'si
const BASE_URL = 'https://testdunya.net'

export default function sitemap(): MetadataRoute.Sitemap {
  // Statik sayfalar
  const staticRoutes = [
    '',
    '/iletisim',
    '/gizlilik',
    '/mistakes',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dinamik Test Sayfaları (30 YKS, 21 KPSS, 22 TUS)
  // Burayı manuel veya döngüyle oluşturabilirsin. Örnek döngü:
  
  const examTypes = [
    { prefix: 'yks-sozel-deneme', count: 10 }, // Aktif olan 10 test
    { prefix: 'kpss-sozel', count: 10 },
    { prefix: 'tus-deneme', count: 10 },
  ]

  const testRoutes = examTypes.flatMap((exam) =>
    Array.from({ length: exam.count }, (_, i) => ({
      url: `${BASE_URL}/test/${exam.prefix}-${i + 1}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }))
  )

  return [...staticRoutes, ...testRoutes]
}
