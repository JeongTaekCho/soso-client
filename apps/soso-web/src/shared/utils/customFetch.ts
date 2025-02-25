interface CustomFetchOptions extends RequestInit {
  body?: any;
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
  let token: string | null = null;
  if (typeof window !== 'undefined') {
    const authStorage = localStorage.getItem('auth-storage');
    if (authStorage) {
      try {
        const parsedAuth = JSON.parse(authStorage);
        token = parsedAuth?.state?.token || null;
      } catch (error) {
        console.error('토큰 파싱 오류:', error);
      }
    }
  }

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

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new CustomError(errorData?.message || '서버 오류 발생', response.status, errorData);
    }

    return response.json();
  } catch (error) {
    console.log('Fetch 오류:', error);
    throw error;
  }
};
