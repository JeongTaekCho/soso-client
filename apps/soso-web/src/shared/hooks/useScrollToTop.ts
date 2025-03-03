'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function useScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log('123');
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);
}
