import { customFetch } from '@/shared/utils/customFetch'

export const appleLogin = async (idToken: string) => {
  const result = await customFetch('/auth/apple', {
    method: 'POST',
    body: {
      idToken: idToken,
    },
  })

  return result
}
