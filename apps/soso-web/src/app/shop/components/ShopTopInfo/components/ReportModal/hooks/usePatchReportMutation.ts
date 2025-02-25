import { patchReport } from '@/app/shop/components/ShopTopInfo/components/ReportModal/api/patchReport';
import { PatchReportRequestType } from '@/app/shop/components/ShopTopInfo/components/ReportModal/types';
import { useMutation } from '@tanstack/react-query';

export const usePatchReportMutation = () => {
  return useMutation({
    mutationKey: ['patchReport'],
    mutationFn: (data: PatchReportRequestType) => patchReport(data),
  });
};
