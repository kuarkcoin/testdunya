import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center text-center p-4">
      <div>
        <div className="text-9xl font-black text-indigo-100 select-none">404</div>
        <h1 className="text-3xl font-bold text-slate-800 -mt-8 mb-4">Sayfa Bulunamadı</h1>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          Aradığınız test veya sayfa silinmiş, taşınmış veya hiç var olmamış olabilir.
        </p>
        <Link 
          href="/" 
          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-slate-800 transition"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
