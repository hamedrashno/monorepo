<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import EmptyState from '@/components/EmptyState.vue';
import ErrorState from '@/components/ErrorState.vue';
import LoadingState from '@/components/LoadingState.vue';
import ProductCard from '@/components/ProductCard.vue';
import { useProductsStore } from '@/stores/products';

const store = useProductsStore();
const search = ref('');
const isFirstLoad = computed(() => store.isLoading && store.items.length === 0);

async function loadProducts(): Promise<void> {
  await store.load(search.value.trim() || undefined);
}

let debounceTimer: ReturnType<typeof setTimeout> | undefined;
watch(search, () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => void loadProducts(), 250);
});

onMounted(() => void loadProducts());
</script>

<template>
  <section class="catalog-header">
    <h1>Explore curated products</h1>
    <p>Find practical products for your workday, selected for quality and reliability.</p>
    <label class="search-field">
      <span class="sr-only">Search products</span>
      <input v-model="search" type="search" placeholder="Search products…" />
    </label>
  </section>

  <LoadingState v-if="isFirstLoad" />
  <ErrorState v-else-if="store.error" :message="store.error" @retry="loadProducts" />
  <EmptyState v-else-if="store.items.length === 0" />
  <section v-else class="product-grid" aria-label="Products">
    <ProductCard v-for="product in store.items" :key="product.id" :product="product" />
  </section>
</template>
