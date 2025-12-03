// app/data/exams.ts

export interface Exam {
  key: string;
  name: string;
  label: string;
  score: number;
  monthly: string;
  tags: string[];
  highlight: string;
}

export const EXAMS: Exam[] = [
  {
    key: "yks",
    name: "YKS",
    label: "Üniversite Sınavı",
    score: 100,
    monthly: "1.5–2M",
    tags: ["TYT", "AYT", "Sayısal", "Eşit Ağırlık"],
    highlight: "En yüksek arama hacmi",
  },
  {
    key: "lgs",
    name: "LGS",
    label: "Liselere Geçiş",
    score: 85,
    monthly: "600–900K",
    tags: ["8. sınıf", "Yeni nesil", "MEB"],
    highlight: "Ortaokuldan liseye geçiş",
  },
  {
    key: "kpss",
    name: "KPSS",
    label: "Kamu Personeli",
    score: 70,
    monthly: "500–700K",
    tags: ["Genel Yetenek", "Genel Kültür"],
    highlight: "Memuriyet hedefleyenler için",
  },
  {
    key: "ehliyet",
    name: "Ehliyet",
    label: "Sürücü Belgesi",
    score: 65,
    monthly: "400–600K",
    tags: ["Trafik", "İlk yardım", "Motor"],
    highlight: "Çıkmış sorulardan güncel testler",
  },
  {
    key: "ales",
    name: "ALES",
    label: "Akademik Personel",
    score: 40,
    monthly: "150–300K",
    tags: ["Sayısal", "Sözel", "Lisansüstü"],
    highlight: "Akademik kariyer için",
  },
  {
    key: "yokdil",
    name: "YÖKDİL",
    label: "Yabancı Dil",
    score: 35,
    monthly: "100–250K",
    tags: ["Fen", "Sağlık", "Sosyal"],
    highlight: "Akademik dil yeterliliği",
  },
];
