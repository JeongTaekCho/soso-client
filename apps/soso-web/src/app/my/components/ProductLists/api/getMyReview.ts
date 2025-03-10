import { GetMyReviewResponse } from '@/app/my/components/ProductLists/types';
import { customFetch } from '@/shared/utils/customFetch';

export const getMyReview = async (page: number, limit: number, sort: 'DESC' | 'ASC'): Promise<GetMyReviewResponse> => {
  const result = await customFetch(`/user/review?page=${page}&limit=${limit}&sort=${sort}`);

  return result.result;
};
