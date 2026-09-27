<script setup lang="ts">
import type { Product } from '@catalog/contracts';
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import ErrorState from '@/components/ErrorState.vue';
import LoadingState from '@/components/LoadingState.vue';
import { getProduct } from '@/services/products.service';

const route = useRoute();
const product = ref<Product>();
const error = ref('');

async function loadProduct(): Promise<void> {
  error.value = '';
  product.value = undefined;
  try {
    product.value = await getProduct(String(route.params.id));
  } catch {
    error.value = 'This product could not be found.';
  }
}

onMounted(() => void loadProduct());
</script>

<template>
  <LoadingState v-if="!product && !error" />
  <ErrorState v-else-if="error" :message="error" @retry="loadProduct" />
  <article v-else-if="product" class="product-detail">
    <img :src="product.imageUrl" :alt="product.name" />
    <div>
      <RouterLink class="back-link" to="/products">← All products</RouterLink>
      <p class="product-category">{{ product.category }}</p>
      <h1>{{ product.name }}</h1>
      <p class="detail-description">{{ product.description }}</p>
      <p class="detail-price">
        {{
          new Intl.NumberFormat('en-US', { style: 'currency', currency: product.currency }).format(
            product.price,
          )
        }}
      </p>
      <p>{{ product.inStock ? 'Available to order' : 'Currently unavailable' }}</p>
    </div>
  </article>
</template>
