<template>
  <div>
    <router-link :to="{ name: 'product', params: { id: product.id } }" class="product-item">
      <div class="product-image image-placeholder aspect-ratio-1">
        Image Placeholder
      </div>
      <h3 class="product-title">{{ product.name }}</h3>
      <p class="product-price">{{ priceDollars }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

// Products Prop
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// Convert price in cents to dollar amount.
// This could be extracted into a composable if needed somewhere else.
const priceDollars = computed(() => `$${props.product.priceCents / 100}`);
</script>

<style scoped>
.product-item {
  display: block;
}

.product-image {
  margin-bottom: 10px;
}

.product-title,
.product-price {
  font-size: 1rem;
  line-height: 1.3rem;
}

.product-title {
  margin-bottom: 4px;
}

.product-price {
  font-size: 1rem;
}

@media (min-width: 768px) {
  .product-image {
    margin-bottom: 8px;
  }

  .product-title,
  .product-price {
    font-size: 0.8rem;
    line-height: 1rem;
  }
}
</style>
