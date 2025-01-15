'use client';

import AuthComponent from '@/shared/components/config/AuthComponent';
import BottomNavigation from '@/shared/components/layout/BottomNavigation';
import TanstackQueryProvider from '@/shared/components/provider/TanstackQueryProvider';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface RootLayoutProviderProps {
  children: ReactNode;
}

export default function RootLayoutProvider({ children }: RootLayoutProviderProps) {
  const pathname = usePathname();

  const isHiddenNavigation = pathname.includes('/login');

  const setVh = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  };

  window.addEventListener('resize', setVh);
  setVh();

  return (
    <div>
      <TanstackQueryProvider>
        <AuthComponent />
        <div
          className={`h-screenVh m-auto w-full max-w-screen overflow-y-auto pb-60 ${pathname === '/' ? 'pt-0' : 'px-20 pt-56'} `}
        >
          {children}
          {!isHiddenNavigation && <BottomNavigation />}
        </div>
        <div id="modal-root" className=""></div>
      </TanstackQueryProvider>
    </div>
  );
}
