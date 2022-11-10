<template>
  <div class="product-reviews">
    <div v-for="review of reviews" :key="review.id" class="product-review">
      <p>{{ review.author }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Products Prop
defineProps({
  reviews: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.product-reviews {
  margin-bottom: var(--sections-spacing-mobile);
}
</style>
