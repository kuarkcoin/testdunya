export interface SincityParagrafQuestion {
  id: string;
  subject: 'turkce';
  term: number;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
}

export type TarihParagrafQuestion = SincityParagrafQuestion;
export type BilimParagrafQuestion = SincityParagrafQuestion;
