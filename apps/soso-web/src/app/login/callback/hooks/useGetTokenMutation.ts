import { getToken } from '@/app/login/callback/api/getToken';
import { GetTokenRequestType } from '@/app/login/callback/types';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useGetTokenMutation = () => {
  const router = useRouter();
  const { setToken, setRefreshToken } = useAuthStore();

  return useMutation({
    mutationKey: ['getToken'],
    mutationFn: (data: GetTokenRequestType) => getToken(data),
    onSuccess: (data) => {
      setToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      router.push('/');
    },
  });
};
