import type { Metadata } from 'next';
import { SITE_URL, getGrade5CanonicalUrl } from './grade5Seo';

interface BuildMetadataParams {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
  noindex?: boolean;
}

export function buildPageMetadata({ title, description, pathname, keywords = [], noindex = false }: BuildMetadataParams): Metadata {
  const canonical = getGrade5CanonicalUrl(pathname);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      siteName: 'TestDünya',
      locale: 'tr_TR',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    metadataBase: new URL(SITE_URL),
  };
}
