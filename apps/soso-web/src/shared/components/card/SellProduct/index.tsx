import Flex from '@/shared/components/layout/Flex';
import { ProductType } from '@/shared/types/shopType';
import clsx from 'clsx';
import Image from 'next/image';

interface SellProductProps {
  product: ProductType & { value: string };
  checkbox?: boolean;
  isCheck?: boolean;
  onClick?: (product: ProductType) => void;
}

export default function SellProduct({ product, checkbox, isCheck, onClick }: SellProductProps) {
  return (
    <div
      onClick={() => onClick?.({ id: product.id, name: product.name })}
      className={clsx('w-[calc(25%-6px)]', checkbox && 'cursor-pointer')}
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
          <Image src={`/images/product/${product.value}.svg`} fill objectFit="cover" alt="판매상품 이미지" />
        </Flex>
        <p className="text-gray-500 font-body2_m">{product.name}</p>
      </Flex>
    </div>
  );
}
