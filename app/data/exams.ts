// app/data/exams.ts

// --- TİP TANIMLARI ---

export interface Exam {
  key: string;
  name: string;
  label: string;
  score: number;
  monthly: string;
  tags: string[];
  highlight: string;
  color: string;  // Arka plan rengi
  shadow: string; // Gölge rengi
}

export interface TestItem {
  id: string;
  label: string;
}

export interface Category {
  title: string;
  slug: string;
  icon: string; // Emoji veya ikon
  tests: TestItem[];
}

// --- POPÜLER SINAVLAR (BÜYÜK RENKLİ KARTLAR) ---

export const EXAMS: Exam[] = [
  {
    key: "yks",
    name: "YKS",
    label: "Üniversite Sınavı",
    score: 100,
    monthly: "1.5–2M",
    tags: ["TYT", "AYT", "Sayısal", "EA"],
    highlight: "En popüler",
    color: "bg-blue-600 hover:bg-blue-700",
    shadow: "shadow-blue-200",
  },
  {
    key: "lgs",
    name: "LGS",
    label: "Liselere Geçiş",
    score: 95,
    monthly: "600–900K",
    tags: ["8. Sınıf", "Matematik", "Fen"],
    highlight: "Liseye hazırlık",
    color: "bg-orange-500 hover:bg-orange-600",
    shadow: "shadow-orange-200",
  },
  {
    key: "kpss",
    name: "KPSS",
    label: "Kamu Personeli",
    score: 85,
    monthly: "500–700K",
    tags: ["Genel Kültür", "Eğitim", "ÖABT"],
    highlight: "Memuriyet",
    color: "bg-red-600 hover:bg-red-700",
    shadow: "shadow-red-200",
  },
  {
    key: "ehliyet",
    name: "Ehliyet",
    label: "Sürücü Belgesi",
    score: 75,
    monthly: "400–600K",
    tags: ["Motor", "İlkyardım", "Trafik"],
    highlight: "Sürücü adayları",
    color: "bg-emerald-600 hover:bg-emerald-700",
    shadow: "shadow-emerald-200",
  },
  {
    key: "ales",
    name: "ALES",
    label: "Akademik Personel",
    score: 60,
    monthly: "150–300K",
    tags: ["Sayısal Mantık", "Sözel"],
    highlight: "Yüksek Lisans",
    color: "bg-purple-600 hover:bg-purple-700",
    shadow: "shadow-purple-200",
  },
  {
    key: "yokdil",
    name: "YÖKDİL",
    label: "Yabancı Dil",
    score: 50,
    monthly: "100–250K",
    tags: ["Fen", "Sağlık", "Sosyal"],
    highlight: "Akademik Dil",
    color: "bg-teal-600 hover:bg-teal-700",
    shadow: "shadow-teal-200",
  },
];

// --- BRANŞ/DERS KATEGORİLERİ VE ALT TESTLER ---

export const CATEGORIES: Category[] = [
  { 
    title: 'Matematik', 
    slug: 'matematik',
    icon: '📐',
    tests: [
      { id: 'mat-tyt-1', label: 'TYT Matematik Deneme 1' },
      { id: 'mat-temel', label: 'Temel Kavramlar Testi' },
      { id: 'mat-problem', label: 'Problemler Karma' }
    ]
  },
  { 
    title: 'Türkçe', 
    slug: 'turkce',
    icon: '📚',
    tests: [
      { id: 'turkce-tyt-1', label: 'TYT Türkçe Deneme 1' },
      { id: 'turkce-paragraf', label: 'Paragraf Hız Testi' },
      { id: 'turkce-dilbilgisi', label: 'Dil Bilgisi Karma' }
    ]
  },
  { 
    title: 'Tarih', 
    slug: 'tarih',
    icon: '🏛️',
    tests: [
      { id: 'tarih-genel-1', label: 'Tarih Genel Tekrar' },
      { id: 'tarih-inkilap', label: 'İnkılap Tarihi' }
    ]
  },
  { 
    title: 'Coğrafya', 
    slug: 'cografya',
    icon: '🌍',
    tests: [
      { id: 'cog-harita', label: 'Harita Bilgisi' },
      { id: 'cog-tyt-1', label: 'TYT Coğrafya Deneme' }
    ]
  },
  { 
    title: 'Fizik', 
    slug: 'fizik',
    icon: '⚡',
    tests: [
      { id: 'fizik-kuvvet', label: 'Kuvvet ve Hareket' },
      { id: 'fizik-elektrik', label: 'Elektrik & Manyetizma' }
    ]
  },
  { 
    title: 'Kimya', 
    slug: 'kimya',
    icon: '🧪',
    tests: [
      { id: 'kimya-madde', label: 'Madde ve Özellikleri' },
      { id: 'kimya-organik', label: 'Organik Kimya Giriş' }
    ]
  },
   { 
    title: 'Biyoloji', 
    slug: 'biyoloji',
    icon: '🧬',
    tests: [
      { id: 'biyo-hucre', label: 'Hücre ve Yapısı' },
      { id: 'biyo-sistem', label: 'İnsan Fizyolojisi' }
    ]
  },
  { 
    title: 'Geometri', 
    slug: 'geometri',
    icon: '📏',
    tests: [
      { id: 'geo-ucgen', label: 'Üçgenler Tarama' },
      { id: 'geo-cokgen', label: 'Çokgenler ve Dörtgenler' }
    ]
  },
];
