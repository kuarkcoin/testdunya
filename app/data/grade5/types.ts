// app/data/grade5/types.ts

export type SubjectId = 'matematik' | 'turkce' | 'ingilizce' | 'fen';
export type TermType = 1 | 2;

export interface Question5 {
  id: string;
  subject: SubjectId;
  term: TermType;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
  imageUrl?: string;
}

export interface TestData {
  [key: string]: Question5[]; // test1, test2... test15
}

export interface SubjectData {
  term1: TestData;
  term2: TestData;
}
