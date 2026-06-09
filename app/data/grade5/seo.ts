import { fenData } from './fen';
import { ingilizceData } from './ingilizce';
import { matematikData } from './matematik';
import { turkceData } from './turkce';
import type { Question5, SubjectData, SubjectId, TermType } from './types';

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
      '5. sınıf matematik testi sayfasında doğal sayılar, kesirler, geometri, ölçme ve veri işleme konularını kapsayan MEB uyumlu, şekilli ve yeni nesil sorular yer alır.',
  },
  {
    id: 'turkce',
    label: 'Türkçe',
    titleLabel: 'Türkçe',
    icon: '📝',
    gradient: 'from-rose-600 to-orange-500',
    shortDescription: 'Okuma anlama, sözcükte anlam, cümlede anlam ve dil bilgisi testleri.',
    description:
      '5. sınıf türkçe testi sayfası; okuma anlama, sözcükte anlam, cümlede anlam, yazım ve noktalama konularında MEB uyumlu yeni nesil sorularla hazırlanmıştır.',
  },
  {
    id: 'fen',
    label: 'Fen Bilimleri',
    titleLabel: 'Fen',
    icon: '🧪',
    gradient: 'from-emerald-600 to-teal-500',
    shortDescription: 'Güneş, Dünya, canlılar, kuvvet, madde ve elektrik konulu testler.',
    description:
      '5. sınıf fen testi sayfasında fen bilimleri kazanımlarına uygun şekilli, görselli ve yeni nesil sorularla ücretsiz online test çözebilirsiniz.',
  },
  {
    id: 'ingilizce',
    label: 'İngilizce',
    titleLabel: 'İngilizce',
    icon: '🇬🇧',
    gradient: 'from-purple-600 to-indigo-500',
    shortDescription: 'Vocabulary, grammar, daily routines ve temel iletişim testleri.',
    description:
      '5. sınıf ingilizce testi sayfası; vocabulary, grammar, daily routines ve temel iletişim konularında MEB uyumlu görselli sorulardan oluşur.',
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

const makeTopic = (questions: Question5[]) => {
  const prompt = questions[0]?.prompt ?? 'Karma değerlendirme';
  const cleaned = prompt
    .replace(/Görseldeki|Şekildeki|Yandaki|aşağıdaki/gi, '')
    .replace(/\$[^$]*\$/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const words = cleaned.split(' ').slice(0, 8).join(' ');
  return words ? `${words} konusu` : 'Karma değerlendirme';
};

export const getGrade5Tests = (subjectId: SubjectId): Grade5TestSeo[] => {
  const subject = getGrade5Subject(subjectId);
  if (!subject) return [];
  const data = grade5Data[subjectId];
  const entries = [
    ...termKeys(data, 'term1').map(([originalKey, questions]) => ({ term: 1 as TermType, originalKey, questions })),
    ...termKeys(data, 'term2').map(([originalKey, questions]) => ({ term: 2 as TermType, originalKey, questions })),
  ];

  return entries.map((entry, index) => {
    const testNo = index + 1;
    const hasImages = entry.questions.some((question) => Boolean(question.imageUrl));
    return {
      subject,
      term: entry.term,
      originalKey: entry.originalKey,
      testNo,
      slug: `test-${testNo}`,
      title: `5. Sınıf ${subject.titleLabel} Test ${testNo}`,
      topic: makeTopic(entry.questions),
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

export const canonicalBase = 'https://testdunya.net';
