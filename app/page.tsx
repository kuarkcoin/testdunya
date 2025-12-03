'use client';

import Link from 'next/link';
import { Navbar } from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 pt-10">
        
        {/* ÜST 3 BÜYÜK BUTON */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Link href="/test/hizli-test" className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-8 px-6 text-center shadow-lg transition-all hover:shadow-xl flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">Hızlı Seviye Testi</span>
            <span className="text-sm opacity-90 mt-2">Karışık 20 Soru</span>
          </Link>

          <Link href="/test/tyt-mega" className="bg-purple-600 hover:bg-purple-700 text-white rounded-2xl py-8 px-6 text-center shadow-lg transition-all hover:shadow-xl flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">TYT Mega Test (120S)</span>
            <span className="text-sm opacity-90 mt-2">Gerçek Sınav Modu</span>
          </Link>

          <Link href="/test/kelime" className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl py-8 px-6 text-center shadow-lg transition-all hover:shadow-xl flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">En Çok Çıkan Kelimeler</span>
            <span className="text-sm opacity-90 mt-2">YDT & YÖKDİL</span>
          </Link>
        </div>

        {/* PEMBE EXAM PACK ALANI */}
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200 rounded-3xl p-8 mb-6 shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-pink-600 uppercase tracking-wider">
              TR YKS EXAM PACK
            </h2>
            <span className="bg-white text-pink-600 text-xs font-bold px-4 py-2 rounded-full border-2 border-pink-300 shadow-sm mt-2 sm:mt-0">
              Gerçek Sınav Modu (80 Soru)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Link key={num} href={`/test/yks-${num}`} className="bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-6 rounded-2xl text-center shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="font-bold text-xl mb-1">Test {num}</div>
                <div className="text-xs uppercase opacity-90 font-semibold">Başla</div>
              </Link>
            ))}

            {[7, 8].map((num) => (
              <div key={num} className="bg-white border-2 border-pink-200 text-pink-300 py-6 rounded-2xl text-center cursor-not-allowed opacity-60">
                <div className="font-bold text-xl mb-1">Test {num}</div>
                <div className="text-xs uppercase font-semibold">Kilitli</div>
              </div>
            ))}
          </div>
        </div>

        {/* TYT TÜRKÇE PACK */}
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-200 rounded-3xl p-8 mb-6 shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-indigo-600 uppercase tracking-wider">
              TYT TÜRKÇE PACK
            </h2>
            <span className="bg-white text-indigo-600 text-xs font-bold px-4 py-2 rounded-full border-2 border-indigo-300 shadow-sm mt-2 sm:mt-0">
              40 Soru
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <Link key={num} href={`/test/tyt-turce-${num}`} className="bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white py-6 rounded-2xl text-center shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="font-bold text-xl mb-1">Test {num}</div>
                <div className="text-xs uppercase opacity-90 font-semibold">Başla</div>
              </Link>
            ))}
          </div>
        </div>

        {/* TYT MATEMATİK PACK */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-3xl p-8 mb-6 shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-emerald-600 uppercase tracking-wider">
              TYT MATEMATİK PACK
            </h2>
            <span className="bg-white text-emerald-600 text-xs font-bold px-4 py-2 rounded-full border-2 border-emerald-300 shadow-sm mt-2 sm:mt-0">
              40 Soru
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <Link key={num} href={`/test/tyt-matematik-${num}`} className="bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-6 rounded-2xl text-center shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="font-bold text-xl mb-1">Test {num}</div>
                <div className="text-xs uppercase opacity-90 font-semibold">Başla</div>
              </Link>
            ))}
          </div>
        </div>

        {/* LGS PACK */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200 rounded-3xl p-8 mb-6 shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-teal-600 uppercase tracking-wider">
              LGS DENEME PACK
            </h2>
            <span className="bg-white text-teal-600 text-xs font-bold px-4 py-2 rounded-full border-2 border-teal-300 shadow-sm mt-2 sm:mt-0">
              Tam Deneme
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <Link key={num} href={`/test/lgs-${num}`} className="bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-6 rounded-2xl text-center shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="font-bold text-xl mb-1">Test {num}</div>
                <div className="text-xs uppercase opacity-90 font-semibold">Başla</div>
              </Link>
            ))}
          </div>
        </div>

        {/* KPSS PACK */}
        <div className="bg-gradient-to-br from-sky-50 to-sky-100 border-2 border-sky-200 rounded-3xl p-8 mb-6 shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-sky-600 uppercase tracking-wider">
              KPSS GENEL YETENEK PACK
            </h2>
            <span className="bg-white text-sky-600 text-xs font-bold px-4 py-2 rounded-full border-2 border-sky-300 shadow-sm mt-2 sm:mt-0">
              60 Soru
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Link key={num} href={`/test/kpss-${num}`} className="bg-gradient-to-br from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white py-6 rounded-2xl text-center shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="font-bold text-xl mb-1">Test {num}</div>
                <div className="text-xs uppercase opacity-90 font-semibold">Başla</div>
              </Link>
            ))}
          </div>
        </div>

        {/* ALES PACK */}
        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-200 rounded-3xl p-8 mb-6 shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-cyan-600 uppercase tracking-wider">
              ALES SAYISAL MANTIK PACK
            </h2>
            <span className="bg-white text-cyan-600 text-xs font-bold px-4 py-2 rounded-full border-2 border-cyan-300 shadow-sm mt-2 sm:mt-0">
              50 Soru
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <Link key={num} href={`/test/ales-${num}`} className="bg-gradient-to-br from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white py-6 rounded-2xl text-center shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="font-bold text-xl mb-1">Test {num}</div>
                <div className="text-xs uppercase opacity-90 font-semibold">Başla</div>
              </Link>
            ))}
          </div>
        </div>

        {/* YÖKDİL PACK */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 mb-6 shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-green-600 uppercase tracking-wider">
              YÖKDİL FEN BİLİMLERİ PACK
            </h2>
            <span className="bg-white text-green-600 text-xs font-bold px-4 py-2 rounded-full border-2 border-green-300 shadow-sm mt-2 sm:mt-0">
              80 Soru
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <Link key={num} href={`/test/yokdil-${num}`} className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6 rounded-2xl text-center shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="font-bold text-xl mb-1">Test {num}</div>
                <div className="text-xs uppercase opacity-90 font-semibold">Başla</div>
              </Link>
            ))}
          </div>
        </div>

        {/* EN ALT KIRMIZI BUTON */}
        <Link href="/turkiye-geneli" className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-center font-black text-xl py-8 rounded-2xl shadow-xl transition-all hover:shadow-2xl">
          🏁 TÜRKİYE GENELİ SIRALAMA MODU
        </Link>

      </main>
    </div>
  );
