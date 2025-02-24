'use client';

import { useReportStore } from '@/app/report/store/useReportStore';
import Button from '@/shared/components/button/Button';
import LinkIcon from '@/shared/components/icons/LinkIcon';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import NaverMap from '@/shared/components/layout/NaverMap';
import { CURRENT_LOCATION_MARKER_ID, REPORT_MARKER_ID } from '@/shared/constant/location';
import useMapStore from '@/shared/store/useMapStore';
import { getCurrentLocation } from '@/shared/utils/getCurrentLocation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ReportPage() {
  const router = useRouter();

  const { shop } = useReportStore();
  const { map, setCenter, addMarker, clearMarkers } = useMapStore();

  const handleNext = () => {
    router.push('/report/write');
  };

  const handleAddressSearchLink = () => {
    router.push('/report/address');
  };

  useEffect(() => {
    const currentAddMarker = async () => {
      const currentLocation = await getCurrentLocation();
      if ((!shop.lat || !shop.lng) && currentLocation !== 'denied') {
        console.log(currentLocation.lat);
        setCenter(currentLocation.lat, currentLocation.lng);
      }

      if (currentLocation === 'denied') return;
      addMarker({
        id: CURRENT_LOCATION_MARKER_ID,
        position: { lat: currentLocation.lat, lng: currentLocation.lng },
        icon: {
          content: `<div style="width:24px; height:24px" class="animate-glow"><img width='24' height='24' src="/images/marker/current_marker.svg" alt="지도 마커" ></img></div>`,
        },
        zIndex: 20,
      });
    };

    clearMarkers();
    currentAddMarker();

    if (!shop.lat || !shop.lng) return;
    setCenter(shop.lat, shop.lng);
    addMarker({
      id: REPORT_MARKER_ID,
      position: { lat: shop.lat, lng: shop.lng },
    });
  }, [shop, map]);

  return (
    <div>
      <Header title="제보하기" />
      <Flex direction="col" gap={60} className="w-full py-20">
        <Flex direction="col" gap={20} className="w-full">
          <Flex direction="col" gap={12} className="w-full px-16">
            <h4 className="text-gray-500 font-body1_m">소중한 소품샵을 등록해 주세요.</h4>
          </Flex>
          <Flex direction="col" gap={12} className="w-full px-16">
            <div className="h-[185px] w-full overflow-hidden rounded-16">
              <NaverMap width="100%" height="100%" isCurrent />
            </div>
            <Flex justify="between" align="center" className="w-full">
              <button
                onClick={handleAddressSearchLink}
                className="flex h-58 w-full items-center justify-between rounded-12 border border-gray-100 bg-white px-16 text-gray-800 font-body1_m"
              >
                <span>주소로 찾기</span>
                <LinkIcon />
              </button>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="col" gap={12} className="w-full px-16">
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
