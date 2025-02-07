'use client';

import PlaceCard from '@/shared/components/card/PlaceCard';
import Header from '@/shared/components/layout/Header';
import { useGetShopQuery } from '@/shared/hooks/useGetShopQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import useMapStore from '@/shared/store/useMapStore';

const NaverMap = dynamic(() => import('../../../../shared/components/layout/NaverMap'), { ssr: false });

export default function HomePage() {
  const { data: shopData } = useGetShopQuery();
  const swiperRef = useRef<any>(null);

  const [currentShop, setCurrentShop] = useState<any | null>(null);
  const { map, addMarker, setCenter } = useMapStore();

  // 슬라이드 변경 이벤트 핸들러
  const handleSlideChange = (swiper: any) => {
    const activeIndex = swiper.realIndex; // 복제 슬라이드를 제외한 실제 인덱스
    const selectedShop = shopData?.[activeIndex];
    if (selectedShop) {
      setCurrentShop(selectedShop);
      if (map) {
        setCenter(selectedShop.lat, selectedShop.lng);
        map.setZoom(18);
      }
    }
  };

  // 초기 마커 추가 로직
  useEffect(() => {
    if (!shopData?.length || !map) return;

    shopData.forEach((shop) => {
      addMarker({
        id: shop.id,
        position: { lat: shop.lat, lng: shop.lng },
      });
    });
  }, [shopData, map, addMarker]);

  // 마커 클릭 시 슬라이드 이동
  const goToSlide = (shopId: number) => {
    const slideIndex = shopData?.findIndex((shop) => shop.id === shopId);
    if (slideIndex !== -1 && swiperRef.current) {
      swiperRef.current.slideToLoop(slideIndex, 300); // loop: true 환경에서 올바른 슬라이드 이동
    }
  };

  return (
    <div>
      <Header type="search" top="20px" />
      <NaverMap
        markerEvent={(_marker, data) => {
          goToSlide(data.id);
        }}
      />
      <div className="fixed bottom-76 left-1/2 w-screen -translate-x-1/2 overflow-hidden layout-center">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {shopData?.map((shop) => (
            <SwiperSlide key={shop.id}>
              <PlaceCard width="100%" type="map" data={shop} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {currentShop && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 transform bg-white p-4 shadow-lg">
          <p>{currentShop.name}</p>
          <p>{currentShop.location}</p>
        </div>
      )}
    </div>
  );
}
