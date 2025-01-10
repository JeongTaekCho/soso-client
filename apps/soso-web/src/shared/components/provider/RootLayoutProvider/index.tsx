'use client';

import BottomNavigation from '@/shared/components/layout/BottomNavigation';
import TanstackQueryProvider from '@/shared/components/provider/TanstackQueryProvider';
import { ReactNode } from 'react';

interface RootLayoutProviderProps {
  children: ReactNode;
}

export default function RootLayoutProvider({ children }: RootLayoutProviderProps) {
  return (
    <>
      <TanstackQueryProvider>
        <div className="min-h-screen pb-60">
          {children}
          <BottomNavigation />
        </div>
      </TanstackQueryProvider>
    </>
  );
}
