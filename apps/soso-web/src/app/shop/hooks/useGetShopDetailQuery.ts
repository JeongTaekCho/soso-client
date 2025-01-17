import { getShopDetail } from '@/app/shop/api/getShopDetail';
import { ShopDetailType } from '@/shared/types/shopType';
import { useQuery } from '@tanstack/react-query';

export const useGetShopDetailQuery = (id: string) => {
  return useQuery<ShopDetailType>({
    queryKey: ['shopDetail', id],
    queryFn: () => getShopDetail(id),
  });
};
