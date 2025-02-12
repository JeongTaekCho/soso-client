'use client';

import Flex from '@/shared/components/layout/Flex';
import ProductImage from '@/shared/components/ui/ProductImage';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';

interface ProductLayoutProps {
  data: any;
  title: string;
  placeholder: string;
}

export default function ProductLayout({ data, title, placeholder }: ProductLayoutProps) {
  return (
    <Flex direction="col" gap={8} className="w-full">
      <Flex align="end" gap={4}>
        <h3 className="text-black font-title4_semi">{title}</h3>
        {data?.length > 0 && <span className="text-gray-500 font-body2_m">{data?.length || 0}개</span>}
      </Flex>
      {data?.length > 0 ? (
        <Swiper
          modules={[Navigation, FreeMode]}
          slidesPerView="auto"
          spaceBetween={8}
          freeMode={true}
          grabCursor={true}
          className="w-full"
        >
          {data.map((item: any, index: number) => (
            <SwiperSlide style={{ width: '72px' }} key={index}>
              <Link href={'/my/wish'} className="flex w-full flex-col gap-6 truncate">
                <ProductImage size={72} />
                <span className="block max-w-full truncate break-all px-4 text-gray-500 font-body2_m">{item.name}</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="w-full rounded-12 bg-gray-50 px-18 py-16 text-gray-400 font-body2_m">{placeholder}</div>
      )}
    </Flex>
  );
}
