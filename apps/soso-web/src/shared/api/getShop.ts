import { DEFAULT_LOCATION } from '@/shared/constant/location';
import { ShopType } from '@/shared/types/shopType';
import { customFetch } from '@/shared/utils/customFetch';

export const getShop = async (lat?: number | null, lng?: number | null, sorting?: boolean): Promise<ShopType[]> => {
  const result = await customFetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/shop?lat=${lat || DEFAULT_LOCATION.lat}&lng=${lng || DEFAULT_LOCATION.lng}&sorting=${sorting}`
  );

  return result.result;
};
