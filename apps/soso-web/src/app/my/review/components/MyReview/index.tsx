import { MyReviewType } from '@/app/my/components/ProductLists/types';
import Flex from '@/shared/components/layout/Flex';
import MessageBox from '@/shared/components/layout/Review/components/MessageBox';
import ShopInfo from '@/shared/components/ui/ShopInfo';
import { formatStringDate } from '@/shared/utils/formatStringDate';

interface MyReviewProps {
  data: MyReviewType;
}

export default function MyReview({ data }: MyReviewProps) {
  return (
    <Flex direction="col" gap={20} className="w-full px-16">
      <ShopInfo name={data.shop.name} date={formatStringDate(data.createdAt)} imgUrl={data.shop.image || ''} />
      <MessageBox>{data.content}</MessageBox>
    </Flex>
  );
}
