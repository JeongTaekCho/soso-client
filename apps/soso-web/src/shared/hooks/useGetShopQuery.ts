import { getShop } from '@/shared/api/getShop';
import { ShopType } from '@/shared/types/shopType';
import { useQuery } from '@tanstack/react-query';

export const useGetShopQuery = (lat?: number | null, lng?: number | null, sroting?: boolean) => {
  return useQuery<ShopType[]>({
    queryKey: ['shop', lat, lng, sroting],
    queryFn: () => getShop(lat, lng, sroting),
    enabled: !!lat && !!lng,
  });
};
