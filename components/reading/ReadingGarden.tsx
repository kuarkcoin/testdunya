'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BookOpen, Check, ChevronRight, Ear, Flower2, Leaf, RotateCcw, Square, Star, Volume2 } from 'lucide-react';
import { LETTER_DETAILS, READING_GROUPS } from '../../lib/reading/content';
import { getExerciseId, getExerciseIds, parseProgress, READING_STORAGE_KEY, serializeProgress, shuffledItems, splitTurkishSyllables } from '../../lib/reading/learning';
import RecordingPractice from './RecordingPractice';
import { useReadingSpeech } from './useReadingSpeech';

type Stage = 'letter' | 'syllable' | 'word' | 'story';
const STAGES: { id: Stage; label: string; icon: typeof Leaf; description: string; instruction: string }[] = [
  { id: 'letter', label: 'Harf', icon: Leaf, description: 'Harfi tanı', instruction: 'Önce harfi incele. Sonra bu büyük harfin küçük yazılışını bul. İstersen örnek kelimeyi dinle.' },
  { id: 'syllable', label: 'Hece', icon: Flower2, description: 'Sesleri birleştir', instruction: 'Heceyi dinle. Harfleri sırayla seç. Sonra kontrol et düğmesine dokun. Parçaları değiştirmek için geri al düğmesini kullan.' },
  { id: 'word', label: 'Kelime', icon: Star, description: 'Heceleri birleştir', instruction: 'Kelimeyi dinle. Heceleri sırayla seçip kelimeyi kur. Sonra kontrol et düğmesine dokun.' },
  { id: 'story', label: 'Oku', icon: BookOpen, description: 'Oku ve anla', instruction: 'Metni dinleyebilir, kelimelere dokunabilir ya da kendin okuyabilirsin. Sonra soruyu cevapla.' },
];
const FOCUS = ' focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-emerald-600';
const WORD_TOKEN = /^[A-Za-zÇĞİÖŞÜçğıöşü]+$/u;

export default function ReadingGarden() {
  const [groupIndex, setGroupIndex] = useState(0);
  const [stage, setStage] = useState<Stage>('letter');
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [resetVersion, setResetVersion] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [storageNotice, setStorageNotice] = useState('');
  const [picked, setPicked] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<'success' | 'try' | null>(null);
  const [chosenAnswer, setChosenAnswer] = useState<number | null>(null);
  const [showSyllables, setShowSyllables] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [micBusy, setMicBusy] = useState(false);
  const group = READING_GROUPS[groupIndex];
  const items = stage === 'letter' ? group.letters : stage === 'syllable' ? group.syllables : stage === 'word' ? group.words : group.stories;
  const currentIndex = exerciseIndex % items.length;
  const letter = group.letters[currentIndex % group.letters.length];
  const detail = LETTER_DETAILS[letter];
  const word = group.words[currentIndex % group.words.length];
  const story = group.stories[currentIndex % group.stories.length];
  const syllable = group.syllables[currentIndex % group.syllables.length];
  const target = stage === 'letter' ? letter : stage === 'syllable' ? syllable : stage === 'word' ? word.text : story.id;
  const exerciseId = getExerciseId(stage, group.id, target);
  const resetKey = group.id + ':' + stage + ':' + currentIndex + ':' + resetVersion;
  const speech = useReadingSpeech(resetKey, micBusy);
  const allExerciseIds = useMemo(() => getExerciseIds(), []);
  const completedSet = useMemo(() => new Set(completed), [completed]);
  const seed = groupIndex * 100 + STAGES.findIndex((item) => item.id === stage) * 17 + currentIndex * 7;
  const currentStage = STAGES.find((item) => item.id === stage) || STAGES[0];
  const letterOptions = useMemo(() => shuffledItems(
    [letter, ...group.letters.filter((item) => item !== letter).slice(0, 2)], seed,
  ), [letter, group, seed]);
  const parts = useMemo(() => stage === 'word' ? [...word.syllables] : Array.from(syllable), [stage, word, syllable]);
  const tiles = useMemo(() => shuffledItems(parts.map((text, index) => ({ text, index })), seed), [parts, seed]);
  const assembled = picked.map((index) => parts[index]).join('');
  const audioDisabled = speech.supported === false || micBusy;
  const sampleText = stage === 'word' ? word.text : story.sentences.join(' ');
  const percent = Math.round((completed.length / Math.max(1, allExerciseIds.length)) * 100);

  useEffect(() => {
    try {
      setCompleted(parseProgress(localStorage.getItem(READING_STORAGE_KEY)));
    } catch {
      setStorageNotice('Bu tarayıcı ilerlemeyi saklayamıyor. Alıştırmalara yine de devam edebilirsiniz.');
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(READING_STORAGE_KEY, serializeProgress(completed));
    } catch {
      setStorageNotice('İlerleme bu cihazda kaydedilemedi. Alıştırmalar çalışmaya devam ediyor.');
    }
  }, [completed, loaded]);

  function clearExercise() {
    speech.cancel();
    setResetVersion((previous) => previous + 1);
    setPicked([]);
    setFeedback(null);
    setChosenAnswer(null);
    setMicBusy(false);
  }

  function chooseGroup(index: number) {
    clearExercise();
    setGroupIndex(index);
    setExerciseIndex(0);
  }

  function chooseStage(nextStage: Stage) {
    clearExercise();
    setStage(nextStage);
    setExerciseIndex(0);
  }

  function chooseExercise(index: number) {
    clearExercise();
    setExerciseIndex(index);
  }

  function nextExercise() {
    if (currentIndex + 1 < items.length) {
      chooseExercise(currentIndex + 1);
      return;
    }
    const stageIndex = STAGES.findIndex((item) => item.id === stage);
    if (stageIndex + 1 < STAGES.length) {
      chooseStage(STAGES[stageIndex + 1].id);
      return;
    }
    clearExercise();
    setGroupIndex((groupIndex + 1) % READING_GROUPS.length);
    setStage('letter');
    setExerciseIndex(0);
  }

  const nextLabel = currentIndex + 1 < items.length ? 'Sonrakine geç'
    : stage !== 'story' ? STAGES[STAGES.findIndex((item) => item.id === stage) + 1].label + ' çalışmasına geç'
    : groupIndex + 1 < READING_GROUPS.length ? 'Sonraki harf grubuna geç' : 'Baştan tekrar et';

  function finishExercise() {
    setFeedback('success');
    setCompleted((previous) => previous.includes(exerciseId) ? previous : [...previous, exerciseId]);
  }

  function answerLetter(option: string, index: number) {
    setChosenAnswer(index);
    if (option === letter) finishExercise();
    else setFeedback('try');
  }

  function answerStory(index: number) {
    setChosenAnswer(index);
    if (index === story.answerIndex) finishExercise();
    else setFeedback('try');
  }

  function chooseTile(index: number) {
    if (picked.includes(index) || feedback === 'success') return;
    setPicked((previous) => previous.includes(index) ? previous : [...previous, index]);
    setFeedback(null);
  }

  function checkParts() {
    if (assembled === (stage === 'word' ? word.text : syllable)) finishExercise();
    else setFeedback('try');
  }

  function resetProgress() {
    clearExercise();
    setCompleted([]);
    setConfirmReset(false);
  }

  function groupProgress(index: number) {
    const item = READING_GROUPS[index];
    const ids = [
      ...item.letters.map((value) => getExerciseId('letter', item.id, value)),
      ...item.syllables.map((value) => getExerciseId('syllable', item.id, value)),
      ...item.words.map((value) => getExerciseId('word', item.id, value.text)),
      ...item.stories.map((value) => getExerciseId('story', item.id, value.id)),
    ];
    return { done: ids.filter((id) => completedSet.has(id)).length, total: ids.length };
  }

  function listenButton(text: string, label: string, className = '') {
    return (
      <button type="button" onClick={() => speech.speak(text)} disabled={audioDisabled}
        className={'inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border-2 border-emerald-200 bg-white px-4 py-3 text-base font-extrabold text-emerald-900 transition-colors hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-50' + FOCUS + ' ' + className}>
        <Volume2 size={21} aria-hidden="true" />{label}
      </button>
    );
  }

  return (
    <div data-testid="reading-garden" className="space-y-5 text-slate-900">
      <section className="rounded-[1.75rem] border-2 border-emerald-100 bg-white p-4 shadow-sm sm:p-6" aria-labelledby="garden-progress">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800"><Flower2 size={29} aria-hidden="true" /></div>
            <div>
              <h2 id="garden-progress" className="text-lg font-black sm:text-xl">Küçük adımlar, yeni kelimeler</h2>
              <p className="mt-1 text-sm font-medium text-slate-600">Dinle, dokun, birlikte oku.</p>
            </div>
          </div>
          <div data-testid="progress-count" data-completed={completed.length} className="rounded-2xl bg-amber-50 px-4 py-2 text-amber-950">
            <span className="flex items-center gap-2 text-xl font-black"><Star size={22} className="fill-amber-300 text-amber-500" aria-hidden="true" />{completed.length}<span className="text-sm font-bold text-amber-800">/ {allExerciseIds.length}</span></span>
            <span className="text-xs font-bold">tamamlanan alıştırma</span>
          </div>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-emerald-50" role="progressbar" aria-label="Tamamlanan alıştırmalar" aria-valuemin={0} aria-valuemax={allExerciseIds.length} aria-valuenow={completed.length}>
          <div className="h-full rounded-full bg-emerald-500 transition-[width] duration-300 motion-reduce:transition-none" style={{ width: percent + '%' }} />
        </div>
      </section>

      <section aria-labelledby="group-heading">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-1">
          <h2 id="group-heading" className="text-lg font-black dark:text-slate-100">Harf grubunu seç</h2>
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">İlk kez başlıyorsan 1. grup</span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3">
          {READING_GROUPS.map((item, index) => {
            const progress = groupProgress(index);
            const active = groupIndex === index;
            return (
              <button key={item.id} type="button" data-testid={'group-' + item.id} aria-pressed={active} onClick={() => chooseGroup(index)}
                className={'min-h-24 rounded-2xl border-2 p-3 text-left transition-colors ' + (active ? 'border-emerald-700 bg-emerald-700 text-white shadow-sm' : 'border-emerald-100 bg-white text-slate-800 hover:border-emerald-400') + FOCUS}>
                <span className="flex items-center justify-between text-sm font-black">{index + 1}. grup{active && <Leaf size={17} aria-hidden="true" />}</span>
                <span className="mt-2 block break-words text-base font-black tracking-wide">{item.letters.map((value) => value.toLocaleUpperCase('tr-TR')).join(' ')}</span>
                <span className={'mt-1 block text-xs font-medium ' + (active ? 'text-emerald-50' : 'text-slate-500')}>{progress.done} / {progress.total} alıştırma</span>
              </button>
            );
          })}
        </div>
      </section>

      <div className="rounded-[2rem] border-2 border-emerald-100 bg-white p-3 shadow-sm sm:p-6">
        <div className="grid grid-cols-4 gap-1.5 rounded-2xl bg-slate-50 p-1.5 sm:gap-2" role="group" aria-label="Çalışma aşaması">
          {STAGES.map((item, index) => {
            const Icon = item.icon;
            return (
              <button key={item.id} type="button" data-testid={'stage-' + item.id} aria-pressed={stage === item.id} onClick={() => chooseStage(item.id)}
                className={'flex min-h-20 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 font-black transition-colors ' + (stage === item.id ? 'bg-amber-300 text-amber-950 shadow-sm' : 'text-slate-600 hover:bg-white') + FOCUS}>
                <Icon size={21} aria-hidden="true" /><span className="text-sm sm:text-base">{index + 1}. {item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 px-1">
          <h2 className="text-lg font-black text-emerald-900 sm:text-xl">{currentStage.description}</h2>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600">{currentIndex + 1} / {items.length}</span>
        </div>
        <div className="mt-3">{listenButton(currentStage.instruction, 'Ne yapacağım? Dinle', 'w-full sm:w-auto')}</div>

        {stage === 'letter' && (
          <div className="mt-4 space-y-5">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Bu gruptaki harfler">
              {group.letters.map((item, index) => (
                <button key={item} type="button" aria-label={item.toLocaleUpperCase('tr-TR') + ' harfi'} aria-pressed={currentIndex === index} onClick={() => chooseExercise(index)}
                  className={'flex min-h-12 min-w-12 items-center justify-center rounded-xl border-2 px-3 text-xl font-black ' + (currentIndex === index ? 'border-emerald-600 bg-emerald-50 text-emerald-900' : 'border-slate-200 text-slate-600 hover:border-emerald-300') + FOCUS}>
                  {item}{completedSet.has(getExerciseId('letter', group.id, item)) && <Check size={13} className="ml-1 text-emerald-700" aria-hidden="true" />}
                </button>
              ))}
            </div>
            <div className="grid gap-4 rounded-[1.5rem] bg-[#fff9e9] p-5 sm:grid-cols-2 sm:p-7">
              <div data-testid="exercise-target" data-target={letter} className="flex min-h-40 flex-col items-center justify-center rounded-2xl bg-white p-4">
                <div className="flex items-baseline justify-center gap-4 text-[5.5rem] font-bold leading-none tracking-normal text-emerald-800 sm:text-[7rem]" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
                  <span>{letter.toLocaleUpperCase('tr-TR')}</span><span>{letter}</span>
                </div>
                <p className="mt-4 text-base font-semibold text-slate-600">Büyük harf · küçük harf</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 text-center">
                <span aria-hidden="true" className="text-5xl">{detail.emoji}</span>
                <p className="break-words text-3xl font-black text-slate-800">{detail.example}</p>
                {listenButton(detail.name, 'Harf adını dinle')}
                {listenButton(detail.example, 'Örnek kelimeyi dinle')}
              </div>
            </div>
            <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium leading-relaxed text-emerald-950">
              {letter === 'ğ' ? 'Ğ harfini kelimenin içinde tanıyoruz. Onu tek başına bir ses gibi söylemiyoruz.' : 'Harflerin büyük ve küçük yazılışlarını incele. Şimdi aynı harfin küçüğünü bulalım.'}
            </p>
            <div className="rounded-2xl border-2 border-slate-100 p-4 sm:p-5">
              <h3 className="mb-4 text-center text-lg font-black">{letter.toLocaleUpperCase('tr-TR')} harfinin küçüğü hangisi?</h3>
              <div className="grid grid-cols-3 gap-3">
                {letterOptions.map((option, index) => (
                  <button key={option} type="button" data-testid="answer-option" data-value={option} onClick={() => answerLetter(option, index)} disabled={feedback === 'success'}
                    className={'min-h-20 rounded-2xl border-2 p-3 text-5xl font-bold transition-colors disabled:cursor-default ' + (chosenAnswer === index ? feedback === 'success' ? 'border-emerald-600 bg-emerald-100 text-emerald-900' : 'border-amber-400 bg-amber-50 text-amber-950' : 'border-slate-200 bg-white text-slate-800 hover:border-emerald-400') + FOCUS}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {(stage === 'syllable' || stage === 'word') && (
          <div className="mt-4 space-y-5">
            <div className="rounded-[1.5rem] bg-[#fff9e9] p-5 text-center sm:p-7">
              {stage === 'word' && <span className="mb-2 block text-5xl" aria-hidden="true">{word.emoji}</span>}
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-amber-900">{stage === 'word' ? 'Kelimeyi kur' : 'Heceyi kur'}</p>
              <div data-testid="exercise-target" data-target={stage === 'word' ? word.text : syllable} className="break-words text-5xl font-black leading-tight text-emerald-900 sm:text-6xl">{stage === 'word' ? word.text : syllable}</div>
              <div className="mt-5">{listenButton(stage === 'word' ? word.text : syllable, stage === 'word' ? 'Kelimeyi dinle' : 'Heceyi dinle')}</div>
            </div>
            <div className="rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/50 p-4 sm:p-6">
              <h3 className="text-center text-lg font-black text-slate-800">{stage === 'word' ? 'Heceleri sırayla seç' : 'Harfleri sırayla seç'}</h3>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2" aria-label="Seçtiğin parçalar" data-testid="assembled-parts">
                {parts.map((_, index) => (
                  <div key={index} className="flex min-h-16 min-w-14 items-center justify-center rounded-xl border-2 border-emerald-200 bg-white px-3 py-2 text-3xl font-black text-emerald-950">
                    {picked[index] === undefined ? <span aria-hidden="true" className="text-emerald-200">•</span> : parts[picked[index]]}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                {tiles.map((tile) => (
                  <button key={tile.index} type="button" data-testid="tile" data-index={tile.index} data-value={tile.text} aria-label={tile.text + ' parçası'} aria-pressed={picked.includes(tile.index)} onClick={() => chooseTile(tile.index)} disabled={picked.includes(tile.index) || feedback === 'success'}
                    className={'min-h-16 min-w-16 rounded-2xl border-2 border-amber-300 bg-amber-100 px-5 py-3 text-3xl font-black text-amber-950 shadow-sm transition-colors hover:bg-amber-200 disabled:border-slate-100 disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none' + FOCUS}>
                    {tile.text}
                  </button>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button type="button" data-testid="undo-tile" onClick={() => { setPicked((previous) => previous.slice(0, -1)); setFeedback(null); }} disabled={!picked.length || feedback === 'success'}
                  className={'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-bold text-slate-700 disabled:opacity-40' + FOCUS}><RotateCcw size={18} aria-hidden="true" />Geri al</button>
                <button type="button" data-testid="check-answer" onClick={checkParts} disabled={picked.length !== parts.length || feedback === 'success'}
                  className={'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 font-black text-white hover:bg-emerald-800 disabled:bg-slate-300 disabled:text-slate-600' + FOCUS}><Check size={20} aria-hidden="true" />Kontrol et</button>
              </div>
            </div>
          </div>
        )}

        {stage === 'story' && (
          <div className="mt-4 space-y-5">
            <div data-testid="exercise-target" data-target={story.id} className="rounded-[1.5rem] bg-[#fff9e9] p-4 sm:p-7">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-black text-emerald-900">{story.title}</h3>
                <button type="button" aria-pressed={showSyllables} onClick={() => setShowSyllables((previous) => !previous)}
                  className={'min-h-12 rounded-xl border-2 border-amber-300 bg-white px-4 py-2 text-sm font-extrabold text-amber-950 hover:bg-amber-50' + FOCUS}>
                  {showSyllables ? 'Kelime olarak göster' : 'Heceleri göster'}
                </button>
              </div>
              <div className="space-y-4 rounded-2xl bg-white p-3 sm:p-5" aria-label="Okuma metni">
                {story.sentences.map((sentence, sentenceIndex) => (
                  <p key={sentenceIndex} className="break-words text-2xl font-bold leading-[2] text-slate-800 sm:text-3xl">
                    {sentence.split(/([A-Za-zÇĞİÖŞÜçğıöşü]+)/g).filter(Boolean).map((token, tokenIndex) => WORD_TOKEN.test(token) ? (
                      <button key={tokenIndex} type="button" disabled={audioDisabled} onClick={() => speech.speak(token)} aria-label={token + ' kelimesini dinle'}
                        className={'rounded-lg px-1 text-left align-baseline decoration-emerald-300 decoration-2 underline-offset-8 hover:bg-emerald-50 hover:underline disabled:cursor-default' + FOCUS}>
                        {showSyllables ? splitTurkishSyllables(token).join('·') : token}
                      </button>
                    ) : <span key={tokenIndex}>{token}</span>)}
                  </p>
                ))}
              </div>
              <p className="my-3 text-sm font-semibold text-slate-600">Bir kelimeye dokunarak onu dinleyebilirsin.</p>
              {listenButton(story.sentences.join(' '), 'Metni dinle', 'w-full sm:w-auto')}
            </div>
            <div className="rounded-2xl border-2 border-emerald-100 p-4 sm:p-5">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-black">{story.question}</h3>
                {listenButton(story.question + ' ' + story.choices.join('. '), 'Soruyu dinle')}
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {story.choices.map((choice, index) => (
                  <button key={index} type="button" data-testid="answer-option" data-value={choice} onClick={() => answerStory(index)} disabled={feedback === 'success'}
                    className={'min-h-16 break-words rounded-2xl border-2 px-4 py-3 text-left text-xl font-black transition-colors disabled:cursor-default ' + (chosenAnswer === index ? feedback === 'success' ? 'border-emerald-600 bg-emerald-100 text-emerald-900' : 'border-amber-400 bg-amber-50 text-amber-950' : 'border-slate-200 bg-white text-slate-800 hover:border-emerald-400') + FOCUS}>
                    {choice}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-5" data-testid="exercise-feedback" role="status" aria-live="polite" aria-atomic="true">
          {feedback === 'success' ? (
            <p className="flex min-h-14 items-center gap-3 rounded-2xl bg-emerald-100 px-4 py-3 font-extrabold text-emerald-950"><Star size={24} className="shrink-0 fill-amber-300 text-amber-600" aria-hidden="true" />Çok güzel! Bu alıştırmayı tamamladın.</p>
          ) : feedback === 'try' ? (
            <p className="min-h-14 rounded-2xl bg-amber-50 px-4 py-3 font-bold text-amber-950">{stage === 'letter' || stage === 'story' ? 'Birlikte bir daha bakalım. Başka bir seçenek deneyebilirsin.' : 'Parçaları birlikte yeniden kuralım. “Geri al” düğmesini kullanabilirsin.'}</p>
          ) : (
            <p className="flex min-h-14 items-center gap-2 px-1 text-sm font-semibold text-slate-500"><Ear size={19} className="shrink-0" aria-hidden="true" />Acele etmene gerek yok. İstediğin kadar tekrar edebilirsin.</p>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
          {speech.speaking ? (
            <button type="button" onClick={speech.cancel} className={'inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-slate-200 px-4 py-3 font-bold text-slate-700' + FOCUS}><Square size={17} aria-hidden="true" />Sesi durdur</button>
          ) : <span className="text-sm font-semibold text-slate-500">{completedSet.has(exerciseId) ? 'Bu alıştırma tamamlandı.' : 'Her deneme yeni bir adım.'}</span>}
          <button type="button" data-testid="next-exercise" onClick={nextExercise}
            className={'inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-5 py-3 font-black text-white hover:bg-emerald-800' + FOCUS}>
            {nextLabel}<ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>
        {speech.status && <p className="mt-3 rounded-xl bg-slate-50 p-3 text-sm leading-relaxed text-slate-600" role="status">{speech.status}</p>}
      </div>

      {(stage === 'word' || stage === 'story') && (
        <RecordingPractice resetKey={resetKey} sampleText={sampleText} cancelSpeech={speech.cancel} onBusyChange={setMicBusy} />
      )}

      <details className="rounded-2xl border border-emerald-100 bg-white p-4 text-slate-700 sm:p-5">
        <summary className={'flex min-h-12 cursor-pointer items-center gap-2 rounded-lg font-extrabold text-emerald-900' + FOCUS}><BookOpen size={20} aria-hidden="true" />Veli ve öğretmen köşesi<ChevronRight size={17} className="ml-auto" aria-hidden="true" /></summary>
        <div className="mt-4 space-y-4 text-sm leading-relaxed">
          <p>Birlikte 5–10 dakikalık kısa çalışmalar yapabilirsiniz. Harfi tanıyın, heceyi ve kelimeyi kurun; ardından kısa metni okuyun. Çocuk yorulursa ara verin. Gruplar arasında serbestçe geçebilirsiniz.</p>
          <p><strong>Harf adı ve harf sesi aynı şey değildir.</strong> “Harf adını dinle” düğmesi harfin adını okur. Ses birleştirme çalışırken ünsüzün sonuna fazladan “e” sesi eklemeyin. Çocuğa sesi siz modelleyin; hece ve kelime düğmelerini birlikte dinleyin.</p>
          {stage === 'letter' && <p className="rounded-xl bg-amber-50 p-3"><strong>{letter.toLocaleUpperCase('tr-TR')} harfi için ipucu: </strong>{detail.hint}</p>}
          <p>“Heceleri göster” yazılı kelimeyi parçalara ayırır. Sesli örnek kelimenin tamamını okur. Ğ harfini tek başına seslendirmeye çalışmadan kelime içinde inceleyin.</p>
          <p>Yıldızlar doğru tamamlanan alıştırmaları gösterir; çocuğun telaffuzunu ya da okuma düzeyini ölçmez. İlerleme yalnız bu cihazın tarayıcısında saklanır. Sesli örnekler için cihazda Türkçe konuşma sesi bulunmalıdır.</p>
          {storageNotice && <p role="status" className="rounded-xl bg-amber-50 p-3 font-semibold text-amber-950">{storageNotice}</p>}
          {confirmReset ? (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="font-bold">Bu cihazdaki tamamlanan alıştırmalar sıfırlansın mı?</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <button type="button" data-testid="confirm-reset-progress" onClick={resetProgress} className={'min-h-12 rounded-xl bg-slate-800 px-4 py-3 font-bold text-white' + FOCUS}>Evet, sıfırla</button>
                <button type="button" data-testid="cancel-reset-progress" onClick={() => setConfirmReset(false)} className={'min-h-12 rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-bold text-slate-700' + FOCUS}>Vazgeç</button>
              </div>
            </div>
          ) : (
            <button type="button" data-testid="reset-progress" onClick={() => setConfirmReset(true)} className={'inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-slate-200 px-4 py-3 font-bold text-slate-600' + FOCUS}><RotateCcw size={17} aria-hidden="true" />İlerlemeyi sıfırla</button>
          )}
        </div>
      </details>
    </div>
  );
}
