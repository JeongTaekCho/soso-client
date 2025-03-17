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
import { useGetShopDetailQuery } from '@/app/shop/hooks/useGetShopDetailQuery';
import { useParams } from 'next/navigation';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClick?: () => void;
  isEdit?: boolean;
}

export default function AddProductModal({ isOpen, onClose, isEdit, onClick }: AddProductModalProps) {
  const { productList, setProductList, toggleProduct, clearProductList } = useProductListStore();
  const { id } = useParams();
  const { data: detailData } = useGetShopDetailQuery(String(id));

  const compareArrays = (
    arr1: { id: number; name: string }[] | undefined,
    arr2: { id: number; name: string }[] | undefined
  ): boolean => {
    if (!arr1 || !arr2) return false;
    if (arr1.length !== arr2.length) return false;

    return arr1.every((item1) => arr2.some((item2) => item1.id === item2.id && item1.name === item2.name));
  };

  useEffect(() => {
    if (!isOpen) return;
    if (detailData?.shop.products) {
      setProductList(detailData?.shop.products);
    } else {
      clearProductList();
    }
  }, [isOpen, clearProductList]);

  const handleCloseModal = () => {
    onClose();
  };

  const handleSetProductList = () => {
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
          <Flex align="center" wrap gap={16}>
            {PRODUCT_LIST.map((product: ProductType) => (
              <SellProduct
                key={product.id}
                product={product}
                checkbox
                onClick={() => toggleProduct(product)}
                isCheck={productList.some((p) => p.id === product.id)}
                isModal
              />
            ))}
          </Flex>
          <Button
            onClick={handleSetProductList}
            title="추가하기"
            disabled={!productList.length || compareArrays(productList, detailData?.shop.products)}
          />
        </Flex>
      </Flex>
    </BottomModal>
  );
}
