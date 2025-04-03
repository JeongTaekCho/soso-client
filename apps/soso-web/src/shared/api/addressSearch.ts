import { AddressType } from '@/shared/types/addressType';
import axios from 'axios';

export const addressSearch = async (query: string): Promise<AddressType[]> => {
  if (!query) {
    return [];
  }

  try {
    let response = await axios.get(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${query}&page=1&size=15`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_KEY}`,
        },
      }
    );

    // 키워드 검색 결과가 없을 경우 주소 검색 호출
    if (!response.data.documents || response.data.documents.length === 0) {
      response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${query}&page=1&size=15`, {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_KEY}`,
        },
      });
    }

    // 중복 제거
    const uniqueAddresses: AddressType[] = [];
    const seenAddresses = new Set<string>();

    for (const document of response.data.documents) {
      if (!seenAddresses.has(document.address_name)) {
        seenAddresses.add(document.address_name);
        uniqueAddresses.push(document);
      }
    }

    // 최종 검색 결과 반환
    return uniqueAddresses;
  } catch (error) {
    throw new Error('주소를 가져오는데 실패했습니다.');
  }
};
