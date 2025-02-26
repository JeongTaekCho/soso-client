import { GetMyWishResponseType } from '@/app/my/components/ProductLists/types';
import { customFetch } from '@/shared/utils/customFetch';

export const getMyWish = async (): Promise<GetMyWishResponseType> => {
  const result = await customFetch('/user/wishlist');

  return result.result;
};
