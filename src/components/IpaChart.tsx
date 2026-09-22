import React, { useState } from 'react';
import { ALL_PHONEMES } from '../data/phonemes';
import { PhonemeData, Language } from '../types';
import { Volume2, Sparkles, Filter, AlertCircle, CheckCircle } from 'lucide-react';
import { playIsolatedPhonemeSound } from '../utils/audio';

interface IpaChartProps {
  selectedPhonemeId: string;
  onSelectPhoneme: (phoneme: PhonemeData) => void;
  completedPhonemes: string[];
  lang: Language;
}

export const IpaChart: React.FC<IpaChartProps> = ({
  selectedPhonemeId,
  onSelectPhoneme,
  completedPhonemes,
  lang
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'vowel' | 'consonant' | 'pitfalls'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const vowels = ALL_PHONEMES.filter((p) => p.category === 'vowel');
  const monophthongs = vowels.filter(
    (p) => p.subCategory === 'monophthong' || p.subCategory === 'monophthong_long' || p.subCategory === 'monophthong_short'
  );
  const diphthongs = vowels.filter((p) => p.subCategory === 'diphthong');
  const consonants = ALL_PHONEMES.filter((p) => p.category === 'consonant');

  const highRiskCount = ALL_PHONEMES.filter((p) => p.vietnamesePitfalls?.isHighRisk).length;

  const filteredPhonemes = ALL_PHONEMES.filter((p) => {
    if (filterCategory === 'vowel' && p.category !== 'vowel') return false;
    if (filterCategory === 'consonant' && p.category !== 'consonant') return false;
    if (filterCategory === 'pitfalls' && !p.vietnamesePitfalls?.isHighRisk) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchSymbol = p.symbol.toLowerCase().includes(q);
      const matchWord = p.examples.some((ex) => ex.word.toLowerCase().includes(q));
      const matchName = (p.name.en + ' ' + p.name.vi).toLowerCase().includes(q);
      return matchSymbol || matchWord || matchName;
    }
    return true;
  });

  const handleTileClick = (p: PhonemeData, e: React.MouseEvent) => {
    onSelectPhoneme(p);
    // Play quick sound
    playIsolatedPhonemeSound(p.symbol);
  };

  const renderPhonemeTile = (p: PhonemeData) => {
    const isSelected = p.id === selectedPhonemeId;
    const isCompleted = completedPhonemes.includes(p.id);
    const hasPitfall = p.vietnamesePitfalls?.isHighRisk === true;

    return (
      <button
        key={p.id}
        id={`phoneme-btn-${p.id}`}
        type="button"
        onClick={(e) => handleTileClick(p, e)}
        className={`relative group flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl border text-center transition-all duration-150 transform hover:-translate-y-0.5 shadow-2xs ${
          isSelected
            ? 'bg-sky-600 text-white border-sky-600 ring-4 ring-sky-100 font-bold z-10 scale-105'
            : isCompleted
            ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 hover:border-emerald-400'
            : p.category === 'vowel'
            ? 'bg-amber-50/50 border-amber-200 text-amber-950 hover:bg-amber-100/60'
            : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
        }`}
      >
        {/* Pitfall alert tag */}
        {hasPitfall && (
          <span
            title={lang === 'vi' ? 'Âm hay bị phát âm sai / nuốt âm' : 'Common Vietnamese pitfall sound'}
            className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
              isSelected ? 'bg-amber-300 text-amber-950' : 'bg-rose-500 text-white'
            }`}
          >
            !
          </span>
        )}

        {/* Voicing indicator dot for consonants */}
        {p.category === 'consonant' && (
          <span
            className={`absolute top-1.5 left-1.5 w-2 h-2 rounded-full ${
              p.voiced
                ? isSelected ? 'bg-amber-300' : 'bg-amber-500'
                : isSelected ? 'bg-sky-200' : 'bg-slate-300'
            }`}
            title={p.voiced ? (lang === 'vi' ? 'Hữu thanh (Rung)' : 'Voiced') : (lang === 'vi' ? 'Vô thanh (Không rung)' : 'Voiceless')}
          />
        )}

        {/* Symbol */}
        <span className="font-mono text-xl sm:text-2xl font-black tracking-tight leading-tight">
          /{p.symbol}/
        </span>

        {/* Anchor Example Word */}
        <span className={`text-[11px] font-medium tracking-tight mt-0.5 truncate max-w-[70px] ${
          isSelected ? 'text-sky-100' : 'text-slate-500'
        }`}>
          {p.examples[0]?.word || ''}
        </span>

        {/* Completion checkmark */}
        {isCompleted && (
          <CheckCircle className={`w-3 h-3 absolute bottom-1 right-1 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
        )}
      </button>
    );
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header and Quick Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base sm:text-lg font-black text-slate-800 tracking-tight flex items-center gap-2">
            <span>{lang === 'vi' ? 'Bảng 44 Âm Vị Tiếng Anh (Chuẩn Nền British RP & Đối Chiếu General American)' : '44 English Phonemes (British RP Base & GA Contrast)'}</span>
            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-sky-100 text-sky-800">
              {completedPhonemes.length}/44 {lang === 'vi' ? 'đã học' : 'done'}
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {lang === 'vi' ? 'Nhấp vào âm bất kỳ để xem giải phẫu khẩu hình, mẹo phát âm và thu âm so sánh.' : 'Click any phoneme for sagittal cross-section, tips, and 3-take recording.'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1 rounded-full transition ${
              filterCategory === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {lang === 'vi' ? 'Tất cả (44)' : 'All (44)'}
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('vowel')}
            className={`px-3 py-1 rounded-full transition ${
              filterCategory === 'vowel'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
            }`}
          >
            {lang === 'vi' ? 'Nguyên âm (20)' : 'Vowels (20)'}
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('consonant')}
            className={`px-3 py-1 rounded-full transition ${
              filterCategory === 'consonant'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-sky-50 text-sky-800 hover:bg-sky-100'
            }`}
          >
            {lang === 'vi' ? 'Phụ âm (24)' : 'Consonants (24)'}
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('pitfalls')}
            className={`px-3 py-1 rounded-full transition flex items-center gap-1 ${
              filterCategory === 'pitfalls'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-rose-50 text-rose-800 hover:bg-rose-100'
            }`}
          >
            <AlertCircle className="w-3 h-3" />
            <span>{lang === 'vi' ? `Bẫy âm người Việt (${highRiskCount})` : `VN Pitfalls (${highRiskCount})`}</span>
          </button>
        </div>
      </div>

      {/* Grid of Phonemes based on filter */}
      {filterCategory === 'all' ? (
        <div className="space-y-4">
          {/* 1. Monophthongs */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded">
                {lang === 'vi' ? '12 Nguyên âm đơn (Monophthongs - Dài : vs Ngắn)' : '12 Monophthongs (Long : vs Short)'}
              </span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-2">
              {monophthongs.map(renderPhonemeTile)}
            </div>
          </div>

          {/* 2. Diphthongs */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-900 bg-orange-100/70 px-2 py-0.5 rounded">
                {lang === 'vi' ? '8 Nguyên âm đôi (Diphthongs - Lướt 2 âm)' : '8 Diphthongs (Centring & Closing glides)'}
              </span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-2">
              {diphthongs.map(renderPhonemeTile)}
            </div>
          </div>

          {/* 3. Consonants */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-900 bg-sky-100/70 px-2 py-0.5 rounded">
                {lang === 'vi' ? '24 Phụ âm (Consonants - Tắc, Xát, Mũi, Tiếp cận)' : '24 Consonants (Plosives, Fricatives, Nasals, Approximants)'}
              </span>
              <div className="flex items-center gap-3 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                  {lang === 'vi' ? 'Hữu thanh' : 'Voiced'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-slate-300 inline-block" />
                  {lang === 'vi' ? 'Vô thanh' : 'Voiceless'}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {consonants.map(renderPhonemeTile)}
            </div>
          </div>
        </div>
      ) : (
        /* Filtered Grid View */
        <div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {filteredPhonemes.map(renderPhonemeTile)}
          </div>
          {filteredPhonemes.length === 0 && (
            <p className="text-center text-xs text-slate-400 py-8">
              {lang === 'vi' ? 'Không tìm thấy âm vị phù hợp.' : 'No phonemes found matching query.'}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
