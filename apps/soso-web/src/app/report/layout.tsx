import { ReactNode } from 'react';

interface ReportLayoutProps {
  children: ReactNode;
  write: ReactNode;
  address: ReactNode;
}

export default function ReportLayout({ children, write, address }: ReportLayoutProps) {
  return (
    <div>
      <div>
        {write}
        {address}
      </div>
      {children}
    </div>
  );
}
