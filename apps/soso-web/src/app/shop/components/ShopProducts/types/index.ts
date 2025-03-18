import { ProductType } from '@/shared/types/shopType';

export interface AddProductRequest {
  shopId: number;
  products: Pick<ProductType, 'id'>[];
}
