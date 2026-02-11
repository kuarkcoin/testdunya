'use client';

import { useMemo, useState } from 'react';

type MoveLine = {
  multipv: number;
  scoreCp: number | null;
  scoreMate?: number | null;
  pvUci: string[];
};

type AnalyzeResponse = {
  bestmoveUci: string;
  lines: MoveLine[];
  topMovesSan: { san: string; evalCp: number | null; pvSanShort: string[] }[];
  coachText: string;
  note?: string;
};

const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

export default function ChessTutor() {
  const [fen, setFen] = useState(START_FEN);
  const [chosenMove, setChosenMove] = useState('');
  const [difficulty, setDifficulty] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<AnalyzeResponse | null>(null);

  const cache = useMemo(() => new Map<string, AnalyzeResponse>(), []);

  const fetchAnalysis = async (chosenType: 'HINT' | 'USER' | 'ENGINE' | 'PGN') => {
    setLoading(true);
    setError('');
    const cacheKey = `${fen}::${difficulty}::live`;
    try {
      if (cache.has(cacheKey)) {
        setData(cache.get(cacheKey)!);
        return;
      }

      const res = await fetch('/api/chess/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fen,
          chosenMoveSan: chosenMove,
          chosenType,
          difficulty,
          mode: 'live',
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Analiz alınamadı');

      cache.set(cacheKey, json);
      setData(json);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Bilinmeyen hata');
    } finally {
      setLoading(false);
    }
  };

  const best = data?.topMovesSan?.[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900 p-4 space-y-4">
          <h1 className="text-2xl font-bold">/chess Premium Coach (No-AI)</h1>
          <p className="text-sm text-slate-300">Her hamle için Stockfish MultiPV=3 Top 3 continuation gösterimi.</p>

          <label className="block text-sm">FEN
            <textarea className="mt-1 w-full rounded bg-slate-800 p-2" rows={3} value={fen} onChange={(e) => setFen(e.target.value)} />
          </label>

          <label className="block text-sm">Seçilen hamle (SAN/UCI)
            <input className="mt-1 w-full rounded bg-slate-800 p-2" value={chosenMove} onChange={(e) => setChosenMove(e.target.value)} placeholder="e2e4" />
          </label>

          <label className="block text-sm">Zorluk: {difficulty}
            <input type="range" min={1} max={10} value={difficulty} onChange={(e) => setDifficulty(Number(e.target.value))} className="w-full" />
          </label>

          <div className="flex flex-wrap gap-2">
            <button disabled={loading} onClick={() => fetchAnalysis('HINT')} className="rounded bg-emerald-600 px-4 py-2 font-semibold">İpucu Al</button>
            <button disabled={loading} onClick={() => fetchAnalysis('USER')} className="rounded bg-blue-600 px-4 py-2 font-semibold">Kullanıcı Hamlesi Analizi</button>
            <button disabled={loading} onClick={() => fetchAnalysis('PGN')} className="rounded bg-indigo-600 px-4 py-2 font-semibold">PGN Adımı Analizi</button>
          </div>

          {loading && <p>Analiz yapılıyor…</p>}
          {error && <p className="text-red-400">{error}</p>}

          {data && (
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-3">
              <h2 className="font-semibold mb-2">Coach Metni</h2>
              <pre className="whitespace-pre-wrap text-sm text-slate-200">{data.coachText}</pre>
              {data.note ? <p className="text-xs text-amber-300 mt-2">{data.note}</p> : null}
            </div>
          )}
        </section>

        <aside className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
          <h3 className="text-lg font-semibold mb-3">Top 3</h3>
          {data?.topMovesSan?.length ? (
            <div className="space-y-3 text-sm">
              {data.topMovesSan.slice(0, 3).map((m, i) => {
                const delta = i === 0 || !best || m.evalCp == null || best.evalCp == null ? null : best.evalCp - m.evalCp;
                return (
                  <div key={`${m.san}-${i}`} className={`rounded border p-2 ${i === 0 ? 'border-emerald-500' : 'border-slate-700'}`}>
                    <div className="font-semibold">#{i + 1} {m.san}</div>
                    <div>Eval: {m.evalCp ?? 'mate'}</div>
                    {delta != null ? <div>Δ: {delta}cp</div> : null}
                    <div className="text-xs text-slate-400">PV: {m.pvSanShort.join(' ')}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-slate-400 text-sm">Henüz analiz yok.</p>
          )}
        </aside>
      </div>
    </div>
  );
}
