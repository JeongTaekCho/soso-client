import Flex from '@/shared/components/layout/Flex';
import MessageBox from '@/shared/components/layout/Review/components/MessageBox';
import ProductImage from '@/shared/components/ui/ProductImage';

export default function MyReview() {
  return (
    <Flex direction="col" gap={20} className="w-full px-16">
      <Flex align="center" gap={12}>
        <ProductImage />
        <Flex direction="col" gap={4}>
          <h3 className="text-black font-title4_semi">가게이름</h3>
          <p className="text-gray-400 font-caption">2024.01.01</p>
        </Flex>
      </Flex>
      <MessageBox>메세지 내용</MessageBox>
    </Flex>
  );
}
