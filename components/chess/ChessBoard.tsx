import { fenToBoard } from '../../lib/chess/fenToBoard';

const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export type ChessBoardProps = {
  fen?: string;
  image?: string;
};

export default function ChessBoard({ fen, image }: ChessBoardProps) {
  if (image?.trim()) {
    return (
      <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm">
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
    <div className="mx-auto w-full max-w-[min(92vw,520px)] rounded-2xl bg-emerald-900 p-2 shadow-xl ring-1 ring-emerald-950/10">
      <div className="grid grid-cols-[1.5rem_repeat(8,minmax(0,1fr))] grid-rows-[repeat(8,minmax(0,1fr))_1.5rem] overflow-hidden rounded-xl border-4 border-emerald-950/30 bg-emerald-950/20 sm:grid-cols-[2rem_repeat(8,minmax(0,1fr))] sm:grid-rows-[repeat(8,minmax(0,1fr))_2rem]">
        {board.map((row, rowIndex) => (
          <div key={`rank-${8 - rowIndex}`} className="contents">
            <div className="flex items-center justify-center bg-emerald-950 text-[10px] font-black text-emerald-50 sm:text-xs">
              {8 - rowIndex}
            </div>
            {row.map((square, columnIndex) => {
              const isLight = (rowIndex + columnIndex) % 2 === 0;

              return (
                <div
                  key={`${square.file}${square.rank}`}
                  className={`aspect-square min-w-0 select-none ${isLight ? 'bg-[#f2e8c9]' : 'bg-[#6b9b5f]'} flex items-center justify-center text-[clamp(1.35rem,7vw,3.4rem)] leading-none text-zinc-950`}
                  aria-label={`${square.file}${square.rank}${square.piece ? ` ${square.piece}` : ''}`}
                >
                  <span className="drop-shadow-sm">{square.piece}</span>
                </div>
              );
            })}
          </div>
        ))}
        <div className="bg-emerald-950" aria-hidden="true" />
        {files.map((file) => (
          <div key={file} className="flex items-center justify-center bg-emerald-950 text-[10px] font-black text-emerald-50 sm:text-xs">
            {file}
          </div>
        ))}
      </div>
    </div>
  );
}
