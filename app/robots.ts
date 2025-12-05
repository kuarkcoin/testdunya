import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Eğer gizli bir admin paneli yaparsan buraya eklersin
    },
    sitemap: 'https://testdunya.com/sitemap.xml',
  };
}
