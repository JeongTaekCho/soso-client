import { postReviewReport } from '@/shared/components/layout/Review/components/ReviewReportModal/api/postReviewReport';
import { PostReviewReportRequest } from '@/shared/components/layout/Review/components/ReviewReportModal/types';
import { useMutation } from '@tanstack/react-query';

export const usePostReviewReportMutation = () => {
  return useMutation({
    mutationKey: ['postReviewReport'],
    mutationFn: (data: PostReviewReportRequest) => postReviewReport(data),
  });
};
