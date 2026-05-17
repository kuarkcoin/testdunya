import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import EdirneMasallariClient from './EdirneMasallariClient'

const pageUrl = 'https://testdunya.net/edirne-masallari'
const ogImageUrl = 'https://testdunya.net/images/edirne-masallari-og.jpg'
const title = 'Edirne Masalları | Kültürel Miras ve Çocuk Masalları'
const description = 'Edirne’nin tarihî, kültürel ve doğal değerlerini çocuklara masal diliyle tanıtan dijital masal kitabı ve TÜBİTAK tasarım projesi.'
const keywords = [
  'Edirne Masalları',
  'çocuk masalları',
  'Selimiye Camii',
  'Meriç Nehri',
  'Kırkpınar',
  'kültürel miras',
  'değerler eğitimi',
  'TÜBİTAK projesi',
]

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: 'TestDünya',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Edirne Masalları dijital masal sayfası',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

const pdfUrl = '/pdf/edirne-masallari.pdf'

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    inLanguage: 'tr-TR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'TestDünya',
      url: 'https://testdunya.net',
    },
    about: ['Edirne', 'çocuk masalları', 'kültürel miras', 'değerler eğitimi'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${pageUrl}#creative-work`,
    name: 'Edirne Masalları',
    headline: 'Kültürel Miras, Doğa ve Değerler Eğitimi Temalı Çocuk Masalları',
    description,
    image: ogImageUrl,
    inLanguage: 'tr-TR',
    educationalUse: ['Kültürel miras eğitimi', 'Değerler eğitimi', 'Çevre bilinci'],
    learningResourceType: 'TÜBİTAK tasarım projesi dijital masal sunumu',
    creator: [
      { '@type': 'Person', name: 'Beren YORULMAZ' },
      { '@type': 'Person', name: 'Kemal GÖKKUŞ' },
      { '@type': 'Person', name: 'Ada GÜNDOĞDU' },
    ],
    contributor: { '@type': 'Person', name: 'Dilek CAN ULUSOY', jobTitle: 'Danışman Öğretmen' },
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Kırkpınar Ağası Alper Yazoğlu Ortaokulu',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Edirne',
        addressCountry: 'TR',
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Anasayfa',
        item: 'https://testdunya.net',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Edirne Masalları',
        item: pageUrl,
      },
    ],
  },
]

function FeatureIcon({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="rounded-3xl border border-[#d6b45d]/30 bg-white/70 p-4 text-center shadow-lg shadow-[#5b1f2a]/5 backdrop-blur dark:border-[#d6b45d]/20 dark:bg-[#17111d]/75 dark:shadow-black/20">
      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fff3c7] to-[#d6b45d] text-3xl shadow-inner dark:from-[#3b2b14] dark:to-[#d6b45d]">
        {icon}
      </div>
      <p className="text-sm font-extrabold text-[#17233f] dark:text-[#fff7df]">{label}</p>
    </div>
  )
}

function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-[2rem] border border-[#d6b45d]/25 bg-white/80 p-6 shadow-xl shadow-[#5b1f2a]/5 backdrop-blur dark:border-[#d6b45d]/20 dark:bg-[#151019]/85 dark:shadow-black/25 sm:p-8">
      <h2 className="text-2xl font-black tracking-tight text-[#17233f] dark:text-[#fff7df]">{title}</h2>
      <div className="mt-4 text-base leading-8 text-[#5d5148] dark:text-[#eadfcf]">{children}</div>
    </section>
  )
}

export default function EdirneMasallariPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative overflow-hidden bg-[#fbf5e8] text-[#2b211c] dark:bg-[#0f0c13] dark:text-[#fff7df]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,180,93,0.35),transparent_36%),radial-gradient(circle_at_80%_20%,rgba(79,125,58,0.22),transparent_30%),linear-gradient(135deg,rgba(122,31,43,0.10),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(214,180,93,0.18),transparent_36%),radial-gradient(circle_at_80%_20%,rgba(79,125,58,0.16),transparent_30%),linear-gradient(135deg,rgba(122,31,43,0.20),transparent_42%)]" />
        <div className="absolute left-0 right-0 top-24 hidden h-40 opacity-20 dark:opacity-15 lg:block">
          <svg viewBox="0 0 1200 220" className="h-full w-full" aria-hidden="true">
            <path d="M0 180H1200" stroke="currentColor" strokeWidth="3" className="text-[#7a1f2b]" />
            <path d="M80 180V120h52v60M170 180V92h30v88M198 92h55v88M296 180V72h34v108M330 180V72h34v108M315 72c0-36 34-36 34 0M420 180c18-44 76-44 94 0M620 180V92h62v88M651 92V36M760 180c22-66 112-66 134 0M990 180v-50h72v50" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" className="text-[#1d2f57]" />
            <path d="M0 200c140-28 205 18 338-12 158-36 257 28 410-1 143-27 238-7 452 4" fill="none" stroke="currentColor" strokeWidth="10" className="text-[#4f7d3a]" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <nav aria-label="Breadcrumb" className="mb-8 flex text-sm font-semibold text-[#704b2a] dark:text-[#f0c98a]">
            <Link href="/" className="hover:text-[#7a1f2b] dark:hover:text-[#ffd86a]">Anasayfa</Link>
            <span className="mx-2">/</span>
            <span aria-current="page">Edirne Masalları</span>
          </nav>

          <header className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex rounded-full border border-[#d6b45d]/40 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#7a1f2b] shadow-sm backdrop-blur dark:bg-[#17111d]/70 dark:text-[#ffd86a]">
                TÜBİTAK Tasarım Projesi • 2025-2026
              </div>
              <h1 className="mt-6 text-5xl font-black tracking-tight text-[#17233f] dark:text-[#fff7df] sm:text-6xl lg:text-7xl">
                EDİRNE MASALLARI
              </h1>
              <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-[#704b2a] dark:text-[#f3d9a4]">
                Kültürel Miras, Doğa ve Değerler Eğitimi Temalı Çocuk Masalları
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d5148] dark:text-[#eadfcf]">
                Bu proje, Edirne’nin tarihî, kültürel ve doğal değerlerini çocukların ilgisini çekecek özgün masallara dönüştürmeyi amaçlayan bir tasarım çalışmasıdır. Selimiye Camii, Meriç Nehri, Kırkpınar geleneği, köy yaşamı, çevre bilinci ve değerler eğitimi masal diliyle ele alınmıştır.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#7a1f2b] px-6 py-3 text-sm font-extrabold text-white shadow-xl shadow-[#7a1f2b]/20 transition hover:-translate-y-0.5 hover:bg-[#5f1621] focus:outline-none focus:ring-4 focus:ring-[#d6b45d]/40 dark:bg-[#d6b45d] dark:text-[#1c1520] dark:hover:bg-[#efcf76]"
                >
                  📘 PDF Kitapçığı Aç
                </a>
                <span className="inline-flex items-center justify-center rounded-full border border-[#d6b45d]/35 bg-white/70 px-5 py-3 text-sm font-bold text-[#704b2a] backdrop-blur dark:bg-[#17111d]/70 dark:text-[#f3d9a4]">
                  🕌 🌊 🏅 🌿 ✨ TÜBİTAK proje sunumu için hazırlanmış dijital masal sayfası
                </span>
              </div>
              <div className="mt-8 grid gap-3 text-sm font-bold text-[#17233f] dark:text-[#fff7df] sm:grid-cols-3">
                <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-[#d6b45d]/30 dark:bg-[#17111d]/70">Kırkpınar Ağası Alper Yazoğlu Ortaokulu</div>
                <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-[#d6b45d]/30 dark:bg-[#17111d]/70">2025-2026</div>
                <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-[#d6b45d]/30 dark:bg-[#17111d]/70">Edirne</div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-[#d6b45d]/35 bg-[#fffaf0]/85 p-5 shadow-2xl shadow-[#5b1f2a]/10 backdrop-blur dark:border-[#d6b45d]/20 dark:bg-[#151019]/85 dark:shadow-black/30">
              <div className="relative mb-5 overflow-hidden rounded-3xl border border-[#d6b45d]/30 shadow-xl">
                <Image
                  src="/images/edirne-masallari-og.jpg"
                  alt="Edirne Masalları proje görseli"
                  width={1200}
                  height={630}
                  priority
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FeatureIcon label="Selimiye" icon="🕌" />
                <FeatureIcon label="Meriç" icon="🌊" />
                <FeatureIcon label="Kırkpınar" icon="🏅" />
                <FeatureIcon label="Köy Yaşamı" icon="🌿" />
              </div>
              <div className="mt-5 rounded-3xl bg-gradient-to-br from-[#7a1f2b] via-[#1d2f57] to-[#4f7d3a] p-5 text-white shadow-xl">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ffe7a1]">Proje Ekibi</p>
                <dl className="mt-4 space-y-3 text-sm leading-6">
                  <div>
                    <dt className="font-bold text-[#ffe7a1]">Danışman Öğretmen</dt>
                    <dd>Dilek CAN ULUSOY</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#ffe7a1]">Projede Görev Alan Öğrenciler</dt>
                    <dd>Beren YORULMAZ • Kemal GÖKKUŞ • Ada GÜNDOĞDU</dd>
                  </div>
                </dl>
              </div>
            </div>
          </header>

          <section className="mt-10 rounded-[2rem] border border-[#d6b45d]/30 bg-white/80 p-6 shadow-xl shadow-[#5b1f2a]/5 backdrop-blur dark:border-[#d6b45d]/20 dark:bg-[#151019]/85 dark:shadow-black/25 sm:p-8" aria-labelledby="proje-bilgileri">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#7a1f2b] dark:text-[#ffd86a]">Proje Bilgileri</p>
                <h2 id="proje-bilgileri" className="mt-2 text-2xl font-black tracking-tight text-[#17233f] dark:text-[#fff7df]">Kırkpınar Ağası Alper Yazoğlu Ortaokulu</h2>
                <p className="mt-3 text-base font-bold text-[#704b2a] dark:text-[#f3d9a4]">2025-2026 • Edirne</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-[#fbf5e8] p-5 ring-1 ring-[#d6b45d]/30 dark:bg-[#211828]">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#4f7d3a] dark:text-[#8fbd74]">Danışman Öğretmen</p>
                  <p className="mt-2 text-lg font-black text-[#17233f] dark:text-[#fff7df]">Dilek CAN ULUSOY</p>
                </div>
                <div className="rounded-3xl bg-[#fbf5e8] p-5 ring-1 ring-[#d6b45d]/30 dark:bg-[#211828]">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#4f7d3a] dark:text-[#8fbd74]">Projede Görev Alan Öğrenciler</p>
                  <p className="mt-2 text-lg font-black leading-8 text-[#17233f] dark:text-[#fff7df]">Beren YORULMAZ<br />Kemal GÖKKUŞ<br />Ada GÜNDOĞDU</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-14">
            <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#4f7d3a] dark:text-[#8fbd74]">Dijital Masal Kitaplığı</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-[#17233f] dark:text-[#fff7df]">Üç özgün Edirne masalı</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#6c5d52] dark:text-[#d8cbbd]">
                “Masalı Oku” düğmesiyle metinleri aynı sayfada açıp kapatabilirsiniz. PDF kitapçığı açabilir, masalları aynı sayfada okuyabilir ve sesli okuma özelliğini kullanabilirsiniz.
              </p>
            </div>
            <EdirneMasallariClient />
          </section>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <SectionCard title="Proje Amacı">
              <p>
                Bu projede Edirne’nin tarihî, kültürel ve doğal değerlerini çocuklara masal diliyle tanıtmak amaçlanmaktadır. Proje sayesinde öğrencilerin yerel kültürel mirasa ilgilerinin artması, çevreye ve geleneksel değerlere karşı duyarlılık kazanmaları hedeflenmektedir.
              </p>
            </SectionCard>
            <SectionCard title="Yöntem">
              <ol className="list-decimal space-y-2 pl-5">
                <li>Edirne’nin kültürel ve doğal değerleri araştırıldı.</li>
                <li>Masallarda kullanılacak mekân ve temalar belirlendi.</li>
                <li>Özgün masal metinleri yazıldı.</li>
                <li>Metinler dil ve anlatım bakımından düzenlendi.</li>
                <li>Masallar görsellerle desteklendi.</li>
                <li>Dijital kitap ve sunum ürünü hazırlanması planlandı.</li>
              </ol>
            </SectionCard>
            <SectionCard title="Beklenen Sonuç">
              <p>
                Proje sonunda Edirne’nin kültürel mirasını, doğal değerlerini ve geleneksel unsurlarını anlatan özgün çocuk masalları oluşturulmuştur. Bu masalların öğrencilerde yerel kültüre ilgi, çevre bilinci, hayal gücü, okuma sevgisi ve yazılı anlatım becerisi geliştirmesi beklenmektedir.
              </p>
            </SectionCard>
          </div>

          <section className="mt-14 rounded-[2rem] border border-[#d6b45d]/30 bg-gradient-to-br from-white/85 via-[#fffaf0]/90 to-[#f1eadb]/90 p-6 shadow-xl shadow-[#5b1f2a]/5 backdrop-blur dark:border-[#d6b45d]/20 dark:from-[#151019]/90 dark:via-[#1d1622]/90 dark:to-[#211828]/90 sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#7a1f2b] dark:text-[#ffd86a]">QR Kod Bilgi Alanı</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-[#17233f] dark:text-[#fff7df]">Dijital Masal Kitabı</h2>
                <p className="mt-3 max-w-3xl text-base leading-8 text-[#5d5148] dark:text-[#eadfcf]">
                  Bu sayfa, 50x70 proje kapağındaki QR kod aracılığıyla ziyaretçilere dijital masal kitabı, PDF kitapçık ve sesli okuma seçenekleri sunmak için hazırlanmıştır.
                </p>
                <p className="mt-3 break-all rounded-2xl bg-[#fbf5e8] px-4 py-3 text-sm font-bold text-[#704b2a] ring-1 ring-[#d6b45d]/25 dark:bg-[#211828] dark:text-[#f3d9a4]">
                  {pageUrl}
                </p>
              </div>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#1d2f57] px-6 py-3 text-sm font-extrabold text-white shadow-xl shadow-[#1d2f57]/20 transition hover:-translate-y-0.5 hover:bg-[#162541] focus:outline-none focus:ring-4 focus:ring-[#d6b45d]/40 dark:bg-[#d6b45d] dark:text-[#1c1520] dark:hover:bg-[#efcf76]"
              >
                📘 PDF Kitapçığı Aç
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
