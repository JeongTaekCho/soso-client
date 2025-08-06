import { useGetMyShopQuery } from '@/app/my/components/ProductLists/hooks/useGetMyShopQuery'
import { deleteSubmitShop } from '@/app/my/shop/api/deleteSubmitShop'
import { useMutation } from '@tanstack/react-query'

export const useDeleteSubmitShopMutation = () => {
  const { refetch } = useGetMyShopQuery(10)

  return useMutation({
    mutationKey: ['deleteSubmitShop'],
    mutationFn: (id: string) => deleteSubmitShop(id),
    onSuccess: () => {
      refetch()
    },
  })
}
