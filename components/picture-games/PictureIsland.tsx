'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { LEVELS, MODES, PICTURES, PUZZLES, type GameMode, type Level, type PictureId } from '../../lib/picture-games/content';
import { getRoundIds, makeMemoryCards, parseProgress, serializeProgress, shuffled, STORAGE_KEY } from '../../lib/picture-games/learning';
import useReadingSpeech from '../reading/useReadingSpeech';
import Picture, { IslandIllustration } from './Picture';
import styles from './PictureIsland.module.css';

const MODE_PICTURES: Record<GameMode, PictureId> = { pattern: 'rocket', detective: 'fox', memory: 'owl' };
const TOTAL_ROUNDS = getRoundIds().length;

function SoundIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m11 5-6 5H2v4h3l6 5V5Z" /><path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" /></svg>;
}

export default function PictureIsland() {
  const [mode, setMode] = useState<GameMode>('pattern');
  const [level, setLevel] = useState<Level>(1);
  const [roundIndex, setRoundIndex] = useState(0);
  const [replay, setReplay] = useState(0);
  const [chosen, setChosen] = useState<PictureId | null>(null);
  const [solved, setSolved] = useState(false);
  const [finished, setFinished] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [openCards, setOpenCards] = useState<string[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [memoryMessage, setMemoryMessage] = useState('İki kart aç, aynı resimleri bul.');
  const [completed, setCompleted] = useState<string[]>([]);
  const [storageReady, setStorageReady] = useState(false);
  const [storageNote, setStorageNote] = useState('');
  const [resetConfirm, setResetConfirm] = useState(false);
  const [audioAttempted, setAudioAttempted] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const focusRequested = useRef(false);

  const puzzles = useMemo(() => PUZZLES.filter((puzzle) => puzzle.mode === mode && puzzle.level === level), [mode, level]);
  const puzzle = puzzles[roundIndex];
  const seed = level * 101 + replay * 997;
  const choices = useMemo(() => puzzle ? shuffled(puzzle.choices, seed + roundIndex * 17) : [], [puzzle, seed, roundIndex]);
  const cards = useMemo(() => makeMemoryCards(level, seed), [level, seed]);
  const activityKey = `${mode}-${level}-${roundIndex}-${replay}-${finished}`;
  const speech = useReadingSpeech(activityKey);
  const activeMode = MODES.find((entry) => entry.id === mode)!;
  const mismatch = openCards.length === 2;
  const roundComplete = mode === 'memory' ? matchedCards.length === cards.length : solved;
  const instruction = mode === 'memory' ? activeMode.instruction : `${activeMode.instruction} ${puzzle?.prompt || ''}`;

  useEffect(() => {
    try { setCompleted(parseProgress(window.localStorage.getItem(STORAGE_KEY))); }
    catch { setStorageNote('Bu cihaz ilerlemeyi saklayamıyor. Oynamaya devam edebilirsin.'); }
    setStorageReady(true);
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    try { window.localStorage.setItem(STORAGE_KEY, serializeProgress(completed)); }
    catch { setStorageNote('İlerleme bu kez kaydedilemedi. Bu sayfada oynamaya devam edebilirsin.'); }
  }, [completed, storageReady]);

  useEffect(() => {
    if (focusRequested.current) {
      headingRef.current?.focus({ preventScroll: true });
      focusRequested.current = false;
    }
  }, [activityKey]);

  const complete = useCallback((id: string) => {
    setCompleted((previous) => previous.includes(id) ? previous : [...previous, id]);
  }, []);

  function clearRound() {
    setChosen(null);
    setSolved(false);
    setFinished(false);
    setHintVisible(false);
    setAudioAttempted(false);
    setOpenCards([]);
    setMatchedCards([]);
    setMemoryMessage('İki kart aç, aynı resimleri bul.');
    speech.cancel();
    focusRequested.current = true;
  }

  function selectMode(nextMode: GameMode) {
    if (nextMode === mode) return;
    clearRound();
    setMode(nextMode);
    setRoundIndex(0);
  }

  function selectLevel(nextLevel: Level) {
    if (nextLevel === level) return;
    clearRound();
    setLevel(nextLevel);
    setRoundIndex(0);
  }

  function replayGame() {
    clearRound();
    setRoundIndex(0);
    setReplay((previous) => previous + 1);
  }

  function answer(picture: PictureId) {
    if (!puzzle || solved) return;
    setChosen(picture);
    if (picture === puzzle.answer) {
      setSolved(true);
      setHintVisible(false);
      complete(puzzle.id);
    } else setHintVisible(true);
  }

  function nextPuzzle() {
    if (!solved) return;
    if (roundIndex === puzzles.length - 1) {
      setFinished(true);
      speech.cancel();
      focusRequested.current = true;
    } else {
      clearRound();
      setRoundIndex((previous) => previous + 1);
    }
  }

  function flipCard(id: string) {
    if (mismatch || matchedCards.includes(id) || openCards.includes(id)) return;
    const card = cards.find((entry) => entry.id === id)!;
    if (openCards.length === 0) {
      setOpenCards([id]);
      setMemoryMessage('Şimdi bu resmin eşini bul.');
      return;
    }
    const first = cards.find((entry) => entry.id === openCards[0])!;
    if (first.picture === card.picture) {
      const nextMatched = [...matchedCards, first.id, id];
      setMatchedCards(nextMatched);
      setOpenCards([]);
      if (nextMatched.length === cards.length) {
        complete(`memory-${level}`);
        setMemoryMessage('Bütün resimlerin eşini buldun!');
      } else setMemoryMessage('Bir çift buldun! Şimdi başka iki kart aç.');
    } else {
      setOpenCards([first.id, id]);
      setMemoryMessage('Bu resimler farklı. Yerlerini hatırla, sonra yeniden dene.');
    }
  }

  function resetProgress() {
    setCompleted([]);
    setResetConfirm(false);
    replayGame();
  }

  const currentCount = mode === 'memory'
    ? matchedCards.length / 2
    : puzzles.filter((entry) => completed.includes(entry.id)).length;

  return (
    <div className={styles.island} data-testid="picture-island">
      <section className={styles.welcome} aria-label="Keşif adasına hoş geldin">
        <div className={styles.welcomeCopy}>
          <p className={styles.eyebrow}><span aria-hidden="true">✦</span> KÜÇÜK KAŞİFLER İÇİN</p>
          <h2>Bak, düşün,<br /><span>keşfet!</span></h2>
          <p>Resimlerin sırrını çöz. İster sırayı tamamla, ister eşleri bul. Her adımda yeni bir keşif!</p>
          <div className={styles.badges}><span>7 yaş için</span><span>Süre sınırı yok</span><span>Sesli yönergeler</span></div>
        </div>
        <IslandIllustration className={styles.heroArt} />
      </section>

      <section aria-labelledby="choose-game-title" className={styles.chooseSection}>
        <div className={styles.sectionHeading}><h2 id="choose-game-title">Bugün ne keşfedelim?</h2><span>3 farklı oyun</span></div>
        <div className={styles.modes}>
          {MODES.map((entry, index) => <button type="button" key={entry.id} data-testid={`mode-${entry.id}`} aria-pressed={mode === entry.id}
            onClick={() => selectMode(entry.id)} className={`${styles.mode} ${mode === entry.id ? styles.activeMode : ''}`}>
            <span className={styles.modeArt}><Picture id={MODE_PICTURES[entry.id]} decorative /></span>
            <span className={styles.modeCopy}><span className={styles.modeNumber}>0{index + 1}</span><strong>{entry.title}</strong><span>{entry.description}</span></span>
            <span className={styles.selectedMark} aria-hidden="true">{mode === entry.id ? '✓' : '→'}</span>
          </button>)}
        </div>
      </section>

      <div className={styles.playLayout}>
        <section id="oyun-alani" className={styles.playPanel} aria-labelledby="game-title">
          <div className={styles.panelTop}>
            <div className={styles.levels} aria-label="Zorluk seviyesi">
              {LEVELS.map((entry) => <button type="button" data-testid={`level-${entry.id}`} key={entry.id} aria-pressed={level === entry.id}
                className={level === entry.id ? styles.activeLevel : ''} onClick={() => selectLevel(entry.id)}>
                <span aria-hidden="true">{'•'.repeat(entry.id)}</span>{entry.label}
              </button>)}
            </div>
            <span className={styles.roundLabel}>{mode === 'memory' ? `${cards.length / 2} çift resim` : `${roundIndex + 1} / ${puzzles.length}`}</span>
          </div>

          {finished ? <div className={styles.finish}>
            <Picture id="owl" className={styles.finishArt} decorative />
            <p className={styles.eyebrow}>KEŞİF TAMAMLANDI</p>
            <h2 id="game-title" ref={headingRef} tabIndex={-1}>Bu turdaki bütün resimleri çözdün!</h2>
            <p>Bir mola verelim mi? Hazır olduğunda başka bir oyunu da keşfedebilirsin.</p>
            <div className={styles.finishActions}><button type="button" className={styles.primaryButton} onClick={replayGame} data-testid="replay-game">Yeniden oyna <span aria-hidden="true">↻</span></button>
              <button type="button" className={styles.secondaryButton} onClick={() => selectMode(mode === 'pattern' ? 'detective' : 'memory')}>Başka oyun keşfet <span aria-hidden="true">→</span></button></div>
          </div> : <>
            <div className={styles.questionHeading}>
              <div><p className={styles.eyebrow}>{activeMode.title}</p><h2 id="game-title" data-testid="game-prompt" ref={headingRef} tabIndex={-1}>{mode === 'memory' ? 'Resimlerin eşini bul!' : puzzle?.prompt}</h2></div>
              <button type="button" data-testid="speak-instructions" className={styles.listenButton} onClick={() => { setAudioAttempted(true); if (speech.speaking) speech.cancel(); else speech.speak(instruction); }} aria-label={speech.speaking ? 'Yönergenin sesini durdur' : 'Yönergeyi dinle'}>
                <SoundIcon /><span>{speech.speaking ? 'Durdur' : 'Dinle'}</span>
              </button>
            </div>
            {audioAttempted && !speech.available && <p className={styles.audioNotice} role="status">{speech.status}</p>}

            {mode === 'memory' ? <div data-testid="puzzle" data-puzzle-id={`memory-${level}`}>
              <div className={`${styles.memoryGrid} ${cards.length > 8 ? styles.memoryGridLarge : ''}`}>
                {cards.map((card, index) => {
                  const matched = matchedCards.includes(card.id);
                  const open = matched || openCards.includes(card.id);
                  return <button type="button" key={card.id} data-testid="memory-card" data-card-id={card.id} data-open={open ? 'true' : 'false'} data-picture={open ? card.picture : undefined}
                    aria-label={open ? `${index + 1}. kart: ${PICTURES[card.picture].label}${matched ? ', eşleşti' : ''}` : `${index + 1}. kapalı kartı aç`}
                    aria-pressed={open} disabled={matched || open || mismatch} onClick={() => flipCard(card.id)}
                    className={`${styles.memoryCard} ${open ? styles.openCard : ''} ${matched ? styles.matchedCard : ''}`}>
                    {open ? <Picture id={card.picture} decorative /> : <><span className={styles.cardBack} aria-hidden="true">✦</span><span className={styles.cardNumber} aria-hidden="true">{index + 1}</span></>}
                    {matched && <span className={styles.matchMark} aria-hidden="true">✓</span>}
                  </button>;
                })}
              </div>
              <div className={`${styles.feedback} ${roundComplete ? styles.success : ''}`} data-testid="game-feedback" role="status" aria-live="polite">{memoryMessage}</div>
              <div className={styles.roundActions}>
                {mismatch && <button type="button" data-testid="memory-retry" className={styles.primaryButton} onClick={() => { setOpenCards([]); setMemoryMessage('Yerlerini hatırlıyor musun? İki kart daha aç.'); }}>Yeniden dene <span aria-hidden="true">↻</span></button>}
                {roundComplete && <><p className={styles.breakNote}>Bir mola verelim mi? İstersen yeniden oynayabilir veya yukarıdan başka oyun seçebilirsin.</p><button type="button" data-testid="replay-game" className={styles.primaryButton} onClick={replayGame}>Yeniden oyna <span aria-hidden="true">↻</span></button></>}
              </div>
            </div> : puzzle && <div data-testid="puzzle" data-puzzle-id={puzzle.id}>
              {mode === 'pattern' && <div className={styles.sequence} aria-label="Resim sırası">
                {puzzle.sequence.map((picture, index) => <div className={styles.sequenceTile} key={`${picture}-${index}`}><Picture id={picture} label={`${index + 1}. resim: ${PICTURES[picture].label}`} /><span className={styles.sequenceNumber} aria-hidden="true">{index + 1}</span></div>)}
                <div className={`${styles.sequenceTile} ${styles.missingTile}`} aria-label={`${puzzle.sequence.length + 1}. sıradaki eksik resim`}>?<span className={styles.sequenceNumber} aria-hidden="true">{puzzle.sequence.length + 1}</span></div>
              </div>}
              <p className={styles.choicePrompt}>{mode === 'pattern' ? 'Sıradaki resme dokun.' : 'Cevabın olan resme dokun.'}</p>
              <div className={`${styles.choices} ${choices.length > 3 ? styles.fourChoices : ''}`}>
                {choices.map((picture) => <button type="button" key={picture} data-testid="choice" data-picture={picture} disabled={solved}
                  onClick={() => answer(picture)} aria-label={PICTURES[picture].label} aria-pressed={chosen === picture}
                  className={`${styles.choice} ${chosen === picture ? solved ? styles.correctChoice : styles.tryChoice : ''}`}>
                  <Picture id={picture} decorative />
                  {chosen === picture && <span className={styles.choiceMark} aria-hidden="true">{solved ? '✓' : '↻'}</span>}
                </button>)}
              </div>
              <div className={`${styles.feedback} ${solved ? styles.success : ''}`} data-testid="game-feedback" role="status" aria-live="polite">
                {solved ? <>Buldun! {puzzle.explanation}</> : hintVisible ? <>Bir daha bakalım. {puzzle.hint}</> : 'Acele etme. Resimlere dikkatlice bak.'}
              </div>
              <div className={styles.roundActions}>
                {solved ? <button type="button" data-testid="next-puzzle" className={styles.primaryButton} onClick={nextPuzzle}>{roundIndex === puzzles.length - 1 ? 'Turu tamamla' : 'Sıradaki keşif'} <span aria-hidden="true">→</span></button>
                  : <button type="button" className={styles.hintButton} onClick={() => { setHintVisible(true); speech.speak(puzzle.hint); }}>İpucu ver <span aria-hidden="true">✧</span></button>}
                {(solved || hintVisible) && <button type="button" className={styles.secondaryButton} aria-label={solved ? 'Açıklamayı dinle' : 'İpucunu dinle'} onClick={() => speech.speak(solved ? puzzle.explanation : puzzle.hint)}><SoundIcon />{solved ? 'Açıklamayı dinle' : 'İpucunu dinle'}</button>}
              </div>
            </div>}
          </>}
        </section>

        <aside className={styles.journal} aria-labelledby="discovery-title">
          <div className={styles.guide}><Picture id="fox" decorative /><div><p className={styles.eyebrow}>KEŞİF ARKADAŞIN</p><p>Denemek de<br />bir keşiftir!</p></div></div>
          <h2 id="discovery-title">Keşif defterim</h2>
          <p className={styles.journalIntro}>Tamamladığın her yeni alıştırma burada birikir.</p>
          <div className={styles.progressCount} data-testid="game-progress" data-completed={completed.length}><strong>{completed.length}</strong><span>/ {TOTAL_ROUNDS}<br />alıştırma</span></div>
          <div className={styles.progressTrack} role="progressbar" aria-label="Tamamlanan alıştırmalar" aria-valuemin={0} aria-valuemax={TOTAL_ROUNDS} aria-valuenow={completed.length}><span style={{ width: `${completed.length / TOTAL_ROUNDS * 100}%` }} /></div>
          <div className={styles.today}><span aria-hidden="true">✦</span><div><strong>{mode === 'memory' ? `${currentCount} / ${cards.length / 2} eş bulundu` : `${currentCount} / ${puzzles.length} keşif tamam`}</strong><p>Bu oyunda, bu seviyede</p></div></div>
          <p className={styles.smallNote}>Tekrar oynamak toplamı artırmaz. Kendi hızında, istediğin kadar dene.</p>
          {storageNote && <p className={styles.storageNote} role="status">{storageNote}</p>}
          {resetConfirm ? <div className={styles.resetConfirm} role="group" aria-label="İlerlemeyi sıfırlama onayı"><p>Keşif defterini temizleyip baştan başlayalım mı?</p><button type="button" data-testid="confirm-reset-game-progress" onClick={resetProgress}>Evet, temizle</button><button type="button" data-testid="cancel-reset-game-progress" onClick={() => setResetConfirm(false)}>Vazgeç</button></div>
            : <button type="button" className={styles.resetButton} data-testid="reset-game-progress" onClick={() => setResetConfirm(true)}>Keşif defterini temizle</button>}
        </aside>
      </div>

      <details className={styles.parentNote}>
        <summary>Birlikte oynayan yetişkin için</summary>
        <div><p>Resimli alıştırmalar; görsel dikkat, örüntü fark etme, sınıflandırma ve eşlerin yerini hatırlama pratiği sunar. Zekâ puanı vermez. Çocuğa “Nasıl buldun?” diye sorabilir, 5–10 dakikalık oyundan sonra ara verebilirsiniz.</p>
          <p>Okumaya yeni başlayan çocuk yönergeyi dinleyebilir. Türkçe ses desteği cihaza bağlıdır; ses çalışmazsa yönergeyi birlikte okuyabilirsiniz. <span role="status">{speech.status}</span></p>
          <p>Keşif defteri yalnızca bu tarayıcıda saklanır. Bu oyunda mikrofon veya hesap gerekmez.</p></div>
      </details>
    </div>
  );
}
