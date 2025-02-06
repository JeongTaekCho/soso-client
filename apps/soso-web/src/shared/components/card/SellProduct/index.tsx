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
      className={clsx(checkbox && 'cursor-pointer')}
    >
      <Flex direction="col" gap={6} justify="center" align="center">
        <Flex
          justify="center"
          align="center"
          className={clsx(`h-72 w-72 rounded-12`, isCheck ? 'border border-main bg-orange-light' : 'bg-gray-50')}
        >
          <Image
            src={`/images/product/${product.value}.png`}
            width={48}
            height={48}
            objectFit="cover"
            alt="판매상품 이미지"
          />
        </Flex>
        <p className="text-gray-500 font-body2_m">{product.name}</p>
      </Flex>
    </div>
  );
}
