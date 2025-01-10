import RoadFindButton from '@/shared/components/button/RoadFindButton';
import Flex from '@/shared/components/layout/Flex';
import Image from 'next/image';

interface PlaceCardProps {
  width?: string;
  height?: string;
}
export default function PlaceCard({ width, height }: PlaceCardProps) {
  return (
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
            <h4 className="font-title4_semi">가게이름</h4>
            <p className="text-gray-400 font-body1_m">100m</p>
          </Flex>
        </Flex>
        <RoadFindButton />
      </Flex>
    </div>
  );
}
