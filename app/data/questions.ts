// app/data/questions.ts
import type { SvgData } from "../components/SvgRenderer";

type Domain = "logic" | "math" | "visual" | "attention";

type IQQuestion =
  | {
      id: string;
      domain: Domain;
      type: "visual-matrix" | "visual-matrix-2x2" | "visual-matrix-3x3";
      prompt: string;
      questionSvg: SvgData;
      options: { svg: SvgData }[];
      correct: number;
      explanation?: string;
    };

const opt = (elements: any[], viewBox = "0 0 100 100"): { svg: SvgData } => ({
  svg: { viewBox, elements } as SvgData,
});

export const questions: IQQuestion[] = [
  // =========================================================
  // 1–8: ISINMA (kolay Raven)
  // =========================================================

  // 1) Nokta köşe gezme (2x2)
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

        { t: "circle", cx: 35, cy: 35, r: 10, sw: 4 }, // TL
        { t: "circle", cx: 185, cy: 35, r: 10, sw: 4 }, // TR
        { t: "circle", cx: 35, cy: 185, r: 10, sw: 4 }, // BL
      ],
    },
    options: [
      opt([{ t: "circle", cx: 25, cy: 25, r: 10, sw: 4 }]),
      opt([{ t: "circle", cx: 75, cy: 75, r: 10, sw: 4 }]), // ✅ BR
      opt([{ t: "circle", cx: 50, cy: 50, r: 10, sw: 4 }]),
      opt([{ t: "rect", x: 35, y: 35, w: 30, h: 30, sw: 4 }]),
      opt([{ t: "circle", cx: 75, cy: 25, r: 10, sw: 4 }]),
    ],
    correct: 1,
    explanation: "The dot moves clockwise through the corners; the missing one is bottom-right.",
  },

  // 2) Yatay/Dikey dönüş (2x2)
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

        { t: "line", x1: 25, y1: 55, x2: 85, y2: 55, sw: 6 }, // TL: horizontal
        { t: "line", x1: 165, y1: 25, x2: 165, y2: 85, sw: 6 }, // TR: vertical
        { t: "line", x1: 55, y1: 135, x2: 55, y2: 195, sw: 6 }, // BL: vertical
        // BR should be horizontal (swap in row2)
      ],
    },
    options: [
      opt([{ t: "line", x1: 50, y1: 20, x2: 50, y2: 80, sw: 6 }]),
      opt([{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }]),
      opt([{ t: "line", x1: 20, y1: 50, x2: 80, y2: 50, sw: 6 }]), // ✅ horizontal
      opt([{ t: "line", x1: 20, y1: 20, x2: 80, y2: 80, sw: 6 }]),
      opt([]),
    ],
    correct: 2,
    explanation: "Top row: horizontal→vertical. Bottom row mirrors it: vertical→horizontal.",
  },

  // 3) Boyut artışı (2x2)
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

        { t: "rect", x: 45, y: 45, w: 20, h: 20, sw: 4 }, // small
        { t: "rect", x: 140, y: 40, w: 30, h: 30, sw: 4 }, // medium
        { t: "rect", x: 25, y: 135, w: 60, h: 60, sw: 4 }, // large
      ],
    },
    options: [
      opt([{ t: "rect", x: 40, y: 40, w: 20, h: 20, sw: 4 }]),
      opt([{ t: "rect", x: 35, y: 35, w: 30, h: 30, sw: 4 }]),
      opt([{ t: "rect", x: 10, y: 10, w: 80, h: 80, sw: 4 }]), // ✅ biggest (continue growth)
      opt([{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }]),
      opt([]),
    ],
    correct: 2,
    explanation: "The inner square grows; the missing is the largest.",
  },

  // 4) Overlay (A + B = C) (2x2)
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

        // TL: circle
        { t: "circle", cx: 55, cy: 55, r: 30, sw: 4 },
        // TR: square
        { t: "rect", x: 140, y: 35, w: 40, h: 40, sw: 4 },
        // BL: circle + square (overlay)
        { t: "circle", cx: 55, cy: 165, r: 30, sw: 4 },
        { t: "rect", x: 35, y: 145, w: 40, h: 40, sw: 4 },
        // BR should be the other "component" (square) after overlay rule
      ],
    },
    options: [
      opt([{ t: "circle", cx: 50, cy: 50, r: 30, sw: 4 }]),
      opt([{ t: "rect", x: 30, y: 30, w: 40, h: 40, sw: 4 }]), // ✅
      opt([
        { t: "circle", cx: 50, cy: 50, r: 30, sw: 4 },
        { t: "rect", x: 30, y: 30, w: 40, h: 40, sw: 4 },
      ]),
      opt([{ t: "line", x1: 20, y1: 20, x2: 80, y2: 80, sw: 4 }]),
      opt([]),
    ],
    correct: 1,
    explanation: "Bottom-left is an overlay of top-left and top-right, so the missing tile is the remaining component: the square.",
  },

  // 5) Rotation (2x2)
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

        { t: "line", x1: 55, y1: 20, x2: 55, y2: 90, sw: 6 }, // vertical
        { t: "line", x1: 130, y1: 55, x2: 200, y2: 55, sw: 6 }, // horizontal
        { t: "line", x1: 20, y1: 165, x2: 90, y2: 165, sw: 6 }, // horizontal
        // BR should be vertical
      ],
    },
    options: [
      opt([{ t: "line", x1: 20, y1: 20, x2: 80, y2: 80, sw: 6 }]),
      opt([{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }]),
      opt([{ t: "line", x1: 50, y1: 20, x2: 50, y2: 80, sw: 6 }]), // ✅ vertical
      opt([{ t: "line", x1: 20, y1: 50, x2: 80, y2: 50, sw: 6 }]),
      opt([]),
    ],
    correct: 2,
    explanation: "The line alternates orientation; the missing is vertical.",
  },

  // 6) 3x3: sayım 1-2-3 (kolay)
  {
    id: "iq-mixed-06",
    domain: "visual",
    type: "visual-matrix-3x3",
    prompt: "Which option completes the pattern?",
    questionSvg: {
      viewBox: "0 0 330 330",
      elements: [
        // grid
        { t: "rect", x: 10, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 10, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 10, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 110, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 110, w: 90, h: 90, sw: 4 },

        { t: "rect", x: 10, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 110, y: 210, w: 90, h: 90, sw: 4 },
        { t: "rect", x: 210, y: 210, w: 90, h: 90, sw: 4, dash: true },

        // row1: 1 dot, row2: 2 dots, row3: 3 dots (missing)
        { t: "circle", cx: 55, cy: 55, r: 8, sw: 4 },
        { t: "circle", cx: 155, cy: 55, r: 8, sw: 4 },
        { t: "circle", cx: 255, cy: 55, r: 8, sw: 4 },

        { t: "circle", cx: 45, cy: 155, r: 8, sw: 4 },
        { t: "circle", cx: 65, cy: 155, r: 8, sw: 4 },

        { t: "circle", cx: 145, cy: 155, r: 8, sw: 4 },
        { t: "circle", cx: 165, cy: 155, r: 8, sw: 4 },

        { t: "circle", cx: 245, cy: 155, r: 8, sw: 4 },
        { t: "circle", cx: 265, cy: 155, r: 8, sw: 4 },

        { t: "circle", cx: 45, cy: 255, r: 8, sw: 4 },
        { t: "circle", cx: 65, cy: 255, r: 8, sw: 4 },
      ],
    },
    options: [
      opt([
        { t: "circle", cx: 30, cy: 50, r: 8, sw: 4 },
        { t: "circle", cx: 50, cy: 50, r: 8, sw: 4 },
        { t: "circle", cx: 70, cy: 50, r: 8, sw: 4 },
      ]), // ✅ 3 dots
      opt([{ t: "circle", cx: 50, cy: 50, r: 8, sw: 4 }]),
      opt([]),
      opt([{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }]),
      opt([{ t: "rect", x: 20, y: 20, w: 60, h: 60, sw: 4 }]),
    ],
    correct: 0,
    explanation: "Each row increases the count of dots: 1, then 2, then 3.",
  },

  // 7) 3x3: aynı diagonal çizgi (kolay)
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

        // 8 known
        { t: "line", x1: 20, y1: 20, x2: 90, y2: 90, sw: 5 },
        { t: "line", x1: 120, y1: 20, x2: 190, y2: 90, sw: 5 },
        { t: "line", x1: 220, y1: 20, x2: 290, y2: 90, sw: 5 },
        { t: "line", x1: 20, y1: 120, x2: 90, y2: 190, sw: 5 },
        { t: "line", x1: 120, y1: 120, x2: 190, y2: 190, sw: 5 },
        { t: "line", x1: 220, y1: 120, x2: 290, y2: 190, sw: 5 },
        { t: "line", x1: 20, y1: 220, x2: 90, y2: 290, sw: 5 },
        { t: "line", x1: 120, y1: 220, x2: 190, y2: 290, sw: 5 },
      ],
    },
    options: [
      opt([{ t: "line", x1: 20, y1: 20, x2: 90, y2: 90, sw: 5 }]), // ✅ same diagonal
      opt([{ t: "line", x1: 20, y1: 80, x2: 80, y2: 20, sw: 5 }]),
      opt([{ t: "line", x1: 50, y1: 20, x2: 50, y2: 80, sw: 5 }]),
      opt([]),
      opt([{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }]),
    ],
    correct: 0,
    explanation: "All tiles use the same diagonal line direction; the missing tile matches it.",
  },

  // 8) 3x3: büyüyen daire (kolay)
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

        // r: 10,15,20 each row
        { t: "circle", cx: 55, cy: 55, r: 10, sw: 4 },
        { t: "circle", cx: 155, cy: 55, r: 15, sw: 4 },
        { t: "circle", cx: 255, cy: 55, r: 20, sw: 4 },

        { t: "circle", cx: 55, cy: 155, r: 10, sw: 4 },
        { t: "circle", cx: 155, cy: 155, r: 15, sw: 4 },
        { t: "circle", cx: 255, cy: 155, r: 20, sw: 4 },

        { t: "circle", cx: 55, cy: 255, r: 10, sw: 4 },
        { t: "circle", cx: 155, cy: 255, r: 15, sw: 4 },
      ],
    },
    options: [
      opt([{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }]), // ✅
      opt([{ t: "circle", cx: 50, cy: 50, r: 15, sw: 4 }]),
      opt([{ t: "circle", cx: 50, cy: 50, r: 10, sw: 4 }]),
      opt([]),
      opt([{ t: "rect", x: 20, y: 20, w: 60, h: 60, sw: 4 }]),
    ],
    correct: 0,
    explanation: "Each column keeps the same radius; the missing is radius 20.",
  },

  // =========================================================
  // 9–20: ADVANCED RAVEN (son 12 soru)
  // =========================================================

  // 9) Advanced: OR/Union (A + B = C) with corners
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

        // Row rule: C = union of A and B (corner dots)
        // Row1
        { t: "circle", cx: 30, cy: 30, r: 6, sw: 4 }, // A1: TL
        { t: "circle", cx: 170, cy: 30, r: 6, sw: 4 }, // B1: TR
        { t: "circle", cx: 230, cy: 30, r: 6, sw: 4 }, // C1: TL+TR
        { t: "circle", cx: 290, cy: 30, r: 6, sw: 4 },

        // Row2
        { t: "circle", cx: 30, cy: 170, r: 6, sw: 4 }, // A2: BL
        { t: "circle", cx: 170, cy: 170, r: 6, sw: 4 }, // B2: BR
        { t: "circle", cx: 230, cy: 170, r: 6, sw: 4 }, // C2: BL+BR
        { t: "circle", cx: 290, cy: 170, r: 6, sw: 4 },

        // Row3: A3 has TL+BL, B3 has TR+BR -> C3 should have all four
        { t: "circle", cx: 30, cy: 230, r: 6, sw: 4 },
        { t: "circle", cx: 30, cy: 290, r: 6, sw: 4 },
        { t: "circle", cx: 170, cy: 230, r: 6, sw: 4 },
        { t: "circle", cx: 170, cy: 290, r: 6, sw: 4 },
      ],
    },
    options: [
      opt([
        { t: "circle", cx: 25, cy: 25, r: 6, sw: 4 },
        { t: "circle", cx: 75, cy: 25, r: 6, sw: 4 },
        { t: "circle", cx: 25, cy: 75, r: 6, sw: 4 },
        { t: "circle", cx: 75, cy: 75, r: 6, sw: 4 },
      ]), // ✅ all four corners
      opt([{ t: "circle", cx: 25, cy: 25, r: 6, sw: 4 }]),
      opt([
        { t: "circle", cx: 25, cy: 25, r: 6, sw: 4 },
        { t: "circle", cx: 75, cy: 75, r: 6, sw: 4 },
      ]),
      opt([{ t: "rect", x: 20, y: 20, w: 60, h: 60, sw: 4 }]),
      opt([]),
    ],
    correct: 0,
    explanation: "In each row, the third cell is the union of the first two (combine the corner marks).",
  },

  // 10) Advanced: XOR (same cancels)
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

        // Row rule: C = XOR(A,B)
        // Row1: A=circle, B=circle+square -> XOR => square
        { t: "circle", cx: 55, cy: 55, r: 25, sw: 4 },
        { t: "circle", cx: 155, cy: 55, r: 25, sw: 4 },
        { t: "rect", x: 135, y: 35, w: 40, h: 40, sw: 4 },
        { t: "rect", x: 235, y: 35, w: 40, h: 40, sw: 4 }, // C1 square

        // Row2: A=square, B=circle+square -> XOR => circle
        { t: "rect", x: 35, y: 135, w: 40, h: 40, sw: 4 },
        { t: "rect", x: 135, y: 135, w: 40, h: 40, sw: 4 },
        { t: "circle", cx: 155, cy: 155, r: 25, sw: 4 },
        { t: "circle", cx: 255, cy: 155, r: 25, sw: 4 }, // C2 circle

        // Row3: A=circle+square, B=circle -> XOR => square (missing)
        { t: "circle", cx: 55, cy: 255, r: 25, sw: 4 },
        { t: "rect", x: 35, y: 235, w: 40, h: 40, sw: 4 },
        { t: "circle", cx: 155, cy: 255, r: 25, sw: 4 },
      ],
    },
    options: [
      opt([{ t: "rect", x: 30, y: 30, w: 40, h: 40, sw: 4 }]), // ✅ square
      opt([{ t: "circle", cx: 50, cy: 50, r: 25, sw: 4 }]),
      opt([
        { t: "circle", cx: 50, cy: 50, r: 25, sw: 4 },
        { t: "rect", x: 30, y: 30, w: 40, h: 40, sw: 4 },
      ]),
      opt([{ t: "line", x1: 20, y1: 50, x2: 80, y2: 50, sw: 6 }]),
      opt([]),
    ],
    correct: 0,
    explanation: "XOR rule: shared shape cancels out; only the non-common shape remains.",
  },

  // 11) Advanced: rotation sequence inside circle (8-step, missing is horizontal)
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

        // 8 directions (N, NE, E, SE, S, SW, W, NW) and missing would be N? We set pattern to make missing = horizontal
        // Row1: vertical, diag NE, horizontal
        { t: "circle", cx: 55, cy: 55, r: 25, sw: 4 },
        { t: "line", x1: 55, y1: 30, x2: 55, y2: 80, sw: 4 },

        { t: "circle", cx: 155, cy: 55, r: 25, sw: 4 },
        { t: "line", x1: 135, y1: 35, x2: 175, y2: 75, sw: 4 },

        { t: "circle", cx: 255, cy: 55, r: 25, sw: 4 },
        { t: "line", x1: 230, y1: 55, x2: 280, y2: 55, sw: 4 },

        // Row2: diag NW, horizontal, diag SE
        { t: "circle", cx: 55, cy: 155, r: 25, sw: 4 },
        { t: "line", x1: 35, y1: 175, x2: 75, y2: 135, sw: 4 },

        { t: "circle", cx: 155, cy: 155, r: 25, sw: 4 },
        { t: "line", x1: 130, y1: 155, x2: 180, y2: 155, sw: 4 },

        { t: "circle", cx: 255, cy: 155, r: 25, sw: 4 },
        { t: "line", x1: 235, y1: 135, x2: 275, y2: 175, sw: 4 },

        // Row3: vertical (down), diag SW, missing should be horizontal (continue rotation)
        { t: "circle", cx: 55, cy: 255, r: 25, sw: 4 },
        { t: "line", x1: 55, y1: 280, x2: 55, y2: 230, sw: 4 },

        { t: "circle", cx: 155, cy: 255, r: 25, sw: 4 },
        { t: "line", x1: 175, y1: 235, x2: 135, y2: 275, sw: 4 },
      ],
    },
    options: [
      opt([
        { t: "circle", cx: 50, cy: 50, r: 25, sw: 4 },
        { t: "line", x1: 30, y1: 70, x2: 70, y2: 30, sw: 4 },
      ]),
      opt([
        { t: "circle", cx: 50, cy: 50, r: 25, sw: 4 },
        { t: "line", x1: 50, y1: 75, x2: 50, y2: 25, sw: 4 },
      ]),
      opt([{ t: "circle", cx: 50, cy: 50, r: 25, sw: 4 }]),
      opt([
        { t: "circle", cx: 50, cy: 50, r: 25, sw: 4 },
        { t: "line", x1: 25, y1: 50, x2: 75, y2: 50, sw: 4 },
      ]), // ✅ horizontal
      opt([]),
    ],
    correct: 3,
    explanation: "The line direction rotates; the next required orientation is horizontal.",
  },

  // 12) Advanced: positional drift (3-step left shift)
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

        // x-position shifts left as go down rows: 75 -> 55 -> 35
        { t: "circle", cx: 75, cy: 55, r: 10, sw: 4 },
        { t: "circle", cx: 175, cy: 55, r: 10, sw: 4 },
        { t: "circle", cx: 275, cy: 55, r: 10, sw: 4 },

        { t: "circle", cx: 55, cy: 155, r: 10, sw: 4 },
        { t: "circle", cx: 155, cy: 155, r: 10, sw: 4 },
        { t: "circle", cx: 255, cy: 155, r: 10, sw: 4 },

        { t: "circle", cx: 35, cy: 255, r: 10, sw: 4 },
        { t: "circle", cx: 135, cy: 255, r: 10, sw: 4 },
      ],
    },
    options: [
      opt([{ t: "circle", cx: 25, cy: 50, r: 10, sw: 4 }]), // ✅
      opt([{ t: "circle", cx: 50, cy: 50, r: 10, sw: 4 }]),
      opt([{ t: "circle", cx: 75, cy: 50, r: 10, sw: 4 }]),
      opt([]),
      opt([{ t: "circle", cx: 50, cy: 50, r: 30, sw: 4 }]),
    ],
    correct: 0,
    explanation: "Each row shifts the dot further left; the last one is the leftmost position.",
  },

  // 13) Advanced: count pattern per column (1,2,3) with strict progression
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

        // Column counts: col1=1 square, col2=2 squares, col3=3 squares
        // row1
        { t: "rect", x: 40, y: 40, w: 30, h: 30, sw: 4 },
        { t: "rect", x: 140, y: 40, w: 25, h: 25, sw: 4 },
        { t: "rect", x: 170, y: 40, w: 25, h: 25, sw: 4 },
        { t: "rect", x: 235, y: 40, w: 22, h: 22, sw: 4 },
        { t: "rect", x: 262, y: 40, w: 22, h: 22, sw: 4 },
        { t: "rect", x: 289, y: 40, w: 22, h: 22, sw: 4 },

        // row2 (same pattern)
        { t: "rect", x: 40, y: 140, w: 30, h: 30, sw: 4 },
        { t: "rect", x: 140, y: 140, w: 25, h: 25, sw: 4 },
        { t: "rect", x: 170, y: 140, w: 25, h: 25, sw: 4 },
        { t: "rect", x: 235, y: 140, w: 22, h: 22, sw: 4 },
        { t: "rect", x: 262, y: 140, w: 22, h: 22, sw: 4 },
        { t: "rect", x: 289, y: 140, w: 22, h: 22, sw: 4 },

        // row3 known cells
        { t: "rect", x: 40, y: 240, w: 30, h: 30, sw: 4 },
        { t: "rect", x: 140, y: 240, w: 25, h: 25, sw: 4 },
        { t: "rect", x: 170, y: 240, w: 25, h: 25, sw: 4 },
      ],
    },
    options: [
      opt([
        { t: "rect", x: 18, y: 40, w: 22, h: 22, sw: 4 },
        { t: "rect", x: 44, y: 40, w: 22, h: 22, sw: 4 },
        { t: "rect", x: 70, y: 40, w: 22, h: 22, sw: 4 },
      ]), // ✅ 3 squares
      opt([{ t: "rect", x: 35, y: 40, w: 30, h: 30, sw: 4 }]),
      opt([
        { t: "rect", x: 25, y: 40, w: 25, h: 25, sw: 4 },
        { t: "rect", x: 55, y: 40, w: 25, h: 25, sw: 4 },
      ]),
      opt([]),
      opt([{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }]),
    ],
    correct: 0,
    explanation: "Each column indicates how many squares appear: 1, 2, then 3.",
  },

  // 14) Advanced: alternating diagonal vs circle (anti-diagonal control)
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

        // Pattern: on anti-diagonal positions -> circle; others -> diagonal line
        { t: "line", x1: 20, y1: 20, x2: 90, y2: 90, sw: 4 },
        { t: "line", x1: 120, y1: 20, x2: 190, y2: 90, sw: 4 },
        { t: "circle", cx: 255, cy: 55, r: 15, sw: 4 }, // anti-diagonal (r1c3)

        { t: "line", x1: 20, y1: 120, x2: 90, y2: 190, sw: 4 },
        { t: "circle", cx: 155, cy: 155, r: 15, sw: 4 }, // anti-diagonal (r2c2)
        { t: "line", x1: 220, y1: 120, x2: 290, y2: 190, sw: 4 },

        { t: "circle", cx: 55, cy: 255, r: 15, sw: 4 }, // anti-diagonal (r3c1)
        { t: "line", x1: 120, y1: 220, x2: 190, y2: 290, sw: 4 },
      ],
    },
    options: [
      opt([{ t: "line", x1: 20, y1: 20, x2: 90, y2: 90, sw: 4 }]), // ✅ should be a diagonal line
      opt([{ t: "circle", cx: 50, cy: 50, r: 15, sw: 4 }]),
      opt([{ t: "line", x1: 20, y1: 80, x2: 80, y2: 20, sw: 4 }]),
      opt([]),
      opt([{ t: "circle", cx: 50, cy: 50, r: 30, sw: 4 }]),
    ],
    correct: 0,
    explanation: "Only anti-diagonal cells are circles; the missing cell is not on that diagonal, so it is a diagonal line.",
  },

  // 15) Advanced: triangle rotation by row (up, right, down)
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

        // Row1: up triangles
        { t: "path", d: "M55 30 L80 80 L30 80 Z", sw: 4 },
        { t: "path", d: "M155 30 L180 80 L130 80 Z", sw: 4 },
        { t: "path", d: "M255 30 L280 80 L230 80 Z", sw: 4 },

        // Row2: right triangles
        { t: "path", d: "M80 155 L30 180 L30 130 Z", sw: 4 },
        { t: "path", d: "M180 155 L130 180 L130 130 Z", sw: 4 },
        { t: "path", d: "M280 155 L230 180 L230 130 Z", sw: 4 },

        // Row3: down triangles (missing is down)
        { t: "path", d: "M55 255 L80 205 L30 205 Z", sw: 4 },
        { t: "path", d: "M155 255 L180 205 L130 205 Z", sw: 4 },
      ],
    },
    options: [
      opt([{ t: "path", d: "M50 80 L80 30 L20 30 Z", sw: 4 }]), // ✅ down
      opt([{ t: "path", d: "M50 20 L80 70 L20 70 Z", sw: 4 }]),
      opt([{ t: "path", d: "M20 50 L70 80 L70 20 Z", sw: 4 }]),
      opt([{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }]),
      opt([]),
    ],
    correct: 0,
    explanation: "Each row rotates the triangle by 90°: up → right → down.",
  },

  // 16) Advanced: arithmetic count (1 + 2 = 3) using small dots
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

        // In each row: cell3 = cell1 + cell2 (dot count)
        // Row1: 1 + 2 = 3
        { t: "circle", cx: 55, cy: 55, r: 6, sw: 4 },
        { t: "circle", cx: 145, cy: 55, r: 6, sw: 4 },
        { t: "circle", cx: 165, cy: 55, r: 6, sw: 4 },

        { t: "circle", cx: 235, cy: 55, r: 6, sw: 4 },
        { t: "circle", cx: 255, cy: 55, r: 6, sw: 4 },
        { t: "circle", cx: 275, cy: 55, r: 6, sw: 4 },

        // Row2: 2 + 1 = 3
        { t: "circle", cx: 45, cy: 155, r: 6, sw: 4 },
        { t: "circle", cx: 65, cy: 155, r: 6, sw: 4 },
        { t: "circle", cx: 155, cy: 155, r: 6, sw: 4 },
        { t: "circle", cx: 235, cy: 155, r: 6, sw: 4 },
        { t: "circle", cx: 255, cy: 155, r: 6, sw: 4 },
        { t: "circle", cx: 275, cy: 155, r: 6, sw: 4 },

        // Row3: 3 + 2 = 5 -> missing should have 5 dots
        { t: "circle", cx: 35, cy: 255, r: 6, sw: 4 },
        { t: "circle", cx: 55, cy: 255, r: 6, sw: 4 },
        { t: "circle", cx: 75, cy: 255, r: 6, sw: 4 },

        { t: "circle", cx: 145, cy: 255, r: 6, sw: 4 },
        { t: "circle", cx: 165, cy: 255, r: 6, sw: 4 },
      ],
    },
    options: [
      opt([
        { t: "circle", cx: 20, cy: 50, r: 6, sw: 4 },
        { t: "circle", cx: 35, cy: 50, r: 6, sw: 4 },
        { t: "circle", cx: 50, cy: 50, r: 6, sw: 4 },
        { t: "circle", cx: 65, cy: 50, r: 6, sw: 4 },
        { t: "circle", cx: 80, cy: 50, r: 6, sw: 4 },
      ]), // ✅ 5 dots
      opt([{ t: "circle", cx: 50, cy: 50, r: 6, sw: 4 }]),
      opt([
        { t: "circle", cx: 35, cy: 50, r: 6, sw: 4 },
        { t: "circle", cx: 65, cy: 50, r: 6, sw: 4 },
      ]),
      opt([]),
      opt([{ t: "rect", x: 25, y: 25, w: 50, h: 50, sw: 4 }]),
    ],
    correct: 0,
    explanation: "Row rule: third cell equals the sum of dot counts in the first two cells.",
  },

  // 17) Advanced: X appears only when both diagonals present (AND)
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

        // Some tiles have one diagonal, some have both (X). Missing should be X.
        { t: "line", x1: 20, y1: 20, x2: 90, y2: 90, sw: 4 }, // \
        { t: "line", x1: 120, y1: 90, x2: 190, y2: 20, sw: 4 }, // /
        { t: "line", x1: 220, y1: 20, x2: 290, y2: 90, sw: 4 },
        { t: "line", x1: 220, y1: 90, x2: 290, y2: 20, sw: 4 }, // X in r1c3

        { t: "line", x1: 20, y1: 120, x2: 90, y2: 190, sw: 4 },
        { t: "line", x1: 120, y1: 120, x2: 190, y2: 190, sw: 4 },
        { t: "line", x1: 190, y1: 120, x2: 120, y2: 190, sw: 4 }, // X in r2c2

        { t: "line", x1: 20, y1: 290, x2: 90, y2: 220, sw: 4 }, // /
        { t: "line", x1: 120, y1: 220, x2: 190, y2: 290, sw: 4 }, // \
      ],
    },
    options: [
      opt([
        { t: "line", x1: 20, y1: 20, x2: 90, y2: 90, sw: 4 },
        { t: "line", x1: 90, y1: 20, x2: 20, y2: 90, sw: 4 },
      ]), // ✅ X
      opt([{ t: "line", x1: 20, y1: 20, x2: 90, y2: 90, sw: 4 }]),
      opt([{ t: "line", x1: 20, y1: 90, x2: 90, y2: 20, sw: 4 }]),
      opt([]),
      opt([{ t: "circle", cx: 50, cy: 50, r: 30, sw: 4 }]),
    ],
    correct: 0,
    explanation: "The missing tile must contain both diagonals (an X) to match the pattern of combined diagonals.",
  },

  // 18) Advanced: shrinking squares (strict size)
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
        { t: "rect", x: 130, y: 230, w: 50, h: 50, sw: 4 },
      ],
    },
    options: [
      opt([{ t: "rect", x: 45, y: 35, w: 40, h: 40, sw: 4 }]),
      opt([{ t: "rect", x: 25, y: 35, w: 50, h: 50, sw: 4 }]),
      opt([{ t: "rect", x: 35, y: 35, w: 30, h: 30, sw: 4 }]), // ✅ smallest
      opt([]),
      opt([{ t: "circle", cx: 50, cy: 50, r: 25, sw: 4 }]),
    ],
    correct: 2,
    explanation: "Size decreases across columns; the missing is the smallest square.",
  },

  // 19) Advanced: two dots swap positions each row (mirror + swap)
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

        // r1: (TL, BR)
        { t: "circle", cx: 40, cy: 40, r: 10, sw: 4 },
        { t: "circle", cx: 70, cy: 70, r: 10, sw: 4 },

        { t: "circle", cx: 140, cy: 40, r: 10, sw: 4 },
        { t: "circle", cx: 170, cy: 70, r: 10, sw: 4 },

        { t: "circle", cx: 240, cy: 40, r: 10, sw: 4 },
        { t: "circle", cx: 270, cy: 70, r: 10, sw: 4 },

        // r2: swapped (TR, BL)
        { t: "circle", cx: 70, cy: 140, r: 10, sw: 4 },
        { t: "circle", cx: 40, cy: 170, r: 10, sw: 4 },

        { t: "circle", cx: 170, cy: 140, r: 10, sw: 4 },
        { t: "circle", cx: 140, cy: 170, r: 10, sw: 4 },

        { t: "circle", cx: 270, cy: 140, r: 10, sw: 4 },
        { t: "circle", cx: 240, cy: 170, r: 10, sw: 4 },

        // r3 should go back to (TL, BR) pattern
        { t: "circle", cx: 40, cy: 240, r: 10, sw: 4 },
        { t: "circle", cx: 70, cy: 270, r: 10, sw: 4 },

        { t: "circle", cx: 140, cy: 240, r: 10, sw: 4 },
        { t: "circle", cx: 170, cy: 270, r: 10, sw: 4 },
      ],
    },
    options: [
      opt([
        { t: "circle", cx: 70, cy: 30, r: 10, sw: 4 },
        { t: "circle", cx: 30, cy: 70, r: 10, sw: 4 },
      ]), // swapped (wrong)
      opt([
        { t: "circle", cx: 30, cy: 30, r: 10, sw: 4 },
        { t: "circle", cx: 70, cy: 70, r: 10, sw: 4 },
      ]), // ✅ TL + BR
      opt([
        { t: "circle", cx: 30, cy: 70, r: 10, sw: 4 },
        { t: "circle", cx: 70, cy: 30, r: 10, sw: 4 },
      ]),
      opt([]),
      opt([{ t: "circle", cx: 50, cy: 50, r: 20, sw: 4 }]),
    ],
    correct: 1,
    explanation: "Rows alternate between (TL+BR) and (TR+BL). The last row returns to (TL+BR).",
  },

  // 20) Advanced: stroke count increases (1,2,3) and direction switches by row
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

        // Row1: vertical strokes count 1,2,3
        { t: "line", x1: 55, y1: 30, x2: 55, y2: 80, sw: 5 },

        { t: "line", x1: 145, y1: 30, x2: 145, y2: 80, sw: 5 },
        { t: "line", x1: 165, y1: 30, x2: 165, y2: 80, sw: 5 },

        { t: "line", x1: 235, y1: 30, x2: 235, y2: 80, sw: 5 },
        { t: "line", x1: 255, y1: 30, x2: 255, y2: 80, sw: 5 },
        { t: "line", x1: 275, y1: 30, x2: 275, y2: 80, sw: 5 },

        // Row2: horizontal strokes count 1,2,3
        { t: "line", x1: 30, y1: 155, x2: 80, y2: 155, sw: 5 },

        { t: "line", x1: 130, y1: 155, x2: 180, y2: 155, sw: 5 },
        { t: "line", x1: 130, y1: 170, x2: 180, y2: 170, sw: 5 },

        { t: "line", x1: 230, y1: 145, x2: 280, y2: 145, sw: 5 },
        { t: "line", x1: 230, y1: 155, x2: 280, y2: 155, sw: 5 },
        { t: "line", x1: 230, y1: 165, x2: 280, y2: 165, sw: 5 },

        // Row3 should return to vertical strokes count 1,2,3; missing is 3 vertical
        { t: "line", x1: 55, y1: 230, x2: 55, y2: 280, sw: 5 },

        { t: "line", x1: 145, y1: 230, x2: 145, y2: 280, sw: 5 },
        { t: "line", x1: 165, y1: 230, x2: 165, y2: 280, sw: 5 },
      ],
    },
    options: [
      opt([
        { t: "line", x1: 30, y1: 20, x2: 30, y2: 80, sw: 5 },
        { t: "line", x1: 50, y1: 20, x2: 50, y2: 80, sw: 5 },
        { t: "line", x1: 70, y1: 20, x2: 70, y2: 80, sw: 5 },
      ]), // ✅ 3 vertical strokes
      opt([{ t: "line", x1: 20, y1: 55, x2: 80, y2: 55, sw: 5 }]),
      opt([{ t: "line", x1: 55, y1: 20, x2: 55, y2: 80, sw: 5 }]),
      opt([]),
      opt([{ t: "circle", cx: 50, cy: 50, r: 25, sw: 4 }]),
    ],
    correct: 0,
    explanation: "Rows alternate orientation (vertical/horizontal/vertical) while stroke count increases 1→2→3 by columns.",
  },
];