import { ShopType } from '@/shared/types/shopType';
import { customFetch } from '@/shared/utils/customFetch';

export const getShopSearchList = async (shopName: string, page: number, limit: number): Promise<ShopType[]> => {
  const result = await customFetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/shop/search?shopName=${shopName}&page=${page}&limit=${limit}`
  );

  return result.result;
};
