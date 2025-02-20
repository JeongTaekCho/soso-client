import { useLocationStore } from '@/shared/store/useLocationStore';
import useMapStore from '@/shared/store/useMapStore';
import { getCurrentLocation } from '@/shared/utils/getCurrentLocation';
import { useEffect } from 'react';

export const useClearMap = () => {
  const { clearMarkers, setCenter } = useMapStore();
  const { lat, lng } = useLocationStore();

  useEffect(() => {
    const clearMap = async () => {
      const currentLocation = await getCurrentLocation();

      clearMarkers();
      if (currentLocation === 'denied') {
        setCenter(lat, lng);
        return;
      }
      setCenter(currentLocation.lat, currentLocation.lng);
    };

    clearMap();
  }, []);
};
