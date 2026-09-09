import React, { useState, useEffect } from 'react';
import { ALL_PHONEMES, getPhonemeById } from './data/phonemes';
import { PhonemeData, Language, UserProgress } from './types';
import { IpaChart } from './components/IpaChart';
import { PhonemeDetailView } from './components/PhonemeDetailView';
import { EarTrainingModule } from './components/EarTrainingModule';
import { VietnamesePitfallsGuide } from './components/VietnamesePitfallsGuide';
import { ReadingPracticeModule } from './components/ReadingPracticeModule';
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
  Volume2,
  BookOpen,
  Phone,
  MessageCircle,
  ExternalLink,
  Upload,
  RotateCcw,
  Camera,
  Check
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('vi');
  const [activeNavTab, setActiveNavTab] = useState<'ipa_chart' | 'reading_practice' | 'ear_training' | 'pitfalls'>('ipa_chart');
  const [selectedPhonemeId, setSelectedPhonemeId] = useState<string>('v_i_long');
  const [progress, setProgress] = useState<UserProgress>(() => loadUserProgress());
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState<boolean>(false);
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);

  // User's exact original image support - preserved without facial/clothing alteration, with zero dark scrim
  const [teacherImage, setTeacherImage] = useState<string>(() => {
    try {
      return localStorage.getItem('soundquest_teacher_custom_photo') || '/phuong_chick_cover.jpg';
    } catch {
      return '/phuong_chick_cover.jpg';
    }
  });

  // Official badge of Cô Phượng Chick: An adorable yellow baby chick
  const chickBadge = '/yellow_chick_badge.jpg';

  const applyUploadedImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setTeacherImage(result);
        try {
          localStorage.setItem('soundquest_teacher_custom_photo', result);
        } catch (err) {
          console.warn('Could not save original photo to localStorage:', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUploadOriginalPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      applyUploadedImage(file);
    }
  };

  const handleDropPhoto = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      applyUploadedImage(file);
    }
  };

  const handleResetOriginalPhoto = () => {
    setTeacherImage('/phuong_chick_cover.jpg');
    try {
      localStorage.removeItem('soundquest_teacher_custom_photo');
      localStorage.removeItem('soundquest_teacher_custom_avatar');
    } catch {}
  };

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

  const handleReadingCompleted = (exerciseId: string, score: number) => {
    setProgress((prev) => {
      const alreadyDone = (prev.completedReadings || []).includes(exerciseId);
      const newCompleted = alreadyDone
        ? (prev.completedReadings || [])
        : [...(prev.completedReadings || []), exerciseId];

      const newPoints = alreadyDone ? prev.points : prev.points + 30;
      const updated: UserProgress = {
        ...prev,
        completedReadings: newCompleted,
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
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col selection:bg-rose-500 selection:text-white">
      {/* Top Application Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <img
              src={chickBadge}
              alt="Phù hiệu Cô Phượng Chick - Con gà con màu vàng"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border-2 border-amber-400 shadow-sm bg-amber-50 p-0.5"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-slate-900 text-lg tracking-tight">SoundQuest 44</span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-amber-100 text-amber-900 border border-amber-300">
                  Cô Phượng Chick • EIE
                </span>
              </div>
              <p className="hidden md:block text-[11px] text-slate-500">
                {lang === 'vi'
                  ? 'Chinh phục 44 âm & bài đọc chuẩn British RP cùng EIE Education'
                  : 'Mastering 44 British English phonemes & reading drills with EIE Education'}
              </p>
            </div>
          </div>

          {/* Gamification Stats, Hotline & Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick hotline pill */}
            <a
              href="tel:0983243993"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-full text-xs font-bold transition shadow-2xs"
              title="Hotline EIE Education"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0983.243.993</span>
            </a>

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
                    ? 'bg-white shadow-xs text-rose-700'
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
                    ? 'bg-white shadow-xs text-rose-700'
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
            className="h-full bg-gradient-to-r from-rose-500 to-amber-500 transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </header>

      {/* Hero Showcase Banner with Cô Phượng Chick - Bright, High Contrast, Prominent Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 w-full">
        <div className="relative rounded-3xl overflow-hidden shadow-md border-2 border-rose-200/90 bg-gradient-to-br from-white via-rose-50/40 to-amber-50/30 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Brand, Title, CTA */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600 text-white text-xs font-black uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>EIE Education — English Online Excellence</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tight">
                {lang === 'vi' ? (
                  <>
                    LUYỆN PHÁT ÂM <span className="text-rose-600 underline decoration-amber-400 decoration-4 underline-offset-4">DỄ DÀNG HƠN BAO GIỜ HẾT !</span>
                  </>
                ) : (
                  <>
                    PRONUNCIATION IS <span className="text-rose-600 underline decoration-amber-400 decoration-4 underline-offset-4">EASIER THAN EVER !</span>
                  </>
                )}
              </h1>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {lang === 'vi'
                  ? 'Học phát âm bài bản 44 âm quốc tế, sửa dứt điểm bẫy nuốt âm cuối của người Việt, và thực hành đọc câu / đoạn văn với AI chấm điểm tự động cùng nhận xét trực tiếp từ cô Phượng Chick.'
                  : 'Master 44 RP phonemes, overcome Vietnamese pronunciation traps, and practice reading sentences & paragraphs with instant AI scoring and guidance from Cô Phượng Chick.'}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveNavTab('reading_practice')}
                  className="px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition flex items-center gap-2 transform active:scale-95 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{lang === 'vi' ? 'Luyện Đọc Tính Điểm Ngay' : 'Try Reading Exercises'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveNavTab('ipa_chart')}
                  className="px-4 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-rose-600" />
                  <span>{lang === 'vi' ? 'Khám Phá 44 Âm IPA' : 'Explore 44 Phonemes'}</span>
                </button>

                <a
                  href="tel:0983243993"
                  className="px-4 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-1.5 shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hotline: 0983243993</span>
                </a>
              </div>
            </div>

            {/* Right Column: Prominent Character Display (NO dark filter, NO shadow overlay, Nổi bật tuyệt đối) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm rounded-2xl bg-white p-3 shadow-2xl border-2 border-rose-300 ring-4 ring-rose-100/80 transition transform hover:scale-[1.01]">
                {/* Character Photo Frame - Completely Bright, Natural Colors, 100% Original */}
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDraggingOver(true);
                  }}
                  onDragLeave={() => setIsDraggingOver(false)}
                  onDrop={handleDropPhoto}
                  className={`relative rounded-xl overflow-hidden bg-slate-50 aspect-[3/4] flex items-center justify-center border-2 transition ${
                    isDraggingOver ? 'border-rose-500 ring-4 ring-rose-300/60 scale-[1.02]' : 'border-transparent'
                  }`}
                >
                  <img
                    src={teacherImage}
                    alt="Cô Phượng Chick - EIE Education"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Drag overlay */}
                  {isDraggingOver && (
                    <div className="absolute inset-0 bg-rose-900/60 backdrop-blur-xs flex flex-col items-center justify-center text-white text-center p-4">
                      <Upload className="w-10 h-10 mb-2 animate-bounce" />
                      <span className="font-bold text-sm">Thả ảnh gốc vào đây</span>
                    </div>
                  )}

                  {/* Top Tag: Verified Teacher with Yellow Chick Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-amber-200 shadow-sm flex items-center gap-1.5 text-[11px] font-bold text-slate-900">
                    <img
                      src={chickBadge}
                      alt="Phù hiệu Cô Phượng Chick"
                      className="w-5 h-5 rounded-full object-cover border border-amber-300"
                    />
                    <span>Cô Phượng Chick</span>
                  </div>

                  {/* Direct Change Button Overlay */}
                  <label
                    htmlFor="original-photo-upload-overlay"
                    className="absolute bottom-2.5 right-2.5 bg-slate-900/85 hover:bg-slate-950 text-white backdrop-blur-xs px-2.5 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 text-[11px] font-bold cursor-pointer transition active:scale-95"
                    title="Nhấn để đổi ngay sang ảnh gốc bạn muốn"
                  >
                    <Camera className="w-3.5 h-3.5 text-rose-400" />
                    <span>{lang === 'vi' ? 'Đổi ảnh gốc' : 'Change photo'}</span>
                  </label>
                  <input
                    id="original-photo-upload-overlay"
                    type="file"
                    accept="image/*"
                    onChange={handleUploadOriginalPhoto}
                    className="hidden"
                  />
                </div>

                {/* Bottom Card Info & Actions */}
                <div className="mt-2.5 px-2 py-1.5 flex items-center justify-between gap-2 border-t border-rose-100 bg-rose-50/50 rounded-lg">
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-rose-950">EIE Education</span>
                    <span className="text-[10px] text-slate-500 font-medium">Hotline & Zalo: 0983.243.993</span>
                  </div>

                  {/* Upload button for user's exact original photo */}
                  <div className="flex items-center gap-1.5">
                    <label
                      htmlFor="original-photo-upload"
                      className="px-2.5 py-1 bg-white hover:bg-rose-50 text-rose-700 border border-rose-200 rounded-md text-[11px] font-bold shadow-2xs cursor-pointer flex items-center gap-1 transition"
                      title="Tải ảnh gốc của bạn lên để giữ nguyên 100% hình ảnh, khuôn mặt và trang phục"
                    >
                      <Upload className="w-3 h-3" />
                      <span>{lang === 'vi' ? 'Tải tệp ảnh' : 'Upload file'}</span>
                    </label>
                    <input
                      id="original-photo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleUploadOriginalPhoto}
                      className="hidden"
                    />
                    {teacherImage !== '/phuong_chick_cover.jpg' && (
                      <button
                        type="button"
                        onClick={handleResetOriginalPhoto}
                        className="p-1 text-slate-400 hover:text-rose-600 text-[10px]"
                        title="Khôi phục mặc định"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main App Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full space-y-6">
        {/* Navigation Tabs Bar */}
        <div className="bg-white rounded-xl p-1.5 border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <button
              id="nav-tab-ipa"
              type="button"
              onClick={() => setActiveNavTab('ipa_chart')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition shrink-0 ${
                activeNavTab === 'ipa_chart'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Bảng 44 Âm IPA' : '44 IPA Chart'}</span>
            </button>

            {/* New Reading Practice Tab with Scoring */}
            <button
              id="nav-tab-reading"
              type="button"
              onClick={() => setActiveNavTab('reading_practice')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition shrink-0 ${
                activeNavTab === 'reading_practice'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Đọc Câu & Đoạn Văn' : 'Reading Practice'}</span>
              <span className={`text-[10px] uppercase font-black px-1.5 py-0.2 rounded-full ${
                activeNavTab === 'reading_practice' ? 'bg-white text-rose-700' : 'bg-rose-100 text-rose-800'
              }`}>
                {lang === 'vi' ? 'Tính Điểm' : 'Scored'}
              </span>
            </button>

            <button
              id="nav-tab-ear"
              type="button"
              onClick={() => setActiveNavTab('ear_training')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition shrink-0 ${
                activeNavTab === 'ear_training'
                  ? 'bg-rose-600 text-white shadow-xs'
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
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition shrink-0 ${
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
              {progress.completedPhonemes.length}/44 {lang === 'vi' ? 'âm đã học' : 'mastered'} • {(progress.completedReadings || []).length} {lang === 'vi' ? 'bài đọc' : 'readings'}
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
              teacherAvatar={chickBadge}
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

        {/* NEW READING PRACTICE MODULE WITH SCORING */}
        {activeNavTab === 'reading_practice' && (
          <ReadingPracticeModule
            lang={lang}
            onCompleteExercise={handleReadingCompleted}
            completedIds={progress.completedReadings || []}
            teacherAvatar={chickBadge}
          />
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

      {/* CONTINUOUS RUNNING AD TICKER (MARQUEE) AT THE BOTTOM */}
      <div className="sticky bottom-0 z-30 bg-gradient-to-r from-rose-700 via-rose-600 to-amber-600 text-white shadow-xl overflow-hidden py-2.5 border-t border-rose-300/40">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs sm:text-sm font-bold tracking-wide">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>EIE Education — English online Excellence</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-amber-200">
            <Phone className="w-3.5 h-3.5" />
            <span>Hotline & Zalo: 0983243993</span>
          </span>
          <span>•</span>
          <span>Lớp luyện thi & phát âm chuẩn Anh-Anh cùng Cô Phượng Chick</span>
          <span>•</span>
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>EIE Education — English online Excellence</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-amber-200">
            <Phone className="w-3.5 h-3.5" />
            <span>Hotline & Zalo: 0983243993</span>
          </span>
          <span>•</span>
          <span>Trị dứt điểm nuốt âm đuôi & tự tin đọc trôi chảy B1</span>
          <span>•</span>
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>EIE Education — English online Excellence</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-amber-200">
            <Phone className="w-3.5 h-3.5" />
            <span>0983243993</span>
          </span>
        </div>
      </div>

      {/* Footer with Contact Card */}
      <footer className="bg-white border-t border-slate-200 pb-12 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Featured Ad & Info Card */}
          <div className="bg-rose-50/60 border border-rose-200/80 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={chickBadge}
                alt="Phù hiệu Cô Phượng Chick - Con gà con màu vàng"
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover border-2 border-amber-400 shadow-sm bg-amber-50 p-1 shrink-0"
              />
              <div>
                <h4 className="text-base font-black text-slate-900">
                  EIE Education — English online Excellence
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Đồng hành cùng Cô Phượng Chick • Hotline & Tư vấn khóa học: <strong className="text-rose-700">0983243993</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:0983243993"
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-xs transition flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Gọi ngay: 0983243993</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-100 pt-4">
            <p>
              SoundQuest 44 — British English Pronunciation & Reading for Vietnamese B1 Learners.
            </p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIsBadgesModalOpen(true)}
                className="hover:text-slate-800 font-medium"
              >
                {lang === 'vi' ? 'Thành tích & Dữ liệu' : 'Achievements'}
              </button>
              <span>•</span>
              <span className="text-slate-400">Powered by Gemini 2.5 Flash</span>
            </div>
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

