'use client';

import { useAuthStore } from '@/shared/store/useAuthStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthComponent() {
  const router = useRouter();

  const { isHydrated, userType } = useAuthStore();

  // useEffect(() => {
  //   if (!isHydrated) return;

  //   if (userType === 'login' || userType === 'guest') {
  //     return;
  //   }

  //   router.push('/login');
  // }, [userType, isHydrated]);

  return null;
}
