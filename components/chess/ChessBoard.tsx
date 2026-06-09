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

export function ChessPieceSvg({ piece }: ChessPieceSvgProps) {
  const isWhite = piece.startsWith('w');
  const kind = piece[1];
  const fill = isWhite ? '#fff8e7' : '#111111';
  const stroke = isWhite ? '#151515' : '#050505';
  const accent = isWhite ? '#151515' : '#111111';
  const knightDetail = isWhite ? accent : '#fff8e7';

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
        <g
          transform="translate(7 5) scale(1.9)"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        >
          {/* Knight silhouette adapted from Cburnett's open-source SVG chess pieces (3-clause BSD license option). */}
          <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill={fill} stroke={stroke} strokeWidth="1.8" />
          <path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.04-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.99-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.99 2.5-3c1 0 1 3 1 3" fill={fill} stroke={stroke} strokeWidth="1.8" />
          <path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z" fill={knightDetail} stroke={knightDetail} strokeWidth="0.8" />
          <path d="M15 15.5a.5 1.5 0 1 1-1 0 .5 1.5 0 1 1 1 0z" fill={knightDetail} stroke={knightDetail} strokeWidth="0.8" transform="rotate(30 14.5 15.5)" />
          <path d="M24.55 10.4l-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75s3.25 10.31 2.75 20.25l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34s-5.79-6.64-9.19-7.16z" fill={knightDetail} stroke="none" />
        </g>
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
