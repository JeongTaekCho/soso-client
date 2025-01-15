'use client';

import BackIcon from '@/shared/components/icons/BackIcon.tsx';
import XIcon from '@/shared/components/icons/XIcon';
import Flex from '@/shared/components/layout/Flex';
import HeaderSearch from '@/shared/components/layout/Header/components/HeaderSearch';
import useBack from '@/shared/hooks/useBack';
import { ReactNode } from 'react';

interface HeaderProps {
  type?: 'close' | 'back' | 'customBack' | 'search';
  title?: string;
  customBtn?: ReactNode;
  top?: string;
}

export default function Header({ type, title, customBtn, top }: HeaderProps) {
  const { handleBack } = useBack();

  return (
    <div
      style={{
        top: top || '0',
      }}
      className="fixed left-0 top-0 z-sticky h-56 w-full px-20 layout-center"
    >
      {!type && (
        <Flex align="center" className="h-full w-full">
          <h1 className="font-title3_bold">{title}</h1>{' '}
        </Flex>
      )}
      {type && type !== 'search' && (
        <Flex justify="between" align="center" className="relative h-full w-full">
          <div>
            <button>{type === 'close' && <XIcon />}</button>
            <button onClick={handleBack}>{type === 'back' && <BackIcon />}</button>
          </div>
          <h2 className="position-center font-title4_semi">{title}</h2>
          <div>{customBtn}</div>
        </Flex>
      )}
      {type === 'search' && (
        <Flex className="h-full w-full" align="center">
          <HeaderSearch />
        </Flex>
      )}
    </div>
  );
}
