'use client';

import { useEffect } from 'react';

type TimerProps = {
  durationSeconds: number;
  remainingSeconds: number;
  isRunning: boolean;
  onTick: (seconds: number) => void;
  onExpire: () => void;
};

function formatTime(seconds: number) {
  const safeSeconds = Math.max(0, seconds);
  const minutes = Math.floor(safeSeconds / 60).toString().padStart(2, '0');
  const remainder = (safeSeconds % 60).toString().padStart(2, '0');

  return `${minutes}:${remainder}`;
}

export default function Timer({ durationSeconds, remainingSeconds, isRunning, onTick, onExpire }: TimerProps) {
  const isDanger = remainingSeconds <= 30;
  const progress = durationSeconds > 0 ? (remainingSeconds / durationSeconds) * 100 : 0;

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    if (remainingSeconds <= 0) {
      onExpire();
      return;
    }

    const interval = window.setInterval(() => {
      onTick(Math.max(remainingSeconds - 1, 0));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isRunning, onExpire, onTick, remainingSeconds]);

  return (
    <div className={`rounded-2xl border p-4 shadow-sm ${isDanger ? 'border-rose-300 bg-rose-50 text-rose-700' : 'border-emerald-200 bg-white text-emerald-800'}`}>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-sm font-black uppercase tracking-wide">Time</span>
        <span className={`font-mono text-2xl font-black ${isDanger ? 'animate-pulse' : ''}`}>{formatTime(remainingSeconds)}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full transition-all ${isDanger ? 'bg-rose-500' : 'bg-emerald-500'}`}
          style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
        />
      </div>
    </div>
  );
}
