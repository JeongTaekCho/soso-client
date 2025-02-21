import { ProductType } from '@/shared/types/shopType';
import { create } from 'zustand';

interface ProductStoreState {
  productList: ProductType[];
  selectedProducts: ProductType[];
  setProductList: () => void;
  toggleProduct: (product: ProductType) => void;
  resetSelectedProducts: () => void;
  clearProductList: () => void;
}

const useProductListStore = create<ProductStoreState>((set, get) => ({
  productList: [],
  selectedProducts: [],

  setProductList: () => set((state) => ({ productList: [...state.selectedProducts] })),

  toggleProduct: (product) =>
    set((state) => {
      const isProductInList = state.selectedProducts.some((p) => p.id === product.id);
      const updatedList = isProductInList
        ? state.selectedProducts.filter((p) => p.id !== product.id)
        : [...state.selectedProducts, product];

      return { selectedProducts: updatedList };
    }),

  resetSelectedProducts: () => set({ selectedProducts: [...get().productList] }),
  clearProductList: () => set({ productList: [], selectedProducts: [] }),
}));

export default useProductListStore;
