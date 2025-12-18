export const verbalQuestions = [
  {
    id: "v-01",
    domain: "logic",
    prompt: "Choose the word that best completes the analogy:\n\nEPHEMERAL : PERMANENCE :: ____ : CONVICTION",
    optionsText: ["VIGILANT", "VACILLATION", "TENACIOUS", "DEVOTION"],
    correct: 1, // Vacillation (Hesitation) is the opposite of Conviction.
  },
  {
    id: "v-02",
    domain: "logic",
    prompt: "Which word does NOT belong with the others?",
    optionsText: ["PRAGMATIC", "QUIXOTIC", "IDEALISTIC", "VISIONARY"],
    correct: 0, // Pragmatic (Realistic) is the odd one; others are idealistic/dreamy.
  },
  {
    id: "v-03",
    domain: "logic",
    prompt: "If 'No A are B' and 'Some C are A', which of the following MUST be true?",
    optionsText: ["All C are B", "Some C are not B", "All A are C", "No B are C"],
    correct: 1,
  },
  {
    id: "v-04",
    domain: "logic",
    prompt: "Select the word that is most nearly OPPOSITE in meaning to: \n\nGREGARIOUS",
    optionsText: ["AFFABLE", "ALOOF", "CONVIVIAL", "SOCIABLE"],
    correct: 1, // Aloof (Reserved) is the opposite of Gregarious (Social).
  },
  {
    id: "v-05",
    domain: "logic",
    prompt: "If 'FRANCE' is coded as 'G S B O D F', how is 'GERMANY' coded?",
    optionsText: ["H F S N B O Z", "H F S N B P Z", "I F S N B P Z", "H E S N B O Z"],
    correct: 1, // Each letter is shifted by one (+1).
  },
  {
    id: "v-06",
    domain: "logic",
    prompt: "Find the missing term in the sequence:\n\n 2, 6, 12, 20, 30, ____",
    optionsText: ["38", "40", "42", "44"],
    correct: 2, // +4, +6, +8, +10, +12.
  },
  {
    id: "v-07",
    domain: "logic",
    prompt: "Statement: Most people who use 'App X' are tech-savvy. John uses 'App X'. \nConclusion: John is definitely tech-savvy.",
    optionsText: ["True", "False", "Insufficient Data", "None of the above"],
    correct: 1, // 'Most' does not mean 'Definitely'.
  },
  {
    id: "v-08",
    domain: "logic",
    prompt: "Choose the word that best completes the analogy:\n\nMITIGATE : SEVERE :: ____ : DAZZLING",
    optionsText: ["ENHANCE", "OBSCURE", "INTENSIFY", "BRIGHTEN"],
    correct: 1, // Mitigate reduces severity, Obscure reduces dazzling light.
  },
  {
    id: "v-09",
    domain: "logic",
    prompt: "Which word means 'to stay or reside temporarily'?",
    optionsText: ["SOJOURN", "ADJOURN", "CONVOKE", "INHABIT"],
    correct: 0,
  },
  {
    id: "v-10",
    domain: "logic",
    prompt: "Mark said: 'I have no siblings, but that man's father is my father's son.' Who is in the photograph?",
    optionsText: ["His Father", "His Grandfather", "His Son", "His Uncle"],
    correct: 2,
  },
  {
    id: "v-11",
    domain: "logic",
    prompt: "Which of the following five is the 'Odd One Out'?",
    optionsText: ["DEER", "GAZELLE", "WOLF", "RHINO", "ZEBRA"],
    correct: 2, // Wolf (Carnivore), others are Herbivores.
  },
  {
    id: "v-12",
    domain: "logic",
    prompt: "If 'A + B' means A is the brother of B; 'A - B' means A is the mother of B. Which means X is the son of Y?",
    optionsText: ["Y - X + Z", "Z - X + Y", "X + Z - Y", "Y * X + Z"],
    correct: 0, // Y is mother of X, X is brother of Z.
  },
  {
    id: "v-13",
    domain: "logic",
    prompt: "Which word is a synonym for 'LACONIC'?",
    optionsText: ["VERBOSE", "TERSE", "GARRULOUS", "LOQUACIOUS"],
    correct: 1, // Terse (Brief/Concise).
  },
  {
    id: "v-14",
    domain: "logic",
    prompt: "In a marathon, if you overtake the person in second place, what place are you in?",
    optionsText: ["First", "Second", "Third", "Last"],
    correct: 1,
  },
  {
    id: "v-15",
    domain: "logic",
    prompt: "Six books are stacked. History is above Math but below Science. English is between Science and History. Which book is at the very top?",
    optionsText: ["History", "Science", "Math", "English"],
    correct: 1,
  }
];
