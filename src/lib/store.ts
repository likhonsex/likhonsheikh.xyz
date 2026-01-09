import { create } from 'zustand';

interface UIState {
  isMenuOpen: boolean;
  activeCategory: string;
  toggleMenu: () => void;
  closeMenu: () => void;
  setActiveCategory: (category: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  activeCategory: 'all',
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  setActiveCategory: (category) => set({ activeCategory: category }),
}));
