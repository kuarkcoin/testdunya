export type SubjectType = 'matematik' | 'turkce' | 'ingilizce' | 'fen';
export type TermType = 1 | 2;

export interface Question5 {
  id: string;
  subject: SubjectType;
  term: TermType;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string; // ✅ Yeni eklendi
}

export const questions5: Question5[] = [
  // --- MATEMATİK ---
  {
    id: "m5-1-01", subject: "matematik", term: 1,
    prompt: "748.205 sayısının on binler basamağındaki rakam kaçtır?",
    options: ["7", "4", "8", "2"],
    correct: 1,
    explanation: "748.205 sayısında; 5 birler, 0 onlar, 2 yüzler, 8 binler, 4 on binler basamağındadır."
  },
  {
    id: "m5-1-02", subject: "matematik", term: 1,
    prompt: "Bir bölme işleminde bölen 12, bölüm 8 ve kalan 5 ise bölünen sayı kaçtır?",
    options: ["96", "101", "105", "112"],
    correct: 1,
    explanation: "Bölünen = (Bölen x Bölüm) + Kalan formülünden; (12 x 8) + 5 = 96 + 5 = 101 bulunur."
  },
  {
    id: "m5-2-01", subject: "matematik", term: 2,
    prompt: "Hangi ondalık gösterim daha büyüktür?",
    options: ["0,4", "0,39", "0,045", "0,401"],
    correct: 3,
    explanation: "Basamak sayılarını eşitlemek için sonlarına sıfır koyduğumuzda; 0,401 > 0,400 > 0,390 > 0,045 olduğu görülür."
  },

  // --- TÜRKÇE ---
  {
    id: "t5-1-01", subject: "turkce", term: 1,
    prompt: "Hangi kelimenin yazımı yanlıştır?",
    options: ["Herkes", "Yanlış", "Yalnız", "Süpris"],
    correct: 3,
    explanation: "Doğru yazım 'Sürpriz' şeklindedir. Kelimenin içinde 'r' harfi unutulmamalıdır."
  },
  {
    id: "t5-1-02", subject: "turkce", term: 1,
    prompt: "'Ağır' kelimesi hangi cümlede mecaz anlamda kullanılmıştır?",
    options: ["Bu çanta çok ağır.", "Ağır adımlarla yürüdü.", "Bize çok ağır sözler söyledi.", "Kamyon ağır yük taşıyor."],
    correct: 2,
    explanation: "C şıkkında 'ağır söz', insanın onuruna dokunan, kırıcı anlamında kullanıldığı için mecazdır."
  },

  // --- FEN BİLİMLERİ ---
  {
    id: "f5-1-01", subject: "fen", term: 1,
    prompt: "Ay'ın ana evreleri arasındaki süre yaklaşık ne kadardır?",
    options: ["1 gün", "1 hafta", "1 ay", "1 yıl"],
    correct: 1,
    explanation: "Ay'ın dört ana evresi (Yeniay, İlk dördün, Dolunay, Son dördün) vardır ve her biri arası yaklaşık 1 haftadır."
  },
  {
    id: "f5-1-02", subject: "fen", term: 1,
    prompt: "Hangisi mikroskobik canlıların yararlarından biridir?",
    options: ["Hastalık yapmaları", "Besinleri küfletmeleri", "Sütten peynir yapılması", "Dişleri çürütmeleri"],
    correct: 2,
    explanation: "Bazı bakteriler yararlıdır; sütten peynir veya yoğurt yapılması biyolojik bir yarardır."
  },

  // --- İNGİLİZCE ---
  {
    id: "e5-1-01", subject: "ingilizce", term: 1,
    prompt: "I enjoy ____ . I have a fishing rod.",
    options: ["hiking", "fishing", "camping", "swimming"],
    correct: 1,
    explanation: "'Fishing rod' olta demektir. Olta ile yapılan hobi 'fishing' (balık tutma) işlemidir."
  }
  // ... Murat, buraya benzer mantıkla 50'ye tamamlayacak soruları ekleyebilirsin.
];
