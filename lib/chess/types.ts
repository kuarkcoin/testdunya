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
  solutionMoves?: string[];
  rating?: number;
  themes?: string[];
  source?: string;
  sourceUrl?: string;
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

export type ChessPieceCode = 'wp' | 'wn' | 'wb' | 'wr' | 'wq' | 'wk' | 'bp' | 'bn' | 'bb' | 'br' | 'bq' | 'bk';

export type ChessSquare = {
  piece: ChessPieceCode | null;
  file: string;
  rank: string;
};
