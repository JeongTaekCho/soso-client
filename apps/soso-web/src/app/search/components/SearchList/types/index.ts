import { PaginationType } from '@/shared/types/paginationType'
import { ShopType } from '@/shared/types/shopType'

export interface SearchListType {
  data: ShopType[]
  pageInfo: PaginationType
}

export interface GetSearchListResponse {
  pageParams: number[]
  pages: SearchListType[]
}

export interface UserFindShopType {
  id: number
  shopId: number
  uuid: string
  shopName: string
  createdAt: string
}

export type GetUserFindShopResponse = UserFindShopType[]

export interface DeleteUserFindShopRequest {
  shopName: string
}
