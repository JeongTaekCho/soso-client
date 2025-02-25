'use client';

import { useAuthStore } from '@/shared/store/useAuthStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthComponent() {
  const router = useRouter();

  const { isHydrated, token } = useAuthStore();

  useEffect(() => {
    if (!isHydrated || !token) return;
    if (token) {
      router.push('/');
    }
  }, [token, isHydrated]);

  return null;
}
