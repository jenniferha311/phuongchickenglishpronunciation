/**
 * British English Audio Engine:
 * - SpeechSynthesis with en-GB voices and speed rates (1.0x and 0.75x)
 * - Web Audio API formant-based phoneme acoustic synthesizer fallback
 */

let cachedVoice: SpeechSynthesisVoice | null = null;

export function getBritishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  if (cachedVoice) return cachedVoice;

  const voices = window.speechSynthesis.getVoices();
  // 1. Look for explicit British English voices
  const gbVoice = voices.find(
    (v) => v.lang.toLowerCase() === 'en-gb' || v.name.includes('UK') || v.name.includes('British')
  );
  if (gbVoice) {
    cachedVoice = gbVoice;
    return gbVoice;
  }

  // 2. Fallback to any English voice
  const anyEn = voices.find((v) => v.lang.toLowerCase().startsWith('en'));
  if (anyEn) {
    cachedVoice = anyEn;
    return anyEn;
  }

  return voices[0] || null;
}

if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = null;
    getBritishVoice();
  };
}

export function playBritishSpeech(text: string, rate: number = 1.0): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      resolve();
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = getBritishVoice();
    if (voice) {
      utterance.voice = voice;
    }
    utterance.lang = 'en-GB';
    utterance.rate = Math.max(0.5, Math.min(1.5, rate));
    utterance.pitch = 1.0;

    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();

    window.speechSynthesis.speak(utterance);
  });
}

export function stopAllAudio(): void {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

/**
 * Acoustic phoneme synthesizer for pure isolated phonemes
 * Plays pure vowel formants or consonant bursts using Web Audio API
 */
export function playIsolatedPhonemeSound(phonemeSymbol: string, rate: number = 1.0): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }

    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) {
      // Fallback to speech synth
      playBritishSpeech(phonemeSymbol, rate).then(resolve);
      return;
    }

    try {
      const ctx = new AudioContextClass();
      const duration = (rate < 1.0 ? 0.7 : 0.45);
      const now = ctx.currentTime;

      // Special handling for fricatives and plosives with noise
      if (['s', 'z', 'ʃ', 'ʒ', 'f', 'v', 'θ', 'ð', 'h'].includes(phonemeSymbol)) {
        playFricativeSynth(ctx, phonemeSymbol, duration, now, resolve);
        return;
      }

      if (['p', 'b', 't', 'd', 'k', 'ɡ', 'tʃ', 'dʒ'].includes(phonemeSymbol)) {
        playPlosiveSynth(ctx, phonemeSymbol, now, resolve);
        return;
      }

      // For vowels and sonorants, map typical F1, F2 formant frequencies
      const formants = getVowelFormants(phonemeSymbol);

      // Create fundamental pitch (F0)
      const oscF0 = ctx.createOscillator();
      const gainF0 = ctx.createGain();
      oscF0.type = 'sawtooth';
      oscF0.frequency.setValueAtTime(130, now);

      // Formant 1 bandpass
      const f1Filter = ctx.createBiquadFilter();
      f1Filter.type = 'bandpass';
      f1Filter.frequency.setValueAtTime(formants.f1, now);
      f1Filter.Q.setValueAtTime(5, now);

      // Formant 2 bandpass
      const f2Filter = ctx.createBiquadFilter();
      f2Filter.type = 'bandpass';
      f2Filter.frequency.setValueAtTime(formants.f2, now);
      f2Filter.Q.setValueAtTime(7, now);

      // Envelope
      gainF0.gain.setValueAtTime(0.001, now);
      gainF0.gain.exponentialRampToValueAtTime(0.25, now + 0.05);
      gainF0.gain.exponentialRampToValueAtTime(0.001, now + duration);

      oscF0.connect(f1Filter);
      oscF0.connect(f2Filter);
      f1Filter.connect(gainF0);
      f2Filter.connect(gainF0);
      gainF0.connect(ctx.destination);

      oscF0.start(now);
      oscF0.stop(now + duration + 0.05);

      setTimeout(() => {
        try { ctx.close(); } catch (e) {}
        resolve();
      }, (duration + 0.1) * 1000);
    } catch (err) {
      // Fallback to speech synthesis
      playBritishSpeech(phonemeSymbol, rate).then(resolve);
    }
  });
}

function getVowelFormants(sym: string): { f1: number; f2: number } {
  const map: Record<string, { f1: number; f2: number }> = {
    'iː': { f1: 280, f2: 2250 },
    'ɪ': { f1: 390, f2: 1950 },
    'e': { f1: 530, f2: 1840 },
    'æ': { f1: 660, f2: 1720 },
    'ɑː': { f1: 730, f2: 1090 },
    'ɒ': { f1: 570, f2: 840 },
    'ɔː': { f1: 430, f2: 750 },
    'ʊ': { f1: 440, f2: 1020 },
    'uː': { f1: 300, f2: 870 },
    'ʌ': { f1: 640, f2: 1190 },
    'ɜː': { f1: 500, f2: 1380 },
    'ə': { f1: 500, f2: 1500 },
    'eɪ': { f1: 480, f2: 2000 },
    'aɪ': { f1: 700, f2: 1800 },
    'ɔɪ': { f1: 450, f2: 1900 },
    'əʊ': { f1: 480, f2: 950 },
    'aʊ': { f1: 720, f2: 1100 },
    'ɪə': { f1: 350, f2: 1700 },
    'eə': { f1: 520, f2: 1600 },
    'ʊə': { f1: 420, f2: 1200 },
    'm': { f1: 250, f2: 1000 },
    'n': { f1: 250, f2: 1400 },
    'ŋ': { f1: 250, f2: 2000 },
    'l': { f1: 350, f2: 1100 },
    'r': { f1: 380, f2: 1300 },
    'w': { f1: 300, f2: 700 },
    'j': { f1: 280, f2: 2200 }
  };
  return map[sym] || { f1: 500, f2: 1500 };
}

function playFricativeSynth(ctx: AudioContext, sym: string, duration: number, now: number, resolve: () => void) {
  // Generate white noise buffer
  const bufferSize = Math.floor(ctx.sampleRate * duration);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';

  // Set filter frequency based on fricative
  if (sym === 's' || sym === 'z') {
    filter.frequency.setValueAtTime(6500, now);
    filter.Q.setValueAtTime(3, now);
  } else if (sym === 'ʃ' || sym === 'ʒ') {
    filter.frequency.setValueAtTime(3500, now);
    filter.Q.setValueAtTime(2, now);
  } else if (sym === 'θ' || sym === 'ð') {
    filter.frequency.setValueAtTime(5000, now);
    filter.Q.setValueAtTime(1.5, now);
  } else {
    filter.frequency.setValueAtTime(2000, now);
    filter.Q.setValueAtTime(1, now);
  }

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  // If voiced (z, zh, v, dh), add low tone
  if (['z', 'ʒ', 'v', 'ð'].includes(sym)) {
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.frequency.setValueAtTime(120, now);
    oscGain.gain.setValueAtTime(0.15, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration);
  }

  noise.start(now);
  noise.stop(now + duration);

  setTimeout(() => {
    try { ctx.close(); } catch (e) {}
    resolve();
  }, (duration + 0.05) * 1000);
}

function playPlosiveSynth(ctx: AudioContext, sym: string, now: number, resolve: () => void) {
  const burstDur = 0.08;
  const bufferSize = Math.floor(ctx.sampleRate * burstDur);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(sym.includes('t') ? 3500 : 1500, now);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.25, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + burstDur);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noise.start(now);
  noise.stop(now + burstDur);

  setTimeout(() => {
    try { ctx.close(); } catch (e) {}
    resolve();
  }, (burstDur + 0.05) * 1000);
}
