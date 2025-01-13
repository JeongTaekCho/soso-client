import Swiper from 'swiper';
import { useEffect, useRef } from 'react';

export function useSwiper(options: any) {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<Swiper | null>(null);

  useEffect(() => {
    if (swiperRef.current && !swiperInstance.current) {
      swiperInstance.current = new Swiper(swiperRef.current, options);
    }

    return () => {
      swiperInstance.current?.destroy();
      swiperInstance.current = null;
    };
  }, [options]);

  return { swiperRef, swiperInstance };
}
