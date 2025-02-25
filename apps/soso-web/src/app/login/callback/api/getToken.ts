import { GetTokenRequest } from '@/app/login/callback/types';
import { customFetch } from '@/shared/utils/customFetch';

export const getToken = async (data: GetTokenRequest) => {
  const result = await customFetch(`/auth/google`, {
    method: 'POST',
    body: data,
  });

  return result;
};
