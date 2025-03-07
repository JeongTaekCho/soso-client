'use client';

import { useGetMyWishQuery } from '@/app/my/components/ProductLists/hooks/useGetMyWishQuery';
import FilterSelectButton from '@/app/my/wish/components/FilterSelectButton';
import WishProduct from '@/app/my/wish/components/WishProduct';
import BottomArrowIcon from '@/shared/components/icons/BottomArrowIcon';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import Loading from '@/shared/components/loading/Loading';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { useInView } from 'react-intersection-observer';
import { useRef, useState, useEffect } from 'react';

export default function MyWishPage() {
  const [area, setArea] = useState('전체 지역');
  const [isFilter, setIsFilter] = useState(false);

  const { data: myWishData, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useGetMyWishQuery(15);

  const filterRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const handleChangeArea = (area: string) => {
    setArea(area);
    handleToggleFilter();
  };

  const handleToggleFilter = () => {
    setIsFilter((prev) => !prev);
  };

  useClickOutside(filterRef, () => setIsFilter(false));

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage, isLoading]);

  const allWishItems = myWishData?.pages.flatMap((page) => page.data) || [];

  return (
    <div>
      <Header title="내가 찜한 소품샵" type="back" />
      <Flex direction="col" align="end" gap={20} className="w-full px-16 pb-28 pt-12">
        <div className="relative">
          <button className="flex items-center gap-4" onClick={handleToggleFilter}>
            <span className="text-gray-500 font-body2_m">{area}</span>
            <BottomArrowIcon />
          </button>
          {isFilter && (
            <div ref={filterRef}>
              <Flex
                direction="col"
                className="absolute right-0 top-30 z-dropdown w-[126px] rounded-12 bg-white shadow-filter-select"
              >
                <FilterSelectButton label="전체 지역" active={area === '전체 지역'} onClick={handleChangeArea} />
                <FilterSelectButton label="서울" active={area === '서울'} onClick={handleChangeArea} />
                <FilterSelectButton label="제주" active={area === '제주'} onClick={handleChangeArea} />
              </Flex>
            </div>
          )}
        </div>

        <Flex className="w-full" wrap gap={11}>
          {allWishItems.map((wish) => (
            <WishProduct key={wish.shop.id} data={wish} />
          ))}
        </Flex>

        {!isLoading && <div ref={ref} className="h-40" />}

        {isLoading && <Loading />}

        {myWishData && allWishItems.length === 0 && (
          <Flex direction="col" justify="center" align="center" className="mt-90 w-full" gap={16}>
            <p className="text-gray-500 font-body1_m">찜한 소품샵이 없습니다.</p>
          </Flex>
        )}
      </Flex>
    </div>
  );
}
