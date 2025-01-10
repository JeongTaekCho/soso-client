import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AppState {
  count: number;
  increment: () => void;
}

export const useStore = create<AppState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

interface AuthStore {
  token: string;
  setToken: (token: string) => void;
}

export const useAuthStore = create<AuthStore>(
  (persist as any)(
    (set: any) => ({
      token: '',
      setToken: (token: string) => set({ token: token }),
    }),
    {
      name: 'useAuthStore',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
