import { getWishRegion } from '@/app/my/wish/api/getWishRegion';
import { useQuery } from '@tanstack/react-query';

export const useGetWishRegionQuery = () => {
  return useQuery({
    queryKey: ['wishRegion'],
    queryFn: getWishRegion,
  });
};
