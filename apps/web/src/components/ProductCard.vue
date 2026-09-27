<script setup lang="ts">
import type { Product } from '@catalog/contracts';

defineProps<{ product: Product }>();
</script>

<template>
  <article class="product-card">
    <img class="product-image" :src="product.imageUrl" :alt="product.name" />
    <div class="product-content">
      <p class="product-category">{{ product.category }}</p>
      <h2>{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-footer">
        <strong>{{
          new Intl.NumberFormat('en-US', { style: 'currency', currency: product.currency }).format(
            product.price,
          )
        }}</strong>
        <span :class="['stock-state', { 'stock-state--out': !product.inStock }]">
          {{ product.inStock ? 'In stock' : 'Out of stock' }}
        </span>
      </div>
      <RouterLink class="button button--secondary" :to="`/products/${product.id}`"
        >View details</RouterLink
      >
    </div>
  </article>
</template>
