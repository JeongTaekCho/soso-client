import { ShopDetailType } from '@/shared/types/shopType';
import { customFetch } from '@/shared/utils/customFetch';

export const getShopDetail = async (id: string): Promise<ShopDetailType> => {
  const result = await customFetch(`/shop/${id}`);

  return result.result;
};
