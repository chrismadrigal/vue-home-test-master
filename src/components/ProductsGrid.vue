<template>
  <div class="products-grid">
    <div
      v-for="product of products"
      :key="product.id"
      class="products-grid-item"
    >
      <ProductGridItem :product="product" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ProductGridItem from "./ProductGridItem.vue";

// Products Prop
defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 0;
  grid-row-gap: 40px;
  padding: 0;
}

/* Single product Styles */

@media (min-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(2, 47.5%);
    grid-column-gap: 5%;
    grid-row-gap: 40px;
  }
}

@media (min-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(4, 22%);
    grid-column-gap: 4%;
  }
}
</style>
