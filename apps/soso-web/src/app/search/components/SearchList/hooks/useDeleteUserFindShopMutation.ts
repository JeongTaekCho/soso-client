import { deleteUserFindShop } from '@/app/search/components/SearchList/api/deleteUserFindShop';
import { useGetUserFindShopQuery } from '@/app/search/components/SearchList/hooks/useGetUserFindShopQuery';
import { DeleteUserFindShopRequest } from '@/app/search/components/SearchList/types';
import { useMutation } from '@tanstack/react-query';

export const useDeleteUserFindShopMutation = () => {
  const { refetch } = useGetUserFindShopQuery();

  return useMutation({
    mutationKey: ['deleteUserFindShop'],
    mutationFn: (data: DeleteUserFindShopRequest) => deleteUserFindShop(data),
    onSuccess: () => {
      refetch();
    },
  });
};
