import { ReviewRequestType } from '@/shared/components/layout/Review/components/ReviewWrite/types';
import { convertToFormData } from '@/shared/utils/convertToFormData';
import { customFetch } from '@/shared/utils/customFetch';

export const postReview = async (data: ReviewRequestType) => {
  const formData = convertToFormData(data);

  const result = await customFetch(`/review`, {
    method: 'POST',
    body: formData,
  });

  return result;
};
