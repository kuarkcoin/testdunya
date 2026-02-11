import { NextRequest, NextResponse } from 'next/server';
import { analyzeMultiPV } from '../../../../lib/chess/engine';
import { buildNoAiCoachText, type TopMove } from '../../../../lib/chess/analyze';

function evalForSide(cp: number | null, side: 'w' | 'b') {
  if (cp == null) return null;
  return side === 'w' ? cp : -cp;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fen,
      chosenMoveSan,
      chosenType = 'HINT',
      movetimeMs = 180,
      difficulty = 5,
      mode = 'live',
      stockfishCmd,
    } = body || {};

    if (!fen) {
      return NextResponse.json({ error: 'fen gerekli' }, { status: 400 });
    }

    const pgnMode = mode === 'pgn';
    const mappedMovetime = pgnMode ? 60 + Math.round((Math.max(1, Math.min(10, difficulty)) - 1) * (240 / 9)) : movetimeMs;

    const analysis = await analyzeMultiPV({ fen, movetimeMs: mappedMovetime, multipv: 3, stockfishCmd });
    const sideToMove = (fen.split(' ')[1] || 'w') as 'w' | 'b';

    const topMovesSan: TopMove[] = analysis.lines.map((line) => {
      const lead = line.pvUci[0] || '??';
      return {
        san: lead,
        evalCp: evalForSide(line.scoreCp, sideToMove),
        pvSanShort: line.pvUci.slice(0, 6),
        scoreMate: line.scoreMate ?? null,
      };
    });

    const coachText = buildNoAiCoachText({
      fenBefore: fen,
      sideToMove,
      topMovesSan,
      chosenMoveSan: chosenMoveSan || topMovesSan[0]?.san || '',
      chosenType,
    });

    return NextResponse.json({
      bestmoveUci: analysis.bestmoveUci,
      lines: analysis.lines,
      topMovesSan,
      coachText,
      mappedMovetime,
      note: 'SAN dönüşümü chess.js bulunmadığı için geçici olarak UCI gösterim kullanıldı.',
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Analiz başarısız' },
      { status: 500 },
    );
  }
}
