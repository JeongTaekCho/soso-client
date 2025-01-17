import Swiper from 'swiper';
import { useEffect, useRef } from 'react';

export function useSwiper(options: any) {
  const swiperRef = useRef<any>(null); // Swiper 컨테이너
  const swiperInstance = useRef<Swiper | null>(null); // Swiper 인스턴스

  useEffect(() => {
    if (swiperRef.current && !swiperInstance.current) {
      swiperInstance.current = new Swiper(swiperRef.current, options);
    }

    return () => {
      swiperInstance.current?.destroy(true);
      swiperInstance.current = null;
    };
  }, [options]);

  return { swiperRef, swiperInstance: swiperInstance.current };
}
