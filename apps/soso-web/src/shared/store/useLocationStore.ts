import { create } from 'zustand';

interface LocationState {
  lat: number;
  lng: number;
  isLocationSet: boolean;
  setLocation: (lat: number, lng: number) => void;
  resetLocation: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  lat: 37.5665, // ✅ 위치 정보 없을 경우 null
  lng: 126.978,
  isLocationSet: false, // ✅ 위치 설정 여부
  setLocation: (lat, lng) => set({ lat, lng, isLocationSet: true }),
  resetLocation: () => set({ lat: 37.5665, lng: 126.978, isLocationSet: false }), // 기본 위치
}));
