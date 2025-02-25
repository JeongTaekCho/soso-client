'use client';

import { useEffect } from 'react';
import { useGetTokenMutation } from '@/app/login/callback/hooks/useGetTokenMutation';
import { useSearchParams } from 'next/navigation';

const AuthCallback = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const { mutate: getTokenMutate } = useGetTokenMutation();

  useEffect(() => {
    if (!code) return;

    const data = {
      code,
      redirectUri: `${window.location.origin}/login/callback`,
    };

    getTokenMutate(data);
  }, [code]);

  return <div>로딩중 들어갈 예정...</div>;
};

export default AuthCallback;
