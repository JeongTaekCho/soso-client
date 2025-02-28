/**
 * 기기의 기본 지도 앱으로 길찾기 실행
 * @param name 목적지 이름
 * @param lat 위도
 * @param lng 경도
 * @param address 주소 (선택적)
 * @returns 지도 앱 URL
 */
export const openNativeMapNavigation = (name: string, lat: number, lng: number, address?: string) => {
  if (!lat || !lng) return;

  // iOS 또는 macOS에서는 Apple Maps 사용
  const isApple = /iPhone|iPad|iPod|Mac/i.test(navigator.userAgent);
  // Android 기기 감지
  const isAndroid = /Android/i.test(navigator.userAgent);

  // 주소 인코딩
  const encodedName = encodeURIComponent(name);
  const encodedAddress = address ? encodeURIComponent(address) : encodedName;

  let mapUrl = '';

  if (isApple) {
    // Apple Maps URL 스킴 (iOS, macOS)
    mapUrl = `maps://?daddr=${lat},${lng}&q=${encodedName}`;
  } else if (isAndroid) {
    // Google Maps URL 스킴 (Android)
    mapUrl = `geo:${lat},${lng}?q=${encodedAddress}`;

    // 대체: 구글 지도 앱으로 직접 연결
    // mapUrl = `google.navigation:q=${lat},${lng}&mode=d`;
  } else {
    // 데스크톱이나 다른 기기에서는 구글 지도 웹 버전 사용
    mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encodedName}&travelmode=driving`;
  }

  // URL 열기
  window.open(mapUrl, '_system');

  return mapUrl;
};

/**
 * 선택 가능한 지도 앱으로 이동하는 옵션 제공 함수
 * @param name 장소명
 * @param lat 위도
 * @param lng 경도
 * @param address 주소 (선택적)
 */
export const openMapOptions = (name: string, lat: number | undefined, lng: number | undefined, address?: string) => {
  if (!lat || !lng) return;

  // 모바일 기기 감지
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isAndroid = /Android/i.test(navigator.userAgent);

  // 인코딩된 이름과 주소
  const encodedName = encodeURIComponent(name);
  const encodedAddress = address ? encodeURIComponent(address) : encodedName;

  if (isMobile) {
    // 네이티브 앱 URL 준비
    const urls = {
      // 네이버 지도 앱
      naver: isIOS
        ? `nmap://place?lat=${lat}&lng=${lng}&name=${encodedName}&appname=com.example.myapp`
        : `nmap://place?lat=${lat}&lng=${lng}&name=${encodedName}`,

      // 카카오맵 앱
      kakao: `kakaomap://look?p=${lat},${lng}`,

      // 구글 지도 앱
      google: isAndroid
        ? `comgooglemaps://?daddr=${lat},${lng}&q=${encodedName}`
        : `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`,

      // 기본 지도 앱
      default: isIOS ? `maps://?daddr=${lat},${lng}&q=${encodedName}` : `geo:${lat},${lng}?q=${encodedAddress}`,
    };

    // 앱 선택 인터페이스 구현 (웹 앱에서는 JavaScript로 구현해야 함)
    // 여기서는 기본 지도 앱만 실행
    window.open(urls.default, '_system');

    return urls;
  } else {
    // 데스크톱에서는 웹 버전 사용
    const webUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
    window.open(webUrl, '_blank');

    return webUrl;
  }
};
