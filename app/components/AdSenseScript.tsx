'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'

const ADSENSE_CLIENT_ID = 'ca-pub-1700979325865596'
const ADSENSE_DISABLED_PATHS = new Set(['/edirne-masallari'])

export default function AdSenseScript() {
  const pathname = usePathname()
  const normalizedPathname = pathname === '/' ? pathname : pathname.replace(/\/$/, '')
  const shouldDisableAds = ADSENSE_DISABLED_PATHS.has(normalizedPathname)

  if (shouldDisableAds) {
    return (
      <style
        id="adsbygoogle-disabled-for-page"
        dangerouslySetInnerHTML={{
          __html: `
            ins.adsbygoogle,
            iframe[id^="google_ads_iframe"],
            iframe[src*="googlesyndication.com"],
            div[id^="google_ads_iframe"] {
              display: none !important;
              visibility: hidden !important;
              height: 0 !important;
              min-height: 0 !important;
            }
          `,
        }}
      />
    )
  }

  return (
    <Script
      id="adsbygoogle-init"
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
    />
  )
}
