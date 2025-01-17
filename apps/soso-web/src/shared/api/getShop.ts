import { ShopType } from '@/shared/types/shopType';
import { customFetch } from '@/shared/utils/customFetch';

export const getShop = async (): Promise<ShopType[]> => {
  const result = await customFetch('/shop');

  return result.result;
};
