'use client'

import ProductLayout from '@/app/my/components/ProductLayout'
import { useGetMyReviewQuery } from '@/app/my/components/ProductLists/hooks/useGetMyReviewQuery'
import { useGetMyShopQuery } from '@/app/my/components/ProductLists/hooks/useGetMyShopQuery'
import { useGetMyWishQuery } from '@/app/my/components/ProductLists/hooks/useGetMyWishQuery'
import Flex from '@/shared/components/layout/Flex'

export default function ProductLists() {
  const { data: myWishData } = useGetMyWishQuery(10)
  const { data: myReviewData } = useGetMyReviewQuery(10)
  const { data: myShopData } = useGetMyShopQuery(10)

  const myWishList =
    myWishData?.pages[0].data.map((wish) => {
      return {
        id: wish.shop.id,
        image: wish.shop.image,
        name: wish.shop.name,
        link: `/shop/${wish.shop.id}`,
      }
    }) || []

  const myReviewList =
    myReviewData?.pages[0].data.map((review) => {
      return {
        id: review.id,
        image: review.shop.image,
        name: review.shop.name,
        link: `/shop/${review.shop.id}/review`,
      }
    }) || []

  const myShopList =
    myShopData?.pages[0].data.map((shop) => {
      return {
        id: shop.shop.id,
        image: shop.shop.image,
        name: shop.shop.name,
        link: `/shop/${shop.shop.id}`,
        type: shop.type,
      }
    }) || []

  return (
    <Flex direction="col" gap={28} className="w-full">
      <ProductLayout
        data={myWishList}
        totalData={myWishData?.pages[0].pageInfo.totalElements}
        title="찜"
        placeholder="아직 찜한 소품샵이 없습니다."
        productLink="/my/wish"
      />
      <ProductLayout
        data={myReviewList}
        totalData={myReviewData?.pages[0].pageInfo.totalElements}
        title="나의 후기"
        placeholder="아직 등록된 후기가 없습니다."
        productLink="/my/review"
      />
      <ProductLayout
        data={myShopList}
        totalData={myShopData?.pages[0].pageInfo.totalElements}
        title="내가 알린 소품샵"
        placeholder="아직 등록된 소품샵이 없습니다."
        productLink="/my/shop"
      />
    </Flex>
  )
}
