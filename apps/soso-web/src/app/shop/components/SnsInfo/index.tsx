import InstaIcon from '@/app/shop/components/SnsInfo/components/InstaIcon';
import ContentBox from '@/shared/components/layout/ContentBox';
import Flex from '@/shared/components/layout/Flex';
import ContentTitle from '@/shared/components/text/ContentTitle';
import Link from 'next/link';

export default function SnsInfo() {
  return (
    <ContentBox>
      <Flex direction="col" gap={18} className="w-full">
        <Flex justify="between" align="center" className="w-full">
          <ContentTitle title="SNS" />
        </Flex>
        <Link href={'#'} className="flex items-center gap-8">
          <InstaIcon />
          <p className="text-14 font-medium text-gray-800 underline">@gemw_12</p>
        </Link>
      </Flex>
    </ContentBox>
  );
}
