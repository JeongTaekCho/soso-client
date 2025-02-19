'use client';

import { useGetShopSearchListQuery } from '@/app/search/components/SearchList/hooks/useGetShopSearchListQuery';
import PlaceCard from '@/shared/components/card/PlaceCard';
import Flex from '@/shared/components/layout/Flex';
import useDebounce from '@/shared/hooks/useDebounce';
import { useSearchStore } from '@/shared/store/useSearchStore';
import Link from 'next/link';
import { useState } from 'react';

export default function SearchList() {
  const [currentPage, setCurrentPage] = useState(1);

  const { searchValue } = useSearchStore();

  const searchDebounceValue = useDebounce(searchValue, 300);

  const { data: shopSearchData } = useGetShopSearchListQuery(searchDebounceValue, currentPage, 10);

  console.log(shopSearchData);

  return (
    <Flex direction="col" gap={18} className="mt-20 w-full">
      {!searchDebounceValue && <h3 className="px-20 font-title3_bold">내 근처 가장 인기 많은 소품샵은?</h3>}
      {shopSearchData && shopSearchData?.length > 0 ? (
        <Flex direction="col" className="w-full">
          {shopSearchData?.map((shop) => (
            <div key={shop.id} className="w-full border-b border-gray-100">
              <PlaceCard data={shop} />
            </div>
          ))}
        </Flex>
      ) : (
        <Flex direction="col" justify="center" align="center" className="mt-90 w-full" gap={16}>
          <p className="text-gray-500 font-body1_m">찾고 계신 장소가 없으신가요?</p>
          <Link
            href="/report"
            className="flex h-56 w-[263px] items-center justify-center rounded-16 bg-orange-light text-main font-body1_m"
          >
            소중한 소품샵 제보하기
          </Link>
        </Flex>
      )}
    </Flex>
  );
}
