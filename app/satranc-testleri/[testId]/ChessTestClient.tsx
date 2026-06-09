'use client';

import { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import ChessBoard from '../../../components/chess/ChessBoard';
import ChessOption from '../../../components/chess/ChessOption';
import Timer from '../../../components/chess/Timer';
import type { ChessQuestion, ChessTest } from '../../../lib/chess/types';

type AnswerRecord = {
  questionId: number;
  selectedOptionId?: string;
  isCorrect: boolean;
  timedOut: boolean;
};

type ChessTestClientProps = {
  test?: ChessTest;
};

function getOptionText(question: ChessQuestion, optionId?: string) {
  if (!optionId) {
    return 'Boş / Süresi doldu';
  }

  return question.options.find((option) => option.id === optionId)?.text ?? optionId;
}

export default function ChessTestClient({ test }: ChessTestClientProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | undefined>();
  const [remainingSeconds, setRemainingSeconds] = useState(test?.questionTimeSeconds ?? 180);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const questions = test?.questions ?? [];
  const currentQuestion = questions[currentQuestionIndex];
  const durationSeconds = test?.questionTimeSeconds ?? 180;

  const recordAndMove = useCallback((optionId?: string, timedOut = false) => {
    if (!currentQuestion || isFinished) {
      return;
    }

    const isCorrect = Boolean(optionId && optionId === currentQuestion.correctAnswer);
    const nextAnswers = [
      ...answers,
      {
        questionId: currentQuestion.id,
        selectedOptionId: optionId,
        isCorrect,
        timedOut,
      },
    ];

    setAnswers(nextAnswers);

    if (currentQuestionIndex >= questions.length - 1) {
      setIsFinished(true);
      return;
    }

    setCurrentQuestionIndex((index) => index + 1);
    setSelectedOptionId(undefined);
    setRemainingSeconds(durationSeconds);
  }, [answers, currentQuestion, currentQuestionIndex, durationSeconds, isFinished, questions.length]);

  const handleExpire = useCallback(() => {
    recordAndMove(undefined, true);
  }, [recordAndMove]);

  const handleNext = useCallback(() => {
    recordAndMove(selectedOptionId, false);
  }, [recordAndMove, selectedOptionId]);

  const handleRestart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setSelectedOptionId(undefined);
    setRemainingSeconds(durationSeconds);
    setAnswers([]);
    setIsFinished(false);
  }, [durationSeconds]);

  const stats = useMemo(() => {
    const correct = answers.filter((answer) => answer.isCorrect).length;
    const blank = answers.filter((answer) => answer.timedOut || !answer.selectedOptionId).length;
    const wrong = answers.length - correct - blank;
    const percentage = questions.length ? Math.round((correct / questions.length) * 100) : 0;

    return { correct, wrong, blank, percentage };
  }, [answers, questions.length]);

  if (!test) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-rose-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-3xl">♟</div>
          <h1 className="text-3xl font-black text-slate-900">Test bulunamadı</h1>
          <p className="mt-3 text-slate-600">Aradığınız satranç testi yayında değil veya kaldırılmış olabilir.</p>
          <Link href="/satranc-testleri" className="mt-6 inline-flex rounded-2xl bg-emerald-700 px-5 py-3 font-black text-white transition hover:bg-emerald-800">
            Satranç Testlerine Dön
          </Link>
        </div>
      </main>
    );
  }

  if (!questions.length) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-amber-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-black text-slate-900">Bu testte henüz soru yok</h1>
          <p className="mt-3 text-slate-600">JSON verisine soru eklendiğinde test otomatik olarak çalışacaktır.</p>
          <Link href="/satranc-testleri" className="mt-6 inline-flex rounded-2xl bg-emerald-700 px-5 py-3 font-black text-white transition hover:bg-emerald-800">
            Satranç Testlerine Dön
          </Link>
        </div>
      </main>
    );
  }

  if (isFinished) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <section className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-emerald-100 sm:p-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">♔</div>
              <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">Sonuç Ekranı</h1>
              <p className="mt-2 font-medium text-slate-600">{test.title} tamamlandı.</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl bg-emerald-50 p-4 text-center"><div className="text-3xl font-black text-emerald-700">{stats.correct}</div><div className="text-sm font-bold text-emerald-900">Doğru</div></div>
              <div className="rounded-2xl bg-rose-50 p-4 text-center"><div className="text-3xl font-black text-rose-700">{stats.wrong}</div><div className="text-sm font-bold text-rose-900">Yanlış</div></div>
              <div className="rounded-2xl bg-amber-50 p-4 text-center"><div className="text-3xl font-black text-amber-700">{stats.blank}</div><div className="text-sm font-bold text-amber-900">Boş / Süresi Dolan</div></div>
              <div className="rounded-2xl bg-sky-50 p-4 text-center"><div className="text-3xl font-black text-sky-700">%{stats.percentage}</div><div className="text-sm font-bold text-sky-900">Başarı</div></div>
            </div>

            <div className="mt-8 space-y-4">
              {questions.map((question, index) => {
                const answer = answers.find((item) => item.questionId === question.id);
                const isCorrect = answer?.isCorrect;

                return (
                  <article key={question.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h2 className="font-black text-slate-900">{index + 1}. {question.question}</h2>
                      <span className={`w-fit rounded-full px-3 py-1 text-xs font-black ${isCorrect ? 'bg-emerald-100 text-emerald-800' : answer?.timedOut ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'}`}>
                        {isCorrect ? 'Doğru' : answer?.timedOut ? 'Süre Doldu' : 'Yanlış'}
                      </span>
                    </div>
                    <div className="grid gap-2 text-sm font-semibold text-slate-700 sm:grid-cols-2">
                      <p><span className="font-black">Cevabınız:</span> {getOptionText(question, answer?.selectedOptionId)}</p>
                      <p><span className="font-black">Doğru cevap:</span> {question.correctAnswer} - {getOptionText(question, question.correctAnswer)}</p>
                    </div>
                    <p className="mt-3 rounded-xl bg-white p-3 text-sm font-medium text-slate-600">{question.explanation}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button type="button" onClick={handleRestart} className="rounded-2xl bg-emerald-700 px-6 py-3 font-black text-white transition hover:bg-emerald-800">
                Tekrar Çöz
              </button>
              <Link href="/satranc-testleri" className="rounded-2xl border border-emerald-200 bg-white px-6 py-3 text-center font-black text-emerald-800 transition hover:bg-emerald-50">
                Satranç Testlerine Dön
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/satranc-testleri" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm ring-1 ring-emerald-100 transition hover:bg-emerald-50">
            ← Test listesi
          </Link>
          <div className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm ring-1 ring-slate-100">
            {currentQuestionIndex + 1} / {questions.length}
          </div>
        </div>

        <section className="rounded-[2rem] bg-white p-4 shadow-xl ring-1 ring-emerald-100 sm:p-6 lg:p-8">
          <div className="mb-6 grid gap-4 lg:grid-cols-[1fr_18rem] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-emerald-700">{test.title}</p>
              <h1 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">{currentQuestion.question}</h1>
              <p className="mt-2 text-sm font-bold text-slate-500">Hamle sırası: {currentQuestion.sideToMove === 'white' ? 'Beyaz' : 'Siyah'}</p>
            </div>
            <Timer
              durationSeconds={durationSeconds}
              remainingSeconds={remainingSeconds}
              isRunning={!selectedOptionId}
              onTick={setRemainingSeconds}
              onExpire={handleExpire}
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:items-start">
            <div>
              <ChessBoard fen={currentQuestion.fen} image={currentQuestion.image} />
            </div>
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <ChessOption
                  key={option.id}
                  option={option}
                  selected={selectedOptionId === option.id}
                  disabled={Boolean(selectedOptionId)}
                  reveal={Boolean(selectedOptionId)}
                  isCorrect={option.id === currentQuestion.correctAnswer}
                  onSelect={setSelectedOptionId}
                />
              ))}

              {selectedOptionId && (
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                  <p className="text-sm font-bold text-emerald-900">
                    Cevabınız kaydedilmeye hazır. Sonraki soruya geçebilirsiniz.
                  </p>
                  <button type="button" onClick={handleNext} className="mt-3 w-full rounded-2xl bg-emerald-700 px-5 py-3 font-black text-white transition hover:bg-emerald-800">
                    {currentQuestionIndex >= questions.length - 1 ? 'Sonucu Gör' : 'Sonraki Soru'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
