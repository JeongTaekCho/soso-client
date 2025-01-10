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
}

export default function Header({ type, title, customBtn }: HeaderProps) {
  const { handleBack } = useBack();

  return (
    <div className="h-56 w-full bg-white px-20">
      {!type && (
        <Flex align="center" className="h-full w-full">
          <h1 className="font-title3_bold">{title}</h1>{' '}
        </Flex>
      )}
      {type && type !== 'search' && (
        <Flex justify="between" align="center" className="h-full w-full">
          <div>
            <button>{type === 'close' && <XIcon />}</button>
            <button onClick={handleBack}>{type === 'back' && <BackIcon />}</button>
          </div>
          <div className="font-title4_semi">{title}</div>
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
