import { customFetch } from '@/shared/utils/customFetch';

export const ToggleWish = async (id: number) => {
  const result = await customFetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/wishlist`, {
    method: 'POST',
    body: {
      shopId: id,
    },
  });

  return result;
};
