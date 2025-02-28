'use client';

import ImageSwiper from '@/shared/components/ui/ImageSwiper';
import { useEffect, useState } from 'react';

interface ImageSwiperModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialSlide?: number;
}

const ImageSwiperModal = ({ isOpen, onClose, images, initialSlide = 0 }: ImageSwiperModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  // 클라이언트 사이드에서만 렌더링되도록 함
  useEffect(() => {
    setIsMounted(true);

    // 모달이 열릴 때 body 스크롤 방지
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    // 모달이 닫힐 때 body 스크롤 복원
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isMounted) return null;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-0 z-modal bg-black layout-center">
      <div className="relative h-full w-full">
        <ImageSwiper images={images} onClose={onClose} initialSlide={initialSlide} />
      </div>
    </div>
  );
};

export default ImageSwiperModal;
