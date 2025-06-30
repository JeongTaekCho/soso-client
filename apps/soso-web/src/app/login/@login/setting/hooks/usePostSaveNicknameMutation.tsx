import { postSaveNickname } from '@/app/login/@login/setting/api/postSaveNickname'
import { useDialog } from '@/shared/context/DialogContext'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FieldValues } from 'react-hook-form'

export const usePostSaveNicknameMutation = () => {
  const router = useRouter()
  const { openDialog } = useDialog()

  return useMutation({
    mutationKey: ['postSaveNickname'],
    mutationFn: (data: FieldValues) => postSaveNickname(data),
    onSuccess: () => {
      router.push('/')
      openDialog({
        type: 'alert',
        title: '환영합니다',
        message: (
          <span>
            소중한 소품샵에
            <br /> 회원이 되신 것을 축하드립니다.
          </span>
        ),
      })
    },
    onError: (err) => {
      openDialog({
        type: 'alert',
        title: '가입 에러',
        message: '잠시 후 다시 요청해주세요.',
      })
    },
  })
}
