import { appleLogin } from '@/app/login/components/AppleLogin/api/appleLogin'
import { useAuthStore } from '@/shared/store/useAuthStore'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const useAppleLoginMutation = () => {
  const router = useRouter()
  const { setToken, setRefreshToken } = useAuthStore()

  return useMutation({
    mutationKey: ['appleLogin'],
    mutationFn: (idToken: string) => appleLogin(idToken),
    onSuccess: (data) => {
      setToken(data.result.accessToken)
      setRefreshToken(data.result.refreshToken)
      router.push('/')
    },
  })
}
