'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Mic, Square, RotateCcw } from 'lucide-react';

type RecordingPracticeProps = {
  resetKey: string;
  sampleText: string;
  cancelSpeech: () => void;
  onBusyChange: (busy: boolean) => void;
};

type RecordingPhase = 'idle' | 'requesting' | 'recording' | 'stopping' | 'ready';
const MAX_RECORDING_SECONDS = 30;

function microphoneError(error: unknown): string {
  const name = error instanceof DOMException ? error.name : '';
  if (name === 'NotAllowedError' || name === 'PermissionDeniedError') {
    return 'Mikrofon izni verilmedi. Kaydetmeden de sesli okuyabilir, bir yetişkinle çalışabilirsin.';
  }
  if (name === 'NotFoundError' || name === 'DevicesNotFoundError') {
    return 'Bu cihazda mikrofon bulunamadı. Kaydetmeden birlikte okuyabilirsin.';
  }
  if (name === 'NotReadableError' || name === 'TrackStartError') {
    return 'Mikrofon şu anda kullanılamıyor. Başka bir uygulama kullanıyorsa kapatıp yeniden deneyebilirsin.';
  }
  return 'Kaydı alamadık. İstersen yeniden dene; kaydetmeden de sesli okumaya devam edebilirsin.';
}

export default function RecordingPractice({
  resetKey,
  sampleText,
  cancelSpeech,
  onBusyChange,
}: RecordingPracticeProps) {
  const headingId = useId();
  const [supported, setSupported] = useState<boolean | null>(null);
  const [phase, setPhase] = useState<RecordingPhase>('idle');
  const [seconds, setSeconds] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState('');
  const mountedRef = useRef(false);
  const phaseRef = useRef<RecordingPhase>('idle');
  const generationRef = useRef(0);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);
  const timerRef = useRef<number | null>(null);
  const tickerRef = useRef<number | null>(null);
  const cancelSpeechRef = useRef(cancelSpeech);
  const onBusyChangeRef = useRef(onBusyChange);
  cancelSpeechRef.current = cancelSpeech;
  onBusyChangeRef.current = onBusyChange;

  const clearTimers = useCallback(() => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    if (tickerRef.current !== null) window.clearInterval(tickerRef.current);
    timerRef.current = null;
    tickerRef.current = null;
  }, []);

  const releaseStream = useCallback(() => {
    const stream = streamRef.current;
    streamRef.current = null;
    stream?.getTracks().forEach((track) => track.stop());
  }, []);

  const reset = useCallback(() => {
    // Invalidates a permission request too: late streams are stopped before use.
    generationRef.current += 1;
    phaseRef.current = 'idle';
    clearTimers();
    const recorder = recorderRef.current;
    recorderRef.current = null;
    if (recorder) {
      recorder.ondataavailable = null;
      recorder.onstop = null;
      recorder.onerror = null;
      if (recorder.state !== 'inactive') {
        try { recorder.stop(); } catch { /* Track cleanup still runs. */ }
      }
    }
    releaseStream();
    audioRef.current?.pause();
    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    audioUrlRef.current = null;
    onBusyChangeRef.current(false);
    if (mountedRef.current) {
      setPhase('idle');
      setSeconds(0);
      setAudioUrl(null);
      setPlaying(false);
      setError('');
    }
  }, [clearTimers, releaseStream]);

  useEffect(() => {
    mountedRef.current = true;
    setSupported(Boolean(window.isSecureContext && navigator.mediaDevices?.getUserMedia
      && typeof window.MediaRecorder !== 'undefined'));
    const onVisibilityChange = () => {
      if (document.hidden) reset();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      mountedRef.current = false;
      document.removeEventListener('visibilitychange', onVisibilityChange);
      reset();
    };
  }, [reset]);

  useEffect(() => {
    reset();
  }, [resetKey, reset]);

  const stopRecording = useCallback(() => {
    if (phaseRef.current !== 'recording') return;
    phaseRef.current = 'stopping';
    if (mountedRef.current) setPhase('stopping');
    clearTimers();
    const recorder = recorderRef.current;
    try {
      if (!recorder || recorder.state === 'inactive') throw new Error('Recording is inactive');
      recorder.stop();
      // The final data/stop events still deliver the recording after stop().
      releaseStream();
    } catch {
      reset();
      if (mountedRef.current) setError('Kayıt tamamlanamadı. Yeniden deneyebilir veya kaydetmeden okuyabilirsin.');
    }
  }, [clearTimers, releaseStream, reset]);

  const startRecording = useCallback(async () => {
    if (['requesting', 'recording', 'stopping'].includes(phaseRef.current)) return;
    if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia
      || typeof window.MediaRecorder === 'undefined') {
      setSupported(false);
      setError('Bu tarayıcıda mikrofon kaydı açılamıyor. Kaydetmeden birlikte okuyabilirsin.');
      return;
    }
    reset();
    cancelSpeechRef.current();
    const generation = generationRef.current;
    phaseRef.current = 'requesting';
    setPhase('requesting');
    onBusyChangeRef.current(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (!mountedRef.current || generation !== generationRef.current) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }
      streamRef.current = stream;
      const mimeType = ['audio/webm;codecs=opus', 'audio/ogg;codecs=opus', 'audio/mp4']
        .find((type) => typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported(type));
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      recorderRef.current = recorder;
      const chunks: Blob[] = [];

      recorder.ondataavailable = (event) => {
        if (generation === generationRef.current && event.data.size > 0) chunks.push(event.data);
      };
      recorder.onerror = () => {
        if (!mountedRef.current || generation !== generationRef.current) return;
        reset();
        setError('Kayıt durdu. İstersen yeniden deneyebilir veya bir yetişkinle okuyabilirsin.');
      };
      recorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop());
        if (!mountedRef.current || generation !== generationRef.current) return;
        clearTimers();
        if (streamRef.current === stream) streamRef.current = null;
        if (recorderRef.current === recorder) recorderRef.current = null;
        const blob = new Blob(chunks, { type: recorder.mimeType || chunks[0]?.type || 'audio/webm' });
        onBusyChangeRef.current(false);
        if (blob.size === 0) {
          phaseRef.current = 'idle';
          setPhase('idle');
          setError('Kaydına ses eklenemedi. Mikrofonu kontrol edip yeniden deneyebilirsin.');
          return;
        }
        const url = URL.createObjectURL(blob);
        audioUrlRef.current = url;
        setAudioUrl(url);
        phaseRef.current = 'ready';
        setPhase('ready');
      };

      recorder.start();
      phaseRef.current = 'recording';
      setPhase('recording');
      const startedAt = Date.now();
      tickerRef.current = window.setInterval(() => {
        if (mountedRef.current && generation === generationRef.current) {
          setSeconds(Math.min(MAX_RECORDING_SECONDS, Math.floor((Date.now() - startedAt) / 1000)));
        }
      }, 250);
      timerRef.current = window.setTimeout(() => {
        if (generation === generationRef.current) {
          setSeconds(MAX_RECORDING_SECONDS);
          stopRecording();
        }
      }, MAX_RECORDING_SECONDS * 1000);
    } catch (reason) {
      if (!mountedRef.current || generation !== generationRef.current) return;
      reset();
      setError(microphoneError(reason));
    }
  }, [clearTimers, reset, stopRecording]);

  const status = error || (phase === 'requesting'
    ? 'Mikrofon izni bekleniyor. Bir yetişkinden yardım alabilirsin.'
    : phase === 'recording'
      ? 'Şimdi seni kaydediyor. Hazır olduğunda Kaydı bitir düğmesine dokun.'
      : phase === 'stopping'
        ? 'Kaydın hazırlanıyor.'
        : phase === 'ready'
          ? playing ? 'Kendi okuyuşunu dinliyorsun.' : 'Kaydın hazır. Dinle ve örnek okuyuşla karşılaştır.'
          : supported === false
            ? 'Bu tarayıcıda kayıt kullanılamıyor. Kaydetmeden de sesli okuyabilirsin.'
            : 'İstersen sesli oku, kaydet ve kendini dinle.');

  return (
    <section data-testid="recorder" aria-labelledby={headingId} className="rounded-3xl border-2 border-violet-200 bg-violet-50 p-5 text-slate-900 sm:p-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-200 text-violet-800" aria-hidden="true"><Mic size={25} /></span>
        <div>
          <p className="text-sm font-bold text-violet-700">İsteğe bağlı mikrofon</p>
          <h3 id={headingId} className="text-xl font-black sm:text-2xl">Sıra sende: oku ve dinle</h3>
        </div>
      </div>
      <p className="mt-4 text-lg font-semibold">Bir yetişkinle birlikte deneyebilirsin. Kayıt en fazla {MAX_RECORDING_SECONDS} saniye sürer.</p>
      <p className="my-4 rounded-2xl border border-violet-200 bg-white p-4 text-center text-2xl font-bold leading-relaxed sm:text-3xl" lang="tr">{sampleText}</p>
      <div className="flex flex-wrap items-center gap-3">
        {phase === 'recording' ? (
          <button data-testid="stop-recording" type="button" onClick={stopRecording} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-rose-700 px-6 py-3 text-lg font-black text-white shadow-sm hover:bg-rose-800 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-rose-600">
            <Square size={22} aria-hidden="true" /> Kaydı bitir
          </button>
        ) : phase === 'requesting' ? (
          <button data-testid="cancel-recording" type="button" onClick={reset} className="min-h-14 rounded-2xl border-2 border-violet-500 bg-white px-6 py-3 text-lg font-black text-violet-800 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-violet-600">
            Kaydı iptal et
          </button>
        ) : (
          <button data-testid="start-recording" type="button" onClick={startRecording} disabled={supported !== true || phase === 'stopping'} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-violet-700 px-6 py-3 text-lg font-black text-white shadow-sm hover:bg-violet-800 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-violet-600 disabled:cursor-not-allowed disabled:opacity-50">
            {phase === 'ready' ? <RotateCcw size={22} aria-hidden="true" /> : <Mic size={22} aria-hidden="true" />}
            {phase === 'ready' ? 'Yeniden kaydet' : 'Sesimi kaydet'}
          </button>
        )}
        {phase === 'recording' && (
          <span className="rounded-full bg-rose-100 px-4 py-2 text-lg font-black tabular-nums text-rose-800" aria-label={'Kayıt süresi ' + seconds + ' saniye'}>{seconds} / {MAX_RECORDING_SECONDS} saniye</span>
        )}
      </div>
      <p data-testid="recording-status" className="mt-4 min-h-12 text-base font-semibold leading-relaxed" role="status" aria-live="polite">{status}</p>
      {audioUrl && (
        <div className="mt-3 rounded-2xl border border-violet-200 bg-white p-4">
          <p className="mb-2 font-bold">Kendi ses kaydın</p>
          <audio
            data-testid="recording-audio"
            ref={audioRef}
            src={audioUrl}
            controls
            preload="metadata"
            className="w-full"
            aria-label="Kendi okuyuşunu dinle"
            onPlay={() => {
              if (phaseRef.current !== 'ready') { audioRef.current?.pause(); return; }
              cancelSpeechRef.current();
              setPlaying(true);
              onBusyChangeRef.current(true);
            }}
            onPause={() => {
              if (mountedRef.current) setPlaying(false);
              if (phaseRef.current === 'ready') onBusyChangeRef.current(false);
            }}
            onEnded={() => {
              if (mountedRef.current) setPlaying(false);
              if (phaseRef.current === 'ready') onBusyChangeRef.current(false);
            }}
            onError={() => {
              if (!mountedRef.current || phaseRef.current !== 'ready') return;
              setPlaying(false);
              onBusyChangeRef.current(false);
              setError('Kaydın bu tarayıcıda çalınamadı. İstersen yeniden kaydetmeyi deneyebilirsin.');
            }}
          />
          <p className="mt-3 text-sm font-medium text-slate-700">Dinledikten sonra birlikte konuşun: Hangi heceyi daha rahat okudun? Bir kez daha denemek ister misin?</p>
        </div>
      )}
      <details className="mt-4 rounded-2xl border border-violet-200 bg-white/70 p-3 text-sm text-slate-700">
        <summary className="cursor-pointer rounded-lg py-1 font-bold focus-visible:outline focus-visible:outline-4 focus-visible:outline-violet-600">Veli için: mikrofon ve kayıt bilgisi</summary>
        <p className="mt-2 leading-relaxed">Mikrofon yalnızca “Sesimi kaydet” düğmesiyle açılır ve tarayıcı izin ister. Ses kaydı geçici olarak bu sayfanın belleğinde tutulur; uygulama kaydı sunucuya göndermez. Alıştırma değişince, başka sekmeye geçince veya sayfa kapanınca kayıt silinir. Bu bölüm çocuğun okuyuşunu otomatik olarak puanlamaz; birlikte dinleyip çalışmak içindir.</p>
      </details>
    </section>
  );
}
