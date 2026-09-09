import { UserProgress } from '../types';

const STORAGE_KEY = 'soundquest44_progress_v1';

export function getInitialProgress(): UserProgress {
  return {
    points: 120,
    streakDays: 3,
    lastActiveDate: new Date().toISOString().split('T')[0],
    completedPhonemes: ['v_i_long', 'v_i_short', 'c_p', 'c_b', 'c_t'],
    masteredPhonemes: ['v_i_long', 'c_t'],
    completedReadings: ['read-sent-1'],
    earTrainingScore: {
      correct: 8,
      total: 10
    },
    unlockedBadges: ['badge_pioneer']
  };
}

export function loadUserProgress(): UserProgress {
  if (typeof window === 'undefined') return getInitialProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = getInitialProgress();
      saveUserProgress(initial);
      return initial;
    }
    const parsed = JSON.parse(raw);
    if (!parsed.completedReadings) {
      parsed.completedReadings = ['read-sent-1'];
    }
    return parsed;
  } catch (err) {
    console.warn('Failed to read user progress from localStorage:', err);
    return getInitialProgress();
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.warn('Failed to save user progress:', err);
  }
}

export function addPoints(amount: number): UserProgress {
  const current = loadUserProgress();
  current.points += amount;

  // Check badges
  if (current.completedPhonemes.length >= 5 && !current.unlockedBadges.includes('badge_pioneer')) {
    current.unlockedBadges.push('badge_pioneer');
  }
  if (current.completedPhonemes.length >= 44 && !current.unlockedBadges.includes('badge_master')) {
    current.unlockedBadges.push('badge_master');
  }

  saveUserProgress(current);
  return current;
}

export function resetAllData(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.warn('Error clearing localStorage:', err);
  }
}
