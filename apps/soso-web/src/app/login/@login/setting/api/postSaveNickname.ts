import { customFetch } from '@/shared/utils/customFetch';
import { FieldValues } from 'react-hook-form';

export const postSaveNickname = async (data: FieldValues) => {
  const result = await customFetch('/user/nickname', {
    method: 'POST',
    body: data,
  });

  return result;
};
