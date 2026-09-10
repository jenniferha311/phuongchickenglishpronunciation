import { BilingualText } from '../types';

export interface AccentRule {
  id: string;
  title: BilingualText;
  badge: string;
  summary: BilingualText;
  ukRule: BilingualText;
  usRule: BilingualText;
  examples: {
    word: string;
    ukIpa: string;
    usIpa: string;
    meaning_vi: string;
    explanation: BilingualText;
  }[];
}

export interface WordAccentContrast {
  word: string;
  meaning_vi: string;
  ukIpa: string;
  usIpa: string;
  category: 'vowel' | 'rhoticity' | 'flapping' | 'yod_drop' | 'stress_special';
  tip: BilingualText;
}

export const ACCENT_RULES: AccentRule[] = [
  {
    id: 'rhoticity',
    title: {
      en: 'Rhoticity: Pronouncing the "R" sound',
      vi: 'Âm /r/ cuộn lưỡi (Rhotic vs Non-rhotic)'
    },
    badge: 'Quy tắc vàng #1',
    summary: {
      en: 'American English is rhotic (pronounces /r/ everywhere), while British RP is non-rhotic (only pronounces /r/ before vowels).',
      vi: 'Tiếng Anh Mỹ (US) luôn cuộn lưỡi phát âm /r/ ở mọi vị trí (cuối từ, trước phụ âm). Tiếng Anh Anh (UK) chỉ đọc /r/ khi đứng trước nguyên âm.'
    },
    ukRule: {
      en: 'Silent "r" in final position or before consonants. Vowels are lengthened instead.',
      vi: 'Âm "r" câm ở cuối từ hoặc trước phụ âm; nguyên âm đứng trước được kéo dài trường độ.'
    },
    usRule: {
      en: 'Curled tongue backward (retroflex or bunched) to produce audible R-coloring (/ɚ/, /ɝ/, /ɑːr/).',
      vi: 'Đầu lưỡi cong lên và thụt sâu về sau để tạo độ rung uốn lưỡi đặc trưng cho nguyên âm.'
    },
    examples: [
      {
        word: 'car',
        ukIpa: '/kɑː/',
        usIpa: '/kɑːr/',
        meaning_vi: 'chiếc xe hơi',
        explanation: {
          en: 'UK drops the final /r/; US pronounces a strong rhotic /r/.',
          vi: 'UK ngân dài âm /ɑː/ không cuộn lưỡi; US cuộn lưỡi phát âm /r/ rõ ràng.'
        }
      },
      {
        word: 'water',
        ukIpa: '/ˈwɔːtə/',
        usIpa: '/ˈwɑːtər/',
        meaning_vi: 'nước',
        explanation: {
          en: 'UK ends in pure schwa /ə/; US ends in rhotic schwa /ər/.',
          vi: 'UK kết thúc bằng âm ơ nhẹ /ə/; US kết thúc bằng âm ơ cuộn lưỡi /ər/.'
        }
      },
      {
        word: 'bird',
        ukIpa: '/bɜːd/',
        usIpa: '/bɜːrd/',
        meaning_vi: 'con chim',
        explanation: {
          en: 'UK vowel /ɜː/ is held steady; US vowel /ɝ/ is r-colored.',
          vi: 'UK đọc /ɜː/ phẳng lưỡi; US cuộn lưỡi sâu trong họng /ɝ/.'
        }
      },
      {
        word: 'hard',
        ukIpa: '/hɑːd/',
        usIpa: '/hɑːrd/',
        meaning_vi: 'chăm chỉ, khó',
        explanation: {
          en: 'UK drops /r/ before /d/; US keeps strong /r/.',
          vi: 'UK lướt qua âm r; US giữ trọn vẹn âm cuộn lưỡi.'
        }
      }
    ]
  },
  {
    id: 'flap_t',
    title: {
      en: 'Flap T [ɾ]: The American "Water / City" sound',
      vi: 'Âm T vỗ (Flap T [ɾ]) giữa 2 nguyên âm'
    },
    badge: 'Đặc trưng Mỹ #2',
    summary: {
      en: 'In American English, /t/ between vowels turns into a voiced flap [ɾ] (sounding like a quick /d/). In British RP, it stays a crisp aspirated /t/.',
      vi: 'Trong tiếng Anh Mỹ, âm /t/ đứng giữa hai nguyên âm (hoặc sau /r/) được vỗ nhẹ đầu lưỡi thành âm [ɾ] (nghe như âm /d/ nhẹ). Tiếng Anh Anh giữ âm /t/ sắc nét.'
    },
    ukRule: {
      en: 'Clean, crisp aspirated /t/ or glottal stop. Tip of tongue firmly taps the alveolar ridge with air burst.',
      vi: 'Âm /t/ bật hơi dứt khoát và sắc sảo, đầu lưỡi bật khỏi chân răng cửa trên.'
    },
    usRule: {
      en: 'Fast tap of the tongue tip against alveolar ridge without stopping airflow, sounding like soft [d].',
      vi: 'Đầu lưỡi chỉ vỗ nhẹ một tích tắc lên nướu răng rồi nhả ra ngay, nghe êm và mềm như âm /d/.'
    },
    examples: [
      {
        word: 'water',
        ukIpa: '/ˈwɔːtə/',
        usIpa: '/ˈwɑːt̬ɚ/ (wá-đờ)',
        meaning_vi: 'nước',
        explanation: {
          en: 'UK: "wó-tờ"; US: "wá-đờ" with flap T.',
          vi: 'UK đọc tròn môi "wó-tờ"; US đọc vỗ lưỡi "wá-đờ".'
        }
      },
      {
        word: 'better',
        ukIpa: '/ˈbetə/',
        usIpa: '/ˈbet̬ɚ/ (bé-đờ)',
        meaning_vi: 'tốt hơn',
        explanation: {
          en: 'UK has crisp /t/; US has voiced flap [ɾ].',
          vi: 'UK phát âm /t/ nảy bật; US biến thành âm d lướt nhẹ.'
        }
      },
      {
        word: 'city',
        ukIpa: '/ˈsɪti/',
        usIpa: '/ˈsɪt̬i/ (xí-đì)',
        meaning_vi: 'thành phố',
        explanation: {
          en: 'UK: clear /t/; US: smooth flap /d/.',
          vi: 'UK đọc rõ âm /t/; US lướt thành "xí-đì".'
        }
      },
      {
        word: 'party',
        ukIpa: '/ˈpɑːti/',
        usIpa: '/ˈpɑːrt̬i/ (pa-r-đì)',
        meaning_vi: 'bữa tiệc',
        explanation: {
          en: 'UK: no r, crisp t; US: rhotic r + flap t.',
          vi: 'UK không r + t bật; US vừa cuộn r vừa vỗ âm t.'
        }
      }
    ]
  },
  {
    id: 'bath_vowel',
    title: {
      en: 'The "BATH" Vowel: /ɑː/ vs /æ/',
      vi: 'Biến âm BATH: /ɑː/ trầm sâu vs /æ/ mở rộng'
    },
    badge: 'Phân biệt nguyên âm #3',
    summary: {
      en: 'Words with "a" before /f, s, θ, n/ take deep /ɑː/ in British RP, but flat /æ/ in American English.',
      vi: 'Các từ có chữ "a" đứng trước phụ âm /f, s, θ, n/ được người Anh phát âm là /ɑː/ (trầm, mở to họng), trong khi người Mỹ phát âm là /æ/ (bẹt miệng, kéo dài mép).'
    },
    ukRule: {
      en: 'Deep, open back vowel /ɑː/ (Father vowel).',
      vi: 'Âm /ɑː/ mở miệng sâu, hạ thấp hàm và thân lưỡi về phía đáy họng.'
    },
    usRule: {
      en: 'Front open vowel /æ/ (Cat vowel), smiling mouth shape.',
      vi: 'Âm /æ/ hạ hàm nhưng bẹt miệng sang 2 bên như đang cười lớn.'
    },
    examples: [
      {
        word: 'dance',
        ukIpa: '/dɑːns/',
        usIpa: '/dæns/',
        meaning_vi: 'nhảy múa, khiêu vũ',
        explanation: {
          en: 'UK: /dɑːns/ (đan-s); US: /dæns/ (đen-s).',
          vi: 'UK đọc âm A trầm /dɑːns/; US đọc âm e bẹt /dæns/.'
        }
      },
      {
        word: 'bath',
        ukIpa: '/bɑːθ/',
        usIpa: '/bæθ/',
        meaning_vi: 'bồn tắm',
        explanation: {
          en: 'UK: /bɑːθ/; US: /bæθ/.',
          vi: 'UK đọc /bɑːθ/ với âm A dài; US đọc /bæθ/ với âm e bẹt.'
        }
      },
      {
        word: 'ask',
        ukIpa: '/ɑːsk/',
        usIpa: '/æsk/',
        meaning_vi: 'hỏi, yêu cầu',
        explanation: {
          en: 'UK: /ɑːsk/; US: /æsk/.',
          vi: 'UK đọc /ɑːsk/; US đọc /æsk/.'
        }
      },
      {
        word: "can't",
        ukIpa: '/kɑːnt/',
        usIpa: '/kænt/',
        meaning_vi: 'không thể',
        explanation: {
          en: 'UK: /kɑːnt/ (khan-t); US: /kænt/ (khen-t).',
          vi: 'UK đọc /kɑːnt/; US đọc /kænt/.'
        }
      },
      {
        word: 'fast',
        ukIpa: '/fɑːst/',
        usIpa: '/fæst/',
        meaning_vi: 'nhanh nhẹn',
        explanation: {
          en: 'UK: /fɑːst/; US: /fæst/.',
          vi: 'UK đọc /fɑːst/; US đọc /fæst/.'
        }
      }
    ]
  },
  {
    id: 'lot_vowel',
    title: {
      en: 'The "LOT" Vowel: /ɒ/ vs /ɑː/ (Father-Bother Merger)',
      vi: 'Biến âm LOT: /ɒ/ tròn môi vs /ɑː/ mở rộng'
    },
    badge: 'Phân biệt nguyên âm #4',
    summary: {
      en: 'British RP has a short rounded back vowel /ɒ/. American English unrounds it to open /ɑː/ or merges it with /ɔː/.',
      vi: 'Người Anh phát âm chữ "o" ngắn bằng âm /ɒ/ (tròn môi chúm lại). Người Mỹ bỏ động tác tròn môi, mở to khẩu hình đọc thành /ɑː/ dài.'
    },
    ukRule: {
      en: 'Lips visibly rounded into an "O" shape, back of tongue raised low.',
      vi: 'Môi hơi chúm tròn hình chữ O, phát âm dứt khoát trong khoang miệng.'
    },
    usRule: {
      en: 'Lips relaxed and unrounded, jaw drops vertically to produce /ɑː/.',
      vi: 'Môi hoàn toàn thả lỏng không chúm, hàm hạ thẳng xuống đọc thành âm A mở.'
    },
    examples: [
      {
        word: 'hot',
        ukIpa: '/hɒt/',
        usIpa: '/hɑːt/',
        meaning_vi: 'nóng, cay',
        explanation: {
          en: 'UK: rounded "hot"; US: unrounded "hạt".',
          vi: 'UK môi tròn "hót"; US hàm rơi mở to "hát".'
        }
      },
      {
        word: 'box',
        ukIpa: '/bɒks/',
        usIpa: '/bɑːks/',
        meaning_vi: 'chiếc hộp',
        explanation: {
          en: 'UK: /bɒks/; US: /bɑːks/.',
          vi: 'UK đọc "bóc-s"; US đọc "bác-s".'
        }
      },
      {
        word: 'stop',
        ukIpa: '/stɒp/',
        usIpa: '/stɑːp/',
        meaning_vi: 'dừng lại',
        explanation: {
          en: 'UK: rounded /stɒp/; US: open /stɑːp/.',
          vi: 'UK đọc tròn môi /stɒp/; US mở hàm đọc /stɑːp/.'
        }
      },
      {
        word: 'coffee',
        ukIpa: '/ˈkɒfi/',
        usIpa: '/ˈkɑːfi/ or /ˈkɔːfi/',
        meaning_vi: 'cà phê',
        explanation: {
          en: 'UK: short rounded /ɒ/; US: open /ɑː/ or /ɔː/.',
          vi: 'UK đọc "kó-phi"; US đọc "kó-fi" hoặc "ká-fi".'
        }
      }
    ]
  },
  {
    id: 'yod_dropping',
    title: {
      en: 'Yod-Dropping: /juː/ vs /uː/ after /t, d, n, s/',
      vi: 'Hiện tượng rụng âm /j/ (Yod-Dropping)'
    },
    badge: 'Ngữ âm học #5',
    summary: {
      en: 'British RP preserves the /j/ sound (yod) after coronal consonants (/t/, /d/, /n/, /s/), while American English drops it.',
      vi: 'Người Anh giữ âm /j/ (âm d/i nhẹ) sau các phụ âm đầu lưỡi như /t, d, n, s/ tạo thành /juː/. Người Mỹ lược bỏ hoàn toàn âm /j/ chỉ đọc /uː/.'
    },
    ukRule: {
      en: 'Pronounces /juː/: tune = /tjuːn/, new = /njuːz/, duty = /ˈdjuːti/.',
      vi: 'Đọc âm lướt /juː/ (như "tiu-n", "niu-z", "điu-ti").'
    },
    usRule: {
      en: 'Drops /j/ to simple /uː/: tune = /tuːn/, new = /nuːz/, duty = /ˈduːti/.',
      vi: 'Bỏ âm /j/ đọc thẳng /uː/ (như "tu-n", "nu-z", "đu-ti").'
    },
    examples: [
      {
        word: 'new',
        ukIpa: '/njuːz/ (hoặc /njuː/)',
        usIpa: '/nuːz/ (hoặc /nuː/)',
        meaning_vi: 'mới mẻ, tin tức',
        explanation: {
          en: 'UK has the /j/ glide; US drops it to straight /uː/.',
          vi: 'UK đọc lướt âm j "niu"; US đọc thẳng âm u "nu".'
        }
      },
      {
        word: 'tune',
        ukIpa: '/tjuːn/',
        usIpa: '/tuːn/',
        meaning_vi: 'giai điệu',
        explanation: {
          en: 'UK: /tjuːn/ ("tiun"); US: /tuːn/ ("tun").',
          vi: 'UK đọc "tiun"; US đọc "tun".'
        }
      },
      {
        word: 'duty',
        ukIpa: '/ˈdjuːti/',
        usIpa: '/ˈduːt̬i/',
        meaning_vi: 'nhiệm vụ, bổn phận',
        explanation: {
          en: 'UK: /djuːti/; US: /duːti/.',
          vi: 'UK đọc "điu-ti"; US đọc "đu-đì".'
        }
      },
      {
        word: 'student',
        ukIpa: '/ˈstjuːdənt/',
        usIpa: '/ˈstuːdənt/',
        meaning_vi: 'học sinh, sinh viên',
        explanation: {
          en: 'UK: /ˈstjuːdənt/; US: /ˈstuːdənt/.',
          vi: 'UK đọc "s-tiu-đần-t"; US đọc "s-tu-đần-t".'
        }
      }
    ]
  },
  {
    id: 'centring_diphthongs',
    title: {
      en: 'Centring Diphthongs vs R-Colored Vowels',
      vi: 'Nguyên âm đôi lướt về Schwa vs Nguyên âm cuộn R'
    },
    badge: 'Đặc trưng vần #6',
    summary: {
      en: 'British RP has centring diphthongs gliding towards schwa (/ɪə/, /eə/, /ʊə/). American English replaces them with vowel + rhotic R (/ɪr/, /er/, /ʊr/).',
      vi: 'Người Anh lướt từ nguyên âm chính về âm ơ schwa (/ɪə/, /eə/, /ʊə/). Người Mỹ không dùng âm schwa mà cuộn thẳng lưỡi thành nguyên âm + r (/ɪr/, /er/, /ʊr/).'
    },
    ukRule: {
      en: 'Smooth glide ending in relaxed neutral schwa /ə/.',
      vi: 'Lướt nhẹ nhàng từ âm trước về âm ơ trung tính /ə/.'
    },
    usRule: {
      en: 'Immediate curling back of tongue into rhotic /r/.',
      vi: 'Cuộn lưỡi ngay lập tức tạo thành âm r dày và vang.'
    },
    examples: [
      {
        word: 'near',
        ukIpa: '/nɪə/',
        usIpa: '/nɪr/',
        meaning_vi: 'gần gũi',
        explanation: {
          en: 'UK: /nɪə/ (ni-ơ); US: /nɪr/ (ni-r).',
          vi: 'UK lướt về schwa; US kết thúc bằng âm r cuộn.'
        }
      },
      {
        word: 'hair',
        ukIpa: '/heə/',
        usIpa: '/her/',
        meaning_vi: 'mái tóc',
        explanation: {
          en: 'UK: /heə/ (he-ơ); US: /her/ (he-r).',
          vi: 'UK lướt về schwa; US kết thúc bằng âm r cuộn.'
        }
      },
      {
        word: 'tour',
        ukIpa: '/tʊə/',
        usIpa: '/tʊr/',
        meaning_vi: 'chuyến du lịch',
        explanation: {
          en: 'UK: /tʊə/ (tu-ơ); US: /tʊr/ (tu-r).',
          vi: 'UK lướt về schwa; US kết thúc bằng âm r cuộn.'
        }
      }
    ]
  },
  {
    id: 'special_vocabulary',
    title: {
      en: 'Special Vocabulary Differences & Stress Shifts',
      vi: 'Từ vựng có phát âm & trọng âm đặc biệt khác biệt'
    },
    badge: 'Thực chiến B1 #7',
    summary: {
      en: 'Common daily words with entirely different vowel sounds or stress placements between UK and US.',
      vi: 'Các từ vựng thông dụng hàng ngày có cách phát âm hoặc vị trí nhấn trọng âm hoàn toàn khác nhau giữa Anh - Anh và Anh - Mỹ.'
    },
    ukRule: {
      en: 'Distinct traditional British pronunciations (e.g. tomato /təˈmɑːtəʊ/, schedule /ˈʃedjuːl/).',
      vi: 'Cách đọc truyền thống Anh quốc (ví dụ tomato /təˈmɑːtəʊ/, schedule /ˈʃedjuːl/).'
    },
    usRule: {
      en: 'American standardized variants (e.g. tomato /təˈmeɪtoʊ/, schedule /ˈskedʒuːl/).',
      vi: 'Cách đọc chuẩn Bắc Mỹ (ví dụ tomato /təˈmeɪtoʊ/, schedule /ˈskedʒuːl/).'
    },
    examples: [
      {
        word: 'tomato',
        ukIpa: '/təˈmɑːtəʊ/',
        usIpa: '/təˈmeɪt̬oʊ/',
        meaning_vi: 'quả cà chua',
        explanation: {
          en: 'UK: "tờ-má-tầu"; US: "tờ-mây-đầu".',
          vi: 'UK phát âm âm A /ɑː/; US phát âm âm EY /eɪ/ + Flap T.'
        }
      },
      {
        word: 'schedule',
        ukIpa: '/ˈʃedjuːl/',
        usIpa: '/ˈskedʒuːl/',
        meaning_vi: 'lịch trình, thời khóa biểu',
        explanation: {
          en: 'UK: starts with /ʃ/ (she-diul); US: starts with /sk/ (ske-jùl).',
          vi: 'UK bắt đầu bằng âm s nặng /ʃ/; US bắt đầu bằng âm /sk/.'
        }
      },
      {
        word: 'garage',
        ukIpa: '/ˈɡærɑːʒ/ or /ˈɡærɪdʒ/',
        usIpa: '/ɡəˈrɑːʒ/',
        meaning_vi: 'nhà để xe, ga-ra',
        explanation: {
          en: 'UK stresses 1st syllable /ˈɡær-/; US stresses 2nd syllable /ɡəˈrɑːʒ/.',
          vi: 'UK nhấn trọng âm 1; US nhấn trọng âm 2.'
        }
      },
      {
        word: 'vase',
        ukIpa: '/vɑːz/',
        usIpa: '/veɪs/ or /veɪz/',
        meaning_vi: 'bình hoa, lọ hoa',
        explanation: {
          en: 'UK: /vɑːz/ (va-z); US: /veɪs/ (vây-s).',
          vi: 'UK đọc âm A dài /vɑːz/; US đọc âm EY /veɪs/.'
        }
      },
      {
        word: 'either',
        ukIpa: '/ˈaɪðə/',
        usIpa: '/ˈiːðər/ or /ˈaɪðər/',
        meaning_vi: 'cả hai, hoặc là',
        explanation: {
          en: 'UK primarily uses /ˈaɪðə/; US frequently uses /ˈiːðər/.',
          vi: 'UK ưu tiên đọc "ai-đờ"; US thường đọc "i-đờ".'
        }
      }
    ]
  }
];

export const POPULAR_CONTRAST_WORDS: WordAccentContrast[] = [
  {
    word: 'water',
    meaning_vi: 'nước',
    ukIpa: '/ˈwɔːtə/',
    usIpa: '/ˈwɑːt̬ɚ/',
    category: 'flapping',
    tip: {
      en: 'UK: rounded /ɔː/ + crisp /t/ + schwa. US: open /ɑː/ + flap [ɾ] + rhotic r.',
      vi: 'UK: âm o tròn + t bật + ơ. US: âm a mở + t vỗ nhẹ như đ + r cuộn.'
    }
  },
  {
    word: 'dance',
    meaning_vi: 'khiêu vũ, nhảy',
    ukIpa: '/dɑːns/',
    usIpa: '/dæns/',
    category: 'vowel',
    tip: {
      en: 'UK: deep back /ɑː/. US: flat front /æ/.',
      vi: 'UK: âm A trầm sâu trong cổ họng. US: âm e bẹt mở rộng mép.'
    }
  },
  {
    word: 'car',
    meaning_vi: 'xe hơi',
    ukIpa: '/kɑː/',
    usIpa: '/kɑːr/',
    category: 'rhoticity',
    tip: {
      en: 'UK: silent r. US: strong curled r.',
      vi: 'UK: r câm ngân dài. US: cuộn lưỡi phát âm r rõ nét.'
    }
  },
  {
    word: 'hot',
    meaning_vi: 'nóng',
    ukIpa: '/hɒt/',
    usIpa: '/hɑːt/',
    category: 'vowel',
    tip: {
      en: 'UK: rounded /ɒ/. US: unrounded /ɑː/.',
      vi: 'UK: tròn môi chúm chữ o. US: hạ hàm mở to như chữ a.'
    }
  },
  {
    word: 'new',
    meaning_vi: 'mới',
    ukIpa: '/njuː/',
    usIpa: '/nuː/',
    category: 'yod_drop',
    tip: {
      en: 'UK: retains /j/ glide (niu). US: drops /j/ (nu).',
      vi: 'UK: giữ âm j lướt "niu". US: rụng âm j đọc "nu".'
    }
  },
  {
    word: 'better',
    meaning_vi: 'tốt hơn',
    ukIpa: '/ˈbetə/',
    usIpa: '/ˈbet̬ɚ/',
    category: 'flapping',
    tip: {
      en: 'UK: sharp t. US: flap t sounding like soft d.',
      vi: 'UK: âm t sắc bén. US: âm t vỗ nhẹ lướt thành d mềm.'
    }
  },
  {
    word: 'tomato',
    meaning_vi: 'cà chua',
    ukIpa: '/təˈmɑːtəʊ/',
    usIpa: '/təˈmeɪt̬oʊ/',
    category: 'stress_special',
    tip: {
      en: 'UK: /təˈmɑːtəʊ/ (má-tầu). US: /təˈmeɪtoʊ/ (mây-đầu).',
      vi: 'UK: đọc vần A "má-tầu". US: đọc vần EY "mây-đầu".'
    }
  },
  {
    word: 'ask',
    meaning_vi: 'hỏi',
    ukIpa: '/ɑːsk/',
    usIpa: '/æsk/',
    category: 'vowel',
    tip: {
      en: 'UK: /ɑːsk/. US: /æsk/.',
      vi: 'UK: âm A sâu. US: âm e bẹt.'
    }
  },
  {
    word: 'schedule',
    meaning_vi: 'lịch trình',
    ukIpa: '/ˈʃedjuːl/',
    usIpa: '/ˈskedʒuːl/',
    category: 'stress_special',
    tip: {
      en: 'UK: starts with /ʃ/ (she-). US: starts with /sk/ (ske-).',
      vi: 'UK: bắt đầu bằng âm s nặng /ʃ/. US: bắt đầu bằng âm /sk/.'
    }
  },
  {
    word: "can't",
    meaning_vi: 'không thể',
    ukIpa: '/kɑːnt/',
    usIpa: '/kænt/',
    category: 'vowel',
    tip: {
      en: 'UK: /kɑːnt/. US: /kænt/.',
      vi: 'UK: âm A dài /kɑːnt/. US: âm e bẹt /kænt/.'
    }
  },
  {
    word: 'city',
    meaning_vi: 'thành phố',
    ukIpa: '/ˈsɪti/',
    usIpa: '/ˈsɪt̬i/',
    category: 'flapping',
    tip: {
      en: 'UK: /t/ crisp. US: flap t /d/.',
      vi: 'UK: t bật rõ. US: vỗ lưỡi thành xí-đì.'
    }
  },
  {
    word: 'near',
    meaning_vi: 'gần',
    ukIpa: '/nɪə/',
    usIpa: '/nɪr/',
    category: 'rhoticity',
    tip: {
      en: 'UK: glides to schwa /ə/. US: curls tongue into /r/.',
      vi: 'UK: trượt về âm ơ. US: cuộn lưỡi vào âm r.'
    }
  }
];

export function getPhonemeAccentDifference(phonemeSymbol: string): {
  hasDifference: boolean;
  ukIpa: string;
  usIpa: string;
  explanation: BilingualText;
  contrastExamples?: { word: string; ukIpa: string; usIpa: string; note: string }[];
} | null {
  // Specific mappings for phonemes that strongly differ between UK and US
  if (phonemeSymbol === 'ɒ') {
    return {
      hasDifference: true,
      ukIpa: '/ɒ/',
      usIpa: '/ɑː/ or /ɔː/',
      explanation: {
        en: 'In American English, the short rounded vowel /ɒ/ is replaced by unrounded open /ɑː/ or /ɔː/ (LOT-CLOTH split / Father-Bother merger).',
        vi: 'Trong tiếng Anh Mỹ, âm ngắn tròn môi /ɒ/ không tồn tại độc lập mà được mở to hàm thành /ɑː/ (như "hot" đọc là /hɑːt/) hoặc gộp vào /ɔː/.'
      },
      contrastExamples: [
        { word: 'hot', ukIpa: '/hɒt/', usIpa: '/hɑːt/', note: 'UK chúm môi tròn; US mở hàm đọc A' },
        { word: 'stop', ukIpa: '/stɒp/', usIpa: '/stɑːp/', note: 'UK tròn môi; US thả lỏng mở hàm' },
        { word: 'coffee', ukIpa: '/ˈkɒfi/', usIpa: '/ˈkɑːfi/', note: 'UK đọc o ngắn; US đọc a dài' }
      ]
    };
  }

  if (phonemeSymbol === 'ɑː') {
    return {
      hasDifference: true,
      ukIpa: '/ɑː/',
      usIpa: '/æ/ in BATH words, /ɑːr/ before R',
      explanation: {
        en: 'UK uses deep /ɑː/ in words like "bath", "dance", "ask". In US English, these words take flat /æ/. Also, before R, US uses rhotic /ɑːr/.',
        vi: 'Người Anh đọc /ɑː/ trầm sâu trong các từ như "bath", "dance", "ask", "fast"; người Mỹ đổi toàn bộ sang âm e bẹt /æ/ (/bæθ/, /dæns/, /æsk/).'
      },
      contrastExamples: [
        { word: 'dance', ukIpa: '/dɑːns/', usIpa: '/dæns/', note: 'UK: A trầm; US: e bẹt' },
        { word: 'bath', ukIpa: '/bɑːθ/', usIpa: '/bæθ/', note: 'UK: A trầm; US: e bẹt' },
        { word: 'car', ukIpa: '/kɑː/', usIpa: '/kɑːr/', note: 'UK: r câm; US: cuộn lưỡi r' }
      ]
    };
  }

  if (phonemeSymbol === 'r') {
    return {
      hasDifference: true,
      ukIpa: 'Non-rhotic (only before vowels)',
      usIpa: 'Rhotic (pronounced everywhere)',
      explanation: {
        en: 'UK only pronounces /r/ before vowels (linking R). US pronounces /r/ everywhere including end of words and before consonants.',
        vi: 'Người Anh chỉ phát âm /r/ khi phía sau có nguyên âm. Người Mỹ luôn luôn cuộn lưỡi phát âm /r/ dù ở cuối từ hay trước phụ âm.'
      },
      contrastExamples: [
        { word: 'car', ukIpa: '/kɑː/', usIpa: '/kɑːr/', note: 'UK r câm; US cuộn r' },
        { word: 'park', ukIpa: '/pɑːk/', usIpa: '/pɑːrk/', note: 'UK r câm; US cuộn r' },
        { word: 'here', ukIpa: '/hɪə/', usIpa: '/hɪr/', note: 'UK trượt ơ; US cuộn r' }
      ]
    };
  }

  if (phonemeSymbol === 't') {
    return {
      hasDifference: true,
      ukIpa: 'Aspirated [tʰ] or glottal stop [ʔ]',
      usIpa: 'Flap T [ɾ] between vowels',
      explanation: {
        en: 'In US English, when /t/ falls between two vowel sounds in unstressed syllables, it flaps into [ɾ] (sounding like soft "d"). In UK RP, it remains crisp [t].',
        vi: 'Trong tiếng Anh Mỹ, âm /t/ nằm giữa 2 nguyên âm không nhận trọng âm sẽ biến thành âm vỗ Flap T [ɾ] nghe như âm "d" nhẹ. Người Anh giữ âm /t/ nảy sắc bén.'
      },
      contrastExamples: [
        { word: 'water', ukIpa: '/ˈwɔːtə/', usIpa: '/ˈwɑːt̬ɚ/', note: 'UK: wó-tờ; US: wá-đờ' },
        { word: 'better', ukIpa: '/ˈbetə/', usIpa: '/ˈbet̬ɚ/', note: 'UK: bé-tờ; US: bé-đờ' },
        { word: 'city', ukIpa: '/ˈsɪti/', usIpa: '/ˈsɪt̬i/', note: 'UK: xí-ti; US: xí-đì' }
      ]
    };
  }

  if (phonemeSymbol === 'əʊ') {
    return {
      hasDifference: true,
      ukIpa: '/əʊ/ (GOAT vowel, starts central)',
      usIpa: '/oʊ/ (starts back rounded)',
      explanation: {
        en: 'UK begins with neutral central /ə/ gliding to /ʊ/. US begins with a back rounded /o/ gliding to /ʊ/.',
        vi: 'UK bắt đầu bằng âm ơ trung tính /ə/ rồi lướt sang /ʊ/ (/əʊ/). US bắt đầu bằng âm ô tròn môi rõ rệt /o/ rồi lướt sang /ʊ/ (/oʊ/).'
      },
      contrastExamples: [
        { word: 'go', ukIpa: '/ɡəʊ/', usIpa: '/ɡoʊ/', note: 'UK bắt đầu bằng ơ; US bắt đầu bằng ô' },
        { word: 'home', ukIpa: '/həʊm/', usIpa: '/hoʊm/', note: 'UK ơ-u; US ô-u' },
        { word: 'boat', ukIpa: '/bəʊt/', usIpa: '/boʊt/', note: 'UK ơ-u; US ô-u' }
      ]
    };
  }

  if (phonemeSymbol === 'ɜː') {
    return {
      hasDifference: true,
      ukIpa: '/ɜː/ (pure long vowel)',
      usIpa: '/ɜːr/ or /ɝ/ (r-colored vowel)',
      explanation: {
        en: 'UK holds /ɜː/ as a steady long vowel without rhoticity. US curls the tongue to produce the rhotic vowel /ɝ/.',
        vi: 'UK phát âm /ɜː/ phẳng lưỡi ngân dài. US cuộn đầu lưỡi về sau tạo thành âm ơ uốn lưỡi /ɝ/.'
      },
      contrastExamples: [
        { word: 'bird', ukIpa: '/bɜːd/', usIpa: '/bɜːrd/', note: 'UK không r; US cuộn r' },
        { word: 'girl', ukIpa: '/ɡɜːl/', usIpa: '/ɡɜːrl/', note: 'UK không r; US cuộn r' },
        { word: 'work', ukIpa: '/wɜːk/', usIpa: '/wɜːrk/', note: 'UK không r; US cuộn r' }
      ]
    };
  }

  if (phonemeSymbol === 'ɪə' || phonemeSymbol === 'eə' || phonemeSymbol === 'ʊə') {
    return {
      hasDifference: true,
      ukIpa: `/${phonemeSymbol}/ (glides to schwa)`,
      usIpa: phonemeSymbol === 'ɪə' ? '/ɪr/' : phonemeSymbol === 'eə' ? '/er/' : '/ʊr/',
      explanation: {
        en: 'UK glides to a neutral schwa. US replaces this glide with a rhotic R sound.',
        vi: 'UK lướt từ nguyên âm chính về âm ơ schwa. US đổi hoàn toàn thành nguyên âm kết hợp âm cuộn lưỡi /r/.'
      },
      contrastExamples: [
        { word: phonemeSymbol === 'ɪə' ? 'hear' : phonemeSymbol === 'eə' ? 'care' : 'pure',
          ukIpa: phonemeSymbol === 'ɪə' ? '/hɪə/' : phonemeSymbol === 'eə' ? '/keə/' : '/pjʊə/',
          usIpa: phonemeSymbol === 'ɪə' ? '/hɪr/' : phonemeSymbol === 'eə' ? '/ker/' : '/pjʊr/',
          note: 'UK lướt về ơ; US cuộn r'
        }
      ]
    };
  }

  return null;
}
