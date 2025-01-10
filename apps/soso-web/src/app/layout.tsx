import type { Metadata } from 'next';
import RootLayoutProvider from '@/shared/components/provider/RootLayoutProvider';
import './globals.css';

export const metadata: Metadata = {
  title: '소소',
  description: '소소한 프로젝트',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootLayoutProvider>{children}</RootLayoutProvider>
      </body>
    </html>
  );
}
