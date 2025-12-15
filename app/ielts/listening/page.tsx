'use client';

import Link from 'next/link';

export default function ListeningMenu() {
  const tests = [
    { id: 'ielts-listening', title: 'Test 1: Accommodation (Part 1)', level: 'Easy' },
    { id: 'ielts-listening-2', title: 'Test 2: New Gym (Part 2)', level: 'Medium' },
    { id: 'ielts-listening-3', title: 'Test 3: Museum Tour (Part 2)', level: 'Medium' },
    { id: 'ielts-listening-4', title: 'Test 4: Zoo Volunteering (Part 2)', level: 'Easy' },
    { id: 'ielts-listening-5', title: 'Test 5: Business Project (Part 3)', level: 'Hard' },
    { id: 'ielts-listening-7', title: 'Test 7: Research Proposal (Part 3)', level: 'Hard' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-sm font-bold text-slate-400 hover:text-indigo-600 mb-6 inline-block">← Ana Sayfa</Link>
        <h1 className="text-3xl font-black text-slate-800 mb-2">IELTS Listening Library</h1>
        <p className="text-slate-500 mb-8">Select a practice test to start.</p>

        <div className="space-y-4">
          {tests.map((t) => (
            <Link key={t.id} href={`/test/${t.id}`} className="block bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-indigo-600 transition-colors">{t.title}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-md mt-2 inline-block ${t.level === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {t.level}
                  </span>
                </div>
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  ▶
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
