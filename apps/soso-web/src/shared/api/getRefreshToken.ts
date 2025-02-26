import { customFetch } from '@/shared/utils/customFetch';

export const getRefreshToken = async (
  refreshToken: string | null,
  setToken: (token: string | null) => void,
  setRefreshToken: (token: string | null) => void
): Promise<string | null> => {
  if (!refreshToken) {
    console.error('리프레시 토큰 없음');
    return null;
  }

  try {
    const response = await customFetch('/auth/refresh', {
      method: 'POST',
      body: { refreshToken },
    });

    if (!response.ok) {
      console.error('리프레시 토큰 갱신 실패');
      return null;
    }

    setToken(response.accessToken);
    setRefreshToken(response.refreshToken);

    return response.accessToken;
  } catch (error) {
    console.error('토큰 갱신 오류:', error);
    return null;
  }
};
