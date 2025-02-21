import { addShopProduct } from '@/app/shop/components/ShopProducts/api/addShopProduct';
import { AddProductRequest } from '@/app/shop/components/ShopProducts/types';
import { useGetShopDetailQuery } from '@/app/shop/hooks/useGetShopDetailQuery';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export const useAddShopProductMutation = () => {
  const { id } = useParams();
  const { refetch: detailRefetch } = useGetShopDetailQuery(String(id));

  return useMutation({
    mutationKey: ['addShopProduct'],
    mutationFn: (data: AddProductRequest) => addShopProduct(data),
    onSuccess: () => {
      detailRefetch();
    },
  });
};
