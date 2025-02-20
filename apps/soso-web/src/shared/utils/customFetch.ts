interface CustomFetchOptions extends RequestInit {
  body?: any;
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
    credentials: 'include', // ✅ 반드시 포함 (쿠키 전송)
  };

  try {
    const response = await fetch(url, finalOptions);

    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Fetch 오류:', error);
    throw error;
  }
};
