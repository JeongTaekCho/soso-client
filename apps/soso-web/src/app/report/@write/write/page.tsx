'use client';

import AddButton from '@/shared/components/button/AddButton';
import Button from '@/shared/components/button/Button';
import Input from '@/shared/components/inputs/Input';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import NaverMap from '@/shared/components/layout/NaverMap';
import BottomModal from '@/shared/components/modal/BottomModal';
import { useState } from 'react';

export default function ReportWrite() {
  const [isTimeSettingModal, setIsTimeSettingModal] = useState(false);

  const handleToggleTimeSettingModal = () => {
    setIsTimeSettingModal((prev) => !prev);
  };

  return (
    <form className="modal-page">
      <Header type="back" title="제보하기" />
      <Flex direction="col" gap={28} className="w-full px-20 pt-76">
        <Flex direction="col" gap={8} className="w-full">
          <h3 className="text-gray-800 font-title4_semi">상점 이름</h3>
          <Input placeholder="상점 이름을 입력해 주세요." />
        </Flex>

        <Flex direction="col" gap={8} className="w-full">
          <h3 className="text-gray-800 font-title4_semi">상점 위치</h3>
          <Flex direction="col" gap={8} className="w-full">
            <div className="h-[185px] w-full overflow-hidden rounded-16">
              <NaverMap width="100%" height="100%" />
            </div>
            <div className="flex h-52 w-full items-center rounded-14 bg-gray-100 px-16 text-gray-400 font-body1_m">
              대구 광역시 북구 구암동 960-2
            </div>
          </Flex>
        </Flex>

        <Flex direction="col" gap={8} className="w-full">
          <h3 className="text-gray-800 font-title4_semi">운영 정보</h3>
          <Flex direction="col" className="w-full" gap={20}>
            <Flex direction="col" gap={6} className="w-full">
              <h5 className="text-gray-500 font-body1_m">운영 요일/시간</h5>
              <AddButton type="button" onClick={handleToggleTimeSettingModal} />
            </Flex>
            <Flex direction="col" gap={6} className="w-full">
              <h3 className="text-gray-500 font-body1_m">전화번호</h3>
              <Input placeholder="전화번호를 입력해 주세요." />
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="col" gap={8} className="w-full">
          <h3 className="text-gray-800 font-title4_semi">판매상품</h3>
          <AddButton type="button" />
        </Flex>
        <Button type="submit" title="등록하기" />
      </Flex>
      <BottomModal isOpen={isTimeSettingModal} onClose={handleToggleTimeSettingModal}>
        운영 시간 모달
      </BottomModal>
    </form>
  );
}
