import React from 'react';
import { Language } from '../types';
import { AlertTriangle, CheckCircle2, Volume2, ArrowRight } from 'lucide-react';
import { playBritishSpeech } from '../utils/audio';

interface VietnamesePitfallsGuideProps {
  lang: Language;
  onSelectPhonemeById: (id: string) => void;
}

interface TrapItem {
  id: string;
  title: { en: string; vi: string };
  mistake: { en: string; vi: string };
  fix: { en: string; vi: string };
  words: { word: string; ipa: string; meaning: string }[];
  targetPhonemeId: string;
}

const TRAPS: TrapItem[] = [
  {
    id: 'trap_final_consonants',
    title: {
      en: '1. Dropping Final Consonants (/t/, /d/, /s/, /z/, /k/, /l/)',
      vi: '1. Căn bệnh "Nuốt âm cuối" (/t/, /d/, /s/, /z/, /k/, /l/)'
    },
    mistake: {
      en: 'Vietnamese syllables are closed without audible final release. Learners often say "ca" instead of "cat", "li" instead of "like", "wi" instead of "with".',
      vi: 'Tiếng Việt là ngôn ngữ đơn lập, âm cuối thường khép kín không bật hơi. Người học thường đọc "cat" thành "cát/ca", "like" thành "lai", "with" thành "uýt".'
    },
    fix: {
      en: 'Always complete the mouth movement: tap the tongue for /t/, hiss the teeth for /s/, tap back of tongue for /k/.',
      vi: 'Luôn hoàn thành trọn vẹn động tác cơ quan cấu âm: gõ đầu lưỡi cho /t/, khép răng xì cho /s/, gõ cuống lưỡi cho /k/.'
    },
    words: [
      { word: 'cat', ipa: '/kæt/', meaning: 'con mèo' },
      { word: 'like', ipa: '/laɪk/', meaning: 'thích' },
      { word: 'bus', ipa: '/bʌs/', meaning: 'xe buýt' },
      { word: 'feel', ipa: '/fiːl/', meaning: 'cảm thấy' }
    ],
    targetPhonemeId: 'c_t'
  },
  {
    id: 'trap_th_sounds',
    title: {
      en: '2. The "TH" Dilemma (/θ/ and /ð/)',
      vi: '2. Trở ngại âm TH (/θ/ vô thanh & /ð/ hữu thanh)'
    },
    mistake: {
      en: 'Substituting Vietnamese "th" (which is an aspirated /tʰ/), or /t/ or /s/ for /θ/, and /d/ or /z/ for /ð/.',
      vi: 'Thay thế bằng âm "th" tiếng Việt (vốn là âm bật hơi /tʰ/), hoặc đọc /θ/ thành /t/ hay /s/, và /ð/ thành /d/ hay /z/.'
    },
    fix: {
      en: 'Gently place tongue tip between your upper and lower front teeth. Blow softly for /θ/ ("think"), buzz vocal cords for /ð/ ("this").',
      vi: 'Kẹp nhẹ đầu lưỡi ra giữa hai hàm răng cửa. Thổi êm cho /θ/ ("think"), rung cổ họng cho /ð/ ("this"). Đừng rụt lưỡi vào trong!'
    },
    words: [
      { word: 'think', ipa: '/θɪŋk/', meaning: 'suy nghĩ' },
      { word: 'this', ipa: '/ðɪs/', meaning: 'cái này' },
      { word: 'breathe', ipa: '/briːð/', meaning: 'hít thở' },
      { word: 'teeth', ipa: '/tiːθ/', meaning: 'hàm răng' }
    ],
    targetPhonemeId: 'c_theta'
  },
  {
    id: 'trap_v_w',
    title: {
      en: '3. Confusing /v/ with /w/ or /b/',
      vi: '3. Nhầm lẫn giữa /v/ và /w/ hoặc /b/'
    },
    mistake: {
      en: 'Saying "west" instead of "vest", or touching lips together for /v/ like /b/.',
      vi: 'Nói "west" thành "vest", hoặc mím hai môi lại khi đọc /v/ biến thành /b/.'
    },
    fix: {
      en: 'For /v/, upper teeth MUST touch lower lip with friction. For /w/, round lips tightly like whistling without touching teeth.',
      vi: 'Với /v/, răng cửa trên BẮT BUỘC chạm mặt trong môi dưới. Với /w/, chu tròn môi như huýt sáo tuyệt đối không chạm răng.'
    },
    words: [
      { word: 'vest', ipa: '/vest/', meaning: 'áo gi-lê' },
      { word: 'west', ipa: '/west/', meaning: 'hướng tây' },
      { word: 'very', ipa: '/ˈveri/', meaning: 'rất' },
      { word: 'wine', ipa: '/waɪn/', meaning: 'rượu vang' }
    ],
    targetPhonemeId: 'c_v'
  },
  {
    id: 'trap_s_sh',
    title: {
      en: '4. Sharp /s/ vs Flared /ʃ/ (Suỵt)',
      vi: '4. Cặp âm xì /s/ mỉm cười vs /ʃ/ chu môi "suỵt"'
    },
    mistake: {
      en: 'Flattening all "sh" sounds into smiling /s/ (e.g. "she" becomes "see", "English" becomes "Eng-lis").',
      vi: 'Bè khóe miệng đọc tất cả âm "sh" thành /s/ (ví dụ đọc "she" thành "si", "English" thành "ing-lít").'
    },
    fix: {
      en: 'For /ʃ/, round your lips firmly forward into a circle and pull tongue back like saying "shhh!".',
      vi: 'Với /ʃ/, chu tròn môi ra phía trước và kéo lưỡi nhẹ ra sau giống hệt như khi ra hiệu im lặng "suỵt!".'
    },
    words: [
      { word: 'she', ipa: '/ʃiː/', meaning: 'cô ấy' },
      { word: 'see', ipa: '/siː/', meaning: 'nhìn thấy' },
      { word: 'ship', ipa: '/ʃɪp/', meaning: 'con tàu' },
      { word: 'fish', ipa: '/fɪʃ/', meaning: 'con cá' }
    ],
    targetPhonemeId: 'c_esh'
  },
  {
    id: 'trap_vowel_length',
    title: {
      en: '5. Monophthong Length & Diphthong Glides (/iː/ vs /ɪ/, /uː/ vs /ʊ/)',
      vi: '5. Độ dài nguyên âm đơn & Độ lướt nguyên âm đôi (/iː/ vs /ɪ/, /əʊ/)'
    },
    mistake: {
      en: 'Treating long /iː/ and short /ɪ/ as the same sound, or pronouncing /əʊ/ as flat Vietnamese "ô".',
      vi: 'Xem nguyên âm dài /iː/ và ngắn /ɪ/ giống nhau, hoặc đọc nguyên âm đôi /əʊ/ thành âm "ô" phẳng lì.'
    },
    fix: {
      en: 'Hold long vowels twice as long. For diphthong /əʊ/, start with neutral relaxed lips /ə/ and finish by rounding lips to /ʊ/.',
      vi: 'Giữ nguyên âm dài gấp đôi thời gian. Với nguyên âm đôi /əʊ/, bắt đầu bằng môi thư giãn /ə/ rồi khum tròn dần về /ʊ/.'
    },
    words: [
      { word: 'sheep', ipa: '/ʃiːp/', meaning: 'con cừu' },
      { word: 'ship', ipa: '/ʃɪp/', meaning: 'con tàu' },
      { word: 'home', ipa: '/həʊm/', meaning: 'ngôi nhà' },
      { word: 'good', ipa: '/ɡʊd/', meaning: 'tốt' }
    ],
    targetPhonemeId: 'v_i_long'
  }
];

export const VietnamesePitfallsGuide: React.FC<VietnamesePitfallsGuideProps> = ({
  lang,
  onSelectPhonemeById
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-6">
      <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
        <span className="p-2 rounded-xl bg-rose-100 text-rose-700">
          <AlertTriangle className="w-5 h-5" />
        </span>
        <div>
          <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
            {lang === 'vi' ? 'Góc Trị Liệu Bẫy Âm Người Việt (Vietnamese Traps Workout)' : 'Vietnamese Pronunciation Traps & Therapy'}
          </h3>
          <p className="text-xs text-slate-500">
            {lang === 'vi'
              ? 'Giải mã 5 thói quen âm học cố hữu của người Việt và phương pháp chuẩn hóa British RP'
              : 'Targeted workouts addressing common Vietnamese acoustic interference'}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {TRAPS.map((trap) => (
          <div
            key={trap.id}
            className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 hover:bg-slate-50 transition space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                {trap.title[lang]}
              </h4>

              <button
                type="button"
                onClick={() => onSelectPhonemeById(trap.targetPhonemeId)}
                className="self-start sm:self-auto text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 transition"
              >
                <span>{lang === 'vi' ? 'Luyện âm vị này' : 'Practice phoneme'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-rose-50/70 border border-rose-200/80 p-3 rounded-lg text-rose-950">
                <strong className="block font-bold text-rose-900 mb-1">
                  {lang === 'vi' ? 'Lỗi người Việt hay mắc:' : 'Typical error:'}
                </strong>
                <p className="leading-relaxed">{trap.mistake[lang]}</p>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200/80 p-3 rounded-lg text-emerald-950">
                <strong className="block font-bold text-emerald-900 mb-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {lang === 'vi' ? 'Cách sửa dứt điểm:' : 'Permanent fix:'}
                </strong>
                <p className="leading-relaxed">{trap.fix[lang]}</p>
              </div>
            </div>

            {/* Practice drill words */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                {lang === 'vi' ? 'Từ vựng tập dượt:' : 'Drill words:'}
              </span>
              {trap.words.map((w, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => playBritishSpeech(w.word)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-slate-200 hover:border-sky-400 rounded-md text-xs font-semibold text-slate-800 shadow-2xs transition"
                >
                  <Volume2 className="w-3 h-3 text-sky-600" />
                  <span>{w.word}</span>
                  <span className="font-mono text-slate-400 text-[10px]">{w.ipa}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
