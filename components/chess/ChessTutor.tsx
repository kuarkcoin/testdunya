'use client';

import { useMemo, useState } from 'react';
import { applyUciMoveToFen, parseFenBoard, pieceToUnicode } from '../../lib/chess/fen';

type TopMove = { san: string; evalCp: number | null; pvSanShort: string[]; scoreMate?: number | null };

type PlayResponse = {
  fenBefore: string;
  userMoveUci: string;
  fenAfterUser: string;
  fenAfterEngine: string;
  user: { top3: TopMove[]; coachText: string };
  engine: { moveUci: string; top3: TopMove[]; coachText: string };
  movetime: number;
  note?: string;
};

type HintResponse = {
  bestmoveUci: string;
  topMovesSan: TopMove[];
  coachText: string;
  note?: string;
};

const START_FEN = 'rn1qkbnr/pppb1ppp/4p3/3p4/3P4/2N1PN2/PPP2PPP/R1BQKB1R w KQkq - 2 5';

function parseUci(uci: string) {
  const clean = (uci || '').trim();
  if (clean.length < 4) return null;
  return {
    from: clean.slice(0, 2),
    to: clean.slice(2, 4),
    promotion: clean.length > 4 ? clean.slice(4, 5) : '',
  };
}

function pieceBelongsToSide(piece: string | null, side: 'w' | 'b') {
  if (!piece) return false;
  const isWhite = piece === piece.toUpperCase();
  return side === 'w' ? isWhite : !isWhite;
}

export default function ChessTutor() {
  const [fen, setFen] = useState(START_FEN);
  const [difficulty, setDifficulty] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');
  const [customMove, setCustomMove] = useState('');
  const [hint, setHint] = useState<HintResponse | null>(null);
  const [playData, setPlayData] = useState<PlayResponse | null>(null);
  const [engineCoachOpen, setEngineCoachOpen] = useState(false);
  const [stockfishCmd, setStockfishCmd] = useState('');

  const board = useMemo(() => parseFenBoard(fen), [fen]);
  const boardMap = useMemo(() => new Map(board.map((cell) => [cell.square, cell.piece])), [board]);
  const sideToMove = (fen.split(' ')[1] || 'w') as 'w' | 'b';
  const cache = useMemo(() => new Map<string, HintResponse>(), []);

  const currentMove = (customMove || `${selectedFrom}${selectedTo}`).trim();

  const top3 = playData?.engine.top3 || hint?.topMovesSan || [];
  const best = top3[0];

  const onSquareClick = (square: string) => {
    if (loading) return;
    setError('');
    setCustomMove('');

    const piece = boardMap.get(square) || null;

    if (!selectedFrom) {
      if (!piece) return;
      if (!pieceBelongsToSide(piece, sideToMove)) {
        setError(`Sıra ${sideToMove === 'w' ? 'Beyaz' : 'Siyah'}'da.`);
        return;
      }
      setSelectedFrom(square);
      setSelectedTo('');
      return;
    }

    if (selectedFrom === square) {
      setSelectedFrom('');
      setSelectedTo('');
      return;
    }

    if (piece && pieceBelongsToSide(piece, sideToMove)) {
      setSelectedFrom(square);
      setSelectedTo('');
      return;
    }

    setSelectedTo(square);
    const autoMove = `${selectedFrom}${square}`;
    void playVsStockfish(autoMove);
  };

  const clearSelection = () => {
    setSelectedFrom('');
    setSelectedTo('');
    setCustomMove('');
  };

  const fetchHint = async () => {
    setLoading(true);
    setError('');
    setPlayData(null);
    setEngineCoachOpen(false);

    const key = `${fen}::${difficulty}::live::${stockfishCmd}`;
    try {
      if (cache.has(key)) {
        setHint(cache.get(key)!);
        return;
      }
      const res = await fetch('/api/chess/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fen, difficulty, chosenType: 'HINT', chosenMoveSan: '', stockfishCmd }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'İpucu alınamadı');
      cache.set(key, json);
      setHint(json);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Bilinmeyen hata');
    } finally {
      setLoading(false);
    }
  };

  const playVsStockfish = async (forcedMove?: string) => {
    if (loading) return;
    const move = (forcedMove || currentMove).trim();
    if (!move || move.length < 4) {
      setError('Önce hamle seçin veya UCI girin (örn: e2e4).');
      return;
    }

    setLoading(true);
    setError('');
    setHint(null);
    setEngineCoachOpen(false);

    const fenBefore = fen;
    try {
      const fenAfterUserLocal = applyUciMoveToFen(fenBefore, move);
      setFen(fenAfterUserLocal);

      const res = await fetch('/api/chess/play', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fen: fenBefore, userMoveUci: move, difficulty, stockfishCmd }),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || 'Hamle işlenemedi');
      }

      setPlayData(json);
      setFen(json.fenAfterEngine);
      clearSelection();
    } catch (e) {
      const base = e instanceof Error ? e.message : 'Bilinmeyen hata';
      setError(`${base}\nMotor hamlesi gelmedi; kullanıcı hamlesi tahtada bırakıldı.`);
    } finally {
      setLoading(false);
    }
  };

  const hintArrow = parseUci(hint?.bestmoveUci || '');
  const engineArrow = parseUci(playData?.engine.moveUci || '');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900 p-4 space-y-4">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <h1 className="text-2xl font-bold">/chess — Stockfish ile Oyna</h1>
              <p className="text-sm text-slate-300">Tahtadan hamle seç, Stockfish cevap versin; sonra “neden bu hamle” açıklamasını iste.</p>
              <p className="text-xs text-cyan-300 mt-1">Sıra: {sideToMove === 'w' ? 'Beyaz' : 'Siyah'} | Kareye tıklayınca hamle otomatik oynatılır.</p>
            </div>
            <button onClick={() => setFen(START_FEN)} className="rounded bg-slate-700 px-3 py-2 text-sm">Pozisyonu Sıfırla</button>
          </div>

          <div className="grid grid-cols-8 border border-slate-700 rounded-lg overflow-hidden max-w-[560px]">
            {board.map((cell) => {
              const isSel = cell.square === selectedFrom || cell.square === selectedTo;
              const isHintFrom = hintArrow?.from === cell.square;
              const isHintTo = hintArrow?.to === cell.square;
              const isEngineFrom = engineArrow?.from === cell.square;
              const isEngineTo = engineArrow?.to === cell.square;

              return (
                <button
                  key={cell.square}
                  onClick={() => onSquareClick(cell.square)}
                  className={`aspect-square relative flex items-center justify-center text-3xl md:text-4xl ${cell.isLight ? 'bg-amber-100 text-slate-900' : 'bg-amber-700 text-white'} ${isSel ? 'ring-2 ring-cyan-400 z-10' : ''}`}
                  title={cell.square}
                >
                  <span className="absolute top-1 left-1 text-[10px] opacity-70">{cell.square}</span>
                  {(isHintFrom || isHintTo) && <span className="absolute inset-0 border-2 border-emerald-400 pointer-events-none" />}
                  {(isEngineFrom || isEngineTo) && <span className="absolute inset-0 border-2 border-indigo-400 pointer-events-none" />}
                  {pieceToUnicode(cell.piece)}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label className="text-sm md:col-span-2">Stockfish binary yolu (opsiyonel)
              <input className="mt-1 w-full rounded bg-slate-800 p-2" value={stockfishCmd} onChange={(e) => setStockfishCmd(e.target.value)} placeholder="/usr/games/stockfish" />
            </label>
            <label className="text-sm">Seçili hamle (UCI)
              <input className="mt-1 w-full rounded bg-slate-800 p-2" value={currentMove} onChange={(e) => setCustomMove(e.target.value)} placeholder="e2e4" />
            </label>
            <label className="text-sm">Zorluk: {difficulty}
              <input type="range" min={1} max={10} value={difficulty} onChange={(e) => setDifficulty(Number(e.target.value))} className="w-full" />
            </label>
          </div>

          <div className="flex flex-wrap gap-2">
            <button disabled={loading} onClick={fetchHint} className="rounded bg-emerald-600 px-4 py-2 font-semibold">Hamle Yardımı / Taktik</button>
            <button
              disabled={loading}
              onClick={() => {
                try {
                  setError('');
                  if (!currentMove) throw new Error('Hamle girin.');
                  setFen((prev) => applyUciMoveToFen(prev, currentMove));
                  clearSelection();
                } catch (err) {
                  setError(err instanceof Error ? err.message : 'Hamle uygulanamadı');
                }
              }}
              className="rounded bg-amber-600 px-4 py-2 font-semibold"
            >
              Taşı Oynat (lokal)
            </button>
            <button disabled={loading} onClick={() => void playVsStockfish()} className="rounded bg-blue-600 px-4 py-2 font-semibold">Hamleyi Oyna (manuel)</button>
            <button disabled={loading} onClick={clearSelection} className="rounded bg-slate-700 px-4 py-2">Seçimi Temizle</button>
            <button
              disabled={!playData}
              onClick={() => setEngineCoachOpen((v) => !v)}
              className="rounded bg-indigo-600 px-4 py-2 font-semibold disabled:opacity-50"
            >
              Stockfish bu hamleyi neden yaptı?
            </button>
          </div>

          <label className="block text-sm">FEN
            <textarea className="mt-1 w-full rounded bg-slate-800 p-2" rows={3} value={fen} onChange={(e) => setFen(e.target.value)} />
          </label>

          {loading && <p>Analiz yapılıyor…</p>}
          {error && <p className="text-red-400">{error}</p>}

          {hint?.coachText && (
            <div className="rounded-xl border border-emerald-700/60 bg-emerald-900/20 p-3">
              <h2 className="font-semibold mb-2">İpucu Açıklaması</h2>
              <pre className="whitespace-pre-wrap text-sm text-slate-200">{hint.coachText}</pre>
            </div>
          )}

          {playData?.user.coachText && (
            <div className="rounded-xl border border-blue-700/60 bg-blue-900/20 p-3">
              <h2 className="font-semibold mb-2">Kullanıcı Hamlesi Değerlendirmesi</h2>
              <pre className="whitespace-pre-wrap text-sm text-slate-200">{playData.user.coachText}</pre>
            </div>
          )}

          {engineCoachOpen && playData?.engine.coachText && (
            <div className="rounded-xl border border-indigo-700/60 bg-indigo-900/20 p-3">
              <h2 className="font-semibold mb-2">Stockfish Hamle Açıklaması</h2>
              <pre className="whitespace-pre-wrap text-sm text-slate-200">{playData.engine.coachText}</pre>
            </div>
          )}

          {playData?.note ? <p className="text-xs text-amber-300">{playData.note}</p> : null}
        </section>

        <aside className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
          <h3 className="text-lg font-semibold mb-3">Top 3</h3>
          {top3.length ? (
            <div className="space-y-3 text-sm">
              {top3.slice(0, 3).map((m, i) => {
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
