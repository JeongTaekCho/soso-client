import { ProductType } from '@/shared/types/shopType';
import { create } from 'zustand';

interface ProductStoreState {
  productList: ProductType[];
  setProductList: (products: ProductType[]) => void;
  toggleProduct: (product: ProductType) => void;
  clearProductList: () => void;
}

const useProductListStore = create<ProductStoreState>((set) => ({
  productList: [],

  // 전체 상품 리스트 설정
  setProductList: (products) => set({ productList: products }),

  // 상품 토글 (선택/선택 해제)
  toggleProduct: (product) =>
    set((state) => {
      const isProductInList = state.productList.some((p) => p.id === product.id);
      const updatedList = isProductInList
        ? state.productList.filter((p) => p.id !== product.id)
        : [...state.productList, product];

      return { productList: updatedList };
    }),

  // 상품 리스트 완전 초기화
  clearProductList: () => set({ productList: [] }),
}));

export default useProductListStore;
