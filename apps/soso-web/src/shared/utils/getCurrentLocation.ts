export const getCurrentLocation = async (): Promise<{ lat: number; lng: number } | 'denied'> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      console.error('Geolocation을 지원하지 않는 브라우저입니다.');
      return reject(new Error('Geolocation을 지원하지 않는 브라우저입니다.'));
    }

    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.warn('위치 정보를 가져오는 중 오류 발생:', error.message);

          // 오류 발생 시 기본 위치(서울 시청) 반환
          resolve('denied');
        },
        {
          enableHighAccuracy: true, // 더 정확한 위치 정보 요청
          timeout: 5000, // 5초 이상 걸리면 실패 처리
          maximumAge: 0, // 캐시된 위치 정보를 사용하지 않음
        }
      );
    } catch (error) {
      console.error('위치 권한 확인 중 오류 발생:', error);
    }
  });
};
