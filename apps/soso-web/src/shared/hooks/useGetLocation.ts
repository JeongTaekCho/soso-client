import { getCurrentLocation } from '@/shared/utils/getCurrentLocation';
import { useEffect, useState } from 'react';

interface LocationType {
  lat: number;
  lng: number;
}
export default function useGetLocation() {
  const [currentLocation, setCurrentLocation] = useState<LocationType>();

  useEffect(() => {
    const getLocation = async () => {
      const result = await getCurrentLocation();
      setCurrentLocation(result);
    };

    getLocation();
  }, []);

  return { currentLocation };
}
