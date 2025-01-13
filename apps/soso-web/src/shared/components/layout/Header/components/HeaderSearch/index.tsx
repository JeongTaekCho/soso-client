'use client';

import SearchIcon from '@/shared/components/icons/SearchIcon';
import Input from '@/shared/components/inputs/Input';
import useDebounce from '@/shared/hooks/useDebounce';
import { useSearchStore } from '@/shared/store/useSearchStore';
import { usePathname } from 'next/navigation';
import { ChangeEvent, useEffect } from 'react';

export default function HeaderSearch() {
  const { searchValue, setSearchValue } = useSearchStore();
  const pathname = usePathname();

  const searchDebounceValue = useDebounce(searchValue, 300);

  console.log(searchDebounceValue);

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setSearchValue('');
  }, [pathname]);

  return (
    <div className="relative h-46 w-full">
      <div className="absolute left-16 top-1/2 -translate-y-1/2">
        <SearchIcon fill="#9EA4AA" />
      </div>
      <Input
        height="100%"
        placeholder="찾고있는 소품샵이 있나요?"
        className="pl-46"
        value={searchValue}
        onChange={handleChangeSearchValue}
      />
    </div>
  );
}
