import { create } from 'zustand';

interface YoilType {
  id: string;
  label: string;
  checked: boolean;
}

interface YoilStore {
  yoil: YoilType[];
  toggleYoil: (id: string) => void;
  setYoil: (updatedYoil: YoilType[]) => void;
  setCheckYoil: (label: string, checked: boolean) => void;
  resetYoil: () => void; // 추가된 함수
  addYoil: YoilType[];
  toggleAddYoil: (id: string) => void;
  setAddYoil: (label: string, checked: boolean) => void;
  resetAddYoil: () => void;
}

export const useYoilStore = create<YoilStore>((set) => ({
  yoil: [
    { id: 'yoil_monday', label: '월', checked: false },
    { id: 'yoil_tuesday', label: '화', checked: false },
    { id: 'yoil_wednesday', label: '수', checked: false },
    { id: 'yoil_thursday', label: '목', checked: false },
    { id: 'yoil_friday', label: '금', checked: false },
    { id: 'yoil_saturday', label: '토', checked: false },
    { id: 'yoil_sunday', label: '일', checked: false },
  ],
  toggleYoil: (id) =>
    set((state) => ({
      yoil: state.yoil.map((day) => (day.id === id ? { ...day, checked: !day.checked } : day)),
    })),
  setYoil: (updatedYoil) => set(() => ({ yoil: updatedYoil })),
  setCheckYoil: (label, checked) =>
    set((state) => ({
      yoil: state.yoil.map((day) => (day.label === label ? { ...day, checked } : day)),
    })),
  resetYoil: () =>
    set(() => ({
      yoil: [
        { id: 'yoil_monday', label: '월', checked: false },
        { id: 'yoil_tuesday', label: '화', checked: false },
        { id: 'yoil_wednesday', label: '수', checked: false },
        { id: 'yoil_thursday', label: '목', checked: false },
        { id: 'yoil_friday', label: '금', checked: false },
        { id: 'yoil_saturday', label: '토', checked: false },
        { id: 'yoil_sunday', label: '일', checked: false },
      ],
    })),

  addYoil: [
    { id: 'monday', label: '월', checked: false },
    { id: 'tuesday', label: '화', checked: false },
    { id: 'wednesday', label: '수', checked: false },
    { id: 'thursday', label: '목', checked: false },
    { id: 'friday', label: '금', checked: false },
    { id: 'saturday', label: '토', checked: false },
    { id: 'sunday', label: '일', checked: false },
  ],
  toggleAddYoil: (id) =>
    set((state) => ({
      addYoil: state.addYoil.map((day) => (day.id === id ? { ...day, checked: !day.checked } : day)),
    })),
  setAddYoil: (label, checked) =>
    set((state) => ({
      addYoil: state.addYoil.map((day) => (day.label === label ? { ...day, checked } : day)),
    })),

  resetAddYoil: () =>
    set(() => ({
      addYoil: [
        { id: 'monday', label: '월', checked: false },
        { id: 'tuesday', label: '화', checked: false },
        { id: 'wednesday', label: '수', checked: false },
        { id: 'thursday', label: '목', checked: false },
        { id: 'friday', label: '금', checked: false },
        { id: 'saturday', label: '토', checked: false },
        { id: 'sunday', label: '일', checked: false },
      ],
    })),
}));
