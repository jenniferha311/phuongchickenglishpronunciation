import { ReadingExercise } from '../types';

export const READING_EXERCISES: ReadingExercise[] = [
  // ==========================================
  // SENTENCE DRILLS (18 Exercises)
  // ==========================================
  {
    id: 'read-sent-1',
    type: 'sentence',
    title: {
      en: 'The Green Field & Sleeping Sheep (/iː/ vs /ɪ/)',
      vi: 'The Green Field & Sleeping Sheep (/iː/ vs /ɪ/)'
    },
    text: 'He sees three sweet sheep sleeping near the green hill.',
    ipa: '/hiː siːz θriː swiːt ʃiːp ˈsliːpɪŋ nɪə ðə ɡriːn hɪl/',
    ipa_us: '/hiː siːz θriː swiːt ʃiːp ˈsliːpɪŋ nɪr ðə ɡriːn hɪl/',
    targetPhonemes: ['iː', 'ɪ'],
    targetSoundsDescription: {
      en: 'Contrast between tense long /iː/ (sees, sweet, sheep, green) and relaxed short /ɪ/ (sleeping, hill).',
      vi: 'Contrast between tense long /iː/ (sees, sweet, sheep, green) and relaxed short /ɪ/ (sleeping, hill).'
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
    difficulty: 'Intro',
    contextCategory: 'daily'
  },
  {
    id: 'read-sent-2',
    type: 'sentence',
    title: {
      en: 'Thirty-Three Healthy Thoughts (/θ/ & /ð/)',
      vi: 'Thirty-Three Healthy Thoughts (/θ/ & /ð/)'
    },
    text: 'My mother and brother thought about thirty-three healthy things.',
    ipa: '/maɪ ˈmʌðə ənd ˈbrʌðə θɔːt əˈbaʊt ˈθɜːti θriː ˈhelθi θɪŋz/',
    ipa_us: '/maɪ ˈmʌðər ənd ˈbrʌðər θɔːt əˈbaʊt ˈθɜːrti θriː ˈhelθi θɪŋz/',
    targetPhonemes: ['θ', 'ð'],
    targetSoundsDescription: {
      en: 'Dental fricatives: voiceless /θ/ with tongue between teeth (thought, thirty, three, healthy, things) and voiced /ð/ (mother, brother).',
      vi: 'Dental fricatives: voiceless /θ/ with tongue between teeth (thought, thirty, three, healthy, things) and voiced /ð/ (mother, brother).'
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
    difficulty: 'Standard',
    contextCategory: 'daily'
  },
  {
    id: 'read-sent-3',
    type: 'sentence',
    title: {
      en: 'The Busy Desk & Sweet Cakes (Final Stops /t, d, k, s/)',
      vi: 'The Busy Desk & Sweet Cakes (Final Stops /t, d, k, s/)'
    },
    text: 'David baked a sweet cake and placed eight hot plates on the clean desk.',
    ipa: '/ˈdeɪvɪd beɪkt ə swiːt keɪk ənd pleɪst eɪt hɒt pleɪts ɒn ðə kliːn desk/',
    ipa_us: '/ˈdeɪvɪd beɪkt ə swiːt keɪk ənd pleɪst eɪt hɑːt pleɪts ɑːn ðə kliːn desk/',
    targetPhonemes: ['t', 'd', 'k', 's'],
    targetSoundsDescription: {
      en: 'Crisp release of final consonants and clusters: baked /t/, sweet /t/, cake /k/, placed /t/, plates /ts/, desk /sk/.',
      vi: 'Crisp release of final consonants and clusters: baked /t/, sweet /t/, cake /k/, placed /t/, plates /ts/, desk /sk/.'
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
    difficulty: 'Standard',
    contextCategory: 'work'
  },
  {
    id: 'read-sent-4',
    type: 'sentence',
    title: {
      en: 'Shiny Shoes & Special Shirts (/s/ vs /ʃ/)',
      vi: 'Shiny Shoes & Special Shirts (/s/ vs /ʃ/)'
    },
    text: 'She wished to show six special shiny shirts at the British fashion shop.',
    ipa: '/ʃiː wɪʃt tuː ʃəʊ sɪks ˈspeʃl ˈʃaɪni ʃɜːts ət ðə ˈbrɪtɪʃ ˈfæʃn ʃɒp/',
    ipa_us: '/ʃiː wɪʃt tuː ʃoʊ sɪks ˈspeʃl ˈʃaɪni ʃɜːrts ət ðə ˈbrɪtɪʃ ˈfæʃn ʃɑːp/',
    targetPhonemes: ['s', 'ʃ'],
    targetSoundsDescription: {
      en: 'Clear distinction between alveolar hiss /s/ (six, special) and rounded postalveolar /ʃ/ (she, wished, show, shiny, shirts, British, shop).',
      vi: 'Clear distinction between alveolar hiss /s/ (six, special) and rounded postalveolar /ʃ/ (she, wished, show, shiny, shirts, British, shop).'
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
    difficulty: 'Standard',
    contextCategory: 'daily'
  },
  {
    id: 'read-sent-5',
    type: 'sentence',
    title: {
      en: 'Winter Vacation in the Western Valley (/v/ vs /w/)',
      vi: 'Winter Vacation in the Western Valley (/v/ vs /w/)'
    },
    text: 'We visited twelve very lovely villages in the wonderful western valley.',
    ipa: '/wiː ˈvɪzɪtɪd twelv ˈveri ˈlʌvli ˈvɪlɪdʒɪz ɪn ðə ˈwʌndəfl ˈwestən ˈvæli/',
    ipa_us: '/wiː ˈvɪzɪtɪd twelv ˈveri ˈlʌvli ˈvɪlɪdʒɪz ɪn ðə ˈwʌndərfl ˈwestərn ˈvæli/',
    targetPhonemes: ['v', 'w'],
    targetSoundsDescription: {
      en: 'Labiodental /v/ with upper teeth on lower lip (visited, twelve, very, lovely, villages, valley) vs rounded bilabial glide /w/ (we, twelve, wonderful, western).',
      vi: 'Labiodental /v/ with upper teeth on lower lip (visited, twelve, very, lovely, villages, valley) vs rounded bilabial glide /w/ (we, twelve, wonderful, western).'
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
    difficulty: 'Standard',
    contextCategory: 'travel'
  },
  {
    id: 'read-sent-6',
    type: 'sentence',
    title: {
      en: 'The Happy Man and the Red Bag (/æ/ vs /e/)',
      vi: 'The Happy Man and the Red Bag (/æ/ vs /e/)'
    },
    text: 'The happy man packed ten red pens and a black jacket in his travel bag.',
    ipa: '/ðə ˈhæpi mæn pækt ten red penz ənd ə blæk ˈdʒækɪt ɪn hɪz ˈtrævl bæɡ/',
    ipa_us: '/ðə ˈhæpi mæn pækt ten red penz ənd ə blæk ˈdʒækɪt ɪn hɪz ˈtrævl bæɡ/',
    targetPhonemes: ['æ', 'e'],
    targetSoundsDescription: {
      en: 'Open front vowel /æ/ with wide dropped jaw (happy, man, packed, black, jacket, travel, bag) vs mid-open /e/ (ten, red, pens).',
      vi: 'Open front vowel /æ/ with wide dropped jaw (happy, man, packed, black, jacket, travel, bag) vs mid-open /e/ (ten, red, pens).'
    },
    keyWordsWithPhonemes: [
      { word: 'happy', phoneme: 'æ' },
      { word: 'man', phoneme: 'æ' },
      { word: 'packed', phoneme: 'æ' },
      { word: 'ten', phoneme: 'e' },
      { word: 'red', phoneme: 'e' },
      { word: 'pens', phoneme: 'e' },
      { word: 'black', phoneme: 'æ' },
      { word: 'jacket', phoneme: 'æ' },
      { word: 'bag', phoneme: 'æ' }
    ],
    difficulty: 'Intro',
    contextCategory: 'travel'
  },
  {
    id: 'read-sent-7',
    type: 'sentence',
    title: {
      en: 'The Calm Farmer & Running Ducks (/ɑː/ vs /ʌ/)',
      vi: 'The Calm Farmer & Running Ducks (/ɑː/ vs /ʌ/)'
    },
    text: 'The calm farmer parked his large car under the hot summer sun.',
    ipa: '/ðə kɑːm ˈfɑːmə pɑːkt hɪz lɑːdʒ kɑː ˈʌndə ðə hɒt ˈsʌmə sʌn/',
    ipa_us: '/ðə kɑm ˈfɑrmər pɑrkt hɪz lɑrdʒ kɑr ˈʌndər ðə hɑt ˈsʌmər sʌn/',
    targetPhonemes: ['ɑː', 'ʌ'],
    targetSoundsDescription: {
      en: 'Deep open back vowel /ɑː/ (calm, farmer, parked, large, car) vs short central-back /ʌ/ (under, summer, sun).',
      vi: 'Deep open back vowel /ɑː/ (calm, farmer, parked, large, car) vs short central-back /ʌ/ (under, summer, sun).'
    },
    keyWordsWithPhonemes: [
      { word: 'calm', phoneme: 'ɑː' },
      { word: 'farmer', phoneme: 'ɑː' },
      { word: 'parked', phoneme: 'ɑː' },
      { word: 'large', phoneme: 'ɑː' },
      { word: 'car', phoneme: 'ɑː' },
      { word: 'under', phoneme: 'ʌ' },
      { word: 'summer', phoneme: 'ʌ' },
      { word: 'sun', phoneme: 'ʌ' }
    ],
    difficulty: 'Intro',
    contextCategory: 'daily'
  },
  {
    id: 'read-sent-8',
    type: 'sentence',
    title: {
      en: 'Four Tall Walls & Chocolate Pots (/ɒ/ vs /ɔː/)',
      vi: 'Four Tall Walls & Chocolate Pots (/ɒ/ vs /ɔː/)'
    },
    text: 'Paul bought four small chocolate pots from the corner shop.',
    ipa: '/pɔːl bɔːt fɔː smɔːl ˈtʃɒklət pɒts frəm ðə ˈkɔːnə ʃɒp/',
    ipa_us: '/pɔːl bɑːt fɔːr smɔːl ˈtʃɑːklət pɑːts frəm ðə ˈkɔːrnər ʃɑːp/',
    targetPhonemes: ['ɒ', 'ɔː'],
    targetSoundsDescription: {
      en: 'Tense rounded long /ɔː/ (Paul, bought, four, small, corner) vs short open rounded /ɒ/ in British RP (chocolate, pots, shop).',
      vi: 'Tense rounded long /ɔː/ (Paul, bought, four, small, corner) vs short open rounded /ɒ/ in British RP (chocolate, pots, shop).'
    },
    keyWordsWithPhonemes: [
      { word: 'Paul', phoneme: 'ɔː' },
      { word: 'bought', phoneme: 'ɔː' },
      { word: 'four', phoneme: 'ɔː' },
      { word: 'small', phoneme: 'ɔː' },
      { word: 'chocolate', phoneme: 'ɒ' },
      { word: 'pots', phoneme: 'ɒ' },
      { word: 'corner', phoneme: 'ɔː' },
      { word: 'shop', phoneme: 'ɒ' }
    ],
    difficulty: 'Standard',
    contextCategory: 'daily'
  },
  {
    id: 'read-sent-9',
    type: 'sentence',
    title: {
      en: 'The Good Cook & Blue Boots (/ʊ/ vs /uː/)',
      vi: 'The Good Cook & Blue Boots (/ʊ/ vs /uː/)'
    },
    text: 'Look at the good wooden cookbook that Luke took to school at noon.',
    ipa: '/lʊk ət ðə ɡʊd ˈwʊdn ˈkʊkbʊk ðæt luːk tʊk tuː skuːl ət nuːn/',
    ipa_us: '/lʊk ət ðə ɡʊd ˈwʊdn ˈkʊkbʊk ðæt luːk tʊk tuː skuːl ət nuːn/',
    targetPhonemes: ['ʊ', 'uː'],
    targetSoundsDescription: {
      en: 'Short lax /ʊ/ with relaxed lips (look, good, wooden, cookbook, took) vs tense tight-lipped /uː/ (Luke, school, noon).',
      vi: 'Short lax /ʊ/ with relaxed lips (look, good, wooden, cookbook, took) vs tense tight-lipped /uː/ (Luke, school, noon).'
    },
    keyWordsWithPhonemes: [
      { word: 'Look', phoneme: 'ʊ' },
      { word: 'good', phoneme: 'ʊ' },
      { word: 'wooden', phoneme: 'ʊ' },
      { word: 'cookbook', phoneme: 'ʊ' },
      { word: 'Luke', phoneme: 'uː' },
      { word: 'took', phoneme: 'ʊ' },
      { word: 'school', phoneme: 'uː' },
      { word: 'noon', phoneme: 'uː' }
    ],
    difficulty: 'Intro',
    contextCategory: 'daily'
  },
  {
    id: 'read-sent-10',
    type: 'sentence',
    title: {
      en: 'The Early Bird & Famous Dancers (/ɜː/ vs /ə/)',
      vi: 'The Early Bird & Famous Dancers (/ɜː/ vs /ə/)'
    },
    text: 'The first nurse heard thirty German words from the famous dancers.',
    ipa: '/ðə fɜːst nɜːs hɜːd ˈθɜːti ˈdʒɜːmən wɜːdz frəm ðə ˈfeɪməs ˈdɑːnsəz/',
    ipa_us: '/ðə fɜːrst nɜːrs hɜːrd ˈθɜːrti ˈdʒɜːrmən wɜːrdz frəm ðə ˈfeɪməs ˈdænsərz/',
    targetPhonemes: ['ɜː', 'ə'],
    targetSoundsDescription: {
      en: 'Stressed central vowel /ɜː/ (first, nurse, heard, thirty, German, words) vs neutral unstressed schwa /ə/ (famous, dancers).',
      vi: 'Stressed central vowel /ɜː/ (first, nurse, heard, thirty, German, words) vs neutral unstressed schwa /ə/ (famous, dancers).'
    },
    keyWordsWithPhonemes: [
      { word: 'first', phoneme: 'ɜː' },
      { word: 'nurse', phoneme: 'ɜː' },
      { word: 'heard', phoneme: 'ɜː' },
      { word: 'thirty', phoneme: 'ɜː' },
      { word: 'German', phoneme: 'ɜː' },
      { word: 'words', phoneme: 'ɜː' },
      { word: 'famous', phoneme: 'ə' },
      { word: 'dancers', phoneme: 'ə' }
    ],
    difficulty: 'Standard',
    contextCategory: 'story'
  },
  {
    id: 'read-sent-11',
    type: 'sentence',
    title: {
      en: 'Bright Night & Playful Toys (Diphthongs /eɪ, aɪ, ɔɪ/)',
      vi: 'Bright Night & Playful Toys (Diphthongs /eɪ, aɪ, ɔɪ/)'
    },
    text: 'They played eight great games under the bright night sky and enjoyed choice toys.',
    ipa: '/ðeɪ pleɪd eɪt ɡreɪt ɡeɪmz ˈʌndə ðə braɪt naɪt skaɪ ənd ɪnˈdʒɔɪd tʃɔɪs tɔɪz/',
    ipa_us: '/ðeɪ pleɪd eɪt ɡreɪt ɡeɪmz ˈʌndər ðə braɪt naɪt skaɪ ənd ɪnˈdʒɔɪd tʃɔɪs tɔɪz/',
    targetPhonemes: ['eɪ', 'aɪ', 'ɔɪ'],
    targetSoundsDescription: {
      en: 'Smooth diphthong glides towards /ɪ/: /eɪ/ (they, played, eight, great, games), /aɪ/ (bright, night, sky), and /ɔɪ/ (enjoyed, choice, toys).',
      vi: 'Smooth diphthong glides towards /ɪ/: /eɪ/ (they, played, eight, great, games), /aɪ/ (bright, night, sky), and /ɔɪ/ (enjoyed, choice, toys).'
    },
    keyWordsWithPhonemes: [
      { word: 'They', phoneme: 'eɪ' },
      { word: 'played', phoneme: 'eɪ' },
      { word: 'eight', phoneme: 'eɪ' },
      { word: 'great', phoneme: 'eɪ' },
      { word: 'bright', phoneme: 'aɪ' },
      { word: 'night', phoneme: 'aɪ' },
      { word: 'sky', phoneme: 'aɪ' },
      { word: 'enjoyed', phoneme: 'ɔɪ' },
      { word: 'choice', phoneme: 'ɔɪ' },
      { word: 'toys', phoneme: 'ɔɪ' }
    ],
    difficulty: 'Standard',
    contextCategory: 'story'
  },
  {
    id: 'read-sent-12',
    type: 'sentence',
    title: {
      en: 'The Slow Boat & Brown Cow (Diphthongs /əʊ, aʊ/)',
      vi: 'The Slow Boat & Brown Cow (Diphthongs /əʊ, aʊ/)'
    },
    text: 'The lonely goat followed the slow brown cow down the narrow road to town.',
    ipa: '/ðə ˈləʊnli ɡəʊt ˈfɒləʊd ðə sləʊ braʊn kaʊ daʊn ðə ˈnærəʊ rəʊd tuː taʊn/',
    ipa_us: '/ðə ˈloʊnli ɡoʊt ˈfɑːloʊd ðə sloʊ braʊn kaʊ daʊn ðə ˈnæroʊ roʊd tuː taʊn/',
    targetPhonemes: ['əʊ', 'aʊ'],
    targetSoundsDescription: {
      en: 'Closing diphthongs towards /ʊ/: British /əʊ/ (lonely, goat, followed, slow, narrow, road) vs open /aʊ/ (brown, cow, down, town).',
      vi: 'Closing diphthongs towards /ʊ/: British /əʊ/ (lonely, goat, followed, slow, narrow, road) vs open /aʊ/ (brown, cow, down, town).'
    },
    keyWordsWithPhonemes: [
      { word: 'lonely', phoneme: 'əʊ' },
      { word: 'goat', phoneme: 'əʊ' },
      { word: 'slow', phoneme: 'əʊ' },
      { word: 'brown', phoneme: 'aʊ' },
      { word: 'cow', phoneme: 'aʊ' },
      { word: 'down', phoneme: 'aʊ' },
      { word: 'narrow', phoneme: 'əʊ' },
      { word: 'road', phoneme: 'əʊ' },
      { word: 'town', phoneme: 'aʊ' }
    ],
    difficulty: 'Standard',
    contextCategory: 'story'
  },
  {
    id: 'read-sent-13',
    type: 'sentence',
    title: {
      en: 'Charles & George at the Village Bridge (/tʃ/ vs /dʒ/)',
      vi: 'Charles & George at the Village Bridge (/tʃ/ vs /dʒ/)'
    },
    text: 'Charles enjoyed cheap cheese sandwiches with fresh orange juice near the huge village bridge.',
    ipa: '/tʃɑːlz ɪnˈdʒɔɪd tʃiːp tʃiːz ˈsænwɪtʃɪz wɪð freʃ ˈɒrɪndʒ dʒuːs nɪə ðə hjuːdʒ ˈvɪlɪdʒ brɪdʒ/',
    ipa_us: '/tʃɑrlz ɪnˈdʒɔɪd tʃiːp tʃiːz ˈsænwɪtʃɪz wɪð freʃ ˈɔrɪndʒ dʒuːs nɪr ðə hjuːdʒ ˈvɪlɪdʒ brɪdʒ/',
    targetPhonemes: ['tʃ', 'dʒ'],
    targetSoundsDescription: {
      en: 'Palato-alveolar affricates: unvoiced /tʃ/ (Charles, cheap, cheese, sandwiches) vs voiced /dʒ/ (enjoyed, orange, juice, huge, village, bridge).',
      vi: 'Palato-alveolar affricates: unvoiced /tʃ/ (Charles, cheap, cheese, sandwiches) vs voiced /dʒ/ (enjoyed, orange, juice, huge, village, bridge).'
    },
    keyWordsWithPhonemes: [
      { word: 'Charles', phoneme: 'tʃ' },
      { word: 'enjoyed', phoneme: 'dʒ' },
      { word: 'cheap', phoneme: 'tʃ' },
      { word: 'cheese', phoneme: 'tʃ' },
      { word: 'sandwiches', phoneme: 'tʃ' },
      { word: 'orange', phoneme: 'dʒ' },
      { word: 'juice', phoneme: 'dʒ' },
      { word: 'huge', phoneme: 'dʒ' },
      { word: 'bridge', phoneme: 'dʒ' }
    ],
    difficulty: 'Standard',
    contextCategory: 'daily'
  },
  {
    id: 'read-sent-14',
    type: 'sentence',
    title: {
      en: 'Peter’s Big Purple Teapot (Bilabial & Alveolar Stops)',
      vi: 'Peter’s Big Purple Teapot (Bilabial & Alveolar Stops)'
    },
    text: 'Peter put the big purple teapot between two deep double wooden tables.',
    ipa: '/ˈpiːtə pʊt ðə bɪɡ ˈpɜːpl ˈtiːpɒt bɪˈtwiːn tuː diːp ˈdʌbl ˈwʊdn ˈteɪblz/',
    ipa_us: '/ˈpiːtər pʊt ðə bɪɡ ˈpɜːrpl ˈtiːpɑːt bɪˈtwiːn tuː diːp ˈdʌbl ˈwʊdn ˈteɪblz/',
    targetPhonemes: ['p', 'b', 't', 'd'],
    targetSoundsDescription: {
      en: 'Aspirated voiceless stops /p, t/ (Peter, put, purple, teapot) contrasted with voiced counterparts /b, d/ (big, between, double, tables).',
      vi: 'Aspirated voiceless stops /p, t/ (Peter, put, purple, teapot) contrasted with voiced counterparts /b, d/ (big, between, double, tables).'
    },
    keyWordsWithPhonemes: [
      { word: 'Peter', phoneme: 'p' },
      { word: 'put', phoneme: 'p' },
      { word: 'big', phoneme: 'b' },
      { word: 'purple', phoneme: 'p' },
      { word: 'teapot', phoneme: 't' },
      { word: 'between', phoneme: 'b' },
      { word: 'deep', phoneme: 'd' },
      { word: 'double', phoneme: 'd' },
      { word: 'tables', phoneme: 't' }
    ],
    difficulty: 'Intro',
    contextCategory: 'daily'
  },
  {
    id: 'read-sent-15',
    type: 'sentence',
    title: {
      en: 'Cold Milk & Old Gold (Dark L /ɫ/ & Consonant Clusters)',
      vi: 'Cold Milk & Old Gold (Dark L /ɫ/ & Consonant Clusters)'
    },
    text: 'The tall girl sold old gold belt buckles and helped fill twelve milk bottles.',
    ipa: '/ðə tɔːl ɡɜːl səʊld əʊld ɡəʊld belt ˈbʌklz ənd helpt fɪl twelv mɪlk ˈbɒtlz/',
    ipa_us: '/ðə tɔːl ɡɜːrl soʊld oʊld ɡoʊld belt ˈbʌklz ənd helpt fɪl twelv mɪlk ˈbɑːtlz/',
    targetPhonemes: ['l', 'ld', 'lt', 'lk'],
    targetSoundsDescription: {
      en: 'Dark L /ɫ/ post-vocalic resonance and tricky lateral clusters: tall, girl, sold, gold, belt, helped, twelve, milk, bottles.',
      vi: 'Dark L /ɫ/ post-vocalic resonance and tricky lateral clusters: tall, girl, sold, gold, belt, helped, twelve, milk, bottles.'
    },
    keyWordsWithPhonemes: [
      { word: 'tall', phoneme: 'l' },
      { word: 'girl', phoneme: 'l' },
      { word: 'sold', phoneme: 'l' },
      { word: 'gold', phoneme: 'l' },
      { word: 'belt', phoneme: 'l' },
      { word: 'helped', phoneme: 'l' },
      { word: 'twelve', phoneme: 'l' },
      { word: 'milk', phoneme: 'l' },
      { word: 'bottles', phoneme: 'l' }
    ],
    difficulty: 'Challenge',
    contextCategory: 'work'
  },
  {
    id: 'read-sent-16',
    type: 'sentence',
    title: {
      en: 'Measuring Treasures in the Museum (/z/ vs /ʒ/)',
      vi: 'Measuring Treasures in the Museum (/z/ vs /ʒ/)'
    },
    text: 'It is always an unusual pleasure to measure the golden treasures of the Asian museum.',
    ipa: '/ɪt ɪz ˈɔːlweɪz ən ʌnˈjuːʒuəl ˈpleʒə tuː ˈmeʒə ðə ˈɡəʊldən ˈtreʒəz əv ði ˈeɪʒn mjuˈziːəm/',
    ipa_us: '/ɪt ɪz ˈɔːlweɪz ən ʌnˈjuːʒuəl ˈpleʒər tuː ˈmeʒər ðə ˈɡoʊldən ˈtreʒərz əv ði ˈeɪʒn mjuˈziːəm/',
    targetPhonemes: ['z', 'ʒ'],
    targetSoundsDescription: {
      en: 'Contrast voiced alveolar /z/ (is, always, treasures, museum) with voiced postalveolar fricative /ʒ/ (unusual, pleasure, measure, Asian).',
      vi: 'Contrast voiced alveolar /z/ (is, always, treasures, museum) with voiced postalveolar fricative /ʒ/ (unusual, pleasure, measure, Asian).'
    },
    keyWordsWithPhonemes: [
      { word: 'always', phoneme: 'z' },
      { word: 'unusual', phoneme: 'ʒ' },
      { word: 'pleasure', phoneme: 'ʒ' },
      { word: 'measure', phoneme: 'ʒ' },
      { word: 'treasures', phoneme: 'ʒ' },
      { word: 'Asian', phoneme: 'ʒ' },
      { word: 'museum', phoneme: 'z' }
    ],
    difficulty: 'Challenge',
    contextCategory: 'story'
  },
  {
    id: 'read-sent-17',
    type: 'sentence',
    title: {
      en: 'The Young Singer on Monday Morning (/m, n, ŋ/)',
      vi: 'The Young Singer on Monday Morning (/m, n, ŋ/)'
    },
    text: 'The charming young singer was singing strong songs on a sunny Monday morning.',
    ipa: '/ðə ˈtʃɑːmɪŋ jʌŋ ˈsɪŋə wəz ˈsɪŋɪŋ strɒŋ sɒŋz ɒn ə ˈsʌni ˈmʌndeɪ ˈmɔːnɪŋ/',
    ipa_us: '/ðə ˈtʃɑrmɪŋ jʌŋ ˈsɪŋər wəz ˈsɪŋɪŋ strɔːŋ sɔːŋz ɑn ə ˈsʌni ˈmʌndeɪ ˈmɔrnɪŋ/',
    targetPhonemes: ['m', 'n', 'ŋ'],
    targetSoundsDescription: {
      en: 'Velar nasal /ŋ/ without pronouncing a hard /ɡ/: charming, young, singer, singing, strong, songs, morning.',
      vi: 'Velar nasal /ŋ/ without pronouncing a hard /ɡ/: charming, young, singer, singing, strong, songs, morning.'
    },
    keyWordsWithPhonemes: [
      { word: 'charming', phoneme: 'ŋ' },
      { word: 'young', phoneme: 'ŋ' },
      { word: 'singer', phoneme: 'ŋ' },
      { word: 'singing', phoneme: 'ŋ' },
      { word: 'strong', phoneme: 'ŋ' },
      { word: 'songs', phoneme: 'ŋ' },
      { word: 'Monday', phoneme: 'm' },
      { word: 'morning', phoneme: 'ŋ' }
    ],
    difficulty: 'Standard',
    contextCategory: 'daily'
  },
  {
    id: 'read-sent-18',
    type: 'sentence',
    title: {
      en: 'Strict Tests & Laboratory Tasks (Final Clusters /-sts, -sks, -kts/)',
      vi: 'Strict Tests & Laboratory Tasks (Final Clusters /-sts, -sks, -kts/)'
    },
    text: 'The strict scientist asks the guests to accept six distinct laboratory tests.',
    ipa: '/ðə strɪkt ˈsaɪəntɪst ɑːsks ðə ɡests tuː əkˈsept sɪks dɪˈstɪŋkt ləˈbɒrətri tests/',
    ipa_us: '/ðə strɪkt ˈsaɪəntɪst æsks ðə ɡests tuː əkˈsept sɪks dɪˈstɪŋkt ˈlæbrətɔːri tests/',
    targetPhonemes: ['kt', 'sks', 'sts', 'pt'],
    targetSoundsDescription: {
      en: 'Complex final consonant clusters: strict /-kt/, scientist /-st/, asks /-sks/, guests /-sts/, accept /-pt/, distinct /-ŋkt/, tests /-sts/.',
      vi: 'Complex final consonant clusters: strict /-kt/, scientist /-st/, asks /-sks/, guests /-sts/, accept /-pt/, distinct /-ŋkt/, tests /-sts/.'
    },
    keyWordsWithPhonemes: [
      { word: 'strict', phoneme: 't' },
      { word: 'scientist', phoneme: 't' },
      { word: 'asks', phoneme: 's' },
      { word: 'guests', phoneme: 's' },
      { word: 'accept', phoneme: 't' },
      { word: 'distinct', phoneme: 't' },
      { word: 'tests', phoneme: 's' }
    ],
    difficulty: 'Challenge',
    contextCategory: 'work'
  },

  // ==========================================
  // PARAGRAPH & DIALOGUE DRILLS (10 Exercises)
  // ==========================================
  {
    id: 'read-para-1',
    type: 'paragraph',
    title: {
      en: 'A Gentle Rainy Morning in London (Connected Speech)',
      vi: 'A Gentle Rainy Morning in London (Connected Speech)'
    },
    text: 'It is a rather cold autumn morning in London. People with warm coats walk through the damp park towards the train station. A sweet smell of fresh coffee and hot bread drifts from the local bakery near the corner.',
    ipa: '/ɪt ɪz ə ˈrɑːðə kəʊld ˈɔːtəm ˈmɔːnɪŋ ɪn ˈlʌndən. ˈpiːpl wɪð wɔːm kəʊts wɔːk θruː ðə dæmp pɑːk təˈwɔːdz ðə treɪn ˈsteɪʃn. ə swiːt smel əv freʃ ˈkɒfi ənd hɒt bred drɪfts frəm ðə ˈləʊkl ˈbeɪkəri nɪə ðə ˈkɔːnə./',
    ipa_us: '/ɪt ɪz ə ˈræðər koʊld ˈɔtəm ˈmɔrnɪŋ ɪn ˈlʌndən. ˈpiːpl wɪð wɔrm koʊts wɔk θruː ðə dæmp pɑrk təˈwɔrdz ðə treɪn ˈsteɪʃn. ə swiːt smel əv freʃ ˈkɑfi ənd hɑt bred drɪfts frəm ðə ˈloʊkl ˈbeɪkəri nɪr ðə ˈkɔrnər./',
    targetPhonemes: ['ɔː', 'əʊ', 'θ', 't', 'k'],
    targetSoundsDescription: {
      en: 'British RP non-rhotic vowels (morning, park, corner), long /ɔː/ (autumn, warm, walk), and natural rhythmic pacing.',
      vi: 'British RP non-rhotic vowels (morning, park, corner), long /ɔː/ (autumn, warm, walk), and natural rhythmic pacing.'
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
    difficulty: 'Standard',
    contextCategory: 'story'
  },
  {
    id: 'read-para-2',
    type: 'paragraph',
    title: {
      en: 'Pronunciation Workshop at EIE Education',
      vi: 'Pronunciation Workshop at EIE Education'
    },
    text: 'Welcome to our English pronunciation workshop at EIE Education! Today, teacher Phượng Chick guides us through forty-four standard British sounds. Remember to breathe deeply, relax your jaw, and pronounce each final consonant with bright confidence.',
    ipa: '/ˈwelkəm tuː ˈaʊə ˈɪŋɡlɪʃ prəˌnʌnsiˈeɪʃn ˈwɜːkʃɒp ət iː-aɪ-iː ˌedʒuˈkeɪʃn! təˈdeɪ, ˈtiːtʃə fʊəŋ tʃɪk ɡaɪdz ʌs θruː ˈfɔːti fɔː ˈstændəd ˈbrɪtɪʃ saʊndz. rɪˈmembə tuː briːð ˈdiːpli, rɪˈlæks jɔː dʒɔː, ənd prəˈnaʊns iːtʃ ˈfaɪnl ˈkɒnsənənt wɪð braɪt ˈkɒnfɪdəns./',
    ipa_us: '/ˈwelkəm tuː ˈaʊər ˈɪŋɡlɪʃ prəˌnʌnsiˈeɪʃn ˈwɜːrkʃɑːp ət iː-aɪ-iː ˌedʒuˈkeɪʃn! təˈdeɪ, ˈtiːtʃər fʊəŋ tʃɪk ɡaɪdz ʌs θruː ˈfɔːrti fɔːr ˈstændərd ˈbrɪtɪʃ saʊndz. rɪˈmembər tuː briːð ˈdiːpli, rɪˈlæks jɔːr dʒɔː, ənd prəˈnaʊns iːtʃ ˈfaɪnl ˈkɑːnsənənt wɪð braɪt ˈkɑːnfɪdəns./',
    targetPhonemes: ['ʃ', 'tʃ', 'dʒ', 'θ', 'ð'],
    targetSoundsDescription: {
      en: 'Affricates and fricatives (/tʃ, dʒ, ʃ/) and dental sounds (/θ, ð/) along with confident final sound releases.',
      vi: 'Affricates and fricatives (/tʃ, dʒ, ʃ/) and dental sounds (/θ, ð/) along with confident final sound releases.'
    },
    keyWordsWithPhonemes: [
      { word: 'workshop', phoneme: 'ʃ' },
      { word: 'Chick', phoneme: 'tʃ' },
      { word: 'through', phoneme: 'θ' },
      { word: 'forty-four', phoneme: 'ɔː' },
      { word: 'breathe', phoneme: 'ð' },
      { word: 'jaw', phoneme: 'dʒ' },
      { word: 'consonant', phoneme: 't' },
      { word: 'confidence', phoneme: 's' }
    ],
    difficulty: 'Challenge',
    contextCategory: 'story'
  },
  {
    id: 'read-para-3',
    type: 'paragraph',
    title: {
      en: 'Booking a Train Ticket to Cambridge (Travel Dialogue)',
      vi: 'Booking a Train Ticket to Cambridge (Travel Dialogue)'
    },
    text: 'Good afternoon. Could I please book a return ticket to Cambridge for tomorrow morning? I would like to catch the eight-fifteen train if there are still seats available. Thank you very much for your kind help.',
    ipa: '/ɡʊd ˌɑːftəˈnuːn. kʊd aɪ pliːz bʊk ə rɪˈtɜːn ˈtɪkɪt tuː ˈkeɪmbrɪdʒ fə təˈmɒrəʊ ˈmɔːnɪŋ? aɪ wʊd laɪk tuː kætʃ ði eɪt ˌfɪfˈtiːn treɪn ɪf ðeər ɑː stɪl siːts əˈveɪləbl. θæŋk juː ˈveri mʌtʃ fə jɔː kaɪnd help./',
    ipa_us: '/ɡʊd ˌæftərˈnuːn. kʊd aɪ pliːz bʊk ə rɪˈtɜrn ˈtɪkɪt tuː ˈkeɪmbrɪdʒ fər təˈmɑroʊ ˈmɔrnɪŋ? aɪ wʊd laɪk tuː kætʃ ði eɪt ˌfɪfˈtiːn treɪn ɪf ðer ɑr stɪl siːts əˈveɪləbl. θæŋk juː ˈveri mʌtʃ fər jɔr kaɪnd help./',
    targetPhonemes: ['ʊ', 'uː', 't', 'dʒ', 'θ'],
    targetSoundsDescription: {
      en: 'Vowel contrast between short /ʊ/ (good, could, book, would) and long /uː/ (afternoon), plus polite British rising and falling pitch.',
      vi: 'Vowel contrast between short /ʊ/ (good, could, book, would) and long /uː/ (afternoon), plus polite British rising and falling pitch.'
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
    difficulty: 'Standard',
    contextCategory: 'travel'
  },
  {
    id: 'read-para-4',
    type: 'paragraph',
    title: {
      en: 'Ordering at a London Coffee Shop (Café Dialogue)',
      vi: 'Ordering at a London Coffee Shop (Café Dialogue)'
    },
    text: 'Good morning! Could I please have a flat white coffee with oat milk and a warm toasted croissant? If possible, I would also like a bottle of chilled sparkling water. Keep the change, thank you very much!',
    ipa: '/ɡʊd ˈmɔːnɪŋ! kʊd aɪ pliːz hæv ə flæt waɪt ˈkɒfi wɪð əʊt mɪlk ənd ə wɔːm ˈtəʊstɪd ˈkwæsɒŋ? ɪf ˈpɒsəbl, aɪ wʊd ˈɔːlsəʊ laɪk ə ˈbɒtl əv tʃɪld ˈspɑːklɪŋ ˈwɔːtə. kiːp ðə tʃeɪndʒ, θæŋk juː ˈveri mʌtʃ!/',
    ipa_us: '/ɡʊd ˈmɔrnɪŋ! kʊd aɪ pliːz hæv ə flæt waɪt ˈkɑfi wɪð oʊt mɪlk ənd ə wɔrm ˈtoʊstɪd krwɑːˈsɑnt? ɪf ˈpɑsəbl, aɪ wʊd ˈɔlsoʊ laɪk ə ˈbɑtl əv tʃɪld ˈspɑrklɪŋ ˈwɔtər. kiːp ðə tʃeɪndʒ, θæŋk juː ˈveri mʌtʃ!/',
    targetPhonemes: ['aɪ', 'əʊ', 'ɒ', 'tʃ', 'dʒ'],
    targetSoundsDescription: {
      en: 'Linking words smoothly (flat white, keep the change) and distinguishing short /ɒ/ (coffee, bottle) from long /ɔː/ (morning, warm, water).',
      vi: 'Linking words smoothly (flat white, keep the change) and distinguishing short /ɒ/ (coffee, bottle) from long /ɔː/ (morning, warm, water).'
    },
    keyWordsWithPhonemes: [
      { word: 'morning', phoneme: 'ɔː' },
      { word: 'white', phoneme: 'aɪ' },
      { word: 'coffee', phoneme: 'ɒ' },
      { word: 'milk', phoneme: 'l' },
      { word: 'croissant', phoneme: 't' },
      { word: 'bottle', phoneme: 'ɒ' },
      { word: 'change', phoneme: 'dʒ' },
      { word: 'thank', phoneme: 'θ' }
    ],
    difficulty: 'Standard',
    contextCategory: 'daily'
  },
  {
    id: 'read-para-5',
    type: 'paragraph',
    title: {
      en: 'Quarterly Business Strategy Presentation (Workplace)',
      vi: 'Quarterly Business Strategy Presentation (Workplace)'
    },
    text: 'Thank you all for joining our quarterly strategy briefing. Over the past six months, our international team has achieved outstanding client satisfaction across twelve European markets. Today, let us examine our strategic milestones and operational priorities for the coming year.',
    ipa: '/θæŋk juː ɔːl fə ˈdʒɔɪnɪŋ ˈaʊə ˈkwɔːtəli ˈstrætədʒi ˈbriːfɪŋ. ˈəʊvə ðə pɑːst sɪks mʌnθs, ˈaʊər ˌɪntəˈnæʃnəl tiːm həz əˈtʃiːvd aʊtˈstændɪŋ ˈklaɪənt ˌsætɪsˈfækʃn əˈkrɒs twelv ˌjʊərəˈpiːən ˈmɑːkɪts. təˈdeɪ, let ʌs ɪɡˈzæmɪn ˈaʊə strəˈtiːdʒɪk ˈmaɪlstəʊnz ənd ˌɒpəˈreɪʃənl praɪˈɒrətiz fə ðə ˈkʌmɪŋ jɪə./',
    ipa_us: '/θæŋk juː ɔːl fər ˈdʒɔɪnɪŋ ˈaʊər ˈkwɔrtərli ˈstrætədʒi ˈbriːfɪŋ. ˈoʊvər ðə pæst sɪks mʌnθs, ˈaʊər ˌɪntərˈnæʃnəl tiːm həz əˈtʃiːvd aʊtˈstændɪŋ ˈklaɪənt ˌsætɪsˈfækʃn əˈkrɔːs twelv ˌjʊrəˈpiːən ˈmɑrkɪts. təˈdeɪ, let ʌs ɪɡˈzæmɪn ˈaʊər strəˈtiːdʒɪk ˈmaɪlstoʊnz ənd ˌɑpəˈreɪʃənl praɪˈɔrətiz fər ðə ˈkʌmɪŋ jɪr./',
    targetPhonemes: ['θ', 'dʒ', 'tʃ', 'ʃ', 'ts'],
    targetSoundsDescription: {
      en: 'Professional stress patterns, complex Latin-root syllables (satisfaction, operational, strategic), and clear word-final clusters (months, markets, milestones).',
      vi: 'Professional stress patterns, complex Latin-root syllables (satisfaction, operational, strategic), and clear word-final clusters (months, markets, milestones).'
    },
    keyWordsWithPhonemes: [
      { word: 'briefing', phoneme: 'iː' },
      { word: 'months', phoneme: 'θ' },
      { word: 'achieved', phoneme: 'tʃ' },
      { word: 'satisfaction', phoneme: 'ʃ' },
      { word: 'markets', phoneme: 'ts' },
      { word: 'strategic', phoneme: 'dʒ' },
      { word: 'milestones', phoneme: 's' }
    ],
    difficulty: 'Challenge',
    contextCategory: 'work'
  },
  {
    id: 'read-para-6',
    type: 'paragraph',
    title: {
      en: 'Checking in at Heathrow Airport (Travel Dialogue)',
      vi: 'Checking in at Heathrow Airport (Travel Dialogue)'
    },
    text: 'Good evening. I would like to check in for British Airways flight four hundred and eighteen to Edinburgh. Here is my passport and electronic boarding pass. I have one suitcase to check into the hold and one small shoulder bag to carry onto the aircraft.',
    ipa: '/ɡʊd ˈiːvnɪŋ. aɪ wʊd laɪk tuː tʃek ɪn fə ˈbrɪtɪʃ ˈeəweɪz flaɪt fɔː ˈhʌndrəd ənd ˌeɪˈtiːn tuː ˈedɪnbrə. hɪər ɪz maɪ ˈpɑːspɔːt ənd ɪˌlekˈtrɒnɪk ˈbɔːdɪŋ pɑːs. aɪ hæv wʌn ˈsuːtkeɪs tuː tʃek ˈɪntuː ðə həʊld ənd wʌn smɔːl ˈʃəʊldə bæɡ tuː ˈkæri ˈɒntuː ði ˈeəkrɑːft./',
    ipa_us: '/ɡʊd ˈiːvnɪŋ. aɪ wʊd laɪk tuː tʃek ɪn fər ˈbrɪtɪʃ ˈerweɪz flaɪt fɔːr ˈhʌndrəd ənd ˌeɪˈtiːn tuː ˈedɪnbʌroʊ. hɪr ɪz maɪ ˈpæspɔːrt ənd ɪˌlekˈtrɑːnɪk ˈbɔːrdɪŋ pæs. aɪ hæv wʌn ˈsuːtkeɪs tuː tʃek ˈɪntuː ðə hoʊld ənd wʌn smɔːl ˈʃoʊldər bæɡ tuː ˈkæri ˈɑːntuː ði ˈerkræft./',
    targetPhonemes: ['tʃ', 'eə', 'p', 'b', 'd'],
    targetSoundsDescription: {
      en: 'Clear number articulation (four hundred and eighteen), airport terminology, and centering diphthongs (/eə/ in airways, aircraft).',
      vi: 'Clear number articulation (four hundred and eighteen), airport terminology, and centering diphthongs (/eə/ in airways, aircraft).'
    },
    keyWordsWithPhonemes: [
      { word: 'check', phoneme: 'tʃ' },
      { word: 'flight', phoneme: 't' },
      { word: 'passport', phoneme: 'p' },
      { word: 'boarding', phoneme: 'ɔː' },
      { word: 'suitcase', phoneme: 's' },
      { word: 'shoulder', phoneme: 'ʃ' },
      { word: 'aircraft', phoneme: 't' }
    ],
    difficulty: 'Standard',
    contextCategory: 'travel'
  },
  {
    id: 'read-para-7',
    type: 'paragraph',
    title: {
      en: 'An Afternoon at the British Museum (Cultural Story)',
      vi: 'An Afternoon at the British Museum (Cultural Story)'
    },
    text: 'Yesterday afternoon, Claire wandered through the ancient galleries of the British Museum. She admired the magnificent golden artifacts, sculpted marble friezes, and illuminated manuscripts created centuries ago. Soft daylight filtered through the glass dome of the Great Court.',
    ipa: '/ˈjestədeɪ ˌɑːftəˈnuːn, kleə ˈwɒndəd θruː ði ˈeɪnʃənt ˈɡæləriz əv ðə ˈbrɪtɪʃ mjuˈziːəm. ʃiː ədˈmaɪəd ðə mæɡˈnɪfɪsnt ˈɡəʊldən ˈɑːtɪfækts, ˈskʌlptɪd ˈmɑːbl ˈfriːzɪz, ənd ɪˈluːmɪneɪtɪd ˈmænjuskrɪpts kriˈeɪtɪd ˈsentʃəriz əˈɡəʊ. sɒft ˈdeɪlaɪt ˈfɪltəd θruː ðə ɡlɑːs dəʊm əv ðə ɡreɪt kɔːt./',
    ipa_us: '/ˈjestərdeɪ ˌæftərˈnuːn, kler ˈwɑndərd θruː ði ˈeɪnʃənt ˈɡæləriz əv ðə ˈbrɪtɪʃ mjuˈziːəm. ʃiː ədˈmaɪərd ðə mæɡˈnɪfɪsnt ˈɡoʊldən ˈɑrtɪfækts, ˈskʌlptɪd ˈmɑrbl ˈfriːzɪz, ənd ɪˈluːmɪneɪtɪd ˈmænjuskrɪpts kriˈeɪtɪd ˈsentʃəriz əˈɡoʊ. sɔːft ˈdeɪlaɪt ˈfɪltərd θruː ðə ɡlæs doʊm əv ðə ɡreɪt kɔrt./',
    targetPhonemes: ['eə', 'ʃ', 'tʃ', 'ɑː', 'd'],
    targetSoundsDescription: {
      en: 'Past tense -ed endings (/d/ in wandered, admired; /ɪd/ in sculpted, created), British long /ɑː/ (afternoon, artifacts, marble, glass), and smooth cadence.',
      vi: 'Past tense -ed endings (/d/ in wandered, admired; /ɪd/ in sculpted, created), British long /ɑː/ (afternoon, artifacts, marble, glass), and smooth cadence.'
    },
    keyWordsWithPhonemes: [
      { word: 'Claire', phoneme: 'eə' },
      { word: 'wandered', phoneme: 'd' },
      { word: 'ancient', phoneme: 'ʃ' },
      { word: 'admired', phoneme: 'd' },
      { word: 'sculpted', phoneme: 't' },
      { word: 'manuscripts', phoneme: 'ts' },
      { word: 'centuries', phoneme: 'tʃ' },
      { word: 'Court', phoneme: 'ɔː' }
    ],
    difficulty: 'Challenge',
    contextCategory: 'story'
  },
  {
    id: 'read-para-8',
    type: 'paragraph',
    title: {
      en: 'Medical Consultation at the Local Clinic (Health Dialogue)',
      vi: 'Medical Consultation at the Local Clinic (Health Dialogue)'
    },
    text: 'Hello Doctor Evans. I have had a persistent dry cough and a slight sore throat since Thursday evening. I tried resting at home and drinking hot honey lemon water, but the irritation has not improved. Could you please examine my chest and let me know if I need a prescription?',
    ipa: '/həˈləʊ ˈdɒktə ˈevənz. aɪ həv hæd ə pəˈsɪstənt draɪ kɒf ənd ə slaɪt sɔː θrəʊt sɪns ˈθɜːzdeɪ ˈiːvnɪŋ. aɪ traɪd ˈrestɪŋ ət həʊm ənd ˈdrɪŋkɪŋ hɒt ˈhʌni ˈlemən ˈwɔːtə, bət ði ˌɪrɪˈteɪʃn həz nɒt ɪmˈpruːvd. kʊd juː pliːz ɪɡˈzæmɪn maɪ tʃest ənd let miː nəʊ ɪf aɪ niːd ə prɪˈskrɪpʃn?/',
    ipa_us: '/həˈloʊ ˈdɑktər ˈevənz. aɪ həv hæd ə pərˈsɪstənt draɪ kɔːf ənd ə slaɪt sɔr θroʊt sɪns ˈθɜrzdeɪ ˈiːvnɪŋ. aɪ traɪd ˈrestɪŋ ət hoʊm ənd ˈdrɪŋkɪŋ hɑt ˈhʌni ˈlemən ˈwɔtər, bət ði ˌɪrɪˈteɪʃn həz nɑt ɪmˈpruːvd. kʊd juː pliːz ɪɡˈzæmɪn maɪ tʃest ənd let miː noʊ ɪf aɪ niːd ə prɪˈskrɪpʃn?/',
    targetPhonemes: ['θ', 's', 'ʃ', 'tʃ', 'p'],
    targetSoundsDescription: {
      en: 'Fricative control (/θ/ in throat, Thursday; /f/ in cough; /ʃ/ in irritation, prescription) and polite modal questions.',
      vi: 'Fricative control (/θ/ in throat, Thursday; /f/ in cough; /ʃ/ in irritation, prescription) and polite modal questions.'
    },
    keyWordsWithPhonemes: [
      { word: 'persistent', phoneme: 't' },
      { word: 'cough', phoneme: 'f' },
      { word: 'throat', phoneme: 'θ' },
      { word: 'Thursday', phoneme: 'θ' },
      { word: 'chest', phoneme: 'tʃ' },
      { word: 'prescription', phoneme: 'ʃ' }
    ],
    difficulty: 'Standard',
    contextCategory: 'daily'
  },
  {
    id: 'read-para-9',
    type: 'paragraph',
    title: {
      en: 'Professional Job Interview Introduction (Career Pitch)',
      vi: 'Professional Job Interview Introduction (Career Pitch)'
    },
    text: 'Thank you for the opportunity to speak with you today. Over the past five years, I have led cross-functional technical teams, redesigned customer onboarding experiences, and consistently exceeded project delivery targets. I pride myself on clear communication, structured problem-solving, and collaborative team environments.',
    ipa: '/θæŋk juː fə ði ˌɒpəˈtjuːnəti tuː spiːk wɪð juː təˈdeɪ. ˈəʊvə ðə pɑːst faɪv jɪəz, aɪ həv led krɒs-ˈfʌŋkʃənl ˈteknɪkl tiːmz, ˌriːdɪˈzaɪnd ˈkʌstəmər ˈɒnbɔːdɪŋ ɪkˈspɪəriənsɪz, ənd kənˈsɪstəntli ɪkˈsiːdɪd ˈprɒdʒekt dɪˈlɪvəri ˈtɑːɡɪts. aɪ praɪd maɪˈself ɒn klɪə kəˌmjuːnɪˈkeɪʃn, ˈstrʌktʃəd ˈprɒbləm-ˌsɒlvɪŋ, ənd kəˈlæbərətɪv tiːm ɪnˈvaɪrənmənts./',
    ipa_us: '/θæŋk juː fər ði ˌɑpərˈtuːnəti tuː spiːk wɪð juː təˈdeɪ. ˈoʊvər ðə pæst faɪv jɪrz, aɪ həv led krɔːs-ˈfʌŋkʃənl ˈteknɪkl tiːmz, ˌriːdɪˈzaɪnd ˈkʌstəmər ˈɑnbɔrdɪŋ ɪkˈspɪriənsɪz, ənd kənˈsɪstəntli ɪkˈsiːdɪd ˈprɑdʒekt dɪˈlɪvəri ˈtɑrɡɪts. aɪ praɪd maɪˈself ɑn klɪr kəˌmjuːnɪˈkeɪʃn, ˈstrʌktʃərd ˈprɑbləm-ˌsɑlvɪŋ, ənd kəˈlæbəreɪtɪv tiːm ɪnˈvaɪrənmənts./',
    targetPhonemes: ['θ', 'tʃ', 'dʒ', 'ʃ', 'ts'],
    targetSoundsDescription: {
      en: 'Confident executive delivery, sentence stress on key lexical verbs (led, redesigned, exceeded), and crisp consonant clusters in final positions (targets, environments).',
      vi: 'Confident executive delivery, sentence stress on key lexical verbs (led, redesigned, exceeded), and crisp consonant clusters in final positions (targets, environments).'
    },
    keyWordsWithPhonemes: [
      { word: 'opportunity', phoneme: 't' },
      { word: 'teams', phoneme: 'z' },
      { word: 'redesigned', phoneme: 'd' },
      { word: 'experiences', phoneme: 's' },
      { word: 'targets', phoneme: 'ts' },
      { word: 'structured', phoneme: 'tʃ' },
      { word: 'environments', phoneme: 'ts' }
    ],
    difficulty: 'Challenge',
    contextCategory: 'work'
  },
  {
    id: 'read-para-10',
    type: 'paragraph',
    title: {
      en: 'The Secret Garden of the Cotswolds (Poetic Narrative)',
      vi: 'The Secret Garden of the Cotswolds (Poetic Narrative)'
    },
    text: 'Nestled among the rolling hills of the Cotswolds lay a secluded stone cottage surrounded by wild honeysuckle and lavender. Each morning, golden sunlight illuminated dew-covered cobwebs along the old garden wall, while songbirds filled the tranquil country air with gentle choruses.',
    ipa: '/ˈnesld əˈmʌŋ ðə ˈrəʊlɪŋ hɪlz əv ðə ˈkɒtswəʊldz leɪ ə sɪˈkluːdɪd stəʊn ˈkɒtɪdʒ səˈraʊndɪd baɪ waɪld ˈhʌnisʌkl ənd ˈlævəndə. iːtʃ ˈmɔːnɪŋ, ˈɡəʊldən ˈsʌnlaɪt ɪˈluːmɪneɪtɪd ˈdjuː-ˌkʌvəd ˈkɒbwebz əˈlɒŋ ði əʊld ˈɡɑːdn wɔːl, waɪl ˈsɒŋbɜːdz fɪld ðə ˈtræŋkwɪl ˈkʌntri eə wɪð ˈdʒentl ˈkɔːrəsɪz./',
    ipa_us: '/ˈnesld əˈmʌŋ ðə ˈroʊlɪŋ hɪlz əv ðə ˈkɑtswoʊldz leɪ ə sɪˈkluːdɪd stoʊn ˈkɑtɪdʒ səˈraʊndɪd baɪ waɪld ˈhʌnisʌkl ənd ˈlævəndər. iːtʃ ˈmɔrnɪŋ, ˈɡoʊldən ˈsʌnlaɪt ɪˈluːmɪneɪtɪd ˈduː-ˌkʌvərd ˈkɑbwebz əˈlɔːŋ ði oʊld ˈɡɑrdn wɔːl, waɪl ˈsɔːŋbɜrdz fɪld ðə ˈtræŋkwɪl ˈkʌntri er wɪð ˈdʒentl ˈkɔrəsɪz./',
    targetPhonemes: ['əʊ', 'uː', 'ɔː', 'ɜː', 'dʒ'],
    targetSoundsDescription: {
      en: 'Rich descriptive prosody, long rounded vowels (/uː/ in secluded, /ɔː/ in morning, wall), and melodious British intonation.',
      vi: 'Rich descriptive prosody, long rounded vowels (/uː/ in secluded, /ɔː/ in morning, wall), and melodious British intonation.'
    },
    keyWordsWithPhonemes: [
      { word: 'hills', phoneme: 'l' },
      { word: 'cottage', phoneme: 'dʒ' },
      { word: 'surrounded', phoneme: 'd' },
      { word: 'lavender', phoneme: 'ə' },
      { word: 'morning', phoneme: 'ɔː' },
      { word: 'sunlight', phoneme: 'aɪ' },
      { word: 'wall', phoneme: 'ɔː' },
      { word: 'choruses', phoneme: 's' }
    ],
    difficulty: 'Challenge',
    contextCategory: 'story'
  }
];
