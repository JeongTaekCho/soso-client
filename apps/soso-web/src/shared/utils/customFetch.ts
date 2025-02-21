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

export const customFetch = async (url: string, options: CustomFetchOptions = {}): Promise<any> => {
  const isFormData = options.body instanceof FormData;

  const defaultHeaders: HeadersInit = {
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
  };

  const finalOptions: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    body: isFormData ? options.body : JSON.stringify(options.body),
    credentials: 'include',
  };

  try {
    const response = await fetch(url, finalOptions);

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
