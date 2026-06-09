import { fenToBoard } from '../../lib/chess/fenToBoard';
import type { ChessPieceCode } from '../../lib/chess/types';

const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const pieceNames: Record<ChessPieceCode, string> = {
  wp: 'white pawn',
  wn: 'white knight',
  wb: 'white bishop',
  wr: 'white rook',
  wq: 'white queen',
  wk: 'white king',
  bp: 'black pawn',
  bn: 'black knight',
  bb: 'black bishop',
  br: 'black rook',
  bq: 'black queen',
  bk: 'black king',
};

export type ChessBoardProps = {
  fen?: string;
  image?: string;
};

type ChessPieceSvgProps = {
  piece: ChessPieceCode;
};

function ChessPieceSvg({ piece }: ChessPieceSvgProps) {
  const isWhite = piece.startsWith('w');
  const kind = piece[1];
  const fill = isWhite ? '#fff8e7' : '#111111';
  const stroke = isWhite ? '#151515' : '#050505';
  const accent = isWhite ? '#151515' : '#111111';

  const commonProps = {
    fill,
    stroke,
    strokeWidth: 3,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    vectorEffect: 'non-scaling-stroke' as const,
  };

  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label={pieceNames[piece]}
      className="block h-[82%] w-[82%] max-w-full flex-none select-none opacity-100"
      style={{ filter: 'none', mixBlendMode: 'normal', opacity: 1 }}
      focusable="false"
    >
      {kind === 'p' && (
        <>
          <circle cx="50" cy="28" r="13" {...commonProps} />
          <path d="M38 43h24l7 27H31z" {...commonProps} />
          <path d="M27 70h46v10H27zM20 80h60v9H20z" {...commonProps} />
        </>
      )}

      {kind === 'n' && (
        <>
          <path d="M27 80h51v9H22v-9h5z" {...commonProps} />
          <path d="M31 79c4-17 12-27 27-38l-11-9 8-18 22 17c8 6 8 16 2 25L62 80z" {...commonProps} />
          <path d="M47 32l-13 6 10-20z" {...commonProps} />
          <circle cx="62" cy="39" r="2.8" fill={accent} stroke="none" />
          <path d="M72 51c-7 2-13 2-19-1" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        </>
      )}

      {kind === 'b' && (
        <>
          <circle cx="50" cy="18" r="7" {...commonProps} />
          <path d="M38 31c0-8 24-8 24 0 0 14-8 22-12 30-4-8-12-16-12-30z" {...commonProps} />
          <path d="M33 64h34l6 16H27z" {...commonProps} />
          <path d="M20 80h60v9H20z" {...commonProps} />
          <path d="M57 34 43 50" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        </>
      )}

      {kind === 'r' && (
        <>
          <path d="M27 16h11v9h9v-9h11v9h9v-9h11v23H27z" {...commonProps} />
          <path d="M34 39h32v29H34z" {...commonProps} />
          <path d="M27 68h46v12H27zM20 80h60v9H20z" {...commonProps} />
        </>
      )}

      {kind === 'q' && (
        <>
          <circle cx="24" cy="24" r="6" {...commonProps} />
          <circle cx="40" cy="15" r="6" {...commonProps} />
          <circle cx="60" cy="15" r="6" {...commonProps} />
          <circle cx="76" cy="24" r="6" {...commonProps} />
          <path d="M24 31 34 62h32l10-31-18 20-8-28-8 28z" {...commonProps} />
          <path d="M31 64h38v14H31zM22 78h56v11H22z" {...commonProps} />
        </>
      )}

      {kind === 'k' && (
        <>
          <path d="M50 10v24M39 21h22" fill="none" stroke={stroke} strokeWidth="6" strokeLinecap="round" />
          <path d="M38 38c0-8 24-8 24 0 0 9-5 15-12 22-7-7-12-13-12-22z" {...commonProps} />
          <path d="M32 61h36l6 17H26z" {...commonProps} />
          <path d="M20 78h60v11H20z" {...commonProps} />
        </>
      )}
    </svg>
  );
}

export default function ChessBoard({ fen, image }: ChessBoardProps) {
  if (image?.trim()) {
    return (
      <div className="overflow-hidden rounded-2xl border border-stone-300 bg-white shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt="Chess position"
          className="h-auto w-full object-contain"
        />
      </div>
    );
  }

  const board = fenToBoard(fen);

  if (!board.length) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-[min(92vw,520px)] rounded-xl bg-[#6f5438] p-2 shadow-xl ring-1 ring-stone-900/20">
      <div className="grid grid-cols-[1.5rem_repeat(8,minmax(0,1fr))] grid-rows-[repeat(8,minmax(0,1fr))_1.5rem] overflow-hidden rounded-lg border border-[#5d432b] bg-[#5d432b] sm:grid-cols-[2rem_repeat(8,minmax(0,1fr))] sm:grid-rows-[repeat(8,minmax(0,1fr))_2rem]">
        {board.map((row, rowIndex) => (
          <div key={`rank-${8 - rowIndex}`} className="contents">
            <div className="flex items-center justify-center bg-[#6f5438] text-[10px] font-bold text-[#f3e3c8] sm:text-xs">
              {8 - rowIndex}
            </div>
            {row.map((square, columnIndex) => {
              const isLight = (rowIndex + columnIndex) % 2 === 0;

              return (
                <div
                  key={`${square.file}${square.rank}`}
                  className={`relative flex aspect-square min-w-0 select-none items-center justify-center ${isLight ? 'bg-[#f0d9b5]' : 'bg-[#b58863]'}`}
                  aria-label={`${square.file}${square.rank}${square.piece ? ` ${pieceNames[square.piece]}` : ''}`}
                >
                  {square.piece && <ChessPieceSvg piece={square.piece} />}
                </div>
              );
            })}
          </div>
        ))}
        <div className="bg-[#6f5438]" aria-hidden="true" />
        {files.map((file) => (
          <div key={file} className="flex items-center justify-center bg-[#6f5438] text-[10px] font-bold text-[#f3e3c8] sm:text-xs">
            {file}
          </div>
        ))}
      </div>
    </div>
  );
}
