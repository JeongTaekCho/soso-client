'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';

import 'swiper/css/zoom';
import './custom-swiper.css';
import XIcon from '@/shared/components/icons/XIcon';
import PrevIcon from '@/shared/components/ui/ImageSwiper/components/PrevIcon';
import NextIcon from '@/shared/components/ui/ImageSwiper/components/NextIcon';

interface ImageSwiperProps {
  images: string[];
  onClose?: () => void;
  initialSlide?: number;
}

const ImageSwiper = ({ images, onClose, initialSlide = 0 }: ImageSwiperProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(initialSlide);

  const handleFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  };

  const closeViewer = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`relative h-full w-full bg-black ${isFullScreen ? 'fixed inset-0 z-50' : ''}`}>
      <div className="absolute right-0 top-0 z-10 p-16">
        <button
          onClick={closeViewer}
          className="rounded-full bg-black/30 p-8 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        >
          <XIcon fill="#fff" />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Zoom]}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        zoom={{
          maxRatio: 3,
          minRatio: 1,
        }}
        initialSlide={initialSlide}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={`${imageUrl}-${index}`}>
            <div className="swiper-zoom-container flex h-full items-center justify-center">
              <div className="relative h-full w-full" onClick={handleFullScreenToggle}>
                <Image
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  fill
                  priority={index === activeIndex}
                  className="object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-prev absolute bottom-44 left-16 z-10 flex h-56 w-56 items-center justify-center rounded-14 bg-gray-800">
        <PrevIcon />
      </button>
      <button className="swiper-button-next absolute bottom-44 right-16 z-10 flex h-56 w-56 items-center justify-center rounded-14 bg-gray-800">
        <NextIcon />
      </button>

      <div className="swiper-pagination absolute bottom-16 left-1/2 z-10 -translate-x-1/2 transform"></div>
    </div>
  );
};

export default ImageSwiper;
