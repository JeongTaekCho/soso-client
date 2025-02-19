'use client';

import { useGetShopDetailQuery } from '@/app/shop/hooks/useGetShopDetailQuery';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import Review from '@/shared/components/layout/Review';
import EmptyData from '@/shared/components/ui/EmptyData';
import { use } from 'react';

interface PageProps {
  params: Promise<{ id: string }>; // ✅ params가 Promise 객체임
}
export default function ShopReviewPage({ params }: PageProps) {
  const { id } = use(params);

  const { data: shopDetailData } = useGetShopDetailQuery(id);

  return (
    <div>
      <Header title="후기" type="back"></Header>
      <Flex direction="col" className="w-full px-16" gap={20}>
        <Review isMe={true} isWrite={!!shopDetailData?.userReviews.length} data={shopDetailData?.userReviews[0]} />
        {shopDetailData?.otherReviews.map((review) => <Review key={review.id} data={review} />)}
        {!shopDetailData?.otherReviews.length && !shopDetailData?.userReviews.length && (
          <EmptyData text="등록된 후기가 없습니다." />
        )}
      </Flex>
    </div>
  );
}
