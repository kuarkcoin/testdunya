'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// --- ICONS ---
const Clock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);
const Headphones = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M2 19v-3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/><path d="M17 14h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"/></svg>
);

// --- TYPES ---
interface Choice {
  id: string;
  text: string;
}
interface Question {
  id: string;
  prompt: string;
  choices: Choice[];
  answer: string;
  explanation?: string;
}

type Mode = 'exam' | 'practice';

// --- STATIC LABELS ---
const getLabels = (isGlobal: boolean) => ({
  loading: isGlobal ? "Loading Test..." : "Test Hazırlanıyor...",
  errorTitle: isGlobal ? "Error Occurred" : "Bir Sorun Oluştu",
  homeButton: isGlobal ? "Back to Home" : "Ana Sayfaya Dön",
  finish: isGlobal ? "Finish Test" : "Bitir",
  completeTest: isGlobal ? "Complete Test" : "Testi Tamamla",
  question: isGlobal ? "QUESTION" : "SORU",
  resultTitle: isGlobal ? "Test Result" : "Test Sonucu",
  correct: isGlobal ? "Correct" : "Doğru",
  total: isGlobal ? "Total" : "Toplam",
  score: isGlobal ? "Score" : "Başarı",
  backList: isGlobal ? "Back to List" : "Listeye Dön",
  seeMistakes: isGlobal ? "See My Mistakes" : "Hatalarımı Gör",
  analysis: isGlobal ? "Detailed Analysis" : "Detaylı Analiz",
  explanation: isGlobal ? "Explanation:" : "Açıklama / Çözüm:",
  yourChoice: isGlobal ? "YOUR CHOICE" : "SEÇİMİN",
  correctBadge: isGlobal ? "CORRECT" : "DOĞRU",

  // ✅ NEW (Exam/Practice)
  modeExam: isGlobal ? "Exam" : "Sınav",
  modePractice: isGlobal ? "Practice" : "Alıştırma",
  modeHint: isGlobal ? "Timed • Real exam feel" : "Süreli • Gerçek sınav modu",
  modeHintPractice: isGlobal ? "Untimed • Learn comfortably" : "Süresiz • Rahat öğrenme",
});

// --- HELPERS ---
function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function formatText(text: string) {
  if (!text) return null;

  const cleanedText = text.replace(/\[attachment_.*?\]/g, "").replace(/\(attachment\)/g, "");

  if (cleanedText.includes('<div') || cleanedText.includes('<p>') || cleanedText.includes('custom-reading-content')) {
    return <div className="prose prose-zinc dark:prose-invert max-w-none prose-p:leading-relaxed prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100" dangerouslySetInnerHTML={{ __html: cleanedText }} />;
  }

  const parts = String(cleanedText).split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          let content = part.slice(2, -2).replace(/^['"]+|['"]+$/g, '');
          return (
            <span
              key={index}
              className="bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded mx-1 border border-indigo-100 text-sm shadow-sm"
            >
              {content}
            </span>
          );
        }
        return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
      })}
    </>
  );
}

function findExplanation(item: any): string {
  return (
    item.explanation || item.Explanation || item.aciklama || item.Açıklama ||
    item.solution || item.Solution || item.cozum || item.Çözüm || ""
  );
}

// --- MEMOIZED QUESTION CARD ---
const QuestionCard = React.memo(({
  q, idx, answer, onAnswer, labels,
}: {
  q: Question;
  idx: number;
  answer: string;
  onAnswer: (qid: string, val: string) => void;
  labels: any;
}) => {
  return (
    <div className="premium-card p-6 md:p-8 rounded-3xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-200 text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider">
          {labels.question} {idx + 1}
        </span>
      </div>
      <div className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-zinc-100 mb-8 leading-relaxed">
        {formatText(q.prompt)}
      </div>

      <div className="grid gap-3">
        {q.choices.map((c) => (
          <label
            key={c.id}
            className={`group cursor-pointer flex items-center p-4 rounded-2xl border-2 transition-all duration-200 active:scale-[0.99] ${
              answer === c.id
                ? 'border-indigo-600 bg-indigo-50/50 shadow-md ring-1 ring-indigo-600'
                : 'border-slate-200 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-500 hover:bg-indigo-50/40 dark:hover:bg-indigo-500/10'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-colors flex-shrink-0 ${
                answer === c.id ? 'border-indigo-600 bg-indigo-600' : 'border-slate-400 dark:border-zinc-500 group-hover:border-indigo-400 dark:group-hover:border-indigo-400'
              }`}
            >
              {answer === c.id && <div className="w-2.5 h-2.5 rounded-full bg-white shadow-sm" />}
            </div>

            <input
              type="radio"
              name={`question-${q.id}`}
              className="hidden"
              checked={answer === c.id}
              onChange={() => onAnswer(q.id, c.id)}
            />

            <span className={`text-base sm:text-lg select-none ${answer === c.id ? 'text-indigo-900 dark:text-indigo-200 font-semibold' : 'text-slate-700 dark:text-zinc-200 font-medium'}`}>
              {c.text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
});
QuestionCard.displayName = 'QuestionCard';

// --- MAIN PAGE COMPONENT ---
export default function QuizPage() {
  const params = useParams();
  const testId = (params?.testId as string) || (params?.id as string);

  const isGlobal = testId?.includes('ielts') || false;
  const labels = getLabels(isGlobal);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  // ✅ NEW: Exam / Practice mode
  const [mode, setMode] = useState<Mode>('exam'); // default: exam
  const modeKey = `quiz_mode_${testId || 'default'}`;

  // --- AUDIO SPEED CONTROL ---
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleSpeed = () => {
    const speeds = [1, 1.25, 1.5, 0.75];
    const currentIndex = speeds.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % speeds.length;
    const newSpeed = speeds[nextIndex];

    setPlaybackRate(newSpeed);
    if (audioRef.current) audioRef.current.playbackRate = newSpeed;
  };

  // ✅ Load saved mode
  useEffect(() => {
    if (!testId) return;
    try {
      const saved = localStorage.getItem(modeKey) as Mode | null;
      if (saved === 'exam' || saved === 'practice') setMode(saved);
    } catch {}
  }, [testId]); // eslint-disable-line react-hooks/exhaustive-deps

  const setModeSafe = (m: Mode) => {
    setMode(m);
    try {
      localStorage.setItem(modeKey, m);
    } catch {}
  };

  // 1) LOAD DATA
  useEffect(() => {
    if (!testId) return;

    setLoading(true);
    setAudioSrc(null);
    setPlaybackRate(1);
    setAnswers({});
    setShowResult(false);
    setScore(0);

    const jsonUrl = `/data/tests/${testId}.json`;

    fetch(`${jsonUrl}?t=${Date.now()}`)
      .then(res => {
        if (!res.ok) throw new Error(isGlobal ? "Test file not found." : "Test dosyası bulunamadı.");
        return res.json();
      })
      .then(rawdata => {
        let normalizedQuestions: Question[] = [];

        // --- SENARYO A: READING & LISTENING ---
        if ((testId.includes('reading') || testId.includes('listening')) && Array.isArray(rawdata) && rawdata[0]?.passageId) {
          if (rawdata[0].audio) setAudioSrc(rawdata[0].audio);

          rawdata.forEach((passage: any) => {
            if (Array.isArray(passage.questions)) {
              passage.questions.forEach((q: any, idx: number) => {
                let combinedPrompt = q.prompt;

                if (testId.includes('reading')) {
                  combinedPrompt = `
                    <div class="mb-8 p-6 bg-white/90 dark:bg-zinc-900/70 border-l-4 border-sky-500 shadow-sm rounded-r-xl text-slate-700 dark:text-zinc-200 text-base leading-relaxed font-serif custom-reading-content">
                      <h3 class="font-bold text-sky-900 text-xl mb-4 border-b border-sky-100 pb-2">${passage.title}</h3>
                      ${passage.text}
                    </div>
                    <div class="font-bold text-slate-900 dark:text-zinc-100 text-lg mt-6 pt-4 border-t border-slate-100 dark:border-zinc-700">${q.prompt}</div>
                  `;
                }

                const choices = ['A', 'B', 'C', 'D']
                  .map((L, i) => (!q[L] ? null : { id: ['A', 'B', 'C', 'D'][i], text: q[L] }))
                  .filter(Boolean) as Choice[];

                normalizedQuestions.push({
                  id: q.id || `q-${passage.passageId}-${idx}`,
                  prompt: combinedPrompt,
                  choices,
                  answer: q.correct,
                  explanation: findExplanation(q),
                });
              });
            }
          });
        } else {
          // --- SENARYO B: STANDART TESTLER ---
          let rawList: any[] = [];
          if (Array.isArray(rawdata)) rawList = rawdata;
          else if (rawdata?.questions) rawList = rawdata.questions;

          normalizedQuestions = rawList.map((item, idx) => {
            const anyItem = item as any;
            let rawOptions: string[] = [];

            if (Array.isArray(anyItem.options)) rawOptions = anyItem.options;
            else if (anyItem.A || anyItem.B) {
              if (anyItem.A) rawOptions.push(anyItem.A);
              if (anyItem.B) rawOptions.push(anyItem.B);
              if (anyItem.C) rawOptions.push(anyItem.C);
              if (anyItem.D) rawOptions.push(anyItem.D);
              if (anyItem.E) rawOptions.push(anyItem.E);
            }

            const choices: Choice[] = rawOptions.map((optText, optIdx) => ({
              id: String.fromCharCode(65 + optIdx),
              text: String(optText),
            }));

            let finalAnswerId = (anyItem.answer || anyItem.correct || "").toString().trim();
            if (finalAnswerId.length === 1) finalAnswerId = finalAnswerId.toUpperCase();
            else {
              const found = choices.find(c => c.text === finalAnswerId);
              if (found) finalAnswerId = found.id;
            }

            return {
              id: anyItem.id || String(idx),
              prompt: anyItem.prompt || anyItem.question || anyItem.soru || "...",
              choices,
              answer: finalAnswerId,
              explanation: findExplanation(anyItem),
            };
          });
        }

        if (normalizedQuestions.length === 0) {
          setError(isGlobal ? "No questions found." : "Soru bulunamadı.");
          setLoading(false);
          return;
        }

        setQuestions(normalizedQuestions);

        // ✅ MODE TIME LOGIC
        if (mode === 'practice') {
          setTimeLeft(null); // süresiz
        } else {
          // exam: süreli
          if (testId.includes('reading')) setTimeLeft(1200);
          else if (testId.includes('listening')) setTimeLeft(1800);
          else {
            const calc = normalizedQuestions.length * 60;
            setTimeLeft(calc < 600 ? 600 : calc);
          }
        }

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Error loading test.");
        setLoading(false);
      });
  }, [testId, isGlobal, mode]);

  // 2) TIMER (Exam mode only)
  useEffect(() => {
    if (mode !== 'exam') return;              // ✅ only exam
    if (timeLeft === null || showResult || loading) return;
    if (timeLeft <= 0) { handleSubmit(); return; }

    const timerId = setInterval(() => {
      setTimeLeft((p) => (p !== null && p > 0 ? p - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, showResult, loading, mode]);

  const handleAnswerChange = useCallback((qId: string, val: string) => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
  }, []);

  const handleSubmit = () => {
    let correctCount = 0;
    let mistakeList: any[] = [];

    try {
      const stored = localStorage.getItem('my_mistakes');
      if (stored) mistakeList = JSON.parse(stored);
    } catch {
      mistakeList = [];
    }

    questions.forEach((q) => {
      const userVal = answers[q.id];
      const isCorrect = (userVal === q.answer);

      if (isCorrect) {
        correctCount++;
        mistakeList = mistakeList.filter(m => m.uniqueId !== `${testId}-${q.id}`);
      } else if (userVal) {
        const uniqueId = `${testId}-${q.id}`;
        if (!mistakeList.some(m => m.uniqueId === uniqueId)) {
          mistakeList.push({
            uniqueId,
            testTitle: testId,
            prompt: q.prompt,
            choices: q.choices,
            answer: q.answer,
            myWrongAnswer: userVal,
            explanation: q.explanation,
            savedAt: new Date().toISOString(),
          });
        }
      }
    });

    localStorage.setItem('my_mistakes', JSON.stringify(mistakeList));
    setScore(correctCount);
    setShowResult(true);
    window.scrollTo(0, 0);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-slate-500 font-bold animate-pulse">{labels.loading}</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500 font-bold">{error}</div>;

  // --- RESULT SCREEN ---
  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);

    let estimatedLevel = "A1 (Beginner)";
    let estimatedBand = "Band 2.0 - 3.0";
    let badgeColor = "bg-slate-100 text-slate-600 border-slate-200";

    if (score >= 10) { estimatedLevel = "A2 (Elementary)"; estimatedBand = "Band 3.5 - 4.0"; badgeColor = "bg-sky-100 text-sky-700 border-sky-200"; }
    if (score >= 20) { estimatedLevel = "B1 (Intermediate)"; estimatedBand = "Band 4.5 - 5.0"; badgeColor = "bg-cyan-100 text-cyan-700 border-cyan-200"; }
    if (score >= 30) { estimatedLevel = "B2 (Upper Intermediate)"; estimatedBand = "Band 5.5 - 6.5"; badgeColor = "bg-indigo-100 text-indigo-700 border-indigo-200"; }
    if (score >= 40) { estimatedLevel = "C1 (Advanced)"; estimatedBand = "Band 7.0 - 8.0"; badgeColor = "bg-violet-100 text-violet-700 border-violet-200"; }
    if (score >= 48) { estimatedLevel = "C2 (Proficiency)"; estimatedBand = "Band 8.5 - 9.0"; badgeColor = "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200"; }

    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 text-center relative overflow-hidden">
            <h1 className="text-3xl font-black text-slate-800 mb-6">{labels.resultTitle}</h1>

            <div className="text-6xl font-black text-indigo-600 mb-2">%{percentage}</div>

            <div className={`inline-flex flex-col md:flex-row items-center gap-2 px-6 py-3 rounded-xl border-2 mb-6 ${badgeColor}`}>
              <span className="font-black text-lg">{estimatedLevel}</span>
              <span className="hidden md:block opacity-40">•</span>
              <span className="font-bold text-lg">{estimatedBand}</span>
            </div>

            <div className="text-slate-500 font-bold text-lg">{score} / {questions.length} {labels.correct}</div>

            <div className="flex justify-center gap-4 mt-8">
              <Link href="/" className="px-6 py-3 bg-slate-100 hover:bg-slate-200 transition text-slate-700 rounded-xl font-bold">{labels.homeButton}</Link>
              <Link href="/mistakes" className="px-6 py-3 bg-rose-100 hover:bg-rose-200 transition text-rose-600 rounded-xl font-bold">{labels.seeMistakes}</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-700 ml-2 border-l-4 border-indigo-500 pl-3">{labels.analysis}</h2>

            {questions.map((q, idx) => {
              const userAnswerId = answers[q.id];
              const isCorrect = userAnswerId === q.answer;
              const isUserAnswered = !!userAnswerId;

              const cardBorder = isCorrect ? 'border-emerald-200' : isUserAnswered ? 'border-red-200' : 'border-amber-200';
              const cardBg = isCorrect ? 'bg-emerald-50/40' : isUserAnswered ? 'bg-red-50/40' : 'bg-amber-50/40';

              return (
                <div key={q.id} className={`p-6 rounded-2xl border-2 ${cardBorder} ${cardBg} transition-all`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-sm ${isCorrect ? 'bg-emerald-500' : isUserAnswered ? 'bg-red-500' : 'bg-amber-400'}`}>
                      {isCorrect ? '✓' : isUserAnswered ? '✕' : '-'}
                    </div>

                    <div className="flex-grow">
                      <div className="text-lg font-medium text-slate-800 mb-5 leading-relaxed">{formatText(q.prompt)}</div>

                      <div className="grid gap-2">
                        {q.choices.map((c) => {
                          const isSelected = userAnswerId === c.id;
                          const isTheCorrectAnswer = c.id === q.answer;

                          let style = 'p-3 rounded-xl border flex items-center justify-between transition-all ';
                          if (isTheCorrectAnswer) style += 'bg-emerald-100 border-emerald-300 text-emerald-900 font-bold shadow-sm';
                          else if (isSelected) style += 'bg-rose-100 border-rose-300 text-rose-900 font-medium';
                          else style += 'bg-white/60 border-slate-200 text-slate-500 opacity-60';

                          return (
                            <div key={c.id} className={style}>
                              <div className="flex items-center gap-3">
                                <span className="font-bold opacity-50 text-sm">{c.id})</span>
                                <span>{c.text}</span>
                              </div>

                              {isTheCorrectAnswer && (
                                <span className="text-[10px] bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                                  {labels.correctBadge}
                                </span>
                              )}
                              {isSelected && !isTheCorrectAnswer && (
                                <span className="text-[10px] bg-rose-200 text-rose-800 px-2 py-0.5 rounded-full font-bold">
                                  {labels.yourChoice}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {!isCorrect && q.explanation && (
                        <div className="mt-5 p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-sm text-indigo-900 flex gap-3 items-start animate-in fade-in">
                          <span className="text-xl">💡</span>
                          <div>
                            <span className="font-bold block mb-1 text-indigo-700">{labels.explanation}</span>
                            <span className="leading-relaxed opacity-90">{formatText(q.explanation)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    );
  }

  // --- QUIZ SCREEN ---
  return (
    <div className="min-h-screen pb-20">

      {/* STICKY HEADER */}
      <div className="sticky top-0 z-30 bg-white/85 dark:bg-zinc-950/80 backdrop-blur-md shadow-md border-b border-zinc-200 dark:border-zinc-800 transition-all">
        <div className="max-w-3xl mx-auto px-4 py-3">

          {/* ✅ MODE TOGGLE */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <Link href="/" className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition">
              <ArrowLeft className="w-6 h-6" />
            </Link>

            <div className="flex items-center gap-2 bg-zinc-100/90 dark:bg-zinc-900/70 p-1 rounded-2xl border border-zinc-200 dark:border-zinc-700">
              <button
                onClick={() => setModeSafe('exam')}
                className={`px-4 py-2 rounded-xl text-sm font-black transition ${
                  mode === 'exam'
                    ? 'premium-button shadow'
                    : 'text-slate-700 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-800'
                }`}
                title={labels.modeHint}
              >
                {labels.modeExam}
              </button>

              <button
                onClick={() => setModeSafe('practice')}
                className={`px-4 py-2 rounded-xl text-sm font-black transition ${
                  mode === 'practice'
                    ? 'premium-button shadow'
                    : 'text-slate-700 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-800'
                }`}
                title={labels.modeHintPractice}
              >
                {labels.modePractice}
              </button>
            </div>

            <button
              onClick={handleSubmit}
              className="premium-button text-sm font-bold px-6 py-2.5"
            >
              {labels.finish}
            </button>
          </div>

          {/* ✅ TIMER (Exam only) */}
          {mode === 'exam' && (
            <div className="flex items-center justify-center mb-3">
              <div
                className={`flex items-center gap-2 text-lg font-mono font-bold px-4 py-1.5 rounded-xl border-2 ${
                  (timeLeft ?? 999999) < 60
                    ? 'text-rose-600 bg-rose-50 border-rose-100 animate-pulse'
                    : 'text-indigo-600 bg-indigo-50 border-indigo-100'
                }`}
              >
                <Clock className="w-5 h-5" />
                {formatTime(timeLeft || 0)}
              </div>
            </div>
          )}

          {/* AUDIO */}
          {audioSrc && (
            <div className="bg-sky-50 border border-sky-100 rounded-xl p-3 flex items-center gap-3 animate-in slide-in-from-top-2">
              <div className="bg-sky-200 text-sky-700 p-2 rounded-full flex-shrink-0">
                <Headphones className="w-5 h-5" />
              </div>

              <button
                onClick={toggleSpeed}
                className="premium-input border-sky-200 dark:border-sky-700 text-sky-700 dark:text-sky-300 px-2 py-1 text-xs font-bold w-12 text-center"
                title="Hız Değiştir"
              >
                {playbackRate}x
              </button>

              <audio
                ref={audioRef}
                key={audioSrc}
                controls
                src={audioSrc}
                className="w-full h-8 outline-none"
                controlsList="nodownload"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          )}

          {/* ✅ Small Mode info */}
          <div className="text-center text-xs font-bold text-slate-600 dark:text-zinc-300 mt-2">
            {mode === 'exam' ? labels.modeHint : labels.modeHintPractice}
          </div>

        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 space-y-8 mt-8">
        {questions.map((q, idx) => (
          <QuestionCard
            key={q.id}
            q={q}
            idx={idx}
            answer={answers[q.id] || ''}
            onAnswer={handleAnswerChange}
            labels={labels}
          />
        ))}

        <div className="pt-8 pb-12 flex justify-center">
          <button
            onClick={handleSubmit}
            className="w-full max-w-md py-4 rounded-2xl text-white text-xl font-bold shadow-xl bg-indigo-600 hover:bg-indigo-700"
          >
            {labels.completeTest}
          </button>
        </div>
      </div>
    </div>
  );
}