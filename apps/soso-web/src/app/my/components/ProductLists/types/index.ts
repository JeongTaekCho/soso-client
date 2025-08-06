import { PaginationType } from '@/shared/types/paginationType'
import { ShopType } from '@/shared/types/shopType'

export interface MyWishType {
  shop: {
    id: number
    name: string
    image: null | string
    type: number
    reportStatus: number
    lat: number
    lng: number
    location: string
    region: {
      id: number
      name: string
    }
  }
}

export interface GetMyWishResponse {
  data: MyWishType[]
  pageInfo: PaginationType
}

export type GetMyWishResponseType = {
  pageParams: number[]
  pages: GetMyWishResponse
}

export interface MyReviewType {
  id: number
  content: string
  createdAt: string
  shop: ShopType
  images: {
    id: number
    url: string
  }[]
}

export interface GetMyReviewResponse {
  data: MyReviewType[]
  pageInfo: PaginationType
}

export type GetMyReviewResponseType = {
  pageParams: number[]
  pages: GetMyReviewResponse
}

export interface MyShopType {
  id: number
  type: number
  status: number
  rejectMessage: string | null
  submitStatus: number
  createdAt: string
  shop: {
    id: number
    image: string | null
    instagram: string | null
    lat: number
    lng: number
    location: string
    name: string
    type: number
  }
}

export interface GetMyShopResponse {
  data: MyShopType[]
  pageInfo: PaginationType
}

export type GetMyShopResponseType = {
  pageParams: number[]
  pages: GetMyShopResponse
}
