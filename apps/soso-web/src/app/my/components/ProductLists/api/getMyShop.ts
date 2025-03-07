import { GetMyShopResponse } from '@/app/my/components/ProductLists/types';
import { customFetch } from '@/shared/utils/customFetch';

export const getMyShop = async (page: number, limit: number): Promise<GetMyShopResponse> => {
  const result = await customFetch(`/user/submit?page=${page}&limit=${limit}`);

  return result.result;
};
