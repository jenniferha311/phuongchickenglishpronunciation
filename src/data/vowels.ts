import { PhonemeData } from '../types';

export const VOWELS_DATA: PhonemeData[] = [
  // 1. /iː/ (Long Vowel - FLEECE)
  {
    id: 'v_i_long',
    symbol: 'iː',
    category: 'vowel',
    subCategory: 'monophthong_long',
    name: { en: 'Long i (FLEECE vowel)', vi: 'Nguyên âm /iː/ dài' },
    voiced: true,
    place: { en: 'Close Front', vi: 'Khép, hàng trước' },
    manner: { en: 'Long monophthong', vi: 'Nguyên âm đơn dài' },
    description: {
      en: 'Lips spread wide in a smile; tongue high and forward near the hard palate. Held longer than short /ɪ/.',
      vi: 'Môi bè rộng như đang cười mỉm; thân lưỡi nâng cao về phía vòm cứng. Ngân dài gấp đôi âm /ɪ/ ngắn.'
    },
    articulationGuide: {
      lips: { en: 'Spread into a tense smile.', vi: 'Môi bè ngang, hơi căng như đang mỉm cười.' },
      tongue: { en: 'Front of tongue raised very high towards roof of mouth.', vi: 'Đầu và thân lưỡi nâng cao sát ngạc cứng.' },
      teeth: { en: 'Very close together, almost touching.', vi: 'Hai hàm răng khép gần nhau.' },
      vocalCords: { en: 'Vibrating continuously (voiced).', vi: 'Dây thanh rung đều và liên tục (hữu thanh).' },
      airflow: { en: 'Smooth, unhindered oral escape.', vi: 'Luồng hơi thoát êm dịu qua khoang miệng.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 4,
      tongueHeight: 'high',
      tongueBackness: 'front',
      lipShape: 'spread',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'sheep', ipa: '/ʃiːp/', position: 'medial', meaning_vi: 'con cừu' },
      { word: 'tea', ipa: '/tiː/', position: 'final', meaning_vi: 'trà' },
      { word: 'east', ipa: '/iːst/', position: 'initial', meaning_vi: 'phía đông' }
    ],
    minimalPairs: [
      {
        wordA: 'sheep', soundA: 'iː', ipaA: '/ʃiːp/', meaningA_vi: 'con cừu',
        wordB: 'ship', soundB: 'ɪ', ipaB: '/ʃɪp/', meaningB_vi: 'con tàu',
        contrastTip: {
          en: '/iː/ is longer and tense with smiling lips; /ɪ/ is short, relaxed, with mouth slightly more open.',
          vi: '/iː/ căng môi bè mỉm cười và ngân dài; /ɪ/ thả lỏng, ngắn và hơi mở nhẹ miệng.'
        }
      },
      {
        wordA: 'seat', soundA: 'iː', ipaA: '/siːt/', meaningA_vi: 'chỗ ngồi',
        wordB: 'sit', soundB: 'ɪ', ipaB: '/sɪt/', meaningB_vi: 'ngồi',
        contrastTip: {
          en: 'Hold "seat" twice as long as "sit".',
          vi: 'Giữ âm "seat" dài gấp đôi và căng cơ hơn "sit".'
        }
      }
    ],
    b1Sentence: {
      text: 'Please keep the green tea warm for three minutes.',
      ipa: '/pliːz kiːp ðə ɡriːn tiː wɔːm fɔː θriː ˈmɪnɪts/',
      translation_vi: 'Xin hãy giữ trà xanh ấm trong vòng ba phút.'
    },
    miniDialogue: {
      speakerA: 'Emma', lineA: 'Would you like some sweet green tea?', lineA_vi: 'Bạn có muốn dùng chút trà xanh ngọt không?',
      speakerB: 'Liam', lineB: 'Yes, please! That would be lovely.', lineB_vi: 'Vâng, làm ơn! Thật là tuyệt vời.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Pronouncing /iː/ too short like Vietnamese "i", confusing "sheet" and "shit" or "leave" and "live".',
        vi: 'Phát âm quá ngắn giống âm "i" tiếng Việt, dễ gây nhầm lẫn nguy hiểm giữa "sheet" và "shit", hay "leave" và "live".'
      },
      howToFix: {
        en: 'Smile actively, tense your cheek muscles, and sustain the long vowel sound clearly.',
        vi: 'Chủ động bè khóe môi sang hai bên, căng nhẹ cơ má và ngân dài rõ ràng âm /iː/.'
      }
    }
  },

  // 2. /ɪ/ (Short Vowel - KIT)
  {
    id: 'v_i_short',
    symbol: 'ɪ',
    category: 'vowel',
    subCategory: 'monophthong_short',
    name: { en: 'Short i (KIT vowel)', vi: 'Nguyên âm /ɪ/ ngắn' },
    voiced: true,
    place: { en: 'Near-close Near-front', vi: 'Nửa khép, nửa trước' },
    manner: { en: 'Short lax monophthong', vi: 'Nguyên âm đơn ngắn, thả lỏng' },
    description: {
      en: 'Relaxed lips; tongue slightly lower and further back than for /iː/. Short, crisp sound.',
      vi: 'Môi thả lỏng tự nhiên; lưỡi hơi hạ thấp và lùi nhẹ so với /iː/. Phát âm dứt khoát và ngắn.'
    },
    articulationGuide: {
      lips: { en: 'Neutral and relaxed, slightly separated.', vi: 'Thả lỏng tự nhiên, hé nhẹ.' },
      tongue: { en: 'Tongue raised towards palate but relaxed, lower than /iː/.', vi: 'Nâng về phía vòm nhưng thả lỏng, thấp hơn /iː/.' },
      teeth: { en: 'Slightly parted.', vi: 'Hai hàm răng hé mở nhẹ.' },
      vocalCords: { en: 'Vibrates briefly.', vi: 'Rung ngắn gọn, dứt khoát.' },
      airflow: { en: 'Quick, uninterrupted release.', vi: 'Bật nhẹ, thoát hơi nhanh.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 5,
      tongueHeight: 'high',
      tongueBackness: 'front',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'kit', ipa: '/kɪt/', position: 'medial', meaning_vi: 'bộ dụng cụ' },
      { word: 'in', ipa: '/ɪn/', position: 'initial', meaning_vi: 'trong, ở trong' },
      { word: 'city', ipa: '/ˈsɪt.i/', position: 'medial', meaning_vi: 'thành phố' }
    ],
    minimalPairs: [
      {
        wordA: 'hit', soundA: 'ɪ', ipaA: '/hɪt/', meaningA_vi: 'đánh, trúng',
        wordB: 'heat', soundB: 'iː', ipaB: '/hiːt/', meaningB_vi: 'sức nóng',
        contrastTip: {
          en: 'Relax your mouth for "hit"; tighten and smile for "heat".',
          vi: 'Thả lỏng cơ miệng cho "hit"; căng môi cười cho "heat".'
        }
      }
    ],
    b1Sentence: {
      text: 'Tim lives in a big city with six fitness clinics.',
      ipa: '/tɪm lɪvz ɪn ə bɪɡ ˈsɪti wɪð sɪks ˈfɪtnəs ˈklɪnɪks/',
      translation_vi: 'Tim sống trong một thành phố lớn với sáu phòng khám thể hình.'
    },
    miniDialogue: {
      speakerA: 'Teacher', lineA: 'Is this your ticket for the city cinema?', lineA_vi: 'Đây có phải vé xem phim thành phố của bạn không?',
      speakerB: 'Student', lineB: 'Yes, it is! Thank you so much.', lineB_vi: 'Vâng, đúng rồi! Cảm ơn thầy rất nhiều.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Making it too tense and sounding like long /iː/, or substituting Vietnamese "ê".',
        vi: 'Kéo quá dài thành /iː/ hoặc đọc thành âm "ê" tiếng Việt.'
      },
      howToFix: {
        en: 'Let your jaw drop just a few millimeters and produce a short, quick burst without smiling.',
        vi: 'Hạ nhẹ hàm dưới vài milimet, không cười bè môi, ngắt âm dứt khoát.'
      }
    }
  },

  // 3. /e/ (Short Vowel - DRESS)
  {
    id: 'v_e',
    symbol: 'e',
    category: 'vowel',
    subCategory: 'monophthong_short',
    name: { en: 'Short e (DRESS vowel)', vi: 'Nguyên âm /e/ ngắn' },
    voiced: true,
    place: { en: 'Mid Front', vi: 'Nửa mở, hàng trước' },
    manner: { en: 'Short monophthong', vi: 'Nguyên âm đơn ngắn' },
    description: {
      en: 'Mouth comfortably open; front of tongue in the middle height of the mouth.',
      vi: 'Miệng mở tự nhiên vừa phải; thân lưỡi ở độ cao trung bình phía trước khoang miệng.'
    },
    articulationGuide: {
      lips: { en: 'Relaxed, loosely spread.', vi: 'Thả lỏng, hé mở vừa phải.' },
      tongue: { en: 'Front of tongue midway between high and low.', vi: 'Thân trước lưỡi nâng ở mức trung bình.' },
      teeth: { en: 'Moderately apart (about one fingertip width).', vi: 'Cách nhau khoảng 1 đầu ngón tay út.' },
      vocalCords: { en: 'Vibrating.', vi: 'Rung dây thanh âm.' },
      airflow: { en: 'Free oral airflow.', vi: 'Hơi thoát tự do qua miệng.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 6,
      tongueHeight: 'mid',
      tongueBackness: 'front',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'bed', ipa: '/bed/', position: 'medial', meaning_vi: 'cái giường' },
      { word: 'egg', ipa: '/eɡ/', position: 'initial', meaning_vi: 'quả trứng' },
      { word: 'friend', ipa: '/frend/', position: 'medial', meaning_vi: 'bạn bè' }
    ],
    minimalPairs: [
      {
        wordA: 'bed', soundA: 'e', ipaA: '/bed/', meaningA_vi: 'giường ngủ',
        wordB: 'bad', soundB: 'æ', ipaB: '/bæd/', meaningB_vi: 'xấu, tồi',
        contrastTip: {
          en: 'For /e/ the mouth is half-open. For /æ/ drop your jaw much wider.',
          vi: 'Với /e/ miệng mở vừa phải. Với /æ/ hạ cằm xuống sâu hơn nhiều.'
        }
      }
    ],
    b1Sentence: {
      text: 'Send ten red pens to the head office immediately.',
      ipa: '/send ten red penz tə ðə hed ˈɒfɪs ɪˈmiːdiətli/',
      translation_vi: 'Gửi mười cây bút đỏ tới trụ sở chính ngay lập tức.'
    },
    miniDialogue: {
      speakerA: 'Ben', lineA: 'Did you get the text message I sent yesterday?', lineA_vi: 'Bạn có nhận được tin nhắn tôi gửi hôm qua không?',
      speakerB: 'Meg', lineB: 'Yes, I read it before going to bed.', lineB_vi: 'Có, tôi đọc trước khi đi ngủ.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Opening the mouth too wide and turning /e/ into /æ/ (bed -> bad), or rounding lips like Vietnamese "ê".',
        vi: 'Mở miệng quá to bị lẫn sang /æ/ (bed thành bad), hoặc khum môi như âm "ê" tiếng Việt.'
      },
      howToFix: {
        en: 'Keep lips unrounded and drop the jaw just enough for a fingertip to fit.',
        vi: 'Giữ môi thẳng không chu, chỉ hạ hàm vừa đủ một khe ngón tay út.'
      }
    }
  },

  // 4. /æ/ (Short Vowel - TRAP)
  {
    id: 'v_ae',
    symbol: 'æ',
    category: 'vowel',
    subCategory: 'monophthong_short',
    name: { en: 'Short a (TRAP vowel / Open front)', vi: 'Nguyên âm /æ/ bẹt' },
    voiced: true,
    place: { en: 'Open Front', vi: 'Mở rộng, hàng trước' },
    manner: { en: 'Short open monophthong', vi: 'Nguyên âm đơn mở rộng' },
    description: {
      en: 'Jaw drops wide open, lips pulled sideways, tongue flat and forward.',
      vi: 'Hạ cằm xuống sâu, mép miệng kéo nhẹ sang hai bên, thân lưỡi dẹt nằm thấp phía trước.'
    },
    articulationGuide: {
      lips: { en: 'Wide open and slightly stretched.', vi: 'Mở rộng và hơi kéo dẹt về hai bên.' },
      tongue: { en: 'Tongue flat in mouth, tip touching back of lower front teeth.', vi: 'Đầu lưỡi chạm mặt trong răng cửa dưới, thân lưỡi hạ thấp.' },
      teeth: { en: 'Wide open (about two finger widths).', vi: 'Mở rộng khoảng hai đầu ngón tay.' },
      vocalCords: { en: 'Vibrating.', vi: 'Dây thanh quản rung.' },
      airflow: { en: 'Generous oral escape.', vi: 'Luồng hơi thoát rộng qua khoang miệng.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 8,
      tongueHeight: 'low',
      tongueBackness: 'front',
      lipShape: 'spread',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'cat', ipa: '/kæt/', position: 'medial', meaning_vi: 'con mèo' },
      { word: 'apple', ipa: '/ˈæpl/', position: 'initial', meaning_vi: 'quả táo' },
      { word: 'bag', ipa: '/bæɡ/', position: 'medial', meaning_vi: 'cái túi' }
    ],
    minimalPairs: [
      {
        wordA: 'man', soundA: 'æ', ipaA: '/mæn/', meaningA_vi: 'người đàn ông',
        wordB: 'men', soundB: 'e', ipaB: '/men/', meaningB_vi: 'những người đàn ông',
        contrastTip: {
          en: '"Man" requires jaw drop; "men" has a much narrower mouth opening.',
          vi: '"Man" bắt buộc phải hạ hàm sâu; "men" miệng hé hẹp hơn.'
        }
      }
    ],
    b1Sentence: {
      text: 'The happy man had a black cat and a travel map.',
      ipa: '/ðə ˈhæpi mæn hæd ə blæk kæt ənd ə ˈtrævl mæp/',
      translation_vi: 'Người đàn ông vui vẻ có một con mèo đen và một bản đồ du lịch.'
    },
    miniDialogue: {
      speakerA: 'Dan', lineA: 'Can I carry that heavy travel bag for you?', lineA_vi: 'Tôi có thể xách giúp bạn chiếc túi du lịch nặng kia không?',
      speakerB: 'Sally', lineB: 'Thanks Dan! That is very kind of you.', lineB_vi: 'Cảm ơn Dan! Bạn thật tốt bụng.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Substituting Vietnamese "e" or "a", failing to lower the jaw enough.',
        vi: 'Đọc nửa vời thành "e" hoặc "a" tiếng Việt do ngại hạ cằm.'
      },
      howToFix: {
        en: 'Actively drop your lower jaw as if visiting the dentist, while keeping the tongue forward.',
        vi: 'Chủ động hạ cằm xuống sâu như khi khám răng, đầu lưỡi chạm chân răng dưới.'
      }
    }
  },

  // 5. /ɑː/ (Long Vowel - PALM / BATH / CAR)
  {
    id: 'v_a_long',
    symbol: 'ɑː',
    category: 'vowel',
    subCategory: 'monophthong_long',
    name: { en: 'Long ah (PALM / BATH / CAR vowel)', vi: 'Nguyên âm /ɑː/ dài' },
    voiced: true,
    place: { en: 'Open Back', vi: 'Mở rộng, hàng sau' },
    manner: { en: 'Long monophthong', vi: 'Nguyên âm đơn dài' },
    description: {
      en: 'Jaw wide open, back of mouth spacious, tongue low and slightly retracted. Classic British sound in "bath", "car", "dance".',
      vi: 'Hạ cằm sâu, khoang họng mở rộng, lưỡi nằm thấp hơi lùi ra sau. Âm đặc trưng Anh-Anh trong "bath", "car", "dance".'
    },
    articulationGuide: {
      lips: { en: 'Neutral to slightly open oval, not rounded.', vi: 'Mở tự nhiên theo hình bầu dục dọc, không chu môi.' },
      tongue: { en: 'Very low and flat in the back of mouth.', vi: 'Nằm rất thấp và phẳng ở phần sau của họng.' },
      teeth: { en: 'Wide open.', vi: 'Hai hàm mở rộng.' },
      vocalCords: { en: 'Vibrating with deep resonance.', vi: 'Rung sâu, tạo độ vang ấm trong họng.' },
      airflow: { en: 'Full, sustained oral release.', vi: 'Luồng hơi ngân dài và thoát tự do.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 8,
      tongueHeight: 'low',
      tongueBackness: 'back',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'car', ipa: '/kɑː/', position: 'final', meaning_vi: 'xe ô tô' },
      { word: 'bath', ipa: '/bɑːθ/', position: 'medial', meaning_vi: 'tắm, bồn tắm' },
      { word: 'art', ipa: '/ɑːt/', position: 'initial', meaning_vi: 'nghệ thuật' }
    ],
    minimalPairs: [
      {
        wordA: 'heart', soundA: 'ɑː', ipaA: '/hɑːt/', meaningA_vi: 'trái tim',
        wordB: 'hat', soundB: 'æ', ipaB: '/hæt/', meaningB_vi: 'cái mũ',
        contrastTip: {
          en: '"Heart" is deep, back and long /ɑː/; "hat" is front and shorter /æ/.',
          vi: '"Heart" vang sâu trong họng và ngân dài; "hat" phát âm ở phía trước miệng và ngắn hơn.'
        }
      }
    ],
    b1Sentence: {
      text: 'We parked our car in the garden after dark.',
      ipa: '/wiː pɑːkt ˈaʊə kɑː ɪn ðə ˈɡɑːdn ˈɑːftə dɑːk/',
      translation_vi: 'Chúng tôi đỗ xe trong vườn sau khi trời tối.'
    },
    miniDialogue: {
      speakerA: 'Arthur', lineA: 'Can we start the art class in the park?', lineA_vi: 'Chúng ta có thể bắt đầu lớp học vẽ ở công viên không?',
      speakerB: 'Martha', lineB: 'That is a fantastic idea, Arthur!', lineB_vi: 'Đó là một ý tưởng tuyệt vời đấy, Arthur!'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Pronouncing the "r" heavily in RP "car" /kɑː/ or confusing it with short /ʌ/ (cup).',
        vi: 'Cố uốn lưỡi âm "r" (trong chuẩn Anh-Anh /kɑː/ không phát âm "r" trừ khi nối âm) hoặc phát âm quá cộc như "a" tiếng Việt.'
      },
      howToFix: {
        en: 'Keep your tongue resting quietly at the bottom of the mouth and sustain the deep "ah" sound.',
        vi: 'Để lưỡi nằm yên ở đáy miệng, mở họng sâu và ngân dài âm "a" ấm áp.'
      }
    }
  },

  // 6. /ɒ/ (Short Vowel - LOT / CLOTH)
  {
    id: 'v_o_short',
    symbol: 'ɒ',
    category: 'vowel',
    subCategory: 'monophthong_short',
    name: { en: 'Short o (LOT vowel)', vi: 'Nguyên âm /ɒ/ ngắn' },
    voiced: true,
    place: { en: 'Open Back Rounded', vi: 'Mở rộng, hàng sau, tròn môi' },
    manner: { en: 'Short monophthong', vi: 'Nguyên âm đơn ngắn' },
    description: {
      en: 'Jaw open, lips slightly rounded, back of tongue low. Very distinct British vowel in "hot", "dog", "box".',
      vi: 'Hạ cằm, môi hơi tròn nhẹ, phần sau lưỡi thấp. Âm cực kỳ đặc trưng của người Anh trong "hot", "dog", "box".'
    },
    articulationGuide: {
      lips: { en: 'Slightly rounded and projected forward.', vi: 'Hơi tròn môi và đưa nhẹ về phía trước.' },
      tongue: { en: 'Low and pulled back in the mouth.', vi: 'Nằm thấp và lùi về phía sau khoang miệng.' },
      teeth: { en: 'Wide open.', vi: 'Mở rộng.' },
      vocalCords: { en: 'Vibrating.', vi: 'Dây thanh rung.' },
      airflow: { en: 'Short oral release.', vi: 'Hơi thoát nhanh, gọn.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 8,
      tongueHeight: 'low',
      tongueBackness: 'back',
      lipShape: 'rounded',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'hot', ipa: '/hɒt/', position: 'medial', meaning_vi: 'nóng' },
      { word: 'box', ipa: '/bɒks/', position: 'medial', meaning_vi: 'cái hộp' },
      { word: 'on', ipa: '/ɒn/', position: 'initial', meaning_vi: 'trên' }
    ],
    minimalPairs: [
      {
        wordA: 'cot', soundA: 'ɒ', ipaA: '/kɒt/', meaningA_vi: 'cái nôi',
        wordB: 'caught', soundB: 'ɔː', ipaB: '/kɔːt/', meaningB_vi: 'đã bắt được',
        contrastTip: {
          en: '/ɒ/ is short and open; /ɔː/ is long with tighter lip rounding.',
          vi: '/ɒ/ ngắn dứt khoát; /ɔː/ ngân dài và môi tròn siết chặt hơn.'
        }
      }
    ],
    b1Sentence: {
      text: 'Tom got a job in a coffee shop across the road.',
      ipa: '/tɒm ɡɒt ə dʒɒb ɪn ə ˈkɒfi ʃɒp əˈkrɒs ðə rəʊd/',
      translation_vi: 'Tom đã có một công việc trong tiệm cà phê đối diện đường.'
    },
    miniDialogue: {
      speakerA: 'Customer', lineA: 'Is the hot coffee ready in the shop?', lineA_vi: 'Cà phê nóng trong tiệm đã sẵn sàng chưa?',
      speakerB: 'Barista', lineB: 'Yes, it is ready on the top counter.', lineB_vi: 'Vâng, đã sẵn sàng trên quầy phía trên rồi ạ.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Confusing with Vietnamese "o" (which is too closed) or American /ɑː/.',
        vi: 'Khép miệng quá nhỏ như âm "o" tiếng Việt hoặc đọc thành "a" theo giọng Mỹ.'
      },
      howToFix: {
        en: 'Drop your jaw fully while gently rounding your lips into a loose circle, and stop cleanly.',
        vi: 'Hạ sâu cằm rồi khum tròn nhẹ môi, ngắt âm gọn gàng không ngân dài.'
      }
    }
  },

  // 7. /ɔː/ (Long Vowel - THOUGHT / NORTH)
  {
    id: 'v_o_long',
    symbol: 'ɔː',
    category: 'vowel',
    subCategory: 'monophthong_long',
    name: { en: 'Long aw (THOUGHT vowel)', vi: 'Nguyên âm /ɔː/ dài' },
    voiced: true,
    place: { en: 'Mid-close Back Rounded', vi: 'Nửa khép, hàng sau, tròn môi' },
    manner: { en: 'Long monophthong', vi: 'Nguyên âm đơn dài' },
    description: {
      en: 'Lips firmly rounded, back of tongue raised to mid height, sound held long and resonant.',
      vi: 'Môi tròn khum rõ rệt, cuống lưỡi nâng lên độ cao trung bình, ngân dài và trầm ấm.'
    },
    articulationGuide: {
      lips: { en: 'Firmly rounded into a moderate circle.', vi: 'Tròn môi rõ rệt, hơi nhô về phía trước.' },
      tongue: { en: 'Back of tongue raised towards soft palate.', vi: 'Cuống lưỡi nâng cao về phía ngạc mềm.' },
      teeth: { en: 'Medium opening.', vi: 'Mở vừa phải.' },
      vocalCords: { en: 'Vibrating continuously.', vi: 'Rung liên tục, tạo độ ngân dài.' },
      airflow: { en: 'Sustained oral flow.', vi: 'Luồng hơi ngân dài đều đặn.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 6,
      tongueHeight: 'mid',
      tongueBackness: 'back',
      lipShape: 'rounded',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'door', ipa: '/dɔː/', position: 'final', meaning_vi: 'cánh cửa' },
      { word: 'horse', ipa: '/hɔːs/', position: 'medial', meaning_vi: 'con ngựa' },
      { word: 'all', ipa: '/ɔːl/', position: 'initial', meaning_vi: 'tất cả' }
    ],
    minimalPairs: [
      {
        wordA: 'sport', soundA: 'ɔː', ipaA: '/spɔːt/', meaningA_vi: 'thể thao',
        wordB: 'spot', soundB: 'ɒ', ipaB: '/spɒt/', meaningB_vi: 'điểm, vết đốm',
        contrastTip: {
          en: '"Sport" has rounded lips and long duration; "spot" is quick and open.',
          vi: '"Sport" môi tròn chặt và ngân dài; "spot" cộc và mở cằm hơn.'
        }
      }
    ],
    b1Sentence: {
      text: 'Paul saw four tall horses walking towards the shore.',
      ipa: '/pɔːl sɔː fɔː tɔːl ˈhɔːsɪz ˈwɔːkɪŋ təˈwɔːdz ðə ʃɔː/',
      translation_vi: 'Paul đã nhìn thấy bốn chú ngựa cao lớn đang đi về phía bờ biển.'
    },
    miniDialogue: {
      speakerA: 'Audrey', lineA: 'Did you open the small door on the fourth floor?', lineA_vi: 'Bạn đã mở cánh cửa nhỏ ở tầng bốn chưa?',
      speakerB: 'George', lineB: 'Yes, I saw it before four o’clock.', lineB_vi: 'Rồi, tôi đã thấy nó trước bốn giờ.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Adding an unneeded "r" sound or pronouncing too short like Vietnamese "o".',
        vi: 'Uốn lưỡi âm "r" không cần thiết trong giọng Anh-Anh, hoặc phát âm quá ngắn.'
      },
      howToFix: {
        en: 'Round your lips tightly and hold the steady long vowel without curling your tongue tip.',
        vi: 'Khum tròn môi và giữ thanh âm ngân dài đều đặn, không uốn cong đầu lưỡi.'
      }
    }
  },

  // 8. /ʊ/ (Short Vowel - FOOT)
  {
    id: 'v_u_short',
    symbol: 'ʊ',
    category: 'vowel',
    subCategory: 'monophthong_short',
    name: { en: 'Short u (FOOT vowel)', vi: 'Nguyên âm /ʊ/ ngắn' },
    voiced: true,
    place: { en: 'Near-close Near-back Rounded', vi: 'Nửa khép, nửa sau, tròn môi nhẹ' },
    manner: { en: 'Short lax monophthong', vi: 'Nguyên âm đơn ngắn, thả lỏng' },
    description: {
      en: 'Lips loosely rounded, tongue relaxed and raised towards back. Short, unstressed feel.',
      vi: 'Môi khum nhẹ tự nhiên, cuống lưỡi nâng nhẹ nhưng cơ miệng thả lỏng. Âm ngắn và nhẹ nhàng.'
    },
    articulationGuide: {
      lips: { en: 'Lightly rounded and relaxed, not pursed tight.', vi: 'Khum tròn nhẹ, thả lỏng, không chúm chặt.' },
      tongue: { en: 'Back of tongue raised moderately, relaxed.', vi: 'Cuống lưỡi nâng vừa phải, thả lỏng.' },
      teeth: { en: 'Slightly apart.', vi: 'Hé mở nhẹ.' },
      vocalCords: { en: 'Vibrating briefly.', vi: 'Dây thanh rung ngắn.' },
      airflow: { en: 'Quick oral release.', vi: 'Hơi thoát nhanh, êm.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 5,
      tongueHeight: 'high',
      tongueBackness: 'back',
      lipShape: 'rounded',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'foot', ipa: '/fʊt/', position: 'medial', meaning_vi: 'bàn chân' },
      { word: 'book', ipa: '/bʊk/', position: 'medial', meaning_vi: 'cuốn sách' },
      { word: 'put', ipa: '/pʊt/', position: 'medial', meaning_vi: 'đặt, để' }
    ],
    minimalPairs: [
      {
        wordA: 'look', soundA: 'ʊ', ipaA: '/lʊk/', meaningA_vi: 'nhìn',
        wordB: 'Luke', soundB: 'uː', ipaB: '/luːk/', meaningB_vi: 'tên người (Luke)',
        contrastTip: {
          en: '"Look" is short and relaxed; "Luke" has tight pursed lips and long duration.',
          vi: '"Look" ngắn và thả lỏng; "Luke" môi chúm chặt và ngân dài.'
        }
      }
    ],
    b1Sentence: {
      text: 'She took a good look at the wooden cookbook.',
      ipa: '/ʃiː tʊk ə ɡʊd lʊk ət ðə ˈwʊdn ˈkʊkbʊk/',
      translation_vi: 'Cô ấy đã xem kỹ cuốn sách dạy nấu ăn bằng gỗ.'
    },
    miniDialogue: {
      speakerA: 'Cook', lineA: 'Could you put some sugar into the pudding?', lineA_vi: 'Bạn có thể cho chút đường vào bánh pudding không?',
      speakerB: 'Friend', lineB: 'I should look at the recipe book first.', lineB_vi: 'Tôi nên xem cuốn sách công thức trước đã.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Pronouncing like Vietnamese "u" (pursing lips too tightly and making it too long).',
        vi: 'Đọc thành âm "u" tiếng Việt (chúm môi quá chặt và kéo dài thành âm dài).'
      },
      howToFix: {
        en: 'Relax your lips; imagine a sound between "u" and "ơ", keep it short and release quickly.',
        vi: 'Thả lỏng khóe môi, âm thanh như lai giữa "u" và "ơ", phát âm ngắn và ngắt nhanh dứt khoát.'
      }
    }
  },

  // 9. /uː/ (Long Vowel - GOOSE)
  {
    id: 'v_u_long',
    symbol: 'uː',
    category: 'vowel',
    subCategory: 'monophthong_long',
    name: { en: 'Long oo (GOOSE vowel)', vi: 'Nguyên âm /uː/ dài' },
    voiced: true,
    place: { en: 'Close Back Rounded', vi: 'Khép, hàng sau, tròn môi' },
    manner: { en: 'Long monophthong', vi: 'Nguyên âm đơn dài' },
    description: {
      en: 'Lips tightly pursed into a small circle, back of tongue high near soft palate. Held long.',
      vi: 'Môi chúm tròn chặt thành vòng tròn nhỏ nhô ra trước, cuống lưỡi nâng cao sát ngạc mềm. Ngân dài.'
    },
    articulationGuide: {
      lips: { en: 'Tightly pursed and pushed forward.', vi: 'Chúm tròn chặt và đưa ra phía trước như đang huýt sáo.' },
      tongue: { en: 'Back of tongue raised very high.', vi: 'Cuống lưỡi nâng rất cao sát vòm ngạc mềm.' },
      teeth: { en: 'Close together.', vi: 'Hai hàm khép gần nhau.' },
      vocalCords: { en: 'Vibrating continuously.', vi: 'Rung dây thanh đều đặn.' },
      airflow: { en: 'Focused, narrow oral release.', vi: 'Luồng hơi hẹp, ngân dài tập trung.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 4,
      tongueHeight: 'high',
      tongueBackness: 'back',
      lipShape: 'rounded',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'goose', ipa: '/ɡuːs/', position: 'medial', meaning_vi: 'con ngỗng' },
      { word: 'blue', ipa: '/bluː/', position: 'final', meaning_vi: 'màu xanh lam' },
      { word: 'food', ipa: '/fuːd/', position: 'medial', meaning_vi: 'thức ăn' }
    ],
    minimalPairs: [
      {
        wordA: 'pool', soundA: 'uː', ipaA: '/puːl/', meaningA_vi: 'hồ bơi',
        wordB: 'pull', soundB: 'ʊ', ipaB: '/pʊl/', meaningB_vi: 'kéo',
        contrastTip: {
          en: '"Pool" is long with tight lips; "pull" is short and relaxed.',
          vi: '"Pool" ngân dài với môi chúm tròn; "pull" ngắn và thả lỏng.'
        }
      }
    ],
    b1Sentence: {
      text: 'Sue wore new blue boots to school at noon.',
      ipa: '/suː wɔː njuː bluː buːts tə skuːl ət nuːn/',
      translation_vi: 'Sue đã đi đôi bốt màu xanh lam mới đến trường vào buổi trưa.'
    },
    miniDialogue: {
      speakerA: 'Lucy', lineA: 'Do you want fruit juice or cool water?', lineA_vi: 'Bạn muốn uống nước ép hoa quả hay nước mát?',
      speakerB: 'Luke', lineB: 'Cool fruit juice would be super, thank you!', lineB_vi: 'Nước hoa quả mát sẽ tuyệt lắm, cảm ơn bạn!'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Not rounding the lips enough or cutting the sound too short.',
        vi: 'Không chu môi đủ độ hoặc ngắt âm quá sớm.'
      },
      howToFix: {
        en: 'Form a tiny circle with your lips like preparing to whistle, and sustain the sound steadily.',
        vi: 'Tạo một vòng tròn nhỏ ở môi như sắp huýt sáo và ngân dài thanh âm.'
      }
    }
  },

  // 10. /ʌ/ (Short Vowel - STRUT)
  {
    id: 'v_wedge',
    symbol: 'ʌ',
    category: 'vowel',
    subCategory: 'monophthong_short',
    name: { en: 'Short u (STRUT vowel / Wedge)', vi: 'Nguyên âm /ʌ/ ngắn (á)' },
    voiced: true,
    place: { en: 'Open-mid Back/Central', vi: 'Nửa mở, hàng sau/trung tâm' },
    manner: { en: 'Short monophthong', vi: 'Nguyên âm đơn ngắn' },
    description: {
      en: 'Jaw moderately open, lips neutral and relaxed, tongue centered and low. Crisp, short sound.',
      vi: 'Hàm mở vừa phải, môi thả lỏng tự nhiên, thân lưỡi ở giữa và hơi thấp. Âm bật ngắn và dứt khoát.'
    },
    articulationGuide: {
      lips: { en: 'Relaxed and neutral, unrounded.', vi: 'Thả lỏng tự nhiên, không tròn môi.' },
      tongue: { en: 'Central and low-mid in the mouth.', vi: 'Ở trung tâm khoang miệng, độ cao trung bình thấp.' },
      teeth: { en: 'Parted moderately.', vi: 'Hé mở vừa phải.' },
      vocalCords: { en: 'Vibrating briefly.', vi: 'Rung ngắn gọn.' },
      airflow: { en: 'Quick, centered oral escape.', vi: 'Hơi thoát nhanh qua giữa miệng.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 7,
      tongueHeight: 'mid',
      tongueBackness: 'central',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'cup', ipa: '/kʌp/', position: 'medial', meaning_vi: 'cái tách, cốc' },
      { word: 'love', ipa: '/lʌv/', position: 'medial', meaning_vi: 'yêu thương' },
      { word: 'up', ipa: '/ʌp/', position: 'initial', meaning_vi: 'lên trên' }
    ],
    minimalPairs: [
      {
        wordA: 'cup', soundA: 'ʌ', ipaA: '/kʌp/', meaningA_vi: 'cái cốc',
        wordB: 'cap', soundB: 'æ', ipaB: '/kæp/', meaningB_vi: 'mũ lưỡi trai',
        contrastTip: {
          en: 'For "cap" /æ/ jaw drops wide; for "cup" /ʌ/ jaw is only half-open.',
          vi: 'Với "cap" /æ/ cằm hạ sâu; với "cup" /ʌ/ hàm chỉ mở vừa phải.'
        }
      },
      {
        wordA: 'cut', soundA: 'ʌ', ipaA: '/kʌt/', meaningA_vi: 'cắt',
        wordB: 'cat', soundB: 'æ', ipaB: '/kæt/', meaningB_vi: 'con mèo',
        contrastTip: {
          en: 'Contrast central /ʌ/ with open front /æ/.',
          vi: 'Đối chiếu âm /ʌ/ ở trung tâm với âm /æ/ bè miệng hạ cằm.'
        }
      }
    ],
    b1Sentence: {
      text: 'My brother won the running cup on a sunny Monday.',
      ipa: '/maɪ ˈbrʌðə wʌn ðə ˈrʌnɪŋ kʌp ɒn ə ˈsʌni ˈmʌndeɪ/',
      translation_vi: 'Anh trai tôi đã giành chiếc cúp chạy bộ vào một ngày thứ Hai nắng đẹp.'
    },
    miniDialogue: {
      speakerA: 'Gus', lineA: 'Hurry up! The bus has arrived in front of us.', lineA_vi: 'Nhanh lên! Xe buýt đã đến ngay trước mặt chúng ta rồi.',
      speakerB: 'Buddy', lineB: 'Coming! What wonderful good luck.', lineB_vi: 'Tôi đến đây! Thật là may mắn quá.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Pronouncing it like Vietnamese "ă" (too nasal/hard) or "ơ".',
        vi: 'Phát âm cứng như "ă" hoặc bị kéo thành "ơ" tiếng Việt.'
      },
      howToFix: {
        en: 'Relax your throat completely and let out a quick, easy sigh sound.',
        vi: 'Thả lỏng vòm họng hoàn toàn, bật âm như tiếng thở hắt nhẹ nhàng và ngắn.'
      }
    }
  },

  // 11. /ɜː/ (Long Vowel - NURSE)
  {
    id: 'v_er_long',
    symbol: 'ɜː',
    category: 'vowel',
    subCategory: 'monophthong_long',
    name: { en: 'Long er (NURSE vowel)', vi: 'Nguyên âm /ɜː/ dài (ơ dài)' },
    voiced: true,
    place: { en: 'Mid Central', vi: 'Trung tâm, nửa mở' },
    manner: { en: 'Long monophthong', vi: 'Nguyên âm đơn dài' },
    description: {
      en: 'Lips neutral, tongue flat in the middle of mouth, sound held long and smooth. British non-rhotic (no "r" curl).',
      vi: 'Môi thả lỏng tự nhiên, thân lưỡi đặt bằng phẳng ở giữa miệng, ngân dài êm dịu. Chuẩn Anh-Anh không uốn cong lưỡi.'
    },
    articulationGuide: {
      lips: { en: 'Neutral and relaxed.', vi: 'Thả lỏng tự nhiên.' },
      tongue: { en: 'Centered, midway between high and low, completely relaxed.', vi: 'Nằm ở trung tâm khoang miệng, phẳng và thả lỏng.' },
      teeth: { en: 'Slightly apart.', vi: 'Hé mở vừa phải.' },
      vocalCords: { en: 'Vibrating continuously with steady tone.', vi: 'Rung đều đặn và ngân dài.' },
      airflow: { en: 'Sustained, smooth oral flow.', vi: 'Luồng hơi thoát êm đềm.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 6,
      tongueHeight: 'mid',
      tongueBackness: 'central',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'bird', ipa: '/bɜːd/', position: 'medial', meaning_vi: 'con chim' },
      { word: 'learn', ipa: '/lɜːn/', position: 'medial', meaning_vi: 'học tập' },
      { word: 'her', ipa: '/hɜː/', position: 'final', meaning_vi: 'cô ấy, của cô ấy' }
    ],
    minimalPairs: [
      {
        wordA: 'bird', soundA: 'ɜː', ipaA: '/bɜːd/', meaningA_vi: 'con chim',
        wordB: 'bed', soundB: 'e', ipaB: '/bed/', meaningB_vi: 'chiếc giường',
        contrastTip: {
          en: '"Bird" /ɜː/ is long and central; "bed" /e/ is short and front.',
          vi: '"Bird" ngân dài ở giữa họng; "bed" ngắn và phát âm phía trước miệng.'
        }
      }
    ],
    b1Sentence: {
      text: 'The girl learned thirty German words on Thursday.',
      ipa: '/ðə ɡɜːl lɜːnd ˈθɜːti ˈdʒɜːmən wɜːdz ɒn ˈθɜːzdeɪ/',
      translation_vi: 'Cô gái đã học ba mươi từ tiếng Đức vào thứ Năm.'
    },
    miniDialogue: {
      speakerA: 'Teacher', lineA: 'Have you heard the early bird sing?', lineA_vi: 'Em đã nghe thấy chú chim sớm mai ca hát chưa?',
      speakerB: 'Student', lineB: 'Yes, it was the first thing I heard today.', lineB_vi: 'Dạ rồi, đó là điều đầu tiên em nghe thấy hôm nay.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Curling the tongue back into American "r" (/ɝ/) or reading it too short like Vietnamese "ơ".',
        vi: 'Uốn lưỡi tạo âm "r" kiểu Mỹ hoặc đọc cộc lốc như âm "ơ" tiếng Việt.'
      },
      howToFix: {
        en: 'Keep your tongue completely flat and motionless, and hold the steady long vowel sound.',
        vi: 'Giữ đầu lưỡi nằm yên phẳng tuyệt đối, không uốn cong và ngân dài đều đặn.'
      }
    }
  },

  // 12. /ə/ (Short Vowel - SCHWA)
  {
    id: 'v_schwa',
    symbol: 'ə',
    category: 'vowel',
    subCategory: 'monophthong_short',
    name: { en: 'Schwa (ABOUT vowel / Weak vowel)', vi: 'Nguyên âm lướt Schwa /ə/' },
    voiced: true,
    place: { en: 'Mid Central Unstressed', vi: 'Trung tâm, không trọng âm' },
    manner: { en: 'Weak central monophthong', vi: 'Nguyên âm yếu, ngắn nhất' },
    description: {
      en: 'The most frequent vowel in British English! Completely effortless, relaxed, and unstressed.',
      vi: 'Nguyên âm phổ biến nhất trong tiếng Anh Anh! Cực kỳ nhẹ nhàng, thư giãn hoàn toàn và không mang trọng âm.'
    },
    articulationGuide: {
      lips: { en: 'Completely relaxed and neutral.', vi: 'Thả lỏng tuyệt đối, không cử động.' },
      tongue: { en: 'Resting flat in the neutral center of mouth.', vi: 'Nằm nghỉ tự nhiên ở chính giữa khoang miệng.' },
      teeth: { en: 'Barely parted.', vi: 'Hé mở rất nhẹ.' },
      vocalCords: { en: 'Vibrates very briefly and weakly.', vi: 'Rung rất khẽ và ngắn.' },
      airflow: { en: 'Soft, effortless breath.', vi: 'Hơi phả ra nhẹ nhàng không tốn sức.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 6,
      tongueHeight: 'mid',
      tongueBackness: 'central',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'about', ipa: '/əˈbaʊt/', position: 'initial', meaning_vi: 'về, khoảng' },
      { word: 'teacher', ipa: '/ˈtiːtʃə/', position: 'final', meaning_vi: 'giáo viên' },
      { word: 'banana', ipa: '/bəˈnɑːnə/', position: 'initial', meaning_vi: 'quả chuối' }
    ],
    minimalPairs: [
      {
        wordA: 'sofa', soundA: 'ə', ipaA: '/ˈsəʊfə/', meaningA_vi: 'ghế sofa',
        wordB: 'so far', soundB: 'ɑː', ipaB: '/səʊ fɑː/', meaningB_vi: 'cho đến nay',
        contrastTip: {
          en: 'Unstressed /ə/ at the end of "sofa" is feather-light; /ɑː/ in "far" is loud and long.',
          vi: 'Âm /ə/ cuối từ "sofa" nhẹ như lông hồng; âm /ɑː/ trong "far" to và ngân dài.'
        }
      }
    ],
    b1Sentence: {
      text: 'A famous actor had an adventure in a modern cinema.',
      ipa: '/ə ˈfeɪməs ˈæktə hæd ən ədˈventʃər ɪn ə ˈmɒdn ˈsɪnəmə/',
      translation_vi: 'Một diễn viên nổi tiếng đã có một cuộc phiêu lưu trong rạp chiếu phim hiện đại.'
    },
    miniDialogue: {
      speakerA: 'Tourist', lineA: 'Can you tell me about a good local doctor?', lineA_vi: 'Bạn có thể cho tôi biết về một bác sĩ giỏi ở địa phương không?',
      speakerB: 'Local', lineB: 'There is a wonderful doctor at the corner.', lineB_vi: 'Có một bác sĩ tuyệt vời ở ngay góc đường.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Stressing the schwa or pronouncing according to spelling (e.g. pronouncing "doctor" as /dɒktɔː/).',
        vi: 'Nhấn mạnh vào âm schwa hoặc đọc theo mặt chữ (ví dụ đọc "doctor" thành "đốc-tơ" nặng nề).'
      },
      howToFix: {
        en: 'Say it so fast and softly that it almost disappears—let the stressed syllables shine.',
        vi: 'Lướt qua thật nhanh và nhẹ như thể âm sắp biến mất, dồn sức vào âm mang trọng âm.'
      }
    }
  },

  // 13. /ɪə/ (Diphthong - NEAR)
  {
    id: 'd_ia',
    symbol: 'ɪə',
    category: 'vowel',
    subCategory: 'diphthong',
    name: { en: 'Centring diphthong (NEAR vowel)', vi: 'Nguyên âm đôi /ɪə/' },
    voiced: true,
    place: { en: 'Front to Central', vi: 'Từ trước về trung tâm' },
    manner: { en: 'Centring diphthong', vi: 'Nguyên âm đôi hướng tâm' },
    description: {
      en: 'Glides smoothly from short /ɪ/ towards the neutral schwa /ə/. Common British sound in "here", "clear", "beer".',
      vi: 'Lướt mượt mà từ âm /ɪ/ ngắn về âm schwa /ə/ trung tâm. Rất phổ biến trong giọng Anh ở "here", "clear", "beer".'
    },
    articulationGuide: {
      lips: { en: 'Starts slightly spread, relaxes to neutral.', vi: 'Bắt đầu hơi bè nhẹ rồi thả lỏng về tự nhiên.' },
      tongue: { en: 'Glides from high front /ɪ/ to mid central /ə/.', vi: 'Lướt từ thân lưỡi cao phía trước /ɪ/ về trung tâm /ə/.' },
      teeth: { en: 'Opens slightly during the glide.', vi: 'Hơi mở nhẹ dần trong lúc lướt âm.' },
      vocalCords: { en: 'Vibrating throughout the glide.', vi: 'Rung liên tục trong suốt quá trình lướt âm.' },
      airflow: { en: 'Smooth unbroken oral flow.', vi: 'Luồng hơi lướt liền mạch không ngắt quãng.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 5,
      tongueHeight: 'high',
      tongueBackness: 'front',
      lipShape: 'spread',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'near', ipa: '/nɪə/', position: 'final', meaning_vi: 'gần' },
      { word: 'here', ipa: '/hɪə/', position: 'final', meaning_vi: 'ở đây' },
      { word: 'clear', ipa: '/klɪə/', position: 'final', meaning_vi: 'rõ ràng' }
    ],
    minimalPairs: [
      {
        wordA: 'beer', soundA: 'ɪə', ipaA: '/bɪə/', meaningA_vi: 'bia',
        wordB: 'bear', soundB: 'eə', ipaB: '/beə/', meaningB_vi: 'con gấu',
        contrastTip: {
          en: '"Beer" begins with close /ɪ/; "bear" begins with more open /e/.',
          vi: '"Beer" mở đầu bằng âm /ɪ/ khép miệng hơn; "bear" mở đầu bằng âm /e/ rộng hơn.'
        }
      }
    ],
    b1Sentence: {
      text: 'We can hear the cheers very clearly from here.',
      ipa: '/wiː kən hɪə ðə tʃɪəz ˈveri ˈklɪəli frəm hɪə/',
      translation_vi: 'Chúng tôi có thể nghe thấy tiếng reo hò rất rõ ràng từ đây.'
    },
    miniDialogue: {
      speakerA: 'Mia', lineA: 'Is the theatre near here?', lineA_vi: 'Nhà hát có ở gần đây không?',
      speakerB: 'Leo', lineB: 'Yes, it is very near, dear friend!', lineB_vi: 'Có chứ, ở rất gần đây thôi bạn ơi!'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Pronouncing as two separate disjointed vowels or adding an American "r".',
        vi: 'Đọc thành hai âm rời rạc "i-ơ" hoặc uốn lưỡi "r" kiểu Mỹ.'
      },
      howToFix: {
        en: 'Connect the glide into one continuous movement, emphasizing the first part.',
        vi: 'Nối hai âm thành một dòng chảy liên tục, nhấn 70% vào phần đầu rồi lướt nhẹ.'
      }
    }
  },

  // 14. /eə/ (Diphthong - SQUARE)
  {
    id: 'd_ea',
    symbol: 'eə',
    category: 'vowel',
    subCategory: 'diphthong',
    name: { en: 'Centring diphthong (SQUARE vowel)', vi: 'Nguyên âm đôi /eə/' },
    voiced: true,
    place: { en: 'Mid-front to Central', vi: 'Từ nửa mở trước về trung tâm' },
    manner: { en: 'Centring diphthong', vi: 'Nguyên âm đôi hướng tâm' },
    description: {
      en: 'Starts at /e/ and glides smoothly into /ə/. Heard in "square", "chair", "care" in British RP.',
      vi: 'Bắt đầu từ âm /e/ mở vừa phải rồi lướt về /ə/. Xuất hiện trong "square", "chair", "care" chuẩn Anh-Anh.'
    },
    articulationGuide: {
      lips: { en: 'Slightly open and relaxed.', vi: 'Hé mở vừa phải và thả lỏng.' },
      tongue: { en: 'Slides from front /e/ position back towards neutral center /ə/.', vi: 'Trượt từ vị trí /e/ phía trước về trung tâm /ə/.' },
      teeth: { en: 'Comfortably apart.', vi: 'Cách nhau thoải mái.' },
      vocalCords: { en: 'Vibrating continuously.', vi: 'Dây thanh rung đều.' },
      airflow: { en: 'Continuous oral release.', vi: 'Luồng hơi liên tục.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 6,
      tongueHeight: 'mid',
      tongueBackness: 'front',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'hair', ipa: '/heə/', position: 'final', meaning_vi: 'mái tóc' },
      { word: 'chair', ipa: '/tʃeə/', position: 'final', meaning_vi: 'cái ghế' },
      { word: 'square', ipa: '/skweə/', position: 'final', meaning_vi: 'quảng trường, hình vuông' }
    ],
    minimalPairs: [
      {
        wordA: 'stare', soundA: 'eə', ipaA: '/steə/', meaningA_vi: 'nhìn chằm chằm',
        wordB: 'steer', soundB: 'ɪə', ipaB: '/stɪə/', meaningB_vi: 'lái xe',
        contrastTip: {
          en: '"Stare" begins with open /e/; "steer" begins with close /ɪ/.',
          vi: '"Stare" bắt đầu bằng âm mở miệng /e/; "steer" bắt đầu bằng âm khép miệng /ɪ/.'
        }
      }
    ],
    b1Sentence: {
      text: 'Claire sat on a wooden chair with fair hair.',
      ipa: '/kleə sæt ɒn ə ˈwʊdn tʃeə wɪð feə heə/',
      translation_vi: 'Claire ngồi trên một chiếc ghế gỗ với mái tóc sáng màu.'
    },
    miniDialogue: {
      speakerA: 'Dan', lineA: 'Where is the spare chair for the guest?', lineA_vi: 'Chiếc ghế dự phòng cho khách ở đâu?',
      speakerB: 'Claire', lineB: 'It is over there, near the square table.', lineB_vi: 'Ở đằng kia, cạnh chiếc bàn vuông đấy.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Pronouncing as Vietnamese "e" alone or curling the tongue with an "r".',
        vi: 'Đọc cộc lốc thành âm "e" đơn lẻ hoặc uốn cong lưỡi gằn giọng.'
      },
      howToFix: {
        en: 'Start with /e/ and gently relax into a tiny breath of schwa /ə/.',
        vi: 'Bắt đầu bằng /e/ rồi thả lỏng lướt nhẹ sang âm schwa /ə/.'
      }
    }
  },

  // 15. /ʊə/ (Diphthong - CURE)
  {
    id: 'd_ua',
    symbol: 'ʊə',
    category: 'vowel',
    subCategory: 'diphthong',
    name: { en: 'Centring diphthong (CURE vowel)', vi: 'Nguyên âm đôi /ʊə/' },
    voiced: true,
    place: { en: 'Near-back to Central', vi: 'Từ sau về trung tâm' },
    manner: { en: 'Centring diphthong', vi: 'Nguyên âm đôi hướng tâm' },
    description: {
      en: 'Starts with loosely rounded /ʊ/ and glides towards schwa /ə/. Found in "tour", "pure", "cure".',
      vi: 'Bắt đầu từ âm /ʊ/ khum nhẹ rồi lướt về /ə/. Gặp trong "tour", "pure", "cure".'
    },
    articulationGuide: {
      lips: { en: 'Starts lightly rounded, uncurls to neutral.', vi: 'Bắt đầu hơi tròn rồi mở dần về tự nhiên.' },
      tongue: { en: 'Glides from high-back towards mid-center.', vi: 'Lướt từ vị trí cao phía sau về giữa miệng.' },
      teeth: { en: 'Parted moderately.', vi: 'Hé mở vừa phải.' },
      vocalCords: { en: 'Vibrating.', vi: 'Dây thanh quản rung.' },
      airflow: { en: 'Smooth glide.', vi: 'Luồng hơi lướt êm.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 5,
      tongueHeight: 'high',
      tongueBackness: 'back',
      lipShape: 'rounded',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'tour', ipa: '/tʊə/', position: 'final', meaning_vi: 'chuyến du lịch' },
      { word: 'pure', ipa: '/pjʊə/', position: 'final', meaning_vi: 'tinh khiết' },
      { word: 'cure', ipa: '/kjʊə/', position: 'final', meaning_vi: 'chữa trị' }
    ],
    minimalPairs: [
      {
        wordA: 'poor', soundA: 'ʊə', ipaA: '/pʊə/', meaningA_vi: 'nghèo',
        wordB: 'paw', soundB: 'ɔː', ipaB: '/pɔː/', meaningB_vi: 'chân thú',
        contrastTip: {
          en: 'Traditional British RP distinguishes /ʊə/ glide from monophthong /ɔː/.',
          vi: 'Chuẩn Anh truyền thống phân biệt âm lướt /ʊə/ với nguyên âm đơn /ɔː/.'
        }
      }
    ],
    b1Sentence: {
      text: 'The tourist took a tour to see the pure nature.',
      ipa: '/ðə ˈtʊərɪst tʊk ə tʊə tə siː ðə pjʊə ˈneɪtʃə/',
      translation_vi: 'Vị khách du lịch đã tham gia một chuyến đi để chiêm ngưỡng thiên nhiên thuần khiết.'
    },
    miniDialogue: {
      speakerA: 'Guide', lineA: 'Are you sure about joining the European tour?', lineA_vi: 'Bạn có chắc chắn muốn tham gia tour châu Âu không?',
      speakerB: 'Traveler', lineB: 'Yes, I am quite sure!', lineB_vi: 'Có chứ, tôi hoàn toàn chắc chắn!'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Pronouncing like "ua" in Vietnamese (too tight) or merging completely with /ɔː/.',
        vi: 'Đọc cứng như "ua" tiếng Việt hoặc bị biến hoàn toàn thành /ɔː/.'
      },
      howToFix: {
        en: 'Round lips gently for /ʊ/, then immediately ease into soft /ə/.',
        vi: 'Khum môi nhẹ cho /ʊ/, rồi thả lỏng miệng ngay sang âm /ə/ nhẹ nhàng.'
      }
    }
  },

  // 16. /eɪ/ (Diphthong - FACE)
  {
    id: 'd_ei',
    symbol: 'eɪ',
    category: 'vowel',
    subCategory: 'diphthong',
    name: { en: 'Closing diphthong (FACE vowel)', vi: 'Nguyên âm đôi /eɪ/' },
    voiced: true,
    place: { en: 'Front closing', vi: 'Khép dần về phía trước' },
    manner: { en: 'Closing diphthong to /ɪ/', vi: 'Nguyên âm đôi hướng về /ɪ/' },
    description: {
      en: 'Starts at /e/ and moves upwards towards /ɪ/ with lips spreading into a smile. Classic sound in "day", "make", "face".',
      vi: 'Bắt đầu từ âm /e/ rồi khép dần lên âm /ɪ/ với nụ cười hé mở. Âm quen thuộc trong "day", "make", "face".'
    },
    articulationGuide: {
      lips: { en: 'Starts neutral, spreads into a gentle smile.', vi: 'Bắt đầu tự nhiên rồi kéo bè khóe môi mỉm cười.' },
      tongue: { en: 'Front of tongue moves from mid position upwards towards high.', vi: 'Thân trước lưỡi nâng dần từ độ cao trung bình lên cao.' },
      teeth: { en: 'Closes slightly during the glide.', vi: 'Hai hàm khép gần nhau dần.' },
      vocalCords: { en: 'Vibrating.', vi: 'Rung dây thanh.' },
      airflow: { en: 'Smooth oral escape.', vi: 'Luồng hơi thoát êm.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 6,
      tongueHeight: 'mid',
      tongueBackness: 'front',
      lipShape: 'spread',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'face', ipa: '/feɪs/', position: 'medial', meaning_vi: 'khuôn mặt' },
      { word: 'day', ipa: '/deɪ/', position: 'final', meaning_vi: 'ngày' },
      { word: 'eight', ipa: '/eɪt/', position: 'initial', meaning_vi: 'số tám' }
    ],
    minimalPairs: [
      {
        wordA: 'late', soundA: 'eɪ', ipaA: '/leɪt/', meaningA_vi: 'muộn, trễ',
        wordB: 'let', soundB: 'e', ipaB: '/let/', meaningB_vi: 'để cho, cho phép',
        contrastTip: {
          en: '"Late" has a moving glide /eɪ/; "let" is static and short /e/.',
          vi: '"Late" có độ lướt chuyển động; "let" là âm đơn tĩnh và ngắn.'
        }
      }
    ],
    b1Sentence: {
      text: 'They came by train on a rainy day in May.',
      ipa: '/ðeɪ keɪm baɪ treɪn ɒn ə ˈreɪni deɪ ɪn meɪ/',
      translation_vi: 'Họ đã đến bằng tàu hỏa vào một ngày mưa trong tháng Năm.'
    },
    miniDialogue: {
      speakerA: 'Dave', lineA: 'Will you bake a cake for Jane today?', lineA_vi: 'Hôm nay bạn sẽ nướng bánh cho Jane chứ?',
      speakerB: 'Kate', lineB: 'Yes, I will make a great cake later.', lineB_vi: 'Vâng, lát nữa tôi sẽ làm một chiếc bánh tuyệt vời.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Pronouncing it like Vietnamese "ê" (pure monophthong without the glide to /ɪ/).',
        vi: 'Đọc cứng ngắc thành âm "ê" tiếng Việt mà không lướt cằm lên /ɪ/.'
      },
      howToFix: {
        en: 'Feel your jaw closing slightly and your lips forming a gentle smile at the end of the sound.',
        vi: 'Cảm nhận hàm dưới nâng nhẹ khép lại và môi mỉm cười nhẹ ở đuôi âm.'
      }
    }
  },

  // 17. /aɪ/ (Diphthong - PRICE)
  {
    id: 'd_ai',
    symbol: 'aɪ',
    category: 'vowel',
    subCategory: 'diphthong',
    name: { en: 'Closing diphthong (PRICE vowel)', vi: 'Nguyên âm đôi /aɪ/' },
    voiced: true,
    place: { en: 'Open to Front-close', vi: 'Từ mở rộng đến khép trước' },
    manner: { en: 'Closing diphthong to /ɪ/', vi: 'Nguyên âm đôi hướng về /ɪ/' },
    description: {
      en: 'Begins with an open jaw on /a/ and glides smoothly up into /ɪ/. Found in "time", "sky", "light".',
      vi: 'Bắt đầu với hàm mở rộng /a/ rồi lướt mượt mà khép lên /ɪ/. Gặp trong "time", "sky", "light".'
    },
    articulationGuide: {
      lips: { en: 'Wide open at start, closes to spread smile.', vi: 'Mở rộng lúc đầu, khép dần và mỉm cười về cuối.' },
      tongue: { en: 'Starts low and flat, then raises high towards front.', vi: 'Bắt đầu thấp phẳng rồi nâng cao dần về phía trước.' },
      teeth: { en: 'Moves from wide apart to close together.', vi: 'Từ mở rộng chuyển sang khép gần.' },
      vocalCords: { en: 'Vibrating.', vi: 'Rung dây thanh.' },
      airflow: { en: 'Generous smooth glide.', vi: 'Luồng hơi ngân dài lướt mượt.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 8,
      tongueHeight: 'low',
      tongueBackness: 'central',
      lipShape: 'spread',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'time', ipa: '/taɪm/', position: 'medial', meaning_vi: 'thời gian' },
      { word: 'sky', ipa: '/skaɪ/', position: 'final', meaning_vi: 'bầu trời' },
      { word: 'ice', ipa: '/aɪs/', position: 'initial', meaning_vi: 'nước đá, băng' }
    ],
    minimalPairs: [
      {
        wordA: 'bite', soundA: 'aɪ', ipaA: '/baɪt/', meaningA_vi: 'cắn',
        wordB: 'bait', soundB: 'eɪ', ipaB: '/beɪt/', meaningB_vi: 'mồi câu',
        contrastTip: {
          en: '"Bite" drops the jaw much lower than "bait".',
          vi: '"Bite" hạ cằm mở miệng sâu hơn hẳn so với "bait".'
        }
      }
    ],
    b1Sentence: {
      text: 'Mike likes to ride his bike under the bright night sky.',
      ipa: '/maɪk laɪks tə raɪd hɪz baɪk ˈʌndə ðə braɪt naɪt skaɪ/',
      translation_vi: 'Mike thích đạp xe đạp dưới bầu trời đêm sáng rực rỡ.'
    },
    miniDialogue: {
      speakerA: 'Clive', lineA: 'Why did you buy five white shirts?', lineA_vi: 'Tại sao bạn lại mua năm chiếc áo sơ mi trắng?',
      speakerB: 'Irene', lineB: 'I like white shirts, they look quite nice!', lineB_vi: 'Tôi thích áo trắng, trông chúng rất đẹp!'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Stopping halfway or making the glide too abrupt like Vietnamese "ai".',
        vi: 'Ngắt âm quá vội vàng như âm "ai" tiếng Việt mà quên phần đuôi /ɪ/.'
      },
      howToFix: {
        en: 'Open wide on the first element, then complete the glide smoothly up to /ɪ/.',
        vi: 'Mở rộng hàm ở âm đầu, rồi lướt mượt mà khép dần lên âm /ɪ/.'
      }
    }
  },

  // 18. /ɔɪ/ (Diphthong - CHOICE)
  {
    id: 'd_oi',
    symbol: 'ɔɪ',
    category: 'vowel',
    subCategory: 'diphthong',
    name: { en: 'Closing diphthong (CHOICE vowel)', vi: 'Nguyên âm đôi /ɔɪ/' },
    voiced: true,
    place: { en: 'Back-mid to Front-close', vi: 'Từ sau giữa đến khép trước' },
    manner: { en: 'Closing diphthong to /ɪ/', vi: 'Nguyên âm đôi hướng về /ɪ/' },
    description: {
      en: 'Starts with rounded lips on /ɔː/ and glides towards spread unrounded /ɪ/. Heard in "boy", "coin", "voice".',
      vi: 'Bắt đầu với môi tròn ở /ɔː/ rồi lướt sang khóe miệng mỉm cười ở /ɪ/. Gặp trong "boy", "coin", "voice".'
    },
    articulationGuide: {
      lips: { en: 'Rounded at start, unrounds into a smile.', vi: 'Tròn môi lúc đầu, mở dẹt mỉm cười về sau.' },
      tongue: { en: 'Moves from back-mid to high-front.', vi: 'Di chuyển từ vị trí sau-giữa lên cao phía trước.' },
      teeth: { en: 'Closes gradually.', vi: 'Khép dần.' },
      vocalCords: { en: 'Vibrating.', vi: 'Dây thanh rung.' },
      airflow: { en: 'Smooth oral flow.', vi: 'Luồng hơi êm ái.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 6,
      tongueHeight: 'mid',
      tongueBackness: 'back',
      lipShape: 'rounded',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'boy', ipa: '/bɔɪ/', position: 'final', meaning_vi: 'cậu bé' },
      { word: 'coin', ipa: '/kɔɪn/', position: 'medial', meaning_vi: 'đồng xu' },
      { word: 'voice', ipa: '/vɔɪs/', position: 'medial', meaning_vi: 'giọng nói' }
    ],
    minimalPairs: [
      {
        wordA: 'coin', soundA: 'ɔɪ', ipaA: '/kɔɪn/', meaningA_vi: 'đồng xu',
        wordB: 'corn', soundB: 'ɔː', ipaB: '/kɔːn/', meaningB_vi: 'ngô, bắp',
        contrastTip: {
          en: '"Coin" has an upward glide into /ɪ/; "corn" is steady monophthong /ɔː/.',
          vi: '"Coin" lướt lên /ɪ/; "corn" giữ nguyên âm đơn /ɔː/.'
        }
      }
    ],
    b1Sentence: {
      text: 'The boy enjoyed the noisy game with his joyful toys.',
      ipa: '/ðə bɔɪ ɪnˈdʒɔɪd ðə ˈnɔɪzi ɡeɪm wɪð hɪz ˈdʒɔɪfl tɔɪz/',
      translation_vi: 'Cậu bé thích thú với trò chơi ồn ào cùng những món đồ chơi vui nhộn.'
    },
    miniDialogue: {
      speakerA: 'Roy', lineA: 'Did you hear that strange voice in the noise?', lineA_vi: 'Bạn có nghe thấy giọng nói kỳ lạ trong tiếng ồn không?',
      speakerB: 'Joy', lineB: 'Yes, it was a boy pointing at a coin.', lineB_vi: 'Có, đó là một cậu bé đang chỉ vào đồng xu.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Pronouncing like Vietnamese "oi" without sufficient initial lip rounding.',
        vi: 'Đọc bẹt như âm "oi" tiếng Việt mà không khum tròn môi ở đầu âm.'
      },
      howToFix: {
        en: 'Exaggerate the initial round lips for "aw", then smile on "ee".',
        vi: 'Khum tròn môi rõ ràng ở âm đầu, sau đó mới bè môi mỉm cười.'
      }
    }
  },

  // 19. /əʊ/ (Diphthong - GOAT)
  {
    id: 'd_ou',
    symbol: 'əʊ',
    category: 'vowel',
    subCategory: 'diphthong',
    name: { en: 'Closing diphthong (GOAT vowel)', vi: 'Nguyên âm đôi /əʊ/' },
    voiced: true,
    place: { en: 'Central to Back-close', vi: 'Từ trung tâm đến khép sau' },
    manner: { en: 'Closing diphthong to /ʊ/', vi: 'Nguyên âm đôi hướng về /ʊ/' },
    description: {
      en: 'The signature British vowel! Starts at neutral schwa /ə/ and glides back into rounded /ʊ/. Very different from American "oh".',
      vi: 'Nguyên âm biểu tượng của tiếng Anh-Anh! Bắt đầu từ âm schwa /ə/ thả lỏng rồi mới khum tròn lướt về /ʊ/. Rất khác âm "oh" giọng Mỹ.'
    },
    articulationGuide: {
      lips: { en: 'Starts completely relaxed/neutral, then rounds gently.', vi: 'Bắt đầu hoàn toàn thả lỏng tự nhiên, sau đó mới khum tròn nhẹ.' },
      tongue: { en: 'Starts at mid-central /ə/, tongue pulls back and up towards /ʊ/.', vi: 'Bắt đầu từ giữa miệng /ə/, thân lưỡi lùi nhẹ và nâng lên về /ʊ/.' },
      teeth: { en: 'Closes slightly.', vi: 'Khép nhẹ dần.' },
      vocalCords: { en: 'Vibrating.', vi: 'Rung dây thanh.' },
      airflow: { en: 'Sustained smooth glide.', vi: 'Luồng hơi lướt êm đềm.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 6,
      tongueHeight: 'mid',
      tongueBackness: 'central',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'goat', ipa: '/ɡəʊt/', position: 'medial', meaning_vi: 'con dê' },
      { word: 'home', ipa: '/həʊm/', position: 'medial', meaning_vi: 'ngôi nhà' },
      { word: 'no', ipa: '/nəʊ/', position: 'final', meaning_vi: 'không' }
    ],
    minimalPairs: [
      {
        wordA: 'boat', soundA: 'əʊ', ipaA: '/bəʊt/', meaningA_vi: 'chiếc thuyền',
        wordB: 'bought', soundB: 'ɔː', ipaB: '/bɔːt/', meaningB_vi: 'đã mua',
        contrastTip: {
          en: '"Boat" has the British /əʊ/ glide; "bought" is steady long /ɔː/.',
          vi: '"Boat" lướt từ schwa /əʊ/; "bought" giữ nguyên âm đơn dài /ɔː/.'
        }
      }
    ],
    b1Sentence: {
      text: 'Joe told us to go home slowly on the cold road.',
      ipa: '/dʒəʊ təʊld ʌs tə ɡəʊ həʊm ˈsləʊli ɒn ðə kəʊld rəʊd/',
      translation_vi: 'Joe bảo chúng tôi hãy đi về nhà chậm rãi trên con đường lạnh giá.'
    },
    miniDialogue: {
      speakerA: 'Rose', lineA: 'Do you know how to go home alone in the snow?', lineA_vi: 'Bạn có biết cách đi về nhà một mình trong tuyết không?',
      speakerB: 'Joe', lineB: 'I hope so! I will phone when I am home.', lineB_vi: 'Tôi hy vọng vậy! Tôi sẽ gọi điện khi về đến nhà.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Starting with rounded lips like Vietnamese "ô" or American /oʊ/.',
        vi: 'Chu tròn môi ngay từ đầu như âm "ô" tiếng Việt hoặc giọng Mỹ.'
      },
      howToFix: {
        en: 'Keep lips unrounded and relaxed for the first half, only round your lips at the very end.',
        vi: 'Giữ môi thẳng tự nhiên như âm "ơ" trong nửa đầu, chỉ khum tròn môi ở cuối âm.'
      }
    }
  },

  // 20. /aʊ/ (Diphthong - MOUTH)
  {
    id: 'd_au',
    symbol: 'aʊ',
    category: 'vowel',
    subCategory: 'diphthong',
    name: { en: 'Closing diphthong (MOUTH vowel)', vi: 'Nguyên âm đôi /aʊ/' },
    voiced: true,
    place: { en: 'Open to Back-close', vi: 'Từ mở rộng đến khép sau' },
    manner: { en: 'Closing diphthong to /ʊ/', vi: 'Nguyên âm đôi hướng về /ʊ/' },
    description: {
      en: 'Starts with jaw wide open on /a/ and glides smoothly up into rounded /ʊ/. Heard in "now", "mouth", "house".',
      vi: 'Bắt đầu với hàm mở rộng ở /a/ rồi lướt mượt mà khép lên môi tròn /ʊ/. Gặp trong "now", "mouth", "house".'
    },
    articulationGuide: {
      lips: { en: 'Wide open initially, closes into a tight round circle.', vi: 'Mở rộng lúc đầu, khép dần thành hình tròn nhỏ về cuối.' },
      tongue: { en: 'Starts low, glides backwards and upwards towards /ʊ/.', vi: 'Bắt đầu thấp, lướt lùi về sau và nâng cao lên /ʊ/.' },
      teeth: { en: 'Wide open moving to close.', vi: 'Từ mở rộng chuyển sang khép gần.' },
      vocalCords: { en: 'Vibrating.', vi: 'Dây thanh rung.' },
      airflow: { en: 'Full, sustained glide.', vi: 'Luồng hơi lướt đầy đặn.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 8,
      tongueHeight: 'low',
      tongueBackness: 'central',
      lipShape: 'rounded',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'mouth', ipa: '/maʊθ/', position: 'medial', meaning_vi: 'cái miệng' },
      { word: 'now', ipa: '/naʊ/', position: 'final', meaning_vi: 'bây giờ' },
      { word: 'out', ipa: '/aʊt/', position: 'initial', meaning_vi: 'ra ngoài' }
    ],
    minimalPairs: [
      {
        wordA: 'now', soundA: 'aʊ', ipaA: '/naʊ/', meaningA_vi: 'bây giờ',
        wordB: 'no', soundB: 'əʊ', ipaB: '/nəʊ/', meaningB_vi: 'không',
        contrastTip: {
          en: '"Now" opens the jaw wide on /a/; "no" starts with a relaxed schwa /ə/.',
          vi: '"Now" mở cằm rộng ở đầu /a/; "no" bắt đầu bằng âm schwa /ə/ thư giãn.'
        }
      }
    ],
    b1Sentence: {
      text: 'Our brown cow found a house south of the town.',
      ipa: '/ˈaʊə braʊn kaʊ faʊnd ə haʊs saʊθ əv ðə taʊn/',
      translation_vi: 'Con bò màu nâu của chúng tôi đã tìm thấy một ngôi nhà ở phía nam thị trấn.'
    },
    miniDialogue: {
      speakerA: 'Howard', lineA: 'How about walking around the town now?', lineA_vi: 'Bây giờ chúng ta dạo quanh thị trấn nhé?',
      speakerB: 'Paula', lineB: 'Sounds good, let us go out for an hour!', lineB_vi: 'Nghe hay đấy, cùng ra ngoài trong một tiếng nhé!'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Pronouncing like Vietnamese "ao" without dropping the jaw sufficiently.',
        vi: 'Đọc nông như âm "ao" tiếng Việt mà không mở rộng cằm.'
      },
      howToFix: {
        en: 'Drop your jaw wide like saying "ah", then round your lips to "oo".',
        vi: 'Hạ sâu cằm như phát âm "ah", rồi chúm môi tròn chuyển sang "oo".'
      }
    }
  }
];
