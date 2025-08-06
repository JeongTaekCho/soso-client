import { SearchListType } from '@/app/search/components/SearchList/types'
import { customFetch } from '@/shared/utils/customFetch'

export const getShopSearchList = async (
  shopName: string,
  page: number,
  limit: number,
  lat: number,
  lng: number
): Promise<SearchListType> => {
  const result = await customFetch(`/shop/search?keyword=${shopName}&page=${page}&limit=${limit}&lat=${lat}&lng=${lng}`)
  return result.result
}
