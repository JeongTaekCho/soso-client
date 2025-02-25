import { getToken } from '@/app/login/callback/api/getToken';
import { GetTokenRequest } from '@/app/login/callback/types';
import { useMutation } from '@tanstack/react-query';

export const useGetTokenMutation = () => {
  return useMutation({
    mutationKey: ['getToken'],
    mutationFn: (data: GetTokenRequest) => getToken(data),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
