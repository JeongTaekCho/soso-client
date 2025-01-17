export const getCurrentLocation = (): Promise<{ lat: number; lng: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ lat: latitude, lng: longitude });
      },
      (error) => {
        reject(new Error(`Error getting location: ${error.message}`));
      },
      {
        enableHighAccuracy: true, // 높은 정확도 요청
        timeout: 5000, // 요청 타임아웃 (밀리초)
        maximumAge: 0, // 캐싱된 위치 데이터를 사용하지 않음
      }
    );
  });
};
