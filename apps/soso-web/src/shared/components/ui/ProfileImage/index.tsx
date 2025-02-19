import clsx from 'clsx';
import Image from 'next/image';

interface ProfileImage {
  imgUrl?: string | null;
  size?: number;
  className?: string;
}
export default function ProfileImage({ imgUrl, size, className }: ProfileImage) {
  return (
    <div
      style={{
        width: size || 48,
        height: size || 48,
      }}
      className={clsx('relative overflow-hidden rounded-full border border-gray-100 bg-gray-100', className)}
    >
      <Image src={imgUrl || '/images/default_profile.png'} fill style={{ objectFit: 'cover' }} alt="프로필" />
    </div>
  );
}
