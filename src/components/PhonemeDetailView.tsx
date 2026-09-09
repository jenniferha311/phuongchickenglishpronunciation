import React, { useState } from 'react';
import { PhonemeData, Language } from '../types';
import { SagittalDiagram } from './SagittalDiagram';
import { AudioRecorderStudio } from './AudioRecorderStudio';
import { Volume2, AlertTriangle, ArrowRight, BookOpen, MessageSquare, Check, Sparkles } from 'lucide-react';
import { playBritishSpeech, playIsolatedPhonemeSound } from '../utils/audio';

interface PhonemeDetailViewProps {
  phoneme: PhonemeData;
  lang: Language;
  onPhonemeMastered?: (id: string) => void;
  isCompleted?: boolean;
  teacherAvatar?: string;
}

export const PhonemeDetailView: React.FC<PhonemeDetailViewProps> = ({
  phoneme,
  lang,
  onPhonemeMastered,
  isCompleted,
  teacherAvatar = '/yellow_chick_badge.jpg'
}) => {
  const [selectedWordIndex, setSelectedWordIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'guide' | 'studio'>('guide');
  const [isPlayingWord, setIsPlayingWord] = useState<string | null>(null);

  const currentExample = phoneme.examples[selectedWordIndex] || phoneme.examples[0];

  const handlePlayWord = async (word: string, ipa: string) => {
    setIsPlayingWord(word);
    await playBritishSpeech(word);
    setIsPlayingWord(null);
  };

  const handlePlayIsolated = async () => {
    await playIsolatedPhonemeSound(phoneme.symbol);
  };

  const handlePlaySentence = async () => {
    if (!phoneme.b1Sentence) return;
    setIsPlayingWord(phoneme.b1Sentence.text);
    await playBritishSpeech(phoneme.b1Sentence.text);
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
          <button
            type="button"
            onClick={handlePlayIsolated}
            className="flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs font-bold shadow-md transition transform active:scale-95"
          >
            <Volume2 className="w-4 h-4" />
            <span>{lang === 'vi' ? 'Phát âm mẫu' : 'Play Sound'}</span>
          </button>

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

            {/* Right Column: Examples, Minimal Pairs, B1 Context & Vietnamese Pitfall Alert */}
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

              {/* Anchor Vocabulary Examples */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {lang === 'vi' ? 'Từ vựng neo âm mẫu (Anchor Words):' : 'Anchor Practice Words:'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {phoneme.examples.map((ex, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSelectedWordIndex(idx);
                        handlePlayWord(ex.word, ex.ipa);
                      }}
                      className={`p-2.5 rounded-lg border text-center transition ${
                        selectedWordIndex === idx
                          ? 'bg-sky-50 border-sky-400 ring-2 ring-sky-200'
                          : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <span className="block font-bold text-sm text-slate-900">{ex.word}</span>
                      <span className="block font-mono text-xs text-sky-700">{ex.ipa}</span>
                      <span className="block text-[10px] text-slate-500 truncate mt-0.5">{ex.meaning_vi}</span>
                    </button>
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
                          onClick={() => handlePlayWord(pair.wordA, pair.ipaA)}
                          className="p-2 rounded bg-amber-50/70 border border-amber-200 hover:bg-amber-100 transition"
                        >
                          <span className="block font-bold text-sm text-slate-900">{pair.wordA}</span>
                          <span className="font-mono text-xs text-amber-800">{pair.ipaA}</span>
                          <span className="block text-[10px] text-slate-500">{pair.meaningA_vi}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handlePlayWord(pair.wordB, pair.ipaB)}
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

              {/* B1 Practical Context Sentence & Mini Dialogue */}
              {phoneme.b1Sentence && (
                <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                      {lang === 'vi' ? 'Câu ứng dụng giao tiếp B1:' : 'B1 Practice Sentence:'}
                    </span>
                    <button
                      type="button"
                      onClick={handlePlaySentence}
                      className="text-xs font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{lang === 'vi' ? 'Nghe cả câu' : 'Listen'}</span>
                    </button>
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
