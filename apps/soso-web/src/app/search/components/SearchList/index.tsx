'use client';

import PlaceCard from '@/shared/components/card/PlaceCard';
import Flex from '@/shared/components/layout/Flex';
import useDebounce from '@/shared/hooks/useDebounce';
import { useSearchStore } from '@/shared/store/useSearchStore';

export default function SearchList() {
  const { searchValue } = useSearchStore();

  const searchDebounceValue = useDebounce(searchValue, 300);

  return (
    <Flex direction="col" gap={18} className="mt-12 w-full">
      {!searchDebounceValue && <h3 className="font-title3_bold">내 근처 가장 인기 많은 소품샵은?</h3>}
      <Flex direction="col" className="w-full">
        <div className="w-full border-b border-gray-100">
          <PlaceCard />
        </div>
      </Flex>
    </Flex>
  );
}
