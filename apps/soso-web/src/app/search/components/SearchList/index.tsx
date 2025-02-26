'use client';

import SearchItem from '@/app/search/components/SearchList/components/SearchItem';
import { useGetShopSearchListQuery } from '@/app/search/components/SearchList/hooks/useGetShopSearchListQuery';
import PlaceCard from '@/shared/components/card/PlaceCard';
import Flex from '@/shared/components/layout/Flex';
import useDebounce from '@/shared/hooks/useDebounce';
import { useGetShopQuery } from '@/shared/hooks/useGetShopQuery';
import { useSearchStore } from '@/shared/store/useSearchStore';
import { getCurrentLocation } from '@/shared/utils/getCurrentLocation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { useAuthStore } from '@/shared/store/useAuthStore';

interface Location {
  lat: number;
  lng: number;
}

const SEARCH_HISTORY = [
  {
    name: '소품샵1',
  },
  {
    name: '소품샵2',
  },
  {
    name: 'A LIST OF THINGS 리스트오브띵즈',
  },
  {
    name: '소품샵4',
  },
  {
    name: '소품샵5',
  },
  {
    name: '소품샵6',
  },
  {
    name: '소품샵7',
  },
  {
    name: '소품샵8',
  },
  {
    name: '소품샵9',
  },
  {
    name: '소품샵10',
  },
  {
    name: '소품샵11',
  },
  {
    name: '소품샵12',
  },
];

export default function SearchList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

  const { searchValue } = useSearchStore();
  const searchDebounceValue = useDebounce(searchValue, 300);

  const { data: shopSortData } = useGetShopQuery(currentLocation?.lat ?? null, currentLocation?.lng ?? null, true);
  const { data: shopSearchData } = useGetShopSearchListQuery(searchDebounceValue, currentPage, 10);

  const { token } = useAuthStore();

  useEffect(() => {
    const fetchLocation = async () => {
      const result = await getCurrentLocation();
      if (result === 'denied') {
        setCurrentLocation(null); // 🔥 권한 거부 시 기본 위치 사용
      } else {
        setCurrentLocation(result);
      }
    };

    fetchLocation();
  }, []);

  // const { data: shopSortData } = useGetShopQuery(
  //   37.5445867,
  //   127.0559619,
  //   true
  // );

  return (
    <Flex direction="col" gap={18} className="mt-20 w-full">
      {!searchDebounceValue && (
        <Flex direction="col" gap={12} className="mb-18 w-full px-20">
          <Flex justify="between" align="center" className="w-full">
            <h3 className="font-title3_bold">최근에 찾은 소품샵</h3>
            {token && <button className="text-gray-400 font-caption">전체 삭제</button>}
          </Flex>
          {token ? (
            <Swiper
              modules={[Navigation, FreeMode]}
              slidesPerView="auto"
              spaceBetween={8}
              freeMode={true}
              grabCursor={true}
              className="w-full"
            >
              {SEARCH_HISTORY.map((shop, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                  <SearchItem label={shop.name} onClose={() => {}} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-gray-400 font-body2_m">로그인 후 가능한 서비스입니다.</p>
          )}
        </Flex>
      )}
      {!searchDebounceValue && <h3 className="px-20 font-title3_bold">내 근처 가장 인기 많은 소품샵은?</h3>}
      {!searchDebounceValue && (
        <Flex direction="col" className="w-full">
          {shopSortData?.map((shop) => (
            <div key={shop.id} className="w-full border-b border-gray-100">
              <PlaceCard data={shop} />
            </div>
          ))}
        </Flex>
      )}
      {shopSearchData && shopSearchData?.length > 0 && (
        <Flex direction="col" className="w-full">
          {shopSearchData?.map((shop) => (
            <div key={shop.id} className="w-full border-b border-gray-100">
              <PlaceCard data={shop} />
            </div>
          ))}
        </Flex>
      )}
      {shopSearchData && !shopSearchData.length && (
        <Flex direction="col" justify="center" align="center" className="mt-90 w-full" gap={16}>
          <p className="text-gray-500 font-body1_m">찾고 계신 장소가 없으신가요?</p>
          <Link
            href="/report"
            className="flex h-56 w-[263px] items-center justify-center rounded-16 bg-orange-light text-main font-body1_m"
          >
            소중한 소품샵 제보하기
          </Link>
        </Flex>
      )}

      {shopSortData && !shopSortData.length && !shopSearchData && (
        <Flex direction="col" justify="center" align="center" className="mt-90 w-full" gap={16}>
          <p className="text-gray-500 font-body1_m">내 주변 소품샵이 없어요</p>
          <Link
            href="/report"
            className="flex h-56 w-[263px] items-center justify-center rounded-16 bg-orange-light text-main font-body1_m"
          >
            소중한 소품샵 제보하기
          </Link>
        </Flex>
      )}
    </Flex>
  );
}
