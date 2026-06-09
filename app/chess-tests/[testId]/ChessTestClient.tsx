'use client';

import { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
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
  testNumber?: number;
  previousTestId?: string;
  nextTestId?: string;
  quizSchema?: Record<string, unknown>;
  breadcrumbSchema?: Record<string, unknown>;
};

const questionTranslations: Record<string, string> = {
  'Matı bulan en iyi hamle hangisidir?': 'What is the best move to deliver checkmate?',
  'Çatal taktiğini başlatan hamle hangisidir?': 'Which move starts the fork tactic?',
  'Açmazdan yararlanan en iyi hamle hangisidir?': 'Which move best exploits the pin?',
  'Şiş taktiğini başlatan hamle hangisidir?': 'Which move starts the skewer tactic?',
  'En iyi savunma hamlesi hangisidir?': 'What is the best defensive move?',
  'Boştaki taşı kazandıran hamle hangisidir?': 'Which move wins the hanging piece?',
  'Üstünlük sağlayan en iyi hamle hangisidir?': 'What is the best move to gain an advantage?',
  'En iyi hamle hangisidir?': 'What is the best move?',
  'İki hamlede mat fikrini başlatan hamle hangisidir?': 'Which move starts the mate-in-two idea?',
  'Hat açma fikrini başlatan hamle hangisidir?': 'Which move opens the line for a tactic?',
  'Çekme taktiğini başlatan hamle hangisidir?': 'Which move starts the discovered attack tactic?',
  'Saptırma taktiğini başlatan hamle hangisidir?': 'Which move starts the deflection tactic?',
  'Araya girme taktiğini başlatan hamle hangisidir?': 'Which move starts the interference tactic?',
  'Fedaya dayalı en iyi hamle hangisidir?': 'What is the best sacrifice-based move?',
  'Sıkışmış taşı kazandıran hamle hangisidir?': 'Which move wins the trapped piece?',
  'Beyaz hangi hamleyle taktik baskı kurmalıdır?': 'Which move should White play to create tactical pressure?',
  'Beyaz gelişimini sürdürmek için en doğal hamle hangisidir?': 'Which is the most natural move for White to continue development?',
  'Beyaz hangi hamleyle şah güvenliğini sağlamalıdır?': 'Which move should White play to secure king safety?',
  'Beyaz hangi hamleyle merkezi desteklemelidir?': 'Which move should White play to support the center?',
  'Siyah gelişim temposunu nasıl korumalıdır?': 'How should Black maintain the development tempo?',
  'Siyah merkeze en iyi nasıl karşılık verir?': 'How should Black best respond in the center?',
  'Beyaz hangi sakin hamleyle taşlarını tamamlar?': 'Which quiet move helps White complete development?',
  'Siyah vezir baskısını hangi hamleyle artırabilir?': 'Which move can Black use to increase queen pressure?',
  'Beyaz hangi hamleyle merkezi kırmayı hedeflemelidir?': 'Which move should White play to challenge the center?',
  'Siyah hangi gelişim hamlesiyle konumunu tamamlar?': 'Which developing move should Black play to complete the position?',
};

function getQuestionText(question: ChessQuestion) {
  return questionTranslations[question.question] ?? 'What is the best move?';
}

function getOptionText(question: ChessQuestion, optionId?: string) {
  if (!optionId) {
    return 'Unanswered / Time expired';
  }

  return question.options.find((option) => option.id === optionId)?.text ?? optionId;
}

function getSourceLabel(question?: ChessQuestion) {
  return question?.source || 'Lichess Puzzle Database';
}

export default function ChessTestClient({ test, testNumber = 1, previousTestId, nextTestId, quizSchema, breadcrumbSchema }: ChessTestClientProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | undefined>();
  const [remainingSeconds, setRemainingSeconds] = useState(test?.questionTimeSeconds ?? 180);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const questions = test?.questions ?? [];
  const currentQuestion = questions[currentQuestionIndex];
  const durationSeconds = test?.questionTimeSeconds ?? 180;
  const title = `Chess Test ${testNumber}`;

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

  const schemaScripts = (
    <>
      {quizSchema && <Script id="chess-test-quiz-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }} />}
      {breadcrumbSchema && <Script id="chess-test-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />}
    </>
  );

  if (!test) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-rose-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-3xl">♟</div>
          <h1 className="text-3xl font-black text-slate-900">Chess test not found</h1>
          <p className="mt-3 text-slate-600">The chess test you requested is not available or may have been removed.</p>
          <Link href="/chess-tests" className="mt-6 inline-flex rounded-2xl bg-emerald-700 px-5 py-3 font-black text-white transition hover:bg-emerald-800">
            Back to Chess Tests
          </Link>
        </div>
      </main>
    );
  }

  if (!questions.length) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 px-4 py-10">
        {schemaScripts}
        <div className="mx-auto max-w-3xl rounded-3xl border border-amber-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-black text-slate-900">This test has no questions yet</h1>
          <p className="mt-3 text-slate-600">The test will work automatically when questions are added to the JSON data.</p>
          <Link href="/chess-tests" className="mt-6 inline-flex rounded-2xl bg-emerald-700 px-5 py-3 font-black text-white transition hover:bg-emerald-800">
            Back to Chess Tests
          </Link>
        </div>
      </main>
    );
  }

  if (isFinished) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 px-4 py-8 sm:px-6 lg:px-8">
        {schemaScripts}
        <div className="mx-auto max-w-5xl">
          <section className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-emerald-100 sm:p-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">♔</div>
              <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">Result</h1>
              <p className="mt-2 font-medium text-slate-600">{title} is complete.</p>
              <p className="mt-2 text-sm font-bold text-slate-500">Source: Lichess Puzzle Database</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl bg-emerald-50 p-4 text-center"><div className="text-3xl font-black text-emerald-700">{stats.correct}</div><div className="text-sm font-bold text-emerald-900">Correct</div></div>
              <div className="rounded-2xl bg-rose-50 p-4 text-center"><div className="text-3xl font-black text-rose-700">{stats.wrong}</div><div className="text-sm font-bold text-rose-900">Wrong</div></div>
              <div className="rounded-2xl bg-amber-50 p-4 text-center"><div className="text-3xl font-black text-amber-700">{stats.blank}</div><div className="text-sm font-bold text-amber-900">Unanswered</div></div>
              <div className="rounded-2xl bg-sky-50 p-4 text-center"><div className="text-3xl font-black text-sky-700">%{stats.percentage}</div><div className="text-sm font-bold text-sky-900">Success Rate</div></div>
            </div>

            <div className="mt-8 space-y-4">
              {questions.map((question, index) => {
                const answer = answers.find((item) => item.questionId === question.id);
                const isCorrect = answer?.isCorrect;

                return (
                  <article key={question.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h2 className="font-black text-slate-900">Question {index + 1}: {getQuestionText(question)}</h2>
                      <span className={`w-fit rounded-full px-3 py-1 text-xs font-black ${isCorrect ? 'bg-emerald-100 text-emerald-800' : answer?.timedOut ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'}`}>
                        {isCorrect ? 'Correct' : answer?.timedOut ? 'Time Expired' : 'Wrong'}
                      </span>
                    </div>
                    <div className="grid gap-2 text-sm font-semibold text-slate-700 sm:grid-cols-2">
                      <p><span className="font-black">Your answer:</span> {getOptionText(question, answer?.selectedOptionId)}</p>
                      <p><span className="font-black">Correct answer:</span> {question.correctAnswer} - {getOptionText(question, question.correctAnswer)}</p>
                    </div>
                    <p className="mt-3 rounded-xl bg-white p-3 text-sm font-medium text-slate-600">{question.explanation}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-wide text-slate-400">Source: {getSourceLabel(question)}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button type="button" onClick={handleRestart} className="rounded-2xl bg-emerald-700 px-6 py-3 font-black text-white transition hover:bg-emerald-800">
                Try Again
              </button>
              <Link href="/chess-tests" className="rounded-2xl border border-emerald-200 bg-white px-6 py-3 text-center font-black text-emerald-800 transition hover:bg-emerald-50">
                Back to Chess Tests
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 px-4 py-6 sm:px-6 lg:px-8">
      {schemaScripts}
      <div className="mx-auto max-w-6xl">
        <nav className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-600">
            <li><Link className="text-emerald-800 hover:text-emerald-900" href="/">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link className="text-emerald-800 hover:text-emerald-900" href="/chess-tests">Chess Tests</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-slate-900" aria-current="page">{title}</li>
          </ol>
          <div className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm ring-1 ring-slate-100">
            Question {currentQuestionIndex + 1} / {questions.length}
          </div>
        </nav>

        <section className="mb-5 rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-sm">
          <h1 className="text-3xl font-black text-slate-900">{title}</h1>
          <p className="mt-2 text-sm font-bold text-slate-600">This chess test includes 10 timed puzzle questions. Find the best move and improve your tactical vision.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/chess-tests" className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-800 transition hover:bg-emerald-100">← Back to Chess Tests</Link>
            {previousTestId && <Link href={`/chess-tests/${previousTestId}`} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 transition hover:bg-slate-50">Previous Test</Link>}
            {nextTestId && <Link href={`/chess-tests/${nextTestId}`} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 transition hover:bg-slate-50">Next Test</Link>}
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-4 shadow-xl ring-1 ring-emerald-100 sm:p-6 lg:p-8">
          <div className="mb-6 grid gap-4 lg:grid-cols-[1fr_18rem] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-emerald-700">{title}</p>
              <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">{getQuestionText(currentQuestion)}</h2>
              <p className="mt-2 text-sm font-bold text-slate-500">Side to move: {currentQuestion.sideToMove === 'white' ? 'White' : 'Black'}</p>
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
                    Your answer is ready to be saved. You can move to the next question.
                  </p>
                  <button type="button" onClick={handleNext} className="mt-3 w-full rounded-2xl bg-emerald-700 px-5 py-3 font-black text-white transition hover:bg-emerald-800">
                    {currentQuestionIndex >= questions.length - 1 ? 'Finish Test' : 'Next Question'}
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
