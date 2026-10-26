/** Shared quiz data and client-safe normalization for saved personal tests. */
export interface Choice {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  prompt: string;
  questionPrompt?: string;
  paragraph?: string;
  paragraphTitle?: string;
  imageUrl?: string;
  choices: Choice[];
  answer: string;
  explanation?: string;
}

export interface TestCatalogEntry {
  id: string;
  canonicalId: string;
  title: string;
  description: string;
  questionCount: number;
}

export interface TestData extends TestCatalogEntry {
  questions: Question[];
  audioSrc: string | null;
}

type RecordValue = Record<string, unknown>;

function isRecord(value: unknown): value is RecordValue {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function text(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function choiceText(value: unknown): string {
  return typeof value === 'number' && Number.isFinite(value) ? String(value) : text(value);
}

function normalizeChoices(item: RecordValue): Choice[] {
  if (Array.isArray(item.choices)) {
    return item.choices.map((choice, index) => ({
      id: isRecord(choice) ? choiceText(choice.id) || String.fromCharCode(65 + index) : '',
      text: isRecord(choice) ? choiceText(choice.text) : '',
    }));
  }
  if (Array.isArray(item.options)) {
    return item.options.map((option, index) => ({ id: String.fromCharCode(65 + index), text: choiceText(option) }));
  }
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const lastIndex = letters.reduce((last, letter, index) => item[letter] !== undefined ? index : last, -1);
  // Keep original positions: dropping an empty choice would change numeric answers.
  return letters.slice(0, lastIndex + 1).map((id) => ({ id, text: choiceText(item[id]) }));
}

function normalizeAnswer(raw: unknown, choices: Choice[]): string {
  if (typeof raw === 'number') return Number.isInteger(raw) ? choices[raw]?.id || '' : '';
  const value = text(raw);
  if (!value) return '';
  const idMatch = choices.find((choice) => choice.id === value || choice.id === value.toUpperCase());
  if (idMatch) return idMatch.id;
  // Legacy files use a single digit as a zero-based index, but "20" may be option text.
  if (/^\d$/.test(value)) return choices[Number(value)]?.id || '';
  return choices.find((choice) => choice.text === value)?.id || '';
}

function findExplanation(item: RecordValue): string {
  for (const key of ['Açıklama', 'explanation', 'Explanation', 'aciklama', 'solution', 'Solution', 'cozum', 'Çözüm']) {
    const value = text(item[key]);
    if (value) return value;
  }
  return '';
}

function splitParagraphPrompt(prompt: string): { paragraph?: string; questionPrompt: string } {
  const parts = prompt.split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);
  return parts.length < 2
    ? { questionPrompt: prompt }
    : { paragraph: parts.slice(0, -1).join('\n\n'), questionPrompt: parts[parts.length - 1] };
}

export function isPersonalTestId(id: string): boolean {
  return /^gy-karma-\d{1,20}$/.test(id);
}

export function getExamDuration(testId: string, questionCount: number): number {
  if (testId.includes('reading')) return 1200;
  if (testId.includes('listening')) return 1800;
  return Math.max(600, questionCount * 60);
}

export function normalizeTestQuestions(
  raw: unknown,
  testId: string,
  splitParagraphs = false,
): { questions: Question[]; audioSrc: string | null } {
  const questions: Question[] = [];
  const usedIds = new Set<string>();
  const list = Array.isArray(raw) ? raw : isRecord(raw) && Array.isArray(raw.questions) ? raw.questions : [];
  const passages = (testId.includes('reading') || testId.includes('listening'))
    && list.some((item) => isRecord(item) && item.passageId !== undefined && Array.isArray(item.questions));
  let audioSrc: string | null = null;

  function append(value: unknown, fallbackId: string, passage?: RecordValue) {
    if (!isRecord(value)) return;
    const prompt = text(value.prompt) || text(value.question) || text(value.soru);
    const choices = normalizeChoices(value);
    if (!prompt || choices.length < 2 || choices.some((choice) => !choice.id || !choice.text)
      || new Set(choices.map((choice) => choice.id)).size !== choices.length) return;
    const answer = normalizeAnswer(value.answer ?? value.correct, choices);
    if (!answer || !choices.some((choice) => choice.id === answer)) return;

    const baseId = choiceText(value.id) || fallbackId;
    let id = baseId;
    let duplicate = 2;
    while (usedIds.has(id)) id = `${baseId}-${duplicate++}`;
    usedIds.add(id);

    let question: Question = {
      id, prompt, choices, answer,
      explanation: findExplanation(value),
      ...(text(value.imageUrl) || text(value.image) ? { imageUrl: text(value.imageUrl) || text(value.image) } : {}),
    };
    if (passage) {
      const paragraph = text(passage.text);
      const paragraphTitle = text(passage.title);
      question = { ...question, questionPrompt: prompt, paragraph, paragraphTitle };
      // Preserve the combined reading prompt used by results and saved mistakes.
      if (testId.includes('reading')) {
        question.prompt = `<div class="mb-8 p-6 bg-white/90 dark:bg-zinc-900/70 border-l-4 border-sky-500 shadow-sm rounded-r-xl text-slate-700 dark:text-zinc-200 text-base leading-relaxed font-serif custom-reading-content"><h3 class="font-bold text-sky-900 text-xl mb-4 border-b border-sky-100 pb-2">${paragraphTitle}</h3>${paragraph}</div><div class="font-bold text-slate-900 dark:text-zinc-100 text-lg mt-6 pt-4 border-t border-slate-100 dark:border-zinc-700">${prompt}</div>`;
      }
    } else if (splitParagraphs) {
      question = { ...question, ...splitParagraphPrompt(prompt) };
    } else {
      // Normalized session payloads may already contain passage fields.
      for (const key of ['paragraph', 'paragraphTitle', 'questionPrompt'] as const) {
        if (text(value[key])) question[key] = text(value[key]);
      }
    }
    questions.push(question);
  }

  if (passages) {
    for (const [passageIndex, passage] of list.entries()) {
      if (!isRecord(passage) || !Array.isArray(passage.questions)) continue;
      if (passageIndex === 0) audioSrc = text(passage.audio) || null;
      passage.questions.forEach((question, index) => append(question, `q-${passage.passageId ?? passageIndex}-${index}`, passage));
    }
  } else {
    list.forEach((question, index) => append(question, `${testId}-q-${index + 1}`));
  }
  return { questions, audioSrc };
}
