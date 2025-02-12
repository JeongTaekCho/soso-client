'use client';

import FilterSelectButton from '@/app/my/wish/components/FilterSelectButton';
import WishProduct from '@/app/my/wish/components/WishProduct';
import BottomArrowIcon from '@/shared/components/icons/BottomArrowIcon';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { useRef, useState } from 'react';

export default function MyWishPage() {
  const [area, setArea] = useState('전체 지역');
  const [isFilter, setIsFilter] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);

  const handleChangeArea = (area: string) => {
    setArea(area);
    handleToggleFilter();
  };

  const handleToggleFilter = () => {
    setIsFilter((prev) => !prev);
  };

  useClickOutside(filterRef, () => setIsFilter(false));

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
                className="shadow-filter-select absolute right-0 top-30 z-dropdown w-[126px] rounded-12 bg-white"
              >
                <FilterSelectButton label="전체 지역" active={area === '전체 지역'} onClick={handleChangeArea} />
                <FilterSelectButton label="서울" active={area === '서울'} onClick={handleChangeArea} />
                <FilterSelectButton label="제주" active={area === '제주'} onClick={handleChangeArea} />
              </Flex>
            </div>
          )}
        </div>
        <Flex className="w-full" wrap gap={11}>
          <WishProduct />
          <WishProduct />
          <WishProduct />
          <WishProduct />
          <WishProduct />
        </Flex>
      </Flex>
    </div>
  );
}
