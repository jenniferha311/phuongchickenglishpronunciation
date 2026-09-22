import { PhonemeData } from '../types';

export const CONSONANTS_DATA: PhonemeData[] = [
  // 21. /p/ (Voiceless bilabial plosive)
  {
    id: 'c_p',
    symbol: 'p',
    category: 'consonant',
    subCategory: 'plosive',
    name: { en: 'Voiceless bilabial plosive', vi: 'Phụ âm /p/ bật hơi, vô thanh' },
    voiced: false,
    place: { en: 'Bilabial (both lips)', vi: 'Hai môi' },
    manner: { en: 'Plosive (stop)', vi: 'Tắc (bật hơi)' },
    description: {
      en: 'Both lips press tightly together to block air, then release with an audible puff of air (aspiration). No vocal cord vibration.',
      vi: 'Hai môi mím chặt chặn luồng hơi, sau đó mở nhanh tạo tiếng nổ bật hơi rõ rệt. Dây thanh không rung.'
    },
    articulationGuide: {
      lips: { en: 'Pressed firmly together, then popped open.', vi: 'Mím chặt hai môi lại rồi bật mở dứt khoát.' },
      tongue: { en: 'Resting neutrally.', vi: 'Nằm nghỉ tự nhiên.' },
      teeth: { en: 'Slightly apart behind lips.', vi: 'Hé nhẹ phía sau môi.' },
      vocalCords: { en: 'Silent (voiceless - feel throat: no vibration).', vi: 'Không rung (sờ tay vào cổ họng không thấy rung).' },
      airflow: { en: 'Strong burst of air (aspiration at word start).', vi: 'Luồng hơi bật ra mạnh (đặt tờ giấy trước miệng sẽ bay).' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 7,
      tongueHeight: 'mid',
      tongueBackness: 'central',
      lipShape: 'closed',
      velumRaised: true,
      vocalCordsVibrating: false,
      airflowType: 'oral_burst'
    },
    examples: [
      { word: 'pen', ipa: '/pen/', position: 'initial', meaning_vi: 'cây bút' },
      { word: 'cup', ipa: '/kʌp/', position: 'final', meaning_vi: 'cái tách' },
      { word: 'happy', ipa: '/ˈhæpi/', position: 'medial', meaning_vi: 'hạnh phúc' }
    ],
    minimalPairs: [
      {
        wordA: 'pin', soundA: 'p', ipaA: '/pɪn/', meaningA_vi: 'cái ghim',
        wordB: 'bin', soundB: 'b', ipaB: '/bɪn/', meaningB_vi: 'thùng rác',
        contrastTip: {
          en: '/p/ has strong puff of air with silent vocal cords; /b/ has vibrating vocal cords and softer burst.',
          vi: '/p/ bật hơi mạnh không rung cổ họng; /b/ có rung thanh quản và luồng hơi nhẹ hơn.'
        }
      }
    ],
    b1Sentence: {
      text: 'Please put the paper cups into the plastic pack.',
      ipa: '/pliːz pʊt ðə ˈpeɪpə kʌps ˈɪntə ðə ˈplæstɪk pæk/',
      translation_vi: 'Xin vui lòng cho những chiếc cốc giấy vào túi nhựa.'
    },
    miniDialogue: {
      speakerA: 'Peter', lineA: 'Could you pass me the piece of paper, please?', lineA_vi: 'Bạn có thể chuyển cho tôi mẩu giấy được không?',
      speakerB: 'Polly', lineB: 'Here is the paper and a purple pen.', lineB_vi: 'Đây là giấy và một chiếc bút màu tím.'
    },
    vietnamesePitfalls: {
      isHighRisk: true,
      commonMistake: {
        en: 'Dropping final /p/ in words like "cup" or "stop", or not aspirating at word start.',
        vi: 'Bỏ quên âm cuối /p/ trong các từ như "cup", "stop", hoặc đầu từ không bật hơi.'
      },
      howToFix: {
        en: 'At the end of words, close lips firmly and release with a soft pop: "cu-P".',
        vi: 'Ở cuối từ, mím chặt môi lại và bật nhẹ dứt khoát: "cu-P".'
      },
      finalConsonantAlert: true
    }
  },

  // 22. /b/ (Voiced bilabial plosive)
  {
    id: 'c_b',
    symbol: 'b',
    category: 'consonant',
    subCategory: 'plosive',
    name: { en: 'Voiced bilabial plosive', vi: 'Phụ âm /b/ hữu thanh' },
    voiced: true,
    place: { en: 'Bilabial (both lips)', vi: 'Hai môi' },
    manner: { en: 'Plosive (stop)', vi: 'Tắc (hữu thanh)' },
    description: {
      en: 'Lips close to block air, then open as vocal cords vibrate. Gentler burst than /p/.',
      vi: 'Hai môi khép lại chặn hơi, sau đó mở ra đồng thời rung dây thanh âm. Bật nhẹ nhàng hơn /p/.'
    },
    articulationGuide: {
      lips: { en: 'Close lightly, then open.', vi: 'Khép nhẹ hai môi rồi mở ra.' },
      tongue: { en: 'Neutral position.', vi: 'Vị trí tự nhiên.' },
      teeth: { en: 'Slightly apart.', vi: 'Hé nhẹ.' },
      vocalCords: { en: 'Vibrating actively from the start.', vi: 'Rung tích cực ngay từ lúc bắt đầu phát âm.' },
      airflow: { en: 'Gentle burst with voice.', vi: 'Bật nhẹ kèm tiếng rung thanh quản.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 7,
      tongueHeight: 'mid',
      tongueBackness: 'central',
      lipShape: 'closed',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_burst'
    },
    examples: [
      { word: 'bag', ipa: '/bæɡ/', position: 'initial', meaning_vi: 'cái túi' },
      { word: 'job', ipa: '/dʒɒb/', position: 'final', meaning_vi: 'công việc' },
      { word: 'rabbit', ipa: '/ˈræbɪt/', position: 'medial', meaning_vi: 'con thỏ' }
    ],
    minimalPairs: [
      {
        wordA: 'berry', soundA: 'b', ipaA: '/ˈberi/', meaningA_vi: 'quả mọng',
        wordB: 'very', soundB: 'v', ipaB: '/ˈveri/', meaningB_vi: 'rất',
        contrastTip: {
          en: 'For /b/ both lips meet; for /v/ top teeth touch bottom lip with friction.',
          vi: 'Với /b/ hai môi chạm nhau; với /v/ răng cửa trên cắn nhẹ môi dưới tạo luồng hơi ma sát.'
        }
      }
    ],
    b1Sentence: {
      text: 'Bob bought a big black bike for his best brother.',
      ipa: '/bɒb bɔːt ə bɪɡ blæk baɪk fɔː hɪz best ˈbrʌðə/',
      translation_vi: 'Bob đã mua một chiếc xe đạp đen to cho người anh em thân thiết của mình.'
    },
    miniDialogue: {
      speakerA: 'Ben', lineA: 'Is your brother looking for a better job?', lineA_vi: 'Anh trai bạn có đang tìm một công việc tốt hơn không?',
      speakerB: 'Brian', lineB: 'Yes, he began a new business in Bristol.', lineB_vi: 'Có chứ, anh ấy vừa bắt đầu kinh doanh ở Bristol.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Dropping final /b/ in words like "job", "club", or confusing with /v/.',
        vi: 'Bỏ âm cuối /b/ trong từ như "job", "club", hoặc nhầm /b/ với /v/.'
      },
      howToFix: {
        en: 'Make sure your top teeth do NOT touch your lower lip (that is /v/); keep voice vibrating at the end: "jo-B".',
        vi: 'Đảm bảo răng trên KHÔNG cắn môi dưới; giữ độ rung thanh quản ở âm cuối: "jo-B".'
      },
      finalConsonantAlert: true
    }
  },

  // 23. /t/ (Voiceless alveolar plosive)
  {
    id: 'c_t',
    symbol: 't',
    category: 'consonant',
    subCategory: 'plosive',
    name: { en: 'Voiceless alveolar plosive', vi: 'Phụ âm /t/ chân răng, vô thanh' },
    voiced: false,
    place: { en: 'Alveolar ridge', vi: 'Lợi / nướu chân răng trên' },
    manner: { en: 'Plosive (stop)', vi: 'Tắc (bật hơi)' },
    description: {
      en: 'Tongue tip presses firmly against the alveolar ridge behind top teeth, building air pressure, then pops away with crisp breath.',
      vi: 'Đầu lưỡi ép chặt vào nướu răng cửa trên chặn luồng hơi, sau đó hạ nhanh bật ra luồng hơi tanh tách. Cực kỳ quan trọng ở cuối từ!'
    },
    articulationGuide: {
      lips: { en: 'Neutral, slightly apart.', vi: 'Thả lỏng, hé mở vừa phải.' },
      tongue: { en: 'Tip touches alveolar ridge firmly, then drops sharply.', vi: 'Đầu lưỡi ép chặt vào chân răng trên rồi bật xuống dứt khoát.' },
      teeth: { en: 'Close but parted.', vi: 'Gần nhau nhưng không chạm.' },
      vocalCords: { en: 'Silent (voiceless).', vi: 'Không rung dây thanh.' },
      airflow: { en: 'Sharp, explosive burst of air.', vi: 'Luồng hơi bật nổ sắc bén và dứt khoát.' }
    },
    sagittalConfig: {
      tongueTipX: 5,
      tongueTipY: 3,
      tongueHeight: 'high',
      tongueBackness: 'front',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: false,
      airflowType: 'oral_burst'
    },
    examples: [
      { word: 'tea', ipa: '/tiː/', position: 'initial', meaning_vi: 'trà' },
      { word: 'cat', ipa: '/kæt/', position: 'final', meaning_vi: 'con mèo' },
      { word: 'water', ipa: '/ˈwɔːtə/', position: 'medial', meaning_vi: 'nước' }
    ],
    minimalPairs: [
      {
        wordA: 'tie', soundA: 't', ipaA: '/taɪ/', meaningA_vi: 'cà vạt',
        wordB: 'die', soundB: 'd', ipaB: '/daɪ/', meaningB_vi: 'chết',
        contrastTip: {
          en: '/t/ has strong puff of air without voice; /d/ has vocal cord vibration and less air.',
          vi: '/t/ bật hơi tanh tách không rung họng; /d/ rung thanh quản và hơi nhẹ hơn.'
        }
      },
      {
        wordA: 'right', soundA: 't', ipaA: '/raɪt/', meaningA_vi: 'đúng, phải',
        wordB: 'ride', soundB: 'd', ipaB: '/raɪd/', meaningB_vi: 'cưỡi, đi xe',
        contrastTip: {
          en: 'Notice final /t/ makes the preceding vowel shorter than before voiced /d/.',
          vi: 'Âm cuối /t/ vô thanh làm nguyên âm trước ngắn hơn so với trước /d/.'
        }
      }
    ],
    b1Sentence: {
      text: 'Tom took ten minutes to write eight short letters.',
      ipa: '/tɒm tʊk ten ˈmɪnɪts tə raɪt eɪt ʃɔːt ˈletəz/',
      translation_vi: 'Tom mất mười phút để viết tám lá thư ngắn.'
    },
    miniDialogue: {
      speakerA: 'Tina', lineA: 'Did you meet the doctor at eight o’clock?', lineA_vi: 'Bạn đã gặp bác sĩ lúc tám giờ chưa?',
      speakerB: 'Peter', lineB: 'Yes, we talked about the treatment.', lineB_vi: 'Rồi, chúng tôi đã trao đổi về phác đồ điều trị.'
    },
    vietnamesePitfalls: {
      isHighRisk: true,
      commonMistake: {
        en: 'The #1 error for Vietnamese learners: dropping final /t/ ("cat" becomes "ca", "meet" becomes "mee").',
        vi: 'Lỗi phổ biến số 1 của người Việt: nuốt chửng âm cuối /t/ (đọc "cat" thành "ca", "meet" thành "mee").'
      },
      howToFix: {
        en: 'Always tap the tongue tip firmly against the gum ridge and make the audible "T" release: "ca-T".',
        vi: 'Luôn gõ đầu lưỡi lên nướu răng trên và bật nhẹ tiếng "T": "ca-T".'
      },
      finalConsonantAlert: true
    }
  },

  // 24. /d/ (Voiced alveolar plosive)
  {
    id: 'c_d',
    symbol: 'd',
    category: 'consonant',
    subCategory: 'plosive',
    name: { en: 'Voiced alveolar plosive', vi: 'Phụ âm /d/ chân răng, hữu thanh' },
    voiced: true,
    place: { en: 'Alveolar ridge', vi: 'Lợi / nướu chân răng trên' },
    manner: { en: 'Plosive (stop)', vi: 'Tắc (hữu thanh)' },
    description: {
      en: 'Same tongue position as /t/, but with vocal cords vibrating. Creates a softer, voiced release.',
      vi: 'Cùng vị trí đầu lưỡi đặt ở nướu răng trên như /t/, nhưng có rung dây thanh quản. Bật âm trầm và ấm hơn.'
    },
    articulationGuide: {
      lips: { en: 'Neutral.', vi: 'Tự nhiên.' },
      tongue: { en: 'Tip against alveolar ridge, releasing with voice.', vi: 'Đầu lưỡi chạm nướu răng trên rồi nhả ra cùng tiếng rung.' },
      teeth: { en: 'Slightly apart.', vi: 'Hé mở nhẹ.' },
      vocalCords: { en: 'Vibrating actively.', vi: 'Rung thanh quản rõ rệt.' },
      airflow: { en: 'Moderate voiced burst.', vi: 'Bật nhẹ kèm âm rung.' }
    },
    sagittalConfig: {
      tongueTipX: 5,
      tongueTipY: 3,
      tongueHeight: 'high',
      tongueBackness: 'front',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_burst'
    },
    examples: [
      { word: 'day', ipa: '/deɪ/', position: 'initial', meaning_vi: 'ngày' },
      { word: 'red', ipa: '/red/', position: 'final', meaning_vi: 'màu đỏ' },
      { word: 'ladder', ipa: '/ˈlædə/', position: 'medial', meaning_vi: 'cái thang' }
    ],
    minimalPairs: [
      {
        wordA: 'bad', soundA: 'd', ipaA: '/bæd/', meaningA_vi: 'xấu, tồi',
        wordB: 'bat', soundB: 't', ipaB: '/bæt/', meaningB_vi: 'con dơi',
        contrastTip: {
          en: 'In "bad" the vowel /æ/ is held longer and ends with a voiced tap /d/.',
          vi: 'Trong "bad" nguyên âm /æ/ được giữ dài hơn và kết thúc bằng âm /d/ có rung.'
        }
      }
    ],
    b1Sentence: {
      text: 'David decided to drive down to London on Monday.',
      ipa: '/ˈdeɪvɪd dɪˈsaɪdɪd tə draɪv daʊn tə ˈlʌndən ɒn ˈmʌndeɪ/',
      translation_vi: 'David đã quyết định lái xe xuống London vào thứ Hai.'
    },
    miniDialogue: {
      speakerA: 'Dan', lineA: 'Did you find your red credit card?', lineA_vi: 'Bạn đã tìm thấy chiếc thẻ tín dụng màu đỏ của mình chưa?',
      speakerB: 'Diane', lineB: 'Yes, I found it inside the desk drawer.', lineB_vi: 'Rồi, tôi tìm thấy nó bên trong ngăn kéo bàn làm việc.'
    },
    vietnamesePitfalls: {
      isHighRisk: true,
      commonMistake: {
        en: 'Dropping final /d/ (saying "red" as "re", "need" as "nee") or confusing with Vietnamese "đ".',
        vi: 'Bỏ quên âm cuối /d/ (đọc "red" thành "re", "need" thành "nee") hoặc phát âm đầu từ như "đ" tiếng Việt quá nặng.'
      },
      howToFix: {
        en: 'Keep your tongue tip on the gum ridge and hum gently as you release: "ne-e-e-D".',
        vi: 'Giữ đầu lưỡi trên nướu răng và rung nhẹ thanh quản khi bật âm: "ne-e-e-D".'
      },
      finalConsonantAlert: true
    }
  },

  // 25. /k/ (Voiceless velar plosive)
  {
    id: 'c_k',
    symbol: 'k',
    category: 'consonant',
    subCategory: 'plosive',
    name: { en: 'Voiceless velar plosive', vi: 'Phụ âm /k/ ngạc mềm, vô thanh' },
    voiced: false,
    place: { en: 'Velar (soft palate)', vi: 'Ngạc mềm (vòm họng mềm)' },
    manner: { en: 'Plosive (stop)', vi: 'Tắc (bật hơi)' },
    description: {
      en: 'Back of tongue seals firmly against the soft palate (velum), air pressure builds, then releases with a sharp, dry pop.',
      vi: 'Cuống lưỡi nâng cao ép chặt vào ngạc mềm chặn hơi, sau đó hạ nhanh bật ra luồng hơi khô giòn.'
    },
    articulationGuide: {
      lips: { en: 'Neutral, shaped by surrounding vowel.', vi: 'Tự nhiên, định hình theo nguyên âm đi kèm.' },
      tongue: { en: 'Back of tongue raises to touch soft palate firmly, then releases.', vi: 'Cuống lưỡi nâng cao chạm chặt vào ngạc mềm rồi nhả ra.' },
      teeth: { en: 'Slightly apart.', vi: 'Hé mở.' },
      vocalCords: { en: 'Silent (voiceless).', vi: 'Không rung dây thanh.' },
      airflow: { en: 'Crisp explosive burst.', vi: 'Bật nổ khô và sắc.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 8,
      tongueHeight: 'high',
      tongueBackness: 'back',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: false,
      airflowType: 'oral_burst'
    },
    examples: [
      { word: 'cat', ipa: '/kæt/', position: 'initial', meaning_vi: 'con mèo' },
      { word: 'book', ipa: '/bʊk/', position: 'final', meaning_vi: 'cuốn sách' },
      { word: 'market', ipa: '/ˈmɑːkɪt/', position: 'medial', meaning_vi: 'chợ' }
    ],
    minimalPairs: [
      {
        wordA: 'coat', soundA: 'k', ipaA: '/kəʊt/', meaningA_vi: 'áo khoác',
        wordB: 'goat', soundB: 'ɡ', ipaB: '/ɡəʊt/', meaningB_vi: 'con dê',
        contrastTip: {
          en: '/k/ is aspirated without voice; /ɡ/ is voiced from deep in the throat.',
          vi: '/k/ bật hơi không rung cổ; /ɡ/ có tiếng rung trầm từ cổ họng.'
        }
      }
    ],
    b1Sentence: {
      text: 'Kate took a quick walk around the quiet park.',
      ipa: '/keɪt tʊk ə kwɪk wɔːk əˈraʊnd ðə ˈkwaɪət pɑːk/',
      translation_vi: 'Kate đã đi dạo nhanh quanh công viên yên tĩnh.'
    },
    miniDialogue: {
      speakerA: 'Ken', lineA: 'Can you cook chicken for our picnic?', lineA_vi: 'Bạn có thể nấu món gà cho chuyến dã ngoại không?',
      speakerB: 'Clara', lineB: 'Of course! I will pack some cakes as well.', lineB_vi: 'Tất nhiên rồi! Tôi cũng sẽ gói thêm vài chiếc bánh ngọt.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Dropping final /k/ in words like "book", "like", "music" (saying "boo", "lai", "musi").',
        vi: 'Bỏ rơi âm cuối /k/ trong các từ như "book", "like", "music" (đọc thành "bu", "lai", "miu-di").'
      },
      howToFix: {
        en: 'Always tap the back of your tongue against your soft palate and release a tiny "kh" puff at the end.',
        vi: 'Luôn nâng cuống lưỡi chạm vòm họng và nhả một tiếng bật nhẹ: "boo-K", "li-K".'
      },
      finalConsonantAlert: true
    }
  },

  // 26. /ɡ/ (Voiced velar plosive)
  {
    id: 'c_g',
    symbol: 'ɡ',
    category: 'consonant',
    subCategory: 'plosive',
    name: { en: 'Voiced velar plosive', vi: 'Phụ âm /ɡ/ ngạc mềm, hữu thanh' },
    voiced: true,
    place: { en: 'Velar (soft palate)', vi: 'Ngạc mềm (vòm họng mềm)' },
    manner: { en: 'Plosive (stop)', vi: 'Tắc (hữu thanh)' },
    description: {
      en: 'Same position as /k/, with back of tongue on soft palate, but with vocal cords vibrating.',
      vi: 'Cùng vị trí cuống lưỡi chạm ngạc mềm như /k/, nhưng có rung dây thanh quản tạo âm trầm ấm.'
    },
    articulationGuide: {
      lips: { en: 'Neutral.', vi: 'Tự nhiên.' },
      tongue: { en: 'Back of tongue presses on velum, releases with voice.', vi: 'Cuống lưỡi áp vào ngạc mềm rồi nhả ra cùng tiếng rung.' },
      teeth: { en: 'Slightly apart.', vi: 'Hé mở.' },
      vocalCords: { en: 'Vibrating.', vi: 'Rung thanh quản.' },
      airflow: { en: 'Moderate voiced burst.', vi: 'Bật nhẹ kèm tiếng rung.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 8,
      tongueHeight: 'high',
      tongueBackness: 'back',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_burst'
    },
    examples: [
      { word: 'get', ipa: '/ɡet/', position: 'initial', meaning_vi: 'nhận được, lấy' },
      { word: 'bag', ipa: '/bæɡ/', position: 'final', meaning_vi: 'cái túi' },
      { word: 'sugar', ipa: '/ˈʃʊɡə/', position: 'medial', meaning_vi: 'đường ăn' }
    ],
    minimalPairs: [
      {
        wordA: 'bag', soundA: 'ɡ', ipaA: '/bæɡ/', meaningA_vi: 'cái túi',
        wordB: 'back', soundB: 'k', ipaB: '/bæk/', meaningB_vi: 'cái lưng, phía sau',
        contrastTip: {
          en: 'End of "bag" has voiced /ɡ/; end of "back" has voiceless crisp /k/.',
          vi: 'Đuôi của "bag" có âm rung /ɡ/; đuôi của "back" là tiếng bật khô /k/ không rung.'
        }
      }
    ],
    b1Sentence: {
      text: 'The girl gave a great green gift to her grandmother.',
      ipa: '/ðə ɡɜːl ɡeɪv ə ɡreɪt ɡriːn ɡɪft tə hɜː ˈɡrænmʌðə/',
      translation_vi: 'Cô gái đã tặng một món quà màu xanh lá tuyệt vời cho bà của mình.'
    },
    miniDialogue: {
      speakerA: 'Gary', lineA: 'Did you bring your big sleeping bag?', lineA_vi: 'Bạn có mang theo túi ngủ to của mình không?',
      speakerB: 'Grace', lineB: 'Yes, it is good to go camping together!', lineB_vi: 'Có chứ, thật tuyệt khi được đi cắm trại cùng nhau!'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Dropping final /ɡ/ or substituting Vietnamese "g" at word start (which is a fricative /ɣ/, not a plosive /ɡ/).',
        vi: 'Bỏ âm cuối /ɡ/ (đọc "bag" thành "ba") hoặc phát âm đầu từ như "g" tiếng Việt (vốn là âm xát lướt, không phải âm tắc bật).'
      },
      howToFix: {
        en: 'Block the air completely with your tongue back, then release: "ba-G".',
        vi: 'Chặn hơi hoàn toàn bằng cuống lưỡi, sau đó mới bật ra: "ba-G".'
      },
      finalConsonantAlert: true
    }
  },

  // 27. /f/ (Voiceless labiodental fricative)
  {
    id: 'c_f',
    symbol: 'f',
    category: 'consonant',
    subCategory: 'fricative',
    name: { en: 'Voiceless labiodental fricative', vi: 'Phụ âm /f/ răng-môi, vô thanh' },
    voiced: false,
    place: { en: 'Labiodental (top teeth + bottom lip)', vi: 'Răng trên chạm môi dưới' },
    manner: { en: 'Fricative', vi: 'Xát (ma sát hơi)' },
    description: {
      en: 'Upper front teeth lightly touch the inner part of lower lip, continuous stream of air hisses through. No voice.',
      vi: 'Răng cửa trên chạm nhẹ vào mặt trong môi dưới, luồng hơi thổi liên tục qua kẽ răng tạo tiếng xì xát. Không rung họng.'
    },
    articulationGuide: {
      lips: { en: 'Lower lip touches upper teeth gently.', vi: 'Môi dưới chạm nhẹ vào mép răng cửa trên.' },
      tongue: { en: 'Resting low and neutral.', vi: 'Nằm phẳng tự nhiên ở đáy miệng.' },
      teeth: { en: 'Upper front teeth resting on lower lip.', vi: 'Răng cửa trên tựa nhẹ lên môi dưới.' },
      vocalCords: { en: 'Silent (voiceless).', vi: 'Không rung dây thanh.' },
      airflow: { en: 'Continuous friction of air escaping.', vi: 'Hơi thổi qua ma sát liên tục.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 7,
      tongueHeight: 'mid',
      tongueBackness: 'central',
      lipShape: 'labiodental',
      velumRaised: true,
      vocalCordsVibrating: false,
      airflowType: 'oral_friction'
    },
    examples: [
      { word: 'fan', ipa: '/fæn/', position: 'initial', meaning_vi: 'cái quạt' },
      { word: 'life', ipa: '/laɪf/', position: 'final', meaning_vi: 'cuộc sống' },
      { word: 'coffee', ipa: '/ˈkɒfi/', position: 'medial', meaning_vi: 'cà phê' }
    ],
    minimalPairs: [
      {
        wordA: 'fan', soundA: 'f', ipaA: '/fæn/', meaningA_vi: 'cái quạt',
        wordB: 'van', soundB: 'v', ipaB: '/væn/', meaningB_vi: 'xe tải nhỏ',
        contrastTip: {
          en: '/f/ is pure hissing air; /v/ has active vocal cord vibration with the same mouth shape.',
          vi: '/f/ chỉ có tiếng xì hơi; /v/ có độ rung thanh quản rõ rệt cùng khẩu hình răng-môi.'
        }
      }
    ],
    b1Sentence: {
      text: 'Frank found five fresh fish for four friends on Friday.',
      ipa: '/fræŋk faʊnd faɪv freʃ fɪʃ fɔː fɔː frendz ɒn ˈfraɪdeɪ/',
      translation_vi: 'Frank đã tìm được năm con cá tươi cho bốn người bạn vào thứ Sáu.'
    },
    miniDialogue: {
      speakerA: 'Fiona', lineA: 'Could you feel the fresh airflow from the fan?', lineA_vi: 'Bạn có cảm thấy luồng gió mát từ chiếc quạt không?',
      speakerB: 'Felix', lineB: 'Yes, it feels fantastic in this warm office.', lineB_vi: 'Có, cảm giác rất tuyệt trong văn phòng ấm áp này.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Dropping final /f/ in words like "life", "safe", "laugh" (saying "lai", "sei", "la").',
        vi: 'Bỏ quên âm cuối /f/ trong "life", "safe", "laugh" (đọc thành "lai", "sây", "la").'
      },
      howToFix: {
        en: 'Bring top teeth onto your bottom lip and sustain a soft "fff" at the end of the word.',
        vi: 'Chạm răng trên vào môi dưới và giữ tiếng xì "fff" nhẹ nhàng ở cuối từ: "li-F".'
      },
      finalConsonantAlert: true
    }
  },

  // 28. /v/ (Voiced labiodental fricative)
  {
    id: 'c_v',
    symbol: 'v',
    category: 'consonant',
    subCategory: 'fricative',
    name: { en: 'Voiced labiodental fricative', vi: 'Phụ âm /v/ răng-môi, hữu thanh' },
    voiced: true,
    place: { en: 'Labiodental (top teeth + bottom lip)', vi: 'Răng trên chạm môi dưới' },
    manner: { en: 'Fricative', vi: 'Xát (hữu thanh)' },
    description: {
      en: 'Exact same mouth position as /f/, but vocal cords vibrate vigorously, creating a buzzing friction sound.',
      vi: 'Cùng khẩu hình răng trên cắn nhẹ môi dưới như /f/, nhưng dây thanh quản rung mạnh tạo tiếng rè rè ma sát.'
    },
    articulationGuide: {
      lips: { en: 'Lower lip against upper front teeth.', vi: 'Môi dưới chạm nhẹ vào răng cửa trên.' },
      tongue: { en: 'Neutral.', vi: 'Tự nhiên.' },
      teeth: { en: 'Top teeth on lower lip.', vi: 'Răng trên tựa lên môi dưới.' },
      vocalCords: { en: 'Vibrating strongly with buzzing sound.', vi: 'Rung mạnh, tạo tiếng rè rè như tiếng ong.' },
      airflow: { en: 'Continuous voiced friction.', vi: 'Hơi thoát ma sát liên tục kèm tiếng rung.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 7,
      tongueHeight: 'mid',
      tongueBackness: 'central',
      lipShape: 'labiodental',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_friction'
    },
    examples: [
      { word: 'van', ipa: '/væn/', position: 'initial', meaning_vi: 'xe tải nhỏ' },
      { word: 'love', ipa: '/lʌv/', position: 'final', meaning_vi: 'yêu' },
      { word: 'river', ipa: '/ˈrɪvə/', position: 'medial', meaning_vi: 'con sông' }
    ],
    minimalPairs: [
      {
        wordA: 'vest', soundA: 'v', ipaA: '/vest/', meaningA_vi: 'áo gi-lê',
        wordB: 'west', soundB: 'w', ipaB: '/west/', meaningB_vi: 'phía tây',
        contrastTip: {
          en: 'For /v/ top teeth touch lower lip; for /w/ lips are rounded without teeth contact.',
          vi: 'Với /v/ răng trên chạm môi dưới; với /w/ chu tròn môi không chạm răng.'
        }
      }
    ],
    b1Sentence: {
      text: 'Victor drove a very lovely van to the village.',
      ipa: '/ˈvɪktə drəʊv ə ˈveri ˈlʌvli væn tə ðə ˈvɪlɪdʒ/',
      translation_vi: 'Victor đã lái một chiếc xe tải rất đáng yêu đến ngôi làng.'
    },
    miniDialogue: {
      speakerA: 'Vera', lineA: 'Have you visited the village across the river?', lineA_vi: 'Bạn đã đến thăm ngôi làng bên kia sông chưa?',
      speakerB: 'Vincent', lineB: 'Yes, we live very close to that lovely valley.', lineB_vi: 'Rồi, chúng tôi sống rất gần thung lũng đáng yêu đó.'
    },
    vietnamesePitfalls: {
      isHighRisk: true,
      commonMistake: {
        en: 'Pronouncing /v/ like /w/ or /b/, and dropping final /v/ in "live", "have", "leave".',
        vi: 'Đọc nhầm /v/ thành /w/ hoặc /b/, và hay nuốt âm cuối /v/ trong "live", "have", "leave".'
      },
      howToFix: {
        en: 'Ensure teeth touch lower lip and buzz your vocal cords at the end: "ha-V", "li-V".',
        vi: 'Chắc chắn răng cắn nhẹ môi dưới và rung cổ họng ở cuối từ: "ha-V", "li-V".'
      },
      finalConsonantAlert: true
    }
  },

  // 29. /θ/ (Voiceless dental fricative - THINK)
  {
    id: 'c_theta',
    symbol: 'θ',
    category: 'consonant',
    subCategory: 'fricative',
    name: { en: 'Voiceless dental fricative (TH sound)', vi: 'Phụ âm /θ/ răng-lưỡi, vô thanh' },
    voiced: false,
    place: { en: 'Dental (tongue between teeth)', vi: 'Giữa hai hàm răng' },
    manner: { en: 'Fricative', vi: 'Xát (không rung)' },
    description: {
      en: 'Tip of tongue placed gently between upper and lower front teeth, air blows through smoothly without voice.',
      vi: 'Đầu lưỡi đặt nhẹ giữa hai hàm răng cửa, thổi luồng hơi êm dịu qua kẽ răng. Cổ họng hoàn toàn không rung.'
    },
    articulationGuide: {
      lips: { en: 'Slightly open and relaxed.', vi: 'Hé mở tự nhiên.' },
      tongue: { en: 'Tip protrudes slightly between teeth or touches back of upper teeth.', vi: 'Đầu lưỡi thò nhẹ ra giữa hai hàm răng cửa.' },
      teeth: { en: 'Lightly touching the tongue tip.', vi: 'Hai hàm răng khép nhẹ kẹp lấy đầu lưỡi.' },
      vocalCords: { en: 'Silent (voiceless).', vi: 'Không rung dây thanh.' },
      airflow: { en: 'Soft, gentle continuous friction.', vi: 'Hơi thổi nhẹ qua kẽ răng liên tục.' }
    },
    sagittalConfig: {
      tongueTipX: 6,
      tongueTipY: 4,
      tongueHeight: 'high',
      tongueBackness: 'front',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: false,
      airflowType: 'oral_friction'
    },
    examples: [
      { word: 'think', ipa: '/θɪŋk/', position: 'initial', meaning_vi: 'suy nghĩ' },
      { word: 'teeth', ipa: '/tiːθ/', position: 'final', meaning_vi: 'răng' },
      { word: 'author', ipa: '/ˈɔːθə/', position: 'medial', meaning_vi: 'tác giả' }
    ],
    minimalPairs: [
      {
        wordA: 'think', soundA: 'θ', ipaA: '/θɪŋk/', meaningA_vi: 'suy nghĩ',
        wordB: 'sink', soundB: 's', ipaB: '/sɪŋk/', meaningB_vi: 'chìm, bồn rửa',
        contrastTip: {
          en: 'For /θ/ tongue is between teeth; for /s/ tongue is hidden behind teeth with sharp hiss.',
          vi: 'Với /θ/ đầu lưỡi thò giữa răng; với /s/ lưỡi giấu sau răng và xì sắc nhọn.'
        }
      },
      {
        wordA: 'three', soundA: 'θ', ipaA: '/θriː/', meaningA_vi: 'số ba',
        wordB: 'tree', soundB: 't', ipaB: '/triː/', meaningB_vi: 'cái cây',
        contrastTip: {
          en: '/θ/ is a continuous soft friction; /t/ is a stop burst.',
          vi: '/θ/ là luồng hơi xì êm liên tục; /t/ là âm nổ tắc dứt khoát.'
        }
      }
    ],
    b1Sentence: {
      text: 'Thirty-three athletes thought about their third marathon.',
      ipa: '/ˈθɜːti θriː ˈæθliːts θɔːt əˈbaʊt ðeə θɜːd ˈmærəθən/',
      translation_vi: 'Ba mươi ba vận động viên đã suy nghĩ về cuộc chạy marathon thứ ba của họ.'
    },
    miniDialogue: {
      speakerA: 'Theo', lineA: 'Do you think thirty minutes is enough time?', lineA_vi: 'Bạn có nghĩ ba mươi phút là đủ thời gian không?',
      speakerB: 'Beth', lineB: 'I thank you for asking, that is healthy!', lineB_vi: 'Cảm ơn bạn đã hỏi, như thế rất tốt cho sức khỏe!'
    },
    vietnamesePitfalls: {
      isHighRisk: true,
      commonMistake: {
        en: 'Major obstacle for Vietnamese speakers: substituting /t/, /s/, or /f/ ("think" -> "tink" / "sink").',
        vi: 'Trở ngại lớn nhất của người Việt: thay thế bằng /t/, /s/ hoặc /f/ (đọc "think" thành "thinh" hoặc "xinh").'
      },
      howToFix: {
        en: 'Stick your tongue tip out slightly between your teeth and blow gently—do not retract it.',
        vi: 'Chủ động thò đầu lưỡi ra giữa hai răng và thổi hơi nhẹ nhàng—đừng rụt lưỡi vào trong.'
      },
      finalConsonantAlert: true
    }
  },

  // 30. /ð/ (Voiced dental fricative - THIS)
  {
    id: 'c_eth',
    symbol: 'ð',
    category: 'consonant',
    subCategory: 'fricative',
    name: { en: 'Voiced dental fricative (TH sound)', vi: 'Phụ âm /ð/ răng-lưỡi, hữu thanh' },
    voiced: true,
    place: { en: 'Dental (tongue between teeth)', vi: 'Giữa hai hàm răng' },
    manner: { en: 'Fricative', vi: 'Xát (hữu thanh)' },
    description: {
      en: 'Same tongue-between-teeth position as /θ/, but vocal cords vibrate with a buzzing friction.',
      vi: 'Cùng vị trí kẹp nhẹ đầu lưỡi giữa hai hàm răng như /θ/, nhưng có rung dây thanh quản tạo tiếng rè rè.'
    },
    articulationGuide: {
      lips: { en: 'Neutral and parted.', vi: 'Hé mở tự nhiên.' },
      tongue: { en: 'Tip rests lightly between front teeth while vibrating.', vi: 'Đầu lưỡi tựa nhẹ giữa răng cửa trong khi rung thanh quản.' },
      teeth: { en: 'Resting on tongue tip.', vi: 'Tựa nhẹ lên đầu lưỡi.' },
      vocalCords: { en: 'Vibrating actively with a buzz.', vi: 'Rung mạnh tạo âm rè rè rung ở đầu lưỡi.' },
      airflow: { en: 'Voiced continuous friction.', vi: 'Hơi thoát ma sát liên tục kèm tiếng rung.' }
    },
    sagittalConfig: {
      tongueTipX: 6,
      tongueTipY: 4,
      tongueHeight: 'high',
      tongueBackness: 'front',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_friction'
    },
    examples: [
      { word: 'this', ipa: '/ðɪs/', position: 'initial', meaning_vi: 'cái này' },
      { word: 'mother', ipa: '/ˈmʌðə/', position: 'medial', meaning_vi: 'người mẹ' },
      { word: 'breathe', ipa: '/briːð/', position: 'final', meaning_vi: 'hít thở' }
    ],
    minimalPairs: [
      {
        wordA: 'then', soundA: 'ð', ipaA: '/ðen/', meaningA_vi: 'sau đó',
        wordB: 'den', soundB: 'd', ipaB: '/den/', meaningB_vi: 'hang ổ',
        contrastTip: {
          en: 'For /ð/ tongue is between teeth with friction; for /d/ tongue touches alveolar ridge with a stop.',
          vi: 'Với /ð/ đầu lưỡi thò giữa răng xì hơi; với /d/ đầu lưỡi áp chặt vào nướu răng rồi bật.'
        }
      }
    ],
    b1Sentence: {
      text: 'My father and mother enjoyed the warm weather together.',
      ipa: '/maɪ ˈfɑːðər ənd ˈmʌðər ɪnˈdʒɔɪd ðə wɔːm ˈweðə təˈɡeðə/',
      translation_vi: 'Bố và mẹ tôi đã cùng nhau tận hưởng thời tiết ấm áp.'
    },
    miniDialogue: {
      speakerA: 'Dan', lineA: 'Is that their leather jacket over there?', lineA_vi: 'Kia có phải áo khoác da của họ ở đằng kia không?',
      speakerB: 'Heather', lineB: 'Yes, they bought this one together.', lineB_vi: 'Đúng rồi, họ đã cùng nhau mua chiếc này.'
    },
    vietnamesePitfalls: {
      isHighRisk: true,
      commonMistake: {
        en: 'Substituting /d/ or /z/ (saying "dis" instead of "this", "muder" instead of "mother").',
        vi: 'Đọc thành "d" hoặc "z" tiếng Việt (nói "đít" thay vì "this", "mơ-đờ" thay vì "mother").'
      },
      howToFix: {
        en: 'Place your tongue tip between your teeth and hum gently—feel the vibration on your tongue tip.',
        vi: 'Đặt đầu lưỡi kẹp nhẹ giữa hai hàm răng và ngân rung—cảm nhận độ rung tê tê ở đầu lưỡi.'
      },
      finalConsonantAlert: true
    }
  },

  // 31. /s/ (Voiceless alveolar fricative)
  {
    id: 'c_s',
    symbol: 's',
    category: 'consonant',
    subCategory: 'fricative',
    name: { en: 'Voiceless alveolar fricative', vi: 'Phụ âm /s/ xì hơi, vô thanh' },
    voiced: false,
    place: { en: 'Alveolar ridge', vi: 'Nướu chân răng trên' },
    manner: { en: 'Sibilant fricative', vi: 'Xát rít (xì hơi)' },
    description: {
      en: 'Tongue tip close behind upper teeth creating a narrow channel, air streams through with a sharp hiss. No voice.',
      vi: 'Đầu lưỡi nâng sát sau nướu răng trên tạo khe hẹp, luồng hơi xì mạnh qua kẽ răng tạo tiếng rít sắc nét. Không rung.'
    },
    articulationGuide: {
      lips: { en: 'Spread slightly.', vi: 'Hơi bè khóe miệng sang hai bên.' },
      tongue: { en: 'Tip close to alveolar ridge, sides sealed against upper molars.', vi: 'Đầu lưỡi sát nướu răng, hai bên rìa lưỡi áp chặt vào răng hàm trên.' },
      teeth: { en: 'Very close together, almost touching.', vi: 'Hai hàm răng khép gần sát nhau.' },
      vocalCords: { en: 'Silent (voiceless).', vi: 'Không rung dây thanh.' },
      airflow: { en: 'Sharp, intense central jet of hissing air.', vi: 'Luồng hơi xì mạnh và sắc nhọn ở giữa kẽ răng.' }
    },
    sagittalConfig: {
      tongueTipX: 5,
      tongueTipY: 3,
      tongueHeight: 'high',
      tongueBackness: 'front',
      lipShape: 'spread',
      velumRaised: true,
      vocalCordsVibrating: false,
      airflowType: 'oral_friction'
    },
    examples: [
      { word: 'see', ipa: '/siː/', position: 'initial', meaning_vi: 'nhìn thấy' },
      { word: 'bus', ipa: '/bʌs/', position: 'final', meaning_vi: 'xe buýt' },
      { word: 'city', ipa: '/ˈsɪti/', position: 'initial', meaning_vi: 'thành phố' }
    ],
    minimalPairs: [
      {
        wordA: 'sea', soundA: 's', ipaA: '/siː/', meaningA_vi: 'biển',
        wordB: 'she', soundB: 'ʃ', ipaB: '/ʃiː/', meaningB_vi: 'cô ấy',
        contrastTip: {
          en: '/s/ has spread lips and sharp hiss; /ʃ/ has rounded lips and soft "shhh" sound.',
          vi: '/s/ bè khóe miệng xì sắc; /ʃ/ chu tròn môi xì tiếng "suỵt" êm dày.'
        }
      }
    ],
    b1Sentence: {
      text: 'Six students saw seven sunny spots in the city.',
      ipa: '/sɪks ˈstjuːdnts sɔː ˈsevn ˈsʌni spɒts ɪn ðə ˈsɪti/',
      translation_vi: 'Sáu học sinh đã thấy bảy điểm đầy nắng trong thành phố.'
    },
    miniDialogue: {
      speakerA: 'Sam', lineA: 'Can you see the bus stop across the street?', lineA_vi: 'Bạn có nhìn thấy trạm xe buýt ở bên kia đường không?',
      speakerB: 'Sally', lineB: 'Yes, several buses stop there every hour.', lineB_vi: 'Có chứ, vài chiếc xe buýt dừng ở đó mỗi giờ.'
    },
    vietnamesePitfalls: {
      isHighRisk: true,
      commonMistake: {
        en: 'Dropping final /s/ (plural "books" -> "book", 3rd person "he likes" -> "he like").',
        vi: 'Bỏ quên âm xì đuôi /s/ (số nhiều "books" thành "book", động từ "he likes" thành "he like").'
      },
      howToFix: {
        en: 'Close your teeth and release a clear "sss" snake sound at the end of every target word.',
        vi: 'Khép răng lại và xì rõ tiếng "sss" như tiếng rắn ở đuôi mỗi từ.'
      },
      finalConsonantAlert: true
    }
  },

  // 32. /z/ (Voiced alveolar fricative)
  {
    id: 'c_z',
    symbol: 'z',
    category: 'consonant',
    subCategory: 'fricative',
    name: { en: 'Voiced alveolar fricative', vi: 'Phụ âm /z/ rung chân răng, hữu thanh' },
    voiced: true,
    place: { en: 'Alveolar ridge', vi: 'Nướu chân răng trên' },
    manner: { en: 'Sibilant fricative', vi: 'Xát rít (hữu thanh)' },
    description: {
      en: 'Exact same mouth position as /s/, but vocal cords vibrate with an energetic buzzing sound like a bee.',
      vi: 'Cùng vị trí lưỡi và răng như /s/, nhưng dây thanh rung mạnh tạo tiếng vo ve như ong bay.'
    },
    articulationGuide: {
      lips: { en: 'Slightly spread.', vi: 'Hơi bè khóe miệng.' },
      tongue: { en: 'Tip close behind upper front teeth.', vi: 'Đầu lưỡi nâng sát sau nướu răng trên.' },
      teeth: { en: 'Close together.', vi: 'Khép gần nhau.' },
      vocalCords: { en: 'Vibrating with buzzing resonance.', vi: 'Rung mạnh tạo âm vo ve.' },
      airflow: { en: 'Voiced continuous hiss.', vi: 'Luồng hơi xì có kèm tiếng rung.' }
    },
    sagittalConfig: {
      tongueTipX: 5,
      tongueTipY: 3,
      tongueHeight: 'high',
      tongueBackness: 'front',
      lipShape: 'spread',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_friction'
    },
    examples: [
      { word: 'zoo', ipa: '/zuː/', position: 'initial', meaning_vi: 'sở thú' },
      { word: 'rose', ipa: '/rəʊz/', position: 'final', meaning_vi: 'hoa hồng' },
      { word: 'music', ipa: '/ˈmjuːzɪk/', position: 'medial', meaning_vi: 'âm nhạc' }
    ],
    minimalPairs: [
      {
        wordA: 'eyes', soundA: 'z', ipaA: '/aɪz/', meaningA_vi: 'đôi mắt',
        wordB: 'ice', soundB: 's', ipaB: '/aɪs/', meaningB_vi: 'băng, đá',
        contrastTip: {
          en: '"Eyes" ends with buzzing /z/ and has a longer vowel; "ice" ends with voiceless /s/.',
          vi: '"Eyes" kết thúc bằng âm rung /z/ và nguyên âm dài hơn; "ice" kết thúc bằng /s/ không rung.'
        }
      }
    ],
    b1Sentence: {
      text: 'His cousin plays jazz music on busy Thursdays.',
      ipa: '/hɪz ˈkʌzn pleɪz dʒæz ˈmjuːzɪk ɒn ˈbɪzi ˈθɜːzdeɪz/',
      translation_vi: 'Anh họ của anh ấy chơi nhạc jazz vào những ngày thứ Năm bận rộn.'
    },
    miniDialogue: {
      speakerA: 'Zack', lineA: 'Is the zoo open on these freezing days?', lineA_vi: 'Sở thú có mở cửa vào những ngày giá rét này không?',
      speakerB: 'Liz', lineB: 'Yes, because the animals enjoy the breeze.', lineB_vi: 'Có, vì các loài động vật rất thích làn gió mát.'
    },
    vietnamesePitfalls: {
      isHighRisk: true,
      commonMistake: {
        en: 'Pronouncing final /z/ as voiceless /s/ or dropping it altogether ("plays" -> "play").',
        vi: 'Đọc âm cuối /z/ thành /s/ vô thanh hoặc nuốt luôn âm ("plays" thành "play").'
      },
      howToFix: {
        en: 'Keep your vocal cords vibrating so you hear a distinct "zzz" buzz at the end: "pl-eye-Z".',
        vi: 'Giữ dây thanh âm rung để phát ra tiếng vo ve "zzz" rõ nét ở đuôi: "pl-eye-Z".'
      },
      finalConsonantAlert: true
    }
  },

  // 33. /ʃ/ (Voiceless post-alveolar fricative - SHE)
  {
    id: 'c_esh',
    symbol: 'ʃ',
    category: 'consonant',
    subCategory: 'fricative',
    name: { en: 'Voiceless postalveolar fricative (SH sound)', vi: 'Phụ âm /ʃ/ sau chân răng, vô thanh' },
    voiced: false,
    place: { en: 'Postalveolar (behind gum ridge)', vi: 'Sau nướu răng trên' },
    manner: { en: 'Fricative', vi: 'Xát (chu môi, suỵt)' },
    description: {
      en: 'Lips slightly flared/rounded, tongue blade arched behind alveolar ridge, producing a soft "shhh" sound.',
      vi: 'Môi hơi chu tròn ra trước, mặt trước lưỡi uốn nhẹ về phía sau nướu răng, tạo tiếng "suỵt" êm và dày. Không rung.'
    },
    articulationGuide: {
      lips: { en: 'Rounded and flared gently forward.', vi: 'Hơi chu tròn và hơi nhô ra trước.' },
      tongue: { en: 'Blade raised broad behind alveolar ridge.', vi: 'Mặt lưỡi nâng rộng phía sau nướu răng.' },
      teeth: { en: 'Close together.', vi: 'Khép gần nhau.' },
      vocalCords: { en: 'Silent (voiceless).', vi: 'Không rung dây thanh.' },
      airflow: { en: 'Broad, rushing "shhh" friction.', vi: 'Luồng hơi dày như tiếng ra hiệu im lặng "suỵt".' }
    },
    sagittalConfig: {
      tongueTipX: 4,
      tongueTipY: 4,
      tongueHeight: 'high',
      tongueBackness: 'central',
      lipShape: 'rounded',
      velumRaised: true,
      vocalCordsVibrating: false,
      airflowType: 'oral_friction'
    },
    examples: [
      { word: 'she', ipa: '/ʃiː/', position: 'initial', meaning_vi: 'cô ấy' },
      { word: 'fish', ipa: '/fɪʃ/', position: 'final', meaning_vi: 'con cá' },
      { word: 'station', ipa: '/ˈsteɪʃn/', position: 'medial', meaning_vi: 'nhà ga' }
    ],
    minimalPairs: [
      {
        wordA: 'shoe', soundA: 'ʃ', ipaA: '/ʃuː/', meaningA_vi: 'chiếc giày',
        wordB: 'sue', soundB: 's', ipaB: '/suː/', meaningB_vi: 'kiện tụng',
        contrastTip: {
          en: '/ʃ/ has rounded lips and soft hush; /s/ has spread lips and sharp hiss.',
          vi: '/ʃ/ chu tròn môi xì êm; /s/ bè môi mỉm cười xì sắc nhọn.'
        }
      }
    ],
    b1Sentence: {
      text: 'She washed the special English dishes in the shop.',
      ipa: '/ʃiː wɒʃt ðə ˈspeʃl ˈɪŋɡlɪʃ ˈdɪʃɪz ɪn ðə ʃɒp/',
      translation_vi: 'Cô ấy đã rửa những chiếc đĩa kiểu Anh đặc biệt trong cửa hàng.'
    },
    miniDialogue: {
      speakerA: 'Sharon', lineA: 'Should we push the door or pull it shut?', lineA_vi: 'Chúng ta nên đẩy cửa hay kéo đóng lại?',
      speakerB: 'Sean', lineB: 'Push it gently, I wish to see inside.', lineB_vi: 'Hãy đẩy nhẹ thôi, tôi ước được nhìn vào bên trong.'
    },
    vietnamesePitfalls: {
      isHighRisk: true,
      commonMistake: {
        en: 'Flattening /ʃ/ into /s/ (saying "she" like "see", "English" like "Eng-lis").',
        vi: 'Bè môi đọc /ʃ/ thành /s/ (đọc "she" thành "si", "English" thành "ing-lít").'
      },
      howToFix: {
        en: 'Round your lips into a circle and pull your tongue slightly back into a "shhh" position.',
        vi: 'Chủ động chu tròn môi như làm hiệu im lặng "suỵt" và kéo lưỡi lùi nhẹ ra sau.'
      },
      finalConsonantAlert: true
    }
  },

  // 34. /ʒ/ (Voiced post-alveolar fricative - TELEVISION)
  {
    id: 'c_ezh',
    symbol: 'ʒ',
    category: 'consonant',
    subCategory: 'fricative',
    name: { en: 'Voiced postalveolar fricative', vi: 'Phụ âm /ʒ/ sau chân răng, hữu thanh' },
    voiced: true,
    place: { en: 'Postalveolar (behind gum ridge)', vi: 'Sau nướu răng trên' },
    manner: { en: 'Fricative', vi: 'Xát (chu môi, hữu thanh)' },
    description: {
      en: 'Same mouth and rounded lip position as /ʃ/, but vocal cords vibrate actively. Found in "measure", "vision", "beige".',
      vi: 'Cùng vị trí chu tròn môi và đặt lưỡi như /ʃ/, nhưng dây thanh rung tạo tiếng rền vang. Gặp trong "measure", "vision", "beige".'
    },
    articulationGuide: {
      lips: { en: 'Gently rounded and flared.', vi: 'Hơi chu tròn và đưa nhẹ ra trước.' },
      tongue: { en: 'Blade arched behind alveolar ridge.', vi: 'Mặt trước lưỡi nâng cong phía sau nướu răng.' },
      teeth: { en: 'Close together.', vi: 'Khép gần.' },
      vocalCords: { en: 'Vibrating actively.', vi: 'Rung dây thanh mạnh mẽ.' },
      airflow: { en: 'Voiced smooth friction.', vi: 'Luồng hơi ma sát có độ rung trầm.' }
    },
    sagittalConfig: {
      tongueTipX: 4,
      tongueTipY: 4,
      tongueHeight: 'high',
      tongueBackness: 'central',
      lipShape: 'rounded',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_friction'
    },
    examples: [
      { word: 'television', ipa: '/ˈtelɪvɪʒn/', position: 'medial', meaning_vi: 'vô tuyến, TV' },
      { word: 'measure', ipa: '/ˈmeʒə/', position: 'medial', meaning_vi: 'đo lường' },
      { word: 'beige', ipa: '/beɪʒ/', position: 'final', meaning_vi: 'màu be' }
    ],
    minimalPairs: [
      {
        wordA: 'measure', soundA: 'ʒ', ipaA: '/ˈmeʒə/', meaningA_vi: 'đo đạc',
        wordB: 'masher', soundB: 'ʃ', ipaB: '/ˈmæʃə/', meaningB_vi: 'dụng cụ nghiền',
        contrastTip: {
          en: '/ʒ/ is voiced; /ʃ/ is voiceless.',
          vi: '/ʒ/ có rung thanh quản; /ʃ/ không rung.'
        }
      }
    ],
    b1Sentence: {
      text: 'It is a pleasure to watch television in our leisure time.',
      ipa: '/ɪt ɪz ə ˈpleʒə tə wɒtʃ ˈtelɪvɪʒn ɪn ˈaʊə ˈleʒə taɪm/',
      translation_vi: 'Thật là một niềm vui khi xem truyền hình trong thời gian rảnh rỗi.'
    },
    miniDialogue: {
      speakerA: 'Jean', lineA: 'Did you make a decision about the beige jacket?', lineA_vi: 'Bạn đã đưa ra quyết định về chiếc áo khoác màu be chưa?',
      speakerB: 'George', lineB: 'Yes, it gives me great pleasure to wear it.', lineB_vi: 'Rồi, tôi rất vui khi được mặc nó.'
    },
    vietnamesePitfalls: {
      isHighRisk: true,
      commonMistake: {
        en: 'Pronouncing as /dʒ/ (adding an unwanted stop "d") or /z/.',
        vi: 'Đọc chèn thêm âm "d" thành /dʒ/ hoặc biến thành /z/.'
      },
      howToFix: {
        en: 'Maintain continuous friction without tapping the tongue: like saying "shhh" while humming.',
        vi: 'Giữ luồng hơi ma sát liên tục không để lưỡi đập: giống như vừa nói "suỵt" vừa ngân rung giọng.'
      }
    }
  },

  // 35. /h/ (Voiceless glottal fricative)
  {
    id: 'c_h',
    symbol: 'h',
    category: 'consonant',
    subCategory: 'fricative',
    name: { en: 'Voiceless glottal fricative', vi: 'Phụ âm /h/ thanh hầu, vô thanh' },
    voiced: false,
    place: { en: 'Glottis (vocal folds)', vi: 'Khe thanh môn' },
    manner: { en: 'Fricative', vi: 'Xát (hơi thở)' },
    description: {
      en: 'Vocal folds narrow slightly in the throat, air exhales like an audible, warm breath. No oral obstruction.',
      vi: 'Dây thanh hơi khép nhẹ trong cổ họng, luồng hơi thở ấm phà ra nhẹ nhàng. Không có vật cản trong miệng.'
    },
    articulationGuide: {
      lips: { en: 'Takes shape of following vowel.', vi: 'Định hình theo nguyên âm đứng sau.' },
      tongue: { en: 'Takes position of following vowel.', vi: 'Tự động ở vị trí nguyên âm tiếp theo.' },
      teeth: { en: 'Slightly apart.', vi: 'Hé mở nhẹ.' },
      vocalCords: { en: 'Narrowed, air hisses through without vibrating.', vi: 'Khép hẹp, hơi thổi qua không rung.' },
      airflow: { en: 'Warm, soft sigh of air from throat.', vi: 'Hơi thở ấm, nhẹ nhàng phà ra từ họng.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 7,
      tongueHeight: 'mid',
      tongueBackness: 'central',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: false,
      airflowType: 'oral_friction'
    },
    examples: [
      { word: 'hat', ipa: '/hæt/', position: 'initial', meaning_vi: 'cái mũ' },
      { word: 'home', ipa: '/həʊm/', position: 'initial', meaning_vi: 'ngôi nhà' },
      { word: 'ahead', ipa: '/əˈhed/', position: 'medial', meaning_vi: 'phía trước' }
    ],
    minimalPairs: [
      {
        wordA: 'heart', soundA: 'h', ipaA: '/hɑːt/', meaningA_vi: 'trái tim',
        wordB: 'art', soundB: 'no_h', ipaB: '/ɑːt/', meaningB_vi: 'nghệ thuật',
        contrastTip: {
          en: 'Breathe out on "heart"; start cleanly with smooth vowel on "art".',
          vi: 'Phà hơi thở ở "heart"; bắt đầu êm dịu trực tiếp từ nguyên âm ở "art".'
        }
      }
    ],
    b1Sentence: {
      text: 'Harry hopes to have a happy holiday in the hills.',
      ipa: '/ˈhæri həʊps tə hæv ə ˈhæpi ˈhɒlədeɪ ɪn ðə hɪlz/',
      translation_vi: 'Harry hy vọng sẽ có một kỳ nghỉ hạnh phúc trên những ngọn đồi.'
    },
    miniDialogue: {
      speakerA: 'Hannah', lineA: 'How is your hand after holding the heavy hammer?', lineA_vi: 'Bàn tay của bạn thế nào sau khi cầm chiếc búa nặng?',
      speakerB: 'Henry', lineB: 'It is healthy, hopefully it will not hurt.', lineB_vi: 'Vẫn khỏe, hy vọng là nó sẽ không bị đau.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Dropping /h/ or adding a harsh scraping sound from the throat.',
        vi: 'Nuốt mất âm /h/ hoặc gằn cổ họng quá gắt.'
      },
      howToFix: {
        en: 'Simply exhale warm breath onto your glasses as if fogging them up.',
        vi: 'Chỉ cần hà hơi ấm nhẹ nhàng như khi bạn hà hơi làm mờ tròng kính.'
      }
    }
  },

  // 36. /tʃ/ (Voiceless post-alveolar affricate - CHAIR)
  {
    id: 'c_tsh',
    symbol: 'tʃ',
    category: 'consonant',
    subCategory: 'affricate',
    name: { en: 'Voiceless postalveolar affricate (CH sound)', vi: 'Phụ âm ghép /tʃ/ vô thanh' },
    voiced: false,
    place: { en: 'Postalveolar', vi: 'Sau nướu răng trên' },
    manner: { en: 'Affricate (stop + fricative)', vi: 'Tắc xát (bật + xì)' },
    description: {
      en: 'Begins with /t/ tongue stop, then releases immediately into rounded /ʃ/ friction. Crisp "ch" sound.',
      vi: 'Bắt đầu bằng vị trí chặn hơi của /t/, rồi nhả ngay sang luồng hơi xát chu môi của /ʃ/. Âm "ch" sắc nét.'
    },
    articulationGuide: {
      lips: { en: 'Rounded and projected forward.', vi: 'Chu tròn và hơi nhô ra trước.' },
      tongue: { en: 'Tip touches alveolar ridge, releases into arched postalveolar position.', vi: 'Đầu lưỡi chạm nướu răng trên chặn hơi rồi hạ nhanh sang vị trí xát.' },
      teeth: { en: 'Close together.', vi: 'Khép gần nhau.' },
      vocalCords: { en: 'Silent (voiceless).', vi: 'Không rung dây thanh.' },
      airflow: { en: 'Explosive burst followed instantly by friction.', vi: 'Bật nổ kèm ma sát nhanh gọn.' }
    },
    sagittalConfig: {
      tongueTipX: 4,
      tongueTipY: 3,
      tongueHeight: 'high',
      tongueBackness: 'central',
      lipShape: 'rounded',
      velumRaised: true,
      vocalCordsVibrating: false,
      airflowType: 'oral_burst'
    },
    examples: [
      { word: 'chair', ipa: '/tʃeə/', position: 'initial', meaning_vi: 'cái ghế' },
      { word: 'match', ipa: '/mætʃ/', position: 'final', meaning_vi: 'trận đấu, que diêm' },
      { word: 'teacher', ipa: '/ˈtiːtʃə/', position: 'medial', meaning_vi: 'giáo viên' }
    ],
    minimalPairs: [
      {
        wordA: 'cheap', soundA: 'tʃ', ipaA: '/tʃiːp/', meaningA_vi: 'rẻ tiền',
        wordB: 'jeep', soundB: 'dʒ', ipaB: '/dʒiːp/', meaningB_vi: 'xe jeep',
        contrastTip: {
          en: '/tʃ/ is voiceless and sharp; /dʒ/ has strong vocal cord buzz.',
          vi: '/tʃ/ không rung thanh quản; /dʒ/ rung thanh quản trầm ấm.'
        }
      },
      {
        wordA: 'chair', soundA: 'tʃ', ipaA: '/tʃeə/', meaningA_vi: 'cái ghế',
        wordB: 'share', soundB: 'ʃ', ipaB: '/ʃeə/', meaningB_vi: 'chia sẻ',
        contrastTip: {
          en: '"Chair" has a distinct stop /t/ explosion; "share" begins with smooth friction.',
          vi: '"Chair" có điểm chặn hơi bật nổ; "share" lướt xì êm ái ngay từ đầu.'
        }
      }
    ],
    b1Sentence: {
      text: 'Charles chose cheese and chips for children’s lunch.',
      ipa: '/tʃɑːlz tʃəʊz tʃiːz ənd tʃɪps fɔː ˈtʃɪldrənz lʌntʃ/',
      translation_vi: 'Charles đã chọn phô mai và khoai tây chiên cho bữa trưa của trẻ em.'
    },
    miniDialogue: {
      speakerA: 'Charlie', lineA: 'Which match did you watch on the television?', lineA_vi: 'Bạn đã xem trận đấu nào trên tivi?',
      speakerB: 'Chelsea', lineB: 'A championship football match with rich action.', lineB_vi: 'Một trận bóng đá giải vô địch đầy kịch tính.'
    },
    vietnamesePitfalls: {
      isHighRisk: true,
      commonMistake: {
        en: 'Dropping final /tʃ/ in words like "match", "watch", "church" (saying "ma", "wo").',
        vi: 'Bỏ quên âm đuôi /tʃ/ trong "match", "watch", "church" (đọc thành "mát", "oát").'
      },
      howToFix: {
        en: 'Stop the air with your tongue, then pop a sharp "ch" at the end of the word.',
        vi: 'Chặn hơi bằng đầu lưỡi rồi bật dứt khoát tiếng "ch" ở cuối: "mat-CH".'
      },
      finalConsonantAlert: true
    }
  },

  // 37. /dʒ/ (Voiced post-alveolar affricate - JOY / JUDGE)
  {
    id: 'c_dzh',
    symbol: 'dʒ',
    category: 'consonant',
    subCategory: 'affricate',
    name: { en: 'Voiced postalveolar affricate (J sound)', vi: 'Phụ âm ghép /dʒ/ hữu thanh' },
    voiced: true,
    place: { en: 'Postalveolar', vi: 'Sau nướu răng trên' },
    manner: { en: 'Affricate (stop + fricative)', vi: 'Tắc xát (hữu thanh)' },
    description: {
      en: 'Starts with /d/ tongue stop, releases into /ʒ/ with vocal cords vibrating. Found in "joy", "job", "bridge".',
      vi: 'Bắt đầu bằng vị trí chặn hơi của /d/, nhả sang âm xát /ʒ/ đồng thời rung mạnh dây thanh quản. Gặp trong "joy", "job", "bridge".'
    },
    articulationGuide: {
      lips: { en: 'Rounded and pushed forward.', vi: 'Chu tròn và đưa nhẹ ra trước.' },
      tongue: { en: 'Tip blocks alveolar ridge, releases into postalveolar friction with voice.', vi: 'Đầu lưỡi chặn nướu răng rồi nhả sang xát kèm tiếng rung.' },
      teeth: { en: 'Close together.', vi: 'Khép gần nhau.' },
      vocalCords: { en: 'Vibrating actively.', vi: 'Rung dây thanh mạnh mẽ.' },
      airflow: { en: 'Voiced explosive burst into friction.', vi: 'Bật nổ kèm ma sát có tiếng rung.' }
    },
    sagittalConfig: {
      tongueTipX: 4,
      tongueTipY: 3,
      tongueHeight: 'high',
      tongueBackness: 'central',
      lipShape: 'rounded',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_burst'
    },
    examples: [
      { word: 'joy', ipa: '/dʒɔɪ/', position: 'initial', meaning_vi: 'niềm vui' },
      { word: 'bridge', ipa: '/brɪdʒ/', position: 'final', meaning_vi: 'cây cầu' },
      { word: 'danger', ipa: '/ˈdeɪndʒə/', position: 'medial', meaning_vi: 'sự nguy hiểm' }
    ],
    minimalPairs: [
      {
        wordA: 'jewel', soundA: 'dʒ', ipaA: '/ˈdʒuːəl/', meaningA_vi: 'đá quý',
        wordB: 'chew', soundB: 'tʃ', ipaB: '/tʃuː/', meaningB_vi: 'nhai',
        contrastTip: {
          en: '/dʒ/ has strong vocal vibration; /tʃ/ has no vocal vibration.',
          vi: '/dʒ/ có rung thanh quản trầm; /tʃ/ không rung thanh quản.'
        }
      }
    ],
    b1Sentence: {
      text: 'George enjoyed his journey across the large bridge in June.',
      ipa: '/dʒɔːdʒ ɪnˈdʒɔɪd hɪz ˈdʒɜːni əˈkrɒs ðə lɑːdʒ brɪdʒ ɪn dʒuːn/',
      translation_vi: 'George rất thích thú với chuyến hành trình qua cây cầu lớn vào tháng Sáu.'
    },
    miniDialogue: {
      speakerA: 'Jack', lineA: 'Did you apply for the engineering job?', lineA_vi: 'Bạn đã nộp đơn cho công việc kỹ sư chưa?',
      speakerB: 'Jill', lineB: 'Yes, I hope to join the project in July.', lineB_vi: 'Rồi, tôi hy vọng sẽ tham gia dự án vào tháng Bảy.'
    },
    vietnamesePitfalls: {
      isHighRisk: true,
      commonMistake: {
        en: 'Pronouncing as Vietnamese "d" (z sound) and dropping final /dʒ/ in "page", "large", "bridge".',
        vi: 'Đọc thành âm "d" / "gi" tiếng Việt và nuốt âm cuối /dʒ/ trong "page", "large", "bridge".'
      },
      howToFix: {
        en: 'Round your lips, stop the air, and buzz firmly at the end of the word: "lar-J".',
        vi: 'Chu tròn môi, chặn hơi và rung bật rõ ràng ở cuối từ: "lar-J".'
      },
      finalConsonantAlert: true
    }
  },

  // 38. /m/ (Voiced bilabial nasal)
  {
    id: 'c_m',
    symbol: 'm',
    category: 'consonant',
    subCategory: 'nasal',
    name: { en: 'Voiced bilabial nasal', vi: 'Phụ âm /m/ hai môi, mũi, hữu thanh' },
    voiced: true,
    place: { en: 'Bilabial (both lips)', vi: 'Hai môi' },
    manner: { en: 'Nasal', vi: 'Mũi' },
    description: {
      en: 'Both lips close completely, soft palate lowers, voice resonates freely through nasal cavity.',
      vi: 'Hai môi ngậm chặt, ngạc mềm hạ xuống để luồng hơi và âm thanh thoát hoàn toàn qua mũi.'
    },
    articulationGuide: {
      lips: { en: 'Firmly closed.', vi: 'Ngậm chặt hai môi.' },
      tongue: { en: 'Resting flat.', vi: 'Nằm phẳng tự nhiên.' },
      teeth: { en: 'Slightly apart behind lips.', vi: 'Hé mở phía sau môi.' },
      vocalCords: { en: 'Vibrating continuously with deep hum.', vi: 'Rung đều tạo tiếng ngân rung qua mũi.' },
      airflow: { en: 'Continuous flow entirely through the nose.', vi: 'Toàn bộ luồng hơi thoát qua đường mũi.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 7,
      tongueHeight: 'mid',
      tongueBackness: 'central',
      lipShape: 'closed',
      velumRaised: false,
      vocalCordsVibrating: true,
      airflowType: 'nasal'
    },
    examples: [
      { word: 'man', ipa: '/mæn/', position: 'initial', meaning_vi: 'người đàn ông' },
      { word: 'sum', ipa: '/sʌm/', position: 'final', meaning_vi: 'tổng số' },
      { word: 'summer', ipa: '/ˈsʌmə/', position: 'medial', meaning_vi: 'mùa hè' }
    ],
    minimalPairs: [
      {
        wordA: 'sum', soundA: 'm', ipaA: '/sʌm/', meaningA_vi: 'tổng số',
        wordB: 'sun', soundB: 'n', ipaB: '/sʌn/', meaningB_vi: 'mặt trời',
        contrastTip: {
          en: 'For /m/ lips are closed; for /n/ tongue tip seals alveolar ridge.',
          vi: 'Với /m/ hai môi ngậm chặt; với /n/ đầu lưỡi chạm nướu răng trên.'
        }
      }
    ],
    b1Sentence: {
      text: 'My mother made some warm milk on Monday morning.',
      ipa: '/maɪ ˈmʌðə meɪd sʌm wɔːm mɪlk ɒn ˈmʌndeɪ ˈmɔːnɪŋ/',
      translation_vi: 'Mẹ tôi đã làm chút sữa ấm vào sáng thứ Hai.'
    },
    miniDialogue: {
      speakerA: 'Mark', lineA: 'Could you meet me tomorrow evening?', lineA_vi: 'Bạn có thể gặp tôi vào tối mai không?',
      speakerB: 'Mary', lineB: 'Certainly, making time for friends is my pleasure.', lineB_vi: 'Chắc chắn rồi, dành thời gian cho bạn bè là niềm vui của tôi.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Generally easy, but opening lips too quickly at word ends.',
        vi: 'Khá dễ với người Việt, nhưng đôi khi mở môi quá sớm ở cuối từ.'
      },
      howToFix: {
        en: 'Keep lips closed and hum gently until the word is complete: "su-M".',
        vi: 'Giữ môi ngậm và ngân nhẹ qua mũi cho đến khi kết thúc từ: "su-M".'
      }
    }
  },

  // 39. /n/ (Voiced alveolar nasal)
  {
    id: 'c_n',
    symbol: 'n',
    category: 'consonant',
    subCategory: 'nasal',
    name: { en: 'Voiced alveolar nasal', vi: 'Phụ âm /n/ chân răng, mũi, hữu thanh' },
    voiced: true,
    place: { en: 'Alveolar ridge', vi: 'Nướu chân răng trên' },
    manner: { en: 'Nasal', vi: 'Mũi' },
    description: {
      en: 'Tongue tip presses against alveolar ridge, soft palate lowers, voice escapes through the nose.',
      vi: 'Đầu lưỡi ép vào nướu răng trên chặn khoang miệng, ngạc mềm hạ xuống để hơi thoát qua mũi.'
    },
    articulationGuide: {
      lips: { en: 'Parted naturally.', vi: 'Hé mở tự nhiên.' },
      tongue: { en: 'Tip seals firmly along alveolar ridge.', vi: 'Đầu lưỡi áp chặt vào nướu răng trên.' },
      teeth: { en: 'Slightly apart.', vi: 'Hé mở.' },
      vocalCords: { en: 'Vibrating.', vi: 'Rung dây thanh.' },
      airflow: { en: 'Continuous flow through nose.', vi: 'Hơi thoát liên tục qua mũi.' }
    },
    sagittalConfig: {
      tongueTipX: 5,
      tongueTipY: 3,
      tongueHeight: 'high',
      tongueBackness: 'front',
      lipShape: 'neutral',
      velumRaised: false,
      vocalCordsVibrating: true,
      airflowType: 'nasal'
    },
    examples: [
      { word: 'no', ipa: '/nəʊ/', position: 'initial', meaning_vi: 'không' },
      { word: 'sun', ipa: '/sʌn/', position: 'final', meaning_vi: 'mặt trời' },
      { word: 'funny', ipa: '/ˈfʌni/', position: 'medial', meaning_vi: 'hài hước' }
    ],
    minimalPairs: [
      {
        wordA: 'sin', soundA: 'n', ipaA: '/sɪn/', meaningA_vi: 'tội lỗi',
        wordB: 'sing', soundB: 'ŋ', ipaB: '/sɪŋ/', meaningB_vi: 'hát',
        contrastTip: {
          en: 'In "sin" tongue tip is on the front gum ridge; in "sing" back of tongue touches soft palate.',
          vi: 'Trong "sin" đầu lưỡi ở nướu răng trên; trong "sing" cuống lưỡi chạm ngạc mềm.'
        }
      }
    ],
    b1Sentence: {
      text: 'Nine green pens were found on the brown bench.',
      ipa: '/naɪn ɡriːn penz wə faʊnd ɒn ðə braʊn bentʃ/',
      translation_vi: 'Chín cây bút xanh lá đã được tìm thấy trên chiếc ghế gỗ dài màu nâu.'
    },
    miniDialogue: {
      speakerA: 'Ned', lineA: 'Can we plan our new journey tonight?', lineA_vi: 'Chúng ta có thể lên kế hoạch cho chuyến đi mới tối nay không?',
      speakerB: 'Nora', lineB: 'Yes, nine o’clock suits me nicely.', lineB_vi: 'Được chứ, chín giờ rất tiện cho tôi.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Dropping final /n/ or confusing with /l/ in some northern Vietnamese dialects.',
        vi: 'Bỏ quên âm cuối /n/ hoặc nhầm lẫn giữa /n/ và /l/ theo phương ngữ địa phương.'
      },
      howToFix: {
        en: 'Hold your tongue tip firmly against the gum ridge until the sound finishes: "su-N".',
        vi: 'Giữ đầu lưỡi áp chặt vào nướu răng cho đến khi âm kết thúc hẳn: "su-N".'
      },
      finalConsonantAlert: true
    }
  },

  // 40. /ŋ/ (Voiced velar nasal - SING)
  {
    id: 'c_eng',
    symbol: 'ŋ',
    category: 'consonant',
    subCategory: 'nasal',
    name: { en: 'Voiced velar nasal (NG sound)', vi: 'Phụ âm /ŋ/ ngạc mềm, mũi, hữu thanh' },
    voiced: true,
    place: { en: 'Velar (soft palate)', vi: 'Ngạc mềm' },
    manner: { en: 'Nasal', vi: 'Mũi' },
    description: {
      en: 'Back of tongue presses against soft palate, soft palate lowers, voice resonates through nose. Never occurs at start of words in English.',
      vi: 'Cuống lưỡi nâng áp vào ngạc mềm, ngạc mềm hạ xuống cho hơi thoát qua mũi. Không bao giờ đứng đầu từ trong tiếng Anh.'
    },
    articulationGuide: {
      lips: { en: 'Parted comfortably.', vi: 'Hé mở tự nhiên.' },
      tongue: { en: 'Back of tongue seals against soft palate.', vi: 'Cuống lưỡi nâng áp chặt vào ngạc mềm.' },
      teeth: { en: 'Slightly apart.', vi: 'Hé mở.' },
      vocalCords: { en: 'Vibrating.', vi: 'Rung dây thanh.' },
      airflow: { en: 'Continuous nasal resonance.', vi: 'Âm ngân vang qua mũi.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 8,
      tongueHeight: 'high',
      tongueBackness: 'back',
      lipShape: 'neutral',
      velumRaised: false,
      vocalCordsVibrating: true,
      airflowType: 'nasal'
    },
    examples: [
      { word: 'sing', ipa: '/sɪŋ/', position: 'final', meaning_vi: 'ca hát' },
      { word: 'ring', ipa: '/rɪŋ/', position: 'final', meaning_vi: 'chiếc nhẫn, reo chuông' },
      { word: 'finger', ipa: '/ˈfɪŋɡə/', position: 'medial', meaning_vi: 'ngón tay' }
    ],
    minimalPairs: [
      {
        wordA: 'thing', soundA: 'ŋ', ipaA: '/θɪŋ/', meaningA_vi: 'đồ vật',
        wordB: 'thin', soundB: 'n', ipaB: '/θɪn/', meaningB_vi: 'mỏng, gầy',
        contrastTip: {
          en: '"Thing" resonates in the throat and nose with tongue back; "thin" has tongue tip on front teeth ridge.',
          vi: '"Thing" ngân ở vòm họng và mũi bằng cuống lưỡi; "thin" chặn bằng đầu lưỡi ở nướu trước.'
        }
      }
    ],
    b1Sentence: {
      text: 'The young singer is bringing a ring along to the evening party.',
      ipa: '/ðə jʌŋ ˈsɪŋə ɪz ˈbrɪŋɪŋ ə rɪŋ əˈlɒŋ tə ðə ˈiːvnɪŋ ˈpɑːti/',
      translation_vi: 'Ca sĩ trẻ đang mang theo một chiếc nhẫn đến bữa tiệc tối.'
    },
    miniDialogue: {
      speakerA: 'King', lineA: 'Are you listening to the strong song playing?', lineA_vi: 'Bạn có đang nghe bài hát mạnh mẽ đang phát không?',
      speakerB: 'Ling', lineB: 'Yes, everything sounds amazing this morning!', lineB_vi: 'Có, mọi thứ nghe thật tuyệt vời sáng nay!'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Adding an unwanted hard /ɡ/ at the end ("sing" -> "sing-guh") or confusing with /n/.',
        vi: 'Thêm âm /g/ thừa vào đuôi ("sing" thành "sing-gơ") hoặc lẫn lộn với /n/.'
      },
      howToFix: {
        en: 'In words like "sing" /sɪŋ/, let the nasal hum fade out naturally without popping a "g".',
        vi: 'Trong từ "sing" /sɪŋ/, để âm ngân mũi tự tan biến êm dịu, không bật thêm tiếng "g".'
      },
      finalConsonantAlert: true
    }
  },

  // 41. /l/ (Voiced alveolar lateral approximant)
  {
    id: 'c_l',
    symbol: 'l',
    category: 'consonant',
    subCategory: 'approximant',
    name: { en: 'Voiced alveolar lateral approximant', vi: 'Phụ âm /l/ bên chân răng, hữu thanh' },
    voiced: true,
    place: { en: 'Alveolar ridge', vi: 'Nướu chân răng trên' },
    manner: { en: 'Lateral approximant', vi: 'Tiếp cận bên (luồng hơi qua hai bên rìa lưỡi)' },
    description: {
      en: 'Tongue tip rests against alveolar ridge while air flows freely around the lowered sides of the tongue. Clear [l] before vowels; dark [ɫ] at end of words.',
      vi: 'Đầu lưỡi tựa vào nướu răng trên trong khi luồng hơi thoát tự do qua hai bên mép lưỡi. Phát âm rõ ràng trước nguyên âm; âm trầm (dark L) ở cuối từ.'
    },
    articulationGuide: {
      lips: { en: 'Neutral.', vi: 'Tự nhiên.' },
      tongue: { en: 'Tip on alveolar ridge, sides dropped to let air flow.', vi: 'Đầu lưỡi tựa nướu răng trên, hai bên rìa lưỡi hạ thấp cho hơi thoát.' },
      teeth: { en: 'Slightly apart.', vi: 'Hé mở nhẹ.' },
      vocalCords: { en: 'Vibrating.', vi: 'Rung dây thanh.' },
      airflow: { en: 'Continuous lateral flow along tongue sides.', vi: 'Hơi thoát liên tục qua hai bên mạn lưỡi.' }
    },
    sagittalConfig: {
      tongueTipX: 5,
      tongueTipY: 3,
      tongueHeight: 'high',
      tongueBackness: 'front',
      lipShape: 'neutral',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'leg', ipa: '/leɡ/', position: 'initial', meaning_vi: 'cái chân' },
      { word: 'bell', ipa: '/bel/', position: 'final', meaning_vi: 'cái chuông' },
      { word: 'yellow', ipa: '/ˈjeləʊ/', position: 'medial', meaning_vi: 'màu vàng' }
    ],
    minimalPairs: [
      {
        wordA: 'light', soundA: 'l', ipaA: '/laɪt/', meaningA_vi: 'ánh sáng, nhẹ',
        wordB: 'right', soundB: 'r', ipaB: '/raɪt/', meaningB_vi: 'phải, đúng',
        contrastTip: {
          en: 'For /l/ tongue tip touches gum ridge; for /r/ tongue tip does NOT touch the roof of the mouth.',
          vi: 'Với /l/ đầu lưỡi chạm nướu răng trên; với /r/ đầu lưỡi tuyệt đối KHÔNG chạm vòm miệng.'
        }
      }
    ],
    b1Sentence: {
      text: 'Lucy likes little yellow flowers along the lake.',
      ipa: '/ˈluːsi laɪks ˈlɪtl ˈjeləʊ ˈflaʊəz əˈlɒŋ ðə leɪk/',
      translation_vi: 'Lucy thích những bông hoa nhỏ màu vàng dọc theo bờ hồ.'
    },
    miniDialogue: {
      speakerA: 'Leo', lineA: 'Will you call Luke before leaving London?', lineA_vi: 'Bạn sẽ gọi cho Luke trước khi rời London chứ?',
      speakerB: 'Lily', lineB: 'Yes, I will call him at twelve o’clock.', lineB_vi: 'Vâng, tôi sẽ gọi cho anh ấy lúc mười hai giờ.'
    },
    vietnamesePitfalls: {
      isHighRisk: true,
      commonMistake: {
        en: 'Dropping "dark L" at the end of words (saying "call" like "co", "feel" like "fee") or confusing with /r/ or /n/.',
        vi: 'Bỏ quên âm L cuối từ "dark L" (đọc "call" thành "co", "feel" thành "phi") hoặc nhầm với /r/ hay /n/.'
      },
      howToFix: {
        en: 'At the end of words like "feel" /fiːl/, raise your tongue tip to touch behind your top teeth.',
        vi: 'Ở cuối từ như "feel" /fiːl/, nâng đầu lưỡi chạm vào mặt sau răng trên: "fee-L".'
      },
      finalConsonantAlert: true
    }
  },

  // 42. /r/ (Voiced postalveolar approximant)
  {
    id: 'c_r',
    symbol: 'r',
    category: 'consonant',
    subCategory: 'approximant',
    name: { en: 'Voiced postalveolar approximant (RP British R)', vi: 'Phụ âm /r/ chuẩn Anh-Anh, hữu thanh' },
    voiced: true,
    place: { en: 'Postalveolar', vi: 'Sau nướu răng trên' },
    manner: { en: 'Approximant', vi: 'Tiếp cận (không chạm)' },
    description: {
      en: 'Tongue tip curls slightly backwards towards the postalveolar area without touching, lips slightly rounded. British RP is non-rhotic (r is only pronounced before a vowel).',
      vi: 'Đầu lưỡi hơi cong về phía sau nướu răng nhưng KHÔNG CHẠM, môi hơi tròn nhẹ. Chuẩn Anh-Anh không phát âm "r" trừ khi đứng trước nguyên âm.'
    },
    articulationGuide: {
      lips: { en: 'Slightly rounded.', vi: 'Hơi khum tròn nhẹ.' },
      tongue: { en: 'Tip points towards roof of mouth behind alveolar ridge but DOES NOT touch.', vi: 'Đầu lưỡi hướng lên vòm họng sau nướu nhưng TUYỆT ĐỐI KHÔNG CHẠM.' },
      teeth: { en: 'Parted.', vi: 'Hé mở.' },
      vocalCords: { en: 'Vibrating.', vi: 'Rung dây thanh.' },
      airflow: { en: 'Smooth unhindered central flow.', vi: 'Hơi thoát êm đềm ở giữa lưỡi.' }
    },
    sagittalConfig: {
      tongueTipX: 4,
      tongueTipY: 5,
      tongueHeight: 'high',
      tongueBackness: 'central',
      lipShape: 'rounded',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'red', ipa: '/red/', position: 'initial', meaning_vi: 'màu đỏ' },
      { word: 'run', ipa: '/rʌn/', position: 'initial', meaning_vi: 'chạy' },
      { word: 'very', ipa: '/ˈveri/', position: 'medial', meaning_vi: 'rất' }
    ],
    minimalPairs: [
      {
        wordA: 'red', soundA: 'r', ipaA: '/red/', meaningA_vi: 'màu đỏ',
        wordB: 'led', soundB: 'l', ipaB: '/led/', meaningB_vi: 'đã dẫn dắt',
        contrastTip: {
          en: 'For /r/ tongue does NOT touch anywhere; for /l/ tongue tip touches gum firmly.',
          vi: 'Với /r/ đầu lưỡi lơ lửng không chạm; với /l/ đầu lưỡi chạm chặt nướu răng.'
        }
      }
    ],
    b1Sentence: {
      text: 'Robert ran around the red track in the rain.',
      ipa: '/ˈrɒbət ræn əˈraʊnd ðə red træk ɪn ðə reɪn/',
      translation_vi: 'Robert đã chạy quanh đường chạy màu đỏ dưới trời mưa.'
    },
    miniDialogue: {
      speakerA: 'Rachel', lineA: 'Are you ready to read the British news report?', lineA_vi: 'Bạn đã sẵn sàng đọc bản báo cáo tin tức của Anh chưa?',
      speakerB: 'Ron', lineB: 'Right away, I am reading the first paragraph.', lineB_vi: 'Ngay bây giờ, tôi đang đọc đoạn đầu tiên.'
    },
    vietnamesePitfalls: {
      isHighRisk: true,
      commonMistake: {
        en: 'Rolling or flapping the tongue like Vietnamese "r" (trill), instead of the English postalveolar approximant.',
        vi: 'Rung đầu lưỡi như âm "r" tiếng Việt, hoặc hiểu lầm việc cuộn lưỡi dẫn đến đánh rung vòm họng.'
      },
      howToFix: {
        en: 'For British RP: keep tongue tip suspended in the middle of mouth without touching anywhere. For American /r/: tongue tip curls up or bunches back towards palate but NEVER touches the roof of mouth.',
        vi: 'Với âm /r/ kiểu Mỹ: đầu lưỡi cong hoặc co về sau nhưng không chạm vòm miệng (không rung đầu lưỡi). Với chuẩn RP: đầu lưỡi lơ lửng, chỉ phát âm khi theo sau là nguyên âm.'
      }
    }
  },

  // 43. /w/ (Voiced labial-velar approximant)
  {
    id: 'c_w',
    symbol: 'w',
    category: 'consonant',
    subCategory: 'approximant',
    name: { en: 'Voiced labial-velar approximant', vi: 'Phụ âm /w/ môi-ngạc mềm, hữu thanh' },
    voiced: true,
    place: { en: 'Labial-velar (lips rounded + back tongue raised)', vi: 'Môi tròn và cuống lưỡi nâng cao' },
    manner: { en: 'Approximant (glide)', vi: 'Bán nguyên âm / tiếp cận' },
    description: {
      en: 'Lips tightly rounded then glide open into following vowel; back of tongue raised towards soft palate.',
      vi: 'Môi chu tròn chặt như sắp huýt sáo rồi mở nhanh lướt sang nguyên âm tiếp theo; cuống lưỡi nâng cao.'
    },
    articulationGuide: {
      lips: { en: 'Tightly rounded, then immediately relax open.', vi: 'Chu tròn chặt rồi mở nhanh sang nguyên âm kế tiếp.' },
      tongue: { en: 'Back of tongue high near velum.', vi: 'Cuống lưỡi nâng cao gần ngạc mềm.' },
      teeth: { en: 'Slightly apart, not touching lips.', vi: 'Hé mở, tuyệt đối không chạm môi.' },
      vocalCords: { en: 'Vibrating.', vi: 'Rung dây thanh.' },
      airflow: { en: 'Smooth oral glide.', vi: 'Luồng hơi lướt mượt.' }
    },
    sagittalConfig: {
      tongueTipX: 3,
      tongueTipY: 7,
      tongueHeight: 'high',
      tongueBackness: 'back',
      lipShape: 'rounded',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'wet', ipa: '/wet/', position: 'initial', meaning_vi: 'ẩm ướt' },
      { word: 'win', ipa: '/wɪn/', position: 'initial', meaning_vi: 'chiến thắng' },
      { word: 'swim', ipa: '/swɪm/', position: 'medial', meaning_vi: 'bơi lội' }
    ],
    minimalPairs: [
      {
        wordA: 'wet', soundA: 'w', ipaA: '/wet/', meaningA_vi: 'ẩm ướt',
        wordB: 'vet', soundB: 'v', ipaB: '/vet/', meaningB_vi: 'bác sĩ thú y',
        contrastTip: {
          en: 'For /w/ round your lips without touching teeth; for /v/ top teeth must touch bottom lip.',
          vi: 'Với /w/ chu tròn môi không chạm răng; với /v/ răng cửa trên bắt buộc phải chạm môi dưới.'
        }
      }
    ],
    b1Sentence: {
      text: 'We went walking westward in the wonderful winter weather.',
      ipa: '/wiː went ˈwɔːkɪŋ ˈwestwəd ɪn ðə ˈwʌndəfl ˈwɪntə ˈweðə/',
      translation_vi: 'Chúng tôi đã đi bộ về phía tây trong thời tiết mùa đông tuyệt vời.'
    },
    miniDialogue: {
      speakerA: 'Will', lineA: 'Why were you waiting in the wind without a coat?', lineA_vi: 'Tại sao bạn lại đứng chờ trong gió mà không mặc áo khoác?',
      speakerB: 'Wendy', lineB: 'We were watching the water waves on the lake.', lineB_vi: 'Chúng tôi đang ngắm những con sóng nước trên hồ.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Confusing with /v/ by letting teeth touch lower lip ("west" sounding like "vest").',
        vi: 'Nhầm lẫn với /v/ do để răng chạm vào môi dưới (đọc "west" thành "vest").'
      },
      howToFix: {
        en: 'Form a tight circle with your lips like blowing out a candle—keep teeth completely inside.',
        vi: 'Khum môi tròn như khi thổi nến—răng giấu kín bên trong không chạm môi.'
      }
    }
  },

  // 44. /j/ (Voiced palatal approximant - YES)
  {
    id: 'c_j',
    symbol: 'j',
    category: 'consonant',
    subCategory: 'approximant',
    name: { en: 'Voiced palatal approximant (Y sound)', vi: 'Phụ âm /j/ ngạc cứng, hữu thanh' },
    voiced: true,
    place: { en: 'Palatal (hard palate)', vi: 'Ngạc cứng (vòm họng cứng)' },
    manner: { en: 'Approximant (glide)', vi: 'Bán nguyên âm / tiếp cận' },
    description: {
      en: 'Front of tongue raises very close to the hard palate like a brief /iː/, then glides smoothly into the following vowel.',
      vi: 'Thân lưỡi nâng rất cao sát vòm ngạc cứng như âm /iː/ ngắn thoáng qua, sau đó lướt mượt mà sang nguyên âm kế tiếp.'
    },
    articulationGuide: {
      lips: { en: 'Spread into a slight smile.', vi: 'Hơi bè khóe miệng mỉm cười nhẹ.' },
      tongue: { en: 'Front of tongue raised high near hard palate, then glides down.', vi: 'Thân trước lưỡi nâng cao sát vòm cứng rồi hạ nhanh.' },
      teeth: { en: 'Close together.', vi: 'Khép gần nhau.' },
      vocalCords: { en: 'Vibrating.', vi: 'Rung dây thanh.' },
      airflow: { en: 'Smooth glide.', vi: 'Luồng hơi lướt êm.' }
    },
    sagittalConfig: {
      tongueTipX: 4,
      tongueTipY: 4,
      tongueHeight: 'high',
      tongueBackness: 'front',
      lipShape: 'spread',
      velumRaised: true,
      vocalCordsVibrating: true,
      airflowType: 'oral_glide'
    },
    examples: [
      { word: 'yes', ipa: '/jes/', position: 'initial', meaning_vi: 'vâng, có' },
      { word: 'yellow', ipa: '/ˈjeləʊ/', position: 'initial', meaning_vi: 'màu vàng' },
      { word: 'music', ipa: '/ˈmjuːzɪk/', position: 'medial', meaning_vi: 'âm nhạc' }
    ],
    minimalPairs: [
      {
        wordA: 'year', soundA: 'j', ipaA: '/jɪə/', meaningA_vi: 'năm (thời gian)',
        wordB: 'ear', soundB: 'no_j', ipaB: '/ɪə/', meaningB_vi: 'cái tai',
        contrastTip: {
          en: '"Year" has a glide starting high and tense; "ear" begins directly with the vowel.',
          vi: '"Year" bắt đầu bằng độ căng nâng lưỡi /j/; "ear" vào thẳng nguyên âm.'
        }
      }
    ],
    b1Sentence: {
      text: 'The young student answered yes to the university yesterday.',
      ipa: '/ðə jʌŋ ˈstjuːdnt ˈɑːnsəd jes tə ðə ˌjuːnɪˈvɜːsəti ˈjestədeɪ/',
      translation_vi: 'Cậu sinh viên trẻ đã trả lời đồng ý với trường đại học vào ngày hôm qua.'
    },
    miniDialogue: {
      speakerA: 'Yolanda', lineA: 'Are you planning your trip to York this year?', lineA_vi: 'Bạn có đang lên kế hoạch cho chuyến đi đến York năm nay không?',
      speakerB: 'Hugh', lineB: 'Yes, I usually visit York every year.', lineB_vi: 'Có chứ, tôi thường đến thăm York hàng năm.'
    },
    vietnamesePitfalls: {
      commonMistake: {
        en: 'Pronouncing like Vietnamese "d" / "gi" (adding friction or buzz) or dropping it in words like "university" / "music".',
        vi: 'Đọc thành âm "d" gắt kiểu tiếng Việt hoặc bỏ quên âm /j/ trong các từ như "university", "music".'
      },
      howToFix: {
        en: 'Think of starting with a very fast, light "ee" sound and glide immediately into the vowel.',
        vi: 'Nghĩ như đang bắt đầu bằng âm "i" cực nhanh và nhẹ rồi lướt mượt sang nguyên âm kế tiếp.'
      }
    }
  }
];
