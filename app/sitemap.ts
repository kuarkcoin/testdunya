import { MetadataRoute } from 'next';

const BASE_URL = 'https://testdunya.com'; // Burayı canlıya alınca güncelle

export default function sitemap(): MetadataRoute.Sitemap {
  
  // 1. Sabit Sayfalar
  const routes = [
    '',
    '/iletisim',
    '/gizlilik',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dinamik Test Sayfaları (Otomatik Oluşturma)
  
  // YKS Sözel (30 Test)
  const yksTests = Array.from({ length: 30 }, (_, i) => ({
    url: `${BASE_URL}/test/yks-sozel-deneme-${i + 1}`,
    lastModified: new Date(),
    priority: 0.9,
  }));

  // KPSS Sözel (5 Test)
  const kpssTests = Array.from({ length: 5 }, (_, i) => ({
    url: `${BASE_URL}/test/kpss-sozel-test-${i + 1}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  // LGS (5 Test)
  const lgsTests = Array.from({ length: 5 }, (_, i) => ({
    url: `${BASE_URL}/test/lgs-test-${i + 1}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  // Hepsini Birleştir
  return [...routes, ...yksTests, ...kpssTests, ...lgsTests];
}
