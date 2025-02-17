import { useLocationStore } from '@/shared/store/useLocationStore';
import { useEffect } from 'react';

const LocationHandler = () => {
  const { setLocation, resetLocation } = useLocationStore();

  useEffect(() => {
    requestLocation();
  }, []);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      console.warn('Geolocation이 지원되지 않는 브라우저입니다.');
      resetLocation();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(latitude, longitude);
      },
      (error) => {
        console.warn('위치 권한이 거부되었습니다. 기본 위치를 사용합니다.');
        resetLocation(); // 기본 위치 설정
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  return null;
};

export default LocationHandler;
