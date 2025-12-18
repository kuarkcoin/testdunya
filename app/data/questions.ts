// app/data/questions.ts
// Eğer SvgData tipine ihtiyacınız yoksa import'u silebilirsiniz,
// ancak tip güvenliği için kalması iyidir.
// import { SvgData } from "../components/SvgRenderer";

// --- Minimal tipler (projende zaten varsa silebilirsin) ---
export type SvgElement =
  | { t: "rect"; x: number; y: number; w: number; h: number; sw?: number; dash?: boolean }
  | { t: "circle"; cx: number; cy: number; r: number; sw?: number }
  | { t: "line"; x1: number; y1: number; x2: number; y2: number; sw?: number }
  | { t: "path"; d: string; sw?: number };

export type SvgDataLocal = { viewBox: string; elements: SvgElement[] };

export type Question = {
  id: string;
  domain: "visual";
  type: "visual-matrix-2x2" | "visual-matrix-3x3";
  prompt: string;
  questionSvg: SvgDataLocal;
  options: Array<{ svg: SvgDataLocal }>;
  correct: number; // 0..4
};

export const questions: Question[] = [
  // =================================================================
  // BÖLÜM 1: ISINMA TURLARI (2x2 MATRİS) - SORU 1-5
  // =================================================================

  {
    id: "iq-mixed-01",
    domain: "visual",
    type: "visual-matrix-2x2",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 220 220",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 120, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 10, y: 120, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 120, y: 120, w: 90, h: 90, sw: 4, dash: true },

        // Daireler köşelerde saat yönünde ilerliyor: sol-üst -> sağ-üst -> sol-alt -> (sağ-alt)
        { t: "circle", cx: 35, cy: 35, r: 10, sw: 4 },
        { t: "circle", cx: 185, cy: 35, r: 10, sw: 4 },
        { t: "circle", cx: 35, cy: 185, r: 10, sw: 4 }
      ]
    },
    options: [
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 25, cy: 25, r: 10, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 75, cy: 75, r: 10, sw: 4 }] } }, // doğru
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 10, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "rect", x: 35, y: 35, w: 30, h: 30, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 75, cy: 25, r: 10, sw: 4 }] } }
    ],
    correct: 1
  },

  {
    id: "iq-mixed-02",
    domain: "visual",
    type: "visual-matrix-2x2",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 220 220",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 120, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 10, y: 120, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 120, y: 120, w: 90, h: 90, sw: 4, dash: true },

        // Üst satır: yatay -> dikey
        // Alt satır: dikey -> (yatay)
        { t: "line", x1: 25, y1: 55, x2: 85, y2: 55, sw: 6 },
        { t: "line", x1: 165, y1: 25, x2: 165, y2: 85, sw: 6 },
        { t: "line", x1: 55, y1: 135, x2: 55, y2: 195, sw: 6 }
      ]
    },
    options: [
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 50, y1: 20, x2: 50, y2: 80, sw: 6 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 50, x2: 80, y2: 50, sw: 6 }] } }, // doğru
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 20, x2: 80, y2: 80, sw: 6 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [] } }
    ],
    correct: 2
  },

  {
    id: "iq-mixed-03",
    domain: "visual",
    type: "visual-matrix-2x2",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 220 220",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 120, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 10, y: 120, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 120, y: 120, w: 90, h: 90, sw: 4, dash: true },

        // Boyut artıyor: küçük -> orta -> büyük -> (çok büyük)
        { t: "rect", x: 45, y: 45, w: 20, h: 20, sw: 4 },
        { t: "rect", x: 140, y: 40, w: 30, h: 30, sw: 4 },
        { t: "rect", x: 25, y: 135, w: 60, h: 60, sw: 4 }
      ]
    },
    options: [
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "rect", x: 40, y: 40, w: 20, h: 20, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "rect", x: 10, y: 10, w: 80, h: 80, sw: 4 }] } }, // doğru
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 50, x2: 80, y2: 50, sw: 6 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [] } }
    ],
    correct: 2
  },

  {
    id: "iq-mixed-04",
    domain: "visual",
    type: "visual-matrix-2x2",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 220 220",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 120, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 10, y: 120, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 120, y: 120, w: 90, h: 90, sw: 4, dash: true },

        // Satır mantığı: (Daire) + (Kare) = (Daire içinde Kare)
        // Alt satırda: (Daire içinde Kare) - (Daire) = (Kare)
        { t: "circle", cx: 55, cy: 55, r: 30, sw: 4 },
        { t: "rect", x: 140, y: 35, w: 40, h: 40, sw: 4 },
        { t: "circle", cx: 55, cy: 165, r: 30, sw: 4 },
        { t: "rect", x: 35, y: 145, w: 40, h: 40, sw: 4 }
      ]
    },
    options: [
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 30, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "rect", x: 30, y: 30, w: 40, h: 40, sw: 4 }] } }, // doğru
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "circle", cx: 50, cy: 50, r: 30, sw: 4 },
            { t: "rect", x: 30, y: 30, w: 40, h: 40, sw: 4 }
          ]
        }
      },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 20, x2: 80, y2: 80, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [] } }
    ],
    correct: 1
  },

  {
    id: "iq-mixed-05",
    domain: "visual",
    type: "visual-matrix-2x2",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 220 220",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 120, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 10, y: 120, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 120, y: 120, w: 90, h: 90, sw: 4, dash: true },

        // Dönme: dikey -> yatay -> yatay -> (dikey)
        { t: "line", x1: 55, y1: 20, x2: 55, y2: 90, sw: 6 },
        { t: "line", x1: 130, y1: 55, x2: 200, y2: 55, sw: 6 },
        { t: "line", x1: 20, y1: 165, x2: 90, y2: 165, sw: 6 }
      ]
    },
    options: [
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 20, x2: 80, y2: 80, sw: 6 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 50, y1: 20, x2: 50, y2: 80, sw: 6 }] } }, // doğru
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 50, x2: 80, y2: 50, sw: 6 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [] } }
    ],
    correct: 2
  },

  // =================================================================
  // BÖLÜM 2: GELİŞMİŞ ZEKA TESTİ (3x3 MATRİS) - SORU 6-20
  // =================================================================

  // --- SORU 6 (Sıra artışı: 1->2->3 daire) ---
  {
    id: "iq-mixed-06",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        // (Basit örnek içerik: 8 hücrede tek daire; son hücrede 3 daire bekleniyor)
        { t: "circle", cx: 55, cy: 55, r: 15, sw: 4 },
        { t: "circle", cx: 155, cy: 55, r: 15, sw: 4 },
        { t: "circle", cx: 255, cy: 55, r: 15, sw: 4 },

        { t: "circle", cx: 55, cy: 155, r: 15, sw: 4 },
        { t: "circle", cx: 155, cy: 155, r: 15, sw: 4 },
        { t: "circle", cx: 255, cy: 155, r: 15, sw: 4 },

        { t: "circle", cx: 55, cy: 255, r: 15, sw: 4 },
        { t: "circle", cx: 155, cy: 255, r: 15, sw: 4 }
      ]
    },
    options: [
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "circle", cx: 30, cy: 50, r: 15, sw: 4 },
            { t: "circle", cx: 50, cy: 50, r: 15, sw: 4 },
            { t: "circle", cx: 70, cy: 50, r: 15, sw: 4 }
          ]
        }
      }, // doğru
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 15, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 30, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "rect", x: 20, y: 20, w: 60, h: 60, sw: 4 }] } }
    ],
    correct: 0
  },

  // --- SORU 7 (Diagonal Çizgi Hareketi) ---
  {
    id: "iq-mixed-07",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        { t: "line", x1: 20, y1: 20, x2: 90, y2: 90, sw: 5 },
        { t: "line", x1: 120, y1: 20, x2: 190, y2: 90, sw: 5 },
        { t: "line", x1: 220, y1: 20, x2: 290, y2: 90, sw: 5 },

        { t: "line", x1: 20, y1: 120, x2: 90, y2: 190, sw: 5 },
        { t: "line", x1: 120, y1: 120, x2: 190, y2: 190, sw: 5 },
        { t: "line", x1: 220, y1: 120, x2: 290, y2: 190, sw: 5 },

        { t: "line", x1: 20, y1: 220, x2: 90, y2: 290, sw: 5 },
        { t: "line", x1: 120, y1: 220, x2: 190, y2: 290, sw: 5 }
      ]
    },
    options: [
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 20, x2: 90, y2: 90, sw: 5 }] } }, // doğru
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 80, x2: 80, y2: 20, sw: 5 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 90, x2: 90, y2: 20, sw: 5 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }] } }
    ],
    correct: 0
  },

  // --- SORU 8 (Daire Büyümesi) ---
  {
    id: "iq-mixed-08",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        { t: "circle", cx: 55, cy: 55, r: 10, sw: 4 },
        { t: "circle", cx: 155, cy: 55, r: 15, sw: 4 },
        { t: "circle", cx: 255, cy: 55, r: 20, sw: 4 },

        { t: "circle", cx: 55, cy: 155, r: 10, sw: 4 },
        { t: "circle", cx: 155, cy: 155, r: 15, sw: 4 },
        { t: "circle", cx: 255, cy: 155, r: 20, sw: 4 },

        { t: "circle", cx: 55, cy: 255, r: 10, sw: 4 },
        { t: "circle", cx: 155, cy: 255, r: 15, sw: 4 }
      ]
    },
    options: [
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }] } }, // doğru
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 15, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 10, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "rect", x: 20, y: 20, w: 60, h: 60, sw: 4 }] } }
    ],
    correct: 0
  },

  // --- SORU 9 (Üçgen Dönmesi) ---
  {
    id: "iq-mixed-09",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        // 1. satır: yukarı
        { t: "path", d: "M55 30 L80 80 L30 80 Z", sw: 4 },
        { t: "path", d: "M155 30 L180 80 L130 80 Z", sw: 4 },
        { t: "path", d: "M255 30 L280 80 L230 80 Z", sw: 4 },

        // 2. satır: sağ
        { t: "path", d: "M80 155 L30 180 L30 130 Z", sw: 4 },
        { t: "path", d: "M180 155 L130 180 L130 130 Z", sw: 4 },
        { t: "path", d: "M280 155 L230 180 L230 130 Z", sw: 4 },

        // 3. satır: aşağı
        { t: "path", d: "M55 255 L80 205 L30 205 Z", sw: 4 },
        { t: "path", d: "M155 255 L180 205 L130 205 Z", sw: 4 }
      ]
    },
    options: [
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "path", d: "M50 80 L80 30 L20 30 Z", sw: 4 }] } }, // doğru (aşağı bakan)
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "path", d: "M50 20 L80 70 L20 70 Z", sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "path", d: "M20 50 L70 80 L70 20 Z", sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [] } }
    ],
    correct: 0
  },

  // --- SORU 10 (Çıkarma İşlemi) ---
  {
    id: "iq-mixed-10",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        // Bazı hücrelerde daire + kare, bazı hücrelerde sadece daire -> hedef: sadece daire
        { t: "circle", cx: 55, cy: 55, r: 30, sw: 4 },
        { t: "rect", x: 35, y: 35, w: 40, h: 40, sw: 4 },

        { t: "circle", cx: 155, cy: 55, r: 30, sw: 4 },
        { t: "rect", x: 135, y: 35, w: 40, h: 40, sw: 4 },

        { t: "circle", cx: 255, cy: 55, r: 30, sw: 4 },

        { t: "circle", cx: 55, cy: 155, r: 30, sw: 4 },
        { t: "rect", x: 35, y: 135, w: 40, h: 40, sw: 4 },

        { t: "circle", cx: 155, cy: 155, r: 30, sw: 4 },
        { t: "rect", x: 135, y: 135, w: 40, h: 40, sw: 4 },

        { t: "circle", cx: 255, cy: 155, r: 30, sw: 4 },

        { t: "circle", cx: 55, cy: 255, r: 30, sw: 4 },
        { t: "rect", x: 35, y: 235, w: 40, h: 40, sw: 4 },

        { t: "circle", cx: 155, cy: 255, r: 30, sw: 4 }
      ]
    },
    options: [
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 30, sw: 4 }] } }, // doğru
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "circle", cx: 50, cy: 50, r: 30, sw: 4 },
            { t: "rect", x: 30, y: 30, w: 40, h: 40, sw: 4 }
          ]
        }
      },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "rect", x: 30, y: 30, w: 40, h: 40, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }] } }
    ],
    correct: 0
  },

  // --- SORU 11 (Çizgi Dönmesi 90 Derece) ---
  {
    id: "iq-mixed-11",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        // 1. satır: dikey
        { t: "line", x1: 55, y1: 20, x2: 55, y2: 90, sw: 5 },
        { t: "line", x1: 155, y1: 20, x2: 155, y2: 90, sw: 5 },
        { t: "line", x1: 255, y1: 20, x2: 255, y2: 90, sw: 5 },

        // 2. satır: yatay
        { t: "line", x1: 20, y1: 155, x2: 90, y2: 155, sw: 5 },
        { t: "line", x1: 120, y1: 155, x2: 190, y2: 155, sw: 5 },
        { t: "line", x1: 220, y1: 155, x2: 290, y2: 155, sw: 5 },

        // 3. satır: tekrar dikey
        { t: "line", x1: 55, y1: 290, x2: 55, y2: 220, sw: 5 },
        { t: "line", x1: 155, y1: 290, x2: 155, y2: 220, sw: 5 }
      ]
    },
    options: [
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 90, y1: 55, x2: 20, y2: 55, sw: 5 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 55, y1: 90, x2: 55, y2: 20, sw: 5 }] } }, // doğru
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 55, x2: 90, y2: 55, sw: 5 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }] } }
    ],
    correct: 1
  },

  // --- SORU 12 (Daire Hareketi Sola) ---
  {
    id: "iq-mixed-12",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        { t: "circle", cx: 75, cy: 55, r: 10, sw: 4 },
        { t: "circle", cx: 175, cy: 55, r: 10, sw: 4 },
        { t: "circle", cx: 275, cy: 55, r: 10, sw: 4 },

        { t: "circle", cx: 55, cy: 155, r: 10, sw: 4 },
        { t: "circle", cx: 155, cy: 155, r: 10, sw: 4 },
        { t: "circle", cx: 255, cy: 155, r: 10, sw: 4 },

        { t: "circle", cx: 35, cy: 255, r: 10, sw: 4 },
        { t: "circle", cx: 135, cy: 255, r: 10, sw: 4 }
      ]
    },
    options: [
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 25, cy: 50, r: 10, sw: 4 }] } }, // doğru
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 10, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 75, cy: 50, r: 10, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 30, sw: 4 }] } }
    ],
    correct: 0
  },

  // --- SORU 13 (Şekil Sayısı Artışı) ---
  {
    id: "iq-mixed-13",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        // 1. satır: 1 kare, 2 kare, 3 kare
        { t: "rect", x: 40, y: 40, w: 30, h: 30, sw: 4 },

        { t: "rect", x: 140, y: 40, w: 30, h: 30, sw: 4 },
        { t: "rect", x: 170, y: 40, w: 30, h: 30, sw: 4 },

        { t: "rect", x: 240, y: 40, w: 30, h: 30, sw: 4 },
        { t: "rect", x: 270, y: 40, w: 30, h: 30, sw: 4 },
        { t: "rect", x: 300, y: 40, w: 30, h: 30, sw: 4 },

        // 2. satır aynı
        { t: "rect", x: 40, y: 140, w: 30, h: 30, sw: 4 },

        { t: "rect", x: 140, y: 140, w: 30, h: 30, sw: 4 },
        { t: "rect", x: 170, y: 140, w: 30, h: 30, sw: 4 },

        { t: "rect", x: 240, y: 140, w: 30, h: 30, sw: 4 },
        { t: "rect", x: 270, y: 140, w: 30, h: 30, sw: 4 },
        { t: "rect", x: 300, y: 140, w: 30, h: 30, sw: 4 },

        // 3. satır ilk 2 hücre var; son hücre 3 kare olmalı
        { t: "rect", x: 40, y: 240, w: 30, h: 30, sw: 4 },

        { t: "rect", x: 140, y: 240, w: 30, h: 30, sw: 4 },
        { t: "rect", x: 170, y: 240, w: 30, h: 30, sw: 4 }
      ]
    },
    options: [
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "rect", x: 15, y: 35, w: 25, h: 25, sw: 4 },
            { t: "rect", x: 40, y: 35, w: 25, h: 25, sw: 4 },
            { t: "rect", x: 65, y: 35, w: 25, h: 25, sw: 4 }
          ]
        }
      }, // doğru
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "rect", x: 35, y: 35, w: 30, h: 30, sw: 4 }] } },
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "rect", x: 25, y: 35, w: 25, h: 25, sw: 4 },
            { t: "rect", x: 50, y: 35, w: 25, h: 25, sw: 4 }
          ]
        }
      },
      { svg: { viewBox: "0 0 100 100", elements: [] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }] } }
    ],
    correct: 0
  },

  // --- SORU 14 (Anti-Diagonal Daire) ---
  {
    id: "iq-mixed-14",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        // çizgiler ve anti-diagonal üzerindeki daireler
        { t: "line", x1: 20, y1: 20, x2: 90, y2: 90, sw: 4 },
        { t: "line", x1: 120, y1: 20, x2: 190, y2: 90, sw: 4 },
        { t: "circle", cx: 255, cy: 55, r: 15, sw: 4 },

        { t: "line", x1: 20, y1: 120, x2: 90, y2: 190, sw: 4 },
        { t: "circle", cx: 155, cy: 155, r: 15, sw: 4 },
        { t: "line", x1: 220, y1: 120, x2: 290, y2: 190, sw: 4 },

        { t: "circle", cx: 55, cy: 255, r: 15, sw: 4 },
        { t: "line", x1: 120, y1: 220, x2: 190, y2: 290, sw: 4 }
      ]
    },
    options: [
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 20, x2: 90, y2: 90, sw: 4 }] } }, // doğru
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 15, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 80, x2: 80, y2: 20, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 30, sw: 4 }] } }
    ],
    correct: 0
  },

  // --- SORU 15 (Daire İçi Çizgi Rotasyonu) ---
  {
    id: "iq-mixed-15",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        { t: "circle", cx: 55, cy: 55, r: 25, sw: 4 },
        { t: "line", x1: 55, y1: 30, x2: 55, y2: 80, sw: 4 },

        { t: "circle", cx: 155, cy: 55, r: 25, sw: 4 },
        { t: "line", x1: 135, y1: 35, x2: 175, y2: 75, sw: 4 },

        { t: "circle", cx: 255, cy: 55, r: 25, sw: 4 },
        { t: "line", x1: 230, y1: 55, x2: 280, y2: 55, sw: 4 },

        { t: "circle", cx: 55, cy: 155, r: 25, sw: 4 },
        { t: "line", x1: 35, y1: 175, x2: 75, y2: 135, sw: 4 },

        { t: "circle", cx: 155, cy: 155, r: 25, sw: 4 },
        { t: "line", x1: 30, y1: 155, x2: 80, y2: 155, sw: 4 },

        { t: "circle", cx: 255, cy: 155, r: 25, sw: 4 },
        { t: "line", x1: 235, y1: 175, x2: 275, y2: 135, sw: 4 },

        { t: "circle", cx: 55, cy: 255, r: 25, sw: 4 },
        { t: "line", x1: 55, y1: 280, x2: 55, y2: 230, sw: 4 },

        { t: "circle", cx: 155, cy: 255, r: 25, sw: 4 },
        { t: "line", x1: 175, y1: 275, x2: 135, y2: 235, sw: 4 }
      ]
    },
    options: [
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "circle", cx: 50, cy: 50, r: 25, sw: 4 },
            { t: "line", x1: 70, y1: 70, x2: 30, y2: 30, sw: 4 }
          ]
        }
      },
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "circle", cx: 50, cy: 50, r: 25, sw: 4 },
            { t: "line", x1: 50, y1: 75, x2: 50, y2: 25, sw: 4 }
          ]
        }
      },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 25, sw: 4 }] } },
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "circle", cx: 50, cy: 50, r: 25, sw: 4 },
            { t: "line", x1: 25, y1: 50, x2: 75, y2: 50, sw: 4 }
          ]
        }
      }, // doğru (yatay)
      { svg: { viewBox: "0 0 100 100", elements: [] } }
    ],
    correct: 3
  },

  // --- SORU 16 (Toplama Mantığı - Daireler) ---
  {
    id: "iq-mixed-16",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        // 1. satır (1 küçük, 2 küçük, 3 küçük) büyük dairenin yanına ekleniyor
        { t: "circle", cx: 55, cy: 55, r: 30, sw: 4 },

        { t: "circle", cx: 155, cy: 55, r: 30, sw: 4 },
        { t: "circle", cx: 175, cy: 55, r: 10, sw: 4 },

        { t: "circle", cx: 255, cy: 55, r: 30, sw: 4 },
        { t: "circle", cx: 275, cy: 55, r: 10, sw: 4 },
        { t: "circle", cx: 295, cy: 55, r: 10, sw: 4 },

        // 2. satır aynı
        { t: "circle", cx: 55, cy: 155, r: 30, sw: 4 },

        { t: "circle", cx: 155, cy: 155, r: 30, sw: 4 },
        { t: "circle", cx: 175, cy: 155, r: 10, sw: 4 },

        { t: "circle", cx: 255, cy: 155, r: 30, sw: 4 },
        { t: "circle", cx: 275, cy: 155, r: 10, sw: 4 },
        { t: "circle", cx: 295, cy: 155, r: 10, sw: 4 },

        // 3. satır ilk 2 hücre var; son hücre 2 küçük daire daha eklenmeli
        { t: "circle", cx: 55, cy: 255, r: 30, sw: 4 },

        { t: "circle", cx: 155, cy: 255, r: 30, sw: 4 },
        { t: "circle", cx: 175, cy: 255, r: 10, sw: 4 }
      ]
    },
    options: [
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "circle", cx: 45, cy: 50, r: 30, sw: 4 },
            { t: "circle", cx: 70, cy: 50, r: 10, sw: 4 },
            { t: "circle", cx: 90, cy: 50, r: 10, sw: 4 }
          ]
        }
      }, // doğru
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 30, sw: 4 }] } },
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "circle", cx: 50, cy: 50, r: 30, sw: 4 },
            { t: "circle", cx: 75, cy: 50, r: 10, sw: 4 }
          ]
        }
      },
      { svg: { viewBox: "0 0 100 100", elements: [] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }] } }
    ],
    correct: 0
  },

  // --- SORU 17 (X Kesişimi) ---
  {
    id: "iq-mixed-17",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        // hücre desenleri (X kombinasyonu)
        { t: "line", x1: 20, y1: 20, x2: 90, y2: 90, sw: 4 },

        { t: "line", x1: 120, y1: 90, x2: 190, y2: 20, sw: 4 },

        { t: "line", x1: 220, y1: 20, x2: 290, y2: 90, sw: 4 },
        { t: "line", x1: 220, y1: 90, x2: 290, y2: 20, sw: 4 },

        { t: "line", x1: 20, y1: 120, x2: 90, y2: 190, sw: 4 },

        { t: "line", x1: 120, y1: 120, x2: 190, y2: 190, sw: 4 },
        { t: "line", x1: 190, y1: 120, x2: 120, y2: 190, sw: 4 },

        { t: "line", x1: 20, y1: 290, x2: 90, y2: 220, sw: 4 },
        { t: "line", x1: 120, y1: 220, x2: 190, y2: 290, sw: 4 }
      ]
    },
    options: [
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "line", x1: 20, y1: 20, x2: 90, y2: 90, sw: 4 },
            { t: "line", x1: 90, y1: 20, x2: 20, y2: 90, sw: 4 }
          ]
        }
      }, // doğru (X)
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 20, x2: 90, y2: 90, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 90, x2: 90, y2: 20, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 30, sw: 4 }] } }
    ],
    correct: 0
  },

  // --- SORU 18 (Küçülen Kareler) ---
  {
    id: "iq-mixed-18",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        { t: "rect", x: 25, y: 25, w: 60, h: 60, sw: 4 },
        { t: "rect", x: 130, y: 30, w: 50, h: 50, sw: 4 },
        { t: "rect", x: 240, y: 35, w: 40, h: 40, sw: 4 },

        { t: "rect", x: 25, y: 125, w: 60, h: 60, sw: 4 },
        { t: "rect", x: 130, y: 130, w: 50, h: 50, sw: 4 },
        { t: "rect", x: 240, y: 135, w: 40, h: 40, sw: 4 },

        { t: "rect", x: 25, y: 225, w: 60, h: 60, sw: 4 },
        { t: "rect", x: 130, y: 230, w: 50, h: 50, sw: 4 }
      ]
    },
    options: [
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "rect", x: 30, y: 30, w: 40, h: 40, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "rect", x: 25, y: 25, w: 50, h: 50, sw: 4 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "rect", x: 35, y: 35, w: 30, h: 30, sw: 4 }] } }, // doğru (en küçük)
      { svg: { viewBox: "0 0 100 100", elements: [] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 25, sw: 4 }] } }
    ],
    correct: 2
  },

  // --- SORU 19 (İkili Daire Hareketi) ---
  {
    id: "iq-mixed-19",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        // Çift daireler köşegenlerde yer değiştiriyor; hedef “orijinal pozisyona dönüş” gibi.
        { t: "circle", cx: 40, cy: 40, r: 12, sw: 4 },
        { t: "circle", cx: 70, cy: 70, r: 12, sw: 4 },

        { t: "circle", cx: 140, cy: 40, r: 12, sw: 4 },
        { t: "circle", cx: 170, cy: 70, r: 12, sw: 4 },

        { t: "circle", cx: 240, cy: 40, r: 12, sw: 4 },
        { t: "circle", cx: 270, cy: 70, r: 12, sw: 4 },

        { t: "circle", cx: 70, cy: 140, r: 12, sw: 4 },
        { t: "circle", cx: 40, cy: 170, r: 12, sw: 4 },

        { t: "circle", cx: 170, cy: 140, r: 12, sw: 4 },
        { t: "circle", cx: 140, cy: 170, r: 12, sw: 4 },

        { t: "circle", cx: 270, cy: 140, r: 12, sw: 4 },
        { t: "circle", cx: 240, cy: 170, r: 12, sw: 4 },

        { t: "circle", cx: 40, cy: 240, r: 12, sw: 4 },
        { t: "circle", cx: 70, cy: 270, r: 12, sw: 4 },

        { t: "circle", cx: 140, cy: 240, r: 12, sw: 4 },
        { t: "circle", cx: 170, cy: 270, r: 12, sw: 4 }
      ]
    },
    options: [
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "circle", cx: 70, cy: 30, r: 12, sw: 4 },
            { t: "circle", cx: 30, cy: 70, r: 12, sw: 4 }
          ]
        }
      },
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "circle", cx: 30, cy: 30, r: 12, sw: 4 },
            { t: "circle", cx: 70, cy: 70, r: 12, sw: 4 }
          ]
        }
      }, // doğru
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "circle", cx: 30, cy: 70, r: 12, sw: 4 },
            { t: "circle", cx: 70, cy: 30, r: 12, sw: 4 }
          ]
        }
      },
      { svg: { viewBox: "0 0 100 100", elements: [] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }] } }
    ],
    correct: 1
  },

  // --- SORU 20 (Çizgi Artışı) ---
  {
    id: "iq-mixed-20",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        // 1. satır: 1 çizgi -> 2 çizgi -> 3 çizgi (+ nokta gibi)
        { t: "line", x1: 55, y1: 30, x2: 55, y2: 80, sw: 5 },

        { t: "line", x1: 155, y1: 30, x2: 155, y2: 80, sw: 5 },
        { t: "line", x1: 155, y1: 80, x2: 155, y2: 30, sw: 5 },

        { t: "line", x1: 255, y1: 30, x2: 255, y2: 80, sw: 5 },
        { t: "line", x1: 255, y1: 80, x2: 255, y2: 30, sw: 5 },
        { t: "line", x1: 255, y1: 55, x2: 255, y2: 55, sw: 5 },

        // 2. satır yatay versiyon
        { t: "line", x1: 30, y1: 155, x2: 80, y2: 155, sw: 5 },

        { t: "line", x1: 130, y1: 155, x2: 180, y2: 155, sw: 5 },
        { t: "line", x1: 180, y1: 155, x2: 130, y2: 155, sw: 5 },

        { t: "line", x1: 230, y1: 155, x2: 280, y2: 155, sw: 5 },
        { t: "line", x1: 280, y1: 155, x2: 230, y2: 155, sw: 5 },
        { t: "line", x1: 255, y1: 155, x2: 255, y2: 155, sw: 5 },

        // 3. satır ilk 2 hücre var; son hücre “4 öğe” gibi bir kombinasyon bekleniyor
        { t: "line", x1: 30, y1: 255, x2: 80, y2: 255, sw: 5 },

        { t: "line", x1: 130, y1: 255, x2: 180, y2: 255, sw: 5 },
        { t: "line", x1: 180, y1: 255, x2: 130, y2: 255, sw: 5 }
      ]
    },
    options: [
      {
        svg: {
          viewBox: "0 0 100 100",
          elements: [
            { t: "line", x1: 30, y1: 55, x2: 80, y2: 55, sw: 5 },
            { t: "line", x1: 80, y1: 55, x2: 30, y2: 55, sw: 5 },
            { t: "line", x1: 55, y1: 55, x2: 55, y2: 55, sw: 5 },
            { t: "line", x1: 55, y1: 30, x2: 55, y2: 80, sw: 5 }
          ]
        }
      }, // doğru
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 20, y1: 55, x2: 80, y2: 55, sw: 5 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "line", x1: 55, y1: 20, x2: 55, y2: 80, sw: 5 }] } },
      { svg: { viewBox: "0 0 100 100", elements: [] } },
      { svg: { viewBox: "0 0 100 100", elements: [{ t: "circle", cx: 50, cy: 50, r: 25, sw: 4 }] } }
    ],
    correct: 0
  }
];