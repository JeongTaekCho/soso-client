import AirplaneIcon from '@/shared/components/icons/AirplaneIcon';
import Flex from '@/shared/components/layout/Flex';

export default function RoadFindButton() {
  return (
    <button className="h-30 w-69 rounded-8 bg-orange-light">
      <Flex justify="center" align="center" className="h-full w-full" gap={3}>
        <AirplaneIcon />
        <span className="text-main font-caption">길찾기</span>
      </Flex>
    </button>
  );
}
