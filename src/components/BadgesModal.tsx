import React from 'react';
import { BADGES } from '../data/badges';
import { UserProgress, Language } from '../types';
import { Award, Compass, Sparkles, Waves, ShieldCheck, Headphones, TrendingUp, Trophy, X, Flame, RotateCcw } from 'lucide-react';
import { resetAllData } from '../utils/storage';

interface BadgesModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  lang: Language;
  onProgressReset: () => void;
}

const ICON_MAP: Record<string, any> = {
  Compass,
  Sparkles,
  Waves,
  ShieldCheck,
  Headphones,
  TrendingUp,
  Trophy
};

export const BadgesModal: React.FC<BadgesModalProps> = ({
  isOpen,
  onClose,
  progress,
  lang,
  onProgressReset
}) => {
  if (!isOpen) return null;

  const handleReset = () => {
    const confirmText = lang === 'vi'
      ? 'Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ và xóa lịch sử ghi âm không?'
      : 'Are you sure you want to reset all progress and delete recording history?';
    if (window.confirm(confirmText)) {
      resetAllData();
      onProgressReset();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-amber-100 text-amber-700">
              <Award className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-black text-slate-900 text-lg">
                {lang === 'vi' ? 'Thành tích & Huy hiệu (SoundQuest 44)' : 'Achievements & Badges'}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'vi' ? 'Tiến độ học tập và thử thách đạt được' : 'Your pronunciation learning milestones'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Stats Overview Card */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-1 text-amber-600 mb-1">
                <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-bounce" />
                <span className="text-xs font-bold">{lang === 'vi' ? 'Chuỗi ngày' : 'Streak'}</span>
              </div>
              <div className="text-2xl font-black text-amber-900">{progress.streakDays} {lang === 'vi' ? 'ngày' : 'days'}</div>
            </div>

            <div className="bg-sky-50/80 border border-sky-200 rounded-xl p-3 text-center">
              <div className="text-xs font-bold text-sky-600 mb-1">{lang === 'vi' ? 'Điểm XP' : 'Total XP'}</div>
              <div className="text-2xl font-black text-sky-900">{progress.points}</div>
            </div>

            <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3 text-center">
              <div className="text-xs font-bold text-emerald-600 mb-1">{lang === 'vi' ? 'Âm đã xong' : 'Phonemes'}</div>
              <div className="text-2xl font-black text-emerald-900">{progress.completedPhonemes.length} / 44</div>
            </div>
          </div>

          {/* Badges Collection List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {lang === 'vi' ? 'Danh sách huy hiệu vinh danh' : 'Badges Showcase'}
            </h4>

            <div className="grid sm:grid-cols-2 gap-3">
              {BADGES.map((b) => {
                const isUnlocked = progress.unlockedBadges.includes(b.id);
                const IconComp = ICON_MAP[b.icon] || Trophy;

                return (
                  <div
                    key={b.id}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border transition ${
                      isUnlocked
                        ? 'bg-amber-50/40 border-amber-200 shadow-2xs'
                        : 'bg-slate-50/70 border-slate-200 opacity-60'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isUnlocked ? 'bg-amber-500 text-white shadow-xs' : 'bg-slate-200 text-slate-400'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-xs font-bold truncate ${isUnlocked ? 'text-slate-900' : 'text-slate-500'}`}>
                          {b.title[lang]}
                        </span>
                        {isUnlocked && (
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 shrink-0">
                            {lang === 'vi' ? 'Đã nhận' : 'Unlocked'}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        {b.description[lang]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Privacy & Reset Action per Section 23 of ROM */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-400 text-center sm:text-left">
              {lang === 'vi'
                ? 'Dữ liệu được lưu trữ an toàn trong trình duyệt của bạn.'
                : 'All recordings & progress are stored locally on your device.'}
            </span>

            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1 text-rose-600 hover:text-rose-800 font-bold transition p-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'vi' ? 'Đặt lại toàn bộ tiến độ' : 'Reset All Progress'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
