// app/data/questions.ts

import { SvgData } from "../components/SvgRenderer";

export const questions = [
  // --- 1. SORU ---
  {
    "id": "iq2x2-01",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "circle", "cx": 55, "cy": 55, "r": 18, "sw": 4 },
        { "t": "circle", "cx": 165, "cy": 55, "r": 18, "sw": 4 },
        { "t": "circle", "cx": 55, "cy": 165, "r": 18, "sw": 4 },
        { "t": "line", "x1": 45, "y1": 45, "x2": 65, "y2": 65, "sw": 4 },
        { "t": "line", "x1": 155, "y1": 45, "x2": 175, "y2": 65, "sw": 4 },
        { "t": "line", "x1": 45, "y1": 155, "x2": 65, "y2": 175, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 18, "sw": 4 }, { "t": "line", "x1": 40, "y1": 40, "x2": 60, "y2": 60, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 18, "sw": 4 }, { "t": "line", "x1": 60, "y1": 40, "x2": 40, "y2": 60, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 32, "y": 32, "w": 36, "h": 36, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 24, "sw": 4 }, { "t": "line", "x1": 40, "y1": 40, "x2": 60, "y2": 60, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 18, "sw": 4 }, { "t": "line", "x1": 40, "y1": 60, "x2": 60, "y2": 40, "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 2. SORU ---
  {
    "id": "iq2x2-02",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "rect", "x": 35, "y": 30, "w": 40, "h": 40, "sw": 4 },
        { "t": "rect", "x": 145, "y": 30, "w": 40, "h": 40, "sw": 4 },
        { "t": "rect", "x": 35, "y": 140, "w": 40, "h": 40, "sw": 4 },
        { "t": "circle", "cx": 55, "cy": 70, "r": 10, "sw": 4 },
        { "t": "circle", "cx": 185, "cy": 50, "r": 10, "sw": 4 },
        { "t": "circle", "cx": 75, "cy": 160, "r": 10, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 25, "y": 20, "w": 40, "h": 40, "sw": 4 }, { "t": "circle", "cx": 65, "cy": 40, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 25, "y": 20, "w": 40, "h": 40, "sw": 4 }, { "t": "circle", "cx": 35, "cy": 60, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 35, "y": 25, "w": 40, "h": 40, "sw": 4 }, { "t": "circle", "cx": 65, "cy": 60, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 25, "y": 20, "w": 40, "h": 40, "sw": 4 }, { "t": "circle", "cx": 75, "cy": 60, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 18, "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 3. SORU ---
  {
    "id": "iq2x2-03",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "line", "x1": 25, "y1": 25, "x2": 85, "y2": 85, "sw": 6 },
        { "t": "line", "x1": 145, "y1": 25, "x2": 205, "y2": 85, "sw": 6 },
        { "t": "line", "x1": 25, "y1": 145, "x2": 85, "y2": 205, "sw": 6 },
        { "t": "circle", "cx": 30, "cy": 80, "r": 8, "sw": 4 },
        { "t": "circle", "cx": 200, "cy": 30, "r": 8, "sw": 4 },
        { "t": "circle", "cx": 80, "cy": 150, "r": 8, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "line", "x1": 15, "y1": 15, "x2": 85, "y2": 85, "sw": 6 }, { "t": "circle", "cx": 80, "cy": 80, "r": 8, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "line", "x1": 15, "y1": 85, "x2": 85, "y2": 15, "sw": 6 }, { "t": "circle", "cx": 80, "cy": 80, "r": 8, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "line", "x1": 15, "y1": 15, "x2": 85, "y2": 85, "sw": 6 }, { "t": "circle", "cx": 20, "cy": 80, "r": 8, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 14, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "line", "x1": 15, "y1": 15, "x2": 85, "y2": 85, "sw": 6 }] } }
    ],
    "correct": 0
  },
  // --- 4. SORU ---
  {
    "id": "iq2x2-04",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "path", "d": "M55 25 L80 75 L30 75 Z", "sw": 4 },
        { "t": "path", "d": "M165 25 L190 75 L140 75 Z", "sw": 4 },
        { "t": "path", "d": "M55 145 L80 195 L30 195 Z", "sw": 4 },
        { "t": "circle", "cx": 55, "cy": 60, "r": 8, "sw": 4 },
        { "t": "circle", "cx": 165, "cy": 45, "r": 8, "sw": 4 },
        { "t": "circle", "cx": 55, "cy": 180, "r": 8, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M50 15 L75 65 L25 65 Z", "sw": 4 }, { "t": "circle", "cx": 50, "cy": 25, "r": 8, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M50 15 L75 65 L25 65 Z", "sw": 4 }, { "t": "circle", "cx": 50, "cy": 45, "r": 8, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M50 15 L75 65 L25 65 Z", "sw": 4 }, { "t": "circle", "cx": 50, "cy": 35, "r": 8, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M25 15 L75 15 L50 65 Z", "sw": 4 }, { "t": "circle", "cx": 50, "cy": 35, "r": 8, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 16, "sw": 4 }] } }
    ],
    "correct": 2
  },
  // --- 5. SORU ---
  {
    "id": "iq2x2-05",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "rect", "x": 30, "y": 30, "w": 50, "h": 50, "sw": 4 },
        { "t": "rect", "x": 140, "y": 30, "w": 50, "h": 50, "sw": 4 },
        { "t": "rect", "x": 30, "y": 140, "w": 50, "h": 50, "sw": 4 },
        { "t": "line", "x1": 30, "y1": 30, "x2": 80, "y2": 80, "sw": 5 },
        { "t": "line", "x1": 140, "y1": 30, "x2": 190, "y2": 80, "sw": 5 },
        { "t": "line", "x1": 30, "y1": 190, "x2": 80, "y2": 140, "sw": 5 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 20, "y": 20, "w": 55, "h": 55, "sw": 4 }, { "t": "line", "x1": 20, "y1": 20, "x2": 75, "y2": 75, "sw": 5 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 20, "y": 20, "w": 55, "h": 55, "sw": 4 }, { "t": "line", "x1": 20, "y1": 75, "x2": 75, "y2": 20, "sw": 5 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 25, "y": 25, "w": 50, "h": 50, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "line", "x1": 20, "y1": 20, "x2": 75, "y2": 75, "sw": 5 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 20, "y": 20, "w": 55, "h": 55, "sw": 4 }, { "t": "circle", "cx": 50, "cy": 50, "r": 12, "sw": 4 }] } }
    ],
    "correct": 1
  },
  // --- 6. SORU ---
  {
    "id": "iq2x2-06",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "circle", "cx": 40, "cy": 55, "r": 12, "sw": 4 },
        { "t": "circle", "cx": 55, "cy": 40, "r": 12, "sw": 4 },
        { "t": "circle", "cx": 150, "cy": 55, "r": 12, "sw": 4 },
        { "t": "circle", "cx": 185, "cy": 55, "r": 12, "sw": 4 },
        { "t": "circle", "cx": 55, "cy": 150, "r": 12, "sw": 4 },
        { "t": "circle", "cx": 55, "cy": 185, "r": 12, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 35, "cy": 50, "r": 12, "sw": 4 }, { "t": "circle", "cx": 65, "cy": 50, "r": 12, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 35, "r": 12, "sw": 4 }, { "t": "circle", "cx": 50, "cy": 65, "r": 12, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 35, "cy": 35, "r": 12, "sw": 4 }, { "t": "circle", "cx": 65, "cy": 65, "r": 12, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 35, "cy": 65, "r": 12, "sw": 4 }, { "t": "circle", "cx": 65, "cy": 35, "r": 12, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 16, "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 7. SORU ---
  {
    "id": "iq2x2-07",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "path", "d": "M25 70 H85", "sw": 6 },
        { "t": "path", "d": "M45 30 V90", "sw": 6 },
        { "t": "path", "d": "M120 55 H210", "sw": 6 },
        { "t": "path", "d": "M55 120 V210", "sw": 6 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 50 H80", "sw": 6 }, { "t": "path", "d": "M50 20 V80", "sw": 6 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 50 H80", "sw": 6 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M50 20 V80", "sw": 6 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 20 L80 80", "sw": 6 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 16, "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 8. SORU ---
  {
    "id": "iq2x2-08",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "circle", "cx": 40, "cy": 40, "r": 10, "sw": 4 },
        { "t": "circle", "cx": 70, "cy": 70, "r": 10, "sw": 4 },
        { "t": "circle", "cx": 150, "cy": 40, "r": 10, "sw": 4 },
        { "t": "circle", "cx": 180, "cy": 70, "r": 10, "sw": 4 },
        { "t": "circle", "cx": 165, "cy": 85, "r": 10, "sw": 4 },
        { "t": "circle", "cx": 40, "cy": 150, "r": 10, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 30, "cy": 30, "r": 10, "sw": 4 }, { "t": "circle", "cx": 70, "cy": 70, "r": 10, "sw": 4 }, { "t": "circle", "cx": 50, "cy": 85, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 30, "cy": 30, "r": 10, "sw": 4 }, { "t": "circle", "cx": 70, "cy": 70, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 30, "cy": 70, "r": 10, "sw": 4 }, { "t": "circle", "cx": 70, "cy": 30, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 14, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 30, "y": 30, "w": 40, "h": 40, "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 9. SORU ---
  {
    "id": "iq2x2-09",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "rect", "x": 35, "y": 35, "w": 40, "h": 40, "sw": 4 },
        { "t": "circle", "cx": 55, "cy": 55, "r": 10, "sw": 4 },
        { "t": "circle", "cx": 165, "cy": 55, "r": 20, "sw": 4 },
        { "t": "rect", "x": 35, "y": 145, "w": 40, "h": 40, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 20, "sw": 4 }, { "t": "rect", "x": 30, "y": 30, "w": 40, "h": 40, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 10, "sw": 4 }, { "t": "rect", "x": 30, "y": 30, "w": 40, "h": 40, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 30, "y": 30, "w": 40, "h": 40, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 20, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 14, "sw": 4 }, { "t": "rect", "x": 25, "y": 25, "w": 50, "h": 50, "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 10. SORU ---
  {
    "id": "iq2x2-10",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "path", "d": "M30 55 H80", "sw": 6 },
        { "t": "path", "d": "M55 30 V80", "sw": 6 },
        { "t": "path", "d": "M140 55 H190", "sw": 6 },
        { "t": "circle", "cx": 165, "cy": 55, "r": 10, "sw": 4 },
        { "t": "path", "d": "M55 140 V190", "sw": 6 },
        { "t": "circle", "cx": 55, "cy": 165, "r": 10, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 50 H80", "sw": 6 }, { "t": "path", "d": "M50 20 V80", "sw": 6 }, { "t": "circle", "cx": 50, "cy": 50, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 50 H80", "sw": 6 }, { "t": "circle", "cx": 50, "cy": 50, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M50 20 V80", "sw": 6 }, { "t": "circle", "cx": 50, "cy": 50, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 14, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 20 L80 80", "sw": 6 }, { "t": "circle", "cx": 50, "cy": 50, "r": 10, "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 11. SORU ---
  {
    "id": "iq2x2-11",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "path", "d": "M25 80 L55 30 L85 80 Z", "sw": 4 },
        { "t": "path", "d": "M145 80 L165 30 L195 80 Z", "sw": 4 },
        { "t": "path", "d": "M25 190 L55 140 L85 190 Z", "sw": 4 },
        { "t": "line", "x1": 55, "y1": 30, "x2": 55, "y2": 80, "sw": 4 },
        { "t": "line", "x1": 165, "y1": 30, "x2": 165, "y2": 80, "sw": 4 },
        { "t": "line", "x1": 55, "y1": 140, "x2": 55, "y2": 190, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 70 L50 20 L80 70 Z", "sw": 4 }, { "t": "line", "x1": 50, "y1": 20, "x2": 50, "y2": 70, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 70 L50 20 L80 70 Z", "sw": 4 }, { "t": "line", "x1": 20, "y1": 70, "x2": 80, "y2": 70, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 20 L80 20 L50 70 Z", "sw": 4 }, { "t": "line", "x1": 50, "y1": 20, "x2": 50, "y2": 70, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 16, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 70 L50 20 L80 70 Z", "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 12. SORU ---
  {
    "id": "iq2x2-12",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "circle", "cx": 55, "cy": 55, "r": 22, "sw": 4 },
        { "t": "rect", "x": 35, "y": 35, "w": 40, "h": 40, "sw": 4 },
        { "t": "circle", "cx": 165, "cy": 55, "r": 22, "sw": 4 },
        { "t": "rect", "x": 35, "y": 145, "w": 40, "h": 40, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 22, "sw": 4 }, { "t": "rect", "x": 30, "y": 30, "w": 40, "h": 40, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 22, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 30, "y": 30, "w": 40, "h": 40, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 14, "sw": 4 }, { "t": "rect", "x": 25, "y": 25, "w": 50, "h": 50, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 20 L80 20 L50 80 Z", "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 13. SORU ---
  {
    "id": "iq2x2-13",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "line", "x1": 25, "y1": 35, "x2": 85, "y2": 35, "sw": 5 },
        { "t": "line", "x1": 25, "y1": 55, "x2": 85, "y2": 55, "sw": 5 },
        { "t": "line", "x1": 145, "y1": 35, "x2": 195, "y2": 75, "sw": 5 },
        { "t": "line", "x1": 25, "y1": 145, "x2": 85, "y2": 185, "sw": 5 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "line", "x1": 20, "y1": 30, "x2": 80, "y2": 70, "sw": 5 }, { "t": "line", "x1": 20, "y1": 50, "x2": 80, "y2": 90, "sw": 5 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "line", "x1": 20, "y1": 30, "x2": 80, "y2": 30, "sw": 5 }, { "t": "line", "x1": 20, "y1": 50, "x2": 80, "y2": 50, "sw": 5 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "line", "x1": 20, "y1": 30, "x2": 80, "y2": 70, "sw": 5 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "line", "x1": 20, "y1": 70, "x2": 80, "y2": 30, "sw": 5 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 16, "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 14. SORU ---
  {
    "id": "iq2x2-14",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "circle", "cx": 55, "cy": 55, "r": 10, "sw": 4 },
        { "t": "circle", "cx": 75, "cy": 55, "r": 10, "sw": 4 },
        { "t": "circle", "cx": 165, "cy": 55, "r": 10, "sw": 4 },
        { "t": "circle", "cx": 165, "cy": 75, "r": 10, "sw": 4 },
        { "t": "circle", "cx": 55, "cy": 165, "r": 10, "sw": 4 },
        { "t": "circle", "cx": 35, "cy": 165, "r": 10, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 10, "sw": 4 }, { "t": "circle", "cx": 50, "cy": 70, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 10, "sw": 4 }, { "t": "circle", "cx": 70, "cy": 50, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 30, "cy": 50, "r": 10, "sw": 4 }, { "t": "circle", "cx": 50, "cy": 50, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 30, "r": 10, "sw": 4 }, { "t": "circle", "cx": 50, "cy": 50, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 16, "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 15. SORU ---
  {
    "id": "iq2x2-15",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "path", "d": "M35 35 H75 V75 H35 Z", "sw": 4 },
        { "t": "path", "d": "M145 35 H185 V75 H145 Z", "sw": 4 },
        { "t": "path", "d": "M35 145 H75 V185 H35 Z", "sw": 4 },
        { "t": "line", "x1": 35, "y1": 35, "x2": 75, "y2": 75, "sw": 4 },
        { "t": "line", "x1": 145, "y1": 75, "x2": 185, "y2": 35, "sw": 4 },
        { "t": "line", "x1": 35, "y1": 145, "x2": 75, "y2": 185, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M25 25 H75 V75 H25 Z", "sw": 4 }, { "t": "line", "x1": 25, "y1": 75, "x2": 75, "y2": 25, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M25 25 H75 V75 H25 Z", "sw": 4 }, { "t": "line", "x1": 25, "y1": 25, "x2": 75, "y2": 75, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M25 25 H75 V75 H25 Z", "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "line", "x1": 25, "y1": 75, "x2": 75, "y2": 25, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 16, "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 16. SORU ---
  {
    "id": "iq2x2-16",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "circle", "cx": 55, "cy": 55, "r": 16, "sw": 4 },
        { "t": "line", "x1": 55, "y1": 39, "x2": 55, "y2": 71, "sw": 4 },
        { "t": "circle", "cx": 165, "cy": 55, "r": 16, "sw": 4 },
        { "t": "line", "x1": 149, "y1": 55, "x2": 181, "y2": 55, "sw": 4 },
        { "t": "circle", "cx": 55, "cy": 165, "r": 16, "sw": 4 },
        { "t": "line", "x1": 43, "y1": 153, "x2": 67, "y2": 177, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 16, "sw": 4 }, { "t": "line", "x1": 43, "y1": 57, "x2": 57, "y2": 43, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 16, "sw": 4 }, { "t": "line", "x1": 50, "y1": 35, "x2": 50, "y2": 65, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 16, "sw": 4 }, { "t": "line", "x1": 35, "y1": 50, "x2": 65, "y2": 50, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 16, "sw": 4 }, { "t": "line", "x1": 43, "y1": 43, "x2": 57, "y2": 57, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 20, "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 17. SORU ---
  {
    "id": "iq2x2-17",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "rect", "x": 30, "y": 30, "w": 50, "h": 50, "sw": 4 },
        { "t": "circle", "cx": 55, "cy": 55, "r": 10, "sw": 4 },
        { "t": "circle", "cx": 165, "cy": 55, "r": 10, "sw": 4 },
        { "t": "rect", "x": 140, "y": 30, "w": 50, "h": 50, "sw": 4 },
        { "t": "rect", "x": 30, "y": 140, "w": 50, "h": 50, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 25, "y": 25, "w": 50, "h": 50, "sw": 4 }, { "t": "circle", "cx": 50, "cy": 50, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 10, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 25, "y": 25, "w": 50, "h": 50, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "rect", "x": 20, "y": 20, "w": 60, "h": 60, "sw": 4 }, { "t": "circle", "cx": 50, "cy": 50, "r": 14, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 80 L50 20 L80 80 Z", "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 18. SORU ---
  {
    "id": "iq2x2-18",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "path", "d": "M30 30 H80 V80 H30 Z", "sw": 4 },
        { "t": "path", "d": "M35 35 H75 V75 H35 Z", "sw": 4 },
        { "t": "path", "d": "M140 30 H190 V80 H140 Z", "sw": 4 },
        { "t": "path", "d": "M30 140 H80 V190 H30 Z", "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 20 H80 V80 H20 Z", "sw": 4 }, { "t": "path", "d": "M25 25 H75 V75 H25 Z", "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 20 H80 V80 H20 Z", "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M25 25 H75 V75 H25 Z", "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 16, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 80 L50 20 L80 80 Z", "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 19. SORU ---
  {
    "id": "iq2x2-19",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "circle", "cx": 55, "cy": 55, "r": 18, "sw": 4 },
        { "t": "line", "x1": 55, "y1": 37, "x2": 55, "y2": 73, "sw": 4 },
        { "t": "circle", "cx": 165, "cy": 55, "r": 18, "sw": 4 },
        { "t": "line", "x1": 147, "y1": 55, "x2": 183, "y2": 55, "sw": 4 },
        { "t": "circle", "cx": 55, "cy": 165, "r": 18, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 18, "sw": 4 }, { "t": "line", "x1": 37, "y1": 37, "x2": 63, "y2": 63, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 18, "sw": 4 }, { "t": "line", "x1": 50, "y1": 32, "x2": 50, "y2": 68, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 18, "sw": 4 }, { "t": "line", "x1": 32, "y1": 50, "x2": 68, "y2": 50, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 18, "sw": 4 }, { "t": "line", "x1": 37, "y1": 63, "x2": 63, "y2": 37, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 22, "sw": 4 }] } }
    ],
    "correct": 0
  },
  // --- 20. SORU ---
  {
    "id": "iq2x2-20",
    "domain": "visual",
    "type": "visual-matrix",
    "prompt": "Which option completes the pattern?",
    "questionSvg": {
      "viewBox": "0 0 220 220",
      "elements": [
        { "t": "rect", "x": 10, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 10, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 10, "y": 120, "w": 90, "h": 90, "sw": 4 },
        { "t": "rect", "x": 120, "y": 120, "w": 90, "h": 90, "sw": 4, "dash": true },
        { "t": "path", "d": "M30 80 L55 30 L80 80 Z", "sw": 4 },
        { "t": "path", "d": "M140 80 L165 30 L190 80 Z", "sw": 4 },
        { "t": "path", "d": "M30 190 L55 140 L80 190 Z", "sw": 4 },
        { "t": "circle", "cx": 55, "cy": 70, "r": 8, "sw": 4 },
        { "t": "circle", "cx": 165, "cy": 55, "r": 8, "sw": 4 },
        { "t": "circle", "cx": 55, "cy": 175, "r": 8, "sw": 4 }
      ]
    },
    "options": [
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 70 L50 20 L80 70 Z", "sw": 4 }, { "t": "circle", "cx": 50, "cy": 40, "r": 8, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 70 L50 20 L80 70 Z", "sw": 4 }, { "t": "circle", "cx": 50, "cy": 55, "r": 8, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 70 L50 20 L80 70 Z", "sw": 4 }, { "t": "circle", "cx": 50, "cy": 30, "r": 8, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "path", "d": "M20 20 L80 20 L50 70 Z", "sw": 4 }, { "t": "circle", "cx": 50, "cy": 40, "r": 8, "sw": 4 }] } },
      { "svg": { "viewBox": "0 0 100 100", "elements": [{ "t": "circle", "cx": 50, "cy": 50, "r": 16, "sw": 4 }] } }
    ],
    "correct": 0
  }
];
