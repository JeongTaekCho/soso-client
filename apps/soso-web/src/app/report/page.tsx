'use client';

import Button from '@/shared/components/button/Button';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import NaverMap from '@/shared/components/layout/NaverMap';
import { useRouter } from 'next/navigation';

export default function ReportPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/report/write');
  };

  return (
    <div>
      <Header title="제보하기" />
      <Flex direction="col" gap={16} className="w-full pt-76">
        <Flex direction="col" gap={20} className="w-full">
          <Flex justify="between" align="center" className="w-full">
            <Button
              title="지도로 찾기"
              width="49%"
              height="52px"
              borderColor="var(--gray-100)"
              bgColor="#fff"
              textColor="var(--gray-800)"
              radius="12px"
            />
            <Button
              title="주소로 찾기"
              width="49%"
              height="52px"
              borderColor="var(--gray-100)"
              bgColor="#fff"
              textColor="var(--gray-800)"
              radius="12px"
            />
          </Flex>
          <div className="h-[185px] w-full overflow-hidden rounded-16">
            <NaverMap width="100%" height="100%" />
          </div>
        </Flex>
        <Flex direction="col" gap={12} className="w-full">
          <h4 className="text-black font-title4_semi">이 위치가 맞나요?</h4>
          <Flex direction="col" gap={12} className="w-full">
            <Flex
              justify="center"
              align="center"
              className="h-52 w-full rounded-14 bg-[#FBF6F4] text-gray-600 font-body1_m"
            >
              대구 광역시 북구 구암동 960-2
            </Flex>
            <Button title="여기가 맞아요" onClick={handleNext} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
