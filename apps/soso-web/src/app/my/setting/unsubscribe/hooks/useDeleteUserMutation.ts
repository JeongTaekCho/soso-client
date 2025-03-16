import { deleteUser } from '@/app/my/setting/unsubscribe/api/deleteUser';
import { DeleteUserRequest } from '@/app/my/setting/unsubscribe/types';
import { useDialog } from '@/shared/context/DialogContext';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useDeleteUserMutation = () => {
  const router = useRouter();
  const { clearToken } = useAuthStore();
  const { closeDialog } = useDialog();

  return useMutation({
    mutationKey: ['deleteUser'],
    mutationFn: (data: DeleteUserRequest) => deleteUser(data),
    onSuccess: () => {
      router.push('/login');
      clearToken();
      closeDialog();
    },
  });
};
