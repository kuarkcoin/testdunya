'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { categories, practiceQuestions, questions, type VisualQuestion } from '../data/questions';
import VisualFigure from './VisualFigure';
import {
  STORAGE_KEY, answerAttempt, createAttempt, finishAttempt, navigateAttempt,
  remainingSeconds, restoreAttempt, summarizeAttempt, tickAttempt, type Attempt,
} from './attempt';

const buttonBase = 'inline-flex min-h-12 items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-40';
const button = `${buttonBase} border-slate-600 hover:bg-slate-800`;
const primary = `${buttonBase} border-cyan-300 bg-cyan-300 text-slate-950 hover:bg-cyan-200`;
const letters = ['A', 'B', 'C', 'D'];

function formatTime(seconds: number) {
  return `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
}

function Disclaimer() {
  return <p className="text-sm leading-6 text-slate-300">Bu, standardize edilmemiş bir görsel akıl yürütme alıştırmasıdır. IQ, yüzdelik dilim veya tanı vermez; genel zekâyı ölçtüğü iddia edilmez. Klinik değerlendirme, işe alım veya personel seçimi için kullanılamaz.</p>;
}

function QuestionFigure({ question, large = false }: { question: VisualQuestion; large?: boolean }) {
  return <div className="overflow-x-auto rounded-2xl border border-slate-600 bg-slate-900 p-2 sm:p-5" tabIndex={large ? 0 : undefined} aria-label={large ? 'Büyütülmüş görsel; gerekirse yatay kaydırın' : undefined}>
    <div className={large ? 'mx-auto w-[760px] text-slate-100' : 'mx-auto w-full max-w-xl text-slate-100'}>
      <VisualFigure figure={question.figure} />
    </div>
  </div>;
}

function Options({ question, order, selected, onSelect, name, disabled = false }: {
  question: VisualQuestion; order: number[]; selected: number | null;
  onSelect: (originalIndex: number) => void; name: string; disabled?: boolean;
}) {
  return <fieldset disabled={disabled} className="mt-5">
    <legend className="mb-3 text-sm font-semibold text-slate-300">Bir seçenek işaretleyin. Tab ile seçeneklere, ok tuşlarıyla diğer seçeneğe geçebilirsiniz.</legend>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {order.map((originalIndex, displayIndex) => <label key={originalIndex} className="relative cursor-pointer">
        <input type="radio" name={name} value={originalIndex} checked={selected === originalIndex}
          onChange={() => onSelect(originalIndex)} className="peer sr-only" aria-label={`${letters[displayIndex]} seçeneği: ${question.options[originalIndex].label}`} />
        <span className="flex h-full flex-col rounded-xl border-2 border-slate-600 bg-slate-900 p-2 text-slate-100 transition peer-checked:border-cyan-300 peer-checked:bg-cyan-950 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-cyan-300 hover:border-slate-300">
          <span className="flex items-center justify-between px-1 text-sm font-bold"><span>{letters[displayIndex]}</span><span aria-hidden="true">{selected === originalIndex ? '✓' : '○'}</span></span>
          <span className="block aspect-square w-full" aria-hidden="true"><VisualFigure figure={question.options[originalIndex].figure} /></span>
        </span>
      </label>)}
    </div>
  </fieldset>;
}

function Practice() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(practiceQuestions.map(() => null));
  const q = practiceQuestions[index];
  const selected = answers[index];
  return <section aria-labelledby="practice-title" className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/50 p-4 sm:p-6">
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
      <h2 id="practice-title" className="text-xl font-bold">Örnek {index + 1} / {practiceQuestions.length} <span className="text-sm font-normal text-cyan-200">• Puansız, süresiz</span></h2>
      <div className="flex gap-2">{practiceQuestions.map((p, i) => <button type="button" key={p.id} onClick={() => setIndex(i)} aria-pressed={i === index} className={`${buttonBase} hover:bg-slate-800 ${i === index ? 'border-cyan-300' : 'border-slate-600'}`}>Örnek {i + 1}</button>)}</div>
    </div>
    <p className="mb-4 text-lg">{q.prompt}</p>
    <QuestionFigure question={q} />
    <Options question={q} order={[0, 1, 2, 3]} selected={selected} name={q.id} onSelect={choice => setAnswers(prev => prev.map((answer, i) => i === index ? choice : answer))} />
    <div aria-live="polite" className="mt-4 text-sm leading-6 text-slate-200">
      {selected === null ? 'Bir seçenek seçtiğinizde örneğin açıklaması burada görünecek.' : <><strong>{selected === q.correct ? 'Doğru.' : `Bu örnekte doğru seçenek ${letters[q.correct]}.`}</strong> {q.explanation}</>}
    </div>
  </section>;
}

function Results({ attempt, onRestart }: { attempt: Attempt; onRestart: () => void }) {
  const score = summarizeAttempt(questions, attempt);
  return <>
    <section className="rounded-3xl border border-slate-700 bg-slate-900/70 p-5 sm:p-8" aria-labelledby="result-title">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-200">Bu denemenin özeti</p>
      <h2 id="result-title" className="text-xl font-bold">Test puanın</h2>
      <p className="mt-3 text-5xl font-bold tracking-tight text-cyan-200">{score.testScore}<span className="ml-2 text-2xl text-slate-400">/ 100</span></p>
      <p className="mt-3 text-lg font-semibold">{score.correct} / {score.total} doğru</p>
      <p className="mt-3 text-sm leading-6 text-slate-200">Bu puan IQ değildir; yalnız bu testteki doğru yanıt oranını gösterir.</p>
      <p className="mt-3 leading-7 text-slate-300">{attempt.endReason === 'expired' ? '30 dakikalık süre doldu; yanıtlarınız otomatik olarak sonlandırıldı.' : attempt.endReason === 'clock-changed' ? 'Cihaz saatinde geriye doğru değişiklik algılandı; süreyi uzatmamak için deneme sonlandırıldı.' : 'Denemeyi bitirdiniz.'}</p>
      <dl className="my-6 grid grid-cols-3 gap-2 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-center">
        <div><dt className="text-sm text-slate-400">Yanlış</dt><dd className="mt-1 text-2xl font-bold">{score.wrong}</dd></div>
        <div><dt className="text-sm text-slate-400">Boş</dt><dd className="mt-1 text-2xl font-bold">{score.unanswered}</dd></div>
        <div><dt className="text-sm text-slate-400">Geçen süre</dt><dd className="mt-1 text-2xl font-bold tabular-nums">{formatTime(score.elapsedSeconds)}</dd></div>
      </dl>
      <p className="mb-4 text-sm leading-6 text-slate-300">Puan = doğru sayısı / {score.total} × 100, en yakın tam sayıya yuvarlanır. Boş sorular da toplam {score.total} soruya dahildir; yanlışlar doğruları götürmez. Hız bonusu veya ağırlıklı puan yoktur. Bu sonuç yalnızca bu sorulardaki performansınızı gösterir; başka insanlarla kıyaslama değildir.</p>
      <h3 className="mb-3 text-lg font-bold">Soru türlerine göre sonuçlar</h3>
      <div className="overflow-x-auto"><table className="w-full text-left text-sm">
        <caption className="sr-only">Her soru türünde toplam, doğru, yanlış ve boş yanıt sayısı</caption>
        <thead><tr className="border-b border-slate-600 text-slate-400"><th scope="col" className="py-3">Tür</th><th scope="col" className="px-2">Doğru / toplam</th><th scope="col" className="px-2">Yanlış</th><th scope="col" className="pl-2">Boş</th></tr></thead>
        <tbody>{Object.entries(score.byCategory).map(([category, counts]) => <tr key={category} className="border-b border-slate-800"><th scope="row" className="py-4 pr-3 font-medium">{categories[category as keyof typeof categories]}</th><td className="px-2">{counts.correct} / {counts.total}</td><td className="px-2">{counts.wrong}</td><td className="pl-2">{counts.unanswered}</td></tr>)}</tbody>
      </table></div>
      <div className="mt-6 rounded-xl border border-amber-300/30 bg-amber-950/20 p-4"><Disclaimer /></div>
      <p className="mt-4 text-sm leading-6 text-slate-400">Aynı soruları yeniden çözmek, yanıtları hatırladığınız için sonucu etkileyebilir. Daha yüksek sonuç, zekânızın arttığını kanıtlamaz.</p>
      <button type="button" onClick={onRestart} className={`${button} mt-6`}>Kaydı sil ve başlangıca dön</button>
    </section>
    <section aria-labelledby="review-title" className="mt-8">
      <h2 id="review-title" className="mb-4 text-2xl font-bold">Yanıtlar ve açıklamalar</h2>
      <p className="mb-5 text-sm text-slate-400">Bir soruyu açarak şekli, seçiminizi ve doğru yanıtın gerekçesini inceleyin.</p>
      <div className="space-y-3">{questions.map((q, index) => {
        const answer = attempt.answers[index];
        const order = attempt.optionOrders[index];
        return <details key={q.id} className="rounded-2xl border border-slate-700 bg-slate-900/50 p-4">
          <summary className="cursor-pointer rounded py-2 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Soru {index + 1} · {categories[q.category]} · {answer === null ? 'Boş' : answer === q.correct ? 'Doğru' : 'Yanlış'}</summary>
          <p className="my-4">{q.prompt}</p><QuestionFigure question={q} />
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">{order.map((originalIndex, displayIndex) => <div key={originalIndex} className={`rounded-xl border p-2 ${originalIndex === q.correct ? 'border-cyan-300 bg-cyan-950/50' : 'border-slate-700'}`}>
            <p className="text-sm font-bold">{letters[displayIndex]}{originalIndex === q.correct ? ' · Doğru' : ''}{originalIndex === answer ? ' · Seçiminiz' : ''}</p>
            <VisualFigure figure={q.options[originalIndex].figure} label={q.options[originalIndex].label} />
          </div>)}</div>
          <p className="mt-4 text-sm leading-7 text-slate-200"><strong>Açıklama:</strong> {q.explanation}</p>
        </details>;
      })}</div>
    </section>
  </>;
}

export default function VisualReasoningPage() {
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const current = useRef<Attempt | null>(null);
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState('');
  const [storageWarning, setStorageWarning] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [finishConfirm, setFinishConfirm] = useState(false);
  const [large, setLarge] = useState(false);
  const [now, setNow] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  const initialFocus = useRef(true);

  const save = useCallback((next: Attempt | null, persist = true) => {
    current.current = next;
    setAttempt(next);
    // Keep display time in sync with event-time mutations, not the previous interval tick.
    setNow(Date.now());
    if (persist) {
      try {
        if (next) localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        else localStorage.removeItem(STORAGE_KEY);
        setStorageWarning(false);
      } catch { setStorageWarning(true); return false; }
    }
    return true;
  }, []);

  useEffect(() => {
    const time = Date.now();
    setNow(time);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const restored = restoreAttempt(raw, questions, time);
      if (restored.issue) setNotice(restored.issue);
      save(restored.attempt, raw !== null);
    } catch { setStorageWarning(true); }
    setReady(true);
  }, [save]);

  useEffect(() => {
    if (!ready) return;
    const checkTime = () => {
      const time = Date.now();
      setNow(time);
      if (current.current && current.current.endedAt === null) save(tickAttempt(current.current, time));
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY && event.key !== null) return;
      // Events can be queued behind a newer local write; never replay their stale payload.
      let raw: string | null;
      try { raw = localStorage.getItem(STORAGE_KEY); }
      catch { setStorageWarning(true); return; }
      const restored = restoreAttempt(raw, questions, Date.now());
      const previous = current.current;
      const next = restored.attempt;
      const meaningfulChange = previous?.startedAt !== next?.startedAt || previous?.endedAt !== next?.endedAt ||
        previous?.currentIndex !== next?.currentIndex || JSON.stringify(previous?.answers) !== JSON.stringify(next?.answers);
      if (restored.issue || meaningfulChange) {
        setNotice(restored.issue || 'Bu denemenin kaydı başka bir sekmede değişti. Güncel kayıt yüklendi; lütfen tek sekmede devam edin.');
        setFinishConfirm(false);
      }
      save(restored.attempt, false);
    };
    const interval = window.setInterval(checkTime, 1000);
    window.addEventListener('focus', checkTime);
    window.addEventListener('pageshow', checkTime);
    window.addEventListener('pagehide', checkTime);
    document.addEventListener('visibilitychange', checkTime);
    window.addEventListener('storage', onStorage);
    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', checkTime);
      window.removeEventListener('pageshow', checkTime);
      window.removeEventListener('pagehide', checkTime);
      document.removeEventListener('visibilitychange', checkTime);
      window.removeEventListener('storage', onStorage);
    };
  }, [ready, save]);

  const phase = attempt ? (attempt.endedAt === null ? 'active' : 'result') : 'intro';
  const index = attempt?.currentIndex ?? 0;
  useEffect(() => {
    if (initialFocus.current) { initialFocus.current = false; return; }
    heading.current?.focus();
    setLarge(false);
    setFinishConfirm(false);
  }, [phase, index]);

  const start = () => {
    if (!ready || !confirmed || current.current) return;
    const time = Date.now();
    setNow(time);
    setNotice('');
    save(createAttempt(questions, time));
  };
  const reset = () => {
    const removed = save(null);
    setNotice(removed ? 'Deneme kaydı bu tarayıcıdan silindi.' : 'Başlangıca dönüldü ancak tarayıcıdaki kayıt silinemedi. Yenilemede eski kayıt geri gelebilir.');
    setConfirmed(false);
    setFinishConfirm(false);
  };
  const navigate = (destination: number) => {
    if (current.current) save(navigateAttempt(current.current, destination, Date.now()));
  };
  const select = (option: number | null) => {
    if (current.current) save(answerAttempt(current.current, current.current.currentIndex, option, Date.now()));
  };
  const finish = () => {
    if (current.current) save(finishAttempt(current.current, Date.now()));
    setFinishConfirm(false);
  };
  const remaining = attempt ? remainingSeconds(attempt, now) : 1800;
  const answered = attempt?.answers.filter(answer => answer !== null).length ?? 0;
  const q = questions[index];
  const timeAnnouncement = phase !== 'active' ? '' : remaining <= 60 ? 'Son 1 dakika.' : remaining <= 300 ? 'Son 5 dakika.' : '';

  return <main lang="tr" className="min-h-screen bg-slate-950 px-4 pb-16 pt-8 text-slate-100 sm:px-6">
    <div className="mx-auto max-w-4xl">
      <header className="mb-8">
        <Link href="/" className="inline-flex min-h-11 items-center text-sm text-slate-300 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-cyan-300">← TestDünya ana sayfa</Link>
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">18+ yetişkinler için • 30 özgün görsel soru</p>
        <h1 ref={heading} tabIndex={-1} className="mt-3 text-3xl font-bold tracking-tight outline-none sm:text-4xl">Görsel Mantık ve Akıl Yürütme Testi{phase === 'active' ? ` · Soru ${index + 1}` : phase === 'result' ? ' · Sonuç' : ''}</h1>
        {phase === 'intro' && <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Şekiller arasındaki kuralı keşfedin. Matris, örüntü, döndürme ve uzamsal ilişki sorularıyla pratik yapın.</p>}
      </header>
      {notice && <p role="status" className="mb-5 rounded-xl border border-cyan-400/30 bg-cyan-950/30 p-4 text-sm leading-6">{notice}</p>}
      {storageWarning && <p role="alert" className="mb-5 rounded-xl border border-amber-400/40 bg-amber-950/30 p-4 text-sm leading-6">Tarayıcı kaydı kullanılamıyor. Bu sekmede devam edebilirsiniz; sayfayı yenilerseniz veya kapatırsanız yanıtlarınız kaybolabilir. Süre durmaz.</p>}
      {phase === 'intro' && <>
        <section className="rounded-3xl border border-slate-700 bg-slate-900/60 p-5 sm:p-8" aria-labelledby="instructions-title">
          <h2 id="instructions-title" className="text-xl font-bold">Başlamadan önce</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-200">
            <li>Her soruda 4 seçenekten yalnızca biri, gösterilen kurala uyar. Sorular yaklaşık olarak daha basit ilişkilerden daha çok adımlı ilişkilere ilerler; güçlükleri ölçülüp kalibre edilmemiştir.</li>
            <li><strong>30 dakika, “Denemeyi başlat” düğmesine bastığınızda başlar.</strong> Bu süre bir tasarım tercihidir; doğrulanmış bir test standardı değildir. Sekmeyi değiştirmek, sayfayı yenilemek veya kapatmak süreyi durdurmaz.</li>
            <li>Soruları boş bırakabilir, geri dönebilir ve süre bitene kadar yanıtınızı değiştirebilirsiniz. Erken bitirebilirsiniz; hız bonusu yoktur.</li>
            <li>Sonuçta 100 üzerinden test puanı, doğru–yanlış–boş sayıları ve soru türlerine göre sonuçlar gösterilir. Puan, tüm 30 soru içindeki doğru yanıt oranının en yakın tam sayıya yuvarlanmasıdır; IQ veya toplumdaki sıralamanız değildir.</li>
            <li>Yanıtlar ve seçenek sırası bu tarayıcıda saklanır. Aynı cihazda yenilediğinizde süre kaldığı yerden değil, gerçek geçen zamana göre devam eder. Tek sekmede kullanın ve cihaz saatini değiştirmeyin.</li>
            <li>Sakin bir ortam ve rahat görebildiğiniz bir ekran seçin. Şekilleri büyütebilirsiniz; renkleri ayırt etmek gerekmez. Görsel betimlemeler yardımcıdır, erişilebilirlik uyarlamalarının eşdeğerliği doğrulanmamıştır.</li>
          </ul>
          <div className="mt-6 rounded-xl border border-amber-300/30 bg-amber-950/20 p-4"><Disclaimer /></div>
          <button type="button" onClick={() => setPracticeOpen(open => !open)} aria-expanded={practiceOpen} aria-controls="practice-area" className={`${button} mt-6`}>{practiceOpen ? 'Örnekleri gizle' : 'Önce 2 puansız örneği dene'}</button>
          <div id="practice-area">{practiceOpen && <Practice />}</div>
          <label className="mt-7 flex cursor-pointer items-start gap-3 text-sm leading-6"><input type="checkbox" checked={confirmed} onChange={event => setConfirmed(event.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-cyan-300" /><span>18 yaş ve üzerindeyim. Bunun IQ ölçümü olmadığını ve süre koşullarını anladım.</span></label>
          <button type="button" onClick={start} disabled={!ready || !confirmed} className={`${primary} mt-5 w-full sm:w-auto`}>{ready ? 'Denemeyi başlat · 30 dakika' : 'Kayıt kontrol ediliyor…'}</button>
          <p className="mt-3 text-xs leading-6 text-slate-400">Doğum tarihi, ad veya hesap bilgisi istenmez. Asıl sorular yalnızca başlattıktan sonra gösterilir.</p>
        </section>
      </>}
      {phase === 'active' && attempt && <>
        <section aria-label="Deneme durumu" className="sticky top-0 z-10 mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-600 bg-slate-950/95 px-4 py-3 shadow-xl">
          <p className="text-sm"><strong>{index + 1} / {questions.length}</strong><span className="ml-3 text-slate-300">{answered} yanıtlandı</span></p>
          <p className={`text-lg font-bold tabular-nums ${remaining <= 60 ? 'text-amber-300' : 'text-cyan-200'}`} role="timer" aria-label={`Kalan süre ${Math.floor(remaining / 60)} dakika ${remaining % 60} saniye`}>{formatTime(remaining)}</p>
        </section>
        <p className="sr-only" role="status">{timeAnnouncement}</p>
        <section aria-labelledby="question-title" className="rounded-3xl border border-slate-700 bg-slate-900/40 p-4 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><p className="text-xs font-bold uppercase tracking-widest text-cyan-200">{categories[q.category]}</p><button type="button" className={button} onClick={() => setLarge(value => !value)} aria-pressed={large}>{large ? 'Normal boyut' : 'Görseli büyüt'}</button></div>
          <h2 id="question-title" className="mb-5 text-lg font-medium leading-8 sm:text-xl">{q.prompt}</h2>
          <QuestionFigure question={q} large={large} />
          <Options question={q} order={attempt.optionOrders[index]} selected={attempt.answers[index]} onSelect={select} name={q.id} />
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-slate-300" aria-live="polite">{attempt.answers[index] === null ? 'Henüz yanıt seçilmedi.' : 'Yanıt seçildi. İsterseniz değiştirebilirsiniz.'}</p><button type="button" onClick={() => select(null)} disabled={attempt.answers[index] === null} className={button}>Yanıtı temizle</button></div>
          <div className="mt-6 flex flex-wrap justify-between gap-3 border-t border-slate-700 pt-5"><button type="button" onClick={() => navigate(index - 1)} disabled={index === 0} className={button}>← Önceki</button>{index < questions.length - 1 ? <button type="button" onClick={() => navigate(index + 1)} className={primary}>Sonraki →</button> : <button type="button" onClick={() => setFinishConfirm(true)} className={primary}>Bitirmeyi gözden geçir</button>}</div>
        </section>
        <nav aria-label="Soru gezgini" className="mt-6 rounded-2xl border border-slate-700 p-4 sm:p-6">
          <h2 className="mb-2 font-bold">Sorular arasında geçiş</h2><p className="mb-4 text-sm text-slate-400">✓ işaretli sorular yanıtlandı. Boş sorulara geri dönebilirsiniz.</p>
          <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">{questions.map((question, destination) => <button type="button" key={question.id} onClick={() => navigate(destination)} aria-label={`Soru ${destination + 1}, ${attempt.answers[destination] === null ? 'boş' : 'yanıtlandı'}`} aria-current={destination === index ? 'step' : undefined} className={`min-h-12 rounded-lg border p-1 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 ${destination === index ? 'border-cyan-200 ring-2 ring-cyan-200' : 'border-slate-600'} ${attempt.answers[destination] === null ? 'bg-slate-950' : 'bg-cyan-950'}`}>{destination + 1}{attempt.answers[destination] !== null && <span aria-hidden="true"> ✓</span>}</button>)}</div>
        </nav>
        {!finishConfirm ? <button type="button" onClick={() => setFinishConfirm(true)} className={`${button} mt-6`}>Denemeyi bitir</button> : <section aria-label="Bitirme onayı" className="mt-6 rounded-2xl border border-amber-400/50 bg-amber-950/30 p-5"><h2 className="text-lg font-bold">Denemeyi bitirmek istiyor musunuz?</h2><p className="my-3 leading-7">{questions.length - answered} soru boş. Bitirdikten sonra yanıtlar değiştirilemez. Onay beklerken süre işlemeye devam eder.</p><div className="flex flex-wrap gap-3"><button type="button" onClick={() => setFinishConfirm(false)} className={button}>Çözmeye devam et</button><button type="button" onClick={finish} className={primary}>Evet, bitir ve sonucu göster</button></div></section>}
      </>}
      {phase === 'result' && attempt && <Results attempt={attempt} onRestart={reset} />}
      <footer className="mt-10 border-t border-slate-800 pt-6 text-xs leading-6 text-slate-400">Yetişkinler için görsel akıl yürütme pratiği. Bu sayfanın eski /iq-test adresi korunmuştur; sayfa bir IQ testi veya profesyonel değerlendirme sunmaz.</footer>
    </div>
  </main>;
}
