import Flex from '@/shared/components/layout/Flex';
import { PRODUCT_LIST } from '@/shared/constant/Product';
import { ProductType } from '@/shared/types/shopType';
import clsx from 'clsx';
import Image from 'next/image';

interface SellProductProps {
  product: ProductType;
  checkbox?: boolean;
  isCheck?: boolean;
  onClick?: (product: ProductType) => void;
  isModal?: boolean;
}

export default function SellProduct({ product, checkbox, isCheck, onClick, isModal }: SellProductProps) {
  return (
    <div
      onClick={() => onClick?.({ id: product.id, name: product.name })}
      className={clsx(checkbox && 'cursor-pointer', isModal ? 'w-[calc(25%-12px)]' : 'w-[calc(25%-6px)]')}
    >
      <Flex direction="col" gap={6} justify="center" align="center" className="h-full w-full">
        <Flex
          justify="center"
          align="center"
          className={clsx(
            `relative aspect-square w-full rounded-12 p-10`,
            isCheck ? 'border border-main bg-orange-light' : 'bg-gray-50'
          )}
        >
          {product.id === 13 ? (
            <Image
              src={`/images/product/${isCheck ? 'pro_etc_active' : 'pro_etc'}.svg`}
              width={24}
              height={24}
              style={{ width: '50%', height: 'auto', objectFit: 'contain' }}
              alt="기타 판매상품 이미지"
            />
          ) : (
            <Image
              src={`/images/product/${PRODUCT_LIST[product.id - 1].value}.svg`}
              fill
              style={{ objectFit: 'cover' }}
              alt="판매상품 이미지"
            />
          )}
        </Flex>
        <p className="text-gray-500 font-body2_m">{product.name}</p>
      </Flex>
    </div>
  );
}
