'use client';

import PlaceCard from '@/shared/components/card/PlaceCard';
import Header from '@/shared/components/layout/Header';
import dynamic from 'next/dynamic';

const NaverMap = dynamic(() => import('../../../../shared/components/layout/NaverMap'), { ssr: false });
export default function HomePage() {
  return (
    <div>
      <Header type="search" top="20px" />
      <NaverMap />
      <div className="layout-center fixed bottom-76 left-1/2 w-screen -translate-x-1/2">
        <PlaceCard />
      </div>
    </div>
  );
}
