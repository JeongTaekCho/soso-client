import { customFetch } from '@/shared/utils/customFetch';

export const getDuplicateNickname = async (nickname: string): Promise<boolean> => {
  const result = await customFetch(`/user/nickname/${nickname}`);

  return result.result;
};
