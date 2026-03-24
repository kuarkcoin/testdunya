export type ZekaBulmacaTopic =
  | 'Who is the killer?'
  | 'Who is the thief?'
  | 'Who is lying?'
  | 'Find the clue'
  | 'Spot the contradiction'
  | 'Which suspect is innocent?'
  | 'Detective scene analysis'
  | 'Logical visual deduction'
  | 'Hidden evidence puzzles'
  | 'Everyday logic traps';

export interface ZekaBulmacaTestMeta {
  id: number;
  slug: string;
  dataId: string;
  title: string;
  subtitle: string;
  questionCount: number;
  topic: ZekaBulmacaTopic;
}

const topics: ZekaBulmacaTopic[] = [
  'Who is the killer?',
  'Who is the thief?',
  'Who is lying?',
  'Find the clue',
  'Spot the contradiction',
  'Which suspect is innocent?',
  'Detective scene analysis',
  'Logical visual deduction',
  'Hidden evidence puzzles',
  'Everyday logic traps',
];

export const ZEKA_BULMACA_TESTS: ZekaBulmacaTestMeta[] = Array.from({ length: 50 }, (_, idx) => {
  const id = idx + 1;
  const topic = topics[idx % topics.length];
  return {
    id,
    slug: `test-${id}`,
    dataId: `zeka-bulmaca-${id}`,
    title: `Zeka Bulmacası ${id}`,
    subtitle: topic,
    questionCount: 10,
    topic,
  };
});

export function getZekaBulmacaBySlug(slug: string) {
  return ZEKA_BULMACA_TESTS.find((test) => test.slug === slug);
}
