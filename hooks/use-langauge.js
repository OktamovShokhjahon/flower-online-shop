import { create } from 'zustand';

export const useLanguageStore = create((set) => ({
  locale: 'ru', // Sukut bo'yicha til
  setLocale: (locale) => set({ locale }),
}));
