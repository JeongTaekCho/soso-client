import Flex from '@/shared/components/layout/Flex';
import MessageBox from '@/shared/components/layout/Review/components/MessageBox';
import ShopInfo from '@/shared/components/ui/ShopInfo';

export default function MyReview() {
  return (
    <Flex direction="col" gap={20} className="w-full px-16">
      <ShopInfo name="가게 이름" date="2024.01.01" imgUrl="" />
      <MessageBox>메세지 내용</MessageBox>
    </Flex>
  );
}
