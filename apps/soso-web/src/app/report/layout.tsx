import { ReactNode } from 'react';

interface ReportLayoutProps {
  children: ReactNode;
  write: ReactNode;
}

export default function ReportLayout({ children, write }: ReportLayoutProps) {
  return (
    <>
      {children}
      {write}
    </>
  );
}
