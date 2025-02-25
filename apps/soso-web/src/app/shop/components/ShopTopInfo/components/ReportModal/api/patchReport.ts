import { PatchReportRequestType } from '@/app/shop/components/ShopTopInfo/components/ReportModal/types';
import { customFetch } from '@/shared/utils/customFetch';

export const patchReport = async (data: PatchReportRequestType) => {
  const result = await customFetch('/shop/report', {
    method: 'PATCH',
    body: data,
  });

  return result;
};
