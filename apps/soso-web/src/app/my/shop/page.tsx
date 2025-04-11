'use client';

import { useGetMyShopQuery } from '@/app/my/components/ProductLists/hooks/useGetMyShopQuery';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import Loading from '@/shared/components/loading/Loading';
import ShopInfo from '@/shared/components/ui/ShopInfo';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function MyShopPage() {
  const router = useRouter();

  // useInfiniteQuery로 변경된 훅 사용
  const { data: myShopData, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useGetMyShopQuery(10);

  // 무한 스크롤을 위한 InView 설정
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  // 숍 상세 페이지로 이동하는 함수
  const handleLink = (shopId: number) => {
    router.push(`/shop/${shopId}`);
  };

  // inView 상태가 변경될 때 다음 페이지 데이터 로드
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage, isLoading]);

  // 모든 페이지의 데이터를 하나의 배열로 펼치기
  const allShops = myShopData?.pages.flatMap((page) => page.data) || [];

  return (
    <div>
      <Header title="내가 알린 소품샵" type="back" />
      <Flex direction="col" className="w-full">
        {allShops.map((data, index) => (
          <button
            key={`shop-${data.shop.id}-${index}`}
            onClick={() => handleLink(data.shop.id)}
            disabled={data.type === 0}
            className="flex w-full items-center justify-between border-b border-gray-100 px-16 py-18"
          >
            <ShopInfo
              name={data.shop.name}
              date={'2024.01.01'}
              disabled={data.type === 0}
              imgUrl={data.shop.image || ''}
            />
            <div className={clsx('block w-86 py-6 font-caption', 'rounded-8 bg-gray-50')}>
              {data.type === 0 ? '최초 제보' : data.type === 1 ? '운영 정보 수정' : '판매 정보 수정'}
            </div>
          </button>
        ))}

        {/* 무한 스크롤을 위한 관찰 요소 */}
        {!isLoading && <div ref={ref} className="h-40" />}

        {/* 로딩 상태 표시 */}
        {isLoading && <Loading />}

        {/* 데이터가 없을 때 표시할 내용 */}
        {myShopData && allShops.length === 0 && (
          <Flex direction="col" justify="center" align="center" className="mt-90 w-full" gap={16}>
            <p className="text-center text-gray-400 font-body1_m">
              아직 내가 알린 소품샵이 없어요. <br />
              새로운 소품샵을 소소에 알려주세요!
            </p>
          </Flex>
        )}
      </Flex>
    </div>
  );
}
