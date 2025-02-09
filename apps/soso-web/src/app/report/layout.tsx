import { ReactNode } from 'react';

interface ReportLayoutProps {
  children: ReactNode;
  write: ReactNode;
}

export default function ReportLayout({ children, write }: ReportLayoutProps) {
  return (
    <div>
      <div className="fixed top-0 z-modal layout-center">{write}</div>
      {children}
    </div>
  );
}
