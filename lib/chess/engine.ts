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
  stockfishCmd = process.env.STOCKFISH_CMD || 'stockfish',
}: AnalyzeParams): Promise<MultiPvAnalysis> {
  return new Promise((resolve, reject) => {
    const engine = spawn(stockfishCmd, [], { stdio: 'pipe' });

    let bestmoveUci = '';
    const linesByPv = new Map<number, Line>();
    let stderr = '';

    const write = (cmd: string) => engine.stdin.write(`${cmd}\n`);

    engine.stdout.on('data', (chunk) => {
      const text = String(chunk);
      text.split(/\r?\n/).forEach((raw) => {
        const line = raw.trim();
        if (!line) return;

        const parsed = parseInfoLine(line);
        if (parsed) {
          linesByPv.set(parsed.multipv, parsed);
          return;
        }

        const bm = line.match(BESTMOVE_RE);
        if (bm) {
          bestmoveUci = bm[1];
          const lines = Array.from(linesByPv.values())
            .sort((a, b) => a.multipv - b.multipv)
            .slice(0, multipv);

          resolve({ bestmoveUci, lines });
          engine.kill();
        }
      });
    });

    engine.stderr.on('data', (chunk) => {
      stderr += String(chunk);
    });

    engine.on('error', (err) => {
      reject(new Error(`Stockfish başlatılamadı: ${err.message}`));
    });

    engine.on('close', (code) => {
      if (!bestmoveUci) {
        reject(new Error(`Stockfish analiz tamamlanamadı (code=${code}). ${stderr}`));
      }
    });

    write('uci');
    write('isready');
    write(`setoption name MultiPV value ${multipv}`);
    write('ucinewgame');
    write(`position fen ${fen}`);
    if (depth) {
      write(`go depth ${depth}`);
    } else {
      write(`go movetime ${movetimeMs}`);
    }
  });
}
