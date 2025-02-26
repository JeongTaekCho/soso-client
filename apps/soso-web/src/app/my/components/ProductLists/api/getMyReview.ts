import { GetMyReviewResponseType } from '@/app/my/components/ProductLists/types';
import { customFetch } from '@/shared/utils/customFetch';

export const getMyReview = async (): Promise<GetMyReviewResponseType> => {
  const result = await customFetch('/user/review');

  return result.result;
};
