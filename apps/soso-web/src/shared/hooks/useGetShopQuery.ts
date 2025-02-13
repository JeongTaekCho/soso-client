import { getShop } from '@/shared/api/getShop';
import { ShopType } from '@/shared/types/shopType';
import { useQuery } from '@tanstack/react-query';

export const useGetShopQuery = (lat?: number, lng?: number) => {
  return useQuery<ShopType[]>({
    queryKey: ['shop', lat, lng],
    queryFn: () => getShop(lat, lng),
  });
};
