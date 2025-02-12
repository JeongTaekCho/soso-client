'use client';

import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import Review from '@/shared/components/layout/Review';

export default function ShopReviewPage() {
  return (
    <div>
      <Header title="후기" type="back"></Header>
      <Flex direction="col" className="w-full px-16">
        <Review isBorder={false} />
        <Review isBorder={false} />
        <Review isBorder={false} />
        <Review isBorder={false} />
      </Flex>
    </div>
  );
}
