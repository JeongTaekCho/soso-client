'use client';

import BottomNavigation from '@/shared/components/layout/BottomNavigation';
import TanstackQueryProvider from '@/shared/components/provider/TanstackQueryProvider';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface RootLayoutProviderProps {
  children: ReactNode;
}

export default function RootLayoutProvider({ children }: RootLayoutProviderProps) {
  const pathname = usePathname();

  return (
    <>
      <TanstackQueryProvider>
        <div className={`min-h-screen pb-60 ${pathname === '/' ? 'pt-0' : 'pt-56'} `}>
          {children}
          <BottomNavigation />
        </div>
      </TanstackQueryProvider>
    </>
  );
}
