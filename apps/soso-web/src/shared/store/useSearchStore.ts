import { create } from 'zustand';

interface SearchStore {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchValue: '',
  setSearchValue: (searchValue: string) => set({ searchValue }),
}));
