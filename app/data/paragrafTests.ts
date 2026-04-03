import { sincityParagrafQuestions, type SincityParagrafQuestion } from './sincity';

export const PARAGRAF_TEST_COUNT = 50;
export const PARAGRAF_QUESTIONS_PER_TEST = 20;

export interface ParagrafTestMeta {
  id: number;
  slug: string;
  dataId: string;
  title: string;
  subtitle: string;
  questionCount: number;
}

export const PARAGRAF_TESTS: ParagrafTestMeta[] = Array.from({ length: PARAGRAF_TEST_COUNT }, (_, idx) => {
  const id = idx + 1;

  return {
    id,
    slug: `test-${id}`,
    dataId: `paragraf-test-${id}`,
    title: `Paragraf Test ${id}`,
    subtitle: '5. sınıf düzeyi okuduğunu anlama',
    questionCount: PARAGRAF_QUESTIONS_PER_TEST,
  };
});

export function getParagrafTestBySlug(slug: string) {
  return PARAGRAF_TESTS.find((test) => test.slug === slug);
}

export function getParagrafTestQuestions(testNo: number): SincityParagrafQuestion[] {
  if (!Number.isInteger(testNo) || testNo < 1 || testNo > PARAGRAF_TEST_COUNT) {
    return [];
  }

  const start = (testNo - 1) * PARAGRAF_QUESTIONS_PER_TEST;
  const end = start + PARAGRAF_QUESTIONS_PER_TEST;
  return sincityParagrafQuestions.slice(start, end);
}

export function getParagrafTestNoFromDataId(dataId: string): number | null {
  const match = /^paragraf-test-(\d+)$/.exec(dataId);
  if (!match) return null;

  const parsed = Number(match[1]);
  if (!Number.isInteger(parsed) || parsed < 1 || parsed > PARAGRAF_TEST_COUNT) return null;

  return parsed;
}
