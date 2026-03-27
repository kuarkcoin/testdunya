import { fenData } from '@/app/data/grade5/fen';
import { ingilizceData } from '@/app/data/grade5/ingilizce';
import { matematikData } from '@/app/data/grade5/matematik';
import { turkceData } from '@/app/data/grade5/turkce';
import type { Question5, SubjectData, SubjectId, TermType } from '@/app/data/grade5/types';

export const SITE_URL = 'https://testdunya.net';

export type Grade5SubjectSlug = 'ingilizce' | 'matematik' | 'fen-bilgisi' | 'turkce';

export interface Grade5SubjectConfig {
  id: SubjectId;
  slug: Grade5SubjectSlug;
  title: string;
  shortTitle: string;
  description: string;
  focusTopics: string[];
}

export interface Grade5TestInfo {
  id: string;
  subject: SubjectId;
  subjectSlug: Grade5SubjectSlug;
  subjectTitle: string;
  term: TermType;
  testKey: string;
  testNo: number;
  slug: string;
  title: string;
  shortTitle: string;
  path: string;
  legacyPath: string;
  questions: Question5[];
  questionCount: number;
  imageQuestionCount: number;
  estimatedDurationMinutes: number;
}

const SUBJECTS: Grade5SubjectConfig[] = [
  {
    id: 'ingilizce',
    slug: 'ingilizce',
    title: '5. Sınıf İngilizce',
    shortTitle: 'İngilizce',
    description:
      'Kelime bilgisi, günlük konuşma kalıpları, saatler, yönler ve okul hayatı temalarında görsel destekli sorular içerir.',
    focusTopics: ['Vocabulary', 'Daily routines', 'Directions', 'Games and hobbies'],
  },
  {
    id: 'matematik',
    slug: 'matematik',
    title: '5. Sınıf Matematik',
    shortTitle: 'Matematik',
    description:
      'Sayılar, kesirler, geometri ve problem çözme odaklı yeni nesil sorularla adım adım pekiştirme sağlar.',
    focusTopics: ['Doğal sayılar', 'Kesirler', 'Geometri', 'Ondalık gösterim'],
  },
  {
    id: 'fen',
    slug: 'fen-bilgisi',
    title: '5. Sınıf Fen Bilgisi',
    shortTitle: 'Fen Bilgisi',
    description:
      'Canlılar, kuvvet, Dünya ve evren konularında görsel yorumlama becerisi kazandıran testler sunar.',
    focusTopics: ['Canlılar', 'Kuvvetin etkileri', 'Ay ve evreler', 'Bilimsel gözlem'],
  },
  {
    id: 'turkce',
    slug: 'turkce',
    title: '5. Sınıf Türkçe',
    shortTitle: 'Türkçe',
    description:
      'Okuduğunu anlama, sözcükte anlam, dil bilgisi ve paragraf yorumlama becerilerini geliştirmeye yardımcı olur.',
    focusTopics: ['Sözcükte anlam', 'Paragraf', 'Dil bilgisi', 'Anlatım türleri'],
  },
];

const DATA_BY_SUBJECT: Record<SubjectId, SubjectData> = {
  ingilizce: ingilizceData,
  matematik: matematikData,
  fen: fenData,
  turkce: turkceData,
};

const SLUG_TO_SUBJECT: Record<Grade5SubjectSlug, SubjectId> = {
  ingilizce: 'ingilizce',
  matematik: 'matematik',
  'fen-bilgisi': 'fen',
  turkce: 'turkce',
};

const SUBJECT_TO_SLUG: Record<SubjectId, Grade5SubjectSlug> = {
  ingilizce: 'ingilizce',
  matematik: 'matematik',
  fen: 'fen-bilgisi',
  turkce: 'turkce',
};

const QUESTION_TIME_MIN = 1;

function extractTestNo(testKey: string): number {
  const match = testKey.match(/(\d+)/);
  return Number(match?.[1] ?? 1);
}

function getEstimatedDurationMinutes(questionCount: number): number {
  return Math.max(5, Math.ceil(questionCount * QUESTION_TIME_MIN));
}

export function getAllGrade5Subjects(): Grade5SubjectConfig[] {
  return SUBJECTS;
}

export function getGrade5SubjectBySlug(slug: string): Grade5SubjectConfig | undefined {
  const subjectId = SLUG_TO_SUBJECT[slug as Grade5SubjectSlug];
  if (!subjectId) return undefined;
  return SUBJECTS.find((subject) => subject.id === subjectId);
}

export function getSubjectDataBySlug(slug: Grade5SubjectSlug): SubjectData {
  return DATA_BY_SUBJECT[SLUG_TO_SUBJECT[slug]];
}

export function getAllTestsForSubject(slug: Grade5SubjectSlug): Grade5TestInfo[] {
  const subjectConfig = getGrade5SubjectBySlug(slug);
  if (!subjectConfig) return [];

  const subjectData = DATA_BY_SUBJECT[subjectConfig.id];
  const tests: Grade5TestInfo[] = [];

  (['term1', 'term2'] as const).forEach((termKey, index) => {
    const term = (index + 1) as TermType;
    Object.entries(subjectData[termKey]).forEach(([testKey, questions]) => {
      const testNo = extractTestNo(testKey);
      const slugValue = `test-${term}-${testNo}`;
      const questionCount = questions.length;
      const imageQuestionCount = questions.filter((question) => Boolean(question.imageUrl)).length;

      tests.push({
        id: `${subjectConfig.id}-${termKey}-${testKey}`,
        subject: subjectConfig.id,
        subjectSlug: subjectConfig.slug,
        subjectTitle: subjectConfig.shortTitle,
        term,
        testKey,
        testNo,
        slug: slugValue,
        title: `5. Sınıf ${subjectConfig.shortTitle} ${term}. Dönem Test ${testNo}`,
        shortTitle: `${term}. Dönem Test ${testNo}`,
        path: `/5-sinif/${subjectConfig.slug}/${slugValue}`,
        legacyPath: `/test/${subjectConfig.id}-term${term}-test${testNo}`,
        questions,
        questionCount,
        imageQuestionCount,
        estimatedDurationMinutes: getEstimatedDurationMinutes(questionCount),
      });
    });
  });

  return tests.sort((a, b) => {
    if (a.term !== b.term) return a.term - b.term;
    return a.testNo - b.testNo;
  });
}

export function getAllGrade5Tests(): Grade5TestInfo[] {
  return getAllGrade5Subjects().flatMap((subject) => getAllTestsForSubject(subject.slug));
}

export function getGrade5TestByRoute(subjectSlug: string, testSlug: string): Grade5TestInfo | undefined {
  const subject = getGrade5SubjectBySlug(subjectSlug);
  if (!subject) return undefined;
  return getAllTestsForSubject(subject.slug).find((test) => test.slug === testSlug);
}

export function getGroupedTestsByTerm(subjectSlug: Grade5SubjectSlug): Record<TermType, Grade5TestInfo[]> {
  const tests = getAllTestsForSubject(subjectSlug);
  return {
    1: tests.filter((test) => test.term === 1),
    2: tests.filter((test) => test.term === 2),
  };
}

export function findSimilarGrade5Tests(targetTest: Grade5TestInfo, limit = 4): Grade5TestInfo[] {
  return getAllTestsForSubject(targetTest.subjectSlug)
    .filter((test) => test.slug !== targetTest.slug)
    .slice(0, limit);
}

export function getGrade5GlobalStats() {
  const tests = getAllGrade5Tests();
  const totalQuestions = tests.reduce((sum, test) => sum + test.questionCount, 0);
  const totalImageQuestions = tests.reduce((sum, test) => sum + test.imageQuestionCount, 0);

  return {
    totalTests: tests.length,
    totalQuestions,
    totalImageQuestions,
  };
}

export function getGrade5SubjectStats(subjectSlug: Grade5SubjectSlug) {
  const tests = getAllTestsForSubject(subjectSlug);
  return {
    totalTests: tests.length,
    totalQuestions: tests.reduce((sum, test) => sum + test.questionCount, 0),
    totalImageQuestions: tests.reduce((sum, test) => sum + test.imageQuestionCount, 0),
  };
}

export function getGrade5SubjectSummary(subjectSlug: Grade5SubjectSlug): string {
  const subject = getGrade5SubjectBySlug(subjectSlug);
  if (!subject) return '';

  const stats = getGrade5SubjectStats(subjectSlug);
  return `${subject.title} sayfasında ${stats.totalTests} test, ${stats.totalQuestions} soru ve ${stats.totalImageQuestions} görselli soru bulunmaktadır.`;
}

export function getGrade5CanonicalUrl(pathname: string): string {
  return `${SITE_URL}${pathname}`;
}

export function generateGrade5ImageAlt(question: Question5): string {
  const sanitizedPrompt = question.prompt
    .replace(/\$.*?\$/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const optionsPreview = question.options.slice(0, 2).join(' / ');
  const subjectLabel = SUBJECTS.find((subject) => subject.id === question.subject)?.shortTitle ?? 'Ders';

  const text = `${subjectLabel} sorusunda ${sanitizedPrompt}. Seçenekler arasında ${optionsPreview} bulunuyor.`;
  return text.slice(0, 170);
}

export function getOtherSubjectLinks(currentSlug: Grade5SubjectSlug) {
  return getAllGrade5Subjects().filter((subject) => subject.slug !== currentSlug);
}

export function toSubjectSlug(subjectId: SubjectId): Grade5SubjectSlug {
  return SUBJECT_TO_SLUG[subjectId];
}
