'use client';

import Button from '@/shared/components/button/Button';
import IconButton from '@/shared/components/button/IconButton';
import ModalCloseButton from '@/shared/components/button/MocalCloseButton';
import SellProduct from '@/shared/components/card/SellProduct';
import ProposalIcon from '@/shared/components/icons/ProposalIcon';
import ContentBox from '@/shared/components/layout/ContentBox';
import Flex from '@/shared/components/layout/Flex';
import BottomModal from '@/shared/components/modal/BottomModal';
import BottomModalTitle from '@/shared/components/text/BottomModalTitle';
import ContentTitle from '@/shared/components/text/ContentTitle';
import { PRODUCT_LIST } from '@/shared/constant/Product';
import { ProductType } from '@/shared/types/shopType';
import { useState } from 'react';

export default function ShopProducts() {
  const [isBottomModal, setIsBottomModal] = useState(false);
  const [addProductList, setAddProductList] = useState<ProductType[]>([]);

  const handleToggleBottomModal = () => {
    setIsBottomModal((prev) => !prev);
  };

  const handleToggleProduct = (product: ProductType) => {
    setAddProductList((prev) => {
      // product.id와 같은 id가 있는지 확인
      const filteredList = prev.filter((p) => p.id !== product.id);

      // 만약 기존 배열에서 제거된 길이가 원래와 같다면 추가 (즉, 존재하지 않았던 경우)
      return filteredList.length === prev.length ? [...prev, product] : filteredList;
    });
  };

  console.log(addProductList);

  return (
    <ContentBox>
      <Flex justify="between" align="center" className="w-full">
        <ContentTitle title="판매 상품" />
        <IconButton label="추가하기" icon={<ProposalIcon />} onClick={handleToggleBottomModal} />
      </Flex>
      <Flex align="center" wrap gap={8}>
        {PRODUCT_LIST.map((product) => (
          <SellProduct key={product.id} product={product} />
        ))}
      </Flex>
      <BottomModal isOpen={isBottomModal} onClose={handleToggleBottomModal}>
        <Flex direction="col" gap={18}>
          <Flex className="w-full" justify="between" align="center">
            <BottomModalTitle title="판매상품" />
            <ModalCloseButton onClick={handleToggleBottomModal} />
          </Flex>
          <Flex direction="col" gap={38} align="center">
            <Flex align="center" wrap gap={8}>
              {PRODUCT_LIST.map((product) => (
                <SellProduct
                  key={product.id}
                  product={product}
                  checkbox
                  onClick={() => handleToggleProduct({ id: product.id, name: product.name })}
                  isCheck={addProductList.some((p) => p.id === product.id)}
                />
              ))}
            </Flex>
            <Button title="추가하기" disabled={!addProductList.length} />
          </Flex>
        </Flex>
      </BottomModal>
    </ContentBox>
  );
}
