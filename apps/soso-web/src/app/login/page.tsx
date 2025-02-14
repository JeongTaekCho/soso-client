import GoogleIcon from '@/shared/components/icons/GoogleIcon';
import Flex from '@/shared/components/layout/Flex';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <Flex justify="center" align="center" className="h-screenVh w-full">
      <Image
        width={205}
        height={120}
        style={{ width: '68%', height: 'auto' }}
        src="/images/logo.svg"
        alt="소소 로고"
        className="mb-[200px]"
      />
      <Flex
        direction="col"
        gap={12}
        justify="center"
        className="fixed bottom-100 left-1/2 w-full -translate-x-1/2 px-16"
      >
        <Link
          href={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`}
          className="relative flex h-56 w-full items-center justify-center rounded-16 bg-[#F3EDE8] font-body1_m"
        >
          <div className="absolute left-14 top-1/2 -translate-y-1/2">
            <GoogleIcon />
          </div>
          Google로 시작하기
        </Link>
        <Link
          href={'/'}
          className="relative flex h-56 w-full items-center justify-center rounded-16 bg-[#F3EDE8] font-body1_m"
        >
          로그인 없이 시작하기
        </Link>
      </Flex>
    </Flex>
  );
}
