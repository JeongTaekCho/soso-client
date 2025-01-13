'use client';

import MapButton from '@/shared/components/button/RoadFindButton/components/MapButton';
import AirplaneIcon from '@/shared/components/icons/AirplaneIcon';
import XIcon from '@/shared/components/icons/XIcon';
import Flex from '@/shared/components/layout/Flex';
import BottomModal from '@/shared/components/modal/BottomModal';
import { useState } from 'react';

export default function RoadFindButton() {
  const [isFindModal, setIsFindModal] = useState(false);

  const handleToggleFindModal = () => {
    setIsFindModal((prev) => !prev);
  };

  return (
    <>
      <button className="h-30 w-69 rounded-8 bg-orange-light" onClick={handleToggleFindModal}>
        <Flex justify="center" align="center" className="h-full w-full" gap={3}>
          <AirplaneIcon />
          <span className="text-main font-caption">길찾기</span>
        </Flex>
      </button>
      <BottomModal isOpen={isFindModal} onClose={handleToggleFindModal}>
        <Flex direction="col" gap={18} className="relative w-full px-16 pb-28 pt-18">
          <button onClick={handleToggleFindModal} className="absolute right-16 top-14">
            <XIcon />
          </button>
          <h4 className="font-title3_bold">길찾기</h4>
          <Flex direction="col" gap={12} className="w-full">
            <MapButton title="네이버 지도" />
            <MapButton title="카카오 지도" />
            <MapButton title="apple 지도" />
          </Flex>
        </Flex>
      </BottomModal>
    </>
  );
}
