'use client';

import TanstackQueryProvider from '@/shared/components/provider/TanstackQueryProvider';
import { ReactNode } from 'react';

interface RootLayoutProviderProps {
  children: ReactNode;
}

export default function RootLayoutProvider({ children }: RootLayoutProviderProps) {
  return (
    <>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </>
  );
}
