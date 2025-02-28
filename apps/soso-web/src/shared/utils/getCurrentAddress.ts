export const getCurrentAddress = async (lat: number, lng: number): Promise<string | undefined> => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
    );

    const data = await response.json();
    if (data && data.display_name) {
      return formatKoreanRoadAddress(data.address);
    }

    return undefined;
  } catch (error) {
    console.error('OpenStreetMap API 오류:', error);
    return undefined;
  }
};

const formatKoreanRoadAddress = (addressData: any): string => {
  const {
    road, // 도로명
    house_number, // 건물번호
    borough, // 구
    city, // 시
  } = addressData;

  const getFullCityName = (cityName: string): string => {
    const cityMap: { [key: string]: string } = {
      서울: '서울특별시',
      부산: '부산광역시',
      대구: '대구광역시',
      인천: '인천광역시',
      광주: '광주광역시',
      대전: '대전광역시',
      울산: '울산광역시',
      세종: '세종특별자치시',
      경기: '경기도',
      강원: '강원도',
      충북: '충청북도',
      충남: '충청남도',
      전북: '전라북도',
      전남: '전라남도',
      경북: '경상북도',
      경남: '경상남도',
      제주: '제주특별자치도',
    };

    return cityMap[cityName] || cityName;
  };

  const cleanHouseNumber = house_number ? house_number.replace(/,/g, '').trim() : '';

  const fullCityName = city ? getFullCityName(city) : '';

  let formattedAddress = '';

  if (fullCityName) {
    formattedAddress += fullCityName;
  }

  if (borough) {
    formattedAddress += ` ${borough}`;
  }

  if (road) {
    formattedAddress += ` ${road}`;

    if (cleanHouseNumber) {
      formattedAddress += ` ${cleanHouseNumber}`;
    }
  }

  return formattedAddress.trim();
};
