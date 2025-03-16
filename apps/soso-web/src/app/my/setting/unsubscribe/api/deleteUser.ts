import { DeleteUserRequest } from '@/app/my/setting/unsubscribe/types';
import { customFetch } from '@/shared/utils/customFetch';

export const deleteUser = async (data: DeleteUserRequest) => {
  const result = customFetch(`/user/${data.uuid}?deleteType=${data.deleteType}`, {
    method: 'DELETE',
  });

  return result;
};
