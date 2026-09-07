import React, { useState, useEffect } from 'react';
import { ALL_PHONEMES, getPhonemeById } from './data/phonemes';
import { PhonemeData, Language, UserProgress } from './types';
import { IpaChart } from './components/IpaChart';
import { PhonemeDetailView } from './components/PhonemeDetailView';
import { EarTrainingModule } from './components/EarTrainingModule';
import { VietnamesePitfallsGuide } from './components/VietnamesePitfallsGuide';
import { BadgesModal } from './components/BadgesModal';
import { loadUserProgress, saveUserProgress, addPoints } from './utils/storage';
import {
  Sparkles,
  Headphones,
  AlertTriangle,
  Award,
  Flame,
  Globe,
  Compass,
  CheckCircle2,
  Volume2
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('vi');
  const [activeNavTab, setActiveNavTab] = useState<'ipa_chart' | 'ear_training' | 'pitfalls'>('ipa_chart');
  const [selectedPhonemeId, setSelectedPhonemeId] = useState<string>('v_i_long');
  const [progress, setProgress] = useState<UserProgress>(() => loadUserProgress());
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState<boolean>(false);

  // Sync progress
  useEffect(() => {
    saveUserProgress(progress);
  }, [progress]);

  const selectedPhoneme = getPhonemeById(selectedPhonemeId) || ALL_PHONEMES[0];

  const handleSelectPhoneme = (phoneme: PhonemeData) => {
    setSelectedPhonemeId(phoneme.id);
    setActiveNavTab('ipa_chart');
  };

  const handlePhonemeMastered = (phonemeId: string) => {
    setProgress((prev) => {
      const alreadyCompleted = prev.completedPhonemes.includes(phonemeId);
      const newCompleted = alreadyCompleted
        ? prev.completedPhonemes
        : [...prev.completedPhonemes, phonemeId];

      const newPoints = alreadyCompleted ? prev.points : prev.points + 25;
      const updated: UserProgress = {
        ...prev,
        completedPhonemes: newCompleted,
        points: newPoints
      };
      saveUserProgress(updated);
      return updated;
    });
  };

  const handleEarTrainingScore = (correct: number, total: number) => {
    setProgress((prev) => {
      const updated = addPoints(correct * 15);
      if (correct / total >= 0.8 && !updated.unlockedBadges.includes('badge_ear_sharp')) {
        updated.unlockedBadges.push('badge_ear_sharp');
      }
      return { ...updated };
    });
  };

  const handleResetProgress = () => {
    setProgress(loadUserProgress());
  };

  const progressPercentage = Math.round((progress.completedPhonemes.length / 44) * 100);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Top Application Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-700 flex items-center justify-center text-white font-black text-xl shadow-md">
              44
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-slate-900 text-lg tracking-tight">SoundQuest 44</span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-sky-100 text-sky-800 border border-sky-200">
                  British RP (B1)
                </span>
              </div>
              <p className="hidden md:block text-[11px] text-slate-500">
                {lang === 'vi'
                  ? 'Chinh phục 44 âm tiếng Anh chuẩn Anh-Anh cho người học Việt Nam'
                  : 'Mastering 44 British English phonemes for Vietnamese B1 learners'}
              </p>
            </div>
          </div>

          {/* Gamification Stats & Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Streak & XP pill */}
            <button
              id="badges-modal-trigger-btn"
              type="button"
              onClick={() => setIsBadgesModalOpen(true)}
              className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-full text-xs font-bold text-amber-900 transition shadow-2xs"
              title={lang === 'vi' ? 'Xem huy hiệu & thành tích' : 'View achievements and badges'}
            >
              <div className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>{progress.streakDays}d</span>
              </div>
              <span className="text-amber-300">|</span>
              <div className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>{progress.points} XP</span>
              </div>
            </button>

            {/* Language Toggle: VI vs EN */}
            <div className="flex rounded-lg bg-slate-100 p-0.5 border border-slate-200 text-xs font-bold">
              <button
                id="lang-toggle-vi"
                type="button"
                onClick={() => setLang('vi')}
                className={`px-2.5 py-1 rounded-md transition ${
                  lang === 'vi'
                    ? 'bg-white shadow-xs text-sky-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🇻🇳 VI
              </button>
              <button
                id="lang-toggle-en"
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition ${
                  lang === 'en'
                    ? 'bg-white shadow-xs text-sky-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="w-full bg-slate-100 h-1 relative">
          <div
            className="h-full bg-gradient-to-r from-sky-500 to-indigo-600 transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </header>

      {/* Main App Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full space-y-6">
        {/* Navigation Tabs Bar */}
        <div className="bg-white rounded-xl p-1.5 border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <button
              id="nav-tab-ipa"
              type="button"
              onClick={() => setActiveNavTab('ipa_chart')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition ${
                activeNavTab === 'ipa_chart'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Bảng 44 Âm IPA' : '44 IPA Chart'}</span>
            </button>

            <button
              id="nav-tab-ear"
              type="button"
              onClick={() => setActiveNavTab('ear_training')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition ${
                activeNavTab === 'ear_training'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Headphones className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Luyện Tai & Cặp Âm' : 'Ear Discrimination'}</span>
            </button>

            <button
              id="nav-tab-pitfalls"
              type="button"
              onClick={() => setActiveNavTab('pitfalls')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition ${
                activeNavTab === 'pitfalls'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Góc Trị Liệu Bẫy Âm' : 'Vietnamese Traps'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 text-xs text-slate-500 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>
              {progress.completedPhonemes.length} / 44 {lang === 'vi' ? 'hoàn thành' : 'mastered'} ({progressPercentage}%)
            </span>
          </div>
        </div>

        {/* Tab Content Display */}
        {activeNavTab === 'ipa_chart' && (
          <div className="space-y-6">
            {/* 1. Selected Phoneme Interactive Drill & Articulation Lab */}
            <PhonemeDetailView
              phoneme={selectedPhoneme}
              lang={lang}
              onPhonemeMastered={handlePhonemeMastered}
              isCompleted={progress.completedPhonemes.includes(selectedPhoneme.id)}
            />

            {/* 2. Full 44 Phonemes Matrix */}
            <IpaChart
              selectedPhonemeId={selectedPhonemeId}
              onSelectPhoneme={handleSelectPhoneme}
              completedPhonemes={progress.completedPhonemes}
              lang={lang}
            />
          </div>
        )}

        {activeNavTab === 'ear_training' && (
          <EarTrainingModule
            lang={lang}
            onCompleted={handleEarTrainingScore}
          />
        )}

        {activeNavTab === 'pitfalls' && (
          <VietnamesePitfallsGuide
            lang={lang}
            onSelectPhonemeById={(id) => {
              setSelectedPhonemeId(id);
              setActiveNavTab('ipa_chart');
            }}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            SoundQuest 44 — British English Pronunciation Quest for Vietnamese B1 Learners.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsBadgesModalOpen(true)}
              className="hover:text-slate-800 font-medium"
            >
              {lang === 'vi' ? 'Thành tích & Dữ liệu cá nhân' : 'Achievements & Data'}
            </button>
            <span>•</span>
            <span className="text-slate-400">Web Speech API & Gemini 2.5 Flash</span>
          </div>
        </div>
      </footer>

      {/* Badges & Achievements Modal */}
      <BadgesModal
        isOpen={isBadgesModalOpen}
        onClose={() => setIsBadgesModalOpen(false)}
        progress={progress}
        lang={lang}
        onProgressReset={handleResetProgress}
      />
    </div>
  );
}
