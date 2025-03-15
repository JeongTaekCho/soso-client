import { customFetch } from '@/shared/utils/customFetch';

export const allDeleteUserFindShop = async () => {
  const result = await customFetch('/recent-search/all', {
    method: 'DELETE',
  });

  return result;
};
