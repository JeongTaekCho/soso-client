'use client';

import MyReview from '@/app/my/review/components/MyReview';
import Divider from '@/shared/components/divider/Divider';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import clsx from 'clsx';
import { MouseEvent, useState } from 'react';

export default function MyReviewPage() {
  const [isLatest, setIsLatest] = useState(true);

  const handleClickFilter = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    if (!target) return;
    const name = target.name;

    if (name === 'latest') {
      setIsLatest(true);
      return;
    }

    if (name === 'old') {
      setIsLatest(false);
    }
  };

  return (
    <div>
      <Header title="나의 후기" type="back" />
      <Flex direction="col" className="w-full">
        <Flex justify="end" align="center" gap={8} className="w-full px-16">
          <button
            onClick={handleClickFilter}
            name="latest"
            className={clsx('font-body2_m', isLatest ? 'text-main' : 'text-gray-400')}
          >
            최신순
          </button>
          <Divider width="1px" height="11px" bgColor="#9EA4AA" />
          <button
            onClick={handleClickFilter}
            name="old"
            className={clsx('font-body2_m', isLatest ? 'text-gray400' : 'text-main')}
          >
            오래된 순
          </button>
        </Flex>
        <Flex direction="col" className="w-full">
          <div className="group w-full border-b-[10px] border-gray-50 py-20 last:border-none">
            <MyReview />
          </div>
          <div className="group w-full border-b-[10px] border-gray-50 py-20 last:border-none">
            <MyReview />
          </div>
          <div className="group w-full border-b-[10px] border-gray-50 py-20 last:border-none">
            <MyReview />
          </div>
          <div className="group w-full border-b-[10px] border-gray-50 py-20 last:border-none">
            <MyReview />
          </div>
        </Flex>
      </Flex>
    </div>
  );
}
