<template>
  <div class="product-ratings">
    <h2>What Our Customers Had to Say</h2>
    <pre><code>
      {{ reviews }}
    </code></pre>
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
.product-ratings {
  margin-bottom: 20px;
}
</style>
