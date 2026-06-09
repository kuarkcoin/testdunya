export type ChessSideToMove = 'white' | 'black';

export type ChessOption = {
  id: string;
  text: string;
};

export type ChessQuestion = {
  id: number;
  question: string;
  sideToMove: ChessSideToMove;
  fen?: string;
  image?: string;
  options: ChessOption[];
  correctAnswer: string;
  explanation: string;
};

export type ChessTest = {
  id: string;
  title: string;
  description: string;
  questionTimeSeconds: number;
  questions: ChessQuestion[];
};

export type ChessTestsData = {
  tests: ChessTest[];
};

export type ChessSquare = {
  piece: string;
  file: string;
  rank: string;
};
