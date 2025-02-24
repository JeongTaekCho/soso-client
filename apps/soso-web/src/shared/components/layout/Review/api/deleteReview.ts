import { customFetch } from '@/shared/utils/customFetch';

export const deleteReview = async (id: string) => {
  const result = await customFetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/review/${id}`, {
    method: 'DELETE',
  });

  return result;
};
