import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Shop {
  name: string;
  lat: number | null;
  lng: number | null;
  location: string;
}

interface OperatingHours {
  phoneNumber: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  startTime: string;
  endTime: string;
}

interface Product {
  id: number;
  name: string;
}

interface ReportState {
  shop: Shop;
  operatingHours: OperatingHours;
  products: Product[];
  setShop: (shop: Shop) => void;
  setOperatingHours: (operatingHours: OperatingHours) => void;
  setProduct: (products: Product[]) => void;
}

export const useReportStore = create<ReportState>()(
  persist(
    (set) => ({
      shop: {
        name: '',
        lat: null,
        lng: null,
        location: '',
      },
      operatingHours: {
        phoneNumber: '',
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
        startTime: '10:00',
        endTime: '20:00',
      },
      products: [],
      setShop: (shop) => set({ shop }),
      setOperatingHours: (operatingHours) => set({ operatingHours }),
      setProduct: (products) => set({ products }),
    }),
    {
      name: 'report-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
