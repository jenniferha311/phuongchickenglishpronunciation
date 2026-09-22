import React, { useState } from 'react';
import { ACCENT_RULES, POPULAR_CONTRAST_WORDS, AccentRule, WordAccentContrast } from '../data/accentDifferences';
import { Language, Accent } from '../types';
import { Volume2, Sparkles, CheckCircle2, ArrowRightLeft, BookOpen, Mic, HelpCircle } from 'lucide-react';
import { playSpeech } from '../utils/audio';

interface AccentComparisonModuleProps {
  lang: Language;
  currentAccent: Accent;
  onSelectAccent: (accent: Accent) => void;
  onOpenReadingPractice?: () => void;
}

export const AccentComparisonModule: React.FC<AccentComparisonModuleProps> = ({
  lang,
  currentAccent,
  onSelectAccent,
  onOpenReadingPractice
}) => {
  const [activeRuleId, setActiveRuleId] = useState<string>(ACCENT_RULES[0].id);
  const [playingWord, setPlayingWord] = useState<{ word: string; accent: Accent } | null>(null);
  const [filterCategory, setFilterCategory] = useState<'all' | 'rules' | 'words'>('all');

  const activeRule = ACCENT_RULES.find((r) => r.id === activeRuleId) || ACCENT_RULES[0];

  const handlePlay = async (word: string, accent: Accent) => {
    setPlayingWord({ word, accent });
    await playSpeech(word, accent, 1.0);
    setPlayingWord(null);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-indigo-800/40 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            <ArrowRightLeft className="w-3.5 h-3.5 text-amber-300" />
            <span>{lang === 'vi' ? 'Lấy British RP làm chuẩn nền • Đối chiếu General American' : 'British RP Base & GA Contrast'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {lang === 'vi'
              ? 'Đối Chiếu Ngữ Âm: British RP 🇬🇧 vs General American 🇺🇸'
              : 'British English (RP) 🇬🇧 vs American English (GA) 🇺🇸'}
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            {lang === 'vi'
              ? 'Lấy British RP làm chuẩn nền, đồng thời đối chiếu General American qua 7 quy tắc khác biệt cốt lõi: âm /r/ kiểu Mỹ (Rhoticity), âm T vỗ (Flap T), biến âm BATH (/ɑː/ vs /æ/), âm LOT (/ɒ/ vs /ɑː/), nguyên âm đôi lướt và rụng âm /j/. Bấm để nghe trực tiếp từng chuẩn giọng!'
              : 'Using British RP as the foundation while contrasting with General American (GA) across core phonetic rules: rhoticity, flap T, BATH vowels, LOT unrounding, centring glides, and yod-dropping. Click to listen to both accents!'}
          </p>

          {/* Quick Accent Selector */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-slate-300">
              {lang === 'vi' ? 'Chuẩn bạn đang ưu tiên luyện tập:' : 'Your preferred practice accent:'}
            </span>
            <div className="inline-flex rounded-xl bg-white/10 p-1 border border-white/20">
              <button
                type="button"
                onClick={() => onSelectAccent('uk')}
                className={`px-4 py-2 rounded-lg text-xs font-black transition flex items-center gap-2 ${
                  currentAccent === 'uk'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>🇬🇧</span>
                <span>{lang === 'vi' ? 'Anh - Anh (British RP)' : 'British (UK)'}</span>
              </button>
              <button
                type="button"
                onClick={() => onSelectAccent('us')}
                className={`px-4 py-2 rounded-lg text-xs font-black transition flex items-center gap-2 ${
                  currentAccent === 'us'
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>🇺🇸</span>
                <span>{lang === 'vi' ? 'Anh - Mỹ (American GA)' : 'American (US)'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Filter: All / 7 Quy tắc lớn / Bảng đối chiếu từ vựng */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        <button
          type="button"
          onClick={() => setFilterCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
            filterCategory === 'all'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          {lang === 'vi' ? 'Toàn bộ bài học & Đối chiếu' : 'All Modules'}
        </button>
        <button
          type="button"
          onClick={() => setFilterCategory('rules')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
            filterCategory === 'rules'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100'
          }`}
        >
          {lang === 'vi' ? '7 Quy tắc ngữ âm lớn' : '7 Core Phonetic Rules'}
        </button>
        <button
          type="button"
          onClick={() => setFilterCategory('words')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
            filterCategory === 'words'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
          }`}
        >
          {lang === 'vi' ? 'Từ vựng nghe đối chiếu nhanh (12 từ)' : '12 Quick Contrast Words'}
        </button>
      </div>

      {/* SECTION 1: 7 CORE RULES */}
      {(filterCategory === 'all' || filterCategory === 'rules') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span>{lang === 'vi' ? '7 Điểm Khác Biệt Trọng Yếu Giữa Anh - Anh & Anh - Mỹ' : '7 Core Pronunciation Differences'}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left rule list */}
            <div className="lg:col-span-4 space-y-2">
              {ACCENT_RULES.map((rule) => (
                <button
                  key={rule.id}
                  type="button"
                  onClick={() => setActiveRuleId(rule.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                    activeRuleId === rule.id
                      ? 'bg-indigo-50/80 border-indigo-400 ring-2 ring-indigo-200 shadow-xs'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded">
                      {rule.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mt-1.5 leading-snug">
                    {rule.title[lang]}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {rule.summary[lang]}
                  </p>
                </button>
              ))}
            </div>

            {/* Right rule detail card */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                  {activeRule.badge}
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-2">
                  {activeRule.title[lang]}
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  {activeRule.summary[lang]}
                </p>
              </div>

              {/* Side by side rule explanation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* UK Box */}
                <div className="bg-rose-50/60 border border-rose-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                    <span>🇬🇧</span>
                    <span>{lang === 'vi' ? 'Anh - Anh (British RP)' : 'British English (RP)'}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {activeRule.ukRule[lang]}
                  </p>
                </div>

                {/* US Box */}
                <div className="bg-sky-50/60 border border-sky-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sky-900 font-bold text-sm">
                    <span>🇺🇸</span>
                    <span>{lang === 'vi' ? 'Anh - Mỹ (General American)' : 'American English (GA)'}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {activeRule.usRule[lang]}
                  </p>
                </div>
              </div>

              {/* Word Examples for Active Rule with Dual Sound Buttons */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {lang === 'vi' ? 'Từ vựng minh họa & Nghe âm thanh trực tiếp:' : 'Audio Examples:'}
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeRule.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50/80 border border-slate-200 rounded-xl p-3.5 space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-black text-base text-slate-900">{ex.word}</span>
                          <span className="text-xs text-slate-500 ml-2">({ex.meaning_vi})</span>
                        </div>
                      </div>

                      {/* Dual Audio Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handlePlay(ex.word, 'uk')}
                          className={`p-2 rounded-lg border text-left transition flex items-center justify-between ${
                            playingWord?.word === ex.word && playingWord.accent === 'uk'
                              ? 'bg-rose-600 text-white border-rose-600 animate-pulse'
                              : 'bg-white border-rose-200 hover:bg-rose-50 text-slate-800'
                          }`}
                        >
                          <div>
                            <div className="text-[10px] font-bold text-rose-700 flex items-center gap-1">
                              <span>🇬🇧 UK</span>
                            </div>
                            <span className="font-mono text-xs font-bold">{ex.ukIpa}</span>
                          </div>
                          <Volume2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handlePlay(ex.word, 'us')}
                          className={`p-2 rounded-lg border text-left transition flex items-center justify-between ${
                            playingWord?.word === ex.word && playingWord.accent === 'us'
                              ? 'bg-sky-600 text-white border-sky-600 animate-pulse'
                              : 'bg-white border-sky-200 hover:bg-sky-50 text-slate-800'
                          }`}
                        >
                          <div>
                            <div className="text-[10px] font-bold text-sky-700 flex items-center gap-1">
                              <span>🇺🇸 US</span>
                            </div>
                            <span className="font-mono text-xs font-bold">{ex.usIpa}</span>
                          </div>
                          <Volume2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-600 leading-snug">
                        💡 {ex.explanation[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: POPULAR CONTRAST WORDS (SIDE-BY-SIDE MATRIX) */}
      {(filterCategory === 'all' || filterCategory === 'words') && (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <span>🔊</span>
                <span>{lang === 'vi' ? '12 Từ Vựng Đối Chiếu Âm Nhanh (Interactive Dual Sound Matrix)' : '12 Interactive Quick Contrast Words'}</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {lang === 'vi'
                  ? 'Bấm nút UK 🇬🇧 rồi bấm US 🇺🇸 ngay bên cạnh để cảm nhận sự khác biệt rõ rệt trong 1 nốt nhạc!'
                  : 'Click UK 🇬🇧 then US 🇺🇸 to instantly hear and master the natural acoustic differences!'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {POPULAR_CONTRAST_WORDS.map((w, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2.5 transition hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-slate-900 text-base">{w.word}</h4>
                    <span className="text-[11px] text-slate-500 font-medium">({w.meaning_vi})</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                    {w.category}
                  </span>
                </div>

                {/* Side-by-side Dual Audio Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handlePlay(w.word, 'uk')}
                    className={`p-2 rounded-lg border text-left transition flex items-center justify-between ${
                      playingWord?.word === w.word && playingWord.accent === 'uk'
                        ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                        : 'bg-white border-rose-200 hover:bg-rose-50 text-slate-800'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-bold text-rose-700 block">🇬🇧 UK</span>
                      <span className="font-mono text-xs font-bold">{w.ukIpa}</span>
                    </div>
                    <Volume2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePlay(w.word, 'us')}
                    className={`p-2 rounded-lg border text-left transition flex items-center justify-between ${
                      playingWord?.word === w.word && playingWord.accent === 'us'
                        ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                        : 'bg-white border-sky-200 hover:bg-sky-50 text-slate-800'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-bold text-sky-700 block">🇺🇸 US</span>
                      <span className="font-mono text-xs font-bold">{w.usIpa}</span>
                    </div>
                    <Volume2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  </button>
                </div>

                <p className="text-[11px] text-slate-600 leading-snug border-t border-slate-200/60 pt-2 italic">
                  💡 {w.tip[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
