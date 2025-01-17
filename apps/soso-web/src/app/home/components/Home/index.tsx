'use client';

import PlaceCard from '@/shared/components/card/PlaceCard';
import Header from '@/shared/components/layout/Header';
import BottomModal from '@/shared/components/modal/BottomModal';
import { useGetShopQuery } from '@/shared/hooks/useGetShopQuery';
import { useSwiper } from '@/shared/hooks/useSwiper';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const NaverMap = dynamic(() => import('../../../../shared/components/layout/NaverMap'), { ssr: false });
export default function HomePage() {
  const { data } = useGetShopQuery();

  console.log(data);

  const { swiperRef } = useSwiper({
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
  });

  return (
    <div>
      <Header type="search" top="20px" />
      <NaverMap />
      <div className="fixed bottom-76 left-1/2 w-screen -translate-x-1/2 overflow-hidden layout-center">
        <div ref={swiperRef} className="swiper-container w-full">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <PlaceCard width="100%" type="map" />
            </div>
            <div className="swiper-slide">
              <PlaceCard width="100%" type="map" />
            </div>
            <div className="swiper-slide">
              <PlaceCard width="100%" type="map" />
            </div>
            <div className="swiper-slide">
              <PlaceCard width="100%" type="map" />
            </div>
            <div className="swiper-slide">
              <PlaceCard width="100%" type="map" />
            </div>
            <div className="swiper-slide">
              <PlaceCard width="100%" type="map" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
