import { READING_GROUPS } from './content';

export type ExerciseKind = 'letter' | 'syllable' | 'word' | 'story';
export const READING_STORAGE_KEY = 'testdunya.reading.v1';

export function getExerciseId(kind: ExerciseKind, groupId: string, item: string): string {
  return [kind, groupId, item].join(':');
}

export function getExerciseIds(): string[] {
  return READING_GROUPS.flatMap((group) => [
    ...group.letters.map((letter) => getExerciseId('letter', group.id, letter)),
    ...group.syllables.map((syllable) => getExerciseId('syllable', group.id, syllable)),
    ...group.words.map((word) => getExerciseId('word', group.id, word.text)),
    ...group.stories.map((story) => getExerciseId('story', group.id, story.id)),
  ]);
}

function validProgress(ids: unknown): string[] {
  if (!Array.isArray(ids)) return [];
  const allowed = new Set(getExerciseIds());
  return [...new Set(ids.filter((id): id is string => typeof id === 'string' && allowed.has(id)))];
}

/** Completed practice activities, not a pronunciation score or a mastery claim. */
export function parseProgress(raw: string | null): string[] {
  if (!raw || raw.length > 50000) return [];
  try {
    const data = JSON.parse(raw);
    if (!data || data.version !== 1) return [];
    return validProgress(data.completed);
  } catch {
    return [];
  }
}

export function serializeProgress(ids: string[]): string {
  return JSON.stringify({ version: 1, completed: validProgress(ids) });
}

/** Display support for regular Turkish words; does not synthesize isolated sounds. */
export function splitTurkishSyllables(word: string): string[] {
  if (!word || !/^[a-zçğıöşüİ]+$/iu.test(word)) return word ? [word] : [];
  const letters = Array.from(word);
  const vowels = letters.map((letter, index) =>
    'aeıioöuü'.includes(letter.toLocaleLowerCase('tr-TR')) ? index : -1
  ).filter((index) => index >= 0);
  if (vowels.length < 2) return [word];
  const syllables: string[] = [];
  let start = 0;
  for (let index = 1; index < vowels.length; index += 1) {
    const previous = vowels[index - 1];
    const next = vowels[index];
    const boundary = next - previous === 1 ? next : next - 1;
    syllables.push(letters.slice(start, boundary).join(''));
    start = boundary;
  }
  syllables.push(letters.slice(start).join(''));
  return syllables;
}

/** Stable ordering avoids hydration changes and preserves duplicate tiles. */
export function shuffledItems<T>(items: readonly T[], seed: number): T[] {
  const result = [...items];
  let state = (seed >>> 0) || 1;
  for (let index = result.length - 1; index > 0; index -= 1) {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    const other = (state >>> 0) % (index + 1);
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}
