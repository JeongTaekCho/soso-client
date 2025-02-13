'use client';

import { useSocialLoginMutation } from '@/app/login/hooks/useSocialLoginMutation';
import Flex from '@/shared/components/layout/Flex';

export default function LoginPage() {
  const { mutate } = useSocialLoginMutation();

  const handleLogin = () => {
    mutate();
  };

  return (
    <Flex justify="center" align="center" className="h-screenVh w-full">
      <button
        onClick={handleLogin}
        className="flex h-56 w-full items-center justify-center rounded-16 bg-gray-50 font-body1_m"
      >
        구글 로그인
      </button>
    </Flex>
  );
}
