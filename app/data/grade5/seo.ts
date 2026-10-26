import { fenData } from './fen';
import { ingilizceData } from './ingilizce';
import { matematikData } from './matematik';
import { turkceData } from './turkce';
import type { Question5, SubjectData, SubjectId, TermType } from './types';
import { SITE_URL } from '../../../lib/seo';

export type Grade5SubjectSeo = {
  id: SubjectId;
  label: string;
  titleLabel: string;
  icon: string;
  gradient: string;
  shortDescription: string;
  description: string;
};

export type Grade5TestSeo = {
  subject: Grade5SubjectSeo;
  term: TermType;
  originalKey: string;
  testNo: number;
  slug: string;
  title: string;
  topic: string;
  questions: Question5[];
  hasImages: boolean;
};

export const grade5Subjects: Grade5SubjectSeo[] = [
  {
    id: 'matematik',
    label: 'Matematik',
    titleLabel: 'Matematik',
    icon: '➕',
    gradient: 'from-blue-600 to-cyan-500',
    shortDescription: 'Sayılar, işlemler, kesirler, geometri ve veri işleme testleri.',
    description:
      'Doğal sayılar, kesirler, geometri, ölçme ve veri işleme konularını şekilli ve metin tabanlı 5. sınıf matematik testleriyle tekrar et.',
  },
  {
    id: 'turkce',
    label: 'Türkçe',
    titleLabel: 'Türkçe',
    icon: '📝',
    gradient: 'from-rose-600 to-orange-500',
    shortDescription: 'Okuma anlama, sözcükte anlam, cümlede anlam ve dil bilgisi testleri.',
    description:
      'Okuma anlama, sözcükte anlam, cümlede anlam, yazım ve noktalama konularını açıklamalı 5. sınıf Türkçe testleriyle çalış.',
  },
  {
    id: 'fen',
    label: 'Fen Bilimleri',
    titleLabel: 'Fen',
    icon: '🧪',
    gradient: 'from-emerald-600 to-teal-500',
    shortDescription: 'Güneş, Dünya, canlılar, kuvvet, madde ve elektrik konulu testler.',
    description:
      'Fen Bilimleri konularını şekilli ve metin tabanlı 5. sınıf testleriyle tekrar et; doğru cevapları ve çözüm notlarını incele.',
  },
  {
    id: 'ingilizce',
    label: 'İngilizce',
    titleLabel: 'İngilizce',
    icon: '🇬🇧',
    gradient: 'from-purple-600 to-indigo-500',
    shortDescription: 'Vocabulary, grammar, daily routines ve temel iletişim testleri.',
    description:
      'İngilizce kelime, dil bilgisi, günlük rutinler ve temel iletişim konularını görsel ve metin sorularıyla çalış.',
  },
];

export const grade5Data: Record<SubjectId, SubjectData> = {
  matematik: matematikData,
  turkce: turkceData,
  fen: fenData,
  ingilizce: ingilizceData,
};

export const getGrade5Subject = (subject: string) =>
  grade5Subjects.find((item) => item.id === subject);

const testKeyNumber = (key: string) => Number(key.replace('test', '')) || 0;
const termKeys = (data: SubjectData, term: 'term1' | 'term2') =>
  Object.entries(data[term])
    .filter(([, questions]) => questions.length > 0)
    .sort(([a], [b]) => testKeyNumber(a) - testKeyNumber(b));

// Published URL assignments are permanent. New tests use a term-qualified slug
// instead of shifting any existing test number. Keep these explicit assignments.
const publishedTestNumbers: Record<SubjectId, Record<string, number>> = {
  "matematik": {
    "1:test1": 1,
    "1:test2": 2,
    "1:test3": 3,
    "1:test4": 4,
    "1:test5": 5,
    "1:test6": 6,
    "1:test7": 7,
    "1:test8": 8,
    "1:test9": 9,
    "1:test10": 10,
    "2:test11_zor": 11,
    "2:test12_zor": 12,
    "2:test13_zor": 13,
    "2:test14_zor": 14,
    "2:test15_zor": 15,
    "2:test1": 16,
    "2:test2": 17,
    "2:test3": 18,
    "2:test4": 19,
    "2:test5": 20,
    "2:test6": 21,
    "2:test7": 22,
    "2:test8": 23,
    "2:test9": 24,
    "2:test10": 25,
    "2:test11": 26,
    "2:test12": 27,
    "2:test13": 28
  },
  "turkce": {
    "1:test1": 1,
    "1:test2": 2,
    "1:test3": 3,
    "2:test1": 4,
    "2:test2": 5,
    "2:test3": 6,
    "2:test4": 7,
    "2:test5": 8,
    "2:test6": 9,
    "2:test7": 10,
    "2:test8": 11,
    "2:test9": 12,
    "2:test10": 13,
    "2:test11": 14,
    "2:test12": 15,
    "2:test13": 16,
    "2:test14": 17,
    "2:test15": 18
  },
  "fen": {
    "1:test1": 1,
    "1:test2": 2,
    "1:test3": 3,
    "1:test4": 4,
    "1:test5": 5,
    "1:test6": 6,
    "1:test7": 7,
    "1:test8": 8,
    "1:test9": 9,
    "1:test10": 10,
    "2:test7_zor": 11,
    "2:test8_zor": 12,
    "2:test9_zor": 13,
    "2:test10_zor": 14,
    "2:test11_final": 15,
    "2:test12_final": 16,
    "2:test13_final": 17,
    "2:test14_final": 18,
    "2:test15_final": 19,
    "2:test1": 20,
    "2:test2": 21,
    "2:test3": 22,
    "2:test4": 23,
    "2:test5": 24,
    "2:test6": 25,
    "2:test7": 26
  },
  "ingilizce": {
    "1:test1": 1,
    "1:test2": 2,
    "1:test3": 3,
    "1:test4": 4,
    "1:test5": 5,
    "1:test6": 6,
    "1:test7": 7,
    "1:test8": 8,
    "1:test9": 9,
    "1:test10": 10,
    "2:test7_yeni": 11,
    "2:test8_yeni": 12,
    "2:test9_yeni": 13,
    "2:test10_yeni": 14,
    "2:test11_yeni": 15,
    "2:test12_yeni": 16,
    "2:test13_yeni": 17,
    "2:test14_yeni": 18,
    "2:test15_yeni": 19,
    "2:test1": 20,
    "2:test2": 21,
    "2:test3": 22,
    "2:test4": 23,
    "2:test5": 24,
    "2:test6": 25
  }
};

export const getGrade5Tests = (subjectId: SubjectId): Grade5TestSeo[] => {
  const subject = getGrade5Subject(subjectId);
  if (!subject) return [];
  const data = grade5Data[subjectId];
  const entries = [
    ...termKeys(data, 'term1').map(([originalKey, questions]) => ({ term: 1 as TermType, originalKey, questions })),
    ...termKeys(data, 'term2').map(([originalKey, questions]) => ({ term: 2 as TermType, originalKey, questions })),
  ];

  return entries.map((entry) => {
    const publishedTestNo = publishedTestNumbers[subjectId][`${entry.term}:${entry.originalKey}`];
    const originalTestNo = Number(entry.originalKey.match(/^test(\d+)/)?.[1]) || 0;
    const testNo = publishedTestNo ?? originalTestNo;
    const hasImages = entry.questions.some((question) => Boolean(question.imageUrl));
    return {
      subject,
      term: entry.term,
      originalKey: entry.originalKey,
      testNo,
      slug: publishedTestNo !== undefined
        ? `test-${publishedTestNo}`
        : `${entry.term}-donem-${encodeURIComponent(entry.originalKey.replace(/^test/, 'test-'))}`,
      title: publishedTestNo !== undefined
        ? `5. Sınıf ${subject.titleLabel} Test ${testNo}`
        : `5. Sınıf ${subject.titleLabel} ${entry.term}. Dönem Test ${testNo}`,
      topic: 'Karma Konu Tekrarı',
      questions: entry.questions,
      hasImages,
    };
  });
};

export const getGrade5Test = (subjectId: SubjectId, slug: string) =>
  getGrade5Tests(subjectId).find((test) => test.slug === slug);

export const getGrade5SubjectParams = () => grade5Subjects.map((subject) => ({ subject: subject.id }));

export const getGrade5TestParams = () =>
  grade5Subjects.flatMap((subject) =>
    getGrade5Tests(subject.id).map((test) => ({ subject: subject.id, testSlug: test.slug })),
  );

export const questionImageAlt = (subjectLabel: string, testNo: number, questionNo: number) =>
  `5. sınıf ${subjectLabel.toLocaleLowerCase('tr-TR')} şekilli soru test ${testNo} soru ${questionNo}`;

export const canonicalBase = SITE_URL;

