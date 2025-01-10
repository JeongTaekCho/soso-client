'use client';

import Header from '@/shared/components/layout/Header';
import dynamic from 'next/dynamic';

const NaverMap = dynamic(() => import('../../../../shared/components/layout/NaverMap'), { ssr: false });
export default function HomePage() {
  return (
    <div>
      <Header type="search" top="20px" />
      <NaverMap />
    </div>
  );
}
