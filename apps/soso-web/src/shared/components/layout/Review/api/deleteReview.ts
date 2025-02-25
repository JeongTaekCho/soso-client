import { customFetch } from '@/shared/utils/customFetch';

export const deleteReview = async (id: string) => {
  const result = await customFetch(`/review/${id}`, {
    method: 'DELETE',
  });

  return result;
};
