'use client';

import PlaceCard from '@/shared/components/card/PlaceCard';
import Flex from '@/shared/components/layout/Flex';
import useDebounce from '@/shared/hooks/useDebounce';
import { useGetShopQuery } from '@/shared/hooks/useGetShopQuery';
import { useLocationStore } from '@/shared/store/useLocationStore';
import { useSearchStore } from '@/shared/store/useSearchStore';

export default function SearchList() {
  const { searchValue } = useSearchStore();
  const { lat, lng } = useLocationStore();
  const { data } = useGetShopQuery(lat, lng);

  const searchDebounceValue = useDebounce(searchValue, 300);

  return (
    <Flex direction="col" gap={18} className="mt-20 w-full">
      {!searchDebounceValue && <h3 className="px-20 font-title3_bold">내 근처 가장 인기 많은 소품샵은?</h3>}
      {data && data?.length > 0 ? (
        <Flex direction="col" className="w-full">
          {data?.map((shop) => (
            <div key={shop.id} className="w-full border-b border-gray-100">
              <PlaceCard data={shop} />
            </div>
          ))}
        </Flex>
      ) : (
        <Flex direction="col" justify="center" align="center" className="mt-90 w-full" gap={16}>
          <p className="text-gray-500 font-body1_m">찾고 계신 장소가 없으신가요?</p>
          <button className="h-56 w-[263px] rounded-16 bg-orange-light text-main font-body1_m">
            소중한 소품샵 제보하기
          </button>
        </Flex>
      )}
    </Flex>
  );
}
