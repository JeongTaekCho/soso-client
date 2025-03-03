'use client';

import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import ShopInfo from '@/shared/components/ui/ShopInfo';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

export default function MyShopPage() {
  const router = useRouter();

  const handleLink = () => {
    router.push('/shop/20');
  };

  return (
    <div>
      <Header title="내가 등록한 소품샵" type="back" />
      <Flex direction="col" className="w-full">
        <button
          onClick={handleLink}
          className="flex w-full items-center justify-between border-b border-gray-100 px-16 py-18"
        >
          <ShopInfo name="가게 이름" date="2024.01.01" imgUrl="" />
          <div className={clsx('block w-86 py-6 font-caption', 'rounded-8 bg-gray-50')}>최초 제보</div>
        </button>
        <button
          onClick={handleLink}
          disabled
          className="flex w-full items-center justify-between border-b border-gray-100 px-16 py-18"
        >
          <ShopInfo name="가게 이름" date="2024.01.01" imgUrl="" disabled />
          <div className={clsx('block w-86 py-6 font-caption', 'rounded-8 bg-gray-50')}>최초 제보</div>
        </button>
      </Flex>
    </div>
  );
}
