import { ShopType } from '@/shared/types/shopType';
import { customFetch } from '@/shared/utils/customFetch';

export const getShop = async (): Promise<ShopType[]> => {
  // const result = await customFetch('/shop');
  const result = await new Promise<ShopType[]>((resolve) => {
    const locations: any = [
      {
        id: 1,
        name: '소품샵 A',
        reportStatus: 0,
        lat: 37.5446,
        lng: 127.0558,
        location: '서울 성동구 성수동1가 10-12',
      },
      {
        id: 2,
        name: '소품샵 B',
        reportStatus: 0,
        lat: 37.5441,
        lng: 127.0583,
        location: '서울 성동구 성수동2가 333-22',
      },
      {
        id: 3,
        name: '소품샵 C',
        reportStatus: 0,
        lat: 37.5487,
        lng: 127.055,
        location: '서울 성동구 성수동1가 50-16',
      },
    ];

    // 1초 지연 후 데이터 반환
    setTimeout(() => {
      resolve(locations);
    }, 1000);
  });
  // return result.result;
  return result;
};
