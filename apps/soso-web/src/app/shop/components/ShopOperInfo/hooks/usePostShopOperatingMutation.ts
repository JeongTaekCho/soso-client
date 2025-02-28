import { postShopOperating } from '@/app/shop/components/ShopOperInfo/api/postShopOperating';
import { ShopOperatingRequestType } from '@/app/shop/components/ShopOperInfo/types';
import { useMutation } from '@tanstack/react-query';

export const usePostShopOperatingMutation = () => {
  return useMutation({
    mutationKey: ['postShopOperating'],
    mutationFn: (data: ShopOperatingRequestType) => postShopOperating(data),
  });
};
