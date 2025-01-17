export interface ShopType {
  id: number;
  name: string;
  reportStatus: number;
  lat: number;
  lng: number;
  location: string;
  operatingHours: OperatingHourType[];
  products: ProductType[];
}

export interface OperatingHourType {
  id: number;
  phoneNumber: string;
  mondayHours: string;
  tuesdayHours: string;
  wednesdayHours: string;
  thursdayHours: string;
  fridayHours: string;
  saturdayHours: string;
  sundayHours: string;
}

export interface ProductType {
  id: number;
  name: string;
}

export interface ReviewType {
  id: number;
  content: string;
  createdAt: string;
  images: {
    id: number;
    url: string;
  }[];
}

export interface ShopDetailType {
  id: number;
  name: string;
  reportStatus: number;
  lat: number;
  lng: number;
  location: string;
  operatingHours: OperatingHourType[];
  products: ProductType[];
  reviews: ReviewType[];
}
