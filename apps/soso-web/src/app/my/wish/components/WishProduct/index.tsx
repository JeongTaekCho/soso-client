'use client';

import useIsMobile from '@/shared/hooks/useIsMobile';
import clsx from 'clsx';
import Image from 'next/image';

export default function WishProduct() {
  const isMobile = useIsMobile(460);

  const width = isMobile ? 'w-[calc(33.3%-7.5px)]' : 'w-[calc(25%-8.3px)]';

  return (
    <div className={clsx('flex flex-col gap-8', width)}>
      <div className="relative aspect-square w-full">
        <Image src={'/images/sample.png'} fill style={{ objectFit: 'cover' }} alt="프로덕트 이미지" />
      </div>
      <p className="max-w-full truncate text-gray-600 font-body1_m">세상에서 가장 귀여운 소품</p>
    </div>
  );
}
