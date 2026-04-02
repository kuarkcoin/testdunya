export type CorrectLetterConfig = {
  id: string;
  char: string;
  asset: string;
};

export type LevelConfig = {
  id: number;
  name: string;
  targetCorrect: number;
  speed: number;
  spawnIntervalMs: number;
  correctLetterChance: number;
};

export type ComboConfig = {
  combo2Threshold: number;
  superComboThreshold: number;
  combo2Multiplier: number;
  superComboMultiplier: number;
};

export type BadgeKey = "flawless_finish" | "score_100" | "streak_10" | "master";

export type BadgeConfig = {
  key: BadgeKey;
  label: string;
  description: string;
};

export type SertUnsuzYoluConfig = {
  title: string;
  taskText: string;
  howToPlay: string[];
  lanes: number;
  maxMistakes: number;
  pointsPerCorrect: number;
  pointsPerWrong: number;
  fallDespawnOffset: number;
  collisionWindowPx: number;
  feedbackDurationMs: number;
  levels: LevelConfig[];
  combo: ComboConfig;
  correctLetters: CorrectLetterConfig[];
  wrongLetters: string[];
  badges: BadgeConfig[];
  storageKey: string;
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
  howToPlay: [
    "Arabanı 3 şerit arasında sola/sağa taşı.",
    "Sadece sert ünsüz harfleri (f,s,t,k,ç,ş,h,p) topla.",
    "Yanlış harfler puan düşürür ve hata ekler.",
  ],
  lanes: 3,
  maxMistakes: 3,
  pointsPerCorrect: 10,
  pointsPerWrong: -5,
  fallDespawnOffset: 80,
  collisionWindowPx: 52,
  feedbackDurationMs: 1300,
  levels: [
    { id: 1, name: "Seviye 1", targetCorrect: 8, speed: 175, spawnIntervalMs: 980, correctLetterChance: 0.7 },
    { id: 2, name: "Seviye 2", targetCorrect: 12, speed: 225, spawnIntervalMs: 860, correctLetterChance: 0.66 },
    { id: 3, name: "Seviye 3", targetCorrect: 16, speed: 280, spawnIntervalMs: 760, correctLetterChance: 0.62 },
  ],
  combo: {
    combo2Threshold: 3,
    superComboThreshold: 5,
    combo2Multiplier: 2,
    superComboMultiplier: 3,
  },
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
  wrongLetters: ["a", "e", "o", "u", "b", "m", "y", "z", "n", "l"],
  badges: [
    { key: "flawless_finish", label: "Hatasız Bitirdi", description: "Oyunu hata almadan bitirdi." },
    { key: "score_100", label: "100 Puanı Geçti", description: "Toplam puan 100 üstüne çıktı." },
    { key: "streak_10", label: "10 Doğru Üst Üste", description: "10 doğruyu seri şekilde topladı." },
    { key: "master", label: "Sert Ünsüz Ustası", description: "Tüm seviyeleri tamamladı." },
  ],
  storageKey: "sert_unsuz_yolu_progress_v2",
  assets: {
    background: `${ASSET_ROOT}/bg.webp`,
    road: `${ASSET_ROOT}/road.webp`,
    playerCar: `${ASSET_ROOT}/child-car.webp`,
    heart: `${ASSET_ROOT}/heart.webp`,
    star: `${ASSET_ROOT}/star.webp`,
  },
};
