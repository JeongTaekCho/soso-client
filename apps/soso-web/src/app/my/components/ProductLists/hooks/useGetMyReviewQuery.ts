import { getMyReview } from '@/app/my/components/ProductLists/api/getMyReview';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetMyReviewQuery = (limit: number) => {
  const { token } = useAuthStore();

  return useInfiniteQuery({
    queryKey: ['myReview', limit],

    queryFn: async ({ pageParam }) => {
      const result = await getMyReview(pageParam, limit);
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
