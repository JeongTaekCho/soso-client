import { getMyShop } from '@/app/my/components/ProductLists/api/getMyShop';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useQuery } from '@tanstack/react-query';

export const useGetMyShopQuery = () => {
  const { token } = useAuthStore();

  return useQuery({
    queryKey: ['myShop'],
    queryFn: getMyShop,
    enabled: !!token,
  });
};
