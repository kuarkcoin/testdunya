// app/page.tsx
import { EXAMS } from './data/exams';
import { ExamCard } from './components/ExamCard';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      
      <main>
        <Hero />

        <section id="exams" className="py-12 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Popüler Sınavlar
              </h2>
              <span className="text-sm text-gray-500">
                Toplam {EXAMS.length} sınav listeleniyor
              </span>
            </div>

            {/* Grid Yapısı */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {EXAMS.map((exam) => (
                <ExamCard key={exam.key} exam={exam} />
              ))}
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
