'use client';

import MapButton from '@/shared/components/button/RoadFindButton/components/MapButton';
import Divider from '@/shared/components/divider/Divider';
import LoadFindIcon from '@/shared/components/icons/LoadFindIcon';
import ReportIcon from '@/shared/components/icons/ReportIcon';
import WishIcon from '@/shared/components/icons/WishIcon';
import XIcon from '@/shared/components/icons/XIcon';
import ContentBox from '@/shared/components/layout/ContentBox';
import Flex from '@/shared/components/layout/Flex';
import BottomModal from '@/shared/components/modal/BottomModal';
import { useState } from 'react';

export default function ShopTopInfo() {
  const [isWish, setIsWish] = useState(false);
  const [isFindModal, setIsFindModal] = useState(false);

  const handleToggleFindModal = () => {
    setIsFindModal((prev) => !prev);
  };

  const handleWishClick = () => {
    setIsWish((prev) => !prev);
  };

  return (
    <ContentBox gap={32}>
      <h2 className="w-full text-center text-black font-title1">위모먼트</h2>
      <Flex justify="between" align="center" className="w-full">
        <button onClick={handleWishClick} className="flex flex-1 flex-col items-center justify-center gap-2">
          <WishIcon isActive={isWish} />
          <span className="text-gray-500 font-body2_m">찜</span>
        </button>
        <Divider width="1px" height="56px" bgColor="#E8EBED" />
        <button onClick={handleToggleFindModal} className="flex flex-1 flex-col items-center justify-center gap-2">
          <LoadFindIcon />
          <span className="text-gray-500 font-body2_m">길찾기</span>
        </button>
        <Divider width="1px" height="56px" bgColor="#E8EBED" />
        <button className="flex flex-1 flex-col items-center justify-center gap-2">
          <ReportIcon />
          <span className="text-gray-500 font-body2_m">신고</span>
        </button>
      </Flex>
      <BottomModal isOpen={isFindModal} onClose={handleToggleFindModal}>
        <Flex direction="col" gap={18} className="relative w-full px-16 pb-28 pt-18">
          <button onClick={handleToggleFindModal} className="absolute right-16 top-14">
            <XIcon />
          </button>
          <h4 className="font-title3_bold">길찾기</h4>
          <Flex direction="col" gap={12} className="w-full">
            <MapButton title="네이버 지도" onClick={() => window.open('', '_blank')} />
            <MapButton title="카카오 지도" onClick={() => window.open('', '_blank')} />
            <MapButton title="apple 지도" />
          </Flex>
        </Flex>
      </BottomModal>
    </ContentBox>
  );
}
