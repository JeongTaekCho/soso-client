import { patchUserProfile } from '@/app/my/edit/api/patchUserProfile';
import { PatchUserRequestType } from '@/app/my/edit/types';
import { useToast } from '@/shared/context/ToastContext';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePatchUserProfileMutation = () => {
  const { openToast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationKey: ['patchUserProfile'],
    mutationFn: (data: PatchUserRequestType) => patchUserProfile(data),
    onSuccess: () => {
      router.push('/my');
      openToast({
        message: '프로필이 변경되었습니다.',
      });
    },
  });
};
