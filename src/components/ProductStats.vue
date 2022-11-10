<template>
  <div class="product-ratings">
    <h2 class="product-ratings-title">What Our Customers Had to Say</h2>
    <RatingStars :grade="totalReviewsAverage" />

    <h4 class="rating-stats">
      Start Rating
      <span>{{ totalReviewsAverage }}</span>
      <span class="separator">|</span>
      <span class="total-reviews">
        {{ totalReviews }} {{ totalReviews > 1 ? "Reviews" : "Review" }}
      </span>
    </h4>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import RatingStars from "@/components/RatingStars";

// Products Prop
const props = defineProps({
  reviews: {
    type: Array,
    required: true,
  },
});

const totalReviews = computed(() => props.reviews.length);

// Computed property for the average rating
const totalReviewsAverage = computed(() => {
  const totalRatingValue = props.reviews
    .map((review) => review.star_rating)
    .reduce((a, b) => a + b);

  // Rounding the result for ease. The real value should be implemented
  // a bit different since we want to account for a had decimal increments.
  return Math.round(totalRatingValue / totalReviews.value);
});
</script>

<style scoped>
.product-ratings {
  margin-bottom: 20px;
}

.product-ratings-title {
  font-size: 1.1rem;
  margin-bottom: 16px;
}

.rating-stats {
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 12px;
}

.separator {
  display: inline-block;
  padding: 5px;
  font-weight: normal;
}

@media (min-width: 768px) {
  .rating-stats {
    font-size: 0.9rem;
    margin-top: 6px;
  }

  .product-ratings {
    margin-bottom: 20px;
  }

  .product-ratings-title {
    font-size: 1.3rem;
  }
}
</style>
