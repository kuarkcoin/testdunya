import type { ChessSquare } from './types';

const pieceMap: Record<string, string> = {
  K: '♔',
  Q: '♕',
  R: '♖',
  B: '♗',
  N: '♘',
  P: '♙',
  k: '♚',
  q: '♛',
  r: '♜',
  b: '♝',
  n: '♞',
  p: '♟',
};

const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export function fenToBoard(fen?: string): ChessSquare[][] {
  if (!fen?.trim()) {
    return [];
  }

  const placement = fen.trim().split(' ')[0];
  const ranks = placement.split('/');

  if (ranks.length !== 8) {
    return [];
  }

  const board = ranks.map((rankValue, rankIndex) => {
    const row: ChessSquare[] = [];

    for (const char of rankValue) {
      if (/^[1-8]$/.test(char)) {
        const emptySquares = Number(char);
        for (let index = 0; index < emptySquares; index += 1) {
          row.push({ piece: '', file: files[row.length], rank: String(8 - rankIndex) });
        }
      } else if (pieceMap[char]) {
        row.push({ piece: pieceMap[char], file: files[row.length], rank: String(8 - rankIndex) });
      } else {
        return [];
      }
    }

    if (row.length !== 8) {
      return [];
    }

    return row;
  });

  if (board.some((row) => row.length !== 8)) {
    return [];
  }

  return board;
}
