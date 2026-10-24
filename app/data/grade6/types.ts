// app/data/grade6/types.ts

// 1. Desteklenen branşlar için özel tipler
export type SubjectId = 'matematik' | 'turkce' | 'ingilizce' | 'fen';
export type TermType = 1 | 2;

// 2. Her bir sorunun sahip olması gereken temel yapı
export interface Question6 {
  id: string;
  subject: SubjectId;
  term: TermType;
  prompt: string;
  options: string[];
  correct: number; // 0, 1, 2, 3 (index mantığı)
  explanation: string;
  imageUrl?: string; // İsteğe bağlı görsel desteği
  imageAlt?: string; // Şeklin verilerini, çözümü açıklamadan aktarır
  imageWidth?: number;
  imageHeight?: number;
}

// 3. Test bazlı gruplandırma (test1, test2... testN)
export interface TestData {
  [key: string]: Question6[];
}

// 4. Dönem bazlı veri hiyerarşisi
export interface SubjectData {
  term1: TestData;
  term2: TestData;
}

// 5. TÜM BRANŞLARI KAPSAYAN ANA VERİ TİPİ (İsteğe bağlı, page.tsx için faydalı)
export interface AllQuestionsData {
  matematik: SubjectData;
  turkce: SubjectData;
  ingilizce: SubjectData;
  fen: SubjectData;
}
