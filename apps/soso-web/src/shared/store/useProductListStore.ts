// src/shared/store/useProductStore.ts
import { ProductType } from '@/shared/types/shopType';
import { create } from 'zustand';

interface ProductStoreState {
  addProductList: ProductType[];
  productList: ProductType[];
  setProductList: () => void;
  toggleProduct: (product: ProductType) => void;
  clearProductList: () => void;
}

const useProductListStore = create<ProductStoreState>((set) => ({
  productList: [],
  addProductList: [],

  setProductList: () => set((state) => ({ productList: [...state.addProductList] })),

  toggleProduct: (product) =>
    set((state) => {
      const isProductInList = state.addProductList.some((p) => p.id === product.id);

      const updatedList = isProductInList
        ? state.addProductList.filter((p) => p.id !== product.id)
        : [...state.addProductList, product];

      return { addProductList: updatedList };
    }),

  clearProductList: () => set({ addProductList: [] }),
}));

export default useProductListStore;
