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
  const { map, addMarker, setCenter, setZoom } = useMapStore();

  const handleSlideChange = (swiper: any) => {
    const activeIndex = swiper.realIndex;
    const selectedShop = shopData?.[activeIndex];
    if (selectedShop) {
      setCurrentShop(selectedShop);
      if (map) {
        setCenter(selectedShop?.lat, selectedShop?.lng); // 지도 중심 이동
        map.setZoom(18);
      }
    }
  };

  useEffect(() => {
    if (shopData?.length === 0 || !map) return;

    shopData?.forEach((shop) => {
      addMarker({
        id: shop.id,
        position: { lat: shop.lat, lng: shop.lng },
      });
    });
  }, [shopData, map, addMarker]);

  const goToSlide = (index: number) => {
    swiperRef.current?.slideTo(index, 500);
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
            swiperRef.current = swiper; // Swiper 인스턴스 저장
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
