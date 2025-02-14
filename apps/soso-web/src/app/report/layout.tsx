import { ReactNode, Suspense } from 'react';

interface ReportLayoutProps {
  children: ReactNode;
  write: ReactNode;
  address: ReactNode;
}

export default function ReportLayout({ children, write, address }: ReportLayoutProps) {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <div>
          {write}
          {address}
        </div>
      </Suspense>
      {children}
    </div>
  );
}
