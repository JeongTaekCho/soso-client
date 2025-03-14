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
import { useInView } from 'react-intersection-observer';
import { ShopType } from '@/shared/types/shopType';
import Loading from '@/shared/components/loading/Loading';
import { useGetUserFindShopQuery } from '@/app/search/components/SearchList/hooks/useGetUserFindShopQuery';
import { useDeleteUserFindShopMutation } from '@/app/search/components/SearchList/hooks/useDeleteUserFindShopMutation';

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
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

  const { searchValue } = useSearchStore();
  const searchDebounceValue = useDebounce(searchValue, 300);

  const { data: shopSortData } = useGetShopQuery(currentLocation?.lat ?? null, currentLocation?.lng ?? null, true);
  const {
    data: shopSearchData,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetShopSearchListQuery(searchDebounceValue);

  const { data: userFindShopData } = useGetUserFindShopQuery();

  const { mutate: deleteFindShopMutate } = useDeleteUserFindShopMutation();

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const { token } = useAuthStore();

  const handleDeleteFindShop = (shopName: string) => {
    deleteFindShopMutate({ shopName });
  };

  useEffect(() => {
    const fetchLocation = async () => {
      const result = await getCurrentLocation();
      if (result === 'denied') {
        setCurrentLocation(null);
      } else {
        setCurrentLocation(result);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage, isLoading]);

  return (
    <Flex direction="col" gap={18} className="mt-20 w-full">
      {!searchDebounceValue && (
        <Flex direction="col" gap={12} className="mb-18 w-full px-20">
          <Flex justify="between" align="center" className="w-full">
            <h3 className="font-body1_bold">최근에 찾은 소품샵</h3>
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
              {userFindShopData?.map((shop, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                  <SearchItem
                    label={shop.shopName}
                    onClick={() => {
                      handleDeleteFindShop(shop.shopName);
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-gray-400 font-body2_m">로그인 후 가능한 서비스입니다.</p>
          )}
        </Flex>
      )}
      <Flex direction="col" gap={4} className="w-full">
        {!searchDebounceValue && <h3 className="px-20 font-body1_bold">내 근처 가장 인기 많은 소품샵은?</h3>}
        {!searchDebounceValue && (
          <Flex direction="col" className="w-full">
            {shopSortData?.map((shop) => (
              <div key={shop.id} className="w-full border-b border-gray-100">
                <PlaceCard data={shop} />
              </div>
            ))}
          </Flex>
        )}
      </Flex>
      {shopSearchData && shopSearchData?.pages[0].data.length > 0 && (
        <Flex direction="col" className="w-full">
          {shopSearchData?.pages.map((page, index) => (
            <div className="w-full" key={`page-${index}`}>
              {page.data.map((shop: ShopType) => (
                <div key={shop.id} className="w-full border-b border-gray-100">
                  <PlaceCard data={shop} />
                </div>
              ))}
            </div>
          ))}

          {!isLoading && <div ref={ref} className="h-40" />}
        </Flex>
      )}
      {shopSearchData && !shopSearchData.pages[0].data.length && (
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
      {isLoading && <Loading />}
    </Flex>
  );
}
