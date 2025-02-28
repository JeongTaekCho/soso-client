import { PaginationType } from '@/shared/types/paginationType';
import { ShopType } from '@/shared/types/shopType';

export interface GetSearchListResponse {
  data: ShopType[];
  pageInfo: PaginationType;
}
