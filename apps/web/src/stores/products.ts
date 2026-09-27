import type { Product } from '@catalog/contracts';
import { defineStore } from 'pinia';
import { getProducts } from '@/services/products.service';

function toMessage(error: unknown): string {
  return error instanceof Error ? error.message : 'Could not load products. Please try again.';
}

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: [] as Product[],
    isLoading: false,
    error: '' as string,
  }),
  actions: {
    async load(search?: string): Promise<void> {
      this.isLoading = true;
      this.error = '';
      try {
        this.items = await getProducts(search);
      } catch (error: unknown) {
        this.error = toMessage(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
