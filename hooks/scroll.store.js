import { create } from 'zustand';

const useScrollStore = create((set) => ({
    isScrollingUp: true, // Tepaga scroll qilinsa true, pastga scroll qilinsa false
    setScrollDirection: (direction) => set({ isScrollingUp: direction }),
}));

export default useScrollStore;