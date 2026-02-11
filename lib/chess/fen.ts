export const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const;

export type BoardCell = {
  square: string;
  piece: string | null;
  isLight: boolean;
};

export function parseFenBoard(fen: string): BoardCell[] {
  const placement = fen.split(' ')[0] || '';
  const rows = placement.split('/');
  const cells: BoardCell[] = [];

  rows.forEach((row, rankIndex) => {
    let file = 0;
    row.split('').forEach((char) => {
      if (/\d/.test(char)) {
        const emptyCount = Number(char);
        for (let i = 0; i < emptyCount; i += 1) {
          const square = `${FILES[file]}${8 - rankIndex}`;
          cells.push({ square, piece: null, isLight: (file + rankIndex) % 2 === 0 });
          file += 1;
        }
      } else {
        const square = `${FILES[file]}${8 - rankIndex}`;
        cells.push({ square, piece: char, isLight: (file + rankIndex) % 2 === 0 });
        file += 1;
      }
    });
  });

  return cells;
}

export function pieceToUnicode(piece: string | null) {
  if (!piece) return '';
  const map: Record<string, string> = {
    K: '♔', Q: '♕', R: '♖', B: '♗', N: '♘', P: '♙',
    k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟',
  };
  return map[piece] || '';
}
