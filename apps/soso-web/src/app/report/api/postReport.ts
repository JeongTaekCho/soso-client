import { ReportRequestType } from '@/app/report/store/useReportStore';
import { customFetch } from '@/shared/utils/customFetch';

export const postReport = async (data: ReportRequestType) => {
  const result = customFetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/submit`, {
    method: 'POST',
    body: data,
  });

  return result;
};
