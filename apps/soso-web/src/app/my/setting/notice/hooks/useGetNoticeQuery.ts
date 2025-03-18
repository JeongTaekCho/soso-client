import { getNotice } from '@/app/my/setting/notice/api/getNotice';
import { useQuery } from '@tanstack/react-query';

export const useGetNoticeQuery = () => {
  return useQuery({
    queryKey: ['notice'],
    queryFn: getNotice,
  });
};
