import { PhonemeData } from '../types';
import { VOWELS_DATA } from './vowels';
import { CONSONANTS_DATA } from './consonants';

export const ALL_PHONEMES: PhonemeData[] = [...VOWELS_DATA, ...CONSONANTS_DATA];

export function getPhonemeById(id: string): PhonemeData | undefined {
  return ALL_PHONEMES.find((p) => p.id === id);
}

export function getPhonemeBySymbol(symbol: string): PhonemeData | undefined {
  return ALL_PHONEMES.find((p) => p.symbol === symbol);
}

export function getPhonemesByCategory(category: 'vowel' | 'consonant'): PhonemeData[] {
  return ALL_PHONEMES.filter((p) => p.category === category);
}

export { VOWELS_DATA, CONSONANTS_DATA };
