'use client';

import { useMemo, useRef, useState } from 'react';
import type { GridPuzzle } from '../../lib/picture-games/challenges';
import { PICTURES, type PictureId } from '../../lib/picture-games/content';
import { isGridCorrect, shuffled } from '../../lib/picture-games/learning';
import Picture from './Picture';
import styles from './GridGame.module.css';

type GridGameProps = {
  puzzle: GridPuzzle;
  seed: number;
  onComplete: () => void;
  speak: (text: string) => void;
  cancelSpeech: () => void;
};

type Move = { index: number; before: PictureId | null };

/** The parent keys this board by puzzle and replay so a fresh round has fresh state. */
export default function GridGame({ puzzle, seed, onComplete, speak, cancelSpeech }: GridGameProps) {
  const [cells, setCells] = useState<(PictureId | null)[]>(() => [...puzzle.cells]);
  const [selected, setSelected] = useState(() => puzzle.cells.findIndex((cell) => cell === null));
  const [history, setHistory] = useState<Move[]>([]);
  const [solved, setSolved] = useState(false);
  const [feedback, setFeedback] = useState('Boş bir kutuya dokun, sonra o kutuya gelecek resmi seç.');
  const completedRef = useRef(false);
  const choices = useMemo(() => shuffled(puzzle.symbols, seed), [puzzle.symbols, seed]);
  const full = cells.every((cell) => cell !== null);
  const remaining = cells.filter((cell) => cell === null).length;
  const canEdit = !solved && selected >= 0 && puzzle.cells[selected] === null;

  function chooseCell(index: number) {
    if (solved || puzzle.cells[index] !== null) return;
    cancelSpeech();
    setSelected(index);
  }

  function putPicture(picture: PictureId | null) {
    if (!canEdit || cells[selected] === picture) return;
    cancelSpeech();
    setHistory((moves) => [...moves, { index: selected, before: cells[selected] }]);
    setCells((previous) => previous.map((cell, index) => index === selected ? picture : cell));
    setFeedback('Her satırı ve her sütunu kontrol et. Aynı resim iki kez olmasın.');
  }

  function undo() {
    if (solved || !history.length) return;
    cancelSpeech();
    const move = history[history.length - 1];
    setCells((previous) => previous.map((cell, index) => index === move.index ? move.before : cell));
    setHistory((moves) => moves.slice(0, -1));
    setSelected(move.index);
    setFeedback('Son değişikliği geri aldık. Başka bir resim deneyebilirsin.');
  }

  function check() {
    if (!full || completedRef.current) return;
    cancelSpeech();
    if (isGridCorrect(puzzle, cells)) {
      completedRef.current = true;
      setSolved(true);
      setFeedback(`Buldun! ${puzzle.explanation}`);
      onComplete();
    } else {
      setFeedback(`Bir daha bakalım. ${puzzle.hint}`);
    }
  }

  return (
    <div className={styles.game} data-testid="puzzle" data-puzzle-id={puzzle.id}>
      <div className={styles.rule}>
        <span aria-hidden="true" className={styles.ruleArrows}>→ ↓</span>
        <p>Her resim, her <strong>satırda</strong> ve her <strong>sütunda</strong> bir kez olsun.</p>
      </div>
      <div className={styles.board} style={{ gridTemplateColumns: `repeat(${puzzle.size}, minmax(0, 1fr))` }} role="group" aria-label={`${puzzle.size} satır ve ${puzzle.size} sütunlu resim tablosu`}>
        {cells.map((picture, index) => {
          const given = puzzle.cells[index] !== null;
          const row = Math.floor(index / puzzle.size) + 1;
          const column = index % puzzle.size + 1;
          return <button type="button" key={index}
            className={`${styles.cell} ${given ? styles.given : ''} ${!given && selected === index ? styles.selected : ''} ${solved ? styles.solved : ''}`}
            data-testid="grid-cell" data-index={index} data-given={given ? 'true' : 'false'} data-picture={picture || undefined}
            disabled={given || solved} aria-pressed={!given ? selected === index : undefined}
            aria-label={`${row}. satır, ${column}. sütun: ${picture ? PICTURES[picture].label : 'boş kutu'}${given ? ', sabit resim' : ''}`}
            onClick={() => chooseCell(index)}>
            {picture ? <Picture id={picture} decorative className={styles.picture} /> : <span aria-hidden="true" className={styles.empty}>?</span>}
            {given && <svg className={styles.lock} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3.5" y="7" width="9" height="7" rx="1.5" /><path d="M5 7V5a3 3 0 0 1 6 0v2" /></svg>}
            {!given && selected === index && !solved && <span className={styles.selectedMark} aria-hidden="true">•</span>}
          </button>;
        })}
      </div>
      <p className={styles.selection} role="status">{solved ? 'Tablo tamamlandı!' : selected >= 0 ? `${Math.floor(selected / puzzle.size) + 1}. satır, ${selected % puzzle.size + 1}. sütun seçili. Aşağıdan bir resim seç.` : 'Bir boş kutu seç.'}</p>
      <div className={styles.choices} aria-label="Kutuya yerleştirilecek resimler">
        {choices.map((picture) => <button type="button" key={picture} className={styles.choice} data-testid="grid-choice" data-picture={picture}
          disabled={!canEdit} aria-label={`${PICTURES[picture].label} yerleştir`} onClick={() => putPicture(picture)}>
          <Picture id={picture} decorative className={styles.picture} />
        </button>)}
      </div>
      <div className={styles.tools}>
        <button type="button" data-testid="grid-clear" disabled={!canEdit || cells[selected] === null} onClick={() => putPicture(null)}>Seçili kutuyu temizle</button>
        <button type="button" data-testid="grid-undo" disabled={solved || !history.length} onClick={undo}>Geri al <span aria-hidden="true">↶</span></button>
      </div>
      <p className={styles.remaining}>{solved ? 'Bütün satır ve sütunları tamamladın.' : remaining === 0 ? 'Bütün kutular dolu. Hazırsan kontrol et.' : `${remaining} boş kutu kaldı. Kilitli resimler yerinde kalır.`}</p>
      <div className={`${styles.feedback} ${solved ? styles.success : ''}`} data-testid="game-feedback" role="status" aria-live="polite">{feedback}</div>
      <div className={styles.actions}>
        <button type="button" className={styles.check} data-testid="grid-check" disabled={!full || solved} onClick={check}>Tabloyu kontrol et <span aria-hidden="true">✓</span></button>
        <button type="button" className={styles.hint} onClick={() => { const text = solved ? puzzle.explanation : puzzle.hint; if (!solved) setFeedback(puzzle.hint); speak(text); }}>{solved ? 'Açıklamayı dinle' : 'İpucu ver'} <span aria-hidden="true">✧</span></button>
      </div>
    </div>
  );
}
