import { ProductType } from '@/shared/types/shopType';

export interface AddProductRequest {
  shopId: number;
  products: ProductType[];
}
