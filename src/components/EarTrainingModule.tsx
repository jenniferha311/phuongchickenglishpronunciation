import React, { useState } from 'react';
import { EAR_TRAINING_QUESTIONS } from '../data/earTrainingQuestions';
import { EarTrainingQuestion, Language } from '../types';
import { Headphones, CheckCircle, XCircle, RotateCcw, Volume2, ArrowRight, Award } from 'lucide-react';
import { playBritishSpeech } from '../utils/audio';

interface EarTrainingModuleProps {
  lang: Language;
  onCompleted?: (correctCount: number, total: number) => void;
}

export const EarTrainingModule: React.FC<EarTrainingModuleProps> = ({ lang, onCompleted }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(1.0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const question: EarTrainingQuestion = EAR_TRAINING_QUESTIONS[currentIndex];

  const handlePlayAudio = async () => {
    if (isPlaying || !question) return;
    setIsPlaying(true);
    await playBritishSpeech(question.audioPrompt, speed);
    setIsPlaying(false);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerRevealed) return;
    setSelectedOptionIndex(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOptionIndex === null || isAnswerRevealed) return;
    setIsAnswerRevealed(true);
    const chosen = question.options[selectedOptionIndex];
    if (chosen.isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < EAR_TRAINING_QUESTIONS.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswerRevealed(false);
    } else {
      setIsFinished(true);
      if (onCompleted) {
        onCompleted(score + (question.options[selectedOptionIndex ?? -1]?.isCorrect ? 1 : 0), EAR_TRAINING_QUESTIONS.length);
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswerRevealed(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percentage = Math.round((score / EAR_TRAINING_QUESTIONS.length) * 100);
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 text-center max-w-lg mx-auto shadow-sm">
        <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Award className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-slate-800 tracking-tight">
          {lang === 'vi' ? 'Hoàn thành thử thách Luyện tai!' : 'Ear Training Completed!'}
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          {lang === 'vi' ? 'Khả năng phân biệt âm thanh chuẩn British English của bạn:' : 'Your acoustic British English discrimination score:'}
        </p>

        <div className="my-6">
          <span className="text-5xl font-black text-sky-600">{percentage}%</span>
          <div className="text-xs font-semibold text-slate-400 mt-1">
            {score} / {EAR_TRAINING_QUESTIONS.length} {lang === 'vi' ? 'câu đúng' : 'correct questions'}
          </div>
        </div>

        <p className="text-xs text-slate-600 bg-slate-50 border border-slate-200 p-3 rounded-lg text-left leading-relaxed">
          {percentage >= 80
            ? (lang === 'vi' ? '🎉 Tuyệt vời! Bạn có đôi tai thính âm rất nhạy bén với các cặp âm dễ nhầm lẫn.' : '🎉 Excellent! You have sharp acoustic discrimination for tricky pairs.')
            : (lang === 'vi' ? '💡 Rất tốt! Hãy tiếp tục luyện nghe ở tốc độ 0.75x để phân biệt rõ hơn khẩu hình và độ dài nguyên âm.' : '💡 Great progress! Keep practicing at 0.75x speed to sharpen vowel length and final sounds.')}
        </p>

        <button
          type="button"
          onClick={handleRestart}
          className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-bold text-sm shadow-sm transition"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{lang === 'vi' ? 'Luyện lại lần nữa' : 'Practice Again'}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm">
      {/* Progress & Speed Header */}
      <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-sky-100 text-sky-700">
            <Headphones className="w-4 h-4" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-slate-800">
              {lang === 'vi' ? 'Thử thách Thính giác (Ear Discrimination)' : 'Ear Training Discrimination'}
            </h3>
            <span className="text-xs text-slate-400 font-medium">
              {lang === 'vi' ? `Câu ${currentIndex + 1} trên ${EAR_TRAINING_QUESTIONS.length}` : `Question ${currentIndex + 1} of ${EAR_TRAINING_QUESTIONS.length}`}
            </span>
          </div>
        </div>

        {/* Speed Selector (1.0x vs 0.75x) */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">{lang === 'vi' ? 'Tốc độ:' : 'Speed:'}</span>
          <div className="flex rounded bg-slate-100 p-0.5 text-xs font-semibold text-slate-700 border border-slate-200">
            <button
              type="button"
              onClick={() => setSpeed(1.0)}
              className={`px-2 py-1 rounded ${speed === 1.0 ? 'bg-white shadow-xs text-sky-700 font-bold' : 'hover:text-slate-950'}`}
            >
              1.0x
            </button>
            <button
              type="button"
              onClick={() => setSpeed(0.75)}
              className={`px-2 py-1 rounded ${speed === 0.75 ? 'bg-white shadow-xs text-sky-700 font-bold' : 'hover:text-slate-950'}`}
            >
              0.75x
            </button>
          </div>
        </div>
      </div>

      {/* Audio Prompt Box */}
      <div className="my-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
          {lang === 'vi' ? '1. Nhấn để nghe từ bí mật (chuẩn giọng Anh)' : '1. Listen to the secret British pronunciation'}
        </p>

        <button
          type="button"
          onClick={handlePlayAudio}
          disabled={isPlaying}
          className="inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 disabled:opacity-60 text-white rounded-full font-black text-base shadow-md transition transform active:scale-95"
        >
          <Volume2 className={`w-5 h-5 ${isPlaying ? 'animate-pulse' : ''}`} />
          <span>{isPlaying ? (lang === 'vi' ? 'Đang phát âm...' : 'Playing Sound...') : (lang === 'vi' ? 'Nghe Audio (Nhấn để nghe)' : 'Play British Audio')}</span>
        </button>

        <p className="text-xs text-slate-400 mt-2">
          {lang === 'vi' ? 'Gợi ý: Lắng nghe kỹ độ dài nguyên âm hoặc âm bật cuối từ' : 'Tip: Listen closely to vowel duration or final stop consonant'}
        </p>
      </div>

      {/* Multiple Choice Options */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {lang === 'vi' ? '2. Bạn nghe thấy từ/âm nào?' : '2. Which word/sound did you hear?'}
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          {question.options.map((opt, idx) => {
            const isSelected = selectedOptionIndex === idx;
            let btnStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';

            if (isAnswerRevealed) {
              if (opt.isCorrect) {
                btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 ring-2 ring-emerald-500/20';
              } else if (isSelected && !opt.isCorrect) {
                btnStyle = 'bg-rose-50 border-rose-400 text-rose-900';
              }
            } else if (isSelected) {
              btnStyle = 'bg-sky-50 border-sky-500 text-sky-900 ring-2 ring-sky-500/20';
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswerRevealed}
                className={`flex items-center justify-between p-4 rounded-xl border text-left transition font-medium ${btnStyle}`}
              >
                <div>
                  <span className="text-base font-bold capitalize">{opt.text}</span>
                  <span className="ml-2 font-mono text-xs text-sky-600 font-semibold">{opt.ipa}</span>
                </div>

                {isAnswerRevealed && opt.isCorrect && (
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isAnswerRevealed && isSelected && !opt.isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Acoustic Explanation & Next Action */}
      {isAnswerRevealed && (
        <div className="mt-5 p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-3 animate-fadeIn">
          <div className="flex items-start gap-2">
            <span className="font-bold text-xs uppercase text-sky-800 shrink-0 mt-0.5">
              {lang === 'vi' ? 'Giải thích âm học:' : 'Acoustic explanation:'}
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              {lang === 'vi' ? question.explanation.vi : question.explanation.en}
            </p>
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={handleNextQuestion}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs font-bold transition shadow-xs"
            >
              <span>{currentIndex + 1 < EAR_TRAINING_QUESTIONS.length ? (lang === 'vi' ? 'Câu tiếp theo' : 'Next Question') : (lang === 'vi' ? 'Xem kết quả' : 'View Results')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Submit Button before Reveal */}
      {!isAnswerRevealed && (
        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={handleSubmitAnswer}
            disabled={selectedOptionIndex === null}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-lg text-xs font-bold transition shadow-xs"
          >
            {lang === 'vi' ? 'Kiểm tra đáp án' : 'Check Prediction'}
          </button>
        </div>
      )}
    </div>
  );
};
