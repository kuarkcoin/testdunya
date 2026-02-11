export const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const;

type Side = 'w' | 'b';

type FenState = {
  boardPart: string;
  side: Side;
  castling: string;
  enPassant: string;
  halfmove: string;
  fullmove: string;
};

export type BoardCell = {
  square: string;
  piece: string | null;
  isLight: boolean;
};

function parseFenState(fen: string): FenState {
  const [boardPart, side = 'w', castling = '-', enPassant = '-', halfmove = '0', fullmove = '1'] = fen.trim().split(/\s+/);
  return { boardPart, side: side as Side, castling, enPassant, halfmove, fullmove };
}

function squareToCoords(square: string) {
  const file = FILES.indexOf(square[0] as (typeof FILES)[number]);
  const rank = Number(square[1]);
  if (file < 0 || !rank || rank < 1 || rank > 8) return null;
  return { file, rankIdx: 8 - rank };
}

function boardFromFen(boardPart: string) {
  const rows = boardPart.split('/');
  const board: (string | null)[][] = Array.from({ length: 8 }, () => Array(8).fill(null));

  rows.forEach((row, rankIdx) => {
    let file = 0;
    row.split('').forEach((char) => {
      if (/\d/.test(char)) {
        file += Number(char);
      } else {
        board[rankIdx][file] = char;
        file += 1;
      }
    });
  });

  return board;
}

function boardToFen(board: (string | null)[][]) {
  return board
    .map((row) => {
      let out = '';
      let empty = 0;
      row.forEach((cell) => {
        if (!cell) {
          empty += 1;
        } else {
          if (empty > 0) out += String(empty);
          out += cell;
          empty = 0;
        }
      });
      if (empty > 0) out += String(empty);
      return out;
    })
    .join('/');
}

function updateCastling(castling: string, moveFrom: string, moveTo: string, moving: string, captured: string | null) {
  let c = castling === '-' ? '' : castling;

  if (moving === 'K') c = c.replace(/K|Q/g, '');
  if (moving === 'k') c = c.replace(/k|q/g, '');
  if (moving === 'R' && moveFrom === 'h1') c = c.replace(/K/g, '');
  if (moving === 'R' && moveFrom === 'a1') c = c.replace(/Q/g, '');
  if (moving === 'r' && moveFrom === 'h8') c = c.replace(/k/g, '');
  if (moving === 'r' && moveFrom === 'a8') c = c.replace(/q/g, '');

  if (captured === 'R' && moveTo === 'h1') c = c.replace(/K/g, '');
  if (captured === 'R' && moveTo === 'a1') c = c.replace(/Q/g, '');
  if (captured === 'r' && moveTo === 'h8') c = c.replace(/k/g, '');
  if (captured === 'r' && moveTo === 'a8') c = c.replace(/q/g, '');

  return c || '-';
}

export function applyUciMoveToFen(fen: string, uciMove: string) {
  const move = (uciMove || '').trim();
  if (!/^[a-h][1-8][a-h][1-8][qrbnQRBN]?$/.test(move)) {
    throw new Error('Geçersiz UCI hamle formatı. Örn: e2e4, e7e8q');
  }

  const { boardPart, side, castling, enPassant, halfmove, fullmove } = parseFenState(fen);
  const board = boardFromFen(boardPart);

  const from = move.slice(0, 2);
  const to = move.slice(2, 4);
  const promotion = move.length > 4 ? move[4] : '';

  const fromPos = squareToCoords(from);
  const toPos = squareToCoords(to);
  if (!fromPos || !toPos) throw new Error('Hamle koordinatı çözülemedi.');

  const moving = board[fromPos.rankIdx][fromPos.file];
  if (!moving) throw new Error('Kaynak karede taş yok.');

  const isWhitePiece = moving === moving.toUpperCase();
  if ((side === 'w' && !isWhitePiece) || (side === 'b' && isWhitePiece)) {
    throw new Error('Sıra dışı taş oynatılamaz.');
  }

  let captured = board[toPos.rankIdx][toPos.file];
  board[fromPos.rankIdx][fromPos.file] = null;

  const isPawn = moving.toLowerCase() === 'p';
  const targetRank = 8 - toPos.rankIdx;
  const fromRank = 8 - fromPos.rankIdx;

  if (isPawn && !captured && fromPos.file !== toPos.file && enPassant !== '-' && to === enPassant) {
    const capRankIdx = isWhitePiece ? toPos.rankIdx + 1 : toPos.rankIdx - 1;
    captured = board[capRankIdx][toPos.file];
    board[capRankIdx][toPos.file] = null;
  }

  let placed = moving;
  if (isPawn && promotion) {
    placed = isWhitePiece ? promotion.toUpperCase() : promotion.toLowerCase();
  }
  board[toPos.rankIdx][toPos.file] = placed;

  if (moving === 'K' && from === 'e1' && to === 'g1') {
    board[7][7] = null;
    board[7][5] = 'R';
  }
  if (moving === 'K' && from === 'e1' && to === 'c1') {
    board[7][0] = null;
    board[7][3] = 'R';
  }
  if (moving === 'k' && from === 'e8' && to === 'g8') {
    board[0][7] = null;
    board[0][5] = 'r';
  }
  if (moving === 'k' && from === 'e8' && to === 'c8') {
    board[0][0] = null;
    board[0][3] = 'r';
  }

  const nextSide: Side = side === 'w' ? 'b' : 'w';
  const nextCastling = updateCastling(castling, from, to, moving, captured);

  let nextEnPassant = '-';
  if (isPawn && Math.abs(fromRank - targetRank) === 2) {
    const epRank = isWhitePiece ? fromRank + 1 : fromRank - 1;
    nextEnPassant = `${from[0]}${epRank}`;
  }

  const resetHalfmove = isPawn || Boolean(captured);
  const nextHalfmove = resetHalfmove ? '0' : String(Math.max(0, Number(halfmove || '0')) + 1);
  const nextFullmove = side === 'b' ? String(Math.max(1, Number(fullmove || '1')) + 1) : fullmove;

  return `${boardToFen(board)} ${nextSide} ${nextCastling} ${nextEnPassant} ${nextHalfmove} ${nextFullmove}`;
}

export function parseFenBoard(fen: string): BoardCell[] {
  const boardPart = parseFenState(fen).boardPart;
  const rows = boardPart.split('/');
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
