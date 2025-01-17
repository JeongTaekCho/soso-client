import RoadFindButton from '@/shared/components/button/RoadFindButton';
import Flex from '@/shared/components/layout/Flex';
import { ShopType } from '@/shared/types/shopType';
import Image from 'next/image';

interface PlaceCardProps {
  width?: string;
  height?: string;
  type?: 'default' | 'map';
  data: ShopType;
}
export default function PlaceCard({ width, height, type, data }: PlaceCardProps) {
  return type === 'map' ? (
    <div
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
            <p className="text-gray-400 font-body1_m">100m</p>
          </Flex>
        </Flex>
        <RoadFindButton />
      </Flex>
    </div>
  ) : (
    <div
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
            <h4 className="font-title4_semi">가게이름</h4>
            <p className="text-gray-400 font-body1_m">100m</p>
          </Flex>
        </Flex>
        <RoadFindButton />
      </Flex>
    </div>
  );
}
