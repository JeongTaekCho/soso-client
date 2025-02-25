import { getUserProfile } from '@/shared/api/getUserProfile';
import { UserType } from '@/shared/types/userType';
import { useQuery } from '@tanstack/react-query';

export const useGetUserProfileQuery = () => {
  return useQuery<UserType>({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
  });
};
