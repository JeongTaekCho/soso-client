import RoadFindButton from '@/shared/components/button/RoadFindButton';
import Flex from '@/shared/components/layout/Flex';
import { useLocationStore } from '@/shared/store/useLocationStore';
import { ShopType } from '@/shared/types/shopType';
import { getCurrentLocation } from '@/shared/utils/getCurrentLocation';
import { getDistance } from '@/shared/utils/getDistance';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PlaceCardProps {
  width?: string;
  height?: string;
  type?: 'default' | 'map';
  data: ShopType;
}
export default function PlaceCard({ width, height, type, data }: PlaceCardProps) {
  const [currentLat, setCurrentLat] = useState<number | null>(null);
  const [currentLng, setCurrentLng] = useState<number | null>(null);
  const { setPrevLocation } = useLocationStore();

  const naverFindUrl = () => {
    if (!data) return;
    return `https://map.naver.com/v5/search/${data.location}`;
    // return `nmap://route/public?slat=${currentLocation?.lat}&slng=${currentLocation?.lng}&dlat=${data?.lat}&dlng=${data?.lng}`; // 모바일
  };

  const kakaoFindUrl = () => {
    if (!data) return;
    return `https://map.kakao.com/link/to/${data.location},${data.lat},${data.lng}`;
    // return `nmap://route/public?slat=${currentLocation?.lat}&slng=${currentLocation?.lng}&dlat=${data?.lat}&dlng=${data?.lng}`; // 모바일
  };

  useEffect(() => {
    const setCurrentLocation = async () => {
      const currentLocation = await getCurrentLocation();

      if (currentLocation === 'denied') return;

      setCurrentLat(Number(currentLocation.lat));
      setCurrentLng(Number(currentLocation.lng));
    };

    setCurrentLocation();
  }, []);

  const handleSavePrevLocation = (lat: number, lng: number, id: number) => {
    setPrevLocation(lat, lng, id);
  };

  return type === 'map' ? (
    <Link
      href={`/shop/${data.id}`}
      onClick={() => handleSavePrevLocation(data.lat, data.lng, data.id)}
      style={{
        width: width || '327px',
        height: height || 'auto',
      }}
      className="overflow-hidden"
    >
      <Flex className="relative h-full w-full rounded-16 bg-white px-18 py-16" align="end" justify="between">
        <Flex align="center" gap={12} className="w-full">
          <div className="relative h-64 min-w-64">
            <Image src={data?.image || '/images/default_item.svg'} style={{ objectFit: 'cover' }} fill alt="" />
          </div>
          <Flex direction="col" gap={8} className="min-w-0 flex-1">
            <h4 className="block w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap font-title4_semi">
              {data.name}
            </h4>
            <p className="text-gray-400 font-body1_m">
              {getDistance(Number(currentLat), Number(currentLng), data.lat, data.lng)}
            </p>
          </Flex>
        </Flex>
        <div className="absolute bottom-16 right-18">
          <RoadFindButton naverUrl={naverFindUrl()} kakaoUrl={kakaoFindUrl()} />
        </div>
      </Flex>
    </Link>
  ) : (
    <Link
      href={`/shop/${data.id}`}
      onClick={() => handleSavePrevLocation(data.lat, data.lng, data.id)}
      style={{
        width: width || '100%',
        height: height || 'auto',
      }}
      className="overflow-hidden"
    >
      <Flex className="h-full w-full rounded-16 bg-white px-18 py-16" align="center" justify="between">
        <Flex align="center" gap={12}>
          <div className="relative h-72 w-72">
            <Image src={'/images/default_item.svg'} style={{ objectFit: 'cover' }} fill alt="" />
          </div>
          <Flex direction="col" gap={8}>
            <h4 className="font-title4_semi">{data.name}</h4>
            <p className="text-gray-400 font-body1_m">
              {getDistance(Number(currentLat), Number(currentLng), data.lat, data.lng)}
            </p>
          </Flex>
        </Flex>
        <RoadFindButton naverUrl={naverFindUrl()} kakaoUrl={kakaoFindUrl()} />
      </Flex>
    </Link>
  );
}
