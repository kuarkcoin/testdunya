import Link from 'next/link';
import { getStaticPageMetadata } from '../../lib/seo-pages';
import { absoluteUrl, breadcrumbJsonLd, serializeJsonLd } from '../../lib/seo';
import { READING_GROUPS } from '../../lib/reading/content';

export const metadata = getStaticPageMetadata('/1-sinif');

export default function Grade1Page() {
  return (
    <article className="mx-auto max-w-6xl space-y-8 px-4 py-8 text-slate-900 sm:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd([
        breadcrumbJsonLd([{ name: 'Ana Sayfa', path: '/' }, { name: '1. Sınıf', path: '/1-sinif' }]),
        { '@context': 'https://schema.org', '@type': 'CollectionPage', name: '1. Sınıf Okuma Çalışmaları', url: absoluteUrl('/1-sinif'), inLanguage: 'tr', description: 'Harflerden hecelere, kelimelere ve kısa metinlere ilerleyen sesli okuma alıştırmaları.' },
      ]) }} />
      <nav aria-label="Sayfa yolu" className="flex gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
        <Link href="/" className="underline underline-offset-4">Ana Sayfa</Link>
        <span aria-hidden="true">/</span><span aria-current="page">1. Sınıf</span>
      </nav>
      <header className="relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-[#f5fbef] p-6 sm:p-12">
        <div aria-hidden="true" className="absolute -right-6 -top-6 text-[8rem] opacity-10 sm:text-[12rem]">🌿</div>
        <div className="relative max-w-2xl">
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-800">Küçük adımlar, yeni kelimeler</p>
          <h1 className="text-3xl font-black leading-tight sm:text-5xl">1. Sınıf<br />Okuma Çalışmaları</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">Harfleri tanı, heceleri birleştir, kelimeleri oku. Okuma Bahçesi&apos;nde her alıştırmayla yeni bir adım at.</p>
          <Link href="/1-sinif/okuma" className="mt-7 inline-flex min-h-14 items-center rounded-2xl bg-emerald-800 px-7 py-4 text-lg font-bold text-white shadow-sm transition hover:bg-emerald-900 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-emerald-600">
            Okumaya başla <span aria-hidden="true" className="ml-3">→</span>
          </Link>
          <p className="mt-4 text-sm text-slate-700">Sesli örnekler • İsteğe bağlı ses kaydı • Süre sınırı yok</p>
        </div>
      </header>
      <Link href="/1-sinif/resimli-oyunlar" className="flex flex-col gap-4 rounded-3xl border border-teal-200 bg-teal-50 p-6 text-slate-900 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-teal-700 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-teal-800">7 yaş için resimli oyunlar</p>
          <h2 className="mt-1 text-2xl font-black">Resimli Keşif Adası</h2>
          <p className="mt-2 text-slate-700">Örüntüleri tamamla, ipuçlarını bul, hafıza kartlarını eşleştir.</p>
        </div>
        <span className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-teal-800 px-6 py-4 font-bold text-white">Oynamaya başla →</span>
      </Link>
      <section aria-labelledby="reading-steps-title">
        <h2 id="reading-steps-title" className="mb-4 text-2xl font-black dark:text-white">Birlikte nasıl çalışacağız?</h2>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: 'Harfi tanı', icon: 'Aa', text: 'Büyük ve küçük harfleri eşleştir. Harfin adını ve örnek kelimeyi dinle.' },
            { name: 'Heceyi kur', icon: 'el', text: 'Harfleri sıraya koy. Birleşen heceyi gör ve dinle.' },
            { name: 'Kelimeyi oluştur', icon: 'la · le', text: 'Heceleri birleştirerek anlamlı kelimeler oluştur.' },
            { name: 'Oku ve anla', icon: '📖', text: 'Kısa metinleri oku. Metinle ilgili bir soruyu yanıtla.' },
          ].map((step, index) => <li key={step.name} className="rounded-3xl border border-slate-200 bg-white p-6">
            <span aria-hidden="true" className="flex h-14 items-center text-3xl font-black text-emerald-800">{step.icon}</span>
            <h3 className="mt-3 text-lg font-bold">{index + 1}. {step.name}</h3>
            <p className="mt-2 leading-relaxed text-slate-700">{step.text}</p>
          </li>)}
        </ol>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" aria-labelledby="letter-groups-title">
        <h2 id="letter-groups-title" className="text-2xl font-black">Harflerden kısa metinlere</h2>
        <p className="mt-3 text-slate-700">Önceki gruplardaki harfler, sonraki grubun kelime ve metinlerinde tekrar karşına çıkar. Çocuğun çalıştığı grubu bir yetişkinle seçebilirsin.</p>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {READING_GROUPS.map((group, index) => <li key={group.id} className="rounded-2xl bg-emerald-50 p-4">
            <p className="text-sm font-bold text-emerald-800">{index + 1}. harf grubu</p>
            <p className="mt-2 text-xl font-black tracking-wide">{group.letters.join(' · ')}</p>
          </li>)}
        </ol>
      </section>
      <details className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
        <summary className="cursor-pointer text-lg font-bold focus-visible:outline focus-visible:outline-4 focus-visible:outline-emerald-600">Veli ve öğretmen için kısa not</summary>
        <div className="mt-4 space-y-3 leading-relaxed text-slate-700">
          <p>Kısa ve düzenli çalışmalar yapın; 5–10 dakikalık bir deneme iyi bir başlangıç olabilir. Çocuğun hızına göre ara verin ve gerekirse aynı alıştırmaya dönün.</p>
          <p>Harf adı ile harf sesi aynı değildir. Sesleri birleştirirken ünsüzün yanına ek bir ünlü getirmeden örnek olun. Ses düğmeleri harf adını veya yazılı hece, kelime ve cümleyi okur.</p>
          <p>Türkçe ses desteği cihazın ses seçeneklerine bağlıdır. Mikrofon isteğe bağlıdır; çocuk kendi okuyuşunu kaydedip dinleyebilir. Uygulama telaffuza otomatik puan vermez.</p>
        </div>
      </details>
    </article>
  );
}
