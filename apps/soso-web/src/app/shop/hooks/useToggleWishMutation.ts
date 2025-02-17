import { ToggleWish } from '@/app/shop/api/toggleWish';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useToggleWishMutation = (shopId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['toggleWishlist', shopId],
    mutationFn: (shopId: number) => ToggleWish(shopId),

    // ✅ 옵티미스틱 UI: wishlist 값 즉시 변경
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['shopDetail', String(shopId)] });

      const previousData = queryClient.getQueryData(['shopDetail', String(shopId)]);

      // 기존 shopDetail에서 wishlist 값만 반전시킴
      queryClient.setQueryData(['shopDetail', String(shopId)], (oldData: any) => {
        console.log(oldData);
        if (!oldData) return oldData;
        return {
          ...oldData,
          wishlist: !oldData.wishlist,
        };
      });

      return { previousData };
    },

    // ✅ 요청 실패 시 롤백
    onError: (err, _, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(['shopDetail', String(shopId)], context.previousData);
      }
    },

    // ✅ 서버 데이터와 동기화
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['shopDetail', String(shopId)] });
    },
  });
};
