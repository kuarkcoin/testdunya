// app/components/Navbar.tsx
import Link from 'next/link';

// ŞU "default" KELİMESİ EKSİK OLDUĞU İÇİN HATA VERİYORDU
export default function Navbar() {
  return (
    <nav className="bg-white/85 dark:bg-zinc-900/60 border-b border-slate-200 dark:border-zinc-700 py-4 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-black text-2xl tracking-tight text-black dark:text-white">
          Test<span className="text-indigo-600">Dünya</span>
        </Link>
        
        {/* Linkler */}
        <div className="flex gap-6 text-sm font-medium text-slate-600 dark:text-zinc-300">
          <Link href="/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
            Anasayfa
          </Link>
          <Link href="/hakkimizda" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
            Hakkımızda
          </Link>
          <Link href="/iletisim" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors hidden sm:block">
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
}
