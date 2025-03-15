import { allDeleteUserFindShop } from '@/app/search/components/SearchList/api/allDeleteUserFindShop';
import { useGetUserFindShopQuery } from '@/app/search/components/SearchList/hooks/useGetUserFindShopQuery';
import { useMutation } from '@tanstack/react-query';

export const useAllDeleteUserFindShopMutation = () => {
  const { refetch } = useGetUserFindShopQuery();

  return useMutation({
    mutationKey: ['allDeleteUserFindShop'],
    mutationFn: () => allDeleteUserFindShop(),
    onSuccess: () => {
      refetch();
    },
  });
};
