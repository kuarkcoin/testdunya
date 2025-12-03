import React, { useState } from 'react';
import { Search, ArrowRight, BookOpen, ChevronRight, TrendingUp } from 'lucide-react';

const exams = [
  { key: "yks", name: "YKS", label: "Üniversite Sınavı", category: "academic", color: "bg-blue-50 text-blue-600" },
  { key: "lgs", name: "LGS", label: "Liselere Geçiş", category: "school", color: "bg-orange-50 text-orange-600" },
  { key: "kpss", name: "KPSS", label: "Kamu Personeli", category: "career", color: "bg-emerald-50 text-emerald-600" },
  { key: "ehliyet", name: "Ehliyet", label: "Sürücü Belgesi", category: "life", color: "bg-purple-50 text-purple-600" },
  { key: "ales", name: "ALES", label: "Akademik Kariyer", category: "academic", color: "bg-indigo-50 text-indigo-600" },
  { key: "dgs", name: "DGS", label: "Dikey Geçiş", category: "academic", color: "bg-sky-50 text-sky-600" },
  { key: "yokdil", name: "YÖKDİL", label: "Dil Sınavı", category: "language", color: "bg-rose-50 text-rose-600" },
  { key: "tus", name: "TUS", label: "Tıpta Uzmanlık", category: "health", color: "bg-teal-50 text-teal-600" },
];

export default function ModernHomePage() {
  const [activeTab, setActiveTab] = useState('all');

  // Basit filtreleme mantığı
  const filteredExams = activeTab === 'all' 
    ? exams 
    : exams.filter(e => e.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans">
      
      {/* NAVBAR: Ultra Minimal */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm">TD</div>
            TestDünya
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-indigo-600 transition-colors">Sınavlar</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">İstatistikler</a>
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-indigo-500/20">
              Giriş Yap
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION: Odaklı ve Temiz */}
      <header className="relative pt-20 pb-16 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold mb-6 border border-indigo-100">
          <TrendingUp size={14} /> 2025 Müfredatı Hazır
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Sınavına <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">akıllı çalış</span>, <br className="hidden md:block" />
          geleceğini şansa bırakma.
        </h1>
        
        <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          YKS, LGS, KPSS ve daha fazlası. Karmaşık menüler yok. 
          Hedeflediğin sınavı seç ve binlerce çıkmış soruyu hemen çözmeye başla.
        </p>

        {/* Modern Search Input */}
        <div className="relative max-w-lg mx-auto group">
          <div className="absolute inset-y-0 left-4 flex items-center text-slate-400 group-focus-within:text-indigo-500 transition-colors">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Hangi sınava hazırlanıyorsun? (Örn: TYT)" 
            className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-slate-700 placeholder:text-slate-400"
          />
        </div>
      </header>

      {/* CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        
        {/* Kategoriler (Pill Tabs) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'academic', 'career'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {tab === 'all' ? 'Tümü' : tab === 'academic' ? 'Akademik' : 'Kariyer & Memuriyet'}
            </button>
          ))}
        </div>

        {/* MODERN CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredExams.map((exam) => (
            <div 
              key={exam.key} 
              className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold ${exam.color}`}>
                   {exam.name.substring(0, 1)}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-50 p-2 rounded-full text-slate-400 hover:text-indigo-600">
                  <ArrowRight size={18} />
                </div>
              </div>

              {/* Card Body */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{exam.name}</h3>
                <p className="text-sm text-slate-500 font-medium mb-6">{exam.label}</p>
                
                {/* Stats / Mini Info (Clean) */}
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium border-t border-slate-50 pt-4">
                  <span className="flex items-center gap-1">
                    <BookOpen size={14} /> Testler
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>Çıkmış Sorular</span>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/10 rounded-2xl transition-all pointer-events-none"></div>
            </div>
          ))}

          {/* "More" Card */}
          <div className="flex flex-col items-center justify-center text-center p-6 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50/30 transition-all cursor-pointer group">
            <div className="mb-2 p-3 bg-slate-50 rounded-full group-hover:bg-white transition-colors">
              <ChevronRight size={24} />
            </div>
            <span className="font-medium">Tüm Sınavları Gör</span>
          </div>
        </div>

      </main>

      {/* SIMPLE FOOTER */}
      <footer className="border-t border-slate-100 py-12 text-center text-slate-400 text-sm bg-white">
        <p>© 2025 TestDünya. Öğrenciler için sevgiyle tasarlandı.</p>
      </footer>
    </div>
  );
}
