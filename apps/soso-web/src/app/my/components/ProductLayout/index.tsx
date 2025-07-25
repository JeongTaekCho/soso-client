'use client'

import Flex from '@/shared/components/layout/Flex'
import ProductImage from '@/shared/components/ui/ProductImage'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper/modules'
import EmptyData from '@/shared/components/ui/EmptyData'
import LinkIcon from '@/shared/components/icons/LinkIcon'
import clsx from 'clsx'

interface Data {
  id: number | null
  image: string | null
  name: string | null
  link: string | null
  type?: number | null
}

interface ProductLayoutProps {
  data: Data[]
  title: string
  placeholder: string
  productLink: string
  type?: number
  totalData?: number
}

export default function ProductLayout({ data, title, placeholder, productLink, totalData }: ProductLayoutProps) {
  return (
    <Flex direction="col" gap={8} className="w-full">
      <Flex justify="between" align="center" className="w-full">
        <Flex align="end" gap={4}>
          <h3 className="text-black font-title4_semi">{title}</h3>
          {data?.length > 0 && <span className="text-gray-500 font-body2_m">{totalData || 0}개</span>}
        </Flex>
        <Link href={productLink} className="flex items-center gap-2 text-gray-400 font-caption">
          전체보기 <LinkIcon width="16" height="16" />
        </Link>
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
          {data.map((item, index) => (
            <SwiperSlide style={{ width: '72px' }} key={index}>
              <Link
                href={item.type === 0 ? '#' : item.link || ''}
                className={clsx('flex w-full flex-col gap-6 truncate', item.type === 0 && 'cursor-default')}
              >
                <ProductImage
                  imgUrl={item.type === 0 ? '/images/confirm.png' : item.image || '/images/default_item.svg'}
                  size={72}
                />
                <span className="block max-w-full truncate break-all px-4 text-gray-500 font-body2_m">{item.name}</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <EmptyData text={placeholder} />
      )}
    </Flex>
  )
}
