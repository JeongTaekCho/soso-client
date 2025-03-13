'use client';

import { useState } from 'react';
import Flex from '@/shared/components/layout/Flex';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('검색:', search, '상태:', status);
  };

  return (
    <form onSubmit={handleSearch} className="mb-24 w-full">
      <Flex gap={12} className="w-full">
        <div className="flex-1">
          <input
            type="text"
            placeholder="이름, 이메일 또는 전화번호로 검색"
            className="h-40 w-full rounded-8 border border-gray-200 px-16 focus:border-orange-normal focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="w-150">
          <select
            className="h-40 w-full rounded-8 border border-gray-200 px-16 focus:border-orange-normal focus:outline-none"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">모든 상태</option>
            <option value="active">활성</option>
            <option value="inactive">비활성</option>
            <option value="suspended">정지됨</option>
          </select>
        </div>

        <button type="submit" className="h-40 w-100 rounded-8 bg-orange-normal text-white hover:bg-orange-normalHover">
          검색
        </button>

        <button
          type="button"
          onClick={() => {
            setSearch('');
            setStatus('all');
          }}
          className="h-40 w-100 rounded-8 bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          초기화
        </button>
      </Flex>
    </form>
  );
};

export default SearchBar;
