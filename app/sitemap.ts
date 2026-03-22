import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://testdunya.net'
  const lastMod = new Date()

  // 1. Ana Statik Sayfalar
  const mainRoutes = [
    '',               // Ana Sayfa
    '/mistakes',      // Hata Analiz Merkezi
    '/iletisim',      // İletişim
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. Sınav Merkezleri (Yeni Nesil & KaTeX İçerik Vurgusu)
  const examHubs = [
    '/5-sinif', // Matematik ve İngilizce Yeni Nesil Görseller Burada!
    '/8-sinif-lgs',
    '/yks',
    '/kpss',
    '/tus',
    '/dus',
    '/hmgs',    // Hukuk sınavları kategorisi eklendi
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  // 3. Dil Modülleri (IELTS & EnglishMeter Entegrasyonu)
  const ieltsRoutes = [
    '/ielts/speaking',
    '/ielts/writing',
    '/ielts/listening',
    '/test/ielts-reading',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 4. AI Destekli Oyunlar (Engagement Artırıcı İçerikler)
  const gameRoutes = [
    '/speedrun',
    '/kelime-avcisi', // Word Hunter
    '/number-hunter', // Matematik Oyunu
    '/flashcards',
    '/iq-test',
    '/wordle',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // 5. YENİ EKLENEN: Alt Test Sayfaları (Google'ın Görselleri Bulması İçin Şart!)
  // İleride bu kısmı veritabanından .map() ile dinamik çekebilirsin.
  const testRoutes = [
    '/5-sinif/ingilizce/test1',
    '/5-sinif/ingilizce/test2',
    '/5-sinif/ingilizce/test3',
    '/5-sinif/ingilizce/test4',
    '/5-sinif/ingilizce/test5',
    '/5-sinif/ingilizce/test6',
    '/5-sinif/fen/test2',
    '/5-sinif/matematik/test3',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.8, 
  }))

  return [...mainRoutes, ...examHubs, ...ieltsRoutes, ...gameRoutes, ...testRoutes]
}
