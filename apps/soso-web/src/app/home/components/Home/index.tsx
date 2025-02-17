'use client';

import PlaceCard from '@/shared/components/card/PlaceCard';
import Header from '@/shared/components/layout/Header';
import { useGetShopQuery } from '@/shared/hooks/useGetShopQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import useMapStore from '@/shared/store/useMapStore';
import { useLocationStore } from '@/shared/store/useLocationStore';
import ResearchButton from '@/app/home/components/Home/components/ResearchButton';

const NaverMap = dynamic(() => import('../../../../shared/components/layout/NaverMap'), { ssr: false });

export default function HomePage() {
  const { lat, lng, setLocation } = useLocationStore();
  const { map, addMarker, setCenter, clearMarkers } = useMapStore();
  const [isMove, setIsMove] = useState(false);

  const { data: shopData } = useGetShopQuery(lat, lng);
  const swiperRef = useRef<any>(null);

  const [currentShop, setCurrentShop] = useState<any | null>(null);

  const handleSlideChange = (swiper: any) => {
    const activeIndex = swiper.realIndex;
    const selectedShop = shopData?.[activeIndex];
    if (selectedShop) {
      setCurrentShop(selectedShop);
      if (map) {
        setCenter(selectedShop.lat, selectedShop.lng);
        map.setZoom(18);
      }
    }
  };

  const handleClickResearch = () => {
    const location = map?.getCenter();

    setLocation(Number(location?.lat()), Number(location?.lng()));
    setIsMove(false);
  };

  const goToSlide = (shopId: number) => {
    const slideIndex = shopData?.findIndex((shop) => shop.id === shopId);
    if (slideIndex !== -1 && swiperRef.current) {
      swiperRef.current.slideToLoop(slideIndex, 300);
    }
  };

  useEffect(() => {
    if (!shopData?.length || !map) {
      clearMarkers();
      return;
    }

    shopData.forEach((shop) => {
      addMarker({
        id: shop.id,
        position: { lat: shop.lat, lng: shop.lng },
      });
    });
  }, [shopData, map, addMarker]);

  useEffect(() => {
    if (shopData?.length) {
      setCenter(shopData?.[0].lat, shopData?.[0].lng);
    } else {
      setCenter(lat, lng);
    }
  }, [shopData, lat, lng]);

  useEffect(() => {
    if (!map) return;

    const handleDrag = () => {
      const center = map.getCenter();
      setCenter(center.lat(), center.lng());
      setIsMove(true);
    };

    naver.maps.Event.addListener(map, 'dragend', handleDrag);
  }, [map]);

  return (
    <div>
      <Header type="search" top="20px" />
      {isMove && <ResearchButton onClick={handleClickResearch} className="fixed left-0 top-0 z-important" />}

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
    </div>
  );
}
