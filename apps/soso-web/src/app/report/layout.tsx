import { ReactNode, Suspense } from 'react';
import dynamic from 'next/dynamic';

interface ReportLayoutProps {
  children: ReactNode;
  write: ReactNode;
  address: ReactNode;
}

const WriteComponent = dynamic(() => import('@/app/report/@write/default'), { ssr: false });
const AddressComponent = dynamic(() => import('@/app/report/@address/default'), { ssr: false });

export default function ReportLayout({ children, write, address }: ReportLayoutProps) {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <AddressComponent />
        <WriteComponent />
        {address}
        {write}
      </Suspense>
      {children}
    </div>
  );
}
