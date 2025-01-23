'use client';

import IconButton from '@/shared/components/button/IconButton';
import Divider from '@/shared/components/divider/Divider';
import ProposalIcon from '@/shared/components/icons/ProposalIcon';
import YoilCheckbox from '@/shared/components/inputs/YoilCheckbox';
import ContentBox from '@/shared/components/layout/ContentBox';
import Flex from '@/shared/components/layout/Flex';
import ContentSubTitle from '@/shared/components/text/ContentSubTitle';
import ContentTitle from '@/shared/components/text/ContentTitle';
import { useYoilStore } from '@/shared/store/useYoilStore';
import { useEffect } from 'react';

export default function ShopOperInfo() {
  const { yoil, toggleYoil } = useYoilStore();

  useEffect(() => {
    toggleYoil('monday');
    toggleYoil('tuesday');
    toggleYoil('wednesday');
    toggleYoil('thursday');
  }, []);

  return (
    <ContentBox>
      <Flex justify="between" align="center" className="w-full">
        <ContentTitle title="운영 정보" />
        <IconButton label="제안하기" icon={<ProposalIcon />} />
      </Flex>
      <Flex direction="col" gap={24} className="w-full">
        <Flex direction="col" gap={8} className="w-full">
          <ContentSubTitle title="운영 요일" />
          <Flex justify="between" align="center" className="w-full">
            {yoil.map((item) => (
              <YoilCheckbox
                key={item.id}
                id={item.id}
                label={item.label}
                checked={item.checked}
                onChange={() => {}}
                disabled
              />
            ))}
          </Flex>
        </Flex>
        <Flex direction="col" gap={8} className="w-full">
          <ContentSubTitle title="운영 시간" />
          <Flex justify="center" align="center" gap={40} className="w-full rounded-12 bg-gray-50 py-16">
            <Flex align="center" gap={12} className="font-body1_m">
              <span className="text-gray-400">open</span>
              <span className="text-gray-800">12:00</span>
            </Flex>
            <Divider width="1px" height="12px" bgColor="#C9CDD2" />
            <Flex align="center" gap={12} className="font-body1_m">
              <span className="text-gray-400">closed</span>
              <span className="text-gray-800">19:00</span>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="col" gap={8} className="w-full">
          <ContentSubTitle title="전화번호" />
          <p className="text-gray-800 font-body1_m">02-0000-0000</p>
        </Flex>
      </Flex>
    </ContentBox>
  );
}
