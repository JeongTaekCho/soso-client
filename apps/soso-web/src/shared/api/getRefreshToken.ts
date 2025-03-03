export const getRefreshToken = async (
  refreshToken: string | null,
  setToken: (token: string | null) => void,
  setRefreshToken: (token: string | null) => void,
  clearToken: () => void
): Promise<string | null> => {
  if (!refreshToken) {
    return null;
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    // ✅ 응답 데이터 JSON 파싱
    const { result } = await response.json();

    // ✅ 정상적인 accessToken과 refreshToken이 반환되었을 경우
    if (response.ok && result?.accessToken && result?.refreshToken) {
      setToken(result.accessToken);
      setRefreshToken(result.refreshToken);
      return result.accessToken;
    }

    // ❌ 실패 시 토큰 삭제
    console.log('🚨 리프레시 토큰 갱신 실패');
    clearToken();
  } catch (error) {
    console.error('🚨 토큰 갱신 중 오류 발생:', error);
    clearToken();
  }

  return null;
};
