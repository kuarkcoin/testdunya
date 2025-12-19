import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://testdunya.net'
  const currentDate = new Date()

  // 1. Ana Statik Sayfalar
  const mainRoutes = [
    '',               // Ana Sayfa
    '/mistakes',      // Hata Analiz Merkezi
    '/iletisim',      // İletişim Sayfası
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. Sınav Merkezleri (Hub Pages)
  const examHubs = [
    '/5-sinif',
    '/8-sinif-lgs',
    '/yks',
    '/kpss',
    '/tus',
    '/dus',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  // 3. IELTS Akademi Modülleri
  const ieltsRoutes = [
    '/ielts/speaking',
    '/ielts/writing',
    '/ielts/listening',
    '/ielts/calculator',
    '/test/ielts-reading',
    '/test/ielts-vocab',
    '/test/ielts-grammar',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 4. Oyunlar ve Gelişim Modülleri
  const gameRoutes = [
    '/speedrun',
    '/flashcards',
    '/kelime-avcisi',
    '/iq-test',
    '/genel-kultur',
    '/wordle',
    '/wordmatch',
    '/verbal-test',
    '/number-hunter',
    '/color-logic',
    '/chrono-link',
    '/games/logic-lock',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...mainRoutes, ...examHubs, ...ieltsRoutes, ...gameRoutes]
}
