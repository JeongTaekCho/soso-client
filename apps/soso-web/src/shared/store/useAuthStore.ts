import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMTAyNzg0OTM3Nzk2NTU2OTk2MjYyIiwiaWF0IjoxNzM5NTE5NjcyLCJleHAiOjE3NDMxMTk2NzJ9.4d-xDlR-XUj8sEdiezF_inB7HKcZOYBP84XdPyaD2Z8',
      setToken: (token) => set({ token }),
      clearToken: () => set({ token: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
