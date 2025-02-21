'use client';

import Button from '@/shared/components/button/Button';
import IconButton from '@/shared/components/button/IconButton';
import ModalCloseButton from '@/shared/components/button/MocalCloseButton';
import TimePickerButton from '@/shared/components/button/TimePickerButton';
import Divider from '@/shared/components/divider/Divider';
import ProposalIcon from '@/shared/components/icons/ProposalIcon';
import Input from '@/shared/components/inputs/Input';
import TimePicker from '@/shared/components/inputs/TimePicker';
import YoilCheckbox from '@/shared/components/inputs/YoilCheckbox';
import ContentBox from '@/shared/components/layout/ContentBox';
import Flex from '@/shared/components/layout/Flex';
import InputContent from '@/shared/components/layout/InputContent';
import BottomModal from '@/shared/components/modal/BottomModal';
import ModalPortal from '@/shared/components/modal/ModalPortal';
import BottomModalTitle from '@/shared/components/text/BottomModalTitle';
import ContentSubTitle from '@/shared/components/text/ContentSubTitle';
import ContentTitle from '@/shared/components/text/ContentTitle';
import EmptyData from '@/shared/components/ui/EmptyData';
import { useTimePicker } from '@/shared/hooks/useTimePicker';
import { useYoilStore } from '@/shared/store/useYoilStore';
import { OperatingHourType } from '@/shared/types/shopType';
import { ChangeEvent, useEffect, useState } from 'react';

interface ShopOperInfoProps {
  operData: OperatingHourType[] | undefined;
}

export default function ShopOperInfo({ operData }: ShopOperInfoProps) {
  const { yoil, setCheckYoil, addYoil, toggleAddYoil } = useYoilStore();
  const [isBottomModal, setIsBottomModal] = useState(false);

  const {
    openTime,
    closeTime,
    isTimePicker,
    timePickerType,
    handleCloseTimePicker,
    handleOpenTimePicker,
    handleTimePicker,
  } = useTimePicker();

  const handleChangeCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target as HTMLInputElement;

    toggleAddYoil(id);
  };

  const handleToggleBottomModal = () => {
    setIsBottomModal((prev) => !prev);
  };

  useEffect(() => {
    setCheckYoil('월', operData?.[0]?.monday || false);
    setCheckYoil('화', operData?.[0]?.tuesday || false);
    setCheckYoil('수', operData?.[0]?.wednesday || false);
    setCheckYoil('목', operData?.[0]?.thursday || false);
    setCheckYoil('금', operData?.[0]?.friday || false);
    setCheckYoil('토', operData?.[0]?.saturday || false);
    setCheckYoil('일', operData?.[0]?.sunday || false);
  }, [operData]);

  const [status, setStatus] = useState({
    isYoilData: false,
    isTimeData: false,
    isPhoneData: false,
  });

  useEffect(() => {
    if (operData && operData.length > 0) {
      const yoilExists = Object.keys(operData[0]).some(
        (key) =>
          ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].includes(key) &&
          operData[0][key as keyof OperatingHourType] === true
      );

      const timeExists = !!operData[0].startTime && !!operData[0].endTime;

      setStatus({
        isYoilData: yoilExists,
        isTimeData: timeExists,
        isPhoneData: !!operData[0]?.phoneNumber,
      });
    }
  }, [operData]);

  return (
    <ContentBox>
      <Flex justify="between" align="center" className="w-full">
        <ContentTitle title="운영 정보" />
        <IconButton onClick={handleToggleBottomModal} label="제안하기" icon={<ProposalIcon />} />
      </Flex>
      <Flex direction="col" gap={24} className="w-full">
        <Flex direction="col" gap={8} className="w-full">
          <ContentSubTitle title="운영 요일" />
          {status.isYoilData ? (
            <Flex justify="between" align="center" className="w-full max-w-[375px]">
              {yoil.map((item) => (
                <YoilCheckbox key={item.id} id={item.id} label={item.label} checked={item.checked} disabled />
              ))}
            </Flex>
          ) : (
            <EmptyData text="등록된 운영 요일이 없습니다." />
          )}
        </Flex>
        <Flex direction="col" gap={8} className="w-full">
          <ContentSubTitle title="운영 시간" />
          {status.isTimeData ? (
            <Flex justify="center" align="center" gap={40} className="w-full rounded-12 bg-gray-50 py-16">
              <Flex align="center" gap={12} className="font-body1_m">
                <span className="text-gray-400">open</span>
                <span className="text-gray-800">{operData?.[0]?.startTime?.slice(0, -3) || '-'}</span>
              </Flex>
              <Divider width="1px" height="12px" bgColor="#C9CDD2" />
              <Flex align="center" gap={12} className="font-body1_m">
                <span className="text-gray-400">closed</span>
                <span className="text-gray-800">{operData?.[0]?.endTime?.slice(0, -3) || '-'}</span>
              </Flex>
            </Flex>
          ) : (
            <EmptyData text="등록된 운영 시간이 없습니다." />
          )}
        </Flex>
        <Flex direction="col" gap={8} className="w-full">
          <ContentSubTitle title="전화번호" />
          {status.isPhoneData ? (
            <p className="text-gray-800 font-body1_m">{operData?.[0]?.phoneNumber || '-'}</p>
          ) : (
            <EmptyData text="등록된 전화번호가 없습니다." />
          )}
        </Flex>
      </Flex>
      <BottomModal isOpen={isBottomModal} onClose={handleToggleBottomModal}>
        <Flex direction="col" gap={18} className="w-full">
          <Flex justify="between" align="center" className="w-full">
            <BottomModalTitle title="운영 정보" />
            <ModalCloseButton onClick={handleToggleBottomModal} />
          </Flex>
          <Flex direction="col" gap={38} align="center" className="w-full">
            <Flex direction="col" className="w-full" gap={20}>
              <InputContent label="운영 요일을 선택해주세요.">
                <div className="flex w-full max-w-[375px] items-center justify-between">
                  {addYoil.map((item) => (
                    <YoilCheckbox
                      key={item.id}
                      id={item.id}
                      label={item.label}
                      checked={item.checked}
                      onChange={handleChangeCheckBox}
                    />
                  ))}
                </div>
              </InputContent>
              <InputContent label="운영 시간을 선택해주세요.">
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
              </InputContent>
              <InputContent label="전화번호">
                <Input placeholder="전화번호를 입력해 주세요." />
              </InputContent>
            </Flex>
            <Button title="제안하기" />
          </Flex>
        </Flex>
      </BottomModal>
      <ModalPortal isOpen={isTimePicker} onClose={handleCloseTimePicker}>
        <TimePicker
          onConfirm={handleTimePicker}
          onCancel={handleCloseTimePicker}
          value={timePickerType === 'open' ? openTime : closeTime}
        />
      </ModalPortal>
    </ContentBox>
  );
}
