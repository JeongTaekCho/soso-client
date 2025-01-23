import Flex from '@/shared/components/layout/Flex';
import Image from 'next/image';

interface SellProductProps {
  name: string;
  imgUrl: string;
}

export default function SellProduct({ name, imgUrl }: SellProductProps) {
  return (
    <Flex direction="col" gap={6} justify="center" align="center">
      <Flex justify="center" align="center" className="h-72 w-72 rounded-12 bg-gray-50">
        <Image src={imgUrl} width={48} height={48} objectFit="cover" alt="판매상품 이미지" />
      </Flex>
      <p className="text-gray-500 font-body2_m">{name}</p>
    </Flex>
  );
}
