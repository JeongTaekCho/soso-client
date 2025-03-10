import { PatchReviewRequestType } from '@/shared/components/layout/Review/components/ReviewWrite/types';
import { convertToFormData } from '@/shared/utils/convertToFormData';
import { customFetch } from '@/shared/utils/customFetch';

export const patchReview = async (data: PatchReviewRequestType) => {
  const formData = convertToFormData(data);

  const result = await customFetch(`/review`, {
    method: 'PATCH',
    body: formData,
  });

  return result;
};
