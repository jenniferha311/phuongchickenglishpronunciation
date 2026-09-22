export type Language = 'vi' | 'en';
export type Accent = 'uk' | 'us';

export type PhonemeCategory = 'vowel' | 'consonant';

export type PhonemeSubCategory =
  | 'monophthong'
  | 'monophthong_long'
  | 'monophthong_short'
  | 'diphthong'
  | 'plosive'
  | 'fricative'
  | 'affricate'
  | 'nasal'
  | 'approximant';

export interface BilingualText {
  en: string;
  vi: string;
}

export interface ArticulationGuide {
  lips: BilingualText;
  tongue: BilingualText;
  teeth: BilingualText;
  vocalCords: BilingualText;
  airflow: BilingualText;
}

export interface SagittalConfig {
  // Tongue tip position: 0 (retracted/down) to 10 (touching upper teeth/alveolar ridge)
  tongueTipX: number;
  tongueTipY: number;
  // Tongue body height: 'high' | 'mid' | 'low'
  tongueHeight: 'high' | 'mid' | 'low';
  // Tongue backness: 'front' | 'central' | 'back'
  tongueBackness: 'front' | 'central' | 'back';
  // Lip shape: 'spread' | 'neutral' | 'rounded' | 'closed' | 'labiodental'
  lipShape: 'spread' | 'neutral' | 'rounded' | 'closed' | 'labiodental';
  // Soft palate (velum): true = raised (oral), false = lowered (nasal)
  velumRaised: boolean;
  // Vocal cords vibrating: true = voiced, false = voiceless
  vocalCordsVibrating: boolean;
  // Airflow path: 'oral_burst' | 'oral_friction' | 'oral_glide' | 'nasal'
  airflowType: 'oral_burst' | 'oral_friction' | 'oral_glide' | 'nasal';
}

export interface WordExample {
  word: string;
  ipa: string;
  ipa_us?: string;
  position: 'initial' | 'medial' | 'final';
  meaning_vi: string;
}

export interface AccentComparison {
  hasDifference: boolean;
  ukIpa?: string;
  usIpa?: string;
  differenceExplanation: BilingualText;
  contrastExamples?: {
    word: string;
    ukIpa: string;
    usIpa: string;
    note: BilingualText;
  }[];
}

export interface MinimalPair {
  wordA: string;
  soundA: string;
  ipaA: string;
  meaningA_vi: string;
  wordB: string;
  soundB: string;
  ipaB: string;
  meaningB_vi: string;
  contrastTip: BilingualText;
}

export interface MiniDialogue {
  speakerA: string;
  lineA: string;
  lineA_vi: string;
  speakerB: string;
  lineB: string;
  lineB_vi: string;
}

export interface VietnamesePitfall {
  commonMistake: BilingualText;
  howToFix: BilingualText;
  finalConsonantAlert?: boolean;
  isHighRisk?: boolean;
}

export interface PhonemeData {
  id: string;
  symbol: string;
  category: PhonemeCategory;
  subCategory: PhonemeSubCategory;
  name: BilingualText;
  voiced: boolean;
  place: BilingualText;
  manner: BilingualText;
  description: BilingualText;
  articulationGuide: ArticulationGuide;
  sagittalConfig: SagittalConfig;
  examples: WordExample[];
  minimalPairs: MinimalPair[];
  b1Sentence: {
    text: string;
    ipa: string;
    translation_vi: string;
  };
  miniDialogue: MiniDialogue;
  vietnamesePitfalls: VietnamesePitfall;
  accentComparison?: AccentComparison;
}

export interface AudioTake {
  id: string;
  takeNumber: number;
  timestamp: number;
  audioBlob: Blob;
  audioUrl: string;
  durationSeconds: number;
  feedback?: PronunciationFeedback;
}

export interface RecordingTake {
  takeNumber: number;
  audioBlobUrl: string;
  audioBase64: string;
  durationMs: number;
  timestamp: number;
  feedback?: PronunciationFeedback;
}

export interface PronunciationFeedback {
  score: number;
  phonemicAccuracy: number;
  stressAndIntonation: number;
  finalConsonants: number;
  vietnameseSpecificFeedback: BilingualText;
  strengths: string[];
  improvements: string[];
  articulationAdvice: BilingualText;
  transcript?: string;
  target_detected?: boolean;
  final_sound_detected?: boolean;
  confidence?: 'high' | 'medium' | 'low';
  accent?: Accent;
}


export interface ReadingExercise {
  id: string;
  type: 'sentence' | 'paragraph';
  title: BilingualText;
  text: string;
  ipa: string; // British (RP) IPA
  ipa_us?: string; // American (GA) IPA
  translation_vi?: string;
  targetPhonemes: string[]; // e.g. ['iː', 'ɪ'] or ['θ', 'ð']
  targetSoundsDescription: BilingualText;
  keyWordsWithPhonemes: { word: string; phoneme: string }[];
  difficulty: 'Intro' | 'Standard' | 'Challenge';
  contextCategory: 'daily' | 'travel' | 'work' | 'story';
}

export interface ReadingScoreResult {
  overallScore: number;
  phonemicAccuracy: number;
  fluencyScore: number;
  finalConsonantScore: number;
  recognizedText: string;
  wordStatuses: {
    word: string;
    isCorrect: boolean;
    targetSound?: string;
    note?: string;
  }[];
  teacherComment: {
    en: string;
    vi: string;
  };
}

export interface UserProgress {
  points: number;
  streakDays: number;
  lastActiveDate: string;
  completedPhonemes: string[]; // phoneme IDs
  masteredPhonemes: string[]; // with >80% score
  completedReadings: string[]; // reading exercise IDs
  earTrainingScore: {
    correct: number;
    total: number;
  };
  unlockedBadges: string[];
}

export interface EarTrainingQuestion {
  id: string;
  audioPrompt: string;
  targetSound: string;
  options: {
    text: string;
    sound: string;
    ipa: string;
    isCorrect: boolean;
  }[];
  explanation: BilingualText;
  type: 'phoneme_id' | 'minimal_pair' | 'final_consonant';
}

export interface Badge {
  id: string;
  title: BilingualText;
  description: BilingualText;
  icon: string;
  unlocked: boolean;
}
