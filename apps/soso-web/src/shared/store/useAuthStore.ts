import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  userType: 'new' | 'guest' | 'login';
  isHydrated: boolean;
  setToken: (token: string) => void;
  setUserType: (type: 'new' | 'guest' | 'login') => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMTAyNzg0OTM3Nzk2NTU2OTk2MjYyIiwiaWF0IjoxNzM5NTE5NjcyLCJleHAiOjE3NDMxMTk2NzJ9.4d-xDlR-XUj8sEdiezF_inB7HKcZOYBP84XdPyaD2Z8',
      userType: 'new',
      isHydrated: false,
      setToken: (token) => set({ token }),
      setUserType: (type) => set({ userType: type }),
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
