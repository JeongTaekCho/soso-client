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
      {
        id: 4,
        name: '소품샵 D',
        reportStatus: 0,
        lat: 37.5468,
        lng: 127.057,
        location: '서울 성동구 성수동2가 99-18',
      },
      {
        id: 5,
        name: '소품샵 E',
        reportStatus: 1,
        lat: 37.5475,
        lng: 127.0563,
        location: '서울 성동구 성수동1가 25-10',
      },
      {
        id: 6,
        name: '소품샵 F',
        reportStatus: 0,
        lat: 37.5432,
        lng: 127.0591,
        location: '서울 성동구 성수동2가 45-32',
      },
      {
        id: 7,
        name: '소품샵 G',
        reportStatus: 1,
        lat: 37.5453,
        lng: 127.0575,
        location: '서울 성동구 성수동1가 72-5',
      },
      {
        id: 8,
        name: '소품샵 H',
        reportStatus: 0,
        lat: 37.547,
        lng: 127.058,
        location: '서울 성동구 성수동2가 18-10',
      },
      {
        id: 9,
        name: '소품샵 I',
        reportStatus: 0,
        lat: 37.5482,
        lng: 127.0547,
        location: '서울 성동구 성수동1가 33-22',
      },
      {
        id: 10,
        name: '소품샵 J',
        reportStatus: 0,
        lat: 37.5448,
        lng: 127.0565,
        location: '서울 성동구 성수동2가 60-8',
      },
    ];

    // 1초 지연 후 데이터 반환
    setTimeout(() => {
      resolve(locations);
    }, 1000);
  });
  return result;
  // return result.result;
};
