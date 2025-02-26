import { getRefreshToken } from '@/shared/api/getRefreshToken';
import { useAuthStore } from '@/shared/store/useAuthStore';

interface CustomFetchOptions extends RequestInit {
  body?: any;
  retryCount?: number; // ✅ 재시도 횟수 추가
}

export class CustomError extends Error {
  status: number;
  data: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

export const customFetch = async (endPoint: string, options: CustomFetchOptions = {}): Promise<any> => {
  const { token, setToken, refreshToken, setRefreshToken } = useAuthStore.getState();
  const retryCount = options.retryCount ?? 0;

  const isFormData = options.body instanceof FormData;

  const defaultHeaders: HeadersInit = {
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const finalOptions: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    body: isFormData ? options.body : JSON.stringify(options.body),
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${endPoint}`, finalOptions);

    if (response.status === 401 && refreshToken) {
      if (retryCount >= 2) {
        throw new CustomError('인증 실패: 다시 로그인하세요.', 401);
      }

      const newToken = await getRefreshToken(refreshToken, setToken, setRefreshToken);

      if (newToken) {
        return customFetch(endPoint, { ...options, retryCount: retryCount + 1 });
      }
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new CustomError(errorData?.message || '서버 오류 발생', response.status, errorData);
    }

    return response.json();
  } catch (error) {
    console.error('Fetch 오류:', error);
    throw error;
  }
};
