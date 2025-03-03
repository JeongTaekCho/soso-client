import { PaginationType } from '@/shared/types/paginationType';
import { ShopType } from '@/shared/types/shopType';

export interface SearchListType {
  data: ShopType[];
  pageInfo: PaginationType;
}

export interface GetSearchListResponse {
  pageParams: number[];
  pages: SearchListType[];
}
