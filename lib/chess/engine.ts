import { spawn } from 'child_process';

export type Line = {
  multipv: number;
  scoreCp: number | null;
  scoreMate?: number | null;
  pvUci: string[];
};

export type MultiPvAnalysis = {
  bestmoveUci: string;
  lines: Line[];
};

type AnalyzeParams = {
  fen: string;
  movetimeMs?: number;
  depth?: number;
  multipv?: number;
  stockfishCmd?: string;
};

const INFO_RE = /info\s+.*\bmultipv\s+(\d+)\b.*\bscore\s+(cp|mate)\s+(-?\d+)\b.*\bpv\s+(.+)$/;
const BESTMOVE_RE = /^bestmove\s+(\S+)/;
const FEN_LINE_RE = /^Fen:\s+(.+)$/i;

type RunOptions = {
  commands: string[];
  stockfishCmd?: string;
  waitFor?: RegExp;
  timeoutMs?: number;
};

async function runUciSession({ commands, stockfishCmd = process.env.STOCKFISH_CMD || 'stockfish', waitFor, timeoutMs = 7000 }: RunOptions) {
  return new Promise<string[]>((resolve, reject) => {
    const engine = spawn(stockfishCmd, [], { stdio: 'pipe' });
    const output: string[] = [];
    let stderr = '';
    let finished = false;

    const done = (err?: Error) => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      engine.kill();
      if (err) reject(err);
      else resolve(output);
    };

    const timer = setTimeout(() => {
      done(new Error('Stockfish timeout.'));
    }, timeoutMs);

    engine.stdout.on('data', (chunk) => {
      const text = String(chunk);
      text.split(/\r?\n/).forEach((row) => {
        const line = row.trim();
        if (!line) return;
        output.push(line);
        if (waitFor && waitFor.test(line)) {
          done();
        }
      });
    });

    engine.stderr.on('data', (chunk) => {
      stderr += String(chunk);
    });

    engine.on('error', (err) => done(new Error(`Stockfish başlatılamadı: ${err.message}`)));
    engine.on('close', (code) => {
      if (!finished) {
        done(new Error(`Stockfish erken kapandı (code=${code}). ${stderr}`));
      }
    });

    commands.forEach((cmd) => engine.stdin.write(`${cmd}\n`));
  });
}

export function parseInfoLine(line: string): Line | null {
  const match = line.match(INFO_RE);
  if (!match) return null;

  const multipv = Number(match[1]);
  const scoreType = match[2];
  const score = Number(match[3]);
  const pvUci = match[4].trim().split(/\s+/).filter(Boolean);

  return {
    multipv,
    scoreCp: scoreType === 'cp' ? score : null,
    scoreMate: scoreType === 'mate' ? score : null,
    pvUci,
  };
}

export async function analyzeMultiPV({
  fen,
  movetimeMs = 180,
  depth,
  multipv = 3,
  stockfishCmd,
}: AnalyzeParams): Promise<MultiPvAnalysis> {
  const output = await runUciSession({
    stockfishCmd,
    waitFor: BESTMOVE_RE,
    commands: [
      'uci',
      'isready',
      `setoption name MultiPV value ${multipv}`,
      'ucinewgame',
      `position fen ${fen}`,
      depth ? `go depth ${depth}` : `go movetime ${movetimeMs}`,
    ],
  });

  let bestmoveUci = '';
  const linesByPv = new Map<number, Line>();

  output.forEach((line) => {
    const parsed = parseInfoLine(line);
    if (parsed) linesByPv.set(parsed.multipv, parsed);
    const bm = line.match(BESTMOVE_RE);
    if (bm) bestmoveUci = bm[1];
  });

  if (!bestmoveUci) {
    throw new Error('bestmove alınamadı.');
  }

  const lines = Array.from(linesByPv.values())
    .sort((a, b) => a.multipv - b.multipv)
    .slice(0, multipv);

  return { bestmoveUci, lines };
}

export async function getFenAfterMove({ fen, uciMove, stockfishCmd }: { fen: string; uciMove: string; stockfishCmd?: string }) {
  const output = await runUciSession({
    stockfishCmd,
    waitFor: FEN_LINE_RE,
    commands: ['uci', 'isready', `position fen ${fen} moves ${uciMove}`, 'd'],
  });

  const fenLine = output.find((line) => FEN_LINE_RE.test(line));
  if (!fenLine) throw new Error('Yeni FEN alınamadı. Hamle geçersiz olabilir.');

  const match = fenLine.match(FEN_LINE_RE);
  const nextFen = match?.[1]?.trim();
  if (!nextFen) throw new Error('FEN parse edilemedi.');

  return nextFen;
}
