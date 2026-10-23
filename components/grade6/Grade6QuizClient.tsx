'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import type { Question6, SubjectId, TermType } from '../../app/data/grade6/types';

type Props = {
  subjectId: SubjectId;
  subjectLabel: string;
  term: TermType;
  testNo: number;
  questions: Question6[];
};

function SmartText({ text }: { text: string }) {
  return <>{text.split(/(\$.*?\$)/g).map((part, index) => {
    if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
      return <InlineMath key={index} math={part.slice(1, -1)} renderError={() => <span>{part}</span>} />;
    }
    return <span key={index}>{part}</span>;
  })}</>;
}

export default function Grade6QuizClient({ subjectId, subjectLabel, term, testNo, questions }: Props) {
  // State belongs only to this grade-6 test; it never reads/writes grade-5 progress.
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);
  const [autoNext, setAutoNext] = useState(false);
  const [hint, setHint] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const nextTimer = useRef<number | null>(null);
  const questionHeading = useRef<HTMLHeadingElement>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const modalClose = useRef<HTMLButtonElement>(null);
  const currentQuestion = questions[questionIndex];
  const correctCount = useMemo(() => questions.filter((question, index) => answers[index] === question.correct).length, [answers, questions]);
  const percentage = questions.length ? Math.round(correctCount / questions.length * 100) : 0;

  const cancelNext = () => {
    if (nextTimer.current !== null) window.clearTimeout(nextTimer.current);
    nextTimer.current = null;
  };
  const stopReading = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
  };

  useEffect(() => {
    cancelNext();
    stopReading();
    (finished ? resultHeading.current : questionHeading.current)?.focus({ preventScroll: true });
    return () => { cancelNext(); stopReading(); };
  }, [questionIndex, finished, autoNext]);

  useEffect(() => {
    if (!imageUrl) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modalClose.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setImageUrl(null);
      if (event.key === 'Tab') { event.preventDefault(); modalClose.current?.focus(); }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [imageUrl]);

  const scrollToQuestion = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    questionHeading.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  const chooseAnswer = (optionIndex: number) => {
    cancelNext();
    setAnswers((previous) => ({ ...previous, [questionIndex]: optionIndex }));
    setHint('');
    if (autoNext && questionIndex < questions.length - 1) {
      nextTimer.current = window.setTimeout(() => {
        setQuestionIndex(questionIndex + 1);
        scrollToQuestion();
      }, 500);
    }
  };

  const goNext = () => {
    cancelNext();
    if (answers[questionIndex] === undefined) { setHint('Devam etmek için önce bir cevap seç.'); return; }
    setHint('');
    if (questionIndex === questions.length - 1) {
      const unanswered = questions.findIndex((_, index) => answers[index] === undefined);
      if (unanswered !== -1) {
        setQuestionIndex(unanswered);
        setHint('Sonucunu görmek için bu soruyu da cevapla.');
        return;
      }
      setFinished(true);
    } else {
      setQuestionIndex(questionIndex + 1);
      scrollToQuestion();
    }
  };

  const readQuestion = () => {
    if (!('speechSynthesis' in window)) { setHint('Bu tarayıcı sesli okumayı desteklemiyor.'); return; }
    if (!currentQuestion) return;
    stopReading();
    const clean = (text: string) => text.replace(/\$/g, '').replace(/\\[a-zA-Z]+/g, ' ').replace(/[{}]/g, ' ');
    const options = currentQuestion.options.map((option, index) => `${String.fromCharCode(65 + index)}. ${clean(option)}`).join('. ');
    const utterance = new SpeechSynthesisUtterance(`${clean(currentQuestion.prompt)}. ${options}`);
    utterance.lang = subjectId === 'ingilizce' ? 'en-US' : 'tr-TR';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  const retry = () => {
    cancelNext();
    stopReading();
    setAnswers({});
    setQuestionIndex(0);
    setFinished(false);
    setHint('');
  };

  if (!currentQuestion) return <p className="p-6 text-slate-700">Bu test için henüz soru eklenmedi.</p>;

  return (
    <section className="grade6-quiz space-y-6">
      {finished ? (
        <>
          <div className="space-y-6 rounded-[1.75rem] border border-indigo-100 bg-white p-6 text-center shadow-lg md:p-10">
            <h2 ref={resultHeading} tabIndex={-1} className="text-3xl font-black text-slate-900">Test Sonucun {percentage === 100 ? '🌟' : '📚'}</h2>
            <p className="text-6xl font-black text-indigo-700">%{percentage}</p>
            <p className="text-lg font-bold text-slate-700">{questions.length} soruda {correctCount} doğru, {questions.length - correctCount} yanlış</p>
            <p className="font-semibold leading-relaxed text-slate-600">{percentage === 100 ? 'Tüm soruları doğru yanıtladın! Yeni bir testle çalışmaya devam edebilirsin.' : 'Çözüm notlarını incele, ardından aynı testi tekrar çözerek öğrendiklerini pekiştir.'}</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <button onClick={retry} className="rounded-2xl bg-indigo-600 px-6 py-4 font-black text-white hover:bg-indigo-700">Aynı Testi Tekrar Çöz</button>
              <Link href={`/6-sinif/${subjectId}`} className="rounded-2xl border border-slate-300 bg-slate-50 px-6 py-4 font-black text-slate-800 hover:bg-slate-100">Başka Test Seç</Link>
            </div>
          </div>
          <section aria-labelledby="grade6-solutions" className="space-y-4">
            <h2 id="grade6-solutions" className="text-2xl font-black">Cevaplar ve Çözüm Notları</h2>
            {questions.map((question, index) => {
              const correct = answers[index] === question.correct;
              return (
                <article key={question.id} className={`space-y-4 rounded-[1.5rem] border-2 bg-white p-4 md:p-6 ${correct ? 'border-emerald-200' : 'border-rose-200'}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-black">{index + 1}. Soru</h3>
                    <span className={`rounded-full px-3 py-1 text-sm font-bold ${correct ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>{correct ? 'Doğru ✓' : 'Yanlış ✕'}</span>
                  </div>
                  <p className="whitespace-pre-line break-words font-bold leading-relaxed"><SmartText text={question.prompt} /></p>
                  {question.imageUrl && <Image src={question.imageUrl} alt={`${index + 1}. sorunun görseli`} width={900} height={600} className="h-auto max-h-80 w-full object-contain" />}
                  {!correct && <p className="rounded-xl bg-rose-50 p-3 text-rose-900"><strong>Senin cevabın: </strong><SmartText text={question.options[answers[index]] ?? 'Cevaplanmadı'} /></p>}
                  <p className="rounded-xl bg-emerald-50 p-3 text-emerald-900"><strong>Doğru cevap: </strong>{String.fromCharCode(65 + question.correct)}) <SmartText text={question.options[question.correct]} /></p>
                  <div className="space-y-2 rounded-xl bg-indigo-50 p-4 text-slate-800">
                    <h4 className="font-black text-indigo-700">💡 Çözüm Notu</h4>
                    <p className="whitespace-pre-line break-words leading-relaxed"><SmartText text={question.explanation} /></p>
                  </div>
                </article>
              );
            })}
          </section>
        </>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p role="status" aria-live="polite" className="font-black text-indigo-700">Soru {questionIndex + 1} / {questions.length}</p>
            <div className="flex flex-wrap items-center gap-2">
              <label className="flex min-h-11 items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 font-bold text-sm">
                <input type="checkbox" checked={autoNext} onChange={(event) => setAutoNext(event.target.checked)} className="h-4 w-4 accent-indigo-600" />Oto İlerle
              </label>
              <button onClick={readQuestion} className="min-h-11 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-bold">Soruyu Oku 🔊</button>
              <button onClick={stopReading} className="min-h-11 rounded-xl bg-slate-800 px-3 py-2 text-sm font-bold text-white">Durdur</button>
            </div>
          </div>
          <div role="progressbar" aria-label="Test ilerlemesi" aria-valuemin={1} aria-valuemax={questions.length} aria-valuenow={questionIndex + 1} className="h-3 overflow-hidden rounded-full bg-slate-200">
            <div style={{ width: `${(questionIndex + 1) / questions.length * 100}%` }} className="h-full rounded-full bg-indigo-600 transition-all" />
          </div>
          <div className="space-y-6 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-lg md:p-8">
            <h2 id="grade6-question" ref={questionHeading} tabIndex={-1} className="scroll-mt-6 whitespace-pre-line break-words text-lg font-extrabold leading-relaxed text-slate-800 md:text-2xl"><SmartText text={currentQuestion.prompt} /></h2>
            {currentQuestion.imageUrl && (
              <button onClick={() => { cancelNext(); stopReading(); setImageUrl(currentQuestion.imageUrl!); }} aria-label="Soru görselini büyüt" className="block w-full rounded-xl">
                <Image src={currentQuestion.imageUrl} alt="Soru görseli" width={900} height={600} className="h-auto max-h-96 w-full rounded-xl object-contain" />
                <span className="block py-2 text-sm font-bold text-indigo-700">Görseli büyüt 🔍</span>
              </button>
            )}
            <div role="group" aria-labelledby="grade6-question" className="grid gap-3">
              {currentQuestion.options.map((option, index) => {
                const selected = answers[questionIndex] === index;
                return <button key={index} onClick={() => chooseAnswer(index)} aria-pressed={selected} className={`flex min-h-16 items-center gap-3 rounded-2xl border-2 p-4 text-left font-bold md:text-lg ${selected ? 'border-indigo-600 bg-indigo-50 text-indigo-900' : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-indigo-300'}`}>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 ${selected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300 bg-white'}`}>{String.fromCharCode(65 + index)}</span>
                  <span className="min-w-0 whitespace-pre-line break-words"><SmartText text={option} /></span>
                </button>;
              })}
            </div>
          </div>
          {hint && <p role="alert" className="rounded-xl border border-amber-200 bg-amber-50 p-3 font-bold text-amber-900">{hint}</p>}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button disabled={questionIndex === 0} onClick={() => { cancelNext(); setHint(''); setQuestionIndex(questionIndex - 1); scrollToQuestion(); }} className="min-h-12 rounded-2xl px-4 py-3 font-bold text-slate-700 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40">← Geri</button>
            <button onClick={goNext} className={`min-h-12 rounded-2xl px-6 py-4 font-black text-white shadow-md ${questionIndex === questions.length - 1 ? 'bg-emerald-700 hover:bg-emerald-800' : 'bg-indigo-600 hover:bg-indigo-700'}`}>{questionIndex === questions.length - 1 ? 'Testi Bitir ✓' : 'Sonraki →'}</button>
          </div>
          <p className="text-sm font-medium text-slate-600">{subjectLabel} • {term}. Dönem • Test {testNo}. Cevaplarını Geri düğmesiyle kontrol edebilirsin.</p>
        </>
      )}
      {imageUrl && (
        <div role="dialog" aria-modal="true" aria-label="Büyütülmüş soru görseli" onClick={() => setImageUrl(null)} className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-3">
          <div onClick={(event) => event.stopPropagation()} className="w-full max-w-4xl space-y-3 rounded-2xl bg-white p-4">
            <div className="flex justify-end"><button ref={modalClose} onClick={() => setImageUrl(null)} className="rounded-xl bg-slate-800 px-5 py-3 font-black text-white">Kapat ✕</button></div>
            <Image src={imageUrl} alt="Büyütülmüş soru görseli" width={1200} height={800} className="max-h-[75vh] w-full object-contain" />
          </div>
        </div>
      )}
      <style jsx global>{`
        .grade6-quiz button:focus-visible, .grade6-quiz a:focus-visible, .grade6-quiz input:focus-visible { outline: 3px solid #4338ca; outline-offset: 3px; }
        .grade6-quiz .katex { font-size: 1.05em; }
        @media (prefers-reduced-motion: reduce) { .grade6-quiz * { transition: none !important; } }
      `}</style>
    </section>
  );
}
