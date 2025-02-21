import { ReviewRequestType } from '@/shared/components/layout/Review/components/ReviewWrite/types';
import { convertToFormData } from '@/shared/utils/convertToFormData';
import { customFetch } from '@/shared/utils/customFetch';

export const postReview = async (data: ReviewRequestType) => {
  const formData = convertToFormData(data);

  console.log(formData);

  const result = await customFetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/review`, {
    method: 'POST',
    body: formData,
  });

  return result;
};
