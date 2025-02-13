import { socialLogin } from '@/app/login/api/socialLogin';
import { useMutation } from '@tanstack/react-query';

export const useSocialLoginMutation = () => {
  return useMutation({
    mutationKey: ['socialLogin'],
    mutationFn: socialLogin,
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
