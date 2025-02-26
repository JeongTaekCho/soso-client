import { getUserProfile } from '@/shared/api/getUserProfile';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { UserType } from '@/shared/types/userType';
import { useQuery } from '@tanstack/react-query';

export const useGetUserProfileQuery = () => {
  const { token } = useAuthStore();

  return useQuery<UserType>({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
    enabled: !!token,
  });
};
