import { getShop } from '@/shared/api/getShop';
import { ShopType } from '@/shared/types/shopType';
import { useQuery } from '@tanstack/react-query';

export const useGetShopQuery = () => {
  return useQuery<ShopType[]>({
    queryKey: ['shop'],
    queryFn: getShop,
  });
};
