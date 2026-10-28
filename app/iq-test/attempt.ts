/** Local practice state, not a secure or psychometrically validated assessment. */
export const STORAGE_KEY = 'testdunya:visual-reasoning:v1';
export const DURATION_MS = 30 * 60 * 1000;
const VERSION = 1 as const;

export type QuestionSpec = {
  id: string;
  category: string;
  correct: number;
  options: readonly unknown[];
};

export type Attempt = {
  version: typeof VERSION;
  bankVersion: string;
  startedAt: number;
  deadline: number;
  lastSeenAt: number;
  endedAt: number | null;
  endReason: 'submitted' | 'expired' | 'clock-changed' | null;
  currentIndex: number;
  /** Displayed position -> original option index. Never reshuffled on navigation/reload. */
  optionOrders: number[][];
  /** Original option indexes, not display positions. null is unanswered. */
  answers: (number | null)[];
};

export type Counts = { total: number; correct: number; wrong: number; unanswered: number };
export type Summary = Counts & { testScore: number; elapsedSeconds: number; byCategory: Record<string, Counts> };

const isTime = (value: unknown): value is number => Number.isSafeInteger(value) && (value as number) >= 0;
const isChoice = (value: unknown): value is number => Number.isInteger(value) && (value as number) >= 0 && (value as number) < 4;
const isRecord = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object' && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype;

function assertQuestions(questions: readonly QuestionSpec[]) {
  if (!questions.length || new Set(questions.map((q) => q.id)).size !== questions.length ||
    questions.some((q) => !q.id || !q.category || !isChoice(q.correct) || q.options.length !== 4)) {
    throw new Error('Görsel soru bankası geçersiz.');
  }
}

/** Includes content, not just IDs: an edited bank cannot silently reinterpret old answers. */
export function bankVersion(questions: readonly QuestionSpec[]): string {
  const text = JSON.stringify(questions);
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) hash = Math.imul(hash ^ text.charCodeAt(i), 16777619);
  return `visual-2026-1-${(hash >>> 0).toString(16)}`;
}

function shuffled<T>(values: readonly T[], random: () => number): T[] {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const value = random();
    if (!Number.isFinite(value) || value < 0 || value >= 1) throw new Error('Geçersiz rastgele değer.');
    const j = Math.floor(value * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function createAttempt(questions: readonly QuestionSpec[], now: number, random = Math.random): Attempt {
  assertQuestions(questions);
  if (!isTime(now) || !Number.isSafeInteger(now + DURATION_MS)) throw new Error('Geçersiz başlangıç zamanı.');
  // For 30 items the correct display positions are 8/8/7/7, with the extra slots randomized.
  const positions = shuffled([0, 1, 2, 3], random);
  const correctSlots = shuffled(questions.map((_, i) => positions[i % 4]), random);
  const optionOrders = questions.map((q, index) => {
    const distractors = shuffled([0, 1, 2, 3].filter((value) => value !== q.correct), random);
    distractors.splice(correctSlots[index], 0, q.correct);
    return distractors;
  });
  return {
    version: VERSION, bankVersion: bankVersion(questions), startedAt: now,
    deadline: now + DURATION_MS, lastSeenAt: now, endedAt: null, endReason: null,
    currentIndex: 0, optionOrders, answers: questions.map(() => null),
  };
}

/** Call on an interval, focus/visibility changes, and before every user mutation. */
export function tickAttempt(attempt: Attempt, now: number): Attempt {
  if (attempt.endedAt !== null) return attempt;
  if (!isTime(now) || now < attempt.lastSeenAt) {
    return { ...attempt, endedAt: attempt.lastSeenAt, endReason: 'clock-changed' };
  }
  if (now >= attempt.deadline) {
    return { ...attempt, lastSeenAt: attempt.deadline, endedAt: attempt.deadline, endReason: 'expired' };
  }
  return now === attempt.lastSeenAt ? attempt : { ...attempt, lastSeenAt: now };
}

export function answerAttempt(attempt: Attempt, index: number, choice: number | null, now: number): Attempt {
  const checked = tickAttempt(attempt, now);
  if (checked.endedAt !== null || !Number.isInteger(index) || index < 0 || index >= checked.answers.length ||
    (choice !== null && !isChoice(choice))) return checked;
  if (checked.answers[index] === choice) return checked;
  const answers = [...checked.answers];
  answers[index] = choice;
  return { ...checked, answers };
}

export function navigateAttempt(attempt: Attempt, index: number, now: number): Attempt {
  const checked = tickAttempt(attempt, now);
  if (checked.endedAt !== null || !Number.isFinite(index)) return checked;
  const currentIndex = Math.max(0, Math.min(checked.answers.length - 1, Math.trunc(index)));
  return currentIndex === checked.currentIndex ? checked : { ...checked, currentIndex };
}

export function finishAttempt(attempt: Attempt, now: number): Attempt {
  const checked = tickAttempt(attempt, now);
  return checked.endedAt !== null ? checked : { ...checked, endedAt: now, endReason: 'submitted' };
}

export function remainingSeconds(attempt: Attempt, now: number): number {
  if (attempt.endedAt !== null || !isTime(now) || now < attempt.lastSeenAt) return 0;
  return Math.ceil(Math.max(0, attempt.deadline - now) / 1000);
}

const INVALID_SAVE = 'Kaydedilen deneme bu sürümle uyumlu değil veya bozulmuş. Yeni bir deneme başlatın.';
const CLOCK_CHANGE = 'Cihaz saati geriye değiştiği için deneme sonlandırıldı. Güvenilir süre için cihaz saatini düzeltip yeniden başlayın.';

export function restoreAttempt(raw: string | null, questions: readonly QuestionSpec[], now: number): { attempt: Attempt | null; issue: string | null } {
  if (raw === null) return { attempt: null, issue: null };
  try {
    assertQuestions(questions);
    if (typeof raw !== 'string' || raw.length > 100_000 || !isTime(now)) throw new Error();
    const value: unknown = JSON.parse(raw);
    if (!isRecord(value)) throw new Error();
    const fields = ['version', 'bankVersion', 'startedAt', 'deadline', 'lastSeenAt', 'endedAt', 'endReason', 'currentIndex', 'optionOrders', 'answers'];
    if (Object.keys(value).length !== fields.length || fields.some((field) => !Object.hasOwn(value, field))) throw new Error();
    const a = value as unknown as Attempt;
    if (a.version !== VERSION || a.bankVersion !== bankVersion(questions) || !isTime(a.startedAt) || !isTime(a.deadline) ||
      a.deadline !== a.startedAt + DURATION_MS || !isTime(a.lastSeenAt) || a.lastSeenAt < a.startedAt || a.lastSeenAt > a.deadline ||
      !Number.isInteger(a.currentIndex) || a.currentIndex < 0 || a.currentIndex >= questions.length ||
      !Array.isArray(a.optionOrders) || a.optionOrders.length !== questions.length ||
      a.optionOrders.some((order) => !Array.isArray(order) || order.length !== 4 || order.some((choice) => !isChoice(choice)) || new Set(order).size !== 4) ||
      !Array.isArray(a.answers) || a.answers.length !== questions.length || a.answers.some((choice) => choice !== null && !isChoice(choice))) throw new Error();
    const correctSlots = [0, 0, 0, 0];
    questions.forEach((q, i) => correctSlots[a.optionOrders[i].indexOf(q.correct)]++);
    if (Math.max(...correctSlots) - Math.min(...correctSlots) > 1) throw new Error();
    if (a.endedAt === null) {
      if (a.endReason !== null || a.lastSeenAt >= a.deadline) throw new Error();
    } else {
      if (!isTime(a.endedAt) || a.endedAt < a.startedAt || a.endedAt > a.deadline || a.endedAt !== a.lastSeenAt ||
        !['submitted', 'expired', 'clock-changed'].includes(a.endReason as string) ||
        (a.endReason === 'expired' && a.endedAt !== a.deadline) ||
        (a.endReason === 'submitted' && a.endedAt >= a.deadline)) throw new Error();
    }
    const attempt = tickAttempt(a, now);
    return { attempt, issue: attempt.endReason === 'clock-changed' ? CLOCK_CHANGE : null };
  } catch {
    return { attempt: null, issue: INVALID_SAVE };
  }
}

export function summarizeAttempt(questions: readonly QuestionSpec[], attempt: Attempt): Summary {
  const summary: Summary = {
    total: questions.length, correct: 0, wrong: 0, unanswered: 0, testScore: 0,
    elapsedSeconds: Math.floor(Math.max(0, Math.min(attempt.endedAt ?? attempt.lastSeenAt, attempt.deadline) - attempt.startedAt) / 1000),
    byCategory: Object.create(null) as Record<string, Counts>,
  };
  questions.forEach((q, index) => {
    const counts = summary.byCategory[q.category] ??= { total: 0, correct: 0, wrong: 0, unanswered: 0 };
    counts.total++;
    const answer = attempt.answers[index];
    const outcome = answer === null || answer === undefined ? 'unanswered' : answer === q.correct ? 'correct' : 'wrong';
    counts[outcome]++;
    summary[outcome]++;
  });
  // Descriptive percentage of all questions, including blanks; never an IQ conversion.
  summary.testScore = questions.length ? Math.round(summary.correct / questions.length * 100) : 0;
  return summary;
}
