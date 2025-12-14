// app/components/Navbar.tsx
import Link from 'next/link';

// ŞU "default" KELİMESİ EKSİK OLDUĞU İÇİN HATA VERİYORDU
export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-black text-2xl tracking-tight text-slate-900">
          Test<span className="text-indigo-600">Dünya</span>
        </Link>
        
        {/* Linkler */}
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Anasayfa
          </Link>
          <Link href="/hakkimizda" className="hover:text-indigo-600 transition-colors">
            Hakkımızda
          </Link>
          <Link href="/iletisim" className="hover:text-indigo-600 transition-colors hidden sm:block">
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
}
