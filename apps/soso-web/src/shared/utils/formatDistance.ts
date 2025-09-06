export const formatDistance =(distanceKm: number): string => {
    if (distanceKm < 1) {
      const meters = Math.round(distanceKm * 1000);
      return `${meters}m`;
    } else {
      return `${distanceKm.toFixed(2)}km`;
    }
  }