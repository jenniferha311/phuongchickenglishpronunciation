import { ReadingExercise } from '../types';

export const READING_EXERCISES: ReadingExercise[] = [
  {
    id: 'read-sent-1',
    type: 'sentence',
    title: {
      en: 'The Green Field & Sheep',
      vi: 'Cánh đồng xanh và đàn cừu (/iː/ vs /ɪ/)'
    },
    text: 'He sees three sweet sheep sleeping near the green hill.',
    ipa: '/hiː siːz θriː swiːt ʃiːp ˈsliːpɪŋ nɪə ðə ɡriːn hɪl/',
    translation_vi: 'Anh ấy nhìn thấy ba con cừu đáng yêu đang ngủ gần ngọn đồi xanh.',
    targetPhonemes: ['iː', 'ɪ'],
    targetSoundsDescription: {
      en: 'Contrast between long /iː/ (sees, sweet, sheep, green) and short /ɪ/ (sleeping, hill).',
      vi: 'Phân biệt nguyên âm dài /iː/ (căng môi sang 2 bên) và nguyên âm ngắn /ɪ/ (thả lỏng khoang miệng).'
    },
    keyWordsWithPhonemes: [
      { word: 'sees', phoneme: 'iː' },
      { word: 'three', phoneme: 'iː' },
      { word: 'sweet', phoneme: 'iː' },
      { word: 'sheep', phoneme: 'iː' },
      { word: 'sleeping', phoneme: 'ɪ' },
      { word: 'green', phoneme: 'iː' },
      { word: 'hill', phoneme: 'ɪ' }
    ],
    difficulty: 'B1-Intro',
    contextCategory: 'daily'
  },
  {
    id: 'read-sent-2',
    type: 'sentence',
    title: {
      en: 'Thirty-Three Thoughts on Thursday',
      vi: 'Ba mươi ba suy nghĩ ngày thứ Năm (/θ/ & /ð/)'
    },
    text: 'My mother and brother thought about thirty-three healthy things.',
    ipa: '/maɪ ˈmʌðə(r) ənd ˈbrʌðə(r) θɔːt əˈbaʊt ˈθɜːti θriː ˈhelθi θɪŋz/',
    translation_vi: 'Mẹ và anh trai tôi đã nghĩ về ba mươi ba điều lành mạnh.',
    targetPhonemes: ['θ', 'ð'],
    targetSoundsDescription: {
      en: 'Interdental fricatives: unvoiced /θ/ (thought, thirty, three, healthy, things) and voiced /ð/ (mother, brother).',
      vi: 'Âm xát răng: /θ/ không rung (đầu lưỡi đặt giữa 2 hàm răng) và /ð/ có rung dây thanh.'
    },
    keyWordsWithPhonemes: [
      { word: 'mother', phoneme: 'ð' },
      { word: 'brother', phoneme: 'ð' },
      { word: 'thought', phoneme: 'θ' },
      { word: 'thirty', phoneme: 'θ' },
      { word: 'three', phoneme: 'θ' },
      { word: 'healthy', phoneme: 'θ' },
      { word: 'things', phoneme: 'θ' }
    ],
    difficulty: 'B1-Standard',
    contextCategory: 'daily'
  },
  {
    id: 'read-sent-3',
    type: 'sentence',
    title: {
      en: 'The Busy Desk & Sweet Fruit',
      vi: 'Bẫy nuốt âm cuối (/t/, /d/, /s/, /k/, /l/)'
    },
    text: 'David baked a sweet cake and placed eight hot plates on the clean desk.',
    ipa: '/ˈdeɪvɪd beɪkt ə swiːt keɪk ənd pleɪst eɪt hɒt pleɪts ɒn ðə kliːn desk/',
    translation_vi: 'David đã nướng một chiếc bánh ngọt và đặt tám chiếc đĩa nóng lên chiếc bàn làm việc sạch sẽ.',
    targetPhonemes: ['t', 'd', 'k', 's'],
    targetSoundsDescription: {
      en: 'Final consonant stops and clusters: baked /t/, sweet /t/, cake /k/, placed /t/, plates /ts/, desk /sk/.',
      vi: 'Bật dứt khoát các phụ âm cuối và cụm đuôi: baked (/t/), cake (/k/), plates (/ts/), desk (/sk/).'
    },
    keyWordsWithPhonemes: [
      { word: 'David', phoneme: 'd' },
      { word: 'baked', phoneme: 't' },
      { word: 'sweet', phoneme: 't' },
      { word: 'cake', phoneme: 'k' },
      { word: 'placed', phoneme: 't' },
      { word: 'eight', phoneme: 't' },
      { word: 'hot', phoneme: 't' },
      { word: 'plates', phoneme: 's' },
      { word: 'desk', phoneme: 'k' }
    ],
    difficulty: 'B1-Standard',
    contextCategory: 'work'
  },
  {
    id: 'read-sent-4',
    type: 'sentence',
    title: {
      en: 'Shiny Shoes & Special Shirts',
      vi: 'Cặp âm /s/ và /ʃ/ không bị lẫn'
    },
    text: 'She wished to show six special shiny shirts at the British fashion shop.',
    ipa: '/ʃiː wɪʃt tuː ʃəʊ sɪks ˈspeʃl ˈʃaɪni ʃɜːts ət ðə ˈbrɪtɪʃ ˈfæʃn ʃɒp/',
    translation_vi: 'Cô ấy muốn trưng bày sáu chiếc áo sơ mi sáng bóng đặc biệt tại cửa hàng thời trang Anh.',
    targetPhonemes: ['s', 'ʃ'],
    targetSoundsDescription: {
      en: 'Clear distinction between alveolar /s/ (six, special) and postalveolar /ʃ/ (she, wished, show, shiny, shirts, British, shop).',
      vi: 'Phân biệt âm xẹt /s/ (đầu lưỡi sát lợi trên) và âm cong môi tròn /ʃ/ (chu môi đẩy hơi mạnh).'
    },
    keyWordsWithPhonemes: [
      { word: 'She', phoneme: 'ʃ' },
      { word: 'wished', phoneme: 'ʃ' },
      { word: 'show', phoneme: 'ʃ' },
      { word: 'six', phoneme: 's' },
      { word: 'special', phoneme: 'ʃ' },
      { word: 'shiny', phoneme: 'ʃ' },
      { word: 'shirts', phoneme: 'ʃ' },
      { word: 'shop', phoneme: 'ʃ' }
    ],
    difficulty: 'B1-Standard',
    contextCategory: 'daily'
  },
  {
    id: 'read-sent-5',
    type: 'sentence',
    title: {
      en: 'Winter Vacation in the West',
      vi: 'Cặp âm răng môi /v/ và môi-vòm /w/'
    },
    text: 'We visited twelve very lovely villages in the wonderful western valley.',
    ipa: '/wiː ˈvɪzɪtɪd twelv ˈveri ˈlʌvli ˈvɪlɪdʒɪz ɪn ðə ˈwʌndəfl ˈwestən ˈvæli/',
    translation_vi: 'Chúng tôi đã thăm mười hai ngôi làng rất đáng yêu tại thung lũng tuyệt đẹp phía Tây.',
    targetPhonemes: ['v', 'w'],
    targetSoundsDescription: {
      en: 'Labiodental fricative /v/ (visited, twelve, very, lovely, villages, valley) vs labial-velar approximant /w/ (we, twelve, wonderful, western).',
      vi: 'Âm /v/ (răng cửa trên cắn nhẹ môi dưới có rung) đối lập với /w/ (chu tròn hai môi như huýt sáo).'
    },
    keyWordsWithPhonemes: [
      { word: 'We', phoneme: 'w' },
      { word: 'visited', phoneme: 'v' },
      { word: 'twelve', phoneme: 'v' },
      { word: 'very', phoneme: 'v' },
      { word: 'lovely', phoneme: 'v' },
      { word: 'villages', phoneme: 'v' },
      { word: 'wonderful', phoneme: 'w' },
      { word: 'western', phoneme: 'w' },
      { word: 'valley', phoneme: 'v' }
    ],
    difficulty: 'B1-Standard',
    contextCategory: 'travel'
  },
  {
    id: 'read-para-1',
    type: 'paragraph',
    title: {
      en: 'A Gentle Rainy Morning in London',
      vi: 'Buổi sáng mưa dịu nhẹ ở London (Đoạn văn B1)'
    },
    text: 'It is a rather cold autumn morning in London. People with warm coats walk through the damp park towards the train station. A sweet smell of fresh coffee and hot bread drifts from the local bakery near the corner.',
    ipa: '/ɪt ɪz ə ˈrɑːðə kəʊld ˈɔːtəm ˈmɔːnɪŋ ɪn ˈlʌndən. ˈpiːpl wɪð wɔːm kəʊts wɔːk θruː ðə dæmp pɑːk təˈwɔːdz ðə treɪn ˈsteɪʃn. ə swiːt smel əv freʃ ˈkɒfi ənd hɒt bred drɪfts frəm ðə ˈləʊkl ˈbeɪkəri nɪə ðə ˈkɔːnə/',
    translation_vi: 'Đó là một buổi sáng mùa thu khá lạnh ở London. Mọi người mặc áo khoác ấm rảo bước qua công viên ẩm ướt hướng về ga tàu. Mùi thơm ngọt ngào của cà phê mới pha và bánh mì nóng hổi tỏa ra từ tiệm bánh gần góc phố.',
    targetPhonemes: ['ɔː', 'əʊ', 'θ', 't', 'k'],
    targetSoundsDescription: {
      en: 'Practice British RP non-rhotic vowels (morning, park, corner), long /ɔː/ (autumn, warm, walk), and connected sentence rhythm.',
      vi: 'Luyện chuẩn ngữ điệu Anh-Anh (RP), không bị rung âm /r/ cuối từ (morning, corner), trường độ nguyên âm dài /ɔː/ và nhả rõ âm cuối.'
    },
    keyWordsWithPhonemes: [
      { word: 'rather', phoneme: 'ð' },
      { word: 'autumn', phoneme: 'ɔː' },
      { word: 'morning', phoneme: 'ɔː' },
      { word: 'coats', phoneme: 'ts' },
      { word: 'walk', phoneme: 'k' },
      { word: 'park', phoneme: 'k' },
      { word: 'sweet', phoneme: 't' },
      { word: 'fresh', phoneme: 'ʃ' },
      { word: 'drifts', phoneme: 'ts' }
    ],
    difficulty: 'B1-Standard',
    contextCategory: 'story'
  },
  {
    id: 'read-para-2',
    type: 'paragraph',
    title: {
      en: 'Afternoon Tea at Cô Phượng’s English Class',
      vi: 'Giờ trà chiều tại lớp tiếng Anh Cô Phượng Chick'
    },
    text: 'Welcome to our English pronunciation workshop at EIE Education! Today, teacher Phượng Chick guides us through forty-four standard British sounds. Remember to breathe deeply, relax your jaw, and pronounce each final consonant with bright confidence.',
    ipa: '/ˈwelkəm tuː ˈaʊə ˈɪŋɡlɪʃ prəˌnʌnsiˈeɪʃn ˈwɜːkʃɒp ət iː-aɪ-iː ˌedʒuˈkeɪʃn! təˈdeɪ, ˈtiːtʃə fʊəŋ tʃɪk ɡaɪdz ʌs θruː ˈfɔːti fɔː ˈstændəd ˈbrɪtɪʃ saʊndz. rɪˈmembə tuː briːð ˈdiːpli, rɪˈlæks jɔː dʒɔː, ənd prəˈnaʊns iːtʃ ˈfaɪnl ˈkɒnsənənt wɪð braɪt ˈkɒnfɪdəns./',
    translation_vi: 'Chào mừng các bạn đến với buổi thực hành phát âm tiếng Anh tại EIE Education! Hôm nay, cô Phượng Chick sẽ hướng dẫn chúng mình 44 âm chuẩn Anh-Anh. Hãy nhớ hít thở sâu, thả lỏng quai hàm và phát âm từng âm cuối thật tự tin rạng rỡ nhé!',
    targetPhonemes: ['ʃ', 'tʃ', 'dʒ', 'θ', 'ð'],
    targetSoundsDescription: {
      en: 'Practice affricates and fricatives (/tʃ/, /dʒ/, /ʃ/) and dental sounds (/θ/, /ð/) along with confident final sound releases.',
      vi: 'Luyện tập các âm tắc xát (/tʃ/ trong teacher, Chick, each; /dʒ/ trong jaw; /ʃ/ trong workshop, British) và âm xát răng (/θ/ trong through, /ð/ trong breathe).'
    },
    keyWordsWithPhonemes: [
      { word: 'workshop', phoneme: 'ʃ' },
      { word: 'Phượng', phoneme: 'f' },
      { word: 'Chick', phoneme: 'tʃ' },
      { word: 'through', phoneme: 'θ' },
      { word: 'forty-four', phoneme: 'ɔː' },
      { word: 'breathe', phoneme: 'ð' },
      { word: 'jaw', phoneme: 'dʒ' },
      { word: 'consonant', phoneme: 't' },
      { word: 'confidence', phoneme: 's' }
    ],
    difficulty: 'B1-Challenge',
    contextCategory: 'story'
  },
  {
    id: 'read-para-3',
    type: 'paragraph',
    title: {
      en: 'Booking a Train Ticket to Cambridge',
      vi: 'Mua vé tàu đi Cambridge (Hội thoại B1 thực tế)'
    },
    text: 'Good afternoon. Could I please book a return ticket to Cambridge for tomorrow morning? I would like to catch the eight-fifteen train if there are still seats available. Thank you very much for your kind help.',
    ipa: '/ɡʊd ˌɑːftəˈnuːn. kʊd aɪ pliːz bʊk ə rɪˈtɜːn ˈtɪkɪt tuː ˈkeɪmbrɪdʒ fə təˈmɒrəʊ ˈmɔːnɪŋ? aɪ wʊd laɪk tuː kætʃ ði eɪt ˌfɪfˈtiːn treɪn ɪf ðeər ɑː stɪl siːts əˈveɪləbl. θæŋk juː ˈveri mʌtʃ fə jɔː kaɪnd help./',
    translation_vi: 'Xin chào buổi chiều. Tôi có thể đặt một vé khứ hồi đi Cambridge vào sáng mai được không? Tôi muốn đón chuyến tàu lúc 8 giờ 15 nếu vẫn còn chỗ. Rất cảm ơn sự giúp đỡ tận tình của bạn.',
    targetPhonemes: ['ʊ', 'uː', 't', 'dʒ', 'θ'],
    targetSoundsDescription: {
      en: 'Vowel contrast between short /ʊ/ (good, could, book, would) and long /uː/ (afternoon), plus polite British rising/falling intonation.',
      vi: 'Luyện cặp nguyên âm ngắn /ʊ/ (good, could, book) đối lập với /uː/ (afternoon), và bật âm cuối chuẩn /t/ (ticket, eight), /dʒ/ (Cambridge).'
    },
    keyWordsWithPhonemes: [
      { word: 'afternoon', phoneme: 'uː' },
      { word: 'book', phoneme: 'ʊ' },
      { word: 'ticket', phoneme: 't' },
      { word: 'Cambridge', phoneme: 'dʒ' },
      { word: 'catch', phoneme: 'tʃ' },
      { word: 'seats', phoneme: 'ts' },
      { word: 'Thank', phoneme: 'θ' },
      { word: 'help', phoneme: 'p' }
    ],
    difficulty: 'B1-Standard',
    contextCategory: 'travel'
  }
];
