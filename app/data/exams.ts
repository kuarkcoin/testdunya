// app/data/exams.ts

export interface SubTest {
  id: string;
  name: string;
  isNew?: boolean; // 'YENİ' etiketi için
}

export interface Exam {
  key: string;
  name: string;
  label: string;
  colorTheme: string; // Renk teması (blue, orange, red vs.)
  tests: SubTest[];
}

export const EXAMS: Exam[] = [
  {
    key: "yks",
    name: "YKS & Üniversite",
    label: "TYT - AYT - YDT",
    colorTheme: "blue", // Mavi Tema
    tests: [
      { id: "tyt-deneme-1", name: "TYT Deneme 1", isNew: true },
      { id: "tyt-deneme-2", name: "TYT Deneme 2" },
      { id: "ayt-mat-1", name: "AYT Matematik" },
      { id: "ayt-fen-1", name: "AYT Fen Bilimleri" },
      { id: "ayt-edb-1", name: "AYT Edebiyat-Sos" },
      { id: "ydt-ing-1", name: "YDT İngilizce" },
    ]
  },
  {
    key: "lgs",
    name: "LGS Hazırlık",
    label: "8. Sınıf Sınavları",
    colorTheme: "orange", // Turuncu Tema
    tests: [
      { id: "lgs-genel-1", name: "LGS Genel Deneme 1", isNew: true },
      { id: "lgs-mat-1", name: "LGS Matematik" },
      { id: "lgs-fen-1", name: "LGS Fen Bilimleri" },
      { id: "lgs-turkce-1", name: "LGS Türkçe" },
    ]
  },
  {
    key: "kpss",
    name: "KPSS & Memuriyet",
    label: "Lisans - Önlisans",
    colorTheme: "rose", // Gül Rengi Tema
    tests: [
      { id: "kpss-gy-gk-1", name: "KPSS GY-GK Deneme", isNew: true },
      { id: "kpss-egitim-1", name: "Eğitim Bilimleri" },
      { id: "kpss-tarih", name: "Tarih Taraması" },
      { id: "kpss-cografya", name: "Coğrafya Taraması" },
    ]
  },
  {
    key: "ehliyet",
    name: "Ehliyet Sınavı",
    label: "E-Sınav Müfredatı",
    colorTheme: "emerald", // Yeşil Tema
    tests: [
      { id: "ehliyet-deneme-1", name: "Çıkmış Sorular 2024", isNew: true },
      { id: "ehliyet-motor", name: "Motor & Araç Tekniği" },
      { id: "ehliyet-ilkyardim", name: "İlk Yardım Bilgisi" },
      { id: "ehliyet-trafik", name: "Trafik & Çevre" },
    ]
  },
    {
    key: "diger",
    name: "Akademik (ALES-YÖKDİL)",
    label: "Yüksek Lisans",
    colorTheme: "violet", // Mor Tema
    tests: [
      { id: "ales-sayisal", name: "ALES Sayısal" },
      { id: "ales-sozel", name: "ALES Sözel" },
      { id: "yokdil-fen", name: "YÖKDİL Fen" },
      { id: "yokdil-sosyal", name: "YÖKDİL Sosyal" },
    ]
  },
];
