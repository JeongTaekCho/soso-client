import { create } from 'zustand'

interface LocationState {
  lat: number
  lng: number
  prevLocation: { lat: number; lng: number; zoom: number } | null
  prevShop: { id: number; lat: number; lng: number } | null // 이전에 본 소품샵 ID 저장
  isInitialLocationSet: boolean
  setLocation: (lat: number, lng: number) => void
  setPrevLocation: (state: { lat: number; lng: number; zoom: number } | null) => void
  setPrevShop: (state: { id: number; lat: number; lng: number } | null) => void
  setIsInitialLocationSet: (isInitialLocationSet: boolean) => void
  resetLocation: () => void
}

export const useLocationStore = create<LocationState>((set) => ({
  lat: 37.5665,
  lng: 126.978,
  prevLocation: null,
  prevShop: null,
  isInitialLocationSet: false,
  setLocation: (lat, lng) => set({ lat, lng }),
  setPrevLocation: (state) => set({ prevLocation: state, isInitialLocationSet: true }),
  setPrevShop: (state) => set({ prevShop: state }),
  setIsInitialLocationSet: (isInitialLocationSet: boolean) => {
    set({ isInitialLocationSet })
  },
  resetLocation: () =>
    set({
      lat: 37.5665,
      lng: 126.978,
      prevLocation: null,
      prevShop: null,
    }),
}))
