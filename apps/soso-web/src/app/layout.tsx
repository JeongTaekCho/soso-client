import type { Metadata } from 'next';
import RootLayoutProvider from '@/shared/components/provider/RootLayoutProvider';
import './globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

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
