import { User } from '@/app/soso-admin/users/types/user';
import Flex from '@/shared/components/layout/Flex';

interface UserItemProps {
  user: User;
  onDelete: (id: string) => void;
}

const UserItem = ({ user, onDelete }: UserItemProps) => {
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-etc-green text-white';
      case 'inactive':
        return 'bg-gray-400 text-white';
      case 'suspended':
        return 'bg-etc-red text-white';
      default:
        return 'bg-gray-200 text-gray-600';
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-12 py-16">{user.name}</td>
      <td className="px-12 py-16">{user.email}</td>
      <td className="px-12 py-16">{user.phone}</td>
      <td className="px-12 py-16">{formatDate(user.createdAt)}</td>
      <td className="px-12 py-16">
        <span className={`rounded-4 px-8 py-4 text-12 ${getStatusBadgeClass(user.status)}`}>
          {user.status === 'active' ? '활성' : user.status === 'inactive' ? '비활성' : '정지됨'}
        </span>
      </td>
      <td className="px-12 py-16">{formatDate(user.lastLogin)}</td>
      <td className="px-12 py-16">
        <Flex gap={8} justify="end">
          <button onClick={() => onDelete(user.id)} className="px-8 py-4 text-etc-red hover:text-red-700">
            삭제
          </button>
        </Flex>
      </td>
    </tr>
  );
};

export default UserItem;
