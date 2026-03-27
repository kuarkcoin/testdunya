'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import type { Question5 } from '@/app/data/grade5/types';
import { generateGrade5ImageAlt } from '@/lib/grade5Seo';

interface Grade5QuizClientProps {
  title: string;
  questions: Question5[];
}

export default function Grade5QuizClient({ title, questions }: Grade5QuizClientProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((sum, question) => (answers[question.id] === question.correct ? sum + 1 : sum), 0);
  }, [answers, questions]);

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 md:p-6">
      <h2 className="text-2xl font-bold">{title} - Online Çözüm Alanı</h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300">
        Soruları çözerek sonucu anında görebilirsiniz. Cevapları işaretledikten sonra “Testi Bitir” butonuna basın.
      </p>

      <div className="mt-6 space-y-6">
        {questions.map((question, questionIndex) => {
          const selected = answers[question.id];
          const isCorrect = selected === question.correct;
          const shouldReveal = submitted;

          return (
            <article key={question.id} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
              <h3 className="font-semibold text-lg">
                {questionIndex + 1}. {question.prompt}
              </h3>

              {question.imageUrl ? (
                <figure className="mt-4 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={question.imageUrl}
                    alt={generateGrade5ImageAlt(question)}
                    width={1200}
                    height={800}
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </figure>
              ) : null}

              <fieldset className="mt-4 space-y-2">
                <legend className="sr-only">Cevap seçenekleri</legend>
                {question.options.map((option, optionIndex) => {
                  const optionSelected = selected === optionIndex;
                  const optionCorrect = question.correct === optionIndex;

                  return (
                    <label
                      key={`${question.id}-${optionIndex}`}
                      className={`flex items-start gap-2 rounded-lg border p-3 cursor-pointer ${
                        optionSelected ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30' : 'border-zinc-200 dark:border-zinc-800'
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        checked={optionSelected}
                        onChange={() => setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }))}
                        className="mt-1"
                      />
                      <span>
                        {option}
                        {shouldReveal && optionCorrect ? ' ✅' : null}
                      </span>
                    </label>
                  );
                })}
              </fieldset>

              {shouldReveal ? (
                <p className={`mt-3 text-sm ${isCorrect ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {isCorrect ? 'Doğru cevap verdiniz.' : `Doğru cevap: ${question.options[question.correct]}`}
                </p>
              ) : null}

              {shouldReveal ? (
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Açıklama: {question.explanation}</p>
              ) : null}
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="rounded-lg bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-500"
        >
          Testi Bitir
        </button>

        {submitted ? (
          <p className="font-semibold">
            Sonuç: {score} / {questions.length}
          </p>
        ) : null}
      </div>
    </section>
  );
}
