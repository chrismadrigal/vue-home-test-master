<template>
  <div class="container">
    <div v-if="product" class="products-details">
      <div class="product-image image-placeholder aspect-ratio-3-2">
        Image Placeholder
      </div>
      <div class="product-info">
        <h1 class="product-title">Produc Title here</h1>
      </div>
    </div>

    <div class="reviews">
      <h3>ProductStats component here</h3>
      <h3>ProductReviews component here</h3>
      <h3>ReviewsForm component here</h3>

      <hr />
      <p>product data:</p>
      <code>
                <pre>{{ product }}</pre>
            </code>
      <hr />
      <p>reviews data:</p>
      <code>
                <pre>{{ reviews }}</pre>
            </code>
      <hr />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import useApi from "@/composables/useApi.js";

// Get the product Id from the route params.
const route = useRoute();
const productId = ref(Number(route.params.id));

// Fetch Single Product data
const { response: product } = await useApi(`/products/${productId.value}`)

// Fetch Reviews Data
const {
  response: reviews,
} = await useApi(`/reviews?productId=${productId.value}`)


</script>

<style scoped>
.products-details {
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 0;
  grid-row-gap: 40px;
  margin-bottom: 50px;
}

.product-image {
  margin: 0 -20px;
  width: 100vw;
}

.product-title {
  font-size: 1.75rem;
}

.product-info {
  margin-top: 10px;
}

@media (min-width: 768px) {
  .products-details {
    grid-template-columns: repeat(2, 48%);
    grid-column-gap: 4%;
    margin-bottom: 60px;
  }

  .product-image {
    margin: 0;
    width: 100%;
  }
}
</style>
