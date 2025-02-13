interface CustomFetchOptions extends RequestInit {
  body?: any;
  headers?: HeadersInit;
}

export const customFetch = async (url: string, options: CustomFetchOptions = {}, timeout = 5000): Promise<any> => {
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
