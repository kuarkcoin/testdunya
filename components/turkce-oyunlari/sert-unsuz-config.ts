export type CorrectLetterConfig = {
  id: string;
  char: string;
  asset: string;
};

export type SertUnsuzYoluConfig = {
  title: string;
  taskText: string;
  lanes: number;
  maxMistakes: number;
  pointsPerCorrect: number;
  pointsPerWrong: number;
  targetCorrect: number;
  spawnIntervalMs: number;
  initialSpeed: number;
  speedIncreaseEveryCorrect: number;
  speedIncreaseAmount: number;
  correctLetterChance: number;
  correctLetters: CorrectLetterConfig[];
  wrongLetters: string[];
  assets: {
    background: string;
    road: string;
    playerCar: string;
    heart: string;
    star: string;
  };
};

const ASSET_ROOT = "/game-assets/sert-unsuz-yolu";

export const SERT_UNSUZ_YOLU_CONFIG: SertUnsuzYoluConfig = {
  title: "Sert Ünsüz Yolu",
  taskText: "Görev: Sert ünsüzleri topla",
  lanes: 3,
  maxMistakes: 3,
  pointsPerCorrect: 10,
  pointsPerWrong: -5,
  targetCorrect: 20,
  spawnIntervalMs: 950,
  initialSpeed: 190,
  speedIncreaseEveryCorrect: 4,
  speedIncreaseAmount: 18,
  correctLetterChance: 0.66,
  correctLetters: [
    { id: "f", char: "f", asset: `${ASSET_ROOT}/letter-f.webp` },
    { id: "s", char: "s", asset: `${ASSET_ROOT}/letter-s.webp` },
    { id: "t", char: "t", asset: `${ASSET_ROOT}/letter-t.webp` },
    { id: "k", char: "k", asset: `${ASSET_ROOT}/letter-k.webp` },
    { id: "c-cedilla", char: "ç", asset: `${ASSET_ROOT}/letter-c-cedilla.webp` },
    { id: "s-cedilla", char: "ş", asset: `${ASSET_ROOT}/letter-s-cedilla.webp` },
    { id: "h", char: "h", asset: `${ASSET_ROOT}/letter-h.webp` },
    { id: "p", char: "p", asset: `${ASSET_ROOT}/letter-p.webp` },
  ],
  wrongLetters: ["a", "e", "ı", "i", "o", "ö", "u", "ü", "b", "d", "g", "ğ", "j", "l", "m", "n", "r", "v", "y", "z"],
  assets: {
    background: `${ASSET_ROOT}/bg.webp`,
    road: `${ASSET_ROOT}/road.webp`,
    playerCar: `${ASSET_ROOT}/child-car.webp`,
    heart: `${ASSET_ROOT}/heart.webp`,
    star: `${ASSET_ROOT}/star.webp`,
  },
};
