import { create } from 'zustand';

interface LocationState {
  lat: number;
  lng: number;
  prevLat: number | null;
  prevLng: number | null;
  prevShopId: number | null; // 이전에 본 소품샵 ID 저장
  isLocationSet: boolean;
  setLocation: (lat: number, lng: number) => void;
  setPrevLocation: (prevLat: number | null, prevLng: number | null, prevShopId: number | null) => void; // ID도 함께 저장
  resetLocation: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  lat: 37.5665,
  lng: 126.978,
  prevLat: null,
  prevLng: null,
  prevShopId: null, // 이전에 본 소품샵 ID 저장
  isLocationSet: false,
  setLocation: (lat, lng) => set({ lat, lng, isLocationSet: true }),
  setPrevLocation: (prevLat, prevLng, prevShopId) => set({ prevLat, prevLng, prevShopId, isLocationSet: true }),
  resetLocation: () =>
    set({
      lat: 37.5665,
      lng: 126.978,
      prevLat: null,
      prevLng: null,
      prevShopId: null,
      isLocationSet: false,
    }),
}));
