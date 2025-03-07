import { getMyShop } from '@/app/my/components/ProductLists/api/getMyShop';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetMyShopQuery = (limit: number) => {
  const { token } = useAuthStore();

  return useInfiniteQuery({
    queryKey: ['myShop', limit],

    queryFn: async ({ pageParam }) => {
      const result = await getMyShop(pageParam, limit);
      return result;
    },

    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (!lastPage.pageInfo.nextPage) {
        return undefined;
      }

      return lastPageParam + 1;
    },

    enabled: !!token,

    staleTime: 0,
    gcTime: 0,
  });
};
