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
  // --- MATEMATİK 1. DÖNEM ---
  {
    id: "m5-1-01",
    subject: "matematik",
    term: 1,
    prompt: "Aşağıdaki sayılardan hangisi 748.205 sayısının binler bölüğündeki rakamların toplamıdır?",
    options: ["11", "15", "19", "21"],
    correct: 2, // 7+4+8 = 19
  },
  {
    id: "m5-1-02",
    subject: "matematik",
    term: 1,
    prompt: "5² + 2³ işleminin sonucu kaçtır?",
    options: ["25", "29", "33", "35"],
    correct: 2, // 25 + 8 = 33
  },

  // --- TÜRKÇE 1. DÖNEM ---
  {
    id: "t5-1-01",
    subject: "turkce",
    term: 1,
    prompt: "Hangi cümledeki 'yol' kelimesi mecaz anlamda kullanılmıştır?",
    options: ["Bu yol çok tozlu.", "Sorunu çözmek için bir yol bulmalıyız.", "Evin yolu buradan geçiyor.", "Yolda yürürken arkadaşımı gördüm."],
    correct: 1,
  },
  {
    id: "t5-1-02",
    subject: "turkce",
    term: 1,
    prompt: "Aşağıdaki kelimelerin hangisinde ünsüz yumuşaması vardır?",
    options: ["Kitapçı", "Dolabı", "Gözlük", "Çiçekten"],
    correct: 1, // Dolap -> Dolabı
  },

  // --- FEN BİLİMLERİ 1. DÖNEM ---
  {
    id: "f5-1-01",
    subject: "fen",
    term: 1,
    prompt: "Güneş'in büyüklüğü, Dünya'nın büyüklüğünün yaklaşık kaç katıdır?",
    options: ["10", "50", "109", "1000"],
    correct: 2,
  },
  {
    id: "f5-1-02",
    subject: "fen",
    term: 1,
    prompt: "Ay'ın yüzeyinde kraterlerin oluşmasının temel sebebi nedir?",
    options: ["Güneş ışınları", "Gök taşlarının çarpması", "Volkanik patlamalar", "Rüzgar ve yağmur"],
    correct: 1,
  },

  // --- İNGİLZİCE 1. DÖNEM ---
  {
    id: "e5-1-01",
    subject: "ingilizce",
    term: 1,
    prompt: "A: 'Where is the library?' \n B: 'Go straight and ____ left.'",
    options: ["take", "turn", "make", "go"],
    correct: 1,
  },
  {
    id: "e5-1-02",
    subject: "ingilizce",
    term: 1,
    prompt: "Which one is a school subject?",
    options: ["Library", "Science", "Pencil", "Teacher"],
    correct: 1,
  }
];
