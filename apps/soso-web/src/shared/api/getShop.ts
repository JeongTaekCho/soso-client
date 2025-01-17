import { ShopType } from '@/shared/types/shopType';
import { customFetch } from '@/shared/utils/customFetch';

export const getShop = async (): Promise<ShopType[]> => {
  const result = await customFetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/shop`);
  console.log(result);

  return result;
};
