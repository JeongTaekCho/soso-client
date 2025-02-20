'use client';

import PlaceCard from '@/shared/components/card/PlaceCard';
import { useGetShopQuery } from '@/shared/hooks/useGetShopQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import useMapStore from '@/shared/store/useMapStore';
import { useLocationStore } from '@/shared/store/useLocationStore';
import ResearchButton from '@/app/home/components/Home/components/ResearchButton';
import SearchIcon from '@/shared/components/icons/SearchIcon';
import Link from 'next/link';
import GpsButton from '@/app/home/components/Home/components/GpsButton';
import { getCurrentLocation } from '@/shared/utils/getCurrentLocation';
import { useDialog } from '@/shared/context/DialogContext';

const NaverMap = dynamic(() => import('../../../../shared/components/layout/NaverMap'), { ssr: false });

export default function HomePage() {
  const { lat, lng, setLocation } = useLocationStore();
  const { map, addMarker, setCenter, clearMarkers } = useMapStore();
  const [isMove, setIsMove] = useState(false);
  const { openDialog } = useDialog();

  const { data: shopData } = useGetShopQuery(lat, lng);
  const swiperRef = useRef<any>(null);

  const [selectedShopId, setSelectedShopId] = useState<number | null>(null);

  const handleSlideChange = (swiper: any) => {
    const activeIndex = swiper.realIndex;
    const selectedShop = shopData?.[activeIndex];
    if (selectedShop) {
      setSelectedShopId(selectedShop.id);
      setCenter(selectedShop.lat, selectedShop.lng);
      map?.setZoom(18);
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

  const handleClickGps = async () => {
    const currentLocation = await getCurrentLocation();

    if (currentLocation === 'denied') {
      openDialog({
        type: 'alert',
        title: '위치 권한 에러',
        message: (
          <span>
            위치 권한이 비활성화 되어있습니다.
            <br />
            위치 권한을 허용해주세요.
          </span>
        ),
      });
      return;
    }

    setCenter(currentLocation.lat, currentLocation.lng);
    setIsMove(true);
  };

  useEffect(() => {
    clearMarkers();

    if (!shopData?.length || !map) {
      return;
    }

    shopData.forEach((shop) => {
      addMarker({
        id: shop.id,
        position: { lat: shop.lat, lng: shop.lng },
        icon: {
          content:
            selectedShopId === shop.id
              ? `<div style="width:48px; height:48px"><img width='48' height='48' src="/images/marker/map_active_marker.png" alt="지도 마커" ></img></div>`
              : `<div style="width:32px; height:32px"><img width='32' height='32' src="/images/marker/map_marker.png" alt="지도 마커" ></img></div>`,
        },
        zIndex: selectedShopId === shop.id ? 10 : 1,
      });
    });
  }, [shopData, map, addMarker, selectedShopId]);

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
    <div className="relative">
      <Link href="/search" className="fixed top-0 z-sticky w-full max-w-screen p-16">
        <div className="relative h-46 w-full">
          <div className="absolute left-10 top-[52%] -translate-y-1/2">
            <SearchIcon fill="#9EA4AA" />
          </div>
          <div
            style={{
              width: '100%',
              height: '52px',
            }}
          >
            <div className="h-full w-full rounded-12 bg-white px-16 py-14 pl-46 text-gray-400 font-body1_m focus:outline-main">
              찾고있는 소품샵이 있나요?
            </div>
          </div>
        </div>
      </Link>
      {isMove && <ResearchButton onClick={handleClickResearch} className="fixed left-0 top-0 z-important" />}

      <NaverMap
        markerEvent={(_marker, data) => {
          goToSlide(data.id);
        }}
        isCurrent
      />
      <div className="fixed bottom-76 left-1/2 flex w-full w-screen -translate-x-1/2 flex-col items-end gap-20 overflow-hidden layout-center">
        <div className="px-16">
          <GpsButton onClick={handleClickGps} />
        </div>
        <div className="w-full">
          {' '}
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
    </div>
  );
}
