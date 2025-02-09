'use client';

import Button from '@/shared/components/button/Button';
import Divider from '@/shared/components/divider/Divider';
import LinkIcon from '@/shared/components/icons/LinkIcon';
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
      <Flex direction="col" gap={60} className="w-full py-20">
        <Flex direction="col" gap={20} className="w-full">
          <Flex direction="col" gap={12} className="w-full px-20">
            <h4 className="text-gray-500 font-body1_m">소중한 소품샵을 등록해 주세요.</h4>
          </Flex>
          <Flex direction="col" gap={12} className="w-full px-20">
            <div className="h-[185px] w-full overflow-hidden rounded-16">
              <NaverMap width="100%" height="100%" />
            </div>
            <Flex justify="between" align="center" className="w-full">
              <button className="flex h-58 w-full items-center justify-between rounded-12 border border-gray-100 bg-white px-16 text-gray-800 font-body1_m">
                <span>주소로 찾기</span>
                <LinkIcon />
              </button>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="col" gap={12} className="w-full px-20">
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
