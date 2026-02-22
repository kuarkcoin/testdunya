import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HMGS Deneme Sınavı – 20 Ücretsiz Online Test | TestDunya',
  description: 'HMGS (Hukuk Mesleklerine Giriş Sınavı) için 80 soruluk süreli online deneme sınavları çözün.',
  keywords: ['hmgs deneme sınavı', 'hmgs test çöz', 'hukuk mesleklerine giriş sınavı'],
  openGraph: {
    title: 'HMGS Deneme Sınavı',
    description: '80 soruluk süreli HMGS deneme testleri.',
    type: 'website',
  },
};

const hmgsTests = Array.from({ length: 20 }, (_, idx) => idx + 1);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'HMGS nedir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HMGS, Hukuk Mesleklerine Giriş Sınavı olup hukuk mesleklerine geçişte kullanılan merkezi bir sınavdır.',
      },
    },
    {
      '@type': 'Question',
      name: 'HMGS kaç soru?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bu modülde yer alan HMGS denemeleri 80 sorudan oluşur.',
      },
    },
    {
      '@type': 'Question',
      name: 'HMGS süresi kaç dakika?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HMGS deneme sınavları 90 dakika (5400 saniye) süreyle çözülür.',
      },
    },
    {
      '@type': 'Question',
      name: 'HMGS baraj puanı nedir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Baraj puanı dönemsel mevzuata göre değişebileceği için güncel ÖSYM ve ilgili kurum duyurularının takip edilmesi gerekir.',
      },
    },
  ],
};

export default function HmgsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">HMGS Deneme Sınavı</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {hmgsTests.map((testNo) => (
            <Link
              key={testNo}
              href={`/test/hmgs-${testNo}`}
              className="rounded-xl border border-slate-200 bg-white p-4 text-center font-bold text-slate-700 hover:border-indigo-300 hover:text-indigo-700 hover:shadow-md transition"
            >
              HMGS Test {testNo}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
