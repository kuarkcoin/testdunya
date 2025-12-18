export type SubjectType = 'matematik' | 'turkce' | 'ingilizce' | 'fen';
export type TermType = 1 | 2;

export interface Question5 {
  id: string;
  subject: SubjectType;
  term: TermType;
  prompt: string;
  options: string[];
  correct: number;
}

export const questions5: Question5[] = [
  // --- İNGİLİZCE 1. DÖNEM (Örnek Sorular) ---
  {
    id: "e5-1-01",
    subject: "ingilizce",
    term: 1,
    prompt: "Ayşe: 'Hello! My name is Ayşe. I am from Turkey.' \n John: 'Hi! I am John. I am from Britain. I am ____.'",
    options: ["British", "French", "German", "Turkish"],
    correct: 0,
  },
  {
    id: "e5-1-02",
    subject: "ingilizce",
    term: 1,
    prompt: "I love ____ because I can draw and paint beautiful pictures.",
    options: ["Art", "Science", "History", "Maths"],
    correct: 0,
  },
  {
    id: "e5-1-03",
    subject: "ingilizce",
    term: 1,
    prompt: "The ____ is behind the school. I go there to borrow books.",
    options: ["Library", "Bakery", "Pharmacy", "Cinema"],
    correct: 0,
  }
  // Diğer dersleri ve soruları buraya ekleyebilirsin...
];
