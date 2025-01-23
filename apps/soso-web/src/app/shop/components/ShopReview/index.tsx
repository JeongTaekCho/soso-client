import IconButton from '@/shared/components/button/IconButton';
import LinkIcon from '@/shared/components/icons/LinkIcon';
import ContentBox from '@/shared/components/layout/ContentBox';
import Flex from '@/shared/components/layout/Flex';
import Review from '@/shared/components/layout/Review';
import ContentTitle from '@/shared/components/text/ContentTitle';

export default function ShopReview() {
  return (
    <ContentBox>
      <Flex justify="between" align="center" className="w-full">
        <Flex align="center" gap={4}>
          <ContentTitle title="후기" />
          <span className="text-gray-400 font-body1_m">2개</span>
        </Flex>
        <IconButton label="전체보기" icon={<LinkIcon />} />
      </Flex>
      <Flex direction="col" gap={20} className="w-full">
        <Review isMe />
        <Review />
        <Review />
      </Flex>
    </ContentBox>
  );
}
