import { ShopType } from '@/shared/types/shopType';

export interface MyWishType {
  id: number;
  name: string;
  image: null | string;
  type: number;
  reportStatus: number;
  lat: number;
  lng: number;
  location: string;
  region: {
    id: number;
    name: string;
  };
}

export type GetMyWishResponseType = MyWishType[];

export interface MyReviewType {
  id: number;
  content: string;
  createdAt: string;
  shop: ShopType;
  images: {
    id: number;
    url: string;
  }[];
}

export type GetMyReviewResponseType = MyReviewType[];

export interface MyShopType {
  uuid: string;
  shopId: number;
  type: number;
  status: number;
  rejectMessage: string | null;
  shop: ShopType;
}

export type GetMyShopResponseType = MyShopType[];
