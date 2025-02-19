import { getShopSearchList } from '@/app/search/components/SearchList/api/getShopSearchList';
import { useQuery } from '@tanstack/react-query';

export const useGetShopSearchListQuery = (shopName: string, page: number, limit: number) => {
  return useQuery({
    queryKey: ['shopSearchList', shopName, page, limit],
    queryFn: () => getShopSearchList(shopName, page, limit),
    enabled: !!shopName,
  });
};
