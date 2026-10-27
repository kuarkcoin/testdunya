import type { Metadata } from 'next';

export const SITE_URL = 'https://testdunya.net';
export const SITE_NAME = 'TestDünya';
export const DEFAULT_DESCRIPTION = '1. sınıf okuma alıştırmaları, 5. ve 6. sınıf testleri, LGS denemeleri ve eğitici oyunlarla çalışın. Sesli örnekleri dinleyin, testleri çözün ve açıklamalı cevapları inceleyin.';
export const SOCIAL_IMAGE = { url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'TestDünya — Online testler ve eğitici oyunlar' };

export function absoluteUrl(path = '/'): string {
  if (!path.startsWith('/') || path.startsWith('//') || /[\\\u0000-\u001f\u007f?#]/.test(path)) {
    throw new Error(`Canonical path must be a site-relative path without a query or fragment: ${path}`);
  }
  const url = new URL(path, SITE_URL);
  if (url.origin !== SITE_URL) throw new Error('Canonical URLs must stay on the site origin');
  return url.href;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  locale?: 'tr_TR' | 'en_US';
};

export function createPageMetadata({ title, description, path, index = true, locale = 'tr_TR' }: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale,
      type: 'website',
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [SOCIAL_IMAGE.url],
    },
    ...(!index ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
  };
}

export function serializeJsonLd(value: unknown): string {
  const json = JSON.stringify(value);
  if (typeof json !== 'string') throw new TypeError('JSON-LD must be serializable');
  return json.replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem', position: index + 1, name: item.name, item: absoluteUrl(item.path),
    })),
  };
}
