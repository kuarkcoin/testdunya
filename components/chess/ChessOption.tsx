'use client';

import type { ChessOption as ChessOptionType } from '../../lib/chess/types';

type ChessOptionProps = {
  option: ChessOptionType;
  disabled?: boolean;
  selected?: boolean;
  isCorrect?: boolean;
  reveal?: boolean;
  onSelect: (optionId: string) => void;
};

export default function ChessOption({ option, disabled, selected, isCorrect, reveal, onSelect }: ChessOptionProps) {
  const stateClass = reveal
    ? isCorrect
      ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-200'
      : selected
        ? 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-200'
        : 'border-slate-200 bg-white text-slate-800'
    : selected
      ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-200'
      : 'border-slate-200 bg-white text-slate-800 hover:border-emerald-400 hover:bg-emerald-50';

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onSelect(option.id)}
      className={`flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-4 text-left text-base font-bold shadow-sm transition-all disabled:cursor-default sm:text-lg ${stateClass}`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-black text-white">
        {option.id}
      </span>
      <span className="min-w-0 break-words">{option.text}</span>
    </button>
  );
}
