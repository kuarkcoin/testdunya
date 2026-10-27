'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

function turkishVoice(synthesis: SpeechSynthesis): SpeechSynthesisVoice | undefined {
  const voices = synthesis.getVoices().filter((voice) =>
    /^tr(?:-|$)/.test(voice.lang.replace(/_/g, '-').toLowerCase()),
  );
  return voices.find((voice) => voice.default)
    || voices.find((voice) => voice.lang.toLowerCase() === 'tr-tr')
    || voices[0];
}

/** Reads words, sentences or explicitly labelled letter names, never simulated phonemes. */
export function useReadingSpeech(resetKey: string, blocked = false) {
  const [supported, setSupported] = useState<boolean | null>(null);
  const [available, setAvailable] = useState(false);
  const [voiceCheckFinished, setVoiceCheckFinished] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [notice, setNotice] = useState('');
  const mountedRef = useRef(false);
  const blockedRef = useRef(blocked);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const sequenceRef = useRef(0);
  blockedRef.current = blocked;

  const cancel = useCallback(() => {
    sequenceRef.current += 1;
    const ownedUtterance = utteranceRef.current;
    utteranceRef.current = null;
    if (ownedUtterance && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (mountedRef.current) setSpeaking(false);
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    const canSpeak = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    setSupported(canSpeak);
    if (!canSpeak) {
      setVoiceCheckFinished(true);
      return () => { mountedRef.current = false; };
    }

    const synthesis = window.speechSynthesis;
    const refreshVoices = () => {
      if (!mountedRef.current) return;
      const found = Boolean(turkishVoice(synthesis));
      setAvailable(found);
      if (found || synthesis.getVoices().length > 0) setVoiceCheckFinished(true);
      if (found) setNotice('');
    };
    refreshVoices();
    synthesis.addEventListener('voiceschanged', refreshVoices);
    const voiceTimer = window.setTimeout(() => {
      refreshVoices();
      if (mountedRef.current) setVoiceCheckFinished(true);
    }, 2000);
    const onVisibilityChange = () => {
      if (document.hidden) cancel();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      mountedRef.current = false;
      window.clearTimeout(voiceTimer);
      synthesis.removeEventListener('voiceschanged', refreshVoices);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      cancel();
    };
  }, [cancel]);

  useEffect(() => {
    cancel();
    setNotice('');
  }, [resetKey, cancel]);

  useEffect(() => {
    if (blocked) cancel();
  }, [blocked, cancel]);

  const speak = useCallback((text: string) => {
    if (blockedRef.current) {
      if (mountedRef.current) setNotice('Önce ses kaydını durdur. Sonra örneği dinleyebilirsin.');
      return;
    }
    if (typeof window === 'undefined' || !('speechSynthesis' in window)
      || !('SpeechSynthesisUtterance' in window)) {
      if (mountedRef.current) {
        setSupported(false);
        setNotice('Bu tarayıcı sesli okumayı desteklemiyor. Bir yetişkinle birlikte okuyabilirsin.');
      }
      return;
    }
    const content = text.trim();
    if (!content) return;
    const synthesis = window.speechSynthesis;
    // Some devices expose their voices only after this explicit user gesture.
    const voice = turkishVoice(synthesis);
    setAvailable(Boolean(voice));
    setVoiceCheckFinished(true);
    if (!voice) {
      setNotice('Bu cihazda Türkçe okuma sesi bulunamadı. Bir yetişkinle okuyabilir veya cihazın Türkçe sesini açıp yeniden deneyebilirsin.');
      return;
    }

    cancel();
    const sequence = sequenceRef.current;
    const utterance = new SpeechSynthesisUtterance(content);
    utterance.lang = voice.lang || 'tr-TR';
    utterance.voice = voice;
    utterance.rate = 0.78;
    utterance.pitch = 1;
    utterance.volume = 1;
    utteranceRef.current = utterance;
    setNotice('');
    setSpeaking(true);
    const finish = () => {
      if (!mountedRef.current || sequence !== sequenceRef.current) return;
      utteranceRef.current = null;
      setSpeaking(false);
    };
    utterance.onend = finish;
    utterance.onerror = (event) => {
      if (!mountedRef.current || sequence !== sequenceRef.current) return;
      finish();
      if (event.error !== 'canceled' && event.error !== 'interrupted') {
        setNotice('Ses şu anda çalmadı. Dinle düğmesine yeniden dokunabilir veya birlikte okuyabilirsin.');
      }
    };
    try {
      synthesis.speak(utterance);
    } catch {
      finish();
      setNotice('Ses şu anda çalmadı. Dinle düğmesine yeniden dokunabilirsin.');
    }
  }, [cancel]);

  const status = notice || (supported === false
    ? 'Bu tarayıcı sesli okumayı desteklemiyor. Bir yetişkinle birlikte okuyabilirsin.'
    : available
      ? 'Türkçe sesli örnekler hazır.'
      : voiceCheckFinished
        ? 'Türkçe ses bulunamadı. Dinle düğmesiyle yeniden deneyebilir veya birlikte okuyabilirsin.'
        : 'Sesli örnekler hazırlanıyor.');

  return { speak, cancel, speaking, supported, available, status };
}

export default useReadingSpeech;
