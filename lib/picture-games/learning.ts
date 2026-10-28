import { LEVELS, MEMORY_POOLS, PUZZLES } from './content';
import type { Level, PictureId } from './content';

export const STORAGE_KEY = 'testdunya.picture-games.v1';

export function getRoundIds(): string[] {
  return [...PUZZLES.map((puzzle) => puzzle.id), ...LEVELS.map((level) => `memory-${level.id}`)];
}

function validCompleted(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  const allowed = new Set(getRoundIds());
  return [...new Set(value.filter((id): id is string => typeof id === 'string' && allowed.has(id)))];
}

/** Retain only real, unique completions; browser storage is optional and untrusted. */
export function parseProgress(raw: string | null): string[] {
  if (!raw || raw.length > 20000) return [];
  try {
    const value = JSON.parse(raw);
    if (!value || typeof value !== 'object' || value.version !== 1) return [];
    return validCompleted(value.completed);
  } catch {
    return [];
  }
}

export function serializeProgress(ids: string[]): string {
  return JSON.stringify({ version: 1, completed: validCompleted(ids) });
}

/** A local seeded shuffle keeps server and first browser render identical. */
export function shuffled<T>(items: readonly T[], seed: number): T[] {
  const copy = [...items];
  let state = (Number.isFinite(seed) ? seed : 1) >>> 0;
  if (state === 0) state = 0x6d2b79f5;
  for (let index = copy.length - 1; index > 0; index--) {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    const other = (state >>> 0) % (index + 1);
    [copy[index], copy[other]] = [copy[other], copy[index]];
  }
  return copy;
}

export function makeMemoryCards(level: Level, seed: number): { id: string; picture: PictureId }[] {
  const pool = MEMORY_POOLS[level] || MEMORY_POOLS[1];
  return shuffled(pool.flatMap((picture) => [
    { id: `${picture}-a`, picture },
    { id: `${picture}-b`, picture },
  ]), seed);
}
