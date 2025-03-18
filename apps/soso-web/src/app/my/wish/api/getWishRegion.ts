import { RegionType } from '@/app/my/wish/types';
import { customFetch } from '@/shared/utils/customFetch';

export const getWishRegion = async (): Promise<RegionType> => {
  const result = await customFetch('/shop/region');

  return result.result;
};
