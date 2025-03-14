import { GetUserFindShopResponse } from '@/app/search/components/SearchList/types';
import { customFetch } from '@/shared/utils/customFetch';

export const getUserFindShop = async (): Promise<GetUserFindShopResponse> => {
  const result = await customFetch('/recent-search');

  return result.result;
};
