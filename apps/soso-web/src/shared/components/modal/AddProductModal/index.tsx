import { useState, useEffect } from 'react';
import Button from '@/shared/components/button/Button';
import ModalCloseButton from '@/shared/components/button/MocalCloseButton';
import SellProduct from '@/shared/components/card/SellProduct';
import Flex from '@/shared/components/layout/Flex';
import BottomModal from '@/shared/components/modal/BottomModal';
import BottomModalTitle from '@/shared/components/text/BottomModalTitle';
import { PRODUCT_LIST } from '@/shared/constant/Product';
import useProductListStore from '@/shared/store/useProductListStore';
import { ProductType } from '@/shared/types/shopType';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClick?: () => void;
  isEdit?: boolean;
}

export default function AddProductModal({ isOpen, onClose, isEdit, onClick }: AddProductModalProps) {
  const { selectedProducts, setProductList, toggleProduct, resetSelectedProducts } = useProductListStore();

  useEffect(() => {
    if (isOpen) {
      resetSelectedProducts();
    }
  }, [isOpen, resetSelectedProducts]);

  const handleCloseModal = () => {
    onClose();
  };

  const handleSetProductList = () => {
    setProductList();
    handleCloseModal();
    if (onClick) onClick();
  };

  return (
    <BottomModal isOpen={isOpen} onClose={handleCloseModal}>
      <Flex direction="col" gap={18}>
        <Flex className="w-full" justify="between" align="center">
          <BottomModalTitle title="판매상품" />
          <ModalCloseButton onClick={handleCloseModal} />
        </Flex>
        <Flex direction="col" gap={38} align="center">
          <Flex align="center" wrap gap={8}>
            {PRODUCT_LIST.map((product: ProductType) => (
              <SellProduct
                key={product.id}
                product={product}
                checkbox
                onClick={() => toggleProduct(product)}
                isCheck={selectedProducts.some((p) => p.id === product.id)}
              />
            ))}
          </Flex>
          <Button onClick={handleSetProductList} title="추가하기" disabled={!selectedProducts.length} />
        </Flex>
      </Flex>
    </BottomModal>
  );
}
