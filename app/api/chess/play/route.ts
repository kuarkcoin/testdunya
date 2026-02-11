import { NextRequest, NextResponse } from 'next/server';
import { analyzeMultiPV, getFenAfterMove } from '../../../../lib/chess/engine';
import { buildNoAiCoachText, type TopMove } from '../../../../lib/chess/analyze';

function evalForSide(cp: number | null, side: 'w' | 'b') {
  if (cp == null) return null;
  return side === 'w' ? cp : -cp;
}

function toTopMoves(lines: { pvUci: string[]; scoreCp: number | null; scoreMate?: number | null }[], side: 'w' | 'b'): TopMove[] {
  return lines.map((line) => ({
    san: line.pvUci[0] || '??',
    evalCp: evalForSide(line.scoreCp, side),
    pvSanShort: line.pvUci.slice(0, 6),
    scoreMate: line.scoreMate ?? null,
  }));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fen, userMoveUci, difficulty = 5, stockfishCmd } = body || {};

    if (!fen) return NextResponse.json({ error: 'fen gerekli' }, { status: 400 });
    if (!userMoveUci) return NextResponse.json({ error: 'userMoveUci gerekli' }, { status: 400 });

    const movetime = 90 + Math.round((Math.max(1, Math.min(10, difficulty)) - 1) * (210 / 9));

    const sideBefore = (fen.split(' ')[1] || 'w') as 'w' | 'b';
    const preUser = await analyzeMultiPV({ fen, movetimeMs: movetime, multipv: 3, stockfishCmd });
    const topBeforeUser = toTopMoves(preUser.lines, sideBefore);

    const userCoach = buildNoAiCoachText({
      fenBefore: fen,
      sideToMove: sideBefore,
      topMovesSan: topBeforeUser,
      chosenMoveSan: userMoveUci,
      chosenType: 'USER',
    });

    const fenAfterUser = await getFenAfterMove({ fen, uciMove: userMoveUci, stockfishCmd });

    const sideEngine = (fenAfterUser.split(' ')[1] || 'b') as 'w' | 'b';
    const preEngine = await analyzeMultiPV({ fen: fenAfterUser, movetimeMs: movetime, multipv: 3, stockfishCmd });
    const topBeforeEngine = toTopMoves(preEngine.lines, sideEngine);

    const engineMoveUci = preEngine.bestmoveUci;
    const engineCoach = buildNoAiCoachText({
      fenBefore: fenAfterUser,
      sideToMove: sideEngine,
      topMovesSan: topBeforeEngine,
      chosenMoveSan: engineMoveUci,
      chosenType: 'ENGINE',
    });

    const fenAfterEngine = await getFenAfterMove({ fen: fenAfterUser, uciMove: engineMoveUci, stockfishCmd });

    return NextResponse.json({
      fenBefore: fen,
      userMoveUci,
      fenAfterUser,
      fenAfterEngine,
      user: {
        top3: topBeforeUser,
        coachText: userCoach,
      },
      engine: {
        moveUci: engineMoveUci,
        top3: topBeforeEngine,
        coachText: engineCoach,
      },
      movetime,
      note: 'Hamleler UCI gösterimi ile işlenir; SAN dönüşümü bu sürümde yok.',
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Oyun akışı başarısız' },
      { status: 500 },
    );
  }
}
