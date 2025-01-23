import RoadFindButton from '@/shared/components/button/RoadFindButton';
import Flex from '@/shared/components/layout/Flex';
import useGetLocation from '@/shared/hooks/useGetLocation';
import { ShopType } from '@/shared/types/shopType';
import { getDistance } from '@/shared/utils/getDistance';
import Image from 'next/image';
import Link from 'next/link';

interface PlaceCardProps {
  width?: string;
  height?: string;
  type?: 'default' | 'map';
  data: ShopType;
}
export default function PlaceCard({ width, height, type, data }: PlaceCardProps) {
  const { currentLocation } = useGetLocation();

  const naverFindUrl = () => {
    if (!currentLocation) return;
    return `https://map.naver.com/v5/search/${data.location}`;
    // return `nmap://route/public?slat=${currentLocation?.lat}&slng=${currentLocation?.lng}&dlat=${data?.lat}&dlng=${data?.lng}`; // 모바일
  };

  const kakaoFindUrl = () => {
    if (!currentLocation) return;
    return `https://map.kakao.com/link/to/${data.location},${data.lat},${data.lng}`;
    // return `nmap://route/public?slat=${currentLocation?.lat}&slng=${currentLocation?.lng}&dlat=${data?.lat}&dlng=${data?.lng}`; // 모바일
  };

  return type === 'map' ? (
    <Link
      href={`/shop/${data.id}`}
      style={{
        width: width || '327px',
        height: height || 'auto',
      }}
      className="overflow-hidden rounded-16"
    >
      <Flex className="h-full w-full bg-white px-18 py-16" align="end" justify="between">
        <Flex align="center" gap={12}>
          <div className="relative h-64 w-64">
            <Image src={'/images/sample.png'} objectFit="cover" fill alt="" />
          </div>
          <Flex direction="col" gap={8}>
            <h4 className="font-title4_semi">{data.name}</h4>
            <p className="text-gray-400 font-body1_m">
              {getDistance(Number(currentLocation?.lat), Number(currentLocation?.lng), data.lat, data.lng)}
            </p>
          </Flex>
        </Flex>
        <RoadFindButton naverUrl={naverFindUrl()} kakaoUrl={kakaoFindUrl()} />
      </Flex>
    </Link>
  ) : (
    <Link
      href={`/shop/${data.id}`}
      style={{
        width: width || '100%',
        height: height || 'auto',
      }}
    >
      <Flex className="h-full w-full bg-white px-18 py-16" align="center" justify="between">
        <Flex align="center" gap={12}>
          <div className="relative h-72 w-72">
            <Image src={'/images/sample.png'} objectFit="cover" fill alt="" />
          </div>
          <Flex direction="col" gap={8}>
            <h4 className="font-title4_semi">{data.name}</h4>
            <p className="text-gray-400 font-body1_m">
              {getDistance(Number(currentLocation?.lat), Number(currentLocation?.lng), data.lat, data.lng)}
            </p>
          </Flex>
        </Flex>
        <RoadFindButton naverUrl={naverFindUrl()} kakaoUrl={kakaoFindUrl()} />
      </Flex>
    </Link>
  );
}
