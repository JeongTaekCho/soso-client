'use client';

import { MyWishType } from '@/app/my/components/ProductLists/types';
import useIsMobile from '@/shared/hooks/useIsMobile';
import { handleImageError } from '@/shared/utils/handleImageError';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface WishProductProps {
  data: MyWishType;
}
export default function WishProduct({ data }: WishProductProps) {
  const isMobile = useIsMobile(460);

  const width = isMobile ? 'w-[calc(33.3%-7.5px)]' : 'w-[calc(25%-8.3px)]';

  return (
    <Link href={`/shop/${data.shop.id}`} className={clsx('flex flex-col gap-8', width)}>
      <div className="relative aspect-square w-full">
        <Image
          src={data.shop.image || '/images/default_item.svg'}
          fill
          style={{ objectFit: 'cover' }}
          alt="프로덕트 이미지"
          onError={handleImageError}
        />
      </div>
      <p className="max-w-full truncate text-gray-600 font-body1_m">{data.shop.name}</p>
    </Link>
  );
}
