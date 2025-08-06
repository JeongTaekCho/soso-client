import { customFetch } from '@/shared/utils/customFetch'

export const deleteSubmitShop = async (id: string) => {
  const result = await customFetch(`/submit/${id}`, {
    method: 'DELETE',
  })

  return result
}
