import { AddProductRequest } from '@/app/shop/components/ShopProducts/types';
import { customFetch } from '@/shared/utils/customFetch';

export const addShopProduct = async (data: AddProductRequest) => {
  const result = await customFetch(`/shop`, {
    method: 'PATCH',
    body: data,
  });

  return result;
};
