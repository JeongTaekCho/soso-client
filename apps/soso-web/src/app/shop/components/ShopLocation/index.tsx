import IconButton from '@/shared/components/button/IconButton';
import PasteIcon from '@/shared/components/icons/PasteIcon';
import ContentBox from '@/shared/components/layout/ContentBox';
import Flex from '@/shared/components/layout/Flex';
import NaverMap from '@/shared/components/layout/NaverMap';
import ContentTitle from '@/shared/components/text/ContentTitle';

export default function ShopLocation() {
  return (
    <ContentBox>
      <ContentTitle title="위치" />
      <div className="h-[185px] w-full overflow-hidden rounded-16 border border-gray-100">
        <NaverMap width="100%" height="100%" />
      </div>
      <Flex justify="between" align="center" className="w-full">
        <p className="text-gray-600 font-body2_m">서울특별시 광진구 화양동 12-39 2층</p>
        <IconButton label="복사하기" icon={<PasteIcon />} />
      </Flex>
    </ContentBox>
  );
}
