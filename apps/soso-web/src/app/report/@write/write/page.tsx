'use client';

import AddButton from '@/shared/components/button/AddButton';
import Button from '@/shared/components/button/Button';
import TimePickerButton from '@/shared/components/button/TimePickerButton';
import Input from '@/shared/components/inputs/Input';
import TimePicker from '@/shared/components/inputs/TimePicker';
import YoilCheckbox from '@/shared/components/inputs/YoilCheckbox';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import NaverMap from '@/shared/components/layout/NaverMap';
import BottomModal from '@/shared/components/modal/BottomModal';
import ModalPortal from '@/shared/components/modal/ModalPortal';
import { useTimePicker } from '@/shared/hooks/useTimePicker';
import { useYoilStore } from '@/shared/store/useYoilStore';
import { ChangeEvent, useState } from 'react';

interface YoilType {
  id: string;
  label: string;
  checked: boolean;
}

export default function ReportWrite() {
  const [isDeclareModal, setIsDeclareModal] = useState(false);
  const {
    openTime,
    closeTime,
    isTimePicker,
    timePickerType,
    handleCloseTimePicker,
    handleOpenTimePicker,
    handleTimePicker,
  } = useTimePicker();

  const { yoil, toggleYoil } = useYoilStore();

  const handleChangeCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target as HTMLInputElement;

    toggleYoil(id);
  };

  const handleToggleTimeSettingModal = () => {
    setIsDeclareModal((prev) => !prev);
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
              <h5 className="text-gray-500 font-body1_m">운영 요일을 선택해주세요.</h5>
              <div className="flex w-full max-w-[375px] items-center justify-between">
                {yoil.map((item) => (
                  <YoilCheckbox
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    checked={item.checked}
                    onChange={handleChangeCheckBox}
                  />
                ))}
              </div>
            </Flex>
            <Flex direction="col" gap={6} className="w-full">
              <h5 className="text-gray-500 font-body1_m">운영 시간을 선택해주세요.</h5>
              <Flex justify="between" align="center" className="w-full" gap={20}>
                <Flex className="flex-1" justify="between" align="center" gap={12}>
                  <p className="text-gray-600 font-body1_m">open</p>
                  <TimePickerButton label={openTime} onClick={() => handleOpenTimePicker('open')} />
                </Flex>
                <Flex className="flex-1" justify="between" align="center" gap={12}>
                  <p className="text-gray-600 font-body1_m">close</p>
                  <TimePickerButton label={closeTime} onClick={() => handleOpenTimePicker('close')} />
                </Flex>
              </Flex>
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
      <BottomModal isOpen={isDeclareModal} onClose={handleToggleTimeSettingModal}>
        운영 시간 모달
      </BottomModal>
      <ModalPortal isOpen={isTimePicker} onClose={handleCloseTimePicker}>
        <TimePicker
          onConfirm={handleTimePicker}
          onCancel={handleCloseTimePicker}
          value={timePickerType === 'open' ? openTime : closeTime}
        />
      </ModalPortal>
    </form>
  );
}
