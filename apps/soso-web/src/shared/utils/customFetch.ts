interface FetchOptions extends RequestInit {}

export const customFetch = async (url: string, options: FetchOptions = {}) => {
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const finalOptions: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`, finalOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch API 에러:', error);
    throw error;
  }
};
