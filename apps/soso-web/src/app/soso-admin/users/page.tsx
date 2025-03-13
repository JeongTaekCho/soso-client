// src/app/soso-admin/users/page.tsx
import Pagination from '@/app/soso-admin/users/components/Pagination';
import SearchBar from '@/app/soso-admin/users/components/SearchBar';
import UserList from '@/app/soso-admin/users/components/UserList';
import Flex from '@/shared/components/layout/Flex';

export default function UserManagementPage() {
  return (
    <Flex direction="col" gap={24}>
      <h1 className="font-header1">회원 관리</h1>
      <SearchBar />
      <UserList />
      <Pagination currentPage={1} totalPages={5} />
    </Flex>
  );
}
