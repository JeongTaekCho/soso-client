interface CustomFetchOptions extends RequestInit {
  body?: any;
  headers?: HeadersInit;
}

export const customFetch = async (url: string, options: CustomFetchOptions = {}, timeout = 5000): Promise<any> => {
  // ✅ localStorage에서 토큰 가져오기
  const authStorage = localStorage.getItem('auth-storage');
  let token = '';

  if (authStorage) {
    try {
      const parsedData = JSON.parse(authStorage);
      token = parsedData?.state?.token || '';
    } catch (error) {
      console.error('토큰 파싱 오류:', error);
    }
  }

  const isFormData = options.body instanceof FormData;

  // ✅ 기본 헤더 설정 (토큰이 있을 경우 Authorization 추가)
  const defaultHeaders: HeadersInit = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}), // ✅ 토큰이 있으면 추가
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
  };

  const finalOptions: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    body: isFormData ? options.body : JSON.stringify(options.body),
  };

  if (isFormData) {
    delete (finalOptions.headers as any)['Content-Type'];
  }

  try {
    const response = await fetch(url, finalOptions);

    if (!response.ok) {
      const error = new Error(`HTTP error! Status: ${response.status}`);
      (error as any).status = response.status;
      throw error;
    }

    return response.json();
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.error('Fetch request timed out');
    } else {
      console.error('Fetch API 에러:', error);
    }
    throw error;
  }
};
