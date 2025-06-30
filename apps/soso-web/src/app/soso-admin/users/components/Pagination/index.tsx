'use client'

import { useState } from 'react'
import Flex from '@/shared/components/layout/Flex'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const handlePageChange = (page: number) => {}

  // 페이지 범위 계산 (현재 페이지 주변에 최대 5개 페이지 표시)
  const getPageRange = () => {
    const range = []
    const rangeSize = 5
    const rangeStart = Math.max(1, currentPage - Math.floor(rangeSize / 2))
    const rangeEnd = Math.min(totalPages, rangeStart + rangeSize - 1)

    for (let i = rangeStart; i <= rangeEnd; i++) {
      range.push(i)
    }
    return range
  }

  return (
    <Flex justify="center" className="mt-32 w-full">
      <Flex align="center" gap={4}>
        {/* 이전 페이지 버튼 */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex h-36 w-36 items-center justify-center rounded-4 ${
            currentPage === 1 ? 'cursor-not-allowed text-gray-400' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          &lt;
        </button>

        {/* 첫 페이지 */}
        {getPageRange()[0] > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className="flex h-36 w-36 items-center justify-center rounded-4 hover:bg-gray-100"
            >
              1
            </button>
            {getPageRange()[0] > 2 && <span className="flex h-36 w-36 items-center justify-center">...</span>}
          </>
        )}

        {/* 페이지 번호 */}
        {getPageRange().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`flex h-36 w-36 items-center justify-center rounded-4 ${
              page === currentPage ? 'bg-orange-normal text-white' : 'hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}

        {/* 마지막 페이지 */}
        {getPageRange()[getPageRange().length - 1] < totalPages && (
          <>
            {getPageRange()[getPageRange().length - 1] < totalPages - 1 && (
              <span className="flex h-36 w-36 items-center justify-center">...</span>
            )}
            <button
              onClick={() => handlePageChange(totalPages)}
              className="flex h-36 w-36 items-center justify-center rounded-4 hover:bg-gray-100"
            >
              {totalPages}
            </button>
          </>
        )}

        {/* 다음 페이지 버튼 */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex h-36 w-36 items-center justify-center rounded-4 ${
            currentPage === totalPages ? 'cursor-not-allowed text-gray-400' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          &gt;
        </button>
      </Flex>
    </Flex>
  )
}

export default Pagination
