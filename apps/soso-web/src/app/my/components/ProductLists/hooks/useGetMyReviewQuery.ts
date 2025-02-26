import { getMyReview } from '@/app/my/components/ProductLists/api/getMyReview';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useQuery } from '@tanstack/react-query';

export const useGetMyReviewQuery = () => {
  const { token } = useAuthStore();

  return useQuery({
    queryKey: ['myReview'],
    queryFn: getMyReview,
    enabled: !!token,
  });
};
