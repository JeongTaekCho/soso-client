export const getDistance = (lat1: number, lng1: number, lat2: number, lng2: number): string | undefined => {
  try {
    const toRadians = (degree: number) => (degree * Math.PI) / 180;

    const earthRadius = 6371e3; // 지구 반지름 (미터 단위)
    const φ1 = toRadians(lat1);
    const φ2 = toRadians(lat2);
    const Δφ = toRadians(lat2 - lat1);
    const Δλ = toRadians(lng2 - lng1);

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c; // 거리 (미터 단위)

    // 1000m 이상은 km 단위로 변환
    if (distance >= 1000) {
      return `${(distance / 1000).toFixed(2)} km`;
    } else {
      return `${isNaN(Number(distance.toFixed(0))) ? '-' : distance.toFixed(0)} m`;
    }
  } catch (err) {
    console.log(err);
  }
};
