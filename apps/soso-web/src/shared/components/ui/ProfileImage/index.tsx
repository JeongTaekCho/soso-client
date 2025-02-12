import clsx from 'clsx';
import Image from 'next/image';

interface ProfileImage {
  imgUrl?: string;
  size?: number;
  className?: string;
}
export default function ProfileImage({ imgUrl, size, className }: ProfileImage) {
  return (
    <Image
      src={imgUrl || '/images/default_profile.png'}
      width={size || 48}
      height={size || 48}
      className={clsx('rounded-full border border-gray-100 bg-gray-100', className)}
      alt="프로필"
    />
  );
}
