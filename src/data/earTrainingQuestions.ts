import { EarTrainingQuestion } from '../types';

export const EAR_TRAINING_QUESTIONS: EarTrainingQuestion[] = [
  {
    id: 'eq_1',
    audioPrompt: 'sheep',
    targetSound: 'iː',
    type: 'minimal_pair',
    options: [
      { text: 'sheep', sound: 'iː', ipa: '/ʃiːp/', isCorrect: true },
      { text: 'ship', sound: 'ɪ', ipa: '/ʃɪp/', isCorrect: false }
    ],
    explanation: {
      en: 'The speaker used a long, tense /iː/ sound with smiling lips. "Ship" would have been much shorter and relaxed.',
      vi: 'Người nói đã phát âm âm /iː/ ngân dài, cơ má căng mỉm cười. Từ "ship" sẽ có âm /ɪ/ ngắn và thả lỏng hơn.'
    }
  },
  {
    id: 'eq_2',
    audioPrompt: 'bad',
    targetSound: 'æ',
    type: 'minimal_pair',
    options: [
      { text: 'bed', sound: 'e', ipa: '/bed/', isCorrect: false },
      { text: 'bad', sound: 'æ', ipa: '/bæd/', isCorrect: true }
    ],
    explanation: {
      en: 'Notice the wider jaw drop and open front vowel /æ/ in "bad" compared to narrower /e/ in "bed".',
      vi: 'Chú ý cằm hạ sâu hơn và khoang miệng mở rộng với âm /æ/ trong "bad" so với âm /e/ khép miệng hơn trong "bed".'
    }
  },
  {
    id: 'eq_3',
    audioPrompt: 'think',
    targetSound: 'θ',
    type: 'minimal_pair',
    options: [
      { text: 'sink', sound: 's', ipa: '/sɪŋk/', isCorrect: false },
      { text: 'think', sound: 'θ', ipa: '/θɪŋk/', isCorrect: true }
    ],
    explanation: {
      en: 'The soft dental friction without hissing indicates /θ/ (tongue between teeth), not the sharp hissing of /s/.',
      vi: 'Tiếng xát êm dịu không chói gắt cho thấy âm /θ/ (đặt lưỡi giữa hai răng), khác với tiếng xì sắc nhọn của /s/.'
    }
  },
  {
    id: 'eq_4',
    audioPrompt: 'van',
    targetSound: 'v',
    type: 'minimal_pair',
    options: [
      { text: 'van', sound: 'v', ipa: '/væn/', isCorrect: true },
      { text: 'fan', sound: 'f', ipa: '/fæn/', isCorrect: false }
    ],
    explanation: {
      en: 'Listen to the strong buzzing vocal cord vibration characteristic of voiced /v/.',
      vi: 'Hãy lắng nghe độ rung thanh quản rền rĩ đặc trưng của phụ âm hữu thanh /v/.'
    }
  },
  {
    id: 'eq_5',
    audioPrompt: 'cat',
    targetSound: 't',
    type: 'final_consonant',
    options: [
      { text: 'cat (audible final /t/)', sound: 't', ipa: '/kæt/', isCorrect: true },
      { text: 'ca- (dropped final sound)', sound: 'none', ipa: '/kæ/', isCorrect: false }
    ],
    explanation: {
      en: 'There is a crisp alveolar release /t/ at the end. Vietnamese learners must never omit this final consonant!',
      vi: 'Có tiếng bật nướu răng /t/ tanh tách rất rõ ở cuối từ. Người học tuyệt đối không được nuốt âm cuối này!'
    }
  },
  {
    id: 'eq_6',
    audioPrompt: 'chair',
    targetSound: 'tʃ',
    type: 'minimal_pair',
    options: [
      { text: 'share', sound: 'ʃ', ipa: '/ʃeə/', isCorrect: false },
      { text: 'chair', sound: 'tʃ', ipa: '/tʃeə/', isCorrect: true }
    ],
    explanation: {
      en: '"Chair" begins with an explosive stop release (/t/ + /ʃ/ = /tʃ/), whereas "share" begins with smooth friction.',
      vi: '"Chair" mở đầu bằng âm tắc bật dứt khoát (/t/ + /ʃ/ = /tʃ/), trong khi "share" lướt xì êm ngay từ đầu.'
    }
  },
  {
    id: 'eq_7',
    audioPrompt: 'heard',
    targetSound: 'ɜː',
    type: 'phoneme_id',
    options: [
      { text: 'heard (long British /ɜː/)', sound: 'ɜː', ipa: '/hɜːd/', isCorrect: true },
      { text: 'hard (open /ɑː/)', sound: 'ɑː', ipa: '/hɑːd/', isCorrect: false }
    ],
    explanation: {
      en: 'The vowel is the central NURSE vowel /ɜː/, flat and smooth without American "r" curling.',
      vi: 'Nguyên âm ở đây là âm trung tâm /ɜː/ êm dịu phẳng lặng chuẩn Anh, không uốn cong lưỡi kiểu Mỹ.'
    }
  },
  {
    id: 'eq_8',
    audioPrompt: 'home',
    targetSound: 'əʊ',
    type: 'phoneme_id',
    options: [
      { text: 'home (British diphthong /əʊ/)', sound: 'əʊ', ipa: '/həʊm/', isCorrect: true },
      { text: 'hum (short /ʌ/)', sound: 'ʌ', ipa: '/hʌm/', isCorrect: false }
    ],
    explanation: {
      en: 'The classic British diphthong /əʊ/ glides from unrounded central schwa to rounded /ʊ/.',
      vi: 'Nguyên âm đôi đặc trưng Anh-Anh /əʊ/ lướt từ schwa /ə/ thả lỏng sang môi tròn /ʊ/.'
    }
  },
  {
    id: 'eq_9',
    audioPrompt: 'breathe',
    targetSound: 'ð',
    type: 'final_consonant',
    options: [
      { text: 'breathe (voiced /ð/)', sound: 'ð', ipa: '/briːð/', isCorrect: true },
      { text: 'breath (voiceless /θ/)', sound: 'θ', ipa: '/breθ/', isCorrect: false }
    ],
    explanation: {
      en: '"Breathe" ends with the buzzing voiced dental fricative /ð/ and has the long vowel /iː/.',
      vi: '"Breathe" kết thúc bằng âm răng-lưỡi có rung /ð/ và đi kèm nguyên âm dài /iː/.'
    }
  },
  {
    id: 'eq_10',
    audioPrompt: 'light',
    targetSound: 'l',
    type: 'minimal_pair',
    options: [
      { text: 'light', sound: 'l', ipa: '/laɪt/', isCorrect: true },
      { text: 'right', sound: 'r', ipa: '/raɪt/', isCorrect: false }
    ],
    explanation: {
      en: 'The tongue tip taps firmly against the top gum ridge for lateral /l/, unlike /r/ where the tongue does not touch.',
      vi: 'Đầu lưỡi gõ chắc vào nướu răng trên tạo âm /l/, khác biệt với âm /r/ nơi đầu lưỡi lơ lửng không chạm.'
    }
  }
];
