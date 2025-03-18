import { AddProductRequest } from '@/app/shop/components/ShopProducts/types';
import { customFetch } from '@/shared/utils/customFetch';

export const addShopProduct = async (data: AddProductRequest) => {
  const result = await customFetch(`/submit/products`, {
    method: 'POST',
    body: data,
  });

  return result;
};
