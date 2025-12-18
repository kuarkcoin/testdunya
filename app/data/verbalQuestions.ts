export const verbalQuestions = [
  // --- ANALOGIES (High-Level Vocab) ---
  {
    id: "v-01",
    domain: "logic",
    prompt: "Choose the word that best completes the analogy:\n\nABATE : TAX :: ____ : PAIN",
    optionsText: ["AGGRAVATE", "ALLEVIATE", "AUGMENT", "INSTIGATE"],
    correct: 1, // Alleviate (Hafifletmek)
  },
  {
    id: "v-02",
    domain: "logic",
    prompt: "MAGNANIMOUS : GENEROUS :: ____ : FRUGAL",
    optionsText: ["PARSIMONIOUS", "EXTRAVAGANT", "MUNIFICENT", "PROFLIGATE"],
    correct: 0, // Parsimonious (Aşırı tutumlu/Cimri)
  },
  {
    id: "v-03",
    domain: "logic",
    prompt: "EQUIVOCAL : CERTAINTY :: ____ : LIGHT",
    optionsText: ["LUCID", "OPAQUE", "TRANSPARENT", "LUMINOUS"],
    correct: 1, // Opaque (Işık geçirmeyen/Bulanık)
  },
  {
    id: "v-04",
    domain: "logic",
    prompt: "OBSEQUIOUS : SERVILE :: ____ : STUBBORN",
    optionsText: ["ADAMANT", "PLIANT", "TRACTABLE", "AMENABLE"],
    correct: 0, // Adamant (Nuh diyen peygamber demeyen/İnatçı)
  },
  {
    id: "v-05",
    domain: "logic",
    prompt: "METICULOUS : CARELESS :: ____ : QUIET",
    optionsText: ["TACITURN", "GARRULOUS", "RETICENT", "LACUNOSE"],
    correct: 1, // Garrulous (Çok konuşan/Geveze)
  },

  // --- LOGICAL DEDUCTION (Syllogisms) ---
  {
    id: "v-06",
    domain: "logic",
    prompt: "Statements:\n1. All 'X' are 'Y'.\n2. Some 'Z' are not 'Y'.\nConclusion: Which must be true?",
    optionsText: ["All X are Z", "Some Z are not X", "No X is Z", "Some X are not Z"],
    correct: 1,
  },
  {
    id: "v-07",
    domain: "logic",
    prompt: "Statements:\n1. Only geniuses can pass this test.\n2. Most students failed the test.\nConclusion:",
    optionsText: ["No students are geniuses", "Some geniuses failed the test", "Geniuses are not students", "Not all students are geniuses"],
    correct: 3,
  },
  {
    id: "v-08",
    domain: "logic",
    prompt: "If 'If it rains, the ground is wet' is TRUE, which of the following is logically equivalent?",
    optionsText: ["If it doesn't rain, the ground is dry", "If the ground is wet, it rained", "If the ground is dry, it didn't rain", "The ground is wet ONLY if it rains"],
    correct: 2, // Contrapositive: (~Q -> ~P)
  },

  // --- CODING & PATTERNS ---
  {
    id: "v-09",
    domain: "logic",
    prompt: "In a secret code, 'BRAIN' is 'CSBJO'. How is 'STUDY' written?",
    optionsText: ["TVVEZ", "TUVEZ", "RTUEX", "TVVEA"],
    correct: 0, // Her harf +1 kayıyor.
  },
  {
    id: "v-10",
    domain: "logic",
    prompt: "If 'MONKEY' is coded as 'XDJMNL', how is 'TIGER' coded?",
    optionsText: ["QDFHS", "SDFHS", "SHF DQ", "UJHFS"],
    correct: 0, // Sondan başa doğru -1 kaydırma.
  },

  // --- CRITICAL REASONING ---
  {
    id: "v-11",
    domain: "logic",
    prompt: "The price of oil fell, yet the cost of plastic increased. Which of the following, if true, resolves this paradox?",
    optionsText: ["Oil is not used in plastic", "The labor cost for plastic production rose significantly", "Demand for plastic decreased", "More oil was discovered last year"],
    correct: 1,
  },
  {
    id: "v-12",
    domain: "logic",
    prompt: "In a race, five people finished. A was ahead of B. C was behind D. E was between B and C. If D was behind B, who finished LAST?",
    optionsText: ["A", "B", "C", "E"],
    correct: 2, // Sıralama: A > B > E > D > C (veya benzeri, C her türlü sonda)
  },

  // --- ODD ONE OUT (Nuanced) ---
  {
    id: "v-13",
    domain: "logic",
    prompt: "Which word does NOT belong?",
    optionsText: ["EPHEMERAL", "EVANESCENT", "TRANSIENT", "PERPETUAL"],
    correct: 3, // Perpetual (Sonsuz), diğerleri geçici demek.
  },
  {
    id: "v-14",
    domain: "logic",
    prompt: "Which word does NOT belong?",
    optionsText: ["DEARTH", "PAUCITY", "SURFEIT", "SCARCITY"],
    correct: 2, // Surfeit (Aşırı bolluk), diğerleri kıtlık demek.
  },
  {
    id: "v-15",
    domain: "logic",
    prompt: "Pick the odd one:",
    optionsText: ["LACONIC", "TERSE", "SUCCINCT", "PROLIX"],
    correct: 3, // Prolix (Çok kelime kullanan/Laf kalabalığı), diğerleri kısa ve öz.
  },
  
  // --- ADDITIONAL HARD QUESTIONS ---
  {
    id: "v-16",
    domain: "logic",
    prompt: "If 5 machines take 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
    optionsText: ["100 minutes", "50 minutes", "5 minutes", "1 minute"],
    correct: 2,
  },
  {
    id: "v-17",
    domain: "logic",
    prompt: "Six people (P, Q, R, S, T, U) are sitting in a circle. P is opposite R. S is to the right of P. T is between P and S. Who is opposite T?",
    optionsText: ["Q", "S", "U", "Cannot be determined"],
    correct: 3,
  },
  {
    id: "v-18",
    domain: "logic",
    prompt: "ANACHRONISM : TIME :: ____ : PLACE",
    optionsText: ["ANATHEMA", "ANATOPISM", "ANOMALY", "ANALOGY"],
    correct: 1, // Anatopism (Mekansal hata)
  },
  {
    id: "v-19",
    domain: "logic",
    prompt: "Which is a synonym for 'MENDACIOUS'?",
    optionsText: ["TRUTHFUL", "UNTRUTHFUL", "PROVOCATIVE", "STUBBORN"],
    correct: 1,
  },
  {
    id: "v-20",
    domain: "logic",
    prompt: "A man is looking at a portrait. He says, 'That man's father is my father's son.' Who is in the portrait?",
    optionsText: ["His father", "His grandson", "His son", "His uncle"],
    correct: 2,
  },
  // Havuzun devamına benzer zorlukta sorular eklenerek 40'a tamamlanabilir...
];
