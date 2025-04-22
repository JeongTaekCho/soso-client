import Flex from '@/shared/components/layout/Flex';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import { getSafeImageUrl } from '@/shared/utils/getSafeImageUrl';
import { useState } from 'react';
import ImageSwiperModal from '@/shared/components/modal/ImageSwiperModal';

const DUMMY = [
  {
    id: 1,
    url: '/images/jojo.jpg',
  },
  {
    id: 2,
    url: '/images/default_item.svg',
  },
  {
    id: 3,
    url: '/images/jojo.jpg',
  },
  {
    id: 4,
    url: '/images/jojo.jpg',
  },
  {
    id: 5,
    url: '/images/default_item.svg',
  },
  {
    id: 6,
    url: '/images/jojo.jpg',
  },
  {
    id: 7,
    url: '/images/jojo.jpg',
  },
  {
    id: 8,
    url: '/images/jojo.jpg',
  },
  {
    id: 9,
    url: '/images/jojo.jpg',
  },
  {
    id: 10,
    url: '/images/jojo.jpg',
  },
];

export default function ReviewPhoto() {
  const [isImageViewer, setIsImageViewer] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenImageViewer = (index: number) => {
    setSelectedIndex(index);
    setIsImageViewer(true);
  };

  const handleCloseImageViewer = () => {
    setIsImageViewer(false);
  };

  return (
    <Flex direction="col" gap={8} className="w-full">
      <h4 className="text-gray-800 font-body1_m">사진/동영상</h4>
      <Swiper
        modules={[Navigation, FreeMode]}
        slidesPerView="auto"
        spaceBetween={8}
        freeMode={true}
        grabCursor={true}
        className="w-full"
      >
        {DUMMY?.map((image, index) => (
          <SwiperSlide key={`image-${image.id}`} style={{ width: 'auto' }}>
            <div onClick={() => handleOpenImageViewer(index)} className="relative h-72 w-72">
              <Image fill src={image.url} alt="리뷰 이미지" className="rounded-12 object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ImageSwiperModal
        isOpen={isImageViewer}
        onClose={handleCloseImageViewer}
        images={DUMMY?.map((image) => image.url) || []}
        initialSlide={selectedIndex}
      />
    </Flex>
  );
}
