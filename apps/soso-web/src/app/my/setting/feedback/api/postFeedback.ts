import { PostFeedbackRequest } from '@/app/my/setting/feedback/types';
import { customFetch } from '@/shared/utils/customFetch';

export const postFeedback = async (data: PostFeedbackRequest) => {
  const result = await customFetch('/feedback', {
    method: 'POST',
    body: data,
  });

  return result;
};
