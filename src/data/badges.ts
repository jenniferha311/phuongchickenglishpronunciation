import { Badge } from '../types';

export const BADGES: Badge[] = [
  {
    id: 'badge_pioneer',
    title: { en: 'IPA Pioneer', vi: 'Người mở lối IPA' },
    description: { en: 'Explored your first 5 British phonemes.', vi: 'Đã khám phá 5 âm vị Anh-Anh đầu tiên.' },
    icon: 'Compass',
    unlocked: false
  },
  {
    id: 'badge_vowels',
    title: { en: 'Vowel Explorer', vi: 'Nhà thám hiểm nguyên âm' },
    description: { en: 'Practiced all 12 British monophthongs.', vi: 'Đã luyện tập đủ 12 nguyên âm đơn chuẩn Anh.' },
    icon: 'Sparkles',
    unlocked: false
  },
  {
    id: 'badge_diphthongs',
    title: { en: 'Diphthong Navigator', vi: 'Bậc thầy nguyên âm đôi' },
    description: { en: 'Mastered the 8 British closing & centring diphthongs.', vi: 'Chinh phục 8 nguyên âm đôi hướng tâm & khép.' },
    icon: 'Waves',
    unlocked: false
  },
  {
    id: 'badge_final_sounds',
    title: { en: 'Final Consonant Hero', vi: 'Dũng sĩ âm cuối' },
    description: { en: 'Successfully pronounced final consonants in 8/10 words.', vi: 'Bật rõ âm cuối trong 8/10 từ mục tiêu không bị nuốt âm.' },
    icon: 'ShieldCheck',
    unlocked: false
  },
  {
    id: 'badge_ear_sharp',
    title: { en: 'Acoustic Detective', vi: 'Thám tử thính giác' },
    description: { en: 'Scored 80%+ on the Ear Discrimination challenge.', vi: 'Đạt trên 80% trong bài luyện nghe phân biệt âm.' },
    icon: 'Headphones',
    unlocked: false
  },
  {
    id: 'badge_retrier',
    title: { en: '3-Take Improver', vi: 'Tiến bộ qua 3 lượt thử' },
    description: { en: 'Improved your pronunciation score across 3 recording takes.', vi: 'Cải thiện kết quả rõ rệt sau 3 lượt ghi âm liên tiếp.' },
    icon: 'TrendingUp',
    unlocked: false
  },
  {
    id: 'badge_master',
    title: { en: 'British RP Grandmaster', vi: 'Đại kiện tướng phát âm Anh-Anh' },
    description: { en: 'Practiced all 44 British English phonemes.', vi: 'Hoàn thành hành trình chinh phục trọn bộ 44 âm tiếng Anh.' },
    icon: 'Trophy',
    unlocked: false
  }
];
