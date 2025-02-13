export const getCurrentLocation = (): Promise<{ lat: number; lng: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      console.warn('Geolocation is not supported by this browser.');
      resolve({ lat: 37.4979, lng: 127.0276 }); // ✅ 기본 위치 (서울 강남)
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ lat: latitude, lng: longitude });
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          console.warn('User denied Geolocation. Using default location.');
          resolve({ lat: 37.5665, lng: 126.978 }); // ✅ 기본 위치 반환
        } else {
          reject(new Error(`Error getting location: ${error.message}`));
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  });
};
