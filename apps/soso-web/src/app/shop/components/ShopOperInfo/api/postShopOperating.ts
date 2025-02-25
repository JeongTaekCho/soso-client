import { ShopOperatingRequestType } from '@/app/shop/components/ShopOperInfo/types';
import { customFetch } from '@/shared/utils/customFetch';

export const postShopOperating = async (data: ShopOperatingRequestType) => {
  const result = customFetch(`/submit/operating`, {
    method: 'POST',
    body: data,
  });

  return result;
};
