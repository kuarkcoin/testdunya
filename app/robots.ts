import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // 1. Genel Arama Motorları (Google, Yandex vb.)
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/', // Varsa admin panelini gizler
          '/api/',   // API rotalarının indekslenmesine gerek yok
        ],
      },
      {
        // 2. Google Görsel Botu (Görselli soruların için çok önemli!)
        userAgent: 'Googlebot-Image',
        allow: '/images/',
      },
      {
        // 3. Yapay Zeka Botları (Sitenin verilerini izinsiz çekmesinler)
        userAgent: ['GPTBot', 'ChatGPT-User', 'Anthropic-ai'],
        disallow: ['/'], 
      }
    ],
    sitemap: 'https://testdunya.net/sitemap.xml',
  }
}
