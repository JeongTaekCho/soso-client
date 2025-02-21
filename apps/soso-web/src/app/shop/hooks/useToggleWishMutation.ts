import { ToggleWish } from '@/app/shop/api/toggleWish';
import { useDialog } from '@/shared/context/DialogContext';
import { CustomError } from '@/shared/utils/customFetch';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useToggleWishMutation = (shopId: number) => {
  const queryClient = useQueryClient();
  const { openDialog } = useDialog();

  return useMutation({
    mutationKey: ['toggleWishlist', shopId],
    mutationFn: (shopId: number) => ToggleWish(shopId),

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['shopDetail', String(shopId)] });

      const previousData = queryClient.getQueryData(['shopDetail', String(shopId)]);

      queryClient.setQueryData(['shopDetail', String(shopId)], (oldData: any) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          wishlist: !oldData.wishlist,
        };
      });

      return { previousData };
    },

    onError: (err: any, _, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(['shopDetail', String(shopId)], context.previousData);
      }

      if (err instanceof CustomError) {
        switch (err.status) {
          case 401:
            openDialog({
              title: '로그인 후 이용해주세요',
              type: 'alert',
            });
            // 🔥 로그인 페이지로 이동 or 알림 표시
            break;
          default:
            console.error(`❌ 알 수 없는 오류 발생 (Status: ${err.status})`, err.message);
        }
      } else {
        console.error('❓ 알 수 없는 오류:', err);
      }
    },

    // ✅ 서버 데이터와 동기화
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['shopDetail', String(shopId)] });
    },
  });
};
