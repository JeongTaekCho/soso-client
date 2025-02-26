import { getMyWish } from '@/app/my/components/ProductLists/api/getMyWish';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useQuery } from '@tanstack/react-query';
export const useGetMyWishQuery = () => {
  const { token } = useAuthStore();

  return useQuery({
    queryKey: ['myWish'],
    queryFn: getMyWish,
    enabled: !!token,
  });
};
