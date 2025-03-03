import { getShopSearchList } from '@/app/search/components/SearchList/api/getShopSearchList';
import { useInfiniteQuery } from '@tanstack/react-query';

/**
 * @param shopName 검색할 상점 이름
 * @param limit 페이지당 아이템 수
 */
export const useGetShopSearchListQuery = (shopName: string, limit: number = 10) => {
  return useInfiniteQuery({
    queryKey: ['shopSearchList', shopName, limit],

    queryFn: async ({ pageParam }) => {
      const result = await getShopSearchList(shopName, pageParam, limit);
      return result;
    },

    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (!lastPage.pageInfo.nextPage) {
        return undefined;
      }

      return lastPageParam + 1;
    },

    enabled: !!shopName,

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
