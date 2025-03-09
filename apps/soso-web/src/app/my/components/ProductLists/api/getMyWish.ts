import { GetMyWishResponse } from '@/app/my/components/ProductLists/types';
import { customFetch } from '@/shared/utils/customFetch';

export const getMyWish = async (page: number, limit: number): Promise<GetMyWishResponse> => {
  const result = await customFetch(`/user/wishlist?page=${page}&limit=${limit}&area=서울`);

  return result.result;
};
