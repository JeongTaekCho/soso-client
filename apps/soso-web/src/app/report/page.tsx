'use client';

import { useReportStore } from '@/app/report/store/useReportStore';
import Button from '@/shared/components/button/Button';
import LinkIcon from '@/shared/components/icons/LinkIcon';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import NaverMap from '@/shared/components/layout/NaverMap';
import useMapStore from '@/shared/store/useMapStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ReportPage() {
  const router = useRouter();

  const { shop } = useReportStore();
  const { setCenter, addMarker, clearMarkers } = useMapStore();

  const handleNext = () => {
    router.push('/report/write');
  };

  useEffect(() => {
    if (!shop.lat || !shop.lng) return;
    clearMarkers();
    setCenter(shop.lat, shop.lng);
    addMarker({
      id: 0,
      position: { lat: shop.lat, lng: shop.lng },
    });
  }, [shop.lat, shop.lng]);

  return (
    <div>
      <Header title="제보하기" />
      <Flex direction="col" gap={60} className="w-full py-20">
        <Flex direction="col" gap={20} className="w-full">
          <Flex direction="col" gap={12} className="w-full px-20">
            <h4 className="text-gray-500 font-body1_m">소중한 소품샵을 등록해 주세요.</h4>
          </Flex>
          <Flex direction="col" gap={12} className="w-full px-20">
            <div className="h-[185px] w-full overflow-hidden rounded-16">
              <NaverMap width="100%" height="100%" />
            </div>
            <Flex justify="between" align="center" className="w-full">
              <Link
                href="/report/address"
                className="flex h-58 w-full items-center justify-between rounded-12 border border-gray-100 bg-white px-16 text-gray-800 font-body1_m"
              >
                <span>주소로 찾기</span>
                <LinkIcon />
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="col" gap={12} className="w-full px-20">
          <h4 className="text-black font-title4_semi">이 위치가 맞나요?</h4>
          <Flex direction="col" gap={12} className="w-full">
            <Flex
              justify="center"
              align="center"
              className="h-52 w-full rounded-14 bg-[#FBF6F4] text-gray-600 font-body1_m"
            >
              {shop.location || '-'}
            </Flex>
            <Button title="여기가 맞아요" onClick={handleNext} disabled={!shop.location} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
