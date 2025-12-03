// app/components/Navbar.tsx
export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white shadow-sm">TD</div>
          <span className="text-lg font-bold tracking-tight text-gray-900">TestDünya</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-indigo-600">Sınavlar</a>
          <a href="#" className="hover:text-indigo-600">Blog</a>
          <a href="#" className="hover:text-indigo-600">Hakkımızda</a>
        </div>
        <button className="rounded-full bg-gray-900 px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-gray-800">
          Giriş Yap
        </button>
      </div>
    </nav>
  );
};
