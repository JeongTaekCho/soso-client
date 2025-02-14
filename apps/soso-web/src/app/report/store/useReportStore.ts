import { create } from 'zustand';

interface Shop {
  name: string;
  lat: number;
  lng: number;
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

export const useReportStore = create<ReportState>((set) => ({
  shop: {
    name: '',
    lat: 37.5665,
    lng: 126.978,
    location: '',
  },
  operatingHours: {
    phoneNumber: '',
    monday: false,
    tuesday: true,
    wednesday: false,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: true,
    startTime: '10:00',
    endTime: '20:00',
  },
  products: [],
  setShop: (shop) => set({ shop }),
  setOperatingHours: (operatingHours) => set({ operatingHours }),
  setProduct: (products) => set({ products }),
}));
