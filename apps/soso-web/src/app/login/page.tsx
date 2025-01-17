import Flex from '@/shared/components/layout/Flex';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <Flex justify="center" align="center" className="h-screenVh w-full">
      <Link
        href={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`}
        className="flex h-56 w-full items-center justify-center rounded-16 bg-gray-50 font-body1_m"
      >
        구글 로그인
      </Link>
    </Flex>
  );
}
