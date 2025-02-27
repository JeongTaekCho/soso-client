import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  isHydrated: boolean;
  isLoggingOut: boolean; // ✅ 로그아웃 중 여부 추가
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
      isLoggingOut: false, // ✅ 기본값 false

      setToken: (token) => set({ token }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),

      clearToken: () => {
        set({ token: null, refreshToken: null, isLoggingOut: true }); // ✅ 로그아웃 중 상태 설정
        localStorage.removeItem('auth-storage');

        setTimeout(() => {
          set({ isLoggingOut: false });
        }, 1000);
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isHydrated = true;
        }
      },
    }
  )
);
