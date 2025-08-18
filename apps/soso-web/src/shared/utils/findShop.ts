/**
 * 카카오 지도 웹 길안내 URL 생성 함수 (웹뷰 최적화)
 * @param name 목적지 이름
 * @param lat 위도
 * @param lng 경도
 * @returns 카카오 지도 길안내 URL
 */
export const kakaoFindUrl = (name: string, lat: number | undefined, lng: number | undefined) => {
  if (!name || !lat || !lng) return ''

  // 키워드 인코딩
  const encodedName = encodeURIComponent(name)

  // 모바일 기기 감지
  const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  const url = isMobile ? 'kakaomap://' : 'http://m.map.kakao.com/scheme/'
  if (lat && lng) {
    // 모바일 버전 URL (모바일 기기 또는 웹뷰용)
    return `${url}route?en=${encodedName}&ep=${lat},${lng}&by=foot`
  } else {
    // 좌표가 없는 경우 검색만 수행
    return `${url}search?q=${encodedName}`
  }
}

/**
 * 네이버 지도 검색 URL 생성 함수 (반응형)
 * @param name 장소명
 * @param lat 위도
 * @param lng 경도
 * @param address 주소 (선택적)
 * @returns 네이버 지도 URL (PC 또는 모바일 버전)
 */
export const naverFindUrl = (name: string, lat: number | undefined, lng: number | undefined, address?: string) => {
  if (!name) return ''

  // 검색어 인코딩 (장소명만 있거나 주소와 함께)
  const searchQuery = address ? encodeURIComponent(`${name} ${address}`) : encodeURIComponent(name)

  // 모바일 기기 감지
  const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  if (isMobile) {
    // 모바일 버전 URL (모바일 기기 또는 웹뷰용)
    return `https://m.map.naver.com/search2/search.naver?query=${searchQuery}&sm=hty&style=v5`
  } else {
    // PC 버전 URL
    // 좌표가 있는 경우 지도 중심점 설정
    if (lat && lng) {
      return `https://map.naver.com/p/search/${searchQuery}?c=${lng},${lat},15,0,0,0,dh`
    }
    // 좌표가 없는 경우 검색만 수행
    return `https://map.naver.com/p/search/${searchQuery}`
  }
}

/**
 * 네이버 지도 길안내 URL 생성 함수 (반응형)
 * @param name 장소명
 * @param lat 위도
 * @param lng 경도
 * @returns 네이버 길안내 URL (PC 또는 모바일 버전)
 */
export const naverDirectionUrl = (name: string, lat: number | undefined, lng: number | undefined) => {
  if (!name || !lat || !lng) return ''

  const encodedName = encodeURIComponent(name)

  // 모바일 기기 감지
  const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  if (isMobile) {
    // 모바일 길찾기 URL
    return `https://m.map.naver.com/directions/#/poiSearch/destination/${encodedName}`
  } else {
    // PC 길찾기 URL
    return `https://map.naver.com/p/directions/-/-/${encodedName},${lng},${lat}/-/-/-/-?c=${lng},${lat},15`
  }
}
