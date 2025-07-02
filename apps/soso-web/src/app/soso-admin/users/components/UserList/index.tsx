'use client'

import { useState } from 'react'
import Flex from '@/shared/components/layout/Flex'
import UserItem from '@/app/soso-admin/users/components/UserList/components/UserItem'

// 하드코딩된 임시 회원 데이터
const dummyUsers = [
  {
    id: 'user-1',
    name: '홍길동',
    email: 'hong@example.com',
    phone: '010-1234-5678',
    createdAt: '2023-01-15T00:00:00Z',
    status: 'active' as const,
    lastLogin: '2023-10-05T14:30:00Z',
    role: 'user' as const,
  },
  {
    id: 'user-2',
    name: '김철수',
    email: 'kim@example.com',
    phone: '010-5678-1234',
    createdAt: '2023-02-20T00:00:00Z',
    status: 'inactive' as const,
    lastLogin: '2023-08-15T09:45:00Z',
    role: 'admin' as const,
  },
  {
    id: 'user-3',
    name: '이영희',
    email: 'lee@example.com',
    phone: '010-9876-5432',
    createdAt: '2023-03-10T00:00:00Z',
    status: 'suspended' as const,
    lastLogin: '2023-09-20T16:20:00Z',
    role: 'user' as const,
  },
]

const UserList = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [userToDelete, setUserToDelete] = useState<string | null>(null)

  const handleDelete = (id: string) => {
    setUserToDelete(id)
    setIsDeleteModalOpen(true)
  }

  return (
    <div className="mt-16 w-full">
      <Flex justify="between" align="center" className="mb-16 w-full">
        <h2 className="font-title2_bold">회원 목록</h2>
      </Flex>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-12 py-16 font-body1_bold">닉네임</th>
              <th className="px-12 py-16 font-body1_bold">이메일</th>
              <th className="px-12 py-16 font-body1_bold">전화번호</th>
              <th className="px-12 py-16 font-body1_bold">가입일</th>
              <th className="px-12 py-16 font-body1_bold">상태</th>
              <th className="px-12 py-16 font-body1_bold">최근 로그인</th>
              <th className="px-12 py-16 text-right font-body1_bold">관리</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((user) => (
              <UserItem key={user.id} user={user} onDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>

      {/* 삭제 확인 모달 */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-modal flex items-center justify-center bg-black-50">
          <div className="mx-auto w-full max-w-[400px] rounded-16 bg-white p-24">
            <h3 className="mb-16 font-title3_bold">회원 삭제 확인</h3>
            <p className="mb-24">정말로 이 회원을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.</p>
            <Flex justify="end" gap={12}>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="rounded-8 bg-gray-100 px-16 py-8 text-gray-600 hover:bg-gray-200"
              >
                취소
              </button>
              <button
                onClick={() => {
                  setIsDeleteModalOpen(false)
                }}
                className="rounded-8 bg-etc-red px-16 py-8 text-white hover:bg-red-700"
              >
                삭제
              </button>
            </Flex>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserList
