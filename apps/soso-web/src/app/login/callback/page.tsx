'use client';

import { useEffect, useState } from 'react';
import { useGetTokenMutation } from '@/app/login/callback/hooks/useGetTokenMutation';
import { useSearchParams } from 'next/navigation';

const AuthCallback = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const { mutate: getTokenMutate } = useGetTokenMutation();
  const [redirectUri, setRedirectUri] = useState('');

  useEffect(() => {
    setRedirectUri(`${window.location.origin}/login/callback`);
  }, []);

  useEffect(() => {
    if (!code || !redirectUri) return;

    const data = {
      code,
      redirectUri,
    };

    getTokenMutate(data);
  }, [code, redirectUri]);

  return <div>로딩중 들어갈 예정...</div>;
};

export default AuthCallback;
