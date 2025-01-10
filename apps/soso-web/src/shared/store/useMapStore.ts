import { create } from 'zustand';

interface MapStore {
  map: naver.maps.Map | null;
  setMap: (map: naver.maps.Map) => void;
  center: naver.maps.LatLng | null;
  setCenter: (center: naver.maps.LatLng) => void;
}

const useMapStore = create<MapStore>((set) => ({
  map: null,
  center: null,
  setMap: (map) => set({ map }),
  setCenter: (center) => set({ center }),
}));

export default useMapStore;
