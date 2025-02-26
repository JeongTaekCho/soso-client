import { GetMyShopResponseType } from '@/app/my/components/ProductLists/types';
import { customFetch } from '@/shared/utils/customFetch';

export const getMyShop = async (): Promise<GetMyShopResponseType> => {
  const result = await customFetch('/user/submit');

  return result.result;
};
