import { ReactNode } from 'react';

interface ReportLayoutProps {
  children: ReactNode;
  write: ReactNode;
  address: ReactNode;
}

export default function ReportLayout({ children, write, address }: ReportLayoutProps) {
  return (
    <div>
      {write}
      {address}
      {children}
    </div>
  );
}
