'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useGetTokenMutation } from '@/app/login/callback/hooks/useGetTokenMutation';

const AuthCallback = () => {
  <Suspense fallback={'로딩중'}>
    <AuthCallbackContent />
  </Suspense>;
};

const AuthCallbackContent = () => {
  const searchParams = useSearchParams();
  const [code, setCode] = useState<string | null>(null);
  const [redirectUri, setRedirectUri] = useState('');

  const { mutate: getTokenMutate } = useGetTokenMutation();

  useEffect(() => {
    setRedirectUri(`${window.location.origin}/login/callback`);
  }, []);

  useEffect(() => {
    const authCode = searchParams.get('code');
    if (authCode) {
      setCode(authCode);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!code || !redirectUri) return;

    const data = {
      code,
      redirectUri,
    };

    getTokenMutate(data);
  }, [code, redirectUri]);

  return <div>로딩중...</div>;
};

export default AuthCallback;
