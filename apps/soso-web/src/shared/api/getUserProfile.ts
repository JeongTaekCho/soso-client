import { UserType } from '@/shared/types/userType';
import { customFetch } from '@/shared/utils/customFetch';

export const getUserProfile = async (): Promise<UserType> => {
  const result = await customFetch(`/user/profile`);

  return result.result;
};
