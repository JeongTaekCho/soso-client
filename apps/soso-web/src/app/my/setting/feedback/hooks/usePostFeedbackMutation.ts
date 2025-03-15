import { postFeedback } from '@/app/my/setting/feedback/api/postFeedback';
import { PostFeedbackRequest } from '@/app/my/setting/feedback/types';
import { useToast } from '@/shared/context/ToastContext';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePostFeedbackMutation = () => {
  const router = useRouter();
  const { openToast } = useToast();

  return useMutation({
    mutationKey: ['postFeedback'],
    mutationFn: (data: PostFeedbackRequest) => postFeedback(data),
    onSuccess: () => {
      router.push('/my/setting');
      openToast({ message: '소중한 의견 남겨주셔서 감사해요! ❤' });
    },
  });
};
