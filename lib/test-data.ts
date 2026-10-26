import 'server-only';

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { cache } from 'react';
import { PARAGRAF_TESTS, getParagrafTestQuestions } from '../app/data/paragrafTests';
import { ZEKA_BULMACA_TESTS } from '../app/data/zekaBulmacalari';
import { isPersonalTestId, normalizeTestQuestions, type TestCatalogEntry, type TestData } from './test-types';

const TESTS_DIRECTORY = path.join(process.cwd(), 'public', 'data', 'tests');

// Keep existing quiz URLs while consolidating confirmed copies. Content is checked
// again so that a later question update can give a test its own canonical URL.
const DUPLICATE_TEST_GROUPS = [
  ['lgs-sayisal-test-2', 'lgs-sayisal-test-3', 'lgs-sayisal-test-4'],
  ['lgs-sozel-test-2', 'lgs-sozel-test-3', 'lgs-sozel-test-4'],
  ['tus-deneme-24', 'tus-deneme-31', 'tus-deneme-33'],
] as const;

export function isValidTestId(id: string): boolean {
  // A filename slug, never a path. Reject separators, dot segments and encoded paths.
  return typeof id === 'string' && id.length <= 160 && /^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(id);
}

const titleWords: Record<string, string> = {
  ielts: 'IELTS', lgs: 'LGS', kpss: 'KPSS', yks: 'YKS', tus: 'TUS', dus: 'DUS', hmgs: 'HMGS',
  gorevde: 'Görevde', yukselme: 'Yükselme', dmk: 'DMK', etik: 'Etik', psikolojik: 'Psikolojik',
  manipulasyon: 'Manipülasyon', testi: 'Testi', turkce: 'Türkçe', ingilizce: 'İngilizce',
  sayisal: 'Sayısal', sozel: 'Sözel', matematik: 'Matematik', sinif: 'Sınıf', fen: 'Fen',
  bilgisi: 'Bilgisi', bilimleri: 'Bilimleri', sosyal: 'Sosyal', bilgiler: 'Bilgiler',
  anayasasi: 'Anayasası', tc: 'T.C.', genel: 'Genel', esaslar: 'Esaslar', temel: 'Temel',
  haklar: 'Haklar', organlar: 'Organlar', kultur: 'Kültür', reading: 'Reading', listening: 'Listening',
  grammar: 'Grammar', vocab: 'Vocabulary', vocabulary: 'Vocabulary', test: 'Test',
};

function fallbackTitle(id: string): string {
  const words = id.split(/[-_]/).map((word) => titleWords[word.toLowerCase()] || word.charAt(0).toLocaleUpperCase('tr-TR') + word.slice(1));
  const label = words.join(' ');
  return /\btest(?:i)?\b/i.test(label) ? label : `${label} ${id.includes('ielts') ? 'Test' : 'Testi'}`;
}

function plainText(value: unknown): string {
  return typeof value === 'string' ? value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() : '';
}

const loadTestData = cache(async (id: string): Promise<TestData | null> => {
  if (!isValidTestId(id) || isPersonalTestId(id)) return null;

  const paragraphTest = PARAGRAF_TESTS.find((test) => test.dataId === id);
  let raw: unknown;
  if (paragraphTest) {
    raw = getParagrafTestQuestions(paragraphTest.id);
  } else {
    try {
      raw = JSON.parse(await readFile(path.join(TESTS_DIRECTORY, `${id}.json`), 'utf8'));
    } catch {
      return null;
    }
  }

  const { questions, audioSrc } = normalizeTestQuestions(raw, id, Boolean(paragraphTest));
  if (questions.length === 0) return null;

  const object = raw !== null && typeof raw === 'object' && !Array.isArray(raw) ? raw as Record<string, unknown> : null;
  const puzzle = ZEKA_BULMACA_TESTS.find((test) => test.dataId === id);
  const title = paragraphTest?.title || plainText(object?.title) || puzzle?.title || fallbackTitle(id);
  const description = id.includes('ielts')
    ? `${title}: practise with ${questions.length} questions, check your answers and review explanations.`
    : `${title}: ${questions.length} soruluk çevrim içi testi çözün; cevaplarınızı ve soru açıklamalarını inceleyin.`;

  return { id, canonicalId: id, title, description, questionCount: questions.length, questions, audioSrc };
});

function contentKey(test: TestData): string {
  return JSON.stringify({
    audioSrc: test.audioSrc,
    questions: test.questions.map(({ id: _questionId, ...question }) => question),
  });
}

export const getTestData = cache(async (id: string): Promise<TestData | null> => {
  const test = await loadTestData(id);
  if (!test) return null;
  const group = DUPLICATE_TEST_GROUPS.find((ids) => (ids as readonly string[]).includes(id));
  if (!group) return test;

  const currentContent = contentKey(test);
  for (const candidateId of group) {
    const candidate = await loadTestData(candidateId);
    if (candidate && contentKey(candidate) === currentContent) {
      return { ...test, canonicalId: candidate.id };
    }
  }
  return test;
});

export const getTestCatalog = cache(async (): Promise<TestCatalogEntry[]> => {
  let filenames: string[] = [];
  try {
    filenames = (await readdir(TESTS_DIRECTORY, { withFileTypes: true }))
      .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
      .map((entry) => entry.name.slice(0, -5));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
  }
  const ids = [...new Set([...filenames, ...PARAGRAF_TESTS.map((test) => test.dataId)])].sort();
  const tests = await Promise.all(ids.map((id) => getTestData(id)));
  return tests.flatMap((test) => test ? [{ id: test.id, canonicalId: test.canonicalId, title: test.title, description: test.description, questionCount: test.questionCount }] : []);
});
