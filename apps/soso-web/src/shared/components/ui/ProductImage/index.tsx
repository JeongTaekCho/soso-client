import clsx from 'clsx';
import Image from 'next/image';

interface ProductImageProps {
  imgUrl?: string;
  size?: number;
  className?: string;
}
export default function ProductImage({ imgUrl, size, className }: ProductImageProps) {
  return (
    <Image
      src={imgUrl || '/images/default_item.svg'}
      width={size || 72}
      height={size || 72}
      className={clsx('rounded-12', className)}
      alt="프로덕트 이미지"
    />
  );
}
