import { customFetch } from '@/shared/utils/customFetch';

export const getMyShop = async () => {
  const result = await customFetch('/user/submit');

  return result;
};
