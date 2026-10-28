'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { SequencePuzzle } from '../../lib/picture-games/challenges';
import { PICTURES, type PictureId } from '../../lib/picture-games/content';
import { isSequenceCorrect, shuffled } from '../../lib/picture-games/learning';
import Picture from './Picture';
import styles from './SequenceGame.module.css';

type SequenceGameProps = {
  puzzle: SequencePuzzle;
  seed: number;
  onComplete: () => void;
  speak: (text: string) => void;
  cancelSpeech: () => void;
};

/** The parent remounts each round, so hidden answers never survive a new puzzle. */
export default function SequenceGame({ puzzle, seed, onComplete, speak, cancelSpeech }: SequenceGameProps) {
  const [studying, setStudying] = useState(true);
  const [answer, setAnswer] = useState<PictureId[]>([]);
  const [solved, setSolved] = useState(false);
  const [feedback, setFeedback] = useState('Hazır olana kadar resimlere bakabilirsin. Süre sınırı yok.');
  const completedRef = useRef(false);
  const focusRequested = useRef(false);
  const stageLabelRef = useRef<HTMLParagraphElement>(null);
  const choices = useMemo(() => shuffled(puzzle.choices, seed), [puzzle.choices, seed]);

  useEffect(() => {
    if (focusRequested.current) {
      stageLabelRef.current?.focus({ preventScroll: true });
      focusRequested.current = false;
    }
  }, [studying]);

  function hideSequence() {
    cancelSpeech();
    setAnswer([]);
    setStudying(false);
    setFeedback('Şimdi hatırladığın sırayla resimlere dokun. Bir resmi birden fazla seçebilirsin.');
    focusRequested.current = true;
  }

  function revealSequence() {
    if (completedRef.current) return;
    cancelSpeech();
    setAnswer([]);
    setStudying(true);
    setFeedback('Bir daha incelemek serbest. Hazır olduğunda resimleri yeniden gizle.');
    focusRequested.current = true;
  }

  function choose(picture: PictureId) {
    if (studying || completedRef.current) return;
    setAnswer((previous) => previous.length < puzzle.sequence.length ? [...previous, picture] : previous);
    setFeedback('Sıranı tamamla. İstersen son resmi geri alabilirsin.');
  }

  function check() {
    if (studying || completedRef.current || answer.length !== puzzle.sequence.length) return;
    if (isSequenceCorrect(puzzle, answer)) {
      completedRef.current = true;
      setSolved(true);
      cancelSpeech();
      setFeedback(`Sırayı hatırladın! ${puzzle.explanation}`);
      onComplete();
    } else {
      setFeedback('Sıra henüz aynı değil. Son resmi geri alabilir veya “Tekrar bak” ile yeniden inceleyebilirsin.');
    }
  }

  return <div className={styles.game} data-testid="puzzle" data-puzzle-id={puzzle.id}>
    <p className={styles.stageLabel} ref={stageLabelRef} tabIndex={-1}>
      {studying ? '1. Resimlerin sırasını aklında tut.' : '2. Aynı sırayı sen oluştur.'}
    </p>

    {studying ? <>
      <ol className={styles.strip} data-testid="sequence-study" aria-label="Hatırlanacak resim sırası">
        {puzzle.sequence.map((picture, index) => <li className={styles.tile} key={index}>
          <Picture id={picture} label={`${index + 1}. resim: ${PICTURES[picture].label}`} />
          <span aria-hidden="true">{index + 1}</span>
        </li>)}
      </ol>
      <div className={styles.actions}>
        <button type="button" className={styles.primary} data-testid="hide-sequence" onClick={hideSequence}>Hazırım, gizle <span aria-hidden="true">→</span></button>
        <button type="button" className={styles.secondary} onClick={() => speak(puzzle.sequence.map((picture, index) => `${index + 1}. ${PICTURES[picture].label}`).join('. '))}>Sırayı dinle</button>
      </div>
      <p className={styles.note}>{puzzle.hint}</p>
    </> : <>
      <ol className={`${styles.strip} ${styles.answer}`} data-testid="sequence-answer" data-count={answer.length} aria-label="Senin oluşturduğun sıra">
        {Array.from({ length: puzzle.sequence.length }, (_, index) => <li className={`${styles.tile} ${answer[index] ? '' : styles.empty}`} key={index}>
          {answer[index] ? <Picture id={answer[index]} label={`${index + 1}. seçimin: ${PICTURES[answer[index]].label}`} /> : <span className={styles.placeholder} aria-label={`${index + 1}. sıra boş`}>?</span>}
          <span aria-hidden="true">{index + 1}</span>
        </li>)}
      </ol>
      <p className={styles.choicePrompt}>{answer.length} / {puzzle.sequence.length} resim seçtin.</p>
      <div className={styles.choices} aria-label="Sıraya ekleyebileceğin resimler">
        {choices.map((picture) => <button type="button" key={picture} className={styles.choice}
          data-testid="sequence-choice" data-picture={picture} aria-label={`${PICTURES[picture].label} ekle`}
          disabled={solved || answer.length === puzzle.sequence.length} onClick={() => choose(picture)}>
          <Picture id={picture} decorative />
        </button>)}
      </div>
      {!solved && <div className={styles.actions}>
        <button type="button" data-testid="sequence-undo" className={styles.secondary} disabled={answer.length === 0}
          onClick={() => { setAnswer((previous) => previous.slice(0, -1)); setFeedback('Son resmi geri aldın. Şimdi sıraya devam edebilirsin.'); }}>Geri al <span aria-hidden="true">↶</span></button>
        <button type="button" data-testid="sequence-check" className={styles.primary} disabled={answer.length !== puzzle.sequence.length} onClick={check}>Sıramı kontrol et <span aria-hidden="true">✓</span></button>
        <button type="button" data-testid="sequence-reveal" className={styles.reveal} onClick={revealSequence}>Tekrar bak</button>
      </div>}
    </>}
    <div className={`${styles.feedback} ${solved ? styles.success : ''}`} data-testid="game-feedback" role="status" aria-live="polite">{feedback}</div>
  </div>;
}
