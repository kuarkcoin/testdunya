import { MetadataRoute } from 'next'
import { DEFAULT_DESCRIPTION } from '../lib/seo'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TestDünya - Online Sınav Merkezi',
    short_name: 'TestDünya',
    description: DEFAULT_DESCRIPTION,
    start_url: '/',
    display: 'standalone', // Tarayıcı çubuğunu gizler, app gibi görünür
    background_color: '#f8fafc',
    theme_color: '#4f46e5', // İndigo rengi (Site ana rengi)
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}

