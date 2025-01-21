// 좌표 변환 함수
export const convertCoord = (lat: number, lng: number): naver.maps.Point | null => {
  if (!window.naver || !naver.maps.TransCoord) {
    console.error('Naver Maps API is not loaded.');
    return null;
  }

  const wgs84Coord = new naver.maps.LatLng(lat, lng); // WGS84 좌표
  const tm128Coord = naver.maps.TransCoord.fromLatLngToTM128(wgs84Coord); // TM128 좌표

  return tm128Coord; // TM128 객체 반환
};
