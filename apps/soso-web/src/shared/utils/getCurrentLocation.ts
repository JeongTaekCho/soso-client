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

          resolve('denied');
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } catch (error) {
      console.error('위치 권한 확인 중 오류 발생:', error);
    }
  });
};
