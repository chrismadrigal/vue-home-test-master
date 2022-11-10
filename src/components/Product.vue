<template>
  <div class="container">
    <div v-if="product" class="products-details">
      <div class="product-image image-placeholder aspect-ratio-3-2">
        Image Placeholder
      </div>
      <div class="product-info">
        <h1 class="product-title">{{ product.name }}</h1>
      </div>
    </div>

    <div class="reviews">
      <template v-if="reviews && reviews.length">
        <ProductStats :reviews="reviews" />
        <ProductReviews :reviews="reviews" />
      </template>
      <ReviewsForm :productId="productId" @reviewAdded="onReviewAdded" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import useApi from "@/composables/useApi.js";
import ProductStats from "@/components/ProductStats";
import ProductReviews from "@/components/ProductReviews";
import ReviewsForm from "@/components/ReviewsForm";

// Get the product Id from the route params.
const route = useRoute();
const productId = ref(Number(route.params.id));

// Fetch Single Product data
const { response: product } = await useApi(`/products/${productId.value}`)

// Fetch Reviews Data
const {
  response: reviews,
  reload,
} = await useApi(`/reviews?productId=${productId.value}`)

// Reload review when a new review is added
const onReviewAdded = () => {
  reload();
}
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
