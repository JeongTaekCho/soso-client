'use client';

import { ReactNode } from 'react';

interface LoginLayoutProps {
  children: ReactNode;
  login: ReactNode;
}

export default function LoginLayout({ children, login }: LoginLayoutProps) {
  return (
    <div className="fixed top-0 px-20 layout-center">
      {login}
      {children}
    </div>
  );
}
