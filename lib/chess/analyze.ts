export type ChosenType = 'HINT' | 'ENGINE' | 'PGN' | 'USER';

export type TopMove = {
  san: string;
  evalCp: number | null;
  pvSanShort: string[];
  scoreMate?: number | null;
};

export function classifyDelta(deltaCp: number) {
  const abs = Math.abs(deltaCp);
  if (abs <= 25) return 'çok yakın';
  if (abs <= 80) return 'küçük avantaj farkı';
  if (abs <= 180) return 'ciddi fark (hata riski)';
  return 'büyük fark (blunder/kaçan taktik)';
}

function buildPlanTags(san: string, pvSanShort: string[]): string[] {
  const joined = `${san} ${pvSanShort.join(' ')}`;
  const tags: string[] = [];

  if (/^[a-z]/.test(san) || /x/.test(san)) tags.push('center');
  if (/^[NBRQ]/.test(san)) tags.push('development');
  if (/O-O/.test(san)) tags.push('king safety');
  if (/x|=Q|=R|=B|=N/.test(joined)) tags.push('material');
  if (/[+#]/.test(joined) || /Qh|Qb|Qg/.test(joined)) tags.push('threat');

  return tags.length ? tags : ['genel fikir'];
}

export function buildNoAiCoachText({
  fenBefore,
  sideToMove,
  topMovesSan,
  chosenMoveSan,
  chosenType,
}: {
  fenBefore: string;
  sideToMove: 'w' | 'b';
  topMovesSan: TopMove[];
  chosenMoveSan: string;
  chosenType: ChosenType;
}) {
  const best = topMovesSan[0];
  const second = topMovesSan[1];
  const third = topMovesSan[2];
  const chosen = topMovesSan.find((m) => m.san === chosenMoveSan);

  const prefix = `[${chosenType}] ${sideToMove === 'w' ? 'Beyaz' : 'Siyah'} oynar.`;
  const whyBest = best
    ? `Seçilen hamle neden #1? ${best.san} (${best.evalCp ?? 'mate'}): plan etiketleri ${buildPlanTags(best.san, best.pvSanShort).join(', ')}.`
    : 'Seçilen hamle neden #1? Motor satırı bulunamadı.';

  const compare = (label: string, move?: TopMove) => {
    if (!best || !move) return `${label}: veri yok.`;
    if (best.scoreMate || move.scoreMate) {
      return `${label}: Mat tehdidi farkı var. ${best.san} hattı zorlayıcı mat fikri içeriyor.`;
    }
    if (best.evalCp == null || move.evalCp == null) {
      return `${label}: eval karşılaştırması yapılamadı.`;
    }
    const delta = best.evalCp - move.evalCp;
    const cls = classifyDelta(delta);
    return `${label}: ${move.san} yerine ${best.san} tercih edilir (Δ${delta}cp, ${cls}). Risk: ${buildPlanTags(move.san, move.pvSanShort).join(', ')}.`;
  };

  const chosenRank = topMovesSan.findIndex((m) => m.san === chosenMoveSan) + 1;
  const rankText = chosenRank
    ? `Seçilen hamle Top 3 içinde #${chosenRank}.`
    : `Seçtiğin hamle Top 3'te değil. FEN: ${fenBefore}`;

  return [
    prefix,
    rankText,
    whyBest,
    compare('Neden #2 değil', second),
    compare('Neden #3 değil', third),
  ].join('\n');
}
