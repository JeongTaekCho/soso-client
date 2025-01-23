import IconButton from '@/shared/components/button/IconButton';
import SellProduct from '@/shared/components/card/SellProduct';
import ProposalIcon from '@/shared/components/icons/ProposalIcon';
import ContentBox from '@/shared/components/layout/ContentBox';
import Flex from '@/shared/components/layout/Flex';
import ContentTitle from '@/shared/components/text/ContentTitle';

export default function ShopProducts() {
  return (
    <ContentBox>
      <Flex justify="between" align="center" className="w-full">
        <ContentTitle title="판매 상품" />
        <IconButton label="추가하기" icon={<ProposalIcon />} />
      </Flex>
      <Flex align="center" wrap gap={8}>
        <SellProduct name="판매상품" imgUrl="/images/coffee.png" />
        <SellProduct name="판매상품" imgUrl="/images/coffee.png" />
        <SellProduct name="판매상품" imgUrl="/images/coffee.png" />
        <SellProduct name="판매상품" imgUrl="/images/coffee.png" />
        <SellProduct name="판매상품" imgUrl="/images/coffee.png" />
        <SellProduct name="판매상품" imgUrl="/images/coffee.png" />
        <SellProduct name="판매상품" imgUrl="/images/coffee.png" />
        <SellProduct name="판매상품" imgUrl="/images/coffee.png" />
        <SellProduct name="판매상품" imgUrl="/images/coffee.png" />
        <SellProduct name="판매상품" imgUrl="/images/coffee.png" />
      </Flex>
    </ContentBox>
  );
}
