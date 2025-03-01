import { addShopProduct } from '@/app/shop/components/ShopProducts/api/addShopProduct';
import { AddProductRequest } from '@/app/shop/components/ShopProducts/types';
import { useMutation } from '@tanstack/react-query';

export const useAddShopProductMutation = () => {
  return useMutation({
    mutationKey: ['addShopProduct'],
    mutationFn: (data: AddProductRequest) => addShopProduct(data),
  });
};
