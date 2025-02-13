import { customFetch } from '@/shared/utils/customFetch';

export const socialLogin = async () => {
  const result = customFetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`, {
    method: 'POST',
  });

  return result;
};
