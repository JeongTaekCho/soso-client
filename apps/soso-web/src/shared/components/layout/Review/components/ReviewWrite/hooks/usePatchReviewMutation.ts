import { patchReview } from '@/shared/components/layout/Review/components/ReviewWrite/api/patchReview';
import { PatchReviewRequestType } from '@/shared/components/layout/Review/components/ReviewWrite/types';
import { useMutation } from '@tanstack/react-query';

export const usePatchReviewMutation = () => {
  return useMutation({
    mutationKey: ['patchReview'],
    mutationFn: (data: PatchReviewRequestType) => patchReview(data),
  });
};
