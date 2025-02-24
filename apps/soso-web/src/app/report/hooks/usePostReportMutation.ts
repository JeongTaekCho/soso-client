import { postReport } from '@/app/report/api/postReport';
import { ReportRequestType } from '@/app/report/store/useReportStore';
import { useMutation } from '@tanstack/react-query';

export const usePostReportMutation = () => {
  return useMutation({
    mutationKey: ['postReport'],
    mutationFn: (data: ReportRequestType) => postReport(data),
    onSuccess: () => {
      console.log('완료');
    },
  });
};
