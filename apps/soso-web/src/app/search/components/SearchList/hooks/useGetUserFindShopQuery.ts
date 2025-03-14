import { getUserFindShop } from '@/app/search/components/SearchList/api/getUserFindShop';
import { useQuery } from '@tanstack/react-query';

export const useGetUserFindShopQuery = () => {
  return useQuery({
    queryKey: ['userFindShop'],
    queryFn: getUserFindShop,
  });
};
