'use client';

import Divider from '@/shared/components/divider/Divider';
import LoadFindIcon from '@/shared/components/icons/LoadFindIcon';
import ReportIcon from '@/shared/components/icons/ReportIcon';
import WishIcon from '@/shared/components/icons/WishIcon';
import ContentBox from '@/shared/components/layout/ContentBox';
import Flex from '@/shared/components/layout/Flex';
import { useState } from 'react';

export default function ShopTopInfo() {
  const [isWish, setIsWish] = useState(false);

  const handleWishClick = () => {
    setIsWish((prev) => !prev);
  };

  return (
    <ContentBox gap={32}>
      <h2 className="w-full text-center text-black font-title1">위모먼트</h2>
      <Flex justify="between" align="center" className="w-full">
        <button className="flex flex-1 flex-col items-center justify-center gap-2" onClick={handleWishClick}>
          <WishIcon isActive={isWish} />
          <span className="text-gray-500 font-body2_m">찜</span>
        </button>
        <Divider width="1px" height="56px" bgColor="#E8EBED" />
        <button className="flex flex-1 flex-col items-center justify-center gap-2">
          <LoadFindIcon />
          <span className="text-gray-500 font-body2_m">길찾기</span>
        </button>
        <Divider width="1px" height="56px" bgColor="#E8EBED" />
        <button className="flex flex-1 flex-col items-center justify-center gap-2">
          <ReportIcon />
          <span className="text-gray-500 font-body2_m">신고</span>
        </button>
      </Flex>
    </ContentBox>
  );
}
