import React, { useState } from 'react';
import { PhonemeData, Language, Accent } from '../types';
import { SagittalDiagram } from './SagittalDiagram';
import { AudioRecorderStudio } from './AudioRecorderStudio';
import { Volume2, AlertTriangle, ArrowRight, BookOpen, MessageSquare, Check, Sparkles, ArrowRightLeft } from 'lucide-react';
import { playSpeech, playIsolatedPhonemeSound } from '../utils/audio';
import { getPhonemeAccentDifference } from '../data/accentDifferences';

interface PhonemeDetailViewProps {
  phoneme: PhonemeData;
  lang: Language;
  currentAccent?: Accent;
  onPhonemeMastered?: (id: string) => void;
  isCompleted?: boolean;
  teacherAvatar?: string;
}

export const PhonemeDetailView: React.FC<PhonemeDetailViewProps> = ({
  phoneme,
  lang,
  currentAccent = 'uk' as Accent,
  onPhonemeMastered,
  isCompleted,
  teacherAvatar = '/yellow_chick_badge.jpg'
}) => {
  const [selectedWordIndex, setSelectedWordIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'guide' | 'studio'>('guide');
  const [isPlayingWord, setIsPlayingWord] = useState<{ word: string; accent: Accent } | null>(null);

  const currentExample = phoneme.examples[selectedWordIndex] || phoneme.examples[0];
  const accentDiff = getPhonemeAccentDifference(phoneme.symbol);

  const safeAccent: Accent = (currentAccent === 'us' ? 'us' : 'uk');

  const handlePlayWord = async (word: string, accent: Accent = safeAccent) => {
    setIsPlayingWord({ word, accent });
    await playSpeech(word, accent);
    setIsPlayingWord(null);
  };

  const handlePlayIsolated = async (accent: Accent = safeAccent) => {
    await playIsolatedPhonemeSound(phoneme.symbol, 1.0, accent);
  };

  const handlePlaySentence = async (accent: Accent = safeAccent) => {
    if (!phoneme.b1Sentence) return;
    setIsPlayingWord({ word: phoneme.b1Sentence.text, accent });
    await playSpeech(phoneme.b1Sentence.text, accent);
    setIsPlayingWord(null);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden space-y-6">
      {/* Top Banner */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Big IPA Token Badge */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl font-mono font-black text-amber-300 shadow-inner">
            /{phoneme.symbol}/
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-wider text-sky-300">
                {phoneme.category === 'vowel' ? (lang === 'vi' ? 'Nguyên âm' : 'Vowel') : (lang === 'vi' ? 'Phụ âm' : 'Consonant')}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-200">
                {phoneme.place[lang]}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-200">
                {phoneme.manner[lang]}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white mt-1">
              {phoneme.name[lang]}
            </h1>
            <p className="text-xs text-slate-300 mt-1 max-w-xl line-clamp-2">
              {phoneme.description[lang]}
            </p>
          </div>
        </div>

        {/* Quick Audio & Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex rounded-xl bg-white/10 p-1 border border-white/20">
            <button
              type="button"
              onClick={() => handlePlayIsolated('uk')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold shadow-xs transition transform active:scale-95"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>🇬🇧 {lang === 'vi' ? 'Nghe âm UK' : 'UK Sound'}</span>
            </button>
            <button
              type="button"
              onClick={() => handlePlayIsolated('us')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold shadow-xs transition transform active:scale-95 ml-1"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>🇺🇸 {lang === 'vi' ? 'Nghe âm US' : 'US Sound'}</span>
            </button>
          </div>

          {onPhonemeMastered && (
            <button
              type="button"
              onClick={() => onPhonemeMastered(phoneme.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition ${
                isCompleted
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
              }`}
            >
              <Check className="w-4 h-4" />
              <span>{isCompleted ? (lang === 'vi' ? 'Đã thành thạo' : 'Mastered') : (lang === 'vi' ? 'Đánh dấu đã học' : 'Mark as Done')}</span>
            </button>
          )}
        </div>
      </div>

      {/* Navigation Sub-Tabs: 1. Khẩu hình & Bài học | 2. Phòng thu âm (AI Studio) */}
      <div className="px-5 sm:px-6 flex items-center gap-2 border-b border-slate-100">
        <button
          type="button"
          onClick={() => setActiveTab('guide')}
          className={`pb-3 px-2 text-xs sm:text-sm font-bold border-b-2 transition ${
            activeTab === 'guide'
              ? 'border-sky-600 text-sky-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          {lang === 'vi' ? '1. Hướng dẫn Cấu âm & Giải phẫu' : '1. Articulation & Sagittal Guide'}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('studio')}
          className={`pb-3 px-2 text-xs sm:text-sm font-bold border-b-2 transition flex items-center gap-1.5 ${
            activeTab === 'studio'
              ? 'border-rose-600 text-rose-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>{lang === 'vi' ? '2. Phòng Thu Âm & Chấm Điểm AI (3 Takes)' : '2. 3-Take Audio Recording Studio'}</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="px-5 sm:px-6 pb-6">
        {activeTab === 'guide' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Anatomical Cross Section & Articulation Details */}
            <div className="lg:col-span-6 space-y-4">
              <SagittalDiagram
                config={phoneme.sagittalConfig}
                phonemeSymbol={phoneme.symbol}
                isVoiced={phoneme.voiced}
                lang={lang}
              />

              {/* Organ-by-organ articulation breakdown */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2.5 text-xs">
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  {lang === 'vi' ? 'Chi tiết chuyển động cơ quan phát âm:' : 'Articulatory organ mechanics:'}
                </h4>

                <div className="grid grid-cols-2 gap-2 text-slate-700">
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <strong className="text-slate-900 block mb-0.5">{lang === 'vi' ? 'Môi (Lips):' : 'Lips:'}</strong>
                    <span>{phoneme.articulationGuide.lips[lang]}</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <strong className="text-slate-900 block mb-0.5">{lang === 'vi' ? 'Lưỡi (Tongue):' : 'Tongue:'}</strong>
                    <span>{phoneme.articulationGuide.tongue[lang]}</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <strong className="text-slate-900 block mb-0.5">{lang === 'vi' ? 'Răng (Teeth):' : 'Teeth:'}</strong>
                    <span>{phoneme.articulationGuide.teeth[lang]}</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <strong className="text-slate-900 block mb-0.5">{lang === 'vi' ? 'Dây thanh (Vocal Cords):' : 'Vocal Cords:'}</strong>
                    <span>{phoneme.articulationGuide.vocalCords[lang]}</span>
                  </div>
                </div>

                <div className="bg-white p-2 rounded border border-slate-200">
                  <strong className="text-slate-900 block mb-0.5">{lang === 'vi' ? 'Luồng hơi (Airflow):' : 'Airflow:'}</strong>
                  <span>{phoneme.articulationGuide.airflow[lang]}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Examples, Minimal Pairs, Context & Vietnamese Pitfall Alert */}
            <div className="lg:col-span-6 space-y-4">
              {/* Vietnamese Pitfall Warning Alert with Cô Phượng Chick */}
              {phoneme.vietnamesePitfalls && (
                <div className="bg-white border border-slate-200 rounded-xl p-4 text-xs space-y-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={teacherAvatar}
                      alt="Cô Phượng Chick"
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover border-2 border-slate-200 shadow-2xs shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 text-slate-900 font-bold text-sm">
                        <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{lang === 'vi' ? 'Cô Phượng Chick bảo cậu rằng...' : 'Cô Phượng Chick advises:'}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {lang === 'vi' ? 'Bẫy phát âm người Việt hay mắc ở âm này' : 'Common pitfall for Vietnamese learners'}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed font-medium pl-1">
                    {phoneme.vietnamesePitfalls.commonMistake[lang]}
                  </p>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-slate-800">
                    <strong className="text-emerald-700 block mb-0.5 font-bold">
                      {lang === 'vi' ? 'Mẹo sửa khẩu hình từ cô Phượng Chick:' : 'Articulatory tip from Teacher Phuong:'}
                    </strong>
                    {phoneme.vietnamesePitfalls.howToFix[lang]}
                  </div>
                </div>
              )}

              {/* Accent Contrast Box: UK vs US for this phoneme */}
              <div className="bg-gradient-to-br from-indigo-50/70 to-sky-50/70 border border-indigo-200/80 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
                    <ArrowRightLeft className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{lang === 'vi' ? 'So sánh Chuẩn Anh - Anh 🇬🇧 vs Anh - Mỹ 🇺🇸' : 'UK vs US Pronunciation Contrast'}</span>
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    accentDiff?.hasDifference
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  }`}>
                    {accentDiff?.hasDifference
                      ? (lang === 'vi' ? 'Có điểm khác biệt đáng chú ý' : 'Distinct Accent Contrast')
                      : (lang === 'vi' ? 'Độ tương đồng cao giữa UK & US' : 'High Similarity')}
                  </span>
                </div>

                {accentDiff ? (
                  <div className="space-y-2.5">
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {accentDiff.explanation[lang]}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white/80 p-2.5 rounded-lg border border-rose-200">
                        <div className="font-bold text-rose-800 flex items-center gap-1 text-[11px]">
                          <span>🇬🇧 Anh - Anh (RP)</span>
                        </div>
                        <span className="font-mono font-bold text-slate-800 mt-1 block">{accentDiff.ukIpa}</span>
                      </div>

                      <div className="bg-white/80 p-2.5 rounded-lg border border-sky-200">
                        <div className="font-bold text-sky-800 flex items-center gap-1 text-[11px]">
                          <span>🇺🇸 Anh - Mỹ (GA)</span>
                        </div>
                        <span className="font-mono font-bold text-slate-800 mt-1 block">{accentDiff.usIpa}</span>
                      </div>
                    </div>

                    {accentDiff.contrastExamples && (
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-bold text-slate-600 block">
                          {lang === 'vi' ? 'Từ vựng đối chiếu trực tiếp:' : 'Contrast Audio Samples:'}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {accentDiff.contrastExamples.map((item, idx) => (
                            <div key={idx} className="bg-white p-2 rounded-lg border border-slate-200 flex items-center justify-between gap-2">
                              <span className="font-bold text-xs text-slate-900">{item.word}</span>
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={() => handlePlayWord(item.word, 'uk')}
                                  className="px-2 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded text-[10px] font-bold flex items-center gap-1 transition"
                                  title="Nghe chuẩn UK"
                                >
                                  <span>🇬🇧</span>
                                  <Volume2 className="w-2.5 h-2.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handlePlayWord(item.word, 'us')}
                                  className="px-2 py-1 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded text-[10px] font-bold flex items-center gap-1 transition"
                                  title="Nghe chuẩn US"
                                >
                                  <span>🇺🇸</span>
                                  <Volume2 className="w-2.5 h-2.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'vi'
                      ? 'Âm này có vị trí và phương thức cấu âm tương đồng giữa 2 chuẩn. Tuy nhiên ngữ điệu và độ vang ở Anh - Mỹ có thể dày hơn. Bạn có thể bấm nghe thử cả 2 chuẩn dưới đây!'
                      : 'This phoneme shares very similar articulation in both accents, though American English often has slightly different vowel resonance. Listen to both below!'}
                  </p>
                )}
              </div>

              {/* Anchor Vocabulary Examples */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {lang === 'vi' ? 'Từ vựng neo âm mẫu (Anchor Words):' : 'Anchor Practice Words:'}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {lang === 'vi' ? 'Bấm 🇬🇧 hoặc 🇺🇸 để nghe trực tiếp' : 'Click 🇬🇧 or 🇺🇸 to compare'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {phoneme.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border transition ${
                        selectedWordIndex === idx
                          ? 'bg-sky-50/80 border-sky-400 ring-2 ring-sky-200'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedWordIndex(idx)}
                        className="w-full text-left"
                      >
                        <span className="block font-bold text-sm text-slate-900">{ex.word}</span>
                        <span className="block font-mono text-xs text-sky-700">{ex.ipa}</span>
                        <span className="block text-[10px] text-slate-500 truncate mt-0.5">{ex.meaning_vi}</span>
                      </button>

                      {/* Dual sound buttons */}
                      <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-slate-200/70">
                        <button
                          type="button"
                          onClick={() => handlePlayWord(ex.word, 'uk')}
                          className="flex-1 py-1 px-1.5 bg-rose-100/80 hover:bg-rose-200 text-rose-800 rounded text-[10px] font-bold flex items-center justify-center gap-1 transition"
                        >
                          <span>🇬🇧 UK</span>
                          <Volume2 className="w-2.5 h-2.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handlePlayWord(ex.word, 'us')}
                          className="flex-1 py-1 px-1.5 bg-sky-100/80 hover:bg-sky-200 text-sky-800 rounded text-[10px] font-bold flex items-center justify-center gap-1 transition"
                        >
                          <span>🇺🇸 US</span>
                          <Volume2 className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal Pairs Acoustic Contrast */}
              {phoneme.minimalPairs && phoneme.minimalPairs.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                    {lang === 'vi' ? 'Cặp âm tối thiểu phân biệt (Minimal Pairs):' : 'Minimal Pairs Contrast:'}
                  </span>

                  {phoneme.minimalPairs.map((pair, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg border border-slate-200 space-y-2">
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <button
                          type="button"
                          onClick={() => handlePlayWord(pair.wordA, safeAccent)}
                          className="p-2 rounded bg-amber-50/70 border border-amber-200 hover:bg-amber-100 transition"
                        >
                          <span className="block font-bold text-sm text-slate-900">{pair.wordA}</span>
                          <span className="font-mono text-xs text-amber-800">{pair.ipaA}</span>
                          <span className="block text-[10px] text-slate-500">{pair.meaningA_vi}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handlePlayWord(pair.wordB, safeAccent)}
                          className="p-2 rounded bg-sky-50/70 border border-sky-200 hover:bg-sky-100 transition"
                        >
                          <span className="block font-bold text-sm text-slate-900">{pair.wordB}</span>
                          <span className="font-mono text-xs text-sky-800">{pair.ipaB}</span>
                          <span className="block text-[10px] text-slate-500">{pair.meaningB_vi}</span>
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-600 leading-relaxed border-t border-slate-100 pt-2 italic">
                        💡 {pair.contrastTip[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Practical Context Sentence & Mini Dialogue */}
              {phoneme.b1Sentence && (
                <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                      {lang === 'vi' ? 'Câu ứng dụng giao tiếp:' : 'Practice Sentence:'}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handlePlaySentence('uk')}
                        className="text-xs font-semibold px-2 py-1 rounded bg-rose-50 text-rose-700 hover:bg-rose-100 flex items-center gap-1 transition"
                      >
                        <Volume2 className="w-3 h-3" />
                        <span>🇬🇧 UK</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handlePlaySentence('us')}
                        className="text-xs font-semibold px-2 py-1 rounded bg-sky-50 text-sky-700 hover:bg-sky-100 flex items-center gap-1 transition"
                      >
                        <Volume2 className="w-3 h-3" />
                        <span>🇺🇸 US</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                    "{phoneme.b1Sentence.text}"
                  </p>
                  <p className="font-mono text-xs text-slate-500">
                    {phoneme.b1Sentence.ipa}
                  </p>
                  <p className="text-xs text-slate-500 italic">
                    Dịch: {phoneme.b1Sentence.translation_vi}
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Active Tab: Recording Studio */
          <div className="max-w-2xl mx-auto">
            <AudioRecorderStudio
              targetWord={currentExample.word}
              targetIpa={currentExample.ipa}
              targetPhoneme={phoneme.symbol}
              contextSentence={phoneme.b1Sentence?.text}
              lang={lang}
              teacherAvatar={teacherAvatar}
              initialAccent={currentAccent}
              onTakeCompleted={(score) => {
                if (score >= 80 && onPhonemeMastered) {
                  onPhonemeMastered(phoneme.id);
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
