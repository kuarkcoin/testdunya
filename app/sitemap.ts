import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://testdunya.net'
  const lastMod = new Date()

  // 1. Ana Statik Sayfalar
  const mainRoutes = ['', '/mistakes', '/iletisim'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. Sınav Merkezleri (Görsel ve KaTeX vurgulu ana kategoriler)
  const examHubs = [
    '/5-sinif', '/8-sinif-lgs', '/yks', '/kpss', '/tus', '/dus', '/hmgs'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  // 3. Test Sayfaları (İşte burası 400+ sayfanın yönetildiği yer)
  // NOT: Burayı ileride "const tests = await getTestsFromDB()" şeklinde veritabanına bağla!
  const generatedTestRoutes = [
    // 5. Sınıf İngilizce (1'den 100'e kadar otomatik oluşturma örneği)
    ...Array.from({ length: 100 }, (_, i) => `/5-sinif/ingilizce/test${i + 1}`),
    // 5. Sınıf Matematik
    ...Array.from({ length: 150 }, (_, i) => `/5-sinif/matematik/test${i + 1}`),
    // 5. Sınıf Fen Bilimleri
    ...Array.from({ length: 150 }, (_, i) => `/5-sinif/fen/test${i + 1}`),
    // Türkçe (Şekilsiz olsa da SEO için eklenmeli)
    '/5-sinif/turkce/test1',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'daily' as const, // İçerik her gün artıyorsa daily kalmalı
    priority: 0.7,
  }))

  // Diğer modülleri (IELTS ve Oyunlar) buraya eklemeye devam edebilirsin...
  const otherRoutes = [
    '/ielts/speaking', '/speedrun', '/kelime-avcisi'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...mainRoutes, ...examHubs, ...generatedTestRoutes, ...otherRoutes]
}
