import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  isHydrated: boolean;
  setToken: (token: string | null) => void;
  setRefreshToken: (refreshToken: string | null) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: '',
      refreshToken: '',
      isHydrated: false,
      setToken: (token) => set({ token }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      clearToken: () => set({ token: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isHydrated = true; // ✅ Zustand persist 데이터가 로드된 후 변경
        }
      },
    }
  )
);
