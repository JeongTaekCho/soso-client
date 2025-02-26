'use client';

import ProductLayout from '@/app/my/components/ProductLayout';
import { useGetMyReviewQuery } from '@/app/my/components/ProductLists/hooks/useGetMyReviewQuery';
import { useGetMyShopQuery } from '@/app/my/components/ProductLists/hooks/useGetMyShopQuery';
import { useGetMyWishQuery } from '@/app/my/components/ProductLists/hooks/useGetMyWishQuery';
import Flex from '@/shared/components/layout/Flex';

export default function ProductLists() {
  const { data: myWishData } = useGetMyWishQuery();
  const { data: myReviewData } = useGetMyReviewQuery();
  const { data: myShopData } = useGetMyShopQuery();

  console.log(myShopData);

  const myWishList =
    myWishData?.map((wish) => {
      return {
        id: wish.id,
        image: wish.image,
        name: wish.name,
        link: `/shop/${wish.id}`,
      };
    }) || [];

  const myReviewList =
    myReviewData?.map((review) => {
      return {
        id: review.id,
        image: review.shop.image,
        name: review.shop.name,
        link: `/shop/${review.shop.id}/review`,
      };
    }) || [];

  return (
    <Flex direction="col" gap={28} className="w-full">
      <ProductLayout data={myWishList} title="찜" placeholder="아직 찜한 소품샵이 없습니다." productLink="/my/wish" />
      <ProductLayout
        data={myReviewList}
        title="나의 후기"
        placeholder="아직 등록된 후기가 없습니다."
        productLink="/my/review"
      />
      <ProductLayout
        data={[]}
        title="내가 등록한 소품샵"
        placeholder="아직 등록된 소품샵이 없습니다."
        productLink="/my/shop"
      />
    </Flex>
  );
}
