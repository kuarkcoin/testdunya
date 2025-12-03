'use client';

import Link from 'next/link';
import { Navbar } from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 pt-10">
        
        {/* 1. SATIR: ÜSTTEKİ 3 BÜYÜK BUTON (Mavi, Mor, Turuncu) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Mavi Buton */}
          <Link href="/test/hizli-test" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6 px-4 text-center shadow-lg transition-transform hover:scale-[1.02] flex flex-col items-center justify-center min-h-[100px]">
            <span className="text-xl font-bold">Hızlı Seviye Testi</span>
            <span className="text-sm opacity-90 mt-1">Karışık 20 Soru</span>
          </Link>

          {/* Mor Buton */}
          <Link href="/test/tyt-mega" className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-6 px-4 text-center shadow-lg transition-transform hover:scale-[1.02] flex flex-col items-center justify-center min-h-[100px]">
            <span className="text-xl font-bold">TYT Mega Test (120Q)</span>
            <span className="text-sm opacity-90 mt-1">Gerçek Sınav Modu</span>
          </Link>

          {/* Turuncu Buton */}
          <Link href="/test/kelime" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-6 px-4 text-center shadow-lg transition-transform hover:scale-[1.02] flex flex-col items-center justify-center min-h-[100px]">
            <span className="text-xl font-bold">En Çok Çıkan Kelimeler</span>
            <span className="text-sm opacity-90 mt-1">YDT & YÖKDİL</span>
          </Link>
        </div>


        {/* 2. BÖLÜM: PEMBE "EXAM PACK" ALANI (Ekran Görüntüsündeki Gibi) */}
        <div className="bg-pink-50 border-2 border-pink-100 rounded-3xl p-6 mb-8 shadow-sm">
          
          {/* Pembe Alan Başlığı */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 border-b border-pink-200 pb-4">
            <h2 className="text-2xl font-black text-pink-500 uppercase tracking-wide">
              TR YKS EXAM PACK
            </h2>
            <span className="bg-white text-pink-500 text-xs font-bold px-3 py-1 rounded-full border border-pink-200 shadow-sm mt-2 sm:mt-0">
              Gerçek Sınav Modu (80 Soru)
            </span>
          </div>

          {/* Test Butonları Grid'i */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Aktif Testler (Koyu Pembe) */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Link key={num} href={`/test/yks-${num}`} className="bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-xl text-center shadow-md transition-transform hover:-translate-y-1">
                <div className="font-bold text-lg">Test {num}</div>
                <div className="text-[10px] uppercase opacity-90 font-semibold">Başla</div>
              </Link>
            ))}

            {/* Kilitli Testler (Soluk/Beyaz) */}
            {[7, 8].map((num) => (
              <div key={num} className="bg-white border border-pink-100 text-pink-200 py-4 rounded-xl text-center cursor-not-allowed">
                <div className="font-bold text-lg">Test {num}</div>
                <div className="text-[10px] uppercase font-semibold">Kilitli</div>
              </div>
            ))}
          </div>
        </div>


        {/* 3. BÖLÜM: ALT RENKLİ BUTONLAR (Yeşil, Mavi, Teal) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          
          <Link href="/test/lgs" className="bg-indigo-600 hover:bg-indigo-700 text-white py-5 px-6 rounded-xl text-center font-bold shadow-md transition-transform hover:scale-[1.02] flex items-center justify-center">
            LGS Deneme (Sözel + Sayısal)
          </Link>

          <Link href="/test/kpss" className="bg-emerald-600 hover:bg-emerald-700 text-white py-5 px-6 rounded-xl text-center font-bold shadow-md transition-transform hover:scale-[1.02] flex items-center justify-center">
            KPSS Genel Yetenek (60Q)
          </Link>

          <Link href="/test/ehliyet" className="bg-teal-600 hover:bg-teal-700 text-white py-5 px-6 rounded-xl text-center font-bold shadow-md transition-transform hover:scale-[1.02] flex items-center justify-center">
            Ehliyet Çıkmış Sorular (50Q)
          </Link>

          <Link href="/test/ales" className="bg-sky-500 hover:bg-sky-600 text-white py-5 px-6 rounded-xl text-center font-bold shadow-md transition-transform hover:scale-[1.02] flex items-center justify-center">
            ALES Sayısal Mantık
          </Link>

          <Link href="/test/dgs" className="bg-cyan-600 hover:bg-cyan-700 text-white py-5 px-6 rounded-xl text-center font-bold shadow-md transition-transform hover:scale-[1.02] flex items-center justify-center">
            DGS Deneme Sınavı
          </Link>

           {/* Boşluk doldurmak için veya ekstra buton */}
           <Link href="/test/yokdil" className="bg-green-600 hover:bg-green-700 text-white py-5 px-6 rounded-xl text-center font-bold shadow-md transition-transform hover:scale-[1.02] flex items-center justify-center">
            YÖKDİL Fen Bilimleri
          </Link>

        </div>


        {/* 4. BÖLÜM: EN ALT KIRMIZI BUTON (Race Mode) */}
        <Link href="/turkiye-geneli" className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-black text-xl py-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.01]">
          🏁 TÜRKİYE GENELİ SIRALAMA MODU
        </Link>

      </main>
    </div>
  );
}
