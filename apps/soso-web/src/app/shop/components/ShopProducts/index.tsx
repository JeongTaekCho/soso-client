'use client';

import IconButton from '@/shared/components/button/IconButton';
import SellProduct from '@/shared/components/card/SellProduct';
import ProposalIcon from '@/shared/components/icons/ProposalIcon';
import ContentBox from '@/shared/components/layout/ContentBox';
import Flex from '@/shared/components/layout/Flex';
import AddProductModal from '@/shared/components/modal/AddProductModal';
import ContentTitle from '@/shared/components/text/ContentTitle';
import { PRODUCT_LIST } from '@/shared/constant/Product';
import useProductListStore from '@/shared/store/useProductListStore';
import { ProductType } from '@/shared/types/shopType';
import { useState } from 'react';

interface ShopProductsProps {
  productData: ProductType[] | undefined;
}
export default function ShopProducts({ productData }: ShopProductsProps) {
  const [isBottomModal, setIsBottomModal] = useState(false);
  const { productList } = useProductListStore();

  const handleToggleBottomModal = () => {
    setIsBottomModal((prev) => !prev);
  };

  return (
    <ContentBox>
      <Flex justify="between" align="center" className="w-full">
        <ContentTitle title="판매 상품" />
        <IconButton label="추가하기" icon={<ProposalIcon />} onClick={handleToggleBottomModal} />
      </Flex>
      <Flex align="center" wrap gap={8} className="w-full">
        {productData?.map((product) => <SellProduct key={product.id} product={product} />)}
      </Flex>
      <AddProductModal isOpen={isBottomModal} onClose={handleToggleBottomModal} />
    </ContentBox>
  );
}
